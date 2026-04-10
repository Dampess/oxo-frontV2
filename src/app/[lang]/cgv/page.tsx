"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslation } from "@/hooks/useTranslation";
import "@/app/styles/pages/legal.scss";

export default function TermsOfSalePage() {
  const pathname = usePathname();
  const lang = pathname.split("/")[1] || "en";
  const { t } = useTranslation();

  return (
    <main className="legal-page">
      <Link href={`/${lang}`}>{t("legal.back")}</Link>

      <div className="container">
        <h1>{t("legal.sale.title")}</h1>
        <p className="legal-date">{t("legal.sale.updated")}</p>

        <section>
          <h2>{t("legal.sale.sections.scope.title")}</h2>
          <p>{t("legal.sale.sections.scope.text")}</p>
        </section>

        <section>
          <h2>{t("legal.sale.sections.products.title")}</h2>
          <p>{t("legal.sale.sections.products.text")}</p>
        </section>

        <section>
          <h2>{t("legal.sale.sections.orders.title")}</h2>
          <ul>
            <li>{t("legal.sale.sections.orders.item1")}</li>
            <li>{t("legal.sale.sections.orders.item2")}</li>
            <li>{t("legal.sale.sections.orders.item3")}</li>
          </ul>
        </section>

        <section>
          <h2>{t("legal.sale.sections.subscription.title")}</h2>
          <p>{t("legal.sale.sections.subscription.text")}</p>
        </section>

        <section>
          <h2>{t("legal.sale.sections.refund.title")}</h2>
          <p>{t("legal.sale.sections.refund.text")}</p>
        </section>

        <section>
          <h2>{t("legal.sale.sections.liability.title")}</h2>
          <p>{t("legal.sale.sections.liability.text")}</p>
        </section>

        <section>
          <h2>{t("legal.sale.sections.law.title")}</h2>
          <p>{t("legal.sale.sections.law.text")}</p>
        </section>

        <section>
          <h2>{t("legal.sale.sections.contact.title")}</h2>
          <p>
            {t("legal.sale.sections.contact.text")}{" "}
            <a href="mailto:sales@oxo.security">sales@oxo.security</a>
          </p>
        </section>
      </div>
    </main>
  );
}
