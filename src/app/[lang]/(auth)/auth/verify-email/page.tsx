"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useTranslation } from "@/hooks/useTranslation";
import "@/app/styles/pages/auth.scss";

export default function VerifyEmailPage() {
  const pathname = usePathname();
  const lang = pathname.split("/")[1] || "en";
  const { t } = useTranslation();
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
            <h2>{t("verifyEmail.loading.title")}</h2>
            <p>{t("verifyEmail.loading.description")}</p>
          </>
        )}

        {status === "success" && (
          <>
            <h2>{t("verifyEmail.success.title")}</h2>
            <p>{t("verifyEmail.success.description")}</p>

            <Link href={`/${lang}/auth`} className="btn">
              {t("verifyEmail.success.button")}
            </Link>
          </>
        )}

        {status === "error" && (
          <>
            <h2>{t("verifyEmail.error.title")}</h2>
            <p>{t("verifyEmail.error.description")}</p>

            <Link href={`/${lang}/auth`} className="btn">
              {t("verifyEmail.error.button")}
            </Link>
          </>
        )}
      </div>
    </main>
  );
}
