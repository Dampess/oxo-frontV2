"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useTranslation } from "@/hooks/useTranslation";
import "@/app/styles/pages/dashboard.scss";

export default function DashboardPage() {
  const pathname = usePathname();
  const lang = pathname.split("/")[1] || "en";
  const { t } = useTranslation();

  const user = {
    email: "john@doe.com",
    createdAt: "Jan 2026",
  };

  const plan = {
    name: "Pro Plan",
    price: "$9.99/mo",
    renewal: "May 12, 2026",
  };

  const devices = [
    { name: "MacBook Pro", lastSeen: t("dashboardPage.devices.items.macbook") },
    { name: "iPhone 14", lastSeen: t("dashboardPage.devices.items.iphone") },
    { name: "Windows PC", lastSeen: t("dashboardPage.devices.items.windows") },
  ];

  // ======= TOOLS LOGIC =======
  const [activeTool, setActiveTool] = useState<null | string>(null);
  const [emailInput, setEmailInput] = useState("");
  const [linkInput, setLinkInput] = useState("");
  const [scamText, setScamText] = useState("");
  const [result, setResult] = useState("");

  const handleToolSubmit = () => {
    if (activeTool === "email") {
      setResult(
        emailInput.includes("@")
          ? t("dashboardPage.tools.results.validEmail")
          : t("dashboardPage.tools.results.invalidEmail"),
      );
    } else if (activeTool === "link") {
      setResult(
        linkInput.startsWith("https://")
          ? t("dashboardPage.tools.results.safeLink")
          : t("dashboardPage.tools.results.suspiciousLink"),
      );
    } else if (activeTool === "scam") {
      setResult(
        scamText.toLowerCase().includes("free") ||
          scamText.toLowerCase().includes("urgent")
          ? t("dashboardPage.tools.results.potentialScam")
          : t("dashboardPage.tools.results.seemsSafe"),
      );
    }
  };

  return (
    <div className="dashboard-grid">
      {/* PLAN */}
      <div className="card">
        <h3>{t("dashboardPage.plan.title")}</h3>
        <p className="highlight">{plan.name}</p>
        <p>{plan.price}</p>
        <p>
          {t("dashboardPage.plan.renewsOn")} {plan.renewal}
        </p>
        <Link href={`/${lang}/dashboard/plan`} className="btn">
          {t("dashboardPage.plan.button")}
        </Link>
      </div>

      {/* DEVICES */}
      <div className="card">
        <h3>{t("dashboardPage.devices.title")}</h3>
        <p>
          {devices.length} {t("dashboardPage.devices.activeDevices")}
        </p>
        <ul>
          {devices.map((d, i) => (
            <li key={i}>
              {d.name} <span>{d.lastSeen}</span>
            </li>
          ))}
        </ul>
        <Link href={`/${lang}/dashboard/devices`} className="btn">
          {t("dashboardPage.devices.button")}
        </Link>
      </div>

      {/* ACCOUNT */}
      <div className="card">
        <h3>{t("dashboardPage.account.title")}</h3>
        <p>{user.email}</p>
        <p>
          {t("dashboardPage.account.created")} {user.createdAt}
        </p>
        <Link href={`/${lang}/dashboard/settings`} className="btn">
          {t("dashboardPage.account.button")}
        </Link>
      </div>

      {/* QUICK TOOLS */}
      <div className="card">
        <h3>{t("dashboardPage.tools.title")}</h3>

        <div className="tools-nav">
          <button onClick={() => setActiveTool("email")}>
            {t("dashboardPage.tools.nav.email")}
          </button>
          <button onClick={() => setActiveTool("link")}>
            {t("dashboardPage.tools.nav.link")}
          </button>
          <button onClick={() => setActiveTool("scam")}>
            {t("dashboardPage.tools.nav.scam")}
          </button>
        </div>

        {activeTool && (
          <div className="tool-card">
            {activeTool === "email" && (
              <input
                type="text"
                placeholder={t("dashboardPage.tools.placeholders.email")}
                value={emailInput}
                onChange={(e) => setEmailInput(e.target.value)}
              />
            )}

            {activeTool === "link" && (
              <input
                type="text"
                placeholder={t("dashboardPage.tools.placeholders.link")}
                value={linkInput}
                onChange={(e) => setLinkInput(e.target.value)}
              />
            )}

            {activeTool === "scam" && (
              <textarea
                placeholder={t("dashboardPage.tools.placeholders.scam")}
                value={scamText}
                onChange={(e) => setScamText(e.target.value)}
              />
            )}

            <button className="primary" onClick={handleToolSubmit}>
              {t("dashboardPage.tools.run")}
            </button>

            {result && <div className="result-box">{result}</div>}
          </div>
        )}
      </div>

      {/* ACTIVITY */}
      <div className="card full">
        <h3>{t("dashboardPage.activity.title")}</h3>
        <ul>
          <li>{t("dashboardPage.activity.items.login")}</li>
          <li>{t("dashboardPage.activity.items.passwordCheck")}</li>
          <li>{t("dashboardPage.activity.items.deviceAdded")}</li>
        </ul>
      </div>
    </div>
  );
}
