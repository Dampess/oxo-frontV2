"use client";

import { businessPlans, personalPlans } from "@/lib/plans";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useTranslation } from "@/hooks/useTranslation";
import "@/app/styles/pages/pricing.scss";

export default function PricingPage() {
  const pathname = usePathname();
  const lang = pathname.split("/")[1] || "en";
  const { t } = useTranslation();
  const [billing, setBilling] = useState<"monthly" | "yearly">("monthly");

  return (
    <main className="pricing">
      {/* ================= HERO ================= */}
      <section className="pricing-hero">
        <div className="container">
          <h1>{t("pricingHome.hero.title")}</h1>
          <p>{t("pricingHome.hero.description")}</p>

          <div className="billing-toggle">
            <button
              className={billing === "monthly" ? "active" : ""}
              onClick={() => setBilling("monthly")}
            >
              {t("pricingHome.billing.monthly")}
            </button>
            <button
              className={billing === "yearly" ? "active" : ""}
              onClick={() => setBilling("yearly")}
            >
              {t("pricingHome.billing.yearly")}{" "}
              <span>{t("pricingHome.billing.discount")}</span>
            </button>
          </div>
        </div>
      </section>

      {/* ================= PERSONAL PLANS ================= */}
      <section className="pricing-section personal">
        <div className="container">
          <h2>{t("pricingHome.personal.title")}</h2>
          <div className="pricing-grid">
            {personalPlans.map((plan, idx) => (
              <div
                key={idx}
                className={`pricing-card ${plan.highlight ? "highlight" : ""}`}
              >
                <h3>{t(plan.name)}</h3>
                <p className="price">
                  {billing === "monthly"
                    ? `$${plan.priceMonthly}`
                    : `$${plan.priceYearly}`}
                  {plan.priceMonthly !== 0 && (
                    <span>
                      /
                      {billing === "monthly"
                        ? t("pricingHome.billing.monthUnit")
                        : t("pricingHome.billing.yearUnit")}
                    </span>
                  )}
                </p>
                <p className="devices">
                  {plan.devices}{" "}
                  {plan.devices > 1
                    ? t("pricingHome.personal.devicesPlural")
                    : t("pricingHome.personal.devicesSingular")}
                </p>
                <ul>
                  {plan.features.map((f, i) => (
                    <li key={i}>{t(f)}</li>
                  ))}
                </ul>
                <a href={plan.cta} className={`btn ${plan.type}`}>
                  {plan.name === "Free"
                    ? t("pricingHome.personal.ctaFree")
                    : t("pricingHome.personal.ctaTrial")}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= BUSINESS PLANS ================= */}
      <section className="pricing-section business alt">
        <div className="container">
          <h2>{t("pricingHome.business.title")}</h2>
          <div className="pricing-grid">
            {businessPlans.map((plan, idx) => (
              <div
                key={idx}
                className={`pricing-card ${plan.highlight ? "highlight" : ""}`}
              >
                <h3>{t(plan.name)}</h3>
                <p className="price">
                  {plan.priceMonthly > 0
                    ? billing === "monthly"
                      ? `$${plan.priceMonthly}`
                      : `$${plan.priceYearly}`
                    : t("pricingHome.business.custom")}
                  {plan.priceMonthly > 0 && (
                    <span>
                      /
                      {billing === "monthly"
                        ? t("pricingHome.billing.monthUnit")
                        : t("pricingHome.billing.yearUnit")}
                    </span>
                  )}
                </p>
                <p className="users">
                  {plan.devices}{" "}
                  {plan.devices > 1
                    ? t("pricingHome.business.usersPlural")
                    : t("pricingHome.business.usersSingular")}
                </p>
                <ul>
                  {plan.features.map((f, i) => (
                    <li key={i}>{t(f)}</li>
                  ))}
                </ul>
                <a href={plan.cta} className={`btn ${plan.type}`}>
                  {plan.name === "Enterprise"
                    ? t("pricingHome.business.ctaEnterprise")
                    : t("pricingHome.business.ctaStandard")}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= COMPARISON TABLE ================= */}
      <section className="pricing-compare">
        <div className="container">
          <h2>{t("pricingHome.compare.title")}</h2>
          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>{t("pricingHome.compare.headers.features")}</th>
                  <th>{t("pricingHome.compare.headers.free")}</th>
                  <th>{t("pricingHome.compare.headers.personalPro")}</th>
                  <th>{t("pricingHome.compare.headers.personalMax")}</th>
                  <th>{t("pricingHome.compare.headers.startup")}</th>
                  <th>{t("pricingHome.compare.headers.smePro")}</th>
                  <th>{t("pricingHome.compare.headers.enterprise")}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{t("pricingHome.compare.rows.linkAnalysis.feature")}</td>
                  <td>{t("pricingHome.compare.rows.linkAnalysis.free")}</td>
                  <td>
                    {t("pricingHome.compare.rows.linkAnalysis.personalPro")}
                  </td>
                  <td>
                    {t("pricingHome.compare.rows.linkAnalysis.personalMax")}
                  </td>
                  <td>{t("pricingHome.compare.rows.linkAnalysis.startup")}</td>
                  <td>{t("pricingHome.compare.rows.linkAnalysis.smePro")}</td>
                  <td>
                    {t("pricingHome.compare.rows.linkAnalysis.enterprise")}
                  </td>
                </tr>
                <tr>
                  <td>{t("pricingHome.compare.rows.emailPhishing.feature")}</td>
                  <td>{t("pricingHome.compare.rows.emailPhishing.free")}</td>
                  <td>
                    {t("pricingHome.compare.rows.emailPhishing.personalPro")}
                  </td>
                  <td>
                    {t("pricingHome.compare.rows.emailPhishing.personalMax")}
                  </td>
                  <td>{t("pricingHome.compare.rows.emailPhishing.startup")}</td>
                  <td>{t("pricingHome.compare.rows.emailPhishing.smePro")}</td>
                  <td>
                    {t("pricingHome.compare.rows.emailPhishing.enterprise")}
                  </td>
                </tr>
                <tr>
                  <td>{t("pricingHome.compare.rows.deviceChecks.feature")}</td>
                  <td>{t("pricingHome.compare.rows.deviceChecks.free")}</td>
                  <td>
                    {t("pricingHome.compare.rows.deviceChecks.personalPro")}
                  </td>
                  <td>
                    {t("pricingHome.compare.rows.deviceChecks.personalMax")}
                  </td>
                  <td>{t("pricingHome.compare.rows.deviceChecks.startup")}</td>
                  <td>{t("pricingHome.compare.rows.deviceChecks.smePro")}</td>
                  <td>
                    {t("pricingHome.compare.rows.deviceChecks.enterprise")}
                  </td>
                </tr>
                <tr>
                  <td>
                    {t("pricingHome.compare.rows.fraudDetection.feature")}
                  </td>
                  <td>{t("pricingHome.compare.rows.fraudDetection.free")}</td>
                  <td>
                    {t("pricingHome.compare.rows.fraudDetection.personalPro")}
                  </td>
                  <td>
                    {t("pricingHome.compare.rows.fraudDetection.personalMax")}
                  </td>
                  <td>
                    {t("pricingHome.compare.rows.fraudDetection.startup")}
                  </td>
                  <td>{t("pricingHome.compare.rows.fraudDetection.smePro")}</td>
                  <td>
                    {t("pricingHome.compare.rows.fraudDetection.enterprise")}
                  </td>
                </tr>
                <tr>
                  <td>
                    {t("pricingHome.compare.rows.prioritySupport.feature")}
                  </td>
                  <td>{t("pricingHome.compare.rows.prioritySupport.free")}</td>
                  <td>
                    {t("pricingHome.compare.rows.prioritySupport.personalPro")}
                  </td>
                  <td>
                    {t("pricingHome.compare.rows.prioritySupport.personalMax")}
                  </td>
                  <td>
                    {t("pricingHome.compare.rows.prioritySupport.startup")}
                  </td>
                  <td>
                    {t("pricingHome.compare.rows.prioritySupport.smePro")}
                  </td>
                  <td>
                    {t("pricingHome.compare.rows.prioritySupport.enterprise")}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <h2>{t("pricingHome.advisor.title")}</h2>
          <Link href={`/${lang}/plan-advisor`} className="btn-primary">
            {t("pricingHome.advisor.button")}
          </Link>
        </div>
      </section>
    </main>
  );
}
