"use client";

import Link from "next/link";
import "@/app/styles/pages/auth.scss";
import { usePathname } from "next/navigation";

export default function SignupInfoPage() {
  const pathname = usePathname();
  const lang = pathname.split("/")[1];
  return (
    <main className="signup-info-page">
      <section className="hero">
        <div className="container">
          <h1>Before You Sign Up</h1>
          <p>
            Here&apos;s what you should know before creating your OXO account.
          </p>
        </div>
      </section>

      <section className="info-section">
        <div className="container">
          <h2>Why secure your account?</h2>
          <ul>
            <li>🔒 Protect personal data from phishing and malware</li>
            <li>⚡ Prevent unauthorized access with strong passwords</li>
            <li>🌐 Secure your online activity across devices</li>
          </ul>

          <h2>What you will need</h2>
          <ul>
            <li>📧 A valid email address</li>
            <li>🔑 A strong password (we can help generate one)</li>
            <li>💻 Optional: Browser or device you want to secure</li>
          </ul>

          <h2>OXO Privacy</h2>
          <p>
            Your information is never sold. All data is encrypted and processed
            securely in real-time.
          </p>

          <Link href={`/${lang}/auth/signup`} className="btn primary">
            Proceed to Sign Up
          </Link>
        </div>
      </section>
    </main>
  );
}
