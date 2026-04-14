import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { createPageMetadata } from "@/lib/seo";
import { isValidLocale, type Locale } from "@/lib/i18n";
import SupportPageView from "@/app/components/pages/SupportPageView";

type Props = {
  params: Promise<{ lang: string }>;
};

const seoByLocale: Record<Locale, { title: string; description: string }> = {
  en: {
    title: "Support Center",
    description: "Find help, contact our team and improve your cybersecurity.",
  },
  fr: {
    title: "Centre de support",
    description:
      "Obtenez de l’aide, contactez notre équipe et améliorez votre cybersécurité.",
  },
  de: {
    title: "Support-Center",
    description:
      "Erhalten Sie Hilfe, kontaktieren Sie unser Team und verbessern Sie Ihre Cybersicherheit.",
  },
  nl: {
    title: "Supportcentrum",
    description:
      "Krijg hulp, neem contact op met ons team en verbeter uw cyberbeveiliging.",
  },
  es: {
    title: "Centro de soporte",
    description:
      "Obtén ayuda, contacta con nuestro equipo y mejora tu ciberseguridad.",
  },
  it: {
    title: "Centro di supporto",
    description:
      "Ottieni aiuto, contatta il nostro team e migliora la tua cybersicurezza.",
  },
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  if (!isValidLocale(lang)) notFound();
  return createPageMetadata(lang, "/support", seoByLocale);
}

export default async function SupportPage({ params }: Props) {
  const { lang } = await params;
  if (!isValidLocale(lang)) notFound();

  return <SupportPageView lang={lang} />;
}
