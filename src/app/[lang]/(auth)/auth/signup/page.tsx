"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useTranslation } from "@/hooks/useTranslation";
import "@/app/styles/pages/auth.scss";

export default function SignupPage() {
  const pathname = usePathname();
  const lang = pathname.split("/")[1] || "en";
  const { t } = useTranslation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirm) {
      alert(t("signup.errors.passwordMismatch"));
      return;
    }
    alert(`${t("signup.success")} ${email}`);
  };

  return (
    <main className="auth-page">
      <div className="signup-form-container">
        <h2>{t("signup.title")}</h2>
        <form onSubmit={handleSignup}>
          <input
            type="email"
            placeholder={t("signup.form.email")}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder={t("signup.form.password")}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder={t("signup.form.confirm")}
            value={confirm}
            onChange={(e) => setConfirm(e.target.value)}
            required
          />
          <button type="submit" className="btn primary">
            {t("signup.form.button")}
          </button>
        </form>
        <p>
          {t("signup.footer.text")}{" "}
          <Link href={`/${lang}/auth`}>{t("signup.footer.link")}</Link>
        </p>
      </div>
    </main>
  );
}
