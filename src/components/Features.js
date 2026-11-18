"use client";
import { useState } from 'react';

export default function Features() {
  const [activeTab, setActiveTab] = useState('Feed & Growth');

  const categories = [
    {
      id: 'Feed & Growth',
      features: [
        {
          title: "Blind Feed Generation",
          desc: "Get a ready-to-use feed plan for the early days of culture (DOC 1–10 for nursery seed, DOC 1–30 for hatchery seed) based on pond and seed details.",
          icon: (
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
          )
        },
        {
          title: "Smart Feed",
          desc: "Optimize daily feeding using crop, biomass and tray-consumption data.",
          icon: (
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          )
        },
        {
          title: "Growth & FCR",
          desc: "Track ABW, ADG, FCR and survival to understand crop performance.",
          icon: (
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
            </svg>
          )
        },
        {
          title: "Supplement Schedules",
          desc: "Plan and track supplement applications throughout the crop.",
          icon: (
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
            </svg>
          )
        }
      ]
    },
    {
      id: 'Farm Operations',
      features: [
        {
          title: "Water Intelligence",
          desc: "Monitor water parameters and receive actionable insights for pond conditions.",
          icon: (
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
            </svg>
          )
        },
        {
          title: "Farm Intelligence",
          desc: "Get farm-level weather and environmental information to support daily decisions.",
          icon: (
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
            </svg>
          )
        },
        {
          title: "Harvest & Weighing",
          desc: "Record harvests, weighing sessions and extracted biomass.",
          icon: (
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
            </svg>
          )
        },
        {
          title: "Market Prices",
          desc: "Stay informed about current shrimp market prices.",
          icon: (
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          )
        }
      ]
    },
    {
      id: 'Business & Management',
      features: [
        {
          title: "Profitability Tracking",
          desc: "Track crop expenses, revenue and overall profitability.",
          icon: (
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          )
        },
        {
          title: "Crop Reports",
          desc: "Maintain a complete record of crop performance from stocking to harvest.",
          icon: (
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          )
        },
        {
          title: "Farm Roles & Team Management",
          desc: "Give Owners, Managers/Supervisors and Workers appropriate access.",
          icon: (
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          )
        },
        {
          title: "Inventory Management",
          desc: "Track feed, supplements and other farm inventory.",
          icon: (
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
            </svg>
          )
        }
      ]
    }
  ];

  const panelId = (id) => `features-panel-${id.replace(/[^a-z]+/gi, '-').toLowerCase()}`;

  return (
    <section className="features-section" id="features">
      <div className="container">
        <div className="features-header">
          <h2>Features</h2>
          <p>Everything you need to plan, manage, and grow a smarter shrimp crop.</p>
        </div>
        
        <div className="features-tabs-container">
          <div className="features-tabs" role="tablist" aria-label="Feature categories">
            {categories.map((category) => (
              <button
                key={category.id}
                type="button"
                role="tab"
                id={`${panelId(category.id)}-tab`}
                aria-selected={activeTab === category.id}
                aria-controls={panelId(category.id)}
                className={`tab-btn ${activeTab === category.id ? 'active' : ''}`}
                onClick={() => setActiveTab(category.id)}
              >
                {category.id}
              </button>
            ))}
          </div>
        </div>

        {/* Every panel is rendered into the static HTML so crawlers and AI
            answer engines see all features; inactive panels are only hidden. */}
        <div className="features-grid-wrapper">
          {categories.map((category) => (
          <div
            className="features-grid"
            key={category.id}
            id={panelId(category.id)}
            role="tabpanel"
            aria-labelledby={`${panelId(category.id)}-tab`}
            hidden={activeTab !== category.id}
          >
            {category.features.map((feature, index) => (
              <div className="feature-card" key={index}>
                <div className="feature-card-header">
                  <div className="feature-icon">
                    {feature.icon}
                  </div>
                  <h3 className="feature-title">{feature.title}</h3>
                </div>
                <div className="feature-content">
                  <p className="feature-desc">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
          ))}
        </div>
      </div>

      <style>{`
        .features-section {
          padding: 60px 0 80px;
          background-color: #ffffff; /* Clean white background */
        }

        .features-header {
          text-align: center;
          max-width: 600px;
          margin: 0 auto 32px;
        }

        .features-header h2 {
          font-family: var(--font-main);
          font-size: 42px;
          line-height: 1.15;
          font-weight: 600;
          letter-spacing: -1px;
          color: #0B1B33;
          margin-bottom: 16px;
        }

        .features-header p {
          font-family: var(--font-main);
          font-size: 16px;
          line-height: 26px;
          font-weight: 400;
          color: #52647A;
        }

        .features-tabs-container {
          display: flex;
          justify-content: center;
          margin-bottom: 32px;
          width: 100%;
        }

        .features-tabs {
          display: flex;
          background: #f8fafc;
          padding: 6px;
          border-radius: 12px;
          border: 1px solid rgba(0,0,0,0.04);
          overflow-x: auto;
          scrollbar-width: none; /* Firefox */
          max-width: 100%;
        }

        .features-tabs::-webkit-scrollbar {
          display: none; /* Safari and Chrome */
        }

        .tab-btn {
          background: transparent;
          border: none;
          padding: 12px 24px;
          border-radius: 8px;
          font-size: 1.05rem;
          font-weight: 500;
          color: #64748b;
          cursor: pointer;
          transition: all 0.25s ease;
          white-space: nowrap;
        }

        .tab-btn:hover {
          color: var(--color-text-main);
        }

        .tab-btn.active {
          background: #ffffff;
          color: var(--color-primary-strong);
          box-shadow: 0 2px 10px rgba(0,0,0,0.05);
          font-weight: 600;
        }

        .features-grid-wrapper {
          min-height: 380px; /* Keeps height stable during transitions */
          position: relative;
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
          animation: fadeSlideUp 0.4s ease forwards;
        }

        .features-grid[hidden] {
          display: none;
        }

        @keyframes fadeSlideUp {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .feature-card {
          background-color: #ffffff;
          border: 1px solid #f1f5f9;
          border-radius: 12px;
          padding: 24px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.02);
          height: 100%;
        }

        .feature-card:hover {
          border-color: #e2e8f0;
          box-shadow: 0 8px 30px rgba(1, 127, 227, 0.05);
        }
        
        .feature-card-header {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 12px;
        }

        .feature-icon {
          width: 36px;
          height: 36px;
          background-color: rgba(1, 127, 227, 0.08);
          color: var(--color-primary);
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .feature-icon svg {
          width: 20px;
          height: 20px;
          stroke-width: 1.5;
        }

        .feature-title {
          font-family: var(--font-main);
          font-size: 18px;
          font-weight: 600;
          color: #0B1B33;
          margin: 0;
        }

        .feature-desc {
          font-family: var(--font-main);
          font-size: 16px;
          font-weight: 400;
          color: #52647A;
          line-height: 26px;
          margin: 0;
        }

        @media (max-width: 900px) {
          .features-grid {
            grid-template-columns: 1fr;
          }
          .features-grid-wrapper {
            min-height: auto;
          }
        }

        @media (max-width: 600px) {
          .features-section {
            padding: 60px 0;
          }
          .features-tabs {
            justify-content: flex-start;
            padding: 4px;
            padding-right: 24px; /* Ensure last tab is not cut off when scrolling */
          }
          .tab-btn {
            padding: 10px 16px;
            font-size: 0.95rem;
          }
        }
      `}</style>
    </section>
  );
}
