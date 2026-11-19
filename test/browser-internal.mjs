import {chromium} from 'playwright';
import assert from 'node:assert/strict';
const base=process.env.TEST_BASE_URL||'http://127.0.0.1:3023';
const fixture={"teams": [{"id": "00000000-0000-4000-8000-000000000011", "name": "Equipe QA", "slug": "equipe-qa", "sort": 1, "category": "Misto", "logo_url": "/images/laes/logo-principal.png", "description": null, "modality_id": "00000000-0000-4000-8000-000000000010", "captain_nick": null, "format_label": "Equipe", "modality_name": "Modalidade QA", "modality_slug": "counter-strike-2", "reserve_slots": 2, "roster_format": "padrao", "starter_slots": 5, "reserves_filled": 0, "starters_filled": 4, "reserve_vacancies": 2, "starter_vacancies": 1, "captain_id": null}], "modalities": [{"id": "00000000-0000-4000-8000-000000000010", "name": "Modalidade QA", "slug": "modalidade-qa", "sort": 1, "active": true, "categories": ["Misto", "Feminino"], "created_at": "2026-11-10T14:55:48.101473+00:00", "short_name": "LoL", "description": null}], "formats": [{"modality_id": "00000000-0000-4000-8000-000000000010", "format": "padrao", "label": "Equipe", "starter_slots": 5, "reserve_slots": 2}], "roles": []};const uid='00000000-0000-4000-8000-000000000017';
(async()=>{const browser=await chromium.launch({headless:true,args:['--no-sandbox'],...(process.env.PLAYWRIGHT_EXECUTABLE_PATH?{executablePath:process.env.PLAYWRIGHT_EXECUTABLE_PATH}:{})});const results=[];try{for(const role of ["athlete","admin","manager"]){
 const admin=role==="admin", manager=role==="manager";
 const modality=fixture.modalities[0];
 const otherModality={...modality,id:"00000000-0000-4000-8000-000000000090",name:"Outra modalidade"};
 const tournamentId="00000000-0000-4000-8000-000000000091";
 let tournament=null, grant=null;
 let team={...fixture.teams[0]};
 const context=await browser.newContext({ignoreHTTPSErrors:true,viewport:{width:role==="athlete"?1365:390,height:1000}});const user={id:uid,email:'qa@example.invalid',aud:'authenticated',role:'authenticated',app_metadata:{provider:'email',providers:['email']},user_metadata:{display_name:'QA LAES',account_notice_version:'2026-11-08'},created_at:'2026-11-01T12:00:00Z'};const profile={id:uid,nick:'QA LAES',full_name:'QA LAES',city:'Alfenas',state:'MG',avatar_url:null,bio:'Perfil isolado para teste de interface.',is_public:true,onboarded:true,account_notice_accepted_at:'2026-11-17T12:00:00Z',public_profile:true,athlete_registered_at:'2026-11-17T12:00:00Z',onboarding_complete:true,whatsapp:null,availability:"Noite",social_links:{},twitch_channel:null};
 const token=['eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9',Buffer.from(JSON.stringify({sub:uid,exp:Math.floor(Date.now()/1000)+3600,iat:Math.floor(Date.now()/1000),role:'authenticated',aud:'authenticated'})).toString('base64url'),'test-signature'].join('.');
 await context.addInitScript(({user,token})=>{localStorage.setItem('laes-txwxodscfnbsgltmrfjz-auth',JSON.stringify({access_token:token,refresh_token:'test-only',token_type:'bearer',expires_in:3600,expires_at:Math.floor(Date.now()/1000)+3600,user}))},{user,token});
 let writes=[];await context.route('https://txwxodscfnbsgltmrfjz.supabase.co/**',async route=>{const req=route.request(),u=new URL(req.url());const single=(req.headers().accept||'').includes('vnd.pgrst.object');let body=[];
 if(u.pathname.startsWith('/storage/v1/object/sign/media/')){
   return route.fulfill({status:200,contentType:'application/json',body:JSON.stringify({signedURL:'/object/qa-image'})});
 }
 if(u.pathname.startsWith('/storage/v1/object/media/content/')&&req.method()==='POST'){
   writes.push({table:'escudo',method:'POST'});
   return route.fulfill({status:200,contentType:'application/json',body:JSON.stringify({Key:u.pathname})});
 }
 if(u.pathname.startsWith('/auth/v1/user'))body=user;
 else if(u.pathname.startsWith('/auth/'))body={access_token:token,refresh_token:'test-only',user};
 else if(u.pathname.includes('/rpc/')){const name=u.pathname.split('/').pop();const p=req.postDataJSON()||{};
  if(name==='team_portal'){
   if(p.action==='state')body={is_admin:admin,nick:profile.nick,contact:{},games:[],memberships:[],requests:[],invites:[],captain_teams:[],managed_teams:[]};
   else if(p.action==='create_team'){
     writes.push({name,action:p.action});
     team={...team,id:'00000000-0000-4000-8000-000000000092',name:p.payload.name,slug:p.payload.slug,logo_url:null};
     body={team_id:team.id};
   }
   else if(['review_requests','directory','roster'].includes(p.action))body=[];
   else {writes.push({name,action:p.action});body={};}
  }else if(name==='community_action')body=p.action==='directory'?[]:{};
  else if(name==='get_athlete_badges')body={earned:[],spotlight:[],participations:0,titles:0};
  else if(name==='manage_athlete_badges')body={athletes:[],tournaments:[],history:[]};
  else body=[];
 }else{const table=u.pathname.split('/').pop();body=table==='profiles'?((single||u.searchParams.has('id'))?profile:[profile]):table==='profiles_private'?(single?{user_id:uid,whatsapp:null,share_contact:false}:[]):table==='user_roles'?(admin?[{role:'admin'}]:[]):table==='team_roster_status'?[team]:table==='teams'?[team]:table==='modalities'?[modality,otherModality]:table==='team_roster_formats'?fixture.formats:table==='modality_roles'?fixture.roles:[];const method=req.method();
 if(table==='modality_admins'){
  if(method==='POST'){grant={id:'grant-qa',...req.postDataJSON(),profiles:profile,modalities:modality};body={id:grant.id};}
  else if(method==='DELETE'){body={id:grant.id};grant=null;}
  else body=manager?[{modality_id:modality.id}]:grant?[grant]:[];
 }
 if(table==='teams'&&method==='PATCH'){
  team={...team,...req.postDataJSON()};body={id:team.id};
 }
 if(table==='tournaments'){
  if(method==='POST'){tournament={id:tournamentId,...req.postDataJSON()};body={id:tournament.id};}
  else if(method==='PATCH'){tournament={...tournament,...req.postDataJSON()};body={id:tournament.id};}
  else body=tournament?[tournament]:[];
 }
 if(!['GET','HEAD'].includes(method))writes.push({table,method,payload:req.postDataJSON()});}
 return route.fulfill({status:200,contentType:'application/json',body:JSON.stringify(body)});
 });
 const p=await context.newPage();let errors=[];p.on('pageerror',e=>errors.push(e.message));await p.goto(base+'/'+(role==='athlete'?'painel':'admin'),{waitUntil:'networkidle'});await p.getByRole('heading',{name:manager?'Campeonatos':admin?'Administração da LAES':/Bom te ver/}).first().waitFor();
 console.log(admin?'ADMIN':'ATHLETE',(await p.locator('main').innerText()).slice(0,2200));
 const labels=manager?[]:admin?['Gerenciar elencos','Comunidade','Insígnias','Conteúdo do portal']:['Minha equipe','Convites','Atividade','Meu perfil','Configurações'];
 for(const label of labels){const tab=p.getByRole('tab',{name:label,exact:true});const button=p.getByRole('button',{name:label,exact:true});const link=(admin?p.getByRole('navigation',{name:'Administração da Liga'}):p).getByRole('link',{name:label,exact:true});if(await tab.count()){await tab.first().click();assert.equal(await tab.first().getAttribute('aria-selected'),'true')}else if(await button.count()){await button.first().click()}else if(await link.count()){await link.first().click()}else{throw new Error('Missing internal tab '+label)}await p.waitForTimeout(400);console.log('TAB',label,(await p.locator('main').innerText()).slice(0,180));}
 if(admin){
  await p.getByRole('navigation',{name:'Administração da Liga'}).getByRole('link',{name:'Conteúdo do portal',exact:true}).waitFor();
  assert.match(p.url(),/#conteudo$/);
  await p.reload();
  await p.getByRole('heading',{name:'Conteúdo do portal',exact:true}).waitFor();
  await p.goBack();
  await p.getByRole('heading',{name:'Insígnias',exact:true,level:1}).waitFor();
  await p.getByRole('navigation',{name:'Administração da Liga'}).getByRole('link',{name:'Gerenciar elencos',exact:true}).click();
  await p.getByRole('button',{name:'Editar página da equipe'}).click();
  await p.getByLabel('Nome da equipe',{exact:true}).fill('Equipe atualizada');
  await p.getByLabel('Escolher imagem do PC ou celular').setInputFiles({name:'escudo.png',mimeType:'image/png',buffer:Buffer.from('iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+aBSsAAAAASUVORK5CYII=','base64')});
  await p.getByRole('img',{name:'Prévia do novo escudo'}).waitFor();
  await p.waitForFunction(()=>document.querySelector('img[alt="Prévia do novo escudo"]')?.naturalWidth>0);
  assert.equal(await p.evaluate(()=>document.documentElement.scrollWidth),390);
  await p.getByRole('button',{name:'Salvar página da equipe'}).click();
  await p.getByText('Página da equipe atualizada.').waitFor();
  assert.equal(team.name,'Equipe atualizada');
  assert.match(team.logo_url,/^storage:\/\/media\/content\//);
  assert.equal(team.slug,fixture.teams[0].slug);
  assert.equal(await p.evaluate(()=>document.documentElement.scrollWidth),390);
  assert.deepEqual(writes.splice(0).map(write=>[write.table,write.method]),[['escudo','POST'],['teams','PATCH']]);
  await p.getByRole('navigation',{name:'Administração da Liga'}).getByRole('link',{name:'Pessoas e acessos',exact:true}).click();
  await p.getByLabel('Buscar por nickname').fill('QA');
  await p.getByRole('option',{name:/QA LAES/}).waitFor({state:'attached'});
  await p.getByLabel('Conta',{exact:true}).selectOption(uid);
  await p.getByLabel('Modalidade',{exact:true}).selectOption(modality.id);
  await p.getByRole('button',{name:'Conceder acesso'}).click();
  await p.getByText('Acesso concedido.').waitFor();
  p.once('dialog',dialog=>dialog.accept());
  await p.getByRole('button',{name:'Revogar acesso'}).click();
  await p.getByText('Acesso revogado.').waitFor();
  assert.deepEqual(writes.map(write=>write.method),['POST','DELETE']);
  await p.getByRole('navigation',{name:'Administração da Liga'}).getByRole('link',{name:'Equipes e capitães',exact:true}).click();
  await p.getByLabel('Nome da equipe',{exact:true}).fill('Equipe nova QA');
  await p.getByRole('button',{name:'Criar equipe e configurar escudo'}).click();
  await p.getByLabel('Escolher imagem do PC ou celular').waitFor();
  assert.equal(await p.getByLabel('Equipe que vou gerenciar').inputValue(),team.id);
 }
 if(manager){
  await p.getByRole('heading',{name:'Campeonatos',exact:true}).waitFor();
  assert.equal(await p.getByRole('link',{name:'Pessoas e acessos'}).count(),0);
  await p.getByRole('button',{name:'Novo campeonato'}).click();
  const scope=p.getByLabel('Modalidade',{exact:true});
  assert.equal(await scope.getByRole('option',{name:otherModality.name}).count(),0);
  await scope.selectOption(modality.id);
  await p.getByLabel('Nome do campeonato').fill('Copa LAES QA');
  await p.getByLabel('Início (horário de Brasília)').fill('2026-12-10T19:30');
  await p.getByRole('button',{name:'Salvar rascunho'}).click();
  await p.getByText('Rascunho salvo.').waitFor();
  await p.getByRole('button',{name:'Editar',exact:true}).click();
  await p.getByRole('button',{name:'Prévia',exact:true}).click();
  await p.getByRole('region',{name:'Prévia do campeonato'}).waitFor();
  await p.getByRole('button',{name:'Publicar na agenda'}).click();
  await p.getByText('Campeonato publicado.').waitFor();
  assert.deepEqual(writes.map(write=>[write.method,write.payload.modality_id,write.payload.published,write.payload.starts_at]),[
    ['POST',modality.id,false,'2026-12-10T19:30:00-03:00'],
    ['PATCH',modality.id,true,'2026-12-10T19:30:00-03:00'],
  ]);
  assert.equal(await p.evaluate(()=>document.documentElement.scrollWidth),390);
 }
 console.log('ERRORS',admin,errors);results.push({role,errors,writes});await context.close();}
 assert.equal(results.flatMap(r=>r.errors).length,0);assert.equal(results.filter(r=>r.role==='athlete').flatMap(r=>r.writes).filter(r=>!['heartbeat','offline'].includes(r.action)).length,0);
 }finally{await browser.close()}})().catch(e=>{console.error(e);process.exitCode=1});
