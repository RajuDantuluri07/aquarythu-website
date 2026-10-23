export const dynamic = 'force-static';

export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://aquarythu.com/sitemap.xml', // Replace with your actual domain when live
  }
}
