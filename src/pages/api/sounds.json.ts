import type { APIRoute } from "astro";
import { getSounds } from "../../lib/sounds";

export const GET: APIRoute = async ({ site }) => {
  const base = site ?? new URL("http://localhost:4321");
  const sounds = (await getSounds()).map((s) => ({
    id: s.id,
    name: s.name,
    format: s.format,
    url: new URL(s.path, base).href,
  }));

  return new Response(JSON.stringify(sounds, null, 2), {
    headers: { "Content-Type": "application/json; charset=utf-8" },
  });
};
