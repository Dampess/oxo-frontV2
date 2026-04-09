"use client";

import { useState } from "react";
import "@/app/styles/pages/settings.scss";

export default function SettingsPage() {
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
    alert("Profile updated!");
  };

  const handlePasswordChange = (e: React.FormEvent) => {
    e.preventDefault();
    if (!currentPassword || !newPassword) return;
    alert("Password updated!");
    setShowPasswordModal(false);
    setCurrentPassword("");
    setNewPassword("");
  };

  const handleDeleteAccount = () => {
    if (
      confirm(
        "Are you sure you want to delete your account? This action is irreversible.",
      )
    ) {
      alert("Account deleted!");
    }
  };

  return (
    <div className="settings-page">
      <h1>Account Settings</h1>

      {/* PROFILE */}
      <section className="settings-card">
        <h2>Profile</h2>
        <form onSubmit={handleProfileUpdate}>
          <label>
            Name
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>

          <label>
            Email
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>

          <button className="primary" type="submit">
            Update Profile
          </button>
        </form>
      </section>

      {/* PASSWORD */}
      <section className="settings-card">
        <h2>Password</h2>
        <button className="primary" onClick={() => setShowPasswordModal(true)}>
          Change Password
        </button>
      </section>

      {/* MODALE CHANGE PASSWORD */}
      {showPasswordModal && (
        <div
          className="modal-overlay"
          onClick={() => setShowPasswordModal(false)}
        >
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <h3>Change Password</h3>
            <form onSubmit={handlePasswordChange}>
              <input
                type="password"
                placeholder="Current Password"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
              />
              <input
                type="password"
                placeholder="New Password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
              <div className="modal-actions">
                <button className="primary" type="submit">
                  Update
                </button>
                <button
                  className="secondary"
                  type="button"
                  onClick={() => setShowPasswordModal(false)}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* NOTIFICATIONS */}
      <section className="settings-card">
        <h2>Notifications</h2>
        <div className="notifications">
          <label>
            <input
              type="checkbox"
              checked={notifications.email}
              onChange={(e) =>
                setNotifications({ ...notifications, email: e.target.checked })
              }
            />{" "}
            Email Notifications
          </label>
          <label>
            <input
              type="checkbox"
              checked={notifications.sms}
              onChange={(e) =>
                setNotifications({ ...notifications, sms: e.target.checked })
              }
            />{" "}
            SMS Notifications
          </label>
          <label>
            <input
              type="checkbox"
              checked={notifications.push}
              onChange={(e) =>
                setNotifications({ ...notifications, push: e.target.checked })
              }
            />{" "}
            Push Notifications
          </label>
        </div>
      </section>

      {/* SESSIONS */}
      <section className="settings-card">
        <h2>Active Sessions</h2>
        <table>
          <thead>
            <tr>
              <th>Device</th>
              <th>OS</th>
              <th>Last Active</th>
              <th>Location</th>
              <th>Action</th>
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
                  <button className="danger">Logout</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* DELETE ACCOUNT */}
      <section className="settings-card delete-account">
        <h2>Danger Zone</h2>
        <p>
          Deleting your account is irreversible. All your data will be lost.
        </p>
        <button className="danger" onClick={handleDeleteAccount}>
          Delete Account
        </button>
      </section>
    </div>
  );
}
