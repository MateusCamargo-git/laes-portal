import { r as __toESM } from "../_runtime.mjs";
import { r as supabase } from "./backend-mB6vbMUi.mjs";
import { m as require_react, p as require_jsx_runtime } from "../_libs/@radix-ui/react-avatar+[...].mjs";
import { S as fieldClass, i as ErrorNote, m as Section, o as Field, p as PageHero } from "./Logo-DncJtcSp.mjs";
import { t as Button } from "./button-tsOZyY2X.mjs";
import { t as OfficialChannels } from "./OfficialChannels-DEZk6_Rb.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contato-Bn1o2q56.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Contact() {
	const [busy, setBusy] = (0, import_react.useState)(false), [sent, setSent] = (0, import_react.useState)(false), [error, setError] = (0, import_react.useState)(null);
	async function send(e) {
		e.preventDefault();
		const f = new FormData(e.currentTarget);
		if (f.get("website")) return;
		setBusy(true);
		setError(null);
		try {
			const { error } = await supabase.from("partnership_requests").insert({
				name: String(f.get("name")).trim(),
				email: String(f.get("email")).trim(),
				company: String(f.get("company")).trim() || null,
				phone: String(f.get("phone")).trim() || null,
				message: String(f.get("message")).trim()
			});
			if (error) throw error;
			setSent(true);
		} catch (e) {
			setError(e);
		} finally {
			setBusy(false);
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		title: "Vamos construir juntos",
		eyebrow: "Contato e parceiros"
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-12 md:grid-cols-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid content-start gap-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-2xl font-bold",
					children: "Fale com a liga"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-muted-foreground",
					children: "Das novidades no feed às conversas no servidor: encontre a LAES nos nossos canais oficiais."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(OfficialChannels, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Tem uma marca, projeto ou espaço e quer apoiar o cenário local? Envie sua proposta." })
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: sent ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			role: "status",
			className: "border-l-4 border-primary p-6",
			children: "Proposta enviada! A equipe da LAES entrará em contato."
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			className: "grid gap-4",
			onSubmit: send,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-2xl font-bold",
					children: "Quero ser parceiro"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "hidden",
					"aria-hidden": "true",
					children: ["Website", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						name: "website",
						tabIndex: -1,
						autoComplete: "off"
					})]
				}),
				[
					[
						"name",
						"Seu nome",
						true
					],
					[
						"company",
						"Empresa ou projeto",
						false
					],
					[
						"email",
						"E-mail",
						true
					],
					[
						"phone",
						"Telefone",
						false
					]
				].map(([name, label, required]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: String(label),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						name: String(name),
						type: name === "email" ? "email" : "text",
						required: Boolean(required),
						minLength: required ? 2 : void 0,
						maxLength: name === "name" ? 120 : 255,
						className: fieldClass
					})
				}, String(name))),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Sua proposta",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
						name: "message",
						required: true,
						minLength: 5,
						maxLength: 3e3,
						rows: 5,
						className: fieldClass
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs text-muted-foreground",
					children: "Os dados serão usados pela LAES para responder a esta solicitação."
				}),
				error != null && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ErrorNote, { error }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					disabled: busy,
					children: busy ? "Enviando…" : "Enviar proposta"
				})
			]
		}) })]
	}) })] });
}
//#endregion
export { Contact as component };
