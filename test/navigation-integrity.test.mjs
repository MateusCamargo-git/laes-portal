import {test} from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync,readdirSync,statSync} from 'node:fs';
import path from 'node:path';
import {secureFetch} from '../runtime/server/laes-security.mjs';
const release=JSON.parse(readFileSync('.output/release.json','utf8'));
const root='.output/public/assets';
const files=new Set(readdirSync(root));
test('all circular route imports resolve to one browser bootstrap',()=>{
 const entries=[];
 for(const name of files){if(!name.endsWith('.js'))continue;const source=readFileSync(path.join(root,name),'utf8');if(source.includes('hydrateRoot)(document'))entries.push(name);
  for(const m of source.matchAll(/(["'`])([^"'`\r\n]+?\.js)\1/g)){const ref=m[2];if(!ref.startsWith('./')&&!ref.startsWith('assets/'))continue;assert(files.has(path.basename(ref)),`${name} references missing ${ref}`);}
 }
 assert.deepEqual(entries,[release.entry]);
});
test('server and browser agree on the pending Suspense boundary',()=>{
 const server=readFileSync('runtime/server/_ssr/router-CDniV3l8.mjs','utf8');const browser=readFileSync('runtime/public/assets/index-laes-agenda-20261115-v1.js','utf8');
 assert.match(server,/defaultPendingComponent:\s*LaesNavigationPending/);assert.match(browser,/defaultPendingComponent:LaesNavigationPending/);
 assert.match(server,/defaultPendingMs:\s*150/);assert.match(browser,/defaultPendingMs:150/);
 for(const resource of ['laes-teams-20261114-aligned.css','laes-loading-20261114.css','laes-registration-20261111-v1.js']){assert(server.includes(resource));assert(browser.includes(resource));}
});
test('Nitro asset lengths match the complete published module bytes',()=>{
 const source=readFileSync('.output/server/index.mjs','utf8');const marker='var public_assets_data_default = ';const start=source.indexOf(marker)+marker.length;const end=source.indexOf('\n};',start)+2;const registry=JSON.parse(source.slice(start,end));
 for(const name of files){const key='/assets/'+name;assert.equal(registry[key]?.size,statSync(path.join(root,name)).size,key);}
});
test('streamed route IDs preserve null characters without HTML parser replacement',async()=>{
 const source='<html><head></head><body><script>window.id="root\u0000"</script></body></html>';
 const response=await secureFetch(async()=>new Response(source,{headers:{'content-type':'text/html'}}),new Request('https://ligaalfenense.com.br/'));
 const html=await response.text();assert(!html.includes('\u0000'));assert(html.includes('\\u0000'));
});
