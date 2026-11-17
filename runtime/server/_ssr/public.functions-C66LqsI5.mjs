import { t as getServerFnById } from "../__23tanstack-start-server-fn-resolver-1pxejSsv.mjs";
import { a as TSS_SERVER_FUNCTION, l as createServerFn } from "./createServerFn-DDDJMFWM.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/public.functions-C66LqsI5.js
function seo(title, description, image) {
	const full = title.includes("LAES") ? title : `${title} | LAES`;
	return [
		{ title: full },
		{
			name: "description",
			content: description
		},
		{
			property: "og:title",
			content: full
		},
		{
			property: "og:description",
			content: description
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: image ? "summary_large_image" : "summary"
		},
		...image ? [{
			property: "og:image",
			content: image
		}, {
			name: "twitter:image",
			content: image
		}] : []
	];
}
var createSsrRpc = (functionId) => {
	const url = "/_serverFn/" + functionId;
	const serverFnMeta = { id: functionId };
	const fn = async (...args) => {
		return (await getServerFnById(functionId, { origin: "server" }))(...args);
	};
	return Object.assign(fn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
/** Public metadata (title/description/image) for share previews. Reads only public rows. */
var getPublicMeta = createServerFn({ method: "GET" }).inputValidator((d) => {
	if (!d || typeof d.key !== "string" || d.key.length > 200) throw new Error("invalid");
	return d;
}).handler(createSsrRpc("0d2bd06d356d0d6295e4489fff37c78cbf50d378df290f683872d87dec02391f"));
//#endregion
export { seo as n, getPublicMeta as t };
