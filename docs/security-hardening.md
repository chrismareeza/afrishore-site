# Afrishore — Security Hardening Runbook

External security assessment run 2026-06-19. Perimeter posture is strong
(Cloudflare-proxied origin, TLS 1.3 only, registrar locks on, SPF+DKIM+DMARC
present, solid HTTP headers). This runbook lists the gaps and the exact
records / steps to close them. Apply to **both** `afrishore.co` and
`afrishore.co.za` — both run Microsoft 365 on the same tenant.

Severity: 🔴 high · 🟠 medium · 🟡 low

---

## 🔴 1. `afrishore.com` — exact-brand domain owned by a third party

Not ours. Public WHOIS (2026-06-19):

- Registrant: **Faycal Bouhafs**, Casablanca, Morocco (`bouhafs@gmail.com`)
- Registrar: Arcanes Technologies (Héberjahiz, MA); created 2022-02-09, exp 2027-02-09
- Hosting: LiteSpeed shared host; site returns HTTP 200 but a **blank `<title>`** (no clone of our site at present)
- **Mail-capable**: has a working SPF record
  (`v=spf1 +a +mx +ip4:45.76.143.90 include:relay.mailbaby.net … include:relay.mailchannels.net ~all`)
  — i.e. it is configured to *send* email as `@afrishore.com`.

**Read:** most likely an unrelated/speculative registration, **not** an active
attack today — but it's the most obvious version of our brand, it's
mail-capable, and we don't control it. That's a latent BEC / payment-redirection
risk because we can't protect a domain we don't own.

**Options (in order):**
1. **Defensively register the variants we *can* get — do this now, they're cheap and currently UNREGISTERED:**
   `afrishore.net`, `afrishore.org`, `afrishore-logistics.com`, `afrishorelogistics.com`.
2. **Pursue `afrishore.com`** — either a commercial acquisition (registrant contact is public) or, if we hold a registered "Afrishore" trademark and can show bad faith, a UDRP. (UDRP is uncertain: name is semi-generic and the .com predates our brand growth.)
3. **Defend regardless:** DMARC `p=reject` on our real domains (§3), brief
   counterparties/operators that our only official domains are `afrishore.co`
   and `afrishore.co.za`, and enforce out-of-band verification of any
   bank-detail change (§2).
4. **Monitor:** watch `afrishore.com` for the day it starts hosting a lookalike
   or sending mail in our name.

---

## 🔴 2. Microsoft 365 account security (verify in admin console — highest real risk)

Not externally visible, but mailbox takeover → silent forwarding rule → invoice
fraud is the #1 loss vector for a logistics agency. Confirm:

- [ ] **MFA enforced on every mailbox** — especially `chris@` and **`finance@afrishore.co`** (it handles vendor banking details).
- [ ] **Legacy auth disabled** (IMAP/POP/SMTP basic auth) — the common MFA bypass.
- [ ] **Alert on new mailbox forwarding / redirect rules.**
- [ ] **Process rule:** every bank-detail change verified out-of-band (call a known number) — never on email instruction alone.
- [ ] Admin accounts separate from day-to-day mailboxes; Defender for O365 anti-phishing on.

---

## 🟠 3. Email authentication

### SPF — `afrishore.co` is loose/legacy
Current:
```
v=spf1 +a +mx +ip4:156.155.252.20 include:relay.mailchannels.net include:spf.protection.outlook.com ~all
```
Problems: `include:relay.mailchannels.net` is a large shared relay (lets a broad
pool pass SPF as us); `+a +mx` and the hardcoded IP are legacy; `~all` is
softfail.

**Recommended (M365-only — verify no other real senders first):**
```
v=spf1 include:spf.protection.outlook.com -all
```
If `156.155.252.20` is still a genuine transactional sender, keep only that:
```
v=spf1 ip4:156.155.252.20 include:spf.protection.outlook.com -all
```
`afrishore.co.za` already does this correctly — no change.

