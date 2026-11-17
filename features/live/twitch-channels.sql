alter table public.profiles add column if not exists twitch_channel text;
alter table public.profiles add constraint profiles_twitch_channel_format check (twitch_channel is null or twitch_channel ~ '^[a-z0-9_]{1,25}$');
create unique index profiles_twitch_channel_unique on public.profiles(twitch_channel) where twitch_channel is not null;

create or replace function private.laes_streamer_channels()
returns jsonb language sql stable security definer set search_path='' as $$
 select coalesce(jsonb_agg(to_jsonb(channels)),'[]'::jsonb) from (
  select p.nick,p.avatar_url,p.twitch_channel as channel_login from public.profiles p
  where p.is_public and p.onboarded and p.athlete_registered_at is not null
  and nullif(trim(p.nick),'') is not null and p.twitch_channel is not null
  order by p.id limit 500
 ) channels;
$$;
revoke all on function private.laes_streamer_channels() from public;
grant execute on function private.laes_streamer_channels() to anon,authenticated;
create or replace function public.get_laes_streamer_channels()
returns jsonb language sql stable security invoker set search_path='' as $$select private.laes_streamer_channels()$$;
revoke all on function public.get_laes_streamer_channels() from public;
grant execute on function public.get_laes_streamer_channels() to anon,authenticated;

