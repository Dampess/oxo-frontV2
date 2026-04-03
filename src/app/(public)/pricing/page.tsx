"use client";

import { businessPlans, personalPlans } from "@/lib/plans";
import { useState } from "react";
import Link from "next/link";
import "../../styles/pages/pricing.scss";

export default function PricingPage() {
  const [billing, setBilling] = useState<"monthly" | "yearly">("monthly");

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
      <section className="cta-section">
        <div className="container">
          <h2>You&apos;r not sure ? We help you to find wich plan fit !</h2>
          <Link href="/free-trial" className="btn-primary">
            TAKE A LOOK
          </Link>
        </div>
      </section>
    </main>
  );
}
