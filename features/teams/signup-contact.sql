-- Persist optional registration contact even when e-mail confirmation opens elsewhere.
create or replace function private.new_profile() returns trigger
language plpgsql security definer set search_path='' as $$
declare raw_phone text; phone text; shared boolean:=false;
begin
 insert into public.profiles(id) values(new.id) on conflict do nothing;
 raw_phone=trim(coalesce(new.raw_user_meta_data->>'laes_registration_whatsapp',''));
 if char_length(raw_phone)<=30 and raw_phone ~ '^[+0-9 ()-]*$' then
  phone=regexp_replace(raw_phone,'[^0-9]','','g');
  if length(phone) in (10,11) and left(raw_phone,1)<>'+' then phone='55'||phone; end if;
  if phone !~ '^[1-9][0-9]{9,14}$' then phone=null; end if;
 end if;
 shared=phone is not null and coalesce(new.raw_user_meta_data->'laes_registration_share_contact'='true'::jsonb,false);
 insert into public.profiles_private(user_id,whatsapp,share_team_contact,contact_consent_at)
 values(new.id,case when phone is null then null else '+'||phone end,shared,case when shared then now() end) on conflict do nothing;
 -- Contact data belongs in the private profile, outside reusable Auth metadata.
 if new.raw_user_meta_data ? 'laes_registration_whatsapp' or new.raw_user_meta_data ? 'laes_registration_share_contact' then
  update auth.users set raw_user_meta_data=raw_user_meta_data-'laes_registration_whatsapp'-'laes_registration_share_contact' where id=new.id;
 end if;
 return new;
end $$;
revoke all on function private.new_profile() from public,anon,authenticated;

-- Keep an existing member's captain marker in sync if they joined while awaiting approval.
create function private.sync_captain_member() returns trigger
language plpgsql security definer set search_path='' as $$
begin
 update public.team_members set is_captain=true where team_id=new.team_id and user_id=new.user_id;
 return new;
end $$;
revoke all on function private.sync_captain_member() from public,anon,authenticated;
create trigger sync_captain_member after insert on public.team_captains for each row execute function private.sync_captain_member();
