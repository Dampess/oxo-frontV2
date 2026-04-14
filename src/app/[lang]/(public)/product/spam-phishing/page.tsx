import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { createPageMetadata } from "@/lib/seo";
import { isValidLocale, type Locale } from "@/lib/i18n";
import SpamPhishingPageView from "@/app/components/pages/SpamPhishingPageView";

type Props = {
  params: Promise<{ lang: string }>;
};

const seoByLocale: Record<Locale, { title: string; description: string }> = {
  en: {
    title: "Spam & Phishing Protection",
    description:
      "Detect phishing emails and malicious messages before they cause harm.",
  },
  fr: {
    title: "Protection anti-spam et anti-phishing",
    description:
      "Détectez les emails de phishing et les messages malveillants avant qu’ils ne causent des dommages.",
  },
  de: {
    title: "Spam- & Phishing-Schutz",
    description:
      "Erkennen Sie Phishing-E-Mails und schädliche Nachrichten, bevor sie Schaden anrichten.",
  },
  nl: {
    title: "Spam- en phishingbescherming",
    description:
      "Detecteer phishingmails en schadelijke berichten voordat ze schade veroorzaken.",
  },
  es: {
    title: "Protección anti-spam y anti-phishing",
    description:
      "Detecta correos de phishing y mensajes maliciosos antes de que causen daños.",
  },
  it: {
    title: "Protezione anti-spam e anti-phishing",
    description:
      "Rileva email di phishing e messaggi dannosi prima che causino danni.",
  },
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  if (!isValidLocale(lang)) notFound();
  return createPageMetadata(lang, "/product/spam-phishing", seoByLocale);
}

export default async function SpamPhishingPage({ params }: Props) {
  const { lang } = await params;
  if (!isValidLocale(lang)) notFound();

  return <SpamPhishingPageView lang={lang} />;
}
