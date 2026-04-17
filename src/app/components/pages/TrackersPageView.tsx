"use client";

import "@/app/styles/pages/tools.scss";
import { useTranslation } from "@/hooks/useTranslation";
import Image from "next/image";

type Props = {
  lang: string;
};

export default function TrackersPageView({ lang }: Props) {
  const { t } = useTranslation(lang);

  return (
    <main className="tools-page">
      {/* HERO */}
      <section className="hero hero-main">
        <div className="container hero-grid">
          <div className="hero-text">
            <h1>{t("antiTracking.hero.title")}</h1>
            <p>{t("antiTracking.hero.description")}</p>
          </div>
          <div className="hero-visual">
            <Image
              src="/email-security.webp"
              alt={t("antiTracking.hero.imageAlt")}
              width={400}
              height={300}
            />
          </div>
        </div>
      </section>

      {/* WHY PROTECT */}
      <section className="info-section alt">
        <h2>{t("antiTracking.dangers.title")}</h2>
        <ul>
          <li>{t("antiTracking.dangers.items.tracking")}</li>
          <li>{t("antiTracking.dangers.items.profiling")}</li>
          <li>{t("antiTracking.dangers.items.dataLeak")}</li>
        </ul>
      </section>

      {/* HOW IT WORKS */}
      <section className="info-section alt">
        <h2>{t("antiTracking.protection.title")}</h2>
        <ul>
          <li>{t("antiTracking.protection.items.trackerBlocking")}</li>
          <li>{t("antiTracking.protection.items.thirdParty")}</li>
          <li>{t("antiTracking.protection.items.transparency")}</li>
        </ul>
      </section>

      {/* CTA */}
      <section className="cta">
        <h2>{t("antiTracking.cta.title")}</h2>
        <a href={`/${lang}/pricing`} className="btn primary">
          {t("antiTracking.cta.button")}
        </a>
      </section>
    </main>
  );
}
