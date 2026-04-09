"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { useTranslation } from "@/hooks/useTranslation";
import "../styles/components/hero.scss";

export default function Hero() {
  const pathname = usePathname();
  const lang = pathname.split("/")[1] || "en";
  const { t } = useTranslation();

  return (
    <section className="hero">
      <div className="container hero-content">
        {/* LEFT */}
        <div className="hero-text">
          <h1>
            {t("hero.title.line1")} <br />
            <span>{t("hero.title.line2")}</span>
          </h1>

          <p>{t("hero.description")}</p>

          <div className="hero-trust">{t("hero.trust")}</div>

          <div className="hero-cta">
            <a href={`/${lang}/auth`} className="btn-primary">
              {t("hero.cta.primary")}
            </a>
            <a href={`/${lang}/tools`} className="btn-secondary">
              {t("hero.cta.secondary")}
            </a>
          </div>
        </div>

        {/* RIGHT */}
        <div className="hero-visual">
          <Image
            src="/heroBgImage2.jpg"
            alt="Oxo dashboard"
            width={350}
            height={300}
          />
        </div>
      </div>
    </section>
  );
}
