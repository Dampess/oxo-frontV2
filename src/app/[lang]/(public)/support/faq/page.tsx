import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { createPageMetadata } from "@/lib/seo";
import { isValidLocale, type Locale } from "@/lib/i18n";
import FaqPageView from "@/app/components/pages/FaqPageView";

type Props = {
  params: Promise<{ lang: string }>;
};

const seoByLocale: Record<Locale, { title: string; description: string }> = {
  en: {
    title: "FAQ",
    description:
      "Find answers to common questions about OXO products and services.",
  },
  fr: {
    title: "FAQ",
    description:
      "Trouvez les réponses aux questions fréquentes sur les produits et services OXO.",
  },
  de: {
    title: "FAQ",
    description:
      "Finden Sie Antworten auf häufige Fragen zu OXO-Produkten und -Services.",
  },
  nl: {
    title: "FAQ",
    description:
      "Vind antwoorden op veelgestelde vragen over OXO-producten en -diensten.",
  },
  es: {
    title: "FAQ",
    description:
      "Encuentra respuestas a las preguntas frecuentes sobre los productos y servicios de OXO.",
  },
  it: {
    title: "FAQ",
    description:
      "Trova le risposte alle domande frequenti sui prodotti e servizi OXO.",
  },
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  if (!isValidLocale(lang)) notFound();
  return createPageMetadata(lang, "/support/faq", seoByLocale);
}

export default async function FaqPage({ params }: Props) {
  const { lang } = await params;
  if (!isValidLocale(lang)) notFound();

  return <FaqPageView lang={lang} />;
}
