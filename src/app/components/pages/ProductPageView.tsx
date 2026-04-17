"use client";

import "@/app/styles/pages/product.scss";
import { useTranslation } from "@/hooks/useTranslation";
import Image from "next/image";
import Link from "next/link";

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
            {/* web */}
            <div className="product-card">
              <h3>{t("product.products.items.web.title")}</h3>
              <p>{t("product.products.items.web.description")}</p>
              <ul>
                <li>{t("product.products.items.web.f1")}</li>
                <li>{t("product.products.items.web.f2")}</li>
                <li>{t("product.products.items.web.f3")}</li>
              </ul>
              <Link href={`/${lang}/product/web`} className="btn primary">
                {t("product.products.learnMore")}
              </Link>
            </div>

            {/* Anti-Spam */}
            <div className="product-card">
              <h3>{t("product.products.items.tracking.title")}</h3>
              <p>{t("product.products.items.tracking.description")}</p>
              <ul>
                <li>{t("product.products.items.tracking.f1")}</li>
                <li>{t("product.products.items.tracking.f2")}</li>
                <li>{t("product.products.items.tracking.f3")}</li>
              </ul>
              <Link href={`/${lang}/product/trackers`} className="btn primary">
                {t("product.products.learnMore")}
              </Link>
            </div>

            {/* Password communications */}
            <div className="product-card">
              <h3>{t("product.products.items.communications.title")}</h3>
              <p>{t("product.products.items.communications.description")}</p>
              <ul>
                <li>{t("product.products.items.communications.f1")}</li>
                <li>{t("product.products.items.communications.f2")}</li>
                <li>{t("product.products.items.communications.f3")}</li>
              </ul>
              <Link href={`/${lang}/product/comm`} className="btn primary">
                {t("product.products.learnMore")}
              </Link>
            </div>

            {/* dashboard */}
            <div className="product-card">
              <h3>{t("product.products.items.score.title")}</h3>
              <p>{t("product.products.items.score.description")}</p>
              <ul>
                <li>{t("product.products.items.score.f1")}</li>
                <li>{t("product.products.items.score.f2")}</li>
                <li>{t("product.products.items.score.f3")}</li>
              </ul>
              <Link href={`/${lang}/product/dashboard`} className="btn primary">
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

          <div className="security-visual">
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
