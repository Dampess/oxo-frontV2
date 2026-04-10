"use client";

import { useTranslation } from "@/hooks/useTranslation";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "@/app/styles/pages/tools.scss";

export default function ToolsPage() {
  const pathname = usePathname();
  const lang = pathname.split("/")[1] || "en";
  const { t } = useTranslation();

  return (
    <main className="tools-page">
      {/* ================= HERO ================= */}
      <section className="hero hero-main">
        <div className="container hero-grid">
          <div className="hero-text">
            <h1>{t("toolsPage.hero.title")}</h1>
            <p>{t("toolsPage.hero.description")}</p>

            <div className="cta">
              <Link href={`/${lang}/tools/email-sec`} className="btn primary">
                {t("toolsPage.hero.ctaEmail")}
              </Link>
              <Link href={`/${lang}/tools/link-sec`} className="btn secondary">
                {t("toolsPage.hero.ctaLink")}
              </Link>
            </div>
          </div>

          <div className="hero-visual">
            <Image
              src="/oxo-protection.webp"
              alt="cybersecurity tools"
              width={300}
              height={300}
            />
          </div>
        </div>
      </section>

      {/* ================= FEATURES ================= */}
      <section className="tools-features">
        <div className="container">
          <h2>{t("toolsPage.features.title")}</h2>

          <div className="features-grid">
            <div className="feature-card">
              <span>⚡</span>
              <h3>{t("toolsPage.features.instant.title")}</h3>
              <p>{t("toolsPage.features.instant.desc")}</p>
            </div>

            <div className="feature-card">
              <span>🧠</span>
              <h3>{t("toolsPage.features.smart.title")}</h3>
              <p>{t("toolsPage.features.smart.desc")}</p>
            </div>

            <div className="feature-card">
              <span>🔒</span>
              <h3>{t("toolsPage.features.privacy.title")}</h3>
              <p>{t("toolsPage.features.privacy.desc")}</p>
            </div>

            <div className="feature-card">
              <span>🌍</span>
              <h3>{t("toolsPage.features.access.title")}</h3>
              <p>{t("toolsPage.features.access.desc")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= TOOLS LIST ================= */}
      <section className="tools-list">
        <div className="container">
          <h2>{t("toolsPage.list.title")}</h2>

          <div className="tools-grid">
            {/* EMAIL */}
            <div className="tool-card">
              <Image
                src="/email-security.webp"
                alt="email security"
                width={120}
                height={120}
              />
              <h3>{t("toolsPage.email.title")}</h3>
              <p>{t("toolsPage.email.desc")}</p>
              <ul>
                <li>{t("toolsPage.email.f1")}</li>
                <li>{t("toolsPage.email.f2")}</li>
                <li>{t("toolsPage.email.f3")}</li>
              </ul>
              <div className="cta">
                <Link href={`/${lang}/tools/email-sec`} className="btn primary">
                  {t("toolsPage.common.use")}
                </Link>
              </div>
            </div>

            {/* PASSWORD */}
            <div className="tool-card">
              <Image
                src="/password-security.webp"
                alt="password security"
                width={120}
                height={120}
              />
              <h3>{t("toolsPage.password.title")}</h3>
              <p>{t("toolsPage.password.desc")}</p>
              <ul>
                <li>{t("toolsPage.password.f1")}</li>
                <li>{t("toolsPage.password.f2")}</li>
                <li>{t("toolsPage.password.f3")}</li>
              </ul>
              <div className="cta">
                <Link
                  href={`/${lang}/tools/password-sec`}
                  className="btn primary"
                >
                  {t("toolsPage.common.use")}
                </Link>
              </div>
            </div>

            {/* LINKS */}
            <div className="tool-card">
              <Image
                src="/links-security.webp"
                alt="link security"
                width={120}
                height={120}
              />
              <h3>{t("toolsPage.link.title")}</h3>
              <p>{t("toolsPage.link.desc")}</p>
              <ul>
                <li>{t("toolsPage.link.f1")}</li>
                <li>{t("toolsPage.link.f2")}</li>
                <li>{t("toolsPage.link.f3")}</li>
              </ul>
              <div className="cta">
                <Link href={`/${lang}/tools/link-sec`} className="btn primary">
                  {t("toolsPage.common.use")}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= HOW IT WORKS ================= */}
      <section className="tools-steps alt">
        <div className="container">
          <h2>{t("toolsPage.steps.title")}</h2>

          <div className="steps-grid">
            <div className="step">
              <span>1</span>
              <h3>{t("toolsPage.steps.s1.title")}</h3>
              <p>{t("toolsPage.steps.s1.desc")}</p>
            </div>

            <div className="step">
              <span>2</span>
              <h3>{t("toolsPage.steps.s2.title")}</h3>
              <p>{t("toolsPage.steps.s2.desc")}</p>
            </div>

            <div className="step">
              <span>3</span>
              <h3>{t("toolsPage.steps.s3.title")}</h3>
              <p>{t("toolsPage.steps.s3.desc")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="cta">
        <div className="container">
          <h2>{t("toolsPage.cta.title")}</h2>
          <p>{t("toolsPage.cta.desc")}</p>

          <Link href={`/${lang}/pricing`} className="btn primary">
            {t("toolsPage.cta.button")}
          </Link>
        </div>
      </section>
    </main>
  );
}
