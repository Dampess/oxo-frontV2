import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { createPageMetadata } from "@/lib/seo";
import { isValidLocale, type Locale } from "@/lib/i18n";
import BusinessesPageView from "@/app/components/pages/BusinessesPageView";

type Props = {
  params: Promise<{ lang: string }>;
};

const seoByLocale: Record<Locale, { title: string; description: string }> = {
  en: {
    title: "Cybersecurity for Businesses",
    description:
      "Protect your company, employees and clients with enterprise-grade cybersecurity.",
  },
  fr: {
    title: "Cybersécurité pour les entreprises",
    description:
      "Protégez votre entreprise, vos employés et vos clients avec une cybersécurité de niveau professionnel.",
  },
  de: {
    title: "Cybersicherheit für Unternehmen",
    description:
      "Schützen Sie Ihr Unternehmen, Ihre Mitarbeitenden und Kunden mit Cybersicherheit auf Enterprise-Niveau.",
  },
  nl: {
    title: "Cybersecurity voor bedrijven",
    description:
      "Bescherm uw bedrijf, medewerkers en klanten met enterprise-grade cybersecurity.",
  },
  es: {
    title: "Ciberseguridad para empresas",
    description:
      "Protege tu empresa, empleados y clientes con ciberseguridad de nivel empresarial.",
  },
  it: {
    title: "Cybersicurezza per aziende",
    description:
      "Proteggi azienda, dipendenti e clienti con cybersecurity di livello enterprise.",
  },
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  if (!isValidLocale(lang)) notFound();
  return createPageMetadata(lang, "/product/businesses", seoByLocale);
}

export default async function BusinessesPage({ params }: Props) {
  const { lang } = await params;
  if (!isValidLocale(lang)) notFound();

  return <BusinessesPageView lang={lang} />;
}
