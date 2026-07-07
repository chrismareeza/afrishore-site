// Open Knowledge Format (OKF) bundle generator.
// Google's OKF (v0.1, June 2026) is a folder of markdown "concept" files —
// each with a YAML frontmatter block (type/title/description/resource/tags)
// and a clean markdown body — cross-linked into a graph an AI agent can walk,
// plus an index.md catalogue. Served at /okf/. This builds the bundle at
// BUILD TIME from the same source data as the site, so it never goes stale.
//
// No-downside design: the bundle is referenced only from llms.txt (and here),
// is excluded from the sitemap, and is never linked from the HTML navigation —
// so it's an agent layer, not a search-index layer.
import { servicePages } from "../data/services";
import { ports } from "../data/ports";
import { projects } from "../data/projects";

const SITE = "https://www.afrishore.co";

export interface OkfConcept {
  slug: string; // unique, type-prefixed okf filename (no extension)
  type: string; // schema.org-aligned concept type
  title: string;
  description: string;
  resource: string; // canonical URL on the live site
  tags: string[];
  body: string; // markdown body (no frontmatter)
}

const clean = (s: string) => (s || "").replace(/\s+/g, " ").trim();

function frontmatter(c: OkfConcept): string {
  const tags = c.tags.length ? `\ntags: [${c.tags.join(", ")}]` : "";
  return `---\ntype: ${c.type}\ntitle: ${clean(c.title)}\ndescription: ${clean(c.description)}\nresource: ${c.resource}${tags}\n---\n`;
}

export function okfFile(c: OkfConcept): string {
  return frontmatter(c) + "\n" + c.body.trim() + "\n";
}

export function getConcepts(): OkfConcept[] {
  const out: OkfConcept[] = [];
  const pub = projects.filter((p) => p.published);

  // Overview / Organization
  out.push({
    slug: "afrishore",
    type: "Organization",
    title: "Afrishore — Integrated Marine Logistics, Southern Africa",
    description:
      "Integrated marine logistics agency and vessel & rig agency across South Africa, Namibia and Mozambique since 2010.",
    resource: `${SITE}/`,
    tags: ["marine logistics", "vessel agency", "offshore supply base", "Southern Africa"],
    body: [
      "# Afrishore",
      "> Integrated marine logistics agency operating across South Africa, Namibia and Mozambique since 2010 — vessel & rig agency, offshore supply base, integrated logistics and crew & visa services for offshore energy operators, drilling contractors and charterers.",
      "Permanently embedded inside the Port of Walvis Bay's Oil & Gas Section. ISO 9001 certified · B-BBEE Level 1 (South Africa) · 51% Namibian-owned with 34% PDP equity (Namibia) · POPIA compliant · United Nations Global Compact participant · SAASOA member.",
      "## Services",
      servicePages.map((s) => `- [${s.name}](service-${s.slug}.md)`).join("\n"),
      "## Ports & coverage",
      ports.map((p) => `- [${p.portName}, ${p.country}](port-${p.slug}.md)`).join("\n"),
      "## Project case studies",
      pub.map((p) => `- [${p.title}](project-${p.slug}.md)`).join("\n"),
    ].join("\n\n"),
  });

  // Services
  for (const s of servicePages) {
    out.push({
      slug: `service-${s.slug}`,
      type: "Service",
      title: s.h1,
      description: s.metaDescription,
      resource: `${SITE}/services/${s.slug}/`,
      tags: ["service", "marine logistics"],
      body: [`# ${s.h1}`, s.geoSub, ...s.intro, "## What we handle", s.scope.map((x) => `- ${x}`).join("\n")]
        .filter(Boolean)
        .join("\n\n"),
    });
  }

  // Ports
  for (const p of ports) {
    const facts = [`Port: ${p.portName}, ${p.country}`, p.portCode ? `UN/LOCODE: ${p.portCode}` : ""]
      .filter(Boolean)
      .join(" · ");
    out.push({
      slug: `port-${p.slug}`,
      type: "Place",
      title: p.h1,
      description: p.metaDescription,
      resource: `${SITE}/ports/${p.slug}/`,
      tags: ["port", p.portName, p.country],
      body: [`# ${p.h1}`, p.geoSub, p.lead || "", ...p.intro, "## Scope", p.scope.map((x) => `- ${x}`).join("\n"), facts]
        .filter(Boolean)
        .join("\n\n"),
    });
  }

  // Projects (published case studies)
  for (const pr of pub) {
    const facts = [`Client: ${pr.client}`, pr.port ? `Port: ${pr.port}` : "", pr.year ? `Year: ${pr.year}` : ""]
      .filter(Boolean)
      .join(" · ");
    out.push({
      slug: `project-${pr.slug}`,
      type: "Article",
      title: pr.title,
      description: pr.metaDescription || pr.summary,
      resource: `${SITE}/projects/${pr.slug}/`,
      tags: ["case study", pr.client],
      body: [`# ${pr.title}`, pr.tagline || "", pr.summary || "", pr.outcome || "", facts].filter(Boolean).join("\n\n"),
    });
  }

  return out;
}

export function buildIndex(concepts: OkfConcept[]): string {
  const fm =
    `---\ntype: Collection\ntitle: Afrishore — Open Knowledge Format bundle\n` +
    `description: Machine-readable content bundle for AI agents — Afrishore integrated marine logistics, Southern Africa.\nresource: ${SITE}/\n---\n`;
  const groupOf = (c: OkfConcept) =>
    c.type === "Organization" ? "Overview" : c.type === "Service" ? "Services" : c.type === "Place" ? "Ports & coverage" : "Project case studies";
  const order = ["Overview", "Services", "Ports & coverage", "Project case studies"];
  const groups: Record<string, OkfConcept[]> = {};
  for (const c of concepts) (groups[groupOf(c)] ||= []).push(c);
  const sections = order
    .filter((g) => groups[g])
    .map((g) => `## ${g}\n` + groups[g].map((c) => `- [${clean(c.title)}](${c.slug}.md) — ${clean(c.description)}`).join("\n"))
    .join("\n\n");
  return (
    fm +
    `\n# Afrishore — Open Knowledge Format bundle\n\n` +
    `> Open Knowledge Format (OKF) bundle for AI agents. Each linked file is a clean markdown concept with YAML frontmatter and a canonical resource URL. Source: ${SITE}\n\n` +
    sections +
    "\n"
  );
}
