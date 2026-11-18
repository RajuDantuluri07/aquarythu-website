"use client";
import { useState } from 'react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  // Answer-engine friendly: each answer opens with a direct one-sentence
  // answer and stands on its own without the question. Keep every claim true
  // for the live product; pricing details live in the app, not here.
  const faqs = [
    {
      question: "What is AquaRythu?",
      answer: "AquaRythu is shrimp farm management software for shrimp farmers in India. It replaces the paper farm log book with digital records of feed, tray checks, water quality, sampling, expenses and harvests for every pond, and uses that data to give Smart Feed recommendations."
    },
    {
      question: "Which shrimp species does AquaRythu support?",
      answer: "AquaRythu currently supports Pacific white shrimp (Litopenaeus vannamei). Its feed plans, growth tracking and FCR calculations are built for Vannamei culture."
    },
    {
      question: "Is AquaRythu free to use?",
      answer: "Yes, you can start free at app.aquarythu.com. Daily pond records and Smart Feed are free; paid plans add advanced reports and analytics for larger farms."
    },
    {
      question: "What is the difference between blind feeding and Smart Feed?",
      answer: "Blind feeding is a fixed feed plan for the early days of culture, before tray readings are reliable: DOC 1–10 for nursery-raised seed and DOC 1–30 for hatchery seed. After that, Smart Feed adjusts each day's feed using tray observations, days of culture (DOC), estimated biomass and recent feeding history."
    },
    {
      question: "How does AquaRythu calculate FCR?",
      answer: "FCR (feed conversion ratio) is the total feed given divided by the shrimp biomass produced. AquaRythu calculates it automatically from your logged feed rounds and sampling data (average body weight and survival), so you can see FCR for each pond during the crop and at harvest."
    },
    {
      question: "Does the AquaRythu app work offline?",
      answer: "Yes. You can record feed rounds, tray checks and sampling at the pond without internet. Records are saved on the phone and sync automatically when the connection returns."
    },
    {
      question: "Which languages does AquaRythu support?",
      answer: "AquaRythu is available in 8 languages: English, Telugu, Hindi, Tamil, Bengali, Gujarati, Malayalam and Odia."
    },
    {
      question: "Can my farm team use AquaRythu?",
      answer: "Yes. Farm owners can invite supervisors and workers by email, and each person gets role-based access. Workers can be limited to the ponds they are assigned to, and financial information stays restricted to the owner."
    },
    {
      question: "Can I manage multiple farms and ponds?",
      answer: "Yes. You can add several farms, each with multiple ponds, and track every pond's crop separately. The number of farms and ponds you can add depends on your plan."
    },
    {
      question: "Which devices does AquaRythu run on?",
      answer: "AquaRythu runs in the web browser of any smartphone, tablet or computer at app.aquarythu.com, with no installation needed."
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
          <p>Answers to common questions about AquaRythu shrimp farm management software.</p>
        </div>

        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`faq-item ${openIndex === index ? 'active' : ''}`}
            >
              <h3 className="faq-heading">
                <button
                  type="button"
                  className="faq-question"
                  aria-expanded={openIndex === index}
                  aria-controls={`faq-answer-${index}`}
                  onClick={() => toggleFAQ(index)}
                >
                  {faq.question}
                  <span className="faq-icon" aria-hidden="true">{openIndex === index ? '−' : '+'}</span>
                </button>
              </h3>
              <div
                id={`faq-answer-${index}`}
                className="faq-answer-wrapper"
                style={{ maxHeight: openIndex === index ? '600px' : '0' }}
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
          font-family: var(--font-main);
          font-size: 42px;
          line-height: 1.15;
          font-weight: 600;
          letter-spacing: -1px;
          color: #0B1B33;
          margin-bottom: 16px;
        }

        .faq-header p {
          font-family: var(--font-main);
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

        .faq-heading {
          margin: 0;
          font-size: inherit;
        }

        .faq-question {
          font-family: inherit;
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
