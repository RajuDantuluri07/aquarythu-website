const PLATFORM_STATS = {
  farms: "120+",
  ponds: "360+",
  acres: "798+",
  languages: "8",
};

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="container hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="hero-title-line">Smart Shrimp Farming App</span>
            <span className="hero-title-line highlight-blue">Built for Shrimp Farmers</span>
          </h1>
          <p className="hero-subtitle">
            Manage ponds, feed, water quality, sampling, harvests and farm records — all in one app.
          </p>
          <div className="hero-cta-group">
            <a href="https://app.aquarythu.com/" className="btn-primary">Start Free</a>
          </div>
        </div>
        
        <div className="hero-visual">
          <img 
            src="/HERO1.png" 
            alt="AquaRythu Dashboard" 
            className="hero-img-combined"
          />
        </div>

        <div className="platform-stats">
          <div className="stat-item">
            <span className="stat-number">{PLATFORM_STATS.farms}</span>
            <span className="stat-label">FARMS</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <span className="stat-number">{PLATFORM_STATS.ponds}</span>
            <span className="stat-label">PONDS</span>
          </div>
          <div className="stat-divider hidden-mobile"></div>
          <div className="stat-item">
            <span className="stat-number">{PLATFORM_STATS.acres}</span>
            <span className="stat-label">ACRES</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <span className="stat-number">{PLATFORM_STATS.languages}</span>
            <span className="stat-label">LANGUAGES</span>
          </div>
        </div>
      </div>

      <style>{`
        .hero-section {
          padding-top: 72px;
          padding-bottom: 60px;
          display: flex;
          align-items: flex-start;
          position: relative;
          background-color: #ffffff;
        }

        /* Very subtle ambient background glow */
        .hero-section::before {
          content: '';
          position: absolute;
          top: -30%;
          left: 50%;
          transform: translateX(-50%);
          width: 800px;
          height: 800px;
          background: radial-gradient(circle, rgba(1, 127, 227, 0.05) 0%, rgba(255, 255, 255, 0) 70%);
          border-radius: 50%;
          z-index: 0;
          pointer-events: none;
        }

        .hero-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 16px; 
          position: relative;
          z-index: 1;
          width: 100%;
          max-width: 100%;
          padding: 0 20px;
          box-sizing: border-box;
        }

        .hero-content {
          width: 100%;
          max-width: 850px;
          display: flex;
          flex-direction: column;
          align-items: center;
          z-index: 2;
          margin-bottom: -16px; /* Pulls the image closer to the CTA */
        }

        .hero-title {
          width: 100%;
          max-width: 100%;
          text-align: center;
          overflow-wrap: break-word;
          font-family: "Google Sans", sans-serif;
          font-size: 60px;
          line-height: 1.18;
          font-weight: 600; 
          color: #0B1B33;
          margin-bottom: 0px;
          letter-spacing: -1.5px;
        }

        .hero-title-line {
          display: block;
          white-space: nowrap;
        }

        .highlight-blue {
          color: var(--color-primary);
        }

        .hero-subtitle {
          width: 100%;
          max-width: 540px;
          margin-left: auto;
          margin-right: auto;
          text-align: center;
          overflow-wrap: break-word;
          font-family: "Google Sans", sans-serif;
          font-size: 18px;
          line-height: 28px;
          color: #52647A;
          margin-top: 14px;
          margin-bottom: 0;
          font-weight: 400;
        }

        .hero-cta-group {
          display: flex;
          justify-content: center;
          gap: 16px;
          margin-top: 28px;
        }



        .hero-visual {
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 0 20px;
          margin-top: 16px;
        }

        .hero-img-combined {
          width: 100%;
          max-width: 980px; 
          height: auto;
          display: block;
          object-fit: contain;
          transition: transform 0.5s ease;
          /* Subtle shadow for a premium feel without being overly heavy */
          filter: drop-shadow(0 20px 30px rgba(0, 0, 0, 0.15));
          z-index: 10;
        }

        .hero-img-combined:hover {
          transform: translateY(-5px);
        }

        .platform-stats {
          width: 100%;
          max-width: 900px;
          margin: 48px auto 0;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0 20px;
        }

        .stat-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 4px;
          flex: 1;
        }

        .stat-number {
          font-family: "Google Sans", sans-serif;
          font-size: 36px;
          font-weight: 700;
          color: #017FE3;
          line-height: 1.1;
        }

        .stat-label {
          font-family: "Google Sans", sans-serif;
          font-size: 13px;
          font-weight: 600;
          color: #52647A;
          letter-spacing: 1px;
          text-transform: uppercase;
        }

        .stat-divider {
          width: 1px;
          height: 40px;
          background-color: rgba(0, 0, 0, 0.08);
        }

        @media (max-width: 1100px) {
          .hero-title { font-size: 3.8rem; }
        }

        @media (max-width: 968px) {
          .hero-section {
            padding-top: 50px;
            padding-bottom: 40px;
          }
          .hero-container {
            gap: 20px;
          }
          .hero-title {
            font-size: 50px;
          }
        }
        
        @media (max-width: 600px) {
          .hero-section {
            padding-top: 48px;
            padding-bottom: 32px;
            width: 100%;
            overflow: hidden;
            box-sizing: border-box;
          }
          .hero-container {
            padding-left: 24px;
            padding-right: 24px;
            width: 100%;
            max-width: 100vw;
            box-sizing: border-box;
          }
          .hero-title { 
            font-size: min(31px, 8vw);
            line-height: 1.12;
            letter-spacing: -1.5px;
            font-weight: 700;
            width: 100%;
            max-width: 100%;
            box-sizing: border-box;
            margin: 0 auto;
          }
          .hero-subtitle {
            font-size: 19px;
            line-height: 1.55;
            margin-top: 22px;
            max-width: 350px;
            margin-left: auto;
            margin-right: auto;
          }
          .hero-cta-group {
            flex-direction: column;
            width: 100%;
            margin-top: 26px;
            gap: 12px;
          }
          .hero-cta-group a {
            width: 100%;
            text-align: center;
            min-height: 56px;
            border-radius: 12px;
            font-size: 18px;
            font-weight: 700;
            display: flex;
            align-items: center;
            justify-content: center;
            box-sizing: border-box;
          }
          .hero-visual {
            padding: 0;
            margin-top: 36px;
          }

          .hero-img-combined {
            width: 100%;
            max-width: none;
            height: auto;
            display: block;
            object-fit: contain;
            margin: 0 auto;
            transform: none;
          }
          
          .platform-stats {
            display: grid;
            grid-template-columns: 1fr 1px 1fr;
            grid-template-rows: auto auto;
            gap: 24px 0;
            margin-top: 40px;
            padding: 0;
            width: 100%;
            max-width: 320px;
          }
          
          .stat-item {
            flex: none;
            width: 100%;
          }
          
          .stat-number {
            font-size: 28px;
          }
          
          .stat-divider {
            height: 100%;
            margin: 0 auto;
          }
          
          .stat-divider.hidden-mobile {
            display: none;
          }
        }

        @media (max-width: 380px) {
          .hero-container {
            padding-left: 20px;
            padding-right: 20px;
          }
        }
      `}</style>
    </section>
  );
}
