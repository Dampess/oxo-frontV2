"use client";

import "@/app/styles/pages/dashboard.scss";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslation } from "@/hooks/useTranslation";

export default function ProDashboardPage() {
  const pathname = usePathname();
  const lang = pathname.split("/")[1] || "en";
  const { t } = useTranslation();

  const company = {
    name: "Oxo Corp",
    members: 8,
    devices: 23,
    securityScore: 87,
  };

  const alerts = [
    t("proDashboard.alerts.suspiciousLogin"),
    t("proDashboard.alerts.weakPasswords"),
    t("proDashboard.alerts.devicesUpdated"),
  ];

  const members = [
    { name: "Alice", role: t("proDashboard.roles.admin") },
    { name: "Bob", role: t("proDashboard.roles.user") },
    { name: "Charlie", role: t("proDashboard.roles.user") },
  ];

  return (
    <div className="dashboard-grid">
      {/* SECURITY OVERVIEW */}
      <div className="card">
        <h3>{t("proDashboard.security.title")}</h3>
        <p className="highlight">
          {company.securityScore}% {t("proDashboard.security.secure")}
        </p>
        <p>
          {company.devices} {t("proDashboard.security.devices")}
        </p>
        <p>
          {company.members} {t("proDashboard.security.members")}
        </p>

        <Link href={`/${lang}/dashboard/security`} className="btn">
          {t("proDashboard.security.button")}
        </Link>
      </div>

      {/* TEAM */}
      <div className="card">
        <h3>{t("proDashboard.team.title")}</h3>
        <p>
          {company.members} {t("proDashboard.team.activeMembers")}
        </p>

        <ul>
          {members.map((m, i) => (
            <li key={i}>
              {m.name} <span>{m.role}</span>
            </li>
          ))}
        </ul>

        <Link href={`/${lang}/dashboard/team`} className="btn">
          {t("proDashboard.team.button")}
        </Link>
      </div>

      {/* ALERTS */}
      <div className="card">
        <h3>{t("proDashboard.alerts.title")}</h3>

        <ul>
          {alerts.map((a, i) => (
            <li key={i}>{a}</li>
          ))}
        </ul>

        <Link href={`/${lang}/dashboard/security`} className="btn">
          {t("proDashboard.alerts.button")}
        </Link>
      </div>

      {/* DEVICES */}
      <div className="card">
        <h3>{t("proDashboard.devices.title")}</h3>
        <p>
          {company.devices} {t("proDashboard.devices.total")}
        </p>

        <Link href={`/${lang}/dashboard/devices`} className="btn">
          {t("proDashboard.devices.button")}
        </Link>
      </div>

      {/* BILLING */}
      <div className="card">
        <h3>{t("proDashboard.billing.title")}</h3>
        <p>{t("proDashboard.billing.nextInvoice")} May 12, 2026</p>
        <p>$79.99 / {t("proDashboard.billing.month")}</p>

        <Link href={`/${lang}/dashboard/plan`} className="btn">
          {t("proDashboard.billing.button")}
        </Link>
      </div>

      {/* ACTIVITY */}
      <div className="card full">
        <h3>{t("proDashboard.activity.title")}</h3>

        <ul>
          <li>{t("proDashboard.activity.items.deviceAdded")}</li>
          <li>{t("proDashboard.activity.items.userJoined")}</li>
          <li>{t("proDashboard.activity.items.passwordIssue")}</li>
        </ul>
      </div>
    </div>
  );
}
