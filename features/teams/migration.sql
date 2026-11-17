-- Team ownership, capacity, applications and private contact sharing.
alter table public.teams add column if not exists roster_format text not null default 'padrao';
alter table public.teams add column if not exists starter_slots integer not null default 5 check(starter_slots between 1 and 20);
alter table public.teams add column if not exists reserve_slots integer not null default 2 check(reserve_slots between 0 and 10);
alter table public.profiles_private add column if not exists whatsapp text check(whatsapp is null or whatsapp ~ '^\+[1-9][0-9]{9,14}$');
alter table public.profiles_private add column if not exists share_team_contact boolean not null default false;
alter table public.profiles_private add column if not exists contact_consent_at timestamptz;

create table public.team_roster_formats (
 modality_id uuid not null references public.modalities(id) on delete cascade,
 format text not null check(format in ('padrao','individual','pro_clubs')),
 label text not null,
 starter_slots integer not null check(starter_slots between 1 and 20),
 reserve_slots integer not null check(reserve_slots between 0 and 10),
 primary key(modality_id,format)
);
alter table public.team_roster_formats enable row level security;
grant select on public.team_roster_formats to anon,authenticated;
create policy formats_read on public.team_roster_formats for select to anon,authenticated using(true);
insert into public.team_roster_formats(modality_id,format,label,starter_slots,reserve_slots)
select id,'padrao','Equipe',case slug when 'free-fire' then 4 when 'brawl-stars' then 3 else 5 end,
 case slug when 'brawl-stars' then 1 else 2 end from public.modalities where slug<>'ea-sports-fc';
insert into public.team_roster_formats(modality_id,format,label,starter_slots,reserve_slots)
select id,'individual','Individual · 1×1',1,1 from public.modalities where slug='ea-sports-fc'
union all select id,'pro_clubs','Pro Clubs · 11×11',11,5 from public.modalities where slug='ea-sports-fc';
update public.teams t set roster_format=case when m.slug='ea-sports-fc' then 'pro_clubs' else 'padrao' end
from public.modalities m where m.id=t.modality_id;
update public.teams t set starter_slots=f.starter_slots,reserve_slots=f.reserve_slots,recruitment='aberto'
from public.team_roster_formats f where f.modality_id=t.modality_id and f.format=t.roster_format;

create function private.apply_roster_format() returns trigger language plpgsql security definer set search_path='' as $$
declare preset public.team_roster_formats%rowtype;
begin
 select * into preset from public.team_roster_formats where modality_id=new.modality_id and format=new.roster_format;
 if not found then raise exception 'Escolha um formato disponível para esta modalidade.'; end if;
 new.starter_slots=preset.starter_slots; new.reserve_slots=preset.reserve_slots;
 if exists(select 1 from public.team_members where team_id=new.id and member_type='titular' group by team_id having count(*)>new.starter_slots)
 or exists(select 1 from public.team_members where team_id=new.id and member_type='reserva' group by team_id having count(*)>new.reserve_slots)
 then raise exception 'O elenco atual não cabe nesse formato.'; end if;
 return new;
end $$;
revoke all on function private.apply_roster_format() from public,anon,authenticated;
create trigger set_roster_format before insert or update of modality_id,roster_format,starter_slots,reserve_slots on public.teams
for each row execute function private.apply_roster_format();

create unique index one_captain_per_team on public.team_captains(team_id);
create unique index one_pending_player_invite on public.invites(team_id,user_id) where status='pendente';
create table public.team_join_requests (
 id uuid primary key default gen_random_uuid(),
 team_id uuid not null references public.teams(id) on delete cascade,
 user_id uuid not null references public.profiles(id) on delete cascade,
 kind text not null check(kind in ('captain','player')),
 member_type public.member_type not null default 'titular' check(member_type in ('titular','reserva')),
 role_name text check(char_length(role_name)<=80),
 message text check(char_length(message)<=1000),
 status text not null default 'pending' check(status in ('pending','approved','rejected','cancelled')),
 reviewed_by uuid references public.profiles(id) on delete set null,
 created_at timestamptz not null default now(),reviewed_at timestamptz
);
create unique index one_pending_team_request on public.team_join_requests(team_id,user_id,kind) where status='pending';
create index team_requests_review on public.team_join_requests(team_id,status,created_at desc);
create index team_requests_owner on public.team_join_requests(user_id,created_at desc);
alter table public.team_join_requests enable row level security;
revoke all on public.team_join_requests from anon,authenticated;
grant select on public.team_join_requests to authenticated;
create policy requests_visible on public.team_join_requests for select to authenticated
using(user_id=(select auth.uid()) or (select private.is_admin()) or
 (kind='player' and exists(select 1 from public.team_captains c where c.team_id=team_join_requests.team_id and c.user_id=(select auth.uid()))));

