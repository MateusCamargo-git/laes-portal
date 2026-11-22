import { r as __toESM } from "../_runtime.mjs";
import { r as supabase } from "./backend-mB6vbMUi.mjs";
import { m as require_react, p as require_jsx_runtime } from "../_libs/@radix-ui/react-avatar+[...].mjs";
import { b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as useQueryClient, n as useQuery } from "../_libs/tanstack__react-query.mjs";
import { m as LoaderCircle } from "../_libs/lucide-react.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/Logo-DncJtcSp.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var AuthContext = (0, import_react.createContext)(null);
function AuthProvider({ children }) {
	const request = (0, import_react.useRef)(0);
	const lastUserId = (0, import_react.useRef)(null);
	const qc = useQueryClient();
	const [loading, setLoading] = (0, import_react.useState)(true);
	const [user, setUser] = (0, import_react.useState)(null);
	const [profile, setProfile] = (0, import_react.useState)(null);
	const [isAdmin, setIsAdmin] = (0, import_react.useState)(false);
	const [modalityAdminIds, setModalityAdminIds] = (0, import_react.useState)([]);
	const [captainTeamIds, setCaptainTeamIds] = (0, import_react.useState)([]);
	const load = (0, import_react.useCallback)(async (u) => {
		const current = ++request.current;
		if (lastUserId.current !== (u?.id ?? null)) {
			qc.clear();
			lastUserId.current = u?.id ?? null;
		}
		setLoading(true);
		setProfile(null);
		setIsAdmin(false);
		setModalityAdminIds([]);
		setCaptainTeamIds([]);
		setUser(u);
		if (!u) {
			setProfile(null);
			setIsAdmin(false);
			setModalityAdminIds([]);
			setCaptainTeamIds([]);
			setLoading(false);
			return;
		}
		const [p, r, m, c] = await Promise.all([
			supabase.from("profiles").select("*").eq("id", u.id).maybeSingle(),
			supabase.from("user_roles").select("role").eq("user_id", u.id),
			supabase.from("modality_admins").select("modality_id").eq("user_id", u.id),
			supabase.from("team_captains").select("team_id").eq("user_id", u.id)
		]);
		if (current !== request.current) return;
		setProfile(p.data ?? null);
		setIsAdmin(!!r.data?.some((x) => x.role === "admin"));
		setModalityAdminIds(m.data?.map((x) => x.modality_id) ?? []);
		setCaptainTeamIds(c.data?.map((x) => x.team_id) ?? []);
		setLoading(false);
	}, [qc]);
	(0, import_react.useEffect)(() => {
		supabase.auth.getUser().then(({ data }) => load(data.user ?? null)).catch(() => load(null));
		const { data: sub } = supabase.auth.onAuthStateChange((event, session) => {
			if (event !== "SIGNED_IN" && event !== "SIGNED_OUT" && event !== "USER_UPDATED" && event !== "PASSWORD_RECOVERY") return;
			setTimeout(() => load(session?.user ?? null), 0);
		});
		return () => {
			request.current++;
			sub.subscription.unsubscribe();
		};
	}, [load]);
	const refresh = (0, import_react.useCallback)(async () => {
		const { data } = await supabase.auth.getUser();
		await load(data.user ?? null);
	}, [load]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthContext.Provider, {
		value: {
			loading,
			user,
			profile,
			isAdmin,
			modalityAdminIds,
			captainTeamIds,
			isStaff: isAdmin || modalityAdminIds.length > 0 || captainTeamIds.length > 0,
			refresh
		},
		children
	});
}
function useAuth() {
	const ctx = (0, import_react.useContext)(AuthContext);
	if (!ctx) throw new Error("useAuth must be used inside AuthProvider");
	return ctx;
}
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var badgeVariants = cva("inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2", {
	variants: { variant: {
		default: "border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80",
		secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
		destructive: "border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80",
		outline: "text-foreground"
	} },
	defaultVariants: { variant: "default" }
});
function Badge({ className, variant, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn(badgeVariants({ variant }), className),
		...props
	});
}
var TZ = "America/Sao_Paulo";
function formatDate(value) {
	if (!value) return "—";
	return new Intl.DateTimeFormat("pt-BR", {
		timeZone: TZ,
		dateStyle: "short"
	}).format(new Date(value));
}
function formatDateLong(value) {
	if (!value) return "—";
	return new Intl.DateTimeFormat("pt-BR", {
		timeZone: TZ,
		day: "2-digit",
		month: "long",
		year: "numeric"
	}).format(new Date(value));
}
function formatDateTime(value) {
	if (!value) return "—";
	return new Intl.DateTimeFormat("pt-BR", {
		timeZone: TZ,
		day: "2-digit",
		month: "2-digit",
		year: "numeric",
		hour: "2-digit",
		minute: "2-digit"
	}).format(new Date(value)) + " (Brasília)";
}
/** Convert a stored ISO timestamp into the value for <input type="datetime-local"> in São Paulo time. */
function toLocalInput(value) {
	if (!value) return "";
	return new Intl.DateTimeFormat("sv-SE", {
		timeZone: TZ,
		year: "numeric",
		month: "2-digit",
		day: "2-digit",
		hour: "2-digit",
		minute: "2-digit"
	}).format(new Date(value)).replace(" ", "T");
}
/** Interpret a datetime-local value as São Paulo time (UTC-3, no DST since 2019). */
function fromLocalInput(value) {
	if (!value) return null;
	return (/* @__PURE__ */ new Date(`${value}:00-03:00`)).toISOString();
}
var memberTypeLabel = {
	titular: "Titular",
	reserva: "Reserva",
	coach: "Coach",
	comissao: "Comissão técnica"
};
var applicationStatusLabel = {
	enviada: "Enviada",
	em_analise: "Em análise",
	aprovado: "Aprovado — aguardando sua confirmação",
	recusado: "Recusado",
	cancelado: "Cancelado",
	confirmado: "Confirmado no elenco"
};
var inviteStatusLabel = {
	pendente: "Pendente",
	aceito: "Aceito",
	recusado: "Recusado",
	cancelado: "Cancelado"
};
var tournamentStatusLabel = {
	em_breve: "Em breve",
	inscricoes_abertas: "Inscrições abertas",
	inscricoes_encerradas: "Inscrições encerradas",
	em_andamento: "Em andamento",
	encerrado: "Encerrado",
	cancelado: "Cancelado"
};
var newsCategoryLabel = {
	anuncios: "Anúncios",
	equipes: "Equipes",
	campeonatos: "Campeonatos",
	comunidade: "Comunidade"
};
var recruitmentLabel = {
	aberto: "Recrutando",
	fechado: "Elenco fechado",
	em_breve: "Recrutamento em breve"
};
var UFS = [
	"AC",
	"AL",
	"AP",
	"AM",
	"BA",
	"CE",
	"DF",
	"ES",
	"GO",
	"MA",
	"MT",
	"MS",
	"MG",
	"PA",
	"PB",
	"PR",
	"PE",
	"PI",
	"RJ",
	"RN",
	"RS",
	"RO",
	"RR",
	"SC",
	"SP",
	"SE",
	"TO"
];
function PageHero({ eyebrow, title, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "laes-hero relative overflow-hidden border-b border-black/10",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LionMark, { className: "pointer-events-none absolute -right-10 top-1/2 size-72 -translate-y-1/2 text-primary/15" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24",
			children: [
				eyebrow && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow",
					children: eyebrow
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-3 max-w-3xl text-4xl font-bold uppercase leading-[0.95] animate-rise md:text-6xl",
					children: title
				}),
				children && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-5 max-w-2xl text-lg text-black/75",
					children
				})
			]
		})]
	});
}
function Section({ className, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: cn("mx-auto max-w-7xl px-4 py-14 sm:px-6 md:py-20", className),
		children
	});
}
function SectionTitle({ eyebrow, title, action }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mb-8 flex flex-wrap items-end justify-between gap-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [eyebrow && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "eyebrow",
			children: eyebrow
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "mt-2 text-3xl font-bold uppercase md:text-4xl",
			children: title
		})] }), action]
	});
}
function Empty({ title, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col items-center rounded-3xl border border-border bg-card/50 px-6 py-12 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LionMark, { className: "size-10 text-muted-foreground/40" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 font-display text-lg font-semibold",
				children: title
			}),
			children && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-1 max-w-md text-sm text-muted-foreground",
				children
			})
		]
	});
}
function Loading({label="Carregando…"}){return (0,import_jsx_runtime.jsxs)("div",{role:"status","aria-live":"polite","aria-busy":true,className:"ll-loading",children:[(0,import_jsx_runtime.jsxs)("div",{className:"ll-mark","aria-hidden":true,children:[(0,import_jsx_runtime.jsx)("span",{className:"ll-orbit"}),(0,import_jsx_runtime.jsx)("img",{src:"/images/laes/logo-principal.png",alt:"",width:70,height:70})]}),(0,import_jsx_runtime.jsx)("p",{children:label==="Carregando…"?"Preparando a próxima partida…":label})]})}

