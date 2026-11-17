import {chromium} from 'playwright';
import assert from 'node:assert/strict';
const base=process.env.TEST_BASE_URL||'http://127.0.0.1:3023';
const browser=await chromium.launch({headless:true,args:['--no-sandbox'],...(process.env.PLAYWRIGHT_EXECUTABLE_PATH?{executablePath:process.env.PLAYWRIGHT_EXECUTABLE_PATH}:{})});
try{
 const p=await browser.newPage({ignoreHTTPSErrors:!!process.env.TEST_IGNORE_TLS,viewport:{width:1365,height:1000}});const errors=[];p.on('pageerror',e=>errors.push(e.message));
 await p.goto(base,{waitUntil:'networkidle'});await p.locator('.phase-one-strip a').first().waitFor();assert.equal(await p.locator('.phase-one-group').first().locator('a').count(),8);
 await p.getByRole('heading',{name:'Equipes em destaque'}).waitFor();assert.equal(await p.locator('a[href^="/equipes/"]').count(),6);
 for(const [path,label] of [['/sobre','Sobre'],['/modalidades','Modalidades'],['/equipes','Equipes'],['/campeonatos','Campeonatos'],['/ao-vivo','Ao vivo'],['/contato','Contato']]){
  await p.getByRole('navigation',{name:'Principal',exact:true}).getByRole('link',{name:label,exact:true}).click();await p.waitForURL(base+path);await p.waitForLoadState('networkidle');assert((await p.locator('main').innerText()).length>80,path);
  if(path==='/equipes'){await p.locator('.lt-team-card').first().waitFor();assert.equal(await p.locator('.lt-team-card').count(),6);}
  if(path==='/campeonatos'){await p.locator('.agenda-game').first().waitFor();assert.equal(await p.locator('.agenda-game').count(),8);await p.getByRole('button',{name:/Wild Rift/}).click();assert.equal(await p.locator('.agenda-group').count(),1);}
 }
 for(const path of ['/modalidades/wild-rift','/equipes/laes-red-line','/auth','/cadastro','/recuperar-senha','/painel','/admin']){const response=await p.goto(base+path,{waitUntil:'networkidle'});assert.equal(response.status(),200,path);assert((await p.locator('main').innerText()).length>20,path);}
 await p.setViewportSize({width:375,height:812});await p.goto(base+'/equipes',{waitUntil:'networkidle'});await p.locator('.lt-team-card').first().waitFor();assert.equal(await p.evaluate(()=>document.documentElement.scrollWidth>innerWidth),false);
 await p.getByRole('button',{name:'Abrir menu',exact:true}).click();await p.getByRole('button',{name:'Fechar menu',exact:true}).waitFor();
 assert.deepEqual(errors,[]);console.log('Public desktop/mobile navigation, home strip, six teams, eight agenda filters, forms and anonymous access gates: passed.');
}finally{await browser.close()}
