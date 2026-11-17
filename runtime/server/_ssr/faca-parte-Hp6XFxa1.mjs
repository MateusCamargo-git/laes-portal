import { p as require_jsx_runtime } from "../_libs/@radix-ui/react-avatar+[...].mjs";
import { b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { m as Section, p as PageHero } from "./Logo-DncJtcSp.mjs";
import { t as Button } from "./button-tsOZyY2X.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/faca-parte-Hp6XFxa1.js
var import_jsx_runtime = require_jsx_runtime();
function Join() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		title: "Seu próximo time começa aqui",
		eyebrow: "Faça parte",
		children: "Jogadores, capitães, coaches e voluntários: há muitas formas de construir a liga."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-6 md:grid-cols-3",
			children: [
				["Crie sua conta", "Cadastre seu e-mail e confirme o acesso."],
				["Preencha sua ficha", "Informe modalidades, funções e disponibilidade."],
				["Encontre oportunidades", "Candidate-se às vagas e acompanhe os convites no painel."]
			].map(([title, body], i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "border-t-4 border-primary bg-card p-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "text-4xl font-bold text-accent",
						children: ["0", i + 1]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "my-3 text-xl font-bold",
						children: title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: body })
				]
			}, title))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "my-8",
			children: "O cadastro é uma demonstração de interesse e não garante vaga em equipe."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
			asChild: true,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/auth",
				children: "Criar conta ou entrar"
			})
		})
	] })] });
}
//#endregion
export { Join as component };
