export const dynamic = 'force-static';

import { SITE_URL } from '@/lib/site';

// lastModified is a real content date, not build time: a lastmod that changes
// on every deploy teaches Google to ignore it. Bump a page's date when its
// content actually changes. URLs must be the final (non-redirecting) form:
// Firebase cleanUrls 301s /privacy.html -> /privacy.
const PAGES = [
  { path: '', lastModified: '2026-11-17', changeFrequency: 'weekly', priority: 1 },
  { path: '/how-it-works', lastModified: '2026-11-17', changeFrequency: 'monthly', priority: 0.9 },
  { path: '/about', lastModified: '2026-11-17', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/contact', lastModified: '2026-11-17', changeFrequency: 'yearly', priority: 0.6 },
  { path: '/privacy', lastModified: '2026-11-17', changeFrequency: 'yearly', priority: 0.3 },
  { path: '/terms', lastModified: '2026-11-16', changeFrequency: 'yearly', priority: 0.3 },
];

export default function sitemap() {
  return PAGES.map(({ path, lastModified, ...rest }) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(lastModified),
    ...rest,
  }));
}
