import {SiteHeader as LaesSiteHeader} from "./laes-site-header-20261117.mjs";
import {LivePage} from "./laes-live-feature-20261112.mjs";
import { r as __toESM } from "../_runtime.mjs";
import { r as supabase } from "./backend-mB6vbMUi.mjs";
import { m as require_react, p as require_jsx_runtime } from "../_libs/@radix-ui/react-avatar+[...].mjs";
import { S as useRouter, _ as lazyRouteComponent, b as Link, d as Scripts, f as HeadContent, g as Outlet, h as createRouter, p as useRouterState, v as createFileRoute, x as useNavigate, y as createRootRouteWithContext } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as useQueryClient, r as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { T as ArrowUpRight, d as MapPin, t as X, u as Menu } from "../_libs/lucide-react.mjs";
import { P as useAuth, c as LionMark, t as AuthProvider, u as Logo } from "./Logo-DncJtcSp.mjs";
import { t as Button } from "./button-tsOZyY2X.mjs";
import { t as Toaster } from "../_libs/sonner.mjs";
import { n as seo } from "./public.functions-C66LqsI5.mjs";
import { t as Route$18 } from "./atletas._nick-DhjUIlhr.mjs";
import { n as Route$19 } from "./auth-DxCCsUcK.mjs";
import { t as Route$20 } from "./campeonatos._id-DZNXsu2L.mjs";
import { t as OfficialChannels } from "./OfficialChannels-DEZk6_Rb.mjs";
import { t as Route$21 } from "./equipes._slug-CfqML_46.mjs";
import { t as Route$22 } from "./modalidades._slug-CRyWS4BK.mjs";
import { t as Route$23 } from "./noticias._slug-U9rHMdwJ.mjs";
import { t as AccountAvatar } from "./AccountAvatar-D2WQuB-2.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-CDniV3l8.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-BZXhjqTt.css";
var Toaster$1 = ({ ...props }) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster, {
		className: "toaster group",
		toastOptions: { classNames: {
			toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
			description: "group-[.toast]:text-muted-foreground",
			actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
			cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
		} },
		...props
	});
};
var NAV = [
	{
		to: "/sobre",
		label: "Sobre"
	},
	{
		to: "/modalidades",
		label: "Modalidades"
	},
	{
		to: "/equipes",
		label: "Equipes"
	},
	{
		to: "/campeonatos",
		label: "Campeonatos"
	},
	{
		to: "/noticias",
		label: "Notícias"
	},
	{to:"/ao-vivo",label:"Ao vivo"},
	{
		to: "/contato",
		label: "Contato"
	}
];
function SiteHeader(){return import_jsx_runtime.jsx(LaesSiteHeader,{})}
var navLink = "block w-fit py-1 text-sm text-ink-foreground/65 transition-colors hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent";
var navTitle = "mb-4 text-xs font-bold uppercase tracking-[0.18em] text-accent";
function SiteFooter() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "relative isolate overflow-hidden bg-[#090909] text-ink-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"aria-hidden": "true",
				className: "h-1 bg-gradient-to-r from-[#A21F25] via-[#E08821] to-[#E08821]/0"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LionMark, { className: "pointer-events-none absolute -right-24 bottom-4 -z-10 size-96 text-white/[0.025]" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl px-4 sm:px-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col justify-between gap-6 border-b border-white/10 py-9 sm:flex-row sm:items-center sm:py-11",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[10px] font-semibold uppercase tracking-[0.24em] text-accent",
							children: "Minas na base. Alfenas na coragem."
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "mt-3 text-3xl font-bold leading-tight sm:text-4xl",
							children: [
								"Seu próximo time",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", { className: "sm:hidden" }),
								" começa ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-accent",
									children: "aqui."
								})
							]
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/cadastro",
							className: "flex w-fit shrink-0 items-center gap-6 rounded-full bg-accent px-6 py-3.5 text-sm font-bold text-black transition-colors hover:bg-cream focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent",
							children: ["Faça parte da LAES ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {
								size: 18,
								"aria-hidden": "true"
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid items-start gap-x-8 gap-y-9 py-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_0.7fr_0.8fr_1.2fr]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, { className: "w-fit" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-4 max-w-xs text-sm leading-relaxed text-ink-foreground/60",
									children: "Conectando jogadores, formando equipes e levando o nome de Alfenas para o jogo."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-4 flex items-center gap-2 text-xs text-ink-foreground/45",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, {
										size: 13,
										"aria-hidden": "true"
									}), " Alfenas · Sul de Minas · Brasil"]
								})
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
								"aria-label": "Explore a liga",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: navTitle,
									children: "Explore a liga"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
									className: "grid content-start gap-1.5",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
											to: "/sobre",
											className: navLink,
											children: "Sobre a LAES"
										}) }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
											to: "/modalidades",
											className: navLink,
											children: "Modalidades"
										}) }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
											to: "/equipes",
											className: navLink,
											children: "Nossas equipes"
										}) }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
											to: "/campeonatos",
											className: navLink,
											children: "Campeonatos"
										}) }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
											to: "/noticias",
											className: navLink,
											children: "Notícias"
										}) })
									]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
								"aria-label": "Participe da LAES",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: navTitle,
									children: "Entre em jogo"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
									className: "grid content-start gap-1.5",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
											to: "/cadastro",
											className: navLink,
											children: "Crie sua conta"
										}) }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
											to: "/equipes",
											className: navLink,
											children: "Encontrar uma equipe"
										}) }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
											to: "/painel",
											className: navLink,
											children: "Meu painel"
										}) }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
											to: "/faca-parte",
											className: navLink,
											children: "Faça parte"
										}) }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
											to: "/contato",
											className: navLink,
											children: "Contato e parcerias"
										}) })
									]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: navTitle,
									children: "A liga também está aqui"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mb-4 max-w-xs text-sm leading-relaxed text-ink-foreground/60",
									children: "Acompanhe, converse e encontre quem joga com você."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(OfficialChannels, { compact: true }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/contato",
									className: "mt-5 inline-flex items-center gap-2 text-xs font-semibold text-ink-foreground/70 hover:text-accent",
									children: ["Conheça nossos canais ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {
										size: 14,
										"aria-hidden": "true"
									})]
								})
							] })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col justify-between gap-2 border-t border-white/10 py-5 text-[11px] leading-relaxed text-ink-foreground/40 sm:flex-row",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
								"© ",
								(/* @__PURE__ */ new Date()).getFullYear(),
								" LAES · Liga Alfenense de E-Sports."
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
								"aria-label": "Privacidade e termos",
								className: "flex flex-wrap gap-4 text-ink-foreground/75",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "/privacidade",
									className: "underline underline-offset-4 hover:text-accent",
									children: "Política de Privacidade"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "/termos",
									className: "underline underline-offset-4 hover:text-accent",
									children: "Termos de Uso"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: ["Nossa cidade. Nossa liga. ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "ml-1 text-accent/80",
								children: "Nosso próximo capítulo."
							})] })
						]
					})
				]
			})
		]
	});
}
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
	const stack = error instanceof Error ? error.stack : void 0;
	window.__lovableReportRuntimeError?.({
		message: describeThrown(error),
		...stack !== void 0 && { stack },
		filename: window.location.pathname
	});
}
var MAX_SERIALIZED_LENGTH = 2e3;
function describeThrown(error) {
	if (error instanceof Response) return `Response ${error.status}${error.url ? ` at ${error.url}` : ""}`;
	if (error instanceof Error) return error.message;
	if (typeof error === "string") return error;
	const { message } = error ?? {};
	if (typeof message === "string" && message.length > 0) return message;
	try {
		return JSON.stringify(error)?.slice(0, MAX_SERIALIZED_LENGTH) ?? String(error);
	} catch {
		return String(error);
	}
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Página não encontrada"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "A página que você procura não existe ou foi movida."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Voltar ao início"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "Esta página não carregou"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Algo deu errado. Tente novamente ou volte ao início."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Tentar novamente"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Voltar ao início"
					})]
				})
			]
		})
	});
}
var Route$17 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "LAES — Liga Alfenense de E-Sports" },
			{
				name: "description",
				content: "Comunidade de esportes eletrônicos de Alfenas (MG): equipes, campeonatos e recrutamento."
			},
			{
				property: "og:title",
				content: "LAES — Liga Alfenense de E-Sports"
			},
			{
				property: "og:description",
				content: "Comunidade de esportes eletrônicos de Alfenas (MG)."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		scripts: [{src:"/assets/laes-registration-20261111-v1.js"}],
		links: [
{rel:"stylesheet",href:"/assets/laes-header-20261117.css"},
{rel:"stylesheet",href:"/assets/laes-loading-20261114.css"},
{rel:"stylesheet",href:"/assets/laes-community-profiles-20261114.css"},
{rel:"stylesheet",href:"/assets/laes-badges-art-20261114-v2.css"},
{rel:"stylesheet",href:"/assets/laes-upcoming-logos-20261114.css"},
{rel:"stylesheet",href:"/assets/laes-live-20261112.css"},
{rel:"stylesheet",href:"/assets/laes-tournament-cards-20261112.css"},
{rel:"stylesheet",href:"/assets/laes-athlete-photos-20261112.css"},
{rel:"stylesheet",href:"/assets/laes-teams-20261114-aligned.css"},
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "icon",
				href: "/images/laes/logo-principal.png",
				type: "image/png"
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Chakra+Petch:wght@400;500;600;700&display=swap"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "pt-BR",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$17.useRouteContext();
	const pathname = useRouterState({ select: (state) => state.location.pathname });
	const authPage = [
		"/auth",
		"/entrar",
		"/cadastro",
		"/recuperar-senha"
	].includes(pathname.replace(/\/$/, ""));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AuthProvider, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: "#conteudo",
				className: "sr-only focus:not-sr-only focus:absolute focus:z-50 focus:bg-accent focus:p-2",
				children: "Pular para o conteúdo"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex min-h-screen flex-col",
				children: [
					!authPage && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
						id: "conteudo",
						className: "flex-1",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
					}),
					!authPage && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster$1, {
				richColors: true,
				position: "top-center"
			})
		] })
	});
}
var $$splitComponentImporter$16 = () => import("./routes-CHDXWAkM.mjs");
var Route$16 = createFileRoute("/")({
	head: () => ({ meta: seo("LAES — Liga Alfenense de E-Sports", "O talento é local. A ambição não tem limites. Equipes, campeonatos e recrutamento de e-sports em Alfenas (MG).") }),
	component: lazyRouteComponent($$splitComponentImporter$16, "component")
});
var $$splitComponentImporter$15 = () => import("./admin-CnrcoRcD.mjs");
var Route$15 = createFileRoute("/admin")({
	head: () => ({ meta: [{ title: "Administração | LAES" }, {
		name: "robots",
		content: "noindex"
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$15, "component")
});
var $$splitComponentImporter$14 = () => import("./cadastro-L2nfVo1s.mjs");
var Route$14 = createFileRoute("/cadastro")({
	head: () => ({ meta: [{ title: "Acesso | LAES" }, {
		name: "robots",
		content: "noindex"
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$14, "component")
});
var $$splitComponentImporter$13 = () => import("./contato-Bn1o2q56.mjs");
var Route$13 = createFileRoute("/contato")({
	head: () => ({ meta: seo("Contato e parceiros", "Construa o cenário de esports de Alfenas com a LAES.") }),
	component: lazyRouteComponent($$splitComponentImporter$13, "component")
});
var $$splitComponentImporter$12 = () => import("./entrar-D_WCrmZf.mjs");
var Route$12 = createFileRoute("/entrar")({
	head: () => ({ meta: [{ title: "Acesso | LAES" }, {
		name: "robots",
		content: "noindex"
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$12, "component")
});
var $$splitComponentImporter$11 = () => import("./faca-parte-Hp6XFxa1.mjs");
var Route$11 = createFileRoute("/faca-parte")({
	head: () => ({ meta: seo("Faça parte da LAES", "Conecte-se aos jogadores de Alfenas e região.") }),
	component: lazyRouteComponent($$splitComponentImporter$11, "component")
});
var $$splitComponentImporter$10 = () => import("./painel-Di7aYKiM.mjs");
var Route$10 = createFileRoute("/painel")({
	head: () => ({ meta: [{ title: "Meu painel | LAES" }, {
		name: "robots",
		content: "noindex"
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$10, "component")
});
var $$splitComponentImporter$9 = () => import("./privacidade-CF4j7vv8.mjs");
var Route$9 = createFileRoute("/privacidade")({
	head: () => ({
		meta: seo("Política de Privacidade", "Saiba como a Liga Alfenense de E-Sports utiliza os dados da conta, do login Google e da ficha de atleta."),
		links: [{
			rel: "canonical",
			href: "https://ligaalfenense.com.br/privacidade"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
var $$splitComponentImporter$8 = () => import("./recuperar-senha-BEshQ2B-.mjs");
var Route$8 = createFileRoute("/recuperar-senha")({
	head: () => ({ meta: [{ title: "Acesso | LAES" }, {
		name: "robots",
		content: "noindex"
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
var $$splitComponentImporter$7 = () => import("./redefinir-senha-CrOkOitt.mjs");
var Route$7 = createFileRoute("/redefinir-senha")({
	head: () => ({ meta: [{ title: "Redefinir senha | LAES" }, {
		name: "robots",
		content: "noindex"
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
var $$splitComponentImporter$6 = () => import("./sobre-DWjN4-6X.mjs");
var Route$6 = createFileRoute("/sobre")({
	head: () => ({ meta: seo("Sobre a LAES", "Conheça a Liga Alfenense de E-Sports: comunidade gamer de Alfenas e região, talentos e competição.") }),
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
var $$splitComponentImporter$5 = () => import("./termos--_bBYWfJ.mjs");
var Route$5 = createFileRoute("/termos")({
	head: () => ({
		meta: seo("Termos de Uso", "Regras de uso da conta, participação e convivência no portal da Liga Alfenense de E-Sports."),
		links: [{
			rel: "canonical",
			href: "https://ligaalfenense.com.br/termos"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./vagas-CbDCq3st.mjs");
var Route$4 = createFileRoute("/vagas")({
	head: () => ({ meta: seo("Encontrar uma equipe", "Encontre seu lugar no competitivo com a LAES.") }),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./campeonatos.index-CULJ2LsQ.mjs");
var Route$3 = createFileRoute("/campeonatos/")({
	head: () => ({ meta: seo("Campeonatos", "Agenda competitiva da LAES.") }),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./equipes.index-DO_OXLi3.mjs");
var Route$2 = createFileRoute("/equipes/")({
	head: () => ({ meta: seo("Equipes", "Conheça as equipes da LAES.") }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./modalidades.index-S-CQhIu1.mjs");
var Route$1 = createFileRoute("/modalidades/")({
	head: () => ({ meta: seo("Modalidades", "Encontre seu jogo na LAES. Conheça as oito modalidades da primeira fase e os seis jogos previstos para a segunda fase, em breve.") }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./noticias.index-8LTEnHwc.mjs");
var Route = createFileRoute("/noticias/")({
	head: () => ({ meta: seo("Notícias", "Acompanhe as novidades da liga.") }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var IndexRoute = Route$16.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$17
});
var AdminRoute = Route$15.update({
	id: "/admin",
	path: "/admin",
	getParentRoute: () => Route$17
});
var AuthRoute = Route$19.update({
	id: "/auth",
	path: "/auth",
	getParentRoute: () => Route$17
});
var CadastroRoute = Route$14.update({
	id: "/cadastro",
	path: "/cadastro",
	getParentRoute: () => Route$17
});
var ContatoRoute = Route$13.update({
	id: "/contato",
	path: "/contato",
	getParentRoute: () => Route$17
});
var EntrarRoute = Route$12.update({
	id: "/entrar",
	path: "/entrar",
	getParentRoute: () => Route$17
});
var FacaParteRoute = Route$11.update({
	id: "/faca-parte",
	path: "/faca-parte",
	getParentRoute: () => Route$17
});
var PainelRoute = Route$10.update({
	id: "/painel",
	path: "/painel",
	getParentRoute: () => Route$17
});
var PrivacidadeRoute = Route$9.update({
	id: "/privacidade",
	path: "/privacidade",
	getParentRoute: () => Route$17
});
var RecuperarSenhaRoute = Route$8.update({
	id: "/recuperar-senha",
	path: "/recuperar-senha",
	getParentRoute: () => Route$17
});
var RedefinirSenhaRoute = Route$7.update({
	id: "/redefinir-senha",
	path: "/redefinir-senha",
	getParentRoute: () => Route$17
});
var SobreRoute = Route$6.update({
	id: "/sobre",
	path: "/sobre",
	getParentRoute: () => Route$17
});
var TermosRoute = Route$5.update({
	id: "/termos",
	path: "/termos",
	getParentRoute: () => Route$17
});
var VagasRoute = Route$4.update({
	id: "/vagas",
	path: "/vagas",
	getParentRoute: () => Route$17
});
var AtletasNickRoute = Route$18.update({
	id: "/atletas/$nick",
	path: "/atletas/$nick",
	getParentRoute: () => Route$17
});
var CampeonatosIndexRoute = Route$3.update({
	id: "/campeonatos/",
	path: "/campeonatos/",
	getParentRoute: () => Route$17
});
var CampeonatosIdRoute = Route$20.update({
	id: "/campeonatos/$id",
	path: "/campeonatos/$id",
	getParentRoute: () => Route$17
});
var EquipesIndexRoute = Route$2.update({
	id: "/equipes/",
	path: "/equipes/",
	getParentRoute: () => Route$17
});
var EquipesSlugRoute = Route$21.update({
	id: "/equipes/$slug",
	path: "/equipes/$slug",
	getParentRoute: () => Route$17
});
var ModalidadesIndexRoute = Route$1.update({
	id: "/modalidades/",
	path: "/modalidades/",
	getParentRoute: () => Route$17
});
var ModalidadesSlugRoute = Route$22.update({
	id: "/modalidades/$slug",
	path: "/modalidades/$slug",
	getParentRoute: () => Route$17
});
var NoticiasIndexRoute = Route.update({
	id: "/noticias/",
	path: "/noticias/",
	getParentRoute: () => Route$17
});
var rootRouteChildren = {LAESLiveRoute:createFileRoute('/ao-vivo')({component:LivePage,head:()=>({meta:[{title:'LAES AO VIVO — A comunidade na Twitch'},{name:'description',content:'Acompanhe os atletas da LAES que estão ao vivo na Twitch. Veja jogos, transmissões e a torcida da nossa comunidade.'}]})}).update({id:'/ao-vivo',path:'/ao-vivo',getParentRoute:()=>Route$17}),
	IndexRoute,
	AdminRoute,
	AuthRoute,
	CadastroRoute,
	ContatoRoute,
	EntrarRoute,
	FacaParteRoute,
	PainelRoute,
	PrivacidadeRoute,
	RecuperarSenhaRoute,
	RedefinirSenhaRoute,
	SobreRoute,
	TermosRoute,
	VagasRoute,
	AtletasNickRoute,
	CampeonatosIdRoute,
	EquipesSlugRoute,
	ModalidadesSlugRoute,
	NoticiasSlugRoute: Route$23.update({
		id: "/noticias/$slug",
		path: "/noticias/$slug",
		getParentRoute: () => Route$17
	}),
	CampeonatosIndexRoute,
	EquipesIndexRoute,
	ModalidadesIndexRoute,
	NoticiasIndexRoute
};
var routeTree = Route$17._addFileChildren(rootRouteChildren)._addFileTypes();
function LaesNavigationPending(){return import_react.createElement("section",{role:"status","aria-live":"polite",style:{padding:"64px 24px",textAlign:"center"}},import_react.createElement("img",{src:"/images/laes/logo-principal.png",alt:"",width:80,height:80,style:{margin:"0 auto 16px",objectFit:"contain"}}),import_react.createElement("p",null,"Preparando a próxima partida…"));}
var getRouter = () => {
	const queryClient = new QueryClient();
	return createRouter({
		routeTree,
		context: { queryClient },
		scrollRestoration: true,
		defaultPreload: "intent",
        defaultPendingMs:150,
        defaultPendingMinMs:0,
        defaultPendingComponent:LaesNavigationPending,
        defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
