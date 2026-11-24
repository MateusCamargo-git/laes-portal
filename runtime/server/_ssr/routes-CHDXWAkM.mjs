import {laesTournamentStatus} from "./Logo-DncJtcSp.mjs";
import { r as tournamentsQuery } from "./catalog-ew-rK_t4.mjs";
import {LiveSection} from "./laes-live-feature-20261112.mjs";
import { r as __toESM } from "../_runtime.mjs";
import { r as supabase } from "./backend-mB6vbMUi.mjs";
import { m as require_react, p as require_jsx_runtime } from "../_libs/@radix-ui/react-avatar+[...].mjs";
import { b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as useQueryClient, n as useQuery } from "../_libs/tanstack__react-query.mjs";
import { E as ArrowRight, T as ArrowUpRight, _ as Heart, a as Trophy, c as Play, l as Pause, n as Users, o as Shield, v as Handshake } from "../_libs/lucide-react.mjs";
import { a as ExternalLink, d as MediaImage, f as NewsCard, g as TeamCard, h as SectionTitle, m as Section, r as Empty, v as TournamentCard } from "./Logo-DncJtcSp.mjs";
import { t as Button } from "./button-tsOZyY2X.mjs";
import { i as stringType, n as numberType, r as objectType, t as arrayType } from "../_libs/zod.mjs";
import { t as modalitiesQuery } from "./settings-B6eNktqV.mjs";
import { t as ModalityLogo } from "./ModalityLogo-CaM1G7Zy.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-CHDXWAkM.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var totalsSchema = objectType({
	athletes: numberType().int().nonnegative(),
	teams: numberType().int().nonnegative(),
	organizations: numberType().int().nonnegative(),
	sponsors: numberType().int().nonnegative(),
	championships: numberType().int().nonnegative(),
	modalities: arrayType(objectType({
		slug: stringType(),
		name: stringType(),
		athletes: numberType().int().nonnegative()
	}))
});
var queryKey = ["community-live-totals"];
/** Animates on first viewport entry, then from the current count on live updates. */
function CountUp({ value, visible }) {
	const [display, setDisplay] = (0, import_react.useState)(0);
	const current = (0, import_react.useRef)(0);
	(0, import_react.useEffect)(() => {
		if (!visible || value === void 0) return;
		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
			current.current = value;
			setDisplay(value);
			return;
		}
		const from = current.current;
		let frame = 0;
		const start = performance.now();
		const tick = (now) => {
			const progress = Math.min((now - start) / 1150, 1);
			current.current = Math.round(from + (value - from) * (1 - Math.pow(1 - progress, 3)));
			setDisplay(current.current);
			if (progress < 1) frame = requestAnimationFrame(tick);
		};
		frame = requestAnimationFrame(tick);
		return () => cancelAnimationFrame(frame);
	}, [value, visible]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		"aria-hidden": "true",
		children: value === void 0 ? "—" : display.toLocaleString("pt-BR")
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "sr-only",
		children: value === void 0 ? "Carregando" : value.toLocaleString("pt-BR")
	})] });
}
function CommunityNumbers() {
	const agenda = useQuery({ ...tournamentsQuery, refetchInterval: 15e3 });
	const section = (0, import_react.useRef)(null);
	const [visible, setVisible] = (0, import_react.useState)(false);
	const [connected, setConnected] = (0, import_react.useState)(false);
	const client = useQueryClient();
	const stats = useQuery({
		queryKey,
		staleTime: 1e4,
		refetchInterval: 15e3,
		queryFn: async () => {
			const { data, error } = await supabase.from("community_totals").select("payload,updated_at").eq("id", 1).single();
			if (error) throw error;
			return {
				...totalsSchema.parse(data.payload),
				updatedAt: data.updated_at
			};
		}
	});
	(0, import_react.useEffect)(() => {
		if (!section.current) return;
		if (!("IntersectionObserver" in window)) {
			setVisible(true);
			return;
		}
		const observer = new IntersectionObserver(([entry]) => {
			if (entry?.isIntersecting) {
				setVisible(true);
				observer.disconnect();
			}
		}, { threshold: .12 });
		observer.observe(section.current);
		return () => observer.disconnect();
	}, []);
	(0, import_react.useEffect)(() => {
		const channel = supabase.channel("homepage-community-totals").on("postgres_changes", {
			event: "*",
			schema: "public",
			table: "community_totals"
		}, () => {
			client.invalidateQueries({ queryKey });
		}).subscribe((status) => {
			setConnected(status === "SUBSCRIBED");
			if (status === "SUBSCRIBED") client.invalidateQueries({ queryKey });
		});
		return () => {
			supabase.removeChannel(channel);
		};
	}, [client]);
	const data = stats.data;
	const cards = [
		{
			value: data?.athletes,
			label: "Atletas cadastrados",
			icon: Users
		},
		{
			value: data?.teams,
			label: "Equipes ativas",
			icon: Shield
		},
		{
			value: data?.organizations,
			label: "Organizações parceiras",
			icon: Handshake
		},
		{
			value: data?.sponsors,
			label: "Patrocinadores",
			icon: Heart
		},
		{
			value: agenda.data?.length,
			label: "Campeonatos com inscrições abertas",
			icon: Trophy
		}
	];
	const games = [...data?.modalities ?? []].sort((a, b) => b.athletes - a.athletes || a.name.localeCompare(b.name, "pt-BR"));
	const max = Math.max(1, ...games.map((g) => g.athletes));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		ref: section,
		"aria-labelledby": "community-numbers-title",
		className: "relative isolate overflow-hidden bg-[#ECEADB] text-[#211E19]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: "/images/laes/logo-principal.png",
				alt: "",
				"aria-hidden": "true",
				loading: "lazy",
				className: "pointer-events-none absolute -right-24 top-0 w-[550px] opacity-[0.045]"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col justify-between gap-6 md:flex-row md:items-end",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs font-bold uppercase tracking-[0.25em] text-[#A21F25]",
								children: "Alfenas joga junto"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
								id: "community-numbers-title",
								className: "mt-4 text-4xl font-bold uppercase leading-none sm:text-6xl",
								children: ["Nossa ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[#A21F25]",
									children: "comunidade."
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-5 max-w-lg leading-relaxed text-[#625D51]",
								children: [
									"Cada cadastro, uma nova conexão.",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									"Cada equipe, mais um motivo para jogar junto."
								]
							})
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/cadastro",
							className: "flex w-fit items-center gap-3 rounded-full border border-[#A21F25]/30 px-6 py-3 text-sm font-semibold transition-colors hover:bg-[#A21F25] hover:text-white",
							children: ["O próximo número pode ser você ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { size: 18 })]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
						className: "mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5",
						children: cards.map(({ value, label, icon: Icon }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-2xl border border-[#D8D3BF] bg-[#FFFEF8] shadow-[0_4px_0_#D8D3BF55] p-5 sm:p-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
									size: 20,
									className: "mb-6 text-[#A21F25]",
									"aria-hidden": "true"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
									className: "text-5xl font-bold tabular-nums tracking-tight sm:text-6xl",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CountUp, {
										value,
										visible
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
									className: "mt-3 text-xs font-semibold uppercase leading-relaxed tracking-wider text-[#625D51]",
									children: label
								})
							]
						}, label))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-5 flex flex-wrap items-center justify-between gap-3 text-xs text-[#625D51]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "inline-flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `h-1.5 w-1.5 rounded-full ${connected && !stats.isError ? "bg-[#E08821]" : "bg-[#625D51]/40"}` }), stats.isError ? "Não foi possível atualizar agora" : connected ? "Conectado · atualização em tempo real" : "Atualização automática a cada 15 segundos"]
						}), data && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["Atualizado em ", new Date(data.updatedAt).toLocaleString("pt-BR", {
							timeZone: "America/Sao_Paulo",
							dateStyle: "short",
							timeStyle: "short"
						})] })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-16 border-t border-[#D8D3BF] pt-12",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs uppercase tracking-[0.2em] text-[#A21F25]",
									children: "O mapa do nosso jogo"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
									className: "mt-3 text-3xl font-bold sm:text-4xl",
									children: [
										"Oito modalidades.",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
										"Uma só comunidade."
									]
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "max-w-sm text-sm leading-relaxed text-[#625D51]",
									children: "Veja onde nossos atletas estão jogando. Escolha sua modalidade no perfil e faça parte desse retrato."
								})]
							}),
							data ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								"aria-label": "Atletas cadastrados por modalidade",
								className: "grid gap-x-10 gap-y-5 md:grid-cols-2",
								children: games.map((game, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "rounded-xl border border-[#D8D3BF] bg-[#FFFEF8] p-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mb-3 flex items-center gap-3",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "w-16 shrink-0",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ModalityLogo, {
													slug: game.slug,
													name: game.name,
													compact: true,
													className: "!h-10 !rounded-lg !px-2 !py-2"
												})
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
												to: "/modalidades/$slug",
												params: { slug: game.slug },
												className: "min-w-0 flex-1 text-sm font-semibold hover:text-[#A21F25]",
												children: game.name
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "text-2xl font-bold tabular-nums text-[#A21F25]",
												children: [game.athletes, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "sr-only",
													children: " atletas"
												})]
											})
										]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										"aria-hidden": "true",
										className: "h-2 overflow-hidden rounded-full bg-[#E2DECB]",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: `h-full origin-left rounded-full bg-gradient-to-r ${i === 0 ? "from-[#A21F25] to-[#E08821]" : "from-[#E08821]/50 to-[#E08821]"} transition-[width] duration-1000 motion-reduce:transition-none`,
											style: { width: `${visible ? game.athletes / max * 100 : 0}%` }
										})
									})]
								}, game.slug))
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								role: "status",
								className: "py-8 text-[#625D51]",
								children: stats.isError ? "Os dados estão temporariamente indisponíveis." : "Buscando os números da comunidade…"
							}),
							data && games.every((g) => g.athletes === 0) && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-5 text-sm text-[#625D51]",
								children: "As primeiras escolhas de modalidade vão dar vida a esse gráfico. Qual é o seu jogo?"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-6 max-w-3xl text-xs leading-relaxed text-[#625D51]",
								children: "Atletas = contas cadastradas no portal. Cada pessoa conta uma vez no total e uma vez em cada modalidade adicionada ao seu perfil; a soma das barras pode superar o total. Equipes e parceiros ativos; campeonatos com inscrições abertas, incluindo torneios externos. Os dados do antigo Forms não entram nesses contadores."
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"aria-hidden": "true",
				className: "h-1 bg-gradient-to-r from-[#A21F25] via-[#E08821] to-transparent"
			})
		]
	});
}
var phaseOne = /* @__PURE__ */ new Set([
	"league-of-legends",
	"wild-rift",
	"mobile-legends",
	"counter-strike-2",
	"valorant",
	"free-fire",
	"brawl-stars",
	"ea-sports-fc"
]);
function GamesStrip({ modalities = [] }) {
	const [reducedMotion, setReducedMotion] = (0, import_react.useState)(false);
	const [choice, setChoice] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
		const update = () => setReducedMotion(preference.matches);
		update();
		preference.addEventListener("change", update);
		return () => preference.removeEventListener("change", update);
	}, []);
	const playing = choice ?? !reducedMotion;
	const games = modalities.filter((m) => phaseOne.has(m.slug));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		id: "phase-one-games",
		className: "phase-one-strip mt-7",
		role: "region",
		"aria-label": "Modalidades da primeira fase; o movimento pausa ao interagir",
		"data-motion": choice === null ? void 0 : choice ? "playing" : "paused",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "phase-one-track",
			children: [0, 1].map((copy) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "phase-one-group",
				"aria-hidden": copy === 1 ? true : void 0,
				children: games.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/modalidades/$slug",
					params: { slug: m.slug },
					"aria-label": m.name,
					title: m.name,
					tabIndex: copy === 1 ? -1 : void 0,
					className: "group block w-28 shrink-0 rounded-2xl transition-transform duration-200 hover:-translate-y-1 focus-visible:-translate-y-1 motion-reduce:transition-none",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ModalityLogo, {
						slug: m.slug,
						name: m.name,
						compact: true,
						className: "grayscale opacity-50 transition-all duration-200 group-hover:grayscale-0 group-hover:opacity-100 group-hover:shadow-lg group-focus-visible:grayscale-0 group-focus-visible:opacity-100 motion-reduce:transition-none"
					})
				}, m.id))
			}, copy))
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mt-5 flex flex-wrap items-center justify-center gap-x-6 gap-y-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
			type: "button",
			"aria-controls": "phase-one-games",
			onClick: () => setChoice(!playing),
			className: "inline-flex min-h-10 items-center gap-2 rounded-full border border-border px-4 text-xs font-semibold text-foreground hover:bg-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary",
			children: [playing ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pause, {
				size: 14,
				"aria-hidden": "true"
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, {
				size: 14,
				"aria-hidden": "true"
			}), playing ? "Pausar faixa" : "Reproduzir faixa"]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: "/modalidades",
			className: "text-xs font-semibold text-primary underline-offset-4 hover:underline",
			children: "Conheça nossas modalidades →"
		})]
	})] });
}
function HomeBanners() {
	const q = useQuery({
		queryKey: ["home-banners"],
		queryFn: async () => {
			const r = await supabase.from("banners").select("*").eq("active", true).order("sort");
			if (r.error) throw r.error;
			return r.data;
		}
	});
	if (!q.data?.length) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grid gap-5 md:grid-cols-2",
		children: q.data.map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
			className: "border-l-4 border-accent bg-card p-6",
			children: [
				b.image_url && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MediaImage, {
					src: b.image_url,
					alt: "",
					className: "mb-5 max-h-72 w-full object-contain"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-2xl font-bold",
					children: b.title
				}),
				b.subtitle && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "my-3",
					children: b.subtitle
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, {
					href: b.link_url,
					children: b.link_label || "Saiba mais"
				})
			]
		}, b.id))
	}) });
}
function Index() {
	const mods = useQuery(modalitiesQuery);
	const teams = useQuery({
		queryKey: ["teams", "featured"],
		queryFn: async () => {
			const { data, error } = await supabase.from("teams").select("*, modalities(name,slug)").eq("active", true).eq("featured", true).order("sort").limit(6);
			if (error) throw error;
			return data;
		}
	});
	const tournaments = useQuery({
		queryKey: ["tournaments", "upcoming"],
		queryFn: async () => {
			const { data, error } = await supabase.from("tournaments").select("*, modalities(name)").eq("published", true).eq("status", "inscricoes_abertas").order("starts_at", {
				ascending: true,
				nullsFirst: false
			});
			if (error) throw error;
			return data.filter(tournament => laesTournamentStatus(tournament) === "inscricoes_abertas").slice(0, 4);
		}
	});
	const news = useQuery({
		queryKey: ["news", "latest"],
		queryFn: async () => {
			const { data, error } = await supabase.from("news").select("*").eq("published", true).order("published_at", { ascending: false }).limit(3);
			if (error) throw error;
			return data;
		}
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "laes-hero relative overflow-hidden",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto grid max-w-7xl items-center gap-12 px-4 py-14 sm:px-6 md:py-20 lg:grid-cols-[1.3fr_0.7fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow animate-rise",
						children: "Liga Alfenense de E-Sports · Alfenas, MG"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "mt-5 max-w-3xl text-5xl font-bold uppercase leading-[1.02] animate-rise sm:text-6xl xl:text-7xl",
						children: ["O talento é local.", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mt-2 block text-primary-deep",
							children: "A ambição não tem limites."
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 max-w-xl text-lg leading-relaxed text-black/80",
						children: "Conectamos jogadores de Alfenas e região, formamos equipes e levamos a cidade para o cenário competitivo."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 flex flex-wrap gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							variant: "hero",
							size: "lg",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/faca-parte",
								children: ["Faça parte da LAES ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {})]
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							variant: "outline",
							size: "lg",
							className: "border-black/30 bg-transparent text-black hover:bg-black hover:text-cream",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/equipes",
								children: "Conheça nossas equipes"
							})
						})]
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative mx-auto flex w-full max-w-md flex-col items-center rounded-[2.5rem] border border-black/10 bg-cream px-8 pb-9 pt-6 shadow-[8px_8px_0_#8D1E1D]",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "self-start text-xs font-bold uppercase tracking-[0.2em] text-primary",
							children: "Orgulho de Alfenas"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: "/images/laes/logo-principal.png",
							alt: "Leão da Liga Alfenense de E-Sports",
							width: 1254,
							height: 1254,
							className: "aspect-square w-full object-contain"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "-mt-5 text-5xl font-bold tracking-tight",
							children: "LAES"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-center text-xs font-semibold uppercase tracking-[0.18em]",
							children: "Nossa cidade. Nossa liga."
						})
					]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "stripe-accent h-2 w-full" })]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HomeBanners, {}),
		/* @__PURE__ */ (0,import_jsx_runtime.jsx)(LiveSection,{}),(0, import_jsx_runtime.jsx)("section", {
			"aria-labelledby": "phase-one-heading",
			className: "border-b border-border/50 bg-card py-9 sm:py-12",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl px-4 sm:px-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					id: "phase-one-heading",
					className: "text-center text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground sm:text-sm",
					children: "As modalidades da nossa primeira fase"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GamesStrip, { modalities: mods.data })]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CommunityNumbers, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "bg-secondary",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, {
				eyebrow: "Nossos elencos",
				title: "Equipes em destaque",
				action: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/equipes",
					className: "font-display text-sm font-semibold uppercase text-primary hover:underline",
					children: "Todas as equipes"
				})
			}), teams.data?.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6",
				children: teams.data.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TeamCard, { team: t }, t.id))
			}) : !teams.isLoading && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Empty, { title: "Nenhuma equipe em destaque ainda" })] })
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-14 lg:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, {
				eyebrow: "Agenda",
				title: "Campeonatos com inscrições abertas"
			}), tournaments.data?.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-3",
				children: tournaments.data.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TournamentCard, { t }, t.id))
			}) : !tournaments.isLoading && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Empty, {
				title: "Nenhum campeonato com inscrições abertas",
				children: "Assim que houver novidades, a agenda aparece aqui."
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, {
				eyebrow: "Notícias",
				title: "Últimas da liga"
			}), news.data?.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-4",
				children: news.data.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NewsCard, { n }, n.id))
			}) : !news.isLoading && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Empty, { title: "Nenhuma notícia publicada ainda" })] })]
		}) })
	] });
}
//#endregion
export { Index as component };
