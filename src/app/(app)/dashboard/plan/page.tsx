"use client";

import { useState } from "react";
import "../../../styles/pages/plan.scss";

export default function PlanPage() {
  const [plan] = useState({
    name: "Pro Plan",
    price: "$9.99/month",
    renewal: "May 12, 2026",
    status: "Active",
    devices: "3 devices",
    maxDevices: 5,
    features: [
      "Real-time protection",
      "Phishing detection",
      "Device security scan",
      "Priority support",
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
            <strong>Renewal date:</strong> {plan.renewal}
          </p>
          <p>
            <strong>Devices:</strong> {plan.devices} / {plan.maxDevices}
          </p>
        </div>

        {/* UPGRADE BANNER */}
        <div className="upgrade-banner">
          🚀 Upgrade to Premium and secure up to 10 devices
          <button className="primary small">Upgrade</button>
        </div>
      </div>

      {/* ===== FEATURES ===== */}
      <div className="plan-card">
        <h3>Included Features</h3>

        <ul className="features">
          {plan.features.map((f, i) => (
            <li key={i}>✔ {f}</li>
          ))}
        </ul>
      </div>

      {/* ===== PAYMENT ===== */}
      <div className="plan-card">
        <h3>Payment Method</h3>

        <div className="payment">
          <div>
            <p>
              {payment.brand} •••• {payment.last4}
            </p>
            <span>Expires {payment.expiry}</span>
          </div>

          <button className="secondary">Update</button>
        </div>
      </div>

      {/* ===== INVOICES ===== */}
      <div className="plan-card">
        <h3>Billing History</h3>

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
                  <button className="secondary small">View</button>
                  <button className="small">Download</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ===== ACTIONS ===== */}
      <div className="plan-card actions">
        <h3>Manage your plan</h3>

        <div className="actions-grid">
          <button className="primary">Upgrade Plan</button>
          <button>Downgrade</button>
          <button className="danger">Cancel Subscription</button>
        </div>
      </div>
    </div>
  );
}
