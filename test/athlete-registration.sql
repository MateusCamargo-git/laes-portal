begin;
create temporary table athlete_test_ids(name text primary key,id uuid not null);
insert into athlete_test_ids values('athlete',gen_random_uuid()),('other',gen_random_uuid());
insert into auth.users(id,aud,role,email,email_confirmed_at,raw_app_meta_data,raw_user_meta_data,created_at,updated_at)
select id,'authenticated','authenticated','athlete-test-'||id||'@example.invalid',now(),'{}','{}',now(),now() from athlete_test_ids;
grant select on athlete_test_ids to authenticated;
set local role authenticated;
do $$
declare uid uuid; mid uuid; pos text; original_stamp timestamptz; data jsonb; blocked boolean; result jsonb; tid uuid;
begin
 select id into uid from athlete_test_ids where name='athlete';
 perform set_config('request.jwt.claim.sub',uid::text,true);
 perform set_config('request.jwt.claims',jsonb_build_object('sub',uid,'role','authenticated','is_anonymous',false)::text,true);
 select m.id,r.name into mid,pos from public.modalities m join public.modality_roles r on r.modality_id=m.id where m.active order by m.sort,r.sort limit 1;
 if mid is null then raise exception 'Test requires an active modality with positions'; end if;
 blocked=false;
 begin perform public.save_athlete_registration('{}');exception when raise_exception then blocked=true;end;
 if not blocked then raise exception 'Incomplete registration accepted'; end if;
 blocked=false;
 begin update public.profiles set athlete_registered_at=now(),onboarded=true where id=uid;exception when raise_exception then blocked=true;end;
 if not blocked then raise exception 'Incomplete direct completion accepted'; end if;
 data=jsonb_build_object('full_name','Atleta de Teste','nick','Teste-'||left(uid::text,8),'city','Alfenas','state','MG','bio','Teste de cadastro','whatsapp','35999999999','shared',true,'is_public',false,'games',jsonb_build_array(jsonb_build_object('modality_id',mid,'roles',jsonb_build_array(pos),'rank','Teste','game_nick','Teste')));
 blocked=false;
 begin perform public.save_athlete_registration(jsonb_set(data,'{games,0,roles}','[]'));exception when raise_exception then blocked=true;end;
 if not blocked then raise exception 'Missing positions accepted'; end if;
 perform public.save_athlete_registration(data);
 select athlete_registered_at into original_stamp from public.profiles where id=uid;
 if original_stamp is null or not exists(select 1 from public.profiles where id=uid and is_public and onboarded) then raise exception 'Completion or mandatory community visibility missing';end if;
 if not exists(select 1 from public.profiles_private where user_id=uid and full_name='Atleta de Teste' and whatsapp='+5535999999999' and share_team_contact) then raise exception 'Private contact incorrect';end if;
 update public.profiles set is_public=false,onboarded=false,athlete_registered_at=null where id=uid;
 if not exists(select 1 from public.profiles where id=uid and is_public and onboarded and athlete_registered_at=original_stamp) then raise exception 'Required community registration was disabled';end if;
 perform public.save_athlete_registration(data||jsonb_build_object('bio','Atualizado','shared',false));
 if (select count(*) from public.athlete_games where user_id=uid)<>1 then raise exception 'Duplicate modalities';end if;
 if not exists(select 1 from public.profiles_private where user_id=uid and not share_team_contact and contact_consent_at is null) then raise exception 'Contact consent not revoked';end if;
 blocked=false;
 begin perform public.save_athlete_registration(jsonb_set(data,'{games,0,roles}','["invalid-position"]'));exception when raise_exception then blocked=true;end;
 if not blocked or (select bio from public.profiles where id=uid)<>'Atualizado' then raise exception 'Failed save was not atomic';end if;
 result=public.community_action('directory',jsonb_build_object('search','Teste-'||left(uid::text,8)));
 if not exists(select 1 from jsonb_array_elements(result) e where e->>'id'=uid::text) then raise exception 'Completed athlete missing from directory';end if;
 if result::text like '%Atleta de Teste%' or result::text like '%5535999999999%' or result::text like '%@example.invalid%' then raise exception 'Private data leaked into community';end if;
 if (select count(*) from public.profiles_private where user_id<>(uid))<>0 then raise exception 'Private RLS isolation failed';end if;
 if (select count(*) from public.profiles where id=(select id from athlete_test_ids where name='other'))<>0 then raise exception 'Profile RLS isolation failed';end if;
end $$;
reset role;
-- Trigger guards cover legacy endpoints and direct privileged inserts as well.
do $$
declare target uuid; tid uuid; blocked boolean:=false;
begin
 select id into target from athlete_test_ids where name='other';select id into tid from public.teams where active limit 1;
 if tid is null then raise exception 'Test requires an active team';end if;
 begin insert into public.team_join_requests(team_id,user_id,kind,member_type) values(tid,target,'player','titular');exception when raise_exception then blocked=true;end;
 if not blocked then raise exception 'Unregistered team request accepted';end if;
 blocked=false;
 begin insert into public.team_members(team_id,user_id,display_name,member_type) values(tid,target,'Teste','titular');exception when raise_exception then blocked=true;end;
 if not blocked then raise exception 'Unregistered membership accepted';end if;
end $$;
rollback;
