"use client";

import "@/app/styles/pages/tools.scss";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function EmailCheckPage() {
  const pathname = usePathname();
  const lang = pathname.split("/")[1];
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
        <div className="cta">
          <Link href={`/${lang}/auth`} className="btn primary">
            Acces with your account now !
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <h2>Protect your inbox in real time</h2>
        <p>Upgrade to get continuous email protection across all devices.</p>
        <a href={`/${lang}/pricing`} className="btn primary">
          Explore Plans
        </a>
      </section>
    </main>
  );
}
