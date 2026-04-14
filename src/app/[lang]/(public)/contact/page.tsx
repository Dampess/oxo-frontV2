import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { createPageMetadata } from "@/lib/seo";
import { isValidLocale, type Locale } from "@/lib/i18n";
import ContactPageView from "@/app/components/pages/ContactPageView";

type Props = {
  params: Promise<{ lang: string }>;
};

const seoByLocale: Record<Locale, { title: string; description: string }> = {
  en: {
    title: "Contact",
    description: "Get in touch with the Oxo team.",
  },
  fr: {
    title: "Contact",
    description: "Contactez l’équipe Oxo.",
  },
  de: {
    title: "Kontakt",
    description: "Kontaktieren Sie das Oxo-Team.",
  },
  nl: {
    title: "Contact",
    description: "Neem contact op met het Oxo-team.",
  },
  es: {
    title: "Contacto",
    description: "Contacta con el equipo de Oxo.",
  },
  it: {
    title: "Contatti",
    description: "Contatta il team Oxo.",
  },
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;

  if (!isValidLocale(lang)) {
    notFound();
  }

  return createPageMetadata(lang, "/contact", seoByLocale);
}

export default async function ContactPage({ params }: Props) {
  const { lang } = await params;

  if (!isValidLocale(lang)) {
    notFound();
  }

  return <ContactPageView lang={lang} />;
}
