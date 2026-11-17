create temporary table team_test_ids(name text primary key,id uuid not null);
insert into team_test_ids(name,id) select name,gen_random_uuid() from unnest(array['admin','captain_a','captain_b','player','link_player','six','seven','eight','nine','ten']) as name;
insert into auth.users(id,aud,role,email,email_confirmed_at,raw_app_meta_data,raw_user_meta_data,created_at,updated_at)
select id,'authenticated','authenticated','laes-test-'||id::text||'@example.invalid',now(),'{}'::jsonb,'{}'::jsonb,now(),now() from team_test_ids;
update public.profiles p set nick='Teste '||t.name,is_public=true,onboarded=true from team_test_ids t where t.id=p.id;
insert into public.user_roles(user_id,role) select id,'admin' from team_test_ids where name='admin';
grant select on team_test_ids to authenticated;
create function pg_temp.test_act(actor text,action text,payload jsonb default '{}'::jsonb) returns jsonb language plpgsql security invoker as $$
declare actor_id uuid;
begin
 select id into actor_id from pg_temp.team_test_ids where name=actor;
 perform set_config('request.jwt.claim.sub',actor_id::text,true);
 return public.team_portal(action,payload);
end $$;
create function pg_temp.expect_denied(actor text,action text,payload jsonb default '{}'::jsonb) returns void language plpgsql security invoker as $$
declare denied boolean:=false;
begin
 begin perform pg_temp.test_act(actor,action,payload);
 exception when raise_exception or insufficient_privilege or unique_violation then denied=true;
 end;
 if not denied then raise exception 'Expected denial for actor %, action %',actor,action; end if;
end $$;
set local role authenticated;
do $$
declare a uuid; b uuid; fc uuid; clubs uuid; request_id uuid; player_id uuid; other_id uuid; member_id uuid;
 cs uuid; br uuid; ea uuid; j jsonb; token text; token2 text; actor text; own_id uuid; blocked boolean:=false; number text;
