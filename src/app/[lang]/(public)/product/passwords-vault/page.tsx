"use client";

import "@/app/styles/pages/tools.scss";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function PasswordVaultPage() {
  const pathname = usePathname();
  const lang = pathname.split("/")[1];
  return (
    <main className="tools-page">
      {/* HERO */}
      <section className="hero hero-main">
        <div className="container hero-grid">
          <div className="hero-text">
            <h1>Password Vault</h1>
            <p>
              Securely store, generate, and manage all your passwords in one
              encrypted vault.
            </p>
          </div>
          <div className="hero-visual">
            <Image
              src="/password-security.webp"
              alt="Password Vault illustration"
              width={400}
              height={300}
            />
          </div>
        </div>
      </section>

      {/* WHY PROTECT */}
      <section className="info-section alt">
        <h2>Why a password vault is important</h2>
        <ul>
          <li>🔐 Strong, unique passwords for every account</li>
          <li>✅ Prevent reuse across multiple sites</li>
          <li>🕵️ Detect compromised credentials instantly</li>
        </ul>
      </section>

      {/* HOW IT WORKS */}
      <section className="info-section alt">
        <h2>How our password vault works</h2>
        <ul>
          <li>🛡️ End-to-end encryption for all stored credentials</li>
          <li>⚡ Generate complex passwords instantly</li>
          <li>📱 Accessible on all your devices securely</li>
        </ul>
      </section>

      {/* CTA */}
      <section className="cta">
        <h2>Protect your accounts with OXO</h2>
        <a href={`/${lang}/pricing`} className="btn primary">
          Explore Plans
        </a>
      </section>
    </main>
  );
}
