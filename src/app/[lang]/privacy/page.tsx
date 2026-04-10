"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslation } from "@/hooks/useTranslation";
import "@/app/styles/pages/legal.scss";

export default function PrivacyPage() {
  const pathname = usePathname();
  const lang = pathname.split("/")[1] || "en";
  const { t } = useTranslation();

  return (
    <main className="legal-page">
      <Link href={`/${lang}`}>{t("legal.back")}</Link>

      <div className="container">
        <h1>{t("legal.privacy.title")}</h1>
        <p className="legal-date">{t("legal.privacy.updated")}</p>

        <section>
          <h2>{t("legal.privacy.sections.collect.title")}</h2>
          <p>{t("legal.privacy.sections.collect.text")}</p>
        </section>

        <section>
          <h2>{t("legal.privacy.sections.usage.title")}</h2>
          <ul>
            <li>{t("legal.privacy.sections.usage.item1")}</li>
            <li>{t("legal.privacy.sections.usage.item2")}</li>
            <li>{t("legal.privacy.sections.usage.item3")}</li>
          </ul>
        </section>

        <section>
          <h2>{t("legal.privacy.sections.retention.title")}</h2>
          <p>{t("legal.privacy.sections.retention.text")}</p>
        </section>

        <section>
          <h2>{t("legal.privacy.sections.sharing.title")}</h2>
          <p>{t("legal.privacy.sections.sharing.text")}</p>
        </section>

        <section>
          <h2>{t("legal.privacy.sections.security.title")}</h2>
          <p>{t("legal.privacy.sections.security.text")}</p>
        </section>

        <section>
          <h2>{t("legal.privacy.sections.rights.title")}</h2>
          <p>{t("legal.privacy.sections.rights.text")}</p>
        </section>

        <section>
          <h2>{t("legal.privacy.sections.contact.title")}</h2>
          <p>
            {t("legal.privacy.sections.contact.text")}{" "}
            <a href="mailto:privacy@oxo.security">privacy@oxo.security</a>
          </p>
        </section>
      </div>
    </main>
  );
}
