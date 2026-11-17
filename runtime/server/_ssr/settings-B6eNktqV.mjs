import { r as supabase } from "./backend-mB6vbMUi.mjs";
import { t as queryOptions } from "../_libs/tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/settings-B6eNktqV.js
var settingsQuery = queryOptions({
	queryKey: ["site_settings"],
	queryFn: async () => {
		const { data, error } = await supabase.from("site_settings").select("key,value");
		if (error) throw error;
		const map = {
			facebook: "",
			instagram: "",
			whatsapp: "",
			discord: "",
			commercial_email: "",
			logo_url: "",
			mission: "",
			values: "",
			about: ""
		};
		data.forEach((r) => map[r.key] = r.value ?? "");
		return map;
	},
	staleTime: 6e4
});
var modalitiesQuery = queryOptions({
	queryKey: ["modalities"],
	queryFn: async () => {
		const { data, error } = await supabase.from("modalities").select("*").eq("active", true).order("sort");
		if (error) throw error;
		return data;
	},
	staleTime: 6e4
});
function whatsappHref(v) {
	if (!v) return "";
	if (v.startsWith("http")) return v;
	const digits = v.replace(/\D/g, "");
	return digits ? `https://wa.me/${digits}` : "";
}
//#endregion
export { settingsQuery as n, whatsappHref as r, modalitiesQuery as t };
