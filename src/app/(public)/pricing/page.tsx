/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useState } from "react";
import "../../styles/pages/pricing.scss";

export default function PricingPage() {
  const [billing, setBilling] = useState<"monthly" | "yearly">("monthly");
  const [devicesCount, setDevicesCount] = useState(1);
  const [needsPhishing, setNeedsPhishing] = useState(false);
  const [needsDeviceScan, setNeedsDeviceScan] = useState(false);
  const [emailsCount, setEmailsCount] = useState(0);
  const [needsPrioritySupport, setNeedsPrioritySupport] = useState(false);
  const [needsAdvancedProtection, setNeedsAdvancedProtection] = useState(false);
  const [maxBudget, setMaxBudget] = useState<number | null>(null);

  const personalPlans = [
    {
      name: "Free",
      devices: 1,
      priceMonthly: 0,
      priceYearly: 0,
      features: [
        "Limited link checks",
        "Manual email scan",
        "Phone verification",
      ],
      cta: "/signup",
      type: "secondary",
    },
    {
      name: "Personal Pro",
      devices: 3,
      priceMonthly: 9,
      priceYearly: 86,
      features: [
        "Unlimited link analysis",
        "Email phishing detection",
        "Device security checks",
        "Real-time alerts",
      ],
      cta: "/signup",
      type: "primary",
      highlight: true,
    },
    {
      name: "Personal Max",
      devices: 8,
      priceMonthly: 19,
      priceYearly: 182,
      features: ["All Personal Pro features", "Priority support"],
      cta: "/signup",
      type: "primary",
    },
  ];

  const businessPlans = [
    {
      name: "Startup",
      devices: 10,
      priceMonthly: 49,
      priceYearly: 470,
      features: [
        "Email & phishing protection",
        "Fraud detection",
        "Basic reporting",
      ],
      cta: "/contact",
      type: "secondary",
    },
    {
      name: "SME Pro",
      devices: 50,
      priceMonthly: 199,
      priceYearly: 1900,
      features: [
        "All Startup features",
        "Advanced reporting",
        "Team management",
      ],
      cta: "/contact",
      type: "primary",
    },
    {
      name: "Enterprise",
      devices: 100, // mettre une valeur par défaut ou max
      priceMonthly: 0,
      priceYearly: 0,
      features: [
        "Full audits & compliance",
        "Custom integrations",
        "Dedicated security team",
      ],
      cta: "/contact",
      type: "primary",
      highlight: true,
    },
  ];

  const recommendPlan = () => {
    // Tous les plans
    const allPlans = personalPlans.concat(businessPlans);

    // Features demandées
    const requiredFeatures: string[] = [];
    if (needsPhishing)
      requiredFeatures.push(
        "Email phishing detection",
        "Email & phishing protection",
      );
    if (needsDeviceScan) requiredFeatures.push("Device security checks");
    if (needsAdvancedProtection) requiredFeatures.push("Fraud detection");
    if (needsPrioritySupport)
      requiredFeatures.push("Priority support", "Dedicated security team");

    // Scorer tous les plans
    const scored = allPlans.map((plan: any) => {
      let score = 0;

      // Devices / Users
      if (plan.devices && plan.devices >= devicesCount) score += 2; // +2 si suffisant
      if (plan.users && plan.users !== "Custom") score += 1; // léger bonus pour business adapté

      // Features
      requiredFeatures.forEach((f) => {
        if (plan.features.includes(f)) score += 1;
      });

      // Budget
      const price =
        billing === "monthly" ? plan.priceMonthly : plan.priceYearly;
      if (maxBudget !== null && price > 0 && price <= maxBudget) score += 1;

      return { plan, score, price };
    });

    // Trier par score décroissant, puis par prix croissant
    scored.sort((a, b) => {
      if (b.score === a.score) return a.price - b.price;
      return b.score - a.score;
    });

    // Retourne le meilleur plan, ou Free si aucun
    return scored[0]?.plan || personalPlans[0];
  };

  const recommendedPlan = recommendPlan();

  return (
    <main className="pricing">
      {/* ================= HERO ================= */}
      <section className="pricing-hero">
        <div className="container">
          <h1>Simple & Transparent Pricing</h1>
          <p>
            Choose the plan that fits your needs for individuals & businesses.
          </p>

          <div className="billing-toggle">
            <button
              className={billing === "monthly" ? "active" : ""}
              onClick={() => setBilling("monthly")}
            >
              Monthly
            </button>
            <button
              className={billing === "yearly" ? "active" : ""}
              onClick={() => setBilling("yearly")}
            >
              Yearly <span>-20%</span>
            </button>
          </div>
        </div>
      </section>

      {/* ================= PERSONAL PLANS ================= */}
      <section className="pricing-section personal">
        <div className="container">
          <h2>Personal Plans</h2>
          <div className="pricing-grid">
            {personalPlans.map((plan, idx) => (
              <div
                key={idx}
                className={`pricing-card ${plan.highlight ? "highlight" : ""}`}
              >
                <h3>{plan.name}</h3>
                <p className="price">
                  {billing === "monthly"
                    ? `$${plan.priceMonthly}`
                    : `$${plan.priceYearly}`}
                  {plan.priceMonthly !== 0 && (
                    <span>/{billing === "monthly" ? "month" : "year"}</span>
                  )}
                </p>
                <p className="devices">
                  {plan.devices} device{plan.devices > 1 ? "s" : ""}
                </p>
                <ul>
                  {plan.features.map((f, i) => (
                    <li key={i}>{f}</li>
                  ))}
                </ul>
                <a href={plan.cta} className={`btn ${plan.type}`}>
                  {plan.name === "Free" ? "Get Started" : "Start Free Trial"}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= BUSINESS PLANS ================= */}
      <section className="pricing-section business alt">
        <div className="container">
          <h2>Business Plans</h2>
          <div className="pricing-grid">
            {businessPlans.map((plan, idx) => (
              <div
                key={idx}
                className={`pricing-card ${plan.highlight ? "highlight" : ""}`}
              >
                <h3>{plan.name}</h3>
                <p className="price">
                  {plan.priceMonthly > 0
                    ? billing === "monthly"
                      ? `$${plan.priceMonthly}`
                      : `$${plan.priceYearly}`
                    : "Custom"}
                  {plan.priceMonthly > 0 && (
                    <span>/{billing === "monthly" ? "month" : "year"}</span>
                  )}
                </p>
                <p className="users">{plan.devices} users</p>
                <ul>
                  {plan.features.map((f, i) => (
                    <li key={i}>{f}</li>
                  ))}
                </ul>
                <a href={plan.cta} className={`btn ${plan.type}`}>
                  {plan.name === "Enterprise"
                    ? "Request Demo"
                    : "Contact Sales"}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= COMPARISON TABLE ================= */}
      <section className="pricing-compare">
        <div className="container">
          <h2>Compare Features</h2>
          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>Features</th>
                  <th>Free</th>
                  <th>Personal Pro</th>
                  <th>Personal Max</th>
                  <th>Startup</th>
                  <th>SME Pro</th>
                  <th>Enterprise</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Link analysis</td>
                  <td>Limited</td>
                  <td>✔</td>
                  <td>✔</td>
                  <td>✔</td>
                  <td>✔</td>
                  <td>✔</td>
                </tr>
                <tr>
                  <td>Email phishing protection</td>
                  <td>—</td>
                  <td>✔</td>
                  <td>✔</td>
                  <td>✔</td>
                  <td>✔</td>
                  <td>✔</td>
                </tr>
                <tr>
                  <td>Device security checks</td>
                  <td>—</td>
                  <td>✔</td>
                  <td>✔</td>
                  <td>—</td>
                  <td>✔</td>
                  <td>✔</td>
                </tr>
                <tr>
                  <td>Fraud detection</td>
                  <td>—</td>
                  <td>—</td>
                  <td>—</td>
                  <td>✔</td>
                  <td>✔</td>
                  <td>✔</td>
                </tr>
                <tr>
                  <td>Priority Support</td>
                  <td>Community</td>
                  <td>Email</td>
                  <td>Email</td>
                  <td>Priority</td>
                  <td>Priority</td>
                  <td>Dedicated</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
      {/* ================= PLAN RECOMMENDER ================= */}
      <section className="plan-recommender">
        <div className="container">
          <h2>Find Your Ideal Plan</h2>
          <p>
            Answer a few questions and we&apos;ll recommend the best plan for
            you.
          </p>

          <div className="recommender-form">
            <label>
              Number of devices:
              <input
                type="number"
                min={1}
                max={8}
                value={devicesCount}
                onChange={(e) => setDevicesCount(Number(e.target.value))}
              />
            </label>

            <label>
              <input
                type="checkbox"
                checked={needsPhishing}
                onChange={(e) => setNeedsPhishing(e.target.checked)}
              />
              Need phishing protection
            </label>

            <label>
              <input
                type="checkbox"
                checked={needsDeviceScan}
                onChange={(e) => setNeedsDeviceScan(e.target.checked)}
              />
              Need device security scan
            </label>
          </div>

          <div className="recommended-plan">
            <p>Recommended Plan:</p>
            <h3>{recommendedPlan.name}</h3>
            <p className="price">
              {billing === "monthly"
                ? `$${recommendedPlan.priceMonthly}`
                : `$${recommendedPlan.priceYearly}`}
              {recommendedPlan.priceMonthly !== 0 && <span>/{billing}</span>}
            </p>
            <a
              href={recommendedPlan.cta}
              className={`btn ${recommendedPlan.type}`}
            >
              {recommendedPlan.name === "Free"
                ? "Get Started"
                : "Start Free Trial"}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
