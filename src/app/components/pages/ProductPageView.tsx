"use client";

import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "@/hooks/useTranslation";
import "@/app/styles/pages/product.scss";

type Props = {
  lang: string;
};

export default function ProductPageView({ lang }: Props) {
  const { t } = useTranslation(lang);

  return (
    <main className="product-page">
      {/* ================= HERO ================= */}
      <section className="hero hero-main">
        <div className="container hero-grid">
          <div className="hero-text">
            <h1>{t("product.hero.title")}</h1>
            <p>{t("product.hero.description")}</p>

            <div className="hero-actions">
              <Link href={`/${lang}/pricing`} className="btn primary">
                {t("product.hero.ctaPrimary")}
              </Link>
              <Link href={`/${lang}/tools`} className="btn secondary">
                {t("product.hero.ctaSecondary")}
              </Link>
            </div>
          </div>

          <div className="hero-visual">
            <Image
              src="/dashboard-mockup.png"
              alt={t("product.hero.imageAlt")}
              width={500}
              height={400}
            />
          </div>
        </div>
      </section>

      {/* ================= PRODUCTS LIST ================= */}
      <section className="products-list">
        <div className="container">
          <h2>{t("product.products.title")}</h2>

          <div className="products-grid">
            {/* Antivirus */}
            <div className="product-card">
              <h3>{t("product.products.items.antivirus.title")}</h3>
              <p>{t("product.products.items.antivirus.description")}</p>
              <ul>
                <li>{t("product.products.items.antivirus.f1")}</li>
                <li>{t("product.products.items.antivirus.f2")}</li>
                <li>{t("product.products.items.antivirus.f3")}</li>
              </ul>
              <Link
                href={`/${lang}/product/anti-virus`}
                className="btn primary"
              >
                {t("product.products.learnMore")}
              </Link>
            </div>

            {/* Anti-Spam */}
            <div className="product-card">
              <h3>{t("product.products.items.antispam.title")}</h3>
              <p>{t("product.products.items.antispam.description")}</p>
              <ul>
                <li>{t("product.products.items.antispam.f1")}</li>
                <li>{t("product.products.items.antispam.f2")}</li>
                <li>{t("product.products.items.antispam.f3")}</li>
              </ul>
              <Link
                href={`/${lang}/product/spam-phishing`}
                className="btn primary"
              >
                {t("product.products.learnMore")}
              </Link>
            </div>

            {/* Anti-Malware */}
            <div className="product-card">
              <h3>{t("product.products.items.antimalware.title")}</h3>
              <p>{t("product.products.items.antimalware.description")}</p>
              <ul>
                <li>{t("product.products.items.antimalware.f1")}</li>
                <li>{t("product.products.items.antimalware.f2")}</li>
                <li>{t("product.products.items.antimalware.f3")}</li>
              </ul>
              <Link
                href={`/${lang}/product/anti-virus`}
                className="btn primary"
              >
                {t("product.products.learnMore")}
              </Link>
            </div>

            {/* Phishing Protection */}
            <div className="product-card">
              <h3>{t("product.products.items.phishing.title")}</h3>
              <p>{t("product.products.items.phishing.description")}</p>
              <ul>
                <li>{t("product.products.items.phishing.f1")}</li>
                <li>{t("product.products.items.phishing.f2")}</li>
                <li>{t("product.products.items.phishing.f3")}</li>
              </ul>
              <Link
                href={`/${lang}/product/spam-phishing`}
                className="btn primary"
              >
                {t("product.products.learnMore")}
              </Link>
            </div>

            {/* Password Vault */}
            <div className="product-card">
              <h3>{t("product.products.items.vault.title")}</h3>
              <p>{t("product.products.items.vault.description")}</p>
              <ul>
                <li>{t("product.products.items.vault.f1")}</li>
                <li>{t("product.products.items.vault.f2")}</li>
                <li>{t("product.products.items.vault.f3")}</li>
                <li>{t("product.products.items.vault.f4")}</li>
              </ul>
              <Link
                href={`/${lang}/product/passwords-vault`}
                className="btn primary"
              >
                {t("product.products.learnMore")}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ================= HOW IT WORKS ================= */}
      <section className="product-steps alt">
        <div className="container">
          <h2>{t("product.steps.title")}</h2>

          <div className="steps-grid">
            <div className="step">
              <span>1</span>
              <h3>{t("product.steps.s1.title")}</h3>
              <p>{t("product.steps.s1.description")}</p>
            </div>

            <div className="step">
              <span>2</span>
              <h3>{t("product.steps.s2.title")}</h3>
              <p>{t("product.steps.s2.description")}</p>
            </div>

            <div className="step">
              <span>3</span>
              <h3>{t("product.steps.s3.title")}</h3>
              <p>{t("product.steps.s3.description")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SECURITY ================= */}
      <section className="product-security">
        <div className="container split">
          <div>
            <h2>{t("product.security.title")}</h2>
            <p>{t("product.security.description")}</p>
            <ul>
              <li>{t("product.security.f1")}</li>
              <li>{t("product.security.f2")}</li>
              <li>{t("product.security.f3")}</li>
            </ul>
          </div>

          <div>
            <Image
              src="/oxo-protection.webp"
              alt={t("product.security.imageAlt")}
              width={400}
              height={350}
            />
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="cta">
        <div className="container">
          <h2>{t("product.cta.title")}</h2>
          <p>{t("product.cta.description")}</p>
          <Link href={`/${lang}/pricing`} className="btn primary">
            {t("product.cta.button")}
          </Link>
        </div>
      </section>
    </main>
  );
}
