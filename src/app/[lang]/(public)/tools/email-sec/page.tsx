import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { createPageMetadata } from "@/lib/seo";
import { isValidLocale, type Locale } from "@/lib/i18n";
import EmailSecPageView from "@/app/components/pages/EmailSecPageView";

type Props = {
  params: Promise<{ lang: string }>;
};

const seoByLocale: Record<Locale, { title: string; description: string }> = {
  en: {
    title: "Email Security Checker",
    description:
      "Analyze suspicious email addresses and detect phishing indicators.",
  },
  fr: {
    title: "Analyseur de sécurité email",
    description:
      "Analysez les adresses email suspectes et détectez les signaux de phishing.",
  },
  de: {
    title: "E-Mail-Sicherheitsprüfung",
    description:
      "Analysieren Sie verdächtige E-Mail-Adressen und erkennen Sie Phishing-Indikatoren.",
  },
  nl: {
    title: "E-mailbeveiligingscontrole",
    description:
      "Analyseer verdachte e-mailadressen en detecteer phishing-signalen.",
  },
  es: {
    title: "Verificador de seguridad de email",
    description: "Analiza correos sospechosos y detecta señales de phishing.",
  },
  it: {
    title: "Controllo sicurezza email",
    description: "Analizza email sospette e rileva indicatori di phishing.",
  },
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  if (!isValidLocale(lang)) notFound();
  return createPageMetadata(lang, "/tools/email-sec", seoByLocale);
}

export default async function EmailSecPage({ params }: Props) {
  const { lang } = await params;
  if (!isValidLocale(lang)) notFound();

  return <EmailSecPageView lang={lang} />;
}
