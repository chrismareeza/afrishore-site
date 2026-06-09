# Afrishore web build playbook

Portable conventions and hard-won lessons from the **afrishore.co** rebuild,
written to transfer cleanly to sibling builds — notably **lifting.co.za**
(Afrishore Lifting & Rigging).

**Stack assumed:** Astro (static output) · Tailwind CSS v4 · GSAP · self-hosted
fonts · Cloudflare Pages, auto-deployed from GitHub `main`.

---

## ⭐ The three things that actually fixed indexing — do these first

1. **Trailing-slash canonical discipline.** Cloudflare Pages serves `/foo/` and
   308-redirects `/foo` → `/foo/`. Every `<link rel="canonical">` and every
   internal link MUST include the trailing slash. If the canonical points at
   `/foo` (no slash) Google sees it aimed at a redirect target, can't decide
   which URL to index, and dumps the page into "Crawled/Discovered – currently
   not indexed." This one issue stalled ~30 pages. Match the served URL exactly.

2. **Content depth ≥ ~450 words of UNIQUE copy per indexable page.** Thin,
   templated, near-duplicate pages get stuck in "Discovered – currently not
   indexed" — Google judges them not worth indexing. Every page needs real,
   page-specific substance.

3. **Internal links — no orphans.** Pages with only 1–2 inbound links don't get
   crawled. Aim for ~20–30 inbound contextual links per page: sibling strips,
   cross-links between related pages, links from high-authority pages (homepage),
   and inline links inside body prose. This is what unstuck the pages.

---

## Schema & entity

- Organization + LocalBusiness + Service JSON-LD in a single `@graph` with
  STABLE `@id`s (`${site}/#organization`, `${site}/#service-x`) so nodes
  cross-reference instead of duplicating.
- A lifting/rigging firm is a **local services business** → LocalBusiness is
  central. Get NAP (name/address/phone) byte-identical across the site, Google
  Business Profile, and every directory — local-pack ranking depends on citation
  consistency.
- Avoid schema `Vehicle`/`Product` subtypes for equipment — they trigger Rich
  Results "missing offers/review" warnings. Use `Thing` + `additionalType`.
- Entity disambiguation matters if the name collides with another entity: add
  `disambiguatingDescription`, `sameAs` (LinkedIn/IG/FB), consider a Wikidata
  item. (afrishore.co had a real Afrishore-vs-Afrishore-BPO collision to resolve.)
- REALITY CHECK: schema has ~zero measurable impact on AI *citations* (Ahrefs,
  14 studies). It helps entity disambiguation + Google rich results — do it for
  those reasons, not for an AI-citation boost.

## Cloudflare / infra

- **25 MB per-file limit on Pages.** Re-encode video (CRF ~23) to fit. Keep big
  source images as a `.original.*` master (gitignored + stripped from the deploy
  by a build plugin); ship optimised derivatives only.
- **AI-crawler-friendly posture** (we WANT AI crawlers for AI-search visibility):
  Bot Fight Mode OFF, **AI Labyrinth OFF**, WAF rules to ALLOW
  PerplexityBot/GPTBot/etc. while still blocking scanner paths (`.env`,
  `wp-config`, `*.php`, AutoDiscover). Email Address Obfuscation OFF if it injects
  a blocking script.
- `_redirects` for legacy URLs — single-hop only (never chain redirects).
- `_headers` + `/.well-known/traffic-advice` if you add prefetch control.

## Performance (afrishore.co hit 100% green Core Web Vitals)

- Image pipeline: sharp → optimised `.jpg` (mozjpeg q~82) + sibling `.webp`
  (q~80), served via `<picture>`. ~250–300 KB each.
- Self-host fonts (fontsource); preload ONLY the critical weights rendered above
  the fold (Barlow 700 + Inter 400). Don't preload unused weights — and don't use
  `font-extrabold` if you only loaded ≤700, it faux-bolds.
- Consent banner: defer the `gtag('consent','update')` call to
  `requestIdleCallback` — a synchronous flip on click caused a 272 ms INP spike.
  After deferring: 0% "Poor" INP in the field.

