import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { resolve, extname, sep } from 'node:path';

const root = resolve('dist');
const types = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.css': 'text/css; charset=utf-8', '.svg': 'image/svg+xml', '.png': 'image/png', '.jpg': 'image/jpeg', '.ico': 'image/x-icon', '.woff2': 'font/woff2' };
const port = Number(process.env.PORT || 3000);
let twitchToken = '';
let twitchTokenExpires = 0;
let liveCache = { expires: 0, streams: [] };
async function twitchLive() {
  const clientId = process.env.TWITCH_CLIENT_ID;
  const clientSecret = process.env.TWITCH_CLIENT_SECRET;
  const channels = (process.env.TWITCH_CHANNELS || '').split(',').map(v => v.trim().toLowerCase()).filter(v => /^[a-z0-9_]{3,25}$/.test(v)).slice(0, 100);
  if (!clientId || !clientSecret || !channels.length) return [];
  if (Date.now() < liveCache.expires) return liveCache.streams;
  if (Date.now() >= twitchTokenExpires) {
    const tokenResponse = await fetch('https://id.twitch.tv/oauth2/token', { method: 'POST', body: new URLSearchParams({ client_id: clientId, client_secret: clientSecret, grant_type: 'client_credentials' }) });
    if (!tokenResponse.ok) throw new Error('Twitch authentication failed');
    const token = await tokenResponse.json();
    twitchToken = token.access_token;
    twitchTokenExpires = Date.now() + Math.max(60, token.expires_in - 120) * 1000;
  }
  const query = new URLSearchParams();
  channels.forEach(channel => query.append('user_login', channel));
  const response = await fetch('https://api.twitch.tv/helix/streams?' + query, { headers: { 'Client-Id': clientId, 'Authorization': 'Bearer ' + twitchToken } });
  if (!response.ok) throw new Error('Twitch streams unavailable');
  const payload = await response.json();
  liveCache = { expires: Date.now() + 60000, streams: payload.data || [] };
  return liveCache.streams;
}
createServer(async (req, res) => {
  try {
    const pathname = decodeURIComponent(new URL(req.url || '/', 'http://localhost').pathname);
    if (pathname === '/api/twitch/live') {
      try {
        const streams = await twitchLive();
        res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'no-store' }).end(JSON.stringify({ streams }));
      } catch {
        res.writeHead(503, { 'Content-Type': 'application/json; charset=utf-8' }).end(JSON.stringify({ error: 'Twitch temporarily unavailable' }));
      }
      return;
    }
    const target = resolve(root, '.' + pathname);
    if (target !== root && !target.startsWith(root + sep)) { res.writeHead(403).end('Forbidden'); return; }
    let file = target;
    try { if (!(await stat(file)).isFile()) file = resolve(root, 'index.html'); }
    catch { file = resolve(root, 'index.html'); }
    const body = await readFile(file);
    res.writeHead(200, { 'Content-Type': types[extname(file)] || 'application/octet-stream', 'Cache-Control': file.endsWith('index.html') ? 'no-cache' : 'public, max-age=3600' });
    res.end(body);
  } catch { res.writeHead(500).end('Server error'); }
}).listen(port, '0.0.0.0', () => console.log('LAES listening on port', port));
