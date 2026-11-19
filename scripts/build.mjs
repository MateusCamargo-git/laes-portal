import {cpSync,mkdirSync,rmSync,readFileSync,writeFileSync,statSync,readdirSync,renameSync} from 'node:fs';
import {createHash} from 'node:crypto';
import path from 'node:path';
import {build,transform} from 'esbuild';

// runtime/ is the preserved, reviewed application. Never compile the obsolete Vite site.
rmSync('.output',{recursive:true,force:true});
mkdirSync('.output',{recursive:true});
cpSync('runtime/server','.output/server',{recursive:true});
cpSync('runtime/public','.output/public',{recursive:true});
mkdirSync('.output/server/node_modules',{recursive:true});
cpSync('node_modules/tslib','.output/server/node_modules/tslib',{recursive:true});

// Editable feature sources compile against the SAME React/backend instances as the portal.
for(const [entry,browserFile,serverFile] of [
 ['features/teams/teams.jsx','laes-team-feature-athlete-20261112-v2-badge-art-v2.js','laes-team-feature-20261111-v1.mjs'],
 ['features/live/live.jsx','laes-live-feature-20261112-badge-art-v2.js','laes-live-feature-20261112.mjs'],
 ['features/navigation/header.jsx','laes-site-header-20261117.js','laes-site-header-20261117.mjs'],
 ['features/about/teams.jsx','laes-about-teams-20261117.js','laes-about-teams-20261117.mjs'],
]){
 const result=await build({entryPoints:[entry],bundle:true,write:false,format:'esm',jsx:'automatic',external:['react','react/jsx-runtime','@laes/runtime'],logLevel:'silent'});
 for(const browser of [true,false]){
  let code=result.outputFiles[0].text;const suffix=browser?'-badge-art-v2.js':'.mjs';
  for(const [from,to] of [['react','laes-team-react-20261111-v1'],['react/jsx-runtime','laes-team-jsx-20261111-v1'],['@laes/runtime','laes-team-runtime-20261111-v1']])code=code.replaceAll(JSON.stringify(from),JSON.stringify('./'+to+suffix));
  writeFileSync(browser?'.output/public/assets/'+browserFile:'.output/server/_ssr/'+serverFile,code);
 }
}
for(const [source,target] of [
 ['features/teams/teams.css','laes-teams-20261114-aligned.css'],
 ['features/teams/athlete-registration.css','laes-athlete-photos-20261112.css'],
 ['features/live/live.css','laes-live-20261112.css'],
 ['features/tournaments/cards.css','laes-tournament-cards-20261112.css'],
 ['features/badges/badges.css','laes-badges-art-20261114-v2.css'],
 ['features/profiles/profiles.css','laes-community-profiles-20261114.css'],
 ['features/loading/loading.css','laes-loading-20261114.css'],
 ['features/navigation/header.css','laes-header-20261117.css'],
])cpSync(source,'.output/public/assets/'+target);
cpSync('features/tournaments/agenda.js','.output/public/assets/campeonatos-modalidades-20261115-v1.js');

// The card is shared between home, agenda and server rendering.
const card=await transform(readFileSync('features/tournaments/card.jsx','utf8'),{loader:'jsx',jsxFactory:'__laesTcElement',format:'esm',target:'es2022'});
for(const browser of [true,false]){
 const file=browser?'.output/public/assets/Logo-C_6nyl-f-badge-art-v2.js':'.output/server/_ssr/Logo-DncJtcSp.mjs';
 let code=readFileSync(file,'utf8');const name=browser?'Cu':'TournamentCard';
 const start=code.indexOf('function __laesTcElement(');const cardStart=code.indexOf('function '+name+'(');const end=code.indexOf(browser?'function ':'function NewsCard(',cardStart+('function '+name+'(').length);
 if(start<0||cardStart<0||end<0)throw Error('Shared tournament card bridge changed');
 const jsx=browser?'P.jsx':'import_jsx_runtime.jsx';
 const factory=`function __laesTcElement(type,props,...children){const next={...(props||{})};const key=next.key;delete next.key;if(children.length)next.children=children.length===1?children[0]:children;return ${jsx}(type,next,key);}\n`;
 code=code.slice(0,start)+factory+card.code.replaceAll('function TournamentCard(',`function ${name}(`)+'\n'+code.slice(end);writeFileSync(file,code);
}

// Version scripts and styles together so cached styles cannot drift from the markup.
const assetsDir='.output/public/assets';const names=readdirSync(assetsDir).filter(n=>/\.(js|css)$/.test(n));
const release=createHash('sha256');for(const n of names.sort()){release.update(n);release.update(readFileSync(path.join(assetsDir,n)))}
const version=release.digest('hex').slice(0,12);const mappings=names.map(n=>{const ext=path.extname(n);return [n,n.slice(0,-ext.length)+'-'+version+ext]});
function visit(dir,fn){for(const item of readdirSync(dir,{withFileTypes:true})){const file=path.join(dir,item.name);if(item.isDirectory()){if(item.name!=='node_modules')visit(file,fn)}else if(item.isFile())fn(file)}}
visit('.output',file=>{if(!/\.(js|mjs|html|json)$/.test(file))return;let code=readFileSync(file,'utf8');for(const [old,next]of mappings)code=code.replaceAll(old,next);writeFileSync(file,code)});
for(const [old,next]of mappings)renameSync(path.join(assetsDir,old),path.join(assetsDir,next));

// Nitro uses this registry to send Content-Length and ETag: stale values truncate JS.
const entry='.output/server/index.mjs';let code=readFileSync(entry,'utf8');const marker='var public_assets_data_default = ';const start=code.indexOf(marker)+marker.length;const end=code.indexOf('\n};',start)+2;
if(start<marker.length||end<start)throw Error('Asset registry boundary changed');
const previous=JSON.parse(code.slice(start,end));const assets={};
const mime={'.js':'text/javascript; charset=utf-8','.css':'text/css; charset=utf-8','.json':'application/json','.txt':'text/plain; charset=utf-8','.png':'image/png','.jpg':'image/jpeg','.jpeg':'image/jpeg','.webp':'image/webp','.svg':'image/svg+xml','.ico':'image/x-icon','.woff2':'font/woff2'};
visit('.output/public',file=>{const relative=path.relative('.output/public',file).split(path.sep).join('/');const key='/'+relative;const bytes=readFileSync(file);assets[key]={type:previous[key]?.type||mime[path.extname(file)]||'application/octet-stream',path:'../public/'+relative,size:bytes.length,etag:'"'+createHash('sha256').update(bytes).digest('hex')+'"',mtime:statSync(file).mtime.toISOString()}});
code=code.slice(0,start)+JSON.stringify(assets,null,2)+code.slice(end);writeFileSync(entry,code);
writeFileSync('.output/release.json',JSON.stringify({version,entry:mappings.find(([n])=>n==='index-laes-agenda-20261115-v1.js')[1]},null,2));
console.log(`LAES ${version}: one browser entry, ${names.length} versioned scripts and styles; runtime and editable features ready.`);
