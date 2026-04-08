"use client";

import Link from "next/link";
import { useState } from "react";
import "../styles/pages/dashboard.scss";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const userName = "Alex"; // TODO: récupérer depuis le back
  const hour = new Date().getHours();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const greeting =
    hour < 12 ? "Good morning" : hour < 18 ? "Good afternoon" : "Good evening";

  return (
    <div className="dashboard">
      {/* BURGER BUTTON */}
      <button
        className={`burger-btn ${sidebarOpen ? "open" : ""}`}
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        <span />
        <span />
        <span />
      </button>

      {/* SIDEBAR */}
      <aside className={`sidebar ${sidebarOpen ? "open" : ""}`}>
        <div className="logo">Oxo</div>

        <nav>
          <Link href="/dashboard" onClick={() => setSidebarOpen(false)}>
            Overview
          </Link>
          <Link href="/dashboard/devices" onClick={() => setSidebarOpen(false)}>
            Devices
          </Link>
          <Link href="/dashboard/plan" onClick={() => setSidebarOpen(false)}>
            Plan
          </Link>
          <Link href="/dashboard/tools" onClick={() => setSidebarOpen(false)}>
            Tools
          </Link>
          <Link
            href="/dashboard/settings"
            onClick={() => setSidebarOpen(false)}
          >
            Settings
          </Link>
        </nav>
      </aside>

      {/* OVERLAY MOBILE */}
      {sidebarOpen && (
        <div className="overlay" onClick={() => setSidebarOpen(false)} />
      )}

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
