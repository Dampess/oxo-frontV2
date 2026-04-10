"use client";

import { useState } from "react";
import { useTranslation } from "@/hooks/useTranslation";
import "@/app/styles/pages/settings.scss";

export default function SettingsPage() {
  const { t } = useTranslation();

  const [name, setName] = useState("John Doe");
  const [email, setEmail] = useState("john@example.com");
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [notifications, setNotifications] = useState({
    email: true,
    sms: false,
    push: true,
  });
  const [sessions, setSessions] = useState([
    {
      device: "iPhone 13",
      os: "iOS",
      lastActive: "2026-04-05 15:23",
      location: "Paris, FR",
    },
    {
      device: "MacBook Pro",
      os: "macOS",
      lastActive: "2026-04-06 09:11",
      location: "Paris, FR",
    },
  ]);

  const handleProfileUpdate = (e: React.FormEvent) => {
    e.preventDefault();
    alert(t("settings.alerts.profileUpdated"));
  };

  const handlePasswordChange = (e: React.FormEvent) => {
    e.preventDefault();
    if (!currentPassword || !newPassword) return;
    alert(t("settings.alerts.passwordUpdated"));
    setShowPasswordModal(false);
    setCurrentPassword("");
    setNewPassword("");
  };

  const handleDeleteAccount = () => {
    if (confirm(t("settings.alerts.deleteConfirm"))) {
      alert(t("settings.alerts.accountDeleted"));
    }
  };

  return (
    <div className="settings-page">
      <h1>{t("settings.title")}</h1>

      {/* PROFILE */}
      <section className="settings-card">
        <h2>{t("settings.profile.title")}</h2>
        <form onSubmit={handleProfileUpdate}>
          <label>
            {t("settings.profile.name")}
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>

          <label>
            {t("settings.profile.email")}
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>

          <button className="primary" type="submit">
            {t("settings.profile.button")}
          </button>
        </form>
      </section>

      {/* PASSWORD */}
      <section className="settings-card">
        <h2>{t("settings.password.title")}</h2>
        <button className="primary" onClick={() => setShowPasswordModal(true)}>
          {t("settings.password.changeButton")}
        </button>
      </section>

      {/* MODALE CHANGE PASSWORD */}
      {showPasswordModal && (
        <div
          className="modal-overlay"
          onClick={() => setShowPasswordModal(false)}
        >
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <h3>{t("settings.password.modal.title")}</h3>
            <form onSubmit={handlePasswordChange}>
              <input
                type="password"
                placeholder={t("settings.password.modal.currentPassword")}
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
              />
              <input
                type="password"
                placeholder={t("settings.password.modal.newPassword")}
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
              <div className="modal-actions">
                <button className="primary" type="submit">
                  {t("settings.password.modal.update")}
                </button>
                <button
                  className="secondary"
                  type="button"
                  onClick={() => setShowPasswordModal(false)}
                >
                  {t("settings.password.modal.cancel")}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* NOTIFICATIONS */}
      <section className="settings-card">
        <h2>{t("settings.notifications.title")}</h2>
        <div className="notifications">
          <label>
            <input
              type="checkbox"
              checked={notifications.email}
              onChange={(e) =>
                setNotifications({ ...notifications, email: e.target.checked })
              }
            />{" "}
            {t("settings.notifications.email")}
          </label>
          <label>
            <input
              type="checkbox"
              checked={notifications.sms}
              onChange={(e) =>
                setNotifications({ ...notifications, sms: e.target.checked })
              }
            />{" "}
            {t("settings.notifications.sms")}
          </label>
          <label>
            <input
              type="checkbox"
              checked={notifications.push}
              onChange={(e) =>
                setNotifications({ ...notifications, push: e.target.checked })
              }
            />{" "}
            {t("settings.notifications.push")}
          </label>
        </div>
      </section>

      {/* SESSIONS */}
      <section className="settings-card">
        <h2>{t("settings.sessions.title")}</h2>
        <table>
          <thead>
            <tr>
              <th>{t("settings.sessions.table.device")}</th>
              <th>{t("settings.sessions.table.os")}</th>
              <th>{t("settings.sessions.table.lastActive")}</th>
              <th>{t("settings.sessions.table.location")}</th>
              <th>{t("settings.sessions.table.action")}</th>
            </tr>
          </thead>
          <tbody>
            {sessions.map((s, idx) => (
              <tr key={idx}>
                <td>{s.device}</td>
                <td>{s.os}</td>
                <td>{s.lastActive}</td>
                <td>{s.location}</td>
                <td>
                  <button className="danger">
                    {t("settings.sessions.logout")}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* DELETE ACCOUNT */}
      <section className="settings-card delete-account">
        <h2>{t("settings.dangerZone.title")}</h2>
        <p>{t("settings.dangerZone.description")}</p>
        <button className="danger" onClick={handleDeleteAccount}>
          {t("settings.dangerZone.button")}
        </button>
      </section>
    </div>
  );
}
