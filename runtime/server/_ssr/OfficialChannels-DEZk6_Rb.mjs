import { p as require_jsx_runtime } from "../_libs/@radix-ui/react-avatar+[...].mjs";
import { n as useQuery } from "../_libs/tanstack__react-query.mjs";
import { T as ArrowUpRight, f as Mail } from "../_libs/lucide-react.mjs";
import { j as safeUrl } from "./Logo-DncJtcSp.mjs";
import { n as settingsQuery, r as whatsappHref } from "./settings-B6eNktqV.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/OfficialChannels-DEZk6_Rb.js
var import_jsx_runtime = require_jsx_runtime();
function OfficialChannels({ compact = false }) {
	const { data: settings } = useQuery(settingsQuery);
	const channels = [
		{
			name: "WhatsApp",
			brand: "whatsapp",
			href: whatsappHref(settings?.whatsapp || "https://wa.me/553598591121"),
			text: "Converse com a liga",
			featured: true
		},
		{
			name: "Discord",
			brand: "discord",
			href: settings?.discord || "https://discord.gg/zVBfGHRvB",
			text: "Entre no servidor da LAES",
			featured: true
		},
		{
			name: "Instagram",
			brand: "instagram",
			href: settings?.instagram?.startsWith("https://") ? settings.instagram : `https://www.instagram.com/${(settings?.instagram || "alfenas.esports").replace(/^@/, "")}/`,
			text: "@alfenas.esports",
			featured: false
		},
		{
			name: "Facebook",
			brand: "facebook",
			href: settings?.facebook || "https://www.facebook.com/profile.php?id=61594164028689",
			text: "Acompanhe as novidades",
			featured: false
		},
		{
			name: "E-mail",
			brand: null,
			href: `mailto:${settings?.commercial_email || "ligaalfenense@gmail.com"}`,
			text: settings?.commercial_email || "ligaalfenense@gmail.com",
			featured: false
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
		"aria-label": "Canais oficiais da LAES",
		className: compact ? "flex flex-wrap items-center gap-2" : "grid gap-3 sm:grid-cols-2",
		children: channels.map(({ name, brand, href, text, featured }) => {
			const url = name === "E-mail" ? href : safeUrl(href);
			if (!url) return null;
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
				href: url,
				title: compact ? name : void 0,
				"aria-label": compact ? `${name} da LAES` : void 0,
				...name !== "E-mail" ? {
					target: "_blank",
					rel: "noopener noreferrer"
				} : {},
				className: compact ? "flex size-11 items-center justify-center rounded-xl bg-white transition-transform hover:-translate-y-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent motion-reduce:transform-none" : `group flex items-center gap-4 rounded-2xl border p-5 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary ${name === "E-mail" ? "sm:col-span-2" : ""} ${featured ? "border-black bg-black text-cream hover:bg-primary-deep" : "border-border bg-card hover:border-primary"}`,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						"aria-hidden": "true",
						className: `flex shrink-0 items-center justify-center rounded-xl bg-white ${compact ? "size-9" : "size-12"}`,
						children: brand ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: `/images/social/${brand}.svg`,
							alt: "",
							width: 24,
							height: 24,
							className: compact ? "size-5 object-contain" : "size-6 object-contain"
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, {
							size: compact ? 20 : 24,
							className: "text-primary"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: compact ? "sr-only" : "min-w-0 flex-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block font-semibold",
							children: name
						}), !compact && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: `mt-1 block break-words text-xs ${featured ? "text-cream/65" : "text-muted-foreground"}`,
							children: text
						})]
					}),
					!compact && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {
						size: 17,
						"aria-hidden": "true",
						className: "shrink-0 opacity-50 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 motion-reduce:transform-none"
					})
				]
			}, name);
		})
	});
}
//#endregion
export { OfficialChannels as t };
