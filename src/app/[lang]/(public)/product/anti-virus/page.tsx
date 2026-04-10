"use client";

import "@/app/styles/pages/tools.scss";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useTranslation } from "@/hooks/useTranslation";

export default function AntivirusPage() {
  const pathname = usePathname();
  const lang = pathname.split("/")[1] || "en";
  const { t } = useTranslation();

  return (
    <main className="tools-page">
      {/* HERO */}
      <section className="hero hero-main">
        <div className="container hero-grid">
          <div className="hero-text">
            <h1>{t("antivirus.hero.title")}</h1>
            <p>{t("antivirus.hero.description")}</p>
          </div>
          <div className="hero-visual">
            <Image
              src="/malware-attack.webp"
              alt={t("antivirus.hero.imageAlt")}
              width={400}
              height={300}
            />
          </div>
        </div>
      </section>

      {/* WHY PROTECT */}
      <section className="info-section alt">
        <h2>{t("antivirus.dangers.title")}</h2>
        <ul>
          <li>{t("antivirus.dangers.items.infections")}</li>
          <li>{t("antivirus.dangers.items.data")}</li>
          <li>{t("antivirus.dangers.items.performance")}</li>
        </ul>
      </section>

      {/* HOW IT WORKS */}
      <section className="info-section alt">
        <h2>{t("antivirus.protection.title")}</h2>
        <ul>
          <li>{t("antivirus.protection.items.aiDetection")}</li>
          <li>{t("antivirus.protection.items.realTime")}</li>
          <li>{t("antivirus.protection.items.alerts")}</li>
        </ul>
      </section>

      {/* CTA */}
      <section className="cta">
        <h2>{t("antivirus.cta.title")}</h2>
        <a href={`/${lang}/pricing`} className="btn primary">
          {t("antivirus.cta.button")}
        </a>
      </section>
    </main>
  );
}
