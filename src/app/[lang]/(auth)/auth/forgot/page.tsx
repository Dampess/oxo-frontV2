"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useTranslation } from "@/hooks/useTranslation";
import "@/app/styles/pages/auth.scss";

export default function ForgotPasswordPage() {
  const pathname = usePathname();
  const lang = pathname.split("/")[1] || "en";
  const { t } = useTranslation();

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
            <h2>{t("forgotPassword.form.title")}</h2>
            <p>{t("forgotPassword.form.description")}</p>

            <form onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder={t("forgotPassword.form.email")}
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <button type="submit">{t("forgotPassword.form.button")}</button>
            </form>

            <p>
              {t("forgotPassword.form.footerText")}{" "}
              <Link href={`/${lang}/auth`}>
                {t("forgotPassword.form.footerLink")}
              </Link>
            </p>
          </>
        ) : (
          <>
            <h2>{t("forgotPassword.success.title")}</h2>
            <p>
              {t("forgotPassword.success.descriptionBefore")}{" "}
              <strong>{email}</strong>
              {t("forgotPassword.success.descriptionAfter")}
            </p>

            <Link href={`/${lang}/auth`} className="btn">
              {t("forgotPassword.success.button")}
            </Link>
          </>
        )}
      </div>
    </main>
  );
}
