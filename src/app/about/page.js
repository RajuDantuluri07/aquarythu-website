import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { pageMetadata } from '@/lib/site';

export const metadata = pageMetadata({
  title: "About AquaRythu | Shrimp Farm Management Software for India",
  description: "AquaRythu is a shrimp farm app for Vannamei farmers in India: offline daily records, Smart Feed, growth and FCR tracking, in 8 Indian languages.",
  path: '/about',
});

const H2_STYLE = { fontSize: '1.5rem', color: 'var(--color-text-main)', marginTop: '40px', marginBottom: '16px', fontWeight: 600 };

// Short, self-contained facts. Answer engines quote passages like this
// verbatim, so keep every line true and update it when the product changes.
const FACTS = [
  ['What it is', 'Shrimp farm management software and digital farm log book'],
  ['Built for', 'Vannamei shrimp farm owners, supervisors and pond workers in India'],
  ['Records', 'Feed rounds, tray checks, water quality, sampling, supplements, expenses, inventory and harvests'],
  ['Feed guidance', 'A blind feed plan for the first days of culture, then Smart Feed recommendations from tray checks, biomass and DOC'],
  ['Languages', 'English, Telugu, Hindi, Tamil, Bengali, Gujarati, Malayalam and Odia'],
  ['Works offline', 'Yes. Records save on the phone and sync when the connection returns'],
  ['In use on', '120+ farms, 360+ ponds and 798+ acres'],
  ['Price', 'Free to start at app.aquarythu.com'],
];

export default function About() {
  return (
    <main style={{ backgroundColor: '#ffffff', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header />
      
      <section className="section" style={{ flex: 1, padding: '80px 0' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <h1 style={{ fontSize: '3rem', fontWeight: 600, color: 'var(--color-text-main)', marginBottom: '16px', letterSpacing: '-0.01em' }}>About Us</h1>
            <p style={{ fontSize: '1.25rem', color: 'var(--color-primary)', fontWeight: 500 }}>
              Building the future of smart aquaculture.
            </p>
          </div>
          
          <div style={{ color: 'var(--color-text-muted)', fontSize: '1.1rem', lineHeight: '1.8' }}>
            <p style={{ marginBottom: '24px' }}>
              AquaRythu was born out of a simple observation: modern shrimp farming generates an enormous amount of data, but farmers lack the right tools to turn that data into profitable decisions.
            </p>
            <p style={{ marginBottom: '24px' }}>
              For too long, the industry has relied on "blind feeding" and guesswork. We built AquaRythu to bridge the gap between traditional farming intuition and data-driven intelligence. By leveraging advanced algorithms and real-time pond analytics, we empower farmers to reduce feed waste, accelerate growth, and drastically improve crop survival rates.
            </p>
            <h2 style={H2_STYLE}>AquaRythu at a glance</h2>
            <dl style={{ display: 'grid', gridTemplateColumns: 'minmax(110px, 160px) 1fr', gap: '12px 20px', marginBottom: '24px', fontSize: '1rem' }}>
              {FACTS.map(([term, detail]) => (
                <div key={term} style={{ display: 'contents' }}>
                  <dt style={{ fontWeight: 600, color: 'var(--color-text-main)' }}>{term}</dt>
                  <dd style={{ margin: 0 }}>{detail}</dd>
                </div>
              ))}
            </dl>
            <h2 style={H2_STYLE}>Our Mission</h2>
            <p style={{ marginBottom: '24px' }}>
              Our mission is to bring enterprise-grade agricultural technology to every shrimp farmer. Whether you manage a single pond or a massive multi-farm operation, AquaRythu is designed to give you complete visibility and control over your crop's profitability from stocking to harvest.
            </p>
            <h2 style={H2_STYLE}>Built for the Farm</h2>
            <p style={{ marginBottom: '24px' }}>
              We know that internet connectivity at the pond can be unreliable. That's why we engineered AquaRythu from the ground up to be offline-first. Your workers can record critical feed and water quality data directly at the pond edge, without skipping a beat. When they return to a connection, everything syncs securely to the cloud.
            </p>
            
            <div style={{ marginTop: '60px', padding: '32px', backgroundColor: '#f8fafc', borderRadius: '12px', border: '1px solid #e2e8f0', textAlign: 'center' }}>
              <p style={{ fontSize: '1.25rem', fontWeight: 600, color: 'var(--color-text-main)', marginBottom: '16px' }}>Ready to transform your farm?</p>
              <a href="https://app.aquarythu.com/" className="btn-primary" style={{ display: 'inline-block', fontSize: '1.1rem', padding: '12px 32px' }}>Start free trial</a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
