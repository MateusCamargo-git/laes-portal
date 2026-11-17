import { r as supabase } from "./backend-mB6vbMUi.mjs";
import { p as require_jsx_runtime } from "../_libs/@radix-ui/react-avatar+[...].mjs";
import { b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as useQuery } from "../_libs/tanstack__react-query.mjs";
import { d as MediaImage, i as ErrorNote, k as newsCategoryLabel, l as Loading, m as Section, p as PageHero, r as Empty, w as formatDateLong } from "./Logo-DncJtcSp.mjs";
import { t as Route } from "./noticias._slug-U9rHMdwJ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/noticias._slug-k9_bjUGI.js
var import_jsx_runtime = require_jsx_runtime();
var games = [
	["Counter-Strike 2", 63],
	["League of Legends", 59],
	["Valorant", 55],
	["EA Sports FC · Console e Mobile", 49],
	["Brawl Stars", 40],
	["Free Fire", 28],
	["Wild Rift", 21],
	["Mobile Legends", 19]
];
function SurveyHighlights() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		"aria-label": "Números do primeiro levantamento da LAES",
		className: "my-12 space-y-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-3 sm:grid-cols-2",
				children: [
					[
						"196",
						"respostas recebidas",
						"O primeiro ponto de encontro."
					],
					[
						"129",
						"respostas buscando equipe",
						"A vontade de jogar junto."
					],
					[
						"154",
						"respostas declarando Alfenas",
						"A cidade no centro dessa história."
					],
					[
						"59",
						"respostas com interesse em voluntariado",
						"Gente disposta a construir."
					]
				].map(([n, t, d]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-2xl border border-black/10 bg-[#ECEADB] p-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-6xl font-bold tracking-tight text-[#A21F25]",
							children: n
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-3 text-lg font-bold",
							children: t
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-black/60",
							children: d
						})
					]
				}, n))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-3xl bg-black p-6 text-white sm:p-9",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-bold uppercase tracking-[0.2em] text-[#E08821]",
						children: "Os jogos que nos conectam"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "mt-4 text-3xl font-bold",
						children: [
							"Oito modalidades.",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"Muitos pontos de encontro."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-sm leading-relaxed text-white/65",
						children: "Marcações nas modalidades da primeira fase da LAES. Cada resposta podia selecionar vários jogos."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8 space-y-5",
						children: games.map(([name, count]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mb-2 flex justify-between gap-4 text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: name }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-bold text-[#E08821]",
								children: count
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "h-2 rounded-full bg-white/10",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "h-2 rounded-full bg-[#E08821]",
								style: { width: `${count / 63 * 100}%` }
							})
						})] }, name))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 text-xs leading-relaxed text-white/55",
						children: "EA Sports FC reúne Console e Mobile, contando uma única vez cada resposta que marcou uma ou ambas as opções. As barras não representam atletas exclusivos nem ranking de toda a cidade."
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
				className: "border-l-4 border-[#E08821] bg-[#ECEADB]/60 p-5 text-sm leading-relaxed",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Como ler esses números" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2",
					children: "Base: 196 respostas ao formulário divulgado pela LAES no Instagram, entre 05/09 e 07/11/2026. Levantamento voluntário, sem amostragem representativa. Há possíveis respostas repetidas; os totais não equivalem a pessoas únicas. Alfenas: 154 registros com declaração direta da cidade, após padronizar grafias de “Alfenas/MG”; respostas com mais de uma cidade ou apenas naturalidade não foram somadas a esse recorte. Os resultados são agregados e não divulgam nomes nem contatos."
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-3xl bg-[#E08821] p-7 sm:p-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-bold uppercase tracking-[0.2em]",
						children: "O próximo capítulo tem endereço"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "mt-4 text-3xl font-bold",
						children: [
							"O primeiro retrato veio do Forms.",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"Os próximos capítulos passam pelo site."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 leading-relaxed",
						children: "A partir de agora, vamos acompanhar a evolução dos cadastros e das modalidades pelo portal oficial da LAES. Crie sua conta e complete sua ficha para fazer parte dessa nova etapa."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm",
						children: "As respostas antigas não viram contas automaticamente. Este levantamento permanece como nosso registro inicial, separado dos cadastros do portal."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/cadastro",
						className: "mt-6 inline-flex rounded-full bg-black px-6 py-3 font-bold text-white",
						children: "Quero fazer parte da LAES →"
					})
				]
			})
		]
	});
}
function Article() {
	const { slug } = Route.useParams();
	const q = useQuery({
		queryKey: ["article", slug],
		queryFn: async () => {
			const { data, error } = await supabase.from("news").select("*").eq("slug", slug).eq("published", true).maybeSingle();
			if (error) throw error;
			return data;
		}
	});
	if (q.isError) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ErrorNote, { error: q.error }) });
	if (q.isPending) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Loading, {});
	if (!q.data) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Empty, { title: "Notícia não encontrada" }) });
	const n = q.data;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		title: n.title,
		eyebrow: newsCategoryLabel[n.category],
		children: n.excerpt
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
		className: "max-w-4xl",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mb-6 text-sm text-muted-foreground",
				children: formatDateLong(n.published_at)
			}),
			n.cover_url && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MediaImage, {
				className: "mb-8 w-full",
				src: n.cover_url === "/images/news/primeiro-retrato.svg" ? "/images/news/primeiro-retrato-editorial.png" : n.cover_url,
				alt: ""
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("article", {
				className: "space-y-6 text-lg leading-relaxed",
				children: n.body.split("\n\n").map((p, i) => p.startsWith("## ") ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "pt-5 text-3xl font-bold",
					children: p.slice(3)
				}, i) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "whitespace-pre-wrap text-foreground/80",
					children: p
				}, i))
			}),
			n.slug === "alfenas-ja-estava-em-jogo" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SurveyHighlights, {})
		]
	})] });
}
//#endregion
export { Article as component };
