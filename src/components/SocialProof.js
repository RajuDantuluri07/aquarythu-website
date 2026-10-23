export default function SocialProof() {
  return (
    <section className="social-proof">
      <div className="container">
        <div className="proof-content">
          <p className="proof-text">Trusted by shrimp farmers across India</p>
        </div>
      </div>
      <style>{`
        .social-proof {
          padding: 24px 0;
          background: #ffffff;
          border-bottom: 1px solid rgba(0, 0, 0, 0.05);
        }

        .proof-text {
          text-align: center;
          color: var(--color-text-muted);
          margin: 0;
          font-weight: 500;
          font-size: 1.1rem;
          letter-spacing: 0.02em;
        }
      `}</style>
    </section>
  );
}