function ErrorNote({ error }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		role: "alert",
		className: "border-l-4 border-destructive bg-card p-4 text-sm",
		children: ["Não foi possível carregar as informações. ", error instanceof Error ? error.message : ""]
	});
}
function TeamLogo({ url, name, className }) {
	const officialLogo = {
		"laes alpha": "alpha",
		"laes bravo": "bravo",
		"laes eclipse": "eclipse",
		"laes valkyrias": "valkyrias",
		"laes nova": "nova",
		"laes red line": "red-line"
	}[name.trim().toLowerCase().replace(/\s+/g, " ")];
	const logoUrl = officialLogo ? `/images/teams/laes-${officialLogo}-v2.png` : url;
	if (logoUrl) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MediaImage, {
		src: logoUrl,
		alt: `Logo ${name}`,
		className: cn("object-contain", className),
		loading: "lazy"
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("flex items-center justify-center bg-ink text-primary", className),
		"aria-hidden": "true",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LionMark, { className: "size-1/2" })
	});
}
function TeamCard({ team }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to: "/equipes/$slug",
		params: { slug: team.slug },
		className: "group laes-card clip-blade flex flex-col bg-card transition-transform hover:-translate-y-1",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TeamLogo, {
			url: team.logo_url,
			name: team.name,
			className: "aspect-square w-full p-6"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "border-t-4 border-primary p-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground",
					children: [team.modalities?.name, team.category ? ` · ${team.category}` : ""]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "mt-1 text-xl font-bold uppercase group-hover:text-primary",
					children: team.name
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
					variant: team.recruitment === "aberto" ? "default" : "secondary",
					className: "mt-3",
					children: recruitmentLabel[team.recruitment]
				})
			]
		})]
	});
}
function __laesTcElement(type,props,...children){const next={...(props||{})};const key=next.key;delete next.key;if(children.length)next.children=children.length===1?children[0]:children;return import_jsx_runtime.jsx(type,next,key);}
function laesTournamentDate(value) {
  if (!value) return "Data a confirmar";
  const date = String(value).match(/^(\d{4})-(\d{2})-(\d{2})/);
  return date ? `${date[3]}/${date[2]}/${date[1]}` : "Data a confirmar";
}
function laesTournamentStatus(t) {
  const status = t.status || "em_breve";
  if (["cancelado", "encerrado", "em_andamento", "inscricoes_encerradas"].includes(status)) return status;
  const deadline = String(t.registration_deadline || "").slice(0, 10);
  const today = new Intl.DateTimeFormat("en-CA", { timeZone: "America/Sao_Paulo", year: "numeric", month: "2-digit", day: "2-digit" }).format(/* @__PURE__ */ new Date());
  return /^\d{4}-\d{2}-\d{2}$/.test(deadline) && deadline < today ? "inscricoes_encerradas" : status;
}
function TournamentCard({ t }) {
  const status = laesTournamentStatus(t), labels = { em_breve: "Em breve", inscricoes_abertas: "Inscri\xE7\xF5es abertas", inscricoes_encerradas: "Inscri\xE7\xF5es encerradas", em_andamento: "Em andamento", encerrado: "Encerrado", cancelado: "Cancelado" };
  const deadline = t.until_full ? "At\xE9 esgotarem as vagas" : t.registration_deadline ? laesTournamentDate(t.registration_deadline) : "Prazo a confirmar";
  const prize = (t.prize || "Premia\xE7\xE3o a confirmar").split(";").map((p) => p.trim()).filter(Boolean);
  const url = `/campeonatos/${encodeURIComponent(t.id)}`;
  const logo = typeof t.logo_url === "string" && (/^\/(?!\/)/.test(t.logo_url) || /^https:\/\//.test(t.logo_url)) ? t.logo_url : "";
  return /* @__PURE__ */ __laesTcElement("article", { className: `tc-card tc-${status}`, "aria-label": `${t.name} \u2014 ${t.modalities?.name || "Campeonato"}` }, /* @__PURE__ */ __laesTcElement("div", { className: "tc-heading" }, /* @__PURE__ */ __laesTcElement("div", { className: "tc-logo" }, logo ? /* @__PURE__ */ __laesTcElement("img", { src: logo, alt: `Logo ${t.name}`, loading: "lazy", onError: (event) => {
    event.currentTarget.hidden = true;
    event.currentTarget.nextElementSibling.hidden = false;
  } }) : null, /* @__PURE__ */ __laesTcElement("span", { hidden: !!logo, className: "tc-logo-fallback", "aria-label": "Logo ainda n\xE3o informada" }, /* @__PURE__ */ __laesTcElement("svg", { width: "34", height: "34", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.5", "aria-hidden": "true" }, /* @__PURE__ */ __laesTcElement("path", { d: "M8 3h8v6a4 4 0 0 1-8 0V3Zm4 10v5m-4 3h8M8 5H4v2a4 4 0 0 0 4 4m8-6h4v2a4 4 0 0 1-4 4" })))), /* @__PURE__ */ __laesTcElement("div", { className: "tc-identity" }, /* @__PURE__ */ __laesTcElement("p", { className: "tc-modality" }, t.modalities?.name || "Modalidade a confirmar", t.category ? ` \xB7 ${t.category}` : ""), /* @__PURE__ */ __laesTcElement("h3", null, /* @__PURE__ */ __laesTcElement("a", { href: url }, t.name)), /* @__PURE__ */ __laesTcElement("div", { className: "tc-tags" }, /* @__PURE__ */ __laesTcElement("span", { className: `tc-status tc-status-${status}` }, /* @__PURE__ */ __laesTcElement("i", { "aria-hidden": "true" }), labels[status] || "Consulte a organiza\xE7\xE3o"), /* @__PURE__ */ __laesTcElement("span", { className: "tc-origin" }, t.is_laes ? "Organizado pela LAES" : "Evento externo")))), /* @__PURE__ */ __laesTcElement("dl", { className: "tc-facts" }, /* @__PURE__ */ __laesTcElement("div", null, /* @__PURE__ */ __laesTcElement("dt", null, "Prazo de inscri\xE7\xE3o"), /* @__PURE__ */ __laesTcElement("dd", null, deadline), status === "inscricoes_encerradas" && /* @__PURE__ */ __laesTcElement("small", null, "Consulte a organiza\xE7\xE3o sobre novas vagas.")), /* @__PURE__ */ __laesTcElement("div", null, /* @__PURE__ */ __laesTcElement("dt", null, "Data do evento"), /* @__PURE__ */ __laesTcElement("dd", null, laesTournamentDate(t.starts_at))), /* @__PURE__ */ __laesTcElement("div", null, /* @__PURE__ */ __laesTcElement("dt", null, "Valor da inscri\xE7\xE3o"), /* @__PURE__ */ __laesTcElement("dd", { className: /^gratuit/i.test(t.fee || "") ? "tc-free" : "" }, t.fee || "Valor a confirmar")), /* @__PURE__ */ __laesTcElement("div", null, /* @__PURE__ */ __laesTcElement("dt", null, "Plataforma"), /* @__PURE__ */ __laesTcElement("dd", null, t.platform || "N\xE3o informada"))), /* @__PURE__ */ __laesTcElement("div", { className: "tc-prize" }, /* @__PURE__ */ __laesTcElement("svg", { width: "19", height: "19", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.6", "aria-hidden": "true" }, /* @__PURE__ */ __laesTcElement("path", { d: "M8 3h8v6a4 4 0 0 1-8 0V3Zm4 10v5m-4 3h8M8 5H4v2a4 4 0 0 0 4 4m8-6h4v2a4 4 0 0 1-4 4" })), /* @__PURE__ */ __laesTcElement("div", null, /* @__PURE__ */ __laesTcElement("span", null, "Premia\xE7\xE3o"), /* @__PURE__ */ __laesTcElement("strong", null, prize[0]), prize.length > 1 && /* @__PURE__ */ __laesTcElement("p", null, prize.slice(1).join(" \xB7 ")))), /* @__PURE__ */ __laesTcElement("footer", null, /* @__PURE__ */ __laesTcElement("span", null, t.is_laes ? "Uma competi\xE7\xE3o da nossa Liga." : "Datas e vagas sujeitas \xE0 confirma\xE7\xE3o."), /* @__PURE__ */ __laesTcElement("a", { href: url }, "Ver detalhes e regulamento ", /* @__PURE__ */ __laesTcElement("svg", { width: "15", height: "15", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", "aria-hidden": "true" }, /* @__PURE__ */ __laesTcElement("path", { d: "M5 12h14m-6-6 6 6-6 6" })))));
}

function NewsCard({ n }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to: "/noticias/$slug",
		params: { slug: n.slug },
		className: "group laes-card overflow-hidden rounded-3xl flex flex-col bg-card",
		children: [n.cover_url ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MediaImage, {
			src: n.cover_url === "/images/news/primeiro-retrato.svg" ? "/images/news/primeiro-retrato-editorial.png" : n.cover_url,
			alt: "",
			className: "aspect-video w-full object-cover",
			loading: "lazy"
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "stripe-accent aspect-video w-full opacity-30" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "p-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "eyebrow",
					children: [
						newsCategoryLabel[n.category],
						" · ",
						formatDate(n.published_at)
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "mt-2 font-display text-lg font-bold leading-tight group-hover:text-primary",
					children: n.title
				}),
				n.excerpt && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 line-clamp-2 text-sm text-muted-foreground",
					children: n.excerpt
				})
			]
		})]
	});
}
var fieldClass = "w-full rounded border border-input bg-background px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary";
function Field({ label, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "grid gap-2 text-sm font-medium",
		children: [label, children]
	});
}
function Gate({ children, staff = false }) {
	const a = useAuth();
	if (a.loading) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Loading, {});
	if (!a.user) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "p-12 text-center",
		children: [
			"Entre na sua conta para continuar.",
			" ",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/auth",
				className: "text-primary underline",
				children: "Entrar"
			})
		]
	});
	if (staff && !a.isStaff) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		role: "alert",
		className: "p-12",
		children: "Seu perfil não possui acesso à administração."
	});
	return children;
}
function safeUrl(value) {
	if (!value) return "";
	try {
		const u = new URL(value);
		return ["http:", "https:"].includes(u.protocol) ? u.href : "";
	} catch {
		return "";
	}
}
function ExternalLink({ href, children }) {
	const url = safeUrl(href);
	return url ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
		className: "text-primary underline",
		href: url,
		target: "_blank",
		rel: "noreferrer",
		children
	}) : null;
}
/** Storage references stay in the database; temporary access links are never persisted. */
function MediaImage({ src, alt = "", ...props }) {
	const path = src?.startsWith("storage://media/") ? src.slice(16) : null;
	const q = useQuery({
		queryKey: ["media-url", path],
		enabled: !!path,
		staleTime: 24e4,
		refetchInterval: 24e4,
		queryFn: async () => {
			const r = await supabase.storage.from("media").createSignedUrl(path, 600);
			if (r.error) throw r.error;
			return r.data.signedUrl;
		}
	});
	const url = path ? q.data : src?.startsWith("/") ? src : safeUrl(src);
	return url ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
		...props,
		src: url,
		alt
	}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: props.className,
		role: alt ? "img" : void 0,
		"aria-label": alt || void 0
	});
}
var lion = "/images/laes/logo-principal.png";
function LionMark({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		"aria-hidden": "true",
		className: cn("inline-block bg-current", className),
		style: {
			maskImage: `url(${lion})`,
			WebkitMaskImage: `url(${lion})`,
			maskSize: "contain",
			WebkitMaskSize: "contain",
			maskRepeat: "no-repeat",
			WebkitMaskRepeat: "no-repeat",
			maskPosition: "center",
			WebkitMaskPosition: "center"
		}
	});
}
function Logo({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to: "/",
		className: cn("flex shrink-0 items-center gap-3", className),
		"aria-label": "LAES — página inicial",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "flex h-16 w-14 shrink-0 items-center justify-center overflow-hidden sm:h-[72px] sm:w-16",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MediaImage, {
				src: lion,
				alt: "",
				className: "h-full w-full scale-[1.4] object-contain"
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "font-display text-2xl font-bold leading-none tracking-wide",
			children: ["LAES", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "block text-[0.65rem] font-medium tracking-[0.2em] opacity-70",
				children: "E-SPORTS ALFENAS"
			})]
		})]
	});
}
//#endregion
export { recruitmentLabel as A, formatDate as C, inviteStatusLabel as D, fromLocalInput as E, toLocalInput as M, tournamentStatusLabel as N, memberTypeLabel as O, useAuth as P, fieldClass as S, formatDateTime as T, TeamLogo as _, ExternalLink as a, applicationStatusLabel as b, LionMark as c, MediaImage as d, NewsCard as f, TeamCard as g, SectionTitle as h, ErrorNote as i, safeUrl as j, newsCategoryLabel as k, Loading as l, Section as m, Badge as n, Field as o, PageHero as p, Empty as r, Gate as s, AuthProvider as t, Logo as u, TournamentCard as v, formatDateLong as w, cn as x, UFS as y };

export { laesTournamentStatus,laesTournamentDate };
