"use client";

import { useTranslation } from "@/hooks/useTranslation";
import "@/app/styles/pages/pro-dashboard-pages.scss";

export default function SecurityPage() {
  const { t } = useTranslation();

  const score = 78;

  const alerts = [
    { text: t("securityPage.alerts.weakPassword"), type: "warning" },
    { text: t("securityPage.alerts.suspiciousLogin"), type: "warning" },
    { text: t("securityPage.alerts.systemsUpdated"), type: "ok" },
  ];

  const logs = [
    t("securityPage.logs.login"),
    t("securityPage.logs.passwordChanged"),
    t("securityPage.logs.deviceAdded"),
  ];

  return (
    <div className="dashboard-grid">
      {/* SCORE */}
      <div className="card">
        <h3>{t("securityPage.score.title")}</h3>
        <p className="highlight">{score}%</p>
        <p>{t("securityPage.score.description")}</p>
      </div>

      {/* ALERTS */}
      <div className="card">
        <h3>{t("securityPage.alerts.title")}</h3>

        <ul>
          {alerts.map((a, i) => (
            <li key={i} className={a.type === "warning" ? "warning" : ""}>
              {a.text}
            </li>
          ))}
        </ul>
      </div>

      {/* LOGS */}
      <div className="card full">
        <h3>{t("securityPage.logs.title")}</h3>

        <ul>
          {logs.map((log, i) => (
            <li key={i}>{log}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
