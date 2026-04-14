import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { createPageMetadata } from "@/lib/seo";
import { isValidLocale, type Locale } from "@/lib/i18n";
import PasswordsSecPageView from "@/app/components/pages/PasswordsSecPageView";

type Props = {
  params: Promise<{ lang: string }>;
};

const seoByLocale: Record<Locale, { title: string; description: string }> = {
  en: {
    title: "Password Security Tool",
    description:
      "Generate strong passwords and test password strength instantly.",
  },
  fr: {
    title: "Outil de sécurité des mots de passe",
    description:
      "Générez des mots de passe robustes et testez leur solidité instantanément.",
  },
  de: {
    title: "Passwort-Sicherheitstool",
    description:
      "Erstellen Sie starke Passwörter und prüfen Sie ihre Sicherheit sofort.",
  },
  nl: {
    title: "Wachtwoordbeveiligingstool",
    description:
      "Genereer sterke wachtwoorden en test direct de sterkte ervan.",
  },
  es: {
    title: "Herramienta de seguridad de contraseñas",
    description:
      "Genera contraseñas seguras y comprueba su fortaleza al instante.",
  },
  it: {
    title: "Strumento di sicurezza password",
    description: "Genera password sicure e verifica subito la loro robustezza.",
  },
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  if (!isValidLocale(lang)) notFound();
  return createPageMetadata(lang, "/tools/passwords-sec", seoByLocale);
}

export default async function PasswordsSecPage({ params }: Props) {
  const { lang } = await params;
  if (!isValidLocale(lang)) notFound();

  return <PasswordsSecPageView lang={lang} />;
}
