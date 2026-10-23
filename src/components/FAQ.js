"use client";
import { useState } from 'react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What is AquaRythu™?",
      answer: "AquaRythu™ is a shrimp farming platform that helps reduce feed waste, improve growth, and increase farm profitability."
    },
    {
      question: "Does the app work offline?",
      answer: "Yes. You can record feed rounds, tray checks, and sampling data without internet. Data is stored locally and synced automatically once you're back online."
    },
    {
      question: "What is the difference between Blind Feed and Smart Feed?",
      answer: "Blind Feed is a fixed feeding schedule used in early stages (DOC 1-30). Smart Feed is our engine that provides adaptive recommendations based on tray observations and pond data."
    },
    {
      question: "What are the benefits of the PRO plan?",
      answer: "PRO unlocks the Smart Feed Engine, adaptive recommendations, tray intelligence, growth tracking, unlimited ponds, and PDF reports."
    },
    {
      question: "Can I manage multiple ponds?",
      answer: "Yes. The number of ponds available depends on your subscription plan, with PRO offering unlimited pond management."
    },
    {
      question: "How are feed recommendations generated?",
      answer: "Recommendations are dynamically generated based on pond phase, DOC (Day of Culture), historical feeding data, and daily tray observations."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <section className="faq-section section" id="faq">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="container">
        <div className="faq-header">
          <h2>Frequently Asked Questions</h2>
          <p>Everything you need to know about AquaRythu™.</p>
        </div>

        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`faq-item ${openIndex === index ? 'active' : ''}`}
            >
              <button 
                className="faq-question" 
                onClick={() => toggleFAQ(index)}
              >
                {faq.question}
                <span className="faq-icon">{openIndex === index ? '−' : '+'}</span>
              </button>
              <div 
                className="faq-answer-wrapper" 
                style={{ maxHeight: openIndex === index ? '200px' : '0' }}
              >
                <div className="faq-answer">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .faq-section {
          background-color: var(--color-bg-deep);
          padding: 60px 0;
        }

        .faq-header {
          text-align: center;
          margin-bottom: 32px;
        }

        .faq-header h2 {
          font-family: "Google Sans", sans-serif;
          font-size: 42px;
          line-height: 1.15;
          font-weight: 600;
          letter-spacing: -1px;
          color: #0B1B33;
          margin-bottom: 16px;
        }

        .faq-header p {
          font-family: "Google Sans", sans-serif;
          font-size: 16px;
          line-height: 26px;
          font-weight: 400;
          color: #52647A;
        }

        .faq-list {
          max-width: 800px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .faq-item {
          background-color: #ffffff;
          border: 1px solid var(--color-border);
          border-radius: 12px;
          overflow: hidden;
          transition: all 0.3s ease;
        }

        .faq-item:hover {
          border-color: var(--color-primary);
        }

        .faq-item.active {
          border-color: var(--color-primary);
          box-shadow: 0 4px 20px rgba(1, 127, 227, 0.1);
        }

        .faq-question {
          width: 100%;
          text-align: left;
          padding: 24px;
          background: none;
          border: none;
          font-size: 1.1rem;
          font-weight: 600;
          color: var(--color-text-main);
          cursor: pointer;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .faq-icon {
          font-size: 1.5rem;
          color: var(--color-primary);
          transition: transform 0.3s ease;
        }

        .faq-answer-wrapper {
          transition: max-height 0.3s ease-in-out;
        }

        .faq-answer {
          padding: 0 24px 24px;
          color: var(--color-text-muted);
          line-height: 1.6;
        }
      `}</style>
    </section>
  );
}
