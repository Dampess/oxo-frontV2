"use client";

import { useState } from "react";
import { useTranslation } from "@/hooks/useTranslation";
import "@/app/styles/pages/faq.scss";

export default function FAQPage() {
  const { t } = useTranslation();
  const [open, setOpen] = useState<number | null>(null);

  const faqs = [
    {
      q: t("faq.items.free.q"),
      a: t("faq.items.free.a"),
    },
    {
      q: t("faq.items.upgrade.q"),
      a: t("faq.items.upgrade.a"),
    },
    {
      q: t("faq.items.security.q"),
      a: t("faq.items.security.a"),
    },
  ];

  return (
    <main className="faq">
      <h1>{t("faq.title")}</h1>

      <div className="faq-list">
        {faqs.map((item, i) => (
          <div key={i} className="faq-item">
            <div
              className="faq-question"
              onClick={() => setOpen(open === i ? null : i)}
            >
              {item.q}
            </div>

            {open === i && <div className="faq-answer">{item.a}</div>}
          </div>
        ))}
      </div>
    </main>
  );
}
