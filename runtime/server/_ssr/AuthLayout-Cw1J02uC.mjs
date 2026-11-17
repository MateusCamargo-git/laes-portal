import { r as __toESM } from "../_runtime.mjs";
import { r as supabase } from "./backend-mB6vbMUi.mjs";
import { m as require_react, p as require_jsx_runtime } from "../_libs/@radix-ui/react-avatar+[...].mjs";
import { b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { D as ArrowLeft, a as Trophy, r as UsersRound, t as X, y as Gamepad2 } from "../_libs/lucide-react.mjs";
import { P as useAuth, S as fieldClass, c as LionMark, o as Field, u as Logo, x as cn } from "./Logo-DncJtcSp.mjs";
import { t as Button } from "./button-tsOZyY2X.mjs";
import { a as DialogOverlay$1, c as DialogTrigger$1, i as DialogDescription$1, n as DialogClose, o as DialogPortal$1, r as DialogContent$1, s as DialogTitle$1, t as Dialog$1 } from "../_libs/@radix-ui/react-dialog+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/AuthLayout-Cw1J02uC.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var Dialog = Dialog$1;
var DialogTrigger = DialogTrigger$1;
var DialogPortal = DialogPortal$1;
var DialogOverlay = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay$1, {
	ref,
	className: cn("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
	...props
}));
DialogOverlay.displayName = DialogOverlay$1.displayName;
var DialogContent = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent$1, {
	ref,
	className: cn("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 sm:rounded-lg", className),
	...props,
	children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogClose, {
		className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background cursor-pointer transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "sr-only",
			children: "Close"
		})]
	})]
})] }));
DialogContent.displayName = DialogContent$1.displayName;
var DialogHeader = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col space-y-1.5 text-center sm:text-left", className),
	...props
});
DialogHeader.displayName = "DialogHeader";
var DialogFooter = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className),
	...props
});
DialogFooter.displayName = "DialogFooter";
var DialogTitle = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle$1, {
	ref,
	className: cn("text-lg font-semibold leading-none tracking-tight", className),
	...props
}));
DialogTitle.displayName = DialogTitle$1.displayName;
var DialogDescription = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription$1, {
	ref,
	className: cn("text-sm text-muted-foreground", className),
	...props
}));
DialogDescription.displayName = DialogDescription$1.displayName;
var ACCOUNT_NOTICE_VERSION = "2026-11-08";
function hasAccountSetup(metadata) {
	return typeof metadata?.["display_name"] === "string" && metadata["display_name"].trim().length >= 2 && metadata["account_notice_version"] === "2026-11-08";
}
function AccountNotices() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "inline",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Dialog, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTrigger, {
			asChild: true,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: "text-primary underline",
				children: "regras do portal e aviso de privacidade"
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
			className: "max-h-[85vh] overflow-y-auto",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: "Seu cadastro na LAES" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogDescription, { children: ["Informações sobre a conta · versão ", ACCOUNT_NOTICE_VERSION] })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-4 text-sm leading-relaxed",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Conta e participação." }), " A conta dá acesso ao portal da Liga Alfenense de E-Sports. Criar uma conta não garante vaga em equipe ou campeonato. A ficha de atleta e os requisitos de cada competição são etapas separadas."] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Convivência." }), " Use informações que representem você, respeite os demais participantes e não publique conteúdo ofensivo nem se passe por outra pessoa. Cuide das suas credenciais de acesso."] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Dados da conta." }), " Usamos e-mail e nome de exibição para autenticar e identificar sua conta. Com Google, o serviço também pode fornecer nome e foto de perfil. A LAES não recebe sua senha do Google. A autenticação e o armazenamento do portal utilizam Supabase; o acesso com Google utiliza os serviços do Google."] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Ficha e visibilidade." }), " Os dados adicionais são preenchidos no painel. Você escolhe se deseja tornar o perfil público e pode ajustar essa escolha no painel. O e-mail de login não faz parte do perfil público. O nome de exibição desta etapa fica na conta e não publica automaticamente uma ficha."] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Alterações e exclusão." }),
						" Você pode editar a ficha e solicitar exclusão pelo painel. Para dúvidas sobre sua conta e seus dados, contate ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							className: "text-primary underline",
							href: "mailto:ligaalfenense@gmail.com",
							children: "ligaalfenense@gmail.com"
						}),
						"."
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
						"Consulte também a ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							className: "text-primary underline",
							href: "/privacidade",
							target: "_blank",
							rel: "noopener noreferrer",
							children: "Política de Privacidade"
						}),
						" e os ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							className: "text-primary underline",
							href: "/termos",
							target: "_blank",
							rel: "noopener noreferrer",
							children: "Termos de Uso"
						}),
						" completos."
					] })
				]
			})]
		})] })
	});
}
function AccountSetup() {
	const { user, refresh } = useAuth();
	const isGoogle = user?.identities?.some((identity) => identity.provider === "google") || user?.app_metadata?.provider === "google";
	const [definePassword, setDefinePassword] = (0, import_react.useState)(Boolean(isGoogle));
	const [busy, setBusy] = (0, import_react.useState)(false);
	const [notice, setNotice] = (0, import_react.useState)("");
	async function submit(event) {
		event.preventDefault();
		const form = new FormData(event.currentTarget);
		const name = String(form.get("display_name") ?? "").trim();
		if (name.length < 2 || !form.get("account_notice")) return;
		const password = String(form.get("laes_password") ?? "");
		const withPassword = Boolean(isGoogle && definePassword);
		if (withPassword && password.length < 8) {
			setNotice("Use pelo menos 8 caracteres na senha da LAES.");
			return;
		}
		if (withPassword && password !== form.get("laes_password_confirm")) {
			setNotice("As senhas não coincidem. Confira os dois campos.");
			return;
		}
		setBusy(true);
		setNotice("");
		try {
			const { error } = await supabase.auth.updateUser({
				...withPassword ? { password } : {},
				data: {
					display_name: name,
					account_notice_version: ACCOUNT_NOTICE_VERSION,
					account_notice_accepted_at: (/* @__PURE__ */ new Date()).toISOString()
				}
			});
			if (error) throw error;
			await refresh();
		} catch {
			setNotice(withPassword ? "Não foi possível salvar a senha e concluir o cadastro. Use uma senha forte e tente novamente. Se for necessário entrar novamente, use o Google; você também pode deixar a senha para depois e usar ‘Esqueci minha senha’ para defini-la por e-mail." : "Não foi possível salvar. Tente novamente.");
		} finally {
			setBusy(false);
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-xl rounded-3xl border border-border bg-card p-6 sm:p-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "eyebrow",
				children: "Primeiro acesso"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-2 text-3xl font-bold",
				children: "Boas-vindas à LAES!"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-sm text-muted-foreground",
				children: "Confirme como quer ser chamado. Depois, você poderá completar sua ficha de atleta."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				onSubmit: submit,
				className: "mt-6 grid gap-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Como quer ser chamado?",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							className: fieldClass,
							name: "display_name",
							required: true,
							minLength: 2,
							maxLength: 60,
							autoComplete: "nickname",
							defaultValue: user?.user_metadata["display_name"] || user?.user_metadata["full_name"] || ""
						})
					}),
					isGoogle && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("fieldset", {
						className: "grid gap-4 rounded-2xl border border-border p-4",
						disabled: busy,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("legend", {
								className: "px-1 text-sm font-bold",
								children: "Seu acesso à LAES"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-sm text-muted-foreground",
								children: [
									"Você entrou com Google. Defina uma senha exclusiva da LAES para também entrar com seu e-mail",
									user?.email ? ` (${user.email})` : "",
									" e senha. Sua senha do Google permanece a mesma."
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "flex items-start gap-3 text-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "checkbox",
									checked: definePassword,
									onChange: (event) => setDefinePassword(event.target.checked),
									className: "mt-1 size-4 shrink-0 accent-primary"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Quero definir minha senha da LAES agora" })]
							}),
							definePassword ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Senha da LAES",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										className: "w-full rounded border border-input bg-background px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary",
										type: "password",
										name: "laes_password",
										autoComplete: "new-password",
										required: true,
										minLength: 8,
										"aria-describedby": "laes-password-help"
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Confirme a senha da LAES",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										className: "w-full rounded border border-input bg-background px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary",
										type: "password",
										name: "laes_password_confirm",
										autoComplete: "new-password",
										required: true,
										minLength: 8
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									id: "laes-password-help",
									className: "text-xs text-muted-foreground",
									children: "Use pelo menos 8 caracteres e uma senha exclusiva para este portal. Se já definiu uma senha da LAES, salvar aqui irá substituí-la."
								})
							] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-muted-foreground",
								children: "Tudo bem! Você continuará entrando com Google. Para definir uma senha depois, use “Esqueci minha senha” na tela de entrada."
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "flex items-start gap-3 text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							className: "mt-1 size-4 shrink-0 accent-primary",
							type: "checkbox",
							name: "account_notice",
							required: true
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
							"Li e concordo com as ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccountNotices, {}),
							"."
						] })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						role: "status",
						"aria-live": "polite",
						children: notice
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						disabled: busy,
						type: "submit",
						children: busy ? "Salvando…" : "Concluir e acessar meu painel"
					})
				]
			})
		]
	});
}
function AuthLayout({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-white lg:grid lg:grid-cols-[minmax(320px,0.85fr)_minmax(0,1.65fr)]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
			className: "relative overflow-hidden bg-ink text-cream lg:sticky lg:top-0 lg:h-screen",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LionMark, { className: "pointer-events-none absolute -bottom-20 -right-24 hidden size-[32rem] text-accent/5 lg:block" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative flex h-full flex-col px-6 py-4 sm:px-10 lg:py-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "my-auto hidden py-12 lg:block",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "eyebrow text-accent",
								children: "Sua próxima fase começa aqui"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
								className: "mt-5 max-w-sm text-4xl font-bold leading-tight xl:text-5xl",
								children: [
									"O talento é local.",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-accent",
										children: "O próximo passo é seu."
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-6 max-w-sm text-base leading-relaxed text-cream/65",
								children: "Encontre sua comunidade, conecte-se com outros jogadores e represente Alfenas no competitivo."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
								className: "mt-10 grid gap-5 text-sm",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "flex items-center gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "rounded-xl border border-white/10 bg-white/5 p-2.5 text-accent",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Gamepad2, { size: 20 })
										}), "Escolha suas modalidades"]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "flex items-center gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "rounded-xl border border-white/10 bg-white/5 p-2.5 text-accent",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UsersRound, { size: 20 })
										}), "Encontre uma equipe para jogar"]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "flex items-center gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "rounded-xl border border-white/10 bg-white/5 p-2.5 text-accent",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trophy, { size: 20 })
										}), "Acompanhe campeonatos e oportunidades"]
									})
								]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "hidden text-xs tracking-wide text-cream/40 lg:block",
						children: "Liga Alfenense de E-Sports · Alfenas, MG"
					})
				]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "px-5 py-6 sm:px-10 lg:px-12 lg:py-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/",
				className: "inline-flex items-center gap-3 text-sm font-medium text-muted-foreground hover:text-primary",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "rounded-xl border border-border p-2",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { size: 18 })
				}), "Voltar para home"]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto w-full max-w-[480px] py-8 sm:py-10 lg:py-7",
				children
			})]
		})]
	});
}
//#endregion
export { hasAccountSetup as a, AuthLayout as i, AccountNotices as n, AccountSetup as r, ACCOUNT_NOTICE_VERSION as t };
