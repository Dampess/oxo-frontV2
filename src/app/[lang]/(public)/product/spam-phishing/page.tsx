"use client";

import Image from "next/image";
import "@/app/styles/pages/tools.scss";
import { usePathname } from "next/navigation";
import { useTranslation } from "@/hooks/useTranslation";

export default function AntiPhishingPage() {
  const pathname = usePathname();
  const lang = pathname.split("/")[1] || "en";
  const { t } = useTranslation();

  return (
    <main className="tools-page">
      {/* HERO */}
      <section className="hero hero-main">
        <div className="container hero-grid">
          <div className="hero-text">
            <h1>{t("antiPhishing.hero.title")}</h1>
            <p>{t("antiPhishing.hero.description")}</p>
          </div>
          <div className="hero-visual">
            <Image
              src="/email-security.webp"
              alt={t("antiPhishing.hero.imageAlt")}
              width={400}
              height={300}
            />
          </div>
        </div>
      </section>

      {/* WHY PROTECT */}
      <section className="info-section alt">
        <h2>{t("antiPhishing.dangers.title")}</h2>
        <ul>
          <li>{t("antiPhishing.dangers.items.credentialTheft")}</li>
          <li>{t("antiPhishing.dangers.items.malwareInstall")}</li>
          <li>{t("antiPhishing.dangers.items.identityFraud")}</li>
        </ul>
      </section>

      {/* HOW IT WORKS */}
      <section className="info-section alt">
        <h2>{t("antiPhishing.protection.title")}</h2>
        <ul>
          <li>{t("antiPhishing.protection.items.aiScanning")}</li>
          <li>{t("antiPhishing.protection.items.linkDetection")}</li>
          <li>{t("antiPhishing.protection.items.realTimeAlerts")}</li>
        </ul>
      </section>

      {/* CTA */}
      <section className="cta">
        <h2>{t("antiPhishing.cta.title")}</h2>
        <a href={`/${lang}/pricing`} className="btn primary">
          {t("antiPhishing.cta.button")}
        </a>
      </section>
    </main>
  );
}