create table private.team_invite_links (
 token_hash text primary key,
 team_id uuid not null references public.teams(id) on delete cascade,
 created_by uuid not null references public.profiles(id) on delete cascade,
 member_type public.member_type not null check(member_type in ('titular','reserva')),
 role_name text check(char_length(role_name)<=80),
 created_at timestamptz not null default now(),expires_at timestamptz not null default now()+interval '7 days',
 used_by uuid references public.profiles(id) on delete set null,used_at timestamptz
);
alter table private.team_invite_links enable row level security;
revoke all on private.team_invite_links from public,anon,authenticated;

create or replace function private.manages_team(tid uuid) returns boolean language sql stable security definer set search_path='' as $$
 select auth.uid() is not null and (private.is_admin() or exists(select 1 from public.team_captains where user_id=auth.uid() and team_id=tid));
$$;

create function private.guard_roster_capacity() returns trigger language plpgsql security definer set search_path='' as $$
declare t public.teams%rowtype; limit_count integer; occupied integer;
begin
 -- Serialize every insertion/move for the team, including legacy invitation RPCs.
 select * into t from public.teams where id=new.team_id for update;
 if not found or not t.active then raise exception 'Esta equipe não está disponível.'; end if;
 if new.user_id is null then
  if tg_op='UPDATE' and old.user_id is not null then return new; end if;
  raise exception 'O integrante precisa ter uma conta no portal.';
 end if;
 if not exists(select 1 from public.profiles where id=new.user_id and length(trim(coalesce(nick,'')))>=2) then raise exception 'Peça ao atleta para completar o nickname em Minha ficha antes de entrar no elenco.'; end if;
 if new.member_type in ('titular','reserva') then
  limit_count=case new.member_type when 'titular' then t.starter_slots else t.reserve_slots end;
  select count(*) into occupied from public.team_members where team_id=new.team_id and member_type=new.member_type and id<>new.id;
  if occupied>=limit_count then raise exception 'Todas as vagas de % desta equipe já foram preenchidas.',new.member_type; end if;
 end if;
 new.is_captain=exists(select 1 from public.team_captains where team_id=new.team_id and user_id=new.user_id);
 return new;
end $$;
revoke all on function private.guard_roster_capacity() from public,anon,authenticated;
create trigger guard_team_capacity before insert or update of team_id,user_id,member_type,is_captain on public.team_members
for each row execute function private.guard_roster_capacity();
create function private.refresh_team_recruitment() returns trigger language plpgsql security definer set search_path='' as $$
begin
 update public.teams t set recruitment=case when
  (select count(*) from public.team_members m where m.team_id=t.id and m.member_type='titular')<t.starter_slots or
  (select count(*) from public.team_members m where m.team_id=t.id and m.member_type='reserva')<t.reserve_slots
  then 'aberto'::public.recruitment_status else 'fechado'::public.recruitment_status end
 where t.id=case when tg_op='DELETE' then old.team_id else new.team_id end;
 if tg_op='UPDATE' and old.team_id<>new.team_id then
  update public.teams set recruitment='aberto' where id=old.team_id;
 end if;
 return null;
end $$;
revoke all on function private.refresh_team_recruitment() from public,anon,authenticated;
create trigger refresh_recruitment after insert or update or delete on public.team_members
for each row execute function private.refresh_team_recruitment();

create view public.team_roster_status with(security_invoker=true) as
select t.id,t.slug,t.name,t.description,t.logo_url,t.modality_id,m.name as modality_name,m.slug as modality_slug,
 t.category,t.roster_format,f.label as format_label,t.starter_slots,t.reserve_slots,t.sort,
 count(tm.id) filter(where tm.member_type='titular')::integer as starters_filled,
 count(tm.id) filter(where tm.member_type='reserva')::integer as reserves_filled,
 greatest(t.starter_slots-count(tm.id) filter(where tm.member_type='titular'),0)::integer as starter_vacancies,
 greatest(t.reserve_slots-count(tm.id) filter(where tm.member_type='reserva'),0)::integer as reserve_vacancies,
 max(tm.display_name) filter(where tm.is_captain) as captain_nick
