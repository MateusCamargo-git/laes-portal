import { i as stringType, r as objectType, t as arrayType } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/public-athlete-BaNoIfuf.js
var publicAthleteSchema = objectType({
	id: stringType().uuid(),
	nick: stringType().nullable(),
	bio: stringType().nullable(),
	avatar_url: stringType().nullable(),
	games: arrayType(objectType({
		modality_name: stringType(),
		roles: arrayType(stringType())
	}))
});
//#endregion
export { publicAthleteSchema as t };
