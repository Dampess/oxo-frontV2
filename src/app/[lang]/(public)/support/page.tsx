"use client";

import "@/app/styles/pages/support.scss";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslation } from "@/hooks/useTranslation";


export default function SupportPage() {
  const pathname = usePathname();
  const lang = pathname.split("/")[1] || "en";
  const { t } = useTranslation();

  return (
    <main className="support">
      {/* HERO */}
      <section className="hero">
        <h1>{t("support.hero.title")}</h1>
        <p>{t("support.hero.desc")}</p>
      </section>

      {/* GRID */}
      <section className="support-grid">
        <Link href={`/${lang}/support/faq`} className="card">
          <h3>{t("support.cards.faq.title")}</h3>
          <p>{t("support.cards.faq.desc")}</p>
        </Link>

        <Link href={`/${lang}/support/client-support`} className="card">
          <h3>{t("support.cards.contact.title")}</h3>
          <p>{t("support.cards.contact.desc")}</p>
        </Link>

        <Link href={`/${lang}/support/cybersecurity-advice`} className="card">
          <h3>{t("support.cards.advice.title")}</h3>
          <p>{t("support.cards.advice.desc")}</p>
        </Link>
      </section>
    </main>
  );
}
