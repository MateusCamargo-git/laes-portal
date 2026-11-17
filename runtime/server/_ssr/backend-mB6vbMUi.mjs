function laesDeadlineFetch(input,init={}){
 const inherited=init.signal||(typeof Request!=='undefined'&&input instanceof Request?input.signal:undefined);
 const timeout=AbortSignal.timeout(20000);
 const signal=inherited?AbortSignal.any([inherited,timeout]):timeout;
 return fetch(input,{...init,signal});
}
import { t as createClient } from "../_libs/supabase__supabase-js.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/backend-mB6vbMUi.js
var LAES_PROJECT_REF = "txwxodscfnbsgltmrfjz";
function getBackendConfig() {
	const server = typeof window === "undefined" && typeof process !== "undefined";
	return {
		url: (server ? process.env["LAES_SUPABASE_URL"] : void 0) || {
			"BASE_URL": "/",
			"DEV": false,
			"MODE": "production",
			"PROD": true,
			"SSR": true,
			"TSS_DEV_SERVER": "false",
			"TSS_DEV_SSR_STYLES_BASEPATH": "/",
			"TSS_DEV_SSR_STYLES_ENABLED": "true",
			"TSS_DISABLE_CSRF_MIDDLEWARE_WARNING": "false",
			"TSS_INLINE_CSS_ENABLED": "false",
			"TSS_ROUTER_BASEPATH": "",
			"TSS_SERVER_FN_BASE": "/_serverFn/"
		}["VITE_LAES_SUPABASE_URL"] || "https://txwxodscfnbsgltmrfjz.supabase.co",
		key: (server ? process.env["LAES_SUPABASE_PUBLISHABLE_KEY"] : void 0) || {
			"BASE_URL": "/",
			"DEV": false,
			"MODE": "production",
			"PROD": true,
			"SSR": true,
			"TSS_DEV_SERVER": "false",
			"TSS_DEV_SSR_STYLES_BASEPATH": "/",
			"TSS_DEV_SSR_STYLES_ENABLED": "true",
			"TSS_DISABLE_CSRF_MIDDLEWARE_WARNING": "false",
			"TSS_INLINE_CSS_ENABLED": "false",
			"TSS_ROUTER_BASEPATH": "",
			"TSS_SERVER_FN_BASE": "/_serverFn/"
		}["VITE_LAES_SUPABASE_PUBLISHABLE_KEY"] || "sb_publishable_oweYXPxsQfXywyzsGOJBVg_-8tUjtQ7"
	};
}
/** Uses only publishable credentials. All access still passes through database RLS. */
function createPublicBackendClient() {
	return makeClient(false);
}
function makeClient(persist) {
	const { url, key } = getBackendConfig();
	return createClient(url, key, {
		auth: {
			flowType: "pkce",
			persistSession: persist,
			autoRefreshToken: persist,
			detectSessionInUrl: persist,
			storageKey: `laes-${LAES_PROJECT_REF}-auth`
		},
		global: { fetch: (input, init) => {
			const headers = new Headers(typeof Request !== "undefined" && input instanceof Request ? input.headers : void 0);
			new Headers(init?.headers).forEach((v, k) => headers.set(k, v));
			if (key.startsWith("sb_") && headers.get("Authorization") === `Bearer ${key}`) headers.delete("Authorization");
			headers.set("apikey", key);
			return laesDeadlineFetch(input, {
				...init,
				headers
			});
		} }
	});
}
var client;
var supabase = new Proxy({}, { get(_, prop, receiver) {
	client ??= makeClient(typeof window !== "undefined");
	return Reflect.get(client, prop, receiver);
} });
//#endregion
export { getBackendConfig as n, supabase as r, createPublicBackendClient as t };
