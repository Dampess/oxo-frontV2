"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import "../styles/components/navbar.scss";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileProductOpen, setMobileProductOpen] = useState(false);
  const [mobileToolsOpen, setMobileToolsOpen] = useState(false);

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
                />
                <div>
                  <div className="brand-name">Oxo</div>
                  {/* <div className="brand-tagline">See. Smell. Protect.</div> */}
                </div>
              </div>
            </Link>

            <div className="nav-principal">
              {/* PRODUCT */}
              <div className="nav-item">
                <span className="nav-link">Product ▾</span>

                <div className="dropdown">
                  <div className="dropdown-column">
                    <span className="dropdown-title">In Action</span>
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
                    <Link href="/product/individual">Individuals</Link>
                    <Link href="/product/business">Businesses</Link>
                  </div>

                  <div className="dropdown-cta">
                    <p>All-in-one cybersecurity platform.</p>
                    <Link href="/product" className="nav-button">
                      Explore Product
                    </Link>
                  </div>
                </div>
              </div>

              {/* FREE TOOLS */}
              <div className="nav-item">
                <span className="nav-link">Free Tools ▾</span>

                <div className="dropdown dropdown-personal">
                  <div className="dropdown-column">
                    <span className="dropdown-title">Quick Checks</span>
                    <Link href="/tools/email-sec">Email Check</Link>
                    <Link href="/tools/password-sec">Password Tester</Link>
                    <Link href="/tools/link-sec">Link Scanner</Link>
                  </div>

                  <div className="dropdown-cta">
                    <p>Test your security instantly, no account required.</p>
                    <Link href="/tools" className="nav-button">
                      Try Free Tools
                    </Link>
                  </div>
                </div>
              </div>

              {/* Pricing */}
              <div className="nav-item">
                <span className="nav-link">Pricing ▾</span>

                <div className="dropdown dropdown-personal">
                  <div className="dropdown-column">
                    <span className="dropdown-title">See all plan</span>
                    <Link href="/pricing">Our Plan</Link>
                  </div>

                  <div className="dropdown-cta">
                    <p>You&apos;r not sure ? We see which plan feat !</p>
                    <Link href="/plan-advisor" className="nav-button">
                      Plan Advisor
                    </Link>
                  </div>
                </div>
              </div>

              <Link href="/blog" className="nav-link">
                Blog
              </Link>
              <Link href="/downloads" className="nav-link">
                Downloads
              </Link>
            </div>
          </div>

          {/* RIGHT SIDE */}
          {/* <div className="nav-actions">
            <Link href="/signin" className="nav-link">
              Sign in
            </Link>
            <Link href="/signup" className="button-secondary">
              Sign up
            </Link>
          </div> */}
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
        </div>
      </div>

      {/* MOBILE MENU */}
      {mobileOpen && (
        <div className="mobile-menu">
          {/* PRODUCT */}
          <div>
            <span
              className="mobile-title"
              onClick={() => setMobileProductOpen(!mobileProductOpen)}
            >
              Product {mobileProductOpen ? "▲" : "▼"}
            </span>
            {mobileProductOpen && (
              <div className="mobile-dropdown">
                <Link href="/product/anti-virus">
                  Anti-virus & Anti-malware
                </Link>
                <Link href="/product/passwords-vault">Passwords Vault</Link>
                <Link href="/product/spam-phishing">
                  Spam & Phishing protection
                </Link>
              </div>
            )}
          </div>

          {/* TOOLS */}
          <div>
            <span
              className="mobile-title"
              onClick={() => setMobileToolsOpen(!mobileToolsOpen)}
            >
              Free Tools {mobileToolsOpen ? "▲" : "▼"}
            </span>
            {mobileToolsOpen && (
              <div className="mobile-dropdown">
                <Link href="/tools/email-sec">Email Leak</Link>
                <Link href="/tools/password-sec">Password Tester</Link>
                <Link href="/tools/link-sec">Link Scanner</Link>
              </div>
            )}
          </div>

          <Link href="/pricing" className="nav-link">
            Pricing
          </Link>
          <Link href="/blog" className="nav-link">
            Blog
          </Link>
          <Link href="/downloads" className="nav-link">
            Downloads
          </Link>
        </div>
      )}
    </header>
  );
}
