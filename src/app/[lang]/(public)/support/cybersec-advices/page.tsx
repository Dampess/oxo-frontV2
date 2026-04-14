import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { createPageMetadata } from "@/lib/seo";
import { isValidLocale, type Locale } from "@/lib/i18n";
import CybersecAdvicesPageView from "@/app/components/pages/CybersecAdvicesPageView";

type Props = {
  params: Promise<{ lang: string }>;
};

const seoByLocale: Record<Locale, { title: string; description: string }> = {
  en: {
    title: "Cybersecurity Advice",
    description: "Learn practical cybersecurity tips to stay protected online.",
  },
  fr: {
    title: "Conseils de cybersécurité",
    description:
      "Découvrez des conseils pratiques pour rester protégé en ligne.",
  },
  de: {
    title: "Cybersicherheits-Tipps",
    description: "Lernen Sie praktische Tipps, um online geschützt zu bleiben.",
  },
  nl: {
    title: "Cybersecurity-advies",
    description: "Ontdek praktische tips om online beschermd te blijven.",
  },
  es: {
    title: "Consejos de ciberseguridad",
    description: "Aprende consejos prácticos para mantenerte protegido online.",
  },
  it: {
    title: "Consigli di cybersicurezza",
    description: "Scopri consigli pratici per restare protetto online.",
  },
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  if (!isValidLocale(lang)) notFound();
  return createPageMetadata(lang, "/support/cybersec-advices", seoByLocale);
}

export default async function CybersecAdvicesPage({ params }: Props) {
  const { lang } = await params;
  if (!isValidLocale(lang)) notFound();

  return <CybersecAdvicesPageView lang={lang} />;
}
