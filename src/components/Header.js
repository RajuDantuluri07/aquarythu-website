export default function Header() {
  return (
    <header className="header">
      <div className="container header-container">
        <a href="/" className="logo">
          <img src="/logo.png" alt="AquaRythu" width={160} height={48} />
        </a>

        <div className="header-actions">
          <a
            href="https://play.google.com/store/apps/details?id=com.aquarythu.app&hl=en_IN"
            className="header-play-store"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/google-play-badge.png" alt="Get it on Google Play" width={135} height={40} />
          </a>
          <a href="https://app.aquarythu.com/login" className="header-login">Log in</a>
          <a href="https://app.aquarythu.com/" className="header-cta">Start free trial</a>
        </div>
      </div>

      <style>{`
        .header {
          background-color: #ffffff;
          padding: 12px 0;
          position: sticky;
          top: 0;
          z-index: 100;
          border-bottom: 1px solid rgba(0, 0, 0, 0.06);
          box-shadow: 0 4px 20px rgba(0,0,0,0.02);
        }

        .header-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          position: relative;
        }

        .logo {
          display: flex;
          align-items: center;
        }

        .logo img {
          height: 48px;
          width: auto;
        }

        .header-actions {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .header-play-store {
          display: inline-flex;
          align-items: center;
          transition: opacity 0.2s ease;
        }

        .header-play-store:hover {
          opacity: 0.85;
        }

        .header-play-store img {
          height: 40px;
          width: auto;
          display: block;
        }

        .header-login {
          white-space: nowrap;
          font-family: var(--font-main);
          font-size: 15px;
          font-weight: 600;
          color: #0B1B33;
          padding: 10px 14px;
          border-radius: 10px;
          transition: color 0.2s ease;
        }

        .header-login:hover {
          color: #017FE3;
        }

        .header-cta {
          font-family: var(--font-main);
          font-size: 15px;
          font-weight: 700;
          color: #ffffff;
          background: var(--color-primary-strong);
          padding: 10px 18px;
          border-radius: 10px;
          white-space: nowrap;
          transition: background 0.2s ease;
        }

        .header-cta:hover {
          background: #0068BD;
        }

        @media (max-width: 768px) {
          .header {
            padding: 8px 0;
          }
          .header-actions {
            margin-left: auto;
            gap: 6px;
          }
          .header-play-store img {
            height: 32px;
          }
          .header-login {
            padding: 8px 8px;
            font-size: 14px;
          }
          .header-cta {
            padding: 8px 12px;
            font-size: 14px;
          }
        }

        @media (max-width: 480px) {
          .header-login {
            display: none;
          }
          .logo img {
            height: 32px;
          }
          .header-play-store img {
            height: 28px;
          }
        }
      `}</style>
    </header>
  );
}
