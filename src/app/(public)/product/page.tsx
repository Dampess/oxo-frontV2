"use client";

import Link from "next/link";
import Image from "next/image";
import "../../styles/pages/product.scss";

export default function ProductPage() {
  return (
    <main className="product-page">
      {/* ================= HERO ================= */}
      <section className="hero hero-main">
        <div className="container hero-grid">
          <div className="hero-text">
            <h1>OXO Security Suite</h1>
            <p>
              Protect your devices, emails, passwords, and links in real-time.
              Stay safe online with enterprise-level cybersecurity made simple.
            </p>
            <div className="hero-actions">
              <Link href="/pricing" className="btn primary">
                Get Started
              </Link>
              <Link href="/tools" className="btn secondary">
                Explore Tools
              </Link>
            </div>
          </div>

          <div className="hero-visual">
            <Image
              src="/dashboard-mockup.png"
              alt="OXO product illustration"
              width={500}
              height={400}
            />
          </div>
        </div>
      </section>

      {/* ================= PRODUCTS LIST ================= */}
      <section className="products-list">
        <div className="container">
          <h2>Our Products</h2>
          <div className="products-grid">
            {/* Antivirus */}
            <div className="product-card">
              <h3>Antivirus</h3>
              <p>
                Detect and remove viruses, malware, and ransomware across all
                your devices.
              </p>
              <ul>
                <li>✔ Real-time virus scanning</li>
                <li>✔ Automatic updates</li>
                <li>✔ Cross-device protection</li>
              </ul>
              <Link href="/products/antivirus" className="btn primary">
                Learn More
              </Link>
            </div>

            {/* Anti-Spam */}
            <div className="product-card">
              <h3>Anti-Spam</h3>
              <p>
                Filter out unwanted and malicious emails before they reach your
                inbox.
              </p>
              <ul>
                <li>✔ Phishing email detection</li>
                <li>✔ Smart spam filters</li>
                <li>✔ Inbox safety scoring</li>
              </ul>
              <Link href="/products/antispam" className="btn primary">
                Learn More
              </Link>
            </div>

            {/* Anti-Malware */}
            <div className="product-card">
              <h3>Anti-Malware</h3>
              <p>
                Advanced detection of malware, spyware, and other threats in
                real-time.
              </p>
              <ul>
                <li>✔ Zero-day threat detection</li>
                <li>✔ Deep system scans</li>
                <li>✔ Automatic threat removal</li>
              </ul>
              <Link href="/products/antimalware" className="btn primary">
                Learn More
              </Link>
            </div>

            {/* Phishing Protection */}
            <div className="product-card">
              <h3>Phishing Protection</h3>
              <p>
                Identify and block phishing websites and emails before they
                compromise your credentials.
              </p>
              <ul>
                <li>✔ Real-time URL scanning</li>
                <li>✔ Email threat analysis</li>
                <li>✔ Fraud alert notifications</li>
              </ul>
              <Link href="/products/phishing" className="btn primary">
                Learn More
              </Link>
            </div>

            {/* Password Vault */}
            <div className="product-card">
              <h3>Password Vault</h3>
              <p>
                Store and manage all your passwords securely in one encrypted
                vault.
              </p>
              <ul>
                <li>✔ Secure password storage</li>
                <li>✔ Auto-fill credentials</li>
                <li>✔ Generate strong passwords</li>
                <li>✔ Cross-device access</li>
              </ul>
              <Link href="/products/password-vault" className="btn primary">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ================= HOW IT WORKS ================= */}
      <section className="product-steps alt">
        <div className="container">
          <h2>How OXO Works</h2>
          <div className="steps-grid">
            <div className="step">
              <span>1</span>
              <h3>Install & Connect</h3>
              <p>
                Install OXO and connect your devices, emails, and browsers
                securely.
              </p>
            </div>
            <div className="step">
              <span>2</span>
              <h3>Real-Time Monitoring</h3>
              <p>
                Continuous scanning of emails, links, and system files for
                threats.
              </p>
            </div>
            <div className="step">
              <span>3</span>
              <h3>Protect & Alert</h3>
              <p>
                Instant notifications and automatic blocking of phishing,
                malware, and vulnerabilities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SECURITY ================= */}
      <section className="product-security">
        <div className="container split">
          <div>
            <h2>Enterprise-level Security for Everyone</h2>
            <p>
              OXO ensures end-to-end encryption, AI threat detection, and a
              zero-logs policy for maximum privacy.
            </p>
            <ul>
              <li>🔒 End-to-end encryption</li>
              <li>🧠 AI-powered threat analysis</li>
              <li>✅ No data stored or sold</li>
            </ul>
          </div>
          <div>
            <Image
              src="/oxo-protection.webp"
              alt="OXO security illustration"
              width={400}
              height={350}
            />
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="cta">
        <div className="container">
          <h2>Ready to secure your digital life?</h2>
          <p>
            Start using OXO Security Suite and protect all your devices, emails,
            and accounts instantly.
          </p>
          <Link href="/pricing" className="btn primary">
            Get Started
          </Link>
        </div>
      </section>
    </main>
  );
}
