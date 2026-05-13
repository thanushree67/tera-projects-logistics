// Vercel Node Function entry. Wraps TanStack Start's SSR fetch handler.
// Vercel routes all paths here via vercel.json rewrites.
import handler from "@tanstack/react-start/server-entry";

export const config = {
  runtime: "nodejs20.x",
};

type FetchHandler = {
  fetch: (request: Request) => Promise<Response> | Response;
};

const ssr = (handler as unknown as FetchHandler).fetch
  ? (handler as unknown as FetchHandler)
  : ({ fetch: handler as unknown as FetchHandler["fetch"] });

export default async function vercelHandler(request: Request): Promise<Response> {
  try {
    return await ssr.fetch(request);
  } catch (err) {
    console.error("[ssr]", err);
    return new Response("Internal Server Error", { status: 500 });
  }
}
