# Afrishore — Google Business Profile Action Plan

**Goal:** rank in the local pack for "ship agent / ship agency / vessel
agent [port]" by making every Google Business Profile (GBP) *exactly*
consistent with the website and reciprocally linked to its matching
port page.

**Why this matters:** for "ship agent [city]" the map/local pack is
decided almost entirely off-site — GBP completeness, **NAP consistency**
(Name, Address, Phone identical everywhere), categories, reviews and
proximity. The website half is now built; this document is the GBP half,
which only you can action (you own the listings).

**Source of truth = the website.** The site's schema/NAP has been set;
make each GBP match it character-for-character. Where a value is still
open, it's flagged below — decide it, then keep GBP **and** site in
lockstep.

---

## Status at a glance

| Office | GBP exists? | Listed name now | Site-side binding done | Your actions |
|---|---|---|---|---|
| **Walvis Bay** | ✅ | "Afrishore Logistics Base" | geo ✅ · sameAs ✅ · Maps link ✅ | Rename → **"Afrishore"**, set website, confirm address/phone/categories |
| **Cape Town** | ✅ | "Afrishore Cape Town" | geo ✅ · sameAs ✅ · Maps link ✅ | Rename → **"Afrishore"**, set website, confirm address/phone/categories |
| **Mossel Bay** | ✅ | "Afrishore Head Office" | geo ✅ · sameAs ✅ · Maps link ✅ | Rename → **"Afrishore"**, **address → 58 Bland St by 1 Aug**, set website |
| **Durban** | ❌ none | — | done when GBP exists | **Create from scratch**, then send me the Maps link |

"Site-side binding done" = the LocalBusiness schema geo now matches the
real GBP pin, `sameAs` points at the GBP, and the port page shows a
"View on Google Maps" link.

---

## Cross-cutting rules (apply to every listing)

