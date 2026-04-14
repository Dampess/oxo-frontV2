import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { createPageMetadata } from "@/lib/seo";
import { isValidLocale, type Locale } from "@/lib/i18n";
import ProductPageView from "@/app/components/pages/ProductPageView";

type Props = {
  params: Promise<{ lang: string }>;
};

const seoByLocale: Record<Locale, { title: string; description: string }> = {
  en: {
    title: "Cybersecurity Products",
    description: "Discover Oxo's full suite of cybersecurity tools.",
  },
  fr: {
    title: "Produits de cybersécurité",
    description: "Découvrez la suite complète d’outils Oxo.",
  },
  de: {
    title: "Cybersicherheitsprodukte",
    description: "Entdecken Sie die Sicherheitslösungen von Oxo.",
  },
  nl: {
    title: "Cybersecurity producten",
    description: "Ontdek de complete beveiligingsoplossingen van Oxo.",
  },
  es: {
    title: "Productos de ciberseguridad",
    description:
      "Descubre la suite completa de herramientas de ciberseguridad de Oxo.",
  },
  it: {
    title: "Prodotti di cybersicurezza",
    description:
      "Scopri la suite completa di strumenti di cybersicurezza di Oxo.",
  },
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;

  if (!isValidLocale(lang)) {
    notFound();
  }

  return createPageMetadata(lang, "/product", seoByLocale);
}

export default async function ProductPage({ params }: Props) {
  const { lang } = await params;

  if (!isValidLocale(lang)) {
    notFound();
  }

  return <ProductPageView lang={lang} />;
}
