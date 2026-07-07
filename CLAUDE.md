# CLAUDE.md — Afrishore-Site operating manual

Marketing site for **Afrishore** (B2B integrated marine logistics: vessel & rig agency,
offshore supply base, integrated logistics, crew & visa — South Africa, Namibia,
Mozambique, since 2010). **Astro 6** static output, **Tailwind v4** (tokens in a
`@theme` block in `src/styles/global.css` — there is no `tailwind.config.js`), GSAP,
npm, Node ≥ 22.12. Live at **https://www.afrishore.co** — every push to `main`
auto-deploys to production via Cloudflare Pages.

This file is the contract. When in doubt, the rules here beat your instincts.

---

## 1. Environment & commands

- **Always `cd /Users/maree_hd/Desktop/Afrishore-Site` first.** Sessions start in
  `/Users/maree_hd`; running `npm run build` from there fails or, worse, acts on the
  wrong directory.
- `npm run build` — the ONLY automated quality gate (there is no lint/test/format).
  A clean local build = what Cloudflare runs. A broken local build = a broken deploy.
- Preview server: the one entry in `.claude/launch.json` is **`astro-preview`**
  (`npm run preview`, port 4321). It serves **`dist/`** — you must `npm run build`
  before previewing or you are looking at stale output. There is no dev-server entry.
- Preview quirks: `preview_screenshot` resets scroll to top; the preview viewport is
  narrow (~300–380px), so `lg:` breakpoints never engage — verify desktop values in
  the compiled CSS/DOM instead. GSAP sections render `opacity-0` until their
  ScrollTrigger fires; use `preview_eval` DOM inspection, not screenshots, as proof.
- Shell is zsh: `status` is a read-only variable (never use it in loops); BSD awk
  lacks GNU extensions. For any text processing beyond a trivial grep, use `python3`.
- Temp files go in the session scratchpad, never in the repo.

## 2. Architecture in sixty seconds

- **Content lives in data files, not templates.** `src/data/projects.ts` (19 case
  studies), `src/data/services.ts` (4 services), `src/data/ports.ts` (6 ports:
  4 `kind:"office"` — Walvis Bay, Cape Town, Mossel Bay, Durban; 2 `kind:"licence"` —
  Lüderitz, Saldanha), `src/data/clients.ts`. Templates render them:
  `src/pages/{projects,services,ports}/[slug].astro`. Exceptions with inline copy:
  `subsea.astro` (the one capability page), the standalone pages (`careers`,
  `certifications`, `popia`, `404`), homepage components, and the FAQ's `faqs` array.
- New standalone pages follow the standing scaffold: import BaseLayout **plus**
  `<Navbar />` and `<Footer />` (the layout does NOT render chrome), wrap content in
  `<main id="main">` (the skip-link target), pass canonical + breadcrumb props.
- Note: `three` + `@types/three` in package.json are unused leftovers — nothing
  imports them (the map/hero are plain SVG/GSAP). Don't infer 3D usage from them.
- **`src/layouts/BaseLayout.astro` owns all structured data**: one JSON-LD `@graph` =
  Organization + WebSite + 4× LocalBusiness + 4× Service (+ optional BreadcrumbList +
  per-page `pageSchema` prop). Pages pass `pageSchema`/`breadcrumb` props — never emit
  a standalone `<script type="application/ld+json">` (the FAQ component's
  self-generated block, derived from the same `faqs` array, is the one existing
  exception).
- The canonical origin `"https://www.afrishore.co"` is hardcoded in three places:
  BaseLayout (`siteUrl`), `src/lib/okf.ts` (`SITE`), and `astro.config.mjs` (`site`).
- Everything in `public/` deploys verbatim — except `*.original.*` image masters,
  which the `stripImageMasters` hook in `astro.config.mjs` deletes from build output:
  `_headers`, `_redirects` (24-rule Wix→Astro 301 map + defensive aliases),
  `robots.txt`, `llms.txt`, `video-sitemap.xml` (hand-maintained), images.
