import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { createPageMetadata } from "@/lib/seo";
import { isValidLocale, type Locale } from "@/lib/i18n";
import CTASection from "@/app/components/CTASection";
import DashboardSection from "@/app/components/DashboardSection";
import FeaturesSection from "@/app/components/FeaturesSection";
import Hero from "@/app/components/Hero";
import Newsletter from "@/app/components/NewsLetter";
import PricingTeaser from "@/app/components/PricingTeaserSection";
import Testimonials from "@/app/components/Testimonials";
import ToolsSection from "@/app/components/ToolsSection";
import TrustReasons from "@/app/components/TrustReasons";

type Props = {
  params: Promise<{ lang: string }>;
};

const seoByLocale: Record<Locale, { title: string; description: string }> = {
  en: {
    title: "OXO Security - Protect your digital life",
    description:
      "All-in-one cybersecurity platform to protect emails, devices, and passwords.",
  },
  fr: {
    title: "OXO Security - Protégez votre vie numérique",
    description:
      "Plateforme de cybersécurité tout-en-un pour protéger emails, appareils et mots de passe.",
  },
  de: {
    title: "OXO Security - Schützen Sie Ihr digitales Leben",
    description:
      "All-in-One-Cybersicherheitsplattform für E-Mails, Geräte und Passwörter.",
  },
  nl: {
    title: "OXO Security - Bescherm uw digitale leven",
    description:
      "Alles-in-één cybersecurityplatform voor e-mails, apparaten en wachtwoorden.",
  },
  es: {
    title: "OXO Security - Protege tu vida digital",
    description:
      "Plataforma de ciberseguridad todo en uno para proteger correos, dispositivos y contraseñas.",
  },
  it: {
    title: "OXO Security - Proteggi la tua vita digitale",
    description:
      "Piattaforma di cybersicurezza all-in-one per proteggere email, dispositivi e password.",
  },
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;

  if (!isValidLocale(lang)) notFound();

  return createPageMetadata(lang, "", seoByLocale);
}

export default function HomePage() {
  return (
    <>
      <Hero />

      <FeaturesSection />

      <TrustReasons />

      <DashboardSection />

      <PricingTeaser />

      <CTASection />

      <ToolsSection />

      <Testimonials />

      <Newsletter />
    </>
  );
}
