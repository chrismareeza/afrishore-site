# Phase 2 — Cloudflare Zone Build Worklist

> Mechanical, paste-this-in build of the Cloudflare DNS zone for
> **afrishore.co**. **Nothing here goes live** — the nameservers are NOT
> changed until Phase 3. Everything in Phase 2 is reversible.
> Work top-to-bottom. Do not skip Step F (pre-flight verification).
>
> Source of truth: `MIGRATION.md` §0-A/B/C. If any value here ever
> disagrees with §0, **§0 wins** — tell Claude.

---

## Pre-requisites

- [ ] Cloudflare account exists and you can log in.
- [ ] The Cloudflare **Pages** project building from GitHub
      `chrismareeza/afrishore-site` exists and its latest deploy is green
      (`afrishore-site.pages.dev` serves the current site).
- [ ] You have `MIGRATION.md` §0 open in another tab.
- [ ] ⛔ **Do NOT** touch the Axxess SiteWorx DNS editor or change
      nameservers anywhere during Phase 2.

---

## Step A — Add the site to Cloudflare

1. Cloudflare dashboard → **Add a site** → enter `afrishore.co` → select
   the **Free** plan → Continue.
2. Cloudflare auto-scans the existing (Wix) zone and imports what it can
   see. **Treat the import as untrusted** — it routinely misses TXT/CNAME
   records. Step C rebuilds the zone deliberately.
3. Cloudflare shows you **two assigned nameservers** like
   `xxx.ns.cloudflare.com` / `yyy.ns.cloudflare.com`. **Write these down
   now** — they're needed for Step G / Phase 3. **Do NOT enter them
   anywhere yet.**

---

## Step B — Clean the imported zone

In Cloudflare → DNS → Records, **delete** any imported record that is
NOT in the Step C table below. In particular delete:

- [ ] All apex `A` records (`185.230.63.171/.186/.107` — old Wix web)
- [ ] `www` pointing at `cdn1.wixdns.net` (old Wix)
- [ ] `en` anything (→ DROP per §0-B, do not recreate)
- [ ] Any `mail` / `api` / `web` / `ftp` A/CNAME (clusterdns cPanel junk
      — §0-F, never recreate)
- [ ] Any placeholder `_domainkey` TXT containing `t=y` (§0-F empty test
      key — harmful, must not exist)
- [ ] Any SPF TXT that reads `v=spf1 include:spf.protection.outlook.com -all`
      (the §0 STALE/boilerplate trap — wrong, delete it)

The zone should now be empty (or close to it). Step C fills it correctly.

---

## Step C — Enter every record EXACTLY (the zone)

Add each row via DNS → Records → **Add record**. Match **Proxy status**
precisely: 🟥 = "DNS only" (grey cloud). **Every record below is DNS-only.**
TTL = **Auto** for all. For TXT values, paste the content as-is —
**Cloudflare adds the surrounding quotes itself; do not type quotes**.

### C1 · Email & email-auth (§0-A) — 10 records, ALL DNS-only

| # | Type | Name | Content / Value | Proxy |
|---|---|---|---|---|
| 1 | MX | `@` | `afrishore-co.mail.protection.outlook.com` — **Priority 0** | 🟥 DNS only |
| 2 | TXT | `@` | `v=spf1 +a +mx +ip4:156.155.252.20 include:relay.mailchannels.net include:spf.protection.outlook.com ~all` | n/a |
| 3 | TXT | `@` | `MS=ms81963765` | n/a |
| 4 | TXT | `@` | `google-site-verification=9yZbCMNMEJqvOMnJNY1gZWtWnbOyNMzd6snrSTCvRy8` | n/a |
| 5 | TXT | `_dmarc` | `v=DMARC1; p=quarantine; rua=mailto:chris@afrishore.co; ruf=mailto:chris@afrishore.co; fo=1` | n/a |
| 6 | CNAME | `selector1._domainkey` | `selector1-afrishore-co._domainkey.afrishoreza.r-v1.dkim.mail.microsoft` | 🟥 DNS only |
| 7 | CNAME | `selector2._domainkey` | `selector2-afrishore-co._domainkey.afrishoreza.r-v1.dkim.mail.microsoft` | 🟥 DNS only |
| 8 | CNAME | `autodiscover` | `autodiscover.outlook.com` | 🟥 DNS only |
| 9 | CNAME | `pm-bounces` | `pm.mtasv.net` | 🟥 DNS only |
| 10 | TXT | `20260226183137pm._domainkey` | `k=rsa;p=MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCAro04rK64Z4JMfNL7eBRjyRdm5DP++4M2/bMe6/+xsigZm+6FFyDbgMWoKrntFBBOYNM1LloFArpWmnsKhQ1MBjmbUdypJeeYa37m1LiWiUBpRKq2Cz9pFIu8qUPHU/uxDsg2j3dHtvnJ1J+kyR4neUJ3I0j8VtzkjATBGMeUawIDAQAB` | n/a |

