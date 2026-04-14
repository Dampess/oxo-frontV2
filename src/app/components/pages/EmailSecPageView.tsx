"use client";

import "@/app/styles/pages/tools.scss";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "@/hooks/useTranslation";

type Props = {
  lang: string;
};

export default function EmailSecPageView({ lang }: Props) {
  const { t } = useTranslation(lang);

  return (
    <main className="tools-page">
      {/* HERO */}
      <section className="hero hero-split">
        <div className="hero-text">
          <h1>{t("email.hero.title")}</h1>
          <p>{t("email.hero.desc")}</p>
        </div>

        <div className="hero-image">
          <Image
            src="/email-security.webp"
            alt="email security"
            width={500}
            height={350}
          />
        </div>
      </section>

      {/* WHY */}
      <section className="info-section alt">
        <h2>{t("email.why.title")}</h2>
        <p>{t("email.why.desc")}</p>

        <ul>
          <li>{t("email.why.f1")}</li>
          <li>{t("email.why.f2")}</li>
          <li>{t("email.why.f3")}</li>
          <li>{t("email.why.f4")}</li>
        </ul>
      </section>

      {/* PROTECT */}
      <section className="info-section alt split">
        <Image
          src="/phishing-example.webp"
          alt="phishing example"
          width={400}
          height={300}
        />

        <div>
          <h2>{t("email.protect.title")}</h2>
          <ul>
            <li>{t("email.protect.f1")}</li>
            <li>{t("email.protect.f2")}</li>
            <li>{t("email.protect.f3")}</li>
            <li>{t("email.protect.f4")}</li>
          </ul>
        </div>
      </section>

      {/* OXO */}
      <section className="info-section highlight">
        <h2>{t("email.oxo.title")}</h2>
        <p>{t("email.oxo.desc")}</p>

        <ul>
          <li>{t("email.oxo.f1")}</li>
          <li>{t("email.oxo.f2")}</li>
          <li>{t("email.oxo.f3")}</li>
          <li>{t("email.oxo.f4")}</li>
        </ul>

        <div className="cta">
          <Link href={`/${lang}/auth`} className="btn primary">
            {t("email.oxo.cta")}
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <h2>{t("email.cta.title")}</h2>
        <p>{t("email.cta.desc")}</p>

        <Link href={`/${lang}/pricing`} className="btn primary">
          {t("email.cta.button")}
        </Link>
      </section>
    </main>
  );
}
