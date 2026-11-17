export const dynamic = 'force-static';

import { SITE_URL } from '@/lib/site';

// Everything here is public marketing content, so search and AI crawlers
// (GPTBot, OAI-SearchBot, ClaudeBot, PerplexityBot, Google-Extended, ...)
// are all allowed under '*'. Being citable by answer engines is the goal.
export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  }
}
