create table private.badge_spotlights(
 user_id uuid primary key references public.profiles(id) on delete cascade,
 codes text[] not null default '{}',
 updated_at timestamptz not null default now(),
 check(cardinality(codes)<=3)
);
alter table private.badge_spotlights enable row level security;
revoke all on private.badge_spotlights from public,anon,authenticated;

create function private.badge_details(_nick text default null)
returns jsonb language plpgsql stable security definer set search_path='' as $$
declare base jsonb; uid uuid; chosen text[]; custom boolean;
begin
 base:=private.athlete_badges(_nick);if base is null then return null;end if;
 if nullif(trim(_nick),'') is null then uid:=auth.uid();else select id into uid from public.profiles where nick=_nick;end if;
 select codes into chosen from private.badge_spotlights where user_id=uid;custom:=found;
 if not custom then select coalesce(array_agg(x.code order by x.n),'{}') into chosen from (select value as code,n from jsonb_array_elements_text(base->'earned') with ordinality a(value,n) limit 3)x;end if;
 select coalesce(array_agg(code order by n),'{}') into chosen from unnest(chosen) with ordinality a(code,n) where base->'earned' ? code;
 return base||jsonb_build_object('spotlight',to_jsonb(chosen),'customized',custom);
end $$;
revoke all on function private.badge_details(text) from public;
grant execute on function private.badge_details(text) to anon,authenticated;
create or replace function public.get_athlete_badges(_nick text default null)
returns jsonb language sql stable security invoker set search_path='' as $$select private.badge_details(_nick)$$;

create function private.save_badge_spotlights(codes text[])
returns jsonb language plpgsql security definer set search_path='' as $$
declare uid uuid:=auth.uid(); earned jsonb;
begin
 if uid is null then raise exception 'Entre na sua conta para escolher suas insígnias.' using errcode='42501';end if;
 earned:=private.athlete_badges(null);
 if earned is null then raise exception 'Perfil não encontrado.';end if;
 if codes is null or cardinality(codes)>3 or array_ndims(codes)>1
 or exists(select 1 from unnest(codes)c where c is null or not(earned->'earned' ? c))
 or cardinality(codes)<>(select count(distinct c) from unnest(codes)c) then
  raise exception 'Escolha até três insígnias diferentes que você já conquistou.';
 end if;
 insert into private.badge_spotlights(user_id,codes) values(uid,codes)
 on conflict(user_id) do update set codes=excluded.codes,updated_at=now();
 return private.badge_details(null);
end $$;
revoke all on function private.save_badge_spotlights(text[]) from public,anon;
grant execute on function private.save_badge_spotlights(text[]) to authenticated;
create function public.set_badge_spotlights(codes text[])
returns jsonb language sql security invoker set search_path='' as $$select private.save_badge_spotlights(codes)$$;
revoke all on function public.set_badge_spotlights(text[]) from public,anon;
grant execute on function public.set_badge_spotlights(text[]) to authenticated;

create function private.public_badge_spotlights(nicks text[])
returns jsonb language plpgsql stable security definer set search_path='' as $$
declare result jsonb;
begin
 if nicks is null or cardinality(nicks)>40 then raise exception 'Consulte até 40 perfis por vez.';end if;
 select coalesce(jsonb_object_agg(p.nick,private.badge_details(p.nick)->'spotlight'),'{}') into result
 from public.profiles p where p.nick=any(nicks) and p.is_public and p.onboarded;
 return result;
end $$;
revoke all on function private.public_badge_spotlights(text[]) from public;
grant execute on function private.public_badge_spotlights(text[]) to anon,authenticated;
create function public.get_badge_spotlights(nicks text[])
returns jsonb language sql stable security invoker set search_path='' as $$select private.public_badge_spotlights(nicks)$$;
revoke all on function public.get_badge_spotlights(text[]) from public;
grant execute on function public.get_badge_spotlights(text[]) to anon,authenticated;

create function private.athlete_profile_details(_nick text)
returns jsonb language sql stable security definer set search_path='' as $$
 select jsonb_build_object('nick',p.nick,'avatar_url',p.avatar_url,'bio',p.bio,'city',p.city,'state',p.state,'availability',p.availability,
 'instagram',p.instagram,'twitch_channel',p.twitch_channel,'badges',private.badge_details(p.nick),
 'games',coalesce((select jsonb_agg(jsonb_build_object('name',m.name,'roles',g.roles,'rank',g.rank,'game_nick',g.game_nick) order by m.sort,m.name) from public.athlete_games g join public.modalities m on m.id=g.modality_id where g.user_id=p.id),'[]'),
 'teams',coalesce((select jsonb_agg(jsonb_build_object('name',t.name,'slug',t.slug,'member_type',m.member_type,'role_name',m.role_name,'is_captain',m.is_captain) order by t.sort,t.name) from public.team_members m join public.teams t on t.id=m.team_id and t.active where m.user_id=p.id),'[]'))
 from public.profiles p where p.is_public and p.onboarded and lower(p.nick)=lower(_nick) and length(_nick)<=40 limit 1;
$$;
revoke all on function private.athlete_profile_details(text) from public;
grant execute on function private.athlete_profile_details(text) to anon,authenticated;
create function public.get_athlete_profile(_nick text)
returns jsonb language sql stable security invoker set search_path='' as $$select private.athlete_profile_details(_nick)$$;
revoke all on function public.get_athlete_profile(text) from public;
grant execute on function public.get_athlete_profile(text) to anon,authenticated;
