-- Confirmed competitive history is private. Public access is a narrow badge projection.
create table private.badge_participations (
 user_id uuid not null references public.profiles(id) on delete cascade,
 tournament_id uuid not null references public.tournaments(id) on delete cascade,
 won boolean not null default false,
 verified_by uuid references auth.users(id) on delete set null,
 verified_at timestamptz not null default now(),
 primary key(user_id,tournament_id)
);
alter table private.badge_participations enable row level security;
revoke all on private.badge_participations from public,anon,authenticated;

create function private.athlete_badges(_nick text default null)
returns jsonb language plpgsql stable security definer set search_path='' as $$
declare athlete public.profiles%rowtype; joined timestamptz; total integer; titles integer; member boolean; captain boolean; beta boolean;
begin
 if nullif(trim(_nick),'') is null then
  select * into athlete from public.profiles where id=auth.uid();
 else select * into athlete from public.profiles where nick=_nick; end if;
 if athlete.id is null then return null; end if;
 if athlete.id is distinct from auth.uid() and not private.is_admin() and not (athlete.is_public and athlete.onboarded) then return null; end if;
 select created_at into joined from auth.users where id=athlete.id;
 beta:=joined >= timestamptz '2026-11-01 00:00:00 America/Sao_Paulo' and joined < timestamptz '2027-03-01 00:00:00 America/Sao_Paulo';
 select count(*),count(*) filter(where won) into total,titles from private.badge_participations where user_id=athlete.id;
 select exists(select 1 from public.team_members m join public.teams t on t.id=m.team_id where m.user_id=athlete.id and t.active),
 exists(select 1 from public.team_members m join public.teams t on t.id=m.team_id where m.user_id=athlete.id and t.active and m.is_captain)
 into member,captain;
 return jsonb_build_object('participations',total,'titles',titles,'earned',
  to_jsonb(array_remove(array[case when beta then 'beta' end,case when member then 'team' end,case when captain then 'captain' end,case when total>=1 then 'debut' end,case when total>=5 then 'warrior' end,case when titles>=1 then 'champion' end,case when athlete.twitch_channel ~ '^[a-z0-9_]{1,25}$' then 'streamer' end],null)));
end $$;
revoke all on function private.athlete_badges(text) from public;
grant execute on function private.athlete_badges(text) to anon,authenticated;
create function public.get_athlete_badges(_nick text default null)
returns jsonb language sql stable security invoker set search_path='' as $$select private.athlete_badges(_nick)$$;
revoke all on function public.get_athlete_badges(text) from public;
grant execute on function public.get_athlete_badges(text) to anon,authenticated;

create function private.manage_athlete_badges(action text,payload jsonb default '{}')
returns jsonb language plpgsql security definer set search_path='' as $$
declare uid uuid; tid uuid; event public.tournaments%rowtype; result jsonb;
begin
 if auth.uid() is null or not private.is_admin() then raise exception 'Somente a administração pode confirmar participações.' using errcode='42501'; end if;
 if action='state' then
  return jsonb_build_object(
   'athletes',coalesce((select jsonb_agg(to_jsonb(x)) from (select id,nick from public.profiles where nick is not null and nick ilike '%'||left(coalesce(payload->>'search',''),60)||'%' order by nick limit 50)x),'[]'::jsonb),
   'tournaments',coalesce((select jsonb_agg(to_jsonb(x)) from (select id,name,starts_at from public.tournaments where starts_at<=now() and status is distinct from 'cancelado' order by starts_at desc limit 200)x),'[]'::jsonb),
   'history',coalesce((select jsonb_agg(jsonb_build_object('tournament_id',b.tournament_id,'name',t.name,'won',b.won,'verified_at',b.verified_at) order by b.verified_at desc) from private.badge_participations b join public.tournaments t on t.id=b.tournament_id where b.user_id=nullif(payload->>'user_id','')::uuid),'[]'::jsonb));
 end if;
 uid:=(payload->>'user_id')::uuid;tid:=(payload->>'tournament_id')::uuid;
 if uid is null or tid is null or not exists(select 1 from public.profiles where id=uid) then raise exception 'Escolha o atleta e o campeonato.'; end if;
 if action='confirm' then
  select * into event from public.tournaments where id=tid;
  if event.id is null or event.starts_at is null or event.starts_at>now() or event.status='cancelado' then raise exception 'Confirme somente campeonatos já disputados, sem cancelamento.'; end if;
  insert into private.badge_participations(user_id,tournament_id,won,verified_by) values(uid,tid,coalesce((payload->>'won')::boolean,false),auth.uid())
  on conflict(user_id,tournament_id) do update set won=excluded.won,verified_by=excluded.verified_by,verified_at=now();
 elsif action='remove' then
  delete from private.badge_participations where user_id=uid and tournament_id=tid;
 else raise exception 'Ação desconhecida.'; end if;
 return jsonb_build_object('ok',true);
end $$;
revoke all on function private.manage_athlete_badges(text,jsonb) from public,anon;
grant execute on function private.manage_athlete_badges(text,jsonb) to authenticated;
create function public.manage_athlete_badges(action text,payload jsonb default '{}')
returns jsonb language sql security invoker set search_path='' as $$select private.manage_athlete_badges(action,payload)$$;
revoke all on function public.manage_athlete_badges(text,jsonb) from public,anon;
grant execute on function public.manage_athlete_badges(text,jsonb) to authenticated;
