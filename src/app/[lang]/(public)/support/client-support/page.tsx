import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { createPageMetadata } from "@/lib/seo";
import { isValidLocale, type Locale } from "@/lib/i18n";
import ClientSupportPageView from "@/app/components/pages/ClientSupportPageView";

type Props = {
  params: Promise<{ lang: string }>;
};

const seoByLocale: Record<Locale, { title: string; description: string }> = {
  en: {
    title: "Client Support",
    description: "Contact the OXO support team and get help quickly.",
  },
  fr: {
    title: "Support client",
    description:
      "Contactez l’équipe support OXO et obtenez de l’aide rapidement.",
  },
  de: {
    title: "Kundensupport",
    description:
      "Kontaktieren Sie das OXO-Supportteam und erhalten Sie schnell Hilfe.",
  },
  nl: {
    title: "Klantenservice",
    description: "Neem contact op met het OXO-supportteam en krijg snel hulp.",
  },
  es: {
    title: "Soporte al cliente",
    description:
      "Contacta con el equipo de soporte de OXO y obtén ayuda rápidamente.",
  },
  it: {
    title: "Supporto clienti",
    description:
      "Contatta il team di supporto OXO e ottieni aiuto rapidamente.",
  },
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  if (!isValidLocale(lang)) notFound();
  return createPageMetadata(lang, "/support/client-support", seoByLocale);
}

export default async function ClientSupportPage({ params }: Props) {
  const { lang } = await params;
  if (!isValidLocale(lang)) notFound();

  return <ClientSupportPageView lang={lang} />;
}
