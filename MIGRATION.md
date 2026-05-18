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
> | Source | SPF record |
> |---|---|
> | InterWorx panel export (STALE — do not use) | `v=spf1 include:spf.protection.outlook.com -all` |
> | **Live authoritative zone (USE THIS — §0 table)** | `v=spf1 +a +mx +ip4:156.155.252.20 include:relay.mailchannels.net include:spf.protection.outlook.com ~all` |
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

### Email & verification records — MUST be replicated EXACTLY

| Type | Host | Value | Purpose |
|---|---|---|---|
| MX | `@` | `afrishore-co.mail.protection.outlook.com` (priority 0) | Microsoft 365 mail |
| TXT | `@` | `v=spf1 +a +mx +ip4:156.155.252.20 include:relay.mailchannels.net include:spf.protection.outlook.com ~all` | SPF |
| TXT | `@` | `MS=ms81963765` | M365 domain verification |
| TXT | `@` | `google-site-verification=9yZbCMNMEJqvOMnJNY1gZWtWnbOyNMzd6snrSTCvRy8` | **Google Search Console verification — SEO critical** |
| TXT | `_dmarc` | `v=DMARC1; p=quarantine; rua=mailto:chris@afrishore.co; ruf=mailto:chris@afrishore.co; fo=1` | DMARC |
| CNAME | `selector1._domainkey` | `selector1-afrishore-co._domainkey.afrishoreza.r-v1.dkim.mail.microsoft` | DKIM 1 |
| CNAME | `selector2._domainkey` | `selector2-afrishore-co._domainkey.afrishoreza.r-v1.dkim.mail.microsoft` | DKIM 2 |
| CNAME | `autodiscover` | `autodiscover.outlook.com` | Outlook autodiscover |

> ⚠️ **If any of these eight records is wrong or missing after cutover, email
> stops or starts failing SPF/DKIM.** They are independent of web hosting —
> they stay identical whether the site is on Wix or Cloudflare.
>
> Before cutover, also log into the Microsoft 365 admin centre
> (admin.microsoft.com → Settings → Domains → afrishore.co) and screenshot
> its "DNS records" page — that is Microsoft's own canonical list and may
> include extra records (e.g. SIP/Teams `SRV` `_sip._tls`, `_sipfederationtls`,
> `lyncdiscover` CNAME) not in the live zone. Replicate whatever it shows.

### Web records — these are the ONLY records that change

| Type | Host | Current (Wix) | After cutover (Cloudflare Pages) |
|---|---|---|---|
| A | `@` | 185.230.63.186 / .171 / .107 | (removed — replaced by CNAME flattening / Pages) |
| CNAME/A | `www` | `cdn1.wixdns.net` | Cloudflare Pages target |

---

## 1 · Pre-flight checklist (do days BEFORE cutover)

- [ ] **1.1 Confirm auto-renew will fire.** Auto-renew is **ON**, expiry
      2026-06-24 (renewal typically fires ~30 days prior — i.e. ~now). The
      risk is a *silent* failure if the card on file is expired. In the
      Axxess/InterWorx panel → check the billing/payment method is valid,
      OR just **renew manually now** to remove all timing risk. Confirm the
      expiry date moves to 2027+.
- [ ] **1.2 Lift the registrar lock.** `clientUpdateProhibited` is set on
      the domain. Most registrars block nameserver edits while this status
      is active. In the reseller panel (or via a support ticket) remove
      `clientUpdateProhibited` (keep `clientTransferProhibited` — that only
      blocks transfers, not NS edits, and protects against hijack). Only
      needs lifting long enough to change nameservers; re-lock after.
- [ ] **1.3 Confirm registrar access + locate the nameserver screen.**
      Access is **confirmed** — the Axxess/InterWorx panel manages this
      domain (it shows Auto-Renewal, WHOIS, etc.). Before cutover day, find
      the **nameserver / DNS delegation** edit screen in that panel (often
      under "Domain Management" / "Nameservers" / "DNS"). If the panel does
      not expose nameserver editing, the fallback is: (a) raise a support
      ticket with the host to change NS, or (b) in the Wix dashboard use
      "Disconnect domain", then set NS at the reseller. Verify which path
      exists *now*, not on cutover day.
- [ ] **1.4 Snapshot Microsoft 365 DNS.** admin.microsoft.com → Settings →
      Domains → afrishore.co → screenshot the full DNS records list. This is
      the email source of truth. Cross-check against §0.
- [ ] **1.5 Snapshot current Wix DNS zone.** In the Wix dashboard
      (Settings → Domains → Advanced / Manage DNS), export or screenshot
      every record. Catch anything `dig` can't see (e.g. records with no
      live lookup).
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
      best-effort and **routinely misses TXT/DKIM/SRV**. Go through §0 row
      by row. For every email/verification record that is missing or wrong,
      add/fix it manually in Cloudflare DNS:
  - MX `@` → `afrishore-co.mail.protection.outlook.com` priority 0
  - TXT `@` SPF (exact string from §0)
  - TXT `@` `MS=ms81963765`
  - TXT `@` `google-site-verification=9yZbCMNMEJqvOMnJNY1gZWtWnbOyNMzd6snrSTCvRy8`
  - TXT `_dmarc` (exact string from §0)
  - CNAME `selector1._domainkey` → (value from §0) — **set DNS-only (grey
    cloud), not proxied**
  - CNAME `selector2._domainkey` → (value from §0) — **DNS-only**
  - CNAME `autodiscover` → `autodiscover.outlook.com` — **DNS-only**
  - …plus anything extra the M365 admin snapshot (1.4) showed.
  > Rule: **all mail/verification records are DNS-only (grey cloud).**
  > Proxying (orange cloud) them breaks mail and verification.
- [ ] **2.3 Remove the old Wix web records** from the Cloudflare zone: the
      three apex `A` records (185.230.63.x) and the `www` Wix CNAME. They'll
      be replaced in Phase 3.
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

- [ ] **3.1 Pick a low-traffic window.** Early AM SAST, mid-week. Avoid
      Fridays. Have the §0 sheet and registrar login open.
- [ ] **3.2 Change nameservers at Tucows / reseller** from
      `ns12.wixdns.net` / `ns13.wixdns.net` to the **two Cloudflare
      nameservers** shown in your Cloudflare dashboard (e.g.
      `xxx.ns.cloudflare.com`). Save.
- [ ] **3.3 Start the propagation clock.** NS delegation changes take
      **2–48 h** globally (usually < 2 h). During this window some users hit
      Wix, some hit Cloudflare — **both serve a working site and email keeps
      flowing** (because Cloudflare's zone already mirrors the M365 records
      from Phase 2). This is why §0 accuracy matters.

**Checkpoint 3:** `dig NS afrishore.co` begins returning the Cloudflare
nameservers.

---

## 4 · Verification (run the moment Cloudflare NS resolves)

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
