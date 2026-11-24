import {laesTournamentStatus} from "./Logo-DncJtcSp.mjs";
import { r as supabase } from "./backend-mB6vbMUi.mjs";
import { t as queryOptions } from "../_libs/tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/catalog-ew-rK_t4.js
var teamsQuery = queryOptions({
	queryKey: ["teams"],
	queryFn: async () => {
		const { data, error } = await supabase.from("teams").select("*,modalities(name,slug)").eq("active", true).order("sort");
		if (error) throw error;
		return data;
	}
});
var tournamentsQuery = queryOptions({
	queryKey: ["tournaments"],
	queryFn: async () => {
		const { data, error } = await supabase.from("tournaments").select("*,modalities(name)").eq("published", true).eq("status", "inscricoes_abertas").order("starts_at", { ascending: false });
		if (error) throw error;
		return data.filter(tournament => laesTournamentStatus(tournament) === "inscricoes_abertas");
	}
});
var newsQuery = queryOptions({
	queryKey: ["news"],
	queryFn: async () => {
		const { data, error } = await supabase.from("news").select("*").eq("published", true).order("published_at", { ascending: false });
		if (error) throw error;
		return data;
	}
});
//#endregion
export { teamsQuery as n, tournamentsQuery as r, newsQuery as t };
