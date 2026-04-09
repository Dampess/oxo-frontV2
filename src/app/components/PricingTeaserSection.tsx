"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { useTranslation } from "@/hooks/useTranslation";
import { businessPlans, personalPlans } from "@/lib/plans";
import "../styles/components/pricingteasersection.scss";

export default function PricingTeaserSection() {
  const { t } = useTranslation();
  const carouselRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (carouselRef.current) {
      const scrollAmount = carouselRef.current.offsetWidth * 0.8;
      carouselRef.current.scrollBy({
        left: direction === "right" ? scrollAmount : -scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const plans = [...personalPlans, ...businessPlans];

  return (
    <section className="pricing-carousel">
      <div className="container">
        <h2>{t("pricing.title")}</h2>
        <p>{t("pricing.subtitle")}</p>

        <div className="carousel-wrapper">
          <button className="carousel-btn left" onClick={() => scroll("left")}>
            ◀
          </button>

          <div className="carousel" ref={carouselRef}>
            {plans.map((plan, idx) => {
              const price =
                plan.priceMonthly === 0 ? "$0" : `$${plan.priceMonthly}/mo`;

              return (
                <div
                  key={idx}
                  className={`plan-card ${plan.highlight ? "highlight" : ""}`}
                >
                  {plan.highlight && (
                    <span className="badge">{t("pricing.mostPopular")}</span>
                  )}

                  <h3>{plan.name}</h3>
                  <p className="plan-price">{price}</p>

                  {plan.devices && (
                    <p className="plan-devices">
                      {plan.devices}{" "}
                      {plan.devices > 1
                        ? t("pricing.devices")
                        : t("pricing.device")}
                    </p>
                  )}

                  <ul>
                    {plan.features.map((f, i) => (
                      <li key={i}>{f}</li>
                    ))}
                  </ul>

                  <Link href={plan.cta} className="btn-primary">
                    {plan.cta === "/auth"
                      ? t("pricing.getStarted")
                      : t("pricing.contact")}
                  </Link>
                </div>
              );
            })}
          </div>

          <button
            className="carousel-btn right"
            onClick={() => scroll("right")}
          >
            ▶
          </button>
        </div>
      </div>
    </section>
  );
}
