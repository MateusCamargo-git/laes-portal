import { p as require_jsx_runtime } from "../_libs/@radix-ui/react-avatar+[...].mjs";
import { b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as useQuery } from "../_libs/tanstack__react-query.mjs";
import { E as ArrowRight, O as ArrowDown, S as Clock3, T as ArrowUpRight } from "../_libs/lucide-react.mjs";
import { i as ErrorNote, l as Loading, m as Section, p as PageHero } from "./Logo-DncJtcSp.mjs";
import { t as modalitiesQuery } from "./settings-B6eNktqV.mjs";
import { t as ModalityLogo } from "./ModalityLogo-CaM1G7Zy.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/modalidades.index-S-CQhIu1.js
var import_jsx_runtime = require_jsx_runtime();
var modalityGuide = {
	"league-of-legends": {
		genre: "MOBA · PC",
		description: "Cinco jogadores, uma rota para a vitória. Estratégia, domínio de campeões e trabalho em equipe para conquistar o Nexus adversário.",
		url: "https://www.leagueoflegends.com/pt-br/"
	},
	"wild-rift": {
		genre: "MOBA · Mobile",
		description: "A disputa pelo Nexus na palma da mão. Partidas em equipe que combinam decisões rápidas, campeões e muita sintonia.",
		url: "https://wildrift.leagueoflegends.com/pt-br/"
	},
	"mobile-legends": {
		genre: "MOBA · Mobile",
		description: "Monte sua composição, conquiste objetivos e avance com o time. Um MOBA mobile em que cada rotação pode decidir a partida.",
		url: "https://www.mobilelegends.com/"
	},
	"counter-strike-2": {
		genre: "FPS tático · PC",
		description: "Mira, leitura de jogo e comunicação. Duas equipes se enfrentam em rodadas nas quais cada decisão e cada recurso contam.",
		url: "https://www.counter-strike.net/cs2"
	},
	valorant: {
		genre: "FPS tático · PC e console",
		description: "Precisão encontra criatividade. Combine as habilidades dos agentes com a estratégia da equipe para dominar cada rodada.",
		url: "https://playvalorant.com/pt-br/"
	},
	"free-fire": {
		genre: "Battle royale · Mobile",
		description: "Caia no mapa, equipe seu squad e lute até o fim. Sobrevivência, movimentação e parceria na busca pelo Booyah!",
		url: "https://ff.garena.com/pt/"
	},
	"brawl-stars": {
		genre: "Ação em equipe · Mobile",
		description: "Partidas rápidas, personagens cheios de personalidade e objetivos variados. Encontre seu brawler e faça a diferença com a equipe.",
		url: "https://supercell.com/en/games/brawlstars/"
	},
	"ea-sports-fc": {
		genre: "Futebol · Mobile e console",
		description: "Sua visão de jogo entra em campo. Construa jogadas, ajuste a estratégia e mostre seu futebol no universo EA SPORTS FC.",
		url: "https://www.ea.com/pt-br/games/ea-sports-fc"
	}
};
var upcomingModalities = [
	{
		name: "Fortnite",
		short: "FN",logo: "/images/modalities/fortnite.svg",genre: "Battle royale",
		description: "Construção, sobrevivência e criatividade em uma arena em constante mudança. Jogue em equipe e busque a Vitória Royale.",
		url: "https://www.fortnite.com/?lang=pt-BR"
	},
	{
		name: "Overwatch 2",
		short: "OW2",logo: "/images/modalities/overwatch-2.png",genre: "Tiro com heróis",
		description: "Heróis com habilidades únicas se unem em disputas por objetivos. Coordenação, posicionamento e boas combinações fazem a diferença.",
		url: "https://overwatch.blizzard.com/pt-br/"
	},
	{
		name: "Clash Royale",
		short: "CR",logo: "/images/modalities/clash-royale.webp",genre: "Estratégia · Mobile",
		description: "Cartas, torres e decisões em tempo real. Monte seu deck, administre o elixir e encontre a hora certa de atacar.",
		url: "https://supercell.com/en/games/clashroyale/"
	},
	{
		name: "Dota 2",
		short: "D2",logo: "/images/modalities/dota-2.png",genre: "MOBA · PC",
		description: "Uma batalha de estratégia entre duas equipes. Escolha seu herói, controle o mapa e trabalhe com o time para destruir o Ancient rival.",
		url: "https://www.dota2.com/home"
	},
	{
		name: "Rainbow Six Siege",
		short: "R6",logo: "/images/modalities/rainbow-six-siege.png",genre: "FPS tático",
		description: "Ataque e defesa com operadores especializados. Use informação, equipamentos e cenários destrutíveis para surpreender a outra equipe.",
		url: "https://www.ubisoft.com/pt-br/game/rainbow-six/siege"
	},
	{
		name: "Just Dance",
		short: "JD",logo: "/images/modalities/just-dance.png",genre: "Dança e ritmo",
		description: "O palco também é lugar de jogar. Acompanhe as coreografias, entre no ritmo e transforme música e movimento em diversão compartilhada.",
		url: "https://www.ubisoft.com/pt-br/game/just-dance"
	}
];
function Mods() {
	const q = useQuery(modalitiesQuery);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageHero, {
			eyebrow: "Modalidades / LAES",
			title: "Seu jogo. Sua galera.",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Do primeiro squad à próxima competição. Encontre seu lugar na liga." }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-7 flex flex-wrap gap-3 text-sm font-semibold",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: "#primeira-fase",
					className: "inline-flex items-center gap-2 rounded-full bg-black px-5 py-3 text-white hover:bg-black/80",
					children: ["1ª fase · Conheça os jogos ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowDown, { className: "size-4" })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: "#segunda-fase",
					className: "inline-flex items-center gap-2 rounded-full border border-black/30 px-5 py-3 hover:bg-white/20",
					children: ["2ª fase · Em breve ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowDown, { className: "size-4" })]
				})]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			className: "!py-10 md:!py-14",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					id: "primeira-fase",
					className: "mb-6 flex scroll-mt-28 flex-wrap items-end justify-between gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow",
							children: "01 / Primeira fase"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-2 text-3xl font-bold uppercase",
							children: "A liga já está em jogo."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-muted-foreground",
							children: "Oito modalidades para conectar quem joga em Alfenas e região."
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "rounded-full border border-border px-4 py-2 text-xs font-semibold uppercase tracking-wider",
						children: "8 modalidades"
					})]
				}),
				q.isLoading && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Loading, {}),
				q.error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ErrorNote, { error: q.error }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-4",
					children: q.data?.map((m) => {
						const guide = modalityGuide[m.slug];
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "group flex min-w-0 flex-col rounded-2xl border border-border bg-white p-5 transition-all hover:-translate-y-1 hover:border-primary hover:shadow-md",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[10px] font-bold uppercase tracking-widest text-accent",
										children: "1ª fase"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[10px] font-semibold text-muted-foreground",
										children: m.short_name
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/modalidades/$slug",
									params: { slug: m.slug },
									className: "mt-2 block rounded-lg focus-visible:outline-2 focus-visible:outline-primary",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ModalityLogo, {
										slug: m.slug,
										name: m.name,
										compact: true
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "mt-3 text-xl font-bold uppercase leading-tight group-hover:text-accent",
										children: m.name
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-[11px] font-semibold uppercase tracking-wide text-muted-foreground",
									children: guide?.genre
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("details", {
									className: "mt-3 text-sm text-black/70",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("summary", {
										className: "cursor-pointer text-xs font-semibold hover:text-accent",
										children: "Sobre o jogo"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 leading-relaxed",
										children: guide?.description || m.description
									})]
								}),
								m.categories.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 text-[10px] font-semibold uppercase text-black/60",
									children: m.categories.join(" · ")
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-wrap items-center justify-between gap-x-3 gap-y-2 border-t border-black/10 pt-3 mt-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
										to: "/modalidades/$slug",
										params: { slug: m.slug },
										className: "inline-flex items-center gap-1 text-xs font-bold text-accent hover:underline",
										children: ["Na LAES ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-3.5" })]
									}), guide && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: guide.url,
										target: "_blank",
										rel: "noopener noreferrer",
										"aria-label": `Site oficial de ${m.name} (nova aba)`,
										className: "inline-flex items-center gap-1 text-xs text-black/65 hover:text-accent hover:underline",
										children: ["Site oficial ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-3.5" })]
									})]
								})
							]
						}, m.id);
					})
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-y border-white/10 bg-[#101010] text-white",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				id: "segunda-fase",
				className: "mx-auto max-w-7xl scroll-mt-24 px-4 py-12 sm:px-6 md:py-16",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-8 flex flex-wrap items-end justify-between gap-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs font-bold uppercase tracking-[.2em] text-[#E08821]",
								children: "02 / Segunda fase"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-3 text-3xl font-bold uppercase md:text-4xl",
								children: "O próximo capítulo."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 max-w-xl text-sm leading-relaxed text-white/65",
								children: "Mais jogos, novas conexões. Estas modalidades estão previstas para a próxima fase da LAES."
							})
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "inline-flex items-center gap-2 rounded-full border border-[#E08821]/40 bg-[#E08821]/10 px-5 py-2.5 text-sm font-semibold text-[#E08821]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock3, { className: "size-4" }), " Em breve"]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
						children: upcomingModalities.map((m, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "group flex flex-col rounded-2xl border border-white/15 bg-white/[.035] p-6 transition-colors hover:border-[#E08821]/60 hover:bg-white/[.06]",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mb-5 flex items-center justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {src:m.logo,alt:"Logo de "+m.name,className:"laes-upcoming-logo",width:160,height:56,loading:"lazy",decoding:"async",style:m.short==="FN"?{filter:"brightness(0) invert(1)"}:undefined}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "rounded-full border border-[#E08821]/40 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-[#E08821]",
										children: "Em breve"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-[10px] font-semibold uppercase tracking-widest text-white/45",
									children: [
										String(i + 1).padStart(2, "0"),
										" / ",
										m.genre
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-2 text-2xl font-bold uppercase leading-tight",
									children: m.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mb-5 mt-3 text-sm leading-relaxed text-white/65",
									children: m.description
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: m.url,
									target: "_blank",
									rel: "noopener noreferrer",
									"aria-label": `Conheça ${m.name} no site oficial (nova aba)`,
									className: "mt-auto inline-flex w-fit items-center gap-2 text-sm font-semibold text-[#E08821] hover:underline",
									children: ["Conheça o jogo ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-4" })]
								})
							]
						}, m.name))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-7 border-t border-white/10 pt-5 text-xs leading-relaxed text-white/50",
						children: "2ª fase em preparação · Ainda sem inscrições ou data de estreia. A abertura será anunciada nos canais oficiais da LAES."
					})
				]
			})
		})
	] });
}
//#endregion
export { Mods as component };
