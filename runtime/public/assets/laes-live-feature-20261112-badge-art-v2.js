// features/live/live.jsx
import React, { useState, useEffect, useRef, useCallback } from "./laes-team-react-20261111-v1-badge-art-v2.js";
import { MediaImage } from "./laes-team-runtime-20261111-v1-badge-art-v2.js";
import { jsx, jsxs } from "./laes-team-jsx-20261111-v1-badge-art-v2.js";
function LiveArrow() {
  return /* @__PURE__ */ jsx("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", "aria-hidden": "true", children: /* @__PURE__ */ jsx("path", { d: "M7 17 17 7M7 7h10v10" }) });
}
function useLiveFeed() {
  const [state, setState] = useState({ status: "loading", streams: [], checked_at: null, registered_channels: 0 }), [loading, setLoading] = useState(true), [revision, setRevision] = useState(0);
  useEffect(() => {
    let active = true, controller = null;
    async function refresh() {
      if (document.hidden) return;
      controller?.abort();
      controller = new AbortController();
      if (active) setLoading(true);
      try {
        const r = await fetch("/api/laes-live", { signal: controller.signal, cache: "no-store", credentials: "omit" });
        if (!r.ok) throw Error("unavailable");
        const next = await r.json();
        if (!Array.isArray(next.streams)) throw Error("invalid");
        if (active) setState(next);
      } catch (e) {
        if (active && e.name !== "AbortError") setState({ status: "unavailable", streams: [], checked_at: null, registered_channels: 0 });
      } finally {
        if (active) setLoading(false);
      }
    }
    refresh();
    const timer = setInterval(refresh, 45e3), visible = () => {
      if (!document.hidden) refresh();
    };
    document.addEventListener("visibilitychange", visible);
    return () => {
      active = false;
      clearInterval(timer);
      controller?.abort();
      document.removeEventListener("visibilitychange", visible);
    };
  }, [revision]);
  return { ...state, loading, retry: () => setRevision((r) => r + 1) };
}
function StreamCard({ stream }) {
  const [imageFailed, setImageFailed] = useState(false);
  return /* @__PURE__ */ jsxs("article", { className: "lv-card", children: [
    /* @__PURE__ */ jsxs("a", { className: "lv-poster", href: stream.url, target: "_blank", rel: "noopener noreferrer", "aria-label": `Assistir ${stream.nick} na Twitch \u2014 ${stream.title}`, children: [
      stream.thumbnail_url && !imageFailed ? /* @__PURE__ */ jsx("img", { src: stream.thumbnail_url, alt: `Transmiss\xE3o de ${stream.nick}`, loading: "lazy", onError: () => setImageFailed(true) }) : /* @__PURE__ */ jsxs("div", { className: "lv-poster-fallback", children: [
        /* @__PURE__ */ jsx("svg", { width: "42", height: "42", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.5", "aria-hidden": "true", children: /* @__PURE__ */ jsx("path", { d: "M8 5v14l11-7-11-7Z" }) }),
        /* @__PURE__ */ jsx("span", { children: "Assistir na Twitch" })
      ] }),
      /* @__PURE__ */ jsxs("span", { className: "lv-onair", children: [
        /* @__PURE__ */ jsx("i", {}),
        "AO VIVO"
      ] }),
      stream.mature && /* @__PURE__ */ jsx("span", { className: "lv-mature", children: "18+" }),
      /* @__PURE__ */ jsxs("span", { className: "lv-viewers", children: [
        /* @__PURE__ */ jsxs("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", "aria-hidden": "true", children: [
          /* @__PURE__ */ jsx("path", { d: "M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12Z" }),
          /* @__PURE__ */ jsx("circle", { cx: "12", cy: "12", r: "3" })
        ] }),
        Number(stream.viewer_count || 0).toLocaleString("pt-BR"),
        " ",
        Number(stream.viewer_count) === 1 ? "espectador" : "espectadores"
      ] }),
      /* @__PURE__ */ jsx("span", { className: "lv-play", "aria-hidden": "true", children: "\u25B6" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "lv-card-body", children: [
      /* @__PURE__ */ jsxs("div", { className: "lv-player", children: [
        /* @__PURE__ */ jsx(MediaImage, { src: stream.avatar_url, alt: "", className: "lv-avatar" }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("a", { href: stream.profile_url, className: "lv-nick", children: stream.nick }),
          /* @__PURE__ */ jsxs("span", { children: [
            "@",
            stream.channel_login
          ] })
        ] }),
        /* @__PURE__ */ jsx("svg", { className: "lv-twitch", width: "23", height: "23", viewBox: "0 0 24 24", fill: "currentColor", "aria-label": "Twitch", children: /* @__PURE__ */ jsx("path", { d: "M4 2 2 6v15h5v3l4-3h5l6-6V2H4Zm16 12-4 4h-6l-3 3v-3H4V4h16v10Zm-5-7h2v6h-2V7Zm-5 0h2v6h-2V7Z" }) })
      ] }),
      /* @__PURE__ */ jsx("h3", { children: /* @__PURE__ */ jsx("a", { href: stream.url, target: "_blank", rel: "noopener noreferrer", children: stream.title || "Transmiss\xE3o ao vivo" }) }),
      /* @__PURE__ */ jsxs("div", { className: "lv-card-footer", children: [
        /* @__PURE__ */ jsx("span", { children: stream.game_name || "Ao vivo na Twitch" }),
        /* @__PURE__ */ jsxs("a", { href: stream.url, target: "_blank", rel: "noopener noreferrer", children: [
          "Assistir ",
          /* @__PURE__ */ jsx("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", "aria-hidden": "true", children: /* @__PURE__ */ jsx("path", { d: "M7 17 17 7M7 7h10v10" }) })
        ] })
      ] })
    ] })
  ] });
}
function EmptyLive({ feed, compact = false }) {
  const unavailable = feed.status === "unavailable" || feed.status === "setup_required";
  return /* @__PURE__ */ jsxs("div", { className: `lv-empty ${compact ? "lv-empty-compact" : ""}`, role: "status", children: [
    /* @__PURE__ */ jsx("div", { className: "lv-empty-icon", "aria-hidden": "true", children: /* @__PURE__ */ jsxs("svg", { width: "32", height: "32", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.4", children: [
      /* @__PURE__ */ jsx("rect", { x: "3", y: "4", width: "18", height: "13", rx: "3" }),
      /* @__PURE__ */ jsx("path", { d: "m10 8 5 3-5 3V8Zm-3 13h10m-5-4v4" })
    ] }) }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("h3", { children: feed.status === "loading" ? "Conectando a nossa comunidade\u2026" : unavailable ? "Vamos atualizar as transmiss\xF5es em instantes." : feed.registered_channels ? "A pr\xF3xima live pode come\xE7ar a qualquer momento." : "A pr\xF3xima live da LAES pode ser a sua." }),
      /* @__PURE__ */ jsx("p", { children: feed.status === "loading" ? "Consultando as transmiss\xF5es da comunidade." : unavailable ? "N\xE3o foi poss\xEDvel consultar quem est\xE1 ao vivo agora. Tente novamente daqui a pouco." : feed.registered_channels ? "Nenhum canal cadastrado est\xE1 ao vivo agora. Quando a transmiss\xE3o come\xE7ar, ela aparece aqui automaticamente." : "Adicione seu canal Twitch no Cadastro de atleta, em Configura\xE7\xF5es. Suas transmiss\xF5es poder\xE3o aparecer por aqui." })
    ] }),
    unavailable ? /* @__PURE__ */ jsx("button", { className: "lv-button lv-secondary", onClick: feed.retry, disabled: feed.loading, children: "Tentar novamente" }) : feed.status !== "loading" && /* @__PURE__ */ jsxs("a", { className: "lv-button", href: "/painel", children: [
      "Cadastrar meu canal ",
      /* @__PURE__ */ jsx(LiveArrow, {})
    ] })
  ] });
}
function LiveSection() {
  const feed = useLiveFeed();
  return /* @__PURE__ */ jsx("section", { className: "lv-home", children: /* @__PURE__ */ jsxs("div", { className: "lv-container", children: [
    /* @__PURE__ */ jsxs("header", { className: "lv-section-heading", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs("p", { className: "lv-eyebrow", children: [
          /* @__PURE__ */ jsx("span", {}),
          "Da nossa comunidade para a sua tela"
        ] }),
        /* @__PURE__ */ jsxs("h2", { children: [
          "LAES ",
          /* @__PURE__ */ jsx("em", { children: "AO VIVO" })
        ] }),
        /* @__PURE__ */ jsx("p", { children: "Tor\xE7a, acompanhe e fortale\xE7a quem joga com a gente." })
      ] }),
      /* @__PURE__ */ jsxs("a", { className: "lv-link", href: "/ao-vivo", children: [
        "Ver todas as transmiss\xF5es ",
        /* @__PURE__ */ jsx(LiveArrow, {})
      ] })
    ] }),
    feed.streams.length ? /* @__PURE__ */ jsx("div", { className: "lv-grid", children: feed.streams.slice(0, 3).map((s) => /* @__PURE__ */ jsx(StreamCard, { stream: s }, s.channel_login)) }) : /* @__PURE__ */ jsx(EmptyLive, { feed, compact: true })
  ] }) });
}
function LivePage() {
  const feed = useLiveFeed(), [search, setSearch] = useState(""), [game, setGame] = useState("");
  const games = [...new Set(feed.streams.map((s) => s.game_name).filter(Boolean))].sort((a, b) => a.localeCompare(b, "pt-BR"));
  const streams = feed.streams.filter((s) => (!game || s.game_name === game) && (!search || [s.nick, s.channel_login, s.title, s.game_name].some((v) => (v || "").toLocaleLowerCase("pt-BR").includes(search.toLocaleLowerCase("pt-BR")))));
  const time = feed.checked_at ? new Intl.DateTimeFormat("pt-BR", { hour: "2-digit", minute: "2-digit", timeZone: "America/Sao_Paulo" }).format(new Date(feed.checked_at)) : null;
  return /* @__PURE__ */ jsxs("div", { className: "lv-page", children: [
    /* @__PURE__ */ jsx("section", { className: "lv-hero", children: /* @__PURE__ */ jsxs("div", { className: "lv-container", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs("p", { className: "lv-eyebrow", children: [
          /* @__PURE__ */ jsx("span", {}),
          "A Liga tamb\xE9m est\xE1 na Twitch"
        ] }),
        /* @__PURE__ */ jsxs("h1", { children: [
          "Nosso jogo.",
          /* @__PURE__ */ jsx("br", {}),
          "Nossa gente.",
          /* @__PURE__ */ jsx("br", {}),
          /* @__PURE__ */ jsx("em", { children: "AO VIVO." })
        ] }),
        /* @__PURE__ */ jsx("p", { children: "Quem representa a comunidade tamb\xE9m tem espa\xE7o na sua tela. Acompanhe os atletas da LAES e fa\xE7a parte da torcida." }),
        /* @__PURE__ */ jsxs("div", { className: "lv-hero-actions", children: [
          /* @__PURE__ */ jsxs("a", { className: "lv-button", href: "/painel", children: [
            "Quero aparecer aqui ",
            /* @__PURE__ */ jsx(LiveArrow, {})
          ] }),
          /* @__PURE__ */ jsx("a", { className: "lv-hero-secondary", href: "#transmissoes", children: "Explorar transmiss\xF5es \u2193" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "lv-hero-art", "aria-hidden": "true", children: [
        /* @__PURE__ */ jsx("div", { className: "lv-orbit" }),
        /* @__PURE__ */ jsx("svg", { width: "144", height: "144", viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ jsx("path", { d: "M4 2 2 6v15h5v3l4-3h5l6-6V2H4Zm16 12-4 4h-6l-3 3v-3H4V4h16v10Zm-5-7h2v6h-2V7Zm-5 0h2v6h-2V7Z" }) }),
        /* @__PURE__ */ jsx("span", { children: "Alfenas joga junto." })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxs("section", { className: "lv-container lv-directory", id: "transmissoes", children: [
      /* @__PURE__ */ jsxs("div", { className: "lv-directory-heading", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("p", { className: "lv-eyebrow", children: "Aperte o play na comunidade" }),
          /* @__PURE__ */ jsxs("h2", { children: [
            "Quem est\xE1 ao vivo ",
            /* @__PURE__ */ jsx("span", { className: "lv-count", children: feed.streams.length })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "lv-update", role: "status", children: [
          /* @__PURE__ */ jsx("span", { className: feed.loading ? "lv-checking" : "" }),
          feed.loading ? "Atualizando\u2026" : time ? `Atualizado \xE0s ${time}` : "Atualiza\xE7\xE3o autom\xE1tica",
          /* @__PURE__ */ jsx("button", { type: "button", onClick: feed.retry, disabled: feed.loading, "aria-label": "Atualizar transmiss\xF5es", children: /* @__PURE__ */ jsx("svg", { width: "17", height: "17", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.6", "aria-hidden": "true", children: /* @__PURE__ */ jsx("path", { d: "M20 7v5h-5M4 17v-5h5M6 7a7 7 0 0 1 12-1l2 2M4 16l2 2a7 7 0 0 0 12-1" }) }) })
        ] })
      ] }),
      feed.streams.length > 0 && /* @__PURE__ */ jsxs("div", { className: "lv-filters", children: [
        /* @__PURE__ */ jsxs("label", { children: [
          /* @__PURE__ */ jsx("span", { children: "Encontrar streamer" }),
          /* @__PURE__ */ jsx("input", { type: "search", value: search, onChange: (e) => setSearch(e.target.value), placeholder: "Nick, canal ou t\xEDtulo da live" })
        ] }),
        /* @__PURE__ */ jsxs("label", { children: [
          /* @__PURE__ */ jsx("span", { children: "Jogo ou categoria" }),
          /* @__PURE__ */ jsxs("select", { value: game, onChange: (e) => setGame(e.target.value), children: [
            /* @__PURE__ */ jsx("option", { value: "", children: "Todas as categorias" }),
            games.map((g) => /* @__PURE__ */ jsx("option", { children: g }, g))
          ] })
        ] })
      ] }),
      feed.streams.length ? streams.length ? /* @__PURE__ */ jsx("div", { className: "lv-grid", children: streams.map((s) => /* @__PURE__ */ jsx(StreamCard, { stream: s }, s.channel_login)) }) : /* @__PURE__ */ jsxs("div", { className: "lv-no-results", role: "status", children: [
        "Nenhuma transmiss\xE3o corresponde \xE0 sua busca. ",
        /* @__PURE__ */ jsx("button", { onClick: () => {
          setSearch("");
          setGame("");
        }, children: "Limpar filtros" })
      ] }) : /* @__PURE__ */ jsx(EmptyLive, { feed }),
      /* @__PURE__ */ jsxs("aside", { className: "lv-join", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("p", { className: "lv-eyebrow", children: "Seu canal tamb\xE9m \xE9 parte da Liga" }),
          /* @__PURE__ */ jsx("h2", { children: "Vai dar play? A gente d\xE1 palco." }),
          /* @__PURE__ */ jsx("p", { children: "No painel, abra Configura\xE7\xF5es e adicione seu canal da Twitch ao Cadastro de atleta. Quando voc\xEA entrar ao vivo, sua transmiss\xE3o poder\xE1 aparecer aqui automaticamente." })
        ] }),
        /* @__PURE__ */ jsxs("a", { className: "lv-button lv-secondary", href: "/painel", children: [
          "Adicionar meu canal ",
          /* @__PURE__ */ jsx(LiveArrow, {})
        ] })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "lv-footnote", children: "As informa\xE7\xF5es s\xE3o atualizadas automaticamente. Voc\xEA assiste \xE0s transmiss\xF5es diretamente na Twitch." })
    ] })
  ] });
}
export {
  LivePage,
  LiveSection
};
