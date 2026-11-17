import {handleLiveApi} from "./laes-live.mjs";
export async function secureFetch(handler, request) {
  const url = new URL(request.url);
  const original = /^\/vagas\/?$/.test(url.pathname)
    ? new Response(null, { status: 308, headers: { Location: "/equipes" + url.search } })
    : await handleLiveApi(request) || await handler(request);
  const headers = new Headers(original.headers);
  headers.set("X-Content-Type-Options", "nosniff");
  headers.set("X-Frame-Options", "DENY");
  headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
  headers.set("Permissions-Policy", "camera=(), microphone=(), geolocation=(), payment=()");
  headers.set("Strict-Transport-Security", "max-age=31536000");
  headers.set("Content-Security-Policy", [
    "default-src 'self'", "script-src 'self' 'unsafe-inline'",
    "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
    "font-src 'self' https://fonts.gstatic.com", "img-src 'self' https: data: blob:",
    "connect-src 'self' https://txwxodscfnbsgltmrfjz.supabase.co wss://txwxodscfnbsgltmrfjz.supabase.co",
    "object-src 'none'", "base-uri 'self'", "form-action 'self'", "frame-ancestors 'none'",
  ].join("; "));
  const pathname = new URL(request.url).pathname;
  if (pathname.startsWith('/assets/') || (headers.get('content-type') || '').startsWith('text/html')) headers.set('Cache-Control', 'no-cache');
  if (/^\/(admin|painel|auth|entrar|cadastro|recuperar-senha|redefinir-senha|_serverFn)(\/|$)/.test(pathname)) {
    headers.set("Cache-Control", "private, no-store");
    headers.set("X-Robots-Tag", "noindex, nofollow");
  }
  if (request.method === "GET" && original.status === 200 && (headers.get("content-type") || "").startsWith("text/html")) {
    const html = await original.text();
    const body = html.replace(/\u0000/g, "\\u0000");
    headers.delete("content-length"); headers.delete("etag");
    return new Response(body, { status: original.status, statusText: original.statusText, headers });
  }
  return new Response(original.body, { status: original.status, statusText: original.statusText, headers });
}
