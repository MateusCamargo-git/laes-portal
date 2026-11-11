import React from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowUpRight, Instagram, Trophy, Users, Gamepad2 } from 'lucide-react';
import './styles.css';

const instagram = 'https://www.instagram.com/alfenas.esports/';
const campeonatos = [
  { nome: 'Seja Unifal', jogos: 'VALORANT · LOL · CS2 · BRAWL STARS', detalhe: 'Competição universitária' },
  { nome: 'CFLOL', jogos: 'LEAGUE OF LEGENDS', detalhe: 'Cenário competitivo de LoL' },
  { nome: 'Primordiais', jogos: 'COUNTER-STRIKE 2', detalhe: 'Competição de CS2' },
  { nome: 'Kivo Champions', jogos: 'COUNTER-STRIKE 2', detalhe: 'Competição de CS2' },
  { nome: 'Liga NOX', jogos: 'WILD RIFT', detalhe: 'Competição de Wild Rift' },
  { nome: 'Goddess', jogos: 'WILD RIFT FEMININO', detalhe: 'Cenário competitivo feminino' },
  { nome: 'Star Challenge', jogos: 'FREE FIRE', detalhe: 'Competição de Free Fire' }
];
const modalidades = ['League of Legends', 'Wild Rift', 'Mobile Legends', 'Counter-Strike 2', 'VALORANT', 'Free Fire', 'Brawl Stars', 'EA SPORTS FC'];
function App() {
  return <div className="site">
    <header className="header wrap"><a className="brand" href="/" aria-label="LAES — início"><span className="brand-icon">L</span><span>LAES<span className="brand-dot">.</span><small>LIGA ALFENENSE DE E-SPORTS</small></span></a><nav><a href="#sobre">A LIGA</a><a href="#modalidades">MODALIDADES</a><a href="#campeonatos">CAMPEONATOS</a><a href={instagram} target="_blank" rel="noopener noreferrer">INSTAGRAM <ArrowUpRight size={15}/></a></nav></header>
    <main><section className="hero wrap"><div className="hero-copy"><span className="eyebrow"><span className="live-dot"/> ALFENAS · MINAS GERAIS</span><h1>O TALENTO<br/>É <em>LOCAL.</em><br/>A AMBIÇÃO<br/>NÃO TEM <em>LIMITES.</em></h1><p>Uma comunidade. Múltiplas modalidades. Um novo cenário competitivo para Alfenas e todo o Sul de Minas.</p><div className="actions"><a className="primary" href={instagram} target="_blank" rel="noopener noreferrer">FAÇA PARTE DA LIGA <ArrowUpRight size={18}/></a><a className="secondary" href="#sobre">CONHEÇA O PROJETO ↓</a></div></div><div className="hero-art" aria-hidden="true"><div className="ring ring-one"/><div className="ring ring-two"/><div className="art-letter">L</div><div className="art-caption">ALFENAS<br/>E-SPORTS<br/>2026</div></div><div className="hero-index">01 / O INÍCIO</div></section>
    <section className="strip"><div className="wrap strip-inner"><span><Users size={18}/> COMUNIDADE</span><span><Gamepad2 size={18}/> COMPETITIVIDADE</span><span><Trophy size={18}/> OPORTUNIDADE</span></div></section>
    <section id="sobre" className="about wrap"><div><span className="section-kicker">01 — NOSSA ESSÊNCIA</span><h2>MAIS QUE<br/><em>UM JOGO.</em></h2></div><div className="about-text"><p>A LAES nasce para conectar talentos, fortalecer equipes e abrir caminhos para os e-sports em Alfenas e região.</p><p>Estamos construindo um espaço para quem joga, compete, organiza e acredita no potencial da nossa comunidade.</p><a href={instagram} target="_blank" rel="noopener noreferrer">ACOMPANHE NOSSA JORNADA <ArrowUpRight size={18}/></a></div></section>
    <section id="modalidades" className="modalities"><div className="wrap"><div className="section-head"><div><span className="section-kicker">02 — NOSSO UNIVERSO</span><h2>OITO MODALIDADES.<br/><em>UMA LIGA.</em></h2></div><span className="section-note">COMPETIÇÃO PARA TODOS OS ESTILOS</span></div><div className="game-grid">{modalidades.map((m,i)=><div className="game" key={m}><span>{String(i+1).padStart(2,'0')}</span><strong>{m}</strong><ArrowUpRight size={18}/></div>)}</div></div></section>
    <section id="campeonatos" className="championships"><div className="wrap"><div className="section-head"><div><span className="section-kicker">03 — CENÁRIO COMPETITIVO</span><h2>ONDE O TALENTO<br/><em>ENTRA EM JOGO.</em></h2></div><span className="section-note">COMPETIÇÕES NO RADAR DA LAES</span></div><p className="champ-intro">Acompanhamos oportunidades competitivas para conectar nossos atletas a novos desafios. Consulte os canais oficiais de cada organização para confirmar datas, regulamentos e inscrições.</p><div className="champ-grid">{campeonatos.map((c,i)=><article className="champ-card" key={c.nome}><div className="champ-top"><span>{String(i+1).padStart(2,'0')} / CAMPEONATO</span><Trophy size={21}/></div><div><h3>{c.nome}</h3><p>{c.detalhe}</p></div><span className="champ-games">{c.jogos}</span></article>)}</div><a className="champ-link" href={instagram} target="_blank" rel="noopener noreferrer">ACOMPANHE AS NOVIDADES NO INSTAGRAM <ArrowUpRight size={17}/></a></div></section>
    <section className="cta wrap"><span className="section-kicker">O PRÓXIMO CAPÍTULO COMEÇA AQUI</span><h2>O FUTURO<br/>É <em>NOSSO.</em></h2><a className="primary" href={instagram} target="_blank" rel="noopener noreferrer">CONECTE-SE COM A LAES <ArrowUpRight size={18}/></a></section></main>
    <footer className="footer"><div className="wrap footer-inner"><div className="brand footer-brand"><span className="brand-icon">L</span><span>LAES<span className="brand-dot">.</span><small>LIGA ALFENENSE DE E-SPORTS</small></span></div><span>FEITO EM ALFENAS, PARA QUEM VAI ALÉM.</span><a href={instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram da LAES"><Instagram size={22}/></a></div><div className="wrap footer-bottom">© {new Date().getFullYear()} LAES. TODOS OS DIREITOS RESERVADOS.</div></footer>
  </div>;
}

createRoot(document.getElementById('root')!).render(<React.StrictMode><App/></React.StrictMode>);
