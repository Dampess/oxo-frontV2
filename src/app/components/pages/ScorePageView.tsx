"use client";

import "@/app/styles/pages/product.scss";
import { useTranslation } from "@/hooks/useTranslation";
import Image from "next/image";

type Props = {
  lang: string;
};

export default function ScorePageView({ lang }: Props) {
  const { t } = useTranslation(lang);

  return (
    <main className="product-page">
      {/* HERO */}
      <section className="hero-main">
        <div className="hero-grid">
          <div className="hero-text">
            <h1>{t("score.hero.title")}</h1>
            <p>{t("score.hero.description")}</p>

            <div className="hero-actions">
              <a href={`/${lang}/pricing`} className="btn primary">
                {t("score.cta.button")}
              </a>
              <a href={`/${lang}/tools`} className="btn secondary">
                Découvrir les outils
              </a>
            </div>
          </div>

          <div className="hero-visual">
            <Image
              src="/dashboard-hero.webp"
              alt={t("score.hero.imageAlt")}
              width={560}
              height={420}
              priority
            />
          </div>
        </div>
      </section>

      {/* SCORE */}
      <section className="products-list">
        <div className="container">
          <h2>{t("score.score.title")}</h2>

          <div className="products-grid">
            <article className="product-card">
              <h3>🧠 Score global</h3>
              <p>{t("score.score.description")}</p>
              <ul>
                <li>{t("score.score.items.score")}</li>
              </ul>
            </article>

            <article className="product-card">
              <h3>🚦 Niveau de risque</h3>
              <p>{t("score.score.description")}</p>
              <ul>
                <li>{t("score.score.items.levels")}</li>
              </ul>
            </article>

            <article className="product-card">
              <h3>📈 Évolution</h3>
              <p>{t("score.score.description")}</p>
              <ul>
                <li>{t("score.score.items.evolution")}</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      {/* INSIGHTS */}
      <section className="product-features">
        <div className="container">
          <h2>{t("score.insights.title")}</h2>

          <div className="features-grid">
            <article className="feature-card">
              <span>🔗</span>
              <h3>Liens dangereux</h3>
              <p>{t("score.insights.items.links")}</p>
            </article>

            <article className="feature-card">
              <span>📱</span>
              <h3>Messages et appels</h3>
              <p>{t("score.insights.items.messages")}</p>
            </article>

            <article className="feature-card">
              <span>👁️</span>
              <h3>Trackers bloqués</h3>
              <p>{t("score.insights.items.tracking")}</p>
            </article>

            <article className="feature-card">
              <span>⚠️</span>
              <h3>Téléchargements à risque</h3>
              <p>{t("score.insights.items.downloads")}</p>
            </article>
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="product-steps alt">
        <div className="container">
          <h2>{t("score.timeline.title")}</h2>

          <div className="steps-grid">
            <article className="step">
              <span>1</span>
              <h3>Événements détectés</h3>
              <p>{t("score.timeline.items.events")}</p>
            </article>

            <article className="step">
              <span>2</span>
              <h3>Détails des risques</h3>
              <p>{t("score.timeline.items.details")}</p>
            </article>

            <article className="step">
              <span>3</span>
              <h3>Actions recommandées</h3>
              <p>{t("score.timeline.items.actions")}</p>
            </article>
          </div>
        </div>
      </section>

      {/* OVERVIEW / RECOMMENDATIONS */}
      <section className="product-security">
        <div className="container">
          <div className="split">
            <div className="security-text">
              <h2>{t("score.overview.title")}</h2>
              <p>{t("score.overview.description")}</p>

              <ul>
                <li>{t("score.recommendations.items.actions")}</li>
                <li>{t("score.recommendations.items.fixes")}</li>
                <li>{t("score.recommendations.items.prevention")}</li>
              </ul>
            </div>

            <div className="security-visual">
              <Image
                src="/dashboard-overview.webp"
                alt={t("score.hero.imageAlt")}
                width={560}
                height={420}
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <div className="container">
          <h2>{t("score.cta.title")}</h2>
          <p>{t("score.cta.description")}</p>
          <a href={`/${lang}/auth`} className="btn primary">
            {t("score.cta.button")}
          </a>
        </div>
      </section>
    </main>
  );
}
