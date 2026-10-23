import "./globals.css";

export const metadata = {
  title: "Digital Log Book & Software for Shrimp Farms | AquaRythu",
  description: "AquaRythu is an aqua farm management software that helps shrimp farmers manage ponds, feed, water quality, sampling, expenses, harvests and digital farm records.",
  keywords: "shrimp farm management software, aquaculture software, aqua farm management software, shrimp farm app, pond management software, shrimp farm log book, aquaculture farm management",
  metadataBase: new URL('https://aquarythu.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'AquaRythu | Smart Farm Management Software for Shrimp Farmers',
    description: 'AquaRythu is an aqua farm management software that helps shrimp farmers manage ponds, feed, water quality, sampling, expenses, harvests and digital farm records.',
    url: 'https://aquarythu.com',
    siteName: 'AquaRythu',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AquaRythu | Smart Farm Management Software for Shrimp Farmers',
    description: 'AquaRythu is an aqua farm management software that helps shrimp farmers manage ponds, feed, water quality, sampling, expenses, harvests and digital farm records.',
  },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://aquarythu.com/#website",
        "url": "https://aquarythu.com/",
        "name": "AquaRythu",
        "description": "Smart Farm Management Software for Shrimp Farmers"
      },
      {
        "@type": "Organization",
        "@id": "https://aquarythu.com/#organization",
        "name": "AquaRythu",
        "url": "https://aquarythu.com/",
        "logo": "https://aquarythu.com/logo.png"
      },
      {
        "@type": "SoftwareApplication",
        "name": "AquaRythu",
        "operatingSystem": "Android",
        "applicationCategory": "BusinessApplication",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD"
        }
      }
    ]
  };

  return (
    <html lang="en">
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