from public.teams t join public.modalities m on m.id=t.modality_id
join public.team_roster_formats f on f.modality_id=t.modality_id and f.format=t.roster_format
left join public.team_members tm on tm.team_id=t.id
where t.active group by t.id,m.name,m.slug,f.label;
grant select on public.team_roster_status to anon,authenticated;

-- User requested this already-confirmed account as the League administrator.
insert into public.user_roles(user_id,role)
select id,'admin'::public.app_role from auth.users where lower(email)='mateuscpsilva@gmail.com' and email_confirmed_at is not null
on conflict(user_id,role) do nothing;

-- Keep the original individual position while adding positions used in Pro Clubs.
insert into public.modality_roles(modality_id,name,sort)
select m.id,v.name,v.sort from public.modalities m cross join (values
 ('Goleiro',1),('Zagueiro',2),('Lateral',3),('Volante',4),('Meia',5),('Ponta',6),('Atacante',7)) v(name,sort)
where m.slug='ea-sports-fc' and not exists(select 1 from public.modality_roles r where r.modality_id=m.id and r.name=v.name);

create function private.team_portal(action text,payload jsonb default '{}'::jsonb) returns jsonb
language plpgsql security definer set search_path='' as $$
declare uid uuid:=auth.uid(); admin boolean; tid uuid; target uuid; request_id uuid; team public.teams%rowtype;
 req public.team_join_requests%rowtype; invitation public.invites%rowtype; link private.team_invite_links%rowtype;
 kind text; slot public.member_type; nickname text; result jsonb; token text; phone text; raw_phone text;
 picked_role text; decision boolean; game jsonb; roles text[]; shared boolean;
