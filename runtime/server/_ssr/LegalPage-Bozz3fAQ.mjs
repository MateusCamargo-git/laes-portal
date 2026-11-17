import { p as require_jsx_runtime } from "../_libs/@radix-ui/react-avatar+[...].mjs";
import { m as Section, p as PageHero } from "./Logo-DncJtcSp.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/LegalPage-Bozz3fAQ.js
var import_jsx_runtime = require_jsx_runtime();
function LegalPage({ title, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		eyebrow: "Liga Alfenense de E-Sports",
		title,
		children: "Informações sobre o uso do portal e os cuidados com seus dados."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
		className: "max-w-4xl",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mb-8 text-sm text-muted-foreground",
				children: "Última atualização: 11 de novembro de 2026"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("article", {
				className: "space-y-8 text-base leading-relaxed [&_h2]:mb-3 [&_h2]:text-2xl [&_h2]:font-bold [&_p+p]:mt-3 [&_a]:underline [&_a]:underline-offset-4",
				children
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				"aria-label": "Documentos do portal",
				className: "mt-12 flex flex-wrap gap-6 border-t border-border pt-6 text-sm font-semibold",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						children: "Início"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/privacidade",
						children: "Política de Privacidade"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/termos",
						children: "Termos de Uso"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/contato",
						children: "Contato"
					})
				]
			})
		]
	})] });
}
//#endregion
export { LegalPage as t };
