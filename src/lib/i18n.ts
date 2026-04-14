export const locales = ["en", "fr", "de", "nl", "es", "it"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";
export const siteUrl = "http://localhost:3000";

export function isValidLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function buildLanguageAlternates(path: string) {
  const cleanPath = path.startsWith("/") ? path : `/${path}`;

  return Object.fromEntries(
    locales.map((locale) => [locale, `${siteUrl}/${locale}${cleanPath}`]),
  );
}
