import { Y as notFound, _ as lazyRouteComponent, v as createFileRoute } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as seo, t as getPublicMeta } from "./public.functions-C66LqsI5.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/modalidades._slug-CRyWS4BK.js
var $$splitComponentImporter = () => import("./modalidades._slug-ChyqmAmX.mjs");
var Route = createFileRoute("/modalidades/$slug")({
	loader: async ({ params }) => {
		const meta = await getPublicMeta({ data: {
			kind: "modality",
			key: params.slug
		} });
		if (!meta) throw notFound();
		return meta;
	},
	head: ({ loaderData }) => ({ meta: loaderData ? seo(`${loaderData.title} na LAES`, loaderData.description || `Equipes, vagas e campeonatos de ${loaderData.title} na LAES.`) : [{ title: "Modalidade | LAES" }, {
		name: "robots",
		content: "noindex"
	}] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
