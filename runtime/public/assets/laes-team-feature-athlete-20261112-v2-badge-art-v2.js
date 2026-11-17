// features/loading/loading.jsx
import React from "./laes-team-react-20261111-v1-badge-art-v2.js";
import { jsx, jsxs } from "./laes-team-jsx-20261111-v1-badge-art-v2.js";
function LeagueLoading({ label = "Preparando a pr\xF3xima partida\u2026" }) {
  return /* @__PURE__ */ jsxs("div", { className: "ll-loading", role: "status", "aria-live": "polite", "aria-busy": "true", children: [
    /* @__PURE__ */ jsxs("div", { className: "ll-mark", "aria-hidden": "true", children: [
      /* @__PURE__ */ jsx("span", { className: "ll-orbit" }),
      /* @__PURE__ */ jsx("img", { src: "/images/laes/logo-principal.png", alt: "", width: "70", height: "70" })
    ] }),
    /* @__PURE__ */ jsx("p", { children: label })
  ] });
}
function CardSkeletons({ profile = false }) {
  return /* @__PURE__ */ jsxs("div", { className: `ll-skeletons${profile ? " ll-profile-skeleton" : ""}`, role: "status", "aria-live": "polite", "aria-busy": "true", children: [
    /* @__PURE__ */ jsx("span", { className: "ll-sr", children: profile ? "Carregando perfil do atleta\u2026" : "Carregando jogadores da comunidade\u2026" }),
    /* @__PURE__ */ jsx("div", { className: profile ? "ll-profile-grid" : "pc-grid", "aria-hidden": "true", children: Array.from({ length: profile ? 3 : 6 }, (_, i) => /* @__PURE__ */ jsxs("div", { className: "ll-placeholder", children: [
      /* @__PURE__ */ jsxs("div", { className: "ll-placeholder-head", children: [
        /* @__PURE__ */ jsx("span", { className: "ll-skeleton ll-avatar" }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("span", { className: "ll-skeleton ll-line" }),
          /* @__PURE__ */ jsx("span", { className: "ll-skeleton ll-short" })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "ll-placeholder-badges", children: [0, 1, 2].map((n) => /* @__PURE__ */ jsx("span", { className: "ll-skeleton ll-badge" }, n)) }),
      /* @__PURE__ */ jsx("span", { className: "ll-skeleton ll-line" }),
      /* @__PURE__ */ jsx("span", { className: "ll-skeleton ll-short" })
    ] }, i)) })
  ] });
}

// features/profiles/community.jsx
import React4, { useState as useState2, useEffect as useEffect2, useRef } from "./laes-team-react-20261111-v1-badge-art-v2.js";
import { supabase as supabase2, useAuth as useAuth2, MediaImage, Section } from "./laes-team-runtime-20261111-v1-badge-art-v2.js";

// features/badges/artwork.jsx
import React2 from "./laes-team-react-20261111-v1-badge-art-v2.js";
import { Fragment, jsx as jsx2, jsxs as jsxs2 } from "./laes-team-jsx-20261111-v1-badge-art-v2.js";
var lion = /* @__PURE__ */ jsxs2(Fragment, { children: [
  /* @__PURE__ */ jsx2("path", { className: "lb-emblem-fill", d: "m24 12 7 4 4-1-1 6 5 4-3 6 1 6-7 2-6 6-6-6-7-2 1-6-3-6 5-4-1-6 4 1z" }),
  /* @__PURE__ */ jsx2("path", { className: "lb-emblem-cut", d: "m16 23 5-3 3 2 3-2 5 3-2 9-6 7-6-7z" }),
  /* @__PURE__ */ jsx2("path", { d: "m17 25 4 2m10-2-4 2m-5 4h4l-2 3zM24 34v3m-3 0 3 1 3-1" })
] });
var crown = /* @__PURE__ */ jsx2("path", { className: "lb-emblem-fill", d: "m14 13 5 4 5-8 5 8 5-4-2 10H16z" });
var art = {
  beta: /* @__PURE__ */ jsxs2(Fragment, { children: [
    /* @__PURE__ */ jsx2("g", { transform: "translate(2 1) scale(.92)", children: lion }),
    /* @__PURE__ */ jsx2("path", { className: "lb-emblem-fill", d: "m24 4 1.6 3.2 3.5.5-2.6 2.5.6 3.5-3.1-1.6-3.1 1.6.6-3.5-2.6-2.5 3.5-.5z" }),
    /* @__PURE__ */ jsx2("path", { className: "lb-fine", d: "m8 13 3 2M6 20l4 1m30-8-3 2m5 5-4 1" })
  ] }),
  team: /* @__PURE__ */ jsxs2(Fragment, { children: [
    /* @__PURE__ */ jsx2("path", { className: "lb-emblem-fill", d: "m8 17 10-4 6 7-7 7-9-3zm32 0-10-4-6 7 7 7 9-3zM17 29l7-6 7 6-2 10-5 4-5-4z" }),
    /* @__PURE__ */ jsx2("path", { d: "m10 28 5 10m23-10-5 10M24 10v5" }),
    /* @__PURE__ */ jsx2("path", { className: "lb-fine", d: "m13 19 4-1m18 1-4-1m-7 12v7" })
  ] }),
  captain: /* @__PURE__ */ jsxs2(Fragment, { children: [
    /* @__PURE__ */ jsx2("g", { transform: "translate(6 11) scale(.75)", children: lion }),
    crown,
    /* @__PURE__ */ jsx2("path", { d: "M16 25h16" }),
    /* @__PURE__ */ jsx2("path", { className: "lb-fine", d: "m9 32 3 1m27-1-3 1" })
  ] }),
  debut: /* @__PURE__ */ jsxs2(Fragment, { children: [
    /* @__PURE__ */ jsx2("path", { className: "lb-fine", d: "M9 34c0-6 7-10 15-10s15 4 15 10M7 36c0 6 8 10 17 10s17-4 17-10" }),
    /* @__PURE__ */ jsx2("path", { className: "lb-emblem-fill", d: "m32 9 5-1-1 6-13 15-5-4z" }),
    /* @__PURE__ */ jsx2("path", { d: "m15 23 10 10m-5-5-8 9m-2-2 5 5" }),
    /* @__PURE__ */ jsx2("path", { className: "lb-fine", d: "m23 24 10-12M13 42h5m12 0h5" })
  ] }),
  warrior: /* @__PURE__ */ jsxs2(Fragment, { children: [
    /* @__PURE__ */ jsx2("path", { className: "lb-emblem-fill", d: "m9 12 6 2 14 18-4 4-14-18zm30 0-6 2-14 18 4 4 14-18z" }),
    /* @__PURE__ */ jsx2("path", { d: "m23 35 8-7m-6 10 8 7m-16-17 8 7m-2 3-8 7" }),
    /* @__PURE__ */ jsx2("path", { className: "lb-emblem-fill", d: "M25 15c5 7-1 8 3 12l3-4c6 8 2 15-7 15-8 0-12-8-6-14l2 4c-1-6 4-8 5-13z" }),
    /* @__PURE__ */ jsx2("path", { className: "lb-emblem-cut", d: "M24 28c-5 6-4 8 0 9 4-1 5-4 0-9z" })
  ] }),
  champion: /* @__PURE__ */ jsxs2(Fragment, { children: [
    /* @__PURE__ */ jsx2("path", { d: "M15 18H9v5c0 5 4 8 8 8m16-13h6v5c0 5-4 8-8 8" }),
    /* @__PURE__ */ jsx2("path", { className: "lb-emblem-fill", d: "M15 16h18v10c0 6-4 10-9 10s-9-4-9-10z" }),
    /* @__PURE__ */ jsx2("path", { className: "lb-emblem-cut", d: "m24 20 2 4 4 .5-3 3 .8 4-3.8-2-3.8 2 .8-4-3-3 4-.5z" }),
    /* @__PURE__ */ jsx2("path", { d: "M24 36v7m-7 0h14" }),
    /* @__PURE__ */ jsx2("g", { transform: "translate(6 0) scale(.75)", children: crown })
  ] }),
  streamer: /* @__PURE__ */ jsxs2(Fragment, { children: [
    /* @__PURE__ */ jsx2("path", { className: "lb-emblem-fill", d: "M11 20h20v17H11zM32 25l7-5v17l-7-5z" }),
    /* @__PURE__ */ jsx2("path", { className: "lb-emblem-cut", d: "m18 24 8 5-8 5z" }),
    /* @__PURE__ */ jsx2("path", { d: "M14 16c4-5 12-5 16 0m-19-4c6-7 16-7 22 0M17 41h9m-5-4v4" }),
    /* @__PURE__ */ jsx2("circle", { className: "lb-stream-dot", cx: "29", cy: "21", r: "2.5" })
  ] })
};
var small = {
  beta: /* @__PURE__ */ jsxs2(Fragment, { children: [
    /* @__PURE__ */ jsx2("path", { className: "lb-emblem-fill", d: "m24 12 9 5 4 9-4 11-9 7-9-7-4-11 4-9z" }),
    /* @__PURE__ */ jsx2("path", { className: "lb-emblem-cut", d: "m17 23 7 4 7-4-2 12-5 4-5-4z" }),
    /* @__PURE__ */ jsx2("path", { d: "m21 31 3 2 3-2" }),
    /* @__PURE__ */ jsx2("path", { className: "lb-emblem-fill", d: "m24 5 2 4 4 1-3 3 .5 4-3.5-2-3.5 2 .5-4-3-3 4-1z" })
  ] }),
  team: /* @__PURE__ */ jsx2(Fragment, { children: /* @__PURE__ */ jsx2("path", { className: "lb-emblem-fill", d: "m9 18 10-4 5 7-8 8-7-4zm30 0-10-4-5 7 8 8 7-4zM17 31l7-7 7 7-3 10-4 3-4-3z" }) }),
  captain: /* @__PURE__ */ jsxs2(Fragment, { children: [
    crown,
    /* @__PURE__ */ jsx2("path", { d: "M16 26h16" }),
    /* @__PURE__ */ jsx2("path", { className: "lb-emblem-fill", d: "m16 29 8-3 8 3-2 10-6 5-6-5z" }),
    /* @__PURE__ */ jsx2("path", { className: "lb-emblem-cut", d: "m20 32 4 2 4-2-4 7z" })
  ] }),
  debut: /* @__PURE__ */ jsxs2(Fragment, { children: [
    /* @__PURE__ */ jsx2("path", { className: "lb-emblem-fill", d: "m32 9 6-1-1 6-15 17-5-5z" }),
    /* @__PURE__ */ jsx2("path", { d: "m14 23 11 11m-5-6-9 11M8 37l6 6M11 44h26" })
  ] }),
  warrior: /* @__PURE__ */ jsxs2(Fragment, { children: [
    /* @__PURE__ */ jsx2("path", { d: "m11 13 26 30M37 13 11 43" }),
    /* @__PURE__ */ jsx2("path", { className: "lb-emblem-fill", d: "M25 13c6 8-1 10 4 14l3-5c7 12 1 19-8 19-10 0-14-10-7-18l3 6c-1-7 4-11 5-16z" }),
    /* @__PURE__ */ jsx2("path", { className: "lb-emblem-cut", d: "M24 29c-4 5-4 9 0 10 5-1 5-5 0-10z" })
  ] }),
  champion: /* @__PURE__ */ jsxs2(Fragment, { children: [
    /* @__PURE__ */ jsx2("path", { className: "lb-emblem-fill", d: "M15 13h18v14c0 6-4 9-9 9s-9-3-9-9z" }),
    /* @__PURE__ */ jsx2("path", { d: "M14 17H9v7c0 5 4 7 7 7m18-14h5v7c0 5-4 7-7 7M24 36v7m-7 0h14" }),
    /* @__PURE__ */ jsx2("path", { className: "lb-emblem-cut", d: "m24 18 2 4 4 1-3 3 .5 4-3.5-2-3.5 2 .5-4-3-3 4-1z" })
  ] }),
  streamer: /* @__PURE__ */ jsxs2(Fragment, { children: [
    /* @__PURE__ */ jsx2("path", { className: "lb-emblem-fill", d: "M9 21h23v17H9zm24 4 7-5v19l-7-6z" }),
    /* @__PURE__ */ jsx2("path", { className: "lb-emblem-cut", d: "m17 25 8 5-8 5z" }),
    /* @__PURE__ */ jsx2("path", { d: "M13 16c4-5 12-5 16 0m-19-5c6-7 16-7 22 0" })
  ] })
};
function BadgeIcon({ badge, locked = false, compact = false }) {
  const id = "laes-badge-" + React2.useId().replace(/:/g, "");
  return /* @__PURE__ */ jsxs2("svg", { className: `lb-icon lb-${badge.color}${locked ? " lb-locked" : ""}${compact ? " lb-mini" : " lb-detailed"}`, viewBox: "0 0 64 76", fill: "none", "aria-hidden": "true", focusable: "false", "data-badge": badge.id, "data-detail": compact ? "compact" : "detailed", children: [
    /* @__PURE__ */ jsxs2("defs", { children: [
      /* @__PURE__ */ jsxs2("linearGradient", { id: id + "-rim", x1: "8", y1: "4", x2: "52", y2: "70", gradientUnits: "userSpaceOnUse", children: [
        /* @__PURE__ */ jsx2("stop", { stopColor: "var(--lb-bright)" }),
        /* @__PURE__ */ jsx2("stop", { offset: ".23", stopColor: "var(--lb-main)" }),
        /* @__PURE__ */ jsx2("stop", { offset: ".5", stopColor: "var(--lb-bright)" }),
        /* @__PURE__ */ jsx2("stop", { offset: ".7", stopColor: "var(--lb-main)" }),
        /* @__PURE__ */ jsx2("stop", { offset: "1", stopColor: "var(--lb-bright)" })
      ] }),
      /* @__PURE__ */ jsxs2("linearGradient", { id: id + "-face", x1: "15", y1: "12", x2: "49", y2: "64", gradientUnits: "userSpaceOnUse", children: [
        /* @__PURE__ */ jsx2("stop", { stopColor: "var(--lb-face-light)" }),
        /* @__PURE__ */ jsx2("stop", { offset: "1", stopColor: "var(--lb-bg)" })
      ] })
    ] }),
    /* @__PURE__ */ jsx2("path", { d: "M32 2 58 12v24c0 16-14 27-26 37C20 63 6 52 6 36V12z", fill: compact ? "var(--lb-main)" : `url(#${id}-rim)` }),
    /* @__PURE__ */ jsx2("path", { d: "M32 7 53 15v21c0 13-11 23-21 31-10-8-21-18-21-31V15z", fill: `url(#${id}-face)`, stroke: "var(--lb-rim-shadow)", strokeWidth: "1.5" }),
    !compact && /* @__PURE__ */ jsxs2(Fragment, { children: [
      /* @__PURE__ */ jsx2("path", { d: "M32 11 49 17v19c0 11-9 20-17 27-8-7-17-16-17-27V17z", stroke: "var(--lb-main)", strokeWidth: ".65" }),
      /* @__PURE__ */ jsx2("path", { d: "m12 17 20-7 19 7M32 67v5", stroke: "var(--lb-bright)", strokeWidth: ".8", opacity: ".75" }),
      /* @__PURE__ */ jsx2("path", { d: "M17 20v17l15 23 15-23V20L32 14z", fill: "var(--lb-main)", opacity: ".06" }),
      /* @__PURE__ */ jsx2("path", { className: "lb-etch", d: "m13 20 36 32m-36-23 30 28m-27-14 17 18" }),
      /* @__PURE__ */ jsx2("path", { d: "m10 14 3 1m38 0 3-1M20 61l2-2m20 2-2-2", stroke: "var(--lb-bright)", strokeWidth: "1" })
    ] }),
    /* @__PURE__ */ jsx2("g", { transform: "translate(8 10)", className: "lb-art", strokeWidth: compact ? 2.3 : 1.7, strokeLinecap: "round", strokeLinejoin: "round", children: compact ? small[badge.id] : art[badge.id] }),
    !compact && /* @__PURE__ */ jsxs2("g", { className: "lb-laurels", stroke: "var(--lb-main)", strokeWidth: "1", fill: "none", children: [
      /* @__PURE__ */ jsx2("path", { d: "M17 49c2 7 7 12 15 15m15-15c-2 7-7 12-15 15" }),
      /* @__PURE__ */ jsx2("path", { d: "m19 53-4-1 2 4 4 1m2 0-4 1 3 3 4-1m19-7 4-1-2 4-4 1m-2 0 4 1-3 3-4-1" })
    ] })
  ] });
}

// features/badges/badges.jsx
import React3, { useState, useEffect } from "./laes-team-react-20261111-v1-badge-art-v2.js";
import { supabase, useAuth } from "./laes-team-runtime-20261111-v1-badge-art-v2.js";
import { Fragment as Fragment2, jsx as jsx3, jsxs as jsxs3 } from "./laes-team-jsx-20261111-v1-badge-art-v2.js";
var BADGES = [
  { id: "beta", name: "Beta Tester", tag: "Edi\xE7\xE3o de origem", description: "Conta criada de 1\xBA de novembro de 2026 a 28 de fevereiro de 2027. Uma marca permanente de quem chegou no come\xE7o.", color: "gold" },
  { id: "team", name: "Parte do Time", tag: "V\xEDnculo atual", description: "Integrante confirmado de uma equipe ativa da LAES. Acompanha sua participa\xE7\xE3o no elenco.", color: "wine" },
  { id: "captain", name: "Capit\xE3o", tag: "Lideran\xE7a atual", description: "Capit\xE3o aprovado de uma equipe ativa. A ins\xEDgnia acompanha sua fun\xE7\xE3o.", color: "orange" },
  { id: "debut", name: "Estreante", tag: "Primeiro campeonato", description: "Primeiro campeonato disputado e confirmado pela administra\xE7\xE3o.", color: "silver" },
  { id: "warrior", name: "Guerreiro", tag: "5 campeonatos", description: "Cinco campeonatos distintos disputados, com participa\xE7\xE3o confirmada.", color: "orange" },
  { id: "champion", name: "Campe\xE3o", tag: "Primeiro t\xEDtulo", description: "Primeiro t\xEDtulo de campeonato confirmado pela administra\xE7\xE3o da LAES.", color: "gold" },
  { id: "streamer", name: "Voz da Arena", tag: "Canal Twitch vinculado", description: "Leva seu jogo para al\xE9m da partida. Canal Twitch v\xE1lido conectado \xE0 comunidade LAES. Permanece enquanto o canal estiver vinculado; estar ao vivo \xE9 um indicador separado.", color: "violet" }
];
function useBadges(nick) {
  const [state, setState] = useState({ loading: true, data: null, error: false }), [revision, setRevision] = useState(0);
  useEffect(() => {
    let alive = true;
    setState({ loading: true, data: null, error: false });
    supabase.rpc("get_athlete_badges", { _nick: nick || null }).then(({ data, error }) => {
      if (alive) setState({ loading: false, data, error: !!error });
    }).catch(() => {
      if (alive) setState({ loading: false, data: null, error: true });
    });
    return () => {
      alive = false;
    };
  }, [nick, revision]);
  return { ...state, retry: () => setRevision((v) => v + 1) };
}
function BadgeStrip({ codes = [] }) {
  const [open, setOpen] = useState(null), items = codes.map((code) => BADGES.find((b) => b.id === code)).filter(Boolean).slice(0, 3);
  if (!items.length) return null;
  return /* @__PURE__ */ jsxs3("div", { className: "lb-strip-wrap", children: [
    /* @__PURE__ */ jsx3("div", { className: "lb-strip", role: "group", "aria-label": "Ins\xEDgnias em destaque", children: items.map((b) => /* @__PURE__ */ jsx3("button", { type: "button", title: b.name, "aria-label": b.name, "aria-expanded": open === b.id, onClick: () => setOpen((v) => v === b.id ? null : b.id), children: /* @__PURE__ */ jsx3(BadgeIcon, { badge: b, compact: true }) }, b.id)) }),
    open && items.some((b) => b.id === open) && /* @__PURE__ */ jsxs3("p", { className: "lb-strip-description", role: "status", children: [
      /* @__PURE__ */ jsx3("strong", { children: BADGES.find((b) => b.id === open).name }),
      " \xB7 ",
      BADGES.find((b) => b.id === open).description
    ] })
  ] });
}
function BadgeCollection({ nick, compact = false }) {
  const auth = useAuth(), q = useBadges(nick || auth.profile?.nick), [selected, setSelected] = useState(null), [draft, setDraft] = useState([]), [saving, setSaving] = useState(false), [saveError, setSaveError] = useState(""), [saveNotice, setSaveNotice] = useState("");
  useEffect(() => {
    if (q.data) setDraft(q.data.spotlight || q.data.earned.slice(0, 3));
  }, [q.data]);
  async function save() {
    setSaving(true);
    setSaveError("");
    setSaveNotice("");
    try {
      const { error } = await supabase.rpc("set_badge_spotlights", { codes: draft });
      if (error) throw error;
      setSaveNotice("Destaques salvos. Suas escolhas aparecem na comunidade e no perfil.");
      window.dispatchEvent(new Event("laes-badges-updated"));
      q.retry();
    } catch (e) {
      setSaveError(e.code === "P0001" ? e.message : "N\xE3o foi poss\xEDvel salvar os destaques. Tente novamente.");
    } finally {
      setSaving(false);
    }
  }
  if (q.loading) return compact ? null : /* @__PURE__ */ jsx3("p", { className: "lb-message", role: "status", children: "Carregando ins\xEDgnias\u2026" });
  if (q.error) return /* @__PURE__ */ jsxs3("div", { className: "lb-message", role: "alert", children: [
    "N\xE3o foi poss\xEDvel carregar as ins\xEDgnias. ",
    /* @__PURE__ */ jsx3("button", { type: "button", onClick: q.retry, children: "Tentar novamente" })
  ] });
  if (!q.data) return null;
  const earned = new Set(q.data.earned), items = compact ? BADGES.filter((b) => earned.has(b.id)) : BADGES;
  if (compact && !items.length) return null;
  return /* @__PURE__ */ jsxs3("section", { className: `lb-collection${compact ? " lb-compact" : ""}`, "aria-label": "Ins\xEDgnias da LAES", children: [
    /* @__PURE__ */ jsxs3("header", { children: [
      /* @__PURE__ */ jsxs3("div", { children: [
        /* @__PURE__ */ jsx3("p", { className: "lb-eyebrow", children: "Sua hist\xF3ria na liga" }),
        /* @__PURE__ */ jsx3("h3", { children: compact ? "Ins\xEDgnias da LAES" : "Minhas ins\xEDgnias" })
      ] }),
      /* @__PURE__ */ jsxs3("span", { children: [
        earned.size,
        " de ",
        BADGES.length,
        " conquistadas"
      ] })
    ] }),
    !compact && /* @__PURE__ */ jsxs3("div", { className: "lb-spotlight-editor", children: [
      /* @__PURE__ */ jsx3("h4", { children: "Suas tr\xEAs favoritas" }),
      /* @__PURE__ */ jsx3("p", { children: "Escolha at\xE9 tr\xEAs ins\xEDgnias conquistadas para destacar no card da comunidade e no seu perfil. A ordem segue sua sele\xE7\xE3o; voc\xEA tamb\xE9m pode deixar sem destaques." }),
      /* @__PURE__ */ jsx3(BadgeStrip, { codes: draft }),
      /* @__PURE__ */ jsxs3("span", { className: "lb-selection-count", children: [
        draft.length,
        " de 3 selecionadas"
      ] })
    ] }),
    /* @__PURE__ */ jsx3("div", { className: "lb-grid", children: items.map((b) => {
      const unlocked = earned.has(b.id), progress = b.id === "warrior" ? `${Math.min(q.data.participations, 5)} de 5 campeonatos` : b.id === "debut" ? `${Math.min(q.data.participations, 1)} de 1 campeonato` : b.id === "champion" ? `${Math.min(q.data.titles, 1)} de 1 t\xEDtulo` : null;
      return /* @__PURE__ */ jsxs3("div", { className: "lb-choice", children: [
        /* @__PURE__ */ jsxs3("button", { type: "button", className: `lb-card${unlocked ? " lb-earned" : " lb-pending"}`, title: `${b.name}: ${b.description}`, "aria-expanded": selected === b.id, "aria-label": `${b.name}. ${unlocked ? "Conquistada" : "A conquistar"}. ${b.description}`, onClick: () => setSelected((v) => v === b.id ? null : b.id), children: [
          /* @__PURE__ */ jsx3(BadgeIcon, { badge: b, locked: !unlocked, compact }),
          /* @__PURE__ */ jsx3("strong", { children: b.name }),
          /* @__PURE__ */ jsx3("span", { children: unlocked ? b.tag : "A conquistar" }),
          !compact && progress && /* @__PURE__ */ jsx3("small", { children: progress })
        ] }, b.id),
        !compact && /* @__PURE__ */ jsxs3("label", { className: "lb-choose", children: [
          /* @__PURE__ */ jsx3("input", { type: "checkbox", "aria-label": `Destacar ${b.name}`, checked: draft.includes(b.id), disabled: !unlocked || saving || !draft.includes(b.id) && draft.length >= 3, onChange: (e) => {
            setSaveNotice("");
            setSaveError("");
            setDraft((v) => e.target.checked ? [...v, b.id] : v.filter((id) => id !== b.id));
          } }),
          /* @__PURE__ */ jsx3("span", { children: "Destacar" })
        ] })
      ] }, b.id);
    }) }),
    selected && /* @__PURE__ */ jsxs3("div", { className: "lb-description", role: "status", children: [
      /* @__PURE__ */ jsx3("strong", { children: BADGES.find((b) => b.id === selected).name }),
      /* @__PURE__ */ jsx3("p", { children: BADGES.find((b) => b.id === selected).description }),
      !earned.has(selected) && selected === "beta" && /* @__PURE__ */ jsx3("p", { children: "Exclusiva para contas criadas no per\xEDodo de abertura, no hor\xE1rio de Bras\xEDlia." })
    ] }),
    !compact && /* @__PURE__ */ jsxs3("div", { className: "lb-save-row", children: [
      /* @__PURE__ */ jsx3("button", { type: "button", className: "lt-button", disabled: saving || JSON.stringify(draft) === JSON.stringify(q.data.spotlight || q.data.earned.slice(0, 3)), onClick: save, children: saving ? "Salvando\u2026" : "Salvar destaques" }),
      saveError && /* @__PURE__ */ jsx3("p", { role: "alert", children: saveError }),
      saveNotice && /* @__PURE__ */ jsx3("p", { role: "status", children: saveNotice })
    ] }),
    !compact && /* @__PURE__ */ jsx3("p", { className: "lb-footnote", children: "Beta Tester e conquistas de campeonatos ficam no seu hist\xF3rico. Equipe, capitania e Twitch acompanham seus v\xEDnculos atuais. S\xF3 participa\xE7\xF5es efetivamente disputadas e confirmadas contam." })
  ] });
}
function BadgeAdmin() {
  const [search, setSearch] = useState(""), [filter, setFilter] = useState(""), [user, setUser] = useState(""), [tournament, setTournament] = useState(""), [won, setWon] = useState(false), [checked, setChecked] = useState(false), [data, setData] = useState(null), [error, setError] = useState(""), [notice, setNotice] = useState(""), [busy, setBusy] = useState(false), [loading, setLoading] = useState(true), [revision, setRevision] = useState(0);
  useEffect(() => {
    let alive = true;
    setLoading(true);
    supabase.rpc("manage_athlete_badges", { action: "state", payload: { search: filter, user_id: user } }).then(({ data: data2, error: error2 }) => {
      if (!alive) return;
      if (error2) setError("N\xE3o foi poss\xEDvel carregar. Verifique seu acesso de administrador.");
      else {
        setData(data2);
        setError("");
      }
      setLoading(false);
    }).catch(() => {
      if (alive) {
        setError("N\xE3o foi poss\xEDvel carregar. Tente novamente.");
        setLoading(false);
      }
    });
    return () => {
      alive = false;
    };
  }, [filter, user, revision]);
  async function mutate(action, id) {
    setBusy(true);
    setError("");
    setNotice("");
    try {
      const { error: error2 } = await supabase.rpc("manage_athlete_badges", { action, payload: { user_id: user, tournament_id: id || tournament, won } });
      if (error2) throw error2;
      setNotice(action === "remove" ? "Confirma\xE7\xE3o retirada. As ins\xEDgnias foram recalculadas." : "Participa\xE7\xE3o confirmada. As ins\xEDgnias j\xE1 foram atualizadas.");
      setChecked(false);
      setRevision((v) => v + 1);
    } catch (e) {
      setError(e.code === "42501" ? "Somente administradores podem confirmar participa\xE7\xF5es." : e.code === "P0001" ? e.message : "N\xE3o foi poss\xEDvel salvar. Tente novamente.");
    } finally {
      setBusy(false);
    }
  }
  return /* @__PURE__ */ jsxs3("div", { className: "lb-admin", children: [
    /* @__PURE__ */ jsxs3("div", { className: "lt-panel", children: [
      /* @__PURE__ */ jsx3("p", { className: "lb-eyebrow", children: "Reconhecimento com hist\xF3ria" }),
      /* @__PURE__ */ jsx3("h2", { children: "Ins\xEDgnias da LAES" }),
      /* @__PURE__ */ jsx3("p", { children: "Beta Tester, Parte do Time, Capit\xE3o e Voz da Arena s\xE3o autom\xE1ticas. Confirme campeonatos disputados para liberar Estreante, Guerreiro e Campe\xE3o. O mesmo campeonato conta uma \xFAnica vez por atleta." }),
      /* @__PURE__ */ jsx3("p", { className: "lt-muted", children: "Beta Tester: contas criadas entre 01/11/2026 e 28/02/2027, inclusive, no hor\xE1rio de Bras\xEDlia." })
    ] }),
    /* @__PURE__ */ jsxs3("div", { className: "lt-panel", children: [
      /* @__PURE__ */ jsx3("h3", { children: "Confirmar participa\xE7\xE3o" }),
      /* @__PURE__ */ jsxs3("form", { className: "lt-form", onSubmit: (e) => {
        e.preventDefault();
        setUser("");
        setTournament("");
        setWon(false);
        setChecked(false);
        setFilter(search.trim());
      }, children: [
        /* @__PURE__ */ jsxs3("label", { className: "lt-field", children: [
          "Buscar atleta pelo nick",
          /* @__PURE__ */ jsx3("input", { value: search, maxLength: 60, onChange: (e) => setSearch(e.target.value) })
        ] }),
        /* @__PURE__ */ jsx3("button", { className: "lt-button lt-secondary", disabled: busy, children: "Buscar" })
      ] }),
      loading && /* @__PURE__ */ jsx3("p", { role: "status", children: "Carregando\u2026" }),
      error && /* @__PURE__ */ jsxs3("p", { className: "lt-notice lt-error", role: "alert", children: [
        error,
        " ",
        /* @__PURE__ */ jsx3("button", { type: "button", onClick: () => setRevision((v) => v + 1), children: "Tentar novamente" })
      ] }),
      notice && /* @__PURE__ */ jsx3("p", { className: "lt-notice", role: "status", children: notice }),
      data && /* @__PURE__ */ jsxs3(Fragment2, { children: [
        /* @__PURE__ */ jsxs3("form", { className: "lt-form lb-admin-form", onSubmit: (e) => {
          e.preventDefault();
          if (checked) mutate("confirm");
        }, children: [
          /* @__PURE__ */ jsxs3("label", { className: "lt-field", children: [
            "Atleta",
            /* @__PURE__ */ jsxs3("select", { required: true, disabled: busy, value: user, onChange: (e) => {
              setUser(e.target.value);
              setTournament("");
              setWon(false);
              setChecked(false);
              setNotice("");
            }, children: [
              /* @__PURE__ */ jsx3("option", { value: "", children: "Selecione o atleta" }),
              data.athletes.map((p) => /* @__PURE__ */ jsx3("option", { value: p.id, children: p.nick }, p.id))
            ] })
          ] }),
          /* @__PURE__ */ jsxs3("label", { className: "lt-field", children: [
            "Campeonato disputado",
            /* @__PURE__ */ jsxs3("select", { required: true, disabled: busy, value: tournament, onChange: (e) => {
              setTournament(e.target.value);
              setChecked(false);
              setWon(false);
            }, children: [
              /* @__PURE__ */ jsx3("option", { value: "", children: "Selecione o campeonato" }),
              data.tournaments.map((t) => /* @__PURE__ */ jsx3("option", { value: t.id, children: t.name }, t.id))
            ] })
          ] }),
          !data.tournaments.length && /* @__PURE__ */ jsx3("p", { className: "lt-muted", children: "Ainda n\xE3o h\xE1 campeonatos eleg\xEDveis. Cadastre o evento no conte\xFAdo do portal com a data real da disputa. Eventos futuros ou cancelados n\xE3o contam." }),
          /* @__PURE__ */ jsxs3("label", { className: "lt-check", children: [
            /* @__PURE__ */ jsx3("input", { type: "checkbox", disabled: busy, checked: won, onChange: (e) => setWon(e.target.checked) }),
            /* @__PURE__ */ jsx3("span", { children: "O atleta foi campe\xE3o desta competi\xE7\xE3o." })
          ] }),
          /* @__PURE__ */ jsxs3("label", { className: "lt-check", children: [
            /* @__PURE__ */ jsx3("input", { type: "checkbox", disabled: busy, required: true, checked, onChange: (e) => setChecked(e.target.checked) }),
            /* @__PURE__ */ jsx3("span", { children: "Conferi o resultado e confirmo que o atleta realmente disputou o campeonato." })
          ] }),
          /* @__PURE__ */ jsx3("button", { className: "lt-button", disabled: busy || loading || !user || !tournament || !checked, children: busy ? "Salvando\u2026" : "Confirmar participa\xE7\xE3o" })
        ] }),
        user && /* @__PURE__ */ jsxs3("div", { className: "lb-history", children: [
          /* @__PURE__ */ jsx3("h3", { children: "Participa\xE7\xF5es confirmadas" }),
          !data.history.length ? /* @__PURE__ */ jsx3("p", { className: "lt-muted", children: "Nenhuma participa\xE7\xE3o confirmada para este atleta." }) : data.history.map((h) => /* @__PURE__ */ jsxs3("article", { className: "lt-request", children: [
            /* @__PURE__ */ jsx3("strong", { children: h.name }),
            /* @__PURE__ */ jsx3("p", { children: h.won ? "Campe\xE3o" : "Participa\xE7\xE3o confirmada" }),
            /* @__PURE__ */ jsx3("button", { type: "button", className: "lt-button lt-secondary", disabled: busy || loading, onClick: () => {
              if (window.confirm("Retirar esta confirma\xE7\xE3o? As ins\xEDgnias ser\xE3o recalculadas.")) mutate("remove", h.tournament_id);
            }, children: "Corrigir: retirar confirma\xE7\xE3o" })
          ] }, h.tournament_id))
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx3("div", { className: "lb-preview", "aria-label": "Cole\xE7\xE3o de ins\xEDgnias", children: BADGES.map((b) => /* @__PURE__ */ jsxs3("div", { children: [
      /* @__PURE__ */ jsx3(BadgeIcon, { badge: b }),
      /* @__PURE__ */ jsx3("strong", { children: b.name }),
      /* @__PURE__ */ jsx3("p", { children: b.description })
    ] }, b.id)) })
  ] });
}

// features/profiles/community.jsx
import { Fragment as Fragment3, jsx as jsx4, jsxs as jsxs4 } from "./laes-team-jsx-20261111-v1-badge-art-v2.js";
function useRemote(fn, deps) {
  const [state, setState] = useState2({ loading: true, data: null, error: "" }), [version, setVersion] = useState2(0), previousKey = useRef(null);
  const key = JSON.stringify(deps);
  useEffect2(() => {
    let active = true;
    const changed = previousKey.current !== key;
    previousKey.current = key;
    setState((s) => ({ ...s, loading: changed || s.data === null, error: "" }));
    fn().then((data) => {
      if (active) setState({ data, loading: false, error: "" });
    }).catch(() => {
      if (active) setState({ data: null, loading: false, error: "N\xE3o foi poss\xEDvel carregar agora." });
    });
    return () => {
      active = false;
    };
  }, [...deps, version]);
  return { ...state, retry: () => setVersion((v) => v + 1) };
}
async function request(name, params) {
  const { data, error } = await supabase2.rpc(name, params);
  if (error) throw error;
  return data;
}
function Arrow() {
  return /* @__PURE__ */ jsx4("svg", { className: "pc-arrow", width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", "aria-hidden": "true", children: /* @__PURE__ */ jsx4("path", { d: "M7 17 17 7M7 7h10v10" }) });
}
function Photo({ src, nick, className = "" }) {
  const [failed, setFailed] = useState2(false);
  return /* @__PURE__ */ jsxs4("span", { className: `pc-photo ${className}`, children: [
    /* @__PURE__ */ jsx4("span", { "aria-hidden": "true", children: Array.from(nick || "?")[0].toLocaleUpperCase("pt-BR") }),
    src && !failed && /* @__PURE__ */ jsx4(MediaImage, { src, alt: "", onError: () => setFailed(true) })
  ] });
}
function CommunityCards({ players = [], teamId = "", busy = false, onInvite }) {
  const auth = useAuth2(), nicks = JSON.stringify(players.map((p) => p.nick));
  const badges = useRemote(() => players.length ? request("get_badge_spotlights", { nicks: JSON.parse(nicks) }) : Promise.resolve({}), [nicks]);
  useEffect2(() => {
    window.addEventListener("laes-badges-updated", badges.retry);
    const id = setInterval(badges.retry, 6e4);
    return () => {
      window.removeEventListener("laes-badges-updated", badges.retry);
      clearInterval(id);
    };
  }, [nicks]);
  return /* @__PURE__ */ jsxs4(Fragment3, { children: [
    players.map((p) => /* @__PURE__ */ jsxs4("article", { className: "pc-card", children: [
      /* @__PURE__ */ jsxs4("a", { href: `/atletas/${encodeURIComponent(p.nick)}`, className: "pc-identity", "aria-label": `Ver perfil de ${p.nick}`, children: [
        /* @__PURE__ */ jsx4(Photo, { src: p.avatar_url, nick: p.nick }),
        /* @__PURE__ */ jsxs4("div", { children: [
          /* @__PURE__ */ jsx4("h3", { children: p.nick }),
          /* @__PURE__ */ jsx4("span", { className: p.online ? "pc-online" : "pc-offline", children: p.online ? "\u25CF On-line agora" : "\u25CB Off-line" })
        ] })
      ] }),
      /* @__PURE__ */ jsx4("div", { className: "pc-badges", children: /* @__PURE__ */ jsx4(BadgeStrip, { codes: badges.data?.[p.nick] || [] }) }),
      /* @__PURE__ */ jsxs4("div", { className: "pc-games", children: [
        (p.modalities || p.games?.map((g) => g.modality_name) || []).map((m, i) => /* @__PURE__ */ jsx4("span", { children: typeof m === "string" ? m : m.name }, i)),
        !p.modalities?.length && !p.games?.length && /* @__PURE__ */ jsx4("small", { children: "Modalidades ainda n\xE3o cadastradas" })
      ] }),
      /* @__PURE__ */ jsxs4("div", { className: "pc-actions", children: [
        /* @__PURE__ */ jsxs4("a", { className: "pc-profile-link", href: `/atletas/${encodeURIComponent(p.nick)}`, children: [
          "Ver perfil ",
          /* @__PURE__ */ jsx4(Arrow, {})
        ] }),
        teamId && p.id !== auth.user?.id && /* @__PURE__ */ jsx4("button", { type: "button", className: "lt-button lt-secondary", disabled: busy, onClick: () => onInvite?.(p), children: "Convidar para a equipe" })
      ] })
    ] }, p.id || p.nick)),
    badges.error && players.length > 0 && /* @__PURE__ */ jsxs4("p", { className: "pc-badge-error", role: "alert", children: [
      "N\xE3o foi poss\xEDvel carregar os destaques. ",
      /* @__PURE__ */ jsx4("button", { type: "button", onClick: badges.retry, children: "Tentar novamente" })
    ] })
  ] });
}
function CommunityDirectory() {
  const auth = useAuth2(), [search, setSearch] = useState2(""), [term, setTerm] = useState2(""), [modality, setModality] = useState2(""), [online, setOnline] = useState2(false), [page, setPage] = useState2(0), [team, setTeam] = useState2(""), [busy, setBusy] = useState2(false), [notice, setNotice] = useState2(""), [inviteError, setInviteError] = useState2("");
  useEffect2(() => {
    const id = setTimeout(() => {
      setTerm(search.trim());
      setPage(0);
    }, 300);
    return () => clearTimeout(id);
  }, [search]);
  const settings = useRemote(async () => {
    const results = await Promise.all([supabase2.from("team_roster_status").select("*").order("sort").order("name"), supabase2.from("modalities").select("id,name").eq("active", true).order("sort")]);
    for (const r of results) if (r.error) throw r.error;
    return { teams: results[0].data, modalities: results[1].data };
  }, []);
  const directory = useRemote(() => request("community_action", { action: "directory", payload: { search: term, modality, online_only: online, offset: page * 40 } }), [term, modality, online, page]);
  useEffect2(() => {
    const id = setInterval(directory.retry, 3e4);
    return () => clearInterval(id);
  }, [term, modality, online, page]);
  const managed = (settings.data?.teams || []).filter((t) => auth.isAdmin || auth.captainTeamIds?.includes(t.id)), teamId = managed.some((t) => t.id === team) ? team : managed[0]?.id || "";
  async function invite(p) {
    setBusy(true);
    setNotice("");
    setInviteError("");
    try {
      await request("community_action", { action: "invite", payload: { team_id: teamId, user_id: p.id } });
      setNotice(`Convite enviado para ${p.nick}. O atleta deve aceitar no painel.`);
    } catch (e) {
      setInviteError(e.code === "P0001" ? e.message : "N\xE3o foi poss\xEDvel enviar o convite. Tente novamente.");
    } finally {
      setBusy(false);
    }
  }
  return /* @__PURE__ */ jsxs4("section", { className: "lt-portal pc-directory", "aria-label": "Comunidade LAES", children: [
    /* @__PURE__ */ jsx4("p", { className: "lb-eyebrow", children: "Alfenas joga junto" }),
    /* @__PURE__ */ jsx4("h2", { children: "Comunidade LAES" }),
    /* @__PURE__ */ jsx4("p", { className: "pc-intro", children: "Conhe\xE7a os atletas, seus jogos e suas conquistas. Toque na foto ou no nome para abrir o perfil." }),
    settings.error && /* @__PURE__ */ jsxs4("p", { role: "alert", children: [
      settings.error,
      " ",
      /* @__PURE__ */ jsx4("button", { type: "button", onClick: settings.retry, children: "Tentar novamente" })
    ] }),
    /* @__PURE__ */ jsxs4("div", { className: "pc-filters", children: [
      /* @__PURE__ */ jsxs4("label", { className: "lt-field", children: [
        "Buscar nickname",
        /* @__PURE__ */ jsx4("input", { value: search, onChange: (e) => setSearch(e.target.value), maxLength: 80, placeholder: "Quem joga com voc\xEA?" })
      ] }),
      /* @__PURE__ */ jsxs4("label", { className: "lt-field", children: [
        "Modalidade",
        /* @__PURE__ */ jsxs4("select", { value: modality, onChange: (e) => {
          setModality(e.target.value);
          setPage(0);
        }, children: [
          /* @__PURE__ */ jsx4("option", { value: "", children: "Todas as modalidades" }),
          settings.data?.modalities.map((m) => /* @__PURE__ */ jsx4("option", { value: m.id, children: m.name }, m.id))
        ] })
      ] }),
      managed.length > 0 && /* @__PURE__ */ jsxs4("label", { className: "lt-field", children: [
        "Convidar jogadores para",
        /* @__PURE__ */ jsx4("select", { value: teamId, disabled: busy, onChange: (e) => setTeam(e.target.value), children: managed.map((t) => /* @__PURE__ */ jsx4("option", { value: t.id, children: t.name }, t.id)) })
      ] })
    ] }),
    /* @__PURE__ */ jsxs4("label", { className: "lt-check", children: [
      /* @__PURE__ */ jsx4("input", { type: "checkbox", checked: online, onChange: (e) => {
        setOnline(e.target.checked);
        setPage(0);
      } }),
      /* @__PURE__ */ jsx4("span", { children: "Mostrar somente on-line" })
    ] }),
    notice && /* @__PURE__ */ jsx4("p", { className: "lt-notice", role: "status", children: notice }),
    inviteError && /* @__PURE__ */ jsx4("p", { className: "lt-notice lt-error", role: "alert", children: inviteError }),
    directory.loading ? /* @__PURE__ */ jsx4(CardSkeletons, {}) : directory.error ? /* @__PURE__ */ jsxs4("p", { role: "alert", children: [
      directory.error,
      " ",
      /* @__PURE__ */ jsx4("button", { type: "button", onClick: directory.retry, children: "Tentar novamente" })
    ] }) : /* @__PURE__ */ jsxs4(Fragment3, { children: [
      /* @__PURE__ */ jsx4("div", { className: "pc-grid", children: /* @__PURE__ */ jsx4(CommunityCards, { players: (directory.data || []).filter((p) => !online || p.online), teamId, busy, onInvite: invite }) }),
      !directory.data?.length && /* @__PURE__ */ jsx4("p", { children: "Nenhum jogador encontrado. Tente outra modalidade ou busca." })
    ] }),
    /* @__PURE__ */ jsxs4("nav", { className: "pc-pages", "aria-label": "P\xE1ginas da comunidade", children: [
      /* @__PURE__ */ jsx4("button", { className: "lt-button lt-secondary", disabled: !page || directory.loading, onClick: () => setPage((v) => v - 1), children: "Anterior" }),
      /* @__PURE__ */ jsxs4("span", { children: [
        "P\xE1gina ",
        page + 1
      ] }),
      /* @__PURE__ */ jsx4("button", { className: "lt-button lt-secondary", disabled: directory.loading || (directory.data?.length || 0) < 40, onClick: () => setPage((v) => v + 1), children: "Pr\xF3xima" })
    ] })
  ] });
}
function externalInstagram(value) {
  if (!value) return null;
  const raw = value.trim();
  if (/^@?[a-zA-Z0-9_.]{1,30}$/.test(raw)) return "https://www.instagram.com/" + raw.replace(/^@/, "") + "/";
  try {
    const u = new URL(raw);
    if (u.protocol === "https:" && ["instagram.com", "www.instagram.com"].includes(u.hostname)) return u.href;
  } catch {
  }
  return null;
}
function PublicAthleteProfile({ nick }) {
  const auth = useAuth2(), q = useRemote(() => request("get_athlete_profile", { _nick: nick }), [nick]);
  if (q.loading) return /* @__PURE__ */ jsx4(Section, { children: /* @__PURE__ */ jsx4(CardSkeletons, { profile: true }) });
  if (q.error) return /* @__PURE__ */ jsx4(Section, { children: /* @__PURE__ */ jsxs4("p", { role: "alert", children: [
    q.error,
    " ",
    /* @__PURE__ */ jsx4("button", { type: "button", onClick: q.retry, children: "Tentar novamente" })
  ] }) });
  if (!q.data) return /* @__PURE__ */ jsxs4(Section, { children: [
    /* @__PURE__ */ jsx4("h1", { children: "Perfil privado ou n\xE3o encontrado" }),
    /* @__PURE__ */ jsx4("p", { children: "Este atleta n\xE3o tem um perfil p\xFAblico dispon\xEDvel." }),
    /* @__PURE__ */ jsx4("a", { className: "lt-link", href: "/equipes", children: "Conhecer as equipes \u2192" })
  ] });
  const p = q.data, instagram = externalInstagram(p.instagram), own = auth.profile?.nick === p.nick;
  return /* @__PURE__ */ jsx4("div", { className: "lt-portal pc-public", children: /* @__PURE__ */ jsxs4(Section, { children: [
    /* @__PURE__ */ jsx4("a", { className: "pc-back", href: "/painel", children: "Voltar ao painel" }),
    /* @__PURE__ */ jsxs4("header", { className: "pc-profile-header", children: [
      /* @__PURE__ */ jsx4(Photo, { src: p.avatar_url, nick: p.nick, className: "pc-photo-large" }),
      /* @__PURE__ */ jsxs4("div", { className: "pc-profile-heading", children: [
        /* @__PURE__ */ jsx4("p", { className: "lb-eyebrow", children: "Atleta da LAES" }),
        /* @__PURE__ */ jsx4("h1", { children: p.nick }),
        (p.city || p.state) && /* @__PURE__ */ jsx4("p", { className: "pc-location", children: [p.city, p.state].filter(Boolean).join(" \xB7 ") }),
        /* @__PURE__ */ jsx4(BadgeStrip, { codes: p.badges?.spotlight || [] })
      ] }),
      own && /* @__PURE__ */ jsx4("a", { className: "lt-button lt-secondary", href: "/painel", children: "Meu painel" })
    ] }),
    /* @__PURE__ */ jsxs4("div", { className: "pc-profile-layout", children: [
      /* @__PURE__ */ jsxs4("div", { children: [
        /* @__PURE__ */ jsxs4("section", { className: "pc-info", children: [
          /* @__PURE__ */ jsx4("h2", { children: "Sobre o atleta" }),
          /* @__PURE__ */ jsx4("p", { className: "pc-bio", children: p.bio || "Este atleta ainda n\xE3o adicionou uma apresenta\xE7\xE3o." }),
          p.availability && /* @__PURE__ */ jsxs4(Fragment3, { children: [
            /* @__PURE__ */ jsx4("h3", { children: "Hor\xE1rios para jogar" }),
            /* @__PURE__ */ jsx4("p", { className: "pc-bio", children: p.availability })
          ] }),
          (instagram || p.twitch_channel) && /* @__PURE__ */ jsxs4("div", { className: "pc-socials", children: [
            instagram && /* @__PURE__ */ jsxs4("a", { href: instagram, target: "_blank", rel: "noopener noreferrer", children: [
              "Instagram ",
              /* @__PURE__ */ jsx4(Arrow, {})
            ] }),
            p.twitch_channel && /^[a-z0-9_]{1,25}$/.test(p.twitch_channel) && /* @__PURE__ */ jsxs4("a", { href: `https://www.twitch.tv/${p.twitch_channel}`, target: "_blank", rel: "noopener noreferrer", children: [
              "Twitch ",
              /* @__PURE__ */ jsx4(Arrow, {})
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs4("section", { className: "pc-info", children: [
          /* @__PURE__ */ jsx4("h2", { children: "Jogos e posi\xE7\xF5es" }),
          p.games?.length ? /* @__PURE__ */ jsx4("div", { className: "pc-game-list", children: p.games.map((g, i) => /* @__PURE__ */ jsxs4("article", { children: [
            /* @__PURE__ */ jsx4("h3", { children: g.name }),
            /* @__PURE__ */ jsx4("div", { className: "pc-games", children: g.roles?.map((role) => /* @__PURE__ */ jsx4("span", { children: role }, role)) }),
            g.rank && /* @__PURE__ */ jsxs4("p", { children: [
              /* @__PURE__ */ jsx4("strong", { children: "Rank:" }),
              " ",
              g.rank
            ] }),
            g.game_nick && /* @__PURE__ */ jsxs4("p", { children: [
              /* @__PURE__ */ jsx4("strong", { children: "Nick no jogo:" }),
              " ",
              g.game_nick
            ] })
          ] }, i)) }) : /* @__PURE__ */ jsx4("p", { children: "Modalidades ainda n\xE3o informadas." })
        ] })
      ] }),
      /* @__PURE__ */ jsxs4("section", { className: "pc-info pc-team-list", children: [
        /* @__PURE__ */ jsx4("h2", { children: "Equipes atuais" }),
        p.teams?.length ? p.teams.map((t) => /* @__PURE__ */ jsxs4("a", { href: `/equipes/${encodeURIComponent(t.slug)}`, children: [
          /* @__PURE__ */ jsxs4("strong", { children: [
            t.name,
            " ",
            /* @__PURE__ */ jsx4(Arrow, {})
          ] }),
          /* @__PURE__ */ jsxs4("span", { children: [
            t.is_captain ? "Capit\xE3o \xB7 " : "",
            t.member_type === "reserva" ? "Reserva" : "Titular",
            t.role_name && t.role_name.toLocaleLowerCase("pt-BR") !== "capit\xE3o" ? ` \xB7 ${t.role_name}` : ""
          ] })
        ] }, t.slug)) : /* @__PURE__ */ jsx4("p", { children: "Ainda sem v\xEDnculo com uma equipe ativa." })
      ] })
    ] }),
    /* @__PURE__ */ jsx4(BadgeCollection, { nick: p.nick, compact: true })
  ] }) });
}

// features/teams/teams.jsx
import React6, { useState as useState4, useEffect as useEffect4, useRef as useRef3, useCallback } from "./laes-team-react-20261111-v1-badge-art-v2.js";
import { supabase as supabase4, useAuth as useAuth4, PageHero, Section as Section2, MediaImage as MediaImage3 } from "./laes-team-runtime-20261111-v1-badge-art-v2.js";

// features/teams/athlete-registration.jsx
import React5, { useState as useState3, useEffect as useEffect3, useRef as useRef2 } from "./laes-team-react-20261111-v1-badge-art-v2.js";
import { supabase as supabase3, useAuth as useAuth3, MediaImage as MediaImage2 } from "./laes-team-runtime-20261111-v1-badge-art-v2.js";
import { jsx as jsx5, jsxs as jsxs5 } from "./laes-team-jsx-20261111-v1-badge-art-v2.js";
function googlePhoto(user) {
  const isGoogle = user?.app_metadata?.provider === "google" || user?.app_metadata?.providers?.includes("google");
  if (!isGoogle) return "";
  const url = user?.user_metadata?.avatar_url || user?.user_metadata?.picture || "";
  return /^https:\/\/([a-z0-9-]+\.)*googleusercontent\.com\//.test(url) ? url : "";
}
var UFS = "AC AL AP AM BA CE DF ES GO MA MT MS MG PA PB PR PE PI RJ RN RS RO RR SC SP SE TO".split(" ");
var INTERESTS = [["wants_compete", "Competir"], ["wants_captain", "Liderar uma equipe"], ["wants_coach", "Ser coach"], ["wants_volunteer", "Apoiar a Liga"]];
function Field({ label, children, hint }) {
  return /* @__PURE__ */ jsxs5("label", { className: "ar-field", children: [
    /* @__PURE__ */ jsx5("span", { children: label }),
    React5.cloneElement(children, { "aria-label": label }),
    hint && /* @__PURE__ */ jsx5("small", { children: hint })
  ] });
}
function AthleteRegistration({ editing = false, onSaved }) {
  const auth = useAuth3(), profile = auth.profile || {}, [data, setData] = useState3(null), [loadError, setLoadError] = useState3(""), [attempt, setAttempt] = useState3(0);
  useEffect3(() => {
    let active = true;
    setLoadError("");
    Promise.all([supabase3.from("modalities").select("id,name,slug").eq("active", true).order("sort"), supabase3.from("modality_roles").select("modality_id,name,sort").order("sort"), supabase3.from("athlete_games").select("*").eq("user_id", auth.user.id), supabase3.from("profiles_private").select("full_name,whatsapp,share_team_contact").eq("user_id", auth.user.id).maybeSingle()]).then((rs) => {
      if (!active) return;
      const error = rs.find((r) => r.error)?.error;
      if (error) {
        setLoadError("N\xE3o conseguimos carregar seu cadastro. Tente novamente.");
        return;
      }
      setData({ modalities: rs[0].data, roles: rs[1].data, games: rs[2].data, contact: rs[3].data || {} });
    }).catch(() => {
      if (active) setLoadError("Sem conex\xE3o. Tente carregar seu cadastro novamente.");
    });
    return () => {
      active = false;
    };
  }, [auth.user.id, attempt]);
  if (loadError) return /* @__PURE__ */ jsxs5("div", { className: "ar-message", role: "alert", children: [
    /* @__PURE__ */ jsx5("p", { children: loadError }),
    /* @__PURE__ */ jsx5("button", { className: "lt-button", onClick: () => setAttempt((v) => v + 1), children: "Tentar novamente" })
  ] });
  if (!data) return /* @__PURE__ */ jsx5("div", { className: "ar-message", role: "status", children: "Carregando seu cadastro de atleta\u2026" });
  return /* @__PURE__ */ jsx5(RegistrationForm, { ...{ auth, profile, data, editing, onSaved } }, auth.user.id);
}
function RegistrationForm({ auth, profile, data, editing, onSaved }) {
  const [step, setStep] = useState3(0), [busy, setBusy] = useState3(false), [error, setError] = useState3(""), [success, setSuccess] = useState3(() => editing && typeof sessionStorage !== "undefined" ? sessionStorage.getItem("laes-athlete-saved") || "" : "");
  const [values, setValues] = useState3(() => ({ nick: profile.nick || "", full_name: data.contact.full_name || "", city: profile.city || "", state: profile.state || "", bio: profile.bio || "", availability: profile.availability || "", instagram: profile.instagram || "", twitch_channel: profile.twitch_channel || "", whatsapp: data.contact.whatsapp || "", shared: !!data.contact.share_team_contact, ...Object.fromEntries(INTERESTS.map(([k]) => [k, !!profile[k]])) }));
  const [games, setGames] = useState3(() => Object.fromEntries(data.games.map((g) => [g.modality_id, { roles: g.roles || [], rank: g.rank || "", game_nick: g.game_nick || "" }]))), [photo, setPhoto] = useState3(null), [avatar, setAvatar] = useState3(profile.avatar_url || googlePhoto(auth.user)), [preview, setPreview] = useState3("");
  const photoInput = useRef2(null), heading = useRef2(null), mounted = useRef2(true);
  useEffect3(() => () => {
    mounted.current = false;
  }, []);
  useEffect3(() => {
    heading.current?.focus({ preventScroll: true });
  }, [step]);
  useEffect3(() => {
    if (success) sessionStorage.removeItem("laes-athlete-saved");
  }, [success]);
  useEffect3(() => {
    if (!photo) {
      setPreview("");
      return;
    }
    const url = URL.createObjectURL(photo);
    setPreview(url);
    return () => URL.revokeObjectURL(url);
  }, [photo]);
  const set = (key, value) => setValues((v) => ({ ...v, [key]: value }));
  function validate(part) {
    if (part === 0) {
      if (values.full_name.trim().length < 3) return "Preencha seu nome completo.";
      if (values.nick.trim().length < 2 || values.nick.trim().length > 40) return "Escolha um nick entre 2 e 40 caracteres.";
      if (values.city.trim().length < 2 || !UFS.includes(values.state)) return "Preencha sua cidade e selecione seu estado.";
    }
    if (part === 1) {
      if (!Object.keys(games).length) return "Escolha pelo menos uma modalidade.";
      for (const [id, g] of Object.entries(games)) if (data.roles.some((r) => r.modality_id === id) && !g.roles.length) return "Escolha pelo menos uma posi\xE7\xE3o em cada modalidade selecionada.";
    }
    return "";
  }
  async function submit(e) {
    e.preventDefault();
    setError("");
    setSuccess("");
    const problem = validate(editing ? 0 : step) || (editing ? validate(1) : "");
    if (problem) {
      setError(problem);
      return;
    }
    if (!editing && step < 2) {
      setStep((s) => s + 1);
      return;
    }
    setBusy(true);
    try {
      let avatarUrl = avatar;
      if (photo) {
        const ext = { "image/png": "png", "image/jpeg": "jpg", "image/webp": "webp" }[photo.type];
        if (!ext || photo.size > 5242880) throw Error("Envie uma foto PNG, JPG ou WEBP de at\xE9 5 MB.");
        const path = `avatars/${auth.user.id}/${crypto.randomUUID()}.${ext}`;
        const upload = await supabase3.storage.from("media").upload(path, photo, { contentType: photo.type, upsert: false });
        if (upload.error) throw Error("N\xE3o conseguimos enviar sua foto. Tente novamente.");
        avatarUrl = `storage://media/${path}`;
        if (mounted.current) {
          setAvatar(avatarUrl);
          setPhoto(null);
        }
      }
      const result = await supabase3.rpc("save_athlete_registration", { input: { ...values, avatar_url: avatarUrl, games: Object.entries(games).map(([modality_id, g]) => ({ modality_id, ...g })) } });
      if (result.error) {
        if (result.error.code === "23505") throw Error(/twitch/i.test((result.error.message || "") + " " + (result.error.details || "")) ? "Esse canal Twitch j\xE1 est\xE1 vinculado a outro atleta." : "Esse nick j\xE1 est\xE1 em uso. Escolha outro.");
        throw Error(result.error.code === "P0001" ? result.error.message : "N\xE3o conseguimos salvar seu cadastro. Suas escolhas est\xE3o aqui; tente novamente.");
      }
      if (editing) sessionStorage.setItem("laes-athlete-saved", "Cadastro de atleta atualizado.");
      try {
        await auth.refresh();
        await onSaved?.();
      } catch {
      }
      if (mounted.current) setSuccess(editing ? "Cadastro de atleta atualizado." : "Cadastro conclu\xEDdo. Bem-vindo \xE0 LAES!");
    } catch (e2) {
      if (mounted.current) setError(e2.message || "N\xE3o foi poss\xEDvel salvar. Tente novamente.");
    } finally {
      if (mounted.current) setBusy(false);
    }
  }
  const sections = [
    /* @__PURE__ */ jsxs5("section", { className: "ar-section", children: [
      /* @__PURE__ */ jsxs5("div", { className: "ar-section-heading", children: [
        /* @__PURE__ */ jsx5("span", { children: "01" }),
        /* @__PURE__ */ jsxs5("div", { children: [
          /* @__PURE__ */ jsx5("h2", { children: "Sua identidade na Liga" }),
          /* @__PURE__ */ jsx5("p", { children: "O nick \xE9 como a comunidade vai conhecer voc\xEA." })
        ] })
      ] }),
      /* @__PURE__ */ jsxs5("div", { className: "ar-grid", children: [
        /* @__PURE__ */ jsx5(Field, { label: "Nome completo *", hint: "Privado. S\xF3 voc\xEA e a administra\xE7\xE3o t\xEAm acesso conforme as permiss\xF5es da plataforma.", children: /* @__PURE__ */ jsx5("input", { required: true, minLength: 3, maxLength: 120, autoComplete: "name", value: values.full_name, onChange: (e) => set("full_name", e.target.value) }) }),
        /* @__PURE__ */ jsx5(Field, { label: "Nickname *", children: /* @__PURE__ */ jsx5("input", { required: true, minLength: 2, maxLength: 40, autoComplete: "nickname", value: values.nick, onChange: (e) => set("nick", e.target.value) }) }),
        /* @__PURE__ */ jsx5(Field, { label: "Cidade *", children: /* @__PURE__ */ jsx5("input", { required: true, minLength: 2, maxLength: 100, autoComplete: "address-level2", value: values.city, onChange: (e) => set("city", e.target.value) }) }),
        /* @__PURE__ */ jsx5(Field, { label: "Estado *", children: /* @__PURE__ */ jsxs5("select", { required: true, autoComplete: "address-level1", value: values.state, onChange: (e) => set("state", e.target.value), children: [
          /* @__PURE__ */ jsx5("option", { value: "", children: "Selecione" }),
          UFS.map((uf) => /* @__PURE__ */ jsx5("option", { children: uf }, uf))
        ] }) })
      ] }),
      /* @__PURE__ */ jsxs5("div", { className: "ar-photo ar-photo-control", children: [
        preview ? /* @__PURE__ */ jsx5("img", { src: preview, alt: "Pr\xE9via da foto do atleta", className: "ar-avatar" }) : /* @__PURE__ */ jsx5(MediaImage2, { src: avatar, alt: "Sua foto de atleta", className: "ar-avatar" }),
        /* @__PURE__ */ jsxs5("div", { className: "ar-photo-actions", children: [
          /* @__PURE__ */ jsx5("span", { className: "ar-photo-title", children: "Foto do atleta" }),
          /* @__PURE__ */ jsx5("p", { children: photo ? "Nova foto selecionada. Salve o cadastro para confirmar." : avatar ? "Sua foto aparece no perfil, no painel e na comunidade." : "Adicione uma foto para a comunidade reconhecer voc\xEA." }),
          /* @__PURE__ */ jsxs5("div", { className: "ar-photo-buttons", children: [
            /* @__PURE__ */ jsxs5("button", { type: "button", className: "ar-photo-upload", disabled: busy, onClick: () => photoInput.current?.click(), children: [
              /* @__PURE__ */ jsx5("svg", { width: "17", height: "17", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", "aria-hidden": "true", children: /* @__PURE__ */ jsx5("path", { d: "M12 16V4m-4 4 4-4 4 4M4 16v4h16v-4" }) }),
              photo ? "Escolher outra foto" : avatar ? "Trocar foto" : "Enviar foto"
            ] }),
            !photo && avatar && avatar === googlePhoto(auth.user) && /* @__PURE__ */ jsx5("span", { className: "ar-google-photo", children: "Foto do Google" })
          ] }),
          /* @__PURE__ */ jsx5("input", { ref: photoInput, className: "ar-photo-file", tabIndex: -1, type: "file", "aria-label": "Selecionar foto do atleta", accept: "image/png,image/jpeg,image/webp", onChange: (e) => {
            const f = e.target.files?.[0];
            if (f && (!["image/png", "image/jpeg", "image/webp"].includes(f.type) || f.size > 5242880)) {
              setError("Envie uma foto PNG, JPG ou WEBP de at\xE9 5 MB.");
              e.target.value = "";
              return;
            }
            setError("");
            setPhoto(f || null);
          } }),
          /* @__PURE__ */ jsx5("small", { children: "PNG, JPG ou WEBP. At\xE9 5 MB." })
        ] })
      ] })
    ] }, "identity"),
    /* @__PURE__ */ jsxs5("section", { className: "ar-section", children: [
      /* @__PURE__ */ jsxs5("div", { className: "ar-section-heading", children: [
        /* @__PURE__ */ jsx5("span", { children: "02" }),
        /* @__PURE__ */ jsxs5("div", { children: [
          /* @__PURE__ */ jsx5("h2", { children: "Seu lugar no jogo" }),
          /* @__PURE__ */ jsx5("p", { children: "Selecione suas modalidades e posi\xE7\xF5es. Voc\xEA pode escolher mais de uma." })
        ] })
      ] }),
      /* @__PURE__ */ jsx5("div", { className: "ar-games", children: data.modalities.map((m) => /* @__PURE__ */ jsxs5("div", { className: `ar-game ${games[m.id] ? "ar-game-selected" : ""}`, children: [
        /* @__PURE__ */ jsxs5("label", { className: "ar-game-toggle", children: [
          /* @__PURE__ */ jsx5("input", { type: "checkbox", checked: !!games[m.id], onChange: (e) => setGames((prev) => {
            const next = { ...prev };
            if (e.target.checked) next[m.id] = { roles: [], rank: "", game_nick: "" };
            else delete next[m.id];
            return next;
          }) }),
          /* @__PURE__ */ jsx5("span", { children: m.name }),
          /* @__PURE__ */ jsx5("span", { "aria-hidden": "true", children: games[m.id] ? "\u2713" : "+" })
        ] }),
        games[m.id] && /* @__PURE__ */ jsxs5("div", { className: "ar-game-details", children: [
          /* @__PURE__ */ jsxs5("fieldset", { children: [
            /* @__PURE__ */ jsx5("legend", { children: "Posi\xE7\xF5es ou rotas *" }),
            /* @__PURE__ */ jsxs5("div", { className: "ar-role-list", children: [
              data.roles.filter((r) => r.modality_id === m.id).map((r) => /* @__PURE__ */ jsxs5("label", { className: "ar-role", children: [
                /* @__PURE__ */ jsx5("input", { type: "checkbox", checked: games[m.id].roles.includes(r.name), onChange: (e) => setGames((prev) => ({ ...prev, [m.id]: { ...prev[m.id], roles: e.target.checked ? [...prev[m.id].roles, r.name] : prev[m.id].roles.filter((v) => v !== r.name) } })) }),
                r.name
              ] }, r.name)),
              !data.roles.some((r) => r.modality_id === m.id) && /* @__PURE__ */ jsx5("span", { className: "ar-hint", children: "As posi\xE7\xF5es podem ser combinadas com a equipe." })
            ] })
          ] }),
          /* @__PURE__ */ jsxs5("div", { className: "ar-grid", children: [
            /* @__PURE__ */ jsx5(Field, { label: "Nick no jogo \xB7 opcional", children: /* @__PURE__ */ jsx5("input", { maxLength: 80, value: games[m.id].game_nick, onChange: (e) => setGames((prev) => ({ ...prev, [m.id]: { ...prev[m.id], game_nick: e.target.value } })) }) }),
            /* @__PURE__ */ jsx5(Field, { label: "Elo ou n\xEDvel \xB7 opcional", children: /* @__PURE__ */ jsx5("input", { maxLength: 80, value: games[m.id].rank, onChange: (e) => setGames((prev) => ({ ...prev, [m.id]: { ...prev[m.id], rank: e.target.value } })) }) })
          ] })
        ] })
      ] }, m.id)) })
    ] }, "games"),
    /* @__PURE__ */ jsxs5("section", { className: "ar-section", children: [
      /* @__PURE__ */ jsxs5("div", { className: "ar-section-heading", children: [
        /* @__PURE__ */ jsx5("span", { children: "03" }),
        /* @__PURE__ */ jsxs5("div", { children: [
          /* @__PURE__ */ jsx5("h2", { children: "Agora, fa\xE7a parte" }),
          /* @__PURE__ */ jsx5("p", { children: "Conte como voc\xEA gosta de jogar e encontre sua turma." })
        ] })
      ] }),
      /* @__PURE__ */ jsx5(Field, { label: "Sobre voc\xEA \xB7 opcional", children: /* @__PURE__ */ jsx5("textarea", { rows: 3, maxLength: 1e3, value: values.bio, onChange: (e) => set("bio", e.target.value), placeholder: "Seu estilo de jogo, sua experi\xEAncia e o que voc\xEA busca na Liga." }) }),
      /* @__PURE__ */ jsxs5("div", { className: "ar-grid", children: [
        /* @__PURE__ */ jsx5(Field, { label: "Hor\xE1rios para jogar \xB7 opcional", children: /* @__PURE__ */ jsx5("input", { maxLength: 200, value: values.availability, onChange: (e) => set("availability", e.target.value), placeholder: "Ex.: \xE0 noite e nos fins de semana" }) }),
        /* @__PURE__ */ jsx5(Field, { label: "Instagram \xB7 opcional", children: /* @__PURE__ */ jsx5("input", { maxLength: 100, value: values.instagram, onChange: (e) => set("instagram", e.target.value), placeholder: "@seuperfil" }) })
      ] }),
      /* @__PURE__ */ jsxs5("section", { className: "lv-channel-field", children: [
        /* @__PURE__ */ jsx5("strong", { children: "Sua Twitch, na nossa torcida" }),
        /* @__PURE__ */ jsxs5("p", { children: [
          "Seu canal \xE9 p\xFAblico. Ao adicion\xE1-lo, suas transmiss\xF5es poder\xE3o aparecer automaticamente na ",
          /* @__PURE__ */ jsx5("a", { href: "/ao-vivo", className: "lt-link", children: "LAES AO VIVO" }),
          ". Deixe em branco para n\xE3o participar."
        ] }),
        /* @__PURE__ */ jsx5(Field, { label: "Canal da Twitch \xB7 opcional", hint: "Informe seu canal ou o link twitch.tv/seucanal. Voc\xEA pode alterar ou remover depois.", children: /* @__PURE__ */ jsx5("input", { maxLength: 200, autoComplete: "off", spellCheck: false, value: values.twitch_channel, onChange: (e) => set("twitch_channel", e.target.value), placeholder: "seucanal ou twitch.tv/seucanal" }) })
      ] }),
      /* @__PURE__ */ jsxs5("fieldset", { children: [
        /* @__PURE__ */ jsx5("legend", { children: "Como voc\xEA quer participar? \xB7 opcional" }),
        /* @__PURE__ */ jsx5("div", { className: "ar-role-list", children: INTERESTS.map(([key, label]) => /* @__PURE__ */ jsxs5("label", { className: "ar-role", children: [
          /* @__PURE__ */ jsx5("input", { type: "checkbox", checked: values[key], onChange: (e) => set(key, e.target.checked) }),
          label
        ] }, key)) })
      ] }),
      /* @__PURE__ */ jsxs5("div", { className: "ar-contact", children: [
        /* @__PURE__ */ jsx5(Field, { label: "WhatsApp \xB7 opcional", hint: "Seu n\xFAmero nunca aparece na comunidade.", children: /* @__PURE__ */ jsx5("input", { type: "tel", maxLength: 30, autoComplete: "tel", value: values.whatsapp, onChange: (e) => {
          set("whatsapp", e.target.value);
          if (!e.target.value) set("shared", false);
        }, placeholder: "(35) 99999-9999" }) }),
        /* @__PURE__ */ jsxs5("label", { className: "ar-consent", children: [
          /* @__PURE__ */ jsx5("input", { type: "checkbox", disabled: !values.whatsapp.trim(), checked: values.shared, onChange: (e) => set("shared", e.target.checked) }),
          /* @__PURE__ */ jsx5("span", { children: "Autorizo compartilhar meu WhatsApp com a administra\xE7\xE3o e os capit\xE3es das equipes \xE0s quais eu me candidatar ou ingressar." })
        ] })
      ] }),
      /* @__PURE__ */ jsxs5("div", { className: "ar-public-notice", children: [
        /* @__PURE__ */ jsx5("strong", { children: "Seu perfil faz parte da comunidade LAES." }),
        /* @__PURE__ */ jsx5("p", { children: "Seu nick, foto escolhida, apresenta\xE7\xE3o, jogos e presen\xE7a on-line aparecem para outros jogadores. Seu nome completo, e-mail e WhatsApp continuam privados. Depois, voc\xEA pode editar seu cadastro em Configura\xE7\xF5es." })
      ] })
    ] }, "community")
  ];
  return /* @__PURE__ */ jsx5("div", { className: `athlete-registration ${editing ? "ar-editing" : ""}`, children: /* @__PURE__ */ jsxs5("div", { className: "ar-shell", children: [
    !editing && /* @__PURE__ */ jsxs5("aside", { className: "ar-aside", children: [
      /* @__PURE__ */ jsx5("a", { href: "/", "aria-label": "LAES \u2014 in\xEDcio", children: /* @__PURE__ */ jsx5("img", { src: "/images/laes/logo-principal.png", alt: "LAES" }) }),
      /* @__PURE__ */ jsx5("p", { className: "ar-eyebrow", children: "Sua primeira jogada" }),
      /* @__PURE__ */ jsxs5("h1", { children: [
        "Seu pr\xF3ximo time",
        /* @__PURE__ */ jsx5("br", {}),
        /* @__PURE__ */ jsx5("em", { children: "come\xE7a com voc\xEA." })
      ] }),
      /* @__PURE__ */ jsx5("p", { children: "Complete seu Cadastro de atleta para entrar no painel, encontrar jogadores e solicitar vagas nas equipes." }),
      /* @__PURE__ */ jsx5("ol", { "aria-label": "Etapas do cadastro", children: ["Sua identidade", "Seus jogos", "Sua comunidade"].map((title, i) => /* @__PURE__ */ jsxs5("li", { "aria-current": step === i ? "step" : void 0, className: step === i ? "ar-current" : step > i ? "ar-done" : "", children: [
        /* @__PURE__ */ jsx5("span", { children: step > i ? "\u2713" : String(i + 1).padStart(2, "0") }),
        title
      ] }, title)) }),
      /* @__PURE__ */ jsx5("small", { children: "Alfenas joga junto. Voc\xEA faz parte disso." })
    ] }),
    /* @__PURE__ */ jsxs5("form", { className: "ar-form", onSubmit: submit, children: [
      /* @__PURE__ */ jsxs5("header", { children: [
        /* @__PURE__ */ jsx5("p", { className: "ar-eyebrow", children: editing ? "Configura\xE7\xF5es do painel" : `Passo ${step + 1} de 3` }),
        /* @__PURE__ */ jsx5("h1", { tabIndex: -1, ref: heading, children: editing ? "Cadastro de atleta" : "Cadastro de atleta" }),
        /* @__PURE__ */ jsx5("p", { children: editing ? "Seu perfil, seus jogos e seu contato em um s\xF3 lugar." : "Preencha os campos obrigat\xF3rios para concluir seu cadastro." })
      ] }),
      editing ? sections : sections[step],
      error && /* @__PURE__ */ jsx5("p", { className: "ar-error", role: "alert", children: error }),
      success && /* @__PURE__ */ jsx5("p", { className: "ar-success", role: "status", children: success }),
      /* @__PURE__ */ jsxs5("footer", { className: "ar-footer", children: [
        /* @__PURE__ */ jsx5("span", { children: editing ? "Seu perfil aparece na comunidade." : "* Campos obrigat\xF3rios" }),
        /* @__PURE__ */ jsxs5("div", { children: [
          !editing && step > 0 && /* @__PURE__ */ jsx5("button", { type: "button", className: "ar-back", disabled: busy, onClick: () => {
            setError("");
            setStep((s) => s - 1);
          }, children: "\u2190 Voltar" }),
          /* @__PURE__ */ jsx5("button", { type: "submit", className: "ar-submit", disabled: busy, children: busy ? "Salvando\u2026" : editing ? "Salvar cadastro" : step === 2 ? "Concluir cadastro e entrar" : "Continuar \u2192" })
        ] })
      ] })
    ] })
  ] }) });
}

// features/teams/teams.jsx
import { Fragment as Fragment4, jsx as jsx6, jsxs as jsxs6 } from "./laes-team-jsx-20261111-v1-badge-art-v2.js";
var SLOT = { titular: "Titular", reserva: "Reserva" };
var STATUS = { pending: "Aguardando an\xE1lise", approved: "Aprovado", rejected: "N\xE3o aprovado", cancelled: "Cancelado" };
var empty = [];
function friendly(error) {
  if (error?.code === "23505") return "J\xE1 existe um pedido ou convite pendente para essa participa\xE7\xE3o.";
  if (error?.code === "42501") return "Seu perfil n\xE3o possui permiss\xE3o para essa a\xE7\xE3o.";
  if (error?.code === "P0001") return error.message;
  return "N\xE3o foi poss\xEDvel concluir agora. Confira os dados e tente novamente.";
}
async function rpc(action, payload = {}) {
  const { data, error } = await supabase4.rpc("team_portal", { action, payload });
  if (error) throw error;
  return data;
}
async function publicData() {
  const results = await Promise.all([
    supabase4.from("team_roster_status").select("*").order("sort").order("name"),
    supabase4.from("modalities").select("id,name,slug").eq("active", true).order("sort"),
    supabase4.from("team_roster_formats").select("*"),
    supabase4.from("modality_roles").select("modality_id,name,sort").order("sort"),
    supabase4.rpc("get_team_card_members")
  ]);
  for (const result of results) if (result.error) throw result.error;
  const members = (results[4].data || []).reduce((groups, member) => {
    (groups[member.team_id] ||= []).push(member);
    return groups;
  }, {});
  return { teams: results[0].data.map((team) => ({ ...team, members: members[team.id] || [] })), modalities: results[1].data, formats: results[2].data, roles: results[3].data };
}
function useLoader(fn, deps = []) {
  const latest = useRef3(fn), ticket = useRef3(0);
  latest.current = fn;
  const [state, setState] = useState4({ data: null, loading: true, error: "" });
  const reload = useCallback(async () => {
    const id = ++ticket.current;
    setState((previous) => ({ ...previous, loading: true, error: "" }));
    try {
      const data = await latest.current();
      if (id === ticket.current) setState({ data, loading: false, error: "" });
      return data;
    } catch (error) {
      if (id === ticket.current) setState((previous) => ({ ...previous, loading: false, error: friendly(error) }));
      return null;
    }
  }, []);
  useEffect4(() => {
    reload();
    return () => {
      ticket.current++;
    };
  }, [reload, ...deps]);
  return { ...state, reload };
}
function Notice({ children, error = false }) {
  return children ? /* @__PURE__ */ jsx6("p", { role: error ? "alert" : "status", className: `lt-notice ${error ? "lt-error" : ""}`, children }) : null;
}
function Waiting() {
  return /* @__PURE__ */ jsx6(LeagueLoading, {});
}
function Button({ children, secondary = false, ...props }) {
  return /* @__PURE__ */ jsx6("button", { ...props, className: `lt-button ${secondary ? "lt-secondary" : ""} ${props.className || ""}`, children });
}
function Field2({ label, children }) {
  return /* @__PURE__ */ jsxs6("label", { className: "lt-field", children: [
    /* @__PURE__ */ jsx6("span", { children: label }),
    React6.cloneElement(children, { "aria-label": label })
  ] });
}
function Pill({ children, red = false }) {
  return /* @__PURE__ */ jsx6("span", { className: `lt-pill ${red ? "lt-red" : ""}`, children });
}
function Capacity({ team }) {
  return /* @__PURE__ */ jsxs6("div", { className: "lt-capacity", children: [
    /* @__PURE__ */ jsxs6("div", { children: [
      /* @__PURE__ */ jsx6("strong", { children: team.starter_vacancies }),
      /* @__PURE__ */ jsx6("span", { children: "vagas de titular" }),
      /* @__PURE__ */ jsxs6("small", { children: [
        team.starters_filled,
        " de ",
        team.starter_slots,
        " preenchidas"
      ] })
    ] }),
    /* @__PURE__ */ jsxs6("div", { children: [
      /* @__PURE__ */ jsx6("strong", { children: team.reserve_vacancies }),
      /* @__PURE__ */ jsx6("span", { children: "vagas de reserva" }),
      /* @__PURE__ */ jsxs6("small", { children: [
        team.reserves_filled,
        " de ",
        team.reserve_slots,
        " preenchidas"
      ] })
    ] })
  ] });
}
function MemberAvatar({ member }) {
  const [failed, setFailed] = useState4(false);
  const name = member.display_name || "Atleta";
  const initials = name.trim().split(/\s+/).slice(0, 2).map((part) => Array.from(part)[0] || "").join("").toLocaleUpperCase("pt-BR");
  return /* @__PURE__ */ jsxs6("span", { className: "lt-member-avatar", title: name, "aria-label": name, children: [
    /* @__PURE__ */ jsx6("span", { "aria-hidden": "true", children: initials }),
    member.avatar_url && !failed && /* @__PURE__ */ jsx6(MediaImage3, { src: member.avatar_url, alt: "", className: "lt-member-photo", loading: "lazy", onError: () => setFailed(true) })
  ] });
}
function TeamMembers({ members = [] }) {
  if (!members.length) return /* @__PURE__ */ jsx6("div", { className: "lt-card-members", "aria-hidden": "true" });
  return /* @__PURE__ */ jsxs6("div", { className: "lt-card-members", role: "group", "aria-label": "Integrantes da equipe", children: [
    members.slice(0, 5).map((member) => /* @__PURE__ */ jsx6(MemberAvatar, { member }, member.id)),
    members.length > 5 && /* @__PURE__ */ jsxs6("span", { className: "lt-member-avatar lt-member-more", title: `${members.length - 5} outros integrantes`, "aria-label": `${members.length - 5} outros integrantes`, children: [
      "+",
      members.length - 5
    ] })
  ] });
}
function TeamCard({ team }) {
  return /* @__PURE__ */ jsxs6("article", { className: "lt-team-card", children: [
    /* @__PURE__ */ jsxs6("a", { className: "lt-team-cover", href: `/equipes/${team.slug}`, children: [
      /* @__PURE__ */ jsx6(MediaImage3, { src: team.logo_url, alt: `Escudo ${team.name}`, className: "lt-team-image" }),
      /* @__PURE__ */ jsxs6("span", { children: [
        /* @__PURE__ */ jsx6(Pill, { children: team.modality_name }),
        team.roster_format !== "padrao" && /* @__PURE__ */ jsx6(Pill, { children: team.format_label })
      ] })
    ] }),
    /* @__PURE__ */ jsxs6("div", { className: "lt-card-body", children: [
      /* @__PURE__ */ jsxs6("div", { className: "lt-row", children: [
        /* @__PURE__ */ jsx6("h2", { children: team.name }),
        /* @__PURE__ */ jsx6(Pill, { red: true, children: team.starter_vacancies + team.reserve_vacancies > 0 ? "Recrutando" : "Elenco completo" })
      ] }),
      /* @__PURE__ */ jsxs6("p", { className: "lt-muted", children: [
        team.category || "Equipe LAES",
        " \xB7 ",
        team.captain_nick ? `Capit\xE3o: ${team.captain_nick}` : "Capit\xE3o a definir"
      ] }),
      /* @__PURE__ */ jsx6(TeamMembers, { members: team.members }),
      /* @__PURE__ */ jsx6(Capacity, { team }),
      /* @__PURE__ */ jsxs6("a", { className: "lt-link", href: `/equipes/${team.slug}`, children: [
        "Conhecer a equipe e participar ",
        /* @__PURE__ */ jsx6("svg", { "aria-hidden": "true", width: "15", height: "15", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: /* @__PURE__ */ jsx6("path", { d: "M7 17 17 7M7 7h10v10" }) })
      ] })
    ] })
  ] });
}
function TeamFilters({ data, modality, setModality, format, setFormat }) {
  const isFC = data.modalities.find((m) => m.id === modality)?.slug === "ea-sports-fc";
  return /* @__PURE__ */ jsxs6("div", { className: "lt-filters", children: [
    /* @__PURE__ */ jsx6(Field2, { label: "Modalidade", children: /* @__PURE__ */ jsxs6("select", { value: modality, onChange: (e) => {
      setModality(e.target.value);
      setFormat("");
    }, children: [
      /* @__PURE__ */ jsx6("option", { value: "", children: "Todas as modalidades" }),
      data.modalities.map((m) => /* @__PURE__ */ jsx6("option", { value: m.id, children: m.name }, m.id))
    ] }) }),
    isFC && /* @__PURE__ */ jsx6(Field2, { label: "Formato EA FC", children: /* @__PURE__ */ jsxs6("select", { value: format, onChange: (e) => setFormat(e.target.value), children: [
      /* @__PURE__ */ jsx6("option", { value: "", children: "Individual e Pro Clubs" }),
      data.formats.filter((f) => f.modality_id === modality).map((f) => /* @__PURE__ */ jsx6("option", { value: f.format, children: f.label }, f.format))
    ] }) })
  ] });
}
function Teams({ vacanciesOnly = false }) {
  const q = useLoader(publicData), [modality, setModality] = useState4(""), [format, setFormat] = useState4("");
  const data = q.data;
  const teams = data?.teams.filter((t) => (!modality || t.modality_id === modality) && (!format || t.roster_format === format) && (!vacanciesOnly || t.starter_vacancies + t.reserve_vacancies > 0)) || [];
  return /* @__PURE__ */ jsxs6("div", { className: "lt-portal", children: [
    /* @__PURE__ */ jsx6(PageHero, { eyebrow: "Nossa cidade. Nossa liga.", title: vacanciesOnly ? "Seu pr\xF3ximo time est\xE1 aqui." : "Equipes em forma\xE7\xE3o.", children: "Encontre sua modalidade, escolha sua posi\xE7\xE3o e fa\xE7a parte do pr\xF3ximo cap\xEDtulo da LAES." }),
    /* @__PURE__ */ jsx6(Section2, { children: q.loading ? /* @__PURE__ */ jsx6(Waiting, {}) : q.error ? /* @__PURE__ */ jsx6(Notice, { error: true, children: q.error }) : /* @__PURE__ */ jsxs6(Fragment4, { children: [
      /* @__PURE__ */ jsxs6("div", { className: "lt-summary", children: [
        /* @__PURE__ */ jsxs6("div", { children: [
          /* @__PURE__ */ jsx6("strong", { children: data.teams.length }),
          /* @__PURE__ */ jsx6("span", { children: "equipes da liga" })
        ] }),
        /* @__PURE__ */ jsxs6("div", { children: [
          /* @__PURE__ */ jsx6("strong", { children: data.teams.reduce((n, t) => n + t.starter_vacancies, 0) }),
          /* @__PURE__ */ jsx6("span", { children: "vagas de titular" })
        ] }),
        /* @__PURE__ */ jsxs6("div", { children: [
          /* @__PURE__ */ jsx6("strong", { children: data.teams.reduce((n, t) => n + t.reserve_vacancies, 0) }),
          /* @__PURE__ */ jsx6("span", { children: "vagas de reserva" })
        ] })
      ] }),
      /* @__PURE__ */ jsx6(TeamFilters, { data, ...{ modality, setModality, format, setFormat } }),
      /* @__PURE__ */ jsx6("div", { className: "lt-team-grid", children: teams.map((team) => /* @__PURE__ */ jsx6(TeamCard, { team }, team.id)) }),
      !teams.length && /* @__PURE__ */ jsx6(Notice, { children: "Nenhuma equipe com esse filtro por enquanto. Novas equipes s\xE3o criadas pela administra\xE7\xE3o." }),
      /* @__PURE__ */ jsxs6("div", { className: "lt-explainer", children: [
        /* @__PURE__ */ jsx6("strong", { children: "Do pedido ao primeiro treino" }),
        /* @__PURE__ */ jsx6("p", { children: "O capit\xE3o solicita a equipe e recebe aprova\xE7\xE3o da administra\xE7\xE3o. Os atletas pedem uma vaga ou aceitam um convite pelo portal. Titulares e reservas contam separadamente." }),
        /* @__PURE__ */ jsx6("p", { children: "EA FC: Individual com 1 titular e 1 reserva; Pro Clubs com 11 titulares e 5 reservas." })
      ] })
    ] }) })
  ] });
}
function Vacancies() {
  useEffect4(() => {
    window.location.replace("/equipes" + window.location.search + window.location.hash);
  }, []);
  return /* @__PURE__ */ jsx6(Waiting, {});
}
function RequestForm({ team, roles, onDone }) {
  const auth = useAuth4();
  const [kind, setKind] = useState4("player"), [slot, setSlot] = useState4(team.starter_vacancies ? "titular" : "reserva"), [busy, setBusy] = useState4(false), [notice, setNotice] = useState4(""), [error, setError] = useState4(false);
  async function submit(event) {
    event.preventDefault();
    setBusy(true);
    setNotice("");
    setError(false);
    const form = new FormData(event.currentTarget);
    if (!auth.user) {
      sessionStorage.setItem("laes-team-intent", JSON.stringify({ team_id: team.id, team_name: team.name, kind, member_type: slot, created_at: Date.now() }));
      location.assign("/entrar");
      return;
    }
    try {
      await rpc("request_join", { team_id: team.id, kind, member_type: slot, role_name: form.get("position"), message: form.get("message") });
      setNotice(kind === "captain" ? "Pedido de capitania enviado. A administra\xE7\xE3o vai analisar sua solicita\xE7\xE3o." : "Pedido enviado. O capit\xE3o da equipe vai analisar sua participa\xE7\xE3o.");
      onDone?.();
    } catch (e) {
      setError(true);
      setNotice(friendly(e));
    } finally {
      setBusy(false);
    }
  }
  if (auth.loading) return /* @__PURE__ */ jsx6("div", { className: "lt-panel", children: /* @__PURE__ */ jsx6(Waiting, {}) });
  if (!auth.user) return /* @__PURE__ */ jsxs6("div", { className: "lt-panel", children: [
    /* @__PURE__ */ jsx6("h2", { children: "Quer fazer parte desta equipe?" }),
    /* @__PURE__ */ jsx6("p", { className: "lt-muted", children: "Entre na sua conta para solicitar uma vaga ou a capitania desta equipe." }),
    /* @__PURE__ */ jsxs6("div", { className: "lt-actions", children: [
      /* @__PURE__ */ jsx6("a", { className: "lt-button", href: "/entrar", children: "Entrar na minha conta" }),
      /* @__PURE__ */ jsx6("a", { className: "lt-link", href: "/cadastro", children: "Criar minha conta" })
    ] })
  ] });
  if (!auth.profile?.athlete_registered_at) return /* @__PURE__ */ jsxs6("div", { className: "lt-panel", children: [
    /* @__PURE__ */ jsx6("h2", { children: "Complete seu Cadastro de atleta" }),
    /* @__PURE__ */ jsx6("p", { className: "lt-muted", children: "Antes de solicitar uma vaga, conte seus jogos e posi\xE7\xF5es para a equipe conhecer voc\xEA." }),
    /* @__PURE__ */ jsx6("a", { className: "lt-button", href: "/painel", children: "Completar cadastro de atleta" })
  ] });
  return /* @__PURE__ */ jsxs6("form", { className: "lt-form lt-panel", onSubmit: submit, children: [
    /* @__PURE__ */ jsx6("h2", { children: "Qual ser\xE1 o seu pr\xF3ximo passo?" }),
    /* @__PURE__ */ jsx6(Field2, { label: "Quero participar como", children: /* @__PURE__ */ jsxs6("select", { value: kind, onChange: (e) => setKind(e.target.value), children: [
      /* @__PURE__ */ jsx6("option", { value: "player", children: "Atleta da equipe" }),
      !team.captain_nick && /* @__PURE__ */ jsx6("option", { value: "captain", children: "Capit\xE3o \u2014 aprova\xE7\xE3o da administra\xE7\xE3o" })
    ] }) }),
    /* @__PURE__ */ jsx6(Field2, { label: "Tipo de vaga", children: /* @__PURE__ */ jsxs6("select", { value: slot, onChange: (e) => setSlot(e.target.value), children: [
      /* @__PURE__ */ jsxs6("option", { value: "titular", disabled: !team.starter_vacancies, children: [
        "Titular \xB7 ",
        team.starter_vacancies,
        " vagas"
      ] }),
      /* @__PURE__ */ jsxs6("option", { value: "reserva", disabled: !team.reserve_vacancies, children: [
        "Reserva \xB7 ",
        team.reserve_vacancies,
        " vagas"
      ] })
    ] }) }),
    /* @__PURE__ */ jsx6(Field2, { label: "Posi\xE7\xE3o ou rota preferida", children: /* @__PURE__ */ jsxs6("select", { name: "position", children: [
      /* @__PURE__ */ jsx6("option", { value: "", children: "Quero combinar com a equipe" }),
      roles.map((r) => /* @__PURE__ */ jsx6("option", { value: r.name, children: r.name }, r.name))
    ] }) }),
    /* @__PURE__ */ jsx6(Field2, { label: "Conte um pouco sobre voc\xEA", children: /* @__PURE__ */ jsx6("textarea", { name: "message", maxLength: 1e3, rows: 3, placeholder: "Seus hor\xE1rios, experi\xEAncia e o que voc\xEA procura em uma equipe." }) }),
    /* @__PURE__ */ jsx6("p", { className: "lt-muted", children: "As posi\xE7\xF5es e o contato autorizado na sua ficha ajudam o respons\xE1vel a combinar os treinos. Ao entrar na equipe, seu nickname, posi\xE7\xE3o e tipo de vaga aparecem no elenco p\xFAblico. Seu WhatsApp continua privado." }),
    /* @__PURE__ */ jsx6(Notice, { error, children: notice }),
    /* @__PURE__ */ jsx6(Button, { disabled: busy || team.starter_vacancies + team.reserve_vacancies === 0, children: busy ? "Enviando\u2026" : auth.user ? kind === "captain" ? "Solicitar capitania" : "Solicitar vaga" : "Entrar para enviar meu pedido" })
  ] });
}
function TeamDetail({ slug }) {
  const q = useLoader(publicData, [slug]), members = useLoader(async () => {
    const team2 = await supabase4.from("teams").select("id").eq("slug", slug).maybeSingle();
    if (team2.error) throw team2.error;
    if (!team2.data) return [];
    const r = await supabase4.from("team_members").select("id,display_name,member_type,role_name,is_captain").eq("team_id", team2.data.id).order("is_captain", { ascending: false });
    if (r.error) throw r.error;
    return r.data;
  }, [slug]);
  if (!q.data) return /* @__PURE__ */ jsx6("div", { className: "lt-portal", children: /* @__PURE__ */ jsx6(Section2, { children: q.error ? /* @__PURE__ */ jsx6(Notice, { error: true, children: q.error }) : /* @__PURE__ */ jsx6(Waiting, {}) }) });
  const team = q.data.teams.find((t) => t.slug === slug);
  if (!team) return /* @__PURE__ */ jsx6("div", { className: "lt-portal", children: /* @__PURE__ */ jsxs6(Section2, { children: [
    /* @__PURE__ */ jsx6(Notice, { children: "Equipe n\xE3o encontrada." }),
    /* @__PURE__ */ jsx6("a", { href: "/equipes", children: "Voltar \xE0s equipes" })
  ] }) });
  return /* @__PURE__ */ jsxs6("div", { className: "lt-portal", children: [
    /* @__PURE__ */ jsx6(PageHero, { eyebrow: team.modality_name, title: team.name, children: team.description || "Uma equipe da nossa cidade, pronta para construir sua hist\xF3ria." }),
    /* @__PURE__ */ jsx6(Section2, { children: /* @__PURE__ */ jsxs6("div", { className: "lt-detail-grid", children: [
      /* @__PURE__ */ jsxs6("div", { children: [
        /* @__PURE__ */ jsxs6("div", { className: "lt-panel", children: [
          /* @__PURE__ */ jsxs6("div", { className: "lt-row", children: [
            /* @__PURE__ */ jsx6(Pill, { children: team.category || "Equipe LAES" }),
            /* @__PURE__ */ jsx6(Pill, { children: team.format_label })
          ] }),
          /* @__PURE__ */ jsx6(Capacity, { team }),
          /* @__PURE__ */ jsx6("p", { children: team.captain_nick ? `Capit\xE3o: ${team.captain_nick}` : "Esta equipe est\xE1 procurando seu capit\xE3o. A aprova\xE7\xE3o \xE9 feita pela administra\xE7\xE3o da Liga." })
        ] }),
        /* @__PURE__ */ jsxs6("div", { className: "lt-panel", children: [
          /* @__PURE__ */ jsx6("h2", { children: "Nosso elenco" }),
          !members.data?.length ? /* @__PURE__ */ jsx6("p", { className: "lt-muted", children: "Elenco em forma\xE7\xE3o. Os atletas aparecer\xE3o aqui depois da aprova\xE7\xE3o do pedido ou da aceita\xE7\xE3o do convite." }) : /* @__PURE__ */ jsx6("ul", { className: "lt-list", children: members.data.map((m) => /* @__PURE__ */ jsxs6("li", { children: [
            /* @__PURE__ */ jsx6("strong", { children: m.display_name }),
            /* @__PURE__ */ jsxs6("span", { children: [
              SLOT[m.member_type] || m.member_type,
              m.role_name ? ` \xB7 ${m.role_name}` : ""
            ] }),
            m.is_captain && /* @__PURE__ */ jsx6(Pill, { red: true, children: "Capit\xE3o" })
          ] }, m.id)) })
        ] })
      ] }),
      /* @__PURE__ */ jsx6(RequestForm, { team, roles: q.data.roles.filter((r) => r.modality_id === team.modality_id) })
    ] }) })
  ] });
}
function WhatsApp({ value }) {
  return value ? /* @__PURE__ */ jsx6("a", { className: "lt-whatsapp", href: `https://wa.me/${value.replace(/\D/g, "")}`, target: "_blank", rel: "noreferrer", children: "Conversar no WhatsApp \u2197" }) : /* @__PURE__ */ jsx6("span", { className: "lt-muted", children: "Contato n\xE3o compartilhado" });
}
function Positions({ games = [] }) {
  return /* @__PURE__ */ jsx6("div", { className: "lt-pills", children: games.map((g, i) => /* @__PURE__ */ jsxs6(Pill, { children: [
    g.name,
    g.roles?.length ? ` \xB7 ${g.roles.join(", ")}` : ""
  ] }, g.modality_id || i)) });
}
function ContactEditor({ contact, games, data, onSaved, initialNick }) {
  const auth = useAuth4(), [nick, setNick] = useState4(initialNick || auth.user?.user_metadata?.display_name || "");
  const [phone, setPhone] = useState4(contact?.whatsapp || ""), [shared, setShared] = useState4(!!contact?.shared), [busy, setBusy] = useState4(false), [notice, setNotice] = useState4(""), [error, setError] = useState4(false);
  const [selected, setSelected] = useState4(() => new Set(games.map((g) => g.modality_id))), [positions, setPositions] = useState4(() => Object.fromEntries(games.map((g) => [g.modality_id, g.roles || []])));
  async function save(event) {
    event.preventDefault();
    setBusy(true);
    setNotice("");
    setError(false);
    try {
      await rpc("save_contact", { nick, whatsapp: phone, shared });
      setNotice("Ficha e contato salvos. Voc\xEA pode alterar ou retirar a autoriza\xE7\xE3o quando quiser.");
      onSaved();
    } catch (e) {
      setError(true);
      setNotice(friendly(e));
    } finally {
      setBusy(false);
    }
  }
  async function saveRoles() {
    setBusy(true);
    setError(false);
    try {
      await rpc("save_positions", { games: [...selected].map((id) => ({ modality_id: id, roles: positions[id] || [] })) });
      setNotice("Modalidades e posi\xE7\xF5es salvas.");
      onSaved();
    } catch (e) {
      setError(true);
      setNotice(friendly(e));
    } finally {
      setBusy(false);
    }
  }
  return /* @__PURE__ */ jsxs6("div", { className: "lt-detail-grid", children: [
    /* @__PURE__ */ jsxs6("form", { className: "lt-panel lt-form", onSubmit: save, children: [
      /* @__PURE__ */ jsx6("p", { className: "lt-eyebrow", children: "Seu contato, sua escolha" }),
      /* @__PURE__ */ jsx6("h2", { children: "Combine o pr\xF3ximo treino." }),
      /* @__PURE__ */ jsx6(Field2, { label: "Nickname na comunidade", children: /* @__PURE__ */ jsx6("input", { autoComplete: "nickname", value: nick, required: true, minLength: 2, maxLength: 40, onChange: (e) => setNick(e.target.value) }) }),
      /* @__PURE__ */ jsx6(Field2, { label: "WhatsApp com DDD", children: /* @__PURE__ */ jsx6("input", { type: "tel", autoComplete: "tel", value: phone, maxLength: 30, placeholder: "(35) 99999-9999", onChange: (e) => setPhone(e.target.value) }) }),
      /* @__PURE__ */ jsxs6("label", { className: "lt-check", children: [
        /* @__PURE__ */ jsx6("input", { type: "checkbox", checked: shared, onChange: (e) => setShared(e.target.checked) }),
        /* @__PURE__ */ jsx6("span", { children: "Autorizo compartilhar meu WhatsApp com a administra\xE7\xE3o e os capit\xE3es das equipes \xE0s quais eu me candidatar ou ingressar." })
      ] }),
      /* @__PURE__ */ jsx6("p", { className: "lt-muted", children: "O n\xFAmero n\xE3o aparece nos perfis p\xFAblicos nem na lista da comunidade. Sem autoriza\xE7\xE3o, ele n\xE3o \xE9 exibido aos respons\xE1veis." }),
      /* @__PURE__ */ jsx6(Notice, { error, children: notice }),
      /* @__PURE__ */ jsx6(Button, { disabled: busy, children: busy ? "Salvando\u2026" : "Salvar ficha e contato" })
    ] }),
    /* @__PURE__ */ jsxs6("div", { className: "lt-panel lt-form", children: [
      /* @__PURE__ */ jsx6("p", { className: "lt-eyebrow", children: "Seu lugar no jogo" }),
      /* @__PURE__ */ jsx6("h2", { children: "Modalidades, rotas e posi\xE7\xF5es" }),
      /* @__PURE__ */ jsx6("p", { className: "lt-muted", children: "Os respons\xE1veis pelas suas candidaturas e equipes podem consultar essas escolhas." }),
      data.modalities.map((m) => /* @__PURE__ */ jsxs6("fieldset", { className: "lt-game", children: [
        /* @__PURE__ */ jsx6("legend", { children: /* @__PURE__ */ jsxs6("label", { className: "lt-check", children: [
          /* @__PURE__ */ jsx6("input", { type: "checkbox", checked: selected.has(m.id), onChange: (e) => setSelected((old) => {
            const next = new Set(old);
            e.target.checked ? next.add(m.id) : next.delete(m.id);
            return next;
          }) }),
          m.name
        ] }) }),
        selected.has(m.id) && /* @__PURE__ */ jsx6("div", { className: "lt-pills", children: data.roles.filter((r) => r.modality_id === m.id).map((r) => /* @__PURE__ */ jsxs6("label", { className: "lt-position", children: [
          /* @__PURE__ */ jsx6("input", { type: "checkbox", checked: (positions[m.id] || []).includes(r.name), onChange: (e) => setPositions((old) => ({ ...old, [m.id]: e.target.checked ? [...old[m.id] || [], r.name] : (old[m.id] || []).filter((v) => v !== r.name) })) }),
          r.name
        ] }, r.name)) })
      ] }, m.id)),
      /* @__PURE__ */ jsx6(Button, { type: "button", disabled: busy, onClick: saveRoles, children: "Salvar modalidades e posi\xE7\xF5es" })
    ] })
  ] });
}
function Requests({ requests, run, busy }) {
  return /* @__PURE__ */ jsxs6("div", { className: "lt-request-list", children: [
    !requests.length && /* @__PURE__ */ jsx6("p", { className: "lt-muted", children: "Nenhum pedido aguardando an\xE1lise." }),
    requests.map((r) => /* @__PURE__ */ jsxs6("article", { className: "lt-request", children: [
      /* @__PURE__ */ jsxs6("div", { className: "lt-row", children: [
        /* @__PURE__ */ jsx6("h3", { children: r.nick }),
        /* @__PURE__ */ jsx6(Pill, { red: true, children: r.kind === "captain" ? "Pedido de capitania" : SLOT[r.member_type] })
      ] }),
      /* @__PURE__ */ jsxs6("p", { children: [
        r.team_name,
        r.role_name ? ` \xB7 ${r.role_name}` : ""
      ] }),
      /* @__PURE__ */ jsx6(Positions, { games: r.games }),
      r.message && /* @__PURE__ */ jsx6("p", { className: "lt-message", children: r.message }),
      /* @__PURE__ */ jsx6(WhatsApp, { value: r.whatsapp }),
      /* @__PURE__ */ jsxs6("div", { className: "lt-actions", children: [
        /* @__PURE__ */ jsxs6(Button, { disabled: busy, onClick: () => run("decide_request", { id: r.id, accept: true }, "Pedido aprovado. O atleta j\xE1 est\xE1 no elenco."), children: [
          "Aprovar ",
          r.kind === "captain" ? "capit\xE3o" : "pedido"
        ] }),
        /* @__PURE__ */ jsx6(Button, { secondary: true, disabled: busy, onClick: () => run("decide_request", { id: r.id, accept: false }, "Pedido n\xE3o aprovado."), children: "N\xE3o aprovar" })
      ] })
    ] }, r.id))
  ] });
}
function TeamManager({ teams, requests, run, busy, revision }) {
  const [teamId, setTeamId] = useState4(teams[0]?.id || ""), [slot, setSlot] = useState4("titular"), [position, setPosition] = useState4(""), [link, setLink] = useState4("");
  useEffect4(() => {
    if (!teams.some((t) => t.id === teamId)) setTeamId(teams[0]?.id || "");
  }, [teams, teamId]);
  const roster = useLoader(() => teamId ? rpc("roster", { team_id: teamId }) : [], [teamId, revision]);
  const team = teams.find((t) => t.id === teamId);
  if (!team) return /* @__PURE__ */ jsx6(Notice, { children: "Voc\xEA ainda n\xE3o tem uma equipe para gerenciar. Solicite uma capitania e aguarde a aprova\xE7\xE3o da administra\xE7\xE3o." });
  async function generate() {
    const result = await run("create_link", { team_id: teamId, member_type: slot, role_name: position }, "Convite criado. Compartilhe o link com a pessoa escolhida.");
    if (result?.token) setLink(`${location.origin}/painel?convite=${result.token}`);
  }
  return /* @__PURE__ */ jsxs6("div", { className: "lt-form", children: [
    /* @__PURE__ */ jsx6(Field2, { label: "Equipe que vou gerenciar", children: /* @__PURE__ */ jsx6("select", { value: teamId, onChange: (e) => {
      setTeamId(e.target.value);
      setLink("");
    }, children: teams.map((t) => /* @__PURE__ */ jsx6("option", { value: t.id, children: t.name }, t.id)) }) }),
    /* @__PURE__ */ jsx6(Capacity, { team }),
    /* @__PURE__ */ jsxs6("div", { className: "lt-panel", children: [
      /* @__PURE__ */ jsx6("h3", { children: "Convide algu\xE9m por link" }),
      /* @__PURE__ */ jsxs6("div", { className: "lt-filters", children: [
        /* @__PURE__ */ jsx6(Field2, { label: "Tipo de vaga", children: /* @__PURE__ */ jsxs6("select", { value: slot, onChange: (e) => setSlot(e.target.value), children: [
          /* @__PURE__ */ jsx6("option", { value: "titular", children: "Titular" }),
          /* @__PURE__ */ jsx6("option", { value: "reserva", children: "Reserva" })
        ] }) }),
        /* @__PURE__ */ jsx6(Field2, { label: "Posi\xE7\xE3o combinada (opcional)", children: /* @__PURE__ */ jsx6("input", { value: position, maxLength: 80, onChange: (e) => setPosition(e.target.value) }) })
      ] }),
      /* @__PURE__ */ jsx6(Button, { disabled: busy, onClick: generate, children: "Gerar convite por link" }),
      /* @__PURE__ */ jsx6("p", { className: "lt-muted", children: "Uso \xFAnico, v\xE1lido por sete dias. A pessoa entra com sua pr\xF3pria conta e confirma a participa\xE7\xE3o. A vaga \xE9 preenchida quando o convite \xE9 aceito." }),
      link && /* @__PURE__ */ jsxs6("div", { className: "lt-form", children: [
        /* @__PURE__ */ jsx6("input", { "aria-label": "Link de convite", readOnly: true, value: link, onFocus: (e) => e.target.select() }),
        /* @__PURE__ */ jsx6(Button, { secondary: true, onClick: async () => {
          try {
            await navigator.clipboard.writeText(link);
          } catch {
          }
        }, children: "Copiar link" })
      ] })
    ] }),
    /* @__PURE__ */ jsxs6("div", { className: "lt-panel", children: [
      /* @__PURE__ */ jsx6("h3", { children: "Pedidos para esta equipe" }),
      /* @__PURE__ */ jsx6(Requests, { requests: requests.filter((r) => r.team_id === teamId), ...{ run, busy } })
    ] }),
    /* @__PURE__ */ jsxs6("div", { className: "lt-panel", children: [
      /* @__PURE__ */ jsx6("h3", { children: "Elenco e contato para treinos" }),
      /* @__PURE__ */ jsx6(Notice, { error: true, children: roster.error }),
      roster.loading ? /* @__PURE__ */ jsx6(Waiting, {}) : !roster.data?.length ? /* @__PURE__ */ jsx6("p", { className: "lt-muted", children: "As primeiras vagas est\xE3o esperando pelos seus convites." }) : roster.data.map((m) => /* @__PURE__ */ jsxs6("article", { className: "lt-request", children: [
        /* @__PURE__ */ jsxs6("div", { className: "lt-row", children: [
          /* @__PURE__ */ jsx6("h4", { children: m.nick }),
          /* @__PURE__ */ jsxs6(Pill, { children: [
            SLOT[m.member_type] || m.member_type,
            m.is_captain ? " \xB7 Capit\xE3o" : ""
          ] })
        ] }),
        /* @__PURE__ */ jsx6(Positions, { games: m.games }),
        /* @__PURE__ */ jsx6(WhatsApp, { value: m.whatsapp }),
        !m.is_captain && /* @__PURE__ */ jsxs6("div", { className: "lt-actions", children: [
          /* @__PURE__ */ jsxs6(Button, { secondary: true, disabled: busy, onClick: () => run("change_slot", { id: m.id, member_type: m.member_type === "titular" ? "reserva" : "titular" }, "Tipo de vaga atualizado."), children: [
            "Mover para ",
            m.member_type === "titular" ? "reserva" : "titular"
          ] }),
          /* @__PURE__ */ jsx6(Button, { secondary: true, disabled: busy, onClick: () => {
            if (confirm(`Remover ${m.nick} de ${team.name}?`)) run("remove_member", { id: m.id }, "Integrante removido da equipe.");
          }, children: "Remover integrante" })
        ] })
      ] }, m.id))
    ] })
  ] });
}
function Community({ data, managed, run, busy, revision }) {
  const [search, setSearch] = useState4(""), [modality, setModality] = useState4(""), [online, setOnline] = useState4(false), [page, setPage] = useState4(0), [filter, setFilter] = useState4(""), [target, setTarget] = useState4(null), [team, setTeam] = useState4(managed[0]?.id || ""), [slot, setSlot] = useState4("titular");
  useEffect4(() => {
    const timer = setTimeout(() => {
      setFilter(search);
      setPage(0);
    }, 300);
    return () => clearTimeout(timer);
  }, [search]);
  useEffect4(() => {
    if (!target) return;
    const previous = document.activeElement;
    const focusTimer = setTimeout(() => document.getElementById("lt-invite-dialog")?.querySelector("select,button")?.focus(), 0);
    const onKey = (event) => {
      const dialog = document.getElementById("lt-invite-dialog");
      if (!dialog) return;
      if (event.key === "Escape" && !busy) {
        setTarget(null);
        return;
      }
      if (event.key !== "Tab") return;
      const items = [...dialog.querySelectorAll("button:not([disabled]),select:not([disabled]),input:not([disabled])")];
      const first = items[0], last = items[items.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last?.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      clearTimeout(focusTimer);
      document.removeEventListener("keydown", onKey);
      if (previous?.isConnected) previous.focus();
    };
  }, [target, busy]);
  const q = useLoader(() => rpc("directory", { search: filter, modality_id: modality, online_only: online, offset: page * 30 }), [filter, modality, online, page, revision]);
  return /* @__PURE__ */ jsxs6(Fragment4, { children: [
    /* @__PURE__ */ jsxs6("div", { className: "lt-panel", children: [
      /* @__PURE__ */ jsx6("p", { className: "lt-eyebrow", children: "Alfenas joga junto" }),
      /* @__PURE__ */ jsx6("h2", { children: "Comunidade LAES" }),
      /* @__PURE__ */ jsx6("p", { className: "lt-muted", children: "Encontre os jogadores da liga e suas posi\xE7\xF5es. O WhatsApp fica reservado aos respons\xE1veis pelas candidaturas e equipes, com autoriza\xE7\xE3o do atleta." }),
      /* @__PURE__ */ jsxs6("div", { className: "lt-filters", children: [
        /* @__PURE__ */ jsx6(Field2, { label: "Buscar nickname", children: /* @__PURE__ */ jsx6("input", { value: search, placeholder: "Quem joga com voc\xEA?", maxLength: 80, onChange: (e) => setSearch(e.target.value) }) }),
        /* @__PURE__ */ jsx6(Field2, { label: "Modalidade", children: /* @__PURE__ */ jsxs6("select", { value: modality, onChange: (e) => {
          setModality(e.target.value);
          setPage(0);
        }, children: [
          /* @__PURE__ */ jsx6("option", { value: "", children: "Todas as modalidades" }),
          data.modalities.map((m) => /* @__PURE__ */ jsx6("option", { value: m.id, children: m.name }, m.id))
        ] }) })
      ] }),
      /* @__PURE__ */ jsxs6("label", { className: "lt-check", children: [
        /* @__PURE__ */ jsx6("input", { type: "checkbox", checked: online, onChange: (e) => {
          setOnline(e.target.checked);
          setPage(0);
        } }),
        "Mostrar somente on-line"
      ] })
    ] }),
    /* @__PURE__ */ jsx6(Notice, { error: true, children: q.error }),
    q.loading ? /* @__PURE__ */ jsx6(Waiting, {}) : /* @__PURE__ */ jsx6("div", { className: "lt-player-grid", children: /* @__PURE__ */ jsx6(CommunityCards, { players: q.data || [], teamId: managed[0]?.id || "", busy, onInvite: (p) => {
      setTarget(p);
      setTeam(managed[0].id);
    } }) }),
    !q.loading && q.data?.length === 0 && /* @__PURE__ */ jsx6(Notice, { children: "Nenhum jogador encontrado com esses filtros." }),
    /* @__PURE__ */ jsxs6("div", { className: "lt-actions", children: [
      /* @__PURE__ */ jsx6(Button, { secondary: true, disabled: page === 0, onClick: () => setPage((p) => p - 1), children: "Anterior" }),
      /* @__PURE__ */ jsxs6("span", { children: [
        "P\xE1gina ",
        page + 1
      ] }),
      /* @__PURE__ */ jsx6(Button, { secondary: true, disabled: !q.data || q.data.length < 30, onClick: () => setPage((p) => p + 1), children: "Pr\xF3xima" })
    ] }),
    target && /* @__PURE__ */ jsx6("div", { className: "lt-dialog-backdrop", children: /* @__PURE__ */ jsxs6("section", { id: "lt-invite-dialog", className: "lt-dialog", role: "dialog", "aria-modal": "true", "aria-labelledby": "invite-player-title", children: [
      /* @__PURE__ */ jsxs6("h2", { id: "invite-player-title", children: [
        "Convidar ",
        target.nick
      ] }),
      /* @__PURE__ */ jsx6(Field2, { label: "Equipe", children: /* @__PURE__ */ jsx6("select", { value: team, onChange: (e) => setTeam(e.target.value), children: managed.map((t) => /* @__PURE__ */ jsx6("option", { value: t.id, children: t.name }, t.id)) }) }),
      /* @__PURE__ */ jsx6(Field2, { label: "Vaga", children: /* @__PURE__ */ jsxs6("select", { value: slot, onChange: (e) => setSlot(e.target.value), children: [
        /* @__PURE__ */ jsx6("option", { value: "titular", children: "Titular" }),
        /* @__PURE__ */ jsx6("option", { value: "reserva", children: "Reserva" })
      ] }) }),
      /* @__PURE__ */ jsx6("p", { children: "A pessoa recebe o convite no pr\xF3prio painel e escolhe se deseja participar." }),
      /* @__PURE__ */ jsxs6("div", { className: "lt-actions", children: [
        /* @__PURE__ */ jsx6(Button, { disabled: busy, onClick: async () => {
          const result = await run("invite_player", { team_id: team, user_id: target.id, member_type: slot }, "Convite enviado para o painel do atleta.");
          if (result) setTarget(null);
        }, children: "Enviar convite" }),
        /* @__PURE__ */ jsx6(Button, { secondary: true, disabled: busy, onClick: () => setTarget(null), children: "Voltar" })
      ] })
    ] }) })
  ] });
}
function CreateTeam({ data, run, busy }) {
  const [modality, setModality] = useState4(data.modalities[0]?.id || ""), [format, setFormat] = useState4("padrao"), [name, setName] = useState4("");
  const formats = data.formats.filter((f) => f.modality_id === modality), selected = data.modalities.find((m) => m.id === modality);
  useEffect4(() => setFormat(selected?.slug === "ea-sports-fc" ? "pro_clubs" : "padrao"), [modality]);
  const preset = formats.find((f) => f.format === format), slug = name.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
  async function submit(event) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const result = await run("create_team", { name, slug, modality_id: modality, format, category: form.get("category"), description: form.get("description") }, "Equipe criada com todas as vagas abertas.");
    if (result) {
      setName("");
      event.target.reset();
    }
  }
  return /* @__PURE__ */ jsxs6("form", { className: "lt-form lt-panel", onSubmit: submit, children: [
    /* @__PURE__ */ jsx6("p", { className: "lt-eyebrow", children: "Administra\xE7\xE3o da Liga" }),
    /* @__PURE__ */ jsx6("h2", { children: "Crie a pr\xF3xima equipe." }),
    /* @__PURE__ */ jsx6(Field2, { label: "Nome da equipe", children: /* @__PURE__ */ jsx6("input", { value: name, onChange: (e) => setName(e.target.value), required: true, minLength: 2, maxLength: 80, placeholder: "Ex.: LAES Phoenix" }) }),
    /* @__PURE__ */ jsx6(Field2, { label: "Modalidade", children: /* @__PURE__ */ jsx6("select", { value: modality, onChange: (e) => setModality(e.target.value), children: data.modalities.map((m) => /* @__PURE__ */ jsx6("option", { value: m.id, children: m.name }, m.id)) }) }),
    /* @__PURE__ */ jsx6(Field2, { label: "Formato do elenco", children: /* @__PURE__ */ jsx6("select", { value: format, onChange: (e) => setFormat(e.target.value), children: formats.map((f) => /* @__PURE__ */ jsx6("option", { value: f.format, children: f.label }, f.format)) }) }),
    preset && /* @__PURE__ */ jsxs6(Pill, { children: [
      preset.starter_slots,
      " titulares + ",
      preset.reserve_slots,
      " reservas"
    ] }),
    /* @__PURE__ */ jsx6(Field2, { label: "Categoria", children: /* @__PURE__ */ jsx6("input", { name: "category", maxLength: 60, placeholder: "Misto, feminino, livre\u2026" }) }),
    /* @__PURE__ */ jsx6(Field2, { label: "Apresenta\xE7\xE3o da equipe", children: /* @__PURE__ */ jsx6("textarea", { name: "description", rows: 3, maxLength: 2e3 }) }),
    /* @__PURE__ */ jsxs6("p", { className: "lt-muted", children: [
      "Endere\xE7o: /equipes/",
      slug || "nome-da-equipe",
      ". A capitania ser\xE1 definida ap\xF3s seu aceite de um pedido."
    ] }),
    /* @__PURE__ */ jsx6(Button, { disabled: busy || !preset, children: busy ? "Criando\u2026" : "Criar equipe com vagas abertas" })
  ] });
}
function TeamWorkspace({ adminPage = false, Legacy }) {
  const auth = useAuth4(), [tab, setTab] = useState4(adminPage ? "admin" : "teams"), [busy, setBusy] = useState4(false), [notice, setNotice] = useState4(""), [isError, setError] = useState4(false), [revision, setRevision] = useState4(0), [token, setToken] = useState4(""), [intent, setIntent] = useState4(null);
  const data = useLoader(publicData), state = useLoader(async () => auth.user ? { ...await rpc("state"), owner_id: auth.user.id } : null, [auth.user?.id]), requests = useLoader(() => auth.user ? rpc("review_requests") : [], [auth.user?.id]);
  useEffect4(() => {
    if (!auth.user) return;
    const timer = setInterval(() => {
      state.reload();
      requests.reload();
    }, 15e3);
    return () => clearInterval(timer);
  }, [auth.user?.id]);
  useEffect4(() => {
    if (!auth.user) return;
    const presence = () => {
      void supabase4.rpc("community_action", { action: document.visibilityState === "hidden" ? "offline" : "heartbeat", payload: {} }).then(() => {
      }, () => {
      });
    };
    presence();
    const timer = setInterval(presence, 3e4);
    document.addEventListener("visibilitychange", presence);
    return () => {
      clearInterval(timer);
      document.removeEventListener("visibilitychange", presence);
      void supabase4.rpc("community_action", { action: "offline", payload: {} }).then(() => {
      }, () => {
      });
    };
  }, [auth.user?.id]);
  useEffect4(() => {
    const params = new URLSearchParams(location.search), incoming = params.get("convite");
    if (incoming && /^[a-f0-9]{64}$/.test(incoming)) {
      sessionStorage.setItem("laes-team-link", incoming);
      params.delete("convite");
      history.replaceState(history.state, "", location.pathname + (params.toString() ? "?" + params : ""));
    }
    setToken(sessionStorage.getItem("laes-team-link") || "");
    try {
      const pending = JSON.parse(sessionStorage.getItem("laes-team-intent") || "null");
      if (pending && Date.now() - pending.created_at < 864e5) setIntent(pending);
    } catch {
    }
  }, []);
  useEffect4(() => {
    if (!auth.user || !state.data) return;
    if (state.data.is_admin && !auth.isAdmin) void auth.refresh();
  }, [auth.user?.id, state.data?.is_admin]);
  const linkInfo = useLoader(() => auth.user && token ? rpc("inspect_link", { token }) : null, [auth.user?.id, token, revision]);
  async function run(action, payload, message) {
    setBusy(true);
    setNotice("");
    setError(false);
    try {
      const result = await rpc(action, payload);
      await Promise.all([state.reload(), requests.reload(), data.reload()]);
      setRevision((r) => r + 1);
      setNotice(message || "Informa\xE7\xF5es atualizadas.");
      if (action === "accept_link") {
        sessionStorage.removeItem("laes-team-link");
        setToken("");
      }
      return result;
    } catch (e) {
      setError(true);
      setNotice(friendly(e));
      return null;
    } finally {
      setBusy(false);
    }
  }
  if (auth.loading) return /* @__PURE__ */ jsx6("div", { className: "lt-portal", children: /* @__PURE__ */ jsx6(Section2, { children: /* @__PURE__ */ jsx6(Waiting, {}) }) });
  if (!auth.user) return /* @__PURE__ */ jsxs6("div", { className: "lt-portal", children: [
    /* @__PURE__ */ jsx6(PageHero, { title: "Sua equipe come\xE7a com voc\xEA." }),
    /* @__PURE__ */ jsx6(Section2, { children: /* @__PURE__ */ jsxs6("div", { className: "lt-panel", children: [
      /* @__PURE__ */ jsx6("p", { children: "Entre na sua conta para pedir uma vaga, acompanhar convites e participar da comunidade." }),
      /* @__PURE__ */ jsx6("a", { className: "lt-button", href: "/entrar", children: "Entrar na conta" }),
      /* @__PURE__ */ jsx6("a", { className: "lt-link", href: "/cadastro", children: "Criar minha conta" })
    ] }) })
  ] });
  if (!state.data || state.data.owner_id !== auth.user.id || !data.data) return /* @__PURE__ */ jsx6("div", { className: "lt-portal", children: /* @__PURE__ */ jsxs6(Section2, { children: [
    /* @__PURE__ */ jsx6(Notice, { error: true, children: state.error || data.error }),
    !state.error && !data.error ? /* @__PURE__ */ jsx6(Waiting, {}) : /* @__PURE__ */ jsx6(Button, { secondary: true, onClick: () => {
      state.reload();
      requests.reload();
      data.reload();
    }, children: "Tentar novamente" })
  ] }) });
  const s = state.data, d = data.data, managed = s.is_admin ? d.teams : d.teams.filter((t) => s.captain_teams.includes(t.id));
  if (adminPage && !s.is_admin) return /* @__PURE__ */ jsx6("div", { className: "lt-portal", children: /* @__PURE__ */ jsxs6(Section2, { children: [
    /* @__PURE__ */ jsx6(Notice, { error: true, children: "A cria\xE7\xE3o de equipes e a aprova\xE7\xE3o de capit\xE3es s\xE3o exclusivas da administra\xE7\xE3o da Liga." }),
    /* @__PURE__ */ jsx6("a", { href: "/painel", className: "lt-link", children: "Gerenciar minha equipe no painel" })
  ] }) });
  const tabs = adminPage ? [["admin", "Equipes e capit\xE3es"], ["manage", "Gerenciar elencos"], ["community", "Comunidade"], ["badges", "Ins\xEDgnias"], ["legacy", "Conte\xFAdo do portal"]] : [["teams", "Minhas equipes"], ["community", "Comunidade"], ["profile", "Minha ficha"], ["legacy", "Perfil e atividades"]];
  return /* @__PURE__ */ jsxs6("div", { className: "lt-portal", children: [
    /* @__PURE__ */ jsx6("nav", { className: "lt-tabs", "aria-label": adminPage ? "Administra\xE7\xE3o da Liga" : "Meu portal", children: tabs.map(([id, label]) => /* @__PURE__ */ jsx6("button", { type: "button", "aria-pressed": tab === id, onClick: () => {
      setTab(id);
      setNotice("");
    }, children: label }, id)) }),
    tab === "legacy" ? /* @__PURE__ */ jsx6(Legacy, {}) : /* @__PURE__ */ jsxs6(Fragment4, { children: [
      /* @__PURE__ */ jsx6(PageHero, { eyebrow: adminPage ? "Administra\xE7\xE3o da Liga" : "Alfenas joga junto", title: adminPage ? "Organize a pr\xF3xima forma\xE7\xE3o." : "Sua comunidade. Seu pr\xF3ximo time.", children: adminPage ? "Crie equipes, aprove capit\xE3es e acompanhe os elencos da LAES." : "Convites, vagas, posi\xE7\xF5es e contato para transformar uma conex\xE3o em equipe." }),
      /* @__PURE__ */ jsxs6(Section2, { children: [
        /* @__PURE__ */ jsx6(Notice, { error: isError, children: notice }),
        token && /* @__PURE__ */ jsxs6("div", { className: "lt-panel lt-invitation", children: [
          /* @__PURE__ */ jsx6("h2", { children: "Voc\xEA recebeu um convite." }),
          /* @__PURE__ */ jsx6("p", { className: "lt-muted", children: "Ao aceitar, seu nickname, posi\xE7\xE3o e tipo de vaga aparecem no elenco p\xFAblico da equipe. Seu contato continua seguindo a autoriza\xE7\xE3o da sua ficha." }),
          linkInfo.data ? /* @__PURE__ */ jsxs6(Fragment4, { children: [
            /* @__PURE__ */ jsxs6("p", { children: [
              linkInfo.data.team_name,
              " \xB7 ",
              SLOT[linkInfo.data.member_type],
              linkInfo.data.role_name ? " \xB7 " + linkInfo.data.role_name : ""
            ] }),
            /* @__PURE__ */ jsx6(Button, { disabled: busy, onClick: () => run("accept_link", { token }, "Bem-vindo \xE0 equipe! Sua vaga foi confirmada."), children: "Aceitar convite e entrar na equipe" })
          ] }) : /* @__PURE__ */ jsx6(Notice, { error: true, children: linkInfo.error || "Carregando convite\u2026" }),
          /* @__PURE__ */ jsx6(Button, { secondary: true, onClick: () => {
            sessionStorage.removeItem("laes-team-link");
            setToken("");
          }, children: "Dispensar convite" })
        ] }),
        intent && d.teams.some((t) => t.id === intent.team_id) && /* @__PURE__ */ jsxs6("div", { className: "lt-panel", children: [
          /* @__PURE__ */ jsxs6("h3", { children: [
            "Continue seu pedido para ",
            intent.team_name
          ] }),
          /* @__PURE__ */ jsxs6(Button, { disabled: busy, onClick: async () => {
            const result = await run("request_join", { team_id: intent.team_id, kind: intent.kind, member_type: intent.member_type }, "Pedido enviado. Acompanhe a an\xE1lise neste painel.");
            if (result) {
              sessionStorage.removeItem("laes-team-intent");
              setIntent(null);
            }
          }, children: [
            "Confirmar pedido de ",
            intent.kind === "captain" ? "capitania" : "vaga"
          ] }),
          /* @__PURE__ */ jsx6(Button, { secondary: true, onClick: () => {
            sessionStorage.removeItem("laes-team-intent");
            setIntent(null);
          }, children: "Agora n\xE3o" })
        ] }),
        tab === "admin" && /* @__PURE__ */ jsxs6("div", { className: "lt-detail-grid", children: [
          /* @__PURE__ */ jsx6(CreateTeam, { data: d, ...{ run, busy } }),
          /* @__PURE__ */ jsxs6("div", { className: "lt-panel", children: [
            /* @__PURE__ */ jsx6("h2", { children: "Pedidos de capitania" }),
            /* @__PURE__ */ jsx6("p", { className: "lt-muted", children: "Aprovar um capit\xE3o d\xE1 acesso somente \xE0 equipe solicitada e ocupa a vaga escolhida no elenco." }),
            /* @__PURE__ */ jsx6(Requests, { requests: (requests.data || empty).filter((r) => r.kind === "captain"), ...{ run, busy } }),
            /* @__PURE__ */ jsx6("h3", { className: "lt-space", children: "Capit\xE3es aprovados" }),
            d.teams.filter((t) => t.captain_nick).map((t) => /* @__PURE__ */ jsxs6("div", { className: "lt-request", children: [
              /* @__PURE__ */ jsxs6("strong", { children: [
                t.name,
                " \xB7 ",
                t.captain_nick
              ] }),
              /* @__PURE__ */ jsx6(Button, { secondary: true, disabled: busy, onClick: () => {
                if (confirm(`Retirar a capitania de ${t.name}? A pessoa continua no elenco como atleta.`)) run("revoke_captain", { team_id: t.id }, "Capitania retirada. A pessoa continua no elenco.");
              }, children: "Retirar capitania" })
            ] }, t.id))
          ] })
        ] }),
        tab === "badges" && /* @__PURE__ */ jsx6(BadgeAdmin, {}),
        tab === "manage" && /* @__PURE__ */ jsx6(TeamManager, { teams: managed, requests: requests.data || empty, ...{ run, busy, revision } }),
        tab === "community" && /* @__PURE__ */ jsx6(Community, { data: d, ...{ managed, run, busy, revision } }),
        tab === "profile" && /* @__PURE__ */ jsx6(ContactEditor, { contact: s.contact, initialNick: s.nick, games: s.games, data: d, onSaved: () => {
          state.reload();
          setRevision((r) => r + 1);
        } }, auth.user.id),
        tab === "teams" && /* @__PURE__ */ jsxs6(Fragment4, { children: [
          !s.contact?.whatsapp && /* @__PURE__ */ jsxs6("div", { className: "lt-panel lt-invitation", children: [
            /* @__PURE__ */ jsx6("h3", { children: "Complete sua ficha para combinar os treinos." }),
            /* @__PURE__ */ jsx6("p", { children: "Adicione seu WhatsApp e suas rotas ou posi\xE7\xF5es. Voc\xEA escolhe se deseja compartilhar o contato com os respons\xE1veis." }),
            /* @__PURE__ */ jsx6(Button, { secondary: true, onClick: () => setTab("profile"), children: "Completar minha ficha" })
          ] }),
          !!s.invites.length && /* @__PURE__ */ jsxs6("div", { className: "lt-panel", children: [
            /* @__PURE__ */ jsx6("h2", { children: "Convites recebidos" }),
            /* @__PURE__ */ jsx6("p", { className: "lt-muted", children: "Ao aceitar, seu nickname e sua posi\xE7\xE3o passam a aparecer no elenco p\xFAblico da equipe." }),
            s.invites.map((i) => /* @__PURE__ */ jsxs6("article", { className: "lt-request", children: [
              /* @__PURE__ */ jsx6("h3", { children: i.name }),
              /* @__PURE__ */ jsx6(Pill, { children: SLOT[i.member_type] }),
              /* @__PURE__ */ jsx6("p", { children: i.message }),
              /* @__PURE__ */ jsxs6("div", { className: "lt-actions", children: [
                /* @__PURE__ */ jsx6(Button, { disabled: busy, onClick: () => run("respond_invite", { id: i.id, accept: true }, "Convite aceito. Voc\xEA j\xE1 est\xE1 no elenco."), children: "Aceitar convite" }),
                /* @__PURE__ */ jsx6(Button, { secondary: true, disabled: busy, onClick: () => run("respond_invite", { id: i.id, accept: false }, "Convite recusado."), children: "Recusar" })
              ] })
            ] }, i.id))
          ] }),
          /* @__PURE__ */ jsxs6("div", { className: "lt-panel", children: [
            /* @__PURE__ */ jsx6("h2", { children: "Minhas equipes" }),
            s.memberships.length ? /* @__PURE__ */ jsx6("div", { className: "lt-team-grid", children: s.memberships.map((m) => /* @__PURE__ */ jsxs6("article", { className: "lt-request", children: [
              /* @__PURE__ */ jsx6("h3", { children: m.name }),
              /* @__PURE__ */ jsxs6(Pill, { children: [
                SLOT[m.member_type],
                m.is_captain ? " \xB7 Capit\xE3o" : ""
              ] }),
              m.role_name && /* @__PURE__ */ jsx6("p", { children: m.role_name })
            ] }, m.id)) }) : /* @__PURE__ */ jsxs6("p", { className: "lt-muted", children: [
              "Seu pr\xF3ximo time pode estar esperando por voc\xEA. ",
              /* @__PURE__ */ jsx6("a", { className: "lt-link", href: "/equipes", children: "Conhecer equipes com vagas" })
            ] })
          ] }),
          !!managed.length && /* @__PURE__ */ jsx6(TeamManager, { teams: managed, requests: requests.data || empty, ...{ run, busy, revision } }),
          /* @__PURE__ */ jsxs6("div", { className: "lt-panel", children: [
            /* @__PURE__ */ jsx6("h2", { children: "Meus pedidos" }),
            s.requests.length ? s.requests.map((r) => /* @__PURE__ */ jsxs6("article", { className: "lt-request", children: [
              /* @__PURE__ */ jsxs6("div", { className: "lt-row", children: [
                /* @__PURE__ */ jsx6("h3", { children: r.name }),
                /* @__PURE__ */ jsx6(Pill, { children: STATUS[r.status] })
              ] }),
              /* @__PURE__ */ jsxs6("p", { children: [
                r.kind === "captain" ? "Capitania" : SLOT[r.member_type],
                r.role_name ? " \xB7 " + r.role_name : ""
              ] }),
              r.status === "pending" && /* @__PURE__ */ jsx6(Button, { secondary: true, disabled: busy, onClick: () => run("cancel_request", { id: r.id }, "Pedido cancelado."), children: "Cancelar pedido" })
            ] }, r.id)) : /* @__PURE__ */ jsx6("p", { className: "lt-muted", children: "Quando voc\xEA pedir uma vaga ou capitania, a an\xE1lise aparecer\xE1 aqui." })
          ] })
        ] })
      ] })
    ] })
  ] });
}
function Portal({ Legacy }) {
  useEffect4(() => {
    const params = new URLSearchParams(location.search), incoming = params.get("convite");
    if (incoming && /^[a-f0-9]{64}$/.test(incoming)) {
      sessionStorage.setItem("laes-team-link", incoming);
      params.delete("convite");
      history.replaceState(history.state, "", location.pathname + (params.toString() ? "?" + params : ""));
    }
  }, []);
  return /* @__PURE__ */ jsx6(Legacy, { AthleteRegistration, AthleteTeamSection, AthleteProfile });
}
function Admin({ Legacy }) {
  return /* @__PURE__ */ jsx6(TeamWorkspace, { adminPage: true, Legacy });
}
function AthleteTeamSection({ section = "teams" }) {
  const auth = useAuth4(), [busy, setBusy] = useState4(false), [notice, setNotice] = useState4(""), [error, setError] = useState4(false), [revision, setRevision] = useState4(0), [token, setToken] = useState4(""), [intent, setIntent] = useState4(null);
  const data = useLoader(publicData), state = useLoader(() => rpc("state"), [auth.user?.id]), requests = useLoader(() => rpc("review_requests"), [auth.user?.id]);
  useEffect4(() => {
    const timer = setInterval(() => {
      state.reload();
      requests.reload();
    }, 15e3);
    return () => clearInterval(timer);
  }, [auth.user?.id]);
  useEffect4(() => {
    const params = new URLSearchParams(location.search), incoming = params.get("convite");
    if (incoming && /^[a-f0-9]{64}$/.test(incoming)) {
      sessionStorage.setItem("laes-team-link", incoming);
      params.delete("convite");
      history.replaceState(history.state, "", location.pathname + (params.toString() ? "?" + params : ""));
    }
    setToken(sessionStorage.getItem("laes-team-link") || "");
    try {
      const pending = JSON.parse(sessionStorage.getItem("laes-team-intent") || "null");
      if (pending && Date.now() - pending.created_at < 864e5) setIntent(pending);
    } catch {
    }
  }, []);
  const linkInfo = useLoader(() => token ? rpc("inspect_link", { token }) : null, [token, revision]);
  async function run(action, payload, message) {
    setBusy(true);
    setNotice("");
    setError(false);
    try {
      const result = await rpc(action, payload);
      await Promise.all([state.reload(), requests.reload(), data.reload()]);
      setRevision((r) => r + 1);
      setNotice(message || "Informa\xE7\xF5es atualizadas.");
      if (action === "accept_link") {
        sessionStorage.removeItem("laes-team-link");
        setToken("");
      }
      return result;
    } catch (e) {
      setError(true);
      setNotice(friendly(e));
      return null;
    } finally {
      setBusy(false);
    }
  }
  if (!state.data || !data.data) return /* @__PURE__ */ jsxs6("div", { className: "lt-portal lt-embedded", children: [
    /* @__PURE__ */ jsx6(Notice, { error: true, children: state.error || data.error }),
    state.loading || data.loading ? /* @__PURE__ */ jsx6(Waiting, {}) : /* @__PURE__ */ jsx6(Button, { secondary: true, onClick: () => {
      state.reload();
      data.reload();
      requests.reload();
    }, children: "Tentar novamente" })
  ] });
  const s = state.data, d = data.data, managed = s.is_admin ? d.teams : d.teams.filter((t) => s.captain_teams.includes(t.id));
  return /* @__PURE__ */ jsx6("div", { className: "lt-portal lt-embedded", children: /* @__PURE__ */ jsxs6("div", { className: "lt-embed-body", children: [
    /* @__PURE__ */ jsx6(Notice, { error, children: notice }),
    section === "teams" && /* @__PURE__ */ jsxs6(Fragment4, { children: [
      /* @__PURE__ */ jsxs6("div", { className: "lt-panel", children: [
        /* @__PURE__ */ jsx6("p", { className: "lt-eyebrow", children: "Seu pr\xF3ximo time" }),
        /* @__PURE__ */ jsx6("h2", { children: "Minhas equipes" }),
        s.memberships.length ? /* @__PURE__ */ jsx6("div", { className: "lt-team-grid", children: s.memberships.map((m) => /* @__PURE__ */ jsxs6("article", { className: "lt-request", children: [
          /* @__PURE__ */ jsx6("h3", { children: m.name }),
          /* @__PURE__ */ jsxs6(Pill, { children: [
            SLOT[m.member_type],
            m.is_captain ? " \xB7 Capit\xE3o" : ""
          ] }),
          m.role_name && /* @__PURE__ */ jsx6("p", { children: m.role_name })
        ] }, m.id)) }) : /* @__PURE__ */ jsxs6("p", { className: "lt-muted", children: [
          "Voc\xEA ainda n\xE3o faz parte de uma equipe. ",
          /* @__PURE__ */ jsx6("a", { className: "lt-link", href: "/equipes", children: "Encontre sua pr\xF3xima equipe \u2192" })
        ] })
      ] }),
      !!managed.length && /* @__PURE__ */ jsx6(TeamManager, { teams: managed, requests: requests.data || empty, ...{ run, busy, revision } })
    ] }),
    section === "invites" && /* @__PURE__ */ jsxs6(Fragment4, { children: [
      token && /* @__PURE__ */ jsxs6("div", { className: "lt-panel lt-invitation", children: [
        /* @__PURE__ */ jsx6("h2", { children: "Voc\xEA recebeu um convite por link." }),
        linkInfo.data ? /* @__PURE__ */ jsxs6(Fragment4, { children: [
          /* @__PURE__ */ jsxs6("p", { children: [
            linkInfo.data.team_name,
            " \xB7 ",
            SLOT[linkInfo.data.member_type],
            linkInfo.data.role_name ? " \xB7 " + linkInfo.data.role_name : ""
          ] }),
          /* @__PURE__ */ jsx6(Button, { disabled: busy, onClick: () => run("accept_link", { token }, "Convite aceito. Voc\xEA j\xE1 est\xE1 no elenco."), children: "Aceitar convite e entrar na equipe" })
        ] }) : /* @__PURE__ */ jsx6(Notice, { error: !!linkInfo.error, children: linkInfo.error || "Carregando convite\u2026" }),
        /* @__PURE__ */ jsx6(Button, { secondary: true, disabled: busy, onClick: () => {
          sessionStorage.removeItem("laes-team-link");
          setToken("");
        }, children: "Dispensar convite" })
      ] }),
      /* @__PURE__ */ jsxs6("div", { className: "lt-panel", children: [
        /* @__PURE__ */ jsx6("p", { className: "lt-eyebrow", children: "O pr\xF3ximo jogo pode come\xE7ar aqui" }),
        /* @__PURE__ */ jsx6("h2", { children: "Convites recebidos" }),
        !s.invites.length && /* @__PURE__ */ jsx6("p", { className: "lt-muted", children: "Nenhum convite pendente por enquanto. Seu perfil j\xE1 est\xE1 na comunidade para outros jogadores conhecerem voc\xEA." }),
        s.invites.map((i) => /* @__PURE__ */ jsxs6("article", { className: "lt-request", children: [
          /* @__PURE__ */ jsx6("h3", { children: i.name }),
          /* @__PURE__ */ jsx6(Pill, { children: SLOT[i.member_type] }),
          /* @__PURE__ */ jsx6("p", { children: i.message }),
          /* @__PURE__ */ jsxs6("div", { className: "lt-actions", children: [
            /* @__PURE__ */ jsx6(Button, { disabled: busy, onClick: () => run("respond_invite", { id: i.id, accept: true }, "Convite aceito. Voc\xEA j\xE1 est\xE1 no elenco."), children: "Aceitar convite" }),
            /* @__PURE__ */ jsx6(Button, { secondary: true, disabled: busy, onClick: () => run("respond_invite", { id: i.id, accept: false }, "Convite recusado."), children: "Recusar" })
          ] })
        ] }, i.id))
      ] })
    ] }),
    section === "activity" && /* @__PURE__ */ jsxs6(Fragment4, { children: [
      intent && d.teams.some((t) => t.id === intent.team_id) && /* @__PURE__ */ jsxs6("div", { className: "lt-panel", children: [
        /* @__PURE__ */ jsxs6("h3", { children: [
          "Continue seu pedido para ",
          intent.team_name
        ] }),
        /* @__PURE__ */ jsx6(Button, { disabled: busy, onClick: async () => {
          const result = await run("request_join", { team_id: intent.team_id, kind: intent.kind, member_type: intent.member_type }, "Pedido enviado.");
          if (result) {
            sessionStorage.removeItem("laes-team-intent");
            setIntent(null);
          }
        }, children: "Confirmar pedido" })
      ] }),
      /* @__PURE__ */ jsxs6("div", { className: "lt-panel", children: [
        /* @__PURE__ */ jsx6("p", { className: "lt-eyebrow", children: "Acompanhe seu pr\xF3ximo passo" }),
        /* @__PURE__ */ jsx6("h2", { children: "Pedidos de vaga e capitania" }),
        s.requests.length ? s.requests.map((r) => /* @__PURE__ */ jsxs6("article", { className: "lt-request", children: [
          /* @__PURE__ */ jsxs6("div", { className: "lt-row", children: [
            /* @__PURE__ */ jsx6("h3", { children: r.name }),
            /* @__PURE__ */ jsx6(Pill, { children: STATUS[r.status] })
          ] }),
          /* @__PURE__ */ jsxs6("p", { children: [
            r.kind === "captain" ? "Capitania" : SLOT[r.member_type],
            r.role_name ? " \xB7 " + r.role_name : ""
          ] }),
          r.status === "pending" && /* @__PURE__ */ jsx6(Button, { secondary: true, disabled: busy, onClick: () => run("cancel_request", { id: r.id }, "Pedido cancelado."), children: "Cancelar pedido" })
        ] }, r.id)) : /* @__PURE__ */ jsxs6("p", { className: "lt-muted", children: [
          "Suas solicita\xE7\xF5es de vaga e capitania aparecem aqui. ",
          /* @__PURE__ */ jsx6("a", { className: "lt-link", href: "/equipes", children: "Explorar equipes \u2192" })
        ] })
      ] })
    ] })
  ] }) });
}
function AthleteProfile({ onEdit }) {
  const auth = useAuth4(), p = auth.profile || {}, games = useLoader(async () => {
    const r = await supabase4.from("athlete_games").select("modality_id,roles,rank,game_nick,modalities(name)").eq("user_id", auth.user.id);
    if (r.error) throw r.error;
    return r.data;
  }, [auth.user.id]);
  return /* @__PURE__ */ jsxs6("div", { className: "lt-portal", children: [
    /* @__PURE__ */ jsxs6("div", { className: "lt-row", children: [
      /* @__PURE__ */ jsxs6("div", { children: [
        /* @__PURE__ */ jsx6("p", { className: "lt-eyebrow", children: "Voc\xEA na comunidade" }),
        /* @__PURE__ */ jsx6("h2", { children: "Meu perfil de atleta" })
      ] }),
      /* @__PURE__ */ jsx6(Button, { secondary: true, onClick: onEdit, children: "Editar em Configura\xE7\xF5es" })
    ] }),
    /* @__PURE__ */ jsxs6("div", { className: "lt-request", children: [
      /* @__PURE__ */ jsxs6("div", { className: "lt-row", children: [
        /* @__PURE__ */ jsx6(MediaImage3, { src: p.avatar_url, alt: `Foto de ${p.nick}`, className: "ar-avatar" }),
        /* @__PURE__ */ jsxs6("div", { children: [
          /* @__PURE__ */ jsx6("h3", { children: p.nick }),
          /* @__PURE__ */ jsx6("p", { className: "lt-muted", children: [p.city, p.state].filter(Boolean).join(" \xB7 ") })
        ] }),
        /* @__PURE__ */ jsx6(Pill, { children: "Na comunidade" })
      ] }),
      p.bio && /* @__PURE__ */ jsx6("p", { className: "lt-message", children: p.bio }),
      p.availability && /* @__PURE__ */ jsxs6("p", { children: [
        "Hor\xE1rios: ",
        p.availability
      ] }),
      /* @__PURE__ */ jsx6(Notice, { error: true, children: games.error }),
      games.loading ? /* @__PURE__ */ jsx6(Waiting, {}) : games.data?.map((g) => /* @__PURE__ */ jsxs6("div", { className: "lt-request", children: [
        /* @__PURE__ */ jsx6("h4", { children: g.modalities?.name }),
        /* @__PURE__ */ jsx6("p", { children: g.roles.join(" \xB7 ") }),
        g.rank && /* @__PURE__ */ jsx6(Pill, { children: g.rank }),
        g.game_nick && /* @__PURE__ */ jsxs6("p", { children: [
          "Nick no jogo: ",
          g.game_nick
        ] })
      ] }, g.modality_id)),
      /* @__PURE__ */ jsx6("a", { className: "lt-link", href: `/atletas/${encodeURIComponent(p.nick || "")}`, children: "Ver meu perfil p\xFAblico \u2192" }),
      p.twitch_channel && /* @__PURE__ */ jsxs6("div", { className: "lv-profile-channel", children: [
        /* @__PURE__ */ jsxs6("div", { children: [
          /* @__PURE__ */ jsx6("span", { children: "Seu canal na comunidade" }),
          /* @__PURE__ */ jsx6("br", {}),
          /* @__PURE__ */ jsxs6("a", { href: `https://www.twitch.tv/${encodeURIComponent(p.twitch_channel)}`, target: "_blank", rel: "noopener noreferrer", children: [
            "twitch.tv/",
            p.twitch_channel,
            " \u2197"
          ] })
        ] }),
        /* @__PURE__ */ jsx6("a", { href: "/ao-vivo", children: "Ver a LAES AO VIVO \u2192" })
      ] })
    ] }),
    /* @__PURE__ */ jsx6(BadgeCollection, { nick: p.nick }),
    /* @__PURE__ */ jsx6(AthleteVacancies, { games: games.data || [] })
  ] });
}
function AthleteVacancies({ games }) {
  const q = useLoader(async () => {
    const r = await supabase4.from("team_roster_status").select("*").order("sort").order("name");
    if (r.error) throw r.error;
    return r.data;
  }, []);
  const preferred = new Set(games.map((g) => g.modality_id));
  const available = (q.data || []).filter((t) => Number(t.starter_vacancies) + Number(t.reserve_vacancies) > 0);
  const matches = available.filter((t) => preferred.has(t.modality_id)), teams = (matches.length ? matches : available).slice(0, 3);
  return /* @__PURE__ */ jsxs6("section", { className: "ap-vacancies", "aria-labelledby": "athlete-vacancies-title", children: [
    /* @__PURE__ */ jsxs6("header", { children: [
      /* @__PURE__ */ jsxs6("div", { children: [
        /* @__PURE__ */ jsx6("p", { className: "lt-eyebrow", children: "Seu pr\xF3ximo passo" }),
        /* @__PURE__ */ jsx6("h3", { id: "athlete-vacancies-title", children: "Seu jogo. Sua pr\xF3xima equipe." }),
        /* @__PURE__ */ jsx6("p", { children: matches.length ? "Vagas nas modalidades do seu cadastro." : "Encontre uma equipe e leve seu jogo mais longe." })
      ] }),
      /* @__PURE__ */ jsxs6("a", { className: "ap-vacancies-all", href: "/equipes", children: [
        "Ver todas as equipes ",
        /* @__PURE__ */ jsx6("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", "aria-hidden": "true", children: /* @__PURE__ */ jsx6("path", { d: "M7 17 17 7M7 7h10v10" }) })
      ] })
    ] }),
    q.loading ? /* @__PURE__ */ jsx6(Waiting, {}) : q.error ? /* @__PURE__ */ jsxs6("p", { className: "lt-muted", children: [
      "As oportunidades est\xE3o na p\xE1gina de equipes. ",
      /* @__PURE__ */ jsx6("a", { className: "lt-link", href: "/equipes", children: "Explorar equipes \u2192" })
    ] }) : teams.length ? /* @__PURE__ */ jsx6("div", { className: "ap-vacancies-grid", children: teams.map((t) => /* @__PURE__ */ jsxs6("article", { children: [
      /* @__PURE__ */ jsx6(Pill, { children: t.modality_name }),
      /* @__PURE__ */ jsx6("h4", { children: t.name }),
      /* @__PURE__ */ jsxs6("p", { children: [
        t.starter_vacancies,
        " ",
        Number(t.starter_vacancies) === 1 ? "vaga titular" : "vagas titulares",
        " \xB7 ",
        t.reserve_vacancies,
        " ",
        Number(t.reserve_vacancies) === 1 ? "reserva" : "reservas"
      ] }),
      /* @__PURE__ */ jsx6("a", { href: `/equipes/${encodeURIComponent(t.slug)}`, className: "lt-link", children: "Conhecer equipe e solicitar vaga \u2192" })
    ] }, t.id)) }) : /* @__PURE__ */ jsxs6("p", { className: "lt-muted", children: [
      "Novas oportunidades aparecem por aqui. ",
      /* @__PURE__ */ jsx6("a", { className: "lt-link", href: "/equipes", children: "Conhecer as equipes \u2192" })
    ] })
  ] });
}
export {
  Admin,
  BadgeCollection,
  CommunityCards,
  CommunityDirectory,
  Portal,
  PublicAthleteProfile,
  TeamDetail,
  Teams,
  Vacancies
};
