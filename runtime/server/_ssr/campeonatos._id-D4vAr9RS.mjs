import {laesTournamentDate} from "./Logo-DncJtcSp.mjs";
import { r as supabase } from "./backend-mB6vbMUi.mjs";
import { p as require_jsx_runtime } from "../_libs/@radix-ui/react-avatar+[...].mjs";
import { n as useQuery } from "../_libs/tanstack__react-query.mjs";
import { N as tournamentStatusLabel, T as formatDateTime, _ as TeamLogo, a as ExternalLink, g as TeamCard, h as SectionTitle, i as ErrorNote, l as Loading, m as Section, p as PageHero, r as Empty } from "./Logo-DncJtcSp.mjs";
import { t as Route } from "./campeonatos._id-DZNXsu2L.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/campeonatos._id-D4vAr9RS.js
var import_jsx_runtime = require_jsx_runtime();
function Tournament() {
	const { id } = Route.useParams();
	const q = useQuery({
		queryKey: ["tournament", id],
		queryFn: async () => {
			const t = await supabase.from("tournaments").select("*,modalities(name)").eq("id", id).eq("published", true).maybeSingle();
			if (t.error) throw t.error;
			if (!t.data) return null;
			const teams = await supabase.from("tournament_teams").select("teams(*,modalities(name,slug))").eq("tournament_id", id);
			if (teams.error) throw teams.error;
			return {
				t: t.data,
				teams: teams.data
			};
		}
	});
	if (q.isError) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ErrorNote, { error: q.error }) });
	if (q.isPending) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Loading, {});
	if (!q.data) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Empty, { title: "Campeonato não encontrado" }) });
	const { t, teams } = q.data;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageHero, {
		title: t.name,
		eyebrow: t.modalities?.name,
		children: [
			tournamentStatusLabel[t.status],
			" ·",
			" ",
			t.is_laes ? "Organizado pela LAES" : "Campeonato externo"
		]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TeamLogo, {
			url: t.logo_url,
			name: t.name,
			className: "mb-8 size-32 tc-logo-detail"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
			className: "grid gap-5 sm:grid-cols-2",
			children: [
				["Organizador", t.organizer || "A definir"],
				["Plataforma", t.platform || "Não informada"],
				["Início", t.starts_at ? laesTournamentDate(t.starts_at) : "A definir"],
				["Inscrições até", t.until_full ? "Até as vagas esgotarem" : t.registration_deadline ? laesTournamentDate(t.registration_deadline) : "A definir"],
				["Taxa", t.fee || "A confirmar"],
				["Premiação", t.prize || "A confirmar"]
			].map(([label, value]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
				className: "font-bold",
				children: label
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
				className: "whitespace-pre-wrap",
				children: value
			})] }, label))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "my-6 whitespace-pre-wrap",
			children: t.rules
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex gap-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, {
				href: t.rules_url,
				children: "Regulamento"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, {
				href: t.external_url,
				children: "Página oficial / inscrições"
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-12",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, { title: "Equipes participantes da LAES" }), teams.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-2 gap-4 md:grid-cols-4",
				children: teams.map((x) => x.teams && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TeamCard, { team: x.teams }, x.teams.id))
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Empty, { title: "Participações serão anunciadas em breve" })]
		})
	] })] });
}
//#endregion
export { Tournament as component };
