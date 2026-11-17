import { r as supabase } from "./backend-mB6vbMUi.mjs";
import { p as require_jsx_runtime } from "../_libs/@radix-ui/react-avatar+[...].mjs";
import { b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as useQuery } from "../_libs/tanstack__react-query.mjs";
import { T as ArrowUpRight, d as MapPin } from "../_libs/lucide-react.mjs";
import { c as LionMark, d as MediaImage, h as SectionTitle, m as Section } from "./Logo-DncJtcSp.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/sobre-DWjN4-6X.js
var import_jsx_runtime = require_jsx_runtime();
function About() {
	const partners = useQuery({
		queryKey: ["partners"],
		queryFn: async () => {
			const { data, error } = await supabase.from("partners").select("*").eq("active", true).order("sort");
			if (error) throw error;
			return data;
		}
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative isolate overflow-hidden bg-black text-white",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/images/about/alfenas-panorama.jpg",
					alt: "Panorama de Alfenas ao entardecer, visto a partir do aeroporto",
					className: "absolute inset-0 -z-20 h-full w-full object-cover object-[center_62%]"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 -z-10 bg-gradient-to-r from-black/85 via-black/45 to-black/10" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-7xl px-6 pb-12 pt-20 sm:px-10 lg:pb-16 lg:pt-28",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mb-8 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.22em] text-[#E08821]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { size: 16 }), " Alfenas · Sul de Minas · Nosso lugar"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							className: "max-w-4xl font-display text-6xl font-bold uppercase leading-[0.95] tracking-tight sm:text-8xl lg:text-[112px]",
							children: [
								"Alfenas",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"também ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[#E08821]",
									children: "joga."
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-8 max-w-xl text-lg leading-relaxed text-white/80",
							children: "O próximo companheiro de equipe pode estar no seu bairro, na faculdade ou do outro lado da cidade. A LAES existe para fazer esse encontro acontecer."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "#nossas-raizes",
							className: "mt-9 inline-flex items-center gap-5 border-b border-[#E08821] pb-3 text-sm font-bold",
							children: ["Conheça a nossa história ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { size: 18 })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-16 flex flex-wrap items-end justify-between gap-6 border-t border-white/20 pt-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs uppercase tracking-[0.2em]",
								children: "Liga Alfenense de E-Sports"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "max-w-sm text-[10px] text-white/55",
								children: [
									"Foto: ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										className: "underline",
										href: "https://commons.wikimedia.org/wiki/File:Alfenas_vista_a_partir_do_aeroporto._-_panoramio.jpg",
										target: "_blank",
										rel: "noreferrer",
										children: "JP Negri / Wikimedia Commons"
									}),
									" · ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										className: "underline",
										href: "https://creativecommons.org/licenses/by-sa/3.0/",
										target: "_blank",
										rel: "noreferrer",
										children: "CC BY-SA 3.0"
									}),
									" · enquadramento e sobreposição visual."
								]
							})]
						})
					]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			id: "nossas-raizes",
			className: "bg-[#ECEADB] px-6 py-20 sm:px-10 lg:py-28",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-bold uppercase tracking-[0.2em] text-[#A21F25]",
					children: "01 / Nossa origem"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "mt-5 font-display text-4xl font-bold uppercase leading-tight sm:text-5xl",
					children: [
						"Uma liga com",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						"a nossa cidade",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						"no nome."
					]
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-6 text-lg leading-relaxed text-black/70",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-2xl font-medium text-black",
							children: "Antes de vestir a mesma camisa, a gente precisava se encontrar."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "A LAES nasceu da vontade de reunir os jogadores de Alfenas e região: gente que já compartilhava os mesmos jogos e a vontade de competir, mas nem sempre tinha uma equipe com quem contar." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Nosso trabalho começa nessa conexão. Reunimos a comunidade, formamos equipes e buscamos oportunidades para levar o nome de Alfenas aos campeonatos. Do primeiro contato ao treino em conjunto, cada pessoa ajuda a construir essa história." })
					]
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "overflow-hidden bg-white px-6 py-20 sm:px-10 lg:py-28",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-bold uppercase tracking-[0.2em] text-[#A21F25]",
						children: "02 / Nossa marca"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 grid items-center gap-12 lg:grid-cols-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "font-display text-5xl font-bold uppercase leading-[1.05] sm:text-6xl",
							children: [
								"Minas na base.",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "text-[#A21F25]",
									children: [
										"Alfenas na",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
										"coragem."
									]
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-7 max-w-lg text-lg leading-relaxed text-black/65",
							children: "Nossa marca nasce da união entre as nossas raízes e a nossa ambição. Cada elemento carrega um pedaço de onde viemos e do que queremos construir."
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative flex min-h-80 items-center justify-center rounded-[2rem] bg-[#ECEADB]/60 p-10 sm:min-h-96",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								"aria-hidden": "true",
								className: "absolute right-6 top-5 text-xs tracking-widest text-black/40",
								children: "SÍMBOLO LAES / ALFENAS, MG"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: "/images/laes/logo-principal.png",
								alt: "Símbolo da LAES: leão laranja sobre uma base triangular vermelha",
								className: "h-72 w-72 object-contain sm:h-80 sm:w-80"
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-16 rounded-[2rem] bg-[#ECEADB]/50 p-6 sm:p-10",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "max-w-2xl",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs font-bold uppercase tracking-[0.2em] text-[#A21F25]",
										children: "De onde vem o nosso símbolo"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
										className: "mt-4 font-display text-3xl font-bold uppercase sm:text-4xl",
										children: [
											"Duas raízes.",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
											"Uma identidade."
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-5 leading-relaxed text-black/65",
										children: "A inspiração está nos símbolos do lugar que chamamos de casa. Da bandeira de Minas Gerais, trouxemos o triângulo. Do brasão presente na bandeira de Alfenas, o leão. Na LAES, essas referências ganham uma nova forma."
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-10 grid items-start gap-5 md:grid-cols-[minmax(0,1fr)_2rem_minmax(0,1fr)_2rem_minmax(0,1fr)] md:grid-rows-[auto_1fr] md:gap-x-3",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
										className: "min-w-0 md:row-span-2 md:col-start-1 md:row-start-1 md:grid md:grid-rows-subgrid",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "flex aspect-[10/7] items-center justify-center overflow-hidden rounded-xl border border-black/10 bg-white",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
												src: "/images/about/bandeira-minas.png",
												alt: "Bandeira de Minas Gerais, com triângulo vermelho e o lema Libertas quae sera tamen",
												loading: "lazy",
												className: "h-full w-full object-contain"
											})
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figcaption", {
											className: "mt-5 md:mt-0",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-[10px] font-bold uppercase tracking-widest text-[#A21F25]",
													children: "01 / Minas Gerais"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
													className: "mt-2 text-xl font-bold",
													children: "O triângulo. Nossa origem."
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "mt-3 text-sm leading-relaxed text-black/65",
													children: "O triângulo vermelho da bandeira mineira inspira a base da nossa marca. Um vínculo com Minas que acompanha a liga onde ela for."
												})
											]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										"aria-hidden": "true",
										className: "flex h-8 items-center justify-center self-center text-center text-2xl font-normal leading-none text-[#A21F25] md:row-start-1 md:col-start-2",
										children: "+"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
										className: "min-w-0 md:row-span-2 md:col-start-3 md:row-start-1 md:grid md:grid-rows-subgrid",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "flex aspect-[10/7] items-center justify-center overflow-hidden rounded-xl border border-black/10 bg-white",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
												src: "/images/about/bandeira-alfenas.png",
												alt: "Bandeira de Alfenas, com o brasão municipal ao centro e um leão dourado no escudo",
												loading: "lazy",
												className: "h-full w-full object-contain"
											})
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figcaption", {
											className: "mt-5 md:mt-0",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-[10px] font-bold uppercase tracking-widest text-[#A21F25]",
													children: "02 / Alfenas"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
													className: "mt-2 text-xl font-bold",
													children: "O leão. Nossa coragem."
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "mt-3 text-sm leading-relaxed text-black/65",
													children: "O leão do brasão alfenense inspira o personagem central da LAES. Na nossa identidade, ele representa a coragem de competir e conquistar espaço."
												})
											]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										"aria-hidden": "true",
										className: "flex h-8 items-center justify-center self-center text-center text-2xl font-normal leading-none text-[#A21F25] md:row-start-1 md:col-start-4",
										children: "="
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
										className: "min-w-0 md:row-span-2 md:col-start-5 md:row-start-1 md:grid md:grid-rows-subgrid",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "flex aspect-[10/7] items-center justify-center overflow-hidden rounded-xl border border-[#E08821]/30 bg-[#E08821]/10 p-4",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
												src: "/images/laes/logo-principal.png",
												alt: "Logo da LAES, unindo o leão laranja à base triangular vermelha",
												loading: "lazy",
												className: "h-full w-full object-contain"
											})
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figcaption", {
											className: "mt-5 md:mt-0",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-[10px] font-bold uppercase tracking-widest text-[#A21F25]",
													children: "03 / LAES"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
													className: "mt-2 text-xl font-bold",
													children: "A união. Nossa marca."
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "mt-3 text-sm leading-relaxed text-black/65",
													children: "Raízes mineiras e orgulho alfenense, reinterpretados para o e-sports. Uma marca para representar a comunidade que estamos construindo juntos."
												})
											]
										})]
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-9 border-t border-black/10 pt-5 text-xs leading-relaxed text-black/50",
								children: "Minas na base. Alfenas na coragem. LAES na próxima partida."
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-16 grid gap-0 border-y border-black/15 md:grid-cols-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "py-8 md:pr-8",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										"aria-hidden": "true",
										className: "mb-6 block h-12 w-14 bg-[#A21F25] [clip-path:polygon(50%_0,100%_100%,0_100%)]"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "text-xl font-bold",
										children: "A base é mineira."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-3 leading-relaxed text-black/60",
										children: "O triângulo representa nossas raízes em Minas Gerais. É a origem que acompanha a liga em cada novo desafio."
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "border-y border-black/15 py-8 md:border-x md:border-y-0 md:px-8",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: "/images/about/leao-alfenense.png",
										alt: "",
										loading: "lazy",
										className: "mb-6 h-16 w-16 object-contain"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "text-xl font-bold",
										children: "A coragem é alfenense."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-3 leading-relaxed text-black/60",
										children: "O leão faz referência ao brasão de Alfenas e traduz a força de quem joga para conquistar espaço."
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "py-8 md:pl-8",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										"aria-hidden": "true",
										className: "mb-6 flex h-12 items-center gap-2",
										children: [
											"#A21F25",
											"#E08821",
											"#000000",
											"#ECEADB"
										].map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "size-8 rounded-full border border-black/10",
											style: { backgroundColor: c }
										}, c))
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "text-xl font-bold",
										children: "A identidade é nossa."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-3 leading-relaxed text-black/60",
										children: "Vermelho, laranja, preto e creme. Formas marcantes e a fonte Chakra Petch dão voz à LAES, dentro e fora do jogo."
									})
								]
							})
						]
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-black px-6 py-20 text-white sm:px-10",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-end justify-between gap-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-bold uppercase tracking-[0.2em] text-[#E08821]",
							children: "03 / Nossa comunidade"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "mt-5 font-display text-4xl font-bold uppercase sm:text-5xl",
							children: [
								"Uma cidade.",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"Muitas camisas."
							]
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/equipes",
							className: "inline-flex items-center gap-3 border-b border-white/40 pb-2 text-sm",
							children: ["Conheça as equipes ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { size: 18 })]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 max-w-2xl leading-relaxed text-white/65",
						children: "Cada equipe tem sua identidade. Todas fazem parte do mesmo movimento: conectar pessoas e representar a nossa comunidade nos jogos."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6",
						children: [
							["alpha", "Alpha"],
							["bravo", "Bravo"],
							["eclipse", "Eclipse"],
							["valkyrias", "Valkyrias"],
							["nova", "Nova"],
							["red-line", "Red Line"]
						].map(([slug, name]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-2xl bg-white p-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: `/images/teams/laes-${slug}-v2.png`,
								alt: `Logo LAES ${name}`,
								loading: "lazy",
								className: "aspect-square w-full object-contain"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-3 border-t border-black/10 pt-3 text-center text-xs font-bold uppercase tracking-wider text-black",
								children: ["LAES ", name]
							})]
						}, slug))
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs font-bold uppercase tracking-[0.2em] text-[#A21F25]",
				children: "04 / O próximo capítulo"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
				className: "mt-5 max-w-3xl font-display text-4xl font-bold uppercase sm:text-5xl",
				children: [
					"O jogo começa aqui.",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
					"O futuro, a gente constrói."
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12 grid gap-10 md:grid-cols-3",
				children: [
					[
						"01",
						"Conectar jogadores",
						"Aproximar quem joga em Alfenas e região, com respeito, diversidade e espaço para encontrar sua comunidade."
					],
					[
						"02",
						"Fortalecer equipes",
						"Incentivar os treinos, a troca de experiências e a participação em campeonatos, construindo uma trajetória em conjunto."
					],
					[
						"03",
						"Movimentar Alfenas",
						"Queremos aproximar escolas, universidades e parceiros e desenvolver competições que façam parte da vida da cidade."
					]
				].map(([n, t, d]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "border-t border-black/20 pt-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-sm font-bold text-[#A21F25]",
							children: n
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-5 text-2xl font-bold",
							children: t
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 leading-relaxed text-muted-foreground",
							children: d
						})
					]
				}, n))
			}),
			!!partners.data?.length && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-16",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, {
					eyebrow: "Quem caminha junto",
					title: "Parceiros"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-2 gap-4 md:grid-cols-4",
					children: partners.data.map((p) => {
						const inner = p.logo_url ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MediaImage, {
							src: p.logo_url,
							alt: p.name,
							className: "h-16 w-full object-contain",
							loading: "lazy"
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-display font-bold",
							children: p.name
						});
						return p.url ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: p.url,
							target: "_blank",
							rel: "noreferrer",
							className: "flex h-28 items-center justify-center bg-card p-4",
							children: inner
						}, p.id) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex h-28 items-center justify-center bg-card p-4",
							children: inner
						}, p.id);
					})
				})]
			})
		] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative overflow-hidden bg-[#E08821] px-6 py-20 sm:px-10",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LionMark, { className: "pointer-events-none absolute -right-12 -top-12 size-96 text-black/5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto max-w-7xl",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-bold uppercase tracking-[0.2em]",
						children: "Sua cidade. Sua comunidade. Seu próximo time."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "mt-6 font-display text-5xl font-bold uppercase leading-tight sm:text-7xl",
						children: [
							"Você joga.",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"Alfenas tem time."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 max-w-xl text-lg",
						children: "Crie sua conta, preencha sua ficha de atleta e venha construir essa história com a gente."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/cadastro",
						className: "mt-9 inline-flex items-center gap-8 rounded-full bg-black px-7 py-4 font-bold text-white transition-colors hover:bg-[#A21F25]",
						children: ["Quero fazer parte ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { size: 20 })]
					})
				]
			})]
		})
	] });
}
//#endregion
export { About as component };
