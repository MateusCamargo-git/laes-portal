import { _ as lazyRouteComponent, v as createFileRoute } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as seo, t as getPublicMeta } from "./public.functions-C66LqsI5.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/atletas._nick-DhjUIlhr.js
var $$splitComponentImporter = () => import("./atletas._nick-DWmA63N-.mjs");
var Route = createFileRoute("/atletas/$nick")({
	loader: ({ params }) => getPublicMeta({ data: {
		kind: "athlete",
		key: params.nick
	} }),
	head: ({ loaderData: m }) => ({ meta: seo(m?.title ?? "Atleta", m?.description ?? "Atleta da LAES", m?.image) }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
