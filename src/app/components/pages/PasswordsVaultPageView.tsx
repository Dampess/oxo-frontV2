"use client";

import "@/app/styles/pages/tools.scss";
import Image from "next/image";

import { useTranslation } from "@/hooks/useTranslation";

type Props = {
  lang: string;
};

export default function PasswordVaultPageView({ lang }: Props) {
  const { t } = useTranslation(lang);

  return (
    <main className="tools-page">
      {/* HERO */}
      <section className="hero hero-main">
        <div className="container hero-grid">
          <div className="hero-text">
            <h1>{t("passwordVault.hero.title")}</h1>
            <p>{t("passwordVault.hero.description")}</p>
          </div>
          <div className="hero-visual">
            <Image
              src="/password-security.webp"
              alt={t("passwordVault.hero.imageAlt")}
              width={400}
              height={300}
            />
          </div>
        </div>
      </section>

      {/* WHY PROTECT */}
      <section className="info-section alt">
        <h2>{t("passwordVault.dangers.title")}</h2>
        <ul>
          <li>{t("passwordVault.dangers.items.strongPasswords")}</li>
          <li>{t("passwordVault.dangers.items.noReuse")}</li>
          <li>{t("passwordVault.dangers.items.compromisedDetection")}</li>
        </ul>
      </section>

      {/* HOW IT WORKS */}
      <section className="info-section alt">
        <h2>{t("passwordVault.protection.title")}</h2>
        <ul>
          <li>{t("passwordVault.protection.items.encryption")}</li>
          <li>{t("passwordVault.protection.items.generate")}</li>
          <li>{t("passwordVault.protection.items.multiDevice")}</li>
        </ul>
      </section>

      {/* CTA */}
      <section className="cta">
        <h2>{t("passwordVault.cta.title")}</h2>
        <a href={`/${lang}/pricing`} className="btn primary">
          {t("passwordVault.cta.button")}
        </a>
      </section>
    </main>
  );
}
