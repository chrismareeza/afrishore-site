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
| **Walvis Bay** | ✅ | → "Afrishore" | geo ✅ · sameAs ✅ · Maps link ✅ | **GBP DONE 2026-05-19.** Site bound; address unchanged — complete. |
| **Cape Town** | ✅ | → "Afrishore" | geo ✅ · sameAs ✅ · Maps link ✅ · phone ✅ | **GBP DONE 2026-05-19.** Site bound; address unchanged; phone `+27 87 092 0949` matched — complete. |
| **Mossel Bay** | ✅ | → "Afrishore" | geo ✅ · sameAs ✅ · Maps link ✅ | **GBP DONE & fully re-bound 2026-05-19.** Post-move pin `-34.1818225, 22.14746` (58 Bland St); sameAs/Maps → `maps.app.goo.gl/LDPwrZL4eLqARBwNA`. Complete. |
| **Durban** | ✅ created | "Afrishore" | geo ✅ · sameAs ✅ · Maps link ✅ | **GBP DONE 2026-05-19 — fully bound.** geo `-29.9181951, 30.9365181` (Plus Code 3WHP+RV Durban), sameAs + port-page Maps link → `share.google/xVkGsN7QUKWdDGqFN`. Complete. |

> **GBP cards: ALL FOUR ACTIONED (2026-05-19)** — names → "Afrishore",
> categories/description/services/website/phones set per this plan.
> Site "Our Offices" section + per-office schema phones aligned.
> **Only remaining step:** the client sends the **Mossel Bay (new
> pin, post-move)** and **Durban (new listing)** Maps short links →
> site geo/`sameAs`/"View on Google Maps" re-bound + redeployed.
> Cape Town & Walvis Bay are fully complete (already bound, address
> unchanged).

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
     + services**: explicitly state "vessel & rig agency, port
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
   "best/#1" superlatives, no HTML** — Google rejects those).
   **Canonical base = the FINAL Mossel Bay description in §3**
   (client-approved 2026-05-19, 742/750). Use it on every branch,
   swapping only the marked clauses:
   - **Location clause** ("…licensed vessel and rig agent at the Port
     of Mossel Bay, South Africa.") becomes:
     - **Walvis Bay:** "…at the Port of Walvis Bay, Namibia, embedded
       in the port's Oil & Gas Section." (add **FPSOs** to the
       vessel list; lead "Operating across **Namibia, South Africa**
       and Mozambique").
     - **Cape Town:** "…at the Port of Cape Town, South Africa, with
       an office in Woodstock."
     - **Durban:** "…at the Port of Durban, South Africa, with an
       office in Yellowwood Park."
   - **Block 11B/12B sentence** ("Mossel Bay has hosted the shore
     base for South Africa's Block 11B/12B (Brulpadda and Luiperd)
     gas play.") is **Mossel-Bay-specific** — drop it on the other
     three branches (re-check the 750-char budget after the swap).
   - Keep everything else identical so the brand reads consistently
     across all four listings.
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

## 1. Walvis Bay  *(existing GBP — DONE 2026-05-19)*

- **STATUS: COMPLETE.** GBP renamed to "Afrishore"; categories,
  description, services, website set. Address unchanged from the site
  and site already bound (geo/sameAs/Maps link), phone is the local
  Namibian number `+264 81 767 3069` (already on site + #walvis-bay
  schema). No further action either side.
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
- **Address — CONFIRMED (2026-05-19):** GBP = site, exact match:
  `Unit 213, Buchanan Square, Woodstock, Cape Town, Western Cape, South Africa`.
  No change either side.
- **Phone — RESOLVED (2026-05-19):** `+27 87 092 0949` (Cape Town
  local number). Site updated to match — `ports.ts` Cape Town office
  `phoneDisplay`/`phoneE164` and the `#cape-town` LocalBusiness
  `telephone` in BaseLayout now carry this number. GBP and site
  identical.
- **Categories:** per rule 3 (primary `Shipping service`; no "Ship Agent" category exists).
- **Website field:** `https://www.afrishore.co/ports/cape-town`
- **Description — derived from canonical base (Cape Town clause,
  Block 11B/12B sentence dropped; 666/750, ready to paste):**
  > Afrishore is an integrated marine logistics company and licensed
  > vessel and rig agent at the Port of Cape Town, South Africa, with
  > an office in Woodstock. Services include port agency and
  > clearance, customs and immigration, husbandry, crew changes and
  > visa support, offshore supply base operations, rigging, project
  > and abnormal cargo, bunkering, procurement, provisions supply and
  > freight forwarding for rigs, drillships, OSVs, PSVs, AHTS and
  > tankers. Operating across South Africa, Namibia and Mozambique
  > since 2010 and ISO 9001 certified, Afrishore is one accountable
  > partner from pre-arrival to demobilisation for project, transit
  > and discharge vessels and rigs.
- Site already bound (geo, `sameAs`, Maps link) — address unchanged,
  so no re-bind needed.

## 3. Mossel Bay  *(existing GBP — edit; HQ)*

- **Name:** rename to `Afrishore` (drop "Head Office" — it's a
  descriptor, highest revert risk, zero SEO value). Site already says
  "Afrishore".
- **Address — RESOLVED (2026-05-19):** the move to **58 Bland Street,
  Mossel Bay, Western Cape, South Africa** has happened early
  (user-confirmed they can verify there now). Set the GBP address to
  **58 Bland Street** immediately and **re-verify** (postcard/phone/
  video). The **site already shows 58 Bland Street**, so once the GBP
  is updated the addresses are in lockstep — the temporary mismatch is
  closed. Do **not** change the site.
- **Phone — RESOLVED:** `+27 44 691 3218` (central number, same as the
  site). No change either side.
- **✅ Re-bind COMPLETE (2026-05-19):** post-move pin resolved from
  `maps.app.goo.gl/LDPwrZL4eLqARBwNA` →
  **`-34.1818225, 22.14746`** (authoritative `!3d!4d` place coord;
  the old `-34.1841336, 22.1474263` pin and old Maps link
  `oZZ7X5m96RPtTNUA6` are retired). Site geo + `sameAs` + the
  "View on Google Maps" link are now re-pointed to the new pin and
  deployed. (Note: a first attempt sent `-34.0456,18.97` — that was
  a zoomed-out viewport centre, not the pin; flagged and corrected.)
- **Categories:** per rule 3 (primary `Shipping service`; no "Ship Agent" category exists).
- **Website field:** `https://www.afrishore.co/ports/mossel-bay`
- **Description — FINAL (RESOLVED 2026-05-19, 742/750 chars, verbatim):**
  > Afrishore is an integrated marine logistics company and licensed
  > vessel and rig agent at the Port of Mossel Bay, South Africa.
  > Services include port agency and clearance, customs and
  > immigration, husbandry, crew changes and visa support, offshore
  > supply base operations, rigging, project and abnormal cargo,
  > bunkering, procurement, provisions supply and freight forwarding
  > for rigs, drillships, OSVs, PSVs, AHTS and tankers. Mossel Bay
  > has hosted the shore base for South Africa's Block 11B/12B
  > (Brulpadda and Luiperd) gas play. Operating across South Africa,
  > Namibia and Mozambique since 2010 and ISO 9001 certified,
  > Afrishore is one accountable partner from pre-arrival to
  > demobilisation for project, transit and discharge vessels and
  > rigs.
  >
  > This is the new canonical description base — see rule 8 for the
  > per-branch clause swaps for Walvis Bay / Cape Town / Durban.
- **Shore base = HISTORICAL (RESOLVED 2026-05-19):** the Block
  11B/12B (Brulpadda/Luiperd) gas-play shore base is **no longer
  operating**. GBP description already uses past tense ("has
  hosted"); the **site** Mossel Bay copy (metaDescription, geoSub,
  intro, photo alt/caption) has been aligned to past tense for the
  shore base while keeping Afrishore's ongoing Mossel Bay agency,
  licence and head-office presence in present tense. Site ↔ GBP now
  tell the same (historical) shore-base story.

## 4. Durban  *(no GBP — create from scratch)*

Create at business.google.com → "Add business". Enter:

- **Name:** `Afrishore` (same as every branch; the address gives the
  city). Site already says "Afrishore".
- **Address:** `33 Wagtail Walk, Yellowwood Park, Durban, KwaZulu-Natal, South Africa`
- **Phone — RESOLVED (2026-05-19):** `+27 79 695 9816` (Durban local
  number). Site matched — `ports.ts` #durban office
  `phoneDisplay`/`phoneE164` and the `#durban` LocalBusiness
  `telephone` in BaseLayout now carry this number.
- **Categories:** per rule 3 **CONFIRMED SET** — primary
  `Shipping service`; secondaries `Logistics service`,
  `Customs broker`, `Freight Forwarding Service`, `Visa Agent`,
  `Port operating company`. (Identical to the other 3 GBPs. No "Ship
  Agent" category exists in GBP.)
- **Website:** `https://www.afrishore.co/ports/durban`
- **Service area:** Port of Durban + KwaZulu-Natal coast
- **Description — derived from canonical base (Durban clause, Block
  11B/12B sentence dropped; 669/750, ready to paste):**
  > Afrishore is an integrated marine logistics company and licensed
  > vessel and rig agent at the Port of Durban, South Africa, with an
  > office in Yellowwood Park. Services include port agency and
  > clearance, customs and immigration, husbandry, crew changes and
  > visa support, offshore supply base operations, rigging, project
  > and abnormal cargo, bunkering, procurement, provisions supply and
  > freight forwarding for rigs, drillships, OSVs, PSVs, AHTS and
  > tankers. Operating across South Africa, Namibia and Mozambique
  > since 2010 and ISO 9001 certified, Afrishore is one accountable
  > partner from pre-arrival to demobilisation for project, transit
  > and discharge vessels and rigs.
- **Services:** the same 14-item set as the other 3 GBPs (rule 9).
- **Photos & hours:** add on creation.
- **Verify** (postcard/phone/video). ✅ DONE.
- **STATUS (2026-05-19): GBP LIVE, partially bound.** Client sent
  `https://share.google/xVkGsN7QUKWdDGqFN`. Bound: `#durban`
  `sameAs` + the Durban port-page "View on Google Maps" link
  (`port.office.mapsUrl`) → that share link. **Still pending:** the
  `#durban` schema `geo` is the old placeholder
  (`-29.9249, 30.9389`). The share.google link is JS-rendered, so
  the exact pin lat/lng can't be auto-extracted (curl/WebFetch fail;
  browser ext was offline). **ACTION: client to send exact pin
  coordinates** — open the listing in Google Maps, the address-bar
  URL contains `@-29.xxxxxx,30.xxxxxx`, or right-click the pin →
  the lat,lng appears at the top of the menu — then geo is corrected
  and redeployed.

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
   - **Mossel Bay — RESOLVED (2026-05-19):** `+27 44 691 3218` (central
     SA number, same as the site).
   - **Cape Town — RESOLVED (2026-05-19):** `+27 87 092 0949` (Cape
     Town local number; site matched in ports.ts + #cape-town schema).
   - **Walvis Bay:** local Namibian number `+264 81 767 3069`.
   - **Durban — RESOLVED (2026-05-19):** `+27 79 695 9816` (Durban
     local number; site matched in ports.ts + #durban schema).
   - **All four offices now resolved.** Central `+27 44 691 3218`
     remains the site-wide default/fallback for any non-office page.
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
