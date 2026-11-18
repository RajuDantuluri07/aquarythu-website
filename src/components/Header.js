"use client";

import { useState } from 'react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavigation = (e, path, hash) => {
    // If we are on the homepage and clicking a hash link, scroll to it
    if (window.location.pathname === '/' && hash) {
      e.preventDefault();
      e.stopPropagation(); // Stop Next.js from intercepting and pushing the hash to the URL
      const element = document.getElementById(hash.substring(1));
      if (element) {
        const yOffset = -80; // Offset for sticky header
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
        
        // Forcefully clean the URL hash if it leaked through
        if (window.location.hash) {
          window.history.replaceState(null, '', window.location.pathname);
        }
      }
    }
    // Otherwise, let the default anchor behavior navigate to /#hash or /path
    setMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="container header-container">
        <a href="/" className="logo">
          <img src="/logo.png" alt="AquaRythu" width={160} height={48} />
        </a>
        
        <nav className="nav-links">
          <a href="/how-it-works">How It Works</a>
          <a href="/#features" onClick={(e) => handleNavigation(e, '/', '#features')}>Features</a>
          <a href="/#faq" onClick={(e) => handleNavigation(e, '/', '#faq')}>FAQ</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
        </nav>

        <div className="header-actions">
          <a href="https://app.aquarythu.com/login" className="header-login">Log in</a>
          <a href="https://app.aquarythu.com/" className="header-cta">Start free trial</a>
        </div>
        
        {/* Menu Icon (Mobile) */}
        <button 
          className="menu-button" 
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          )}
        </button>

        {/* Dropdown Menu (Mobile) */}
        {menuOpen && (
          <div className="dropdown-menu">
            <a href="/how-it-works" onClick={() => setMenuOpen(false)}>How It Works</a>
            <a href="/#features" onClick={(e) => handleNavigation(e, '/', '#features')}>Features</a>
            <a href="/#faq" onClick={(e) => handleNavigation(e, '/', '#faq')}>FAQ</a>
            <a href="/about" onClick={() => setMenuOpen(false)}>About</a>
            <a href="/contact" onClick={() => setMenuOpen(false)}>Contact</a>
            <a href="https://app.aquarythu.com/login" onClick={() => setMenuOpen(false)}>Log in</a>
            <a href="https://app.aquarythu.com/" onClick={() => setMenuOpen(false)}>Start free trial</a>
          </div>
        )}
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

        .nav-links {
          display: flex;
          gap: 32px;
          align-items: center;
        }

        .nav-links a {
          font-family: var(--font-main);
          font-size: 15px;
          line-height: 24px;
          font-weight: 500;
          color: #0B1B33;
          transition: color 0.2s ease;
        }

        .nav-links a:hover {
          color: #017FE3;
        }

        .header-actions {
          display: flex;
          align-items: center;
          gap: 12px;
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

        .menu-button {
          display: none !important;
          background: none;
          border: none;
          color: var(--color-text-main);
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 8px;
          transition: color 0.2s;
        }

        .menu-button:hover {
          color: var(--color-primary);
        }

        .dropdown-menu {
          position: absolute;
          top: 100%;
          right: 24px;
          margin-top: 16px;
          background: #ffffff;
          border: 1px solid var(--color-border);
          border-radius: 12px;
          box-shadow: 0 10px 40px rgba(0,0,0,0.1);
          display: flex;
          flex-direction: column;
          min-width: 200px;
          overflow: hidden;
          z-index: 200;
        }

        .dropdown-menu a {
          padding: 16px 24px;
          color: var(--color-text-main);
          font-weight: 500;
          font-size: 1.05rem;
          text-decoration: none;
          border-bottom: 1px solid var(--color-border);
          transition: background 0.2s;
        }

        .dropdown-menu a:last-child {
          border-bottom: none;
        }

        .dropdown-menu a:hover {
          background: rgba(1, 127, 227, 0.05);
          color: var(--color-primary);
        }

        @media (max-width: 768px) {
          .header {
            padding: 8px 0;
          }
          .nav-links {
            display: none;
          }
          .menu-button {
            display: flex !important;
          }
          .header-actions {
            margin-left: auto;
            margin-right: 4px;
            gap: 4px;
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

        @media (max-width: 400px) {
          .header-login {
            display: none;
          }
          .logo img {
            height: 32px;
          }
          .dropdown-menu {
            right: 24px;
            left: 24px;
            width: auto;
          }
        }
      `}</style>
    </header>
  );
}
