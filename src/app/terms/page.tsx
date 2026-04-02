import Link from "next/link";
import "../styles/pages/legal.scss";

export default function TermsPage() {
  return (
    <main className="legal-page">
      <Link href={"/"}>← Return Home</Link>
      <div className="container">
        <h1>Terms of Service</h1>
        <p className="legal-date">Last updated: January 2026</p>

        <section>
          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing or using Oxo services, you agree to be bound by these
            Terms of Service. If you do not agree, you may not use the platform.
          </p>
        </section>

        <section>
          <h2>2. Description of Services</h2>
          <p>
            Oxo provides tools to analyze links, emails, phone numbers and
            digital content to help detect fraud, phishing and malicious
            activity.
          </p>
        </section>

        <section>
          <h2>3. User Responsibilities</h2>
          <ul>
            <li>
              You must use the services in compliance with applicable laws
            </li>
            <li>You may not abuse, reverse engineer or disrupt the platform</li>
            <li>You are responsible for the data you submit</li>
          </ul>
        </section>

        <section>
          <h2>4. Limitations</h2>
          <p>
            Oxo provides risk analysis and indicators but does not guarantee
            absolute protection against threats.
          </p>
        </section>

        <section>
          <h2>5. Intellectual Property</h2>
          <p>
            All content, branding and technology belong to Oxo and may not be
            used without permission.
          </p>
        </section>

        <section>
          <h2>6. Termination</h2>
          <p>
            We reserve the right to suspend or terminate access to the service
            at any time in case of misuse.
          </p>
        </section>

        <section>
          <h2>7. Contact</h2>
          <p>
            For any questions regarding these terms, contact us at{" "}
            <a href="mailto:legal@oxo.security">legal@oxo.security</a>.
          </p>
        </section>
      </div>
    </main>
  );
}
