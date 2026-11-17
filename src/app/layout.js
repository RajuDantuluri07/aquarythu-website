import "./globals.css";
import { SITE_URL, SITE_NAME, SUPPORT_EMAIL, APP_URL, pageMetadata } from "@/lib/site";

const HOME_DESCRIPTION =
  "Shrimp farm management app for Vannamei farmers in India. Record feed, trays, water quality, sampling and harvests, and get Smart Feed advice in 8 languages.";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  ...pageMetadata({
    title: "Shrimp Farm Management App & Digital Log Book | AquaRythu",
    description: HOME_DESCRIPTION,
    path: '/',
  }),
  applicationName: SITE_NAME,
  keywords: "shrimp farm management software, aquaculture software, aqua farm management software, shrimp farm app, pond management software, shrimp farm log book, vannamei feed management app, shrimp FCR tracking",
};

const LANGUAGES = ["English", "Telugu", "Hindi", "Tamil", "Bengali", "Gujarati", "Malayalam", "Odia"];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      "url": `${SITE_URL}/`,
      "name": SITE_NAME,
      "description": "Shrimp farm management software for aquaculture farmers",
      "inLanguage": "en-IN",
      "publisher": { "@id": `${SITE_URL}/#organization` }
    },
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      "name": SITE_NAME,
      "url": `${SITE_URL}/`,
      "logo": {
        "@type": "ImageObject",
        "url": `${SITE_URL}/logo.png`,
        "width": 320,
        "height": 96
      },
      "email": SUPPORT_EMAIL,
      "areaServed": { "@type": "Country", "name": "India" },
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "customer support",
        "email": SUPPORT_EMAIL,
        "availableLanguage": LANGUAGES
      }
    },
    {
      "@type": "SoftwareApplication",
      "@id": `${SITE_URL}/#app`,
      "name": SITE_NAME,
      "url": APP_URL,
      "description": HOME_DESCRIPTION,
      "operatingSystem": "Web browser",
      "applicationCategory": "BusinessApplication",
      "applicationSubCategory": "Aquaculture farm management",
      "inLanguage": ["en", "te", "hi", "ta", "bn", "gu", "ml", "or"],
      "image": `${SITE_URL}/og-image.jpg`,
      "publisher": { "@id": `${SITE_URL}/#organization` },
      "audience": { "@type": "Audience", "audienceType": "Shrimp farmers and aquaculture farm managers" },
      "featureList": [
        "Blind feed plan for the early days of culture",
        "Smart Feed recommendations from tray checks, biomass and DOC",
        "Water quality records (DO, pH, salinity, temperature, ammonia, nitrite)",
        "Sampling, ABW, ADG, survival and FCR tracking",
        "Harvest and weighing records",
        "Expense, inventory and crop profitability tracking",
        "Role-based access for owners, supervisors and workers",
        "Offline recording with automatic sync"
      ],
      "offers": {
        "@type": "Offer",
        "name": "Free plan",
        "price": "0",
        "priceCurrency": "INR",
        "url": APP_URL
      }
    }
  ]
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-IN">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Google+Sans:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap" rel="stylesheet" />
      </head>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
