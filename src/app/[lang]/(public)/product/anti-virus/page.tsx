import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { createPageMetadata } from "@/lib/seo";
import { isValidLocale, type Locale } from "@/lib/i18n";
import AntiVirusPageView from "@/app/components/pages/AntiVirusPageView";

type Props = {
  params: Promise<{ lang: string }>;
};

const seoByLocale: Record<Locale, { title: string; description: string }> = {
  en: {
    title: "Antivirus & Malware Protection",
    description:
      "Protect your devices with real-time antivirus and malware detection.",
  },
  fr: {
    title: "Antivirus & protection anti-malware",
    description:
      "Protégez vos appareils avec une détection antivirus et anti-malware en temps réel.",
  },
  de: {
    title: "Antivirus- & Malware-Schutz",
    description:
      "Schützen Sie Ihre Geräte mit Echtzeit-Erkennung von Viren und Malware.",
  },
  nl: {
    title: "Antivirus- en malwarebescherming",
    description:
      "Bescherm uw apparaten met realtime antivirus- en malwaredetectie.",
  },
  es: {
    title: "Protección antivirus y malware",
    description:
      "Protege tus dispositivos con detección antivirus y antimalware en tiempo real.",
  },
  it: {
    title: "Protezione Antivirus e Malware",
    description:
      "Proteggi i tuoi dispositivi con rilevamento antivirus e antimalware in tempo reale.",
  },
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  if (!isValidLocale(lang)) notFound();
  return createPageMetadata(lang, "/product/anti-virus", seoByLocale);
}

export default async function AntiVirusPage({ params }: Props) {
  const { lang } = await params;
  if (!isValidLocale(lang)) notFound();

  return <AntiVirusPageView lang={lang} />;
}
