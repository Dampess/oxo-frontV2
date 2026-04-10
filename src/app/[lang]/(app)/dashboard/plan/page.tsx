"use client";

import { useState } from "react";
import { useTranslation } from "@/hooks/useTranslation";
import "@/app/styles/pages/plan.scss";

export default function PlanPage() {
  const { t } = useTranslation();

  const [plan] = useState({
    name: "Pro Plan",
    price: "$9.99/month",
    renewal: "May 12, 2026",
    status: t("plan.status.active"),
    devices: "3 devices",
    maxDevices: 5,
    features: [
      t("plan.features.f1"),
      t("plan.features.f2"),
      t("plan.features.f3"),
      t("plan.features.f4"),
    ],
  });

  const [payment] = useState({
    brand: "Visa",
    last4: "4242",
    expiry: "08/28",
  });

  const invoices = [
    {
      id: "INV-001",
      date: "April 12, 2026",
      amount: "$9.99",
    },
    {
      id: "INV-002",
      date: "March 12, 2026",
      amount: "$9.99",
    },
  ];

  return (
    <div className="plan-page">
      {/* ===== CURRENT PLAN ===== */}
      <div className="plan-card main">
        <div className="plan-header">
          <div>
            <h2>{plan.name}</h2>
            <p className="price">{plan.price}</p>
          </div>

          <span className="status active">{plan.status}</span>
        </div>

        <div className="plan-info">
          <p>
            <strong>{t("plan.labels.renewal")}:</strong> {plan.renewal}
          </p>
          <p>
            <strong>{t("plan.labels.devices")}:</strong> {plan.devices} /{" "}
            {plan.maxDevices}
          </p>
        </div>

        {/* UPGRADE BANNER */}
        <div className="upgrade-banner">
          {t("plan.upgrade.text")}
          <button className="primary small">{t("plan.upgrade.button")}</button>
        </div>
      </div>

      {/* ===== FEATURES ===== */}
      <div className="plan-card">
        <h3>{t("plan.features.title")}</h3>

        <ul className="features">
          {plan.features.map((f, i) => (
            <li key={i}>✔ {f}</li>
          ))}
        </ul>
      </div>

      {/* ===== PAYMENT ===== */}
      <div className="plan-card">
        <h3>{t("plan.payment.title")}</h3>

        <div className="payment">
          <div>
            <p>
              {payment.brand} •••• {payment.last4}
            </p>
            <span>
              {t("plan.payment.expires")} {payment.expiry}
            </span>
          </div>

          <button className="secondary">{t("plan.payment.update")}</button>
        </div>
      </div>

      {/* ===== INVOICES ===== */}
      <div className="plan-card">
        <h3>{t("plan.invoices.title")}</h3>

        <div className="invoices">
          {invoices.map((inv) => (
            <div key={inv.id} className="invoice-item">
              <div>
                <p className="invoice-id">{inv.id}</p>
                <span>{inv.date}</span>
              </div>

              <div className="invoice-right">
                <p>{inv.amount}</p>

                <div className="invoice-actions">
                  <button className="secondary small">
                    {t("plan.invoices.view")}
                  </button>
                  <button className="small">
                    {t("plan.invoices.download")}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ===== ACTIONS ===== */}
      <div className="plan-card actions">
        <h3>{t("plan.actions.title")}</h3>

        <div className="actions-grid">
          <button className="primary">{t("plan.actions.upgrade")}</button>
          <button>{t("plan.actions.downgrade")}</button>
          <button className="danger">{t("plan.actions.cancel")}</button>
        </div>
      </div>
    </div>
  );
}
