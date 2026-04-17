import { isValidLocale, type Locale } from "@/lib/i18n";
import { createPageMetadata } from "@/lib/seo";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import WebPageView from "@/app/components/pages/WebPageView";
type Props = {
  params: Promise<{ lang: string }>;
};

const seoByLocale: Record<Locale, { title: string; description: string }> = {
  en: {
    title: "web & Malware Protection",
    description:
      "Protect your devices with real-time web and malware detection.",
  },
  fr: {
    title: "web & protection anti-malware",
    description:
      "Protégez vos appareils avec une détection web et anti-malware en temps réel.",
  },
  de: {
    title: "web- & Malware-Schutz",
    description:
      "Schützen Sie Ihre Geräte mit Echtzeit-Erkennung von Viren und Malware.",
  },
  nl: {
    title: "web- en malwarebescherming",
    description: "Bescherm uw apparaten met realtime web- en malwaredetectie.",
  },
  es: {
    title: "Protección web y malware",
    description:
      "Protege tus dispositivos con detección web y antimalware en tiempo real.",
  },
  it: {
    title: "Protezione web e Malware",
    description:
      "Proteggi i tuoi dispositivi con rilevamento web e antimalware in tempo reale.",
  },
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  if (!isValidLocale(lang)) notFound();
  return createPageMetadata(lang, "/product/web", seoByLocale);
}

export default async function webPage({ params }: Props) {
  const { lang } = await params;
  if (!isValidLocale(lang)) notFound();

  return <WebPageView lang={lang} />;
}
