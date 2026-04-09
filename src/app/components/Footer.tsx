"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import "../styles/components/footer.scss";
import { useTranslation } from "@/hooks/useTranslation";

export default function Footer() {
  const { t } = useTranslation();
  const pathname = usePathname();
  const lang = pathname.split("/")[1];
  return (
    <footer className="footer">
      <div className="container text-center">
        <p className="copyright">
          © {new Date().getFullYear()} <span className="brand">Oxo</span>.{" "}
          {t("footer.rights")}
        </p>

        <p className="links">
          <a href="mailto:support@oxo.com" className="link">
            support@oxo.com
          </a>
          {" · "}
          <Link href={`/${lang}/privacy`} className="link">
            {t("footer.privacy")}
          </Link>
          {" · "}
          <Link href={`/${lang}/terms`} className="link">
            {t("footer.terms")}
          </Link>
          {" · "}
          <Link href={`/${lang}/cgu`} className="link">
            {t("footer.ugc")}
          </Link>
          {" · "}
          <Link href={`/${lang}/cgv`} className="link">
            {t("footer.sgc")}
          </Link>
        </p>
      </div>
    </footer>
  );
}
