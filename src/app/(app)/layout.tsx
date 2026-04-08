"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import "../styles/pages/dashboard.scss";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const userName = "Alex"; // TODO: récupérer depuis le back
  const hour = new Date().getHours();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState<
    { from: "user" | "bot"; text: string }[]
  >([]);
  const [chatInput, setChatInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const greeting =
    hour < 12 ? "Good morning" : hour < 18 ? "Good afternoon" : "Good evening";

  const handleChatSend = () => {
    if (!chatInput) return;
    setChatMessages([...chatMessages, { from: "user", text: chatInput }]);
    setChatInput("");

    // Simulate bot response
    setTimeout(() => {
      setChatMessages((prev) => [
        ...prev,
        { from: "bot", text: `Bot says: Hello, ${userName}! 👋` },
      ]);
    }, 500);
  };

  // Auto scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatMessages]);

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
              {greeting}, <strong>{userName}</strong> 👋
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
      <div className="chatbot" onClick={() => setChatOpen(true)}>
        💬
      </div>

      {/* CHATBOT MODAL */}
      {chatOpen && (
        <>
          <div className="chatbot-overlay" onClick={() => setChatOpen(false)} />
          <div className="chatbot-modal">
            <div className="chatbot-header">
              <h4>Chatbot</h4>
              <button className="close-btn" onClick={() => setChatOpen(false)}>
                ✕
              </button>
            </div>

            <div className="chatbot-messages">
              {chatMessages.map((m, i) => (
                <div key={i} className={`message ${m.from}`}>
                  {m.text}
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            <div className="chatbot-input">
              <input
                type="text"
                placeholder="Type a message..."
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleChatSend()}
              />
              <button onClick={handleChatSend}>Send</button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
