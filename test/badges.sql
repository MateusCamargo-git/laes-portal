begin;
create temporary table badge_test_users(kind text,id uuid,nick text);
insert into badge_test_users select kind,gen_random_uuid(),'Badge-'||kind||'-'||left(gen_random_uuid()::text,8) from unnest(array['before','start','last','after','private'])kind;
insert into auth.users(id,aud,role,email,email_confirmed_at,raw_app_meta_data,raw_user_meta_data,created_at,updated_at)
select id,'authenticated','authenticated','badge-test-'||id||'@example.invalid',now(),'{}','{}',case kind when 'before' then '2026-11-01T02:59:59Z'::timestamptz when 'start' then '2026-11-01T03:00:00Z' when 'last' then '2027-03-01T02:59:59Z' when 'after' then '2027-03-01T03:00:00Z' else now() end,now() from badge_test_users;
insert into public.profiles_private(user_id,full_name) select id,'Badge Test Athlete' from badge_test_users on conflict(user_id) do update set full_name=excluded.full_name;
insert into public.athlete_games(user_id,modality_id,roles) select id,(select id from public.modalities where active order by sort limit 1),array['Teste'] from badge_test_users;
update public.profiles p set city='Alfenas',state='MG',nick=x.nick,is_public=x.kind<>'private',onboarded=x.kind<>'private',athlete_registered_at=case when x.kind<>'private' then now() end from badge_test_users x where p.id=x.id;
create temporary table badge_test_admin as select user_id as id from public.user_roles where role='admin' limit 1;
create temporary table badge_test_events(id uuid,n integer);
with added as(insert into public.tournaments(name,modality_id,starts_at) select 'Badge fixture '||n,(select id from public.modalities where active order by sort limit 1),case when n=6 then now()+interval '1 day' else now()-interval '1 day' end from generate_series(1,6)n returning id,name) insert into badge_test_events select id,right(name,1)::int from added;
create temporary table badge_test_team(id uuid);
with added as(insert into public.teams(name,slug,modality_id) values('Badge fixture','badge-fixture-'||gen_random_uuid(),(select id from public.modalities where active order by sort limit 1)) returning id) insert into badge_test_team select id from added;
insert into public.team_members(team_id,user_id,display_name,member_type,is_captain) select t.id,u.id,u.nick,'titular',true from badge_test_team t,badge_test_users u where u.kind='start';
grant select on badge_test_users,badge_test_events,badge_test_team,badge_test_admin to authenticated,anon;
set local role anon;
do $$declare x record; b jsonb;begin
 for x in select * from badge_test_users where kind in ('before','start','last','after') loop
  b:=public.get_athlete_badges(x.nick);
  if (b->'earned' ? 'beta') is distinct from (x.kind in ('start','last')) then raise exception 'Beta boundary failed: %',x.kind;end if;
 end loop;
 if public.get_athlete_badges((select nick from badge_test_users where kind='private')) is not null then raise exception 'Private profile leaked';end if;
 if public.get_athlete_badges() is not null then raise exception 'Anonymous self lookup leaked';end if;
 b:=public.get_athlete_badges((select nick from badge_test_users where kind='start'));
 if not (b->'earned' ?& array['team','captain']) then raise exception 'Team badges missing';end if;
 if b::text like '%example.invalid%' or b ? 'user_id' then raise exception 'Private data leaked';end if;
end $$;
reset role;
set local role authenticated;
do $$declare uid uuid; adminid uuid; tid uuid; b jsonb;blocked boolean;evt record;begin
 select id into uid from badge_test_users where kind='start';select id into adminid from badge_test_admin;select id into tid from badge_test_events where n=1;
 perform set_config('request.jwt.claim.sub',uid::text,true);
 blocked:=false;begin perform public.manage_athlete_badges('confirm',jsonb_build_object('user_id',uid,'tournament_id',tid));exception when insufficient_privilege then blocked:=true;end;if not blocked then raise exception 'Non-admin awarded participation';end if;
 blocked:=false;begin insert into private.badge_participations(user_id,tournament_id) values(uid,tid);exception when insufficient_privilege then blocked:=true;end;if not blocked then raise exception 'Direct table write permitted';end if;
 perform set_config('request.jwt.claim.sub',adminid::text,true);
 for evt in select id from badge_test_events where n<=5 loop perform public.manage_athlete_badges('confirm',jsonb_build_object('user_id',uid,'tournament_id',evt.id,'won',evt.id=tid));end loop;
 perform public.manage_athlete_badges('confirm',jsonb_build_object('user_id',uid,'tournament_id',tid,'won',true));
 b:=public.get_athlete_badges((select nick from badge_test_users where kind='start'));
 if (b->>'participations')::int<>5 or not (b->'earned' ?& array['debut','warrior','champion']) then raise exception 'Milestone or deduplication failed';end if;
 blocked:=false;begin perform public.manage_athlete_badges('confirm',jsonb_build_object('user_id',uid,'tournament_id',(select id from badge_test_events where n=6)));exception when raise_exception then blocked:=true;end;if not blocked then raise exception 'Future event accepted';end if;
 perform public.manage_athlete_badges('remove',jsonb_build_object('user_id',uid,'tournament_id',tid));b:=public.get_athlete_badges((select nick from badge_test_users where kind='start'));
 if b->'earned' ? 'warrior' or b->'earned' ? 'champion' or (b->>'participations')::int<>4 then raise exception 'Correction did not recalculate';end if;
end $$;
reset role;
update public.team_members set is_captain=false where team_id in(select id from badge_test_team);
do $$declare b jsonb;begin b:=public.get_athlete_badges((select nick from badge_test_users where kind='start'));if b->'earned' ? 'captain' or not(b->'earned' ? 'team') then raise exception 'Captain revocation failed';end if;end $$;
delete from public.team_members where team_id in(select id from badge_test_team);
do $$declare b jsonb;begin b:=public.get_athlete_badges((select nick from badge_test_users where kind='start'));if b->'earned' ? 'team' or not(b->'earned' ? 'beta') then raise exception 'Membership or permanent badge failed';end if;end $$;
rollback;
