import {test} from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {runInNewContext} from 'node:vm';
const source=readFileSync('features/tournaments/card.jsx','utf8').split('function TournamentCard(')[0];
class FixedDate extends Date {constructor(...args){super(...(args.length?args:['2026-11-12T15:00:00Z']))}}
const helpers=runInNewContext(source+';({date:laesTournamentDate,status:laesTournamentStatus,visible:laesPublicTournament})',{Date:FixedDate,Intl});
test('tournament calendar dates preserve the workbook day across the São Paulo offset',()=>{
 assert.equal(helpers.date('2026-12-01 00:00:00+00'),'01/12/2026');
 assert.equal(helpers.date('2026-11-14T00:00:00Z'),'14/11/2026');
 assert.equal(helpers.date(null),'Data a confirmar');
});
test('registration is inclusive of the deadline date and filters agree with expired cards',()=>{
 assert.equal(helpers.status({status:'em_breve',registration_deadline:'2026-11-12T00:00:00Z'}),'em_breve');
 assert.equal(helpers.status({status:'em_breve',registration_deadline:'2026-11-11T00:00:00Z'}),'inscricoes_encerradas');
 assert.equal(helpers.status({status:'cancelado',registration_deadline:'2026-11-11T00:00:00Z'}),'cancelado');
 assert.equal(helpers.status({status:'em_andamento',registration_deadline:'2026-11-11T00:00:00Z'}),'em_andamento');
});

test('public tournaments must be listed as open in the workbook and still accept registrations',()=>{
 const listed={id:'7a6092ce-7f83-4e2f-a72a-502e70cae72d',status:'inscricoes_abertas'};
 assert.equal(helpers.visible({...listed,registration_deadline:'2026-11-12'}),true);
 assert.equal(helpers.visible({...listed,registration_deadline:'2026-11-11'}),false);
 assert.equal(helpers.visible({...listed,status:'encerrado'}),false);
 assert.equal(helpers.visible({...listed,id:'ff855a85-5b0c-4afc-bf8a-e9c4c1024489'}),false);
 assert.equal(helpers.visible({...listed,id:'87f7c88b-4a94-47bc-abcf-9bf43af516cb'}),false);
});
