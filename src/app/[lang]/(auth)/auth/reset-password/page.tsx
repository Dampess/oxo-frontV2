"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useTranslation } from "@/hooks/useTranslation";
import "@/app/styles/pages/auth.scss";

export default function ResetPassword() {
  const pathname = usePathname();
  const lang = pathname.split("/")[1] || "en";
  const { t } = useTranslation();

  const [password, setPassword] = useState("");
  const [passwordConfirme, setPasswordConfirme] = useState("");
  const [done, setDone] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== passwordConfirme) {
      setError(t("resetPassword.form.error"));
      return;
    }

    setError("");

    // TODO: send new password + token
    setDone(true);
  };

  return (
    <main className="auth-page">
      <div className="signup-form-container">
        {!done ? (
          <>
            <h2>{t("resetPassword.form.title")}</h2>
            <p>{t("resetPassword.form.description")}</p>

            <form onSubmit={handleSubmit}>
              <input
                type="password"
                placeholder={t("resetPassword.form.password")}
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <input
                type="password"
                placeholder={t("resetPassword.form.confirmPassword")}
                required
                value={passwordConfirme}
                onChange={(e) => setPasswordConfirme(e.target.value)}
              />

              {error && <p className="error-msg">{error}</p>}

              <button type="submit">{t("resetPassword.form.button")}</button>
            </form>
          </>
        ) : (
          <>
            <h2>{t("resetPassword.success.title")}</h2>
            <p>{t("resetPassword.success.description")}</p>

            <Link href={`/${lang}/auth`} className="btn">
              {t("resetPassword.success.button")}
            </Link>
          </>
        )}
      </div>
    </main>
  );
}
