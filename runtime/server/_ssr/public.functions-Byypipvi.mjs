import { t as createPublicBackendClient } from "./backend-mB6vbMUi.mjs";
import { t as publicAthleteSchema } from "./public-athlete-BaNoIfuf.mjs";
import { a as TSS_SERVER_FUNCTION, l as createServerFn } from "./createServerFn-DDDJMFWM.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/public.functions-Byypipvi.js
var createServerRpc = (serverFnMeta, splitImportFn) => {
	const url = "/_serverFn/" + serverFnMeta.id;
	return Object.assign(splitImportFn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var serverClient = createPublicBackendClient;
async function publicImage(sb, value) {
	if (!value) return null;
	if (value.startsWith("storage://media/")) return (await sb.storage.from("media").createSignedUrl(value.slice(16), 600)).data?.signedUrl ?? null;
	try {
		const url = new URL(value);
		return ["https:", "http:"].includes(url.protocol) ? url.href : null;
	} catch {
		return null;
	}
}
/** Public metadata (title/description/image) for share previews. Reads only public rows. */
var getPublicMeta_createServerFn_handler = createServerRpc({
	id: "0d2bd06d356d0d6295e4489fff37c78cbf50d378df290f683872d87dec02391f",
	name: "getPublicMeta",
	filename: "src/lib/public.functions.ts"
}, (opts) => getPublicMeta.__executeServer(opts));
var getPublicMeta = createServerFn({ method: "GET" }).inputValidator((d) => {
	if (!d || typeof d.key !== "string" || d.key.length > 200) throw new Error("invalid");
	return d;
}).handler(getPublicMeta_createServerFn_handler, async ({ data }) => {
	try {
		const sb = serverClient();
		if (data.kind === "modality") {
			const { data: r } = await sb.from("modalities").select("name,description").eq("slug", data.key).maybeSingle();
			return r ? {
				title: r.name,
				description: r.description ?? "",
				image: null
			} : null;
		}
		if (data.kind === "team") {
			const { data: r } = await sb.from("teams").select("name,description,logo_url,modalities(name)").eq("slug", data.key).maybeSingle();
			return r ? {
				title: r.name,
				description: r.description || `Equipe de ${r.modalities?.name ?? "e-sports"} da LAES.`,
				image: await publicImage(sb, r.logo_url)
			} : null;
		}
		if (data.kind === "tournament") {
			const { data: r } = await sb.from("tournaments").select("name,organizer,logo_url").eq("id", data.key).eq("published", true).maybeSingle();
			return r ? {
				title: r.name,
				description: `Campeonato${r.organizer ? ` organizado por ${r.organizer}` : ""}.`,
				image: await publicImage(sb, r.logo_url)
			} : null;
		}
		if (data.kind === "news") {
			const { data: r } = await sb.from("news").select("title,excerpt,cover_url").eq("slug", data.key).eq("published", true).maybeSingle();
			return r ? {
				title: r.title,
				description: r.excerpt ?? "",
				image: await publicImage(sb, r.cover_url)
			} : null;
		}
		if (data.kind === "athlete") {
			const { data: result, error } = await sb.rpc("get_public_athlete", { _nick: data.key });
			if (error) throw error;
			const r = publicAthleteSchema.nullable().parse(result);
			return r ? {
				title: r.nick ?? "Atleta",
				description: r.bio ?? "Atleta da comunidade LAES.",
				image: await publicImage(sb, r.avatar_url)
			} : null;
		}
		return null;
	} catch {
		return null;
	}
});
//#endregion
export { getPublicMeta_createServerFn_handler };
