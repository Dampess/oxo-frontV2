"use client";

import Image from "next/image";
import "../../../styles/pages/tools.scss";

export default function AntiPhishingPage() {
  return (
    <main className="tools-page">
      {/* HERO */}
      <section className="hero hero-main">
        <div className="container hero-grid">
          <div className="hero-text">
            <h1>Anti-Phishing & Spam Protection</h1>
            <p>
              Detect phishing emails and spam before they compromise your
              credentials or install malware.
            </p>
          </div>
          <div className="hero-visual">
            <Image
              src="/email-security.webp"
              alt="Anti-Phishing illustration"
              width={400}
              height={300}
            />
          </div>
        </div>
      </section>

      {/* WHY PROTECT */}
      <section className="info-section alt">
        <h2>Why phishing & spam are dangerous</h2>
        <ul>
          <li>🎣 Steal credentials and financial data</li>
          <li>💻 Install malware silently</li>
          <li>⚠️ Lead to identity theft or fraud</li>
        </ul>
      </section>

      {/* HOW IT WORKS */}
      <section className="info-section alt">
        <h2>How OXO protects you</h2>
        <ul>
          <li>🧠 AI-powered email scanning</li>
          <li>🔍 Detect suspicious links and attachments</li>
          <li>⚡ Real-time alerts for phishing attempts</li>
        </ul>
      </section>

      {/* CTA */}
      <section className="cta">
        <h2>Stay safe from phishing</h2>
        <a href="/pricing" className="btn primary">
          Explore Plans
        </a>
      </section>
    </main>
  );
}
