"use client";

import "@/app/styles/components/langageswitcher.scss";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

const languages = [
  { code: "en", flag: "🇬🇧" },
  { code: "fr", flag: "🇫🇷" },
  { code: "de", flag: "🇩🇪" },
  { code: "nl", flag: "🇳🇱" },
  { code: "es", flag: "🇪🇸" },
  { code: "it", flag: "🇮🇹" },
];

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const segments = pathname.split("/");
  const currentLang = segments[1] || "en";

  const changeLang = (lang: string) => {
    segments[1] = lang;
    router.push(segments.join("/") || `/${lang}`);
    setOpen(false);
  };

  return (
    <div className="language-switcher">
      <button className="lang-btn" onClick={() => setOpen(!open)}>
        {languages.find((l) => l.code === currentLang)?.flag}
      </button>

      {open && (
        <div className="lang-dropdown">
          <ul>
            {languages.map((lang) => (
              <li key={lang.code}>
                <button
                  onClick={() => changeLang(lang.code)}
                  className="lang-item"
                >
                  <span className="flag">{lang.flag}</span>
                  <span className="name">{lang.code.toUpperCase()}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