create or replace function public.save_athlete_registration(input jsonb)
returns jsonb language plpgsql security invoker set search_path='' as $$
declare uid uuid:=auth.uid(); p public.profiles%rowtype; game jsonb; mid uuid; selected uuid[]; picked text[]; raw_phone text; phone text; avatar text; twitch text;
begin
 if uid is null or coalesce((auth.jwt()->>'is_anonymous')::boolean,false) then raise exception 'Entre com sua conta para continuar.'; end if;
 if jsonb_typeof(input) is distinct from 'object' or octet_length(input::text)>32768 then raise exception 'Dados inválidos.'; end if;
 select * into p from public.profiles where id=uid for update;
 if not found then raise exception 'Seu perfil não carregou. Entre novamente.'; end if;
 if char_length(trim(coalesce(input->>'full_name',''))) not between 3 and 120 then raise exception 'Preencha seu nome completo.'; end if;
 if char_length(trim(coalesce(input->>'nick',''))) not between 2 and 40 then raise exception 'Escolha um nick entre 2 e 40 caracteres.'; end if;
 if char_length(trim(coalesce(input->>'city',''))) not between 2 and 100 or coalesce(input->>'state','') not in ('AC','AL','AP','AM','BA','CE','DF','ES','GO','MA','MT','MS','MG','PA','PB','PR','PE','PI','RJ','RN','RS','RO','RR','SC','SP','SE','TO') then raise exception 'Preencha sua cidade e selecione seu estado.'; end if;
 if char_length(coalesce(input->>'bio',''))>1000 or char_length(coalesce(input->>'availability',''))>200 or char_length(coalesce(input->>'instagram',''))>100 then raise exception 'Revise o tamanho da apresentação e dos contatos.'; end if;
 if jsonb_typeof(input->'games') is distinct from 'array' then raise exception 'Escolha suas modalidades.'; end if;
 if jsonb_array_length(input->'games') not between 1 and 8 then raise exception 'Escolha entre uma e oito modalidades.'; end if;
 for game in select value from jsonb_array_elements(input->'games') loop
  if jsonb_typeof(game) is distinct from 'object' or jsonb_typeof(game->'roles') is distinct from 'array' then raise exception 'Confira as modalidades e posições.'; end if;
  mid=(game->>'modality_id')::uuid;
  if mid is null or not exists(select 1 from public.modalities m where m.id=mid and m.active) then raise exception 'Escolha modalidades disponíveis.'; end if;
  if mid=any(coalesce(selected,'{}'::uuid[])) then raise exception 'Modalidade repetida.'; end if;
  selected=array_append(selected,mid);
  if jsonb_array_length(game->'roles')>20 then raise exception 'Confira as posições selecionadas.'; end if;
  select coalesce(array_agg(distinct value),'{}'::text[]) into picked from jsonb_array_elements_text(game->'roles');
  if exists(select 1 from public.modality_roles r where r.modality_id=mid) and cardinality(picked)=0 then raise exception 'Escolha pelo menos uma posição por modalidade.'; end if;
  if exists(select 1 from unnest(picked) v where not exists(select 1 from public.modality_roles r where r.modality_id=mid and r.name=v)) then raise exception 'Escolha posições disponíveis para a modalidade.'; end if;
  if char_length(coalesce(game->>'rank',''))>80 or char_length(coalesce(game->>'game_nick',''))>80 then raise exception 'Confira seu elo e nick no jogo.'; end if;
 end loop;
 raw_phone=trim(coalesce(input->>'whatsapp',''));
 if length(raw_phone)>30 or raw_phone !~ '^[+0-9 ()-]*$' then raise exception 'Confira seu WhatsApp.'; end if;
 phone=regexp_replace(raw_phone,'[^0-9]','','g');
 if length(phone) in (10,11) and left(raw_phone,1)<>'+' then phone='55'||phone; end if;
 if phone<>'' and phone !~ '^[1-9][0-9]{9,14}$' then raise exception 'Informe seu WhatsApp com DDD e código do país.'; end if;
 avatar=nullif(input->>'avatar_url','');
 if avatar is not null and avatar is distinct from p.avatar_url and avatar not like 'storage://media/avatars/'||uid::text||'/%' then raise exception 'Envie sua foto pelo cadastro.'; end if;
 if input ? 'twitch_channel' then
  twitch=lower(trim(coalesce(input->>'twitch_channel','')));
  twitch=regexp_replace(twitch,'^(https?://)?(www\.)?twitch\.tv/','');
  twitch=regexp_replace(twitch,'^@','');twitch=rtrim(twitch,'/');
  if twitch='' then twitch=null; end if;
  if twitch is not null and twitch !~ '^[a-z0-9_]{1,25}$' then raise exception 'Informe o nome do seu canal Twitch ou o link twitch.tv/seucanal.'; end if;
 else twitch=p.twitch_channel; end if;
 insert into public.profiles_private(user_id,full_name,whatsapp,share_team_contact,contact_consent_at)
 values(uid,trim(input->>'full_name'),case when phone<>'' then '+'||phone end,phone<>'' and coalesce((input->>'shared')::boolean,false),case when phone<>'' and coalesce((input->>'shared')::boolean,false) then now() end)
 on conflict(user_id) do update set full_name=excluded.full_name,whatsapp=excluded.whatsapp,share_team_contact=excluded.share_team_contact,contact_consent_at=excluded.contact_consent_at;
 for game in select value from jsonb_array_elements(input->'games') loop
  select coalesce(array_agg(distinct value),'{}'::text[]) into picked from jsonb_array_elements_text(game->'roles');
  insert into public.athlete_games(user_id,modality_id,roles,rank,game_nick) values(uid,(game->>'modality_id')::uuid,picked,nullif(trim(game->>'rank'),''),nullif(trim(game->>'game_nick'),''))
  on conflict(user_id,modality_id) do update set roles=excluded.roles,rank=excluded.rank,game_nick=excluded.game_nick;
 end loop;
 delete from public.athlete_games where user_id=uid and not(modality_id=any(selected));
 update public.profiles set nick=trim(input->>'nick'),city=trim(input->>'city'),state=input->>'state',bio=nullif(trim(input->>'bio'),''),availability=nullif(trim(input->>'availability'),''),instagram=nullif(trim(input->>'instagram'),''),avatar_url=avatar,twitch_channel=twitch,
 wants_compete=coalesce((input->>'wants_compete')::boolean,false),wants_captain=coalesce((input->>'wants_captain')::boolean,false),wants_coach=coalesce((input->>'wants_coach')::boolean,false),wants_volunteer=coalesce((input->>'wants_volunteer')::boolean,false),onboarded=true,is_public=true,athlete_registered_at=coalesce(athlete_registered_at,now()) where id=uid;
 return jsonb_build_object('completed',true);
end $$;
revoke all on function public.save_athlete_registration(jsonb) from public,anon;
grant execute on function public.save_athlete_registration(jsonb) to authenticated;

