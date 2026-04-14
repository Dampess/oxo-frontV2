import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { createPageMetadata } from "@/lib/seo";
import { isValidLocale, type Locale } from "@/lib/i18n";
import PricingPageView from "@/app/components/pages/PricingPageView";

type Props = {
  params: Promise<{ lang: string }>;
};

const seoByLocale: Record<Locale, { title: string; description: string }> = {
  en: {
    title: "Pricing",
    description: "Choose the best cybersecurity plan for your needs.",
  },
  fr: {
    title: "Tarifs",
    description: "Choisissez le plan de cybersécurité adapté à vos besoins.",
  },
  de: {
    title: "Preise",
    description: "Wählen Sie den passenden Cybersicherheitsplan.",
  },
  nl: {
    title: "Prijzen",
    description: "Kies het beste cybersecurityplan voor uw behoeften.",
  },
  es: {
    title: "Precios",
    description: "Elige el mejor plan de ciberseguridad para tus necesidades.",
  },
  it: {
    title: "Prezzi",
    description:
      "Scegli il miglior piano di cybersicurezza per le tue esigenze.",
  },
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;

  if (!isValidLocale(lang)) {
    notFound();
  }

  return createPageMetadata(lang, "/pricing", seoByLocale);
}

export default async function PricingPage({ params }: Props) {
  const { lang } = await params;

  if (!isValidLocale(lang)) {
    notFound();
  }

  return <PricingPageView lang={lang} />;
}
