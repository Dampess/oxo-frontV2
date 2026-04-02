"use client";

import Link from "next/link";
import { useState } from "react";
import "../../styles/pages/downloads.scss";

const downloads = [
  {
    os: "Windows",
    personalDesc: "Protect your personal browsing, emails and downloads.",
    businessDesc:
      "Advanced endpoint protection and threat monitoring for teams.",
    meta: "Windows 10+",
    linkPersonal: "#",
    linkBusiness: "#",
  },
  {
    os: "macOS",
    personalDesc: "Lightweight protection for macOS users.",
    businessDesc: "Enterprise-grade macOS security agent.",
    meta: "macOS 12+",
    linkPersonal: "#",
    linkBusiness: "#",
  },
  {
    os: "Mobile",
    personalDesc: "Scan links, SMS and emails on the go.",
    businessDesc: "Secure mobile access for employees and executives.",
    meta: "iOS & Android",
    linkPersonal: "#",
    linkBusiness: "#",
  },
];

export default function DownloadsPage() {
  const [segment, setSegment] = useState<"personal" | "business">("personal");

  return (
    <main className="downloads">
      {/* ================= HERO ================= */}
      <section className="downloads-hero">
        <div className="container">
          <h1 className="title">Download Oxo Apps & Tools</h1>
          <p className="subtitle">
            Secure your digital activity with Oxo applications for desktop and
            mobile platforms.
          </p>
        </div>
      </section>

      {/* ================= SEGMENT TABS ================= */}
      <div className="downloads-tabs">
        <button
          className={segment === "personal" ? "active" : ""}
          onClick={() => setSegment("personal")}
        >
          Personal
        </button>
        <button
          className={segment === "business" ? "active" : ""}
          onClick={() => setSegment("business")}
        >
          Business
        </button>
      </div>

      {/* ================= DOWNLOAD GRID ================= */}
      <section className="downloads-grid">
        {downloads.map((item, idx) => (
          <div key={idx} className="download-card">
            <div className="os">{item.os}</div>
            <p className="desc">
              {segment === "personal" ? item.personalDesc : item.businessDesc}
            </p>
            <div className="meta">{item.meta}</div>
            <Link
              href={
                segment === "personal" ? item.linkPersonal : item.linkBusiness
              }
              className="btn"
            >
              {segment === "personal" ? "Download" : "Get for Business"}
            </Link>
          </div>
        ))}
      </section>

      {/* ================= INFO ================= */}
      <section className="downloads-info">
        <p>
          All Oxo applications are digitally signed, regularly updated, and
          comply with industry security standards. Business editions include
          centralized management, advanced reporting, and priority support.
        </p>
      </section>

      {/* ================= CTA ================= */}
      <section className="downloads-cta">
        <div className="container">
          <h2>Ready to get started?</h2>
          <p>Download Oxo now and protect your digital life instantly.</p>
          <Link href="/signup" className="btn-primary">
            Get Oxo
          </Link>
        </div>
      </section>
    </main>
  );
}
