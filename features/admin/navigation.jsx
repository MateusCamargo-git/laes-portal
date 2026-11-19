import React from "react";

export const adminPages = [
  { id: "overview", hash: "inicio", label: "Início", title: "Administração da LAES" },
  { id: "admin", hash: "equipes", label: "Equipes e capitães", title: "Equipes e capitães", detail: "Cadastre uma equipe ou revise pedidos de capitania.", action: "Criar equipe" },
  { id: "manage", hash: "elencos", label: "Gerenciar elencos", title: "Elencos e páginas de equipes", detail: "Atualize escudos e apresentações, envie convites e gerencie vagas.", action: "Editar equipes e elencos" },
  { id: "tournaments", hash: "campeonatos", label: "Campeonatos", title: "Campeonatos", detail: "Cadastre um evento, acompanhe rascunhos e publique na agenda.", action: "Gerenciar campeonatos" },
  { id: "access", hash: "acessos", label: "Pessoas e acessos", title: "Pessoas e acessos", detail: "Libere ou retire o acesso de gestores por modalidade.", action: "Gerenciar acessos" },
  { id: "legacy", hash: "conteudo", label: "Conteúdo do portal", title: "Conteúdo do portal", detail: "Encontre notícias, banners, parceiros e configurações." },
  { id: "community", hash: "comunidade", label: "Comunidade", title: "Comunidade", detail: "Busque atletas e convide jogadores para uma equipe." },
  { id: "badges", hash: "insignias", label: "Insígnias", title: "Insígnias", detail: "Gerencie conquistas e reconhecimentos da Liga." },
];

export function readAdminSection() {
  return adminPages.find(page => "#" + page.hash === location.hash)?.id || "overview";
}

export function AdminNavigation({ section, navigate, children }) {
  const current = adminPages.find(page => page.id === section) || adminPages[0];
  return <div className="lt-admin-layout">
    <nav className="lt-admin-nav" aria-label="Administração da Liga">
      {adminPages.map(page => <a key={page.id} href={`/admin#${page.hash}`}
        aria-current={page.id === section ? "page" : undefined} onClick={event => {
          if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
          event.preventDefault();
          navigate(page.id);
        }}>{page.label}</a>)}
    </nav>
    <div className="lt-admin-content">
      <header className="lt-admin-heading">
        <h1 id="laes-admin-section" tabIndex={-1}>{current.title}</h1>
        {current.detail && <p>{current.detail}</p>}
      </header>
      {children}
    </div>
  </div>;
}

export function AdminOverview({ navigate, pending, activeTeams }) {
  return <>
    <div className="lt-admin-summary">
      <div><strong>{activeTeams}</strong><span>equipes ativas</span></div>
      {pending != null && <div><strong>{pending}</strong><span>{pending === 1 ? "pedido de capitania pendente" : "pedidos de capitania pendentes"}</span></div>}
    </div>
    <section aria-labelledby="laes-admin-actions">
      <h2 id="laes-admin-actions">O que você quer fazer?</h2>
      <div className="lt-admin-task-grid">
        {adminPages.slice(1).map(page => <a className="lt-panel lt-admin-task" key={page.id} href={`/admin#${page.hash}`}
          onClick={event => {
            if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
            event.preventDefault();
            navigate(page.id);
          }}>
          <strong>{page.action || page.label}</strong><span>{page.detail}</span>
        </a>)}
      </div>
    </section>
  </>;
}