begin
 if uid is null or not exists(select 1 from auth.users where id=uid and email_confirmed_at is not null) then raise exception 'Entre com sua conta e confirme seu e-mail.'; end if;
 if jsonb_typeof(payload)<>'object' or octet_length(payload::text)>16384 then raise exception 'Dados inválidos.'; end if;
 admin=private.is_admin();
 if action='state' then
  return jsonb_build_object(
   'is_admin',admin,
   'nick',(select nick from public.profiles where id=uid),
   'captain_teams',coalesce((select jsonb_agg(team_id) from public.team_captains where user_id=uid),'[]'::jsonb),
   'memberships',coalesce((select jsonb_agg(jsonb_build_object('id',tm.id,'team_id',tm.team_id,'name',t.name,'member_type',tm.member_type,'role_name',tm.role_name,'is_captain',tm.is_captain)) from public.team_members tm join public.teams t on t.id=tm.team_id where tm.user_id=uid),'[]'::jsonb),
   'requests',coalesce((select jsonb_agg(to_jsonb(x) order by x.created_at desc) from (select r.id,r.team_id,t.name,r.kind,r.member_type,r.role_name,r.message,r.status,r.created_at from public.team_join_requests r join public.teams t on t.id=r.team_id where r.user_id=uid order by r.created_at desc limit 50)x),'[]'::jsonb),
   'invites',coalesce((select jsonb_agg(to_jsonb(x)) from (select i.id,i.team_id,t.name,i.member_type,i.role_name,i.message from public.invites i join public.teams t on t.id=i.team_id where i.user_id=uid and i.status='pendente')x),'[]'::jsonb),
   'contact',coalesce((select jsonb_build_object('whatsapp',whatsapp,'shared',share_team_contact) from public.profiles_private where user_id=uid),'{}'::jsonb),
   'games',coalesce((select jsonb_agg(jsonb_build_object('modality_id',g.modality_id,'roles',g.roles,'rank',g.rank,'game_nick',g.game_nick)) from public.athlete_games g where g.user_id=uid),'[]'::jsonb));
 elsif action='save_contact' then
  if payload ? 'nick' then
   nickname=trim(payload->>'nick');
   if nickname is null or length(nickname)<2 or length(nickname)>40 then raise exception 'Escolha um nickname entre 2 e 40 caracteres.'; end if;
   update public.profiles set nick=nickname where id=uid;
  end if;
  raw_phone=trim(coalesce(payload->>'whatsapp',''));
  if char_length(raw_phone)>30 or raw_phone !~ '^[+0-9 ()-]*$' then raise exception 'Confira o número de WhatsApp.'; end if;
  phone=regexp_replace(raw_phone,'[^0-9]','','g');
  if length(phone) in (10,11) and left(raw_phone,1)<>'+' then phone='55'||phone; end if;
  if phone<>'' and phone !~ '^[1-9][0-9]{9,14}$' then raise exception 'Informe o WhatsApp com DDD e código do país.'; end if;
  shared=coalesce((payload->>'shared')::boolean,false) and phone<>'';
  insert into public.profiles_private(user_id,whatsapp,share_team_contact,contact_consent_at)
  values(uid,case when phone='' then null else '+'||phone end,shared,case when shared then now() else null end)
  on conflict(user_id) do update set whatsapp=excluded.whatsapp,share_team_contact=excluded.share_team_contact,contact_consent_at=excluded.contact_consent_at;
  return jsonb_build_object('saved',true);
 elsif action='save_positions' then
  if jsonb_typeof(payload->'games')<>'array' or jsonb_array_length(payload->'games')>8 then raise exception 'Escolha até oito modalidades.'; end if;
  for game in select value from jsonb_array_elements(payload->'games') loop
   if jsonb_typeof(game->'roles')<>'array' or jsonb_array_length(game->'roles')>12 then raise exception 'Confira suas posições.'; end if;
   tid=(game->>'modality_id')::uuid;
   if not exists(select 1 from public.modalities where id=tid and active) then raise exception 'Modalidade indisponível.'; end if;
   select coalesce(array_agg(distinct value),'{}'::text[]) into roles from jsonb_array_elements_text(game->'roles');
   if exists(select 1 from unnest(roles) role where not exists(select 1 from public.modality_roles where modality_id=tid and name=role)) then raise exception 'Escolha as posições disponíveis para a modalidade.'; end if;
   insert into public.athlete_games(user_id,modality_id,roles) values(uid,tid,roles)
   on conflict(user_id,modality_id) do update set roles=excluded.roles;
  end loop;
  delete from public.athlete_games where user_id=uid and modality_id not in
   (select (value->>'modality_id')::uuid from jsonb_array_elements(payload->'games'));
  return jsonb_build_object('saved',true);
 elsif action='create_team' then
  if not admin then raise exception 'Apenas a administração cria equipes.'; end if;
  if length(trim(coalesce(payload->>'name','')))<2 or length(payload->>'name')>80 or coalesce(payload->>'slug','')!~ '^[a-z0-9]+(-[a-z0-9]+)*$' or length(payload->>'slug')>100 then raise exception 'Confira nome e endereço da equipe.'; end if;
  insert into public.teams(name,slug,modality_id,category,description,roster_format,recruitment)
  values(trim(payload->>'name'),payload->>'slug',(payload->>'modality_id')::uuid,left(payload->>'category',60),left(payload->>'description',2000),payload->>'format','aberto') returning id into tid;
  return jsonb_build_object('team_id',tid);
 elsif action='request_join' then
  if not exists(select 1 from public.profiles where id=uid and length(trim(coalesce(nick,'')))>=2) then raise exception 'Complete seu nickname em Minha ficha antes de pedir uma vaga.'; end if;
  tid=(payload->>'team_id')::uuid;kind=payload->>'kind';slot=coalesce(payload->>'member_type','titular')::public.member_type;
  if kind not in ('captain','player') or slot not in ('titular','reserva') then raise exception 'Escolha o tipo de participação.'; end if;
  select * into team from public.teams where id=tid for update;
  if not found or not team.active then raise exception 'Equipe indisponível.'; end if;
  if kind='captain' and exists(select 1 from public.team_captains where team_id=tid) then raise exception 'Esta equipe já tem capitão.'; end if;
  if exists(select 1 from public.team_members where team_id=tid and user_id=uid) then raise exception 'Você já faz parte desta equipe.'; end if;
  if (select count(*) from public.team_members where team_id=tid and member_type=slot)>=(case slot when 'titular' then team.starter_slots else team.reserve_slots end) then raise exception 'Não há vaga nesse tipo de elenco agora.'; end if;
  if length(coalesce(payload->>'message',''))>1000 or length(coalesce(payload->>'role_name',''))>80 then raise exception 'Mensagem ou posição muito longa.'; end if;
  insert into public.team_join_requests(team_id,user_id,kind,member_type,role_name,message)
  values(tid,uid,kind,slot,nullif(trim(payload->>'role_name'),''),nullif(trim(payload->>'message'),''));
  return jsonb_build_object('requested',true);
 elsif action='cancel_request' then
  update public.team_join_requests set status='cancelled',reviewed_at=now() where id=(payload->>'id')::uuid and user_id=uid and status='pending';
  if not found then raise exception 'Pedido não encontrado.'; end if;return '{}'::jsonb;
 elsif action='review_requests' then
  return coalesce((select jsonb_agg(to_jsonb(x) order by x.created_at) from (select r.id,r.team_id,t.name as team_name,r.user_id,coalesce(p.nick,'Atleta LAES') as nick,r.kind,r.member_type,r.role_name,r.message,r.created_at,
   case when pp.share_team_contact then pp.whatsapp end as whatsapp,
   coalesce((select jsonb_agg(jsonb_build_object('name',m.name,'roles',g.roles)) from public.athlete_games g join public.modalities m on m.id=g.modality_id where g.user_id=r.user_id),'[]'::jsonb) as games
   from public.team_join_requests r join public.teams t on t.id=r.team_id join public.profiles p on p.id=r.user_id left join public.profiles_private pp on pp.user_id=r.user_id
   where r.status='pending' and (admin or (r.kind='player' and exists(select 1 from public.team_captains c where c.user_id=uid and c.team_id=r.team_id))) order by r.created_at limit 100)x),'[]'::jsonb);
 elsif action='decide_request' then
  select * into req from public.team_join_requests where id=(payload->>'id')::uuid for update;
  if not found or req.status<>'pending' then raise exception 'Este pedido já foi resolvido.'; end if;
  tid=req.team_id;
  if (req.kind='captain' and not admin) or (req.kind='player' and not private.manages_team(tid)) then raise exception 'Você não pode aprovar esse pedido.'; end if;
  select * into team from public.teams where id=tid for update;
  decision=coalesce((payload->>'accept')::boolean,false);
  if decision then
   if req.kind='captain' then
    if exists(select 1 from public.team_captains where team_id=tid) then raise exception 'A equipe já possui capitão.'; end if;
    insert into public.team_captains(user_id,team_id) values(req.user_id,tid);
   end if;
   select coalesce(nick,'Atleta LAES') into nickname from public.profiles where id=req.user_id;
   insert into public.team_members(team_id,user_id,display_name,member_type,role_name,is_captain)
   values(tid,req.user_id,nickname,req.member_type,req.role_name,req.kind='captain') on conflict(team_id,user_id) do nothing;
  end if;
  update public.team_join_requests set status=case when decision then 'approved' else 'rejected' end,reviewed_by=uid,reviewed_at=now() where id=req.id;
  return jsonb_build_object('approved',decision);
 elsif action='roster' then
  tid=(payload->>'team_id')::uuid;
  if not private.manages_team(tid) then raise exception 'Você não gerencia esta equipe.'; end if;
  return coalesce((select jsonb_agg(to_jsonb(x) order by x.is_captain desc,x.member_type,x.nick) from
   (select tm.id,tm.user_id,tm.display_name as nick,tm.member_type,tm.role_name,tm.is_captain,
    case when pp.share_team_contact then pp.whatsapp end as whatsapp,
    coalesce((select jsonb_agg(jsonb_build_object('name',m.name,'roles',g.roles,'rank',g.rank)) from public.athlete_games g join public.modalities m on m.id=g.modality_id where g.user_id=tm.user_id),'[]'::jsonb) as games
    from public.team_members tm left join public.profiles_private pp on pp.user_id=tm.user_id where tm.team_id=tid)x),'[]'::jsonb);
 elsif action in ('remove_member','change_slot') then
  select team_id,user_id into tid,target from public.team_members where id=(payload->>'id')::uuid for update;
  if tid is null or not private.manages_team(tid) then raise exception 'Você não gerencia esse elenco.'; end if;
  if exists(select 1 from public.team_captains where team_id=tid and user_id=target) then raise exception 'A capitania só pode ser alterada pela administração.'; end if;
  if action='remove_member' then delete from public.team_members where id=(payload->>'id')::uuid;
  else
   slot=(payload->>'member_type')::public.member_type;
   if slot not in ('titular','reserva') then raise exception 'Escolha titular ou reserva.'; end if;
   update public.team_members set member_type=slot where id=(payload->>'id')::uuid;
  end if;return '{}'::jsonb;
 elsif action='revoke_captain' then
  if not admin then raise exception 'Apenas a administração altera a capitania.'; end if;
  tid=(payload->>'team_id')::uuid;
  delete from public.team_captains where team_id=tid;
  update public.team_members set is_captain=false where team_id=tid and is_captain;
  return '{}'::jsonb;
 elsif action='directory' then
  return coalesce((select jsonb_agg(to_jsonb(x)) from (select p.id,coalesce(p.nick,'Atleta LAES') as nick,p.avatar_url,
   exists(select 1 from private.community_presence pr where pr.user_id=p.id and pr.seen_at>now()-interval '90 seconds') as online,
   coalesce((select jsonb_agg(jsonb_build_object('name',m.name,'modality_id',m.id,'roles',g.roles)) from public.athlete_games g join public.modalities m on m.id=g.modality_id where g.user_id=p.id),'[]'::jsonb) as games
   from public.profiles p where p.is_public and coalesce(p.nick,'') ilike '%'||left(coalesce(payload->>'search',''),80)||'%'
   and (coalesce(payload->>'modality_id','')='' or exists(select 1 from public.athlete_games g where g.user_id=p.id and g.modality_id::text=payload->>'modality_id'))
   and (not coalesce((payload->>'online_only')::boolean,false) or exists(select 1 from private.community_presence pr where pr.user_id=p.id and pr.seen_at>now()-interval '90 seconds'))
   order by p.nick,p.id limit 30 offset least(greatest(coalesce((payload->>'offset')::integer,0),0),100000))x),'[]'::jsonb);
 elsif action in ('invite_player','create_link') then
  tid=(payload->>'team_id')::uuid;
  if not private.manages_team(tid) then raise exception 'Você não gerencia esta equipe.'; end if;
  select * into team from public.teams where id=tid and active for update;
  if not found then raise exception 'Equipe indisponível.'; end if;
  slot=coalesce(payload->>'member_type','titular')::public.member_type;
  if slot not in ('titular','reserva') then raise exception 'Escolha titular ou reserva.'; end if;
  if (select count(*) from public.team_members where team_id=tid and member_type=slot)>=(case slot when 'titular' then team.starter_slots else team.reserve_slots end) then raise exception 'Não há vagas nesse tipo de elenco.'; end if;
  picked_role=nullif(left(trim(payload->>'role_name'),80),'');
  if action='invite_player' then
   target=(payload->>'user_id')::uuid;
   if exists(select 1 from public.team_members where team_id=tid and user_id=target) then raise exception 'Esse atleta já faz parte da equipe.'; end if;
   if exists(select 1 from public.invites where team_id=tid and user_id=target and status='pendente') then raise exception 'Esse atleta já tem um convite pendente.'; end if;
   insert into public.invites(team_id,user_id,member_type,role_name,created_by,message) values(tid,target,slot,picked_role,uid,'Você recebeu um convite para jogar pela equipe.');
   return jsonb_build_object('invited',true);
  else
   token=encode(extensions.gen_random_bytes(32),'hex');
   insert into private.team_invite_links(token_hash,team_id,created_by,member_type,role_name)
   values(encode(extensions.digest(token,'sha256'),'hex'),tid,uid,slot,picked_role);
   return jsonb_build_object('token',token,'team_name',team.name,'expires_at',now()+interval '7 days');
  end if;
 elsif action in ('inspect_link','accept_link') then
  token=payload->>'token';
  if token is null or token !~ '^[a-f0-9]{64}$' then raise exception 'Convite inválido.'; end if;
  select * into link from private.team_invite_links where token_hash=encode(extensions.digest(token,'sha256'),'hex') for update;
  if not found or link.used_at is not null or link.expires_at<=now() then raise exception 'Convite inválido, já utilizado ou expirado.'; end if;
  if not exists(select 1 from public.profiles where id=uid) then raise exception 'Complete seu cadastro.'; end if;
  select * into team from public.teams where id=link.team_id for update;
  if not team.active or not (exists(select 1 from public.team_captains where team_id=team.id and user_id=link.created_by) or exists(select 1 from public.user_roles where user_id=link.created_by and role='admin')) then raise exception 'Este convite não está mais disponível.'; end if;
  if action='inspect_link' then return jsonb_build_object('team_id',team.id,'team_name',team.name,'member_type',link.member_type,'role_name',link.role_name,'expires_at',link.expires_at); end if;
  if exists(select 1 from public.team_members where team_id=team.id and user_id=uid) then raise exception 'Você já faz parte desta equipe.'; end if;
  select coalesce(nick,'Atleta LAES') into nickname from public.profiles where id=uid;
  insert into public.team_members(team_id,user_id,display_name,member_type,role_name) values(team.id,uid,nickname,link.member_type,link.role_name);
  update private.team_invite_links set used_by=uid,used_at=now() where token_hash=link.token_hash;
  return jsonb_build_object('joined',true);
 elsif action='respond_invite' then
  perform private.application_action('invite',(payload->>'id')::uuid,coalesce((payload->>'accept')::boolean,false));
  return '{}'::jsonb;
 end if;
 raise exception 'Ação indisponível.';
