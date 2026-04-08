"use client";

import { useState } from "react";
import Link from "next/link";
import "../../styles/pages/dashboard.scss";

export default function DashboardPage() {
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
    { name: "MacBook Pro", lastSeen: "Today" },
    { name: "iPhone 14", lastSeen: "Yesterday" },
    { name: "Windows PC", lastSeen: "2 days ago" },
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
        emailInput.includes("@") ? "Valid email ✅" : "Invalid email ❌",
      );
    } else if (activeTool === "link") {
      setResult(
        linkInput.startsWith("https://")
          ? "Link looks safe ✅"
          : "Suspicious link ❌",
      );
    } else if (activeTool === "scam") {
      setResult(
        scamText.toLowerCase().includes("free") ||
          scamText.toLowerCase().includes("urgent")
          ? "Potential scam ⚠️"
          : "Seems safe ✅",
      );
    }
  };

  return (
    <div className="dashboard-grid">
      {/* PLAN */}
      <div className="card">
        <h3>Current Plan</h3>
        <p className="highlight">{plan.name}</p>
        <p>{plan.price}</p>
        <p>Renews on {plan.renewal}</p>
        <Link href="/dashboard/plan" className="btn">
          Manage plan
        </Link>
      </div>

      {/* DEVICES */}
      <div className="card">
        <h3>Devices</h3>
        <p>{devices.length} active devices</p>
        <ul>
          {devices.map((d, i) => (
            <li key={i}>
              {d.name} <span>{d.lastSeen}</span>
            </li>
          ))}
        </ul>
        <Link href="/dashboard/devices" className="btn">
          View all
        </Link>
      </div>

      {/* ACCOUNT */}
      <div className="card">
        <h3>Account</h3>
        <p>{user.email}</p>
        <p>Created: {user.createdAt}</p>
        <Link href="/dashboard/settings" className="btn">
          Settings
        </Link>
      </div>

      {/* QUICK TOOLS */}
      <div className="card">
        <h3>Quick Tools</h3>

        {/* Tool selection */}
        <div className="tools-nav">
          <button onClick={() => setActiveTool("email")}>Email Checker</button>
          <button onClick={() => setActiveTool("link")}>Link Scanner</button>
          <button onClick={() => setActiveTool("scam")}>Scam Analyzer</button>
        </div>

        {/* Tool content */}
        {activeTool && (
          <div className="tool-card">
            {activeTool === "email" && (
              <>
                <input
                  type="text"
                  placeholder="Enter email"
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                />
              </>
            )}
            {activeTool === "link" && (
              <>
                <input
                  type="text"
                  placeholder="Enter link"
                  value={linkInput}
                  onChange={(e) => setLinkInput(e.target.value)}
                />
              </>
            )}
            {activeTool === "scam" && (
              <>
                <textarea
                  placeholder="Enter text to analyze"
                  value={scamText}
                  onChange={(e) => setScamText(e.target.value)}
                />
              </>
            )}
            <button className="primary" onClick={handleToolSubmit}>
              Run
            </button>

            {result && <div className="result-box">{result}</div>}
          </div>
        )}
      </div>

      {/* ACTIVITY */}
      <div className="card full">
        <h3>Recent Activity</h3>
        <ul>
          <li>Login from Chrome — Today</li>
          <li>Password check used — Yesterday</li>
          <li>Device added — 3 days ago</li>
        </ul>
      </div>
    </div>
  );
}
