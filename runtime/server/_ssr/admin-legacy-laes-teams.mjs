import { r as __toESM } from "../_runtime.mjs";
import { r as supabase } from "./backend-mB6vbMUi.mjs";
import { m as require_react, p as require_jsx_runtime } from "../_libs/@radix-ui/react-avatar+[...].mjs";
import { i as useQueryClient, n as useQuery } from "../_libs/tanstack__react-query.mjs";
import { E as fromLocalInput, M as toLocalInput, P as useAuth, i as ErrorNote, j as safeUrl, l as Loading, m as Section, o as Field, p as PageHero, r as Empty, s as Gate } from "./Logo-DncJtcSp.mjs";
import { t as Button } from "./button-tsOZyY2X.mjs";
import { t as uploadImage } from "./upload-DbWbY1XA.mjs";
import { n as toast } from "../_libs/sonner.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin-CnrcoRcD.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var f = (key, label, extra = {}) => ({
	key,
	label,
	...extra
});
var mod = f("modality_id", "Modalidade", {
	source: "modalities",
	required: true
});
var team = f("team_id", "Equipe", {
	source: "teams",
	required: true
});
var user = f("user_id", "Atleta", {
	source: "profiles",
	required: true
});
var active = f("active", "Ativo", {
	type: "boolean",
	default: true
});
var sort = f("sort", "Ordem", {
	type: "number",
	default: 0
});
var member = f("member_type", "Tipo de integrante", {
	options: [
		"titular",
		"reserva",
		"coach",
		"comissao"
	],
	required: true,
	default: "titular"
});
var resources = [
	{
		table: "teams",
		adminOnly: true,
		label: "Equipes",
		search: "name",
		scope: "team",
		fields: [
			f("name", "Nome", { required: true }),
			f("slug", "Endereço (slug)", { required: true }),
			mod,
			f("category", "Categoria"),
			f("description", "Apresentação", { type: "textarea" }),
			f("logo_url", "Logo", { type: "image" }),
			f("recruitment", "Recrutamento", {
				options: [
					"aberto",
					"fechado",
					"em_breve"
				],
				default: "fechado"
			}),
			f("featured", "Destaque", { type: "boolean" }),
			active,
			sort
		]
	},
	{
		table: "team_members",
		adminOnly: true,
		label: "Elencos",
		search: "display_name",
		scope: "team",
		fields: [
			team,
			f("display_name", "Nick / nome público", { required: true }),
			f("user_id", "Conta vinculada (opcional)", { source: "profiles" }),
			member,
			f("role_name", "Função"),
			f("is_captain", "Identificar como capitão", { type: "boolean" }),
			sort
		]
	},
	{
		table: "openings",
		label: "Vagas",
		search: "role_name",
		scope: "team",
		fields: [
			team,
			f("role_name", "Função", { required: true }),
			member,
			f("requirements", "Requisitos", { type: "textarea" }),
			f("availability", "Disponibilidade", { type: "textarea" }),
			f("is_open", "Vaga aberta", {
				type: "boolean",
				default: true
			})
		]
	},
	{
		table: "applications",
		label: "Candidaturas",
		scope: "team",
		noDelete: true,
		noEdit: false,
		fields: [f("status", "Avaliação", {
			options: [
				"em_analise",
				"aprovado",
				"recusado"
			],
			required: true
		}), f("reviewer_note", "Retorno para o atleta", { type: "textarea" })]
	},
	{
		table: "invites",
		label: "Convites",
		scope: "team",
		noEdit: true,
		noDelete: true,
		fields: [
			team,
			user,
			member,
			f("role_name", "Função"),
			f("message", "Mensagem", { type: "textarea" })
		]
	},
	{
		table: "notices",
		label: "Avisos",
		search: "title",
		scope: "team",
		fields: [
			f("title", "Título", { required: true }),
			f("body", "Mensagem", {
				type: "textarea",
				required: true
			}),
			f("team_id", "Equipe (vazio: aviso geral)", { source: "teams" })
		]
	},
	{
		table: "tournaments",
		label: "Agenda / Campeonatos",
		search: "name",
		scope: "modality",
		fields: [
			f("name", "Nome", { required: true }),
			mod,
			f("category", "Categoria"),
			f("organizer", "Organizador"),
			f("platform", "Plataforma (ex.: Champions Den, ChallengerMode)"),
			f("logo_url", "Logo", { type: "image" }),
			f("is_laes", "Organizado pela LAES", { type: "boolean" }),
			f("starts_at", "Início (Brasília)", { type: "datetime" }),
			f("registration_deadline", "Inscrições até (Brasília)", { type: "datetime" }),
			f("until_full", "Até as vagas esgotarem", { type: "boolean" }),
			f("fee", "Taxa de inscrição"),
			f("prize", "Premiação", { type: "textarea" }),
			f("rules", "Regulamento", { type: "textarea" }),
			f("rules_url", "Link do regulamento", { type: "url" }),
			f("external_url", "Página oficial", { type: "url" }),
			f("status", "Situação", {
				options: [
					"em_breve",
					"inscricoes_abertas",
					"inscricoes_encerradas",
					"em_andamento",
					"encerrado",
					"cancelado"
				],
				default: "em_breve"
			}),
			f("published", "Publicado na plataforma", { type: "boolean" })
		]
	},
	{
		table: "tournament_teams",
		key: "tournament_id",
		label: "Participações",
		scope: "modality",
		noEdit: true,
		fields: [f("tournament_id", "Campeonato", {
			source: "tournaments",
			required: true
		}), team]
	},
	{
		table: "modalities",
		label: "Modalidades",
		search: "name",
		scope: "modality",
		fields: [
			f("name", "Nome", { required: true }),
			f("slug", "Endereço (slug)", { required: true }),
			f("short_name", "Abreviação"),
			f("description", "Descrição", { type: "textarea" }),
			f("categories", "Categorias (separadas por vírgula)", { type: "array" }),
			active,
			sort
		]
	},
	{
		table: "modality_roles",
		label: "Funções por modalidade",
		search: "name",
		scope: "modality",
		fields: [
			mod,
			f("name", "Função", { required: true }),
			sort
		]
	},
	{
		table: "profiles",
		label: "Atletas",
		search: "nick",
		adminOnly: true,
		readonly: true,
		fields: []
	},
	{
		table: "user_roles",
		label: "Administradores gerais",
		adminOnly: true,
		noEdit: true,
		fields: [user, f("role", "Permissão", {
			options: ["admin"],
			default: "admin",
			required: true
		})]
	},
	{
		table: "modality_admins",
		label: "Administradores de modalidade",
		adminOnly: true,
		noEdit: true,
		fields: [user, mod]
	},
	{
		table: "team_captains",
		adminOnly: true,
		label: "Capitães com acesso",
		scope: "team",
		noEdit: true,
		fields: [user, team]
	},
	{
		table: "news",
		label: "Notícias",
		search: "title",
		adminOnly: true,
		fields: [
			f("title", "Título", { required: true }),
			f("slug", "Endereço (slug)", { required: true }),
			f("excerpt", "Resumo", { type: "textarea" }),
			f("body", "Texto da notícia", {
				type: "textarea",
				required: true
			}),
			f("cover_url", "Imagem de capa", { type: "image" }),
			f("category", "Categoria", {
				options: [
					"anuncios",
					"equipes",
					"campeonatos",
					"comunidade"
				],
				default: "anuncios"
			}),
			f("modality_id", "Modalidade (opcional)", { source: "modalities" }),
			f("team_id", "Equipe (opcional)", { source: "teams" }),
			f("published_at", "Data de publicação (Brasília)", { type: "datetime" }),
			f("published", "Publicado na plataforma", { type: "boolean" })
		]
	},
	{
		table: "partners",
		label: "Parceiros e patrocinadores",
		search: "name",
		adminOnly: true,
		fields: [
			f("kind", "Tipo de vínculo", {
				options: ["organizacao", "patrocinador"],
				default: "organizacao",
				required: true
			}),
			f("name", "Nome", { required: true }),
			f("logo_url", "Logo", { type: "image" }),
			f("url", "Site", { type: "url" }),
			f("description", "Descrição", { type: "textarea" }),
			active,
			sort
		]
	},
	{
		table: "banners",
		label: "Banners",
		search: "title",
		adminOnly: true,
		fields: [
			f("title", "Título", { required: true }),
			f("subtitle", "Subtítulo"),
			f("image_url", "Imagem", { type: "image" }),
			f("link_label", "Texto do botão"),
			f("link_url", "Link", { type: "url" }),
			active,
			sort
		]
	},
	{
		table: "site_settings",
		label: "Configurações do site",
		adminOnly: true,
		key: "key",
		search: "key",
		noDelete: true,
		fields: [f("key", "Configuração", {
			options: [
				"instagram",
				"facebook",
				"whatsapp",
				"discord",
				"commercial_email",
				"logo_url",
				"mission",
				"values",
				"about"
			],
			required: true
		}), f("value", "Valor (URL completa para Facebook, WhatsApp, Discord e logo)", { type: "textarea" })]
	},
	{
		table: "partnership_requests",
		label: "Propostas de parceria",
		adminOnly: true,
		noDelete: true,
		fields: [f("handled", "Atendida", { type: "boolean" })]
	},
	{
		table: "deletion_requests",
		label: "Pedidos de exclusão",
		adminOnly: true,
		readonly: true,
		fields: []
	},
	{
		table: "audit_log",
		label: "Histórico administrativo",
		adminOnly: true,
		readonly: true,
		fields: []
	}
];
function Admin() {
	const a = useAuth();
	const [selected, setSelected] = (0, import_react.useState)("teams");
	const available = resources.filter((r) => !r.adminOnly || a.isAdmin).filter((r) => a.isAdmin || a.modalityAdminIds.length || ![
		"modalities",
		"modality_roles",
		"tournaments",
		"tournament_teams",
		"team_captains"
	].includes(r.table));
	const resource = available.find((r) => r.table === selected) ?? available[0];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		title: "Administração",
		eyebrow: "Gestão da LAES",
		children: "Gerencie somente os dados sob sua responsabilidade. As permissões são verificadas pelo banco de dados."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-8 lg:grid-cols-[240px_1fr]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
			"aria-label": "Áreas administrativas",
			className: "flex flex-wrap content-start gap-2 lg:flex-col",
			children: available.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				variant: resource.table === r.table ? "default" : "outline",
				className: "justify-start",
				onClick: () => setSelected(r.table),
				children: r.label
			}, r.table))
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [resource.table === "tournaments" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-6 rounded-2xl border border-primary/20 bg-secondary p-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-xl font-bold",
					children: "Sua agenda competitiva"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm leading-relaxed",
					children: "Cadastre a modalidade, logo, plataforma, situação, prazo de inscrição, taxa, premiação e regulamento. Marque “Publicado na plataforma” para exibir na agenda; desmarque para manter como rascunho. Para torneios externos, deixe “Organizado pela LAES” desmarcado."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-sm",
					children: "Depois, use “Participações” para vincular as equipes confirmadas da liga ao campeonato."
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResourcePanel, { resource }, resource.table)] })]
	}) })] });
}
function ResourcePanel({ resource: r }) {
	const a = useAuth(), qc = useQueryClient();
	const [page, setPage] = (0, import_react.useState)(0), [search, setSearch] = (0, import_react.useState)(""), [mod, setMod] = (0, import_react.useState)(""), [editing, setEditing] = (0, import_react.useState)(null), [busy, setBusy] = (0, import_react.useState)(false);
	const lookups = useQuery({
		queryKey: ["admin-lookups", a.user.id],
		queryFn: async () => {
			const [m, t, p, c] = await Promise.all([
				supabase.from("modalities").select("id,name"),
				supabase.from("teams").select("id,name,modality_id"),
				supabase.from("profiles").select("id,nick"),
				supabase.from("tournaments").select("id,name,modality_id")
			]);
			for (const q of [
				m,
				t,
				p,
				c
			]) if (q.error) throw q.error;
			return {
				modalities: m.data,
				teams: t.data,
				profiles: p.data.map((x) => ({
					id: x.id,
					name: x.nick ?? "Sem nick"
				})),
				tournaments: c.data
			};
		}
	});
	const teams = lookups.data?.teams.filter((t) => a.isAdmin || a.captainTeamIds.includes(t.id) || a.modalityAdminIds.includes(t.modality_id)) ?? [];
	const allowedMods = lookups.data?.modalities.filter((m) => a.isAdmin || a.modalityAdminIds.includes(m.id)) ?? [];
	const q = useQuery({
		queryKey: [
			"admin",
			r.table,
			a.user.id,
			page,
			search,
			mod
		],
		enabled: !!lookups.data,
		queryFn: async () => {
			let query = supabase.from(r.table).select("*", { count: "exact" });
			if (!a.isAdmin) {
				if (r.table === "teams") query = query.in("id", teams.map((t) => t.id));
				else if (r.table === "modalities") query = query.in("id", a.modalityAdminIds);
				else if (["modality_roles", "tournaments"].includes(r.table)) query = query.in("modality_id", a.modalityAdminIds);
				else if ([
					"team_members",
					"openings",
					"invites",
					"notices",
					"team_captains"
				].includes(r.table)) query = query.in("team_id", teams.map((t) => t.id));
				else if (r.table === "applications") {
					const openings = await supabase.from("openings").select("id").in("team_id", teams.map((t) => t.id));
					if (openings.error) throw openings.error;
					query = query.in("opening_id", openings.data.map((o) => o.id));
				} else if (r.table === "tournament_teams") query = query.in("tournament_id", (lookups.data?.tournaments ?? []).filter((t) => a.modalityAdminIds.includes(t.modality_id)).map((t) => t.id));
			}
			if (search && r.search) query = query.ilike(r.search, "%" + search.replace(/[%_]/g, "") + "%");
			if (mod && [
				"teams",
				"tournaments",
				"modality_roles"
			].includes(r.table)) query = query.eq("modality_id", mod);
			const result = await query.order(r.key ?? "id", { ascending: r.table !== "audit_log" }).range(page * 15, page * 15 + 14);
			if (result.error) throw result.error;
			return {
				rows: result.data,
				count: result.count ?? 0
			};
		}
	});
	function options(field) {
		if (!field.source) return [];
		if (field.source === "teams") return r.table === "tournament_teams" ? lookups.data?.teams ?? [] : teams;
		if (field.source === "modalities") return a.isAdmin ? lookups.data?.modalities ?? [] : lookups.data?.modalities.filter((m) => a.modalityAdminIds.includes(m.id) || r.table === "teams" && editing?.["modality_id"] === m.id) ?? [];
		if (field.source === "tournaments") return lookups.data?.tournaments.filter((t) => a.isAdmin || a.modalityAdminIds.includes(t.modality_id)) ?? [];
		return lookups.data?.[field.source] ?? [];
	}
	async function save(e) {
		e.preventDefault();
		if (!editing) return;
		const form = new FormData(e.currentTarget);
		const payload = {};
		setBusy(true);
		try {
			for (const f of r.fields) {
				const v = form.get(f.key);
				if (f.type === "boolean") payload[f.key] = v === "on";
				else if (f.type === "number") payload[f.key] = Number(v || 0);
				else if (f.type === "datetime") payload[f.key] = fromLocalInput(String(v ?? ""));
				else if (f.type === "array") payload[f.key] = String(v ?? "").split(",").map((x) => x.trim()).filter(Boolean);
				else if (f.type === "image") {
					const file = form.get(f.key + "_file");
					payload[f.key] = file instanceof File && file.size ? await uploadImage(file, "content", a.user.id) : String(v ?? "").trim() || null;
				} else payload[f.key] = String(v ?? "").trim() || null;
				if (f.required && !payload[f.key]) throw Error("Preencha " + f.label);
				if ((f.type === "url" || f.type === "image") && payload[f.key] && !(String(payload[f.key]).startsWith("storage://media/") || safeUrl(String(payload[f.key])))) throw Error("Use um endereço https:// válido em " + f.label);
			}
			if (r.table === "site_settings" && payload["key"] === "logo_url" && payload["value"] && !safeUrl(String(payload["value"]))) throw Error("Informe uma URL https:// válida para a logo.");
			if (r.table === "tournaments" && payload["until_full"]) payload["registration_deadline"] = null;
			if (r.table === "news" && payload["published"] && !payload["published_at"]) payload["published_at"] = (/* @__PURE__ */ new Date()).toISOString();
			const key = r.key ?? "id";
			const existing = editing[key];
			if (r.table === "user_roles" && !window.confirm("Conceder acesso administrativo geral a este usuário?")) return;
			const result = existing ? await supabase.from(r.table).update(payload).eq(key, existing).select(key) : await supabase.from(r.table).insert(payload).select(key);
			if (result.error) throw result.error;
			if (!result.data?.length) throw Error("Nenhum registro alterado. Verifique sua permissão.");
			toast.success("Salvo.");
			setEditing(null);
			await qc.invalidateQueries();
		} catch (e) {
			toast.error(e instanceof Error ? e.message : "Não foi possível salvar. Confira os campos e sua permissão.");
		} finally {
			setBusy(false);
		}
	}
	async function remove(row) {
		if (!window.confirm("Excluir este registro? Registros relacionados também podem ser removidos.")) return;
		setBusy(true);
		let query = supabase.from(r.table).delete();
		if (r.table === "tournament_teams") query = query.eq("tournament_id", String(row["tournament_id"])).eq("team_id", String(row["team_id"]));
		else query = query.eq(r.key ?? "id", row[r.key ?? "id"]);
		const result = await query.select();
		setBusy(false);
		if (result.error || !result.data?.length) toast.error("Não foi possível excluir. Verifique vínculos e permissões.");
		else {
			toast.success("Excluído.");
			await qc.invalidateQueries();
		}
	}
	function display(key, value) {
		if (value == null || value === "") return "—";
		const found = (key === "user_id" || key === "actor_id" ? lookups.data?.profiles : key === "team_id" ? lookups.data?.teams : key === "modality_id" ? lookups.data?.modalities : key === "tournament_id" ? lookups.data?.tournaments : void 0)?.find((x) => x.id === value);
		if (found) return found.name;
		if (typeof value === "boolean") return value ? "Sim" : "Não";
		if (typeof value === "object") return JSON.stringify(value);
		return String(value);
	}
	const columns = q.data?.rows.length ? Object.keys(q.data.rows[0]).filter((k) => ![
		"id",
		"created_by",
		"updated_at"
	].includes(k)) : [];
	const canCreate = !r.readonly && ![
		"profiles",
		"applications",
		"partnership_requests",
		"deletion_requests",
		"audit_log"
	].includes(r.table) && (a.isAdmin || !["modalities", "teams"].includes(r.table) || a.modalityAdminIds.length > 0);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-w-0",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mb-5 text-2xl font-bold",
				children: r.label
			}),
			r.table === "deletion_requests" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mb-5 text-sm",
				children: "Pedidos de exclusão devem ser executados no backend por um administrador autorizado. Não marque como concluído antes de excluir a conta e tratar os dados relacionados."
			}),
			r.table === "user_roles" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mb-5 text-sm",
				children: "O primeiro administrador é atribuído no backend. Somente administradores existentes podem conceder este acesso."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-5 flex flex-wrap gap-3",
				children: [
					r.search && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						className: "w-full rounded border border-input bg-background px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary max-w-xs",
						"aria-label": "Buscar registros",
						placeholder: "Buscar…",
						value: search,
						onChange: (e) => {
							setSearch(e.target.value);
							setPage(0);
						}
					}),
					[
						"teams",
						"tournaments",
						"modality_roles"
					].includes(r.table) && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
						"aria-label": "Filtrar modalidade",
						className: "w-full rounded border border-input bg-background px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary max-w-xs",
						value: mod,
						onChange: (e) => {
							setMod(e.target.value);
							setPage(0);
						},
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: "",
							children: "Todas as modalidades"
						}), (a.isAdmin ? lookups.data?.modalities : allowedMods)?.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: m.id,
							children: m.name
						}, m.id))]
					}),
					canCreate && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						onClick: () => setEditing({}),
						children: r.table === "tournaments" ? "Novo campeonato" : "Adicionar"
					})
				]
			}),
			editing && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				onSubmit: save,
				className: "mb-8 grid gap-4 border-t-4 border-primary bg-card p-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-bold",
						children: editing[r.key ?? "id"] ? "Editar registro" : "Novo registro"
					}),
					r.fields.map((f) => {
						const value = editing[f.key] ?? f.default ?? "";
						return f.type === "boolean" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "flex gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "checkbox",
								name: f.key,
								defaultChecked: Boolean(value)
							}), f.label]
						}, f.key) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Field, {
							label: f.label,
							children: [f.source || f.options ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
								name: f.key,
								required: f.required,
								defaultValue: String(value),
								className: "w-full rounded border border-input bg-background px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "",
									children: "Selecione"
								}), f.options ? f.options.map((v) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: v }, v)) : options(f).map((o) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: o.id,
									children: o.name
								}, o.id))]
							}) : f.type === "textarea" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
								name: f.key,
								defaultValue: String(value),
								required: f.required,
								rows: f.key === "body" ? 10 : 3,
								maxLength: 3e4,
								className: "w-full rounded border border-input bg-background px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								name: f.key,
								required: f.required,
								type: f.type === "number" ? "number" : f.type === "datetime" ? "datetime-local" : f.type === "url" ? "url" : "text",
								defaultValue: f.type === "datetime" ? toLocalInput(String(value)) : Array.isArray(value) ? value.join(", ") : String(value),
								maxLength: f.type === "number" || f.type === "datetime" ? void 0 : 2e3,
								className: "w-full rounded border border-input bg-background px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
							}), f.type === "image" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "file",
								name: f.key + "_file",
								accept: "image/png,image/jpeg,image/webp",
								"aria-label": "Enviar " + f.label
							})]
						}, f.key);
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							disabled: busy,
							children: busy ? "Salvando…" : "Salvar"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "outline",
							type: "button",
							disabled: busy,
							onClick: () => setEditing(null),
							children: "Cancelar"
						})]
					})
				]
			}),
			lookups.isError ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ErrorNote, { error: lookups.error }) : q.isError ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ErrorNote, { error: q.error }) : q.isPending ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Loading, {}) : !q.data.rows.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Empty, { title: "Nenhum registro encontrado" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "overflow-x-auto",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
					className: "w-full text-left text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [columns.map((k) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
						className: "border-b p-3",
						children: r.fields.find((f) => f.key === k)?.label ?? {
							created_at: "Criado em",
							status: "Situação",
							nick: "Nick",
							full_name: "Nome completo",
							message: "Mensagem",
							email: "E-mail",
							name: "Nome",
							company: "Empresa",
							phone: "Telefone",
							opening_id: "Vaga",
							user_id: "Atleta",
							team_id: "Equipe",
							action: "Ação",
							entity: "Registro",
							actor_id: "Responsável",
							details: "Detalhes"
						}[k] ?? k
					}, k)), !r.readonly && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
						className: "p-3",
						children: "Ações"
					})] }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: q.data.rows.map((row, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [columns.map((k) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
						className: "max-w-xs border-b p-3",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "max-h-32 overflow-auto break-words",
							children: display(k, row[k])
						})
					}, k)), !r.readonly && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
						className: "border-b p-3",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex gap-2",
							children: [!r.noEdit && !(r.table === "applications" && ["cancelado", "confirmado"].includes(String(row["status"]))) && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "outline",
								size: "sm",
								disabled: busy,
								onClick: () => setEditing(row),
								children: "Editar"
							}), !r.noDelete && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "destructive",
								size: "sm",
								disabled: busy,
								onClick: () => remove(row),
								children: "Excluir"
							})]
						})
					})] }, String(row["id"] ?? row["key"] ?? i))) })]
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-5 flex items-center gap-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "outline",
						disabled: page === 0,
						onClick: () => setPage((p) => p - 1),
						children: "Anterior"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
						"Página ",
						page + 1,
						" · ",
						q.data.count,
						" registros"
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "outline",
						disabled: (page + 1) * 15 >= q.data.count,
						onClick: () => setPage((p) => p + 1),
						children: "Próxima"
					})
				]
			})] })
		]
	});
}
var SplitComponent = () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Gate, {
	staff: true,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Admin, {})
});
//#endregion
export { SplitComponent as component };
