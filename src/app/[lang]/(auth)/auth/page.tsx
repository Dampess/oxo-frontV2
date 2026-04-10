"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useTranslation } from "@/hooks/useTranslation";
import "@/app/styles/pages/auth.scss";

export default function AuthPage() {
  const pathname = usePathname();
  const lang = pathname.split("/")[1] || "en";
  const { t } = useTranslation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`${t("auth.login.alert")} ${email}`);
  };

  return (
    <main className="auth-page">
      <div className="split">
        {/* LOGIN */}
        <div className="auth-login">
          <h2>{t("auth.login.title")}</h2>
          <p>{t("auth.login.subtitle")}</p>

          <form onSubmit={handleLogin}>
            <input
              type="email"
              placeholder={t("auth.login.email")}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder={t("auth.login.password")}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="submit" className="btn primary">
              {t("auth.login.button")}
            </button>
          </form>

          <Link href={`/${lang}/auth/forgot`} className="forgot-link">
            {t("auth.login.forgot")}
          </Link>
        </div>

        {/* SIGNUP */}
        <div className="auth-signup">
          <h2>{t("auth.signup.title")}</h2>
          <p>{t("auth.signup.description")}</p>
          <Link href={`/${lang}/auth/signupinfo`} className="btn secondary">
            {t("auth.signup.button")}
          </Link>
        </div>
      </div>
    </main>
  );
}
