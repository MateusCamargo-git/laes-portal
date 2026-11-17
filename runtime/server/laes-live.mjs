const PROJECT_URL='https://txwxodscfnbsgltmrfjz.supabase.co';
const PUBLISHABLE_KEY='sb_publishable_oweYXPxsQfXywyzsGOJBVg_-8tUjtQ7';
const LOGIN=/^[a-z0-9_]{1,25}$/;
export function createLiveService({env=process.env,fetcher=globalThis.fetch,now=Date.now,logger=console,loadChannels}={}){
 let token=null,tokenUntil=0,cache=null,cacheUntil=0,inflight=null;
 const endpoint=async(url,options={})=>fetcher(url,{...options,signal:AbortSignal.timeout(9000),redirect:'error'});
 async function getToken(){if(token&&now()<tokenUntil)return token;
  if(!env.TWITCH_CLIENT_ID||!env.TWITCH_CLIENT_SECRET)throw Object.assign(Error('setup_required'),{publicStatus:'setup_required'});
  const r=await endpoint('https://id.twitch.tv/oauth2/token',{method:'POST',headers:{'Content-Type':'application/x-www-form-urlencoded'},body:new URLSearchParams({client_id:env.TWITCH_CLIENT_ID,client_secret:env.TWITCH_CLIENT_SECRET,grant_type:'client_credentials'})});
  if(!r.ok)throw Object.assign(Error('Twitch authorization unavailable'),{code:'twitch_auth',upstreamStatus:r.status});const data=await r.json();if(typeof data.access_token!=='string'||!Number.isFinite(data.expires_in)||data.expires_in<=0)throw Error('Invalid Twitch authorization');token=data.access_token;tokenUntil=now()+Math.max(1,data.expires_in-60)*1000;return token;
 }
 async function channels(){if(loadChannels)return loadChannels();const r=await endpoint((env.LAES_SUPABASE_URL||PROJECT_URL)+'/rest/v1/rpc/get_laes_streamer_channels',{method:'POST',headers:{apikey:env.LAES_SUPABASE_PUBLISHABLE_KEY||PUBLISHABLE_KEY,'Content-Type':'application/json'},body:'{}'});if(!r.ok)throw Object.assign(Error('Community directory unavailable'),{code:'community_directory',upstreamStatus:r.status});const data=await r.json();if(!Array.isArray(data))throw Error('Invalid community directory');return data;}
 async function streamsFor(logins,retried=false){const access=await getToken(),url=new URL('https://api.twitch.tv/helix/streams');url.searchParams.set('first','100');for(const login of logins)url.searchParams.append('user_login',login);const r=await endpoint(url,{headers:{'Client-Id':env.TWITCH_CLIENT_ID,Authorization:'Bearer '+access}});
  if(r.status===401&&!retried){token=null;tokenUntil=0;return streamsFor(logins,true)}
  if(!r.ok){const retry=r.status===429?Math.min(300000,Math.max(45000,Number(r.headers.get('Ratelimit-Reset'))*1000-now()||60000)):15000;throw Object.assign(Error('Twitch streams unavailable'),{retry,code:'twitch_streams',upstreamStatus:r.status})}
  const data=await r.json();if(!Array.isArray(data.data))throw Error('Invalid Twitch streams');return data.data;
 }
 async function refresh(){try{
  await getToken();
  const entries=(await channels()).filter(c=>LOGIN.test(c.channel_login)&&typeof c.nick==='string').slice(0,500),members=new Map(entries.map(c=>[c.channel_login,c]));let live=[];
  const names=[...members.keys()];for(let i=0;i<names.length;i+=100)live.push(...await streamsFor(names.slice(i,i+100)));
  const streams=live.filter(s=>s.type==='live'&&LOGIN.test(s.user_login)&&members.has(s.user_login)).map(s=>{const m=members.get(s.user_login);let thumbnail=null;try{const u=new URL(String(s.thumbnail_url).replaceAll('{width}','640').replaceAll('{height}','360'));if(u.protocol==='https:'&&u.hostname.endsWith('.jtvnw.net'))thumbnail=u.href}catch{}
   return {channel_login:s.user_login,nick:m.nick,avatar_url:m.avatar_url||null,profile_url:'/atletas/'+encodeURIComponent(m.nick),url:'https://www.twitch.tv/'+s.user_login,title:String(s.title||'').slice(0,500),game_name:String(s.game_name||'').slice(0,100),viewer_count:Math.max(0,Number(s.viewer_count)||0),started_at:s.started_at||null,language:s.language||null,mature:!!s.is_mature,thumbnail_url:thumbnail};
  }).sort((a,b)=>b.viewer_count-a.viewer_count||a.nick.localeCompare(b.nick,'pt-BR')).slice(0,100);
  cache={status:'ready',streams,registered_channels:entries.length,checked_at:new Date(now()).toISOString()};cacheUntil=now()+45000;return cache;
 }catch(error){logger.error?.(JSON.stringify({event:'laes_live_update_unavailable',code:error.code||error.publicStatus||'network',upstream_status:error.upstreamStatus||null}));cache={status:error.publicStatus||'unavailable',streams:[],registered_channels:0,checked_at:null};cacheUntil=now()+(error.retry||15000);return cache;}}
 return {async get(){if(cache&&now()<cacheUntil)return cache;if(inflight)return inflight;inflight=refresh().finally(()=>{inflight=null});return inflight;}};
}
const service=createLiveService();
export async function handleLiveApi(request){const path=new URL(request.url).pathname;if(path!=='/api/laes-live')return null;if(!['GET','HEAD'].includes(request.method))return Response.json({error:'Método não permitido.'},{status:405,headers:{Allow:'GET, HEAD'}});const data=await service.get();const headers={'Content-Type':'application/json; charset=utf-8','Cache-Control':data.status==='ready'?'public, max-age=10':'no-store','X-Content-Type-Options':'nosniff'};return new Response(request.method==='HEAD'?null:JSON.stringify(data),{status:200,headers});}
