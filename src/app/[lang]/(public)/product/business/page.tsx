"use client";

import "@/app/styles/pages/individual&business.scss";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useTranslation } from "@/hooks/useTranslation";

export default function BusinessesPage() {
  const pathname = usePathname();
  const lang = pathname.split("/")[1] || "en";
  const { t } = useTranslation();

  return (
    <main className="businesses-page">
      {/* HERO */}
      <section className="hero hero-main">
        <div className="container hero-grid">
          <div className="hero-text">
            <h1>{t("businesses.hero.title")}</h1>
            <p>{t("businesses.hero.description")}</p>
          </div>
          <div className="hero-visual">
            <Image
              src="/handcheck.jpg"
              alt={t("businesses.hero.imageAlt")}
              width={400}
              height={300}
            />
          </div>
        </div>
      </section>

      {/* THREATS STATISTICS */}
      <section className="info-section">
        <h2>{t("businesses.threats.title")}</h2>
        <ul>
          <li>{t("businesses.threats.items.phishing")}</li>
          <li>{t("businesses.threats.items.ransomware")}</li>
          <li>{t("businesses.threats.items.cost")}</li>
          <li>{t("businesses.threats.items.credentials")}</li>
        </ul>
      </section>

      {/* PROTECTION */}
      <section className="info-section alt">
        <h2>{t("businesses.protection.title")}</h2>
        <ul>
          <li>{t("businesses.protection.items.endpoint")}</li>
          <li>{t("businesses.protection.items.email")}</li>
          <li>{t("businesses.protection.items.vault")}</li>
          <li>{t("businesses.protection.items.alerts")}</li>
        </ul>
      </section>

      {/* CTA */}
      <section className="cta">
        <h2>{t("businesses.cta.title")}</h2>
        <p>{t("businesses.cta.description")}</p>
        <a href={`/${lang}/pricing`} className="btn primary">
          {t("businesses.cta.button")}
        </a>
      </section>
    </main>
  );
}
