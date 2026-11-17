import ContactPage from '@/components/ContactPage';
import { pageMetadata } from '@/lib/site';

// Server wrapper so the route can export metadata (the form itself is a
// client component). Without this, /contact inherited the homepage title and
// canonical and was treated by Google as a duplicate of "/".
export const metadata = pageMetadata({
  title: "Contact AquaRythu | Shrimp Farm App Support",
  description: "Questions about AquaRythu shrimp farm management software? Send us a message or email support@aquarythu.com.",
  path: '/contact',
});

export default function Contact() {
  return <ContactPage />;
}
