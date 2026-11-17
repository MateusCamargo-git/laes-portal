import { _ as lazyRouteComponent, v as createFileRoute } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as seo, t as getPublicMeta } from "./public.functions-C66LqsI5.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/equipes._slug-CfqML_46.js
var $$splitComponentImporter = () => import("./equipes._slug-BoeDPFt0.mjs");
var Route = createFileRoute("/equipes/$slug")({
	loader: ({ params }) => getPublicMeta({ data: {
		kind: "team",
		key: params.slug
	} }),
	head: ({ loaderData: m }) => ({ meta: seo(m?.title ?? "Equipe", m?.description ?? "Equipe LAES", m?.image) }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
