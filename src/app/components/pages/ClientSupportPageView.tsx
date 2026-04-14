"use client";

import "@/app/styles/pages/client-support.scss";
import Link from "next/link";
import { useTranslation } from "@/hooks/useTranslation";

type Props = {
  lang: string;
};

export default function ClientSupportPageView({ lang }: Props) {
  const { t } = useTranslation(lang);

  return (
    <main className="client-support">
      <h1>{t("clientSupport.title")}</h1>
      <p className="subtitle">{t("clientSupport.subtitle")}</p>

      <div className="support-options">
        {/* EMAIL */}
        <div className="card">
          <h3>{t("clientSupport.cards.email.title")}</h3>
          <p>{t("clientSupport.cards.email.value")}</p>
        </div>

        {/* FORM */}
        <div className="card">
          <h3>{t("clientSupport.cards.form.title")}</h3>
          <Link href={`/${lang}/contact`}>
            {t("clientSupport.cards.form.cta")}
          </Link>
        </div>

        {/* FAQ */}
        <div className="card">
          <h3>{t("clientSupport.cards.faq.title")}</h3>
          <Link href={`/${lang}/support/faq`}>
            {t("clientSupport.cards.faq.cta")}
          </Link>
        </div>
      </div>
    </main>
  );
}
