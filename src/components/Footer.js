"use client";

export default function Footer() {
  // On the homepage, smooth-scroll to the section. On other pages the element
  // doesn't exist, so let the browser follow the /#id link to the homepage.
  const handleScroll = (e, id) => {
    const element = document.getElementById(id);
    if (element) {
      e.preventDefault();
      e.stopPropagation();
      const yOffset = -80; // Offset for sticky header
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
      
      // Forcefully clean the URL hash if it leaked through
      if (window.location.hash) {
        window.history.replaceState(null, '', window.location.pathname);
      }
    }
  };
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <img src="/logo-white.png" alt="AquaRythu" width={144} height={48} style={{ height: '48px', width: 'auto', marginBottom: '12px' }} />
            <p>Shrimp farm management software for India.</p>
          </div>
          <div className="footer-links">
            <div className="link-group">
              <p className="link-group-title">Product</p>
              <a href="/how-it-works">How It Works</a>
              <a href="/#features" onClick={(e) => handleScroll(e, 'features')}>Features</a>
              <a href="/#faq" onClick={(e) => handleScroll(e, 'faq')}>FAQ</a>
              <a href="https://app.aquarythu.com/">Start free trial</a>
            </div>
            <div className="link-group">
              <p className="link-group-title">Company</p>
              <a href="/about">About Us</a>
              <a href="/contact">Contact</a>
              <a href="/privacy">Privacy Policy</a>
              <a href="/terms">Terms of Service</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} AquaRythu Inc. All rights reserved.</p>
        </div>
      </div>
      <style>{`
        .footer {
          background-color: var(--color-primary);
          padding: 48px 0 24px;
          border-top: 1px solid rgba(255,255,255,0.1);
        }

        .footer-content {
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 40px;
          margin-bottom: 40px;
        }

        .footer-brand p {
          color: rgba(255, 255, 255, 0.9);
        }

        .footer-links {
          display: flex;
          gap: 80px;
        }

        .link-group-title {
          margin: 0 0 16px;
          font-weight: 600;
          color: #ffffff;
        }

        .link-group a {
          display: block;
          color: rgba(255, 255, 255, 0.8);
          margin-bottom: 8px;
          transition: color 0.2s ease, opacity 0.2s ease;
        }

        .link-group a:hover {
          color: #ffffff;
          opacity: 1;
        }

        .footer-bottom {
          text-align: center;
          color: rgba(255, 255, 255, 0.7);
          font-size: 0.85rem;
          padding-top: 24px;
          border-top: 1px solid rgba(255,255,255,0.2);
        }

        @media (max-width: 768px) {
          .footer {
            padding: 40px 0 24px;
          }
          .footer-content {
            flex-direction: column;
            gap: 32px;
          }
          .footer-links {
            flex-direction: column;
            gap: 32px;
          }
        }
      `}</style>
    </footer>
  );
}
