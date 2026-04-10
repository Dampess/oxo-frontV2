"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslation } from "@/hooks/useTranslation";
import "@/app/styles/pages/legal.scss";

export default function TermsPage() {
  const pathname = usePathname();
  const lang = pathname.split("/")[1] || "en";
  const { t } = useTranslation();

  return (
    <main className="legal-page">
      <Link href={`/${lang}`}>{t("legal.back")}</Link>

      <div className="container">
        <h1>{t("legal.terms.title")}</h1>
        <p className="legal-date">{t("legal.terms.updated")}</p>

        <section>
          <h2>{t("legal.terms.sections.acceptance.title")}</h2>
          <p>{t("legal.terms.sections.acceptance.text")}</p>
        </section>

        <section>
          <h2>{t("legal.terms.sections.services.title")}</h2>
          <p>{t("legal.terms.sections.services.text")}</p>
        </section>

        <section>
          <h2>{t("legal.terms.sections.responsibilities.title")}</h2>
          <ul>
            <li>{t("legal.terms.sections.responsibilities.item1")}</li>
            <li>{t("legal.terms.sections.responsibilities.item2")}</li>
            <li>{t("legal.terms.sections.responsibilities.item3")}</li>
          </ul>
        </section>

        <section>
          <h2>{t("legal.terms.sections.limitations.title")}</h2>
          <p>{t("legal.terms.sections.limitations.text")}</p>
        </section>

        <section>
          <h2>{t("legal.terms.sections.ip.title")}</h2>
          <p>{t("legal.terms.sections.ip.text")}</p>
        </section>

        <section>
          <h2>{t("legal.terms.sections.termination.title")}</h2>
          <p>{t("legal.terms.sections.termination.text")}</p>
        </section>

        <section>
          <h2>{t("legal.terms.sections.contact.title")}</h2>
          <p>
            {t("legal.terms.sections.contact.text")}{" "}
            <a href="mailto:legal@oxo.security">legal@oxo.security</a>
          </p>
        </section>
      </div>
    </main>
  );
}
