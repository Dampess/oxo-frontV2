"use client";

import { useState } from "react";
import { useTranslation } from "@/hooks/useTranslation";
import "@/app/styles/pages/pro-dashboard-pages.scss";

export default function TeamPage() {
  const { t } = useTranslation();

  const [members, setMembers] = useState([
    { name: "Alice", email: "alice@oxo.com", role: t("teamPage.roles.admin") },
    { name: "Bob", email: "bob@oxo.com", role: t("teamPage.roles.user") },
  ]);

  const [inviteEmail, setInviteEmail] = useState("");

  const inviteUser = () => {
    if (!inviteEmail) return;
    setMembers([
      ...members,
      {
        name: t("teamPage.pending"),
        email: inviteEmail,
        role: t("teamPage.roles.user"),
      },
    ]);
    setInviteEmail("");
  };

  return (
    <div className="dashboard-grid">
      {/* TEAM LIST */}
      <div className="card full">
        <h3>{t("teamPage.title")}</h3>

        <table className="table">
          <thead>
            <tr>
              <th>{t("teamPage.table.name")}</th>
              <th>{t("teamPage.table.email")}</th>
              <th>{t("teamPage.table.role")}</th>
              <th>{t("teamPage.table.action")}</th>
            </tr>
          </thead>

          <tbody>
            {members.map((m, i) => (
              <tr key={i}>
                <td>{m.name}</td>
                <td>{m.email}</td>
                <td>{m.role}</td>
                <td>
                  <button className="secondary">
                    {t("teamPage.actions.changeRole")}
                  </button>
                  <button className="danger">
                    {t("teamPage.actions.remove")}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* INVITE */}
      <div className="card">
        <h3>{t("teamPage.invite.title")}</h3>

        <input
          type="email"
          placeholder={t("teamPage.invite.placeholder")}
          value={inviteEmail}
          onChange={(e) => setInviteEmail(e.target.value)}
        />

        <button className="primary" onClick={inviteUser}>
          {t("teamPage.invite.button")}
        </button>
      </div>
    </div>
  );
}
