import { r as __toESM } from "../_runtime.mjs";
import { r as supabase } from "./backend-mB6vbMUi.mjs";
import { m as require_react, p as require_jsx_runtime } from "../_libs/@radix-ui/react-avatar+[...].mjs";
import { S as fieldClass, m as Section, o as Field, p as PageHero } from "./Logo-DncJtcSp.mjs";
import { t as Button } from "./button-tsOZyY2X.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/redefinir-senha-CrOkOitt.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Reset() {
	const [ready, setReady] = (0, import_react.useState)(false), [busy, setBusy] = (0, import_react.useState)(false), [message, setMessage] = (0, import_react.useState)("Abra esta página pelo link enviado ao seu e-mail.");
	(0, import_react.useEffect)(() => {
		const { data } = supabase.auth.onAuthStateChange((event) => {
			if (event === "PASSWORD_RECOVERY") {
				setReady(true);
				setMessage("");
			}
		});
		supabase.auth.getSession().then(({ data }) => {
			if (data.session) {
				setReady(true);
				setMessage("");
			}
		});
		return () => data.subscription.unsubscribe();
	}, []);
	async function save(e) {
		e.preventDefault();
		const f = new FormData(e.currentTarget);
		if (f.get("password") !== f.get("confirm")) {
			setMessage("As senhas devem ser iguais.");
			return;
		}
		setBusy(true);
		const { error } = await supabase.auth.updateUser({ password: String(f.get("password")) });
		setMessage(error ? "Não foi possível atualizar. Solicite um novo link." : "Senha atualizada. Você já pode acessar seu painel.");
		setBusy(false);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, { title: "Nova senha" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
		className: "max-w-xl",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			onSubmit: save,
			className: "grid gap-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Nova senha",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						className: fieldClass,
						type: "password",
						name: "password",
						autoComplete: "new-password",
						required: true,
						minLength: 8
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Confirme a senha",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						className: fieldClass,
						type: "password",
						name: "confirm",
						autoComplete: "new-password",
						required: true,
						minLength: 8
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					role: "status",
					children: message
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					disabled: !ready || busy,
					children: "Salvar senha"
				})
			]
		})
	})] });
}
//#endregion
export { Reset as component };
