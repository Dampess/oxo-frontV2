"use client";

import "@/app/styles/pages/individual&business.scss";
import Image from "next/image";

import { useTranslation } from "@/hooks/useTranslation";

type Props = {
  lang: string;
};

export default function IndividualsPageView({ lang }: Props) {
  const { t } = useTranslation(lang);

  return (
    <main className="individuals-page">
      {/* HERO */}
      <section className="hero hero-main">
        <div className="container hero-grid">
          <div className="hero-text">
            <h1>{t("individuals.hero.title")}</h1>
            <p>{t("individuals.hero.description")}</p>
          </div>
          <div className="hero-visual">
            <Image
              src="/justStart.jpg"
              alt={t("individuals.hero.imageAlt")}
              width={400}
              height={300}
            />
          </div>
        </div>
      </section>

      {/* THREATS STATISTICS */}
      <section className="info-section">
        <h2>{t("individuals.threats.title")}</h2>
        <ul>
          <li>{t("individuals.threats.items.phishing")}</li>
          <li>{t("individuals.threats.items.malware")}</li>
          <li>{t("individuals.threats.items.passwords")}</li>
        </ul>
      </section>

      {/* PROTECTION */}
      <section className="info-section alt">
        <h2>{t("individuals.protection.title")}</h2>
        <ul>
          <li>{t("individuals.protection.items.vault")}</li>
          <li>{t("individuals.protection.items.antivirus")}</li>
          <li>{t("individuals.protection.items.email")}</li>
          <li>{t("individuals.protection.items.links")}</li>
        </ul>
      </section>

      {/* CTA */}
      <section className="cta">
        <h2>{t("individuals.cta.title")}</h2>
        <p>{t("individuals.cta.description")}</p>
        <a href={`/${lang}/pricing`} className="btn primary">
          {t("individuals.cta.button")}
        </a>
      </section>
    </main>
  );
}