### DMARC — move both domains to reject
Current: `p=quarantine`. After the SPF cleanup is live and you've watched the
`rua` reports for ~1–2 weeks with no legit sender failing:
```
v=DMARC1; p=reject; rua=mailto:chris@afrishore.co; fo=1
```
(`ruf` forensic reports can carry PII and few providers send them — optional to
drop. Consider a free DMARC analytics service so the reports are readable.)

### MTA-STS — add to both (stops inbound STARTTLS downgrade)
1. TXT record `_mta-sts.afrishore.co`:
   ```
   v=STSv1; id=20260619T000000Z
   ```
2. Policy served over HTTPS at `https://mta-sts.afrishore.co/.well-known/mta-sts.txt`:
   ```
   version: STSv1
   mode: enforce
   mx: *.mail.protection.outlook.com
   max_age: 604800
   ```
   Start with `mode: testing` for ~1 week, then switch to `enforce`.
3. Host the `mta-sts` subdomain on Cloudflare with a tiny Worker (route
   `mta-sts.afrishore.co/*`):
   ```js
   export default {
     fetch() {
       return new Response(
         "version: STSv1\nmode: enforce\nmx: *.mail.protection.outlook.com\nmax_age: 604800\n",
         { headers: { "content-type": "text/plain" } }
       );
     }
   };
   ```

### TLS-RPT — add to both (visibility on mail-TLS failures)
TXT `_smtp._tls.afrishore.co`:
```
v=TLSRPTv1; rua=mailto:chris@afrishore.co
```

---

## 🟠 4. DNSSEC — currently unsigned on both

Cloudflare dashboard → the domain → **DNS → Settings → Enable DNSSEC** → copy the
generated **DS record** → paste it at the registrar (Tucows/OpenSRS for
`afrishore.co`; the `.co.za` registrar for `afrishore.co.za`). One-click + one
paste; closes the DNS-spoofing/cache-poisoning window.

---

## 🟡 5. Lower-priority hardening

- **security.txt** — ✅ added this session at `public/.well-known/security.txt`
  (RFC 9116). Update the `Expires` date annually.
- **CAA records** — *caution:* Cloudflare auto-manages CAA for the CAs it rotates
  through (currently Google Trust Services). Adding manual CAA can break cert
  auto-renewal if it omits a CA Cloudflare switches to. If adding anyway, allow
  the CAs in use and an iodef contact:
  ```
  afrishore.co.  CAA 0 issue "pki.goog"
  afrishore.co.  CAA 0 issue "letsencrypt.org"
  afrishore.co.  CAA 0 issuewild "pki.goog"
  afrishore.co.  CAA 0 issuewild "letsencrypt.org"
  afrishore.co.  CAA 0 iodef "mailto:chris@afrishore.co"
  ```
  Prefer letting Cloudflare manage it unless you have a specific reason.
- **CSP** — deliberately omitted (see `public/_headers`); the reasoning is sound
  for a static no-auth site and clickjacking is already covered by
  `X-Frame-Options: DENY`. If you want visibility with zero breakage risk, add a
  `Content-Security-Policy-Report-Only` header and watch the reports before ever
  enforcing.
- **`access-control-allow-origin: *`** on HTML responses — low risk (no
  credentials/API), but confirm where it's set and remove if nothing needs it.
- **HSTS preload** — intentional omission; optional submit to hstspreload.org for
  max protection (hard to reverse; commits all subdomains to HTTPS-only).

---

## Suggested order
1. `afrishore.com` — register the available variants + decide acquisition/legal (§1).
2. M365 MFA + legacy-auth + forwarding-rule alerts (§2).
3. SPF cleanup → DMARC reject on `.co` (§3).
4. MTA-STS + TLS-RPT + DNSSEC in one DNS session, both domains (§3–4).
5. security.txt is done; CAA/CSP optional (§5).
