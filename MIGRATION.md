# Afrishore — Wix → Cloudflare Pages Cutover Runbook

> Step-by-step DNS migration for **afrishore.co**, prioritising **zero email
> downtime** and **SEO/schema continuity**. Work top-to-bottom; do not skip
> the pre-flight. Each phase has a checkpoint — do not proceed until it passes.

---

## 0 · Snapshot of the current production DNS (source of truth)

Captured **2026-05-18** by `dig` against the live Wix-hosted domain. This is
the authoritative list of what must exist in the new DNS zone. **Print this
section.**

**Registrar:** Tucows (upstream) via a SA reseller — the **Axxess /
InterWorx control-panel** account (hosting `iwhost4.vpslocal.co.za`,
server `156.155.252.20`). Domain **auto-renew is ON**, expiry
**2026-06-24**. DNS today: Wix (`ns12.wixdns.net`, `ns13.wixdns.net`).
The reseller panel is where nameservers + auto-renew + WHOIS are managed.

> ⚠️ **CRITICAL — do NOT use the InterWorx/Axxess control panel's DNS
> tab as the migration source.** It is stale and NOT authoritative
> (Wix nameservers are). Its exported zone shows a *wrong, narrower*
> SPF:
>
> | Source | SPF record | Verdict |
> |---|---|---|
> | InterWorx/Axxess panel export | `v=spf1 include:spf.protection.outlook.com -all` | ❌ STALE |
> | Microsoft 365 `.zone` file export | `v=spf1 include:spf.protection.outlook.com -all` | ❌ GENERIC — Microsoft's boilerplate, ignores the Axxess + MailChannels senders |
> | **Live authoritative zone (USE THIS — §0-A)** | `v=spf1 +a +mx +ip4:156.155.252.20 include:relay.mailchannels.net include:spf.protection.outlook.com ~all` | ✅ THE TRUTH |
>
> **Three** separate exports now show the wrong narrow SPF. They are all
> "what Microsoft/the host *recommends*", not what is actually live and
> working. Only the §0-A value is authoritative — use it and nothing else.
>
> Copying the stale version would (a) drop `ip4:156.155.252.20` → mail
> sent from the Axxess server starts failing SPF, (b) drop
> `include:relay.mailchannels.net` → relayed mail fails SPF, and
> (c) flip `~all` softfail to `-all` hardfail → borderline mail bounces
> instead of going to spam. **Always replicate the §0 live values.**
>
> Note: server `156.155.252.20` (the Axxess hosting) is an *authorised
> sender* in the live SPF — something on it sends mail for the domain
> (website/transactional). It is barely used for web (0.66 MB) since
> the site is on Wix. **Leave that hosting untouched during migration**
> — replicating the live SPF keeps its mail valid. Evaluate whether
> it's still needed in §8 cleanup, not now.

