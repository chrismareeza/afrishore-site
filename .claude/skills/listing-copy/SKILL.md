---
name: listing-copy
description: Draft paste-ready copy for an external directory/citation listing (MarineTraffic, sayellow, Namport, Ruzave, Namibia Yellow Pages, GBP fields, Expro/Achilles vendor portals, trade directories). Pulls NAP verbatim from the schema source of truth, applies jurisdiction-correct credentials and house style, and defines the post-live wiring steps. Use whenever Chris needs listing/profile/registration copy — the off-site corroboration campaign is the core GEO strategy.
---

# External listing / citation copy

Every listing is a trust citation that AI engines and Google cross-reference. One
fabricated fact or drifted address damages the exact consistency the campaign exists
to build. Chris submits everything; you produce paste-ready blocks.

## 1. Establish the four parameters first

1. **Directory + field limits** — name, char limits per field, language (get them
   from Chris's screenshot/link; if a limit is unknown, write to ≤750 chars).
2. **Which office/port** — determines NAP and positioning angle.
3. **Which legal entity** (this decides credentials AND founding year):
   - SA-facing → *Afrishore Pty Ltd / Afrishore Shipping (Pty) Ltd*, since **2010**,
     B-BBEE Level 1, SARS AEO Level 2 – Security.
   - Namibia-facing → *Afrishore Logistics (Pty) Ltd*, founded **2022** (never
     "since 2010" for the entity; the group heritage may be phrased as "part of the
     Afrishore group, operating since 2010"), 51% Namibian-owned + **34% PDP**
     (30% is only the legal floor), OPITO = Walvis Bay rigging/lifting team only.
   - Group-wide always-safe: ISO 9001, POPIA, UN Global Compact, SAASOA, SAOGA.
   - **Never**: FONASBA, SAAFF, or anything not in BaseLayout
     `hasCredential`/`memberOf`, the llms.txt "Stateable certifications" line
     (which includes SARS AEO and OPITO), or company-brain Tier 1. (Note: the
     company-brain T4 "no AEO" line is stale — AEO was confirmed 2026-06-16 per
     `docs/operator-prequalification.md`; the newer confirmed record wins.)
4. **Category vocabulary of the directory** — Afrishore is a port/vessel AGENT
   ("Shipping company/service", "Port Agents"), never "Port operating company"
   (that's a terminal operator — a known miscategorisation to avoid/fix).

## 2. NAP — copy, never compose

Source of truth: the LocalBusiness nodes in `src/layouts/BaseLayout.astro`. Copy
character-for-character (address, postcode, phone format). Constraints that are
correct as-is: Walvis Bay = "Oil & Gas Section, Port of Walvis Bay" (no civic street
number — do not invent one); Durban postcode 4004; each office lists its own local
phone. Website field: **https://www.afrishore.co** directly (never afrishore.co.za,
never the bare apex) — ideally deep-linked to the matching `/ports/<slug>/` page.
Saldanha/Lüderitz (licence-only): area-served listings, suburb/city only — Saldanha
attended from the **Cape Town office**, Lüderitz coordinated from the **Walvis Bay
base** (match the wording in `src/data/ports.ts`) — no street address ever.

## 3. Write the copy

- House style: en dashes only, British spelling, natural declarative sentences.
- Open with the licence/capability statement for that port ("licensed vessel and rig
  agent at the Port of X …"), then services (clearance, husbandry, crew, supply base,
  project cargo as relevant), then group + credentials (jurisdiction-correct), close
  with the positioning line ("Local solutions for global clients" family).
- Port-first, not brand-first, when the directory is port-scoped (corroborates the
  per-port fan-out queries).
- Real, verified facts only. No invented stats, tonnage, client names (direct clients
  = only those in `public/llms.txt`), or prominence claims.
- Respect llms.txt exclusions: no launch/boat hire, crew-manning agency, or P&I/H&M
  correspondent claims. Mozambique = capability wording only.
- Produce every field the form needs as separate labelled paste blocks (tagline,
  description, categories, services list, contact fields).

## 4. Post-live wiring (state this plan with the copy)

When Chris confirms the listing is live:
1. **sameAs eligibility** — dedicated profile page for one office → add to that
   LocalBusiness `sameAs` in BaseLayout (canonical URL form: MarineTraffic bare-ID
   `…/profile/<ID>`, Maps full `/maps/place/…`, no tracking params, `curl` 200).
   Group-level profile → Organization `sameAs`. LIST pages (Namport directory,
   shipchandlers) → backlink only, NOT sameAs.
2. **Docs** — tick the row in `docs/legitimacy-registrations.md` and
   `docs/geo-offsite-checklist.md`.
3. **Verify NAP as published** — if the directory typo'd or shortened anything, flag
   the exact discrepancy to Chris for correction (NAP consistency is the point).
4. Ship the schema change via the **ship** skill.

## 5. Boundaries

Draft only — Chris submits forms and owns accounts. Never enter credentials or
banking details. MarineTraffic blocks automated fetches (403) — ask Chris for profile
URLs/screenshots rather than trying to scrape. GBP back-ends are invisible from here —
ask what the About tab shows rather than asserting fields are missing.
