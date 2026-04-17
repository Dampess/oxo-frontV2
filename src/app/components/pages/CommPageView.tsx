"use client";

import "@/app/styles/pages/tools.scss";
import Image from "next/image";

import { useTranslation } from "@/hooks/useTranslation";

type Props = {
  lang: string;
};

export default function CommPageView({ lang }: Props) {
  const { t } = useTranslation(lang);

  return (
    <main className="tools-page">
      {/* HERO */}
      <section className="hero hero-main">
        <div className="container hero-grid">
          <div className="hero-text">
            <h1>{t("comm.hero.title")}</h1>
            <p>{t("comm.hero.description")}</p>
          </div>
          <div className="hero-visual">
            <Image
              src="/password-security.webp"
              alt={t("comm.hero.imageAlt")}
              width={400}
              height={300}
            />
          </div>
        </div>
      </section>

      {/* WHY PROTECT */}
      <section className="info-section alt">
        <h2>{t("comm.dangers.title")}</h2>
        <ul>
          <li>{t("comm.dangers.items.smsPhishing")}</li>
          <li>{t("comm.dangers.items.callScam")}</li>
          <li>{t("comm.dangers.items.emailPhishing")}</li>
        </ul>
      </section>

      {/* HOW IT WORKS */}
      <section className="info-section alt">
        <h2>{t("comm.protection.title")}</h2>
        <ul>
          <li>{t("comm.protection.items.linkAnalysis")}</li>
          <li>{t("comm.protection.items.numberDetection")}</li>
          <li>{t("comm.protection.items.realTimeAlerts")}</li>
        </ul>
      </section>

      {/* CTA */}
      <section className="cta">
        <h2>{t("comm.cta.title")}</h2>
        <a href={`/${lang}/pricing`} className="btn primary">
          {t("comm.cta.button")}
        </a>
      </section>
    </main>
  );
}
