"use client";

import { useState } from "react";
import Image from "next/image";
import "../../../styles/pages/tools.scss";

export default function EmailCheckPage() {
  const [email, setEmail] = useState("");
  const [result, setResult] = useState<string | null>(null);

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleCheck = () => {
    if (!email) {
      setResult("❌ Please enter an email address");
      return;
    }

    if (!validateEmail(email)) {
      setResult("❌ Invalid email format");
      return;
    }

    if (
      email.includes("support") ||
      email.includes("secure") ||
      email.includes("verify")
    ) {
      setResult("⚠️ Suspicious email pattern detected");
    } else {
      setResult("✅ Email format looks safe");
    }
  };

  return (
    <main className="tools-page">
      {/* HERO */}
      <section className="hero hero-split">
        <div className="hero-text">
          <h1>Email Security Scanner</h1>
          <p>
            Instantly analyze suspicious email addresses and detect potential
            phishing attempts before they reach you.
          </p>
        </div>

        <div className="hero-image">
          <Image src="/email-security.webp" alt="" width={500} height={350} />
        </div>
      </section>

      {/* TOOL */}
      <section className="tool">
        <h2>Check an email</h2>

        <div className="tool-box">
          <input
            type="email"
            placeholder="example@domain.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button onClick={handleCheck}>Analyze Email</button>
        </div>

        {result && <div className="result-box">{result}</div>}
      </section>

      {/* WHY */}
      <section className="info-section alt">
        <h2>Why phishing emails are dangerous</h2>
        <p>
          Email is the #1 attack vector used by cybercriminals. A single click
          on a malicious email can compromise your entire system.
        </p>
        <ul>
          <li>🎣 Fake emails impersonate banks, services or coworkers</li>
          <li>🔐 Steal login credentials and sensitive data</li>
          <li>💻 Deliver malware through attachments</li>
          <li>💸 Trigger fraudulent payments</li>
        </ul>
      </section>

      {/* PROTECT */}
      <section className="info-section alt split">
        <Image src="/phishing-example.webp" alt="" width={400} height={300} />

        <div>
          <h2>How to protect yourself</h2>
          <ul>
            <li>✔ Always verify the sender address carefully</li>
            <li>✔ Never click suspicious links or attachments</li>
            <li>✔ Watch for urgency or pressure tactics</li>
            <li>✔ Use security tools before interacting</li>
          </ul>
        </div>
      </section>

      {/* OXO */}
      <section className="info-section highlight">
        <h2>How OXO protects you</h2>
        <p>
          OXO goes beyond simple checks. Our platform analyzes behavior,
          patterns, and threat intelligence in real-time.
        </p>
        <ul>
          <li>⚡ Real-time phishing detection engine</li>
          <li>🧠 AI-powered pattern recognition</li>
          <li>🔍 Deep email & link inspection</li>
          <li>🔔 Instant alerts on suspicious activity</li>
        </ul>
      </section>

      {/* CTA */}
      <section className="cta">
        <h2>Protect your inbox in real time</h2>
        <p>Upgrade to get continuous email protection across all devices.</p>
        <a href="/pricing" className="btn primary">
          Explore Plans
        </a>
      </section>
    </main>
  );
}
