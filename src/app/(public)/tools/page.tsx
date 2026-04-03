"use client";

import Image from "next/image";
import Link from "next/link";
import "../../styles/pages/tools.scss";

export default function ToolsPage() {
  return (
    <main className="tools-page">
      {/* ================= HERO ================= */}
      <section className="hero hero-main">
        <div className="container hero-grid">
          <div className="hero-text">
            <h1>Free Security Tools</h1>
            <p>
              Analyze emails, links and passwords instantly. Stay safe online
              with simple but powerful cybersecurity tools.
            </p>

            <div className="cta">
              <Link href="/tools/email-sec" className="btn primary">
                Check Email
              </Link>
              <Link href="/tools/link-sec" className="btn secondary">
                Analyze Link
              </Link>
            </div>
          </div>

          <div className="hero-visual">
            <Image
              src="/oxo-protection.webp"
              alt="cybersecurity tools"
              width={300}
              height={300}
            />
          </div>
        </div>
      </section>

      {/* ================= FEATURES ================= */}
      <section className="tools-features">
        <div className="container">
          <h2>Why use Oxo tools?</h2>

          <div className="features-grid">
            <div className="feature-card">
              <span>⚡</span>
              <h3>Instant analysis</h3>
              <p>
                Get results in seconds without installing anything or creating
                an account.
              </p>
            </div>

            <div className="feature-card">
              <span>🧠</span>
              <h3>Smart detection</h3>
              <p>
                Our logic detects suspicious patterns used in phishing and
                cyberattacks.
              </p>
            </div>

            <div className="feature-card">
              <span>🔒</span>
              <h3>Privacy first</h3>
              <p>
                Your data is never stored. All checks are processed securely.
              </p>
            </div>

            <div className="feature-card">
              <span>🌍</span>
              <h3>Accessible anywhere</h3>
              <p>Use our tools on any device without downloading software.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= TOOLS LIST ================= */}
      <section className="tools-list">
        <div className="container">
          <h2>Explore our tools</h2>

          <div className="tools-grid">
            {/* EMAIL */}
            <div className="tool-card">
              <Image
                src="/email-security.webp"
                alt="email security"
                width={120}
                height={120}
              />

              <h3>Email Checker</h3>

              <p>
                Detect phishing attempts and suspicious email patterns before
                they compromise your data.
              </p>

              <ul>
                <li>✔ Validate email format</li>
                <li>✔ Detect phishing keywords</li>
                <li>✔ Analyze suspicious patterns</li>
              </ul>
              <div className="cta">
                <Link href="/tools/email-sec" className="btn primary">
                  Use tool
                </Link>
              </div>
            </div>

            {/* PASSWORD */}
            <div className="tool-card">
              <Image
                src="/password-security.webp"
                alt="password security"
                width={120}
                height={120}
              />

              <h3>Password Tool</h3>

              <p>
                Generate strong passwords and evaluate their strength to protect
                your accounts.
              </p>

              <ul>
                <li>✔ Strong password generator</li>
                <li>✔ Strength evaluation</li>
                <li>✔ Security best practices</li>
              </ul>
              <div className="cta">
                <Link href="/tools/password-sec" className="btn primary">
                  Use tool
                </Link>
              </div>
            </div>

            {/* LINKS */}
            <div className="tool-card">
              <Image
                src="/links-security.webp"
                alt="link security"
                width={120}
                height={120}
              />

              <h3>Link Checker</h3>

              <p>
                Analyze URLs and detect malicious links before clicking on them.
              </p>

              <ul>
                <li>✔ URL validation</li>
                <li>✔ Suspicious pattern detection</li>
                <li>✔ Phishing protection</li>
              </ul>
              <div className="cta">
                <Link href="/tools/link-sec" className="btn primary">
                  Use tool
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= HOW IT WORKS ================= */}
      <section className="tools-steps alt">
        <div className="container">
          <h2>How it works</h2>

          <div className="steps-grid">
            <div className="step">
              <span>1</span>
              <h3>Enter your data</h3>
              <p>Paste a link, email or generate a password using our tools.</p>
            </div>

            <div className="step">
              <span>2</span>
              <h3>Instant analysis</h3>
              <p>
                Our system analyzes patterns and potential risks in real-time.
              </p>
            </div>

            <div className="step">
              <span>3</span>
              <h3>Get results</h3>
              <p>Receive clear feedback and actionable security insights.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="cta">
        <div className="container">
          <h2>Go beyond free tools</h2>
          <p>
            Unlock real-time protection across all your devices with Oxo
            security suite.
          </p>

          <Link href="/pricing" className="btn primary">
            Explore Plans
          </Link>
        </div>
      </section>
    </main>
  );
}
