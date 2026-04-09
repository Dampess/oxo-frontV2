"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import "../styles/components/toolssection.scss";
import { useTranslation } from "@/hooks/useTranslation";

export default function ToolsSection() {
  const { t } = useTranslation();
  const pathname = usePathname();
  const lang = pathname.split("/")[1];
  const tools = [
    {
      emoji: "📧",
      title: t("tools.items.email.title"),
      desc: t("tools.items.email.desc"),
      href: "{`/${lang}/tools/email-sec`}",
    },
    {
      emoji: "🔑",
      title: t("tools.items.password.title"),
      desc: t("tools.items.password.desc"),
      href: "{`/${lang}/tools/password-sec`}",
    },
    {
      emoji: "🔗",
      title: t("tools.items.link.title"),
      desc: t("tools.items.link.desc"),
      href: "{`/${lang}/tools/link-sec`}",
    },
  ];

  return (
    <section className="tools-section">
      <div className="container">
        {/* HEADER */}
        <div className="tools-header">
          <h2>{t("tools.title")}</h2>
          <p>{t("pricing.subtitle")}</p>
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
          <Link href={`/${lang}/tools`} className="btn-primary">
            {t("tools.cta")}
          </Link>
        </div>
      </div>
    </section>
  );
}
