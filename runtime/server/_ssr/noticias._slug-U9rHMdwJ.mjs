import { _ as lazyRouteComponent, v as createFileRoute } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as seo, t as getPublicMeta } from "./public.functions-C66LqsI5.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/noticias._slug-U9rHMdwJ.js
var $$splitComponentImporter = () => import("./noticias._slug-k9_bjUGI.mjs");
var Route = createFileRoute("/noticias/$slug")({
	loader: ({ params }) => getPublicMeta({ data: {
		kind: "news",
		key: params.slug
	} }),
	head: ({ loaderData: m }) => ({ meta: seo(m?.title ?? "Notícia", m?.description ?? "Notícia da LAES", m?.image) }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
