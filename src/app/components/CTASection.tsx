"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslation } from "@/hooks/useTranslation";
import "../styles/components/ctasection.scss";

export default function CTASection() {
  const pathname = usePathname();
  const lang = pathname.split("/")[1];
  const { t } = useTranslation();

  return (
    <section className="cta-section">
      <div className="container">
        <h2>{t("cta.title")}</h2>

        <Link href={`/${lang}/free-trial`} className="btn-primary">
          {t("cta.button")}
        </Link>
      </div>
    </section>
  );
}
