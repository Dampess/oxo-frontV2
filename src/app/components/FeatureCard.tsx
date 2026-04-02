import React from "react";
import "../styles/components/featurecard.scss";

type FeatureCardProps = {
  title: string;
  description: string;
  icon?: string;
};

export default function FeatureCard({
  title,
  description,
  icon,
}: FeatureCardProps) {
  return (
    <div className="feature-card">
      <div className="feature-icon">{icon}</div>

      <div className="feature-content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}