1. **Business name = `Afrishore` on EVERY listing.** All branches in
   SA and Namibia trade as "Afrishore"; the registration entities
   (Afrishore Shipping Pty Ltd / Afrishore Pty Ltd in SA; Afrishore
   Logistics Pty Ltd in Namibia) are **not** the public listing name.
   This is the Google-correct multi-location pattern: one brand name on
   every location, distinguished by the **address** — fully compliant,
   no suspension risk, and Google still ranks each location per city by
   proximity + the matching port page. The site's `LocalBusiness`
   `name` and every port page now show exactly **"Afrishore"**;
   registration entities live in schema as `legalName` only
   (Organization = "Afrishore Pty Ltd"; Walvis Bay = "Afrishore
   Logistics Pty Ltd").
   - **Do NOT** put the city or a keyword in the GBP name ("Afrishore
     Cape Town", "Afrishore Head Office", "Afrishore Ship Agent …") —
     it breaches Google policy and competitors can get it
     reverted/suspended. The city SEO is already captured by the
     address, service area, and the `/ports/<city>` page.
2. **Website field → the matching port page**, not the homepage:
   - Walvis Bay → `https://www.afrishore.co/ports/walvis-bay`
   - Cape Town → `https://www.afrishore.co/ports/cape-town`
   - Mossel Bay → `https://www.afrishore.co/ports/mossel-bay`
   - Durban → `https://www.afrishore.co/ports/durban`
3. **Categories.** GBP has **no "Ship Agent / Ship's Agency"
   category** (known gap for maritime port agencies). Use the closest
   available:
   - **Primary:** `Shipping service` (closest defensible fit; better
     than "Logistics service" for ship/vessel-agent intent).
   - **Secondary** (add all that exist): `Logistics service`,
     `Freight forwarding service`, `Customs broker`, `Transportation
     service`, `Marine services`.
   - **Never** use `Vehicle shipping agent` — that's auto-transport,
     not a maritime ship's agent.
   - The category box is search-as-you-type; if anything more specific
     than "Shipping service" surfaces for "marine"/"maritime", prefer
     it. Same primary + secondaries on all four GBPs.
   - Compensate for the missing category in the **business description
     + services**: explicitly state "ship, vessel & rig agency, port
     agency, port clearance, husbandry, offshore supply base, customs &
     freight forwarding" — Google reads these as relevance signals.
   - **CONFIRMED SET (2026-05-19) — apply identically to all 4 GBPs:**
     primary `Shipping service`; secondaries `Logistics service`,
     `Customs broker`, `Freight Forwarding Service`, `Visa Agent`,
     `Port operating company` (the last as the only proxy for the
     offshore supply-base / base-operator role).
   - **Deliberately NOT used** (available but wrong-intent/inaccurate):
     `Fuel supplier` (we arrange bunkering as agent, not a fuel
     retailer), `Fixed-base operator` (aviation FBO term),
     `Immigration & Naturalisation Service` (implies citizenship work
     we don't do — `Visa Agent` covers crew visas accurately).
4. **Phone:** the site uses `+27 44 691 3218` everywhere. Decide whether
   Walvis Bay (Namibia) should instead list a **local Namibian number**
   — a local number is a stronger local-trust signal. Whatever you
   choose, it must be identical on the GBP and the site (tell me to
   update the site if it changes).
5. **Service area:** set each profile's service area to its port + the
   surrounding region; keep the storefront address as the office.
6. **Reviews:** ask 2–3 clients per office for a Google review — after
   NAP/categories, reviews + proximity are the biggest local-pack
   levers. None of the competitors (RS Agency, Woker/WFS, Trade Ocean)
   lean on this; it's open ground.
7. **Photos:** add real photos to each profile (exterior/office, quay,
   operations, team). You have plenty from the case studies.
8. **Business description** (≤750 chars; **no URLs, no phone, no
   "best/#1" superlatives, no HTML** — Google rejects those). Same
   text per branch, swapping only the location clause:
   - **Walvis Bay:** *Afrishore is an integrated marine logistics
     company and licensed ship, vessel and rig agent at the Port of
     Walvis Bay, Namibia, embedded in the port's Oil & Gas Section.
     Services include port agency and clearance, customs and
     immigration, husbandry, crew changes and visa support, offshore
     supply base operations, rigging, project and abnormal cargo,
     bunkering, and freight forwarding for rigs, drillships, OSVs,
     PSVs, AHTS, tankers and FPSOs. Operating across Namibia, South
     Africa and Mozambique since 2010 and ISO 9001 certified,
     Afrishore supports deepwater exploration in the Orange Basin and
     the wider Sub-Saharan offshore sector — one accountable partner
     from pre-arrival to demobilisation.*
   - **Cape Town:** swap clause → "…at the Port of Cape Town, South
     Africa, with an office in Woodstock…" and "across South Africa,
     Namibia and Mozambique".
   - **Mossel Bay:** "…at the Port of Mossel Bay, South Africa (head
     office)…".
   - **Durban:** "…at the Port of Durban, South Africa, with an office
     in Yellowwood Park…".
9. **Services field** (high value — carries the terms the category
   cannot): Port agency · Port & customs clearance · Immigration &
   crew change · Husbandry · Offshore supply base · Rigging, cranage &
   project cargo · Bunkering · Freight forwarding · Visa & work-permit
   support · Dry docking & repairs coordination ·
   Mobilisation/demobilisation · OPL (Off Port Limits) logistics ·
   Procurement · Technical support.
   - **Where/how:** Edit profile → **Services** tab. Services sit
     **under your categories** (not a separate list). Add each as a
     **custom service** (no maritime presets exist) under the most
     fitting category — most under `Shipping service`; customs under
     `Customs broker`; freight under `Freight forwarding service`.
     Exact mapping isn't critical; being listed is.
   - Give **each custom service a ~1-line description** (real relevance
     lever the category can't provide), e.g. *OPL logistics* → "Crew
     changes, spares and supply delivered to vessels at anchorage off
     port limits." Same set on all four GBPs.
10. **"More" attributes — skip ALL of them.** Accessibility,
   **Amenities**, Parking, **Place-page attributes**, Service options
   and Planning are consumer-venue attributes — N/A to a B2B port
   agency inside a secured port (no walk-in public) and zero ranking
   value; forcing them looks odd. "From the business" only if a
   genuine ownership-identity tag genuinely applies. Put the effort
   into Category + Services + Description + Photos + Reviews instead.

---

## 1. Walvis Bay  *(existing GBP — edit)*

- **Rename to:** `Afrishore` (trading name — same as all branches).
  "Afrishore Logistics Pty Ltd" is the Namibian registration entity and
  is held in schema as `legalName`, NOT the GBP name. Site already says
  "Afrishore".
- **Address:** confirm the GBP shows the same as the site —
  `Oil & Gas Section, Port of Walvis Bay, Walvis Bay, Namibia`. If the
  real address differs, send me the correct one (I'll update the site to
  match — do **not** leave them different).
- **Phone:** see rule 4 (SA number vs local Namibian number — decide).
- **Categories:** per rule 3 (primary `Shipping service`; no "Ship Agent" category exists).
- **Website field:** `https://www.afrishore.co/ports/walvis-bay`
- Site already bound (geo corrected to your pin, `sameAs`, Maps link).

## 2. Cape Town  *(existing GBP — edit)*

- **Name:** set to `Afrishore` (the trading name — drop "Cape Town"
  from the listing name; the address carries the city). Site already
  says "Afrishore".
- **Address:** confirm GBP = site:
  `Unit 213, Buchanan Square, Woodstock, Cape Town, Western Cape, South Africa`.
- **Categories:** per rule 3 (primary `Shipping service`; no "Ship Agent" category exists).
- **Website field:** `https://www.afrishore.co/ports/cape-town`
- Site already bound (geo, `sameAs`, Maps link).

## 3. Mossel Bay  *(existing GBP — edit; HQ)*

- **Name:** rename to `Afrishore` (drop "Head Office" — it's a
  descriptor, highest revert risk, zero SEO value). Site already says
  "Afrishore".
- **Address — IMPORTANT:** office moves to **58 Bland Street, Mossel
  Bay, Western Cape, South Africa by 1 August**. The **site already
  shows 58 Bland Street**. Update the GBP address to 58 Bland Street
  **on/around 1 August** (when you physically move / can receive the
  Google verification postcard there). Until then there is a deliberate,
  temporary GBP↔site address mismatch — that is acceptable short-term;
  do **not** change the site back.
- **Categories:** per rule 3 (primary `Shipping service`; no "Ship Agent" category exists).
- **Website field:** `https://www.afrishore.co/ports/mossel-bay`
- Site already bound (geo, `sameAs`, Maps link).

## 4. Durban  *(no GBP — create from scratch)*

Create at business.google.com → "Add business". Enter:

- **Name:** `Afrishore` (same as every branch; the address gives the
  city). Site already says "Afrishore".
- **Address:** `33 Wagtail Walk, Yellowwood Park, Durban, KwaZulu-Natal, South Africa`
- **Phone:** `+27 44 691 3218` (or a Durban local number if you have one)
- **Categories:** per rule 3 — primary `Shipping service`; secondaries
  `Logistics service`, `Freight forwarding service`, `Customs broker`,
  `Transportation service`, `Marine services`. (No "Ship Agent"
  category exists in GBP.)
- **Website:** `https://www.afrishore.co/ports/durban`
- **Service area:** Port of Durban + KwaZulu-Natal coast
- **Description:** licensed ship, vessel & rig agent at the Port of
  Durban — port clearance, immigration, husbandry, dry docking, project
  cargo. Part of the Afrishore licensed network across SA, Namibia &
  Mozambique.
- **Photos & hours:** add on creation.
- **Verify** (postcard/phone/video).
- **Then send me the Maps short link** — I'll bind the site (correct
  the geo to the real pin + add `sameAs` + the "View on Google Maps"
  link) exactly as done for the other three.

---

## Open decisions (need your call)

1. **GBP names — RESOLVED.** Every listing = **"Afrishore"** (the
   common trading name, SA + Namibia). Site schema + all port pages
   already say exactly "Afrishore". Registration entities are
   `legalName` only (Organization = "Afrishore Pty Ltd"; Walvis Bay =
   "Afrishore Logistics Pty Ltd"). *Optional:* if you want the SA
   entities (Afrishore Shipping Pty Ltd / Afrishore Pty Ltd) mapped to
   specific branches as per-location `legalName`, send the entity→branch
   map and I'll add it (kept separate from the public `name`).
2. **Phone strategy:** single SA number everywhere, or local numbers per
   country/city (recommended for Walvis Bay at least). Tell me the final
   numbers per office and I'll match the site.
3. **Exact street addresses & categories:** confirm each against the
   GBP/your records so site and GBP are identical.

## Feedback loop

After you action a GBP (or create the Durban one), send me the resolved
**Maps short link** and any name/address/phone you finalised. I will:
- correct the site's LocalBusiness geo to the real pin,
- add/update `sameAs` to the listing,
- align the on-page NAP + business name,
- redeploy.

Keeping the two sides in lockstep is the whole game — inconsistent NAP
actively *suppresses* local ranking.
