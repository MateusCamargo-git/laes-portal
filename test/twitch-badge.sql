begin;
create temporary table voice_fixture(id uuid,nick text);
insert into voice_fixture values(gen_random_uuid(),'Voice-fixture-'||left(gen_random_uuid()::text,8));
insert into auth.users(id,created_at) select id,now() from voice_fixture;
update public.profiles p set nick=f.nick,is_public=true,onboarded=true,twitch_channel='laes_streamer' from voice_fixture f where p.id=f.id;
grant select on voice_fixture to anon,authenticated;
set local role authenticated;
do $$declare b jsonb;begin
 perform set_config('request.jwt.claim.sub',(select id::text from voice_fixture),true);
 b:=public.get_athlete_badges();if not(b->'earned' ? 'streamer') then raise exception 'Valid linked Twitch badge missing';end if;
 b:=public.set_badge_spotlights(array['streamer','beta']);if b->'spotlight'<>'["streamer","beta"]'::jsonb then raise exception 'Twitch selection failed';end if;
end $$;
reset role;
update public.profiles set twitch_channel=null where id in(select id from voice_fixture);
select set_config('request.jwt.claim.sub','',true);
set local role anon;
do $$declare b jsonb;begin
 b:=public.get_athlete_badges((select nick from voice_fixture));if b->'earned' ? 'streamer' then raise exception 'Unlinked channel kept badge';end if;
 if b->'spotlight'<>'["beta"]'::jsonb then raise exception 'Unlinked Twitch still highlighted';end if;
end $$;
reset role;
update public.profiles set twitch_channel='laes_streamer',is_public=false where id in(select id from voice_fixture);
select set_config('request.jwt.claim.sub','',true);
set local role anon;
do $$begin if public.get_athlete_badges((select nick from voice_fixture)) is not null then raise exception 'Private Twitch badge leaked';end if;end $$;
rollback;
