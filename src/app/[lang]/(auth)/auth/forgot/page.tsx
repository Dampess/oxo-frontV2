"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import "@/app/styles/pages/auth.scss";

export default function ForgotPasswordPage() {
  const pathname = usePathname();
  const lang = pathname.split("/")[1];
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // TODO: call API
    console.log("Reset link sent to:", email);

    setSent(true);
  };

  return (
    <main className="auth-page">
      <div className="signup-form-container">
        {!sent ? (
          <>
            <h2>Forgot your password?</h2>
            <p>Enter your email and we’ll send you a reset link.</p>

            <form onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder="Your email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <button type="submit">Send reset link</button>
            </form>

            <p>
              Remembered it? <Link href={`/${lang}/auth`}>Back to login</Link>
            </p>
          </>
        ) : (
          <>
            <h2>📩 Check your inbox</h2>
            <p>
              If an account exists for <strong>{email}</strong>, you’ll receive
              a password reset link shortly.
            </p>

            <Link href={`/${lang}/auth`} className="btn">
              Back to login
            </Link>
          </>
        )}
      </div>
    </main>
  );
}
