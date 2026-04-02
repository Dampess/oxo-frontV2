"use client";

import Image from "next/image";
import "../../../styles/pages/individual&business.scss";

export default function BusinessesPage() {
  return (
    <main className="businesses-page">
      {/* HERO */}
      <section className="hero hero-main">
        <div className="container hero-grid">
          <div className="hero-text">
            <h1>OXO for Businesses</h1>
            <p>
              Protect your company’s data, employees, and clients with
              enterprise-grade cybersecurity tools.
            </p>
          </div>
          <div className="hero-visual">
            <Image
              src="/handcheck.jpg"
              alt="Business protection"
              width={400}
              height={300}
            />
          </div>
        </div>
      </section>

      {/* THREATS STATISTICS */}
      <section className="info-section">
        <h2>Cyber threats in 2025 for businesses</h2>
        <ul>
          <li>🛡️ 73% of businesses face phishing or spear-phishing attacks</li>
          <li>💻 59% experience ransomware attempts</li>
          <li>🔒 Average cost of a breach: $3.2M per incident</li>
          <li>📈 41% of breaches come from compromised employee credentials</li>
        </ul>
      </section>

      {/* PROTECTION */}
      <section className="info-section alt">
        <h2>How OXO protects your business</h2>
        <ul>
          <li>🛡️ Endpoint security for all company devices</li>
          <li>📧 Advanced anti-phishing & spam filters</li>
          <li>🔐 Centralized password vault for teams</li>
          <li>⚡ Real-time threat intelligence and alerts</li>
        </ul>
      </section>

      {/* CTA */}
      <section className="cta">
        <h2>Secure your business operations</h2>
        <p>Protect your company, employees, and clients from cyber threats.</p>
        <a href="/pricing" className="btn primary">
          Explore Plans
        </a>
      </section>
    </main>
  );
}