> Row 2 (SPF): there must be **exactly one** SPF TXT at `@`. This long
> one. Never the short `…outlook.com -all` boilerplate.
> Row 10 (Postmark DKIM): one unbroken string, no spaces/line breaks
> introduced, no extra quotes.

### C2 · Other subdomains (§0-B)

| # | Type | Name | Content / Value | Proxy |
|---|---|---|---|---|
| 11 | CNAME | `app` | `1bad7e6e5faed0ff.vercel-dns-016.com` | 🟥 **DNS only** (proxying breaks Vercel TLS) |

> `app.afrishore.co` is the business-critical Xero ops platform. This
> row is the single highest-stakes record — double-check the target
> string character-for-character. **No `en` record** (dropped).

### C3 · Web records (§0-C) — DO NOT ADD MANUALLY

The apex (`@`) and `www` web records are created **automatically by
Cloudflare Pages** in Step D (CNAME-flattened apex + proxied www).
Leave them out of Step C entirely.

---

## Step D — Connect the custom domain in Cloudflare Pages

> ⚠️ **SEQUENCING CORRECTION (observed in the live UI, 2026-05-18).**
> Cloudflare Pages **will not let you bind the custom domain until the
> zone is Active** (i.e. until the nameservers actually point to
> Cloudflare). Pre-cutover it shows *"Transfer DNS management — Before
> adding afrishore.co you'll need to transfer your DNS to Cloudflare"*
> with a **"Begin DNS transfer"** button. **Do NOT click that button
> during Phase 2** — it initiates the nameserver change (= Phase 3) and
> must stay gated on Step F + the cutover window + the Axxess ticket.
>
> Therefore **Step D is performed at the START of Phase 4**, in the
> first minutes *after* Axxess flips the nameservers and the Cloudflare
> zone flips to **Active** — not during Phase 2.

When (and only when) the Cloudflare zone status shows **Active**
(Phase 4, post-NS-change):

1. Cloudflare → **Workers & Pages** → `afrishore-site` → **Custom
   domains** → Add `www.afrishore.co`. With DNS now active it validates
   in seconds–minutes; Cloudflare creates the proxied record + issues
   the SSL cert.
2. Add `afrishore.co` (apex) → CNAME-flattened proxied apex + cert SAN.
3. Wait for both to show **Active** and the cert to issue (usually a few
   minutes; can be up to ~15).

**Brief expected gap:** between the NS flip and these two adds
completing, the **website** (apex/www) is briefly unreachable —
**email, `app.afrishore.co`, autodiscover, Postmark and every other
§0 service keep working throughout** (their records were pre-staged in
Step C and resolve the instant Cloudflare goes active). Do Step D
*immediately* at cutover to keep the brochure-site gap to minutes,
inside the chosen low-traffic window.

---

## Step E — www-canonical redirect rule

The whole site (sitemap, JSON-LD `@id`, canonicals, OG URLs) is
hardcoded to **`https://www.afrishore.co`**. Make the apex 301 to www so
there's no duplicate-content host.

1. Cloudflare → the `afrishore.co` zone → **Rules** → **Redirect Rules**
   → Create rule.
