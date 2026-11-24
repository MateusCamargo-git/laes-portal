import { r as __toESM } from "../_runtime.mjs";
import { m as require_react, p as require_jsx_runtime } from "../_libs/@radix-ui/react-avatar+[...].mjs";
import { n as useQuery } from "../_libs/tanstack__react-query.mjs";
import { S as fieldClass, i as ErrorNote, l as Loading, m as Section, o as Field, p as PageHero, r as Empty, v as TournamentCard } from "./Logo-DncJtcSp.mjs";
import { t as modalitiesQuery } from "./settings-B6eNktqV.mjs";
import { r as tournamentsQuery } from "./catalog-ew-rK_t4.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/campeonatos.index-CULJ2LsQ.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Agenda() {
	const q = useQuery(tournamentsQuery), m = useQuery(modalitiesQuery);
	const [mod, setMod] = (0, import_react.useState)(""), [origin, setOrigin] = (0, import_react.useState)("");
	const rows = q.data?.filter((t) => (!mod || t.modality_id === mod) && (!origin || t.is_laes === (origin === "laes")));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, { title: "Agenda da liga",children:"Encontre campeonatos com inscrições abertas por modalidade." }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mb-8 grid gap-4 md:grid-cols-2",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: "Modalidade",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {"aria-label":"Modalidade",
					className: fieldClass,
					value: mod,
					onChange: (e) => setMod(e.target.value),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
						value: "",
						children: "Todas"
					}), m.data?.map((x) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
						value: x.id,
						children: x.name
					}, x.id))]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: "Organização",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {"aria-label":"Organização",
					className: fieldClass,
					value: origin,
					onChange: (e) => setOrigin(e.target.value),
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: "",
							children: "Todas"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: "laes",
							children: "LAES"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: "external",
							children: "Externa"
						})
					]
				})
			})
		]
	}), q.isError ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ErrorNote, { error: q.error }) : q.isPending ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Loading, {}) : rows?.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grid gap-4 md:grid-cols-2",
		children: rows.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TournamentCard, { t }, t.id))
	}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Empty, { title: "Nenhum campeonato com inscrições abertas" })] })] });
}
//#endregion
export { Agenda as component };
