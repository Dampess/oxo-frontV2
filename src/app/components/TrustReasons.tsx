"use client";

import React from "react";
import { useTranslation } from "@/hooks/useTranslation";
import "../styles/components/trustreasons.scss";

export default function TrustReasons() {
  const { t } = useTranslation();

  const reasons = [
    {
      emoji: "🛡️",
      title: t("trust.items.allInOne.title"),
      description: t("trust.items.allInOne.description"),
    },
    {
      emoji: "⚡",
      title: t("trust.items.instant.title"),
      description: t("trust.items.instant.description"),
    },
    {
      emoji: "🔒",
      title: t("trust.items.privacy.title"),
      description: t("trust.items.privacy.description"),
    },
  ];

  return (
    <section className="trust-reasons">
      <div className="container">
        <div className="trust-header">
          <h2>{t("trust.title")}</h2>
          <p>{t("trust.subtitle")}</p>
        </div>

        <div className="reasons-grid">
          {reasons.map((reason, index) => (
            <div key={index} className="reason-card">
              <div className="icon">{reason.emoji}</div>
              <h3>{reason.title}</h3>
              <p>{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
