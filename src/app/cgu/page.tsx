import Link from "next/link";
import "../styles/pages/legal.scss";

export default function TermsOfUsePage() {
  return (
    <main className="legal-page">
      <Link href={"/"}>← Return Home</Link>
      <div className="container">
        <h1>Terms of Use</h1>
        <p className="legal-date">Last updated: January 2026</p>

        <section>
          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing or using Oxo services, you agree to comply with these
            Terms of Use. If you do not agree, please refrain from using our
            services.
          </p>
        </section>

        <section>
          <h2>2. User Accounts</h2>
          <p>
            Some services may require you to create an account. You are
            responsible for maintaining the confidentiality of your login
            credentials and all activities under your account.
          </p>
        </section>

        <section>
          <h2>3. Prohibited Conduct</h2>
          <ul>
            <li>Do not misuse or attempt to hack the platform</li>
            <li>Do not upload malicious or illegal content</li>
            <li>Do not engage in activities that harm other users</li>
          </ul>
        </section>

        <section>
          <h2>4. Service Availability</h2>
          <p>
            Oxo strives to provide continuous access but does not guarantee
            uninterrupted service. We reserve the right to suspend services for
            maintenance or emergencies.
          </p>
        </section>

        <section>
          <h2>5. Intellectual Property</h2>
          <p>
            All content, logos, trademarks, and software are property of Oxo and
            may not be copied or distributed without explicit permission.
          </p>
        </section>

        <section>
          <h2>6. Limitation of Liability</h2>
          <p>
            Oxo provides risk analysis tools but cannot be held responsible for
            losses due to phishing, fraud, or malicious content.
          </p>
        </section>

        <section>
          <h2>7. Termination</h2>
          <p>
            We may suspend or terminate access to the platform if you breach
            these Terms of Use.
          </p>
        </section>

        <section>
          <h2>8. Governing Law</h2>
          <p>
            These Terms are governed by the laws applicable in the jurisdiction
            where Oxo operates.
          </p>
        </section>

        <section>
          <h2>9. Contact</h2>
          <p>
            For any questions regarding these terms, please contact{" "}
            <a href="mailto:legal@oxo.security">legal@oxo.security</a>.
          </p>
        </section>
      </div>
    </main>
  );
}
