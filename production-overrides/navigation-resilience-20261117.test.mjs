import {test} from 'node:test';
import assert from 'node:assert/strict';
import vm from 'node:vm';
import {deadlineSource,patchEntry,patchBackend,patchServerFunctions} from './navigation-resilience-20261117.mjs';

test('request deadline aborts a stalled read without replaying it',async()=>{
 let calls=0,signal;
 const ctx=vm.createContext({Request,AbortSignal:{timeout:()=>AbortSignal.timeout(15),any:AbortSignal.any},fetch:(_,init)=>{calls++;signal=init.signal;return new Promise((_,reject)=>{signal.addEventListener('abort',()=>reject(signal.reason),{once:true})})}});
 vm.runInContext(deadlineSource,ctx);
 const keepAlive=setTimeout(()=>{},1000);
 try{await assert.rejects(ctx.laesDeadlineFetch('/read'),{name:'TimeoutError'});assert.equal(calls,1);assert.equal(signal.aborted,true)}finally{clearTimeout(keepAlive)}
});
test('caller cancellation and headers are preserved; writes are never retried',async()=>{
 const controller=new AbortController();let calls=0;
 const ctx=vm.createContext({Request,AbortSignal,fetch:(_,init)=>{calls++;assert.equal(init.method,'POST');assert.equal(init.headers.apikey,'publishable');return new Promise((_,reject)=>init.signal.addEventListener('abort',()=>reject(init.signal.reason),{once:true}))}});
 vm.runInContext(deadlineSource,ctx);
 const result=ctx.laesDeadlineFetch('/save',{method:'POST',headers:{apikey:'publishable'},signal:controller.signal});
 controller.abort();await assert.rejects(result,{name:'AbortError'});assert.equal(calls,1);
});
test('patches fail closed on an unexpected runtime',()=>{
 for(const patch of [patchEntry,patchBackend,patchServerFunctions])assert.throws(()=>patch('unexpected runtime'));
});
test('router gets pending UI and a recoverable chunk error',()=>{
 const source=patchEntry('scrollRestoration:!0,defaultPreloadStaleTime:0;onClick:()=>{n.invalidate(),t();}');
 assert.match(source,/defaultPendingMs:150/);assert.match(source,/defaultPendingMinMs:0/);assert.match(source,/defaultPreload:'intent'/);assert.match(source,/defaultPendingComponent:LaesNavigationPending/);assert.match(source,/window.location.reload/);
});
