-- Preserve all existing criteria and public visibility; derive Twitch badge from the normalized channel.
create or replace function private.athlete_badges(_nick text default null)
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