## Content / UX pattern (resolves "SEO depth vs. scannability")

Progressive disclosure, not walls of text:

- Punchy 1-sentence **lead** (the hook).
- Scannable **stat strip** (≈4 quick facts).
- **Spec cards** for decision-critical numbers — for lifting this is the win:
  crane/lift SWL, boom length & reach, max load, equipment specs. (afrishore.co
  used it for dry-dock dimensions so a vessel owner scans "will it fit?" in
  three seconds. Same idea: "can they lift my load?")
- Deep prose tucked into a native `<details>` accordion — still in the DOM, still
  indexed by Google, but the skim-reader isn't buried. Word count preserved.

## Copy / typography conventions (keep sibling sites consistent)

- En dash `–`, not em dash `—`. British spelling: licence, optimise, organise,
  focussed. Straight apostrophes `'`.
- Non-breaking space between number + unit ("28 t", "50 m") so the number and
  unit never split across lines. Multi-value specs stack as a right-aligned list,
  no dangling separators.
- Lead service/location pages with an active-licence / capability statement.

## The affiliate connection (afrishore.co ↔ lifting.co.za)

- Express the relationship in schema BOTH ways: `parentOrganization` /
  `subOrganization` (or `affiliation`); share the "Afrishore" brand.
- Natural cross-link + mention ("our affiliate, Afrishore Lifting & Rigging" and
  the reverse) — but only once the other site is LIVE; don't link to an
  unfinished site.
- Consistent NAP and brand styling across both reinforces the shared entity.

## Stuff that wasted time — don't repeat

- CSS can't selectively brighten luminance-based pixels (mix-blend-mode /
  masked-duplicate "spotlight" hacks to lift a rig in a hero photo all looked
  terrible). Edit the photo in an image editor instead.
- Don't obsess over GA4 / behavioural analytics before you have traffic — it's
  consent-gated and statistically meaningless at low volume. Acquisition first
  (indexing + striking-distance), conversion analysis later.

## Ongoing SEO workflow

- **Striking distance:** in GSC, find queries at position 4–20 with real
  impressions, then optimise the page that ranks (a section answering the query,
  the keyword in a heading, more depth, internal links, a tighter title, schema)
  and re-submit. Optimising existing pages beats publishing new ones.
- For local services (lifting/rigging): build service-area / location pages,
  optimise the Google Business Profile, and lead with decision-useful equipment
  spec content.

## AEO — winning AI-Overview citations (informational pages only)

AI Overviews appear almost entirely on INFORMATIONAL queries (~99.9%);
local/navigational/transactional queries are nearly AIO-free. So apply this to
guides, FAQs and informational / case-study pages — NOT to commercial money
pages (a "vessel agent {city}" page targets a navigational query and rarely
triggers an AIO; an answer block there is wasted effort).

On an informational page:

- **Answer block** — open with a 100–150 word, self-contained, direct answer to
  the page's ONE core question. No intro, no fluff. This is the text AI Overviews
  lift more or less verbatim.
- **PAA-mapped H2s** — search the keyword, read the "People Also Ask" box, make
  each question an H2. Each section must answer on its own: AI extracts sections
  independently, so a section that leans on earlier context won't get cited.
- **One cited data point per section** — a concrete number, named example or
  quote per section. First-party data is best — it's your edge.
- **The edge** — every page should do something the top 5 results don't: original
  data, a named framework, a specific ICP, or a deeper subtopic.
- **Anti-commoditisation check** — if an AI summary fully replaces your page, no
  one clicks. Give humans something the summary can't carry: proof, photos,
  specific contacts, depth.

Pre-publish check (all YES, or fix first): (1) does the first ~150 words answer
the core question directly? (2) does every H2 map to a real PAA question? (3)
does every section stand alone? (4) one cited data point per section? (5) does a
human get something the AI summary doesn't?

Ground the questions in real demand: pull them from the site's own GSC queries
(informational terms sitting at position 4–20) rather than inventing them.
