"use client";

import React, { useState } from "react";
import "../styles/components/newsletter.scss";
import { useTranslation } from "@/hooks/useTranslation";

export default function Newsletter() {
  const { t } = useTranslation();
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Subscribed with ${email}`); // MVP : plus tard API
    setEmail("");
  };

  return (
    <section className="newsletter">
      <div className="container">
        <h2>{t("newsletter.title")}</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder={t("newsletter.placeholder")}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit">{t("newsletter.button")}</button>
        </form>
      </div>
    </section>
  );
}
