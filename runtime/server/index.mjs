import { secureFetch } from "./laes-security.mjs";
globalThis.__nitro_main__ = import.meta.url;
import { i as serve, r as NodeResponse } from "./_libs/h3-v2+rou3+srvx.mjs";
import { i as toEventHandler, n as defineHandler, o as HTTPError, r as defineLazyEventHandler, t as H3Core } from "./_libs/h3+rou3+srvx.mjs";
import { i as withoutTrailingSlash, n as joinURL, r as withLeadingSlash, t as decodePath } from "./_libs/ufo.mjs";
import { promises } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";
//#region #nitro-vite-setup
function lazyService(loader) {
	let promise, mod;
	return { fetch(req) {
		if (mod) return mod.fetch(req);
		if (!promise) promise = loader().then((_mod) => mod = _mod.default || _mod);
		return promise.then((mod) => mod.fetch(req));
	} };
}
var services = { ["ssr"]: lazyService(() => import("./_ssr/ssr.mjs")) };
globalThis.__nitro_vite_envs__ = services;
//#endregion
//#region node_modules/nitro/dist/runtime/internal/route-rules.mjs
var headers = ((m) => function headersRouteRule(event) {
	for (const [key, value] of Object.entries(m.options || {})) event.res.headers.set(key, value);
});
//#endregion
//#region #nitro/virtual/public-assets-data
var public_assets_data_default = {
  "/assets/AuthLayout-uewGPtnY-aligned-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/AuthLayout-uewGPtnY-aligned-v1.js",
    "size": 47642,
    "etag": "\"52c458a9b79d7104567bc2f28dbc67781dac1bd45649e544e8d960919000c0f7\"",
    "mtime": "2026-11-14T14:34:46.928Z"
  },
  "/assets/AuthLayout-uewGPtnY-athlete-v2.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/AuthLayout-uewGPtnY-athlete-v2.js",
    "size": 47642,
    "etag": "\"52c458a9b79d7104567bc2f28dbc67781dac1bd45649e544e8d960919000c0f7\"",
    "mtime": "2026-11-14T14:34:47.030Z"
  },
  "/assets/AuthLayout-uewGPtnY-badge-art-v2.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/AuthLayout-uewGPtnY-badge-art-v2.js",
    "size": 47642,
    "etag": "\"52c458a9b79d7104567bc2f28dbc67781dac1bd45649e544e8d960919000c0f7\"",
    "mtime": "2026-11-14T14:34:47.029Z"
  },
  "/assets/AuthLayout-uewGPtnY-badges-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/AuthLayout-uewGPtnY-badges-v1.js",
    "size": 47642,
    "etag": "\"52c458a9b79d7104567bc2f28dbc67781dac1bd45649e544e8d960919000c0f7\"",
    "mtime": "2026-11-14T14:34:46.975Z"
  },
  "/assets/AuthLayout-uewGPtnY-game-logos-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/AuthLayout-uewGPtnY-game-logos-v1.js",
    "size": 47642,
    "etag": "\"52c458a9b79d7104567bc2f28dbc67781dac1bd45649e544e8d960919000c0f7\"",
    "mtime": "2026-11-14T14:34:46.963Z"
  },
  "/assets/AuthLayout-uewGPtnY-live-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/AuthLayout-uewGPtnY-live-v1.js",
    "size": 47642,
    "etag": "\"52c458a9b79d7104567bc2f28dbc67781dac1bd45649e544e8d960919000c0f7\"",
    "mtime": "2026-11-14T14:34:46.950Z"
  },
  "/assets/AuthLayout-uewGPtnY-loading-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/AuthLayout-uewGPtnY-loading-v1.js",
    "size": 47642,
    "etag": "\"52c458a9b79d7104567bc2f28dbc67781dac1bd45649e544e8d960919000c0f7\"",
    "mtime": "2026-11-14T14:34:46.976Z"
  },
  "/assets/AuthLayout-uewGPtnY-members-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/AuthLayout-uewGPtnY-members-v1.js",
    "size": 47642,
    "etag": "\"52c458a9b79d7104567bc2f28dbc67781dac1bd45649e544e8d960919000c0f7\"",
    "mtime": "2026-11-14T14:34:46.941Z"
  },
  "/assets/AuthLayout-uewGPtnY-profiles-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/AuthLayout-uewGPtnY-profiles-v1.js",
    "size": 47642,
    "etag": "\"52c458a9b79d7104567bc2f28dbc67781dac1bd45649e544e8d960919000c0f7\"",
    "mtime": "2026-11-14T14:34:46.946Z"
  },
  "/assets/AuthLayout-uewGPtnY-teams-only-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/AuthLayout-uewGPtnY-teams-only-v1.js",
    "size": 47642,
    "etag": "\"52c458a9b79d7104567bc2f28dbc67781dac1bd45649e544e8d960919000c0f7\"",
    "mtime": "2026-11-14T14:34:46.964Z"
  },
  "/assets/AuthLayout-uewGPtnY-tournaments-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/AuthLayout-uewGPtnY-tournaments-v1.js",
    "size": 47642,
    "etag": "\"52c458a9b79d7104567bc2f28dbc67781dac1bd45649e544e8d960919000c0f7\"",
    "mtime": "2026-11-14T14:34:46.972Z"
  },
  "/assets/AuthLayout-uewGPtnY.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/AuthLayout-uewGPtnY.js",
    "size": 47642,
    "etag": "\"52c458a9b79d7104567bc2f28dbc67781dac1bd45649e544e8d960919000c0f7\"",
    "mtime": "2026-11-14T14:34:46.958Z"
  },
  "/assets/LegalPage-mXon1lHL-aligned-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/LegalPage-mXon1lHL-aligned-v1.js",
    "size": 1038,
    "etag": "\"3550b256bbd101a5e30aa99e681247494d952c4a3a5dac7194c5903c3c9bb703\"",
    "mtime": "2026-11-14T14:34:47.032Z"
  },
  "/assets/LegalPage-mXon1lHL-athlete-v2.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/LegalPage-mXon1lHL-athlete-v2.js",
    "size": 1038,
    "etag": "\"3550b256bbd101a5e30aa99e681247494d952c4a3a5dac7194c5903c3c9bb703\"",
    "mtime": "2026-11-14T14:34:47.025Z"
  },
  "/assets/LegalPage-mXon1lHL-badge-art-v2.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/LegalPage-mXon1lHL-badge-art-v2.js",
    "size": 1038,
    "etag": "\"3550b256bbd101a5e30aa99e681247494d952c4a3a5dac7194c5903c3c9bb703\"",
    "mtime": "2026-11-14T14:34:46.930Z"
  },
  "/assets/LegalPage-mXon1lHL-badges-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/LegalPage-mXon1lHL-badges-v1.js",
    "size": 1038,
    "etag": "\"3550b256bbd101a5e30aa99e681247494d952c4a3a5dac7194c5903c3c9bb703\"",
    "mtime": "2026-11-14T14:34:46.942Z"
  },
  "/assets/LegalPage-mXon1lHL-game-logos-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/LegalPage-mXon1lHL-game-logos-v1.js",
    "size": 1038,
    "etag": "\"3550b256bbd101a5e30aa99e681247494d952c4a3a5dac7194c5903c3c9bb703\"",
    "mtime": "2026-11-14T14:34:46.961Z"
  },
  "/assets/LegalPage-mXon1lHL-live-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/LegalPage-mXon1lHL-live-v1.js",
    "size": 1038,
    "etag": "\"3550b256bbd101a5e30aa99e681247494d952c4a3a5dac7194c5903c3c9bb703\"",
    "mtime": "2026-11-14T14:34:47.014Z"
  },
  "/assets/LegalPage-mXon1lHL-loading-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/LegalPage-mXon1lHL-loading-v1.js",
    "size": 1038,
    "etag": "\"3550b256bbd101a5e30aa99e681247494d952c4a3a5dac7194c5903c3c9bb703\"",
    "mtime": "2026-11-14T14:34:46.987Z"
  },
  "/assets/LegalPage-mXon1lHL-members-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/LegalPage-mXon1lHL-members-v1.js",
    "size": 1038,
    "etag": "\"3550b256bbd101a5e30aa99e681247494d952c4a3a5dac7194c5903c3c9bb703\"",
    "mtime": "2026-11-14T14:34:46.935Z"
  },
  "/assets/LegalPage-mXon1lHL-profiles-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/LegalPage-mXon1lHL-profiles-v1.js",
    "size": 1038,
    "etag": "\"3550b256bbd101a5e30aa99e681247494d952c4a3a5dac7194c5903c3c9bb703\"",
    "mtime": "2026-11-14T14:34:46.976Z"
  },
  "/assets/LegalPage-mXon1lHL-teams-only-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/LegalPage-mXon1lHL-teams-only-v1.js",
    "size": 1038,
    "etag": "\"3550b256bbd101a5e30aa99e681247494d952c4a3a5dac7194c5903c3c9bb703\"",
    "mtime": "2026-11-14T14:34:46.950Z"
  },
  "/assets/LegalPage-mXon1lHL-tournaments-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/LegalPage-mXon1lHL-tournaments-v1.js",
    "size": 1038,
    "etag": "\"3550b256bbd101a5e30aa99e681247494d952c4a3a5dac7194c5903c3c9bb703\"",
    "mtime": "2026-11-14T14:34:46.950Z"
  },
  "/assets/LegalPage-mXon1lHL.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/LegalPage-mXon1lHL.js",
    "size": 1038,
    "etag": "\"3550b256bbd101a5e30aa99e681247494d952c4a3a5dac7194c5903c3c9bb703\"",
    "mtime": "2026-11-14T14:34:47.001Z"
  },
  "/assets/Logo-C_6nyl-f-aligned-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/Logo-C_6nyl-f-aligned-v1.js",
    "size": 307277,
    "etag": "\"84353fc38e3b2ca13458fddedb18ae7d1e38281d69e07dbbbf1f9fbbe2adf0d0\"",
    "mtime": "2026-11-14T14:34:46.970Z"
  },
  "/assets/Logo-C_6nyl-f-athlete-v2.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/Logo-C_6nyl-f-athlete-v2.js",
    "size": 302859,
    "etag": "\"7a4e1aa3d69934bdd699747a20e1e9730f689361083ebe15d36f36aca0e49924\"",
    "mtime": "2026-11-14T14:34:46.951Z"
  },
  "/assets/Logo-C_6nyl-f-badge-art-v2.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/Logo-C_6nyl-f-badge-art-v2.js",
    "size": 307597,
    "etag": "\"5bc66052893fb28476d9985c3f8983c30c44b8ba211907fe6869a16093fb0a9c\"",
    "mtime": "2026-11-17T15:25:20.480Z"
  },
  "/assets/Logo-C_6nyl-f-badges-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/Logo-C_6nyl-f-badges-v1.js",
    "size": 307277,
    "etag": "\"84353fc38e3b2ca13458fddedb18ae7d1e38281d69e07dbbbf1f9fbbe2adf0d0\"",
    "mtime": "2026-11-14T14:34:47.009Z"
  },
  "/assets/Logo-C_6nyl-f-game-logos-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/Logo-C_6nyl-f-game-logos-v1.js",
    "size": 307277,
    "etag": "\"84353fc38e3b2ca13458fddedb18ae7d1e38281d69e07dbbbf1f9fbbe2adf0d0\"",
    "mtime": "2026-11-14T14:34:46.936Z"
  },
  "/assets/Logo-C_6nyl-f-live-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/Logo-C_6nyl-f-live-v1.js",
    "size": 307277,
    "etag": "\"84353fc38e3b2ca13458fddedb18ae7d1e38281d69e07dbbbf1f9fbbe2adf0d0\"",
    "mtime": "2026-11-14T14:34:46.969Z"
  },
  "/assets/Logo-C_6nyl-f-loading-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/Logo-C_6nyl-f-loading-v1.js",
    "size": 307277,
    "etag": "\"84353fc38e3b2ca13458fddedb18ae7d1e38281d69e07dbbbf1f9fbbe2adf0d0\"",
    "mtime": "2026-11-14T14:34:46.974Z"
  },
  "/assets/Logo-C_6nyl-f-members-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/Logo-C_6nyl-f-members-v1.js",
    "size": 307277,
    "etag": "\"84353fc38e3b2ca13458fddedb18ae7d1e38281d69e07dbbbf1f9fbbe2adf0d0\"",
    "mtime": "2026-11-14T14:34:47.017Z"
  },
  "/assets/Logo-C_6nyl-f-profiles-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/Logo-C_6nyl-f-profiles-v1.js",
    "size": 307277,
    "etag": "\"84353fc38e3b2ca13458fddedb18ae7d1e38281d69e07dbbbf1f9fbbe2adf0d0\"",
    "mtime": "2026-11-14T14:34:46.979Z"
  },
  "/assets/Logo-C_6nyl-f-teams-only-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/Logo-C_6nyl-f-teams-only-v1.js",
    "size": 307277,
    "etag": "\"84353fc38e3b2ca13458fddedb18ae7d1e38281d69e07dbbbf1f9fbbe2adf0d0\"",
    "mtime": "2026-11-14T14:34:46.987Z"
  },
  "/assets/Logo-C_6nyl-f-tournaments-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/Logo-C_6nyl-f-tournaments-v1.js",
    "size": 307277,
    "etag": "\"84353fc38e3b2ca13458fddedb18ae7d1e38281d69e07dbbbf1f9fbbe2adf0d0\"",
    "mtime": "2026-11-14T14:34:46.997Z"
  },
  "/assets/Logo-C_6nyl-f.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/Logo-C_6nyl-f.js",
    "size": 307277,
    "etag": "\"84353fc38e3b2ca13458fddedb18ae7d1e38281d69e07dbbbf1f9fbbe2adf0d0\"",
    "mtime": "2026-11-14T14:34:47.006Z"
  },
  "/assets/ModalityLogo-DD3chhhi-aligned-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/ModalityLogo-DD3chhhi-aligned-v1.js",
    "size": 838,
    "etag": "\"8f92b9cdf6c3a252e652a5e80c1c83737ab69563022e561491c1258f5fba924b\"",
    "mtime": "2026-11-14T14:34:46.945Z"
  },
  "/assets/ModalityLogo-DD3chhhi-athlete-v2.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/ModalityLogo-DD3chhhi-athlete-v2.js",
    "size": 838,
    "etag": "\"8f92b9cdf6c3a252e652a5e80c1c83737ab69563022e561491c1258f5fba924b\"",
    "mtime": "2026-11-14T14:34:47.023Z"
  },
  "/assets/ModalityLogo-DD3chhhi-badge-art-v2.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/ModalityLogo-DD3chhhi-badge-art-v2.js",
    "size": 838,
    "etag": "\"8f92b9cdf6c3a252e652a5e80c1c83737ab69563022e561491c1258f5fba924b\"",
    "mtime": "2026-11-14T14:34:47.026Z"
  },
  "/assets/ModalityLogo-DD3chhhi-badges-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/ModalityLogo-DD3chhhi-badges-v1.js",
    "size": 838,
    "etag": "\"8f92b9cdf6c3a252e652a5e80c1c83737ab69563022e561491c1258f5fba924b\"",
    "mtime": "2026-11-14T14:34:46.958Z"
  },
  "/assets/ModalityLogo-DD3chhhi-game-logos-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/ModalityLogo-DD3chhhi-game-logos-v1.js",
    "size": 838,
    "etag": "\"8f92b9cdf6c3a252e652a5e80c1c83737ab69563022e561491c1258f5fba924b\"",
    "mtime": "2026-11-14T14:34:46.984Z"
  },
  "/assets/ModalityLogo-DD3chhhi-live-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/ModalityLogo-DD3chhhi-live-v1.js",
    "size": 838,
    "etag": "\"8f92b9cdf6c3a252e652a5e80c1c83737ab69563022e561491c1258f5fba924b\"",
    "mtime": "2026-11-14T14:34:46.960Z"
  },
  "/assets/ModalityLogo-DD3chhhi-loading-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/ModalityLogo-DD3chhhi-loading-v1.js",
    "size": 838,
    "etag": "\"8f92b9cdf6c3a252e652a5e80c1c83737ab69563022e561491c1258f5fba924b\"",
    "mtime": "2026-11-14T14:34:46.942Z"
  },
  "/assets/ModalityLogo-DD3chhhi-members-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/ModalityLogo-DD3chhhi-members-v1.js",
    "size": 838,
    "etag": "\"8f92b9cdf6c3a252e652a5e80c1c83737ab69563022e561491c1258f5fba924b\"",
    "mtime": "2026-11-14T14:34:46.935Z"
  },
  "/assets/ModalityLogo-DD3chhhi-profiles-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/ModalityLogo-DD3chhhi-profiles-v1.js",
    "size": 838,
    "etag": "\"8f92b9cdf6c3a252e652a5e80c1c83737ab69563022e561491c1258f5fba924b\"",
    "mtime": "2026-11-14T14:34:47.010Z"
  },
  "/assets/ModalityLogo-DD3chhhi-teams-only-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/ModalityLogo-DD3chhhi-teams-only-v1.js",
    "size": 838,
    "etag": "\"8f92b9cdf6c3a252e652a5e80c1c83737ab69563022e561491c1258f5fba924b\"",
    "mtime": "2026-11-14T14:34:46.981Z"
  },
  "/assets/ModalityLogo-DD3chhhi-tournaments-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/ModalityLogo-DD3chhhi-tournaments-v1.js",
    "size": 838,
    "etag": "\"8f92b9cdf6c3a252e652a5e80c1c83737ab69563022e561491c1258f5fba924b\"",
    "mtime": "2026-11-14T14:34:47.017Z"
  },
  "/assets/ModalityLogo-DD3chhhi.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/ModalityLogo-DD3chhhi.js",
    "size": 838,
    "etag": "\"8f92b9cdf6c3a252e652a5e80c1c83737ab69563022e561491c1258f5fba924b\"",
    "mtime": "2026-11-14T14:34:46.943Z"
  },
  "/assets/admin-laes-20261111-aligned-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/admin-laes-20261111-aligned-v1.js",
    "size": 278,
    "etag": "\"37d8d199108023192766098234987fd0024eb9925e9b643b4d8e0926a0005cab\"",
    "mtime": "2026-11-14T14:34:47.003Z"
  },
  "/assets/admin-laes-20261111-athlete-v2.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/admin-laes-20261111-athlete-v2.js",
    "size": 278,
    "etag": "\"37d8d199108023192766098234987fd0024eb9925e9b643b4d8e0926a0005cab\"",
    "mtime": "2026-11-14T14:34:46.963Z"
  },
  "/assets/admin-laes-20261111-badge-art-v2.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/admin-laes-20261111-badge-art-v2.js",
    "size": 278,
    "etag": "\"37d8d199108023192766098234987fd0024eb9925e9b643b4d8e0926a0005cab\"",
    "mtime": "2026-11-14T14:34:47.021Z"
  },
  "/assets/admin-laes-20261111-badges-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/admin-laes-20261111-badges-v1.js",
    "size": 278,
    "etag": "\"37d8d199108023192766098234987fd0024eb9925e9b643b4d8e0926a0005cab\"",
    "mtime": "2026-11-14T14:34:46.964Z"
  },
  "/assets/admin-laes-20261111-game-logos-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/admin-laes-20261111-game-logos-v1.js",
    "size": 278,
    "etag": "\"37d8d199108023192766098234987fd0024eb9925e9b643b4d8e0926a0005cab\"",
    "mtime": "2026-11-14T14:34:47.026Z"
  },
  "/assets/admin-laes-20261111-live-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/admin-laes-20261111-live-v1.js",
    "size": 278,
    "etag": "\"37d8d199108023192766098234987fd0024eb9925e9b643b4d8e0926a0005cab\"",
    "mtime": "2026-11-14T14:34:47.003Z"
  },
  "/assets/admin-laes-20261111-loading-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/admin-laes-20261111-loading-v1.js",
    "size": 278,
    "etag": "\"37d8d199108023192766098234987fd0024eb9925e9b643b4d8e0926a0005cab\"",
    "mtime": "2026-11-14T14:34:47.028Z"
  },
  "/assets/admin-laes-20261111-members-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/admin-laes-20261111-members-v1.js",
    "size": 278,
    "etag": "\"37d8d199108023192766098234987fd0024eb9925e9b643b4d8e0926a0005cab\"",
    "mtime": "2026-11-14T14:34:47.010Z"
  },
  "/assets/admin-laes-20261111-profiles-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/admin-laes-20261111-profiles-v1.js",
    "size": 278,
    "etag": "\"37d8d199108023192766098234987fd0024eb9925e9b643b4d8e0926a0005cab\"",
    "mtime": "2026-11-14T14:34:46.948Z"
  },
  "/assets/admin-laes-20261111-teams-only-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/admin-laes-20261111-teams-only-v1.js",
    "size": 278,
    "etag": "\"37d8d199108023192766098234987fd0024eb9925e9b643b4d8e0926a0005cab\"",
    "mtime": "2026-11-14T14:34:46.932Z"
  },
  "/assets/admin-laes-20261111-tournaments-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/admin-laes-20261111-tournaments-v1.js",
    "size": 278,
    "etag": "\"37d8d199108023192766098234987fd0024eb9925e9b643b4d8e0926a0005cab\"",
    "mtime": "2026-11-14T14:34:46.941Z"
  },
  "/assets/admin-laes-20261111.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/admin-laes-20261111.js",
    "size": 278,
    "etag": "\"37d8d199108023192766098234987fd0024eb9925e9b643b4d8e0926a0005cab\"",
    "mtime": "2026-11-14T14:34:46.986Z"
  },
  "/assets/admin-legacy-laes-teams-aligned-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/admin-legacy-laes-teams-aligned-v1.js",
    "size": 18368,
    "etag": "\"082c48cf1e782ed074d6d92ed452934dbd58de99e8154d84088745b3b89314ca\"",
    "mtime": "2026-11-14T14:34:46.996Z"
  },
  "/assets/admin-legacy-laes-teams-athlete-v2.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/admin-legacy-laes-teams-athlete-v2.js",
    "size": 18368,
    "etag": "\"082c48cf1e782ed074d6d92ed452934dbd58de99e8154d84088745b3b89314ca\"",
    "mtime": "2026-11-14T14:34:47.024Z"
  },
  "/assets/admin-legacy-laes-teams-badge-art-v2.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/admin-legacy-laes-teams-badge-art-v2.js",
    "size": 18368,
    "etag": "\"082c48cf1e782ed074d6d92ed452934dbd58de99e8154d84088745b3b89314ca\"",
    "mtime": "2026-11-14T14:34:46.994Z"
  },
  "/assets/admin-legacy-laes-teams-badges-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/admin-legacy-laes-teams-badges-v1.js",
    "size": 18368,
    "etag": "\"082c48cf1e782ed074d6d92ed452934dbd58de99e8154d84088745b3b89314ca\"",
    "mtime": "2026-11-14T14:34:46.977Z"
  },
  "/assets/admin-legacy-laes-teams-game-logos-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/admin-legacy-laes-teams-game-logos-v1.js",
    "size": 18368,
    "etag": "\"082c48cf1e782ed074d6d92ed452934dbd58de99e8154d84088745b3b89314ca\"",
    "mtime": "2026-11-14T14:34:47.018Z"
  },
  "/assets/admin-legacy-laes-teams-live-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/admin-legacy-laes-teams-live-v1.js",
    "size": 18368,
    "etag": "\"082c48cf1e782ed074d6d92ed452934dbd58de99e8154d84088745b3b89314ca\"",
    "mtime": "2026-11-14T14:34:46.932Z"
  },
  "/assets/admin-legacy-laes-teams-loading-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/admin-legacy-laes-teams-loading-v1.js",
    "size": 18368,
    "etag": "\"082c48cf1e782ed074d6d92ed452934dbd58de99e8154d84088745b3b89314ca\"",
    "mtime": "2026-11-14T14:34:46.939Z"
  },
  "/assets/admin-legacy-laes-teams-members-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/admin-legacy-laes-teams-members-v1.js",
    "size": 18368,
    "etag": "\"082c48cf1e782ed074d6d92ed452934dbd58de99e8154d84088745b3b89314ca\"",
    "mtime": "2026-11-14T14:34:47.015Z"
  },
  "/assets/admin-legacy-laes-teams-profiles-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/admin-legacy-laes-teams-profiles-v1.js",
    "size": 18368,
    "etag": "\"082c48cf1e782ed074d6d92ed452934dbd58de99e8154d84088745b3b89314ca\"",
    "mtime": "2026-11-14T14:34:46.995Z"
  },
  "/assets/admin-legacy-laes-teams-teams-only-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/admin-legacy-laes-teams-teams-only-v1.js",
    "size": 18368,
    "etag": "\"082c48cf1e782ed074d6d92ed452934dbd58de99e8154d84088745b3b89314ca\"",
    "mtime": "2026-11-14T14:34:46.984Z"
  },
  "/assets/admin-legacy-laes-teams-tournaments-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/admin-legacy-laes-teams-tournaments-v1.js",
    "size": 18368,
    "etag": "\"082c48cf1e782ed074d6d92ed452934dbd58de99e8154d84088745b3b89314ca\"",
    "mtime": "2026-11-14T14:34:46.985Z"
  },
  "/assets/admin-legacy-laes-teams.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/admin-legacy-laes-teams.js",
    "size": 18368,
    "etag": "\"082c48cf1e782ed074d6d92ed452934dbd58de99e8154d84088745b3b89314ca\"",
    "mtime": "2026-11-14T14:34:46.962Z"
  },
  "/assets/arrow-right-C3IoG7NQ-aligned-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/arrow-right-C3IoG7NQ-aligned-v1.js",
    "size": 166,
    "etag": "\"39ab0beffb35096acd5b560b6df4492f2902657d28efe651a7aebb1668f4aba0\"",
    "mtime": "2026-11-14T14:34:46.966Z"
  },
  "/assets/arrow-right-C3IoG7NQ-athlete-v2.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/arrow-right-C3IoG7NQ-athlete-v2.js",
    "size": 166,
    "etag": "\"39ab0beffb35096acd5b560b6df4492f2902657d28efe651a7aebb1668f4aba0\"",
    "mtime": "2026-11-14T14:34:46.941Z"
  },
  "/assets/arrow-right-C3IoG7NQ-badge-art-v2.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/arrow-right-C3IoG7NQ-badge-art-v2.js",
    "size": 166,
    "etag": "\"39ab0beffb35096acd5b560b6df4492f2902657d28efe651a7aebb1668f4aba0\"",
    "mtime": "2026-11-14T14:34:47.005Z"
  },
  "/assets/arrow-right-C3IoG7NQ-badges-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/arrow-right-C3IoG7NQ-badges-v1.js",
    "size": 166,
    "etag": "\"39ab0beffb35096acd5b560b6df4492f2902657d28efe651a7aebb1668f4aba0\"",
    "mtime": "2026-11-14T14:34:47.031Z"
  },
  "/assets/arrow-right-C3IoG7NQ-game-logos-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/arrow-right-C3IoG7NQ-game-logos-v1.js",
    "size": 166,
    "etag": "\"39ab0beffb35096acd5b560b6df4492f2902657d28efe651a7aebb1668f4aba0\"",
    "mtime": "2026-11-14T14:34:47.011Z"
  },
  "/assets/arrow-right-C3IoG7NQ-live-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/arrow-right-C3IoG7NQ-live-v1.js",
    "size": 166,
    "etag": "\"39ab0beffb35096acd5b560b6df4492f2902657d28efe651a7aebb1668f4aba0\"",
    "mtime": "2026-11-14T14:34:46.944Z"
  },
  "/assets/arrow-right-C3IoG7NQ-loading-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/arrow-right-C3IoG7NQ-loading-v1.js",
    "size": 166,
    "etag": "\"39ab0beffb35096acd5b560b6df4492f2902657d28efe651a7aebb1668f4aba0\"",
    "mtime": "2026-11-14T14:34:46.964Z"
  },
  "/assets/arrow-right-C3IoG7NQ-members-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/arrow-right-C3IoG7NQ-members-v1.js",
    "size": 166,
    "etag": "\"39ab0beffb35096acd5b560b6df4492f2902657d28efe651a7aebb1668f4aba0\"",
    "mtime": "2026-11-14T14:34:46.973Z"
  },
  "/assets/arrow-right-C3IoG7NQ-profiles-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/arrow-right-C3IoG7NQ-profiles-v1.js",
    "size": 166,
    "etag": "\"39ab0beffb35096acd5b560b6df4492f2902657d28efe651a7aebb1668f4aba0\"",
    "mtime": "2026-11-14T14:34:46.947Z"
  },
  "/assets/arrow-right-C3IoG7NQ-teams-only-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/arrow-right-C3IoG7NQ-teams-only-v1.js",
    "size": 166,
    "etag": "\"39ab0beffb35096acd5b560b6df4492f2902657d28efe651a7aebb1668f4aba0\"",
    "mtime": "2026-11-14T14:34:47.028Z"
  },
  "/assets/arrow-right-C3IoG7NQ-tournaments-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/arrow-right-C3IoG7NQ-tournaments-v1.js",
    "size": 166,
    "etag": "\"39ab0beffb35096acd5b560b6df4492f2902657d28efe651a7aebb1668f4aba0\"",
    "mtime": "2026-11-14T14:34:46.996Z"
  },
  "/assets/arrow-right-C3IoG7NQ.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/arrow-right-C3IoG7NQ.js",
    "size": 166,
    "etag": "\"39ab0beffb35096acd5b560b6df4492f2902657d28efe651a7aebb1668f4aba0\"",
    "mtime": "2026-11-14T14:34:47.003Z"
  },
  "/assets/arrow-up-right-JxYzkyTJ-aligned-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/arrow-up-right-JxYzkyTJ-aligned-v1.js",
    "size": 168,
    "etag": "\"8b2f8ccc6533ac80e1aedd8695185416149625ff2a1ca17b2410cd9767d831fa\"",
    "mtime": "2026-11-14T14:34:46.927Z"
  },
  "/assets/arrow-up-right-JxYzkyTJ-athlete-v2.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/arrow-up-right-JxYzkyTJ-athlete-v2.js",
    "size": 168,
    "etag": "\"8b2f8ccc6533ac80e1aedd8695185416149625ff2a1ca17b2410cd9767d831fa\"",
    "mtime": "2026-11-14T14:34:47.018Z"
  },
  "/assets/arrow-up-right-JxYzkyTJ-badge-art-v2.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/arrow-up-right-JxYzkyTJ-badge-art-v2.js",
    "size": 168,
    "etag": "\"8b2f8ccc6533ac80e1aedd8695185416149625ff2a1ca17b2410cd9767d831fa\"",
    "mtime": "2026-11-14T14:34:47.026Z"
  },
  "/assets/arrow-up-right-JxYzkyTJ-badges-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/arrow-up-right-JxYzkyTJ-badges-v1.js",
    "size": 168,
    "etag": "\"8b2f8ccc6533ac80e1aedd8695185416149625ff2a1ca17b2410cd9767d831fa\"",
    "mtime": "2026-11-14T14:34:46.991Z"
  },
  "/assets/arrow-up-right-JxYzkyTJ-game-logos-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/arrow-up-right-JxYzkyTJ-game-logos-v1.js",
    "size": 168,
    "etag": "\"8b2f8ccc6533ac80e1aedd8695185416149625ff2a1ca17b2410cd9767d831fa\"",
    "mtime": "2026-11-14T14:34:47.032Z"
  },
  "/assets/arrow-up-right-JxYzkyTJ-live-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/arrow-up-right-JxYzkyTJ-live-v1.js",
    "size": 168,
    "etag": "\"8b2f8ccc6533ac80e1aedd8695185416149625ff2a1ca17b2410cd9767d831fa\"",
    "mtime": "2026-11-14T14:34:46.942Z"
  },
  "/assets/arrow-up-right-JxYzkyTJ-loading-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/arrow-up-right-JxYzkyTJ-loading-v1.js",
    "size": 168,
    "etag": "\"8b2f8ccc6533ac80e1aedd8695185416149625ff2a1ca17b2410cd9767d831fa\"",
    "mtime": "2026-11-14T14:34:46.965Z"
  },
  "/assets/arrow-up-right-JxYzkyTJ-members-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/arrow-up-right-JxYzkyTJ-members-v1.js",
    "size": 168,
    "etag": "\"8b2f8ccc6533ac80e1aedd8695185416149625ff2a1ca17b2410cd9767d831fa\"",
    "mtime": "2026-11-14T14:34:46.946Z"
  },
  "/assets/arrow-up-right-JxYzkyTJ-profiles-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/arrow-up-right-JxYzkyTJ-profiles-v1.js",
    "size": 168,
    "etag": "\"8b2f8ccc6533ac80e1aedd8695185416149625ff2a1ca17b2410cd9767d831fa\"",
    "mtime": "2026-11-14T14:34:47.012Z"
  },
  "/assets/arrow-up-right-JxYzkyTJ-teams-only-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/arrow-up-right-JxYzkyTJ-teams-only-v1.js",
    "size": 168,
    "etag": "\"8b2f8ccc6533ac80e1aedd8695185416149625ff2a1ca17b2410cd9767d831fa\"",
    "mtime": "2026-11-14T14:34:47.026Z"
  },
  "/assets/arrow-up-right-JxYzkyTJ-tournaments-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/arrow-up-right-JxYzkyTJ-tournaments-v1.js",
    "size": 168,
    "etag": "\"8b2f8ccc6533ac80e1aedd8695185416149625ff2a1ca17b2410cd9767d831fa\"",
    "mtime": "2026-11-14T14:34:47.017Z"
  },
  "/assets/arrow-up-right-JxYzkyTJ.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/arrow-up-right-JxYzkyTJ.js",
    "size": 168,
    "etag": "\"8b2f8ccc6533ac80e1aedd8695185416149625ff2a1ca17b2410cd9767d831fa\"",
    "mtime": "2026-11-14T14:34:47.025Z"
  },
  "/assets/atletas._nick-DnopNenw-aligned-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/atletas._nick-DnopNenw-aligned-v1.js",
    "size": 333,
    "etag": "\"e1e9e2007a6d6fa95647980c7a174a3922aaddf82e0e6d5f6bc0e62cb3111720\"",
    "mtime": "2026-11-14T14:34:47.009Z"
  },
  "/assets/atletas._nick-DnopNenw-athlete-v2.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/atletas._nick-DnopNenw-athlete-v2.js",
    "size": 333,
    "etag": "\"e1e9e2007a6d6fa95647980c7a174a3922aaddf82e0e6d5f6bc0e62cb3111720\"",
    "mtime": "2026-11-14T14:34:47.022Z"
  },
  "/assets/atletas._nick-DnopNenw-badge-art-v2.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/atletas._nick-DnopNenw-badge-art-v2.js",
    "size": 333,
    "etag": "\"e1e9e2007a6d6fa95647980c7a174a3922aaddf82e0e6d5f6bc0e62cb3111720\"",
    "mtime": "2026-11-14T14:34:46.978Z"
  },
  "/assets/atletas._nick-DnopNenw-badges-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/atletas._nick-DnopNenw-badges-v1.js",
    "size": 333,
    "etag": "\"e1e9e2007a6d6fa95647980c7a174a3922aaddf82e0e6d5f6bc0e62cb3111720\"",
    "mtime": "2026-11-14T14:34:46.998Z"
  },
  "/assets/atletas._nick-DnopNenw-game-logos-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/atletas._nick-DnopNenw-game-logos-v1.js",
    "size": 333,
    "etag": "\"e1e9e2007a6d6fa95647980c7a174a3922aaddf82e0e6d5f6bc0e62cb3111720\"",
    "mtime": "2026-11-14T14:34:46.986Z"
  },
  "/assets/atletas._nick-DnopNenw-live-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/atletas._nick-DnopNenw-live-v1.js",
    "size": 333,
    "etag": "\"e1e9e2007a6d6fa95647980c7a174a3922aaddf82e0e6d5f6bc0e62cb3111720\"",
    "mtime": "2026-11-14T14:34:47.031Z"
  },
  "/assets/atletas._nick-DnopNenw-loading-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/atletas._nick-DnopNenw-loading-v1.js",
    "size": 333,
    "etag": "\"e1e9e2007a6d6fa95647980c7a174a3922aaddf82e0e6d5f6bc0e62cb3111720\"",
    "mtime": "2026-11-14T14:34:46.937Z"
  },
  "/assets/atletas._nick-DnopNenw-members-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/atletas._nick-DnopNenw-members-v1.js",
    "size": 333,
    "etag": "\"e1e9e2007a6d6fa95647980c7a174a3922aaddf82e0e6d5f6bc0e62cb3111720\"",
    "mtime": "2026-11-14T14:34:47.011Z"
  },
  "/assets/atletas._nick-DnopNenw-profiles-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/atletas._nick-DnopNenw-profiles-v1.js",
    "size": 333,
    "etag": "\"e1e9e2007a6d6fa95647980c7a174a3922aaddf82e0e6d5f6bc0e62cb3111720\"",
    "mtime": "2026-11-14T14:34:47.026Z"
  },
  "/assets/atletas._nick-DnopNenw-teams-only-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/atletas._nick-DnopNenw-teams-only-v1.js",
    "size": 333,
    "etag": "\"e1e9e2007a6d6fa95647980c7a174a3922aaddf82e0e6d5f6bc0e62cb3111720\"",
    "mtime": "2026-11-14T14:34:46.989Z"
  },
  "/assets/atletas._nick-DnopNenw-tournaments-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/atletas._nick-DnopNenw-tournaments-v1.js",
    "size": 333,
    "etag": "\"e1e9e2007a6d6fa95647980c7a174a3922aaddf82e0e6d5f6bc0e62cb3111720\"",
    "mtime": "2026-11-14T14:34:46.973Z"
  },
  "/assets/atletas._nick-DnopNenw.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/atletas._nick-DnopNenw.js",
    "size": 333,
    "etag": "\"e1e9e2007a6d6fa95647980c7a174a3922aaddf82e0e6d5f6bc0e62cb3111720\"",
    "mtime": "2026-11-14T14:34:46.980Z"
  },
  "/assets/button-BxdZE2Aq-aligned-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/button-BxdZE2Aq-aligned-v1.js",
    "size": 4770,
    "etag": "\"4a1fdda3f89801d6b4700e8fa65202e408c42bca7643b888ed4fb574f4e6362a\"",
    "mtime": "2026-11-14T14:34:46.965Z"
  },
  "/assets/button-BxdZE2Aq-athlete-v2.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/button-BxdZE2Aq-athlete-v2.js",
    "size": 4770,
    "etag": "\"4a1fdda3f89801d6b4700e8fa65202e408c42bca7643b888ed4fb574f4e6362a\"",
    "mtime": "2026-11-14T14:34:46.930Z"
  },
  "/assets/button-BxdZE2Aq-badge-art-v2.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/button-BxdZE2Aq-badge-art-v2.js",
    "size": 4770,
    "etag": "\"4a1fdda3f89801d6b4700e8fa65202e408c42bca7643b888ed4fb574f4e6362a\"",
    "mtime": "2026-11-14T14:34:46.967Z"
  },
  "/assets/button-BxdZE2Aq-badges-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/button-BxdZE2Aq-badges-v1.js",
    "size": 4770,
    "etag": "\"4a1fdda3f89801d6b4700e8fa65202e408c42bca7643b888ed4fb574f4e6362a\"",
    "mtime": "2026-11-14T14:34:47.001Z"
  },
  "/assets/button-BxdZE2Aq-game-logos-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/button-BxdZE2Aq-game-logos-v1.js",
    "size": 4770,
    "etag": "\"4a1fdda3f89801d6b4700e8fa65202e408c42bca7643b888ed4fb574f4e6362a\"",
    "mtime": "2026-11-14T14:34:47.015Z"
  },
  "/assets/button-BxdZE2Aq-live-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/button-BxdZE2Aq-live-v1.js",
    "size": 4770,
    "etag": "\"4a1fdda3f89801d6b4700e8fa65202e408c42bca7643b888ed4fb574f4e6362a\"",
    "mtime": "2026-11-14T14:34:46.952Z"
  },
  "/assets/button-BxdZE2Aq-loading-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/button-BxdZE2Aq-loading-v1.js",
    "size": 4770,
    "etag": "\"4a1fdda3f89801d6b4700e8fa65202e408c42bca7643b888ed4fb574f4e6362a\"",
    "mtime": "2026-11-14T14:34:47.001Z"
  },
  "/assets/button-BxdZE2Aq-members-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/button-BxdZE2Aq-members-v1.js",
    "size": 4770,
    "etag": "\"4a1fdda3f89801d6b4700e8fa65202e408c42bca7643b888ed4fb574f4e6362a\"",
    "mtime": "2026-11-14T14:34:47.013Z"
  },
  "/assets/button-BxdZE2Aq-profiles-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/button-BxdZE2Aq-profiles-v1.js",
    "size": 4770,
    "etag": "\"4a1fdda3f89801d6b4700e8fa65202e408c42bca7643b888ed4fb574f4e6362a\"",
    "mtime": "2026-11-14T14:34:46.939Z"
  },
  "/assets/button-BxdZE2Aq-teams-only-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/button-BxdZE2Aq-teams-only-v1.js",
    "size": 4770,
    "etag": "\"4a1fdda3f89801d6b4700e8fa65202e408c42bca7643b888ed4fb574f4e6362a\"",
    "mtime": "2026-11-14T14:34:46.997Z"
  },
  "/assets/button-BxdZE2Aq-tournaments-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/button-BxdZE2Aq-tournaments-v1.js",
    "size": 4770,
    "etag": "\"4a1fdda3f89801d6b4700e8fa65202e408c42bca7643b888ed4fb574f4e6362a\"",
    "mtime": "2026-11-14T14:34:46.963Z"
  },
  "/assets/button-BxdZE2Aq.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/button-BxdZE2Aq.js",
    "size": 4770,
    "etag": "\"4a1fdda3f89801d6b4700e8fa65202e408c42bca7643b888ed4fb574f4e6362a\"",
    "mtime": "2026-11-14T14:34:47.018Z"
  },
  "/assets/cadastro-D1_MikOu-aligned-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/cadastro-D1_MikOu-aligned-v1.js",
    "size": 194,
    "etag": "\"3ffe159e6715c68769c1ede2bb6809f2a63d27b3682bfe26968a1794106225ce\"",
    "mtime": "2026-11-14T14:34:46.982Z"
  },
  "/assets/cadastro-D1_MikOu-athlete-v2.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/cadastro-D1_MikOu-athlete-v2.js",
    "size": 194,
    "etag": "\"3ffe159e6715c68769c1ede2bb6809f2a63d27b3682bfe26968a1794106225ce\"",
    "mtime": "2026-11-14T14:34:46.929Z"
  },
  "/assets/cadastro-D1_MikOu-badge-art-v2.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/cadastro-D1_MikOu-badge-art-v2.js",
    "size": 194,
    "etag": "\"3ffe159e6715c68769c1ede2bb6809f2a63d27b3682bfe26968a1794106225ce\"",
    "mtime": "2026-11-14T14:34:46.971Z"
  },
  "/assets/cadastro-D1_MikOu-badges-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/cadastro-D1_MikOu-badges-v1.js",
    "size": 194,
    "etag": "\"3ffe159e6715c68769c1ede2bb6809f2a63d27b3682bfe26968a1794106225ce\"",
    "mtime": "2026-11-14T14:34:47.007Z"
  },
  "/assets/cadastro-D1_MikOu-game-logos-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/cadastro-D1_MikOu-game-logos-v1.js",
    "size": 194,
    "etag": "\"3ffe159e6715c68769c1ede2bb6809f2a63d27b3682bfe26968a1794106225ce\"",
    "mtime": "2026-11-14T14:34:47.032Z"
  },
  "/assets/cadastro-D1_MikOu-live-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/cadastro-D1_MikOu-live-v1.js",
    "size": 194,
    "etag": "\"3ffe159e6715c68769c1ede2bb6809f2a63d27b3682bfe26968a1794106225ce\"",
    "mtime": "2026-11-14T14:34:47.024Z"
  },
  "/assets/cadastro-D1_MikOu-loading-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/cadastro-D1_MikOu-loading-v1.js",
    "size": 194,
    "etag": "\"3ffe159e6715c68769c1ede2bb6809f2a63d27b3682bfe26968a1794106225ce\"",
    "mtime": "2026-11-14T14:34:46.926Z"
  },
  "/assets/cadastro-D1_MikOu-members-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/cadastro-D1_MikOu-members-v1.js",
    "size": 194,
    "etag": "\"3ffe159e6715c68769c1ede2bb6809f2a63d27b3682bfe26968a1794106225ce\"",
    "mtime": "2026-11-14T14:34:46.998Z"
  },
  "/assets/cadastro-D1_MikOu-profiles-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/cadastro-D1_MikOu-profiles-v1.js",
    "size": 194,
    "etag": "\"3ffe159e6715c68769c1ede2bb6809f2a63d27b3682bfe26968a1794106225ce\"",
    "mtime": "2026-11-14T14:34:46.930Z"
  },
  "/assets/cadastro-D1_MikOu-teams-only-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/cadastro-D1_MikOu-teams-only-v1.js",
    "size": 194,
    "etag": "\"3ffe159e6715c68769c1ede2bb6809f2a63d27b3682bfe26968a1794106225ce\"",
    "mtime": "2026-11-14T14:34:46.941Z"
  },
  "/assets/cadastro-D1_MikOu-tournaments-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/cadastro-D1_MikOu-tournaments-v1.js",
    "size": 194,
    "etag": "\"3ffe159e6715c68769c1ede2bb6809f2a63d27b3682bfe26968a1794106225ce\"",
    "mtime": "2026-11-14T14:34:47.012Z"
  },
  "/assets/cadastro-D1_MikOu.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/cadastro-D1_MikOu.js",
    "size": 194,
    "etag": "\"3ffe159e6715c68769c1ede2bb6809f2a63d27b3682bfe26968a1794106225ce\"",
    "mtime": "2026-11-14T14:34:46.984Z"
  },
  "/assets/campeonatos._id-CznoM8ax-aligned-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/campeonatos._id-CznoM8ax-aligned-v1.js",
    "size": 2390,
    "etag": "\"77f34718b1ccd2f01542774cfbb2f48a9f392617cf33c26a10cd4188256e4245\"",
    "mtime": "2026-11-14T14:34:47.007Z"
  },
  "/assets/campeonatos._id-CznoM8ax-athlete-v2.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/campeonatos._id-CznoM8ax-athlete-v2.js",
    "size": 2273,
    "etag": "\"35731902beb08a8e3ed75803d8b88abac4b1547c4fb8f6ace5882f9646fe5bb2\"",
    "mtime": "2026-11-14T14:34:46.986Z"
  },
  "/assets/campeonatos._id-CznoM8ax-badge-art-v2.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/campeonatos._id-CznoM8ax-badge-art-v2.js",
    "size": 2390,
    "etag": "\"77f34718b1ccd2f01542774cfbb2f48a9f392617cf33c26a10cd4188256e4245\"",
    "mtime": "2026-11-14T14:34:46.942Z"
  },
  "/assets/campeonatos._id-CznoM8ax-badges-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/campeonatos._id-CznoM8ax-badges-v1.js",
    "size": 2390,
    "etag": "\"77f34718b1ccd2f01542774cfbb2f48a9f392617cf33c26a10cd4188256e4245\"",
    "mtime": "2026-11-14T14:34:46.973Z"
  },
  "/assets/campeonatos._id-CznoM8ax-game-logos-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/campeonatos._id-CznoM8ax-game-logos-v1.js",
    "size": 2390,
    "etag": "\"77f34718b1ccd2f01542774cfbb2f48a9f392617cf33c26a10cd4188256e4245\"",
    "mtime": "2026-11-14T14:34:47.007Z"
  },
  "/assets/campeonatos._id-CznoM8ax-live-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/campeonatos._id-CznoM8ax-live-v1.js",
    "size": 2390,
    "etag": "\"77f34718b1ccd2f01542774cfbb2f48a9f392617cf33c26a10cd4188256e4245\"",
    "mtime": "2026-11-14T14:34:46.978Z"
  },
  "/assets/campeonatos._id-CznoM8ax-loading-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/campeonatos._id-CznoM8ax-loading-v1.js",
    "size": 2390,
    "etag": "\"77f34718b1ccd2f01542774cfbb2f48a9f392617cf33c26a10cd4188256e4245\"",
    "mtime": "2026-11-14T14:34:46.931Z"
  },
  "/assets/campeonatos._id-CznoM8ax-members-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/campeonatos._id-CznoM8ax-members-v1.js",
    "size": 2390,
    "etag": "\"77f34718b1ccd2f01542774cfbb2f48a9f392617cf33c26a10cd4188256e4245\"",
    "mtime": "2026-11-14T14:34:47.010Z"
  },
  "/assets/campeonatos._id-CznoM8ax-profiles-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/campeonatos._id-CznoM8ax-profiles-v1.js",
    "size": 2390,
    "etag": "\"77f34718b1ccd2f01542774cfbb2f48a9f392617cf33c26a10cd4188256e4245\"",
    "mtime": "2026-11-14T14:34:46.972Z"
  },
  "/assets/campeonatos._id-CznoM8ax-teams-only-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/campeonatos._id-CznoM8ax-teams-only-v1.js",
    "size": 2390,
    "etag": "\"77f34718b1ccd2f01542774cfbb2f48a9f392617cf33c26a10cd4188256e4245\"",
    "mtime": "2026-11-14T14:34:46.942Z"
  },
  "/assets/campeonatos._id-CznoM8ax-tournaments-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/campeonatos._id-CznoM8ax-tournaments-v1.js",
    "size": 2390,
    "etag": "\"77f34718b1ccd2f01542774cfbb2f48a9f392617cf33c26a10cd4188256e4245\"",
    "mtime": "2026-11-14T14:34:46.965Z"
  },
  "/assets/campeonatos._id-CznoM8ax.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/campeonatos._id-CznoM8ax.js",
    "size": 2390,
    "etag": "\"77f34718b1ccd2f01542774cfbb2f48a9f392617cf33c26a10cd4188256e4245\"",
    "mtime": "2026-11-14T14:34:46.970Z"
  },
  "/assets/campeonatos.index-BNNepVHG-aligned-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/campeonatos.index-BNNepVHG-aligned-v1.js",
    "size": 1934,
    "etag": "\"0aadeaa092c9b53d3cfdadee42ea21f49ad75f7f66f89666b8330c6c5b74a877\"",
    "mtime": "2026-11-14T14:34:46.986Z"
  },
  "/assets/campeonatos.index-BNNepVHG-athlete-v2.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/campeonatos.index-BNNepVHG-athlete-v2.js",
    "size": 1687,
    "etag": "\"c69398da4153171e6f718ecc8332b440ef6f80ebccd0f57a42061b615cf3b88d\"",
    "mtime": "2026-11-14T14:34:46.986Z"
  },
  "/assets/campeonatos-modalidades-20261115-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/campeonatos-modalidades-20261115-v1.js",
    "size": 1934,
    "etag": "\"0aadeaa092c9b53d3cfdadee42ea21f49ad75f7f66f89666b8330c6c5b74a877\"",
    "mtime": "2026-11-14T14:34:46.967Z"
  },
  "/assets/campeonatos.index-BNNepVHG-badges-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/campeonatos.index-BNNepVHG-badges-v1.js",
    "size": 1934,
    "etag": "\"0aadeaa092c9b53d3cfdadee42ea21f49ad75f7f66f89666b8330c6c5b74a877\"",
    "mtime": "2026-11-14T14:34:46.986Z"
  },
  "/assets/campeonatos.index-BNNepVHG-game-logos-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/campeonatos.index-BNNepVHG-game-logos-v1.js",
    "size": 1934,
    "etag": "\"0aadeaa092c9b53d3cfdadee42ea21f49ad75f7f66f89666b8330c6c5b74a877\"",
    "mtime": "2026-11-14T14:34:46.927Z"
  },
  "/assets/campeonatos.index-BNNepVHG-live-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/campeonatos.index-BNNepVHG-live-v1.js",
    "size": 1934,
    "etag": "\"0aadeaa092c9b53d3cfdadee42ea21f49ad75f7f66f89666b8330c6c5b74a877\"",
    "mtime": "2026-11-14T14:34:46.927Z"
  },
  "/assets/campeonatos.index-BNNepVHG-loading-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/campeonatos.index-BNNepVHG-loading-v1.js",
    "size": 1934,
    "etag": "\"0aadeaa092c9b53d3cfdadee42ea21f49ad75f7f66f89666b8330c6c5b74a877\"",
    "mtime": "2026-11-14T14:34:46.970Z"
  },
  "/assets/campeonatos.index-BNNepVHG-members-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/campeonatos.index-BNNepVHG-members-v1.js",
    "size": 1934,
    "etag": "\"0aadeaa092c9b53d3cfdadee42ea21f49ad75f7f66f89666b8330c6c5b74a877\"",
    "mtime": "2026-11-14T14:34:46.963Z"
  },
  "/assets/campeonatos.index-BNNepVHG-profiles-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/campeonatos.index-BNNepVHG-profiles-v1.js",
    "size": 1934,
    "etag": "\"0aadeaa092c9b53d3cfdadee42ea21f49ad75f7f66f89666b8330c6c5b74a877\"",
    "mtime": "2026-11-14T14:34:46.992Z"
  },
  "/assets/campeonatos.index-BNNepVHG-teams-only-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/campeonatos.index-BNNepVHG-teams-only-v1.js",
    "size": 1934,
    "etag": "\"0aadeaa092c9b53d3cfdadee42ea21f49ad75f7f66f89666b8330c6c5b74a877\"",
    "mtime": "2026-11-14T14:34:46.984Z"
  },
  "/assets/campeonatos.index-BNNepVHG-tournaments-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/campeonatos.index-BNNepVHG-tournaments-v1.js",
    "size": 1934,
    "etag": "\"0aadeaa092c9b53d3cfdadee42ea21f49ad75f7f66f89666b8330c6c5b74a877\"",
    "mtime": "2026-11-14T14:34:47.024Z"
  },
  "/assets/campeonatos.index-BNNepVHG.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/campeonatos.index-BNNepVHG.js",
    "size": 1934,
    "etag": "\"0aadeaa092c9b53d3cfdadee42ea21f49ad75f7f66f89666b8330c6c5b74a877\"",
    "mtime": "2026-11-14T14:34:46.981Z"
  },
  "/assets/catalog-CRDv40LD-aligned-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/catalog-CRDv40LD-aligned-v1.js",
    "size": 682,
    "etag": "\"494c00ecbd74abf3331c6759af8011029ca64454a3324b80a7465e2a7f4cf32d\"",
    "mtime": "2026-11-14T14:34:47.016Z"
  },
  "/assets/catalog-CRDv40LD-athlete-v2.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/catalog-CRDv40LD-athlete-v2.js",
    "size": 682,
    "etag": "\"494c00ecbd74abf3331c6759af8011029ca64454a3324b80a7465e2a7f4cf32d\"",
    "mtime": "2026-11-14T14:34:46.939Z"
  },
  "/assets/catalog-CRDv40LD-badge-art-v2.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/catalog-CRDv40LD-badge-art-v2.js",
    "size": 682,
    "etag": "\"494c00ecbd74abf3331c6759af8011029ca64454a3324b80a7465e2a7f4cf32d\"",
    "mtime": "2026-11-14T14:34:47.020Z"
  },
  "/assets/catalog-CRDv40LD-badges-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/catalog-CRDv40LD-badges-v1.js",
    "size": 682,
    "etag": "\"494c00ecbd74abf3331c6759af8011029ca64454a3324b80a7465e2a7f4cf32d\"",
    "mtime": "2026-11-14T14:34:46.940Z"
  },
  "/assets/catalog-CRDv40LD-game-logos-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/catalog-CRDv40LD-game-logos-v1.js",
    "size": 682,
    "etag": "\"494c00ecbd74abf3331c6759af8011029ca64454a3324b80a7465e2a7f4cf32d\"",
    "mtime": "2026-11-14T14:34:46.981Z"
  },
  "/assets/catalog-CRDv40LD-live-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/catalog-CRDv40LD-live-v1.js",
    "size": 682,
    "etag": "\"494c00ecbd74abf3331c6759af8011029ca64454a3324b80a7465e2a7f4cf32d\"",
    "mtime": "2026-11-14T14:34:46.949Z"
  },
  "/assets/catalog-CRDv40LD-loading-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/catalog-CRDv40LD-loading-v1.js",
    "size": 682,
    "etag": "\"494c00ecbd74abf3331c6759af8011029ca64454a3324b80a7465e2a7f4cf32d\"",
    "mtime": "2026-11-14T14:34:46.944Z"
  },
  "/assets/catalog-CRDv40LD-members-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/catalog-CRDv40LD-members-v1.js",
    "size": 682,
    "etag": "\"494c00ecbd74abf3331c6759af8011029ca64454a3324b80a7465e2a7f4cf32d\"",
    "mtime": "2026-11-14T14:34:46.967Z"
  },
  "/assets/catalog-CRDv40LD-profiles-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/catalog-CRDv40LD-profiles-v1.js",
    "size": 682,
    "etag": "\"494c00ecbd74abf3331c6759af8011029ca64454a3324b80a7465e2a7f4cf32d\"",
    "mtime": "2026-11-14T14:34:46.966Z"
  },
  "/assets/catalog-CRDv40LD-teams-only-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/catalog-CRDv40LD-teams-only-v1.js",
    "size": 682,
    "etag": "\"494c00ecbd74abf3331c6759af8011029ca64454a3324b80a7465e2a7f4cf32d\"",
    "mtime": "2026-11-14T14:34:46.984Z"
  },
  "/assets/catalog-CRDv40LD-tournaments-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/catalog-CRDv40LD-tournaments-v1.js",
    "size": 682,
    "etag": "\"494c00ecbd74abf3331c6759af8011029ca64454a3324b80a7465e2a7f4cf32d\"",
    "mtime": "2026-11-14T14:34:46.951Z"
  },
  "/assets/catalog-CRDv40LD.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/catalog-CRDv40LD.js",
    "size": 682,
    "etag": "\"494c00ecbd74abf3331c6759af8011029ca64454a3324b80a7465e2a7f4cf32d\"",
    "mtime": "2026-11-14T14:34:47.003Z"
  },
  "/assets/contato-DgRsHmmF-aligned-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/contato-DgRsHmmF-aligned-v1.js",
    "size": 2588,
    "etag": "\"edb93a8caca8684204a0ae684f0b695a93e38097600a233e505b4c1f1d2c26d8\"",
    "mtime": "2026-11-14T14:34:47.032Z"
  },
  "/assets/contato-DgRsHmmF-athlete-v2.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/contato-DgRsHmmF-athlete-v2.js",
    "size": 2588,
    "etag": "\"edb93a8caca8684204a0ae684f0b695a93e38097600a233e505b4c1f1d2c26d8\"",
    "mtime": "2026-11-14T14:34:47.019Z"
  },
  "/assets/contato-DgRsHmmF-badge-art-v2.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/contato-DgRsHmmF-badge-art-v2.js",
    "size": 2588,
    "etag": "\"edb93a8caca8684204a0ae684f0b695a93e38097600a233e505b4c1f1d2c26d8\"",
    "mtime": "2026-11-14T14:34:46.960Z"
  },
  "/assets/contato-DgRsHmmF-badges-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/contato-DgRsHmmF-badges-v1.js",
    "size": 2588,
    "etag": "\"edb93a8caca8684204a0ae684f0b695a93e38097600a233e505b4c1f1d2c26d8\"",
    "mtime": "2026-11-14T14:34:46.962Z"
  },
  "/assets/contato-DgRsHmmF-game-logos-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/contato-DgRsHmmF-game-logos-v1.js",
    "size": 2588,
    "etag": "\"edb93a8caca8684204a0ae684f0b695a93e38097600a233e505b4c1f1d2c26d8\"",
    "mtime": "2026-11-14T14:34:47.021Z"
  },
  "/assets/contato-DgRsHmmF-live-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/contato-DgRsHmmF-live-v1.js",
    "size": 2588,
    "etag": "\"edb93a8caca8684204a0ae684f0b695a93e38097600a233e505b4c1f1d2c26d8\"",
    "mtime": "2026-11-14T14:34:47.010Z"
  },
  "/assets/contato-DgRsHmmF-loading-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/contato-DgRsHmmF-loading-v1.js",
    "size": 2588,
    "etag": "\"edb93a8caca8684204a0ae684f0b695a93e38097600a233e505b4c1f1d2c26d8\"",
    "mtime": "2026-11-14T14:34:47.015Z"
  },
  "/assets/contato-DgRsHmmF-members-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/contato-DgRsHmmF-members-v1.js",
    "size": 2588,
    "etag": "\"edb93a8caca8684204a0ae684f0b695a93e38097600a233e505b4c1f1d2c26d8\"",
    "mtime": "2026-11-14T14:34:47.015Z"
  },
  "/assets/contato-DgRsHmmF-profiles-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/contato-DgRsHmmF-profiles-v1.js",
    "size": 2588,
    "etag": "\"edb93a8caca8684204a0ae684f0b695a93e38097600a233e505b4c1f1d2c26d8\"",
    "mtime": "2026-11-14T14:34:47.015Z"
  },
  "/assets/contato-DgRsHmmF-teams-only-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/contato-DgRsHmmF-teams-only-v1.js",
    "size": 2588,
    "etag": "\"edb93a8caca8684204a0ae684f0b695a93e38097600a233e505b4c1f1d2c26d8\"",
    "mtime": "2026-11-14T14:34:47.012Z"
  },
  "/assets/contato-DgRsHmmF-tournaments-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/contato-DgRsHmmF-tournaments-v1.js",
    "size": 2588,
    "etag": "\"edb93a8caca8684204a0ae684f0b695a93e38097600a233e505b4c1f1d2c26d8\"",
    "mtime": "2026-11-14T14:34:47.008Z"
  },
  "/assets/contato-DgRsHmmF.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/contato-DgRsHmmF.js",
    "size": 2588,
    "etag": "\"edb93a8caca8684204a0ae684f0b695a93e38097600a233e505b4c1f1d2c26d8\"",
    "mtime": "2026-11-14T14:34:47.000Z"
  },
  "/assets/entrar-COUeu43B-aligned-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/entrar-COUeu43B-aligned-v1.js",
    "size": 193,
    "etag": "\"72f7f35b429791d35c35b4ee9136c6ff8dca97696bd5ec5505f74f7cb21904a8\"",
    "mtime": "2026-11-14T14:34:46.977Z"
  },
  "/assets/entrar-COUeu43B-athlete-v2.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/entrar-COUeu43B-athlete-v2.js",
    "size": 193,
    "etag": "\"72f7f35b429791d35c35b4ee9136c6ff8dca97696bd5ec5505f74f7cb21904a8\"",
    "mtime": "2026-11-14T14:34:47.026Z"
  },
  "/assets/entrar-COUeu43B-badge-art-v2.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/entrar-COUeu43B-badge-art-v2.js",
    "size": 193,
    "etag": "\"72f7f35b429791d35c35b4ee9136c6ff8dca97696bd5ec5505f74f7cb21904a8\"",
    "mtime": "2026-11-14T14:34:46.953Z"
  },
  "/assets/entrar-COUeu43B-badges-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/entrar-COUeu43B-badges-v1.js",
    "size": 193,
    "etag": "\"72f7f35b429791d35c35b4ee9136c6ff8dca97696bd5ec5505f74f7cb21904a8\"",
    "mtime": "2026-11-14T14:34:46.938Z"
  },
  "/assets/entrar-COUeu43B-game-logos-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/entrar-COUeu43B-game-logos-v1.js",
    "size": 193,
    "etag": "\"72f7f35b429791d35c35b4ee9136c6ff8dca97696bd5ec5505f74f7cb21904a8\"",
    "mtime": "2026-11-14T14:34:46.934Z"
  },
  "/assets/entrar-COUeu43B-live-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/entrar-COUeu43B-live-v1.js",
    "size": 193,
    "etag": "\"72f7f35b429791d35c35b4ee9136c6ff8dca97696bd5ec5505f74f7cb21904a8\"",
    "mtime": "2026-11-14T14:34:46.944Z"
  },
  "/assets/entrar-COUeu43B-loading-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/entrar-COUeu43B-loading-v1.js",
    "size": 193,
    "etag": "\"72f7f35b429791d35c35b4ee9136c6ff8dca97696bd5ec5505f74f7cb21904a8\"",
    "mtime": "2026-11-14T14:34:46.958Z"
  },
  "/assets/entrar-COUeu43B-members-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/entrar-COUeu43B-members-v1.js",
    "size": 193,
    "etag": "\"72f7f35b429791d35c35b4ee9136c6ff8dca97696bd5ec5505f74f7cb21904a8\"",
    "mtime": "2026-11-14T14:34:46.928Z"
  },
  "/assets/entrar-COUeu43B-profiles-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/entrar-COUeu43B-profiles-v1.js",
    "size": 193,
    "etag": "\"72f7f35b429791d35c35b4ee9136c6ff8dca97696bd5ec5505f74f7cb21904a8\"",
    "mtime": "2026-11-14T14:34:47.020Z"
  },
  "/assets/entrar-COUeu43B-teams-only-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/entrar-COUeu43B-teams-only-v1.js",
    "size": 193,
    "etag": "\"72f7f35b429791d35c35b4ee9136c6ff8dca97696bd5ec5505f74f7cb21904a8\"",
    "mtime": "2026-11-14T14:34:46.962Z"
  },
  "/assets/entrar-COUeu43B-tournaments-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/entrar-COUeu43B-tournaments-v1.js",
    "size": 193,
    "etag": "\"72f7f35b429791d35c35b4ee9136c6ff8dca97696bd5ec5505f74f7cb21904a8\"",
    "mtime": "2026-11-14T14:34:47.030Z"
  },
  "/assets/entrar-COUeu43B.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/entrar-COUeu43B.js",
    "size": 193,
    "etag": "\"72f7f35b429791d35c35b4ee9136c6ff8dca97696bd5ec5505f74f7cb21904a8\"",
    "mtime": "2026-11-14T14:34:46.943Z"
  },
  "/assets/equipes.index-laes-20261111-aligned-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/equipes.index-laes-20261111-aligned-v1.js",
    "size": 92,
    "etag": "\"38d44a82abd78147316a0a9fe586876fb21ff8308431261b2364cf5ec6424223\"",
    "mtime": "2026-11-14T14:34:46.991Z"
  },
  "/assets/equipes.index-laes-20261111-athlete-v2.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/equipes.index-laes-20261111-athlete-v2.js",
    "size": 92,
    "etag": "\"38d44a82abd78147316a0a9fe586876fb21ff8308431261b2364cf5ec6424223\"",
    "mtime": "2026-11-14T14:34:46.984Z"
  },
  "/assets/equipes.index-laes-20261111-badge-art-v2.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/equipes.index-laes-20261111-badge-art-v2.js",
    "size": 92,
    "etag": "\"38d44a82abd78147316a0a9fe586876fb21ff8308431261b2364cf5ec6424223\"",
    "mtime": "2026-11-14T14:34:47.016Z"
  },
  "/assets/equipes.index-laes-20261111-badges-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/equipes.index-laes-20261111-badges-v1.js",
    "size": 92,
    "etag": "\"38d44a82abd78147316a0a9fe586876fb21ff8308431261b2364cf5ec6424223\"",
    "mtime": "2026-11-14T14:34:46.962Z"
  },
  "/assets/equipes.index-laes-20261111-game-logos-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/equipes.index-laes-20261111-game-logos-v1.js",
    "size": 92,
    "etag": "\"38d44a82abd78147316a0a9fe586876fb21ff8308431261b2364cf5ec6424223\"",
    "mtime": "2026-11-14T14:34:47.030Z"
  },
  "/assets/equipes.index-laes-20261111-live-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/equipes.index-laes-20261111-live-v1.js",
    "size": 92,
    "etag": "\"38d44a82abd78147316a0a9fe586876fb21ff8308431261b2364cf5ec6424223\"",
    "mtime": "2026-11-14T14:34:47.020Z"
  },
  "/assets/equipes.index-laes-20261111-loading-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/equipes.index-laes-20261111-loading-v1.js",
    "size": 92,
    "etag": "\"38d44a82abd78147316a0a9fe586876fb21ff8308431261b2364cf5ec6424223\"",
    "mtime": "2026-11-14T14:34:47.019Z"
  },
  "/assets/equipes.index-laes-20261111-members-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/equipes.index-laes-20261111-members-v1.js",
    "size": 92,
    "etag": "\"38d44a82abd78147316a0a9fe586876fb21ff8308431261b2364cf5ec6424223\"",
    "mtime": "2026-11-14T14:34:46.974Z"
  },
  "/assets/equipes.index-laes-20261111-profiles-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/equipes.index-laes-20261111-profiles-v1.js",
    "size": 92,
    "etag": "\"38d44a82abd78147316a0a9fe586876fb21ff8308431261b2364cf5ec6424223\"",
    "mtime": "2026-11-14T14:34:46.928Z"
  },
  "/assets/equipes.index-laes-20261111-teams-only-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/equipes.index-laes-20261111-teams-only-v1.js",
    "size": 92,
    "etag": "\"38d44a82abd78147316a0a9fe586876fb21ff8308431261b2364cf5ec6424223\"",
    "mtime": "2026-11-14T14:34:47.004Z"
  },
  "/assets/equipes.index-laes-20261111-tournaments-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/equipes.index-laes-20261111-tournaments-v1.js",
    "size": 92,
    "etag": "\"38d44a82abd78147316a0a9fe586876fb21ff8308431261b2364cf5ec6424223\"",
    "mtime": "2026-11-14T14:34:46.942Z"
  },
  "/assets/equipes.index-laes-20261111.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/equipes.index-laes-20261111.js",
    "size": 92,
    "etag": "\"38d44a82abd78147316a0a9fe586876fb21ff8308431261b2364cf5ec6424223\"",
    "mtime": "2026-11-14T14:34:47.025Z"
  },
  "/assets/equipes.slug-laes-20261111-aligned-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/equipes.slug-laes-20261111-aligned-v1.js",
    "size": 306,
    "etag": "\"70e772f1e18970b09c9c6906d89e9a3c46e6c28a3ef42f10c10abd4d02ef78ed\"",
    "mtime": "2026-11-14T14:34:46.993Z"
  },
  "/assets/equipes.slug-laes-20261111-athlete-v2.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/equipes.slug-laes-20261111-athlete-v2.js",
    "size": 306,
    "etag": "\"70e772f1e18970b09c9c6906d89e9a3c46e6c28a3ef42f10c10abd4d02ef78ed\"",
    "mtime": "2026-11-14T14:34:47.028Z"
  },
  "/assets/equipes.slug-laes-20261111-badge-art-v2.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/equipes.slug-laes-20261111-badge-art-v2.js",
    "size": 306,
    "etag": "\"70e772f1e18970b09c9c6906d89e9a3c46e6c28a3ef42f10c10abd4d02ef78ed\"",
    "mtime": "2026-11-14T14:34:47.028Z"
  },
  "/assets/equipes.slug-laes-20261111-badges-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/equipes.slug-laes-20261111-badges-v1.js",
    "size": 306,
    "etag": "\"70e772f1e18970b09c9c6906d89e9a3c46e6c28a3ef42f10c10abd4d02ef78ed\"",
    "mtime": "2026-11-14T14:34:47.003Z"
  },
  "/assets/equipes.slug-laes-20261111-game-logos-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/equipes.slug-laes-20261111-game-logos-v1.js",
    "size": 306,
    "etag": "\"70e772f1e18970b09c9c6906d89e9a3c46e6c28a3ef42f10c10abd4d02ef78ed\"",
    "mtime": "2026-11-14T14:34:46.960Z"
  },
  "/assets/equipes.slug-laes-20261111-live-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/equipes.slug-laes-20261111-live-v1.js",
    "size": 306,
    "etag": "\"70e772f1e18970b09c9c6906d89e9a3c46e6c28a3ef42f10c10abd4d02ef78ed\"",
    "mtime": "2026-11-14T14:34:46.934Z"
  },
  "/assets/equipes.slug-laes-20261111-loading-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/equipes.slug-laes-20261111-loading-v1.js",
    "size": 306,
    "etag": "\"70e772f1e18970b09c9c6906d89e9a3c46e6c28a3ef42f10c10abd4d02ef78ed\"",
    "mtime": "2026-11-14T14:34:47.031Z"
  },
  "/assets/equipes.slug-laes-20261111-members-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/equipes.slug-laes-20261111-members-v1.js",
    "size": 306,
    "etag": "\"70e772f1e18970b09c9c6906d89e9a3c46e6c28a3ef42f10c10abd4d02ef78ed\"",
    "mtime": "2026-11-14T14:34:46.940Z"
  },
  "/assets/equipes.slug-laes-20261111-profiles-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/equipes.slug-laes-20261111-profiles-v1.js",
    "size": 306,
    "etag": "\"70e772f1e18970b09c9c6906d89e9a3c46e6c28a3ef42f10c10abd4d02ef78ed\"",
    "mtime": "2026-11-14T14:34:46.965Z"
  },
  "/assets/equipes.slug-laes-20261111-teams-only-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/equipes.slug-laes-20261111-teams-only-v1.js",
    "size": 306,
    "etag": "\"70e772f1e18970b09c9c6906d89e9a3c46e6c28a3ef42f10c10abd4d02ef78ed\"",
    "mtime": "2026-11-14T14:34:47.019Z"
  },
  "/assets/equipes.slug-laes-20261111-tournaments-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/equipes.slug-laes-20261111-tournaments-v1.js",
    "size": 306,
    "etag": "\"70e772f1e18970b09c9c6906d89e9a3c46e6c28a3ef42f10c10abd4d02ef78ed\"",
    "mtime": "2026-11-14T14:34:46.999Z"
  },
  "/assets/equipes.slug-laes-20261111.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/equipes.slug-laes-20261111.js",
    "size": 306,
    "etag": "\"70e772f1e18970b09c9c6906d89e9a3c46e6c28a3ef42f10c10abd4d02ef78ed\"",
    "mtime": "2026-11-14T14:34:46.999Z"
  },
  "/assets/faca-parte-sji9o8tA-aligned-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/faca-parte-sji9o8tA-aligned-v1.js",
    "size": 1198,
    "etag": "\"8a324b86c86dab9fc1fe26bf9e4c89660cdb41ae492d9e5d2f5cfab917b32783\"",
    "mtime": "2026-11-14T14:34:47.007Z"
  },
  "/assets/faca-parte-sji9o8tA-athlete-v2.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/faca-parte-sji9o8tA-athlete-v2.js",
    "size": 1198,
    "etag": "\"8a324b86c86dab9fc1fe26bf9e4c89660cdb41ae492d9e5d2f5cfab917b32783\"",
    "mtime": "2026-11-14T14:34:46.931Z"
  },
  "/assets/faca-parte-sji9o8tA-badge-art-v2.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/faca-parte-sji9o8tA-badge-art-v2.js",
    "size": 1198,
    "etag": "\"8a324b86c86dab9fc1fe26bf9e4c89660cdb41ae492d9e5d2f5cfab917b32783\"",
    "mtime": "2026-11-14T14:34:46.931Z"
  },
  "/assets/faca-parte-sji9o8tA-badges-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/faca-parte-sji9o8tA-badges-v1.js",
    "size": 1198,
    "etag": "\"8a324b86c86dab9fc1fe26bf9e4c89660cdb41ae492d9e5d2f5cfab917b32783\"",
    "mtime": "2026-11-14T14:34:46.950Z"
  },
  "/assets/faca-parte-sji9o8tA-game-logos-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/faca-parte-sji9o8tA-game-logos-v1.js",
    "size": 1198,
    "etag": "\"8a324b86c86dab9fc1fe26bf9e4c89660cdb41ae492d9e5d2f5cfab917b32783\"",
    "mtime": "2026-11-14T14:34:46.973Z"
  },
  "/assets/faca-parte-sji9o8tA-live-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/faca-parte-sji9o8tA-live-v1.js",
    "size": 1198,
    "etag": "\"8a324b86c86dab9fc1fe26bf9e4c89660cdb41ae492d9e5d2f5cfab917b32783\"",
    "mtime": "2026-11-14T14:34:46.988Z"
  },
  "/assets/faca-parte-sji9o8tA-loading-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/faca-parte-sji9o8tA-loading-v1.js",
    "size": 1198,
    "etag": "\"8a324b86c86dab9fc1fe26bf9e4c89660cdb41ae492d9e5d2f5cfab917b32783\"",
    "mtime": "2026-11-14T14:34:47.030Z"
  },
  "/assets/faca-parte-sji9o8tA-members-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/faca-parte-sji9o8tA-members-v1.js",
    "size": 1198,
    "etag": "\"8a324b86c86dab9fc1fe26bf9e4c89660cdb41ae492d9e5d2f5cfab917b32783\"",
    "mtime": "2026-11-14T14:34:46.933Z"
  },
  "/assets/faca-parte-sji9o8tA-profiles-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/faca-parte-sji9o8tA-profiles-v1.js",
    "size": 1198,
    "etag": "\"8a324b86c86dab9fc1fe26bf9e4c89660cdb41ae492d9e5d2f5cfab917b32783\"",
    "mtime": "2026-11-14T14:34:46.994Z"
  },
  "/assets/faca-parte-sji9o8tA-teams-only-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/faca-parte-sji9o8tA-teams-only-v1.js",
    "size": 1198,
    "etag": "\"8a324b86c86dab9fc1fe26bf9e4c89660cdb41ae492d9e5d2f5cfab917b32783\"",
    "mtime": "2026-11-14T14:34:47.006Z"
  },
  "/assets/faca-parte-sji9o8tA-tournaments-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/faca-parte-sji9o8tA-tournaments-v1.js",
    "size": 1198,
    "etag": "\"8a324b86c86dab9fc1fe26bf9e4c89660cdb41ae492d9e5d2f5cfab917b32783\"",
    "mtime": "2026-11-14T14:34:46.991Z"
  },
  "/assets/faca-parte-sji9o8tA.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/faca-parte-sji9o8tA.js",
    "size": 1198,
    "etag": "\"8a324b86c86dab9fc1fe26bf9e4c89660cdb41ae492d9e5d2f5cfab917b32783\"",
    "mtime": "2026-11-14T14:34:47.027Z"
  },
  "/assets/fileRoute-BjC512Ya-aligned-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/fileRoute-BjC512Ya-aligned-v1.js",
    "size": 4018,
    "etag": "\"ff4ea808e5fb0c0ddd5d00beff84ac20c444f8968e2a30104cdc38841d3fd111\"",
    "mtime": "2026-11-14T14:34:46.988Z"
  },
  "/assets/fileRoute-BjC512Ya-athlete-v2.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/fileRoute-BjC512Ya-athlete-v2.js",
    "size": 4018,
    "etag": "\"ff4ea808e5fb0c0ddd5d00beff84ac20c444f8968e2a30104cdc38841d3fd111\"",
    "mtime": "2026-11-14T14:34:46.982Z"
  },
  "/assets/fileRoute-BjC512Ya-badge-art-v2.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/fileRoute-BjC512Ya-badge-art-v2.js",
    "size": 4018,
    "etag": "\"ff4ea808e5fb0c0ddd5d00beff84ac20c444f8968e2a30104cdc38841d3fd111\"",
    "mtime": "2026-11-14T14:34:46.985Z"
  },
  "/assets/fileRoute-BjC512Ya-badges-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/fileRoute-BjC512Ya-badges-v1.js",
    "size": 4018,
    "etag": "\"ff4ea808e5fb0c0ddd5d00beff84ac20c444f8968e2a30104cdc38841d3fd111\"",
    "mtime": "2026-11-14T14:34:46.993Z"
  },
  "/assets/fileRoute-BjC512Ya-game-logos-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/fileRoute-BjC512Ya-game-logos-v1.js",
    "size": 4018,
    "etag": "\"ff4ea808e5fb0c0ddd5d00beff84ac20c444f8968e2a30104cdc38841d3fd111\"",
    "mtime": "2026-11-14T14:34:47.025Z"
  },
  "/assets/fileRoute-BjC512Ya-live-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/fileRoute-BjC512Ya-live-v1.js",
    "size": 4018,
    "etag": "\"ff4ea808e5fb0c0ddd5d00beff84ac20c444f8968e2a30104cdc38841d3fd111\"",
    "mtime": "2026-11-14T14:34:47.027Z"
  },
  "/assets/fileRoute-BjC512Ya-loading-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/fileRoute-BjC512Ya-loading-v1.js",
    "size": 4018,
    "etag": "\"ff4ea808e5fb0c0ddd5d00beff84ac20c444f8968e2a30104cdc38841d3fd111\"",
    "mtime": "2026-11-14T14:34:47.002Z"
  },
  "/assets/fileRoute-BjC512Ya-members-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/fileRoute-BjC512Ya-members-v1.js",
    "size": 4018,
    "etag": "\"ff4ea808e5fb0c0ddd5d00beff84ac20c444f8968e2a30104cdc38841d3fd111\"",
    "mtime": "2026-11-14T14:34:46.929Z"
  },
  "/assets/fileRoute-BjC512Ya-profiles-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/fileRoute-BjC512Ya-profiles-v1.js",
    "size": 4018,
    "etag": "\"ff4ea808e5fb0c0ddd5d00beff84ac20c444f8968e2a30104cdc38841d3fd111\"",
    "mtime": "2026-11-14T14:34:47.031Z"
  },
  "/assets/fileRoute-BjC512Ya-teams-only-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/fileRoute-BjC512Ya-teams-only-v1.js",
    "size": 4018,
    "etag": "\"ff4ea808e5fb0c0ddd5d00beff84ac20c444f8968e2a30104cdc38841d3fd111\"",
    "mtime": "2026-11-14T14:34:46.965Z"
  },
  "/assets/fileRoute-BjC512Ya-tournaments-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/fileRoute-BjC512Ya-tournaments-v1.js",
    "size": 4018,
    "etag": "\"ff4ea808e5fb0c0ddd5d00beff84ac20c444f8968e2a30104cdc38841d3fd111\"",
    "mtime": "2026-11-14T14:34:46.984Z"
  },
  "/assets/fileRoute-BjC512Ya.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/fileRoute-BjC512Ya.js",
    "size": 4018,
    "etag": "\"ff4ea808e5fb0c0ddd5d00beff84ac20c444f8968e2a30104cdc38841d3fd111\"",
    "mtime": "2026-11-14T14:34:46.974Z"
  },
  "/assets/index-laes-athlete-20261112-aligned-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/index-laes-athlete-20261112-aligned-v1.js",
    "size": 364439,
    "etag": "\"75658745c4dd478adcc88b855c42e6a6296b7ba7bec24685321576cc17e369ef\"",
    "mtime": "2026-11-14T14:34:46.929Z"
  },
  "/assets/index-laes-athlete-20261112-athlete-v2.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/index-laes-athlete-20261112-athlete-v2.js",
    "size": 364007,
    "etag": "\"5101b609ea01ecac93da040a99905e0d8a781d32c65ec0ac8bb9018443510472\"",
    "mtime": "2026-11-14T14:34:46.946Z"
  },
  "/assets/index-laes-agenda-20261115-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/index-laes-agenda-20261115-v1.js",
    "size": 365434,
    "etag": "\"7a19376253e5caf69efd3f8ad3c3fdbeb987ea38e5f349b3206ed0272762f658\"",
    "mtime": "2026-11-17T15:25:20.485Z"
  },
  "/assets/index-laes-athlete-20261112-badges-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/index-laes-athlete-20261112-badges-v1.js",
    "size": 364439,
    "etag": "\"75658745c4dd478adcc88b855c42e6a6296b7ba7bec24685321576cc17e369ef\"",
    "mtime": "2026-11-14T14:34:46.948Z"
  },
  "/assets/index-laes-athlete-20261112-game-logos-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/index-laes-athlete-20261112-game-logos-v1.js",
    "size": 364439,
    "etag": "\"75658745c4dd478adcc88b855c42e6a6296b7ba7bec24685321576cc17e369ef\"",
    "mtime": "2026-11-14T14:34:47.013Z"
  },
  "/assets/index-laes-athlete-20261112-live-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/index-laes-athlete-20261112-live-v1.js",
    "size": 364439,
    "etag": "\"75658745c4dd478adcc88b855c42e6a6296b7ba7bec24685321576cc17e369ef\"",
    "mtime": "2026-11-14T14:34:47.022Z"
  },
  "/assets/index-laes-athlete-20261112-loading-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/index-laes-athlete-20261112-loading-v1.js",
    "size": 364439,
    "etag": "\"75658745c4dd478adcc88b855c42e6a6296b7ba7bec24685321576cc17e369ef\"",
    "mtime": "2026-11-14T14:34:46.993Z"
  },
  "/assets/index-laes-athlete-20261112-members-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/index-laes-athlete-20261112-members-v1.js",
    "size": 364439,
    "etag": "\"75658745c4dd478adcc88b855c42e6a6296b7ba7bec24685321576cc17e369ef\"",
    "mtime": "2026-11-14T14:34:46.968Z"
  },
  "/assets/index-laes-athlete-20261112-profiles-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/index-laes-athlete-20261112-profiles-v1.js",
    "size": 364439,
    "etag": "\"75658745c4dd478adcc88b855c42e6a6296b7ba7bec24685321576cc17e369ef\"",
    "mtime": "2026-11-14T14:34:46.998Z"
  },
  "/assets/index-laes-athlete-20261112-teams-only-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/index-laes-athlete-20261112-teams-only-v1.js",
    "size": 364439,
    "etag": "\"75658745c4dd478adcc88b855c42e6a6296b7ba7bec24685321576cc17e369ef\"",
    "mtime": "2026-11-14T14:34:47.008Z"
  },
  "/assets/index-laes-athlete-20261112-tournaments-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/index-laes-athlete-20261112-tournaments-v1.js",
    "size": 364007,
    "etag": "\"5101b609ea01ecac93da040a99905e0d8a781d32c65ec0ac8bb9018443510472\"",
    "mtime": "2026-11-14T14:34:46.961Z"
  },
  "/assets/index-laes-athlete-20261112.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/index-laes-athlete-20261112.js",
    "size": 364439,
    "etag": "\"75658745c4dd478adcc88b855c42e6a6296b7ba7bec24685321576cc17e369ef\"",
    "mtime": "2026-11-14T14:34:46.959Z"
  },
  "/assets/index-laes-login-20261112-aligned-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/index-laes-login-20261112-aligned-v1.js",
    "size": 364007,
    "etag": "\"5101b609ea01ecac93da040a99905e0d8a781d32c65ec0ac8bb9018443510472\"",
    "mtime": "2026-11-14T14:34:46.980Z"
  },
  "/assets/index-laes-login-20261112-athlete-v2.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/index-laes-login-20261112-athlete-v2.js",
    "size": 364007,
    "etag": "\"5101b609ea01ecac93da040a99905e0d8a781d32c65ec0ac8bb9018443510472\"",
    "mtime": "2026-11-14T14:34:47.001Z"
  },
  "/assets/index-laes-login-20261112-badge-art-v2.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/index-laes-login-20261112-badge-art-v2.js",
    "size": 364007,
    "etag": "\"5101b609ea01ecac93da040a99905e0d8a781d32c65ec0ac8bb9018443510472\"",
    "mtime": "2026-11-14T14:34:46.945Z"
  },
  "/assets/index-laes-login-20261112-badges-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/index-laes-login-20261112-badges-v1.js",
    "size": 364007,
    "etag": "\"5101b609ea01ecac93da040a99905e0d8a781d32c65ec0ac8bb9018443510472\"",
    "mtime": "2026-11-14T14:34:47.004Z"
  },
  "/assets/index-laes-login-20261112-game-logos-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/index-laes-login-20261112-game-logos-v1.js",
    "size": 364007,
    "etag": "\"5101b609ea01ecac93da040a99905e0d8a781d32c65ec0ac8bb9018443510472\"",
    "mtime": "2026-11-14T14:34:47.014Z"
  },
  "/assets/index-laes-login-20261112-live-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/index-laes-login-20261112-live-v1.js",
    "size": 364007,
    "etag": "\"5101b609ea01ecac93da040a99905e0d8a781d32c65ec0ac8bb9018443510472\"",
    "mtime": "2026-11-14T14:34:46.950Z"
  },
  "/assets/index-laes-login-20261112-loading-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/index-laes-login-20261112-loading-v1.js",
    "size": 364007,
    "etag": "\"5101b609ea01ecac93da040a99905e0d8a781d32c65ec0ac8bb9018443510472\"",
    "mtime": "2026-11-14T14:34:47.023Z"
  },
  "/assets/index-laes-login-20261112-members-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/index-laes-login-20261112-members-v1.js",
    "size": 364007,
    "etag": "\"5101b609ea01ecac93da040a99905e0d8a781d32c65ec0ac8bb9018443510472\"",
    "mtime": "2026-11-14T14:34:47.012Z"
  },
  "/assets/index-laes-login-20261112-profiles-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/index-laes-login-20261112-profiles-v1.js",
    "size": 364007,
    "etag": "\"5101b609ea01ecac93da040a99905e0d8a781d32c65ec0ac8bb9018443510472\"",
    "mtime": "2026-11-14T14:34:47.027Z"
  },
  "/assets/index-laes-login-20261112-teams-only-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/index-laes-login-20261112-teams-only-v1.js",
    "size": 364007,
    "etag": "\"5101b609ea01ecac93da040a99905e0d8a781d32c65ec0ac8bb9018443510472\"",
    "mtime": "2026-11-14T14:34:46.959Z"
  },
  "/assets/index-laes-login-20261112-tournaments-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/index-laes-login-20261112-tournaments-v1.js",
    "size": 364007,
    "etag": "\"5101b609ea01ecac93da040a99905e0d8a781d32c65ec0ac8bb9018443510472\"",
    "mtime": "2026-11-14T14:34:47.007Z"
  },
  "/assets/index-laes-login-20261112.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/index-laes-login-20261112.js",
    "size": 364007,
    "etag": "\"5101b609ea01ecac93da040a99905e0d8a781d32c65ec0ac8bb9018443510472\"",
    "mtime": "2026-11-14T14:34:46.983Z"
  },
  "/assets/index-laes-teams-20261111-aligned-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/index-laes-teams-20261111-aligned-v1.js",
    "size": 364007,
    "etag": "\"5101b609ea01ecac93da040a99905e0d8a781d32c65ec0ac8bb9018443510472\"",
    "mtime": "2026-11-14T14:34:47.002Z"
  },
  "/assets/index-laes-teams-20261111-athlete-v2.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/index-laes-teams-20261111-athlete-v2.js",
    "size": 364007,
    "etag": "\"5101b609ea01ecac93da040a99905e0d8a781d32c65ec0ac8bb9018443510472\"",
    "mtime": "2026-11-14T14:34:46.944Z"
  },
  "/assets/index-laes-teams-20261111-badge-art-v2.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/index-laes-teams-20261111-badge-art-v2.js",
    "size": 364007,
    "etag": "\"5101b609ea01ecac93da040a99905e0d8a781d32c65ec0ac8bb9018443510472\"",
    "mtime": "2026-11-14T14:34:47.029Z"
  },
  "/assets/index-laes-teams-20261111-badges-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/index-laes-teams-20261111-badges-v1.js",
    "size": 364007,
    "etag": "\"5101b609ea01ecac93da040a99905e0d8a781d32c65ec0ac8bb9018443510472\"",
    "mtime": "2026-11-14T14:34:46.933Z"
  },
  "/assets/index-laes-teams-20261111-game-logos-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/index-laes-teams-20261111-game-logos-v1.js",
    "size": 364007,
    "etag": "\"5101b609ea01ecac93da040a99905e0d8a781d32c65ec0ac8bb9018443510472\"",
    "mtime": "2026-11-14T14:34:46.972Z"
  },
  "/assets/index-laes-teams-20261111-live-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/index-laes-teams-20261111-live-v1.js",
    "size": 364007,
    "etag": "\"5101b609ea01ecac93da040a99905e0d8a781d32c65ec0ac8bb9018443510472\"",
    "mtime": "2026-11-14T14:34:46.988Z"
  },
  "/assets/index-laes-teams-20261111-loading-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/index-laes-teams-20261111-loading-v1.js",
    "size": 364007,
    "etag": "\"5101b609ea01ecac93da040a99905e0d8a781d32c65ec0ac8bb9018443510472\"",
    "mtime": "2026-11-14T14:34:46.989Z"
  },
  "/assets/index-laes-teams-20261111-members-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/index-laes-teams-20261111-members-v1.js",
    "size": 364007,
    "etag": "\"5101b609ea01ecac93da040a99905e0d8a781d32c65ec0ac8bb9018443510472\"",
    "mtime": "2026-11-14T14:34:47.018Z"
  },
  "/assets/index-laes-teams-20261111-profiles-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/index-laes-teams-20261111-profiles-v1.js",
    "size": 364007,
    "etag": "\"5101b609ea01ecac93da040a99905e0d8a781d32c65ec0ac8bb9018443510472\"",
    "mtime": "2026-11-14T14:34:47.024Z"
  },
  "/assets/index-laes-teams-20261111-teams-only-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/index-laes-teams-20261111-teams-only-v1.js",
    "size": 364007,
    "etag": "\"5101b609ea01ecac93da040a99905e0d8a781d32c65ec0ac8bb9018443510472\"",
    "mtime": "2026-11-14T14:34:47.011Z"
  },
  "/assets/index-laes-teams-20261111-tournaments-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/index-laes-teams-20261111-tournaments-v1.js",
    "size": 364007,
    "etag": "\"5101b609ea01ecac93da040a99905e0d8a781d32c65ec0ac8bb9018443510472\"",
    "mtime": "2026-11-14T14:34:46.978Z"
  },
  "/assets/index-laes-teams-20261111.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/index-laes-teams-20261111.js",
    "size": 364007,
    "etag": "\"5101b609ea01ecac93da040a99905e0d8a781d32c65ec0ac8bb9018443510472\"",
    "mtime": "2026-11-14T14:34:47.021Z"
  },
  "/assets/laes-athlete-photos-20261112.css": {
    "type": "text/css; charset=utf-8",
    "path": "../public/assets/laes-athlete-photos-20261112.css",
    "size": 9402,
    "etag": "\"14617cb26e4cd1470facad0ec86ce090fb2c5dcc9deff6d8e45ed8f0c3cd51dc\"",
    "mtime": "2026-11-14T14:34:46.982Z"
  },
  "/assets/laes-athlete-registration-20261112.css": {
    "type": "text/css; charset=utf-8",
    "path": "../public/assets/laes-athlete-registration-20261112.css",
    "size": 6866,
    "etag": "\"f29b7a9464b60f5eb1d370f321098a667ce0fac3acb3757f6d15c9a3d0e35a2f\"",
    "mtime": "2026-11-14T14:34:46.976Z"
  },
  "/assets/laes-badges-20261114.css": {
    "type": "text/css; charset=utf-8",
    "path": "../public/assets/laes-badges-20261114.css",
    "size": 4394,
    "etag": "\"4d19ed6e3241555b26809c38d1ca71db39b834d17469a9f67394564ef3c06dc8\"",
    "mtime": "2026-11-14T14:34:46.973Z"
  },
  "/assets/laes-badges-art-20261114-v2.css": {
    "type": "text/css; charset=utf-8",
    "path": "../public/assets/laes-badges-art-20261114-v2.css",
    "size": 5929,
    "etag": "\"080730e4c6e689eb4187b2346b352fbfb87bb654dbb3247bcd9d283b9fdb80e4\"",
    "mtime": "2026-11-14T14:34:47.031Z"
  },
  "/assets/laes-community-profiles-20261114.css": {
    "type": "text/css; charset=utf-8",
    "path": "../public/assets/laes-community-profiles-20261114.css",
    "size": 4488,
    "etag": "\"e893bf006e385fbfcd576d226219f9781e1bb55a76254bfaa5039e840a4cc7f7\"",
    "mtime": "2026-11-14T14:34:47.018Z"
  },
  "/assets/laes-live-20261112.css": {
    "type": "text/css; charset=utf-8",
    "path": "../public/assets/laes-live-20261112.css",
    "size": 10751,
    "etag": "\"b41bf535d02fd39284e2e6f38d91af223150581eebd8e96f9c087b4a2d9d3f09\"",
    "mtime": "2026-11-14T14:34:47.023Z"
  },
  "/assets/laes-live-feature-20261112-aligned-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/laes-live-feature-20261112-aligned-v1.js",
    "size": 14938,
    "etag": "\"ea578f3f1c3a69d3eaa85c9ed12f40b5f9abf9559081d292b5ce8008ca7b1a49\"",
    "mtime": "2026-11-14T14:34:46.995Z"
  },
  "/assets/laes-live-feature-20261112-badge-art-v2.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/laes-live-feature-20261112-badge-art-v2.js",
    "size": 14938,
    "etag": "\"ea578f3f1c3a69d3eaa85c9ed12f40b5f9abf9559081d292b5ce8008ca7b1a49\"",
    "mtime": "2026-11-14T14:34:46.988Z"
  },
  "/assets/laes-live-feature-20261112-badges-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/laes-live-feature-20261112-badges-v1.js",
    "size": 14938,
    "etag": "\"ea578f3f1c3a69d3eaa85c9ed12f40b5f9abf9559081d292b5ce8008ca7b1a49\"",
    "mtime": "2026-11-14T14:34:46.937Z"
  },
  "/assets/laes-live-feature-20261112-game-logos-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/laes-live-feature-20261112-game-logos-v1.js",
    "size": 14938,
    "etag": "\"ea578f3f1c3a69d3eaa85c9ed12f40b5f9abf9559081d292b5ce8008ca7b1a49\"",
    "mtime": "2026-11-14T14:34:46.968Z"
  },
  "/assets/laes-live-feature-20261112-live-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/laes-live-feature-20261112-live-v1.js",
    "size": 14938,
    "etag": "\"ea578f3f1c3a69d3eaa85c9ed12f40b5f9abf9559081d292b5ce8008ca7b1a49\"",
    "mtime": "2026-11-14T14:34:46.933Z"
  },
  "/assets/laes-live-feature-20261112-loading-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/laes-live-feature-20261112-loading-v1.js",
    "size": 14938,
    "etag": "\"ea578f3f1c3a69d3eaa85c9ed12f40b5f9abf9559081d292b5ce8008ca7b1a49\"",
    "mtime": "2026-11-14T14:34:47.030Z"
  },
  "/assets/laes-live-feature-20261112-members-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/laes-live-feature-20261112-members-v1.js",
    "size": 14938,
    "etag": "\"ea578f3f1c3a69d3eaa85c9ed12f40b5f9abf9559081d292b5ce8008ca7b1a49\"",
    "mtime": "2026-11-14T14:34:46.938Z"
  },
  "/assets/laes-live-feature-20261112-profiles-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/laes-live-feature-20261112-profiles-v1.js",
    "size": 14938,
    "etag": "\"ea578f3f1c3a69d3eaa85c9ed12f40b5f9abf9559081d292b5ce8008ca7b1a49\"",
    "mtime": "2026-11-14T14:34:46.952Z"
  },
  "/assets/laes-live-feature-20261112-teams-only-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/laes-live-feature-20261112-teams-only-v1.js",
    "size": 14938,
    "etag": "\"ea578f3f1c3a69d3eaa85c9ed12f40b5f9abf9559081d292b5ce8008ca7b1a49\"",
    "mtime": "2026-11-14T14:34:46.931Z"
  },
  "/assets/laes-live-feature-20261112.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/laes-live-feature-20261112.js",
    "size": 14938,
    "etag": "\"ea578f3f1c3a69d3eaa85c9ed12f40b5f9abf9559081d292b5ce8008ca7b1a49\"",
    "mtime": "2026-11-14T14:34:46.939Z"
  },
  "/assets/laes-loading-20261114.css": {
    "type": "text/css; charset=utf-8",
    "path": "../public/assets/laes-loading-20261114.css",
    "size": 2091,
    "etag": "\"6a182040b3280ee0ad6c84666829357ce50bc40ffda8d69f414a2057427ed77e\"",
    "mtime": "2026-11-14T14:34:46.969Z"
  },
  "/assets/laes-password-safety-20261111-v2.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/laes-password-safety-20261111-v2.js",
    "size": 80,
    "etag": "\"7957b45242ff469e4a6ccfba4d938bdab74a4d622fe70fccf0e81f0bfa8b53b1\"",
    "mtime": "2026-11-14T14:34:46.962Z"
  },
  "/assets/laes-registration-20261111-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/laes-registration-20261111-v1.js",
    "size": 892,
    "etag": "\"e6cf9a01a1af4d5e88686ddf7a6f545a69e5f8e0868a4624d25b814b8d298132\"",
    "mtime": "2026-11-14T14:34:47.013Z"
  },
  "/assets/laes-team-feature-20261111-v1-aligned-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/laes-team-feature-20261111-v1-aligned-v1.js",
    "size": 45640,
    "etag": "\"3ca70a180cdd81719601e69ea1b5354dac612fa17a55e3d5560a37a1cb04f0cc\"",
    "mtime": "2026-11-14T14:34:46.989Z"
  },
  "/assets/laes-team-feature-20261111-v1-athlete-v2.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/laes-team-feature-20261111-v1-athlete-v2.js",
    "size": 45640,
    "etag": "\"3ca70a180cdd81719601e69ea1b5354dac612fa17a55e3d5560a37a1cb04f0cc\"",
    "mtime": "2026-11-14T14:34:46.953Z"
  },
  "/assets/laes-team-feature-20261111-v1-badge-art-v2.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/laes-team-feature-20261111-v1-badge-art-v2.js",
    "size": 45640,
    "etag": "\"3ca70a180cdd81719601e69ea1b5354dac612fa17a55e3d5560a37a1cb04f0cc\"",
    "mtime": "2026-11-14T14:34:46.930Z"
  },
  "/assets/laes-team-feature-20261111-v1-badges-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/laes-team-feature-20261111-v1-badges-v1.js",
    "size": 45640,
    "etag": "\"3ca70a180cdd81719601e69ea1b5354dac612fa17a55e3d5560a37a1cb04f0cc\"",
    "mtime": "2026-11-14T14:34:46.970Z"
  },
  "/assets/laes-team-feature-20261111-v1-game-logos-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/laes-team-feature-20261111-v1-game-logos-v1.js",
    "size": 45640,
    "etag": "\"3ca70a180cdd81719601e69ea1b5354dac612fa17a55e3d5560a37a1cb04f0cc\"",
    "mtime": "2026-11-14T14:34:46.968Z"
  },
  "/assets/laes-team-feature-20261111-v1-live-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/laes-team-feature-20261111-v1-live-v1.js",
    "size": 45640,
    "etag": "\"3ca70a180cdd81719601e69ea1b5354dac612fa17a55e3d5560a37a1cb04f0cc\"",
    "mtime": "2026-11-14T14:34:46.994Z"
  },
  "/assets/laes-team-feature-20261111-v1-loading-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/laes-team-feature-20261111-v1-loading-v1.js",
    "size": 45640,
    "etag": "\"3ca70a180cdd81719601e69ea1b5354dac612fa17a55e3d5560a37a1cb04f0cc\"",
    "mtime": "2026-11-14T14:34:46.931Z"
  },
  "/assets/laes-team-feature-20261111-v1-members-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/laes-team-feature-20261111-v1-members-v1.js",
    "size": 45640,
    "etag": "\"3ca70a180cdd81719601e69ea1b5354dac612fa17a55e3d5560a37a1cb04f0cc\"",
    "mtime": "2026-11-14T14:34:47.029Z"
  },
  "/assets/laes-team-feature-20261111-v1-profiles-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/laes-team-feature-20261111-v1-profiles-v1.js",
    "size": 45640,
    "etag": "\"3ca70a180cdd81719601e69ea1b5354dac612fa17a55e3d5560a37a1cb04f0cc\"",
    "mtime": "2026-11-14T14:34:46.982Z"
  },
  "/assets/laes-team-feature-20261111-v1-teams-only-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/laes-team-feature-20261111-v1-teams-only-v1.js",
    "size": 45640,
    "etag": "\"3ca70a180cdd81719601e69ea1b5354dac612fa17a55e3d5560a37a1cb04f0cc\"",
    "mtime": "2026-11-14T14:34:46.943Z"
  },
  "/assets/laes-team-feature-20261111-v1-tournaments-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/laes-team-feature-20261111-v1-tournaments-v1.js",
    "size": 45640,
    "etag": "\"3ca70a180cdd81719601e69ea1b5354dac612fa17a55e3d5560a37a1cb04f0cc\"",
    "mtime": "2026-11-14T14:34:46.991Z"
  },
  "/assets/laes-team-feature-20261111-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/laes-team-feature-20261111-v1.js",
    "size": 45640,
    "etag": "\"3ca70a180cdd81719601e69ea1b5354dac612fa17a55e3d5560a37a1cb04f0cc\"",
    "mtime": "2026-11-14T14:34:46.949Z"
  },
  "/assets/laes-team-feature-20261112-v2-aligned-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/laes-team-feature-20261112-v2-aligned-v1.js",
    "size": 45640,
    "etag": "\"3ca70a180cdd81719601e69ea1b5354dac612fa17a55e3d5560a37a1cb04f0cc\"",
    "mtime": "2026-11-14T14:34:46.950Z"
  },
  "/assets/laes-team-feature-20261112-v2-athlete-v2.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/laes-team-feature-20261112-v2-athlete-v2.js",
    "size": 45640,
    "etag": "\"3ca70a180cdd81719601e69ea1b5354dac612fa17a55e3d5560a37a1cb04f0cc\"",
    "mtime": "2026-11-14T14:34:46.963Z"
  },
  "/assets/laes-team-feature-20261112-v2-badge-art-v2.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/laes-team-feature-20261112-v2-badge-art-v2.js",
    "size": 45640,
    "etag": "\"3ca70a180cdd81719601e69ea1b5354dac612fa17a55e3d5560a37a1cb04f0cc\"",
    "mtime": "2026-11-14T14:34:46.998Z"
  },
  "/assets/laes-team-feature-20261112-v2-badges-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/laes-team-feature-20261112-v2-badges-v1.js",
    "size": 45640,
    "etag": "\"3ca70a180cdd81719601e69ea1b5354dac612fa17a55e3d5560a37a1cb04f0cc\"",
    "mtime": "2026-11-14T14:34:46.991Z"
  },
  "/assets/laes-team-feature-20261112-v2-game-logos-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/laes-team-feature-20261112-v2-game-logos-v1.js",
    "size": 45640,
    "etag": "\"3ca70a180cdd81719601e69ea1b5354dac612fa17a55e3d5560a37a1cb04f0cc\"",
    "mtime": "2026-11-14T14:34:47.016Z"
  },
  "/assets/laes-team-feature-20261112-v2-live-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/laes-team-feature-20261112-v2-live-v1.js",
    "size": 45640,
    "etag": "\"3ca70a180cdd81719601e69ea1b5354dac612fa17a55e3d5560a37a1cb04f0cc\"",
    "mtime": "2026-11-14T14:34:46.971Z"
  },
  "/assets/laes-team-feature-20261112-v2-loading-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/laes-team-feature-20261112-v2-loading-v1.js",
    "size": 45640,
    "etag": "\"3ca70a180cdd81719601e69ea1b5354dac612fa17a55e3d5560a37a1cb04f0cc\"",
    "mtime": "2026-11-14T14:34:46.929Z"
  },
  "/assets/laes-team-feature-20261112-v2-members-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/laes-team-feature-20261112-v2-members-v1.js",
    "size": 45640,
    "etag": "\"3ca70a180cdd81719601e69ea1b5354dac612fa17a55e3d5560a37a1cb04f0cc\"",
    "mtime": "2026-11-14T14:34:47.029Z"
  },
  "/assets/laes-team-feature-20261112-v2-profiles-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/laes-team-feature-20261112-v2-profiles-v1.js",
    "size": 45640,
    "etag": "\"3ca70a180cdd81719601e69ea1b5354dac612fa17a55e3d5560a37a1cb04f0cc\"",
    "mtime": "2026-11-14T14:34:47.014Z"
  },
  "/assets/laes-team-feature-20261112-v2-teams-only-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/laes-team-feature-20261112-v2-teams-only-v1.js",
    "size": 45640,
    "etag": "\"3ca70a180cdd81719601e69ea1b5354dac612fa17a55e3d5560a37a1cb04f0cc\"",
    "mtime": "2026-11-14T14:34:46.943Z"
  },
  "/assets/laes-team-feature-20261112-v2-tournaments-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/laes-team-feature-20261112-v2-tournaments-v1.js",
    "size": 45640,
    "etag": "\"3ca70a180cdd81719601e69ea1b5354dac612fa17a55e3d5560a37a1cb04f0cc\"",
    "mtime": "2026-11-14T14:34:46.927Z"
  },
  "/assets/laes-team-feature-20261112-v2.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/laes-team-feature-20261112-v2.js",
    "size": 45640,
    "etag": "\"3ca70a180cdd81719601e69ea1b5354dac612fa17a55e3d5560a37a1cb04f0cc\"",
    "mtime": "2026-11-14T14:34:47.009Z"
  },
  "/assets/laes-team-feature-athlete-20261112-aligned-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/laes-team-feature-athlete-20261112-aligned-v1.js",
    "size": 84944,
    "etag": "\"4347959db38db3d4ab90e76eb07fe0eb3431ef70116fa9704105af4a122ff1fb\"",
    "mtime": "2026-11-14T14:34:47.015Z"
  },
  "/assets/laes-team-feature-athlete-20261112-athlete-v2.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/laes-team-feature-athlete-20261112-athlete-v2.js",
    "size": 84944,
    "etag": "\"4347959db38db3d4ab90e76eb07fe0eb3431ef70116fa9704105af4a122ff1fb\"",
    "mtime": "2026-11-14T14:34:46.996Z"
  },
  "/assets/laes-team-feature-athlete-20261112-badge-art-v2.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/laes-team-feature-athlete-20261112-badge-art-v2.js",
    "size": 84944,
    "etag": "\"4347959db38db3d4ab90e76eb07fe0eb3431ef70116fa9704105af4a122ff1fb\"",
    "mtime": "2026-11-14T14:34:46.954Z"
  },
  "/assets/laes-team-feature-athlete-20261112-badges-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/laes-team-feature-athlete-20261112-badges-v1.js",
    "size": 84944,
    "etag": "\"4347959db38db3d4ab90e76eb07fe0eb3431ef70116fa9704105af4a122ff1fb\"",
    "mtime": "2026-11-14T14:34:46.976Z"
  },
  "/assets/laes-team-feature-athlete-20261112-game-logos-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/laes-team-feature-athlete-20261112-game-logos-v1.js",
    "size": 84944,
    "etag": "\"4347959db38db3d4ab90e76eb07fe0eb3431ef70116fa9704105af4a122ff1fb\"",
    "mtime": "2026-11-14T14:34:47.013Z"
  },
  "/assets/laes-team-feature-athlete-20261112-live-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/laes-team-feature-athlete-20261112-live-v1.js",
    "size": 84944,
    "etag": "\"4347959db38db3d4ab90e76eb07fe0eb3431ef70116fa9704105af4a122ff1fb\"",
    "mtime": "2026-11-14T14:34:46.966Z"
  },
  "/assets/laes-team-feature-athlete-20261112-loading-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/laes-team-feature-athlete-20261112-loading-v1.js",
    "size": 84944,
    "etag": "\"4347959db38db3d4ab90e76eb07fe0eb3431ef70116fa9704105af4a122ff1fb\"",
    "mtime": "2026-11-14T14:34:46.936Z"
  },
  "/assets/laes-team-feature-athlete-20261112-members-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/laes-team-feature-athlete-20261112-members-v1.js",
    "size": 84944,
    "etag": "\"4347959db38db3d4ab90e76eb07fe0eb3431ef70116fa9704105af4a122ff1fb\"",
    "mtime": "2026-11-14T14:34:46.945Z"
  },
  "/assets/laes-team-feature-athlete-20261112-profiles-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/laes-team-feature-athlete-20261112-profiles-v1.js",
    "size": 84944,
    "etag": "\"4347959db38db3d4ab90e76eb07fe0eb3431ef70116fa9704105af4a122ff1fb\"",
    "mtime": "2026-11-14T14:34:46.977Z"
  },
  "/assets/laes-team-feature-athlete-20261112-teams-only-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/laes-team-feature-athlete-20261112-teams-only-v1.js",
    "size": 84944,
    "etag": "\"4347959db38db3d4ab90e76eb07fe0eb3431ef70116fa9704105af4a122ff1fb\"",
    "mtime": "2026-11-14T14:34:46.975Z"
  },
  "/assets/laes-team-feature-athlete-20261112-tournaments-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/laes-team-feature-athlete-20261112-tournaments-v1.js",
    "size": 84944,
    "etag": "\"4347959db38db3d4ab90e76eb07fe0eb3431ef70116fa9704105af4a122ff1fb\"",
    "mtime": "2026-11-14T14:34:47.004Z"
  },
  "/assets/laes-team-feature-athlete-20261112-v2-aligned-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/laes-team-feature-athlete-20261112-v2-aligned-v1.js",
    "size": 93523,
    "etag": "\"32e0fa9cff07836a9e0a45046e2d433552edd05d2245a1bbe2d7fe4b58b0fc4a\"",
    "mtime": "2026-11-14T14:34:46.970Z"
  },
  "/assets/laes-team-feature-athlete-20261112-v2-athlete-v2.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/laes-team-feature-athlete-20261112-v2-athlete-v2.js",
    "size": 90085,
    "etag": "\"506ba40320dc44e1e6c9c2b24e9113b1ec8fb72343c2e4895b47e9e5740e67db\"",
    "mtime": "2026-11-14T14:34:47.031Z"
  },
  "/assets/laes-team-feature-athlete-20261112-v2-badge-art-v2.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/laes-team-feature-athlete-20261112-v2-badge-art-v2.js",
    "size": 138092,
    "etag": "\"6bea1cbcb9bbb158342ece37f3e486511053798e8aa5ae3bc833db748badd90d\"",
    "mtime": "2026-11-14T14:34:47.020Z"
  },
  "/assets/laes-team-feature-athlete-20261112-v2-badges-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/laes-team-feature-athlete-20261112-v2-badges-v1.js",
    "size": 109505,
    "etag": "\"9a59b82c5da99021aaff9e7ac28c5233c110a4af9d67c2fb7fa5d8cecc7d71e7\"",
    "mtime": "2026-11-14T14:34:47.028Z"
  },
  "/assets/laes-team-feature-athlete-20261112-v2-game-logos-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/laes-team-feature-athlete-20261112-v2-game-logos-v1.js",
    "size": 93630,
    "etag": "\"81979998483a9d049b8eedeb932155fef5c16e06259449cb5f1257757b6b7be1\"",
    "mtime": "2026-11-14T14:34:46.945Z"
  },
  "/assets/laes-team-feature-athlete-20261112-v2-live-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/laes-team-feature-athlete-20261112-v2-live-v1.js",
    "size": 91866,
    "etag": "\"d982ed5209118424e7ff4e95a360c9c4ee778ddf4e172ef2c11cac2712ee46cb\"",
    "mtime": "2026-11-14T14:34:46.964Z"
  },
  "/assets/laes-team-feature-athlete-20261112-v2-loading-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/laes-team-feature-athlete-20261112-v2-loading-v1.js",
    "size": 130768,
    "etag": "\"ed0dd37ef41e0d69175e520edc63988bef4aa557e4446e4cf53b0eb62f6ee02a\"",
    "mtime": "2026-11-14T14:34:46.927Z"
  },
  "/assets/laes-team-feature-athlete-20261112-v2-members-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/laes-team-feature-athlete-20261112-v2-members-v1.js",
    "size": 93523,
    "etag": "\"32e0fa9cff07836a9e0a45046e2d433552edd05d2245a1bbe2d7fe4b58b0fc4a\"",
    "mtime": "2026-11-14T14:34:46.946Z"
  },
  "/assets/laes-team-feature-athlete-20261112-v2-profiles-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/laes-team-feature-athlete-20261112-v2-profiles-v1.js",
    "size": 128552,
    "etag": "\"9e33a4a5b8ea4dfbd15f6856ab4757a682b2355455916665e1b2df53c63c72c3\"",
    "mtime": "2026-11-14T14:34:46.934Z"
  },
  "/assets/laes-team-feature-athlete-20261112-v2-teams-only-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/laes-team-feature-athlete-20261112-v2-teams-only-v1.js",
    "size": 93630,
    "etag": "\"81979998483a9d049b8eedeb932155fef5c16e06259449cb5f1257757b6b7be1\"",
    "mtime": "2026-11-14T14:34:47.019Z"
  },
  "/assets/laes-team-feature-athlete-20261112-v2-tournaments-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/laes-team-feature-athlete-20261112-v2-tournaments-v1.js",
    "size": 90085,
    "etag": "\"506ba40320dc44e1e6c9c2b24e9113b1ec8fb72343c2e4895b47e9e5740e67db\"",
    "mtime": "2026-11-14T14:34:46.961Z"
  },
  "/assets/laes-team-feature-athlete-20261112-v2.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/laes-team-feature-athlete-20261112-v2.js",
    "size": 138092,
    "etag": "\"6bea1cbcb9bbb158342ece37f3e486511053798e8aa5ae3bc833db748badd90d\"",
    "mtime": "2026-11-14T14:34:46.982Z"
  },
  "/assets/laes-team-feature-athlete-20261112.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/laes-team-feature-athlete-20261112.js",
    "size": 84944,
    "etag": "\"4347959db38db3d4ab90e76eb07fe0eb3431ef70116fa9704105af4a122ff1fb\"",
    "mtime": "2026-11-14T14:34:47.004Z"
  },
  "/assets/laes-team-jsx-20261111-v1-aligned-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/laes-team-jsx-20261111-v1-aligned-v1.js",
    "size": 175,
    "etag": "\"4ba03538e57519138430facc6d3ff96da881e95ab5e9415cd12dd9ce6ea23732\"",
    "mtime": "2026-11-14T14:34:47.030Z"
  },
  "/assets/laes-team-jsx-20261111-v1-athlete-v2.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/laes-team-jsx-20261111-v1-athlete-v2.js",
    "size": 175,
    "etag": "\"4ba03538e57519138430facc6d3ff96da881e95ab5e9415cd12dd9ce6ea23732\"",
    "mtime": "2026-11-14T14:34:46.933Z"
  },
  "/assets/laes-team-jsx-20261111-v1-badge-art-v2.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/laes-team-jsx-20261111-v1-badge-art-v2.js",
    "size": 175,
    "etag": "\"4ba03538e57519138430facc6d3ff96da881e95ab5e9415cd12dd9ce6ea23732\"",
    "mtime": "2026-11-14T14:34:46.983Z"
  },
  "/assets/laes-team-jsx-20261111-v1-badges-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/laes-team-jsx-20261111-v1-badges-v1.js",
    "size": 175,
    "etag": "\"4ba03538e57519138430facc6d3ff96da881e95ab5e9415cd12dd9ce6ea23732\"",
    "mtime": "2026-11-14T14:34:46.952Z"
  },
  "/assets/laes-team-jsx-20261111-v1-game-logos-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/laes-team-jsx-20261111-v1-game-logos-v1.js",
    "size": 175,
    "etag": "\"4ba03538e57519138430facc6d3ff96da881e95ab5e9415cd12dd9ce6ea23732\"",
    "mtime": "2026-11-14T14:34:46.965Z"
  },
  "/assets/laes-team-jsx-20261111-v1-live-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/laes-team-jsx-20261111-v1-live-v1.js",
    "size": 175,
    "etag": "\"4ba03538e57519138430facc6d3ff96da881e95ab5e9415cd12dd9ce6ea23732\"",
    "mtime": "2026-11-14T14:34:46.982Z"
  },
  "/assets/laes-team-jsx-20261111-v1-loading-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/laes-team-jsx-20261111-v1-loading-v1.js",
    "size": 175,
    "etag": "\"4ba03538e57519138430facc6d3ff96da881e95ab5e9415cd12dd9ce6ea23732\"",
    "mtime": "2026-11-14T14:34:46.989Z"
  },
  "/assets/laes-team-jsx-20261111-v1-members-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/laes-team-jsx-20261111-v1-members-v1.js",
    "size": 175,
    "etag": "\"4ba03538e57519138430facc6d3ff96da881e95ab5e9415cd12dd9ce6ea23732\"",
    "mtime": "2026-11-14T14:34:46.954Z"
  },
  "/assets/laes-team-jsx-20261111-v1-profiles-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/laes-team-jsx-20261111-v1-profiles-v1.js",
    "size": 175,
    "etag": "\"4ba03538e57519138430facc6d3ff96da881e95ab5e9415cd12dd9ce6ea23732\"",
    "mtime": "2026-11-14T14:34:46.937Z"
  },
  "/assets/laes-team-jsx-20261111-v1-teams-only-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/laes-team-jsx-20261111-v1-teams-only-v1.js",
    "size": 175,
    "etag": "\"4ba03538e57519138430facc6d3ff96da881e95ab5e9415cd12dd9ce6ea23732\"",
    "mtime": "2026-11-14T14:34:46.990Z"
  },
  "/assets/laes-team-jsx-20261111-v1-tournaments-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/laes-team-jsx-20261111-v1-tournaments-v1.js",
    "size": 175,
    "etag": "\"4ba03538e57519138430facc6d3ff96da881e95ab5e9415cd12dd9ce6ea23732\"",
    "mtime": "2026-11-14T14:34:46.962Z"
  },
  "/assets/laes-team-jsx-20261111-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/laes-team-jsx-20261111-v1.js",
    "size": 175,
    "etag": "\"4ba03538e57519138430facc6d3ff96da881e95ab5e9415cd12dd9ce6ea23732\"",
    "mtime": "2026-11-14T14:34:46.999Z"
  },
  "/assets/laes-team-react-20261111-v1-aligned-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/laes-team-react-20261111-v1-aligned-v1.js",
    "size": 278,
    "etag": "\"437cec25e9e64ce1cfee7ef43ee8470b5c93c2197ec05745b7c1e6c275f1f4c8\"",
    "mtime": "2026-11-14T14:34:46.968Z"
  },
  "/assets/laes-team-react-20261111-v1-athlete-v2.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/laes-team-react-20261111-v1-athlete-v2.js",
    "size": 278,
    "etag": "\"437cec25e9e64ce1cfee7ef43ee8470b5c93c2197ec05745b7c1e6c275f1f4c8\"",
    "mtime": "2026-11-14T14:34:46.934Z"
  },
  "/assets/laes-team-react-20261111-v1-badge-art-v2.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/laes-team-react-20261111-v1-badge-art-v2.js",
    "size": 278,
    "etag": "\"437cec25e9e64ce1cfee7ef43ee8470b5c93c2197ec05745b7c1e6c275f1f4c8\"",
    "mtime": "2026-11-14T14:34:46.960Z"
  },
  "/assets/laes-team-react-20261111-v1-badges-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/laes-team-react-20261111-v1-badges-v1.js",
    "size": 278,
    "etag": "\"437cec25e9e64ce1cfee7ef43ee8470b5c93c2197ec05745b7c1e6c275f1f4c8\"",
    "mtime": "2026-11-14T14:34:46.930Z"
  },
  "/assets/laes-team-react-20261111-v1-game-logos-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/laes-team-react-20261111-v1-game-logos-v1.js",
    "size": 278,
    "etag": "\"437cec25e9e64ce1cfee7ef43ee8470b5c93c2197ec05745b7c1e6c275f1f4c8\"",
    "mtime": "2026-11-14T14:34:46.986Z"
  },
  "/assets/laes-team-react-20261111-v1-live-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/laes-team-react-20261111-v1-live-v1.js",
    "size": 278,
    "etag": "\"437cec25e9e64ce1cfee7ef43ee8470b5c93c2197ec05745b7c1e6c275f1f4c8\"",
    "mtime": "2026-11-14T14:34:47.021Z"
  },
  "/assets/laes-team-react-20261111-v1-loading-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/laes-team-react-20261111-v1-loading-v1.js",
    "size": 278,
    "etag": "\"437cec25e9e64ce1cfee7ef43ee8470b5c93c2197ec05745b7c1e6c275f1f4c8\"",
    "mtime": "2026-11-14T14:34:47.027Z"
  },
  "/assets/laes-team-react-20261111-v1-members-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/laes-team-react-20261111-v1-members-v1.js",
    "size": 278,
    "etag": "\"437cec25e9e64ce1cfee7ef43ee8470b5c93c2197ec05745b7c1e6c275f1f4c8\"",
    "mtime": "2026-11-14T14:34:46.976Z"
  },
  "/assets/laes-team-react-20261111-v1-profiles-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/laes-team-react-20261111-v1-profiles-v1.js",
    "size": 278,
    "etag": "\"437cec25e9e64ce1cfee7ef43ee8470b5c93c2197ec05745b7c1e6c275f1f4c8\"",
    "mtime": "2026-11-14T14:34:46.931Z"
  },
  "/assets/laes-team-react-20261111-v1-teams-only-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/laes-team-react-20261111-v1-teams-only-v1.js",
    "size": 278,
    "etag": "\"437cec25e9e64ce1cfee7ef43ee8470b5c93c2197ec05745b7c1e6c275f1f4c8\"",
    "mtime": "2026-11-14T14:34:47.019Z"
  },
  "/assets/laes-team-react-20261111-v1-tournaments-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/laes-team-react-20261111-v1-tournaments-v1.js",
    "size": 278,
    "etag": "\"437cec25e9e64ce1cfee7ef43ee8470b5c93c2197ec05745b7c1e6c275f1f4c8\"",
    "mtime": "2026-11-14T14:34:46.967Z"
  },
  "/assets/laes-team-react-20261111-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/laes-team-react-20261111-v1.js",
    "size": 278,
    "etag": "\"437cec25e9e64ce1cfee7ef43ee8470b5c93c2197ec05745b7c1e6c275f1f4c8\"",
    "mtime": "2026-11-14T14:34:46.997Z"
  },
  "/assets/laes-team-runtime-20261111-v1-aligned-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/laes-team-runtime-20261111-v1-aligned-v1.js",
    "size": 120,
    "etag": "\"36bbe6a57cde74b1e63971b6d55457859369755ddd289aa1c0b626926cfb03b4\"",
    "mtime": "2026-11-14T14:34:47.025Z"
  },
  "/assets/laes-team-runtime-20261111-v1-athlete-v2.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/laes-team-runtime-20261111-v1-athlete-v2.js",
    "size": 120,
    "etag": "\"36bbe6a57cde74b1e63971b6d55457859369755ddd289aa1c0b626926cfb03b4\"",
    "mtime": "2026-11-14T14:34:47.022Z"
  },
  "/assets/laes-team-runtime-20261111-v1-badge-art-v2.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/laes-team-runtime-20261111-v1-badge-art-v2.js",
    "size": 120,
    "etag": "\"36bbe6a57cde74b1e63971b6d55457859369755ddd289aa1c0b626926cfb03b4\"",
    "mtime": "2026-11-14T14:34:46.976Z"
  },
  "/assets/laes-team-runtime-20261111-v1-badges-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/laes-team-runtime-20261111-v1-badges-v1.js",
    "size": 120,
    "etag": "\"36bbe6a57cde74b1e63971b6d55457859369755ddd289aa1c0b626926cfb03b4\"",
    "mtime": "2026-11-14T14:34:46.947Z"
  },
  "/assets/laes-team-runtime-20261111-v1-game-logos-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/laes-team-runtime-20261111-v1-game-logos-v1.js",
    "size": 120,
    "etag": "\"36bbe6a57cde74b1e63971b6d55457859369755ddd289aa1c0b626926cfb03b4\"",
    "mtime": "2026-11-14T14:34:46.968Z"
  },
  "/assets/laes-team-runtime-20261111-v1-live-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/laes-team-runtime-20261111-v1-live-v1.js",
    "size": 120,
    "etag": "\"36bbe6a57cde74b1e63971b6d55457859369755ddd289aa1c0b626926cfb03b4\"",
    "mtime": "2026-11-14T14:34:46.949Z"
  },
  "/assets/laes-team-runtime-20261111-v1-loading-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/laes-team-runtime-20261111-v1-loading-v1.js",
    "size": 120,
    "etag": "\"36bbe6a57cde74b1e63971b6d55457859369755ddd289aa1c0b626926cfb03b4\"",
    "mtime": "2026-11-14T14:34:46.978Z"
  },
  "/assets/laes-team-runtime-20261111-v1-members-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/laes-team-runtime-20261111-v1-members-v1.js",
    "size": 120,
    "etag": "\"36bbe6a57cde74b1e63971b6d55457859369755ddd289aa1c0b626926cfb03b4\"",
    "mtime": "2026-11-14T14:34:46.949Z"
  },
  "/assets/laes-team-runtime-20261111-v1-profiles-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/laes-team-runtime-20261111-v1-profiles-v1.js",
    "size": 120,
    "etag": "\"36bbe6a57cde74b1e63971b6d55457859369755ddd289aa1c0b626926cfb03b4\"",
    "mtime": "2026-11-14T14:34:47.015Z"
  },
  "/assets/laes-team-runtime-20261111-v1-teams-only-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/laes-team-runtime-20261111-v1-teams-only-v1.js",
    "size": 120,
    "etag": "\"36bbe6a57cde74b1e63971b6d55457859369755ddd289aa1c0b626926cfb03b4\"",
    "mtime": "2026-11-14T14:34:46.989Z"
  },
  "/assets/laes-team-runtime-20261111-v1-tournaments-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/laes-team-runtime-20261111-v1-tournaments-v1.js",
    "size": 120,
    "etag": "\"36bbe6a57cde74b1e63971b6d55457859369755ddd289aa1c0b626926cfb03b4\"",
    "mtime": "2026-11-14T14:34:47.004Z"
  },
  "/assets/laes-team-runtime-20261111-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/laes-team-runtime-20261111-v1.js",
    "size": 120,
    "etag": "\"36bbe6a57cde74b1e63971b6d55457859369755ddd289aa1c0b626926cfb03b4\"",
    "mtime": "2026-11-14T14:34:47.028Z"
  },
  "/assets/laes-teams-20261111-v1.css": {
    "type": "text/css; charset=utf-8",
    "path": "../public/assets/laes-teams-20261111-v1.css",
    "size": 7431,
    "etag": "\"59a24874e1562d8fc07c012b859e9d7fd07fad59221148bee400163f2bf1d6a8\"",
    "mtime": "2026-11-14T14:34:46.978Z"
  },
  "/assets/laes-teams-20261114-aligned.css": {
    "type": "text/css; charset=utf-8",
    "path": "../public/assets/laes-teams-20261114-aligned.css",
    "size": 8345,
    "etag": "\"4ff388c68cdc3bc6878698ea06b37ce709e2dd7e88a7a0eefd715b31f0c345a7\"",
    "mtime": "2026-11-14T14:34:47.001Z"
  },
  "/assets/laes-teams-20261114-members.css": {
    "type": "text/css; charset=utf-8",
    "path": "../public/assets/laes-teams-20261114-members.css",
    "size": 8345,
    "etag": "\"4ff388c68cdc3bc6878698ea06b37ce709e2dd7e88a7a0eefd715b31f0c345a7\"",
    "mtime": "2026-11-14T14:34:46.997Z"
  },
  "/assets/laes-tournament-cards-20261112.css": {
    "type": "text/css; charset=utf-8",
    "path": "../public/assets/laes-tournament-cards-20261112.css",
    "size": 4166,
    "etag": "\"dfae8669cbc16569f15027f66498f63f846e4ad5436ea6517bc6ca10d60af3a1\"",
    "mtime": "2026-11-14T14:34:46.971Z"
  },
  "/assets/laes-upcoming-logos-20261114.css": {
    "type": "text/css; charset=utf-8",
    "path": "../public/assets/laes-upcoming-logos-20261114.css",
    "size": 149,
    "etag": "\"d1acccf1f99db46300967978bb79318a0fc123d67bc276ac94c88de7841d4cdc\"",
    "mtime": "2026-11-14T14:34:46.971Z"
  },
  "/assets/mail-BAkI5dcV-aligned-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/mail-BAkI5dcV-aligned-v1.js",
    "size": 214,
    "etag": "\"f02a5ede886a194868fe049714d034c323719e541d6f9e8130b64fe7bed8359b\"",
    "mtime": "2026-11-14T14:34:46.963Z"
  },
  "/assets/mail-BAkI5dcV-athlete-v2.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/mail-BAkI5dcV-athlete-v2.js",
    "size": 214,
    "etag": "\"f02a5ede886a194868fe049714d034c323719e541d6f9e8130b64fe7bed8359b\"",
    "mtime": "2026-11-14T14:34:46.938Z"
  },
  "/assets/mail-BAkI5dcV-badge-art-v2.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/mail-BAkI5dcV-badge-art-v2.js",
    "size": 214,
    "etag": "\"f02a5ede886a194868fe049714d034c323719e541d6f9e8130b64fe7bed8359b\"",
    "mtime": "2026-11-14T14:34:47.010Z"
  },
  "/assets/mail-BAkI5dcV-badges-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/mail-BAkI5dcV-badges-v1.js",
    "size": 214,
    "etag": "\"f02a5ede886a194868fe049714d034c323719e541d6f9e8130b64fe7bed8359b\"",
    "mtime": "2026-11-14T14:34:46.940Z"
  },
  "/assets/mail-BAkI5dcV-game-logos-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/mail-BAkI5dcV-game-logos-v1.js",
    "size": 214,
    "etag": "\"f02a5ede886a194868fe049714d034c323719e541d6f9e8130b64fe7bed8359b\"",
    "mtime": "2026-11-14T14:34:46.969Z"
  },
  "/assets/mail-BAkI5dcV-live-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/mail-BAkI5dcV-live-v1.js",
    "size": 214,
    "etag": "\"f02a5ede886a194868fe049714d034c323719e541d6f9e8130b64fe7bed8359b\"",
    "mtime": "2026-11-14T14:34:46.965Z"
  },
  "/assets/mail-BAkI5dcV-loading-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/mail-BAkI5dcV-loading-v1.js",
    "size": 214,
    "etag": "\"f02a5ede886a194868fe049714d034c323719e541d6f9e8130b64fe7bed8359b\"",
    "mtime": "2026-11-14T14:34:47.002Z"
  },
  "/assets/mail-BAkI5dcV-members-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/mail-BAkI5dcV-members-v1.js",
    "size": 214,
    "etag": "\"f02a5ede886a194868fe049714d034c323719e541d6f9e8130b64fe7bed8359b\"",
    "mtime": "2026-11-14T14:34:47.024Z"
  },
  "/assets/mail-BAkI5dcV-profiles-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/mail-BAkI5dcV-profiles-v1.js",
    "size": 214,
    "etag": "\"f02a5ede886a194868fe049714d034c323719e541d6f9e8130b64fe7bed8359b\"",
    "mtime": "2026-11-14T14:34:47.019Z"
  },
  "/assets/mail-BAkI5dcV-teams-only-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/mail-BAkI5dcV-teams-only-v1.js",
    "size": 214,
    "etag": "\"f02a5ede886a194868fe049714d034c323719e541d6f9e8130b64fe7bed8359b\"",
    "mtime": "2026-11-14T14:34:46.994Z"
  },
  "/assets/mail-BAkI5dcV-tournaments-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/mail-BAkI5dcV-tournaments-v1.js",
    "size": 214,
    "etag": "\"f02a5ede886a194868fe049714d034c323719e541d6f9e8130b64fe7bed8359b\"",
    "mtime": "2026-11-14T14:34:46.999Z"
  },
  "/assets/mail-BAkI5dcV.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/mail-BAkI5dcV.js",
    "size": 214,
    "etag": "\"f02a5ede886a194868fe049714d034c323719e541d6f9e8130b64fe7bed8359b\"",
    "mtime": "2026-11-14T14:34:47.009Z"
  },
  "/assets/modalidades._slug-CrZaGB2t-aligned-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/modalidades._slug-CrZaGB2t-aligned-v1.js",
    "size": 2840,
    "etag": "\"ad9ce2696dd60bcc18bf6389cbc89e20c3b8e9ffb99d4d2a93ac3b2ee84ee008\"",
    "mtime": "2026-11-14T14:34:46.993Z"
  },
  "/assets/modalidades._slug-CrZaGB2t-athlete-v2.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/modalidades._slug-CrZaGB2t-athlete-v2.js",
    "size": 2840,
    "etag": "\"ad9ce2696dd60bcc18bf6389cbc89e20c3b8e9ffb99d4d2a93ac3b2ee84ee008\"",
    "mtime": "2026-11-14T14:34:46.978Z"
  },
  "/assets/modalidades._slug-CrZaGB2t-badge-art-v2.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/modalidades._slug-CrZaGB2t-badge-art-v2.js",
    "size": 2840,
    "etag": "\"ad9ce2696dd60bcc18bf6389cbc89e20c3b8e9ffb99d4d2a93ac3b2ee84ee008\"",
    "mtime": "2026-11-14T14:34:46.999Z"
  },
  "/assets/modalidades._slug-CrZaGB2t-badges-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/modalidades._slug-CrZaGB2t-badges-v1.js",
    "size": 2840,
    "etag": "\"ad9ce2696dd60bcc18bf6389cbc89e20c3b8e9ffb99d4d2a93ac3b2ee84ee008\"",
    "mtime": "2026-11-14T14:34:47.000Z"
  },
  "/assets/modalidades._slug-CrZaGB2t-game-logos-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/modalidades._slug-CrZaGB2t-game-logos-v1.js",
    "size": 2840,
    "etag": "\"ad9ce2696dd60bcc18bf6389cbc89e20c3b8e9ffb99d4d2a93ac3b2ee84ee008\"",
    "mtime": "2026-11-14T14:34:46.986Z"
  },
  "/assets/modalidades._slug-CrZaGB2t-live-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/modalidades._slug-CrZaGB2t-live-v1.js",
    "size": 2840,
    "etag": "\"ad9ce2696dd60bcc18bf6389cbc89e20c3b8e9ffb99d4d2a93ac3b2ee84ee008\"",
    "mtime": "2026-11-14T14:34:47.017Z"
  },
  "/assets/modalidades._slug-CrZaGB2t-loading-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/modalidades._slug-CrZaGB2t-loading-v1.js",
    "size": 2840,
    "etag": "\"ad9ce2696dd60bcc18bf6389cbc89e20c3b8e9ffb99d4d2a93ac3b2ee84ee008\"",
    "mtime": "2026-11-14T14:34:46.981Z"
  },
  "/assets/modalidades._slug-CrZaGB2t-members-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/modalidades._slug-CrZaGB2t-members-v1.js",
    "size": 2840,
    "etag": "\"ad9ce2696dd60bcc18bf6389cbc89e20c3b8e9ffb99d4d2a93ac3b2ee84ee008\"",
    "mtime": "2026-11-14T14:34:46.954Z"
  },
  "/assets/modalidades._slug-CrZaGB2t-profiles-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/modalidades._slug-CrZaGB2t-profiles-v1.js",
    "size": 2840,
    "etag": "\"ad9ce2696dd60bcc18bf6389cbc89e20c3b8e9ffb99d4d2a93ac3b2ee84ee008\"",
    "mtime": "2026-11-14T14:34:47.021Z"
  },
  "/assets/modalidades._slug-CrZaGB2t-teams-only-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/modalidades._slug-CrZaGB2t-teams-only-v1.js",
    "size": 2840,
    "etag": "\"ad9ce2696dd60bcc18bf6389cbc89e20c3b8e9ffb99d4d2a93ac3b2ee84ee008\"",
    "mtime": "2026-11-14T14:34:46.980Z"
  },
  "/assets/modalidades._slug-CrZaGB2t-tournaments-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/modalidades._slug-CrZaGB2t-tournaments-v1.js",
    "size": 2840,
    "etag": "\"ad9ce2696dd60bcc18bf6389cbc89e20c3b8e9ffb99d4d2a93ac3b2ee84ee008\"",
    "mtime": "2026-11-14T14:34:46.958Z"
  },
  "/assets/modalidades._slug-CrZaGB2t.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/modalidades._slug-CrZaGB2t.js",
    "size": 2840,
    "etag": "\"ad9ce2696dd60bcc18bf6389cbc89e20c3b8e9ffb99d4d2a93ac3b2ee84ee008\"",
    "mtime": "2026-11-14T14:34:46.953Z"
  },
  "/assets/modalidades.index-Bq1EHXIc-aligned-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/modalidades.index-Bq1EHXIc-aligned-v1.js",
    "size": 10381,
    "etag": "\"a8a420cf51aaf68d5ad2576f64a27c472682f6763d3a339e87ac137ef8b136f3\"",
    "mtime": "2026-11-14T14:34:47.016Z"
  },
  "/assets/modalidades.index-Bq1EHXIc-athlete-v2.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/modalidades.index-Bq1EHXIc-athlete-v2.js",
    "size": 10381,
    "etag": "\"a8a420cf51aaf68d5ad2576f64a27c472682f6763d3a339e87ac137ef8b136f3\"",
    "mtime": "2026-11-14T14:34:46.995Z"
  },
  "/assets/modalidades.index-Bq1EHXIc-badge-art-v2.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/modalidades.index-Bq1EHXIc-badge-art-v2.js",
    "size": 10381,
    "etag": "\"a8a420cf51aaf68d5ad2576f64a27c472682f6763d3a339e87ac137ef8b136f3\"",
    "mtime": "2026-11-14T14:34:46.995Z"
  },
  "/assets/modalidades.index-Bq1EHXIc-badges-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/modalidades.index-Bq1EHXIc-badges-v1.js",
    "size": 10381,
    "etag": "\"a8a420cf51aaf68d5ad2576f64a27c472682f6763d3a339e87ac137ef8b136f3\"",
    "mtime": "2026-11-14T14:34:46.979Z"
  },
  "/assets/modalidades.index-Bq1EHXIc-game-logos-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/modalidades.index-Bq1EHXIc-game-logos-v1.js",
    "size": 10381,
    "etag": "\"a8a420cf51aaf68d5ad2576f64a27c472682f6763d3a339e87ac137ef8b136f3\"",
    "mtime": "2026-11-14T14:34:46.958Z"
  },
  "/assets/modalidades.index-Bq1EHXIc-live-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/modalidades.index-Bq1EHXIc-live-v1.js",
    "size": 10381,
    "etag": "\"a8a420cf51aaf68d5ad2576f64a27c472682f6763d3a339e87ac137ef8b136f3\"",
    "mtime": "2026-11-14T14:34:46.929Z"
  },
  "/assets/modalidades.index-Bq1EHXIc-loading-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/modalidades.index-Bq1EHXIc-loading-v1.js",
    "size": 10381,
    "etag": "\"a8a420cf51aaf68d5ad2576f64a27c472682f6763d3a339e87ac137ef8b136f3\"",
    "mtime": "2026-11-14T14:34:46.932Z"
  },
  "/assets/modalidades.index-Bq1EHXIc-members-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/modalidades.index-Bq1EHXIc-members-v1.js",
    "size": 10381,
    "etag": "\"a8a420cf51aaf68d5ad2576f64a27c472682f6763d3a339e87ac137ef8b136f3\"",
    "mtime": "2026-11-14T14:34:47.021Z"
  },
  "/assets/modalidades.index-Bq1EHXIc-profiles-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/modalidades.index-Bq1EHXIc-profiles-v1.js",
    "size": 10381,
    "etag": "\"a8a420cf51aaf68d5ad2576f64a27c472682f6763d3a339e87ac137ef8b136f3\"",
    "mtime": "2026-11-14T14:34:47.015Z"
  },
  "/assets/modalidades.index-Bq1EHXIc-teams-only-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/modalidades.index-Bq1EHXIc-teams-only-v1.js",
    "size": 10381,
    "etag": "\"a8a420cf51aaf68d5ad2576f64a27c472682f6763d3a339e87ac137ef8b136f3\"",
    "mtime": "2026-11-14T14:34:47.017Z"
  },
  "/assets/modalidades.index-Bq1EHXIc-tournaments-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/modalidades.index-Bq1EHXIc-tournaments-v1.js",
    "size": 10381,
    "etag": "\"a8a420cf51aaf68d5ad2576f64a27c472682f6763d3a339e87ac137ef8b136f3\"",
    "mtime": "2026-11-14T14:34:46.962Z"
  },
  "/assets/modalidades.index-Bq1EHXIc.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/modalidades.index-Bq1EHXIc.js",
    "size": 10381,
    "etag": "\"a8a420cf51aaf68d5ad2576f64a27c472682f6763d3a339e87ac137ef8b136f3\"",
    "mtime": "2026-11-14T14:34:46.930Z"
  },
  "/assets/noticias._slug-D6bu7mWa-aligned-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/noticias._slug-D6bu7mWa-aligned-v1.js",
    "size": 5338,
    "etag": "\"e51305a636afdba8f619d939a6a658403056fde4bf1eecf73d63338d9cc0a69d\"",
    "mtime": "2026-11-14T14:34:46.963Z"
  },
  "/assets/noticias._slug-D6bu7mWa-athlete-v2.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/noticias._slug-D6bu7mWa-athlete-v2.js",
    "size": 5338,
    "etag": "\"e51305a636afdba8f619d939a6a658403056fde4bf1eecf73d63338d9cc0a69d\"",
    "mtime": "2026-11-14T14:34:46.999Z"
  },
  "/assets/noticias._slug-D6bu7mWa-badge-art-v2.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/noticias._slug-D6bu7mWa-badge-art-v2.js",
    "size": 5338,
    "etag": "\"e51305a636afdba8f619d939a6a658403056fde4bf1eecf73d63338d9cc0a69d\"",
    "mtime": "2026-11-14T14:34:46.930Z"
  },
  "/assets/noticias._slug-D6bu7mWa-badges-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/noticias._slug-D6bu7mWa-badges-v1.js",
    "size": 5338,
    "etag": "\"e51305a636afdba8f619d939a6a658403056fde4bf1eecf73d63338d9cc0a69d\"",
    "mtime": "2026-11-14T14:34:47.032Z"
  },
  "/assets/noticias._slug-D6bu7mWa-game-logos-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/noticias._slug-D6bu7mWa-game-logos-v1.js",
    "size": 5338,
    "etag": "\"e51305a636afdba8f619d939a6a658403056fde4bf1eecf73d63338d9cc0a69d\"",
    "mtime": "2026-11-14T14:34:47.024Z"
  },
  "/assets/noticias._slug-D6bu7mWa-live-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/noticias._slug-D6bu7mWa-live-v1.js",
    "size": 5338,
    "etag": "\"e51305a636afdba8f619d939a6a658403056fde4bf1eecf73d63338d9cc0a69d\"",
    "mtime": "2026-11-14T14:34:46.928Z"
  },
  "/assets/noticias._slug-D6bu7mWa-loading-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/noticias._slug-D6bu7mWa-loading-v1.js",
    "size": 5338,
    "etag": "\"e51305a636afdba8f619d939a6a658403056fde4bf1eecf73d63338d9cc0a69d\"",
    "mtime": "2026-11-14T14:34:46.990Z"
  },
  "/assets/noticias._slug-D6bu7mWa-members-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/noticias._slug-D6bu7mWa-members-v1.js",
    "size": 5338,
    "etag": "\"e51305a636afdba8f619d939a6a658403056fde4bf1eecf73d63338d9cc0a69d\"",
    "mtime": "2026-11-14T14:34:46.930Z"
  },
  "/assets/noticias._slug-D6bu7mWa-profiles-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/noticias._slug-D6bu7mWa-profiles-v1.js",
    "size": 5338,
    "etag": "\"e51305a636afdba8f619d939a6a658403056fde4bf1eecf73d63338d9cc0a69d\"",
    "mtime": "2026-11-14T14:34:46.981Z"
  },
  "/assets/noticias._slug-D6bu7mWa-teams-only-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/noticias._slug-D6bu7mWa-teams-only-v1.js",
    "size": 5338,
    "etag": "\"e51305a636afdba8f619d939a6a658403056fde4bf1eecf73d63338d9cc0a69d\"",
    "mtime": "2026-11-14T14:34:46.934Z"
  },
  "/assets/noticias._slug-D6bu7mWa-tournaments-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/noticias._slug-D6bu7mWa-tournaments-v1.js",
    "size": 5338,
    "etag": "\"e51305a636afdba8f619d939a6a658403056fde4bf1eecf73d63338d9cc0a69d\"",
    "mtime": "2026-11-14T14:34:47.022Z"
  },
  "/assets/noticias._slug-D6bu7mWa.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/noticias._slug-D6bu7mWa.js",
    "size": 5338,
    "etag": "\"e51305a636afdba8f619d939a6a658403056fde4bf1eecf73d63338d9cc0a69d\"",
    "mtime": "2026-11-14T14:34:46.930Z"
  },
  "/assets/noticias.index-DJHNDVQN-aligned-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/noticias.index-DJHNDVQN-aligned-v1.js",
    "size": 956,
    "etag": "\"a619a6dbe68369372320d87ad9e61a0e643577cb632626c22a95e0734417ff91\"",
    "mtime": "2026-11-14T14:34:47.023Z"
  },
  "/assets/noticias.index-DJHNDVQN-athlete-v2.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/noticias.index-DJHNDVQN-athlete-v2.js",
    "size": 956,
    "etag": "\"a619a6dbe68369372320d87ad9e61a0e643577cb632626c22a95e0734417ff91\"",
    "mtime": "2026-11-14T14:34:47.009Z"
  },
  "/assets/noticias.index-DJHNDVQN-badge-art-v2.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/noticias.index-DJHNDVQN-badge-art-v2.js",
    "size": 956,
    "etag": "\"a619a6dbe68369372320d87ad9e61a0e643577cb632626c22a95e0734417ff91\"",
    "mtime": "2026-11-14T14:34:46.949Z"
  },
  "/assets/noticias.index-DJHNDVQN-badges-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/noticias.index-DJHNDVQN-badges-v1.js",
    "size": 956,
    "etag": "\"a619a6dbe68369372320d87ad9e61a0e643577cb632626c22a95e0734417ff91\"",
    "mtime": "2026-11-14T14:34:46.963Z"
  },
  "/assets/noticias.index-DJHNDVQN-game-logos-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/noticias.index-DJHNDVQN-game-logos-v1.js",
    "size": 956,
    "etag": "\"a619a6dbe68369372320d87ad9e61a0e643577cb632626c22a95e0734417ff91\"",
    "mtime": "2026-11-14T14:34:47.005Z"
  },
  "/assets/noticias.index-DJHNDVQN-live-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/noticias.index-DJHNDVQN-live-v1.js",
    "size": 956,
    "etag": "\"a619a6dbe68369372320d87ad9e61a0e643577cb632626c22a95e0734417ff91\"",
    "mtime": "2026-11-14T14:34:46.959Z"
  },
  "/assets/noticias.index-DJHNDVQN-loading-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/noticias.index-DJHNDVQN-loading-v1.js",
    "size": 956,
    "etag": "\"a619a6dbe68369372320d87ad9e61a0e643577cb632626c22a95e0734417ff91\"",
    "mtime": "2026-11-14T14:34:46.991Z"
  },
  "/assets/noticias.index-DJHNDVQN-members-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/noticias.index-DJHNDVQN-members-v1.js",
    "size": 956,
    "etag": "\"a619a6dbe68369372320d87ad9e61a0e643577cb632626c22a95e0734417ff91\"",
    "mtime": "2026-11-14T14:34:46.932Z"
  },
  "/assets/noticias.index-DJHNDVQN-profiles-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/noticias.index-DJHNDVQN-profiles-v1.js",
    "size": 956,
    "etag": "\"a619a6dbe68369372320d87ad9e61a0e643577cb632626c22a95e0734417ff91\"",
    "mtime": "2026-11-14T14:34:46.973Z"
  },
  "/assets/noticias.index-DJHNDVQN-teams-only-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/noticias.index-DJHNDVQN-teams-only-v1.js",
    "size": 956,
    "etag": "\"a619a6dbe68369372320d87ad9e61a0e643577cb632626c22a95e0734417ff91\"",
    "mtime": "2026-11-14T14:34:46.966Z"
  },
  "/assets/noticias.index-DJHNDVQN-tournaments-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/noticias.index-DJHNDVQN-tournaments-v1.js",
    "size": 956,
    "etag": "\"a619a6dbe68369372320d87ad9e61a0e643577cb632626c22a95e0734417ff91\"",
    "mtime": "2026-11-14T14:34:46.953Z"
  },
  "/assets/noticias.index-DJHNDVQN.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/noticias.index-DJHNDVQN.js",
    "size": 956,
    "etag": "\"a619a6dbe68369372320d87ad9e61a0e643577cb632626c22a95e0734417ff91\"",
    "mtime": "2026-11-14T14:34:46.947Z"
  },
  "/assets/painel-athlete-dashboard-20261112-aligned-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/painel-athlete-dashboard-20261112-aligned-v1.js",
    "size": 133001,
    "etag": "\"f9142d7efd847b5202b34bac91311b94e12e5dbdc479102f380eeea9fa480499\"",
    "mtime": "2026-11-14T14:34:47.026Z"
  },
  "/assets/painel-athlete-dashboard-20261112-athlete-v2.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/painel-athlete-dashboard-20261112-athlete-v2.js",
    "size": 133001,
    "etag": "\"f9142d7efd847b5202b34bac91311b94e12e5dbdc479102f380eeea9fa480499\"",
    "mtime": "2026-11-14T14:34:46.938Z"
  },
  "/assets/painel-athlete-dashboard-20261112-badge-art-v2.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/painel-athlete-dashboard-20261112-badge-art-v2.js",
    "size": 133001,
    "etag": "\"f9142d7efd847b5202b34bac91311b94e12e5dbdc479102f380eeea9fa480499\"",
    "mtime": "2026-11-14T14:34:47.020Z"
  },
  "/assets/painel-athlete-dashboard-20261112-badges-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/painel-athlete-dashboard-20261112-badges-v1.js",
    "size": 133001,
    "etag": "\"f9142d7efd847b5202b34bac91311b94e12e5dbdc479102f380eeea9fa480499\"",
    "mtime": "2026-11-14T14:34:47.012Z"
  },
  "/assets/painel-athlete-dashboard-20261112-game-logos-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/painel-athlete-dashboard-20261112-game-logos-v1.js",
    "size": 133001,
    "etag": "\"f9142d7efd847b5202b34bac91311b94e12e5dbdc479102f380eeea9fa480499\"",
    "mtime": "2026-11-14T14:34:47.000Z"
  },
  "/assets/painel-athlete-dashboard-20261112-live-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/painel-athlete-dashboard-20261112-live-v1.js",
    "size": 133001,
    "etag": "\"f9142d7efd847b5202b34bac91311b94e12e5dbdc479102f380eeea9fa480499\"",
    "mtime": "2026-11-14T14:34:47.014Z"
  },
  "/assets/painel-athlete-dashboard-20261112-loading-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/painel-athlete-dashboard-20261112-loading-v1.js",
    "size": 133001,
    "etag": "\"f9142d7efd847b5202b34bac91311b94e12e5dbdc479102f380eeea9fa480499\"",
    "mtime": "2026-11-14T14:34:47.026Z"
  },
  "/assets/painel-athlete-dashboard-20261112-members-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/painel-athlete-dashboard-20261112-members-v1.js",
    "size": 133001,
    "etag": "\"f9142d7efd847b5202b34bac91311b94e12e5dbdc479102f380eeea9fa480499\"",
    "mtime": "2026-11-14T14:34:47.005Z"
  },
  "/assets/painel-athlete-dashboard-20261112-profiles-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/painel-athlete-dashboard-20261112-profiles-v1.js",
    "size": 133001,
    "etag": "\"f9142d7efd847b5202b34bac91311b94e12e5dbdc479102f380eeea9fa480499\"",
    "mtime": "2026-11-14T14:34:46.985Z"
  },
  "/assets/painel-athlete-dashboard-20261112-teams-only-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/painel-athlete-dashboard-20261112-teams-only-v1.js",
    "size": 133001,
    "etag": "\"f9142d7efd847b5202b34bac91311b94e12e5dbdc479102f380eeea9fa480499\"",
    "mtime": "2026-11-14T14:34:47.005Z"
  },
  "/assets/painel-athlete-dashboard-20261112-tournaments-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/painel-athlete-dashboard-20261112-tournaments-v1.js",
    "size": 133001,
    "etag": "\"f9142d7efd847b5202b34bac91311b94e12e5dbdc479102f380eeea9fa480499\"",
    "mtime": "2026-11-14T14:34:46.992Z"
  },
  "/assets/painel-athlete-dashboard-20261112.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/painel-athlete-dashboard-20261112.js",
    "size": 133001,
    "etag": "\"f9142d7efd847b5202b34bac91311b94e12e5dbdc479102f380eeea9fa480499\"",
    "mtime": "2026-11-14T14:34:46.952Z"
  },
  "/assets/painel-laes-20261111-aligned-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/painel-laes-20261111-aligned-v1.js",
    "size": 290,
    "etag": "\"6d1258f952d2324d9142d049ccfda9f710503a4e0717dcdb5a4b0444cc5bbf20\"",
    "mtime": "2026-11-14T14:34:46.961Z"
  },
  "/assets/painel-laes-20261111-athlete-v2.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/painel-laes-20261111-athlete-v2.js",
    "size": 290,
    "etag": "\"6d1258f952d2324d9142d049ccfda9f710503a4e0717dcdb5a4b0444cc5bbf20\"",
    "mtime": "2026-11-14T14:34:46.969Z"
  },
  "/assets/painel-laes-20261111-badge-art-v2.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/painel-laes-20261111-badge-art-v2.js",
    "size": 290,
    "etag": "\"6d1258f952d2324d9142d049ccfda9f710503a4e0717dcdb5a4b0444cc5bbf20\"",
    "mtime": "2026-11-14T14:34:46.948Z"
  },
  "/assets/painel-laes-20261111-badges-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/painel-laes-20261111-badges-v1.js",
    "size": 290,
    "etag": "\"6d1258f952d2324d9142d049ccfda9f710503a4e0717dcdb5a4b0444cc5bbf20\"",
    "mtime": "2026-11-14T14:34:46.977Z"
  },
  "/assets/painel-laes-20261111-game-logos-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/painel-laes-20261111-game-logos-v1.js",
    "size": 290,
    "etag": "\"6d1258f952d2324d9142d049ccfda9f710503a4e0717dcdb5a4b0444cc5bbf20\"",
    "mtime": "2026-11-14T14:34:46.999Z"
  },
  "/assets/painel-laes-20261111-live-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/painel-laes-20261111-live-v1.js",
    "size": 290,
    "etag": "\"6d1258f952d2324d9142d049ccfda9f710503a4e0717dcdb5a4b0444cc5bbf20\"",
    "mtime": "2026-11-14T14:34:46.932Z"
  },
  "/assets/painel-laes-20261111-loading-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/painel-laes-20261111-loading-v1.js",
    "size": 290,
    "etag": "\"6d1258f952d2324d9142d049ccfda9f710503a4e0717dcdb5a4b0444cc5bbf20\"",
    "mtime": "2026-11-14T14:34:47.009Z"
  },
  "/assets/painel-laes-20261111-members-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/painel-laes-20261111-members-v1.js",
    "size": 290,
    "etag": "\"6d1258f952d2324d9142d049ccfda9f710503a4e0717dcdb5a4b0444cc5bbf20\"",
    "mtime": "2026-11-14T14:34:46.980Z"
  },
  "/assets/painel-laes-20261111-profiles-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/painel-laes-20261111-profiles-v1.js",
    "size": 290,
    "etag": "\"6d1258f952d2324d9142d049ccfda9f710503a4e0717dcdb5a4b0444cc5bbf20\"",
    "mtime": "2026-11-14T14:34:46.935Z"
  },
  "/assets/painel-laes-20261111-teams-only-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/painel-laes-20261111-teams-only-v1.js",
    "size": 290,
    "etag": "\"6d1258f952d2324d9142d049ccfda9f710503a4e0717dcdb5a4b0444cc5bbf20\"",
    "mtime": "2026-11-14T14:34:46.992Z"
  },
  "/assets/painel-laes-20261111-tournaments-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/painel-laes-20261111-tournaments-v1.js",
    "size": 290,
    "etag": "\"6d1258f952d2324d9142d049ccfda9f710503a4e0717dcdb5a4b0444cc5bbf20\"",
    "mtime": "2026-11-14T14:34:46.948Z"
  },
  "/assets/painel-laes-20261111.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/painel-laes-20261111.js",
    "size": 290,
    "etag": "\"6d1258f952d2324d9142d049ccfda9f710503a4e0717dcdb5a4b0444cc5bbf20\"",
    "mtime": "2026-11-14T14:34:46.999Z"
  },
  "/assets/painel-legacy-laes-teams-aligned-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/painel-legacy-laes-teams-aligned-v1.js",
    "size": 132269,
    "etag": "\"dab904371937a989a4a4bbdf1f30d4b786dfb07e326a01c57296e3535d89fd41\"",
    "mtime": "2026-11-14T14:34:46.931Z"
  },
  "/assets/painel-legacy-laes-teams-athlete-v2.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/painel-legacy-laes-teams-athlete-v2.js",
    "size": 132269,
    "etag": "\"dab904371937a989a4a4bbdf1f30d4b786dfb07e326a01c57296e3535d89fd41\"",
    "mtime": "2026-11-14T14:34:46.928Z"
  },
  "/assets/painel-legacy-laes-teams-badge-art-v2.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/painel-legacy-laes-teams-badge-art-v2.js",
    "size": 132269,
    "etag": "\"dab904371937a989a4a4bbdf1f30d4b786dfb07e326a01c57296e3535d89fd41\"",
    "mtime": "2026-11-14T14:34:47.032Z"
  },
  "/assets/painel-legacy-laes-teams-badges-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/painel-legacy-laes-teams-badges-v1.js",
    "size": 132269,
    "etag": "\"dab904371937a989a4a4bbdf1f30d4b786dfb07e326a01c57296e3535d89fd41\"",
    "mtime": "2026-11-14T14:34:46.938Z"
  },
  "/assets/painel-legacy-laes-teams-game-logos-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/painel-legacy-laes-teams-game-logos-v1.js",
    "size": 132269,
    "etag": "\"dab904371937a989a4a4bbdf1f30d4b786dfb07e326a01c57296e3535d89fd41\"",
    "mtime": "2026-11-14T14:34:46.953Z"
  },
  "/assets/painel-legacy-laes-teams-live-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/painel-legacy-laes-teams-live-v1.js",
    "size": 132269,
    "etag": "\"dab904371937a989a4a4bbdf1f30d4b786dfb07e326a01c57296e3535d89fd41\"",
    "mtime": "2026-11-14T14:34:46.928Z"
  },
  "/assets/painel-legacy-laes-teams-loading-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/painel-legacy-laes-teams-loading-v1.js",
    "size": 132269,
    "etag": "\"dab904371937a989a4a4bbdf1f30d4b786dfb07e326a01c57296e3535d89fd41\"",
    "mtime": "2026-11-14T14:34:46.986Z"
  },
  "/assets/painel-legacy-laes-teams-members-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/painel-legacy-laes-teams-members-v1.js",
    "size": 132269,
    "etag": "\"dab904371937a989a4a4bbdf1f30d4b786dfb07e326a01c57296e3535d89fd41\"",
    "mtime": "2026-11-14T14:34:46.947Z"
  },
  "/assets/painel-legacy-laes-teams-profiles-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/painel-legacy-laes-teams-profiles-v1.js",
    "size": 132269,
    "etag": "\"dab904371937a989a4a4bbdf1f30d4b786dfb07e326a01c57296e3535d89fd41\"",
    "mtime": "2026-11-14T14:34:46.994Z"
  },
  "/assets/painel-legacy-laes-teams-teams-only-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/painel-legacy-laes-teams-teams-only-v1.js",
    "size": 132269,
    "etag": "\"dab904371937a989a4a4bbdf1f30d4b786dfb07e326a01c57296e3535d89fd41\"",
    "mtime": "2026-11-14T14:34:47.016Z"
  },
  "/assets/painel-legacy-laes-teams-tournaments-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/painel-legacy-laes-teams-tournaments-v1.js",
    "size": 132269,
    "etag": "\"dab904371937a989a4a4bbdf1f30d4b786dfb07e326a01c57296e3535d89fd41\"",
    "mtime": "2026-11-14T14:34:46.990Z"
  },
  "/assets/painel-legacy-laes-teams.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/painel-legacy-laes-teams.js",
    "size": 132269,
    "etag": "\"dab904371937a989a4a4bbdf1f30d4b786dfb07e326a01c57296e3535d89fd41\"",
    "mtime": "2026-11-14T14:34:46.938Z"
  },
  "/assets/privacidade-laes-teams-20261111-aligned-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/privacidade-laes-teams-20261111-aligned-v1.js",
    "size": 10171,
    "etag": "\"c8fad8974ffe4214f254b61b89e4d8ec7b6d0e820134317feacb4df150945fb9\"",
    "mtime": "2026-11-14T14:34:46.991Z"
  },
  "/assets/privacidade-laes-teams-20261111-athlete-v2.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/privacidade-laes-teams-20261111-athlete-v2.js",
    "size": 9562,
    "etag": "\"d49b1d0da94ff24a5161fc4673943d5df9c1e6c9c4a43e4ee965f4295a070d5e\"",
    "mtime": "2026-11-14T14:34:46.937Z"
  },
  "/assets/privacidade-laes-teams-20261111-badge-art-v2.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/privacidade-laes-teams-20261111-badge-art-v2.js",
    "size": 10171,
    "etag": "\"c8fad8974ffe4214f254b61b89e4d8ec7b6d0e820134317feacb4df150945fb9\"",
    "mtime": "2026-11-14T14:34:46.999Z"
  },
  "/assets/privacidade-laes-teams-20261111-badges-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/privacidade-laes-teams-20261111-badges-v1.js",
    "size": 10171,
    "etag": "\"c8fad8974ffe4214f254b61b89e4d8ec7b6d0e820134317feacb4df150945fb9\"",
    "mtime": "2026-11-14T14:34:46.959Z"
  },
  "/assets/privacidade-laes-teams-20261111-game-logos-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/privacidade-laes-teams-20261111-game-logos-v1.js",
    "size": 10171,
    "etag": "\"c8fad8974ffe4214f254b61b89e4d8ec7b6d0e820134317feacb4df150945fb9\"",
    "mtime": "2026-11-14T14:34:46.976Z"
  },
  "/assets/privacidade-laes-teams-20261111-live-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/privacidade-laes-teams-20261111-live-v1.js",
    "size": 10171,
    "etag": "\"c8fad8974ffe4214f254b61b89e4d8ec7b6d0e820134317feacb4df150945fb9\"",
    "mtime": "2026-11-14T14:34:46.939Z"
  },
  "/assets/privacidade-laes-teams-20261111-loading-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/privacidade-laes-teams-20261111-loading-v1.js",
    "size": 10171,
    "etag": "\"c8fad8974ffe4214f254b61b89e4d8ec7b6d0e820134317feacb4df150945fb9\"",
    "mtime": "2026-11-14T14:34:47.010Z"
  },
  "/assets/privacidade-laes-teams-20261111-members-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/privacidade-laes-teams-20261111-members-v1.js",
    "size": 10171,
    "etag": "\"c8fad8974ffe4214f254b61b89e4d8ec7b6d0e820134317feacb4df150945fb9\"",
    "mtime": "2026-11-14T14:34:47.028Z"
  },
  "/assets/privacidade-laes-teams-20261111-profiles-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/privacidade-laes-teams-20261111-profiles-v1.js",
    "size": 10171,
    "etag": "\"c8fad8974ffe4214f254b61b89e4d8ec7b6d0e820134317feacb4df150945fb9\"",
    "mtime": "2026-11-14T14:34:46.985Z"
  },
  "/assets/privacidade-laes-teams-20261111-teams-only-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/privacidade-laes-teams-20261111-teams-only-v1.js",
    "size": 10171,
    "etag": "\"c8fad8974ffe4214f254b61b89e4d8ec7b6d0e820134317feacb4df150945fb9\"",
    "mtime": "2026-11-14T14:34:46.973Z"
  },
  "/assets/privacidade-laes-teams-20261111-tournaments-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/privacidade-laes-teams-20261111-tournaments-v1.js",
    "size": 9562,
    "etag": "\"d49b1d0da94ff24a5161fc4673943d5df9c1e6c9c4a43e4ee965f4295a070d5e\"",
    "mtime": "2026-11-14T14:34:46.966Z"
  },
  "/assets/privacidade-laes-teams-20261111.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/privacidade-laes-teams-20261111.js",
    "size": 10171,
    "etag": "\"c8fad8974ffe4214f254b61b89e4d8ec7b6d0e820134317feacb4df150945fb9\"",
    "mtime": "2026-11-14T14:34:46.939Z"
  },
  "/assets/public.functions-B00W0OSR-aligned-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/public.functions-B00W0OSR-aligned-v1.js",
    "size": 40325,
    "etag": "\"eea92bc2e181b0313482933d74f499b48455e2de34c26c02c8ec06a348d00a4a\"",
    "mtime": "2026-11-14T14:34:47.025Z"
  },
  "/assets/public.functions-B00W0OSR-athlete-v2.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/public.functions-B00W0OSR-athlete-v2.js",
    "size": 40325,
    "etag": "\"eea92bc2e181b0313482933d74f499b48455e2de34c26c02c8ec06a348d00a4a\"",
    "mtime": "2026-11-14T14:34:47.025Z"
  },
  "/assets/public.functions-B00W0OSR-badge-art-v2.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/public.functions-B00W0OSR-badge-art-v2.js",
    "size": 40907,
    "etag": "\"017133d95654b01776a3016d511b75fc3299abe6df563c2a7902c7d50b870929\"",
    "mtime": "2026-11-17T15:25:20.482Z"
  },
  "/assets/public.functions-B00W0OSR-badges-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/public.functions-B00W0OSR-badges-v1.js",
    "size": 40325,
    "etag": "\"eea92bc2e181b0313482933d74f499b48455e2de34c26c02c8ec06a348d00a4a\"",
    "mtime": "2026-11-14T14:34:47.001Z"
  },
  "/assets/public.functions-B00W0OSR-game-logos-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/public.functions-B00W0OSR-game-logos-v1.js",
    "size": 40325,
    "etag": "\"eea92bc2e181b0313482933d74f499b48455e2de34c26c02c8ec06a348d00a4a\"",
    "mtime": "2026-11-14T14:34:47.009Z"
  },
  "/assets/public.functions-B00W0OSR-live-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/public.functions-B00W0OSR-live-v1.js",
    "size": 40325,
    "etag": "\"eea92bc2e181b0313482933d74f499b48455e2de34c26c02c8ec06a348d00a4a\"",
    "mtime": "2026-11-14T14:34:46.992Z"
  },
  "/assets/public.functions-B00W0OSR-loading-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/public.functions-B00W0OSR-loading-v1.js",
    "size": 40325,
    "etag": "\"eea92bc2e181b0313482933d74f499b48455e2de34c26c02c8ec06a348d00a4a\"",
    "mtime": "2026-11-14T14:34:46.971Z"
  },
  "/assets/public.functions-B00W0OSR-members-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/public.functions-B00W0OSR-members-v1.js",
    "size": 40325,
    "etag": "\"eea92bc2e181b0313482933d74f499b48455e2de34c26c02c8ec06a348d00a4a\"",
    "mtime": "2026-11-14T14:34:46.937Z"
  },
  "/assets/public.functions-B00W0OSR-profiles-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/public.functions-B00W0OSR-profiles-v1.js",
    "size": 40325,
    "etag": "\"eea92bc2e181b0313482933d74f499b48455e2de34c26c02c8ec06a348d00a4a\"",
    "mtime": "2026-11-14T14:34:47.024Z"
  },
  "/assets/public.functions-B00W0OSR-teams-only-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/public.functions-B00W0OSR-teams-only-v1.js",
    "size": 40325,
    "etag": "\"eea92bc2e181b0313482933d74f499b48455e2de34c26c02c8ec06a348d00a4a\"",
    "mtime": "2026-11-14T14:34:46.978Z"
  },
  "/assets/public.functions-B00W0OSR-tournaments-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/public.functions-B00W0OSR-tournaments-v1.js",
    "size": 40325,
    "etag": "\"eea92bc2e181b0313482933d74f499b48455e2de34c26c02c8ec06a348d00a4a\"",
    "mtime": "2026-11-14T14:34:46.945Z"
  },
  "/assets/public.functions-B00W0OSR.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/public.functions-B00W0OSR.js",
    "size": 40325,
    "etag": "\"eea92bc2e181b0313482933d74f499b48455e2de34c26c02c8ec06a348d00a4a\"",
    "mtime": "2026-11-14T14:34:46.953Z"
  },
  "/assets/queryOptions-Dfvzj6n2-aligned-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/queryOptions-Dfvzj6n2-aligned-v1.js",
    "size": 38,
    "etag": "\"5a6da1e7b15fa3273ef26e7c989c3ba83fa312711c4b0b703c57839402c2b813\"",
    "mtime": "2026-11-14T14:34:47.021Z"
  },
  "/assets/queryOptions-Dfvzj6n2-athlete-v2.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/queryOptions-Dfvzj6n2-athlete-v2.js",
    "size": 38,
    "etag": "\"5a6da1e7b15fa3273ef26e7c989c3ba83fa312711c4b0b703c57839402c2b813\"",
    "mtime": "2026-11-14T14:34:47.006Z"
  },
  "/assets/queryOptions-Dfvzj6n2-badge-art-v2.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/queryOptions-Dfvzj6n2-badge-art-v2.js",
    "size": 38,
    "etag": "\"5a6da1e7b15fa3273ef26e7c989c3ba83fa312711c4b0b703c57839402c2b813\"",
    "mtime": "2026-11-14T14:34:46.989Z"
  },
  "/assets/queryOptions-Dfvzj6n2-badges-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/queryOptions-Dfvzj6n2-badges-v1.js",
    "size": 38,
    "etag": "\"5a6da1e7b15fa3273ef26e7c989c3ba83fa312711c4b0b703c57839402c2b813\"",
    "mtime": "2026-11-14T14:34:46.944Z"
  },
  "/assets/queryOptions-Dfvzj6n2-game-logos-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/queryOptions-Dfvzj6n2-game-logos-v1.js",
    "size": 38,
    "etag": "\"5a6da1e7b15fa3273ef26e7c989c3ba83fa312711c4b0b703c57839402c2b813\"",
    "mtime": "2026-11-14T14:34:46.936Z"
  },
  "/assets/queryOptions-Dfvzj6n2-live-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/queryOptions-Dfvzj6n2-live-v1.js",
    "size": 38,
    "etag": "\"5a6da1e7b15fa3273ef26e7c989c3ba83fa312711c4b0b703c57839402c2b813\"",
    "mtime": "2026-11-14T14:34:47.011Z"
  },
  "/assets/queryOptions-Dfvzj6n2-loading-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/queryOptions-Dfvzj6n2-loading-v1.js",
    "size": 38,
    "etag": "\"5a6da1e7b15fa3273ef26e7c989c3ba83fa312711c4b0b703c57839402c2b813\"",
    "mtime": "2026-11-14T14:34:46.940Z"
  },
  "/assets/queryOptions-Dfvzj6n2-members-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/queryOptions-Dfvzj6n2-members-v1.js",
    "size": 38,
    "etag": "\"5a6da1e7b15fa3273ef26e7c989c3ba83fa312711c4b0b703c57839402c2b813\"",
    "mtime": "2026-11-14T14:34:47.025Z"
  },
  "/assets/queryOptions-Dfvzj6n2-profiles-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/queryOptions-Dfvzj6n2-profiles-v1.js",
    "size": 38,
    "etag": "\"5a6da1e7b15fa3273ef26e7c989c3ba83fa312711c4b0b703c57839402c2b813\"",
    "mtime": "2026-11-14T14:34:46.929Z"
  },
  "/assets/queryOptions-Dfvzj6n2-teams-only-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/queryOptions-Dfvzj6n2-teams-only-v1.js",
    "size": 38,
    "etag": "\"5a6da1e7b15fa3273ef26e7c989c3ba83fa312711c4b0b703c57839402c2b813\"",
    "mtime": "2026-11-14T14:34:46.981Z"
  },
  "/assets/queryOptions-Dfvzj6n2-tournaments-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/queryOptions-Dfvzj6n2-tournaments-v1.js",
    "size": 38,
    "etag": "\"5a6da1e7b15fa3273ef26e7c989c3ba83fa312711c4b0b703c57839402c2b813\"",
    "mtime": "2026-11-14T14:34:47.019Z"
  },
  "/assets/queryOptions-Dfvzj6n2.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/queryOptions-Dfvzj6n2.js",
    "size": 38,
    "etag": "\"5a6da1e7b15fa3273ef26e7c989c3ba83fa312711c4b0b703c57839402c2b813\"",
    "mtime": "2026-11-14T14:34:46.996Z"
  },
  "/assets/react-dom-BwAJJvKu-aligned-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/react-dom-BwAJJvKu-aligned-v1.js",
    "size": 3871,
    "etag": "\"6de0160b56d0ae58c4ad4dc36ab0922b047176ef1206706cd543b9f40c09e344\"",
    "mtime": "2026-11-14T14:34:47.029Z"
  },
  "/assets/react-dom-BwAJJvKu-athlete-v2.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/react-dom-BwAJJvKu-athlete-v2.js",
    "size": 3871,
    "etag": "\"6de0160b56d0ae58c4ad4dc36ab0922b047176ef1206706cd543b9f40c09e344\"",
    "mtime": "2026-11-14T14:34:46.980Z"
  },
  "/assets/react-dom-BwAJJvKu-badge-art-v2.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/react-dom-BwAJJvKu-badge-art-v2.js",
    "size": 3871,
    "etag": "\"6de0160b56d0ae58c4ad4dc36ab0922b047176ef1206706cd543b9f40c09e344\"",
    "mtime": "2026-11-14T14:34:46.929Z"
  },
  "/assets/react-dom-BwAJJvKu-badges-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/react-dom-BwAJJvKu-badges-v1.js",
    "size": 3871,
    "etag": "\"6de0160b56d0ae58c4ad4dc36ab0922b047176ef1206706cd543b9f40c09e344\"",
    "mtime": "2026-11-14T14:34:46.952Z"
  },
  "/assets/react-dom-BwAJJvKu-game-logos-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/react-dom-BwAJJvKu-game-logos-v1.js",
    "size": 3871,
    "etag": "\"6de0160b56d0ae58c4ad4dc36ab0922b047176ef1206706cd543b9f40c09e344\"",
    "mtime": "2026-11-14T14:34:46.927Z"
  },
  "/assets/react-dom-BwAJJvKu-live-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/react-dom-BwAJJvKu-live-v1.js",
    "size": 3871,
    "etag": "\"6de0160b56d0ae58c4ad4dc36ab0922b047176ef1206706cd543b9f40c09e344\"",
    "mtime": "2026-11-14T14:34:47.027Z"
  },
  "/assets/react-dom-BwAJJvKu-loading-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/react-dom-BwAJJvKu-loading-v1.js",
    "size": 3871,
    "etag": "\"6de0160b56d0ae58c4ad4dc36ab0922b047176ef1206706cd543b9f40c09e344\"",
    "mtime": "2026-11-14T14:34:46.992Z"
  },
  "/assets/react-dom-BwAJJvKu-members-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/react-dom-BwAJJvKu-members-v1.js",
    "size": 3871,
    "etag": "\"6de0160b56d0ae58c4ad4dc36ab0922b047176ef1206706cd543b9f40c09e344\"",
    "mtime": "2026-11-14T14:34:46.994Z"
  },
  "/assets/react-dom-BwAJJvKu-profiles-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/react-dom-BwAJJvKu-profiles-v1.js",
    "size": 3871,
    "etag": "\"6de0160b56d0ae58c4ad4dc36ab0922b047176ef1206706cd543b9f40c09e344\"",
    "mtime": "2026-11-14T14:34:47.012Z"
  },
  "/assets/react-dom-BwAJJvKu-teams-only-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/react-dom-BwAJJvKu-teams-only-v1.js",
    "size": 3871,
    "etag": "\"6de0160b56d0ae58c4ad4dc36ab0922b047176ef1206706cd543b9f40c09e344\"",
    "mtime": "2026-11-14T14:34:46.934Z"
  },
  "/assets/react-dom-BwAJJvKu-tournaments-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/react-dom-BwAJJvKu-tournaments-v1.js",
    "size": 3871,
    "etag": "\"6de0160b56d0ae58c4ad4dc36ab0922b047176ef1206706cd543b9f40c09e344\"",
    "mtime": "2026-11-14T14:34:46.939Z"
  },
  "/assets/react-dom-BwAJJvKu.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/react-dom-BwAJJvKu.js",
    "size": 3871,
    "etag": "\"6de0160b56d0ae58c4ad4dc36ab0922b047176ef1206706cd543b9f40c09e344\"",
    "mtime": "2026-11-14T14:34:46.964Z"
  },
  "/assets/recuperar-senha-B8QcQDyA-aligned-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/recuperar-senha-B8QcQDyA-aligned-v1.js",
    "size": 195,
    "etag": "\"9ff440a506a65c88bedc4f299fa7aab2a0c5291fc3f6ef2c5abe51a3a5bee382\"",
    "mtime": "2026-11-14T14:34:46.985Z"
  },
  "/assets/recuperar-senha-B8QcQDyA-athlete-v2.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/recuperar-senha-B8QcQDyA-athlete-v2.js",
    "size": 195,
    "etag": "\"9ff440a506a65c88bedc4f299fa7aab2a0c5291fc3f6ef2c5abe51a3a5bee382\"",
    "mtime": "2026-11-14T14:34:47.008Z"
  },
  "/assets/recuperar-senha-B8QcQDyA-badge-art-v2.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/recuperar-senha-B8QcQDyA-badge-art-v2.js",
    "size": 195,
    "etag": "\"9ff440a506a65c88bedc4f299fa7aab2a0c5291fc3f6ef2c5abe51a3a5bee382\"",
    "mtime": "2026-11-14T14:34:46.966Z"
  },
  "/assets/recuperar-senha-B8QcQDyA-badges-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/recuperar-senha-B8QcQDyA-badges-v1.js",
    "size": 195,
    "etag": "\"9ff440a506a65c88bedc4f299fa7aab2a0c5291fc3f6ef2c5abe51a3a5bee382\"",
    "mtime": "2026-11-14T14:34:47.030Z"
  },
  "/assets/recuperar-senha-B8QcQDyA-game-logos-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/recuperar-senha-B8QcQDyA-game-logos-v1.js",
    "size": 195,
    "etag": "\"9ff440a506a65c88bedc4f299fa7aab2a0c5291fc3f6ef2c5abe51a3a5bee382\"",
    "mtime": "2026-11-14T14:34:47.009Z"
  },
  "/assets/recuperar-senha-B8QcQDyA-live-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/recuperar-senha-B8QcQDyA-live-v1.js",
    "size": 195,
    "etag": "\"9ff440a506a65c88bedc4f299fa7aab2a0c5291fc3f6ef2c5abe51a3a5bee382\"",
    "mtime": "2026-11-14T14:34:46.946Z"
  },
  "/assets/recuperar-senha-B8QcQDyA-loading-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/recuperar-senha-B8QcQDyA-loading-v1.js",
    "size": 195,
    "etag": "\"9ff440a506a65c88bedc4f299fa7aab2a0c5291fc3f6ef2c5abe51a3a5bee382\"",
    "mtime": "2026-11-14T14:34:47.001Z"
  },
  "/assets/recuperar-senha-B8QcQDyA-members-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/recuperar-senha-B8QcQDyA-members-v1.js",
    "size": 195,
    "etag": "\"9ff440a506a65c88bedc4f299fa7aab2a0c5291fc3f6ef2c5abe51a3a5bee382\"",
    "mtime": "2026-11-14T14:34:46.927Z"
  },
  "/assets/recuperar-senha-B8QcQDyA-profiles-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/recuperar-senha-B8QcQDyA-profiles-v1.js",
    "size": 195,
    "etag": "\"9ff440a506a65c88bedc4f299fa7aab2a0c5291fc3f6ef2c5abe51a3a5bee382\"",
    "mtime": "2026-11-14T14:34:46.996Z"
  },
  "/assets/recuperar-senha-B8QcQDyA-teams-only-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/recuperar-senha-B8QcQDyA-teams-only-v1.js",
    "size": 195,
    "etag": "\"9ff440a506a65c88bedc4f299fa7aab2a0c5291fc3f6ef2c5abe51a3a5bee382\"",
    "mtime": "2026-11-14T14:34:47.006Z"
  },
  "/assets/recuperar-senha-B8QcQDyA-tournaments-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/recuperar-senha-B8QcQDyA-tournaments-v1.js",
    "size": 195,
    "etag": "\"9ff440a506a65c88bedc4f299fa7aab2a0c5291fc3f6ef2c5abe51a3a5bee382\"",
    "mtime": "2026-11-14T14:34:46.971Z"
  },
  "/assets/recuperar-senha-B8QcQDyA.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/recuperar-senha-B8QcQDyA.js",
    "size": 195,
    "etag": "\"9ff440a506a65c88bedc4f299fa7aab2a0c5291fc3f6ef2c5abe51a3a5bee382\"",
    "mtime": "2026-11-14T14:34:47.001Z"
  },
  "/assets/redefinir-senha-CE7gxZYl-aligned-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/redefinir-senha-CE7gxZYl-aligned-v1.js",
    "size": 1516,
    "etag": "\"2c04d0ae5876e7dfc500c0e9026b2ca03e74ac9e0e8de52c159759da5b54604c\"",
    "mtime": "2026-11-14T14:34:46.931Z"
  },
  "/assets/redefinir-senha-CE7gxZYl-athlete-v2.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/redefinir-senha-CE7gxZYl-athlete-v2.js",
    "size": 1516,
    "etag": "\"2c04d0ae5876e7dfc500c0e9026b2ca03e74ac9e0e8de52c159759da5b54604c\"",
    "mtime": "2026-11-14T14:34:47.006Z"
  },
  "/assets/redefinir-senha-CE7gxZYl-badge-art-v2.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/redefinir-senha-CE7gxZYl-badge-art-v2.js",
    "size": 1516,
    "etag": "\"2c04d0ae5876e7dfc500c0e9026b2ca03e74ac9e0e8de52c159759da5b54604c\"",
    "mtime": "2026-11-14T14:34:46.958Z"
  },
  "/assets/redefinir-senha-CE7gxZYl-badges-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/redefinir-senha-CE7gxZYl-badges-v1.js",
    "size": 1516,
    "etag": "\"2c04d0ae5876e7dfc500c0e9026b2ca03e74ac9e0e8de52c159759da5b54604c\"",
    "mtime": "2026-11-14T14:34:46.967Z"
  },
  "/assets/redefinir-senha-CE7gxZYl-game-logos-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/redefinir-senha-CE7gxZYl-game-logos-v1.js",
    "size": 1516,
    "etag": "\"2c04d0ae5876e7dfc500c0e9026b2ca03e74ac9e0e8de52c159759da5b54604c\"",
    "mtime": "2026-11-14T14:34:46.981Z"
  },
  "/assets/redefinir-senha-CE7gxZYl-live-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/redefinir-senha-CE7gxZYl-live-v1.js",
    "size": 1516,
    "etag": "\"2c04d0ae5876e7dfc500c0e9026b2ca03e74ac9e0e8de52c159759da5b54604c\"",
    "mtime": "2026-11-14T14:34:46.992Z"
  },
  "/assets/redefinir-senha-CE7gxZYl-loading-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/redefinir-senha-CE7gxZYl-loading-v1.js",
    "size": 1516,
    "etag": "\"2c04d0ae5876e7dfc500c0e9026b2ca03e74ac9e0e8de52c159759da5b54604c\"",
    "mtime": "2026-11-14T14:34:46.971Z"
  },
  "/assets/redefinir-senha-CE7gxZYl-members-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/redefinir-senha-CE7gxZYl-members-v1.js",
    "size": 1516,
    "etag": "\"2c04d0ae5876e7dfc500c0e9026b2ca03e74ac9e0e8de52c159759da5b54604c\"",
    "mtime": "2026-11-14T14:34:46.973Z"
  },
  "/assets/redefinir-senha-CE7gxZYl-profiles-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/redefinir-senha-CE7gxZYl-profiles-v1.js",
    "size": 1516,
    "etag": "\"2c04d0ae5876e7dfc500c0e9026b2ca03e74ac9e0e8de52c159759da5b54604c\"",
    "mtime": "2026-11-14T14:34:46.941Z"
  },
  "/assets/redefinir-senha-CE7gxZYl-teams-only-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/redefinir-senha-CE7gxZYl-teams-only-v1.js",
    "size": 1516,
    "etag": "\"2c04d0ae5876e7dfc500c0e9026b2ca03e74ac9e0e8de52c159759da5b54604c\"",
    "mtime": "2026-11-14T14:34:46.947Z"
  },
  "/assets/redefinir-senha-CE7gxZYl-tournaments-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/redefinir-senha-CE7gxZYl-tournaments-v1.js",
    "size": 1516,
    "etag": "\"2c04d0ae5876e7dfc500c0e9026b2ca03e74ac9e0e8de52c159759da5b54604c\"",
    "mtime": "2026-11-14T14:34:46.977Z"
  },
  "/assets/redefinir-senha-CE7gxZYl.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/redefinir-senha-CE7gxZYl.js",
    "size": 1516,
    "etag": "\"2c04d0ae5876e7dfc500c0e9026b2ca03e74ac9e0e8de52c159759da5b54604c\"",
    "mtime": "2026-11-14T14:34:46.966Z"
  },
  "/assets/routes-QIu7Ndv--aligned-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/routes-QIu7Ndv--aligned-v1.js",
    "size": 16867,
    "etag": "\"95a621b3a4a159c00ae1d3703bad0fd0962ef854017baf30c10314415198c9bc\"",
    "mtime": "2026-11-14T14:34:47.022Z"
  },
  "/assets/routes-QIu7Ndv--athlete-v2.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/routes-QIu7Ndv--athlete-v2.js",
    "size": 16675,
    "etag": "\"671d1231115d1a58f532ea601bff76c9202585f499433f6612a24de352934d65\"",
    "mtime": "2026-11-14T14:34:46.934Z"
  },
  "/assets/routes-QIu7Ndv--badge-art-v2.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/routes-QIu7Ndv--badge-art-v2.js",
    "size": 16867,
    "etag": "\"95a621b3a4a159c00ae1d3703bad0fd0962ef854017baf30c10314415198c9bc\"",
    "mtime": "2026-11-14T14:34:46.968Z"
  },
  "/assets/routes-QIu7Ndv--badges-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/routes-QIu7Ndv--badges-v1.js",
    "size": 16867,
    "etag": "\"95a621b3a4a159c00ae1d3703bad0fd0962ef854017baf30c10314415198c9bc\"",
    "mtime": "2026-11-14T14:34:46.962Z"
  },
  "/assets/routes-QIu7Ndv--game-logos-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/routes-QIu7Ndv--game-logos-v1.js",
    "size": 16867,
    "etag": "\"95a621b3a4a159c00ae1d3703bad0fd0962ef854017baf30c10314415198c9bc\"",
    "mtime": "2026-11-14T14:34:47.002Z"
  },
  "/assets/routes-QIu7Ndv--live-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/routes-QIu7Ndv--live-v1.js",
    "size": 16867,
    "etag": "\"95a621b3a4a159c00ae1d3703bad0fd0962ef854017baf30c10314415198c9bc\"",
    "mtime": "2026-11-14T14:34:46.964Z"
  },
  "/assets/routes-QIu7Ndv--loading-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/routes-QIu7Ndv--loading-v1.js",
    "size": 16867,
    "etag": "\"95a621b3a4a159c00ae1d3703bad0fd0962ef854017baf30c10314415198c9bc\"",
    "mtime": "2026-11-14T14:34:47.014Z"
  },
  "/assets/routes-QIu7Ndv--members-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/routes-QIu7Ndv--members-v1.js",
    "size": 16867,
    "etag": "\"95a621b3a4a159c00ae1d3703bad0fd0962ef854017baf30c10314415198c9bc\"",
    "mtime": "2026-11-14T14:34:46.942Z"
  },
  "/assets/routes-QIu7Ndv--profiles-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/routes-QIu7Ndv--profiles-v1.js",
    "size": 16867,
    "etag": "\"95a621b3a4a159c00ae1d3703bad0fd0962ef854017baf30c10314415198c9bc\"",
    "mtime": "2026-11-14T14:34:46.993Z"
  },
  "/assets/routes-QIu7Ndv--teams-only-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/routes-QIu7Ndv--teams-only-v1.js",
    "size": 16867,
    "etag": "\"95a621b3a4a159c00ae1d3703bad0fd0962ef854017baf30c10314415198c9bc\"",
    "mtime": "2026-11-14T14:34:47.019Z"
  },
  "/assets/routes-QIu7Ndv--tournaments-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/routes-QIu7Ndv--tournaments-v1.js",
    "size": 16675,
    "etag": "\"671d1231115d1a58f532ea601bff76c9202585f499433f6612a24de352934d65\"",
    "mtime": "2026-11-14T14:34:46.971Z"
  },
  "/assets/routes-QIu7Ndv-.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/routes-QIu7Ndv-.js",
    "size": 16867,
    "etag": "\"95a621b3a4a159c00ae1d3703bad0fd0962ef854017baf30c10314415198c9bc\"",
    "mtime": "2026-11-14T14:34:46.935Z"
  },
  "/assets/settings-TgZK69c9-aligned-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/settings-TgZK69c9-aligned-v1.js",
    "size": 744,
    "etag": "\"8b4c7d0779c4529b41217be09228914b448a42f4c0a35fcb0976cc01bc6bb8be\"",
    "mtime": "2026-11-14T14:34:46.996Z"
  },
  "/assets/settings-TgZK69c9-athlete-v2.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/settings-TgZK69c9-athlete-v2.js",
    "size": 744,
    "etag": "\"8b4c7d0779c4529b41217be09228914b448a42f4c0a35fcb0976cc01bc6bb8be\"",
    "mtime": "2026-11-14T14:34:47.013Z"
  },
  "/assets/settings-TgZK69c9-badge-art-v2.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/settings-TgZK69c9-badge-art-v2.js",
    "size": 744,
    "etag": "\"8b4c7d0779c4529b41217be09228914b448a42f4c0a35fcb0976cc01bc6bb8be\"",
    "mtime": "2026-11-14T14:34:46.958Z"
  },
  "/assets/settings-TgZK69c9-badges-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/settings-TgZK69c9-badges-v1.js",
    "size": 744,
    "etag": "\"8b4c7d0779c4529b41217be09228914b448a42f4c0a35fcb0976cc01bc6bb8be\"",
    "mtime": "2026-11-14T14:34:46.995Z"
  },
  "/assets/settings-TgZK69c9-game-logos-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/settings-TgZK69c9-game-logos-v1.js",
    "size": 744,
    "etag": "\"8b4c7d0779c4529b41217be09228914b448a42f4c0a35fcb0976cc01bc6bb8be\"",
    "mtime": "2026-11-14T14:34:46.937Z"
  },
  "/assets/settings-TgZK69c9-live-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/settings-TgZK69c9-live-v1.js",
    "size": 744,
    "etag": "\"8b4c7d0779c4529b41217be09228914b448a42f4c0a35fcb0976cc01bc6bb8be\"",
    "mtime": "2026-11-14T14:34:46.987Z"
  },
  "/assets/settings-TgZK69c9-loading-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/settings-TgZK69c9-loading-v1.js",
    "size": 744,
    "etag": "\"8b4c7d0779c4529b41217be09228914b448a42f4c0a35fcb0976cc01bc6bb8be\"",
    "mtime": "2026-11-14T14:34:46.981Z"
  },
  "/assets/settings-TgZK69c9-members-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/settings-TgZK69c9-members-v1.js",
    "size": 744,
    "etag": "\"8b4c7d0779c4529b41217be09228914b448a42f4c0a35fcb0976cc01bc6bb8be\"",
    "mtime": "2026-11-14T14:34:47.022Z"
  },
  "/assets/settings-TgZK69c9-profiles-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/settings-TgZK69c9-profiles-v1.js",
    "size": 744,
    "etag": "\"8b4c7d0779c4529b41217be09228914b448a42f4c0a35fcb0976cc01bc6bb8be\"",
    "mtime": "2026-11-14T14:34:46.957Z"
  },
  "/assets/settings-TgZK69c9-teams-only-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/settings-TgZK69c9-teams-only-v1.js",
    "size": 744,
    "etag": "\"8b4c7d0779c4529b41217be09228914b448a42f4c0a35fcb0976cc01bc6bb8be\"",
    "mtime": "2026-11-14T14:34:47.016Z"
  },
  "/assets/settings-TgZK69c9-tournaments-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/settings-TgZK69c9-tournaments-v1.js",
    "size": 744,
    "etag": "\"8b4c7d0779c4529b41217be09228914b448a42f4c0a35fcb0976cc01bc6bb8be\"",
    "mtime": "2026-11-14T14:34:46.957Z"
  },
  "/assets/settings-TgZK69c9.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/settings-TgZK69c9.js",
    "size": 744,
    "etag": "\"8b4c7d0779c4529b41217be09228914b448a42f4c0a35fcb0976cc01bc6bb8be\"",
    "mtime": "2026-11-14T14:34:46.930Z"
  },
  "/assets/shield-dFMOxkxe-aligned-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/shield-dFMOxkxe-aligned-v1.js",
    "size": 273,
    "etag": "\"154355972cba5015b96e94a64660d6d4e4f0516f600712cc9270b8a8d28c18cf\"",
    "mtime": "2026-11-14T14:34:47.005Z"
  },
  "/assets/shield-dFMOxkxe-athlete-v2.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/shield-dFMOxkxe-athlete-v2.js",
    "size": 273,
    "etag": "\"154355972cba5015b96e94a64660d6d4e4f0516f600712cc9270b8a8d28c18cf\"",
    "mtime": "2026-11-14T14:34:46.990Z"
  },
  "/assets/shield-dFMOxkxe-badge-art-v2.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/shield-dFMOxkxe-badge-art-v2.js",
    "size": 273,
    "etag": "\"154355972cba5015b96e94a64660d6d4e4f0516f600712cc9270b8a8d28c18cf\"",
    "mtime": "2026-11-14T14:34:47.026Z"
  },
  "/assets/shield-dFMOxkxe-badges-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/shield-dFMOxkxe-badges-v1.js",
    "size": 273,
    "etag": "\"154355972cba5015b96e94a64660d6d4e4f0516f600712cc9270b8a8d28c18cf\"",
    "mtime": "2026-11-14T14:34:46.946Z"
  },
  "/assets/shield-dFMOxkxe-game-logos-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/shield-dFMOxkxe-game-logos-v1.js",
    "size": 273,
    "etag": "\"154355972cba5015b96e94a64660d6d4e4f0516f600712cc9270b8a8d28c18cf\"",
    "mtime": "2026-11-14T14:34:46.934Z"
  },
  "/assets/shield-dFMOxkxe-live-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/shield-dFMOxkxe-live-v1.js",
    "size": 273,
    "etag": "\"154355972cba5015b96e94a64660d6d4e4f0516f600712cc9270b8a8d28c18cf\"",
    "mtime": "2026-11-14T14:34:46.962Z"
  },
  "/assets/shield-dFMOxkxe-loading-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/shield-dFMOxkxe-loading-v1.js",
    "size": 273,
    "etag": "\"154355972cba5015b96e94a64660d6d4e4f0516f600712cc9270b8a8d28c18cf\"",
    "mtime": "2026-11-14T14:34:47.018Z"
  },
  "/assets/shield-dFMOxkxe-members-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/shield-dFMOxkxe-members-v1.js",
    "size": 273,
    "etag": "\"154355972cba5015b96e94a64660d6d4e4f0516f600712cc9270b8a8d28c18cf\"",
    "mtime": "2026-11-14T14:34:46.932Z"
  },
  "/assets/shield-dFMOxkxe-profiles-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/shield-dFMOxkxe-profiles-v1.js",
    "size": 273,
    "etag": "\"154355972cba5015b96e94a64660d6d4e4f0516f600712cc9270b8a8d28c18cf\"",
    "mtime": "2026-11-14T14:34:46.943Z"
  },
  "/assets/shield-dFMOxkxe-teams-only-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/shield-dFMOxkxe-teams-only-v1.js",
    "size": 273,
    "etag": "\"154355972cba5015b96e94a64660d6d4e4f0516f600712cc9270b8a8d28c18cf\"",
    "mtime": "2026-11-14T14:34:47.003Z"
  },
  "/assets/shield-dFMOxkxe-tournaments-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/shield-dFMOxkxe-tournaments-v1.js",
    "size": 273,
    "etag": "\"154355972cba5015b96e94a64660d6d4e4f0516f600712cc9270b8a8d28c18cf\"",
    "mtime": "2026-11-14T14:34:47.003Z"
  },
  "/assets/shield-dFMOxkxe.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/shield-dFMOxkxe.js",
    "size": 273,
    "etag": "\"154355972cba5015b96e94a64660d6d4e4f0516f600712cc9270b8a8d28c18cf\"",
    "mtime": "2026-11-14T14:34:46.968Z"
  },
  "/assets/sobre-DEcggilL-aligned-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/sobre-DEcggilL-aligned-v1.js",
    "size": 15569,
    "etag": "\"456ddff3755567e596db2f9b3f8cd4129e1a1c91e1a4195024a7d3333d964ecb\"",
    "mtime": "2026-11-14T14:34:46.969Z"
  },
  "/assets/sobre-DEcggilL-athlete-v2.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/sobre-DEcggilL-athlete-v2.js",
    "size": 15569,
    "etag": "\"456ddff3755567e596db2f9b3f8cd4129e1a1c91e1a4195024a7d3333d964ecb\"",
    "mtime": "2026-11-14T14:34:46.952Z"
  },
  "/assets/sobre-DEcggilL-badge-art-v2.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/sobre-DEcggilL-badge-art-v2.js",
    "size": 15569,
    "etag": "\"456ddff3755567e596db2f9b3f8cd4129e1a1c91e1a4195024a7d3333d964ecb\"",
    "mtime": "2026-11-14T14:34:46.963Z"
  },
  "/assets/sobre-DEcggilL-badges-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/sobre-DEcggilL-badges-v1.js",
    "size": 15569,
    "etag": "\"456ddff3755567e596db2f9b3f8cd4129e1a1c91e1a4195024a7d3333d964ecb\"",
    "mtime": "2026-11-14T14:34:46.936Z"
  },
  "/assets/sobre-DEcggilL-game-logos-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/sobre-DEcggilL-game-logos-v1.js",
    "size": 15569,
    "etag": "\"456ddff3755567e596db2f9b3f8cd4129e1a1c91e1a4195024a7d3333d964ecb\"",
    "mtime": "2026-11-14T14:34:47.023Z"
  },
  "/assets/sobre-DEcggilL-live-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/sobre-DEcggilL-live-v1.js",
    "size": 15569,
    "etag": "\"456ddff3755567e596db2f9b3f8cd4129e1a1c91e1a4195024a7d3333d964ecb\"",
    "mtime": "2026-11-14T14:34:46.973Z"
  },
  "/assets/sobre-DEcggilL-loading-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/sobre-DEcggilL-loading-v1.js",
    "size": 15569,
    "etag": "\"456ddff3755567e596db2f9b3f8cd4129e1a1c91e1a4195024a7d3333d964ecb\"",
    "mtime": "2026-11-14T14:34:46.964Z"
  },
  "/assets/sobre-DEcggilL-members-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/sobre-DEcggilL-members-v1.js",
    "size": 15569,
    "etag": "\"456ddff3755567e596db2f9b3f8cd4129e1a1c91e1a4195024a7d3333d964ecb\"",
    "mtime": "2026-11-14T14:34:46.960Z"
  },
  "/assets/sobre-DEcggilL-profiles-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/sobre-DEcggilL-profiles-v1.js",
    "size": 15569,
    "etag": "\"456ddff3755567e596db2f9b3f8cd4129e1a1c91e1a4195024a7d3333d964ecb\"",
    "mtime": "2026-11-14T14:34:46.984Z"
  },
  "/assets/sobre-DEcggilL-teams-only-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/sobre-DEcggilL-teams-only-v1.js",
    "size": 15569,
    "etag": "\"456ddff3755567e596db2f9b3f8cd4129e1a1c91e1a4195024a7d3333d964ecb\"",
    "mtime": "2026-11-14T14:34:46.945Z"
  },
  "/assets/sobre-DEcggilL-tournaments-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/sobre-DEcggilL-tournaments-v1.js",
    "size": 15569,
    "etag": "\"456ddff3755567e596db2f9b3f8cd4129e1a1c91e1a4195024a7d3333d964ecb\"",
    "mtime": "2026-11-14T14:34:46.936Z"
  },
  "/assets/sobre-DEcggilL.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/sobre-DEcggilL.js",
    "size": 15569,
    "etag": "\"456ddff3755567e596db2f9b3f8cd4129e1a1c91e1a4195024a7d3333d964ecb\"",
    "mtime": "2026-11-14T14:34:46.995Z"
  },
  "/assets/styles-BZXhjqTt.css": {
    "type": "text/css; charset=utf-8",
    "path": "../public/assets/styles-BZXhjqTt.css",
    "size": 113011,
    "etag": "\"6c229a5a21ff48021e849ea76332d785c44e751fdcccc5f38a5eb4e911ddef57\"",
    "mtime": "2026-11-14T14:34:46.936Z"
  },
  "/assets/termos-DKCOnies-aligned-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/termos-DKCOnies-aligned-v1.js",
    "size": 4537,
    "etag": "\"55fa0ce7e8ce75729bbcab3cbbc6ba653631dfd8365ca22467fd01d05c4f76b3\"",
    "mtime": "2026-11-14T14:34:46.977Z"
  },
  "/assets/termos-DKCOnies-athlete-v2.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/termos-DKCOnies-athlete-v2.js",
    "size": 4537,
    "etag": "\"55fa0ce7e8ce75729bbcab3cbbc6ba653631dfd8365ca22467fd01d05c4f76b3\"",
    "mtime": "2026-11-14T14:34:46.983Z"
  },
  "/assets/termos-DKCOnies-badge-art-v2.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/termos-DKCOnies-badge-art-v2.js",
    "size": 4537,
    "etag": "\"55fa0ce7e8ce75729bbcab3cbbc6ba653631dfd8365ca22467fd01d05c4f76b3\"",
    "mtime": "2026-11-14T14:34:46.965Z"
  },
  "/assets/termos-DKCOnies-badges-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/termos-DKCOnies-badges-v1.js",
    "size": 4537,
    "etag": "\"55fa0ce7e8ce75729bbcab3cbbc6ba653631dfd8365ca22467fd01d05c4f76b3\"",
    "mtime": "2026-11-14T14:34:46.941Z"
  },
  "/assets/termos-DKCOnies-game-logos-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/termos-DKCOnies-game-logos-v1.js",
    "size": 4537,
    "etag": "\"55fa0ce7e8ce75729bbcab3cbbc6ba653631dfd8365ca22467fd01d05c4f76b3\"",
    "mtime": "2026-11-14T14:34:46.948Z"
  },
  "/assets/termos-DKCOnies-live-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/termos-DKCOnies-live-v1.js",
    "size": 4537,
    "etag": "\"55fa0ce7e8ce75729bbcab3cbbc6ba653631dfd8365ca22467fd01d05c4f76b3\"",
    "mtime": "2026-11-14T14:34:46.932Z"
  },
  "/assets/termos-DKCOnies-loading-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/termos-DKCOnies-loading-v1.js",
    "size": 4537,
    "etag": "\"55fa0ce7e8ce75729bbcab3cbbc6ba653631dfd8365ca22467fd01d05c4f76b3\"",
    "mtime": "2026-11-14T14:34:46.935Z"
  },
  "/assets/termos-DKCOnies-members-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/termos-DKCOnies-members-v1.js",
    "size": 4537,
    "etag": "\"55fa0ce7e8ce75729bbcab3cbbc6ba653631dfd8365ca22467fd01d05c4f76b3\"",
    "mtime": "2026-11-14T14:34:46.947Z"
  },
  "/assets/termos-DKCOnies-profiles-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/termos-DKCOnies-profiles-v1.js",
    "size": 4537,
    "etag": "\"55fa0ce7e8ce75729bbcab3cbbc6ba653631dfd8365ca22467fd01d05c4f76b3\"",
    "mtime": "2026-11-14T14:34:47.002Z"
  },
  "/assets/termos-DKCOnies-teams-only-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/termos-DKCOnies-teams-only-v1.js",
    "size": 4537,
    "etag": "\"55fa0ce7e8ce75729bbcab3cbbc6ba653631dfd8365ca22467fd01d05c4f76b3\"",
    "mtime": "2026-11-14T14:34:46.942Z"
  },
  "/assets/termos-DKCOnies-tournaments-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/termos-DKCOnies-tournaments-v1.js",
    "size": 4537,
    "etag": "\"55fa0ce7e8ce75729bbcab3cbbc6ba653631dfd8365ca22467fd01d05c4f76b3\"",
    "mtime": "2026-11-14T14:34:47.006Z"
  },
  "/assets/termos-DKCOnies.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/termos-DKCOnies.js",
    "size": 4537,
    "etag": "\"55fa0ce7e8ce75729bbcab3cbbc6ba653631dfd8365ca22467fd01d05c4f76b3\"",
    "mtime": "2026-11-14T14:34:47.031Z"
  },
  "/assets/trophy-BzvpldXY-aligned-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/trophy-BzvpldXY-aligned-v1.js",
    "size": 477,
    "etag": "\"6b9d0ffeb26ecf42c0cfad164e9050a3c8e384ed37a5ad0a383c27d20afa343c\"",
    "mtime": "2026-11-14T14:34:47.007Z"
  },
  "/assets/trophy-BzvpldXY-athlete-v2.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/trophy-BzvpldXY-athlete-v2.js",
    "size": 477,
    "etag": "\"6b9d0ffeb26ecf42c0cfad164e9050a3c8e384ed37a5ad0a383c27d20afa343c\"",
    "mtime": "2026-11-14T14:34:46.933Z"
  },
  "/assets/trophy-BzvpldXY-badge-art-v2.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/trophy-BzvpldXY-badge-art-v2.js",
    "size": 477,
    "etag": "\"6b9d0ffeb26ecf42c0cfad164e9050a3c8e384ed37a5ad0a383c27d20afa343c\"",
    "mtime": "2026-11-14T14:34:47.012Z"
  },
  "/assets/trophy-BzvpldXY-badges-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/trophy-BzvpldXY-badges-v1.js",
    "size": 477,
    "etag": "\"6b9d0ffeb26ecf42c0cfad164e9050a3c8e384ed37a5ad0a383c27d20afa343c\"",
    "mtime": "2026-11-14T14:34:47.016Z"
  },
  "/assets/trophy-BzvpldXY-game-logos-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/trophy-BzvpldXY-game-logos-v1.js",
    "size": 477,
    "etag": "\"6b9d0ffeb26ecf42c0cfad164e9050a3c8e384ed37a5ad0a383c27d20afa343c\"",
    "mtime": "2026-11-14T14:34:46.976Z"
  },
  "/assets/trophy-BzvpldXY-live-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/trophy-BzvpldXY-live-v1.js",
    "size": 477,
    "etag": "\"6b9d0ffeb26ecf42c0cfad164e9050a3c8e384ed37a5ad0a383c27d20afa343c\"",
    "mtime": "2026-11-14T14:34:46.947Z"
  },
  "/assets/trophy-BzvpldXY-loading-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/trophy-BzvpldXY-loading-v1.js",
    "size": 477,
    "etag": "\"6b9d0ffeb26ecf42c0cfad164e9050a3c8e384ed37a5ad0a383c27d20afa343c\"",
    "mtime": "2026-11-14T14:34:46.964Z"
  },
  "/assets/trophy-BzvpldXY-members-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/trophy-BzvpldXY-members-v1.js",
    "size": 477,
    "etag": "\"6b9d0ffeb26ecf42c0cfad164e9050a3c8e384ed37a5ad0a383c27d20afa343c\"",
    "mtime": "2026-11-14T14:34:46.974Z"
  },
  "/assets/trophy-BzvpldXY-profiles-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/trophy-BzvpldXY-profiles-v1.js",
    "size": 477,
    "etag": "\"6b9d0ffeb26ecf42c0cfad164e9050a3c8e384ed37a5ad0a383c27d20afa343c\"",
    "mtime": "2026-11-14T14:34:46.979Z"
  },
  "/assets/trophy-BzvpldXY-teams-only-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/trophy-BzvpldXY-teams-only-v1.js",
    "size": 477,
    "etag": "\"6b9d0ffeb26ecf42c0cfad164e9050a3c8e384ed37a5ad0a383c27d20afa343c\"",
    "mtime": "2026-11-14T14:34:46.985Z"
  },
  "/assets/trophy-BzvpldXY-tournaments-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/trophy-BzvpldXY-tournaments-v1.js",
    "size": 477,
    "etag": "\"6b9d0ffeb26ecf42c0cfad164e9050a3c8e384ed37a5ad0a383c27d20afa343c\"",
    "mtime": "2026-11-14T14:34:47.019Z"
  },
  "/assets/trophy-BzvpldXY.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/trophy-BzvpldXY.js",
    "size": 477,
    "etag": "\"6b9d0ffeb26ecf42c0cfad164e9050a3c8e384ed37a5ad0a383c27d20afa343c\"",
    "mtime": "2026-11-14T14:34:46.967Z"
  },
  "/assets/types-laes-secure-20261111-aligned-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/types-laes-secure-20261111-aligned-v1.js",
    "size": 84011,
    "etag": "\"d7ce6bec941de8a864f6637d8dc589b4d39161a66dcd95d6ce617dbaa10d463d\"",
    "mtime": "2026-11-14T14:34:46.975Z"
  },
  "/assets/types-laes-secure-20261111-athlete-v2.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/types-laes-secure-20261111-athlete-v2.js",
    "size": 84011,
    "etag": "\"d7ce6bec941de8a864f6637d8dc589b4d39161a66dcd95d6ce617dbaa10d463d\"",
    "mtime": "2026-11-14T14:34:46.941Z"
  },
  "/assets/types-laes-secure-20261111-badge-art-v2.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/types-laes-secure-20261111-badge-art-v2.js",
    "size": 84011,
    "etag": "\"d7ce6bec941de8a864f6637d8dc589b4d39161a66dcd95d6ce617dbaa10d463d\"",
    "mtime": "2026-11-14T14:34:46.987Z"
  },
  "/assets/types-laes-secure-20261111-badges-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/types-laes-secure-20261111-badges-v1.js",
    "size": 84011,
    "etag": "\"d7ce6bec941de8a864f6637d8dc589b4d39161a66dcd95d6ce617dbaa10d463d\"",
    "mtime": "2026-11-14T14:34:46.983Z"
  },
  "/assets/types-laes-secure-20261111-game-logos-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/types-laes-secure-20261111-game-logos-v1.js",
    "size": 84011,
    "etag": "\"d7ce6bec941de8a864f6637d8dc589b4d39161a66dcd95d6ce617dbaa10d463d\"",
    "mtime": "2026-11-14T14:34:46.995Z"
  },
  "/assets/types-laes-secure-20261111-live-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/types-laes-secure-20261111-live-v1.js",
    "size": 84011,
    "etag": "\"d7ce6bec941de8a864f6637d8dc589b4d39161a66dcd95d6ce617dbaa10d463d\"",
    "mtime": "2026-11-14T14:34:46.949Z"
  },
  "/assets/types-laes-secure-20261111-loading-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/types-laes-secure-20261111-loading-v1.js",
    "size": 84011,
    "etag": "\"d7ce6bec941de8a864f6637d8dc589b4d39161a66dcd95d6ce617dbaa10d463d\"",
    "mtime": "2026-11-14T14:34:46.979Z"
  },
  "/assets/types-laes-secure-20261111-members-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/types-laes-secure-20261111-members-v1.js",
    "size": 84011,
    "etag": "\"d7ce6bec941de8a864f6637d8dc589b4d39161a66dcd95d6ce617dbaa10d463d\"",
    "mtime": "2026-11-14T14:34:46.992Z"
  },
  "/assets/types-laes-secure-20261111-profiles-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/types-laes-secure-20261111-profiles-v1.js",
    "size": 84011,
    "etag": "\"d7ce6bec941de8a864f6637d8dc589b4d39161a66dcd95d6ce617dbaa10d463d\"",
    "mtime": "2026-11-14T14:34:46.949Z"
  },
  "/assets/types-laes-secure-20261111-teams-only-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/types-laes-secure-20261111-teams-only-v1.js",
    "size": 84011,
    "etag": "\"d7ce6bec941de8a864f6637d8dc589b4d39161a66dcd95d6ce617dbaa10d463d\"",
    "mtime": "2026-11-14T14:34:47.010Z"
  },
  "/assets/types-laes-secure-20261111-tournaments-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/types-laes-secure-20261111-tournaments-v1.js",
    "size": 84011,
    "etag": "\"d7ce6bec941de8a864f6637d8dc589b4d39161a66dcd95d6ce617dbaa10d463d\"",
    "mtime": "2026-11-14T14:34:46.975Z"
  },
  "/assets/types-laes-secure-20261111.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/types-laes-secure-20261111.js",
    "size": 84011,
    "etag": "\"d7ce6bec941de8a864f6637d8dc589b4d39161a66dcd95d6ce617dbaa10d463d\"",
    "mtime": "2026-11-14T14:34:46.996Z"
  },
  "/assets/upload-Cv5_1WkR-aligned-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/upload-Cv5_1WkR-aligned-v1.js",
    "size": 630,
    "etag": "\"c946cd57ed28c6d56fcf421d6ba1afc224fd0f6c96589c1ca8c4d451cc9222bb\"",
    "mtime": "2026-11-14T14:34:47.012Z"
  },
  "/assets/upload-Cv5_1WkR-athlete-v2.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/upload-Cv5_1WkR-athlete-v2.js",
    "size": 630,
    "etag": "\"c946cd57ed28c6d56fcf421d6ba1afc224fd0f6c96589c1ca8c4d451cc9222bb\"",
    "mtime": "2026-11-14T14:34:46.966Z"
  },
  "/assets/upload-Cv5_1WkR-badge-art-v2.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/upload-Cv5_1WkR-badge-art-v2.js",
    "size": 630,
    "etag": "\"c946cd57ed28c6d56fcf421d6ba1afc224fd0f6c96589c1ca8c4d451cc9222bb\"",
    "mtime": "2026-11-14T14:34:46.936Z"
  },
  "/assets/upload-Cv5_1WkR-badges-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/upload-Cv5_1WkR-badges-v1.js",
    "size": 630,
    "etag": "\"c946cd57ed28c6d56fcf421d6ba1afc224fd0f6c96589c1ca8c4d451cc9222bb\"",
    "mtime": "2026-11-14T14:34:46.960Z"
  },
  "/assets/upload-Cv5_1WkR-game-logos-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/upload-Cv5_1WkR-game-logos-v1.js",
    "size": 630,
    "etag": "\"c946cd57ed28c6d56fcf421d6ba1afc224fd0f6c96589c1ca8c4d451cc9222bb\"",
    "mtime": "2026-11-14T14:34:46.997Z"
  },
  "/assets/upload-Cv5_1WkR-live-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/upload-Cv5_1WkR-live-v1.js",
    "size": 630,
    "etag": "\"c946cd57ed28c6d56fcf421d6ba1afc224fd0f6c96589c1ca8c4d451cc9222bb\"",
    "mtime": "2026-11-14T14:34:47.006Z"
  },
  "/assets/upload-Cv5_1WkR-loading-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/upload-Cv5_1WkR-loading-v1.js",
    "size": 630,
    "etag": "\"c946cd57ed28c6d56fcf421d6ba1afc224fd0f6c96589c1ca8c4d451cc9222bb\"",
    "mtime": "2026-11-14T14:34:47.009Z"
  },
  "/assets/upload-Cv5_1WkR-members-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/upload-Cv5_1WkR-members-v1.js",
    "size": 630,
    "etag": "\"c946cd57ed28c6d56fcf421d6ba1afc224fd0f6c96589c1ca8c4d451cc9222bb\"",
    "mtime": "2026-11-14T14:34:46.974Z"
  },
  "/assets/upload-Cv5_1WkR-profiles-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/upload-Cv5_1WkR-profiles-v1.js",
    "size": 630,
    "etag": "\"c946cd57ed28c6d56fcf421d6ba1afc224fd0f6c96589c1ca8c4d451cc9222bb\"",
    "mtime": "2026-11-14T14:34:46.985Z"
  },
  "/assets/upload-Cv5_1WkR-teams-only-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/upload-Cv5_1WkR-teams-only-v1.js",
    "size": 630,
    "etag": "\"c946cd57ed28c6d56fcf421d6ba1afc224fd0f6c96589c1ca8c4d451cc9222bb\"",
    "mtime": "2026-11-14T14:34:46.982Z"
  },
  "/assets/upload-Cv5_1WkR-tournaments-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/upload-Cv5_1WkR-tournaments-v1.js",
    "size": 630,
    "etag": "\"c946cd57ed28c6d56fcf421d6ba1afc224fd0f6c96589c1ca8c4d451cc9222bb\"",
    "mtime": "2026-11-14T14:34:46.947Z"
  },
  "/assets/upload-Cv5_1WkR.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/upload-Cv5_1WkR.js",
    "size": 630,
    "etag": "\"c946cd57ed28c6d56fcf421d6ba1afc224fd0f6c96589c1ca8c4d451cc9222bb\"",
    "mtime": "2026-11-14T14:34:46.997Z"
  },
  "/assets/vagas-laes-20261111-aligned-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/vagas-laes-20261111-aligned-v1.js",
    "size": 96,
    "etag": "\"7bf794a32850a0bc4299d8252466460d7a7760f5f925cc2c848e29104ce10a57\"",
    "mtime": "2026-11-14T14:34:47.015Z"
  },
  "/assets/vagas-laes-20261111-athlete-v2.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/vagas-laes-20261111-athlete-v2.js",
    "size": 96,
    "etag": "\"7bf794a32850a0bc4299d8252466460d7a7760f5f925cc2c848e29104ce10a57\"",
    "mtime": "2026-11-14T14:34:47.021Z"
  },
  "/assets/vagas-laes-20261111-badge-art-v2.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/vagas-laes-20261111-badge-art-v2.js",
    "size": 96,
    "etag": "\"7bf794a32850a0bc4299d8252466460d7a7760f5f925cc2c848e29104ce10a57\"",
    "mtime": "2026-11-14T14:34:46.979Z"
  },
  "/assets/vagas-laes-20261111-badges-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/vagas-laes-20261111-badges-v1.js",
    "size": 96,
    "etag": "\"7bf794a32850a0bc4299d8252466460d7a7760f5f925cc2c848e29104ce10a57\"",
    "mtime": "2026-11-14T14:34:46.943Z"
  },
  "/assets/vagas-laes-20261111-game-logos-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/vagas-laes-20261111-game-logos-v1.js",
    "size": 96,
    "etag": "\"7bf794a32850a0bc4299d8252466460d7a7760f5f925cc2c848e29104ce10a57\"",
    "mtime": "2026-11-14T14:34:46.937Z"
  },
  "/assets/vagas-laes-20261111-live-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/vagas-laes-20261111-live-v1.js",
    "size": 96,
    "etag": "\"7bf794a32850a0bc4299d8252466460d7a7760f5f925cc2c848e29104ce10a57\"",
    "mtime": "2026-11-14T14:34:47.011Z"
  },
  "/assets/vagas-laes-20261111-loading-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/vagas-laes-20261111-loading-v1.js",
    "size": 96,
    "etag": "\"7bf794a32850a0bc4299d8252466460d7a7760f5f925cc2c848e29104ce10a57\"",
    "mtime": "2026-11-14T14:34:46.932Z"
  },
  "/assets/vagas-laes-20261111-members-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/vagas-laes-20261111-members-v1.js",
    "size": 96,
    "etag": "\"7bf794a32850a0bc4299d8252466460d7a7760f5f925cc2c848e29104ce10a57\"",
    "mtime": "2026-11-14T14:34:47.000Z"
  },
  "/assets/vagas-laes-20261111-profiles-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/vagas-laes-20261111-profiles-v1.js",
    "size": 96,
    "etag": "\"7bf794a32850a0bc4299d8252466460d7a7760f5f925cc2c848e29104ce10a57\"",
    "mtime": "2026-11-14T14:34:46.952Z"
  },
  "/assets/vagas-laes-20261111-teams-only-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/vagas-laes-20261111-teams-only-v1.js",
    "size": 96,
    "etag": "\"7bf794a32850a0bc4299d8252466460d7a7760f5f925cc2c848e29104ce10a57\"",
    "mtime": "2026-11-14T14:34:46.977Z"
  },
  "/assets/vagas-laes-20261111-tournaments-v1.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/vagas-laes-20261111-tournaments-v1.js",
    "size": 96,
    "etag": "\"7bf794a32850a0bc4299d8252466460d7a7760f5f925cc2c848e29104ce10a57\"",
    "mtime": "2026-11-14T14:34:46.960Z"
  },
  "/assets/vagas-laes-20261111.js": {
    "type": "text/javascript; charset=utf-8",
    "path": "../public/assets/vagas-laes-20261111.js",
    "size": 96,
    "etag": "\"7bf794a32850a0bc4299d8252466460d7a7760f5f925cc2c848e29104ce10a57\"",
    "mtime": "2026-11-14T14:34:46.958Z"
  },
  "/favicon.png": {
    "type": "image/png",
    "path": "../public/favicon.png",
    "size": 3781,
    "etag": "\"e4c6be20fc3207e49e0aa5a01fca5dea80a67d646756f279d3ccc561f67fad95\"",
    "mtime": "2026-11-14T14:34:47.032Z"
  },
  "/favicon.png.b64": {
    "type": "text/plain; charset=utf-8",
    "path": "../public/favicon.png.b64",
    "size": 0,
    "etag": "\"e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855\"",
    "mtime": "2026-11-14T14:34:47.066Z"
  },
  "/images/about/alfenas-panorama.jpg": {
    "type": "image/jpeg",
    "path": "../public/images/about/alfenas-panorama.jpg",
    "size": 1377314,
    "etag": "\"d78cfc4b12cc73a72f8f1502ac3cf152acad0959711e4b25b1daa51c0a264b17\"",
    "mtime": "2026-11-14T14:34:47.047Z"
  },
  "/images/about/alfenas.jpg": {
    "type": "image/jpeg",
    "path": "../public/images/about/alfenas.jpg",
    "size": 1524775,
    "etag": "\"bab3cf0a9f4c9c303a66855b1512bf63b2efc710ef8d5a3d3241fca2cf5d4713\"",
    "mtime": "2026-11-14T14:34:47.049Z"
  },
  "/images/about/bandeira-alfenas.png": {
    "type": "image/png",
    "path": "../public/images/about/bandeira-alfenas.png",
    "size": 173469,
    "etag": "\"ac1e40779442eccdc814d8089e080f590c886fced5dca3552d4b63492388c4d6\"",
    "mtime": "2026-11-14T14:34:47.044Z"
  },
  "/images/about/bandeira-minas.png": {
    "type": "image/png",
    "path": "../public/images/about/bandeira-minas.png",
    "size": 28221,
    "etag": "\"cd4d42525245521a70da9898fef2d8697f81c1b6bb220d7d6f03ac89821d0caf\"",
    "mtime": "2026-11-14T14:34:47.044Z"
  },
  "/images/about/leao-alfenense.png": {
    "type": "image/png",
    "path": "../public/images/about/leao-alfenense.png",
    "size": 15087,
    "etag": "\"b4066968fae356355c2883504bf805b1ade650605a90293e9df34f222db2e054\"",
    "mtime": "2026-11-14T14:34:47.047Z"
  },
  "/images/google-g.png": {
    "type": "image/png",
    "path": "../public/images/google-g.png",
    "size": 37916,
    "etag": "\"feaffae682216122977482ededab42f540bab5c1d299da832f44c59c36404503\"",
    "mtime": "2026-11-14T14:34:47.032Z"
  },
  "/images/home/leao-laes-hero.png": {
    "type": "image/png",
    "path": "../public/images/home/leao-laes-hero.png",
    "size": 1522396,
    "etag": "\"2441199f007c6050aebc15a2309c8f5b845839f666ecca388b4e6b8cb19e8826\"",
    "mtime": "2026-11-14T14:34:47.051Z"
  },
  "/images/laes/logo-principal.png": {
    "type": "image/png",
    "path": "../public/images/laes/logo-principal.png",
    "size": 552168,
    "etag": "\"c40ac9f61e4a5c4e8860d7a3fa65887524f82bef64172f7dd6b793fba7faf167\"",
    "mtime": "2026-11-14T14:34:47.052Z"
  },
  "/images/modalities/brawl-stars.webp": {
    "type": "image/webp",
    "path": "../public/images/modalities/brawl-stars.webp",
    "size": 31642,
    "etag": "\"230b069f58febb14579c638fe7b2ce359fa77e90197a2613892c9b470738ecb0\"",
    "mtime": "2026-11-14T14:34:47.033Z"
  },
  "/images/modalities/clash-royale.webp": {
    "type": "image/webp",
    "path": "../public/images/modalities/clash-royale.webp",
    "size": 67868,
    "etag": "\"f08338a99b1fb4ac73c22d4a214eaf0cf3b418562e63446857c4fe3723d31c64\"",
    "mtime": "2026-11-14T14:34:47.034Z"
  },
  "/images/modalities/counter-strike-2.svg": {
    "type": "image/svg+xml",
    "path": "../public/images/modalities/counter-strike-2.svg",
    "size": 5557,
    "etag": "\"0b251d13a7ec3eee0cc8673798ff1b39b84109e4c1f9879f43eee02e1aee7e94\"",
    "mtime": "2026-11-14T14:34:47.033Z"
  },
  "/images/modalities/dota-2.png": {
    "type": "image/png",
    "path": "../public/images/modalities/dota-2.png",
    "size": 4918,
    "etag": "\"9d2be8058482e28267c1579941d44f397d3148a91e6bd699e845a5a4b82fde7d\"",
    "mtime": "2026-11-14T14:34:47.034Z"
  },
  "/images/modalities/ea-sports-fc.svg": {
    "type": "image/svg+xml",
    "path": "../public/images/modalities/ea-sports-fc.svg",
    "size": 6017,
    "etag": "\"08c6502cf2a419c111e4b174523edb6191ed53cb4499cf04266f5f5f82a4d170\"",
    "mtime": "2026-11-14T14:34:47.034Z"
  },
  "/images/modalities/fortnite.png": {
    "type": "image/png",
    "path": "../public/images/modalities/fortnite.png",
    "size": 27105,
    "etag": "\"c5fa875f76b2aa67f428663615cc142973a5f8eef4673053201a5342f928871e\"",
    "mtime": "2026-11-14T14:34:47.034Z"
  },
  "/images/modalities/fortnite.svg": {
    "type": "image/svg+xml",
    "path": "../public/images/modalities/fortnite.svg",
    "size": 2743,
    "etag": "\"116fec92ff396f27d47be03ab39f27e66727e325dea31b018983ea142de7b8f2\"",
    "mtime": "2026-11-14T14:34:47.035Z"
  },
  "/images/modalities/free-fire.webp": {
    "type": "image/webp",
    "path": "../public/images/modalities/free-fire.webp",
    "size": 4206,
    "etag": "\"06e4184e1338ad282568219532b6bab8dff354690707e454b68ad1a3ff459df7\"",
    "mtime": "2026-11-14T14:34:47.033Z"
  },
  "/images/modalities/just-dance.png": {
    "type": "image/png",
    "path": "../public/images/modalities/just-dance.png",
    "size": 6367,
    "etag": "\"f96b2347d2b2e4bf45204e2e2033c6425b123922dec0e23e5499a5ea948d92fb\"",
    "mtime": "2026-11-14T14:34:47.034Z"
  },
  "/images/modalities/league-of-legends.webp": {
    "type": "image/webp",
    "path": "../public/images/modalities/league-of-legends.webp",
    "size": 195110,
    "etag": "\"d987d1ee1c00cdf07ec8718b279fcffdbe3145d2135fda7d1c5d73cdb344019a\"",
    "mtime": "2026-11-14T14:34:47.033Z"
  },
  "/images/modalities/mobile-legends.png": {
    "type": "image/png",
    "path": "../public/images/modalities/mobile-legends.png",
    "size": 34368,
    "etag": "\"152350f67c2c36675430bf0763fd35c06d61764b0483e9e6c25b31ef92d4599d\"",
    "mtime": "2026-11-14T14:34:47.034Z"
  },
  "/images/modalities/overwatch-2.png": {
    "type": "image/png",
    "path": "../public/images/modalities/overwatch-2.png",
    "size": 21488,
    "etag": "\"c5dc407f40267066d7068a8e4d63f0cbec6a477501b10f5d2d6c93d6d14b2c76\"",
    "mtime": "2026-11-14T14:34:47.034Z"
  },
  "/images/modalities/rainbow-six-siege.png": {
    "type": "image/png",
    "path": "../public/images/modalities/rainbow-six-siege.png",
    "size": 10763,
    "etag": "\"a3f17396f00f0b03e42228e17be10a8ecc01c9084039da85f8596c2cc381df02\"",
    "mtime": "2026-11-14T14:34:47.035Z"
  },
  "/images/modalities/valorant.webp": {
    "type": "image/webp",
    "path": "../public/images/modalities/valorant.webp",
    "size": 8666,
    "etag": "\"b22149349d16f660125f5cf2e769eee3384df8eec3ab542aa79d960fdc339ab6\"",
    "mtime": "2026-11-14T14:34:47.034Z"
  },
  "/images/modalities/wild-rift.webp": {
    "type": "image/webp",
    "path": "../public/images/modalities/wild-rift.webp",
    "size": 37506,
    "etag": "\"136d4ddccff86800bf748b49e2506ceab2f7368c53c75889c67c28d37ef8dd87\"",
    "mtime": "2026-11-14T14:34:47.034Z"
  },
  "/images/news/primeiro-retrato-3d.png": {
    "type": "image/png",
    "path": "../public/images/news/primeiro-retrato-3d.png",
    "size": 2003765,
    "etag": "\"34022f6acca6b67e6dc1687c29b98bad46369f8325232042a5125328446c1c41\"",
    "mtime": "2026-11-14T14:34:47.063Z"
  },
  "/images/news/primeiro-retrato-editorial.png": {
    "type": "image/png",
    "path": "../public/images/news/primeiro-retrato-editorial.png",
    "size": 1297792,
    "etag": "\"47358c6397816b3ce6319fa088054fd393014711e0392263dd498b24a57ba220\"",
    "mtime": "2026-11-14T14:34:47.065Z"
  },
  "/images/news/primeiro-retrato.svg": {
    "type": "image/svg+xml",
    "path": "../public/images/news/primeiro-retrato.svg",
    "size": 1290,
    "etag": "\"e725986909f3e3f463d500588460fcc1e58292e1bb44dbc2326c61e080ea1151\"",
    "mtime": "2026-11-14T14:34:47.060Z"
  },
  "/images/social/README.md": {
    "type": "text/markdown; charset=utf-8",
    "path": "../public/images/social/README.md",
    "size": 364,
    "etag": "\"1c23f657117a49f948dc3eac5568ee99b388919338815eec90009e271a46cf5b\"",
    "mtime": "2026-11-14T14:34:47.065Z"
  },
  "/images/social/discord.svg": {
    "type": "image/svg+xml",
    "path": "../public/images/social/discord.svg",
    "size": 1389,
    "etag": "\"79a8105c2fc15d8caa6ee7b87b58597432e171386d22a2cc2237f0eb3bbbe7dd\"",
    "mtime": "2026-11-14T14:34:47.066Z"
  },
  "/images/social/facebook.svg": {
    "type": "image/svg+xml",
    "path": "../public/images/social/facebook.svg",
    "size": 557,
    "etag": "\"daf5a4fff42cb6b9868b7eb61a9f742663cc128d929d37c85873b8b10eaa345a\"",
    "mtime": "2026-11-14T14:34:47.065Z"
  },
  "/images/social/instagram.svg": {
    "type": "image/svg+xml",
    "path": "../public/images/social/instagram.svg",
    "size": 2116,
    "etag": "\"1060526807a40fb7c1fcd06fa720865d295a9dc58f409660c716ec16bf06421e\"",
    "mtime": "2026-11-14T14:34:47.065Z"
  },
  "/images/social/whatsapp.svg": {
    "type": "image/svg+xml",
    "path": "../public/images/social/whatsapp.svg",
    "size": 1231,
    "etag": "\"3e197e0e1f3e679ee09823c75e1c7bad3a19da9bd1ba01df395268b9ae91816f\"",
    "mtime": "2026-11-14T14:34:47.066Z"
  },
  "/images/teams/laes-alpha-v2.png": {
    "type": "image/png",
    "path": "../public/images/teams/laes-alpha-v2.png",
    "size": 545344,
    "etag": "\"725bb5bdaaefa4f80498a2cc5c0b16ca987b6d41ae2d4b46d6f8a0d541cd8387\"",
    "mtime": "2026-11-14T14:34:47.041Z"
  },
  "/images/teams/laes-alpha.png": {
    "type": "image/png",
    "path": "../public/images/teams/laes-alpha.png",
    "size": 303312,
    "etag": "\"e78c5660d77ef50ed39e1e1ce94dae75029c924dff453efa3a37f72533644aae\"",
    "mtime": "2026-11-14T14:34:47.039Z"
  },
  "/images/teams/laes-bravo-v2.png": {
    "type": "image/png",
    "path": "../public/images/teams/laes-bravo-v2.png",
    "size": 546871,
    "etag": "\"e09fce564aa0e5ec20ff28ed1e1def22e649fcc52744e365be8497a48b32abec\"",
    "mtime": "2026-11-14T14:34:47.044Z"
  },
  "/images/teams/laes-bravo.png": {
    "type": "image/png",
    "path": "../public/images/teams/laes-bravo.png",
    "size": 254416,
    "etag": "\"bda71045febe19924610e22c639ce24cbe5941d7755eb5e2952b51c432031e71\"",
    "mtime": "2026-11-14T14:34:47.038Z"
  },
  "/images/teams/laes-eclipse-v2.png": {
    "type": "image/png",
    "path": "../public/images/teams/laes-eclipse-v2.png",
    "size": 569570,
    "etag": "\"58b4d9414bdb80bbc8650b04b103107bd19965fc7e38a4163d7b11afb2e09dda\"",
    "mtime": "2026-11-14T14:34:47.038Z"
  },
  "/images/teams/laes-eclipse.png": {
    "type": "image/png",
    "path": "../public/images/teams/laes-eclipse.png",
    "size": 406221,
    "etag": "\"c33b50c8d362d1f6644d295c9706c3cfd339d0c14cbed1af228fb3260283cc91\"",
    "mtime": "2026-11-14T14:34:47.035Z"
  },
  "/images/teams/laes-nova-v2.png": {
    "type": "image/png",
    "path": "../public/images/teams/laes-nova-v2.png",
    "size": 574479,
    "etag": "\"7fc62f9c416105b95ec6b758c7c2c3cb1d8cee7deb40cd15a5702bbb5b778c1c\"",
    "mtime": "2026-11-14T14:34:47.042Z"
  },
  "/images/teams/laes-nova.png": {
    "type": "image/png",
    "path": "../public/images/teams/laes-nova.png",
    "size": 372039,
    "etag": "\"dd7deed00684cf051063904686026c6555cb2dea7302e5e58026b14937911346\"",
    "mtime": "2026-11-14T14:34:47.043Z"
  },
  "/images/teams/laes-red-line-v2.png": {
    "type": "image/png",
    "path": "../public/images/teams/laes-red-line-v2.png",
    "size": 469683,
    "etag": "\"9b0092b4a28e6c4304d7cf4beed923cd6d180221733efae39774260a9d260b6d\"",
    "mtime": "2026-11-14T14:34:47.037Z"
  },
  "/images/teams/laes-red-line.png": {
    "type": "image/png",
    "path": "../public/images/teams/laes-red-line.png",
    "size": 266739,
    "etag": "\"83a2245eb8f74cf86eeb48d2d6ede77b685bdeaece428c478be64d6cf66026e8\"",
    "mtime": "2026-11-14T14:34:47.042Z"
  },
  "/images/teams/laes-valkyrias-v2.png": {
    "type": "image/png",
    "path": "../public/images/teams/laes-valkyrias-v2.png",
    "size": 799642,
    "etag": "\"4c3a2e4eef8056863f695801bbea20ee8ec99ca223c4e943910882b320b97a9e\"",
    "mtime": "2026-11-14T14:34:47.040Z"
  },
  "/images/teams/laes-valkyrias.png": {
    "type": "image/png",
    "path": "../public/images/teams/laes-valkyrias.png",
    "size": 351466,
    "etag": "\"14e28f6dd88a2063ca9b94ed10959256a1ac4d544bc638da1358390c08328a83\"",
    "mtime": "2026-11-14T14:34:47.036Z"
  },
  "/images/tournaments/avrs-cup.png": {
    "type": "image/png",
    "path": "../public/images/tournaments/avrs-cup.png",
    "size": 248025,
    "etag": "\"0a136cb72f35fbe3f5dc74c146e8c4e079dbaab42eba67a5ac724d41a3654063\"",
    "mtime": "2026-11-14T14:34:47.054Z"
  },
  "/images/tournaments/campeonato-de-foz-do-iguacu.png": {
    "type": "image/png",
    "path": "../public/images/tournaments/campeonato-de-foz-do-iguacu.png",
    "size": 11196,
    "etag": "\"587ef94f4768f332dc195674d9de72e7246ecf2371d37b6e8bf6c31c708d4438\"",
    "mtime": "2026-11-14T14:34:47.058Z"
  },
  "/images/tournaments/el-semillero.png": {
    "type": "image/png",
    "path": "../public/images/tournaments/el-semillero.png",
    "size": 178441,
    "etag": "\"633b08fdd7d2380729da764311a30ed15c0c14ca40380ff317658c7234fa40be\"",
    "mtime": "2026-11-14T14:34:47.060Z"
  },
  "/images/tournaments/event-10.png": {
    "type": "image/png",
    "path": "../public/images/tournaments/event-10.png",
    "size": 11196,
    "etag": "\"587ef94f4768f332dc195674d9de72e7246ecf2371d37b6e8bf6c31c708d4438\"",
    "mtime": "2026-11-14T14:34:47.058Z"
  },
  "/images/tournaments/event-11.png": {
    "type": "image/png",
    "path": "../public/images/tournaments/event-11.png",
    "size": 78189,
    "etag": "\"18351f8734502f5fec726e15f1a0f667b56507829f95613eaed04798dda22e34\"",
    "mtime": "2026-11-14T14:34:47.054Z"
  },
  "/images/tournaments/event-12.png": {
    "type": "image/png",
    "path": "../public/images/tournaments/event-12.png",
    "size": 166192,
    "etag": "\"e50f058b029bad9e18e1adb992900bb7c14a5acc2b2f7e7aac4e268048ad6ffc\"",
    "mtime": "2026-11-14T14:34:47.054Z"
  },
  "/images/tournaments/event-13.png": {
    "type": "image/png",
    "path": "../public/images/tournaments/event-13.png",
    "size": 45537,
    "etag": "\"4ef9b73fa924fcb64edd85d9fcdb95cb6fee8dde54886919608594f35a56ac73\"",
    "mtime": "2026-11-14T14:34:47.055Z"
  },
  "/images/tournaments/event-14.png": {
    "type": "image/png",
    "path": "../public/images/tournaments/event-14.png",
    "size": 270483,
    "etag": "\"83e62f5a28744fd7bfd3aa71b5d376ae69accb2f0a36dca0cc4ba32835ba2473\"",
    "mtime": "2026-11-14T14:34:47.056Z"
  },
  "/images/tournaments/event-15.png": {
    "type": "image/png",
    "path": "../public/images/tournaments/event-15.png",
    "size": 29524,
    "etag": "\"10968c8ccdb3b8fe59470001fa694d712979e017958661689b4c1b5a3b9e95df\"",
    "mtime": "2026-11-14T14:34:47.058Z"
  },
  "/images/tournaments/event-16.png": {
    "type": "image/png",
    "path": "../public/images/tournaments/event-16.png",
    "size": 123381,
    "etag": "\"43d6028f0b4790bfc722ed385253b800663b22461049606bfa08699c40cd60ce\"",
    "mtime": "2026-11-14T14:34:47.055Z"
  },
  "/images/tournaments/event-3.png": {
    "type": "image/png",
    "path": "../public/images/tournaments/event-3.png",
    "size": 29524,
    "etag": "\"10968c8ccdb3b8fe59470001fa694d712979e017958661689b4c1b5a3b9e95df\"",
    "mtime": "2026-11-14T14:34:47.059Z"
  },
  "/images/tournaments/event-4.png": {
    "type": "image/png",
    "path": "../public/images/tournaments/event-4.png",
    "size": 28729,
    "etag": "\"83cd78489e7a27017d6e507f5cadab300a8769c499b6613d5037bc52821cf7f7\"",
    "mtime": "2026-11-14T14:34:47.053Z"
  },
  "/images/tournaments/event-5.png": {
    "type": "image/png",
    "path": "../public/images/tournaments/event-5.png",
    "size": 22441,
    "etag": "\"75170dd8eb001667bdee051112d1286381be2e35f92e96e1df2e262b355cff61\"",
    "mtime": "2026-11-14T14:34:47.059Z"
  },
  "/images/tournaments/event-6.png": {
    "type": "image/png",
    "path": "../public/images/tournaments/event-6.png",
    "size": 29524,
    "etag": "\"10968c8ccdb3b8fe59470001fa694d712979e017958661689b4c1b5a3b9e95df\"",
    "mtime": "2026-11-14T14:34:47.054Z"
  },
  "/images/tournaments/event-7.png": {
    "type": "image/png",
    "path": "../public/images/tournaments/event-7.png",
    "size": 248025,
    "etag": "\"0a136cb72f35fbe3f5dc74c146e8c4e079dbaab42eba67a5ac724d41a3654063\"",
    "mtime": "2026-11-14T14:34:47.053Z"
  },
  "/images/tournaments/event-8.png": {
    "type": "image/png",
    "path": "../public/images/tournaments/event-8.png",
    "size": 7121,
    "etag": "\"8813da8e3eb859c2bd9c4a3af72e26f7f85a352697b6aac33e192d58dbbf9d47\"",
    "mtime": "2026-11-14T14:34:47.056Z"
  },
  "/images/tournaments/event-9.png": {
    "type": "image/png",
    "path": "../public/images/tournaments/event-9.png",
    "size": 29524,
    "etag": "\"10968c8ccdb3b8fe59470001fa694d712979e017958661689b4c1b5a3b9e95df\"",
    "mtime": "2026-11-14T14:34:47.058Z"
  },
  "/images/tournaments/evolution-primordiais.png": {
    "type": "image/png",
    "path": "../public/images/tournaments/evolution-primordiais.png",
    "size": 28729,
    "etag": "\"83cd78489e7a27017d6e507f5cadab300a8769c499b6613d5037bc52821cf7f7\"",
    "mtime": "2026-11-14T14:34:47.057Z"
  },
  "/images/tournaments/goddess.png": {
    "type": "image/png",
    "path": "../public/images/tournaments/goddess.png",
    "size": 166192,
    "etag": "\"e50f058b029bad9e18e1adb992900bb7c14a5acc2b2f7e7aac4e268048ad6ffc\"",
    "mtime": "2026-11-14T14:34:47.057Z"
  },
  "/images/tournaments/kivo-champions-cup.png": {
    "type": "image/png",
    "path": "../public/images/tournaments/kivo-champions-cup.png",
    "size": 22441,
    "etag": "\"75170dd8eb001667bdee051112d1286381be2e35f92e96e1df2e262b355cff61\"",
    "mtime": "2026-11-14T14:34:47.057Z"
  },
  "/images/tournaments/krenac-cup-2026.png": {
    "type": "image/png",
    "path": "../public/images/tournaments/krenac-cup-2026.png",
    "size": 270483,
    "etag": "\"83e62f5a28744fd7bfd3aa71b5d376ae69accb2f0a36dca0cc4ba32835ba2473\"",
    "mtime": "2026-11-14T14:34:47.059Z"
  },
  "/images/tournaments/liga-nox.png": {
    "type": "image/png",
    "path": "../public/images/tournaments/liga-nox.png",
    "size": 78189,
    "etag": "\"18351f8734502f5fec726e15f1a0f667b56507829f95613eaed04798dda22e34\"",
    "mtime": "2026-11-14T14:34:47.055Z"
  },
  "/images/tournaments/nok.png": {
    "type": "image/png",
    "path": "../public/images/tournaments/nok.png",
    "size": 258087,
    "etag": "\"e057402ef7d60826a8b5075b8e7766ea8cfa99902f8c9a67bd7d886840aba536\"",
    "mtime": "2026-11-14T14:34:47.056Z"
  },
  "/images/tournaments/relegation-4-ultimate-cup.png": {
    "type": "image/png",
    "path": "../public/images/tournaments/relegation-4-ultimate-cup.png",
    "size": 45537,
    "etag": "\"4ef9b73fa924fcb64edd85d9fcdb95cb6fee8dde54886919608594f35a56ac73\"",
    "mtime": "2026-11-14T14:34:47.058Z"
  },
  "/images/tournaments/seja-unifal.png": {
    "type": "image/png",
    "path": "../public/images/tournaments/seja-unifal.png",
    "size": 29524,
    "etag": "\"10968c8ccdb3b8fe59470001fa694d712979e017958661689b4c1b5a3b9e95df\"",
    "mtime": "2026-11-14T14:34:47.058Z"
  },
  "/images/tournaments/star-challenge.png": {
    "type": "image/png",
    "path": "../public/images/tournaments/star-challenge.png",
    "size": 7121,
    "etag": "\"8813da8e3eb859c2bd9c4a3af72e26f7f85a352697b6aac33e192d58dbbf9d47\"",
    "mtime": "2026-11-14T14:34:47.054Z"
  },
  "/images/tournaments/x5-rushfy-cup.png": {
    "type": "image/png",
    "path": "../public/images/tournaments/x5-rushfy-cup.png",
    "size": 123381,
    "etag": "\"43d6028f0b4790bfc722ed385253b800663b22461049606bfa08699c40cd60ce\"",
    "mtime": "2026-11-14T14:34:47.057Z"
  },
  "/robots.txt": {
    "type": "text/plain; charset=utf-8",
    "path": "../public/robots.txt",
    "size": 160,
    "etag": "\"a3d27b3ca5ce32341fa9f96f01169b521b1657c05d1860c45d1e53a6258e9e8b\"",
    "mtime": "2026-11-14T14:34:46.926Z"
  }
};
//#endregion
//#region #nitro/virtual/public-assets-node
function readAsset(id) {
	const serverDir = dirname(fileURLToPath(globalThis.__nitro_main__));
	return promises.readFile(resolve(serverDir, public_assets_data_default[id].path));
}
//#endregion
//#region #nitro/virtual/public-assets
var publicAssetBases = {};
function isPublicAssetURL(id = "") {
	if (public_assets_data_default[id]) return true;
	for (const base in publicAssetBases) if (id.startsWith(base)) return true;
	return false;
}
function getAsset(id) {
	return public_assets_data_default[id];
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/static.mjs
var METHODS = /* @__PURE__ */ new Set(["HEAD", "GET"]);
var EncodingMap = {
	gzip: ".gz",
	br: ".br",
	zstd: ".zst"
};
var static_default = defineHandler((event) => {
	if (event.req.method && !METHODS.has(event.req.method)) return;
	let id = decodePath(withLeadingSlash(withoutTrailingSlash(event.url.pathname)));
	let asset;
	const encodings = [...(event.req.headers.get("accept-encoding") || "").split(",").map((e) => EncodingMap[e.trim()]).filter(Boolean).sort(), ""];
	for (const encoding of encodings) for (const _id of [id + encoding, joinURL(id, "index.html" + encoding)]) {
		const _asset = getAsset(_id);
		if (_asset) {
			asset = _asset;
			id = _id;
			break;
		}
	}
	if (!asset) {
		if (isPublicAssetURL(id)) {
			event.res.headers.delete("Cache-Control");
			throw new HTTPError({ status: 404 });
		}
		return;
	}
	if (encodings.length > 1) event.res.headers.append("Vary", "Accept-Encoding");
	if (event.req.headers.get("if-none-match") === asset.etag) {
		event.res.status = 304;
		event.res.statusText = "Not Modified";
		return "";
	}
	const ifModifiedSinceH = event.req.headers.get("if-modified-since");
	const mtimeDate = new Date(asset.mtime);
	if (ifModifiedSinceH && asset.mtime && new Date(ifModifiedSinceH) >= mtimeDate) {
		event.res.status = 304;
		event.res.statusText = "Not Modified";
		return "";
	}
	if (asset.type) event.res.headers.set("Content-Type", asset.type);
	if (asset.etag && !event.res.headers.has("ETag")) event.res.headers.set("ETag", asset.etag);
	if (asset.mtime && !event.res.headers.has("Last-Modified")) event.res.headers.set("Last-Modified", mtimeDate.toUTCString());
	if (asset.encoding && !event.res.headers.has("Content-Encoding")) event.res.headers.set("Content-Encoding", asset.encoding);
	if (asset.size > 0 && !event.res.headers.has("Content-Length")) event.res.headers.set("Content-Length", asset.size.toString());
	return readAsset(id);
});
//#endregion
//#region #nitro/virtual/routing
var findRouteRules = /* @__PURE__ */ (() => {
	const $0 = [{
		name: "headers",
		route: "/assets/**",
		handler: headers,
		options: { "cache-control": "public, max-age=31536000, immutable" }
	}];
	return (m, p) => {
		let r = [];
		if (p.charCodeAt(p.length - 1) === 47) p = p.slice(0, -1) || "/";
		let s = p.split("/");
		if (s.length > 1) {
			if (s[1] === "assets") r.unshift({
				data: $0,
				params: { "_": s.slice(2).join("/") }
			});
		}
		return r;
	};
})();
var _lazy_1yGIxN = defineLazyEventHandler(() => import("./_chunks/ssr-renderer.mjs"));
var findRoute = /* @__PURE__ */ (() => {
	const data = {
		route: "/**",
		handler: _lazy_1yGIxN
	};
	return ((_m, p) => {
		return {
			data,
			params: { "_": p.slice(1) }
		};
	});
})();
var globalMiddleware = [toEventHandler(static_default)].filter(Boolean);
//#endregion
//#region node_modules/nitro/dist/runtime/internal/error/prod.mjs
var errorHandler = (error, event) => {
	const res = defaultHandler(error, event);
	return new NodeResponse(typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2), res);
};
function defaultHandler(error, event) {
	const unhandled = error.unhandled ?? !HTTPError.isError(error);
	const { status = 500, statusText = "" } = unhandled ? {} : error;
	if (status === 404) {
		const url = event.url || new URL(event.req.url);
		const baseURL = "/";
		if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) return {
			status: 302,
			headers: new Headers({ location: `${baseURL}${url.pathname.slice(1)}${url.search}` })
		};
	}
	const headers = new Headers(unhandled ? {} : error.headers);
	headers.set("content-type", "application/json; charset=utf-8");
	return {
		status,
		statusText,
		headers,
		body: {
			error: true,
			...unhandled ? {
				status,
				unhandled: true
			} : typeof error.toJSON === "function" ? error.toJSON() : {
				status,
				statusText,
				message: error.message
			}
		}
	};
}
//#endregion
//#region #nitro/virtual/error-handler
var errorHandlers = [errorHandler];
async function error_handler_default(error, event) {
	for (const handler of errorHandlers) try {
		const response = await handler(error, event, { defaultHandler });
		if (response) return response;
	} catch (error) {
		console.error(error);
	}
}
//#endregion
//#region #nitro/virtual/app
function createNitroApp() {
	const captureError = (error, errorCtx) => {
		if (errorCtx?.event) {
			const errors = errorCtx.event.req.context?.nitro?.errors;
			if (errors) errors.push({
				error,
				context: errorCtx
			});
		}
	};
	const h3App = createH3App({ onError(error, event) {
		return error_handler_default(error, event);
	} });
	let appHandler = (req) => {
		req.context ||= {};
		req.context.nitro = req.context.nitro || { errors: [] };
		return h3App.fetch(req);
	};
	return {
		fetch: appHandler,
		h3: h3App,
		hooks: void 0,
		captureError
	};
}
function createH3App(config) {
	const h3App = new H3Core(config);
	h3App["~findRoute"] = (event) => findRoute(event.req.method, event.url.pathname);
	h3App["~middleware"].push(...globalMiddleware);
	h3App["~getMiddleware"] = (event, route) => {
		const pathname = event.url.pathname;
		const method = event.req.method;
		const middleware = [];
		const routeRules = getRouteRules(method, pathname);
		event.context.routeRules = routeRules?.routeRules;
		if (routeRules?.routeRuleMiddleware.length) middleware.push(...routeRules.routeRuleMiddleware);
		middleware.push(...h3App["~middleware"]);
		if (route?.data?.middleware?.length) middleware.push(...route.data.middleware);
		return middleware;
	};
	return h3App;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/app.mjs
var APP_ID = "default";
function useNitroApp() {
	let instance = useNitroApp._instance;
	if (instance) return instance;
	instance = useNitroApp._instance = createNitroApp();
	globalThis.__nitro__ = globalThis.__nitro__ || {};
	globalThis.__nitro__[APP_ID] = instance;
	return instance;
}
function getRouteRules(method, pathname) {
	const m = findRouteRules(method, pathname);
	if (!m?.length) return { routeRuleMiddleware: [] };
	const routeRules = {};
	for (const layer of m) for (const rule of layer.data) {
		const currentRule = routeRules[rule.name];
		if (currentRule) {
			if (rule.options === false) {
				delete routeRules[rule.name];
				continue;
			}
			if (typeof currentRule.options === "object" && typeof rule.options === "object") currentRule.options = {
				...currentRule.options,
				...rule.options
			};
			else currentRule.options = rule.options;
			currentRule.route = rule.route;
			currentRule.params = {
				...currentRule.params,
				...layer.params
			};
		} else if (rule.options !== false) routeRules[rule.name] = {
			...rule,
			params: layer.params
		};
	}
	const middleware = [];
	const orderedRules = Object.values(routeRules).sort((a, b) => (a.handler?.order || 0) - (b.handler?.order || 0));
	for (const rule of orderedRules) {
		if (rule.options === false || !rule.handler) continue;
		middleware.push(rule.handler(rule));
	}
	return {
		routeRules,
		routeRuleMiddleware: middleware
	};
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/error/hooks.mjs
function _captureError(error, type) {
	console.error(`[${type}]`, error);
	useNitroApp().captureError?.(error, { tags: [type] });
}
function trapUnhandledErrors() {
	process.on("unhandledRejection", (error) => _captureError(error, "unhandledRejection"));
	process.on("uncaughtException", (error) => _captureError(error, "uncaughtException"));
}
//#endregion
//#region #nitro/virtual/tracing
var tracingSrvxPlugins = [];
//#endregion
//#region node_modules/nitro/dist/presets/node/runtime/node-server.mjs
var _parsedPort = Number.parseInt(process.env.NITRO_PORT ?? process.env.PORT ?? "");
var port = Number.isNaN(_parsedPort) ? 3e3 : _parsedPort;
var host = process.env.NITRO_HOST || process.env.HOST;
var cert = process.env.NITRO_SSL_CERT;
var key = process.env.NITRO_SSL_KEY;
var nitroApp = useNitroApp();
serve({
	port,
	hostname: host,
	tls: cert && key ? {
		cert,
		key
	} : void 0,
	fetch: request => secureFetch(nitroApp.fetch, request),
	plugins: [...tracingSrvxPlugins]
});
trapUnhandledErrors();
var node_server_default = {};
//#endregion
export { node_server_default as default };
