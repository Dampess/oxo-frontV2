import CommPageView from "@/app/components/pages/CommPageView";
import { isValidLocale, type Locale } from "@/lib/i18n";
import { createPageMetadata } from "@/lib/seo";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ lang: string }>;
};

const seoByLocale: Record<Locale, { title: string; description: string }> = {
  en: {
    title: "Password Vault",
    description:
      "Store, generate and manage passwords securely in one encrypted vault.",
  },
  fr: {
    title: "Coffre-fort de mots de passe",
    description:
      "Stockez, générez et gérez vos mots de passe dans un coffre-fort chiffré.",
  },
  de: {
    title: "Passwort-Tresor",
    description:
      "Speichern, generieren und verwalten Sie Passwörter sicher in einem verschlüsselten Tresor.",
  },
  nl: {
    title: "Wachtwoordkluis",
    description:
      "Bewaar, genereer en beheer wachtwoorden veilig in één versleutelde kluis.",
  },
  es: {
    title: "Bóveda de contraseñas",
    description:
      "Almacena, genera y gestiona contraseñas de forma segura en una bóveda cifrada.",
  },
  it: {
    title: "Cassaforte password",
    description:
      "Archivia, genera e gestisci password in modo sicuro in una cassaforte crittografata.",
  },
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  if (!isValidLocale(lang)) notFound();
  return createPageMetadata(lang, "/product/comm", seoByLocale);
}

export default async function PasswordsVaultPage({ params }: Props) {
  const { lang } = await params;
  if (!isValidLocale(lang)) notFound();

  return <CommPageView lang={lang} />;
}
