"use client";

import "@/app/styles/pages/dashboard.scss";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function ProDashboardPage() {
  const pathname = usePathname();
  const lang = pathname.split("/")[1];
  const company = {
    name: "Oxo Corp",
    members: 8,
    devices: 23,
    securityScore: 87,
  };

  const alerts = [
    "⚠ Suspicious login detected",
    "⚠ 2 weak passwords found",
    "✔ All devices updated",
  ];

  const members = [
    { name: "Alice", role: "Admin" },
    { name: "Bob", role: "User" },
    { name: "Charlie", role: "User" },
  ];

  return (
    <div className="dashboard-grid">
      {/* SECURITY OVERVIEW */}
      <div className="card">
        <h3>Security Overview</h3>
        <p className="highlight">{company.securityScore}% Secure</p>
        <p>{company.devices} devices monitored</p>
        <p>{company.members} team members</p>

        <Link href={`/${lang}/dashboard/security`} className="btn">
          View details
        </Link>
      </div>

      {/* TEAM */}
      <div className="card">
        <h3>Team</h3>
        <p>{company.members} active members</p>

        <ul>
          {members.map((m, i) => (
            <li key={i}>
              {m.name} <span>{m.role}</span>
            </li>
          ))}
        </ul>

        <Link href={`/${lang}/dashboard/team`} className="btn">
          Manage team
        </Link>
      </div>

      {/* ALERTS */}
      <div className="card">
        <h3>Alerts</h3>

        <ul>
          {alerts.map((a, i) => (
            <li key={i}>{a}</li>
          ))}
        </ul>

        <Link href={`/${lang}/dashboard/security`} className="btn">
          Resolve issues
        </Link>
      </div>

      {/* DEVICES */}
      <div className="card">
        <h3>Devices</h3>
        <p>{company.devices} total devices</p>

        <Link href={`/${lang}/dashboard/devices`} className="btn">
          Manage devices
        </Link>
      </div>

      {/* BILLING */}
      <div className="card">
        <h3>Billing</h3>
        <p>Next invoice: May 12, 2026</p>
        <p>$79.99 / month</p>

        <Link href={`/${lang}/dashboard/plan`} className="btn">
          View billing
        </Link>
      </div>

      {/* ACTIVITY */}
      <div className="card full">
        <h3>Recent Activity</h3>

        <ul>
          <li>New device added — Today</li>
          <li>User Bob joined — Yesterday</li>
          <li>Password issue detected — 2 days ago</li>
        </ul>
      </div>
    </div>
  );
}