2. Name: `apex-to-www`.
3. If incoming requests match: **Hostname** `equals` `afrishore.co`
4. Then: **Static redirect** → Type **301 (Permanent)** → URL:
   `https://www.afrishore.co` + **Preserve path & query string** enabled
   (so `afrishore.co/projects/x?y` → `https://www.afrishore.co/projects/x?y`).
5. Deploy.

> The 18 legacy Wix→new-page 301s are handled separately by the site's
> own `public/_redirects` (already verified 21/21). This rule is only
> the apex→www host canonicalisation.

---

## Step F — Pre-flight verification (BEFORE Phase 3 — critical)

You can prove the new zone is correct **while the world still sees Wix**,
by querying Cloudflare's nameservers directly. Replace `NS1` with one of
the Cloudflare nameservers from Step A. Send these to Claude to run, or
run locally:

```
dig @NS1.ns.cloudflare.com afrishore.co MX +short
dig @NS1.ns.cloudflare.com afrishore.co TXT +short
dig @NS1.ns.cloudflare.com _dmarc.afrishore.co TXT +short
dig @NS1.ns.cloudflare.com selector1._domainkey.afrishore.co CNAME +short
dig @NS1.ns.cloudflare.com selector2._domainkey.afrishore.co CNAME +short
dig @NS1.ns.cloudflare.com autodiscover.afrishore.co CNAME +short
dig @NS1.ns.cloudflare.com pm-bounces.afrishore.co CNAME +short
dig @NS1.ns.cloudflare.com 20260226183137pm._domainkey.afrishore.co TXT +short
dig @NS1.ns.cloudflare.com app.afrishore.co CNAME +short
dig @NS1.ns.cloudflare.com www.afrishore.co +short
```

**Expected (match against §0-A/B):**
- MX → `afrishore-co.mail.protection.outlook.com` (pri 0)
- apex TXT → the **long** SPF + `MS=ms81963765` + `google-site-verification=…`
- `_dmarc` TXT → `…rua=mailto:chris@afrishore.co…`
- selector1/2 → the `…dkim.mail.microsoft` targets
- autodiscover → `autodiscover.outlook.com`
- pm-bounces → `pm.mtasv.net`
- the `…pm._domainkey` TXT → the long Postmark RSA key
- app → `1bad7e6e5faed0ff.vercel-dns-016.com`
- www → a Cloudflare Pages target

- [ ] **Checkpoint F:** every line matches §0. If anything is wrong, fix
      it in Cloudflare DNS and re-query. **Do not proceed to Phase 3
      until F is 100% green.** This is the whole safety net — a correct
      Cloudflare zone verified *before* the delegation moves means email
      + app + site keep working through propagation.

---

## Step G — Hand off to Phase 3

- [ ] Record the two Cloudflare nameservers (from Step A) here:
      - `__________________.ns.cloudflare.com`
      - `__________________.ns.cloudflare.com`
- [ ] Those two values go into the **Phase 3.2 reply to Axxess ticket
      #d7b7d6hbk5** (template in `MIGRATION.md` §3.2).
- [ ] Phase 2 is complete. Nothing is live yet. Proceed to Phase 3 only
      when Step F is fully verified and the cutover window is chosen.

---

## What NOT to do (recap of the traps)

- ❌ Don't use the short `v=spf1 include:spf.protection.outlook.com -all`
  SPF — it appears in 3 stale exports and breaks Axxess/MailChannels mail.
- ❌ Don't proxy (orange-cloud) ANY Step C record — mail, DKIM,
  autodiscover, Postmark, and the Vercel app all break if proxied.
- ❌ Don't recreate `en`, `mail`, `api`, `web`, `ftp`, or any `t=y`
  placeholder DKIM (clusterdns junk, §0-F).
- ❌ Don't manually add apex `A` or `www` records — Pages does that
  (Step D).
- ❌ Don't change nameservers in Phase 2 — that's Phase 3, via the
  Axxess ticket only.
- ❌ Don't edit DNS in Axxess SiteWorx — it writes to the dead
  clusterdns zone; invisible and confusing.
