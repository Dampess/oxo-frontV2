"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import "@/app/styles/pages/auth.scss";

export default function SignupPage() {
  const pathname = usePathname();
  const lang = pathname.split("/")[1];
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirm) {
      alert("Passwords do not match");
      return;
    }
    alert(`Account created for ${email}`);
  };

  return (
    <main className="auth-page">
      <div className="signup-form-container">
        <h2>Create Your Account</h2>
        <form onSubmit={handleSignup}>
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
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirm}
            onChange={(e) => setConfirm(e.target.value)}
            required
          />
          <button type="submit" className="btn primary">
            Sign Up
          </button>
        </form>
        <p>
          Already have an account?{" "}
          <Link href={`/${lang}/auth`}>Login here</Link>
        </p>
      </div>
    </main>
  );
}
