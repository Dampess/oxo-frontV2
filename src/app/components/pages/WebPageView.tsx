"use client";

import "@/app/styles/pages/tools.scss";
import { useTranslation } from "@/hooks/useTranslation";
import Image from "next/image";

type Props = {
  lang: string;
};

export default function WebPageView({ lang }: Props) {
  const { t } = useTranslation(lang);

  return (
    <main className="tools-page">
      {/* HERO */}
      <section className="hero hero-main">
        <div className="container hero-grid">
          <div className="hero-text">
            <h1>{t("web.hero.title")}</h1>
            <p>{t("web.hero.description")}</p>
          </div>
          <div className="hero-visual">
            <Image
              src="/malware-attack.webp"
              alt={t("web.hero.imageAlt")}
              width={400}
              height={300}
            />
          </div>
        </div>
      </section>

      {/* WHY PROTECT */}
      <section className="info-section alt">
        <h2>{t("web.dangers.title")}</h2>
        <ul>
          <li>{t("web.dangers.items.infections")}</li>
          <li>{t("web.dangers.items.data")}</li>
          <li>{t("web.dangers.items.performance")}</li>
        </ul>
      </section>

      {/* HOW IT WORKS */}
      <section className="info-section alt">
        <h2>{t("web.protection.title")}</h2>
        <ul>
          <li>{t("web.protection.items.aiDetection")}</li>
          <li>{t("web.protection.items.realTime")}</li>
          <li>{t("web.protection.items.alerts")}</li>
        </ul>
      </section>

      {/* CTA */}
      <section className="cta">
        <h2>{t("web.cta.title")}</h2>
        <a href={`/${lang}/pricing`} className="btn primary">
          {t("web.cta.button")}
        </a>
      </section>
    </main>
  );
}
