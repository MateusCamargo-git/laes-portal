begin;
create temporary table spotlight_users(kind text,id uuid,nick text);
insert into spotlight_users select x,gen_random_uuid(),'Spotlight-'||x||'-'||left(gen_random_uuid()::text,8) from unnest(array['one','two','private'])x;
insert into auth.users(id,created_at) select id,now() from spotlight_users;
update public.profiles p set nick=u.nick,onboarded=u.kind<>'private',is_public=u.kind<>'private' from spotlight_users u where p.id=u.id;
create temporary table spotlight_team as with added as(insert into public.teams(name,slug,modality_id) values('Fixture','fixture',(select id from public.modalities limit 1))returning id)select id from added;
insert into public.team_members(team_id,user_id,display_name,member_type,is_captain)select t.id,u.id,u.nick,'titular',true from spotlight_team t,spotlight_users u where u.kind='one';
with events as(insert into public.tournaments(name,modality_id,starts_at) select 'Fixture '||n,(select id from public.modalities limit 1),now()-interval '1 day' from generate_series(1,5)n returning id)
insert into private.badge_participations(user_id,tournament_id,won)select (select id from spotlight_users where kind='one'),id,true from events;
grant select on spotlight_users,spotlight_team to anon,authenticated;
set local role authenticated;
do $$declare uid uuid;otherid uuid;nick1 text;b jsonb;blocked bool;begin
 select id,nick into uid,nick1 from spotlight_users where kind='one';select id into otherid from spotlight_users where kind='two';perform set_config('request.jwt.claim.sub',uid::text,true);
 b:=public.get_athlete_badges();if jsonb_array_length(b->'spotlight')<>3 then raise exception 'Default three missing';end if;
 b:=public.set_badge_spotlights(array['champion','warrior','beta']);if b->'spotlight'<>'["champion","warrior","beta"]'::jsonb then raise exception 'Selection order lost';end if;
 blocked:=false;begin perform public.set_badge_spotlights(array['beta','beta']);exception when raise_exception then blocked:=true;end;if not blocked then raise exception 'Duplicates permitted';end if;
 blocked:=false;begin perform public.set_badge_spotlights(array['beta','captain','team','debut']);exception when raise_exception then blocked:=true;end;if not blocked then raise exception 'Four permitted';end if;
 perform set_config('request.jwt.claim.sub',otherid::text,true);
 blocked:=false;begin perform public.set_badge_spotlights(array['champion']);exception when raise_exception then blocked:=true;end;if not blocked then raise exception 'Locked badge permitted';end if;
 blocked:=false;begin insert into private.badge_spotlights(user_id,codes) values(uid,array['beta']);exception when insufficient_privilege then blocked:=true;end;if not blocked then raise exception 'Other user preference modified';end if;
 if public.get_athlete_badges(nick1)->'spotlight'<>'["champion","warrior","beta"]'::jsonb then raise exception 'Other preferences overwritten';end if;
 perform set_config('request.jwt.claim.sub',uid::text,true);perform public.set_badge_spotlights('{}');if public.get_athlete_badges()->'spotlight'<>'[]'::jsonb then raise exception 'Explicit empty replaced by default';end if;
 perform public.set_badge_spotlights(array['team','captain','beta']);
end $$;
reset role;
delete from public.team_members where team_id in(select id from spotlight_team);
set local role anon;
do $$declare n text;p jsonb;b jsonb;blocked bool;begin
 select nick into n from spotlight_users where kind='one';b:=public.get_badge_spotlights(array[n,(select nick from spotlight_users where kind='private')]);
 if b->n<>'["beta"]'::jsonb then raise exception 'Expired memberships displayed';end if;
 if b ? (select nick from spotlight_users where kind='private') then raise exception 'Private badge preferences leaked';end if;
 p:=public.get_athlete_profile(n);
 if p->>'nick'<>n or p ? 'email' or p ? 'whatsapp' or p ? 'full_name' or p ? 'id' then raise exception 'Public profile projection unsafe';end if;
 if public.get_athlete_profile((select nick from spotlight_users where kind='private')) is not null then raise exception 'Private profile exposed';end if;
 blocked:=false;begin perform public.get_badge_spotlights(array_fill(n,array[41]));exception when raise_exception then blocked:=true;end;if not blocked then raise exception 'Batch limit bypassed';end if;
 blocked:=false;begin perform public.set_badge_spotlights(array['beta']);exception when insufficient_privilege then blocked:=true;end;if not blocked then raise exception 'Anonymous saved preferences';end if;
end $$;
rollback;
