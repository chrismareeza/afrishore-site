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
3. **Primary category:** `Ship Agent`. **Secondary categories:**
   `Logistics Service`, `Freight Forwarding Service`, `Marine Services`
   (add `Customs Broker` if offered locally).
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
- **Primary category:** Ship Agent. Secondaries per rule 3.
- **Website field:** `https://www.afrishore.co/ports/walvis-bay`
- Site already bound (geo corrected to your pin, `sameAs`, Maps link).

## 2. Cape Town  *(existing GBP — edit)*

- **Name:** set to `Afrishore` (the trading name — drop "Cape Town"
  from the listing name; the address carries the city). Site already
  says "Afrishore".
- **Address:** confirm GBP = site:
  `Unit 213, Buchanan Square, Woodstock, Cape Town, Western Cape, South Africa`.
- **Primary category:** Ship Agent. Secondaries per rule 3.
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
- **Primary category:** Ship Agent. Secondaries per rule 3.
- **Website field:** `https://www.afrishore.co/ports/mossel-bay`
- Site already bound (geo, `sameAs`, Maps link).

## 4. Durban  *(no GBP — create from scratch)*

Create at business.google.com → "Add business". Enter:

- **Name:** `Afrishore` (same as every branch; the address gives the
  city). Site already says "Afrishore".
- **Address:** `33 Wagtail Walk, Yellowwood Park, Durban, KwaZulu-Natal, South Africa`
- **Phone:** `+27 44 691 3218` (or a Durban local number if you have one)
- **Primary category:** Ship Agent · **Secondaries:** Logistics Service,
  Freight Forwarding Service, Marine Services
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
