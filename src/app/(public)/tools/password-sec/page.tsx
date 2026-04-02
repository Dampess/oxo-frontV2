"use client";

import { useState } from "react";
import Image from "next/image";
import "../../../styles/pages/tools.scss";

export default function PasswordPage() {
  const [length, setLength] = useState(12);
  const [password, setPassword] = useState("");

  const generatePassword = () => {
    const chars =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";
    let pass = "";
    for (let i = 0; i < length; i++) {
      pass += chars[Math.floor(Math.random() * chars.length)];
    }
    setPassword(pass);
  };

  const getStrength = (pass: string) => {
    let score = 0;
    if (pass.length >= 12) score++;
    if (/[A-Z]/.test(pass)) score++;
    if (/[0-9]/.test(pass)) score++;
    if (/[^A-Za-z0-9]/.test(pass)) score++;

    if (score <= 1) return "weak";
    if (score === 2) return "medium";
    return "strong";
  };

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

      <section className="tool">
        <h2>Generate a secure password</h2>

        <div className="tool-box">
          <input
            type="number"
            min={6}
            max={32}
            value={length}
            onChange={(e) => setLength(Number(e.target.value))}
          />
          <button onClick={generatePassword}>Generate</button>
        </div>

        {password && (
          <div className="result-box">
            <input value={password} readOnly />
            <div className={`strength ${getStrength(password)}`}>
              Strength: {getStrength(password)}
            </div>
          </div>
        )}
      </section>

      <section className="info-section">
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
