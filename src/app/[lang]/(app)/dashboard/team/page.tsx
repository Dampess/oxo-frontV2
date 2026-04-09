"use client";

import { useState } from "react";
import "@/app/styles/pages/pro-dashboard-pages.scss";

export default function TeamPage() {
  const [members, setMembers] = useState([
    { name: "Alice", email: "alice@oxo.com", role: "Admin" },
    { name: "Bob", email: "bob@oxo.com", role: "User" },
  ]);

  const [inviteEmail, setInviteEmail] = useState("");

  const inviteUser = () => {
    if (!inviteEmail) return;
    setMembers([
      ...members,
      { name: "Pending", email: inviteEmail, role: "User" },
    ]);
    setInviteEmail("");
  };

  return (
    <div className="dashboard-grid">
      {/* TEAM LIST */}
      <div className="card full">
        <h3>Team Members</h3>

        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {members.map((m, i) => (
              <tr key={i}>
                <td>{m.name}</td>
                <td>{m.email}</td>
                <td>{m.role}</td>
                <td>
                  <button className="secondary">Change role</button>
                  <button className="danger">Remove</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* INVITE */}
      <div className="card">
        <h3>Invite Member</h3>

        <input
          type="email"
          placeholder="Email address"
          value={inviteEmail}
          onChange={(e) => setInviteEmail(e.target.value)}
        />

        <button className="primary" onClick={inviteUser}>
          Send invite
        </button>
      </div>
    </div>
  );
}