- `public/email/` (logo + social icons) is hotlinked by staff Outlook signatures —
  intentionally unreferenced in src/. Never rename, move, or delete those files.
- The real sitemap is `/sitemap-index.xml` (+ `sitemap-0.xml`), Astro-generated;
  `/sitemap.xml` is a `_redirects` alias — never create a static `public/sitemap.xml`
  (it would shadow the redirect and go stale).
- **IndexNow**: `.github/workflows/indexnow.yml` pings api.indexnow.org after every
  push to main (waits 150s for the deploy, submits the sitemap URL list). The key is
  deliberately public and verified via `public/accec9b74cb0a9d99eb83c822a84a093.txt`
  — never delete/rename that file or "redact" the key; the workflow's custom
  User-Agent is load-bearing (Cloudflare 403s python-urllib).
- `/okf/` is a build-time machine-readable bundle generated from the same data files
  (`src/lib/okf.ts`). It is excluded from the sitemap and referenced only from
  `llms.txt` — never link it from HTML, never hand-edit its output.
- `src/lib/portLinks.ts` auto-links port/service names in prose (`linkifyPorts` /
  `linkifyEntities`), deduped one link per href per paragraph, first occurrence wins.

## 3. Conventions

### Copy (house style — applies to ALL published text, including alt text and metas)
- **En dash `–` (U+2013) only, with spaces.** The em dash `—` (U+2014) appears zero
  times in the data files' published STRINGS (two exist in projects.ts code comments,
  lines 19/24); no em dash may enter any published string. Git messages are exempt.
- **British spelling** (licence, optimise, mobilisation, programme, tonnes),
  straight apostrophes, `·` middle dot for multi-value specs, `×` for multiplication,
  en dash for ranges. Number–unit pairs use a PLAIN space in source ("28 mt",
  "360 m") — port spec values are converted to non-breaking spaces at render time
  (`ports/[slug].astro`); never hand-author U+00A0 in data files.
- Colours come ONLY from the `@theme` tokens in global.css (bg: base/surface/line;
  text: cream/mute/faint; accents: orange/gold/yellow) — never default Tailwind
  colours (`text-white`, `text-gray-*`). `--color-faint` is tuned to pass WCAG AA
  4.5:1 on bg-base; don't introduce darker greys.
- Only latin weights 400–700 of Barlow/Inter are loaded (self-hosted fontsource —
  deliberate POPIA/no-Google-Fonts decision). Never use `font-extrabold`/`font-black`
  (they faux-bold). Only Barlow 700 + Inter 400 are preloaded; don't add more.
