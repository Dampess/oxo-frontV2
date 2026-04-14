"use client";

import "@/app/styles/pages/contact.scss";
import { useTranslation } from "@/hooks/useTranslation";

type Props = {
  lang: string;
};

export default function ContactPageView({ lang }: Props) {
  const { t } = useTranslation(lang);

  return (
    <main className="contact">
      <h1>{t("contact.title")}</h1>

      <div className="contact-wrapper">
        <form className="contact-form">
          <input type="text" placeholder={t("contact.form.name")} required />
          <input type="email" placeholder={t("contact.form.email")} required />
          <input type="text" placeholder={t("contact.form.subject")} />
          <textarea placeholder={t("contact.form.message")} rows={5} />
          <button type="submit">{t("contact.form.button")}</button>
        </form>

        <div className="contact-info">
          <p>{t("contact.info.location")}</p>
          <p>{t("contact.info.response")}</p>
          <p>{t("contact.info.security")}</p>
        </div>
      </div>
    </main>
  );
}
