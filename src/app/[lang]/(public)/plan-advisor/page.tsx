import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { createPageMetadata } from "@/lib/seo";
import { isValidLocale, type Locale } from "@/lib/i18n";
import PlanAdvisorPageView from "@/app/components/pages/PlanAdvisorPageView";

type Props = {
  params: Promise<{ lang: string }>;
};

const seoByLocale: Record<Locale, { title: string; description: string }> = {
  en: {
    title: "Plan Advisor",
    description: "Find the cybersecurity plan that best matches your needs.",
  },
  fr: {
    title: "Conseiller de plan",
    description:
      "Trouvez le plan de cybersécurité le plus adapté à vos besoins.",
  },
  de: {
    title: "Tarifberater",
    description:
      "Finden Sie den Cybersicherheitstarif, der am besten zu Ihren Bedürfnissen passt.",
  },
  nl: {
    title: "Planadviseur",
    description:
      "Vind het cybersecurityplan dat het beste bij uw behoeften past.",
  },
  es: {
    title: "Asesor de planes",
    description:
      "Encuentra el plan de ciberseguridad que mejor se adapte a tus necesidades.",
  },
  it: {
    title: "Consulente piani",
    description:
      "Trova il piano di cybersicurezza più adatto alle tue esigenze.",
  },
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;

  if (!isValidLocale(lang)) {
    notFound();
  }

  return createPageMetadata(lang, "/plan-advisor", seoByLocale);
}

export default async function PlanAdvisorPage({ params }: Props) {
  const { lang } = await params;

  if (!isValidLocale(lang)) {
    notFound();
  }

  return <PlanAdvisorPageView lang={lang} />;
}
