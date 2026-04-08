"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import "../../../styles/pages/auth.scss";

export default function VerifyEmailPage() {
  const [status, setStatus] = useState<"loading" | "success" | "error">(
    "loading",
  );

  useEffect(() => {
    // TODO: récupérer token depuis URL + call API
    setTimeout(() => {
      setStatus("success"); // simuler succès
    }, 1500);
  }, []);

  return (
    <main className="auth-page">
      <div className="signup-form-container">
        {status === "loading" && (
          <>
            <h2>Verifying your email...</h2>
            <p>Please wait a moment.</p>
          </>
        )}

        {status === "success" && (
          <>
            <h2>✅ Email verified</h2>
            <p>Your account is now active. You can start using Oxo.</p>

            <Link href="/auth" className="btn">
              Go to login
            </Link>
          </>
        )}

        {status === "error" && (
          <>
            <h2>❌ Verification failed</h2>
            <p>The link is invalid or expired.</p>

            <Link href="/auth" className="btn">
              Try again
            </Link>
          </>
        )}
      </div>
    </main>
  );
}
