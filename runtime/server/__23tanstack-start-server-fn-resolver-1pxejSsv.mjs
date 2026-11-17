//#region node_modules/.nitro/vite/services/ssr/assets/__23tanstack-start-server-fn-resolver-1pxejSsv.js
var manifest = { "0d2bd06d356d0d6295e4489fff37c78cbf50d378df290f683872d87dec02391f": {
	functionName: "getPublicMeta_createServerFn_handler",
	importer: () => import("./_ssr/public.functions-Byypipvi.mjs")
} };
async function getServerFnById(id, access) {
	const serverFnInfo = manifest[id];
	if (!serverFnInfo) throw new Error("Server function info not found for " + id);
	const fnModule = serverFnInfo.module ??= await serverFnInfo.importer();
	if (!fnModule) throw new Error("Server function module not resolved for " + id);
	const action = fnModule[serverFnInfo.functionName];
	if (!action) throw new Error("Server function module export not resolved for serverFn ID: " + id);
	return action;
}
//#endregion
export { getServerFnById as t };
