import "../styles/globals.scss";
import { ReactNode } from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  locales,
  isValidLocale,
  siteUrl,
  buildLanguageAlternates,
} from "@/lib/i18n";

type LayoutProps = {
  children: ReactNode;
  params: Promise<{ lang: string }>;
};

export async function generateMetadata({
  params,
}: LayoutProps): Promise<Metadata> {
  const { lang } = await params;

  if (!isValidLocale(lang)) {
    notFound();
  }

  const titles: Record<string, string> = {
    en: "OXO Security | Official website",
    fr: "OXO Security | Site officiel",
    de: "OXO Security | Offizielle Website",
    nl: "OXO Security | Officiële website",
    es: "OXO Security | Sitio oficial",
    it: "OXO Security | Sito ufficiale",
  };

  const descriptions: Record<string, string> = {
    en: "Digital threat protection platform and app",
    fr: "Plateforme de protection contre les menaces numériques",
    de: "Plattform zum Schutz vor digitalen Bedrohungen",
    nl: "Platform voor bescherming tegen digitale bedreigingen",
    es: "Plataforma y aplicación de protección contra amenazas digitales",
    it: "Piattaforma e applicazione di protezione contro le minacce digitali",
  };

  return {
    metadataBase: new URL(siteUrl),

    title: titles[lang],
    description: descriptions[lang],

    keywords: [
      "cybersecurity",
      "email checker",
      "link scanner",
      "password security",
      "anti phishing",
      "OXO",
    ],

    alternates: {
      canonical: `/${lang}`,
      languages: buildLanguageAlternates(""),
    },

    openGraph: {
      title: titles[lang],
      description: descriptions[lang],
      url: `${siteUrl}/${lang}`,
      siteName: "OXO Security",
      images: [
        {
          url: `${siteUrl}/og-image.png`,
          width: 1200,
          height: 630,
          alt: "OXO Security",
        },
      ],
      locale: lang,
      type: "website",
    },

    twitter: {
      card: "summary_large_image",
      title: titles[lang],
      description: descriptions[lang],
      images: [`${siteUrl}/og-image.png`],
    },
  };
}

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export default async function RootLayout({ children, params }: LayoutProps) {
  const { lang } = await params;

  if (!isValidLocale(lang)) {
    notFound();
  }

  return (
    <html lang={lang}>
      <body>{children}</body>
    </html>
  );
}
