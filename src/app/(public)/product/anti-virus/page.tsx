"use client";

import Image from "next/image";
import "../../../styles/pages/tools.scss";

export default function AntivirusPage() {
  return (
    <main className="tools-page">
      {/* HERO */}
      <section className="hero hero-main">
        <div className="container hero-grid">
          <div className="hero-text">
            <h1>Antivirus & Malware Protection</h1>
            <p>
              Protect your devices from viruses, malware, and ransomware with
              real-time scanning and AI-powered detection.
            </p>
          </div>
          <div className="hero-visual">
            <Image
              src="/malware-attack.webp"
              alt="Antivirus illustration"
              width={400}
              height={300}
            />
          </div>
        </div>
      </section>

      {/* WHY PROTECT */}
      <section className="info-section alt">
        <h2>Why antivirus is essential</h2>
        <ul>
          <li>💻 Prevent malware infections</li>
          <li>🔒 Protect sensitive data</li>
          <li>⚡ Keep devices fast and safe</li>
        </ul>
      </section>

      {/* HOW IT WORKS */}
      <section className="info-section alt">
        <h2>How our antivirus works</h2>
        <ul>
          <li>🧠 AI detection of suspicious files</li>
          <li>🛡️ Real-time scanning of apps and downloads</li>
          <li>🔔 Instant alerts for potential threats</li>
        </ul>
      </section>

      {/* CTA */}
      <section className="cta">
        <h2>Stay protected from malware</h2>
        <a href="/pricing" className="btn primary">
          Explore Plans
        </a>
      </section>
    </main>
  );
}
