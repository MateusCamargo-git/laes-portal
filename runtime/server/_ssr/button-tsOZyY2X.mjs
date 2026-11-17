import { r as __toESM } from "../_runtime.mjs";
import { m as require_react, p as require_jsx_runtime, u as Slot } from "../_libs/@radix-ui/react-avatar+[...].mjs";
import { t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { x as cn } from "./Logo-DncJtcSp.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/button-tsOZyY2X.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-semibold cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
	variants: {
		variant: {
			default: "bg-primary text-primary-foreground shadow-sm hover:bg-primary-deep",
			destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
			outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
			secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
			ghost: "hover:bg-accent hover:text-accent-foreground",
			link: "text-primary underline-offset-4 hover:underline",
			hero: "bg-primary text-primary-foreground font-display uppercase tracking-wider clip-blade hover:bg-primary-deep",
			heroOutline: "border-2 border-ink-foreground/70 text-ink-foreground font-display uppercase tracking-wider hover:bg-ink-foreground hover:text-ink",
			accent: "bg-accent text-accent-foreground font-display uppercase tracking-wider clip-blade hover:bg-accent/85",
			ghostInk: "text-ink-foreground hover:bg-ink-foreground/10"
		},
		size: {
			default: "h-9 px-4 py-2",
			sm: "h-8 rounded-md px-3 text-xs",
			lg: "h-12 rounded-md px-7 text-base",
			icon: "h-9 w-9"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
var Button = import_react.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		ref,
		...props
	});
});
Button.displayName = "Button";
//#endregion
export { Button as t };