> **This table is the COMPLETE authoritative zone**, transcribed from the
> Wix "Manage DNS Records" panel on 2026-05-18. It supersedes the earlier
> `dig` probe (which missed the Postmark + Vercel + `en` records — `dig`
> only returns what you query, and these subdomains weren't probed).
> Replicate **every PRESERVE row** verbatim into Cloudflare DNS.

### A · Email & email-auth records — replicate EXACTLY (10)

| Type | Host | Value | Purpose | Cloudflare proxy |
|---|---|---|---|---|
| MX | `@` | `afrishore-co.mail.protection.outlook.com` (priority 0) | Microsoft 365 inbound mail | DNS-only |
| TXT | `@` | `v=spf1 +a +mx +ip4:156.155.252.20 include:relay.mailchannels.net include:spf.protection.outlook.com ~all` | SPF (M365 + Axxess + MailChannels) | n/a |
| TXT | `@` | `MS=ms81963765` | M365 domain verification | n/a |
| TXT | `@` | `google-site-verification=9yZbCMNMEJqvOMnJNY1gZWtWnbOyNMzd6snrSTCvRy8` | **GSC verification — SEO critical** | n/a |
| TXT | `_dmarc` | `v=DMARC1; p=quarantine; rua=mailto:chris@afrishore.co; ruf=mailto:chris@afrishore.co; fo=1` | DMARC | n/a |
| CNAME | `selector1._domainkey` | `selector1-afrishore-co._domainkey.afrishoreza.r-v1.dkim.mail.microsoft` | M365 DKIM 1 | DNS-only |
| CNAME | `selector2._domainkey` | `selector2-afrishore-co._domainkey.afrishoreza.r-v1.dkim.mail.microsoft` | M365 DKIM 2 | DNS-only |
| CNAME | `autodiscover` | `autodiscover.outlook.com` | Outlook autodiscover | DNS-only |
| CNAME | `pm-bounces` | `pm.mtasv.net` | **Postmark** transactional-mail bounce tracking | DNS-only |
| TXT | `20260226183137pm._domainkey` | `k=rsa;p=MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCAro04rK64Z4JMfNL7eBRjyRdm5DP++4M2/bMe6/+xsigZm+6FFyDbgMWoKrntFBBOYNM1LloFArpWmnsKhQ1MBjmbUdypJeeYa37m1LiWiUBpRKq2Cz9pFIu8qUPHU/uxDsg2j3dHtvnJ1J+kyR4neUJ3I0j8VtzkjATBGMeUawIDAQAB` | **Postmark DKIM** public key | n/a |

> ⚠️ Miss/mangle any row → mail breaks or fails SPF/DKIM/DMARC. The two
> **Postmark** rows are easy to forget — they are transactional email
> (e.g. site form notifications / system mail). The DKIM TXT value is one
> long unbroken string; paste it whole, no added quotes/spaces.
>
> Also screenshot the **Microsoft 365 admin centre** DNS page
> (admin.microsoft.com → Settings → Domains → afrishore.co) before cutover
> — it may list extra Teams/Skype records (`SRV _sip._tls`,
> `_sipfederationtls`, `lyncdiscover` CNAME) Wix's panel doesn't surface.
> Replicate whatever it shows.

### B · Other subdomains — PRESERVE (separate services)

| Type | Host | Value | What it is | Action |
|---|---|---|---|---|
| CNAME | `app` | `1bad7e6e5faed0ff.vercel-dns-016.com` | 🔴 **Business-critical app** — bespoke ops platform on Vercel, Xero-integrated, runs core operational functions of the business | **Replicate EXACTLY, DNS-only. Higher business criticality than the marketing site.** Verify `app.afrishore.co` loads + Xero sync works the moment NS resolves (Phase 4). |
| CNAME | `en` | `cdn1.wixdns.net` | Orphaned Wix subdomain — confirmed **NOT in use** (serves Wix "domain isn't connected to a website yet", 2026-05-18) | ✅ **DROP.** Do not recreate in Cloudflare. |

> 🔴 **`app.afrishore.co` is the single highest-stakes record in this
> migration** — it is the live operations platform (Xero + business
> functions), more critical to day-to-day trading than the public site.
> Treat its CNAME as sacred: replicate the exact Vercel target, DNS-only
> (grey cloud — proxying it breaks Vercel's own TLS/routing), and make it
> the **first** thing tested in Phase 4. Vercel manages its own SSL via
> that CNAME; nothing about it changes — it just needs the record present
> in the new zone from the first moment NS resolves to Cloudflare.
>
> ✅ **`en.afrishore.co` — RESOLVED.** Live check returns the Wix
> "Looks like this domain isn't connected to a website yet" placeholder
> → it is an orphaned/unused subdomain serving nothing. Decision: **drop
> it.** It is simply omitted from the Cloudflare zone — no redirect, no
> recreation. (Step 1.5b is satisfied.)

### C · Web records — these are the ONLY records that CHANGE

| Type | Host | Current (Wix) | After cutover |
|---|---|---|---|
| A | `@` | 185.230.63.171 / .186 / .107 | removed — Cloudflare Pages apex (CNAME-flattened) |
| CNAME | `www` | `cdn1.wixdns.net` | Cloudflare Pages target |

### D · NS — changed at the registrar, not in a zone editor

`ns12.wixdns.net` / `ns13.wixdns.net` → the two Cloudflare nameservers.
(Wix's panel correctly shows "NS records are not editable" — they live at
the Axxess/Tucows registrar level. This is the Phase 3 action.)

### E · Telephony (Teams Phone) — checked, NO DNS dependency

The business **landlines run through Microsoft Teams**. Probed the live
zone on 2026-05-18 for every Teams/Skype-for-Business DNS record:

| Record | Result |
|---|---|
| `_sip._tls` SRV | none |
| `_sipfederationtls._tcp` SRV | none |
| `sip` CNAME | none |
| `lyncdiscover` CNAME | none |

**None exist.** This means the numbers are provisioned via **Microsoft
Calling Plans / Operator Connect**, where call routing is entirely
Microsoft↔Microsoft and needs **no custom DNS on afrishore.co**. The only
DNS dependency telephony shares with email is the domain staying
**M365-verified** — the `MS=ms81963765` TXT in §0-A. As long as that TXT
(and MX/autodiscover) carry over, Teams Phone is unaffected by the
nameserver change.

> ⚠️ Do not *add* speculative `sip`/`lyncdiscover`/SRV records "to be
> safe" — they're for legacy Skype for Business / Direct Routing setups
> and would be wrong here. Replicate only what §0-A/B lists.
>
> Belt-and-braces: Phase 4 still includes a live test call (cheap
> insurance — DNS says it can't be affected, but verify anyway).

### F · There are TWO zones — only the Wix one is authoritative

A `zone_records.txt` export exists from the **Axxess hosting nameservers**
(`ns1.clusterdns.co.za` / `ns2.clusterdns.co.za` / `ns3.hostdns.co.za` /
`ns4.clusterdns.org`, SOA `hostingservers@internet.co.za`, serial
`2024062400` = the hosting-creation date). **This zone is NOT
authoritative** — the registry delegates afrishore.co to
`ns12/ns13.wixdns.net`, so the world only ever resolves the Wix zone
(= §0-A/B/C). The clusterdns zone is the default cPanel/InterWorx zone
auto-generated when the hosting was created and never used.

Use it only as a **cross-check**. Findings:

- ✅ Email core (MX, SPF *good* value, `MS=`, autodiscover, M365 DKIM
  CNAMEs, Postmark `pm-bounces` + `…pm._domainkey`, `app`→Vercel) match
  §0-A/B — good, our source of truth is confirmed correct.
- ❌ **Do NOT replicate the clusterdns-only junk:** `mail`/`api`/`web`/
  `ftp` CNAMEs (cPanel defaults → the Axxess box), the apex `A
  156.155.252.20`, and the placeholder `_domainkey TXT "v=DKIM1; k=rsa;
  t=y;"` (an empty cPanel test key — would actively harm DKIM if added).
  None of these are in the live zone; none get recreated in Cloudflare.
- ⚠️ **DMARC differs between the two zones — DECISION (step 1.5c).**
  Full detail below; this is **not migration-blocking** (the live value
  is a valid record — we can ship it and revisit later).

---

## 1 · Pre-flight checklist (do days BEFORE cutover)

- [x] **1.1 Confirm auto-renew will fire.** ✅ DONE — auto-renew ON,
      payment method confirmed valid (2026-05-18). Expiry 2026-06-24 will
      roll forward automatically. No manual renewal needed.
- [x] **1.2 `clientUpdateProhibited` lock — NO ACTION NEEDED.** ✅
      RESOLVED (Axxess ticket **#d7b7d6hbk5**, agent Sandisiwe K,
      2026-05-18). Axxess confirmed verbatim: *"as the registrar, we are
      able to update the domain nameservers on your behalf **without
      removing the clientUpdateProhibited status**. The domain status
      does not need to be changed for a nameserver update to be
      processed."*
      **Implication — this is the best outcome:** both EPP locks
      (`clientUpdateProhibited` + `clientTransferProhibited`) **stay ON
      for the entire migration** — maximum anti-tamper / anti-hijack
      posture throughout. Axxess (the registrar) applies the NS change
      internally via the ticket; the lock only blocks *third-party/
      self-service* edits, not the registrar's own action. No lock
      removal, no re-lock step, no security window.
      > ⚠️ **SiteWorx is still NOT a DNS portal for this migration.** It
      > only edits the dead §0-F clusterdns zone the world never
      > resolves. **Do NOT touch DNS/SPF/DKIM/DMARC in SiteWorx** — all
      > real DNS work happens in Cloudflare (Phase 2).
- [x] **1.3 Nameserver-change path — CONFIRMED.** ✅ RESOLVED (Axxess
  ticket **#d7b7d6hbk5**, agent Sandisiwe K, 2026-05-18).

  **The confirmed path:** Axxess (the registrar) **applies the
  nameserver change for us, via this open ticket, with the lock left
  on.** It is not self-service and does not need to be — it's a
  named-agent, ticketed, registrar-level action. Their exact words:
  *"Please provide the nameservers you would like us to apply to the
  domain, and we will gladly assist further."*

  **What this means for sequencing — the ONLY remaining registrar
  action is a single ticket reply at Phase 3:**
  1. Phase 2 builds the Cloudflare zone → Cloudflare assigns the two
     `*.ns.cloudflare.com` nameservers.
  2. **Phase 3 = reply to ticket #d7b7d6hbk5** with exactly those two
     nameservers (template in §3.2). Axxess applies them; propagation
     starts.

  No lock juggling, no panel hunting, no Wix disconnect, no
  self-service fumbling. Keep ticket **#d7b7d6hbk5 open** until the NS
  change is confirmed live (Phase 4).
- [x] **1.4 Snapshot Microsoft 365 DNS.** ✅ DONE (2026-05-18). M365
      admin → Domains → afrishore.co shows **only** the Microsoft Exchange
      block: MX, the *recommended* narrow SPF (ignore — see SPF trap), and
      `autodiscover` CNAME — all "OK". **No "Skype for Business" section,
      no SRV records** → confirms §0-E (telephony has no afrishore.co DNS
      dependency; Calling Plans/Operator Connect). The
      `afrishoreza.onmicrosoft.com` DKIM TXTs seen in the tenant are for
      the *fallback domain* — they stay under onmicrosoft.com and are NOT
      replicated into the afrishore.co zone.
- [x] **1.5 Snapshot current Wix DNS zone.** ✅ DONE — full authoritative
      zone transcribed into §0-A/B/C/D from the Wix "Manage DNS Records"
      panel + live `dig`.
- [x] **1.5b Resolve `en.afrishore.co`.** ✅ RESOLVED → DROP (§0-B).
- [x] **1.5c Decide DMARC reporting target.** ✅ DONE → **A (keep
      `chris@`)**, confirmed by client 2026-05-18. Detail retained below.

  **What DMARC reporting is.** The DMARC record (`_dmarc.afrishore.co`)
  does two separate things: (1) the **policy** — `p=quarantine` — tells
  receiving mail servers what to do with mail that fails SPF *and* DKIM
  ("send to spam"); (2) the **reporting addresses** — `rua=` (daily
  aggregate XML: who sent mail as you, pass/fail counts) and `ruf=`
  (forensic copies of individual failing messages). **Reporting
  addresses have ZERO effect on mail delivery** — they only decide who
  gets visibility into spoofing/auth health. Changing them cannot break
  email; it only changes who can *see* the data.

  **The two candidate values:**

  | | `rua` / `ruf` target | What you get |
  |---|---|---|
  | **A — keep live (default)** | `chris@afrishore.co` (both) | Raw DMARC XML lands in Chris's inbox daily. Unreadable by eye (it's machine XML), but it's *yours*, free, zero setup, and continuity-safe. In practice almost nobody reads raw rua mail — it's "on but unused". |
  | **B — MXToolbox endpoints** | `e5e39940@mxtoolbox.dmarc-report.com` / `…@forensics…` | Routes reports into an **MXToolbox DMARC dashboard** — parsed, charted: every sender using afrishore.co, SPF/DKIM pass rates, spoof attempts, drill-downs. Genuinely useful for a brand whose name has deliverability value. |

  **The catch with B — must verify before choosing it:** the
  `e5e39940` token means a *specific MXToolbox DMARC account* was
  provisioned at some point (it appears only in the dead clusterdns
  zone, so it was likely a trial that never went live on the real
  zone). **Before pointing live DMARC at it, confirm:**
  1. Does anyone still have the MXToolbox account login (the `e5e39940`
     identifier ties to one account)?
  2. Is it on a plan that still ingests reports (free tier is limited;
     a lapsed trial = reports vanish into a void)?
  3. Who owns/monitors it? No point sending data somewhere nobody checks.

  **Recommendation (and why):** **Choose A — replicate the live
  `chris@afrishore.co` value verbatim — for the migration itself.** It
  is the authoritative live value, zero-risk, and keeps continuity.
  Treat "proper DMARC monitoring" as a **separate post-migration
  improvement** (§8 cleanup era), done deliberately with a known-good
  account — *not* by inheriting a mystery trial endpoint mid-cutover.
  If the client actively wants the dashboard now AND items 1–3 above
  check out, B is fine — but it should be a conscious yes, not a
  default. **`p=quarantine` is unchanged in both cases.**

  ✅ *Decision recorded (2026-05-18, confirmed by client):* **A — keep
  the live `rua=mailto:chris@afrishore.co; ruf=mailto:chris@afrishore.co`
  value, replicated verbatim into Cloudflare (§0-A).** `p=quarantine`
  unchanged. Managed DMARC monitoring deferred to a separate
  post-migration improvement (not inheriting the orphaned MXToolbox
  trial endpoint).
- [ ] **1.6 Final content QA on staging.** `afrishore-site.pages.dev` is
      the production build. Click every nav item, every project tile, test
      the mobile menu, submit nothing-breaks. Confirm the latest commit is
      deployed (check Cloudflare Pages dashboard → Deployments).
- [ ] **1.7 Confirm `_redirects` is in the build.** Already committed
      (`public/_redirects` → `dist/_redirects`). 18 Wix URLs → new pages.
      Verify: open `https://afrishore-site.pages.dev/docktitancapetown`
      — it should 301 to `/projects/dock-titan-cape-town-reunion`.
- [ ] **1.8 Lower DNS TTL (the day before).** In the **current Wix DNS
      zone**, drop the TTL on the apex A and `www` records to **300 s**
      (5 min). Wait for the *old* TTL to expire (Wix default is often
      1–3 h) so that by cutover the world is caching at 5 min. This makes
      propagation — and rollback — fast. **Do not lower MX/TXT/DKIM TTLs;
      leave email records untouched in this step.**

**Checkpoint 1:** domain renewed, lock liftable, registrar access proven,
email records documented from two sources, staging signed off, TTL lowered.

---

## 2 · Prepare Cloudflare (no DNS change yet — safe, reversible)

- [ ] **2.1 Add the site to Cloudflare.** Cloudflare dashboard → Add a Site
      → `afrishore.co` → Free plan. Cloudflare auto-scans existing DNS.
- [ ] **2.2 AUDIT the imported zone against §0.** Cloudflare's scan is
      best-effort and **routinely misses TXT/DKIM/SRV**. Go through the
      §0-A table **all 10 rows** + §0-B, and add/fix anything missing:
  - **§0-A (email/auth — all 10):** MX; SPF TXT; `MS=` TXT;
    `google-site-verification` TXT; `_dmarc` TXT; `selector1._domainkey`
    CNAME; `selector2._domainkey` CNAME; `autodiscover` CNAME;
    **`pm-bounces` CNAME → `pm.mtasv.net`**; **`20260226183137pm._domainkey`
    TXT (the long Postmark RSA key — paste whole, no quotes)**
  - **§0-B `app` CNAME → `1bad7e6e5faed0ff.vercel-dns-016.com`** — the
    Vercel app. Replicate exactly; **DNS-only**. Verify `app.afrishore.co`
    still loads after cutover (it's an independent service).
  - **§0-B `en`** — only recreate if the 1.5b decision said "keep". If
    drop → omit. If 301 → handle via a Cloudflare redirect rule, not a
    Wix CNAME.
  - …plus anything extra the M365 admin snapshot (1.4) showed.
  > Rule: **every mail/auth/service record is DNS-only (grey cloud).**
  > Proxying (orange cloud) any of them breaks mail, DKIM, autodiscover,
  > Postmark, or the Vercel app. Only the web records (§0-C) get proxied,
  > and Pages handles those in 2.4.
- [ ] **2.3 Remove the old Wix web records** from the Cloudflare zone: the
      three apex `A` records (185.230.63.171/.186/.107) and the `www` Wix
      CNAME (`cdn1.wixdns.net`). They're replaced in 2.4 / Phase 3. **Do
      not** touch `app`, `en`, `pm-bounces`, `autodiscover`, or any
      `_domainkey` record.
- [ ] **2.4 Connect the custom domain in Cloudflare Pages.** Pages project
      (the one building from GitHub `chrismareeza/afrishore-site`) →
      Custom domains → add **`afrishore.co`** and **`www.afrishore.co`**.
      Cloudflare Pages will create the correct proxied CNAME/Alias records
      automatically (apex via CNAME flattening). Pages issues the SSL cert
      automatically once DNS resolves.
- [ ] **2.5 Decide canonical host.** The whole site (sitemap, JSON-LD
      `@id`, canonical tags, OG URLs) is hardcoded to **`https://www.afrishore.co`**.
      So **`www` is canonical.** In Cloudflare add a Redirect Rule:
      `afrishore.co/*` → `https://www.afrishore.co/$1` (301). This keeps the
      apex from serving a duplicate-content copy and matches every absolute
      URL already baked into the build. **Do not change the site's base URL
      — it is correct as-is; that is why no schema edits are needed.**

**Checkpoint 2:** Cloudflare zone mirrors §0 exactly (email records verified
line-by-line, all grey-cloud), Pages custom domain added, www-canonical
redirect rule staged. **Nameservers NOT yet changed — nothing is live.**

---

## 3 · Cutover (the only irreversible-ish step — but TTL is 5 min)

- [ ] **3.1 Pick a low-traffic window & coordinate timing.** Early AM
      SAST, mid-week, avoid Fridays. Because Axxess actions the NS change
      (not us), this means: reply to the ticket and **expect a turnaround
      lag** (their stated process — could be minutes to hours). Send the
      reply at the *start* of the chosen window, or ask Axxess in the
      reply to apply it at a specific time. Have the §0 sheet open and
      someone able to confirm Xero sync on standby (the `app` CNAME is
      pre-staged in Phase 2 so it shouldn't blip — verify regardless).
- [ ] **3.2 Reply to Axxess ticket #d7b7d6hbk5** with the two Cloudflare
      nameservers from Phase 2. Copy/adapt:
      > Hi Sandisiwe,
      >
      > Please update the nameservers for **afrishore.co** to the
      > following two Cloudflare nameservers:
      >
      > &nbsp;&nbsp;`<ns1>.ns.cloudflare.com`
      > &nbsp;&nbsp;`<ns2>.ns.cloudflare.com`
      >
      > (Replace `ns12.wixdns.net` / `ns13.wixdns.net`.) Please leave
      > `clientUpdateProhibited` and `clientTransferProhibited` in place
      > as you advised. Kindly confirm once applied. Thank you.
      >
      > [Name] — Afrishore

      Fill the two real values from the Cloudflare dashboard (Phase 2).
      Double-check spelling against Cloudflare before sending — a typo
      here points the whole domain at nothing.
- [ ] **3.3 Axxess applies it → propagation clock starts.** NS
      delegation changes take **2–48 h** globally (usually < 2 h).
      During the window some resolvers still hit Wix, some hit
      Cloudflare — **both serve a working site and email keeps flowing**
      (Cloudflare's zone already mirrors every §0-A/B record from
      Phase 2). This dual-serve safety is *why* §0 accuracy matters.

**Checkpoint 3:** `dig NS afrishore.co` begins returning the Cloudflare
nameservers.

---

## 4 · Verification (run the moment Cloudflare NS resolves)

🔴 **STEP 0 — business-critical app (before ANYTHING, before the
website binding):**
- [ ] `dig +short CNAME app.afrishore.co` → resolves to the Vercel
      target (`...vercel-dns-016.com`)
- [ ] `https://app.afrishore.co` loads + Xero sync works
- [ ] This is independent of the Pages binding below — it must work the
      instant NS resolves (record was pre-staged in Phase 2).

⚙️ **STEP A — bind the Pages custom domain (do IMMEDIATELY, the brochure
site is down until this completes):**
- [ ] Cloudflare zone status now shows **Active** (NS resolved).
- [ ] Workers & Pages → `afrishore-site` → Custom domains → add
      `www.afrishore.co`, then add `afrishore.co`. (Now permitted —
      it was blocked pre-cutover; see PHASE-2 Step D.)
- [ ] Add the **apex→www 301 redirect rule** (PHASE-2 Step E) if not
      already staged.
- [ ] Wait for both custom domains → **Active** + SSL cert issued
      (minutes, up to ~15). Until then the website 404s but email/app
      are unaffected.

**Then continue the detailed verification:**

🔴 **app re-confirm (belt-and-braces):**
- [ ] `dig +short CNAME app.afrishore.co` → resolves to the Vercel target
      (`...vercel-dns-016.com`)
- [ ] `https://app.afrishore.co` → the ops platform loads over HTTPS with
      a valid cert
- [ ] Log in and confirm the **Xero integration** + a core operational
      function still work (the app's own SSL/routing is Vercel-managed; we
      only need the CNAME present — but verify, don't assume)
- [ ] If `app` is down → the `app` CNAME is missing/wrong in Cloudflare.
      Fix it immediately; this outranks every other item here.

Web:
- [ ] `dig +short NS afrishore.co` → Cloudflare nameservers
- [ ] `https://www.afrishore.co` → loads the **new** site over HTTPS, valid
      cert (Cloudflare-issued), no mixed-content warnings
- [ ] `http://afrishore.co` → 301 → `https://www.afrishore.co`
- [ ] Spot-check 5 of the 18 redirects, e.g.
      `curl -sI https://www.afrishore.co/docktitancapetown` → `301` →
      `/projects/dock-titan-cape-town-reunion`; repeat for
      `/total-brulpadda1718-campaign`, `/facebook2africa`,
      `/copy-of-deepsea-mira-venus-1x` (→ Tamboti), `/subsea-groutbags`
- [ ] `https://www.afrishore.co/sitemap-index.xml` → 200, lists 20 URLs

Email (**do not skip — highest business risk**):
- [ ] `dig +short MX afrishore.co` → `...mail.protection.outlook.com`
- [ ] `dig +short TXT afrishore.co` → SPF + MS= + google-site-verification
      all present, unchanged
- [ ] `dig +short TXT _dmarc.afrishore.co` → DMARC unchanged
- [ ] `dig +short CNAME selector1._domainkey.afrishore.co` → resolves
- [ ] **Send a test email** from an external account (Gmail) to
      `chris@afrishore.co` AND `info@afrishore.co`. Confirm receipt.
- [ ] **Reply from** each mailbox to the external account. Confirm it
      arrives and (via Gmail "Show original") passes **SPF + DKIM + DMARC**.

Telephony (Teams Phone — DNS says unaffected, verify anyway):
- [ ] Place an **outbound call** from a Teams landline number to a mobile.
- [ ] Receive an **inbound call** to a Teams landline number from a mobile.
- [ ] Both connect with audio → Calling Plan routing intact. (If these
      fail it is a Microsoft-side issue, NOT this DNS change — but confirm.)

**Checkpoint 4:** new site live on www, apex redirects, all 18 legacy URLs
301, sitemap reachable, **email sends + receives + passes SPF/DKIM/DMARC.**
If email fails → §7 rollback immediately.

---

## 5 · SEO & schema post-cutover actions (the priority — do same day)

The build was authored with the production URL hardcoded, so **no schema or
canonical changes are needed at cutover.** These steps register the change
with search engines and verify nothing regressed.

- [ ] **5.1 Google Search Console — re-verify.** The existing GSC property
      verifies via the `google-site-verification=9yZbCMN…` TXT record, which
      was carried over in §2.2, so verification should **stay green**.
      Confirm at search.google.com/search-console → Settings → Ownership
      verification. If it dropped, re-add the TXT (it's in §0).
- [ ] **5.2 Submit the new sitemap.** GSC → Sitemaps → remove the old Wix
      sitemap entry (`/sitemap.xml`), add **`https://www.afrishore.co/sitemap-index.xml`**.
- [ ] **5.3 Do NOT use the Change of Address tool.** That is only for
      domain-to-domain moves. This is the same domain, new platform — the
      301 map in `_redirects` is the correct mechanism and is already live.
- [ ] **5.4 Request indexing** for the top pages: GSC → URL Inspection →
      enter `https://www.afrishore.co/`, then `/projects`, then the 6
      featured project URLs → "Request indexing" each. Accelerates re-crawl.
- [ ] **5.5 Validate structured data on PRODUCTION.** Rich Results Test
      (search.google.com/test/rich-results) on `https://www.afrishore.co/`
      and one project URL. Expect: Organization, WebSite, LocalBusiness ×4,
      Service ×4, FAQPage (home) / BreadcrumbList + Article (project), **0
      errors** (the Vehicle→Thing fix is already shipped).
- [ ] **5.6 Re-test social cards on production.** LinkedIn Post Inspector
      on `https://www.afrishore.co/` and a project URL → click **Re-scrape**
      so LinkedIn drops any cached Wix card and picks up the 1200×630 OG
      image.
- [ ] **5.7 Confirm robots + llms.** `https://www.afrishore.co/robots.txt`
      (AI-crawler allowlist + sitemap line) and `/llms.txt` both 200 and
      reference the production domain (they already do).
- [ ] **5.8 Bing Webmaster Tools** (optional, 5 min): import the GSC
      property, submit the same sitemap. Powers Bing + ChatGPT search.

**Checkpoint 5:** GSC verified + new sitemap submitted + key URLs indexing-
requested + Rich Results 0 errors on the live domain + OG cards re-scraped.

---

## 6 · Monitoring (first 4 weeks — SEO continuity watch)

- [ ] **Week 1:** GSC → Pages report. The 16 redirected Wix URLs begin
      moving to "Page with redirect"; the new `/projects/*` URLs begin
      appearing as "Indexed". Impressions may dip 1–2 weeks (normal for any
      replatform) then recover. Baseline was ~60 impressions/day, 18
      indexed.
- [ ] **Week 2–3:** Confirm new URLs entering the index. Check
      `site:afrishore.co` in Google. Watch GSC "Crawled – currently not
      indexed" doesn't balloon.
- [ ] **Week 4:** Re-run PageSpeed Insights on the **production** domain
      (was mobile 85 / a11y 100 on staging). Re-check Core Web Vitals in
      GSC once field data accumulates.
- [ ] Watch the DMARC `rua` mailbox (`chris@afrishore.co`) for aggregate
      reports — confirms no mail-auth regression post-cutover.

---

## 7 · Rollback plan

Because TTLs were lowered (1.8) and the only changed records are web:

1. **If web is broken but email is fine:** in Cloudflare DNS, the issue is
   almost always the Pages custom-domain binding (2.4) — re-add it; no
   rollback needed.
2. **If email is broken:** the carried-over records in §2.2 are wrong.
   Compare Cloudflare zone vs §0 / the M365 admin snapshot, fix the
   offending record. Mail resumes within the 5-min TTL.
3. **Catastrophic (need full revert):** change nameservers at the registrar
   **back to** `ns12.wixdns.net` / `ns13.wixdns.net`. The world re-points to
   Wix within the propagation window. **Do not cancel the Wix subscription
   until §8.**

---

## 8 · Post-migration cleanup (after 30 stable days)

- [ ] 30 days of clean GSC (redirects honoured, new URLs indexed, no email
      complaints) → safe to **downgrade/cancel the Wix subscription.**
      Keep the export/snapshots from 1.5 indefinitely.
- [ ] Re-apply the `clientUpdateProhibited` registrar lock (1.2) for
      hijack protection.
- [ ] Diarise the **next domain renewal** well ahead of expiry.
- [ ] Archive this runbook with the final dated DNS snapshot for audit.

---

### Why no schema/SEO rework is required at cutover

Everything that encodes the domain was built for production from day one:

- `astro.config.mjs` → `site: 'https://www.afrishore.co'`
- Canonical tags, OG/Twitter URLs, hreflang → absolute `https://www.afrishore.co`
- JSON-LD `@id` graph (Organization/WebSite/LocalBusiness/Service/Article/
  Breadcrumb/Collection) → absolute production URLs
- `sitemap-index.xml`, `robots.txt`, `llms.txt` → production URLs
- 18 legacy Wix URLs → 301 mapped in `_redirects`

The instant DNS resolves to Cloudflare, every structured-data identifier,
canonical, and sitemap entry is already correct. The SEO work is *carried
through* the migration, not redone after it.
