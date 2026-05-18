# Handover Brief — Productivity Tools

> **Re: afrishore.co DNS migration & `app.afrishore.co` (the Vercel ops platform)**
> Audience: the Productivity Tools team who built/maintain `app.afrishore.co`.
> Status: information + one confirmation request. **No action required from
> you yet beyond reviewing §"What we'd ask of you".**

---

## What's happening

Afrishore's public **marketing website** is moving off Wix onto a new
statically-built site on **Cloudflare Pages**. As part of this, the
**afrishore.co domain's DNS authority moves from Wix's nameservers
(`ns12/ns13.wixdns.net`) to Cloudflare's nameservers.**

Your application — **`app.afrishore.co`**, the bespoke Xero-integrated
operations platform on Vercel — lives on a subdomain of the same domain,
so its DNS record travels with this migration **even though the app itself
is not changing in any way.**

## What is NOT changing

- **No code, deployment, or Vercel configuration changes.** The app stays
  exactly where it is.
- **The CNAME target is preserved verbatim:**
  `app.afrishore.co → 1bad7e6e5faed0ff.vercel-dns-016.com`
- **Vercel keeps managing its own TLS** for the subdomain. We are keeping
  the record **DNS-only (Cloudflare "grey cloud", un-proxied)** so Vercel's
  certificate issuance and routing are completely untouched.

## How we're protecting the app

- The `app` CNAME is **pre-created in the new Cloudflare DNS zone *before*
  the nameserver switch.** At the moment DNS authority flips, the record
  already exists resolving to the same Vercel target → **zero downtime
  expected** for `app.afrishore.co`.
- It is classified as the **single highest-priority record** in the entire
  migration (ranked above the marketing site and email) and is the **first
  item verified** the instant cutover completes.
- A tested rollback exists: if anything goes wrong, DNS authority reverts
  to Wix within ~5 minutes (TTLs are lowered pre-cutover). **In both the
  success and rollback paths, `app.afrishore.co` keeps resolving to your
  Vercel deployment — there is no scenario in this plan where the app's
  target changes.**

## What we'd ask of you

1. **Awareness only** for now — nothing to change on your side.
2. **Confirm DNS dependencies (the one real ask).** Our authoritative zone
   inventory shows **only one** record for you: the `app` CNAME → Vercel.
   Please confirm that is your **complete** DNS footprint. Specifically,
   does the app rely on any of:
   - another subdomain (e.g. `api.`, `auth.`, a webhook/callback host)?
   - a domain-verification `TXT` record for any third-party service
     (Xero app partner, SSO/IdP, monitoring, email-sending)?
   - a dedicated mail-sending subdomain or SPF/DKIM entry (if the app
     sends email "from" anything `@afrishore.co`)?

   If yes to any, tell us **now** so it is replicated into Cloudflare
   during preparation — rather than discovered broken after cutover.
3. **Be reachable during the cutover window** (date TBC — a low-traffic
   early-AM SAST slot, ≥48h notice given). When we give the all-clear,
   please **confirm the Xero sync + a core operational function still
   work**. We don't expect a blip; the ops platform is simply too
   important to assume.

## Timeline & how the cutover actually happens

The domain registrar (Axxess) has **confirmed in writing** they will
apply the nameserver change on our behalf via a support ticket, with the
domain's security locks left in place the whole time. So the cutover is
a single controlled registrar action on a known date — not a risky
self-service scramble.

| Phase | State |
|---|---|
| Preparation: full DNS inventory + registrar process confirmed | ✅ complete & verified |
| Cloudflare zone built — **all records incl. your `app` CNAME pre-staged** and verified by direct query *before* anything goes live | in progress |
| Nameserver cutover — Axxess applies it in an agreed low-traffic window (you get **≥48 h notice**) | scheduled |
| Verification — **`app.afrishore.co` is the first thing checked**, then email, then site + 30-day monitoring | post-cutover |
| Old infrastructure retired | only after 30 stable days |

**Why `app.afrishore.co` should see zero downtime:** its exact CNAME →
Vercel record is created in the new DNS zone *before* the nameserver
change, and we verify it resolves correctly by querying the new
nameservers directly while the old ones are still live. By the time the
delegation flips, the record is already proven correct. During the
1–2 h global propagation, resolvers see *either* the old or the new
zone — and **both contain the identical `app` CNAME**, so the Vercel
app resolves correctly on either path. There is no window where it
points anywhere else.

---

*DNS single point of contact: Afrishore (Chris). Technical migration plan
of record: `MIGRATION.md` (+ `PHASE-2-CLOUDFLARE.md`) in the
afrishore-site repository.*
