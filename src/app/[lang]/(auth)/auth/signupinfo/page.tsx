"use client";

import Link from "next/link";
import "@/app/styles/pages/auth.scss";
import { usePathname } from "next/navigation";
import { useTranslation } from "@/hooks/useTranslation";

export default function SignupInfoPage() {
  const pathname = usePathname();
  const lang = pathname.split("/")[1] || "en";
  const { t } = useTranslation();

  return (
    <main className="signup-info-page">
      <section className="hero">
        <div className="container">
          <h1>{t("signupInfo.hero.title")}</h1>
          <p>{t("signupInfo.hero.description")}</p>
        </div>
      </section>

      <section className="info-section">
        <div className="container">
          <h2>{t("signupInfo.security.title")}</h2>
          <ul>
            <li>{t("signupInfo.security.items.data")}</li>
            <li>{t("signupInfo.security.items.access")}</li>
            <li>{t("signupInfo.security.items.activity")}</li>
          </ul>

          <h2>{t("signupInfo.requirements.title")}</h2>
          <ul>
            <li>{t("signupInfo.requirements.items.email")}</li>
            <li>{t("signupInfo.requirements.items.password")}</li>
            <li>{t("signupInfo.requirements.items.device")}</li>
          </ul>

          <h2>{t("signupInfo.privacy.title")}</h2>
          <p>{t("signupInfo.privacy.description")}</p>

          <Link href={`/${lang}/auth/signup`} className="btn primary">
            {t("signupInfo.cta.button")}
          </Link>
        </div>
      </section>
    </main>
  );
}
