"use client";

import { useState } from "react";
import { useTranslation } from "@/hooks/useTranslation";
import "@/app/styles/pages/pro-dashboard-pages.scss";

export default function UsersPage() {
  const { t } = useTranslation();

  const [devices, setDevices] = useState([
    {
      name: "MacBook Pro",
      user: "Alice",
      os: "macOS",
      lastSeen: t("usersPage.devices.lastSeen.today"),
      status: "secure",
    },
    {
      name: "iPhone 14",
      user: "Bob",
      os: "iOS",
      lastSeen: t("usersPage.devices.lastSeen.yesterday"),
      status: "warning",
    },
  ]);

  return (
    <div className="dashboard-grid">
      <div className="card full">
        <h3>{t("usersPage.title")}</h3>

        <table className="table">
          <thead>
            <tr>
              <th>{t("usersPage.table.device")}</th>
              <th>{t("usersPage.table.user")}</th>
              <th>{t("usersPage.table.os")}</th>
              <th>{t("usersPage.table.lastActive")}</th>
              <th>{t("usersPage.table.status")}</th>
              <th>{t("usersPage.table.action")}</th>
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
                    {d.status === "secure"
                      ? t("usersPage.status.secure")
                      : t("usersPage.status.warning")}
                  </span>
                </td>
                <td>
                  <button className="secondary">
                    {t("usersPage.actions.locate")}
                  </button>
                  <button className="danger">
                    {t("usersPage.actions.remove")}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
