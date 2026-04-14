"use client";

import { usePathname } from "next/navigation";

import en from "@/locales/en.json";
import fr from "@/locales/fr.json";
import de from "@/locales/de.json";
import nl from "@/locales/nl.json";
import es from "@/locales/es.json";
import it from "@/locales/it.json";

const dictionaries: Record<string, any> = { en, fr, de, nl, es, it };

export function useTranslation(forcedLang?: string) {
  const pathname = usePathname() || "";
  const detectedLang = pathname.split("/")[1] || "en";
  const lang = forcedLang || detectedLang;

  const dict = dictionaries[lang] || dictionaries.en;

  const t = (key: string) => {
    const value = key
      .split(".")
      .reduce((obj: any, k: string) => obj?.[k], dict);
    return value ?? key;
  };

  return { t, lang };
}
