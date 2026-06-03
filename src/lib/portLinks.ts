// Port-hub linking utilities – shared between project case-study pages
// and service pages, so any place that mentions a port name in body
// text can pass equity to the matching /ports/<slug> hub.

export const PORT_HUB_SLUGS: Record<string, string> = {
  "walvis bay": "walvis-bay",
  "lüderitz": "luderitz",
  luderitz: "luderitz",
  "cape town": "cape-town",
  saldanha: "saldanha",
  "saldanha bay": "saldanha",
  "mossel bay": "mossel-bay",
  durban: "durban",
};

// Map a raw segment like "Cape Town" or "Walvis Bay, Namibia" or
// "Port of Mossel Bay" to its port-hub slug, or null if no match.
export function portSlugFor(segment: string): string | null {
  const cleaned = segment
    .toLowerCase()
    .replace(/^port of\s+/, "")
    .replace(/,.*$/, "")
    .trim();
  return PORT_HUB_SLUGS[cleaned] || null;
}

export type LinkifySegment =
  | { type: "text"; value: string }
  | { type: "link"; href: string; text: string };

type Matcher = { re: RegExp; href: string };

// Generic prose linkifier: walk the text against an array of (regex,
// href) pairs, dedupe so each href is linked at most once per
// paragraph (first occurrence wins – Google weights the first anchor
// most heavily), and protect against overlapping matches.
function linkifyGeneric(text: string, matchers: Matcher[]): LinkifySegment[] {
  type Match = { start: number; end: number; href: string };
  const matches: Match[] = [];
  for (const { re, href } of matchers) {
    re.lastIndex = 0;
    let m: RegExpExecArray | null;
    while ((m = re.exec(text)) !== null) {
      matches.push({ start: m.index, end: m.index + m[0].length, href });
    }
  }
  matches.sort((a, b) => a.start - b.start);

  const seenHrefs = new Set<string>();
  const segments: LinkifySegment[] = [];
  let cursor = 0;
  for (const m of matches) {
    if (m.start < cursor) continue; // overlap protection
    if (seenHrefs.has(m.href)) continue; // first occurrence per paragraph only
    seenHrefs.add(m.href);
    if (m.start > cursor) {
      segments.push({ type: "text", value: text.slice(cursor, m.start) });
    }
    segments.push({
      type: "link",
      href: m.href,
      text: text.slice(m.start, m.end),
    });
    cursor = m.end;
  }
  if (cursor < text.length) {
    segments.push({ type: "text", value: text.slice(cursor) });
  }
  return segments.length > 0 ? segments : [{ type: "text", value: text }];
}

const PORT_MATCHERS: Matcher[] = [
  { re: /\bWalvis Bay\b/g, href: "/ports/walvis-bay" },
  { re: /\bLüderitz\b/g, href: "/ports/luderitz" },
  { re: /\bLuderitz\b/g, href: "/ports/luderitz" },
  { re: /\bCape Town\b/g, href: "/ports/cape-town" },
  { re: /\bSaldanha(?:\s+Bay)?\b/g, href: "/ports/saldanha" },
  { re: /\bMossel Bay\b/g, href: "/ports/mossel-bay" },
  { re: /\bDurban\b/g, href: "/ports/durban" },
];

// Service-phrase matchers for prose contexts where the phrase identifies
// one of the four service pages. Ordered most-specific first so the
// generic-prose dedup catches the right anchor for each href.
const SERVICE_MATCHERS: Matcher[] = [
  { re: /\bvessel and rig agent\b/gi, href: "/services/ship-rig-agency" },
  { re: /\bvessel and rig agency\b/gi, href: "/services/ship-rig-agency" },
  { re: /\bowners' protective agent\b/gi, href: "/services/ship-rig-agency" },
  { re: /\bowners' protective agency\b/gi, href: "/services/ship-rig-agency" },
  { re: /\boffshore supply base\b/gi, href: "/services/offshore-supply-base" },
  { re: /\bsupply base operations\b/gi, href: "/services/offshore-supply-base" },
  { re: /\bintegrated logistics\b/gi, href: "/services/integrated-logistics" },
  { re: /\bcustoms brokerage\b/gi, href: "/services/integrated-logistics" },
  { re: /\bcustoms clearance\b/gi, href: "/services/integrated-logistics" },
  { re: /\bproject cargo\b/gi, href: "/services/integrated-logistics" },
  { re: /\bcrew logistics\b/gi, href: "/services/crew-visa-services" },
  { re: /\bcrew rotations\b/gi, href: "/services/crew-visa-services" },
  { re: /\bvisa and immigration processing\b/gi, href: "/services/crew-visa-services" },
  { re: /\bvisa processing\b/gi, href: "/services/crew-visa-services" },
];

// Port-only linkifier – kept on its existing signature so project and
// service body prose keeps its current behaviour.
export function linkifyPorts(text: string): LinkifySegment[] {
  return linkifyGeneric(text, PORT_MATCHERS);
}

// Combined port + service linkifier for FAQ answers, where a single
// paragraph commonly mentions both a port and a service phrase.
export function linkifyEntities(text: string): LinkifySegment[] {
  return linkifyGeneric(text, [...PORT_MATCHERS, ...SERVICE_MATCHERS]);
}
