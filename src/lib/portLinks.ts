// Port-hub linking utilities — shared between project case-study pages
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

// Take a paragraph string and return an array of plain-text and link
// segments. Only the FIRST occurrence of each port name is linked, so
// link equity concentrates on the first anchor (which Google weights
// most heavily) and the paragraph doesn't read as link-stuffed.
export function linkifyPorts(text: string): LinkifySegment[] {
  const matchers: Array<[RegExp, string]> = [
    [/\bWalvis Bay\b/g, "walvis-bay"],
    [/\bLüderitz\b/g, "luderitz"],
    [/\bLuderitz\b/g, "luderitz"],
    [/\bCape Town\b/g, "cape-town"],
    [/\bSaldanha(?:\s+Bay)?\b/g, "saldanha"],
    [/\bMossel Bay\b/g, "mossel-bay"],
    [/\bDurban\b/g, "durban"],
  ];

  type Match = { start: number; end: number; slug: string };
  const matches: Match[] = [];
  for (const [re, slug] of matchers) {
    re.lastIndex = 0;
    let m: RegExpExecArray | null;
    while ((m = re.exec(text)) !== null) {
      matches.push({ start: m.index, end: m.index + m[0].length, slug });
    }
  }
  matches.sort((a, b) => a.start - b.start);

  const seenSlugs = new Set<string>();
  const segments: LinkifySegment[] = [];
  let cursor = 0;
  for (const m of matches) {
    if (m.start < cursor) continue; // overlap protection
    if (seenSlugs.has(m.slug)) continue; // first occurrence per paragraph only
    seenSlugs.add(m.slug);
    if (m.start > cursor) {
      segments.push({ type: "text", value: text.slice(cursor, m.start) });
    }
    segments.push({
      type: "link",
      href: `/ports/${m.slug}`,
      text: text.slice(m.start, m.end),
    });
    cursor = m.end;
  }
  if (cursor < text.length) {
    segments.push({ type: "text", value: text.slice(cursor) });
  }
  return segments.length > 0 ? segments : [{ type: "text", value: text }];
}
