import {readFileSync,writeFileSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {deadlineSource} from './navigation-resilience-20261117.mjs';
let backend=readFileSync('diagnosis/backend-mB6vbMUi.mjs','utf8');
if(!backend.includes('return fetch(input, {'))throw Error('SSR backend mismatch');
writeFileSync('patched/server/_ssr/backend-mB6vbMUi.mjs',deadlineSource+'\n'+backend.replace('return fetch(input, {','return laesDeadlineFetch(input, {'));
let security=readFileSync('diagnosis/laes-security.mjs','utf8');
security=security.replace('const pathname = new URL(request.url).pathname;',`const pathname = new URL(request.url).pathname;
  if (pathname.startsWith('/assets/') || (headers.get('content-type') || '').startsWith('text/html')) headers.set('Cache-Control', 'no-cache');`);
writeFileSync('patched/server/laes-security.mjs',security);
let entry=readFileSync('diagnosis/index.mjs','utf8');
for(const name of ['Logo-C_6nyl-f-badge-art-v2.js','public.functions-B00W0OSR-badge-art-v2.js','index-laes-agenda-20261115-v1.js']){
 const start=entry.indexOf(JSON.stringify('/assets/'+name)+': {');
 if(start<0)throw Error('Missing asset '+name);
 const end=entry.indexOf('\n  }',start)+4;
 const data=readFileSync('patched/public/assets/'+name);
 const record=JSON.parse('{'+entry.slice(start,end)+'}');
 record['/assets/'+name].size=data.length;
 record['/assets/'+name].etag='"'+createHash('sha256').update(data).digest('hex')+'"';
 record['/assets/'+name].mtime=new Date().toISOString();
 const json=JSON.stringify(record,null,2).slice(2,-2);
 entry=entry.slice(0,start)+json.trimStart()+entry.slice(end);
}
writeFileSync('patched/server/index.mjs',entry);
console.log('Prepared six runtime files; asset lengths and etags recalculated.');
