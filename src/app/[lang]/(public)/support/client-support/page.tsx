"use client";

import "@/app/styles/pages/client-support.scss";
import { usePathname } from "next/navigation";

export default function ClientSupport() {
  const pathname = usePathname();
  const lang = pathname.split("/")[1];
  return (
    <main className="client-support">
      <h1>Contact Support</h1>
      <p className="subtitle">We usually respond within 24 hours</p>

      <div className="support-options">
        <div className="card">
          <h3>Email</h3>
          <p>support@oxo.com</p>
        </div>

        <div className="card">
          <h3>Contact form</h3>
          <a href={`/${lang}/contact`}>Send a message</a>
        </div>

        <div className="card">
          <h3>Self-help</h3>
          <a href={`/${lang}/support/faq`}>Browse FAQ</a>
        </div>
      </div>
    </main>
  );
}
