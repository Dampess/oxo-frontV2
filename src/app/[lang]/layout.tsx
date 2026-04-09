import "../styles/globals.scss";
import { ReactNode } from "react";

// Langues supportées
const supportedLangs = ["en", "fr", "de", "nl"];

// Génération dynamique des metadata selon la langue
export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  const safeLang = supportedLangs.includes(lang) ? lang : "en";

  const titles: Record<string, string> = {
    en: "OXO Security | Official website",
    fr: "OXO Security | Site officiel",
    de: "OXO Security | Offizielle Website",
    nl: "OXO Security | Officiële website",
  };

  const descriptions: Record<string, string> = {
    en: "Digital threat protection platform and app",
    fr: "Plateforme de protection contre les menaces numériques",
    de: "Plattform zum Schutz vor digitalen Bedrohungen",
    nl: "Platform voor bescherming tegen digitale bedreigingen",
  };

  return {
    title: titles[safeLang],
    description: descriptions[safeLang],

    // SEO
    keywords: [
      "cybersecurity",
      "email checker",
      "link scanner",
      "password security",
      "anti phishing",
      "OXO",
    ],

    // Open Graph (social)
    openGraph: {
      title: titles[safeLang],
      description: descriptions[safeLang],
      url: `https://oxo-security.com/${safeLang}`,
      siteName: "OXO Security",
      images: [
        {
          url: "https://oxo-security.com/og-image.png",
          width: 1200,
          height: 630,
        },
      ],
      locale: safeLang,
      type: "website",
    },

    // Twitter
    twitter: {
      card: "summary_large_image",
      title: titles[safeLang],
      description: descriptions[safeLang],
      images: ["https://oxo-security.com/og-image.png"],
    },

    // Robots
    // robots: {
    //   index: true,
    //   follow: true,
    // },
  };
}

export default async function RootLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  const safeLang = supportedLangs.includes(lang) ? lang : "en";

  return (
    <html lang={safeLang}>
      <body>{children}</body>
    </html>
  );
}
