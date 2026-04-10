"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "@/hooks/useTranslation";
import LanguageSwitcher from "@/app/components/LangageSwitcher";
import "@/app/styles/pages/dashboard.scss";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const lang = pathname.split("/")[1] || "en";
  const { t } = useTranslation();
  const isPro = true; // TODO dynamique
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
    hour < 12
      ? t("dashboardLayout.greetings.morning")
      : hour < 18
        ? t("dashboardLayout.greetings.afternoon")
        : t("dashboardLayout.greetings.evening");

  const handleChatSend = () => {
    if (!chatInput) return;
    setChatMessages([...chatMessages, { from: "user", text: chatInput }]);
    setChatInput("");

    // Simulate bot response
    setTimeout(() => {
      setChatMessages((prev) => [
        ...prev,
        {
          from: "bot",
          text: `${t("dashboardLayout.chatbot.botPrefix")} ${userName}! 👋`,
        },
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
          <Link href={`/${lang}/dashboard`}>
            {t("dashboardLayout.nav.overview")}
          </Link>

          {isPro ? (
            <>
              <Link href={`/${lang}/dashboard/team`}>
                {t("dashboardLayout.nav.team")}
              </Link>
              <Link href={`/${lang}/dashboard/security`}>
                {t("dashboardLayout.nav.security")}
              </Link>
              <Link href={`/${lang}/dashboard/users`}>
                {t("dashboardLayout.nav.devices")}
              </Link>
            </>
          ) : (
            <>
              <Link href={`/${lang}/dashboard/devices`}>
                {t("dashboardLayout.nav.devices")}
              </Link>
            </>
          )}
          <Link href={`/${lang}/dashboard/tools`}>
            {t("dashboardLayout.nav.tools")}
          </Link>
          <Link href={`/${lang}/dashboard/plan`}>
            {t("dashboardLayout.nav.plan")}
          </Link>
          <Link href={`/${lang}/dashboard/settings`}>
            {t("dashboardLayout.nav.settings")}
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
            <h1>{t("dashboardLayout.header.title")}</h1>
            <p className="welcome">
              {greeting}, <strong>{userName}</strong> 👋
            </p>
          </div>

          <div className="header-right">
            <Link href={`/${lang}/contact`} className="contact-btn">
              {t("dashboardLayout.header.contact")}
            </Link>
            <div className="user-avatar">{userName.charAt(0)}</div>
            <LanguageSwitcher />
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
              <h4>{t("dashboardLayout.chatbot.title")}</h4>
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
                placeholder={t("dashboardLayout.chatbot.placeholder")}
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleChatSend()}
              />
              <button onClick={handleChatSend}>
                {t("dashboardLayout.chatbot.send")}
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
