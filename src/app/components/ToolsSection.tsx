import React from "react";
import Link from "next/link";
import "../styles/components/toolssection.scss";

export default function ToolsSection() {
  const tools = [
    {
      emoji: "📧",
      title: "Email Leak Check",
      desc: "Check if your email has been exposed in a data breach.",
      href: "/tools/email-sec",
    },
    {
      emoji: "🔑",
      title: "Password Tester",
      desc: "Evaluate the strength of your password instantly.",
      href: "/tools/password-sec",
    },
    {
      emoji: "🔗",
      title: "Link Scanner",
      desc: "Analyze suspicious URLs safely before clicking.",
      href: "/tools/link-sec",
    },
  ];

  return (
    <section className="tools-section">
      <div className="container">
        {/* HEADER */}
        <div className="tools-header">
          <h2>Free security tools</h2>
          <p>Test your security in seconds. No account required.</p>
        </div>

        {/* GRID */}
        <div className="tools-grid">
          {tools.map((tool, i) => (
            <Link key={i} href={tool.href} className="tool-card">
              <div className="tool-icon">{tool.emoji}</div>

              <div className="tool-content">
                <h3>{tool.title}</h3>
                <p>{tool.desc}</p>
              </div>

              <span className="tool-arrow">→</span>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="tools-cta">
          <Link href="/tools" className="btn-primary">
            Explore all tools
          </Link>
        </div>
      </div>
    </section>
  );
}
