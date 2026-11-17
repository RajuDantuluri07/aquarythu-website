# SEO / GEO / AEO Audit: aquarythu.com

Audited 17 Nov 2026 with claude-seo v2.6.2, run against the live site and against the local build that contains the fixes (not yet deployed). Raw tool output: `raw/`.

**Not measured:**
- Core Web Vitals: the PageSpeed Insights keyless quota was exhausted.
- Rendered-page checks: Chromium can't run on macOS 12.
- Backlinks and Search Console: no API credentials.

The site is a static export, so the raw HTML is what crawlers see.

## Executive summary

| | Live today | Local build with fixes |
|---|---|---|
| **SEO Health Score** | **55 / 100** | **76 / 100** (estimate) |

**Business type:** SaaS / B2B app for shrimp farmers in India. Six public pages: home, how-it-works, about, contact, privacy, terms.

### Top issues on the live site
1. **`/about` and `/contact` declare the homepage as their canonical** (High). Google is asked to index `/` instead of these pages. Fixed locally.
2. **`/contact` reuses the homepage title and description** (High). Fixed locally.
3. **`www.aquarythu.com` and `aquarythu.com` both serve 200** (Medium). Two copies of the site exist; only the canonical tag holds them together. This needs a domain redirect in the Firebase console and is still open.
4. **No social preview image on any page** (Low for SEO, high for WhatsApp/Facebook sharing). Fixed locally.
5. **8 of 12 features and all answers are thin or missing for AI engines.** Features were client-side tabs, and the FAQ was vague and outdated ("PRO unlocks Smart Feed"). Fixed locally.

### Quick wins remaining after the fixes
1. Firebase console: redirect `www` → apex (5 minutes).
2. Submit `sitemap.xml` to Google Search Console and Bing Webmaster Tools.
3. Convert `HERO1.png` (617 KB) to WebP, about 80–120 KB.
4. Add founder, location and company details to About.
5. Add a free Google API key so PageSpeed and CrUX data can be measured.

## Technical SEO: live 60, fixed 85

**What works:**
- HTTPS with a one-hop 301 from http.
- HSTS is set.
- `robots.txt` allows everything and declares the sitemap.
- The sitemap is valid XML.
- Every page returns 200 and its content is in static HTML.

| Finding | Severity | Status |
|---|---|---|
| Canonical on /about, /contact → `/` | High | Fixed (`src/lib/site.js` pageMetadata) |
| www and apex not consolidated | Medium | **Open.** Firebase Hosting → Domains → set www to redirect |
| Sitemap lists `/privacy.html` (301) and omits `/terms` | Medium | Fixed |
| Sitemap `lastmod` = build time on every deploy | Low | Fixed (real dates) |
| No X-Content-Type-Options, Referrer-Policy, framing or Permissions-Policy headers | Low | Fixed in `firebase.json` |
| No long cache on `/_next/static` (only 1 hour) | Low | Fixed in `firebase.json` |
| HSTS lacks includeSubDomains/preload | Low | Open: only enable after confirming every subdomain is HTTPS-only |
| No Content-Security-Policy | Low | Open: needs care (inline styles, Google Fonts, Supabase) |
| No favicon.ico (404); icon.png exists | Info | Fine (Next serves `/icon.png` via `<link rel=icon>`) |

## Content quality: live 50, fixed 60

**What works:**
- `/how-it-works` is a genuinely useful, well-structured 12-step page.
- The content quality script scores the home page 92/100 with no filler or AI-pattern flags.

**Gaps:**
- **E-E-A-T (High, open):** there's nothing about who builds AquaRythu. No founders, team, location, company registration or farmer testimonials. The footer says "AquaRythu Inc."; confirm the legal entity.
- **No informational content (High, open):** there are no guides answering what farmers search for (feed chart by DOC, FCR calculation, check-tray method, DO and ammonia limits, blind feeding). This is the single biggest lever for both Google and AI answers.
- **English only (Medium, open):** the app speaks 8 languages but the website speaks one. Telugu pages would target the core Andhra Pradesh market, where competitors are thin.
- /contact was thin (30 words). Now 94 words with a help-topics list; that's acceptable for a contact page.

## On-page SEO: live 60, fixed 85

| Finding | Status |
|---|---|
| /contact duplicate title and description | Fixed |
| /about title 21 characters ("About Us \| AquaRythu™") | Fixed |
| Home and contact meta descriptions 161 characters | Fixed (157 and 144) |
| /about heading jump (h1 → h3, h4) | Fixed |
| Footer Features/FAQ links dead on subpages | Fixed |
| Footer missing How It Works and Terms links | Fixed |

## Schema / structured data: live 50, fixed 85

| Finding | Status |
|---|---|
| SoftwareApplication said Android-only, price in USD, no URL or description | Fixed: Web browser, INR free offer, url, featureList, inLanguage, audience |
| Organization logo was a bare URL, no contact | Fixed: ImageObject, email, ContactPoint, areaServed India |
| FAQPage: 6 vague Q&As | Fixed: 10 direct Q&As (note: Google shows FAQ rich results only for government and health sites, but AI engines still parse them) |
| No BreadcrumbList on how-it-works | Fixed |
| No `sameAs` (social profiles, Play Store) | Open: add once the Play listing is public and social profiles exist |

## Performance: about 65 (not measured)

- Hero `HERO1.png` is **617 KB** PNG and is the LCP element. It now has width/height (no layout shift) and `fetchpriority=high`. **Convert to WebP/AVIF** (open).
- The Google Fonts stylesheet blocks rendering. Self-hosting the font via `next/font` would remove a third-party round trip (open).
- Measure with PageSpeed Insights once an API key exists, or at pagespeed.web.dev.

## Images: live 50, fixed 75

- Width/height were missing on all images (layout shift). Fixed.
- Alt text: the hero said "AquaRythu Dashboard", now descriptive. Logos are fine.
- Hero file size and format: open, see Performance.

## AI search readiness (GEO / AEO): live 45, fixed 80

**What works:**
- `robots.txt` allows GPTBot, ClaudeBot, PerplexityBot and Google-Extended (all under `*`).
- Pages are static HTML.

| Finding | Status |
|---|---|
| No `/llms.txt` | Fixed |
| Features hidden in client-side tabs (8 of 12 not in HTML) | Fixed |
| FAQ answers not self-contained or quotable; outdated pricing claim | Fixed |
| No quotable fact block (species, languages, scale, price) | Fixed (About "at a glance" + llms.txt) |
| No Content-Signal line in robots.txt | Open, optional: decide whether to allow AI training (`ai-train`) |
| No third-party brand mentions (Wikipedia, YouTube, Reddit, news, aquaculture forums) | Open: AI engines cite brands that others talk about |
| No Bing Webmaster Tools / IndexNow | Open: Bing's index feeds Copilot and ChatGPT search |
