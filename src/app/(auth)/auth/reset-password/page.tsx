"use client";

import { useState } from "react";
import Link from "next/link";
import "../../../styles/pages/auth.scss";

export default function ResetPassword() {
  const [password, setPassword] = useState("");
  const [passwordConfirme, setPasswordConfirme] = useState("");
  const [done, setDone] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== passwordConfirme) {
      setError("Passwords do not match !");
      return;
    }

    setError("");

    // TODO: send new password + token
    setDone(true);
  };

  return (
    <main className="auth-page">
      <div className="signup-form-container">
        <h2>Reset your password</h2>

        {!done ? (
          <>
            <p>Enter your new password below.</p>

            <form onSubmit={handleSubmit}>
              <input
                type="password"
                placeholder="New password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <input
                type="password"
                placeholder="Confirm your password"
                required
                value={passwordConfirme}
                onChange={(e) => setPasswordConfirme(e.target.value)}
              />

              {error && <p className="error-msg">{error}</p>}

              <button type="submit">Update password</button>
            </form>
          </>
        ) : (
          <>
            <h2>✅ Password updated</h2>
            <p>Your password has been successfully updated.</p>

            <Link href="/auth" className="btn">
              Back to login
            </Link>
          </>
        )}
      </div>
    </main>
  );
}
