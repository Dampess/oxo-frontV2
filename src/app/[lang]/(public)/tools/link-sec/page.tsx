"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslation } from "@/hooks/useTranslation";
import "@/app/styles/pages/tools.scss";

export default function LinkCheckerPage() {
  const pathname = usePathname();
  const lang = pathname.split("/")[1] || "en";
  const { t } = useTranslation();

  return (
    <main className="tools-page">
      {/* HERO */}
      <section className="hero hero-split">
        <div className="hero-text">
          <h1>{t("link.hero.title")}</h1>
          <p>{t("link.hero.desc")}</p>
        </div>

        <div className="hero-image">
          <Image
            src="/links-security.webp"
            alt="link security"
            width={500}
            height={350}
          />
        </div>
      </section>

      {/* WHY */}
      <section className="info-section alt">
        <h2>{t("link.why.title")}</h2>
        <p>{t("link.why.desc")}</p>

        <ul>
          <li>{t("link.why.f1")}</li>
          <li>{t("link.why.f2")}</li>
          <li>{t("link.why.f3")}</li>
        </ul>
      </section>

      {/* PROTECTION */}
      <section className="info-section alt split">
        <Image
          src="/malware-attack.webp"
          alt="malware attack"
          width={400}
          height={300}
        />

        <div>
          <h2>{t("link.protect.title")}</h2>
          <ul>
            <li>{t("link.protect.f1")}</li>
            <li>{t("link.protect.f2")}</li>
            <li>{t("link.protect.f3")}</li>
          </ul>
        </div>
      </section>

      {/* OXO */}
      <section className="info-section highlight">
        <h2>{t("link.oxo.title")}</h2>

        <ul>
          <li>{t("link.oxo.f1")}</li>
          <li>{t("link.oxo.f2")}</li>
          <li>{t("link.oxo.f3")}</li>
        </ul>

        <div className="cta">
          <Link href={`/${lang}/auth`} className="btn primary">
            {t("link.oxo.cta")}
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <h2>{t("link.cta.title")}</h2>

        <Link href={`/${lang}/pricing`} className="btn primary">
          {t("link.cta.button")}
        </Link>
      </section>
    </main>
  );
}
