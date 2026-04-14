import type { Metadata } from "next";
import { buildLanguageAlternates, siteUrl, type Locale } from "@/lib/i18n";

type SeoEntry = {
  title: string;
  description: string;
};

type SeoMap = Record<Locale, SeoEntry>;

export function createPageMetadata(
  lang: Locale,
  path: string,
  seoByLocale: SeoMap,
): Metadata {
  const seo = seoByLocale[lang];

  return {
    title: seo.title,
    description: seo.description,
    alternates: {
      canonical: `${siteUrl}/${lang}${path}`,
      languages: buildLanguageAlternates(path),
    },
    openGraph: {
      title: seo.title,
      description: seo.description,
      url: `${siteUrl}/${lang}${path}`,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: seo.title,
      description: seo.description,
    },
  };
}
