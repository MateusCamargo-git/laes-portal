import { p as require_jsx_runtime } from "../_libs/@radix-ui/react-avatar+[...].mjs";
import { d as MediaImage } from "./Logo-DncJtcSp.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ModalityLogo-CaM1G7Zy.js
var import_jsx_runtime = require_jsx_runtime();
var logos = {
	"league-of-legends": "webp",
	"wild-rift": "webp",
	"mobile-legends": "png",
	"counter-strike-2": "svg",
	"valorant": "webp",
	"free-fire": "webp",
	"brawl-stars": "webp",
	"ea-sports-fc": "svg"
};
function ModalityLogo({ slug, name, className = "", compact = false }) {
	const extension = logos[slug];
	if (!extension) return null;
	const monochrome = slug === "counter-strike-2" || slug === "ea-sports-fc" || slug === "free-fire";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: `relative overflow-hidden flex w-full items-center justify-center rounded-2xl bg-white ${compact ? "h-20 px-3 py-4" : "h-28 px-5 py-4"} ${className}`,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MediaImage, {
			src: `/images/modalities/${slug}.${extension}`,
			alt: `Logo de ${name}`,
			width: 240,
			height: 96,
			loading: "lazy",
			className: slug === "mobile-legends" ? "absolute left-0 top-1/2 h-auto w-full -translate-y-1/2 px-3" : `h-full w-full object-contain ${monochrome ? "brightness-0" : ""}`
		})
	});
}
//#endregion
export { ModalityLogo as t };
