import { r as __toESM } from "../_runtime.mjs";
import { n as getBackendConfig, r as supabase } from "./backend-mB6vbMUi.mjs";
import { m as require_react, p as require_jsx_runtime } from "../_libs/@radix-ui/react-avatar+[...].mjs";
import { v as createFileRoute, x as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { b as Eye, x as EyeOff } from "../_libs/lucide-react.mjs";
import { P as useAuth, S as fieldClass, o as Field } from "./Logo-DncJtcSp.mjs";
import { t as Button } from "./button-tsOZyY2X.mjs";
import { a as hasAccountSetup, i as AuthLayout, n as AccountNotices, r as AccountSetup, t as ACCOUNT_NOTICE_VERSION } from "./AuthLayout-Cw1J02uC.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/auth-DxCCsUcK.js
var import_react = /* @__PURE__ */__toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var Route = createFileRoute("/auth")({
  head: () => ({
    meta: [{
      title: "Entrar | LAES"
    }, {
      name: "robots",
      content: "noindex"
    }]
  }),
  component: Auth
});
function Auth({
  initialMode = "login"
}) {
  const [mode, setMode] = (0, import_react.useState)(initialMode);
  const [busy, setBusy] = (0, import_react.useState)(false);
  const [notice, setNotice] = (0, import_react.useState)("");
  const [showPassword, setShowPassword] = (0, import_react.useState)(false);
  const navigate = useNavigate();
  const {
    user,
    loading
  } = useAuth();
  (0, import_react.useEffect)(() => {
    if (!loading && user && hasAccountSetup(user.user_metadata)) navigate({
      to: "/painel"
    });
  }, [loading, user, navigate]);
  (0, import_react.useEffect)(() => {
    const params = new URLSearchParams(window.location.hash.slice(1));
    const query = new URLSearchParams(window.location.search);
    if (params.has("error") || query.has("error")) {
      setNotice("O acesso com Google não foi concluído. Tente novamente ou entre com e-mail e senha.");
      window.history.replaceState(null, "", window.location.pathname);
    }
  }, []);
  async function googleLogin() {
    setBusy(true);
    setNotice("");
    try {
      const {
        url,
        key
      } = getBackendConfig();
      const response = await fetch(url + "/auth/v1/settings", {
        headers: {
          apikey: key
        }
      });
      if (!response.ok) throw new Error("settings");
      if ((await response.json()).external?.google !== true) {
        setNotice("O login com Google estará disponível em breve. Por enquanto, entre com e-mail e senha.");
        return;
      }
      const {
        error
      } = await supabase.auth.signInWithOAuth({
        provider: "google",
        options: {
          redirectTo: window.location.origin + "/auth"
        }
      });
      if (error) throw error;
    } catch {
      setNotice("Não foi possível conectar ao Google. Tente novamente ou entre com e-mail e senha.");
    } finally {
      setBusy(false);
    }
  }
  async function submit(e) {
    e.preventDefault();
    setBusy(true);
    setNotice("");
    const f = new FormData(e.currentTarget);
    const email = String(f.get("email")).trim();
    const password = String(f.get("password") ?? "");
    try {
      if (mode === "recover") {
        const {
          error
        } = await supabase.auth.resetPasswordForEmail(email, {
          redirectTo: window.location.origin + "/redefinir-senha"
        });
        if (error) throw error;
        setNotice("Se houver uma conta com esse e-mail, você receberá as instruções.");
      } else if (mode === "signup") {
        const displayName = String(f.get("display_name") ?? "").trim();
        if (displayName.length < 2 || !f.get("account_notice")) {
          setNotice("Preencha seu nome e confirme a leitura das informações do portal.");
          return;
        }
        if (password !== String(f.get("password_confirmation") ?? "")) {
          setNotice("As senhas não coincidem. Confira os dois campos.");
          return;
        }
        const {
          data,
          error
        } = await supabase.auth.signUp({
          email,
          password,
          options: {
            emailRedirectTo: window.location.origin + "/auth",
            data: {
              display_name: displayName,
              account_notice_version: ACCOUNT_NOTICE_VERSION,
              account_notice_accepted_at: (/* @__PURE__ */new Date()).toISOString(),
              laes_registration_whatsapp: String(f.get('laes_whatsapp') ?? '').trim(),
              laes_registration_share_contact: !!f.get('laes_share_contact')
            }
          }
        });
        if (error) throw error;
        if (data.session) await navigate({
          to: "/painel"
        });else setNotice("Confira seu e-mail para confirmar o cadastro. Cadastrar-se não garante vaga em equipe.");
      } else {
        const {
          error
        } = await supabase.auth.signInWithPassword({
          email,
          password
        });
        if (error) throw error;
      }
    } catch {
      setNotice(mode === "login" ? "Não foi possível entrar. Confira os dados e a confirmação do e-mail." : "Não foi possível concluir. Tente novamente em alguns instantes.");
    } finally {
      setBusy(false);
    }
  }
  const [passwordValue, setPasswordValue] = (0, import_react.useState)("");
  const strength = passwordValue.length < 8 ? 0 : passwordValue.length >= 12 && /[a-z]/.test(passwordValue) && /[A-Z]/.test(passwordValue) && /[0-9]/.test(passwordValue) && /[^a-zA-Z0-9]/.test(passwordValue) ? 3 : passwordValue.length >= 10 ? 2 : 1;
  const switchMode = value => {
    setMode(value);
    setNotice("");
    setShowPassword(false);
    setPasswordValue("");
  };
  if (!loading && user && !hasAccountSetup(user.user_metadata)) return /* @__PURE__ */(0, import_jsx_runtime.jsx)(AuthLayout, {
    children: /* @__PURE__ */(0, import_jsx_runtime.jsx)(AccountSetup, {})
  });
  return /* @__PURE__ */(0, import_jsx_runtime.jsxs)(AuthLayout, {
    children: [/* @__PURE__ */(0, import_jsx_runtime.jsx)("h1", {
      className: "text-3xl font-bold",
      children: mode === "signup" ? "Faça parte da LAES" : mode === "recover" ? "Recupere seu acesso" : "Bem-vindo de volta!"
    }), /* @__PURE__ */(0, import_jsx_runtime.jsx)("p", {
      className: "mt-3 text-base leading-relaxed text-muted-foreground",
      children: mode === "signup" ? "Crie sua conta. Sua ficha de atleta vem no próximo passo." : mode === "recover" ? "Enviaremos as instruções para o seu e-mail." : "Sua comunidade e sua próxima partida estão aqui."
    }), /* @__PURE__ */(0, import_jsx_runtime.jsxs)("div", {
      className: "my-7 grid grid-cols-2 gap-1 rounded-2xl border border-border/50 bg-background/50 p-1",
      "aria-label": "Acesso ao portal",
      children: [/* @__PURE__ */(0, import_jsx_runtime.jsx)("button", {
        type: "button",
        disabled: busy,
        "aria-pressed": mode === "login",
        onClick: () => switchMode("login"),
        className: `rounded-xl px-4 py-3 text-sm font-semibold transition-colors ${mode === "login" ? "bg-white text-primary shadow-sm" : "text-muted-foreground hover:text-primary"}`,
        children: "Entrar"
      }), /* @__PURE__ */(0, import_jsx_runtime.jsx)("button", {
        type: "button",
        disabled: busy,
        "aria-pressed": mode === "signup",
        onClick: () => switchMode("signup"),
        className: `rounded-xl px-4 py-3 text-sm font-semibold transition-colors ${mode === "signup" ? "bg-white text-primary shadow-sm" : "text-muted-foreground hover:text-primary"}`,
        children: "Criar conta"
      })]
    }), /* @__PURE__ */(0, import_jsx_runtime.jsxs)("form", {
      onSubmit: submit,
      className: "grid gap-5",
      children: [mode === "signup" && /* @__PURE__ */(0, import_jsx_runtime.jsx)(Field, {
        label: "Como quer ser chamado?",
        children: /* @__PURE__ */(0, import_jsx_runtime.jsx)("input", {
          name: "display_name",
          autoComplete: "nickname",
          placeholder: "Seu nome ou apelido",
          required: true,
          minLength: 2,
          maxLength: 60,
          className: "w-full rounded border border-input bg-background px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary !rounded-xl !bg-white !px-4 !py-3.5"
        })
      }), /* @__PURE__ */(0, import_jsx_runtime.jsx)(Field, {
        label: "E-mail",
        children: /* @__PURE__ */(0, import_jsx_runtime.jsx)("input", {
          name: "email",
          type: "email",
          autoComplete: "email",
          placeholder: "voce@exemplo.com",
          required: true,
          maxLength: 255,
          className: fieldClass + " !rounded-xl !bg-white !px-4 !py-3.5"
        })
      }), mode !== "recover" && /* @__PURE__ */(0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, {
        children: [/* @__PURE__ */(0, import_jsx_runtime.jsx)(Field, {
          label: "Senha (mínimo de 8 caracteres)",
          children: /* @__PURE__ */(0, import_jsx_runtime.jsxs)("div", {
            className: "relative",
            children: [/* @__PURE__ */(0, import_jsx_runtime.jsx)("input", {
              name: "password",
              type: showPassword ? "text" : "password",
              onChange: event => setPasswordValue(event.target.value),
              minLength: 8,
              maxLength: 128,
              autoComplete: mode === "login" ? "current-password" : "new-password",
              required: true,
              placeholder: mode === "signup" ? "Crie uma senha" : "Digite sua senha",
              className: "w-full rounded border border-input bg-background px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary !rounded-xl !bg-white !px-4 !py-3.5 !pr-12"
            }), /* @__PURE__ */(0, import_jsx_runtime.jsx)("button", {
              type: "button",
              "aria-label": showPassword ? "Ocultar senha" : "Mostrar senha",
              "aria-pressed": showPassword,
              onClick: () => setShowPassword(value => !value),
              className: "absolute right-3 top-1/2 -translate-y-1/2 rounded p-1.5 text-muted-foreground hover:text-primary",
              children: showPassword ? /* @__PURE__ */(0, import_jsx_runtime.jsx)(EyeOff, {
                size: 19
              }) : /* @__PURE__ */(0, import_jsx_runtime.jsx)(Eye, {
                size: 19
              })
            })]
          })
        }), mode === "signup" && /* @__PURE__ */(0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, {
          children: [/* @__PURE__ */(0, import_jsx_runtime.jsxs)("div", {
            className: "-mt-2",
            "aria-live": "polite",
            children: [/* @__PURE__ */(0, import_jsx_runtime.jsxs)("div", {
              className: "mb-2 flex justify-between text-xs text-muted-foreground",
              children: [/* @__PURE__ */(0, import_jsx_runtime.jsx)("span", {
                children: "Orientação de senha"
              }), /* @__PURE__ */(0, import_jsx_runtime.jsx)("span", {
                children: !passwordValue ? "Use uma senha exclusiva" : ["Muito curta", "Básica", "Boa", "Mais robusta"][strength]
              })]
            }), /* @__PURE__ */(0, import_jsx_runtime.jsx)("div", {
              className: "h-1.5 overflow-hidden rounded-full bg-background",
              children: /* @__PURE__ */(0, import_jsx_runtime.jsx)("div", {
                className: "h-full rounded-full bg-primary transition-[width] motion-reduce:transition-none",
                style: {
                  width: `${passwordValue ? (strength + 1) * 25 : 0}%`
                }
              })
            })]
          }), /* @__PURE__ */(0, import_jsx_runtime.jsx)(Field, {
            label: "Confirme sua senha",
            children: /* @__PURE__ */(0, import_jsx_runtime.jsx)("input", {
              name: "password_confirmation",
              type: showPassword ? "text" : "password",
              autoComplete: "new-password",
              placeholder: "Repita sua senha",
              required: true,
              minLength: 8,
              maxLength: 128,
              className: "w-full rounded border border-input bg-background px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary !rounded-xl !bg-white !px-4 !py-3.5"
            })
          }), /* @__PURE__ */(0, import_jsx_runtime.jsxs)("label", {
            className: "flex items-start gap-3 rounded-xl border border-border/60 bg-background/30 p-4 text-sm",
            children: [/* @__PURE__ */(0, import_jsx_runtime.jsx)("input", {
              className: "mt-1 size-4 shrink-0 accent-primary",
              type: "checkbox",
              name: "account_notice",
              required: true
            }), /* @__PURE__ */(0, import_jsx_runtime.jsxs)("span", {
              children: ["Li e concordo com as ", /* @__PURE__ */(0, import_jsx_runtime.jsx)(AccountNotices, {}), "."]
            })]
          })]
        })]
      }), mode === "login" && /* @__PURE__ */(0, import_jsx_runtime.jsx)("button", {
        type: "button",
        className: "-mt-1 justify-self-end text-sm font-semibold text-primary hover:underline",
        onClick: () => switchMode("recover"),
        children: "Esqueci minha senha"
      }), notice && /* @__PURE__ */(0, import_jsx_runtime.jsx)("p", {
        role: "status",
        "aria-live": "polite",
        className: "rounded-xl border border-border bg-background/40 p-3 text-sm",
        children: notice
      }), mode === 'signup' && (0, import_jsx_runtime.jsxs)('div', {
        'data-laes-registration-contact': '',
        className: 'grid gap-4',
        children: [(0, import_jsx_runtime.jsxs)('label', {
          className: 'grid gap-2 text-sm font-medium',
          children: ['WhatsApp com DDD (opcional)', (0, import_jsx_runtime.jsxs)('input', {
            name: 'laes_whatsapp',
            type: 'tel',
            autoComplete: 'tel',
            maxLength: 30,
            placeholder: '(35) 99999-9999',
            className: "w-full rounded border border-input bg-white px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-primary rounded-xl"
          })]
        }), (0, import_jsx_runtime.jsxs)('label', {
          className: 'flex items-start gap-3 text-sm',
          children: [(0, import_jsx_runtime.jsxs)('input', {
            type: 'checkbox',
            name: 'laes_share_contact',
            className: 'mt-1 size-4 shrink-0 accent-primary'
          }), (0, import_jsx_runtime.jsxs)('span', {
            children: 'Autorizo compartilhar meu WhatsApp com a administração e os capitães das equipes às quais eu me candidatar ou ingressar.'
          })]
        }), (0, import_jsx_runtime.jsxs)('p', {
          className: 'text-xs text-muted-foreground',
          children: 'Seu número não aparece na comunidade pública. Você pode editar o contato e retirar a autorização na sua ficha.'
        })]
      }), /* @__PURE__ */(0, import_jsx_runtime.jsx)(Button, {
        disabled: busy,
        type: "submit",
        className: "h-12 w-full rounded-xl text-base",
        children: busy ? "Aguarde…" : mode === "signup" ? "Cadastrar" : mode === "recover" ? "Enviar instruções" : "Entrar na conta"
      })]
    }, mode), mode !== "recover" && /* @__PURE__ */(0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, {
      children: [/* @__PURE__ */(0, import_jsx_runtime.jsxs)("div", {
        className: "my-6 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.15em] text-muted-foreground",
        children: [/* @__PURE__ */(0, import_jsx_runtime.jsx)("span", {
          className: "h-px flex-1 bg-border/60"
        }), "ou continue com", /* @__PURE__ */(0, import_jsx_runtime.jsx)("span", {
          className: "h-px flex-1 bg-border/60"
        })]
      }), /* @__PURE__ */(0, import_jsx_runtime.jsxs)(Button, {
        type: "button",
        variant: "outline",
        disabled: busy,
        onClick: googleLogin,
        className: "h-12 w-full rounded-xl bg-white",
        children: [/* @__PURE__ */(0, import_jsx_runtime.jsx)("img", {
          src: "/images/google-g.png",
          alt: "",
          "aria-hidden": "true",
          width: 20,
          height: 20,
          className: "mr-1 size-5 shrink-0 object-contain"
        }), "Continuar com o Google"]
      })]
    }), /* @__PURE__ */(0, import_jsx_runtime.jsx)("p", {
      className: "mt-6 text-center text-xs leading-relaxed text-muted-foreground",
      children: "Criar a conta não garante vaga em equipe. Você escolhe a visibilidade da sua ficha no painel."
    })]
  });
}
//#endregion
export { Route as n, Auth as t };