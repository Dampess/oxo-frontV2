"use client";

import { useState } from "react";
import "../../../styles/pages/faq.scss";

const faqs = [
  {
    q: "Is the free plan really free?",
    a: "Yes, it includes limited features with no time limit.",
  },
  {
    q: "Can I upgrade anytime?",
    a: "Yes, you can upgrade or downgrade anytime.",
  },
  {
    q: "Is my data secure?",
    a: "We follow strict security and privacy standards.",
  },
];

export default function FAQPage() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <main className="faq">
      <h1>Frequently Asked Questions</h1>

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
