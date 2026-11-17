import {CommunityDirectory} from "./laes-team-feature-20261111-v1.mjs";
import { r as __toESM } from "../_runtime.mjs";
import { r as supabase } from "./backend-mB6vbMUi.mjs";
import { m as require_react, p as require_jsx_runtime } from "../_libs/@radix-ui/react-avatar+[...].mjs";
import { b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as useQueryClient, n as useQuery } from "../_libs/tanstack__react-query.mjs";
import { C as Check, D as ArrowLeft, E as ArrowRight, T as ArrowUpRight, b as Eye, f as Mail, g as ImagePlus, h as LayoutDashboard, i as UserRound, o as Shield, p as LockKeyhole, r as UsersRound, s as Settings, w as Bell, y as Gamepad2 } from "../_libs/lucide-react.mjs";
import { C as formatDate, D as inviteStatusLabel, O as memberTypeLabel, P as useAuth, S as fieldClass, _ as TeamLogo, b as applicationStatusLabel, d as MediaImage, i as ErrorNote, l as Loading, o as Field, r as Empty, s as Gate, u as Logo, x as cn, y as UFS } from "./Logo-DncJtcSp.mjs";
import { t as Button } from "./button-tsOZyY2X.mjs";
import { t as uploadImage } from "./upload-DbWbY1XA.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { a as hasAccountSetup, i as AuthLayout, r as AccountSetup } from "./AuthLayout-Cw1J02uC.mjs";
import { t as modalitiesQuery } from "./settings-B6eNktqV.mjs";
import { n as teamsQuery } from "./catalog-ew-rK_t4.mjs";
import { t as AccountAvatar } from "./AccountAvatar-D2WQuB-2.mjs";
import { i as TabsTrigger$1, n as TabsContent$1, r as TabsList$1, t as Tabs$1 } from "../_libs/radix-ui__react-tabs.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/painel-Di7aYKiM.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var athleteInput = fieldClass + " !rounded-xl !bg-white !px-4 !py-3";
var participationOptions = [
	[
		"wants_compete",
		"Quero competir",
		"Encontrar um time e entrar no jogo."
	],
	[
		"wants_captain",
		"Quero liderar",
		"Tenho interesse em ser capitão."
	],
	[
		"wants_coach",
		"Quero ser coach",
		"Ajudar uma equipe a evoluir."
	],
	[
		"wants_volunteer",
		"Quero somar",
		"Apoiar a liga como voluntário."
	]
];
function AthleteOnboarding() {
	const { user, profile, refresh } = useAuth();
	const qc = useQueryClient();
	const mods = useQuery(modalitiesQuery);
	const [step, setStep] = (0, import_react.useState)(0), [busy, setBusy] = (0, import_react.useState)(false), [error, setError] = (0, import_react.useState)("");
	const [nick, setNick] = (0, import_react.useState)(profile?.nick || "");
	const [city, setCity] = (0, import_react.useState)(profile?.city || ""), [state, setState] = (0, import_react.useState)(profile?.state || "");
	const [games, setGames] = (0, import_react.useState)([]);
	const [interests, setInterests] = (0, import_react.useState)([]);
	const [visible, setVisible] = (0, import_react.useState)(profile?.is_public ?? false);
	const titles = [
		"Como a gente te chama?",
		"Qual é o seu jogo?",
		"Seu jeito de fazer parte."
	];
	const next = () => {
		if (step === 0 && (nick.trim().length < 2 || nick.trim().length > 40)) {
			setError("Escolha um nick entre 2 e 40 caracteres.");
			return;
		}
		if (step === 1 && !games.length) {
			setError("Escolha pelo menos um jogo para continuar.");
			return;
		}
		setError("");
		setStep((s) => s + 1);
	};
	async function finish() {
		setBusy(true);
		setError("");
		try {
			const result = await supabase.rpc.bind(supabase)("complete_athlete_onboarding", { input: {
				nick: nick.trim(),
				city: city.trim(),
				state,
				games,
				is_public: visible,
				...Object.fromEntries(participationOptions.map(([key]) => [key, interests.includes(key)]))
			} });
			if (result.error) {
				setError(result.error.code === "23505" ? "Esse nick já está em uso. Volte ao primeiro passo e escolha outro." : "Não conseguimos salvar sua ficha. Suas escolhas estão aqui: tente novamente.");
				return;
			}
			await qc.invalidateQueries({ queryKey: ["panel-games"] });
			await refresh();
		} catch {
			setError("Não foi possível concluir o salvamento. Suas escolhas continuam aqui; tente novamente.");
		} finally {
			setBusy(false);
		}
	}
	const toggle = (list, value) => list.includes(value) ? list.filter((x) => x !== value) : [...list, value];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "min-h-[80vh] bg-[#F5F4EE] px-4 py-8 sm:py-12",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-5xl overflow-hidden rounded-[2rem] border border-black/10 bg-white lg:grid-cols-[0.8fr_1.2fr]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
				className: "relative flex flex-col justify-between gap-8 bg-[#090909] p-7 text-white sm:p-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-10 text-[10px] font-bold uppercase tracking-[0.22em] text-accent",
						children: "Você chegou. A liga é sua também."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "mt-4 text-3xl font-bold leading-tight sm:text-4xl",
						children: [
							"Seu próximo time",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-accent",
								children: "começa com você."
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 max-w-xs text-sm leading-relaxed text-white/60",
						children: "Só precisamos conhecer seu nick e seus jogos. O resto você conta no seu tempo."
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
					"aria-label": "Etapas da ficha",
					className: "grid gap-4",
					children: [
						"Seu nick",
						"Seus jogos",
						"Seu lugar na liga"
					].map((label, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						"aria-current": step === i ? "step" : void 0,
						className: `flex items-center gap-3 text-sm ${step === i ? "text-white" : "text-white/45"}`,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: `flex size-8 items-center justify-center rounded-full border text-xs ${step >= i ? "border-accent bg-accent text-black" : "border-white/20"}`,
							children: step > i ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { size: 14 }) : `0${i + 1}`
						}), label]
					}, label))
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "p-6 sm:p-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-[10px] font-bold uppercase tracking-[0.2em] text-primary",
						children: [
							"Sua ficha · passo ",
							step + 1,
							" de 3"
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						tabIndex: -1,
						className: "mt-3 text-3xl font-bold",
						children: titles[step]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						className: "mt-7 grid gap-5",
						onSubmit: (e) => {
							e.preventDefault();
							if (step < 2) next();
							else finish();
						},
						children: [
							step === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-3 rounded-2xl bg-[#F5F4EE] p-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccountAvatar, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "text-sm",
										children: [
											"Bom ter você aqui.",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-xs text-muted-foreground",
												children: "Vamos montar seu perfil de jogador."
											})
										]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Seu nick",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										name: "nick",
										value: nick,
										onChange: (e) => setNick(e.target.value),
										required: true,
										minLength: 2,
										maxLength: 40,
										placeholder: "Como a galera te conhece?",
										autoComplete: "nickname",
										className: athleteInput
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid gap-4 sm:grid-cols-[1fr_100px]",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Cidade · opcional",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											value: city,
											onChange: (e) => setCity(e.target.value),
											maxLength: 100,
											autoComplete: "address-level2",
											placeholder: "De onde você joga?",
											className: athleteInput
										})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "UF",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
											value: state,
											onChange: (e) => setState(e.target.value),
											className: athleteInput,
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												value: "",
												children: "—"
											}), UFS.map((uf) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: uf }, uf))]
										})
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "flex items-start gap-2 text-xs leading-relaxed text-muted-foreground",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LockKeyhole, { className: "mt-0.5 size-3.5 shrink-0" }), "Seu e-mail fica privado. Você decide a visibilidade do nick e da ficha no último passo."]
								})
							] }),
							step === 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-muted-foreground",
								children: "Escolha todos os que você joga. Elo, ID e funções podem ficar para depois."
							}), mods.isPending ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Carregando jogos…" }) : mods.isError ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								role: "alert",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Não conseguimos buscar os jogos." }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									type: "button",
									variant: "outline",
									onClick: () => void mods.refetch(),
									children: "Tentar novamente"
								})]
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid gap-3 sm:grid-cols-2",
								children: mods.data?.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									"aria-pressed": games.includes(m.id),
									onClick: () => setGames(toggle(games, m.id)),
									className: `flex min-h-20 items-center gap-3 rounded-2xl border p-4 text-left text-sm font-bold transition-colors focus-visible:outline-2 focus-visible:outline-primary ${games.includes(m.id) ? "border-accent bg-accent/10" : "border-black/10 bg-white hover:border-accent"}`,
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Gamepad2, { className: "size-5 shrink-0 text-primary" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "flex-1",
											children: m.name
										}),
										games.includes(m.id) && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { size: 15 })
									]
								}, m.id))
							})] }),
							step === 2 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm text-muted-foreground",
									children: "Só jogar e conhecer a galera também vale. Essas escolhas são opcionais."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "grid gap-3 sm:grid-cols-2",
									children: participationOptions.map(([key, label, desc]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										"aria-pressed": interests.includes(key),
										onClick: () => setInterests(toggle(interests, key)),
										className: `rounded-2xl border p-4 text-left transition-colors ${interests.includes(key) ? "border-accent bg-accent/10" : "border-black/10 hover:border-accent"}`,
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "flex items-center justify-between gap-2 text-sm font-bold",
											children: [label, interests.includes(key) && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { size: 14 })]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "mt-1 block text-xs leading-relaxed text-muted-foreground",
											children: desc
										})]
									}, key))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "flex items-start gap-3 rounded-2xl border border-black/10 bg-[#F5F4EE] p-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "checkbox",
										checked: visible,
										onChange: (e) => setVisible(e.target.checked),
										className: "mt-1 size-4 shrink-0 accent-primary"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-sm font-bold",
										children: "Quero aparecer na comunidade"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "mt-1 block text-xs leading-relaxed text-muted-foreground",
										children: "Nick, foto escolhida e jogos poderão aparecer para outros jogadores e no perfil público. Sua presença on-line também aparece na comunidade. E-mail e nome completo ficam privados."
									})] })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "flex items-center gap-2 text-xs text-muted-foreground",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(UsersRound, { size: 14 }), "Você pode mudar essa escolha no painel."]
								})
							] }),
							error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								role: "alert",
								className: "rounded-xl border border-primary/20 bg-primary/5 p-3 text-sm text-primary",
								children: error
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-3 flex items-center justify-between gap-3 border-t border-black/10 pt-5",
								children: [step > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
									type: "button",
									variant: "ghost",
									disabled: busy,
									onClick: () => {
										setError("");
										setStep((s) => s - 1);
									},
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { size: 16 }), "Voltar"]
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs text-muted-foreground",
									children: "No seu ritmo."
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
									type: "submit",
									disabled: busy || step === 1 && (mods.isPending || mods.isError),
									className: "h-12 rounded-full px-6",
									children: [busy ? "Salvando sua ficha…" : step === 2 ? "Entrar na liga" : "Continuar", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 16 })]
								})]
							})
						]
					})
				]
			})]
		})
	});
}
var rpc = supabase.rpc.bind(supabase);
async function act(action, payload = {}) {
	const r = await rpc("community_action", {
		action,
		payload
	});
	if (r.error) throw new Error(r.error.message);
	return r.data;
}
function CaptainAcceptance() {
	const a = useAuth();
	const [token, setToken] = (0, import_react.useState)(null);
	const [busy, setBusy] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const value = new URLSearchParams(window.location.search).get("capitania");
		if (value) sessionStorage.setItem("laes-captain-invite", value);
		setToken(value || sessionStorage.getItem("laes-captain-invite"));
	}, []);
	if (!token || !a.user) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mb-6 rounded-2xl border border-primary/30 bg-card p-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-xl font-bold",
				children: "Convite de capitania"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "my-3 text-sm",
				children: "Aceite com a conta de e-mail indicada pelo master. O link tem uso único e validade de 7 dias."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				disabled: busy,
				onClick: async () => {
					setBusy(true);
					try {
						await act("accept_captain_link", { token });
						sessionStorage.removeItem("laes-captain-invite");
						window.history.replaceState({}, "", "/painel");
						setToken(null);
						await a.refresh();
						toast.success("Capitania aceita!");
					} catch (e) {
						toast.error(e.message);
					} finally {
						setBusy(false);
					}
				},
				children: "Aceitar capitania"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				variant: "ghost",
				onClick: () => {
					sessionStorage.removeItem("laes-captain-invite");
					setToken(null);
				},
				children: "Dispensar"
			})
		]
	});
}
function RememberCaptainLink() {
	(0, import_react.useEffect)(() => {
		const t = new URLSearchParams(window.location.search).get("capitania");
		if (t) sessionStorage.setItem("laes-captain-invite", t);
	}, []);
	return null;
}
function Community(props){return props.mode === "directory" ? (0,import_jsx_runtime.jsx)(CommunityDirectory,{}) : (0,import_jsx_runtime.jsx)(CommunityLegacy,props)}
function CommunityLegacy({ mode = "all" }) {
	const a = useAuth(), qc = useQueryClient();
	const [search, setSearch] = (0, import_react.useState)("");
	const [filter, setFilter] = (0, import_react.useState)("");
	const [page, setPage] = (0, import_react.useState)(0);
	const [onlyOnline, setOnlyOnline] = (0, import_react.useState)(false);
	const [team, setTeam] = (0, import_react.useState)("");
	const [link, setLink] = (0, import_react.useState)("");
	const [busy, setBusy] = (0, import_react.useState)(false);
	const teams = useQuery(teamsQuery), mods = useQuery(modalitiesQuery);
	const managed = teams.data?.filter((t) => a.isAdmin || a.captainTeamIds.includes(t.id)) ?? [];
	const selected = managed.find((t) => t.id === team)?.id ?? managed[0]?.id ?? "";
	const players = useQuery({
		queryKey: [
			"community",
			search,
			filter,
			page,
			onlyOnline
		],
		queryFn: () => act("directory", {
			search,
			modality: filter,
			offset: page * 40,
			online_only: onlyOnline
		}),
		refetchInterval: 3e4
	});
	const roster = useQuery({
		queryKey: ["community-roster", selected],
		enabled: !!selected,
		queryFn: () => act("roster", { team_id: selected })
	});
	async function run(action, payload) {
		setBusy(true);
		try {
			await act(action, payload);
			toast.success(action === "invite" ? "Convite enviado. O jogador deve aceitar no painel." : "Elenco atualizado.");
			await qc.invalidateQueries({ queryKey: ["community-roster"] });
		} catch (e) {
			toast.error(e.message);
		} finally {
			setBusy(false);
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-8",
		children: [
			mode !== "management" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow",
					children: "Alfenas joga junto"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-2 text-3xl font-bold",
					children: "Comunidade LAES"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-muted-foreground",
					children: "Encontre os jogadores da liga. Aqui aparecem apenas nickname, avatar e modalidades cadastradas. O indicador on-line aparece enquanto a pessoa está ativa no portal."
				})
			] }),
			mode === "directory" && !!managed.length && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: "Convidar jogadores para",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
					className: "w-full rounded border border-input bg-background px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary",
					value: selected,
					onChange: (e) => setTeam(e.target.value),
					children: managed.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
						value: t.id,
						children: t.name
					}, t.id))
				})
			}),
			mode !== "directory" && !!managed.length && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "rounded-3xl border bg-card p-5 sm:p-7",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mb-4 text-xl font-bold",
						children: "Gestão da equipe"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Equipe",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
							className: "w-full rounded border border-input bg-background px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary",
							value: selected,
							onChange: (e) => {
								setTeam(e.target.value);
								setLink("");
							},
							children: managed.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: t.id,
								children: t.name
							}, t.id))
						})
					}),
					a.isAdmin && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						className: "my-5 space-y-3 border-y py-5",
						onSubmit: async (e) => {
							e.preventDefault();
							const email = new FormData(e.currentTarget).get("email");
							setBusy(true);
							try {
								const r = await act("create_captain_link", {
									team_id: selected,
									email
								});
								setLink(`${window.location.origin}/painel?capitania=${r.token}`);
								toast.success("Link gerado. Copie e envie ao capitão.");
							} catch (err) {
								toast.error(err.message);
							} finally {
								setBusy(false);
							}
						},
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "E-mail da conta do capitão",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									name: "email",
									type: "email",
									required: true,
									className: "w-full rounded border border-input bg-background px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								disabled: busy || !selected,
								children: "Gerar convite de capitania"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-muted-foreground",
								children: "Somente esta conta poderá aceitar. Gerar outro link invalida o anterior. Ao aceitar, o novo capitão substitui a capitania da equipe."
							}),
							link && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-wrap gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									readOnly: true,
									"aria-label": "Link do convite de capitania",
									className: "w-full rounded border border-input bg-background px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary",
									value: link
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									type: "button",
									variant: "outline",
									onClick: async () => {
										try {
											await navigator.clipboard.writeText(link);
											toast.success("Link copiado");
										} catch {
											toast.error("Selecione e copie o link acima.");
										}
									},
									children: "Copiar link"
								})]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
						className: "mt-5 font-bold",
						children: "Elenco"
					}),
					roster.isError ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ErrorNote, { error: roster.error }) : roster.isPending ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Loading, {}) : roster.data?.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-3 divide-y",
						children: roster.data.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-center justify-between gap-3 py-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [m.nick, m.is_captain ? " · Capitão" : ""] }), !m.is_captain && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								disabled: busy,
								variant: "outline",
								size: "sm",
								onClick: () => {
									if (window.confirm(`Remover ${m.nick} deste elenco?`)) run("remove_member", { member_id: m.id });
								},
								children: "Remover"
							})]
						}, m.id))
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm text-muted-foreground",
						children: "Nenhum integrante. Encontre jogadores na aba Comunidade."
					})
				]
			}),
			mode !== "management" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-4 sm:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Buscar nickname",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							className: "w-full rounded border border-input bg-background px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary",
							value: search,
							maxLength: 80,
							onChange: (e) => {
								setSearch(e.target.value);
								setPage(0);
							},
							placeholder: "Quem joga com você?"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Modalidade",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
							className: "w-full rounded border border-input bg-background px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary",
							value: filter,
							onChange: (e) => {
								setFilter(e.target.value);
								setPage(0);
							},
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "",
								children: "Todas as modalidades"
							}), mods.data?.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: m.id,
								children: m.name
							}, m.id))]
						})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "flex items-center gap-2 text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "checkbox",
						checked: onlyOnline,
						onChange: (e) => {
							setOnlyOnline(e.target.checked);
							setPage(0);
						}
					}), "Mostrar somente on-line"]
				}),
				players.isError ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ErrorNote, { error: players.error }) : players.isPending ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Loading, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
						children: players.data?.filter((p) => !onlyOnline || p.online).map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "rounded-3xl border bg-card p-5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-3",
									children: [p.avatar_url ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MediaImage, {
										src: p.avatar_url,
										alt: "",
										className: "size-14 rounded-full object-cover"
									}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										"aria-hidden": "true",
										className: "flex size-14 items-center justify-center rounded-full bg-secondary text-xl font-bold",
										children: p.nick.slice(0, 1).toUpperCase()
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "min-w-0",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "break-words font-bold",
											children: p.nick
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: `text-xs ${p.online ? "text-green-700" : "text-muted-foreground"}`,
											children: p.online ? "● On-line agora" : "○ Off-line"
										})]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "my-4 flex flex-wrap gap-2",
									children: p.modalities.length ? p.modalities.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "rounded-full bg-secondary px-3 py-1 text-xs",
										children: m
									}, m)) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-xs text-muted-foreground",
										children: "Modalidades ainda não cadastradas"
									})
								}),
								selected && p.id !== a.user?.id && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									disabled: busy,
									variant: "outline",
									size: "sm",
									onClick: () => void run("invite", {
										team_id: selected,
										user_id: p.id
									}),
									children: "Convidar para a equipe"
								})
							]
						}, p.id))
					}),
					!players.data?.filter((p) => !onlyOnline || p.online).length && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: onlyOnline ? "Sem usuários ativos" : "Nenhum jogador encontrado. Tente outra modalidade ou busca." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "outline",
								disabled: !page,
								onClick: () => setPage((p) => p - 1),
								children: "Anterior"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-sm",
								children: ["Página ", page + 1]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "outline",
								disabled: (players.data?.length ?? 0) < 40,
								onClick: () => setPage((p) => p + 1),
								children: "Próxima"
							})
						]
					})
				] })
			] }),
			mode === "management" && !managed.length && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-3xl border bg-white p-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "font-bold",
					children: "Gestão do elenco"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-sm text-muted-foreground",
					children: "O capitão gerencia os convites e integrantes. A criação da equipe e a identidade ficam com a administração da LAES."
				})]
			})
		]
	});
}
function PortalPresence() {
	const { profile } = useAuth();
	const qc = useQueryClient();
	(0, import_react.useEffect)(() => {
		if (!profile?.is_public) {
			act("offline").catch(() => {});
			return;
		}
		let mounted = true;
		async function beat() {
			if (document.visibilityState === "visible") try {
				await act("heartbeat");
				qc.invalidateQueries({ queryKey: ["community-preview"] });
			} catch {}
		}
		beat();
		const timer = setInterval(() => {
			if (mounted) beat();
		}, 3e4);
		const visibility = () => {
			if (document.visibilityState === "hidden") act("offline").catch(() => {});
			else beat();
		};
		document.addEventListener("visibilitychange", visibility);
		return () => {
			mounted = false;
			clearInterval(timer);
			document.removeEventListener("visibilitychange", visibility);
			act("offline").catch(() => {});
		};
	}, [qc, profile?.is_public]);
	return null;
}
function CommunityPreview({ onOpen }) {
	const q = useQuery({
		queryKey: ["community-preview"],
		queryFn: () => act("directory", { online_only: true }),
		refetchInterval: 15e3
	});
	const online = (q.data ?? []).filter((p) => p.online);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "rounded-3xl border border-black/10 bg-white p-6 sm:p-7",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-center justify-between gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow text-primary",
					children: "A liga está por aqui"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-2 text-xl font-bold",
					children: "Quem está on-line"
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "ghost",
					onClick: onOpen,
					children: "Ver comunidade →"
				})]
			}),
			q.isPending ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-5 text-sm text-muted-foreground",
				children: "Buscando jogadores…"
			}) : q.isError ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				role: "status",
				className: "mt-5 text-sm text-muted-foreground",
				children: "Não foi possível consultar quem está on-line agora."
			}) : !online.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-5 text-sm text-muted-foreground",
				children: "Sem usuários ativos"
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-5 grid gap-3 sm:grid-cols-2 xl:grid-cols-3",
				children: online.slice(0, 6).map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3 rounded-2xl bg-[#F5F4EE] p-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "relative shrink-0",
						children: [p.avatar_url ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MediaImage, {
							src: p.avatar_url,
							alt: "",
							className: "size-11 rounded-full object-cover"
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "flex size-11 items-center justify-center rounded-full bg-[#ECEADB] font-bold",
							children: p.nick.slice(0, 1)
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							"aria-hidden": "true",
							className: "absolute bottom-0 right-0 size-3 rounded-full border-2 border-white bg-emerald-600"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "truncate text-sm font-bold",
								children: p.nick
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 truncate text-xs text-muted-foreground",
								children: p.modalities.join(" · ") || "Jogador da liga"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-[10px] font-semibold text-emerald-700",
								children: "On-line agora"
							})
						]
					})]
				}, p.id))
			}),
			online.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-5 text-[11px] text-muted-foreground",
				children: "Apenas jogadores com perfil visível."
			})
		]
	});
}
var Tabs = Tabs$1;
var TabsList = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsList$1, {
	ref,
	className: cn("inline-flex h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground", className),
	...props
}));
TabsList.displayName = TabsList$1.displayName;
var TabsTrigger = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger$1, {
	ref,
	className: cn("inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background cursor-pointer transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow", className),
	...props
}));
TabsTrigger.displayName = TabsTrigger$1.displayName;
var TabsContent = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent$1, {
	ref,
	className: cn("mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2", className),
	...props
}));
TabsContent.displayName = TabsContent$1.displayName;
function ProfileForm() {
	const { user, profile, refresh } = useAuth();
	const qc = useQueryClient();
	const [busy, setBusy] = (0, import_react.useState)(false);
	const privateQuery = useQuery({
		queryKey: ["private-profile", user.id],
		queryFn: async () => {
			const r = await supabase.from("profiles_private").select("full_name").eq("user_id", user.id).maybeSingle();
			if (r.error) throw r.error;
			return r.data;
		}
	});
	async function save(e) {
		e.preventDefault();
		const f = new FormData(e.currentTarget);
		setBusy(true);
		try {
			let avatar = profile?.avatar_url ?? null;
			const file = f.get("avatar");
			if (file instanceof File && file.size) avatar = await uploadImage(file, "avatars", user.id);
			const { error } = await supabase.from("profiles").update({
				nick: String(f.get("nick")).trim(),
				city: String(f.get("city")).trim() || null,
				state: String(f.get("state")) || null,
				instagram: String(f.get("instagram")).trim() || null,
				bio: String(f.get("bio")).trim() || null,
				availability: String(f.get("availability")).trim() || null,
				avatar_url: avatar,
				is_public: f.get("is_public") === "on",
				wants_compete: f.get("wants_compete") === "on",
				wants_captain: f.get("wants_captain") === "on",
				wants_coach: f.get("wants_coach") === "on",
				wants_volunteer: f.get("wants_volunteer") === "on",
				onboarded: true
			}).eq("id", user.id);
			if (error) throw error;
			const priv = await supabase.from("profiles_private").upsert({
				user_id: user.id,
				full_name: String(f.get("full_name")).trim()
			});
			if (priv.error) throw priv.error;
			await refresh();
			await qc.invalidateQueries({ queryKey: ["private-profile"] });
			toast.success("Ficha salva.");
		} catch (e) {
			toast.error(typeof e === "object" && e && "code" in e && e.code === "23505" ? "Esse nick já está em uso. Escolha outro." : "Não foi possível salvar toda a ficha. Confira os dados e tente novamente.");
		} finally {
			setBusy(false);
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		onSubmit: save,
		className: "grid gap-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-start justify-between gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow text-primary",
						children: "Do seu jeito"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-2 text-3xl font-bold",
						children: "Seu perfil na liga."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-muted-foreground",
						children: "O essencial para a galera conhecer seu jogo. O resto é com você."
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "rounded-full bg-accent/10 px-3 py-1.5 text-[11px] font-semibold text-primary",
					children: profile?.is_public ? "Visível na comunidade" : "Perfil reservado"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "rounded-2xl border border-black/10 bg-[#F5F4EE]/60 p-5 sm:p-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-6 flex items-center gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccountAvatar, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-bold",
						children: "Sua identidade de jogador"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-xs text-muted-foreground",
						children: "Um nick para encontrar sua turma."
					})] })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Seu nick",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							name: "nick",
							defaultValue: profile?.nick ?? "",
							placeholder: "Como a galera te conhece?",
							required: true,
							minLength: 2,
							maxLength: 40,
							autoComplete: "nickname",
							className: athleteInput
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-4 sm:grid-cols-[1fr_110px]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Cidade · opcional",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								name: "city",
								defaultValue: profile?.city ?? "",
								placeholder: "De onde você joga?",
								maxLength: 100,
								autoComplete: "address-level2",
								className: athleteInput
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "UF",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
								name: "state",
								defaultValue: profile?.state ?? "",
								className: athleteInput,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "",
									children: "—"
								}), UFS.map((uf) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: uf }, uf))]
							})
						})]
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "text-base font-bold",
					children: "Como você quer somar?"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-xs text-muted-foreground",
					children: "Pode escolher mais de um. Ou só conhecer a comunidade por enquanto."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-4 grid gap-3 sm:grid-cols-2",
					children: participationOptions.map(([key, label, desc]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "relative flex cursor-pointer items-start gap-3 rounded-2xl border border-black/10 p-4 transition-colors has-[:checked]:border-accent has-[:checked]:bg-accent/10 focus-within:ring-2 focus-within:ring-primary",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							name: key,
							type: "checkbox",
							defaultChecked: profile?.[key] ?? false,
							className: "mt-1 size-4 shrink-0 accent-primary"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block text-sm font-bold",
							children: label
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mt-1 block text-xs text-muted-foreground",
							children: desc
						})] })]
					}, key))
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("details", {
				className: "group rounded-2xl border border-black/10 p-5 sm:p-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("summary", {
					className: "cursor-pointer text-sm font-bold",
					children: ["Um pouco mais sobre você ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "ml-2 text-xs font-normal text-muted-foreground",
						children: "Tudo opcional"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 grid gap-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Sua apresentação",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
								name: "bio",
								defaultValue: profile?.bio ?? "",
								maxLength: 1e3,
								rows: 3,
								placeholder: "Seu estilo de jogo, o que curte jogar…",
								className: athleteInput
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "rounded-xl border border-dashed border-black/20 bg-[#F5F4EE]/60 p-4",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "grid gap-3 text-sm font-medium",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "flex items-center gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImagePlus, { size: 16 }), "Escolher uma foto"]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-xs font-normal text-muted-foreground",
										children: "PNG, JPG ou WEBP, até 5 MB. A foto escolhida tem prioridade sobre a do Google."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										name: "avatar",
										type: "file",
										accept: "image/png,image/jpeg,image/webp",
										className: "w-full text-xs file:mr-3 file:rounded-full file:border-0 file:bg-black file:px-4 file:py-2 file:text-xs file:font-semibold file:text-white"
									})
								]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Instagram",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								name: "instagram",
								defaultValue: profile?.instagram ?? "",
								maxLength: 100,
								placeholder: "@seuusuario",
								className: athleteInput
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Quando costuma jogar?",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
								name: "availability",
								defaultValue: profile?.availability ?? "",
								maxLength: 500,
								rows: 2,
								placeholder: "Ex.: à noite, depois das 20h",
								className: athleteInput
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "border-t border-black/10 pt-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Nome completo",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									name: "full_name",
									defaultValue: privateQuery.data?.full_name ?? "",
									maxLength: 120,
									autoComplete: "name",
									className: athleteInput
								}, privateQuery.data?.full_name)
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-2 flex items-center gap-1.5 text-[11px] text-muted-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LockKeyhole, { size: 12 }), "Privado. Não aparece na ficha pública nem na comunidade."]
							})]
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "rounded-2xl border border-black/10 bg-[#F5F4EE]/60 p-5",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "flex cursor-pointer items-start gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						name: "is_public",
						type: "checkbox",
						defaultChecked: profile?.is_public ?? false,
						className: "mt-1 size-4 shrink-0 accent-primary"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "flex items-center gap-2 text-sm font-bold",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, { size: 15 }), "Aparecer na comunidade"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "mt-2 block text-xs leading-relaxed text-muted-foreground",
						children: "Outros jogadores poderão ver seu nick, foto escolhida, apresentação, jogos e status on-line. Sua ficha pública também fica disponível. Nome completo e e-mail continuam privados."
					})] })]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-center justify-between gap-4 border-t border-black/10 pt-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "flex items-center gap-1.5 text-[11px] text-muted-foreground",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LockKeyhole, { size: 12 }), "Seu e-mail fica só na sua conta."]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					className: "h-12 rounded-full px-7",
					disabled: busy || privateQuery.isPending || privateQuery.isError,
					children: [busy ? "Salvando…" : "Salvar meu perfil", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { size: 16 })]
				})]
			}),
			privateQuery.isError && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				role: "alert",
				className: "text-sm text-primary",
				children: ["Não conseguimos carregar seus dados privados. ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "underline",
					onClick: () => void privateQuery.refetch(),
					children: "Tentar novamente"
				})]
			})
		]
	}, profile?.updated_at);
}
function GamesForm() {
	const { user } = useAuth(), qc = useQueryClient();
	const mods = useQuery(modalitiesQuery);
	const [selected, setSelected] = (0, import_react.useState)(""), [busy, setBusy] = (0, import_react.useState)(false);
	const q = useQuery({
		queryKey: ["athlete-games", user.id],
		queryFn: async () => {
			const r = await supabase.from("athlete_games").select("*,modalities(name)").eq("user_id", user.id);
			if (r.error) throw r.error;
			return r.data;
		}
	});
	const roles = useQuery({
		queryKey: ["modality-roles", selected],
		enabled: !!selected,
		queryFn: async () => {
			const r = await supabase.from("modality_roles").select("*").eq("modality_id", selected).order("sort");
			if (r.error) throw r.error;
			return r.data;
		}
	});
	const existing = q.data?.find((x) => x.modality_id === selected);
	const mod = mods.data?.find((x) => x.id === selected);
	async function save(e) {
		e.preventDefault();
		const f = new FormData(e.currentTarget);
		setBusy(true);
		const r = await supabase.from("athlete_games").upsert({
			user_id: user.id,
			modality_id: selected,
			game_nick: String(f.get("game_nick")).trim() || null,
			rank: String(f.get("rank")).trim() || null,
			category: String(f.get("category") ?? "") || null,
			roles: f.getAll("roles").map(String)
		}, { onConflict: "user_id,modality_id" });
		setBusy(false);
		if (r.error) {
			toast.error("Não foi possível salvar a modalidade.");
			return;
		}
		await qc.invalidateQueries({ queryKey: ["athlete-games"] });
		toast.success("Modalidade salva.");
	}
	async function remove(id) {
		if (!window.confirm("Remover esta modalidade da sua ficha?")) return;
		if ((await supabase.from("athlete_games").delete().eq("id", id).eq("user_id", user.id)).error) toast.error("Não foi possível remover.");
		else await qc.invalidateQueries({ queryKey: ["athlete-games"] });
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-2xl font-bold",
				children: "Seus jogos, seu estilo."
			}),
			q.isError ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ErrorNote, { error: q.error }) : q.isPending ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Loading, {}) : q.data.map((g) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-black/10 bg-[#F5F4EE] p-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
					g.modalities?.name,
					" · ",
					g.game_nick,
					" · ",
					g.roles.join(", ")
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "outline",
					onClick: () => remove(g.id),
					children: "Remover"
				})]
			}, g.id)),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: "Escolha um jogo para completar os detalhes",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
					className: athleteInput,
					value: selected,
					onChange: (e) => setSelected(e.target.value),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
						value: "",
						children: "Selecione"
					}), mods.data?.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
						value: m.id,
						children: m.name
					}, m.id))]
				})
			}),
			selected && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				className: "grid gap-4",
				onSubmit: save,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Nick / ID no jogo",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							className: athleteInput,
							name: "game_nick",
							defaultValue: existing?.game_nick ?? "",
							maxLength: 100
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Elo ou nível (opcional)",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							className: athleteInput,
							name: "rank",
							defaultValue: existing?.rank ?? "",
							maxLength: 80
						})
					}),
					!!mod?.categories.length && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Categoria",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
							className: athleteInput,
							name: "category",
							defaultValue: existing?.category ?? "",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "",
								children: "Selecione"
							}), mod.categories.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: c }, c))]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("fieldset", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("legend", {
						className: "mb-3 font-medium",
						children: "Funções"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex flex-wrap gap-4",
						children: roles.data?.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "flex gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								name: "roles",
								value: r.name,
								type: "checkbox",
								defaultChecked: existing?.roles.includes(r.name)
							}), r.name]
						}, r.id))
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						disabled: busy || roles.isPending || roles.isError,
						children: busy ? "Salvando…" : "Salvar modalidade"
					})
				]
			}, selected + String(existing?.id))
		]
	});
}
function Portal({AthleteRegistration,AthleteTeamSection,AthleteProfile}) {
	const { user, profile, isStaff } = useAuth(), qc = useQueryClient();
	const [busy, setBusy] = (0, import_react.useState)(false);
	const [tab, setTab] = laesPanelTab(user.id);
	const games = useQuery({
		queryKey: ["panel-games", user.id],
		enabled: Boolean(profile?.onboarded || isStaff),
		queryFn: async () => {
			const r = await supabase.from("athlete_games").select("modality_id,modalities(name)").eq("user_id", user.id);
			if (r.error) throw r.error;
			return r.data;
		}
	});
	const q = useQuery({
		queryKey: ["athlete-portal", user.id],
		enabled: Boolean(profile?.onboarded || isStaff),
		queryFn: async () => {
			const [apps, invites, teams, notices, deletion] = await Promise.all([
				supabase.from("applications").select("*,openings(role_name,teams(name))").eq("user_id", user.id).order("created_at", { ascending: false }),
				supabase.from("invites").select("*,teams(name)").eq("user_id", user.id).order("created_at", { ascending: false }),
				supabase.from("team_members").select("*,teams(name,slug)").eq("user_id", user.id),
				supabase.from("notices").select("*").order("created_at", { ascending: false }).limit(30),
				supabase.from("deletion_requests").select("id,status").eq("user_id", user.id).eq("status", "pendente")
			]);
			for (const r of [
				apps,
				invites,
				teams,
				notices,
				deletion
			]) if (r.error) throw r.error;
			return {
				apps: apps.data,
				invites: invites.data,
				teams: teams.data,
				notices: notices.data,
				deletion: deletion.data
			};
		}
	});
	async function action(kind, id, accept = false) {
		setBusy(true);
		try {
			const r = kind === "respond_invite" ? await supabase.rpc(kind, {
				_id: id,
				_accept: accept
			}) : await supabase.rpc(kind, { _id: id });
			if (r.error) throw r.error;
			toast.success("Atualizado.");
			await qc.invalidateQueries({ queryKey: ["athlete-portal"] });
		} catch {
			toast.error("Não foi possível concluir. Atualize a página e tente novamente.");
		} finally {
			setBusy(false);
		}
	}
	async function requestDeletion() {
		if (!window.confirm("Solicitar a exclusão da sua conta e dados à administração da LAES?")) return;
		setBusy(true);
		const r = await supabase.from("deletion_requests").insert({ user_id: user.id });
		setBusy(false);
		if (r.error) toast.error("Não foi possível solicitar.");
		else {
			toast.success("Solicitação enviada à administração. A conta ainda não foi excluída.");
			await qc.invalidateQueries({ queryKey: ["athlete-portal"] });
		}
	}
	if (!hasAccountSetup(user?.user_metadata)) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthLayout, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccountSetup, {}) });
	(0,import_react.useEffect)(()=>{if(!profile?.athlete_registered_at)return;const incoming=new URLSearchParams(location.search).get('convite');if((incoming&&/^[a-f0-9]{64}$/.test(incoming))||sessionStorage.getItem('laes-team-link'))setTab('invites');else if(sessionStorage.getItem('laes-team-intent'))setTab('activity')},[profile?.athlete_registered_at]);
	if (!profile?.athlete_registered_at) return (0,import_jsx_runtime.jsx)(AthleteRegistration, {});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PortalPresence, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "bg-[#F5F4EE] px-4 py-6 sm:px-6 lg:py-8",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tabs, {
			value: tab,
			onValueChange: setTab,
			className: "laes-athlete-dashboard mx-auto grid max-w-[1440px] items-start gap-6 lg:grid-cols-[230px_minmax(0,1fr)]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
				className: "rounded-3xl bg-black p-4 text-white lg:sticky lg:top-28",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-5 hidden border-b border-white/15 px-3 pb-5 lg:block",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[10px] font-bold uppercase tracking-[0.25em] text-[#E08821]",
							children: "Área do jogador"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-xl font-bold",
							children: "Sua base. Sua liga."
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsList, {
						"aria-label": "Navegação do painel",
						className: "flex h-auto w-full justify-start gap-2 overflow-x-auto rounded-none bg-transparent p-0 lg:flex-col",
						children: [
							[
								"home",
								"Início",
								LayoutDashboard
							],
							[
								"community",
								"Comunidade",
								UsersRound
							],
							[
								"team",
								"Minha equipe",
								Shield
							],
							[
								"invites",
								"Convites",
								Mail
							],
							[
								"activity",
								"Atividade",
								Bell
							],
							[
								"profile",
								"Meu perfil",
								UserRound
							],
							
							[
								"account",
								"Configurações",
								Settings
							]
						].map(([value, label, Icon]) => {
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsTrigger, {
								value: String(value),
								className: "flex shrink-0 items-center justify-start gap-3 rounded-xl px-4 py-3 text-white/65 data-[state=active]:bg-[#E08821] data-[state=active]:text-black lg:w-full",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-4" }),
									String(label),
									value === "invites" && !!q.data?.invites.filter((i) => i.status === "pendente").length && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "ml-auto rounded-full bg-[#A21F25] px-2 text-xs text-white",
										children: q.data.invites.filter((i) => i.status === "pendente").length
									})
								]
							}, String(value));
						})
					}),
					isStaff && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						variant: "outline",
						className: "mt-6 hidden w-full border-white/20 bg-transparent text-white hover:bg-white/10 hover:text-white lg:flex",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/admin",
							children: ["Administração ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-4" })]
						})
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "min-w-0",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CaptainAcceptance, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
						className: "relative mb-6 overflow-hidden rounded-3xl border border-black/10 bg-[#ECEADB] p-6 sm:p-8",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap items-start justify-between gap-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex min-w-0 items-center gap-4 sm:gap-5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccountAvatar, { className: "!size-16 shrink-0 border-white sm:!size-20" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "min-w-0",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-[10px] font-bold uppercase tracking-[0.22em] text-primary",
											children: "Sua base em Alfenas"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
											className: "mt-2 break-words text-2xl font-bold leading-tight sm:text-4xl",
											children: [
												"Bom te ver, ",
												profile?.nick || user?.user_metadata?.["display_name"] || "atleta",
												"."
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-2 text-sm text-black/60",
											children: "A próxima partida é melhor com a sua turma."
										})
									]
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								onClick: () => setTab("profile"),
								className: "inline-flex items-center gap-2 rounded-full border border-black/15 bg-white/60 px-4 py-2.5 text-xs font-semibold hover:bg-white",
								children: ["Meu perfil", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserRound, { size: 14 })]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-black/10 pt-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex flex-wrap gap-2",
								children: games.data?.length ? games.data.map((g) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "rounded-full bg-white/70 px-3 py-1.5 text-xs font-semibold",
									children: g.modalities?.name || "Minha modalidade"
								}, g.modality_id)) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs text-black/60",
									children: "Qual é o seu jogo? Complete suas modalidades."
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								className: "inline-flex items-center gap-2 text-sm font-bold text-primary",
								onClick: () => setTab("community"),
								children: ["Encontrar minha turma", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { size: 16 })]
							})]
						})]
					}),
					isStaff && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						variant: "outline",
						className: "mb-5 lg:hidden",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/admin",
							children: "Abrir administração"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
						value: "home",
						className: "space-y-6",
						children: q.isError ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ErrorNote, { error: q.error }) : q.isPending ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Loading, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CommunityPreview, { onOpen: () => setTab("community") }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid gap-4 sm:grid-cols-3",
								children: [
									[
										"Equipes",
										q.data.teams.length,
										"team",
										Shield
									],
									[
										"Convites pendentes",
										q.data.invites.filter((i) => i.status === "pendente").length,
										"invites",
										Mail
									],
									[
										"Modalidades",
										games.isError ? "—" : games.isPending ? "…" : new Set(games.data?.map((g) => g.modality_id)).size,
										"games",
										Gamepad2
									]
								].map(([label, count, target, Icon]) => {
									return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										onClick: () => setTab(String(target)),
										className: "rounded-2xl border border-black/10 bg-white p-5 text-left transition-colors hover:border-[#E08821] focus-visible:outline-2 focus-visible:outline-primary",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center justify-between text-muted-foreground",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-sm",
												children: String(label)
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-5 text-[#A21F25]" })]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-4 text-3xl font-bold",
											children: String(count)
										})]
									}, String(target));
								})
							}),
							!profile?.onboarded && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-[#E08821]/30 bg-[#E08821]/10 p-5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "font-bold",
									children: "Vamos completar sua ficha?"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-sm",
									children: "Conte quais jogos você joga e prepare seu perfil para a liga."
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									onClick: () => setTab("profile"),
									children: "Completar perfil"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid gap-5 xl:grid-cols-[1.1fr_0.9fr]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
									className: "rounded-3xl border border-black/10 bg-white p-6",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center justify-between",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
											className: "text-xl font-bold",
											children: "Minha equipe"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shield, { className: "size-5 text-[#E08821]" })]
									}), q.data.teams.length ? q.data.teams.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-5 flex items-center gap-4 rounded-2xl bg-[#F5F4EE] p-4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TeamLogo, {
											name: m.teams?.name || "Equipe",
											className: "size-20 shrink-0"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
												className: "font-bold",
												children: m.teams?.name
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
												className: "mt-1 text-xs text-muted-foreground",
												children: [memberTypeLabel[m.member_type], m.is_captain ? " · Capitão" : ""]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												onClick: () => setTab("team"),
												className: "mt-2 text-sm font-bold text-primary",
												children: "Ver equipe →"
											})
										] })]
									}, m.id)) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-5 rounded-2xl border border-dashed p-6",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "font-bold",
												children: "Seu próximo time pode estar aqui."
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-2 text-sm text-muted-foreground",
												children: "Conheça os jogadores e acompanhe as vagas das equipes."
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
												asChild: true,
												variant: "outline",
												className: "mt-5",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
													to: "/equipes",
													children: ["Explorar vagas ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-4" })]
												})
											})
										]
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
									className: "rounded-3xl bg-black p-6 text-white",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-[10px] uppercase tracking-[0.2em] text-[#E08821]",
											children: "Alfenas joga junto"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
											className: "mt-4 text-2xl font-bold",
											children: [
												"Uma comunidade.",
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
												"Muitas possibilidades."
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-4 text-sm leading-relaxed text-white/65",
											children: "Encontre quem joga a sua modalidade e acompanhe o movimento da liga."
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
											onClick: () => setTab("community"),
											className: "mt-6 bg-[#E08821] text-black hover:bg-[#E08821]/90",
											children: ["Explorar comunidade ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-4" })]
										})
									]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
								className: "rounded-3xl border border-black/10 bg-white p-6",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "text-xl font-bold",
									children: "Últimos avisos"
								}), q.data.notices.length ? q.data.notices.slice(0, 3).map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
									className: "mt-4 border-t pt-4",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-xs text-muted-foreground",
											children: formatDate(n.created_at)
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "mt-1 font-bold",
											children: n.title
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-2 line-clamp-3 text-sm text-muted-foreground",
											children: n.body
										})
									]
								}, n.id)) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-4 text-sm text-muted-foreground",
									children: "Tudo em dia. Os próximos avisos da liga aparecem aqui."
								})]
							})
						] })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
						value: "community",
						className: "rounded-3xl border border-black/10 bg-white p-5 sm:p-7",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Community, { mode: "directory" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsContent, {
						value: "team",
						className: "space-y-6",
						children: (0,import_jsx_runtime.jsx)(AthleteTeamSection,{section:"teams"})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
						value: "invites",
						className: "rounded-3xl border bg-white p-6",
						children: (0,import_jsx_runtime.jsx)(AthleteTeamSection,{section:"invites"})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
						value: "profile",
						className: "rounded-3xl border bg-white p-6 sm:p-8",
						children: /* @__PURE__ */ (0,import_jsx_runtime.jsx)(AthleteProfile,{onEdit:()=>setTab('account')})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
						value: "games",
						className: "rounded-3xl border bg-white p-6 sm:p-8",
						children: /* @__PURE__ */ (0,import_jsx_runtime.jsx)(AthleteRegistration,{editing:true,onSaved:()=>Promise.all([qc.invalidateQueries({queryKey:['panel-games']}),qc.invalidateQueries({queryKey:['athlete-portal']}),qc.invalidateQueries({queryKey:['community']})])})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsContent, {
						value: "account",
						className: "rounded-3xl border bg-white p-6 sm:p-8",
						children: [(0,import_jsx_runtime.jsx)(AthleteRegistration,{editing:true,onSaved:()=>Promise.all([qc.invalidateQueries({queryKey:['panel-games']}),qc.invalidateQueries({queryKey:['athlete-portal']}),qc.invalidateQueries({queryKey:['community']})])}),(0,import_jsx_runtime.jsx)('hr',{className:'my-8 border-black/10'}),...[
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-2xl font-bold",
								children: "Segurança e acesso"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "my-5 rounded-2xl bg-[#F5F4EE] p-5",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs text-muted-foreground",
										children: "E-mail da sua conta · privado"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 break-all text-sm font-semibold",
										children: user.email
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 text-xs text-muted-foreground",
										children: "Usado para entrar e recuperar o acesso. Não aparece para a comunidade."
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								variant: "outline",
								className: "mb-6 rounded-full",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/redefinir-senha",
									children: "Definir ou alterar senha da LAES"
								})
							}),
							profile?.is_public && profile.nick && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/atletas/$nick",
								params: { nick: profile.nick },
								className: "block mb-5 text-primary underline",
								children: "Ver meu perfil público"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "destructive",
								disabled: busy || q.isPending || q.isError || !!q.data?.deletion.length,
								onClick: requestDeletion,
								children: q.data?.deletion.length ? "Exclusão solicitada" : "Solicitar exclusão da conta"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-sm",
								children: "A solicitação será analisada pela administração; este botão não exclui a conta imediatamente."
							})
						]]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
						value: "activity",
						className: "rounded-3xl border bg-white p-6 sm:p-8",
						children: (0,import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment,{children:[(0,import_jsx_runtime.jsx)(AthleteTeamSection,{section:'activity'}),q.isError ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ErrorNote, { error: q.error }) : q.isPending ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Loading, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-10",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mb-4 text-2xl font-bold",
								children: "Candidaturas"
							}), q.data.apps.length ? q.data.apps.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
								className: "mb-3 grid gap-3 border-l-4 border-primary bg-card p-4",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
										className: "font-bold",
										children: [
											a.openings?.teams?.name,
											" · ",
											a.openings?.role_name
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: applicationStatusLabel[a.status] }),
									a.reviewer_note && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: ["Retorno da equipe: ", a.reviewer_note] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex flex-wrap gap-3",
										children: [a.status === "aprovado" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
											disabled: busy,
											onClick: () => action("confirm_application", a.id),
											children: "Aceitar vaga e entrar no elenco"
										}), [
											"enviada",
											"em_analise",
											"aprovado"
										].includes(a.status) && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
											variant: "outline",
											disabled: busy,
											onClick: () => action("cancel_application", a.id),
											children: "Cancelar candidatura"
										})]
									})
								]
							}, a.id)) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Empty, { title: "Nenhuma candidatura enviada" })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mb-4 text-2xl font-bold",
								children: "Avisos"
							}), q.data.notices.length ? q.data.notices.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
								className: "mb-3 bg-card p-4",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs",
										children: formatDate(n.created_at)
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "font-bold",
										children: n.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "whitespace-pre-wrap",
										children: n.body
									})
								]
							}, n.id)) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Empty, { title: "Nenhum aviso no momento" })] })]
						})]})
					})
				]
			})]
		})
	})] });
}
var SplitComponent = (props) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RememberCaptainLink, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Gate, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Portal, props) })] });
//#endregion
export { SplitComponent as component };

function laesPanelTab(uid){const [tab,setTab]=import_react.useState(()=>{if(typeof sessionStorage==='undefined')return 'home';const saved=sessionStorage.getItem('laes-panel-tab:'+uid);return ['home','community','team','invites','activity','profile','account'].includes(saved)?saved:'home'});return [tab,value=>{sessionStorage.setItem('laes-panel-tab:'+uid,value);setTab(value)}]}
