"use client";

import Image from "next/image";
import "../../../styles/pages/individual&business.scss";

export default function IndividualsPage() {
  return (
    <main className="individuals-page">
      {/* HERO */}
      <section className="hero hero-main">
        <div className="container hero-grid">
          <div className="hero-text">
            <h1>OXO for Individuals</h1>
            <p>
              Protect your personal accounts, devices, and online activity with
              our all-in-one security suite.
            </p>
          </div>
          <div className="hero-visual">
            <Image
              src="/justStart.jpg"
              alt="Individuals protection"
              width={400}
              height={300}
            />
          </div>
        </div>
      </section>

      {/* THREATS STATISTICS */}
      <section className="info-section">
        <h2>Cyber threats in 2025 for individuals</h2>
        <ul>
          <li>🎣 62% of phishing attacks target personal emails</li>
          <li>
            💻 48% of individuals experience malware or ransomware attempts
          </li>
          <li>
            🔑 39% of account breaches are due to weak or reused passwords
          </li>
        </ul>
      </section>

      {/* PROTECTION */}
      <section className="info-section alt">
        <h2>How OXO protects you</h2>
        <ul>
          <li>🔐 Password vault with real-time breach detection</li>
          <li>🛡️ Antivirus & malware scanning on all devices</li>
          <li>📧 Anti-phishing and spam email protection</li>
          <li>🌐 Safe link scanning and real-time alerts</li>
        </ul>
      </section>

      {/* CTA */}
      <section className="cta">
        <h2>Secure your digital life</h2>
        <p>Start protecting your personal data today with OXO.</p>
        <a href="/pricing" className="btn primary">
          Get Started
        </a>
      </section>
    </main>
  );
}
