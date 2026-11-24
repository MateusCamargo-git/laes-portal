function laesTournamentDate(value) {
 if(!value)return 'Data a confirmar';
 const date=String(value).match(/^(\d{4})-(\d{2})-(\d{2})/);
 return date?`${date[3]}/${date[2]}/${date[1]}`:'Data a confirmar';
}
function laesTournamentStatus(t) {
 const status=t.status||'em_breve';
 if(['cancelado','encerrado','em_andamento','inscricoes_encerradas'].includes(status))return status;
 const deadline=String(t.registration_deadline||'').slice(0,10);
 const today=new Intl.DateTimeFormat('en-CA',{timeZone:'America/Sao_Paulo',year:'numeric',month:'2-digit',day:'2-digit'}).format(new Date());
 return /^\d{4}-\d{2}-\d{2}$/.test(deadline)&&deadline<today?'inscricoes_encerradas':status;
}
// Portal records marked open in the Eventos tab of Acompanhamento do Liga - LAES.xlsx.
const spreadsheetOpenTournamentIds = new Set([
 'c51cdb47-68e8-42df-9212-59ddee487d02', // Star Challenge — Free Fire
 'bff40dde-f3ee-4a31-8247-26712f799da4', // CS2 Express — Counter-Strike 2
 '3c035623-586c-4d97-ba22-2d0b6c3e7d62', // Evolution Primordiais Den — League of Legends
 '17aa2b17-ac54-460c-a21c-30cd24887215', // Evolution Primordiais Den — Valorant
 '7a6092ce-7f83-4e2f-a72a-502e70cae72d', // Aizen Verse — Wild Rift
]);
function laesPublicTournament(tournament) {
 return spreadsheetOpenTournamentIds.has(tournament.id)
  && laesTournamentStatus(tournament) === 'inscricoes_abertas';
}
function TournamentCard({t}) {
 const status=laesTournamentStatus(t),labels={em_breve:'Em breve',inscricoes_abertas:'Inscrições abertas',inscricoes_encerradas:'Inscrições encerradas',em_andamento:'Em andamento',encerrado:'Encerrado',cancelado:'Cancelado'};
 const deadline=t.until_full?'Até esgotarem as vagas':t.registration_deadline?laesTournamentDate(t.registration_deadline):'Prazo a confirmar';
 const prize=(t.prize||'Premiação a confirmar').split(';').map(p=>p.trim()).filter(Boolean);
 const url=`/campeonatos/${encodeURIComponent(t.id)}`;
 const logo=typeof t.logo_url==='string'&&(/^\/(?!\/)/.test(t.logo_url)||/^https:\/\//.test(t.logo_url))?t.logo_url:'';
 return <article className={`tc-card tc-${status}`} aria-label={`${t.name} — ${t.modalities?.name||'Campeonato'}`}>
  <div className="tc-heading"><div className="tc-logo">{logo?<img src={logo} alt={`Logo ${t.name}`} loading="lazy" onError={event=>{event.currentTarget.hidden=true;event.currentTarget.nextElementSibling.hidden=false}}/>:null}<span hidden={!!logo} className="tc-logo-fallback" aria-label="Logo ainda não informada"><svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path d="M8 3h8v6a4 4 0 0 1-8 0V3Zm4 10v5m-4 3h8M8 5H4v2a4 4 0 0 0 4 4m8-6h4v2a4 4 0 0 1-4 4"/></svg></span></div><div className="tc-identity"><p className="tc-modality">{t.modalities?.name||'Modalidade a confirmar'}{t.category?` · ${t.category}`:''}</p><h3><a href={url}>{t.name}</a></h3><div className="tc-tags"><span className={`tc-status tc-status-${status}`}><i aria-hidden="true"/>{labels[status]||'Consulte a organização'}</span><span className="tc-origin">{t.is_laes?'Organizado pela LAES':'Evento externo'}</span></div></div></div>
  <dl className="tc-facts"><div><dt>Prazo de inscrição</dt><dd>{deadline}</dd>{status==='inscricoes_encerradas'&&<small>Consulte a organização sobre novas vagas.</small>}</div><div><dt>Data do evento</dt><dd>{laesTournamentDate(t.starts_at)}</dd></div><div><dt>Valor da inscrição</dt><dd className={/^gratuit/i.test(t.fee||'')?'tc-free':''}>{t.fee||'Valor a confirmar'}</dd></div><div><dt>Plataforma</dt><dd>{t.platform||'Não informada'}</dd></div></dl>
  <div className="tc-prize"><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true"><path d="M8 3h8v6a4 4 0 0 1-8 0V3Zm4 10v5m-4 3h8M8 5H4v2a4 4 0 0 0 4 4m8-6h4v2a4 4 0 0 1-4 4"/></svg><div><span>Premiação</span><strong>{prize[0]}</strong>{prize.length>1&&<p>{prize.slice(1).join(' · ')}</p>}</div></div>
  <footer><span>{t.is_laes?'Uma competição da nossa Liga.':'Datas e vagas sujeitas à confirmação.'}</span><a href={url}>Ver detalhes e regulamento <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><path d="M5 12h14m-6-6 6 6-6 6"/></svg></a></footer>
 </article>;
}

export { laesPublicTournament };
