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

## Timeline

| Phase | State |
|---|---|
| Preparation (domain admin, full DNS inventory) | ✅ complete & verified |
| Cloudflare zone built, **all records incl. your CNAME pre-staged** | next |
| Nameserver cutover (agreed low-traffic window, you're notified) | scheduled later |
| Verification (`app` checked first) + 30-day monitoring | post-cutover |
| Old infrastructure retired | only after 30 stable days |

---

*DNS single point of contact: Afrishore (Chris). Technical migration plan
of record: `MIGRATION.md` in the afrishore-site repository.*
