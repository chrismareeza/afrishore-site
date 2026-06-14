# Afrishore — GEO / AI-Search Off-Site Action Plan

Source: synthesis of three Parallel Deep Research runs (GEO/AI-visibility,
competitor authority, demand-side keyword universe), **verified against the
codebase on 2026-06-14**. Many of the reports' on-site recommendations were
false negatives — their crawler can't read `<script>` JSON-LD, guessed wrong
URLs, and didn't crawl deep (the same failure as the ChatGPT/Grok/Gemini
"schema audits"). This doc keeps only the genuinely-verified gaps.

The real finding: **on-page is largely done; the gap is off-site
corroboration.** AI engines won't cite Afrishore for "vessel agent Walvis Bay"
because it isn't in the third-party sources that corroborate it (e.g. OLS wins
that query because it's on the Namport directory + Tracxn + parent site; we're
on none). On-site SEO is a prerequisite for AI citation — ChatGPT mirrors
Google's top-10 ~90% of the time (Whitehat SEO, 118K answers) — and we already
hold that ground. The lever now is off-site.

---

## ✅ Already shipped — do NOT re-do (reports wrongly flagged these as missing)

- [x] **Port-specific pages** — 6 live: `/ports/{walvis-bay, luderitz, cape-town, saldanha, mossel-bay, durban}/`, linked in footer + map, in sitemap, indexed.
- [x] **JSON-LD schema** — full `@graph`: Organization, 4× LocalBusiness (per office, with GeoCoordinates), 8× Service, FAQPage, Article, BreadcrumbList, ISO 9001 credential. Validated 10/10 on Google Rich Results.
- [x] **llms.txt** — `public/llms.txt` (10.7 KB).
- [x] **AI crawlers allowed** — robots.txt explicitly allows GPTBot, ClaudeBot, PerplexityBot, OAI-SearchBot, Google-Extended, CCBot, etc.
- [x] **SAASOA** — `memberOf` in schema; membership confirmed.
- [x] **MarineTraffic** — listed (as Afrishore Shipping Pty Ltd, Cape Town).
- [x] **Crew & visa page** — live at `/services/crew-visa-services/` (report guessed the wrong URL).
- [x] **Agency acronyms on-page** — OPA, OHA, CNA, PDA/DA added to the vessel & rig page (2026-06-14).

---

## 🔴 Off-site tasks — OWNER: Afrishore (highest leverage; I can't do these)

Priority order. Tick as completed; keep NAP (Name, Address, Phone) **identical**
to the site on every listing.

### Tier 1 — corroboration foundation (do first)
- [ ] **Namport "Ship & Cargo Clearing Agencies" directory** — apply for listing. Single biggest lever for "vessel agent Walvis Bay"; competitors (GAC, Inchcape, Manica/OLS) are all on it. → namport.com.na
- [ ] **SAASOA public members directory** — confirm Afrishore actually appears on the crawlable members list (membership ≠ a listing). → saasoa.com
- [ ] **Enrich MarineTraffic profile** — currently Cape Town only; add ALL serviced ports + full service lines + contact details.
- [ ] **Google Business Profile ×4 offices** — Walvis Bay, Mossel Bay, Cape Town, Durban. Categories, services, photos, posts. (Highest *local* lever; still untouched.)

### Tier 2 — directory breadth
- [ ] **Rigzone company directory** — under marine logistics / vessel agency. → rigzone.com/directory
- [ ] **The Shipmarket directory** — comprehensive profile by country + serviced port. → theshipmarket.com
- [ ] **ShipServ** — register as a supplier (marine eProcurement search). → shipserv.com
- [ ] **Tracxn / Crunchbase** — ensure complete, accurate profiles (founded 2010; Port Agents / Marine Logistics; SA + Namibia + Mozambique).

### Tier 3 — association authority (ties to the subsea/offshore push)
- [ ] **IMCA membership** — offshore marine-contractor directory; directly relevant to supply-base + the subsea protection pages. → imca-int.com
- [ ] **BIMCO membership** — broader international corroboration (optional). → bimco.org

### Ongoing — freshness & PR
- [ ] Pitch 2–3 maritime trade outlets when a campaign/base/cert milestone lands (offshore-energy.biz, Rigzone News, Maritime Review Africa). Fresh coverage feeds Perplexity's recency bias.

---

## 🟠 On-site — OWNER: Claude/Chris (verified-real gaps)

- [x] **Buyer-search acronyms** — OPA/OHA/CNA/PDA/DA on vessel & rig page. (done 2026-06-14)
- [ ] **Mozambique capability page** — honest positioning: proven project delivery, NO physical presence yet, partner-agent model, actively assessing a base. Needs real Mozambican project facts from Chris before build. Open-field query ("crew change Mozambique" has no dominant agent).
- [ ] **Insights / news section** (decision pending) — addresses the only genuine content-engine gap; biggest lift. Feeds freshness + "Hot Port News"-style authority. Discuss cadence/ownership before committing.

---

## ⛔ Guardrails — do not let the reports tempt these

- **Stateable credentials (confirmed 2026-06-14):** ISO 9001, POPIA, **B-BBEE Level 1 (SA)**, and **51% Namibian + 30% PDP (Namibia)**. Do **not** claim FONASBA / SAAFF / AEO (not held).
- **No original "port statistics" content** unless backed by real figures Chris supplies — no fabricated clearance/turnaround times.
- **Wikipedia** — deprioritised: strict notability + conflict-of-interest rules, low control. Not worth chasing now.
- **Do not disavow** the ~45 spam PBN backlinks — nofollow, harmless.
