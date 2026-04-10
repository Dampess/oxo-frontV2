"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslation } from "@/hooks/useTranslation";
import "@/app/styles/pages/legal.scss";

export default function TermsOfUsePage() {
  const pathname = usePathname();
  const lang = pathname.split("/")[1] || "en";
  const { t } = useTranslation();

  return (
    <main className="legal-page">
      <Link href={`/${lang}`}>{t("legal.back")}</Link>

      <div className="container">
        <h1>{t("legal.use.title")}</h1>
        <p className="legal-date">{t("legal.use.updated")}</p>

        <section>
          <h2>{t("legal.use.sections.acceptance.title")}</h2>
          <p>{t("legal.use.sections.acceptance.text")}</p>
        </section>

        <section>
          <h2>{t("legal.use.sections.accounts.title")}</h2>
          <p>{t("legal.use.sections.accounts.text")}</p>
        </section>

        <section>
          <h2>{t("legal.use.sections.prohibited.title")}</h2>
          <ul>
            <li>{t("legal.use.sections.prohibited.item1")}</li>
            <li>{t("legal.use.sections.prohibited.item2")}</li>
            <li>{t("legal.use.sections.prohibited.item3")}</li>
          </ul>
        </section>

        <section>
          <h2>{t("legal.use.sections.availability.title")}</h2>
          <p>{t("legal.use.sections.availability.text")}</p>
        </section>

        <section>
          <h2>{t("legal.use.sections.ip.title")}</h2>
          <p>{t("legal.use.sections.ip.text")}</p>
        </section>

        <section>
          <h2>{t("legal.use.sections.liability.title")}</h2>
          <p>{t("legal.use.sections.liability.text")}</p>
        </section>

        <section>
          <h2>{t("legal.use.sections.termination.title")}</h2>
          <p>{t("legal.use.sections.termination.text")}</p>
        </section>

        <section>
          <h2>{t("legal.use.sections.law.title")}</h2>
          <p>{t("legal.use.sections.law.text")}</p>
        </section>

        <section>
          <h2>{t("legal.use.sections.contact.title")}</h2>
          <p>
            {t("legal.use.sections.contact.text")}{" "}
            <a href="mailto:legal@oxo.security">legal@oxo.security</a>
          </p>
        </section>
      </div>
    </main>
  );
}
