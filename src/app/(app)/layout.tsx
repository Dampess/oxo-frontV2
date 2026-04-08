"use client";

import Link from "next/link";
import "../styles/pages/dashboard.scss";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const userName = "Alex"; // TODO: récupérer depuis le back
  const hour = new Date().getHours();

  const greeting =
    hour < 12 ? "Good morning" : hour < 18 ? "Good afternoon" : "Good evening";

  return (
    <div className="dashboard">
      {/* SIDEBAR */}
      <aside className="sidebar">
        <div className="logo">Oxo</div>

        <nav>
          <Link href="/dashboard">Overview</Link>
          <Link href="/dashboard/devices">Devices</Link>
          <Link href="/dashboard/plan">Plan</Link>
          <Link href="/dashboard/tools">Tools</Link>
          <Link href="/dashboard/settings">Settings</Link>
        </nav>
      </aside>

      {/* MAIN */}
      <div className="dashboard-main">
        <header className="dashboard-header">
          <div className="header-left">
            <h1>Dashboard</h1>
            <p className="welcome">
              Happy to see you again, <strong>{userName}</strong> 👋
            </p>
          </div>

          <div className="header-right">
            <Link href="/contact" className="contact-btn">
              Contact
            </Link>

            <div className="user-avatar">{userName.charAt(0)}</div>
          </div>
        </header>

        <div className="dashboard-content">{children}</div>
      </div>

      {/* CHATBOT FLOATING */}
      <div className="chatbot">💬</div>
    </div>
  );
}
