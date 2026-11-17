import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { pageMetadata, SITE_URL } from '@/lib/site';

export const metadata = pageMetadata({
  title: "How AquaRythu Works | Shrimp Farm Management Software",
  description: "See how AquaRythu helps shrimp farmers manage ponds, feed, water quality, sampling, harvests and farm records in one platform.",
  path: '/how-it-works',
});

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": `${SITE_URL}/` },
    { "@type": "ListItem", "position": 2, "name": "How It Works", "item": `${SITE_URL}/how-it-works` }
  ]
};

export default function HowItWorks() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <Header />

      {/* Minimal Breadcrumb */}
      <div className="breadcrumb-container container">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="/">Home</a></li>
            <li className="breadcrumb-item active" aria-current="page">How It Works</li>
          </ol>
        </nav>
      </div>

      <section className="how-it-works-hero section">
        <div className="container">
          <div className="hiw-header">
            <h1>How AquaRythu Works</h1>
            <p className="hiw-subtitle">
              From stocking to harvest, AquaRythu brings your shrimp farm's daily operations, records, intelligence, and reports into one platform.
            </p>
            <p className="hiw-intro">
              Managing a shrimp farm involves hundreds of decisions and records throughout a crop. Our aquaculture software brings them together so farmers, supervisors, and workers can work from the same farm information.
            </p>
          </div>

          <div className="hiw-content">
            <div className="hiw-steps">
              
              <div className="hiw-step-card">
                <h2>1. Create Your Farm</h2>
                <p>Start by creating your farm and setting up the basic information needed to manage your operation.</p>
                <p>Add your farm details, location, and infrastructure to create your digital workspace.</p>
                <p>From there, AquaRythu becomes the central place for your digital farm records, pond activities, crop information, and reports.</p>
              </div>

              <div className="hiw-step-card">
                <h2>2. Set Up Your Ponds & Crop</h2>
                <p>Add your ponds and configure the information needed to properly manage each crop.</p>
                <p>Record details such as pond dimensions, stocking density, seed details, and crop dates.</p>
                <p>Each pond gets its own operational view, making pond management easier and helping you understand exactly what is happening across your entire farm.</p>
              </div>

              <div className="hiw-step-card">
                <h2>3. Manage Daily Farm Operations</h2>
                <p>AquaRythu brings your everyday farm activities into one streamlined workflow.</p>
                <p>Record important operational activities such as:</p>
                <ul>
                  <li>Feed activities</li>
                  <li>Tray observations</li>
                  <li>Water-quality tests</li>
                  <li>Sampling</li>
                  <li>Supplement activities</li>
                  <li>Pond observations</li>
                </ul>
                <p>Instead of relying on scattered notebooks, spreadsheets, or messages, your farm information stays securely organized as permanent digital farm records.</p>
              </div>

              <div className="hiw-step-card">
                <h2>4. Manage Feed with Intelligence</h2>
                <p>Feed is one of the most significant costs in shrimp farming.</p>
                <p>AquaRythu helps farmers manage planned and actual feed distributions throughout the crop. The smart feeding workflow considers crop information, Days of Culture (DOC), biomass, and tray observations to help farmers make more informed feeding decisions.</p>
                <p>Record feeding rounds and tray observations directly in the app to build a continuous history of feed management. This creates a digital farm log book of what was planned, what was given, and how the pond responded.</p>
              </div>

              <div className="hiw-step-card">
                <h2>5. Monitor Water Quality</h2>
                <p>Water conditions can change quickly during a shrimp crop.</p>
                <p>Easily record important parameters such as:</p>
                <ul>
                  <li>Dissolved Oxygen (DO)</li>
                  <li>pH</li>
                  <li>Salinity</li>
                  <li>Temperature</li>
                  <li>Ammonia</li>
                  <li>Nitrite</li>
                </ul>
                <p>AquaRythu organizes water-quality records at the pond level so farmers can identify long-term changes over time instead of relying on isolated readings.</p>
              </div>

              <div className="hiw-step-card">
                <h2>6. Get Farm & Environmental Intelligence</h2>
                <p>AquaRythu goes beyond simply storing farm records.</p>
                <p>Farm Intelligence combines your farm information with environmental signals to provide useful context for your daily decisions. Depending on available data, this includes:</p>
                <ul>
                  <li>Weather conditions</li>
                  <li>Temperature trends</li>
                  <li>Water-quality conditions</li>
                  <li>Environmental risk signals</li>
                  <li>Feed-related recommendations</li>
                  <li>Farm-level advisories</li>
                </ul>
                <p>The goal is to help farmers understand not only <strong>what was recorded</strong>, but also <strong>what it may mean for the crop</strong>.</p>
              </div>

              <div className="hiw-step-card">
                <h2>7. Track Sampling, Growth & FCR</h2>
                <p>Regular sampling helps farmers understand exactly how the crop is developing.</p>
                <p>Record sampling information and accurately track:</p>
                <ul>
                  <li>Average Body Weight (ABW)</li>
                  <li>Average Daily Growth (ADG)</li>
                  <li>Biomass</li>
                  <li>Survival rates</li>
                  <li>Feed consumption</li>
                  <li>Feed Conversion Ratio (FCR)</li>
                </ul>
                <p>AquaRythu turns these everyday records into crop-level growth intelligence, helping farmers understand how the crop is progressing week by week.</p>
              </div>

              <div className="hiw-step-card">
                <h2>8. Work Together with Your Farm Team</h2>
                <p>A successful shrimp farm is rarely managed by just one person.</p>
                <p>Our farm management software supports different farm roles so the right people can access the exact information they need. Depending on their role, team members can work with:</p>
                <ul>
                  <li>Pond operations</li>
                  <li>Feed confirmation</li>
                  <li>Tray observations</li>
                  <li>Water-quality records</li>
                  <li>Sampling data</li>
                </ul>
                <p>Role-based access helps keep operational information available to the people responsible for it, while protecting your sensitive farm and financial data.</p>
              </div>

              <div className="hiw-step-card">
                <h2>9. Manage Farm Expenses & Business Information</h2>
                <p>Aquaculture farm management is not only about shrimp growth—farmers also need to understand where money is being spent.</p>
                <p>AquaRythu brings farm financial information together with operational records so farmers can clearly understand the relationship between: <strong>Feed → Farm Costs → Crop Performance → Harvest → Revenue</strong>.</p>
                <p>This provides a clearer, data-driven picture of your crop economics instead of keeping operational and financial information completely separate.</p>
              </div>

              <div className="hiw-step-card">
                <h2>10. Manage Supplements & Farm Inputs</h2>
                <p>Record relevant supplement and farm-input activities as part of the crop's operational history.</p>
                <p>Keep vital input information securely connected to the pond and crop so important activities are never lost in separate paper log books or text messages.</p>
              </div>

              <div className="hiw-step-card">
                <h2>11. Manage Harvest</h2>
                <p>When the crop is ready, record the final harvest information and connect it back to the crop's history.</p>
                <p>Track relevant harvest metrics such as:</p>
                <ul>
                  <li>Harvest quantity</li>
                  <li>Harvest sizes</li>
                  <li>Selling information</li>
                  <li>Market price information</li>
                  <li>Overall crop performance</li>
                </ul>
                <p>This creates a complete, end-to-end digital history from stocking through harvest.</p>
              </div>

              <div className="hiw-step-card">
                <h2>12. Generate Crop Reports</h2>
                <p>Your daily shrimp farm record keeping becomes actionable, audit-ready reports.</p>
                <p>AquaRythu automatically brings together crop information such as:</p>
                <ul>
                  <li>Feed history</li>
                  <li>Growth and survival</li>
                  <li>Water quality trends</li>
                  <li>Harvest yields</li>
                  <li>Farm expenses</li>
                </ul>
                <p>Instead of searching through multiple registers at the end of the crop, farmers can access beautifully organized crop information instantly in one place.</p>
              </div>

            </div>

            {/* Conclusion / Flow Summary */}
            <div className="hiw-summary-box">
              <h2>From Daily Records to Better Farm Decisions</h2>
              <p className="hiw-summary-intro">AquaRythu connects the entire crop lifecycle in a seamless flow:</p>
              
              <div className="hiw-flow">
                <div className="flow-step">
                  <h3>Farm Setup</h3>
                  <p>Create your farm and ponds.</p>
                </div>
                <div className="flow-arrow">↓</div>
                <div className="flow-step">
                  <h3>Daily Operations</h3>
                  <p>Record feeding, trays, water quality, and other activities.</p>
                </div>
                <div className="flow-arrow">↓</div>
                <div className="flow-step">
                  <h3>Crop Intelligence</h3>
                  <p>Understand growth, biomass, survival, FCR, and environmental conditions.</p>
                </div>
                <div className="flow-arrow">↓</div>
                <div className="flow-step">
                  <h3>Business Management</h3>
                  <p>Track expenses, harvest, and overall crop performance.</p>
                </div>
                <div className="flow-arrow">↓</div>
                <div className="flow-step">
                  <h3>Reports</h3>
                  <p>Turn your farm records into organized crop information.</p>
                </div>
              </div>

              <div className="hiw-final-pitch">
                <h3>One Platform for Your Shrimp Farm</h3>
                <p>AquaRythu brings farm management, digital farm records, pond operations, feed management, water-quality tracking, crop intelligence, and reporting into one unified platform.</p>
                <p>Whether you are a farm owner, supervisor, or worker, AquaRythu helps your team work with the same farm information throughout the crop.</p>
                <p className="highlight-text"><strong>From stocking to harvest — your farm, organized in one place.</strong></p>
              </div>

              <div className="hiw-cta-links">
                <a href="/#features" className="btn-secondary">Explore Features</a>
                <a href="https://app.aquarythu.com/" className="btn-primary">Start free trial</a>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />

      <style>{`
        .breadcrumb-container {
          padding: 24px 0 0;
        }
        
        .breadcrumb {
          display: flex;
          list-style: none;
          padding: 0;
          margin: 0;
          font-size: 0.9rem;
          color: var(--color-text-muted);
        }

        .breadcrumb-item + .breadcrumb-item::before {
          content: "›";
          margin: 0 8px;
          color: var(--color-border);
        }

        .breadcrumb-item a {
          color: var(--color-primary);
          text-decoration: none;
        }

        .breadcrumb-item a:hover {
          text-decoration: underline;
        }

        .how-it-works-hero {
          padding: 40px 0 80px;
          background-color: #ffffff;
        }

        .hiw-header {
          text-align: center;
          margin-bottom: 60px;
          max-width: 800px;
          margin-left: auto;
          margin-right: auto;
        }

        .hiw-header h1 {
          font-family: "Google Sans", sans-serif;
          font-size: 42px;
          line-height: 1.15;
          font-weight: 600;
          letter-spacing: -1px;
          color: #0B1B33;
          margin-bottom: 24px;
        }

        .hiw-subtitle {
          font-family: "Google Sans", sans-serif;
          font-size: 18px;
          line-height: 28px;
          font-weight: 400;
          color: #017FE3;
          margin-bottom: 20px;
        }

        .hiw-intro {
          font-family: "Google Sans", sans-serif;
          font-size: 16px;
          line-height: 26px;
          font-weight: 400;
          color: #52647A;
        }

        .hiw-content {
          max-width: 800px;
          margin: 0 auto;
        }

        .hiw-steps {
          display: flex;
          flex-direction: column;
          gap: 32px;
          margin-bottom: 60px;
        }

        .hiw-step-card {
          background: #fcfdff;
          padding: 40px;
          border-radius: 16px;
          border: 1px solid rgba(1, 127, 227, 0.1);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.02);
        }

        .hiw-step-card h2 {
          font-family: "Google Sans", sans-serif;
          font-size: 24px;
          font-weight: 600;
          color: #0B1B33;
          margin-bottom: 16px;
        }

        .hiw-step-card p {
          font-family: "Google Sans", sans-serif;
          font-size: 16px;
          line-height: 26px;
          font-weight: 400;
          color: #52647A;
          margin-bottom: 12px;
        }

        .hiw-step-card p:last-child {
          margin-bottom: 0;
        }

        .hiw-step-card ul {
          font-family: "Google Sans", sans-serif;
          font-size: 16px;
          line-height: 26px;
          font-weight: 400;
          color: #52647A;
          margin: 12px 0 20px 24px;
        }

        .hiw-step-card li {
          margin-bottom: 8px;
        }

        .hiw-summary-box {
          text-align: center;
          padding: 48px;
          background: #ffffff;
          border-radius: 20px;
          border: 2px solid rgba(1, 127, 227, 0.1);
          box-shadow: 0 10px 40px rgba(1, 127, 227, 0.05);
        }

        .hiw-summary-box h2 {
          font-family: "Google Sans", sans-serif;
          font-size: 32px;
          font-weight: 600;
          letter-spacing: -0.5px;
          color: #0B1B33;
          margin-bottom: 16px;
        }

        .hiw-summary-intro {
          font-family: "Google Sans", sans-serif;
          font-size: 16px;
          line-height: 26px;
          font-weight: 400;
          color: #52647A;
          margin-bottom: 32px;
        }

        .hiw-flow {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-bottom: 48px;
        }

        .flow-step {
          background: #f8fafc;
          padding: 20px 32px;
          border-radius: 12px;
          width: 100%;
          max-width: 500px;
          border: 1px solid rgba(0,0,0,0.05);
        }

        .flow-step h3 {
          font-family: "Google Sans", sans-serif;
          font-size: 18px;
          font-weight: 600;
          color: #017FE3;
          margin-bottom: 8px;
        }

        .flow-step p {
          font-family: "Google Sans", sans-serif;
          font-size: 16px;
          line-height: 26px;
          font-weight: 400;
          color: #52647A;
          margin: 0;
        }

        .flow-arrow {
          font-size: 2rem;
          color: var(--color-border);
          margin: 8px 0;
          font-weight: 300;
        }

        .hiw-final-pitch {
          margin-bottom: 40px;
          text-align: center;
        }

        .hiw-final-pitch h3 {
          font-size: 1.6rem;
          margin-bottom: 16px;
          color: var(--color-text-main);
        }

        .hiw-final-pitch p {
          font-size: 1.1rem;
          color: var(--color-text-muted);
          line-height: 1.6;
          margin-bottom: 16px;
        }

        .highlight-text {
          font-size: 1.2rem !important;
          color: var(--color-primary) !important;
          margin-top: 24px;
        }

        .hiw-cta-links {
          display: flex;
          gap: 16px;
          justify-content: center;
          flex-wrap: wrap;
        }

        @media (max-width: 600px) {
          .hiw-header h1 {
            font-size: 2.2rem;
          }
          .hiw-subtitle {
            font-size: 1.2rem;
          }
          .hiw-step-card {
            padding: 24px;
          }
          .hiw-summary-box {
            padding: 32px 24px;
          }
        }
      `}</style>
    </main>
  );
}
