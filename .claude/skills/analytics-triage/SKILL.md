---
name: analytics-triage
description: Triage an Afrishore analytics drop (GSC afrishore-N export folders, Bing Webmaster/AI Performance CSVs, Cloudflare PDFs, GA4/Clarity screenshots). Separates signal from noise using the project's calibration rules and produces the weekly delta read with a ranked opportunity list. Use whenever Chris drops analytics files or screenshots.
---

# Analytics-drop triage

Chris drops a bundle roughly weekly. The job is ALWAYS: calibrate → delta → signal →
noise → opportunities → one recommended action. Never re-analyse from scratch as if
the history doesn't exist, and never react to a number before stating its denominator.

## 1. Read everything first

Typical bundle: `~/Downloads/afrishore-N/` (GSC: Chart, Countries, Devices, Filters,
Pages, Queries, Search appearance CSVs), plus any of: Bing
`SearchPerformanceOverview`/`AIPerformanceOverviewStats`/`AIPageStatsReport` CSVs,
Cloudflare Analytics PDF, `all_sites_for_account_*.csv`, Clarity/GA4/Semrush/Ahrefs
screenshots. Read every attached file before writing a word.

## 2. Calibration discipline (state BEFORE conclusions)

- GSC `Filters.csv` window is usually "Last 3 months" — totals are cumulative;
  week-over-week movement must be computed from `Chart.csv` daily rows.
- GA4/Clarity are consent-gated and tiny (tens of sessions). Percentages on <100
  sessions are anecdotes: name the raw count, never act on the percentage.
- Bing AI Performance is heavily sampled: zeros are sampling, not decline. Read the
  trend across drops; the KPI is **Cited Pages** (>1 = deep pages grounding) and
  citation-share on named grounding queries, not raw citations.
- Cloudflare account CSVs span ALL sites and count raw requests: US/NL/FR/SG bulk =
  bot/datacenter noise. Only ZA + NA slices are semi-real, and GSC covers those better.

## 3. Known-noise dictionary (discard, but say why in one line)

- **US GSC impressions** — historically ~0.2–0.3% CTR junk.
- **Boolean scraper queries** — anything with `-site:reddit.com …` chains.
- **Port-code lookups** — `zadur port code`, `durban port code`, `zazba`, `zasdb` …
  informational zero-click; they inflate impressions and depress average CTR/position.
  Growth here = topical-authority breadth, not a CTR failure.
- **AI-assistant fragments** — "dig deeper", "give more companies", "muéstrame una
  foto", "这是什么": faint positive signal (AI surfaces querying), not buyer intent.
- **`afrishore bpo`** — the unrelated company; ignore.

## 4. The delta read (the core output)

1. From `Chart.csv`: compare the most recent full 7-day window to the prior one
   (clicks, impressions, position). Name record days.
2. From `Pages.csv`: per-page click/impression deltas vs the previous drop — call out
   port pages, service pages, subsea, and any page whose impressions grow while
   clicks stay flat (say why: informational mix vs snippet vs SERP features).
3. From `Queries.csv`: movements on the standing watchlist (below) + newly surfaced
   commercial queries.
4. Track work landing: when a recent on-site change targets a query (e.g. a scope-item
   or meta edit), report that query's trajectory across drops explicitly.

**Standing watchlist** (update as strategy evolves): brand terms (`afrishore …`),
`ship husbandry services cape town / south africa`, subsea set (`concrete mattress
subsea`, `subsea grout bags`, `grout bags subsea`), `saldanha bay port` cluster,
Durban commercial terms, `offshore supply base`, `deepsea mira`/rig names.

## 5. Opportunity list (ranked, mechanical)

Filter Queries.csv for: position 4–10, impressions ≥ 10, clicks = 0 → "page-1
parked" (CTR/snippet play). Then position 11–20, impressions ≥ 10 → "page-2 cusp"
(content/corroboration play). Present as a table with the owning page.

## 6. Output format

- Headline verdict in one sentence (growing / consolidating / noise-only).
- Delta table (this week vs last).
- What moved (bright spots, with the causal change where known).
- Noise discarded (one line each).
- Opportunity table.
- ONE recommended action, traced to a specific reproducible signal. If the data is
  stable and triaged, say "nothing to action" — do not invent work.

## 7. Hard rules

- Never recommend on-page changes from a single drop's fluctuation.
- Never treat Bing AI zeros or weekend dips as decline.
- Cross-check any "new problem" against the site live (`curl`) before proposing a fix
  (CLAUDE.md §6.4) — GSC/Ahrefs flags are often stale or transient.
- If the same watchlist item has been flat for 3+ drops, say so and recommend
  accepting or changing lever — don't keep promising movement.
