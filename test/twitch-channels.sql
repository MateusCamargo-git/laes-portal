begin;
create temporary table twitch_test_ids(name text,id uuid);
insert into twitch_test_ids values('one',gen_random_uuid()),('two',gen_random_uuid());
insert into auth.users(id,aud,role,email,email_confirmed_at,raw_app_meta_data,raw_user_meta_data,created_at,updated_at)
select id,'authenticated','authenticated','twitch-test-'||id||'@example.invalid',now(),'{}','{}',now(),now() from twitch_test_ids;
grant select on twitch_test_ids to authenticated;
set local role authenticated;
do $$
declare uid uuid; otherid uuid; mid uuid; pos text; login text; data jsonb; result jsonb; blocked boolean; affected int;
begin
 select id into uid from twitch_test_ids where name='one';select id into otherid from twitch_test_ids where name='two';
 login='laes_'||left(uid::text,8);
 perform set_config('request.jwt.claim.sub',uid::text,true);perform set_config('request.jwt.claims',jsonb_build_object('sub',uid,'role','authenticated')::text,true);
 select m.id,r.name into mid,pos from public.modalities m join public.modality_roles r on r.modality_id=m.id where m.active order by m.sort,r.sort limit 1;
 update public.profiles set twitch_channel=login where id=uid;
 if exists(select 1 from jsonb_array_elements(public.get_laes_streamer_channels()) e where e->>'channel_login'=login) then raise exception 'Incomplete athlete exposed';end if;
 data=jsonb_build_object('full_name','Nome Privado de Teste','nick','Streamer-'||left(uid::text,8),'city','Alfenas','state','MG','whatsapp','35999999999','games',jsonb_build_array(jsonb_build_object('modality_id',mid,'roles',jsonb_build_array(pos))),'twitch_channel','https://www.twitch.tv/'||upper(login)||'/');
 perform public.save_athlete_registration(data);
 if (select twitch_channel from public.profiles where id=uid) is distinct from login then raise exception 'Channel normalization failed';end if;
 result=public.get_laes_streamer_channels();
 if not exists(select 1 from jsonb_array_elements(result) e where e->>'channel_login'=login) then raise exception 'Completed athlete missing';end if;
 if result::text like '%Nome Privado%' or result::text like '%999999999%' or result::text like '%example.invalid%' then raise exception 'Private profile data leaked';end if;
 perform public.save_athlete_registration(data-'twitch_channel');
 if (select twitch_channel from public.profiles where id=uid) is distinct from login then raise exception 'Legacy profile save erased channel';end if;
 blocked=false;begin perform public.save_athlete_registration(data||'{"twitch_channel":"https://example.invalid/x"}');exception when raise_exception then blocked=true;end;if not blocked then raise exception 'Invalid channel accepted';end if;
 perform set_config('request.jwt.claim.sub',otherid::text,true);
 blocked=false;begin perform public.save_athlete_registration(data||jsonb_build_object('nick','Other-'||left(otherid::text,8)));exception when unique_violation then blocked=true;end;if not blocked then raise exception 'Channel linked to two users';end if;
 update public.profiles set twitch_channel=null where id=uid;get diagnostics affected=row_count;if affected<>0 then raise exception 'Another athlete changed channel';end if;
 perform set_config('request.jwt.claim.sub',uid::text,true);perform public.save_athlete_registration(data||'{"twitch_channel":""}');
 if exists(select 1 from jsonb_array_elements(public.get_laes_streamer_channels()) e where e->>'channel_login'=login) then raise exception 'Unlinked channel exposed';end if;
end $$;
reset role;
set local role anon;
select public.get_laes_streamer_channels();
rollback;
