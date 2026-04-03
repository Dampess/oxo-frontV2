import React from "react";
import "../styles/components/featuressection.scss";
import FeatureCard from "./FeatureCard";

export default function FeaturesSection() {
  const features = [
    {
      title: "Antivirus Protection",
      description: "Real-time threat detection across your devices.",
      icon: "🛡️",
      link: "product/anti-virus",
    },
    {
      title: "Password Vault",
      description: "Securely store and manage all your credentials.",
      icon: "🔑",
      link: "product/passwords-vault",
    },
    {
      title: "Email & SMS Security",
      description: "Detect phishing and malicious messages instantly.",
      icon: "✉️",
      link: "product/spam-phishing",
    },
    {
      title: "Device Scan",
      description: "Identify vulnerabilities and fix them fast.",
      icon: "💻",
      link: "product/anti-virus",
    },
  ];

  return (
    <section className="features-section">
      <div className="container">
        <div className="features-header">
          <h2>Everything you need to stay secure</h2>
          <p>
            Powerful tools designed to protect your digital life without
            complexity.
          </p>
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
