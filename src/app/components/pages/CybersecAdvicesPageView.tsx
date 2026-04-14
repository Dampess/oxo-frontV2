"use client";

import { useTranslation } from "@/hooks/useTranslation";
import "@/app/styles/pages/cybersecurity-advices.scss";

type Props = {
  lang: string;
};

export default function CybersecAdvicesPageView({ lang }: Props) {
  const { t } = useTranslation(lang);

  const articles = [
    {
      title: t("advice.items.phishing.title"),
      desc: t("advice.items.phishing.desc"),
    },
    {
      title: t("advice.items.password.title"),
      desc: t("advice.items.password.desc"),
    },
  ];

  return (
    <main className="advice">
      <h1>{t("advice.title")}</h1>

      <div className="articles">
        {articles.map((a, i) => (
          <div key={i} className="card">
            <h3>{a.title}</h3>
            <p>{a.desc}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
