"use client";

import { useTranslation } from "@/hooks/useTranslation";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import "../styles/components/navbar.scss";
import LanguageSwitcher from "./LangageSwitcher";

export default function Header() {
  const pathname = usePathname();
  const lang = pathname.split("/")[1] || "en";
  const { t } = useTranslation();

  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileProductOpen, setMobileProductOpen] = useState(false);
  const [mobileToolsOpen, setMobileToolsOpen] = useState(false);

  const handleLinkClick = () => {
    setMobileOpen(false);
    setMobileProductOpen(false);
    setMobileToolsOpen(false);
  };

  return (
    <header className="header">
      <div className="container">
        <nav className="nav">
          <div className="nav-left">
            <Link href={`/${lang}/`} className="nav-link">
              <div className="brand">
                <Image
                  src="/logo_oxo.png"
                  alt="Oxo logo"
                  width={90}
                  height={90}
                />
                <div>
                  <div className="brand-name">Oxo Sec</div>
                  <div className="brand-tagline">{t("nav.tagline")}</div>
                </div>
              </div>
            </Link>

            <div className="nav-principal">
              {/* INDIVIDUALS */}
              <div className="nav-item">
                <span className="nav-link">{t("nav.individuals")}</span>

                <div className="dropdown">
                  <div className="dropdown-column">
                    <span className="dropdown-title">{t("nav.products")}</span>

                    <Link href={`/${lang}/product/anti-virus`}>
                      {t("nav.product.antivirus")}
                    </Link>
                    <Link href={`/${lang}/product/passwords-vault`}>
                      {t("nav.product.vault")}
                    </Link>
                    <Link href={`/${lang}/product/spam-phishing`}>
                      {t("nav.product.phishing")}
                    </Link>
                  </div>

                  <div className="dropdown-column">
                    <span className="dropdown-title">{t("nav.forusers")}</span>
                    <Link href={`/${lang}/product/individual`}>
                      {t("nav.product.mission")}
                    </Link>
                  </div>

                  <div className="dropdown-cta">
                    <p>{t("nav.cta.allInOne")}</p>
                    <Link href={`/${lang}/product`} className="nav-button">
                      {t("nav.cta.exploreProducts")}
                    </Link>
                  </div>
                </div>
              </div>

              {/* BUSINESS */}
              <Link href={`/${lang}/product/business`} className="nav-link">
                {t("nav.businesses")}
              </Link>

              {/* BLOG */}
              <Link href={`/${lang}/blog`} className="nav-link">
                {t("nav.blog")}
              </Link>

              {/* SUPPORT */}
              <div className="nav-item">
                <span className="nav-link">{t("nav.support")}</span>

                <div className="dropdown">
                  <div className="dropdown-column">
                    <span className="dropdown-title">{t("nav.useful")}</span>

                    <Link href={`/${lang}/support`}>
                      {t("nav.supportLinks.hub")}
                    </Link>
                    <Link href={`/${lang}/support/faq`}>
                      {t("nav.supportLinks.faq")}
                    </Link>
                    <Link href={`/${lang}/support/client-support`}>
                      {t("nav.supportLinks.client")}
                    </Link>
                    <Link href={`/${lang}/support/cybersec-advices`}>
                      {t("nav.supportLinks.advices")}
                    </Link>

                    {/* FREE TOOLS */}
                    <div className="dropdown-column">
                      <span className="dropdown-title">
                        {t("nav.tools.title")}
                      </span>

                      <Link
                        href={`/${lang}/tools/email-sec`}
                        className="dropdown-item"
                      >
                        {t("nav.tools.email")}
                        <br />
                        <small>({t("nav.tools.emailDesc")})</small>
                      </Link>

                      <Link
                        href={`/${lang}/tools/password-sec`}
                        className="dropdown-item"
                      >
                        {t("nav.tools.password")}
                        <br />
                        <small>({t("nav.tools.passwordDesc")})</small>
                      </Link>

                      <Link
                        href={`/${lang}/tools/link-sec`}
                        className="dropdown-item"
                      >
                        {t("nav.tools.link")}
                        <br />
                        <small>({t("nav.tools.linkDesc")})</small>
                      </Link>
                    </div>
                  </div>

                  <div className="dropdown-cta">
                    <p>{t("nav.tools.all")}</p>
                    <Link href={`/${lang}/tools`} className="nav-button">
                      {t("nav.tools.explore")}
                    </Link>
                  </div>
                </div>
              </div>

              {/* PRICING */}
              <div className="nav-item">
                <span className="nav-link">{t("nav.pricing.title")}</span>

                <div className="dropdown dropdown-personal">
                  <div className="dropdown-column">
                    <span className="dropdown-title">
                      {t("nav.pricing.allPlans")}
                    </span>

                    <Link href={`/${lang}/pricing`}>
                      {t("nav.pricing.ourPlans")}
                    </Link>
                  </div>

                  <div className="dropdown-cta">
                    <p>{t("nav.pricing.notSure")}</p>
                    <Link href={`/${lang}/plan-advisor`} className="nav-button">
                      {t("nav.pricing.advisor")}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>

        {/* MOBILE HEADER */}
        <div className="mobile-header">
          <button className="burger" onClick={() => setMobileOpen(!mobileOpen)}>
            ☰
          </button>

          <Link href={`/${lang}/`} className="mobile-brand">
            <Image src="/logo_oxo.png" alt="Oxo" width={50} height={50} />
            <span>Oxo</span>
          </Link>
        </div>

        {/* ACCOUNT */}
        <div className="account-icon">
          <Link href={`/${lang}/auth`}>👤{t("nav.account")} | </Link>
          <LanguageSwitcher />
        </div>
      </div>

      {/* MOBILE MENU */}
      {mobileOpen && (
        <>
          <div className="overlay" onClick={() => setMobileOpen(false)} />

          <div className="mobile-menu open">
            {/* INDIVIDUALS */}
            <div>
              <span
                className="mobile-title"
                onClick={() => setMobileProductOpen(!mobileProductOpen)}
              >
                {t("nav.individuals")} {mobileProductOpen ? "▲" : "▼"}
              </span>

              {mobileProductOpen && (
                <div className="mobile-dropdown">
                  <Link
                    href={`/${lang}/product/anti-virus`}
                    onClick={handleLinkClick}
                  >
                    {t("nav.product.antivirus")}
                  </Link>

                  <Link
                    href={`/${lang}/product/passwords-vault`}
                    onClick={handleLinkClick}
                  >
                    {t("nav.product.vault")}
                  </Link>

                  <Link
                    href={`/${lang}/product/spam-phishing`}
                    onClick={handleLinkClick}
                  >
                    {t("nav.product.phishing")}
                  </Link>

                  <Link
                    href={`/${lang}/product/individual`}
                    onClick={handleLinkClick}
                  >
                    {t("nav.product.mission")}
                  </Link>
                </div>
              )}
            </div>

            {/* BUSINESS */}
            <Link href={`/${lang}/product/business`} onClick={handleLinkClick}>
              {t("nav.businesses")}
            </Link>

            {/* BLOG */}
            <Link href={`/${lang}/blog`} onClick={handleLinkClick}>
              {t("nav.blog")}
            </Link>

            {/* SUPPORT */}
            <div>
              <span
                className="mobile-title"
                onClick={() => setMobileToolsOpen(!mobileToolsOpen)}
              >
                {t("nav.support")} {mobileToolsOpen ? "▲" : "▼"}
              </span>

              {mobileToolsOpen && (
                <div className="mobile-dropdown">
                  <Link href={`/${lang}/support/faq`} onClick={handleLinkClick}>
                    {t("nav.supportLinks.faq")}
                  </Link>

                  <Link
                    href={`/${lang}/support/client-support`}
                    onClick={handleLinkClick}
                  >
                    {t("nav.supportLinks.client")}
                  </Link>

                  <Link
                    href={`/${lang}/support/cybersec-advices`}
                    onClick={handleLinkClick}
                  >
                    {t("nav.supportLinks.advices")}
                  </Link>

                  <div className="mobile-subtitle">{t("nav.tools.title")}</div>

                  <Link
                    href={`/${lang}/tools/email-sec`}
                    onClick={handleLinkClick}
                  >
                    {t("nav.tools.email")}
                  </Link>

                  <Link
                    href={`/${lang}/tools/password-sec`}
                    onClick={handleLinkClick}
                  >
                    {t("nav.tools.password")}
                  </Link>

                  <Link
                    href={`/${lang}/tools/link-sec`}
                    onClick={handleLinkClick}
                  >
                    {t("nav.tools.link")}
                  </Link>
                </div>
              )}
            </div>

            {/* PRICING */}
            <Link href={`/${lang}/pricing`} onClick={handleLinkClick}>
              {t("nav.pricing.title")}
            </Link>
          </div>
        </>
      )}
    </header>
  );
}
