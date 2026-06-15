// /okf/<slug>.md — one clean markdown concept per page/entity, with YAML
// frontmatter, generated at build time from the same source as the site.
import type { APIRoute, GetStaticPaths } from "astro";
import { getConcepts, okfFile } from "../../lib/okf";

export const prerender = true;

export const getStaticPaths: GetStaticPaths = () =>
  getConcepts().map((c) => ({ params: { slug: c.slug }, props: { file: okfFile(c) } }));

export const GET: APIRoute = ({ props }) =>
  new Response((props as { file: string }).file, {
    headers: { "content-type": "text/markdown; charset=utf-8" },
  });
