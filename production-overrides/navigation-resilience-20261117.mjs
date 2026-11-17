// Apply to the current Hostinger runtime, never to the legacy Vite app.
// Existing filenames are retained to preserve circular module identity and old tabs.
import { readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

export const deadlineSource = `function laesDeadlineFetch(input,init={}){
 const inherited=init.signal||(typeof Request!=='undefined'&&input instanceof Request?input.signal:undefined);
 const timeout=AbortSignal.timeout(20000);
 const signal=inherited?AbortSignal.any([inherited,timeout]):timeout;
 return fetch(input,{...init,signal});
}`;

export function patchBackend(source) {
 const needle='fetch(e,{...t,headers:r})';
 if (!source.includes(needle)) throw Error('Backend runtime does not match; abort.');
 return deadlineSource+'\n'+source.replace(needle,'laesDeadlineFetch(e,{...t,headers:r})');
}

export function patchServerFunctions(source) {
 const needle='return oi(t,e,n??fetch)';
 if (!source.includes(needle)) throw Error('Server-function runtime does not match; abort.');
 source=source.replace(needle,'return oi(t,e,n??laesDeadlineFetch)');
 const lazy='a=void 0,e().then(e=>';
 if (!source.includes(lazy)) throw Error('Lazy route loader does not match; abort.');
 source=source.replace(lazy,'a=void 0,laesModuleLoad(e).then(e=>');
 return deadlineSource+`\nfunction laesModuleLoad(load){let timer;return Promise.race([Promise.resolve().then(load),new Promise((_,reject)=>{timer=setTimeout(()=>reject(Error('Loading chunk timed out. Recarregue esta página.')),20000)})]).finally(()=>clearTimeout(timer))}\n`+source;
}

export const pendingSource = `
function LaesNavigationPending(){
 const [slow,setSlow]=I.useState(false);
 I.useEffect(()=>{const timer=setTimeout(()=>setSlow(true),12000);return()=>clearTimeout(timer)},[]);
 return I.createElement('section',{role:'status','aria-live':'polite',style:{padding:'64px 24px',textAlign:'center'}},
 I.createElement('img',{src:'/images/laes/logo-principal.png',alt:'',width:80,height:80,style:{margin:'0 auto 16px',objectFit:'contain'}}),
 I.createElement('p',null,slow?'A conexão está demorando mais que o esperado.':'Preparando a próxima partida…'),
 slow?I.createElement('button',{type:'button',onClick:()=>window.location.reload(),style:{marginTop:16,padding:'12px 20px',borderRadius:8,background:'#8d1e1d',color:'#fff'}},'Recarregar esta página'):null);
}
`;

export function patchEntry(source) {
 const needle='scrollRestoration:!0,defaultPreloadStaleTime:0';
 if (!source.includes(needle)) throw Error('Router runtime does not match; abort.');
 source=source.replace(needle,"scrollRestoration:!0,defaultPreload:'intent',defaultPendingMs:150,defaultPendingMinMs:0,defaultPendingComponent:LaesNavigationPending,defaultPreloadStaleTime:0");
 const retry='onClick:()=>{n.invalidate(),t();}';
 if (!source.includes(retry)) throw Error('Error boundary runtime does not match; abort.');
 source=source.replace(retry,"onClick:()=>{if(/dynamically imported|module script|preload|Loading chunk/i.test(String(e?.message||e))){window.location.reload();return}n.invalidate(),t();}");
 return pendingSource+'\n'+source;
}

if (process.argv[2]) {
 const root=process.argv[2];
 for (const [file,patch] of [
  ['public/assets/Logo-C_6nyl-f-badge-art-v2.js',patchBackend],
  ['public/assets/public.functions-B00W0OSR-badge-art-v2.js',patchServerFunctions],
  ['public/assets/index-laes-agenda-20261115-v1.js',patchEntry],
 ]) {const path=join(root,file);writeFileSync(path,patch(readFileSync(path,'utf8')))}
}
