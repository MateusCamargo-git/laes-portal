import { r as supabase } from "./backend-mB6vbMUi.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/upload-DbWbY1XA.js
var ALLOWED_IMAGE_TYPES = [
	"image/png",
	"image/jpeg",
	"image/webp"
];
function validateImage(file) {
	if (!ALLOWED_IMAGE_TYPES.includes(file.type)) return "Envie uma imagem PNG, JPG ou WEBP.";
	if (file.size > 5242880) return "A imagem deve ter no máximo 5 MB.";
	return null;
}
/**
* Uploads an image and returns a storage reference, never a permanent signed URL.
* folder "avatars" stores under avatars/<uid>/; "content" requires a staff role.
*/
async function uploadImage(file, folder, userId) {
	const err = validateImage(file);
	if (err) throw new Error(err);
	const ext = {
		"image/png": "png",
		"image/jpeg": "jpg",
		"image/webp": "webp"
	}[file.type];
	const path = `${folder}/${userId}/${crypto.randomUUID()}.${ext}`;
	const { error } = await supabase.storage.from("media").upload(path, file, {
		contentType: file.type,
		upsert: false
	});
	if (error) throw new Error("Não foi possível enviar a imagem. Verifique sua permissão e tente novamente.");
	return `storage://media/${path}`;
}
//#endregion
export { uploadImage as t };
