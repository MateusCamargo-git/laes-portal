import {test} from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {runInNewContext} from 'node:vm';
const source=readFileSync('features/tournaments/card.jsx','utf8').split('function TournamentCard(')[0];
class FixedDate extends Date {constructor(...args){super(...(args.length?args:['2026-11-12T15:00:00Z']))}}
const helpers=runInNewContext(source+';({date:laesTournamentDate,status:laesTournamentStatus})',{Date:FixedDate,Intl});
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
