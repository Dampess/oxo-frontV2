import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { createPageMetadata } from "@/lib/seo";
import { isValidLocale, type Locale } from "@/lib/i18n";
import BlogPageView from "@/app/components/pages/BlogPageView";

type Props = {
  params: Promise<{ lang: string }>;
};

const seoByLocale: Record<Locale, { title: string; description: string }> = {
  en: {
    title: "Cybersecurity Blog",
    description:
      "Insights, analysis and practical guidance on digital threats and online protection.",
  },
  fr: {
    title: "Blog cybersécurité",
    description:
      "Analyses, conseils et décryptages sur les menaces numériques et la protection en ligne.",
  },
  de: {
    title: "Cybersicherheits-Blog",
    description:
      "Analysen, Einblicke und praktische Tipps zu digitalen Bedrohungen und Online-Schutz.",
  },
  nl: {
    title: "Cybersecurity blog",
    description:
      "Inzichten, analyses en praktisch advies over digitale dreigingen en online bescherming.",
  },
  es: {
    title: "Blog de ciberseguridad",
    description:
      "Análisis, información y consejos prácticos sobre amenazas digitales y protección online.",
  },
  it: {
    title: "Blog di cybersicurezza",
    description:
      "Analisi, approfondimenti e consigli pratici sulle minacce digitali e la protezione online.",
  },
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;

  if (!isValidLocale(lang)) {
    notFound();
  }

  return createPageMetadata(lang, "/blog", seoByLocale);
}

export default async function BlogPage({ params }: Props) {
  const { lang } = await params;

  if (!isValidLocale(lang)) {
    notFound();
  }

  return <BlogPageView lang={lang} />;
}