end $$;
revoke all on function private.team_portal(text,jsonb) from public,anon;
grant usage on schema private to authenticated;
grant execute on function private.team_portal(text,jsonb) to authenticated;
create function public.team_portal(action text,payload jsonb default '{}'::jsonb) returns jsonb
language sql security invoker set search_path='' as $$select private.team_portal(action,payload)$$;
revoke all on function public.team_portal(text,jsonb) from public,anon;
grant execute on function public.team_portal(text,jsonb) to authenticated;

-- Existing invitation buttons use this RPC too; revoking a captain invalidates
-- their outstanding invitations, while capacity is enforced by the row trigger.
create or replace function private.application_action(action text,_id uuid,_accept boolean default false) returns void
language plpgsql security definer set search_path='' as $$
declare uid uuid:=auth.uid(); a public.applications%rowtype; i public.invites%rowtype; o public.openings%rowtype;
begin
 if uid is null then raise exception 'Entre na sua conta.';end if;
 perform pg_advisory_xact_lock(hashtext(uid::text));
 if action in ('cancel','confirm') then
  select * into a from public.applications where id=_id and user_id=uid for update;
  if not found then raise exception 'Candidatura não encontrada.';end if;
  if action='cancel' then
   if a.status not in ('enviada','em_analise','aprovado') then raise exception 'Essa candidatura não pode ser cancelada.';end if;
   update public.applications set status='cancelado' where id=a.id;
  else
   if a.status<>'aprovado' then raise exception 'A candidatura precisa estar aprovada.';end if;
   select * into o from public.openings where id=a.opening_id;
   if not found then raise exception 'Vaga não encontrada.';end if;
   insert into public.team_members(team_id,user_id,display_name,member_type,role_name)
    values(o.team_id,uid,coalesce((select nick from public.profiles where id=uid),'Atleta LAES'),o.member_type,o.role_name)
    on conflict(team_id,user_id) do nothing;
   update public.applications set status='confirmado' where id=a.id;
  end if;
 elsif action='invite' then
  select * into i from public.invites where id=_id and user_id=uid for update;
  if not found or i.status<>'pendente' then raise exception 'Convite inválido.';end if;
  if _accept then
   if not (exists(select 1 from public.team_captains c where c.team_id=i.team_id and c.user_id=i.created_by)
    or exists(select 1 from public.user_roles r where r.user_id=i.created_by and r.role='admin'))
   then raise exception 'Este convite não está mais disponível.'; end if;
   insert into public.team_members(team_id,user_id,display_name,member_type,role_name)
    values(i.team_id,uid,coalesce((select nick from public.profiles where id=uid),'Atleta LAES'),i.member_type,i.role_name)
    on conflict(team_id,user_id) do nothing;
  end if;
  update public.invites set status=case when _accept then 'aceito'::public.invite_status else 'recusado'::public.invite_status end where id=i.id;
 else raise exception 'Ação inválida.';
 end if;
end $$;