- Subheads and leads are **natural declarative sentences, never synonym/keyword
  lists**. The lead pattern: one sentence — what Afrishore does + an authoritative
  descriptor, comma-attached ("Afrishore holds an active port agency licence for the
  Port of X, which…").
- Scope items are short noun phrases: `&` never "and", no verbs, no full stops.
  Reuse existing canonical strings verbatim (e.g. "Port clearance & customs
  formalities", "Ship husbandry & bunkering").
- Deliberate spellings stay: "Lüderitz" in copy (slug is `luderitz`), "Gqeberha",
  "medivac" in some scopes vs "Medical evacuation" in others — don't normalise.
- Banned words on-site: **"Pipeshield"**, **"Bi-Flex"** (third-party product names).

### Facts & claims (the verified-data-only regime)
- `docs/company-brain-source-truth.md` is the fact authority. Tier 1 = stateable;
  Tier 2 = only after human verification; Tier 3 = internal; Tier 4 = blocked.
  Not in T1/verified-T2 → do not publish. Conflict rule: newest confirmed record
  wins (brought current 2026-07-07: AEO/SAOGA/OPITO are now in T1). When the brain
  and a newer confirmed record ever disagree again, the newer record wins — and the
  brain gets a correction-log row in the same change.
- Stateable credentials, **jurisdiction-scoped**: ISO 9001, POPIA, UN Global Compact,
  SAASOA, SAOGA (group); **B-BBEE Level 1 and SARS AEO Level 2 – Security: South
  Africa only**; **51% Namibian-owned + 34% PDP: Namibian entity only** (34% is
  Afrishore's figure; 30% is just the legal floor); **OPITO: the Walvis Bay
  rigging/lifting team only**, never group-wide. **Never claim FONASBA or SAAFF.**
- Two jurisdictions, never mixed: the SA entities (Afrishore Pty Ltd & Afrishore
  Shipping (Pty) Ltd — since 2010, B-BBEE) and the Namibian entity (Afrishore
  Logistics (Pty) Ltd — **founded 2022**, PDP, not B-BBEE, not "since 2010"). All
  trade as the single brand "Afrishore"; the exact registered name matters on
  listings (e.g. MarineTraffic Cape Town is under Afrishore Shipping Pty Ltd... check
  which entity a listing names before reusing copy).
- Hiring: roles are advertised on LinkedIn (company/afrishore-shipping) ONLY — there
  is deliberately no applications inbox. Never route applicants to info@ or list
  open roles on-site.
- Certificates and the POPIA Manual are provided **on request** via pre-filled mailto
  links — never publish certificate PDFs, certificate numbers, or the manual itself.
- `public/llms.txt` ends with a binding "AI guidance" section: direct clients are only
  those listed; Afrishore does **not** offer launch/boat hire, crew-manning agency, or
  P&I/H&M correspondent services. Copy you write must respect it.
- Mozambique = proven **capability**, no office, no physical presence. Never a
  `/ports/` office page; never imply a base or local-content compliance there.
- `stats[]` on projects and all "By the numbers" strips: verified operational data
  only (Chris-supplied or extracted from a clean monday board). No number → no stat.

### Data files
- Slugs are permanent URLs — **never rename** an existing slug to match an updated
  title (e.g. `petrosa-orca-remobilisation` now titled "Logistica: …" stays put).
- `Project.serviceTypes` vocabulary ≠ service-page slugs: `supply-base` (not
  `offshore-supply-base`), `crew-visa` (not `crew-visa-services`), plus
  `ship-rig-agency`, `integrated-logistics`, `subsea-services` (no service page —
  routes to `/subsea/` via `serviceHrefByType`).
- `featured` boolean governs the homepage marquee — file-position banners ("Featured
  6") are stale comments; never infer from position. But **raw array position DOES
  matter** for service/subsea related-project picks (`.filter(...).slice(0,3)` in file
  order) — inserting an entry high in the array silently changes those pages.
- `year` is a string starting with a 4-digit year; ranges use an en dash ("2024–2025");
  the sort parses it — non-numeric-leading values corrupt ordering.
- `metaTitle`: lead with the **search term**, not the client; end "| Afrishore";
  ~48–60 chars. `metaDescription`: one keyword-led sentence, **140–160 chars** with an
  en dash; when unset, `summary` serves as the meta — it must read well as one.
- NAP (name/address/phone) must stay **consistent** across four places: BaseLayout
  LocalBusiness nodes (source of truth), `src/data/ports.ts` `office{}`,
  `Contact.astro`, and the office's Google Business Profile — but the copies are not
  literally byte-identical: BaseLayout uses hyphenated schema telephone format
  ("+27-44-691-3218") vs spaced display numbers elsewhere; Cape Town's full street
  ("…, 160 Sir Lowry Road") appears only in BaseLayout; postcodes live only in
  BaseLayout. Match each file's existing format; never change one copy alone.
  Canonical oddities that are correct: Walvis Bay has no civic street address
  ("Oil & Gas Section, Port of Walvis Bay"); Durban postcode is **4004**.
- Licence-only ports (Lüderitz, Saldanha): no `office{}` block, no invented
  PostalAddress/geo — describe as "licensed agent", attended from the office ports.
- `mapsUrl` and Maps `sameAs` use the full canonical `/maps/place/…` URL (resolved,
  200, no tracking params) — never `maps.app.goo.gl` or `share.google` short links.
  MarineTraffic `sameAs` = bare-ID form `…/maritime-companies/profile/<ID>` (Cape Town
  112551, Mossel Bay 119518, Walvis Bay 120360, Durban 120381). Dedicated profile
  pages qualify for `sameAs`; LIST pages (Namport, shipchandlers) do not.
- Phone fields update in pairs: `phoneDisplay` spaced international, `phoneE164` same
  digits unspaced.

### Templates & components
- **Every canonical URL and internal href ends with a trailing slash.** Cloudflare
  308s the non-slash form; a slashless canonical points at a redirect and lands the
  page in "Crawled – currently not indexed" (this stalled ~30 pages once).
- Progressive disclosure: `lead` (or `intro[0]`) renders above the fold; the rest
  collapses into a native `<details>` "More about…" accordion. `<details>` keeps
  prose in the DOM for crawlers — **never** replace it with JS show/hide, and never
  delete crawlable prose to tidy a design: collapse it.
- Headings: h1 is the only large heading; section h2s are small gold eyebrow labels
  (`text-base uppercase tracking-[0.2em] text-gold font-bold`). Don't introduce big
  visual h2s. Headings are Barlow by default — no `font-bold` needed.
- **`text-base` is the near-black COLOUR token here, not a font size** (compiled:
  `.text-base{color:var(--color-base)}`). It's what makes button text dark on orange.
- GSAP: any element with a `data-anim` attribute starts `opacity-0` and NEEDS a
  matching tween in the component script (unique per-component prefix), or it renders
  invisible forever. Every JS animation needs a `prefers-reduced-motion` branch that
  sets the FINAL state, not just skips the tween.
- Deliberate performance hacks — do not "normalise": hero subhead starts at
  `opacity: 0.01` (Chrome excludes opacity-0 from LCP; changing it regresses mobile
  LCP ~2s→5s); mobile hero adds a ~1.9s hold before subhead/CTAs; the H1 BlurText
  reveal is skipped on mobile/reduced-motion; consent-banner gtag update is deferred
  via `requestIdleCallback` (a sync call cost 272ms INP); a pre-paint script adds
  `consent-open` to `<html>` (fixed CLS 0.58).
- Consent state: localStorage key `"afrishore-consent"` is shared by three inline
  scripts + ConsentBanner — never rename it in one place. Analytics only fire when
  `window.__afProd` (hostname matches afrishore.co) — expect zero events locally.
  gtag event inventory: `view_service`, `view_case_study`, `generate_lead`,
  `contact_intent`. Cloudflare beacon is cookieless and unconditional.
- Duplicated constants that must be edited in ALL copies: `PORT_HUB_SLUGS`
  (`src/lib/portLinks.ts` AND inline in `projects/[slug].astro`); BuiltLocal LTI
  reference date/days (frontmatter AND client script); the hand-counted
  "Project case studies on record: N" in `public/llms.txt`.
- Linkifier matcher regexes MUST carry `/g`, or the `while(re.exec())` loop hangs the
  build. FAQ answers are plain prose — `linkifyEntities` adds links at render; never
  hand-write `<a>`/markdown inside `faq.a` strings.
- Images: `<img>` with explicit width/height; heroes `loading="eager"
  fetchpriority="high"`, everything else lazy. Every optimised `.jpg` ships a sibling
  `.webp`; hero JPEGs on project/port pages also need `<name>-mobile.webp` (800w) —
  templates derive these paths by string replacement with **no existence check**, so a
  missing sibling silently breaks `<source>` and preloads. Masters are stored as
  `<name>.original.<ext>` and stripped at build; any other master naming deploys.
  Masters are also **gitignored** (`public/**/*.original.*`) — they exist only on
  this machine and are unrecoverable from git: never delete them, never
  `git clean -fdx` in public/, don't expect them in a fresh clone.
- Homepage sections are linked as `/#anchor` from everywhere (Navbar is the
  reference); never bare `#anchor` — it dead-ends on subpages. Footer's bare-fragment
  Company links are a known deviation, not a pattern to copy.
- Page-level meta goes through BaseLayout props, never hand-rolled tags:
  `preloadImage`/`preloadImageMobile` (LCP preloads; mobile variant gated ≤768px),
  `videoMeta` (og:video), `ogImageAlt`, `articleMeta`.
- New credentials go in `certifications.astro`'s data-driven `groups` array (one-line
  add, jurisdiction scope tag required). Cert logos render grayscale+inverted — any
  logo already containing white needs `logoLight: true` or invert turns it black.
- Videos: H.264 level ≤ 4.2 (a Level-6.2 export silently failed on all phones),
  `yuv420p`, `+faststart`, < 25 MB. New videos require a hand-edit to
  `public/video-sitemap.xml`.

### SEO / GEO
- WebSite.name stays plain "Afrishore" (controls the SERP site name). LocalBusiness
  names stay plain "Afrishore" (multi-location pattern; suffixes risk suspension).
- The Organization node carries anti-conflation fields (disambiguatingDescription,
  naics, isicV4, foundingLocation) separating Afrishore from the unrelated
  "Afrishore BPO" — never weaken them.
- Vessels/rigs in schema are `Thing` + `additionalType: …/Watercraft` — never
  `Vehicle`/`Product` (triggers Rich Results offer/review demands). Per-page Service
  JSON-LD (port/service templates) carries no Offer/price fields, deliberately. The
  four sitewide Service nodes in BaseLayout DO carry `hasOfferCatalog` with Offer
  entries (itemOffered only, never price) — also deliberate: don't strip it, don't
  add prices.
- `404.astro` deliberately has no canonical and is sitemap-excluded — never add one.
  A real 404 status depends on the Cloudflare Pages "Not Found handling" setting
  staying non-SPA; don't change it.
- robots.txt explicitly allows 12 AI crawlers (GPTBot, ClaudeBot, CCBot, PerplexityBot
  et al.). Cloudflare bot-fight is OFF on purpose. **Never "harden" against AI
  crawlers** — AI visibility is the strategy. Facts must render as plain HTML text
  (never image/PDF/JS-only) so the scraped tier can read them.
- New indexable pages need ≥ ~450 words of unique copy and ~20–30 inbound internal
  links, or they stall unindexed. There is no `/contact` page — it's a homepage
  anchor with a `_redirects` rule; don't create one.
- When a directory listing/membership goes live: update status in BOTH
  `docs/legitimacy-registrations.md` and `docs/geo-offsite-checklist.md`, and wire the
  profile URL into the right `sameAs` (per the rules above).

### Git
- Identity: **`Chris Maree <chris@afrishore.co>`** — but the repo-local config still
  says `emile@afrishore.co`, so ALWAYS commit with explicit flags:
  `git -c user.name="Chris Maree" -c user.email="chris@afrishore.co" commit …`
- **No Co-Authored-By trailer, ever** (this repo rule overrides the harness default).
- Subjects: imperative, sentence case, no trailing period, typically ~40–100 chars
  (median ~63) — specific beats short. Scope-prefix pattern welcome
  ("Service pages: …"). Pack in exact data (IDs, before→after values).
- Bodies on anything non-trivial: why-focused (lead with the problem or the report
  that triggered it), hard-wrapped ~72 chars, and note deliberate non-changes
  ("FAQ accordions intentionally excluded — …").
- Single linear branch `main`; small single-purpose commits (median 1 file, mean
  ~2.5); a push IS a production deploy — never push unverified work.

## 4. Named mistakes a weaker model makes here — and the rule that prevents each

1. **The em-dash slip** — writing `—` in copy. *Rule: after any copy edit, grep the
   touched file for `—`; the only permitted hits are the two pre-existing code
   comments in projects.ts — no em dash inside any published string.*
2. **The fabricated stat** — inventing tonnage/counts/dates to fill a strip or
   listing. *Rule: no verified source (Chris, clean monday board, projects.ts) → omit
   the number entirely.*
3. **The credential bleed** — B-BBEE on Namibian copy, PDP on SA copy, OPITO
   group-wide, "since 2010" on the Namibian entity. *Rule: check the jurisdiction
   table in §3 before naming any credential.*
4. **The FONASBA reflex** — claiming plausible-sounding memberships. *Rule: if it's
   not in BaseLayout `hasCredential`/`memberOf` or company-brain T1, it is not held.*
5. **The slashless link** — canonical or href without trailing slash. *Rule: every
   internal URL ends in `/`; verify canonicals in dist point at the served URL.*
6. **The stale-preview trap** — "verifying" in a preview of an old build. *Rule:
   `npm run build` immediately before any preview-based verification.*
7. **The audit-alarm chase** — "fixing" Ahrefs/Bing/third-party-report errors that
   aren't real. *Rule: reproduce live with `curl -I` first; unreproducible → report
   false positive, change nothing.*
8. **The schema-missing panic** — an AI auditor says "no structured data". *Rule:
   they can't read `<script>` JSON-LD. Prove state with `python3 json.loads` on the
   dist HTML before touching schema.*
9. **The entity-encoding miss** — grepping dist for a copy string containing `&` or
   `'`. *Rule: HTML text nodes encode them (`&amp;`, `&#39;`) so the body-copy
   occurrence is missed — while JSON-LD keeps them raw, so a hit you do get may be
   schema, not rendered copy. Grep entity-free fragments and confirm the match sits
   outside `<script>` blocks. Also: CSS is inlined — there is no `dist/_astro/*.css`;
   HTML comments match content greps.*
10. **The text-base misread** — deleting `text-base` as a "redundant font size" (it's
    the dark colour on CTAs) or adding it expecting 1rem. *Rule: §3 token table wins.*
11. **The LCP cleanup** — normalising hero `opacity: 0.01` to `opacity-0`, inlining
    the consent gtag call, un-deferring things. *Rule: comments that cite a metric
    (LCP/CLS/INP numbers) mark load-bearing hacks; leave them.*
12. **The invisible element** — adding `data-anim` markup with no tween. *Rule: every
    new `data-anim` value gets a matching tween in that component's script, or don't
    use the attribute.*
13. **The prose deletion** — cutting body copy to make a design cleaner. *Rule:
    collapse into the native `<details>` accordion; never remove crawlable text.*
14. **The wrong-namespace tag** — putting `offshore-supply-base` in
    `Project.serviceTypes`. *Rule: serviceTypes uses the §3 vocabulary; the page
    silently drops from the service page if you use the slug.*
15. **The array-order shuffle** — inserting a project near the top of projects.ts and
    silently changing service/subsea related-project picks. *Rule: append new entries
    in the file's existing position logic; check which pages' `slice(0,3)` change.*
16. **The slug rename** — "correcting" a slug to match a new title. *Rule: slugs are
    permanent; change titles freely, slugs never (without a redirect plan).*
17. **The missing webp sibling** — adding a hero `.jpg` alone. *Rule: `ls` for
    `.webp` and `-mobile.webp` siblings before committing any new hero.*
18. **The NAP drift** — editing an address/phone in one place. *Rule: BaseLayout is
    the source of truth; align ports.ts + Contact.astro in the same commit and flag
    the GBP copy for Chris.*
19. **The single-copy edit of a duplicated constant** — PORT_HUB_SLUGS, LTI
    date/days, llms.txt project count. *Rule: these exist in 2+ places by design;
    grep for the old value across the repo before declaring done.*
20. **The trailered commit** — Co-Authored-By lines or the wrong (repo-local) email.
    *Rule: the exact `git -c … commit` incantation in §3; zero trailers.*
21. **The Mozambique office** — implying presence there. *Rule: capability language
    only; no office page, no address, no local-content claims.*
22. **The licence-port address** — giving Saldanha/Lüderitz a street address or geo.
    *Rule: licence ports get no office block, ever.*
23. **The sample-size panic** — reacting to % swings in tiny consent-gated samples
    (GA4/Clarity <100 sessions), US GSC "impressions" (bot junk, CTR ≈ 0.3%),
    Cloudflare country requests (datacenter noise), or single-week Bing AI numbers.
    *Rule: state the denominator first; read trends across drops, not absolutes;
    port-code queries are informational zero-click — not a CTR failure.*
24. **The helpful hardening** — adding CSP, HSTS preload, CAA records, GTM, or
    blocking AI bots. *Rule: each of these is a documented deliberate omission
    (see `docs/security-hardening.md`, `public/_headers`); do not add. Same family:
    long immutable caching applies ONLY to hashed paths (`/_astro/*`, `/_image/*`) —
    `public/` assets keep default caching on purpose (filenames aren't fingerprinted);
    don't "fix" PSI cache warnings by extending it.*
25. **The /contact page** — creating `src/pages/contact.astro`. *Rule: `/contact`
    301s to `/#contact` in `_redirects`; a page there would be shadowed.*
26. **The infinite linkify loop** — adding a matcher regex without `/g`. *Rule: all
    matcher regexes are global; the exec loop hangs the build otherwise.*
27. **The GBP hallucination** — asserting what's in a Google Business Profile
    dashboard. *Rule: only the public panel is visible from here; ask Chris for
    back-end state instead of inferring it.*
28. **The hostile lookalike** — fetching or citing `afrishore.com`. *Rule: that
    domain is third-party-owned (BEC risk); official domains are only afrishore.co
    (canonical) and afrishore.co.za (301s in).*
29. **The asset cleanup** — deleting "unreferenced" files (`public/email/`, the
    IndexNow key txt, `*.original.*` masters). *Rule: several public/ files are
    load-bearing outside the repo or exist only on this disk; nothing in `public/`
    gets deleted without checking §2's inventory.*

## 5. Quality bar per deliverable (checkable, not adjectives)

**Any copy change**
- [ ] `grep '—'` on touched files returns nothing; en dashes spaced
- [ ] British spelling; no banned words (Pipeshield, Bi-Flex); no unverified numbers
- [ ] Reads as sentences, not keyword lists; matches the surrounding voice
- [ ] `npm run build` clean; rendered text confirmed in dist (entity-aware grep)

**New/edited project case study (projects.ts)**
- [ ] All required interface fields; slug kebab-case and final; `published: true`
- [ ] `serviceTypes` from the controlled vocabulary; `year` starts with 4-digit year
- [ ] `heroImage` exists + `.webp` + `-mobile.webp` siblings (verified with `ls`)
- [ ] `metaDescription` 140–160 chars measured on decoded text; metaTitle
      search-term-led "| Afrishore"
- [ ] stats[] only if verified (else omitted); legacy Wix URL added to `_redirects`
      if one exists; llms.txt project count bumped
- [ ] Build renders `/projects/<slug>/`; checked which service/subsea pages'
      related-3 changed

**Port/service data change (ports.ts / services.ts)**
- [ ] NAP untouched or aligned across BaseLayout + ports.ts + Contact.astro in the
      same commit (and GBP flagged to Chris)
- [ ] Scope items reuse canonical strings; licence ports gain no address/geo
- [ ] Lead is one declarative sentence; accordion prose intact

**Schema/SEO change (BaseLayout or pageSchema)**
- [ ] `python3` parses every JSON-LD block in built homepage + one affected page
- [ ] @graph shape preserved (Org + WebSite + 4 LB + 4 Service + optional extras)
- [ ] New sameAs URLs: dedicated profile pages only, canonical form, `curl` 200
      without redirect hop — except MarineTraffic profiles, which 403 ALL automated
      fetches (§6.8): verify in a browser / via Chris, and say which method was used
- [ ] No Vehicle/Product for equipment; no Offer/price on Services

**Template/component/layout change**
- [ ] Build clean; DOM order verified via `preview_eval` (fresh build)
- [ ] Both mobile and `lg:` values verified (compiled CSS for desktop)
- [ ] All prose still in DOM; reduced-motion branch present for any new animation;
      new `data-anim` has a tween
- [ ] No regressions to documented perf hacks (§4 #11)

**Image addition**
- [ ] Optimised `.jpg` roughly 100–350 KB (repo median ~200 KB; project heroes
      typically smaller) + `.webp` sibling (+ `-mobile.webp` if hero)
- [ ] Master stored as `*.original.*`; build log shows it stripped
- [ ] Long documentary alt text (subject + port + country + Afrishore context)

**Commit/deploy**
- [ ] `git -c user.name="Chris Maree" -c user.email="chris@afrishore.co"`; no trailer
- [ ] Subject imperative + specific; body explains why (non-trivial changes)
- [ ] Only intended files staged (`git add <paths>`, never `-A` blind); pushed;
      commit hash reported to Chris

**Analytics/report triage**
- [ ] Denominators and sampling caveats stated before any conclusion
- [ ] Known-noise dictionary applied (US GSC junk, bot countries, boolean scraper
      queries, port-code informational, AI-assistant query fragments)
- [ ] Deltas computed against the previous drop, not absolutes
- [ ] Any recommended action traced to a specific, reproducible signal

**External listing/directory copy**
- [ ] NAP character-for-character from BaseLayout for that office
- [ ] Jurisdiction-correct credentials only; entity founding year correct
- [ ] House style; field length limits respected; paste-ready
- [ ] Post-live plan stated: sameAs eligibility, docs status updates

## 6. When uncertain — exact escalation rules

1. **Missing fact** (number, client name, credential, date, address): ask Chris.
   Ship without the fact rather than approximate it. Never fill with a plausible value.
2. **Conflicting facts** (two addresses, two postcodes, doc vs doc): stop; present
   both values with sources; Chris picks canonical; then align every copy in one
   change and append a row to the company-brain correction log (append-only).
3. **Claim not clearly T1/verified-T2**: treat as T4 — withhold and flag. "Probably
   fine" is not a tier.
4. **External tool reports a site error**: reproduce live (`curl`, build, validator)
   before changing anything. Reproducible → fix with evidence. Not → report false
   positive and stop.
5. **Outward-facing actions** (submitting forms/listings, GBP edits, emails,
   anything on third-party services): draft paste-ready content; **Chris submits**.
   Never enter credentials, banking details, or make payments. Never fetch
   afrishore.com.
6. **Destructive or URL-affecting changes** (deleting pages, renaming slugs, editing
   `_redirects`/`robots.txt`/schema `@id`s): present the plan and blast radius first;
   proceed only on explicit go-ahead.
7. **Voice/pattern ambiguity in copy**: default to the established pattern (port-lead
   sentence, eyebrow h2s, canonical scope strings) and say which pattern you applied.
8. **Cannot verify a change** (preview flaky, external service blocked — MarineTraffic
   403s all automated fetches, GBP dashboards invisible): say so plainly and list
   what WAS verified. Never report unverified work as verified.
9. **Anything touching money, legal entities, or client confidentiality**: T4 by
   default; Chris decides.
