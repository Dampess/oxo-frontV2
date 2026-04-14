import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { createPageMetadata } from "@/lib/seo";
import { isValidLocale, type Locale } from "@/lib/i18n";
import ToolsPageView from "@/app/components/pages/ToolsPageView";

type Props = {
  params: Promise<{ lang: string }>;
};

const seoByLocale: Record<Locale, { title: string; description: string }> = {
  en: {
    title: "Free Security Tools",
    description: "Scan links, emails and passwords instantly.",
  },
  fr: {
    title: "Outils gratuits",
    description: "Analysez liens, emails et mots de passe instantanément.",
  },
  de: {
    title: "Kostenlose Sicherheitstools",
    description: "Scannen Sie Links, E-Mails und Passwörter sofort.",
  },
  nl: {
    title: "Gratis beveiligingstools",
    description: "Scan links, e-mails en wachtwoorden direct.",
  },
  es: {
    title: "Herramientas gratuitas",
    description: "Analiza enlaces, correos y contraseñas al instante.",
  },
  it: {
    title: "Strumenti gratuiti",
    description: "Analizza link, email e password istantaneamente.",
  },
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;

  if (!isValidLocale(lang)) {
    notFound();
  }

  return createPageMetadata(lang, "/tools", seoByLocale);
}

export default async function ToolsPage({ params }: Props) {
  const { lang } = await params;

  if (!isValidLocale(lang)) {
    notFound();
  }

  return <ToolsPageView lang={lang} />;
}
