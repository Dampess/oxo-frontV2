import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { createPageMetadata } from "@/lib/seo";
import { isValidLocale, type Locale } from "@/lib/i18n";
import IndividualsPageView from "@/app/components/pages/IndividualsPageView";

type Props = {
  params: Promise<{ lang: string }>;
};

const seoByLocale: Record<Locale, { title: string; description: string }> = {
  en: {
    title: "Cybersecurity for Individuals",
    description:
      "Protect your personal accounts, devices and online activity with OXO.",
  },
  fr: {
    title: "Cybersécurité pour les particuliers",
    description:
      "Protégez vos comptes personnels, vos appareils et votre activité en ligne avec OXO.",
  },
  de: {
    title: "Cybersicherheit für Privatpersonen",
    description:
      "Schützen Sie Ihre persönlichen Konten, Geräte und Online-Aktivitäten mit OXO.",
  },
  nl: {
    title: "Cybersecurity voor particulieren",
    description:
      "Bescherm uw persoonlijke accounts, apparaten en online activiteit met OXO.",
  },
  es: {
    title: "Ciberseguridad para particulares",
    description:
      "Protege tus cuentas personales, dispositivos y actividad online con OXO.",
  },
  it: {
    title: "Cybersicurezza per privati",
    description:
      "Proteggi account personali, dispositivi e attività online con OXO.",
  },
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  if (!isValidLocale(lang)) notFound();
  return createPageMetadata(lang, "/product/individuals", seoByLocale);
}

export default async function IndividualsPage({ params }: Props) {
  const { lang } = await params;
  if (!isValidLocale(lang)) notFound();

  return <IndividualsPageView lang={lang} />;
}
