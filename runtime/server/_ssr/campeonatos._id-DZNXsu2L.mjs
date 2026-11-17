import { _ as lazyRouteComponent, v as createFileRoute } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as seo, t as getPublicMeta } from "./public.functions-C66LqsI5.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/campeonatos._id-DZNXsu2L.js
var $$splitComponentImporter = () => import("./campeonatos._id-D4vAr9RS.mjs");
var Route = createFileRoute("/campeonatos/$id")({
	loader: ({ params }) => getPublicMeta({ data: {
		kind: "tournament",
		key: params.id
	} }),
	head: ({ loaderData: m }) => ({ meta: seo(m?.title ?? "Campeonato", m?.description ?? "Campeonato LAES", m?.image) }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
