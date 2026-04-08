"use client";

import { useState } from "react";
import Image from "next/image";
import "../../../styles/pages/tools.scss";
import Link from "next/link";

export default function PasswordPage() {
  return (
    <main className="tools-page">
      <section className="hero hero-split">
        <div className="hero-text">
          <h1>Password Security Tool</h1>
          <p>
            Generate strong passwords and instantly evaluate their resistance
            against attacks.
          </p>
        </div>

        <div className="hero-image">
          <Image
            src="/password-security.webp"
            alt=""
            width={500}
            height={350}
          />
        </div>
      </section>

      <section className="info-section alt">
        <h2>Why weak passwords are dangerous</h2>
        <p>
          Weak passwords are responsible for the majority of data breaches
          worldwide.
        </p>
        <ul>
          <li>🔓 Cracked instantly by brute-force attacks</li>
          <li>♻️ Reused passwords compromise multiple accounts</li>
          <li>💥 Data leaks expose millions of credentials</li>
        </ul>
      </section>

      <section className="info-section alt split">
        <Image src="/password-hacker.webp" alt="" width={400} height={300} />

        <div>
          <h2>How to protect yourself</h2>
          <ul>
            <li>✔ Use long and complex passwords</li>
            <li>✔ Never reuse passwords</li>
            <li>✔ Enable 2FA when possible</li>
            <li>✔ Use a password manager</li>
          </ul>
        </div>
      </section>

      <section className="info-section highlight">
        <h2>How OXO protects you</h2>
        <ul>
          <li>🔐 Encrypted password vault</li>
          <li>⚡ One-click secure generation</li>
          <li>🚨 Breach detection alerts</li>
          <li>🔄 Automatic password updates</li>
        </ul>
        <div className="cta">
          <Link href="/auth" className="btn primary">
            Acces with your account now !
          </Link>
        </div>
      </section>

      <section className="cta">
        <h2>Upgrade your password security</h2>
        <a href="/pricing" className="btn primary">
          Explore Plans
        </a>
      </section>
    </main>
  );
}
