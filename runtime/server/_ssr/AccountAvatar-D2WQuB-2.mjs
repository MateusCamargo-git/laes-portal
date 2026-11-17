import { r as __toESM } from "../_runtime.mjs";
import { m as require_react, n as AvatarFallback$1, p as require_jsx_runtime, r as AvatarImage$1, t as Avatar$1 } from "../_libs/@radix-ui/react-avatar+[...].mjs";
import { P as useAuth, x as cn } from "./Logo-DncJtcSp.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/AccountAvatar-D2WQuB-2.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var Avatar = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Avatar$1, {
	ref,
	className: cn("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full", className),
	...props
}));
Avatar.displayName = Avatar$1.displayName;
var AvatarImage = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AvatarImage$1, {
	ref,
	className: cn("aspect-square h-full w-full", className),
	...props
}));
AvatarImage.displayName = AvatarImage$1.displayName;
var AvatarFallback = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AvatarFallback$1, {
	ref,
	className: cn("flex h-full w-full items-center justify-center rounded-full bg-muted", className),
	...props
}));
AvatarFallback.displayName = AvatarFallback$1.displayName;
function secureImage(value) {
	if (typeof value !== "string") return void 0;
	try {
		const url = new URL(value);
		return url.protocol === "https:" ? url.href : void 0;
	} catch {
		return;
	}
}
function AccountAvatar({ className = "" }) {
	const { user, profile } = useAuth();
	if (!user) return null;
	const google = user.identities?.find((identity) => identity.provider === "google")?.identity_data;
	const metadata = user.app_metadata?.provider === "google" || user.app_metadata?.providers?.includes("google") ? user.user_metadata : void 0;
	const photo = secureImage(profile?.avatar_url) ?? secureImage(google?.["avatar_url"]) ?? secureImage(google?.["picture"]) ?? secureImage(metadata?.["avatar_url"]) ?? secureImage(metadata?.["picture"]);
	const initials = [
		profile?.nick,
		user.user_metadata?.["display_name"],
		google?.["full_name"],
		metadata?.["full_name"],
		"Atleta LAES"
	].find((value) => typeof value === "string" && value.trim().length > 0).trim().split(/\s+/u).slice(0, 2).map((part) => Array.from(part)[0]).join("").toLocaleUpperCase("pt-BR");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Avatar, {
		className: `size-9 border border-accent/50 ${className}`,
		"aria-hidden": "true",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AvatarImage, {
			src: photo,
			alt: "",
			referrerPolicy: "no-referrer",
			className: "object-cover"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AvatarFallback, {
			className: "bg-accent text-xs font-bold text-black",
			children: initials
		})]
	});
}
//#endregion
export { AccountAvatar as t };
