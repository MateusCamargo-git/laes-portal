begin;
create temporary table avatar_test_ids(kind text,id uuid);
insert into avatar_test_ids values('google',gen_random_uuid()),('email',gen_random_uuid());
insert into auth.users(id,aud,role,email,email_confirmed_at,raw_app_meta_data,raw_user_meta_data,created_at,updated_at)
select id,'authenticated','authenticated','avatar-test-'||id||'@example.invalid',now(),jsonb_build_object('provider',kind,'providers',jsonb_build_array(kind)),jsonb_build_object('picture','https://lh3.googleusercontent.com/test-avatar-one'),now(),now() from avatar_test_ids;
do $$
declare gid uuid; eid uuid; picture text;
begin
 select id into gid from avatar_test_ids where kind='google';select id into eid from avatar_test_ids where kind='email';
 if (select avatar_url from public.profiles where id=gid) is distinct from 'https://lh3.googleusercontent.com/test-avatar-one' then raise exception 'Google sign-up photo was not synchronized';end if;
 if (select avatar_url from public.profiles where id=eid) is not null then raise exception 'Email-only user received Google photo';end if;
 update auth.users set raw_user_meta_data=jsonb_build_object('avatar_url','https://lh3.googleusercontent.com/test-avatar-two') where id=gid;
 if (select avatar_url from public.profiles where id=gid) is distinct from 'https://lh3.googleusercontent.com/test-avatar-two' then raise exception 'Updated Google photo was not synchronized';end if;
 update public.profiles set avatar_url='storage://media/avatars/'||gid||'/custom.png' where id=gid;
 update auth.users set raw_user_meta_data=jsonb_build_object('avatar_url','https://lh3.googleusercontent.com/test-avatar-three') where id=gid;
 if (select avatar_url from public.profiles where id=gid) is distinct from 'storage://media/avatars/'||gid||'/custom.png' then raise exception 'Custom upload was overwritten';end if;
 update public.profiles set avatar_url=null where id=gid;
 update auth.users set raw_user_meta_data=jsonb_build_object('avatar_url','https://example.invalid/untrusted-image.png') where id=gid;
 if (select avatar_url from public.profiles where id=gid) is not null then raise exception 'Non-Google host accepted';end if;
end $$;
rollback;
