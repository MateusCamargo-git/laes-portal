import { r as __toESM } from "../_runtime.mjs";
import { m as require_react, p as require_jsx_runtime } from "../_libs/@radix-ui/react-avatar+[...].mjs";
import { n as useQuery } from "../_libs/tanstack__react-query.mjs";
import { S as fieldClass, f as NewsCard, i as ErrorNote, k as newsCategoryLabel, l as Loading, m as Section, o as Field, p as PageHero, r as Empty } from "./Logo-DncJtcSp.mjs";
import { t as newsQuery } from "./catalog-ew-rK_t4.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/noticias.index-8LTEnHwc.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function News() {
	const q = useQuery(newsQuery);
	const [category, setCategory] = (0, import_react.useState)("");
	const rows = q.data?.filter((n) => !category || n.category === category);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, { title: "Notícias da liga" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
		label: "Categoria",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
			className: fieldClass,
			value: category,
			onChange: (e) => setCategory(e.target.value),
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
				value: "",
				children: "Todas"
			}), Object.entries(newsCategoryLabel).map(([k, v]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
				value: k,
				children: v
			}, k))]
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mt-8",
		children: q.isError ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ErrorNote, { error: q.error }) : q.isPending ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Loading, {}) : rows?.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-6 md:grid-cols-3",
			children: rows.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NewsCard, { n }, n.id))
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Empty, { title: "Nenhuma notícia publicada" })
	})] })] });
}
//#endregion
export { News as component };
