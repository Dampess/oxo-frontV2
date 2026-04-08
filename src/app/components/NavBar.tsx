"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import "../styles/components/navbar.scss";

export default function Header() {
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
          {/* LEFT SIDE */}
          <div className="nav-left">
            <Link href="/" className="nav-link">
              <div className="brand">
                <Image
                  src="/logo_oxo.png"
                  alt="Oxo logo"
                  width={90}
                  height={90}
                  loading="eager"
                />
                <div>
                  <div className="brand-name">Oxo</div>
                  <div className="brand-tagline">See. Smell. Protect.</div>
                </div>
              </div>
            </Link>

            <div className="nav-principal">
              {/* PRODUCT */}
              <div className="nav-item">
                <span className="nav-link">Individuals </span>

                <div className="dropdown">
                  <div className="dropdown-column">
                    <span className="dropdown-title">Products</span>
                    <Link href="/product/anti-virus">
                      Anti-virus & Anti-malware
                    </Link>
                    <Link href="/product/passwords-vault">Passwords Vault</Link>
                    <Link href="/product/spam-phishing">
                      Spam & Phishing protection
                    </Link>
                  </div>

                  <div className="dropdown-column">
                    <span className="dropdown-title">For Users</span>
                    <Link href="/product/individual">Our Mission</Link>
                  </div>

                  <div className="dropdown-cta">
                    <p>All-in-one cybersecurity platform.</p>
                    <Link href="/product" className="nav-button">
                      Explore Product
                    </Link>
                  </div>
                </div>
              </div>

              <Link href="/product/business" className="nav-link">
                Businesses
              </Link>

              <Link href="/blog" className="nav-link">
                Blog
              </Link>

              {/* Support */}
              <div className="nav-item">
                <span className="nav-link">Support </span>

                <div className="dropdown">
                  <div className="dropdown-column">
                    <span className="dropdown-title">Usefull</span>
                    <Link href="/support">Support HUB</Link>
                    <Link href="/support/faq">FAQ</Link>
                    <Link href="/support/client-support">Client Support</Link>
                    <Link href="/support/cybersec-advices">
                      Cybersécurity Advices
                    </Link>
                    {/* FREE TOOLS */}
                    <div className="dropdown-column">
                      <span className="dropdown-title">Free Tools</span>

                      <Link href="/tools/email-sec" className="dropdown-item">
                        Email Check <br />
                        <small>(Detect email leaks instantly)</small>
                      </Link>

                      <Link
                        href="/tools/password-sec"
                        className="dropdown-item"
                      >
                        Password Tester <br />
                        <small>(Check password strength)</small>
                      </Link>

                      <Link href="/tools/link-sec" className="dropdown-item">
                        Link Scanner <br />
                        <small>(Scan suspicious URLs)</small>
                      </Link>
                    </div>
                  </div>

                  <div className="dropdown-cta">
                    <p>See All Free Tools</p>
                    <Link href="/tools" className="nav-button">
                      Explore Tools
                    </Link>
                  </div>
                </div>
              </div>

              {/* Pricing */}
              <div className="nav-item">
                <span className="nav-link">Pricing </span>

                <div className="dropdown dropdown-personal">
                  <div className="dropdown-column">
                    <span className="dropdown-title">See all plan</span>
                    <Link href="/pricing">Our Plans</Link>
                  </div>

                  <div className="dropdown-cta">
                    <p>Not sure which plan fits you?</p>
                    <Link href="/plan-advisor" className="nav-button">
                      Plan Advisor
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

          <Link href="/" className="mobile-brand">
            <Image src="/logo_oxo.png" alt="Oxo" width={50} height={50} />
            <span>Oxo</span>
          </Link>
        </div>
        {/* Account icon */}
        <div className="account-icon">
          <Link href="/auth">👤My Account</Link>
          <Link href="/contact"> | Contact</Link>
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
                Individuals {mobileProductOpen ? "▲" : "▼"}
              </span>

              {mobileProductOpen && (
                <div className="mobile-dropdown">
                  <Link href="/product/anti-virus" onClick={handleLinkClick}>
                    Anti-virus
                  </Link>
                  <Link
                    href="/product/passwords-vault"
                    onClick={handleLinkClick}
                  >
                    Passwords Vault
                  </Link>
                  <Link href="/product/spam-phishing" onClick={handleLinkClick}>
                    Phishing protection
                  </Link>
                  <Link href="/product/individual" onClick={handleLinkClick}>
                    Our Mission
                  </Link>
                </div>
              )}
            </div>

            {/* BUSINESS */}
            <Link
              href="/product/business"
              className="nav-link"
              onClick={handleLinkClick}
            >
              Businesses
            </Link>

            {/* BLOG */}
            <Link href="/blog" className="nav-link" onClick={handleLinkClick}>
              Blog
            </Link>

            {/* SUPPORT */}
            <div>
              <span
                className="mobile-title"
                onClick={() => setMobileToolsOpen(!mobileToolsOpen)}
              >
                Support {mobileToolsOpen ? "▲" : "▼"}
              </span>

              {mobileToolsOpen && (
                <div className="mobile-dropdown">
                  <Link href="/support/faq" onClick={handleLinkClick}>
                    FAQ
                  </Link>
                  <Link
                    href="/support/client-support"
                    onClick={handleLinkClick}
                  >
                    Client Support
                  </Link>
                  <Link
                    href="/support/cybersec-advices"
                    onClick={handleLinkClick}
                  >
                    Cybersécurity Advices
                  </Link>

                  <div className="mobile-subtitle">Free Tools</div>
                  <Link href="/tools/email-sec" onClick={handleLinkClick}>
                    Email Check
                  </Link>
                  <Link href="/tools/password-sec" onClick={handleLinkClick}>
                    Password Tester
                  </Link>
                  <Link href="/tools/link-sec" onClick={handleLinkClick}>
                    Link Scanner
                  </Link>
                </div>
              )}
            </div>

            {/* PRICING */}
            <Link
              href="/pricing"
              className="nav-link"
              onClick={handleLinkClick}
            >
              Pricing
            </Link>
          </div>
        </>
      )}
    </header>
  );
}
