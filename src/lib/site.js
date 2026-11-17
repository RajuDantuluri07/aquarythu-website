// Single source of truth for site-wide SEO values.
// Next.js merges metadata shallowly: a page that sets `openGraph` or
// `alternates` replaces the layout's whole object, so every page builds its
// metadata through pageMetadata() to keep canonical + OG image correct.

export const SITE_URL = 'https://aquarythu.com';
export const SITE_NAME = 'AquaRythu';
export const SUPPORT_EMAIL = 'support@aquarythu.com';
export const APP_URL = 'https://app.aquarythu.com/';

export const OG_IMAGE = {
  url: '/og-image.jpg',
  width: 1200,
  height: 630,
  alt: 'AquaRythu shrimp farm management app showing pond, feed and growth dashboards',
};

export function pageMetadata({ title, description, path }) {
  const url = path === '/' ? SITE_URL : `${SITE_URL}${path}`;
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      locale: 'en_IN',
      type: 'website',
      images: [OG_IMAGE],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [OG_IMAGE.url],
    },
  };
}
