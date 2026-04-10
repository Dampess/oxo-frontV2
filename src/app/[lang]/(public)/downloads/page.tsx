"use client";

import Link from "next/link";
import { useState } from "react";
import "../../styles/pages/downloads.scss";
import { usePathname } from "next/navigation";
import { useTranslation } from "@/hooks/useTranslation";

const downloads = [
  {
    osKey: "windows",
    personalDescKey: "downloads.items.windows.personalDesc",
    businessDescKey: "downloads.items.windows.businessDesc",
    metaKey: "downloads.items.windows.meta",
    linkPersonal: "#",
    linkBusiness: "#",
  },
  {
    osKey: "macos",
    personalDescKey: "downloads.items.macos.personalDesc",
    businessDescKey: "downloads.items.macos.businessDesc",
    metaKey: "downloads.items.macos.meta",
    linkPersonal: "#",
    linkBusiness: "#",
  },
  {
    osKey: "mobile",
    personalDescKey: "downloads.items.mobile.personalDesc",
    businessDescKey: "downloads.items.mobile.businessDesc",
    metaKey: "downloads.items.mobile.meta",
    linkPersonal: "#",
    linkBusiness: "#",
  },
];

export default function DownloadsPage() {
  const pathname = usePathname();
  const lang = pathname.split("/")[1] || "en";
  const { t } = useTranslation();
  const [segment, setSegment] = useState<"personal" | "business">("personal");

  return (
    <main className="downloads">
      {/* ================= HERO ================= */}
      <section className="downloads-hero">
        <div className="container">
          <h1 className="title">{t("downloads.hero.title")}</h1>
          <p className="subtitle">{t("downloads.hero.subtitle")}</p>
        </div>
      </section>

      {/* ================= SEGMENT TABS ================= */}
      <div className="downloads-tabs">
        <button
          className={segment === "personal" ? "active" : ""}
          onClick={() => setSegment("personal")}
        >
          {t("downloads.tabs.personal")}
        </button>
        <button
          className={segment === "business" ? "active" : ""}
          onClick={() => setSegment("business")}
        >
          {t("downloads.tabs.business")}
        </button>
      </div>

      {/* ================= DOWNLOAD GRID ================= */}
      <section className="downloads-grid">
        {downloads.map((item, idx) => (
          <div key={idx} className="download-card">
            <div className="os">{t(`downloads.items.${item.osKey}.os`)}</div>
            <p className="desc">
              {segment === "personal"
                ? t(item.personalDescKey)
                : t(item.businessDescKey)}
            </p>
            <div className="meta">{t(item.metaKey)}</div>
            <Link
              href={
                segment === "personal" ? item.linkPersonal : item.linkBusiness
              }
              className="btn"
            >
              {segment === "personal"
                ? t("downloads.buttons.download")
                : t("downloads.buttons.getForBusiness")}
            </Link>
          </div>
        ))}
      </section>

      {/* ================= INFO ================= */}
      <section className="downloads-info">
        <p>{t("downloads.info.description")}</p>
      </section>

      {/* ================= CTA ================= */}
      <section className="downloads-cta">
        <div className="container">
          <h2>{t("downloads.cta.title")}</h2>
          <p>{t("downloads.cta.description")}</p>
          <Link href={`/${lang}/signup`} className="btn-primary">
            {t("downloads.cta.button")}
          </Link>
        </div>
      </section>
    </main>
  );
}
