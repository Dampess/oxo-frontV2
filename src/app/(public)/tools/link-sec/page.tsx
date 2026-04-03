"use client";

import { useState } from "react";
import Image from "next/image";
import "../../../styles/pages/tools.scss";

export default function LinkCheckerPage() {
  const [url, setUrl] = useState("");
  const [result, setResult] = useState<any>(null);

  const checkUrl = () => {
    if (!url) return;

    try {
      new URL(url);

      if (url.includes("login") || url.includes("secure")) {
        setResult({
          status: "warning",
          message: "⚠️ Suspicious phishing pattern detected",
        });
      } else if (url.length > 60) {
        setResult({
          status: "danger",
          message: "❌ Potentially malicious long URL",
        });
      } else {
        setResult({
          status: "safe",
          message: "✅ Link looks safe",
        });
      }
    } catch {
      setResult({
        status: "danger",
        message: "❌ Invalid URL format",
      });
    }
  };

  return (
    <main className="tools-page">
      <section className="hero hero-split">
        <div className="hero-text">
          <h1>Link Safety Checker</h1>
          <p>
            Analyze any URL and detect malicious or phishing websites instantly.
          </p>
        </div>

        <div className="hero-image">
          <Image src="/links-security.webp" alt="" width={500} height={350} />
        </div>
      </section>

      <section className="tool">
        <h2>Analyze a link</h2>

        <div className="tool-box">
          <input
            type="text"
            placeholder="https://example.com"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
          <button onClick={checkUrl}>Analyze</button>
        </div>

        {result && (
          <div className={`result-box ${result.status}`}>{result.message}</div>
        )}
      </section>

      <section className="info-section alt">
        <h2>Why malicious links are dangerous</h2>
        <p>
          Malicious URLs are one of the fastest ways attackers compromise users.
        </p>
        <ul>
          <li>🎣 Fake login pages steal credentials</li>
          <li>💻 Malware installs silently</li>
          <li>🔄 Hidden redirects mask attacks</li>
        </ul>
      </section>

      <section className="info-section alt split">
        <Image src="/malware-attack.webp" alt="" width={400} height={300} />

        <div>
          <h2>How to protect yourself</h2>
          <ul>
            <li>✔ Always inspect links before clicking</li>
            <li>✔ Avoid shortened URLs</li>
            <li>✔ Use security scanners</li>
          </ul>
        </div>
      </section>

      <section className="info-section highlight">
        <h2>How OXO protects you</h2>
        <ul>
          <li>⚡ Real-time URL scanning</li>
          <li>🧠 Threat intelligence detection</li>
          <li>🚫 Automatic blocking of dangerous sites</li>
        </ul>
      </section>

      <section className="cta">
        <h2>Stay safe online</h2>
        <a href="/pricing" className="btn primary">
          Explore Plans
        </a>
      </section>
    </main>
  );
}
