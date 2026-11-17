# Teams release — 2026-11-11

Maintained JSX/CSS and database migrations for captain requests, team membership, private contact and roster capacities. The deployable files are in runtime; npm run build copies that portable reviewed runtime and regenerates Nitro's asset metadata. React/Auth/Supabase are bridged from the existing published app, preserving current branding and content. No credentials or private users are included here.

Database migrations applied in order:
- team_rosters_captain_requests_and_private_contacts (migration.sql)
- persist_registration_contact_privately_and_sync_captain (signup-contact.sql)

Do not reapply the CREATE statements to production. database-test.sql must run inside BEGIN/ROLLBACK; temporary auth fixtures are not production content. SQL tests verify authorization, private contact, capacities, invitations and captain flags. Browser verification covered public pages/mobile and mocked mutation flows for player/admin/captain, plus registration and the existing breached-password guard.

Roster formats: LoL, Wild Rift, Mobile Legends, CS2 and Valorant: 5+2; Free Fire: 4+2; Brawl Stars: 3+1; EA FC Individual: 1+1; Pro Clubs: 11+5. The captain occupies a chosen roster slot when approved.

WhatsApp is optional and stored in profiles_private. The signup trigger extracts contact from the signup request and removes the temporary contact keys from Auth metadata. Contact is returned only through scoped team_portal actions and only with the athlete's current consent. Community responses never contain contact data. Invite tokens are single use, seven days, SHA-256 hashed in a private table.
