"use client";

import React from "react";
import { useTranslation } from "@/hooks/useTranslation";
import "../styles/components/featuressection.scss";
import FeatureCard from "./FeatureCard";

export default function FeaturesSection() {
  const { t } = useTranslation();

  const features = [
    {
      title: t("features.items.antivirus.title"),
      description: t("features.items.antivirus.description"),
      icon: "🛡️",
      link: "product/anti-virus",
    },
    {
      title: t("features.items.vault.title"),
      description: t("features.items.vault.description"),
      icon: "🔑",
      link: "product/passwords-vault",
    },
    {
      title: t("features.items.phishing.title"),
      description: t("features.items.phishing.description"),
      icon: "✉️",
      link: "product/spam-phishing",
    },
    {
      title: t("features.items.device.title"),
      description: t("features.items.device.description"),
      icon: "💻",
      link: "product/anti-virus",
    },
  ];

  return (
    <section className="features-section">
      <div className="container">
        <div className="features-header">
          <h2>{t("features.title")}</h2>
          <p>{t("features.subtitle")}</p>
        </div>

        <div className="features-grid">
          {features.map((f, idx) => (
            <FeatureCard key={idx} {...f} />
          ))}
        </div>
      </div>
    </section>
  );
}
