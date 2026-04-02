"use client";

import Link from "next/link";
import { useState } from "react";
import "../../styles/pages/auth.scss";

export default function AuthPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Login attempt with ${email}`);
  };

  return (
    <main className="auth-page">
      <div className="split">
        {/* LOGIN */}
        <div className="auth-login">
          <h2>Welcome Back</h2>
          <p>Sign in to your account</p>

          <form onSubmit={handleLogin}>
            <input
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="submit" className="btn primary">
              Login
            </button>
          </form>

          <Link href="/auth/forgot" className="forgot-link">
            Forgot password?
          </Link>
        </div>

        {/* SIGNUP */}
        <div className="auth-signup">
          <h2>New Here?</h2>
          <p>
            Create an account to start protecting your digital life with OXO.
          </p>
          <Link href="/auth/signupinfo" className="btn secondary">
            Create Account
          </Link>
        </div>
      </div>
    </main>
  );
}
