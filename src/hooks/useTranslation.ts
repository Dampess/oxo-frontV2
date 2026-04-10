"use client";

import { usePathname } from "next/navigation";

import en from "@/locales/en.json";
import fr from "@/locales/fr.json";
import de from "@/locales/de.json";
import nl from "@/locales/nl.json";

const dictionaries: Record<string, any> = { en, fr, de, nl };

export function useTranslation() {
  const pathname = usePathname() || "";
  const lang = pathname.split("/")[1] || "en";

  const dict = dictionaries[lang] || dictionaries.en;

  const t = (key: string) => {
    const value = key
      .split(".")
      .reduce((obj: any, k: string) => obj?.[k], dict);
    return value ?? key;
  };

  return { t, lang };
}
