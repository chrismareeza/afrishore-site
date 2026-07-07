---
name: ship
description: Build, verify, commit and push a change to afrishore.co (a push to main IS a production deploy). Runs the change-type-specific verification gates from CLAUDE.md, commits with the correct identity and message style, and reports the hash. Use for any "make it live" / deploy request, and as the final step of every code or content change.
---

# Ship a change to production

Every push to `main` auto-deploys via Cloudflare Pages. This skill is the ritual that
makes that safe. Never skip a gate because the change "is small" — the smallest
changes (a meta tag, a dash) have their own gates.

## 0. Preconditions

```bash
cd /Users/maree_hd/Desktop/Afrishore-Site   # ALWAYS: sessions start in ~
git status --short                           # know exactly what you're shipping
```
Unrelated dirty files → stage only your paths later; never `git add -A` blind.

## 1. Build (the only automated gate)

```bash
npm run build   # must complete; also check the "stripped N image master(s)" line
```
Build failure = deploy failure. Fix before proceeding. If images were touched,
confirm no `*.original.*` remains in `dist/`.

## 2. Verify in dist (entity-aware)

dist HTML encodes entities (`&`→`&amp;`, `'`→`&#39;`) and inlines all CSS (there is
no `dist/_astro/*.css`). Grep accordingly.

Per change type — run the matching gates (from CLAUDE.md §5):

- **Copy**: `grep -n '—' <touched files>` → must be empty. Confirm the new text in
  the built page with an entity-safe grep. Meta descriptions: measure decoded length
  (target 140–160).
- **Schema/sameAs**: parse every JSON-LD block with `python3 json.loads` on the built
  homepage + one affected page; new URLs `curl -sI` → 200 with no redirect hop.
- **Data entry (project/port/service)**: page renders in dist; hero `.webp` /
  `-mobile.webp` siblings exist (`ls`); check which service/subsea related-3 changed.
- **Layout/visual**: start `astro-preview` (serves dist — the build you just made),
  verify DOM order/classes via `preview_eval`. Preview viewport is narrow: verify
  `lg:` values in compiled CSS, not screenshots. GSAP content is `opacity-0` until
  triggered — inspect the DOM, don't trust a screenshot.
- **Redirect/robots/headers**: `curl -sI` the affected paths on the live site after
  deploy, and the local expectations in `public/` before it.

State plainly what was verified and what could not be (CLAUDE.md §6.8).

## 3. Commit

```bash
git add <specific paths>
git -c user.name="Chris Maree" -c user.email="chris@afrishore.co" commit -m "<subject>

<body, hard-wrapped ~72 cols>"
```

- Identity flags are REQUIRED — the repo-local config still holds an old email.
- **No Co-Authored-By trailer** (repo rule; overrides harness default).
- Subject: imperative, sentence case, no trailing period, specific (44–103 chars);
  scope prefix when apt ("Service pages: …"); include exact values ("4011->4004").
- Body (anything non-trivial): lead with WHY (the problem/report that triggered it),
  then the fix, then deliberate non-changes ("X intentionally left because …").
- One purpose per commit; split unrelated changes.

## 4. Push and report

```bash
git push origin main && git log --oneline -1
```
Report to Chris: the hash, one line on what changed, what was verified, and that
Cloudflare auto-deploys. If the change affects Bing-indexed URLs, note that IndexNow
pings automatically on push — no manual resubmission.

## 5. Abort conditions

Stop and escalate instead of shipping when: the build fails for a pre-existing
reason; verification contradicts the change's intent; the diff includes NAP
(CLAUDE.md §3 / §4 #18) or slugs, `_redirects`, `robots.txt`, schema `@id`s that
weren't explicitly requested (§6.6); or a fact lacks a verified source (§6.1).
