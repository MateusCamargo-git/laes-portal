import { test } from "node:test";
import assert from "node:assert/strict";
import { secureFetch } from "../runtime/server/laes-security.mjs";
import { i as string, n as number, r as object, t as array } from "../runtime/server/_libs/zod.mjs";
import { t as athlete } from "../runtime/server/_ssr/public-athlete-BaNoIfuf.mjs";

test("updated validation library preserves exported factories", () => {
  assert.equal(string().uuid().safeParse("00000000-0000-4000-8000-000000000001").success, true);
  assert.equal(number().int().nonnegative().parse(8), 8);
  assert.deepEqual(object({name:string()}).parse({name:"LAES", secret:"hidden"}), {name:"LAES"});
});
test("large arrays fail before per-item validation", () => {
  const result=array(string()).safeParse(new Array(100000).fill(null));
  assert.equal(result.success,false);assert.equal(result.error.issues.length,1);
});
test("current public athlete schema keeps private fields out", () => {
  assert.deepEqual(athlete.parse({id:"00000000-0000-4000-8000-000000000001",nick:"Atleta",bio:null,avatar_url:null,games:[],full_name:"private"}), {id:"00000000-0000-4000-8000-000000000001",nick:"Atleta",bio:null,avatar_url:null,games:[]});
});
test("HTML security layer preserves content and cookies", async () => {
  const r=await secureFetch(async()=>new Response('<html><head></head><body>LAES — Alfenas</body></html>',{headers:{'content-type':'text/html; charset=utf-8','set-cookie':'test=1; HttpOnly'}}),new Request('https://ligaalfenense.com.br/'));
  const html=await r.text();assert.match(html,/LAES — Alfenas/);assert.doesNotMatch(html,/laes-password-safety/);assert.equal(html,'<html><head></head><body>LAES — Alfenas</body></html>');assert.match(r.headers.get('set-cookie'),/HttpOnly/);assert.equal(r.headers.get('x-frame-options'),'DENY');assert.doesNotMatch(r.headers.get('content-security-policy'),/pwnedpasswords/);
});
test("JSON and redirect responses remain intact", async () => {
  const json=await secureFetch(async()=>Response.json({ok:true}),new Request('https://ligaalfenense.com.br/api'));
  assert.deepEqual(await json.json(),{ok:true});
  const redirect=await secureFetch(async()=>new Response(null,{status:302,headers:{location:'/entrar'}}),new Request('https://ligaalfenense.com.br/'));
  assert.equal(redirect.status,302);assert.equal(redirect.headers.get('location'),'/entrar');
});
test("private pages are never cached", async () => {
  const r=await secureFetch(async()=>new Response('panel'),new Request('https://ligaalfenense.com.br/painel'));
  assert.equal(r.headers.get('cache-control'),'private, no-store');assert.equal(r.headers.get('x-robots-tag'),'noindex, nofollow');
});
