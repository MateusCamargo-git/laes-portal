-- Public projection: only confirmed memberships of active teams and public photos.
create or replace function private.team_card_members()
returns jsonb language sql stable security definer set search_path='' as $$
 select coalesce(jsonb_agg(to_jsonb(member) order by member.team_id, member.is_captain desc, member.id),'[]'::jsonb)
 from (
  select m.id,m.team_id,p.nick as display_name,m.is_captain,p.avatar_url
  from public.team_members m
  join public.teams t on t.id=m.team_id and t.active
  join public.profiles p on p.id=m.user_id and p.is_public and p.onboarded
   and p.athlete_registered_at is not null
 ) member;
$$;
revoke all on function private.team_card_members() from public;
grant execute on function private.team_card_members() to anon,authenticated;
create or replace function public.get_team_card_members()
returns jsonb language sql stable security invoker set search_path='' as $$select private.team_card_members()$$;
revoke all on function public.get_team_card_members() from public;
grant execute on function public.get_team_card_members() to anon,authenticated;
