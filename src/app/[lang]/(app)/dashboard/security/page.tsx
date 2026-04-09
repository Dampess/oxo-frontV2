"use client";

import "@/app/styles/pages/pro-dashboard-pages.scss";

export default function SecurityPage() {
  const score = 78;

  const alerts = [
    { text: "Weak password detected", type: "warning" },
    { text: "Suspicious login attempt", type: "warning" },
    { text: "All systems updated", type: "ok" },
  ];

  const logs = [
    "Login from Chrome — Paris",
    "Password changed",
    "New device added",
  ];

  return (
    <div className="dashboard-grid">
      {/* SCORE */}
      <div className="card">
        <h3>Security Score</h3>
        <p className="highlight">{score}%</p>
        <p>Overall protection level</p>
      </div>

      {/* ALERTS */}
      <div className="card">
        <h3>Alerts</h3>

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
        <h3>Activity Logs</h3>

        <ul>
          {logs.map((log, i) => (
            <li key={i}>{log}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
