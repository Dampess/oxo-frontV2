"use client";

import { useTranslation } from "@/hooks/useTranslation";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "../styles/components/featurecard.scss";

type FeatureCardProps = {
  title: string;
  description: string;
  icon?: string;
  link: string;
};

export default function FeatureCard({
  title,
  description,
  icon,
  link,
}: FeatureCardProps) {
  const { t } = useTranslation();
  const pathname = usePathname();
  const lang = pathname.split("/")[1];
  return (
    <div className="feature-card">
      <div className="feature-icon">{icon}</div>

      <div className="feature-content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <Link href={`/${lang}/${link}`} className="btn">
        {t("features.button")} ➜
      </Link>
    </div>
  );
}
