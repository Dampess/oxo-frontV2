"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslation } from "@/hooks/useTranslation";
import "../styles/components/dashboardsection.scss";

export default function DashboardSection() {
  const pathname = usePathname();
  const lang = pathname.split("/")[1];
  const { t } = useTranslation();

  return (
    <section className="dashboard-section">
      <div className="container">
        <div className="dashboard-content">
          <div className="dashboard-image">
            <Image
              src="/dashboard-mockup.png"
              alt={t("dashboard.imageAlt")}
              width={700}
              height={450}
              className="mockup-img"
            />
          </div>

          <div className="dashboard-text">
            <h2>{t("dashboard.title")}</h2>
            <p>{t("dashboard.description")}</p>

            <Link href={`/${lang}/product`} className="btn-primary">
              {t("dashboard.cta")}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
