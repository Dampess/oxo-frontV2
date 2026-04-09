"use client";

import { useState } from "react";
import "@/app/styles/pages/pro-dashboard-pages.scss";

export default function UsersPage() {
  const [devices, setDevices] = useState([
    {
      name: "MacBook Pro",
      user: "Alice",
      os: "macOS",
      lastSeen: "Today",
      status: "secure",
    },
    {
      name: "iPhone 14",
      user: "Bob",
      os: "iOS",
      lastSeen: "Yesterday",
      status: "warning",
    },
  ]);

  return (
    <div className="dashboard-grid">
      <div className="card full">
        <h3>All Devices</h3>

        <table className="table">
          <thead>
            <tr>
              <th>Device</th>
              <th>User</th>
              <th>OS</th>
              <th>Last Active</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {devices.map((d, i) => (
              <tr key={i}>
                <td>{d.name}</td>
                <td>{d.user}</td>
                <td>{d.os}</td>
                <td>{d.lastSeen}</td>
                <td>
                  <span className={d.status}>
                    {d.status === "secure" ? "Secure" : "Warning"}
                  </span>
                </td>
                <td>
                  <button className="secondary">Locate</button>
                  <button className="danger">Remove</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
