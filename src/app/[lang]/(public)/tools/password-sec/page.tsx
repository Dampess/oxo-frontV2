"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslation } from "@/hooks/useTranslation";
import "@/app/styles/pages/tools.scss";

export default function PasswordPage() {
  const pathname = usePathname();
  const lang = pathname.split("/")[1] || "en";
  const { t } = useTranslation();

  return (
    <main className="tools-page">
      {/* HERO */}
      <section className="hero hero-split">
        <div className="hero-text">
          <h1>{t("password.hero.title")}</h1>
          <p>{t("password.hero.desc")}</p>
        </div>

        <div className="hero-image">
          <Image
            src="/password-security.webp"
            alt="password security"
            width={500}
            height={350}
          />
        </div>
      </section>

      {/* WHY */}
      <section className="info-section alt">
        <h2>{t("password.why.title")}</h2>
        <p>{t("password.why.desc")}</p>

        <ul>
          <li>{t("password.why.f1")}</li>
          <li>{t("password.why.f2")}</li>
          <li>{t("password.why.f3")}</li>
        </ul>
      </section>

      {/* PROTECTION */}
      <section className="info-section alt split">
        <Image
          src="/password-hacker.webp"
          alt="password hacker"
          width={400}
          height={300}
        />

        <div>
          <h2>{t("password.protect.title")}</h2>
          <ul>
            <li>{t("password.protect.f1")}</li>
            <li>{t("password.protect.f2")}</li>
            <li>{t("password.protect.f3")}</li>
            <li>{t("password.protect.f4")}</li>
          </ul>
        </div>
      </section>

      {/* OXO */}
      <section className="info-section highlight">
        <h2>{t("password.oxo.title")}</h2>

        <ul>
          <li>{t("password.oxo.f1")}</li>
          <li>{t("password.oxo.f2")}</li>
          <li>{t("password.oxo.f3")}</li>
          <li>{t("password.oxo.f4")}</li>
        </ul>

        <div className="cta">
          <Link href={`/${lang}/auth`} className="btn primary">
            {t("password.oxo.cta")}
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <h2>{t("password.cta.title")}</h2>

        <Link href={`/${lang}/pricing`} className="btn primary">
          {t("password.cta.button")}
        </Link>
      </section>
    </main>
  );
}
