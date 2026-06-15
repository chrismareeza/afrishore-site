// /okf/index.md — the OKF bundle catalogue (lists every concept for agents).
import type { APIRoute } from "astro";
import { getConcepts, buildIndex } from "../../lib/okf";

export const prerender = true;

export const GET: APIRoute = () =>
  new Response(buildIndex(getConcepts()), {
    headers: { "content-type": "text/markdown; charset=utf-8" },
  });
