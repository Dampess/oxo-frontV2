import React from "react";
import "../styles/components/trustreasons.scss";

type Reason = {
  emoji: string;
  title: string;
  description: string;
};

const reasons: Reason[] = [
  {
    emoji: "🛡️",
    title: "All-in-one Protection",
    description:
      "Protect your emails, passwords, devices and links with a single platform.",
  },
  {
    emoji: "⚡",
    title: "Instant Security Checks",
    description:
      "Analyze threats in seconds with powerful and easy-to-use tools.",
  },
  {
    emoji: "🔒",
    title: "Privacy by Design",
    description:
      "Your data stays yours. Built with GDPR compliance and security best practices.",
  },
];

export default function TrustReasons() {
  return (
    <section className="trust-reasons">
      <div className="container">
        <div className="trust-header">
          <h2>Why trust Oxo?</h2>
          <p>
            Built to keep you safe online with simple, powerful and transparent
            security tools.
          </p>
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
