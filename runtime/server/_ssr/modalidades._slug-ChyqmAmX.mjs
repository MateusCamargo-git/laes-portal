import {laesPublicTournament} from "./Logo-DncJtcSp.mjs";
import { r as supabase } from "./backend-mB6vbMUi.mjs";
import { p as require_jsx_runtime } from "../_libs/@radix-ui/react-avatar+[...].mjs";
import { b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as useQuery } from "../_libs/tanstack__react-query.mjs";
import { f as NewsCard, g as TeamCard, h as SectionTitle, i as ErrorNote, l as Loading, m as Section, n as Badge, p as PageHero, r as Empty, v as TournamentCard } from "./Logo-DncJtcSp.mjs";
import { t as Route } from "./modalidades._slug-CRyWS4BK.mjs";
import { t as ModalityLogo } from "./ModalityLogo-CaM1G7Zy.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/modalidades._slug-ChyqmAmX.js
var import_jsx_runtime = require_jsx_runtime();
function ModalityPage() {
	const { slug } = Route.useParams();
	const q = useQuery({
		queryKey: ["modality", slug],
		queryFn: async () => {
			const { data: m, error } = await supabase.from("modalities").select("*").eq("slug", slug).single();
			if (error) throw error;
			const [teams, openings, tournaments, news] = await Promise.all([
				supabase.from("teams").select("*, modalities(name,slug)").eq("modality_id", m.id).eq("active", true).order("sort"),
				supabase.from("openings").select("*, teams!inner(name,slug,modality_id)").eq("teams.modality_id", m.id).eq("is_open", true),
				supabase.from("tournaments").select("*, modalities(name)").eq("modality_id", m.id).eq("published", true).eq("status", "inscricoes_abertas").order("starts_at", { ascending: false }),
				supabase.from("news").select("*").eq("modality_id", m.id).eq("published", true).order("published_at", { ascending: false }).limit(3)
			]);
			return {
				m,
				teams: teams.data ?? [],
				openings: openings.data ?? [],
				tournaments: (tournaments.data ?? []).filter(laesPublicTournament).slice(0, 6),
				news: news.data ?? []
			};
		}
	});
	if (q.isError) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ErrorNote, { error: q.error }) });
	if (q.isLoading || !q.data) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Loading, {});
	const { m, teams, openings, tournaments, news } = q.data;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageHero, {
			eyebrow: "Modalidade",
			title: m.name,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ModalityLogo, {
					slug: m.slug,
					name: m.name,
					className: "mb-5 max-w-xs"
				}),
				m.description,
				m.categories.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-2 text-base",
					children: ["Categorias: ", m.categories.join(" · ")]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, { title: "Equipes" }), teams.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid grid-cols-2 gap-4 md:grid-cols-4",
			children: teams.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TeamCard, { team: t }, t.id))
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Empty, { title: "Ainda não há equipes nesta modalidade" })] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			className: "pt-0",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, { title: "Vagas abertas" }), openings.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-3 md:grid-cols-2",
				children: openings.map((o) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/equipes",
					className: "flex items-center justify-between bg-card p-4 hover:text-primary",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-display font-bold",
							children: o.role_name
						}),
						" · ",
						o.teams.name
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, { children: "Ver vaga" })]
				}, o.id))
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Empty, { title: "Nenhuma vaga aberta no momento" })]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
			className: "pt-0",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-12 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, { title: "Campeonatos" }), tournaments.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-3",
					children: tournaments.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TournamentCard, { t }, t.id))
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Empty, { title: "Nenhum campeonato cadastrado" })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, { title: "Notícias" }), news.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-4",
					children: news.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NewsCard, { n }, n.id))
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Empty, { title: "Nenhuma notícia relacionada" })] })]
			})
		})
	] });
}
//#endregion
export { ModalityPage as component };
