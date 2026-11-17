-- Profile imagery only. Google metadata is never used for authorization.
create or replace function private.sync_google_athlete_avatar()
returns trigger language plpgsql security definer set search_path='' as $$
declare picture text;
begin
 if not (coalesce(new.raw_app_meta_data->>'provider','')='google' or coalesce(new.raw_app_meta_data->'providers','[]'::jsonb) ? 'google') then return new; end if;
 picture=coalesce(nullif(new.raw_user_meta_data->>'avatar_url',''),nullif(new.raw_user_meta_data->>'picture',''));
 if picture is null or picture !~ '^https://([a-z0-9-]+\.)*googleusercontent\.com/' or char_length(picture)>2048 then return new; end if;
 update public.profiles p set avatar_url=picture where p.id=new.id
 and (nullif(p.avatar_url,'') is null or p.avatar_url ~ '^https://([a-z0-9-]+\.)*googleusercontent\.com/')
 and p.avatar_url is distinct from picture;
 return new;
end $$;
revoke all on function private.sync_google_athlete_avatar() from public,anon,authenticated;
create trigger zz_sync_google_athlete_avatar after insert or update of raw_user_meta_data,raw_app_meta_data on auth.users
for each row execute function private.sync_google_athlete_avatar();

-- The requested backfill only touches missing Google profile photos; uploads remain intact.
update public.profiles p set avatar_url=coalesce(nullif(u.raw_user_meta_data->>'avatar_url',''),nullif(u.raw_user_meta_data->>'picture',''))
from auth.users u where u.id=p.id and nullif(p.avatar_url,'') is null
and (u.raw_app_meta_data->>'provider'='google' or coalesce(u.raw_app_meta_data->'providers','[]'::jsonb) ? 'google')
and coalesce(nullif(u.raw_user_meta_data->>'avatar_url',''),nullif(u.raw_user_meta_data->>'picture','')) ~ '^https://([a-z0-9-]+\.)*googleusercontent\.com/'
and char_length(coalesce(nullif(u.raw_user_meta_data->>'avatar_url',''),nullif(u.raw_user_meta_data->>'picture','')))<=2048;