begin
 select id into cs from public.modalities where slug='counter-strike-2';
 select id into br from public.modalities where slug='brawl-stars';
 select id into ea from public.modalities where slug='ea-sports-fc';
 select id into player_id from pg_temp.team_test_ids where name='player';
 select id into other_id from pg_temp.team_test_ids where name='link_player';
 j=pg_temp.test_act('admin','create_team',jsonb_build_object('name','Equipe teste A','slug','laes-test-a-'||substr(gen_random_uuid()::text,1,8),'modality_id',cs,'format','padrao'));
 a=(j->>'team_id')::uuid;
 j=pg_temp.test_act('admin','create_team',jsonb_build_object('name','Equipe teste B','slug','laes-test-b-'||substr(gen_random_uuid()::text,1,8),'modality_id',br,'format','padrao'));
 b=(j->>'team_id')::uuid;
 j=pg_temp.test_act('admin','create_team',jsonb_build_object('name','FC individual teste','slug','laes-test-fc-'||substr(gen_random_uuid()::text,1,8),'modality_id',ea,'format','individual'));
 fc=(j->>'team_id')::uuid;
 j=pg_temp.test_act('admin','create_team',jsonb_build_object('name','FC clubes teste','slug','laes-test-clubs-'||substr(gen_random_uuid()::text,1,8),'modality_id',ea,'format','pro_clubs'));
 clubs=(j->>'team_id')::uuid;
 if not exists(select 1 from public.team_roster_status where id=a and starter_vacancies=5 and reserve_vacancies=2)
 or not exists(select 1 from public.team_roster_status where id=b and starter_vacancies=3 and reserve_vacancies=1)
 or not exists(select 1 from public.team_roster_status where id=fc and starter_vacancies=1 and reserve_vacancies=1)
 or not exists(select 1 from public.team_roster_status where id=clubs and starter_vacancies=11 and reserve_vacancies=5)
 then raise exception 'Preset capacities are incorrect'; end if;
 perform pg_temp.expect_denied('player','create_team',jsonb_build_object('name','Forbidden','slug','forbidden','modality_id',cs,'format','padrao'));
 perform pg_temp.test_act('captain_a','request_join',jsonb_build_object('team_id',a,'kind','captain','member_type','titular','role_name','AWPer'));
 select id into request_id from public.team_join_requests where team_id=a and kind='captain';
 perform pg_temp.expect_denied('captain_a','decide_request',jsonb_build_object('id',request_id,'accept',true));
 perform pg_temp.test_act('admin','decide_request',jsonb_build_object('id',request_id,'accept',true));
 perform pg_temp.test_act('captain_b','request_join',jsonb_build_object('team_id',b,'kind','captain','member_type','titular'));
 j=pg_temp.test_act('admin','create_link',jsonb_build_object('team_id',b,'member_type','titular'));
 perform pg_temp.test_act('captain_b','accept_link',jsonb_build_object('token',j->>'token'));
 select id into request_id from public.team_join_requests where team_id=b and kind='captain';
 perform pg_temp.test_act('admin','decide_request',jsonb_build_object('id',request_id,'accept',true));
 if not exists(select 1 from public.team_members where team_id=b and user_id=(select id from pg_temp.team_test_ids where name='captain_b') and is_captain) then raise exception 'Existing captain member flag was not synchronized';end if;
 perform pg_temp.expect_denied('captain_b','roster',jsonb_build_object('team_id',a));
 perform pg_temp.expect_denied('captain_b','create_link',jsonb_build_object('team_id',a,'member_type','titular'));
 perform pg_temp.expect_denied('captain_b','invite_player',jsonb_build_object('team_id',a,'member_type','titular','user_id',player_id));
 perform pg_temp.expect_denied('player','request_join',jsonb_build_object('team_id',a,'kind','captain','member_type','titular'));

 perform pg_temp.test_act('player','save_contact',jsonb_build_object('whatsapp','(35) 99999-1234','shared',true));
 perform pg_temp.test_act('player','save_positions',jsonb_build_object('games',jsonb_build_array(jsonb_build_object('modality_id',cs,'roles',jsonb_build_array('AWPer')))));
 perform pg_temp.test_act('player','request_join',jsonb_build_object('team_id',a,'kind','player','member_type','reserva','role_name','AWPer'));
 j=pg_temp.test_act('captain_a','review_requests');
 select value->>'whatsapp' into number from jsonb_array_elements(j) where value->>'user_id'=player_id::text;
 if number is distinct from '+5535999991234' then raise exception 'Consented contact unavailable to correct captain';end if;
 if exists(select 1 from public.profiles_private where user_id=player_id) then raise exception 'Captain can bypass private contact RPC';end if;
 j=pg_temp.test_act('captain_b','review_requests');
 if exists(select 1 from jsonb_array_elements(j) where value->>'user_id'=player_id::text) then raise exception 'Other captain saw private applicant';end if;
 perform pg_temp.test_act('player','save_contact',jsonb_build_object('whatsapp','(35) 99999-1234','shared',false));
 j=pg_temp.test_act('captain_a','review_requests');
 select value->>'whatsapp' into number from jsonb_array_elements(j) where value->>'user_id'=player_id::text;
 if number is not null then raise exception 'Revoked contact sharing still exposed';end if;
 select id into request_id from public.team_join_requests where team_id=a and user_id=player_id;
 perform pg_temp.expect_denied('captain_b','decide_request',jsonb_build_object('id',request_id,'accept',true));
 perform pg_temp.test_act('captain_a','decide_request',jsonb_build_object('id',request_id,'accept',true));
 if not exists(select 1 from public.team_roster_status where id=a and starters_filled=1 and reserves_filled=1) then raise exception 'Approved membership did not update vacancies';end if;

 j=pg_temp.test_act('captain_a','create_link',jsonb_build_object('team_id',a,'member_type','reserva'));
 token=j->>'token';
 if length(token)<>64 then raise exception 'Invalid invitation entropy';end if;
 perform pg_temp.test_act('link_player','inspect_link',jsonb_build_object('token',token));
 perform pg_temp.test_act('link_player','accept_link',jsonb_build_object('token',token));
 perform pg_temp.expect_denied('link_player','accept_link',jsonb_build_object('token',token));
 perform pg_temp.expect_denied('captain_a','create_link',jsonb_build_object('team_id',a,'member_type','reserva'));
 j=pg_temp.test_act('captain_a','roster',jsonb_build_object('team_id',a));
 select (value->>'id')::uuid into member_id from jsonb_array_elements(j) where value->>'user_id'=other_id::text;
 perform pg_temp.expect_denied('captain_b','remove_member',jsonb_build_object('id',member_id));
 perform pg_temp.test_act('captain_a','remove_member',jsonb_build_object('id',member_id));
 if not exists(select 1 from public.team_roster_status where id=a and reserve_vacancies=1) then raise exception 'Removal did not reopen vacancy';end if;

 j=pg_temp.test_act('captain_a','create_link',jsonb_build_object('team_id',a,'member_type','titular'));
 token2=j->>'token';
 perform pg_temp.test_act('admin','revoke_captain',jsonb_build_object('team_id',a));
 perform pg_temp.expect_denied('six','accept_link',jsonb_build_object('token',token2));
 perform pg_temp.expect_denied('captain_a','roster',jsonb_build_object('team_id',a));

 foreach actor in array array['six','seven','eight','nine'] loop
  select id into own_id from pg_temp.team_test_ids where name=actor;
  perform pg_temp.test_act('admin','invite_player',jsonb_build_object('team_id',a,'member_type','titular','user_id',own_id));
  perform set_config('request.jwt.claim.sub',own_id::text,true);
  select id into request_id from public.invites where team_id=a and user_id=own_id and status='pendente';
  perform pg_temp.test_act(actor,'respond_invite',jsonb_build_object('id',request_id,'accept',true));
 end loop;
 if not exists(select 1 from public.team_roster_status where id=a and starters_filled=5 and starter_vacancies=0) then raise exception 'Starter count incorrect';end if;
 perform pg_temp.expect_denied('admin','create_link',jsonb_build_object('team_id',a,'member_type','titular'));
 select id into own_id from pg_temp.team_test_ids where name='ten';
 perform pg_temp.expect_denied('admin','invite_player',jsonb_build_object('team_id',a,'member_type','titular','user_id',own_id));
 perform pg_temp.expect_denied('player','roster',jsonb_build_object('team_id',a));
 if (pg_temp.test_act('player','directory')::text like '%whatsapp%') then raise exception 'Community directory leaked contact field';end if;
end $$;
reset role;
select 'All team workflow, capacity, authorization, privacy and invitation tests passed; transaction will roll back.' as result;
