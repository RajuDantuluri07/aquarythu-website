# Action Plan: aquarythu.com

## Phase 1: Critical (this week)
- [ ] **Deploy the local fixes** (canonicals, sitemap, schema, FAQ, llms.txt, OG image, headers). Run `npm run build`, check the pages, then `firebase deploy --only hosting:aquarythu-landing` from `aqua_rythu_web`.
- [ ] Firebase console: redirect `www.aquarythu.com` → `aquarythu.com` (301).
- [ ] Google Search Console: verify the domain, submit `https://aquarythu.com/sitemap.xml`, and request indexing for /about and /contact.
- [ ] Bing Webmaster Tools: import from GSC and submit the sitemap.

## Phase 2: High impact (weeks 2–3)
- [ ] About page: founders or team with photos, where you're based (district/state), company registration, and why you built it. This is the biggest E-E-A-T gap.
- [ ] 2–3 farmer testimonials with name, district and pond count (with permission), and the outcome in numbers.
- [ ] Convert HERO1.png to WebP (target under 150 KB).
- [ ] Get a free Google API key and re-run `/seo audit` for real Core Web Vitals.

## Phase 3: Content and authority (month 2)
- [ ] Add a `/guides` section. Each guide should open with a direct answer, then a table, then the detail:
  - Vannamei feed chart by DOC (blind feeding days 1–30)
  - How to calculate FCR in shrimp farming
  - Check tray method: how to read trays and adjust feed
  - Safe DO, pH, ammonia and nitrite levels for Vannamei
  - Shrimp farm record keeping: what to log every day
- [ ] Publish Telugu versions of the home page and top guides (`/te/...` with hreflang).
- [ ] Brand mentions: a YouTube demo in Telugu, posts in aquaculture farmer groups, and listings in agri-tech directories.
- [ ] Add `sameAs` to Organization schema once the Play Store listing and social profiles are public.

## Phase 4: Monitoring (ongoing)
- [ ] Keep `llms.txt`, the About facts and the FAQ in sync when pricing, species or platforms change.
- [ ] Monthly: check GSC coverage and queries, and re-run `/seo audit https://aquarythu.com`.
- [ ] Optional: CSP header and HSTS includeSubDomains after confirming all subdomains are HTTPS.
