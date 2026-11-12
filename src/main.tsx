import React from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowUpRight, Instagram, Trophy, Users, Gamepad2, Radio } from 'lucide-react';
import './styles.css';
import campeonatos from './campeonatos.json';

const instagram = 'https://www.instagram.com/alfenas.esports/';
const modalidades = ['League of Legends', 'Wild Rift', 'Mobile Legends', 'Counter-Strike 2', 'VALORANT', 'Free Fire', 'Brawl Stars', 'EA SPORTS FC'];
type LiveStream = { user_name: string; user_login: string; title: string; game_name: string; viewer_count: number; thumbnail_url: string; };
function LiveSection() {
  const [streams, setStreams] = React.useState<LiveStream[]>([]);
  const [error, setError] = React.useState(false);
  React.useEffect(() => {
    let active = true;
    const refresh = async () => {
      try {
        const response = await fetch('/api/twitch/live');
        if (!response.ok) throw new Error('Unavailable');
        const payload = await response.json();
        if (active) { setStreams(payload.streams || []); setError(false); }
      } catch { if (active) setError(true); }
    };
    void refresh();
    const interval = window.setInterval(() => void refresh(), 60000);
    return () => { active = false; window.clearInterval(interval); };
  }, []);
  return <section id="ao-vivo" className="live-section"><div className="wrap">
    <div className="section-head"><div><span className="section-kicker">04 — COMUNIDADE EM TRANSMISSÃO</span><h2>LAES <em>AO VIVO.</em></h2></div><span className="section-note"><Radio size={15}/> TWITCH</span></div>
    {streams.length ? <div className="live-grid">{streams.map(stream => <a className="live-card" key={stream.user_login} href={`https://www.twitch.tv/${encodeURIComponent(stream.user_login)}`} target="_blank" rel="noopener noreferrer">
      <div className="live-thumb"><img src={stream.thumbnail_url.replace('{width}', '440').replace('{height}', '248')} alt={`Transmissão de ${stream.user_name}`} loading="lazy"/><span className="live-badge">AO VIVO</span></div>
      <div className="live-card-info"><strong>{stream.user_name}</strong><span>{stream.game_name || 'Jogando agora'} · {stream.viewer_count.toLocaleString('pt-BR')} espectadores</span><p>{stream.title}</p></div>
    </a>)}</div> : <p className="live-empty">{error ? 'As transmissões estão temporariamente indisponíveis.' : 'Nenhum streamer da liga está ao vivo no momento. Volte em breve!'}</p>}
  </div></section>;
}
function App() {
  const [filtro, setFiltro] = React.useState('Todas');
  const categorias = ['Todas',...Array.from(new Set(campeonatos.map(c=>c.modalidade)))];
  const exibidos = campeonatos.filter(c=>filtro==='Todas'||c.modalidade===filtro);
  const dataBR=(v:string|null)=>v?new Date(v+'T12:00:00').toLocaleDateString('pt-BR'):'A confirmar';
  const situacao=(c:typeof campeonatos[number])=>c.prazo&&c.prazo<'2026-11-10'?'Prazo encerrado':'Verificar disponibilidade';
  return <div className="site">
    <header className="header wrap"><a className="brand" href="/" aria-label="LAES — início"><span className="brand-icon">L</span><span>LAES<span className="brand-dot">.</span><small>LIGA ALFENENSE DE E-SPORTS</small></span></a><nav><a href="#sobre">A LIGA</a><a href="#modalidades">MODALIDADES</a><a href="#campeonatos">CAMPEONATOS</a><a href="#ao-vivo">AO VIVO</a><a href={instagram} target="_blank" rel="noopener noreferrer">INSTAGRAM <ArrowUpRight size={15}/></a></nav></header>
    <main><section className="hero wrap"><div className="hero-copy"><span className="eyebrow"><span className="live-dot"/> ALFENAS · MINAS GERAIS</span><h1>O TALENTO<br/>É <em>LOCAL.</em><br/>A AMBIÇÃO<br/>NÃO TEM <em>LIMITES.</em></h1><p>Uma comunidade. Múltiplas modalidades. Um novo cenário competitivo para Alfenas e todo o Sul de Minas.</p><div className="actions"><a className="primary" href={instagram} target="_blank" rel="noopener noreferrer">FAÇA PARTE DA LIGA <ArrowUpRight size={18}/></a><a className="secondary" href="#sobre">CONHEÇA O PROJETO ↓</a></div></div><div className="hero-art" aria-hidden="true"><div className="ring ring-one"/><div className="ring ring-two"/><div className="art-letter">L</div><div className="art-caption">ALFENAS<br/>E-SPORTS<br/>2026</div></div><div className="hero-index">01 / O INÍCIO</div></section>
    <section className="strip"><div className="wrap strip-inner"><span><Users size={18}/> COMUNIDADE</span><span><Gamepad2 size={18}/> COMPETITIVIDADE</span><span><Trophy size={18}/> OPORTUNIDADE</span></div></section>
    <section id="sobre" className="about wrap"><div><span className="section-kicker">01 — NOSSA ESSÊNCIA</span><h2>MAIS QUE<br/><em>UM JOGO.</em></h2></div><div className="about-text"><p>A LAES nasce para conectar talentos, fortalecer equipes e abrir caminhos para os e-sports em Alfenas e região.</p><p>Estamos construindo um espaço para quem joga, compete, organiza e acredita no potencial da nossa comunidade.</p><a href={instagram} target="_blank" rel="noopener noreferrer">ACOMPANHE NOSSA JORNADA <ArrowUpRight size={18}/></a></div></section>
    <section id="modalidades" className="modalities"><div className="wrap"><div className="section-head"><div><span className="section-kicker">02 — NOSSO UNIVERSO</span><h2>OITO MODALIDADES.<br/><em>UMA LIGA.</em></h2></div><span className="section-note">COMPETIÇÃO PARA TODOS OS ESTILOS</span></div><div className="game-grid">{modalidades.map((m,i)=><div className="game" key={m}><span>{String(i+1).padStart(2,'0')}</span><strong>{m}</strong><ArrowUpRight size={18}/></div>)}</div></div></section>
    <section id="campeonatos" className="championships"><div className="wrap"><div className="section-head"><div><span className="section-kicker">03 — CENÁRIO COMPETITIVO</span><h2>ONDE O TALENTO<br/><em>ENTRA EM JOGO.</em></h2></div><span className="section-note">{campeonatos.length} REGISTROS NO RADAR DA LAES</span></div><p className="champ-intro">Competições monitoradas pela LAES. Os dados refletem nosso acompanhamento e não confirmam inscrições abertas. Consulte sempre o organizador.</p><div className="champ-filters" aria-label="Filtrar por modalidade">{categorias.map(c=><button type="button" className={filtro===c?'active':''} key={c} onClick={()=>setFiltro(c)}>{c}</button>)}</div><div className="champ-grid">{exibidos.map((c,i)=><article className="champ-card" key={c.nome+c.modalidade}><div className="champ-top"><span>{c.modalidade.toUpperCase()}</span><Trophy size={21}/></div><div><h3>{c.nome}</h3><p>{c.plataforma}</p></div><div className="champ-details"><span><b>INSCRIÇÃO</b>{c.inscricao}</span><span><b>PRAZO REGISTRADO</b>{c.prazo?dataBR(c.prazo):'Vagas limitadas / não informado'}</span><span><b>DATA DO EVENTO</b>{dataBR(c.data)}</span><span className="champ-prize"><b>PREMIAÇÃO</b>{c.premiacao}</span>{c.equipe&&<span className="champ-team"><b>EQUIPE LAES REGISTRADA</b>{c.equipe}</span>}</div><div className="champ-bottom"><span>{situacao(c)}</span><a href={c.regulamento} target="_blank" rel="noopener noreferrer">FONTE / REGULAMENTO <ArrowUpRight size={15}/></a></div></article>)}</div><p className="champ-disclaimer">Informações importadas da planilha de acompanhamento da LAES em 10/11/2026. Prazos, valores, premiações e participação podem mudar. Confirme com a organização antes de se inscrever.</p></div></section>
    <LiveSection/>\n    <section className="cta wrap"><span className="section-kicker">O PRÓXIMO CAPÍTULO COMEÇA AQUI</span><h2>O FUTURO<br/>É <em>NOSSO.</em></h2><a className="primary" href={instagram} target="_blank" rel="noopener noreferrer">CONECTE-SE COM A LAES <ArrowUpRight size={18}/></a></section></main>
    <footer className="footer"><div className="wrap footer-inner"><div className="brand footer-brand"><span className="brand-icon">L</span><span>LAES<span className="brand-dot">.</span><small>LIGA ALFENENSE DE E-SPORTS</small></span></div><span>FEITO EM ALFENAS, PARA QUEM VAI ALÉM.</span><a href={instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram da LAES"><Instagram size={22}/></a></div><div className="wrap footer-bottom">© {new Date().getFullYear()} LAES. TODOS OS DIREITOS RESERVADOS.</div></footer>
  </div>;
}

createRoot(document.getElementById('root')!).render(<React.StrictMode><App/></React.StrictMode>);
