"use client";

import { useState } from "react";
import Image from "next/image";
import "../../../styles/pages/tools.scss";
import Link from "next/link";

export default function LinkCheckerPage() {
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
        <div className="cta">
          <Link href="/auth" className="btn primary">
            Acces with your account now !
          </Link>
        </div>
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
