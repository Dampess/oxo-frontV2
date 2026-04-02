import Link from "next/link";
import "../styles/pages/legal.scss";

export default function PrivacyPage() {
  return (
    <main className="legal-page">
      <Link href={"/"}>← Return Home</Link>
      <div className="container">
        <h1>Privacy Policy</h1>
        <p className="legal-date">Last updated: January 2026</p>

        <section>
          <h2>1. Information We Collect</h2>
          <p>
            We may collect information you voluntarily submit such as links,
            emails, or contact details when using our services.
          </p>
        </section>

        <section>
          <h2>2. How We Use Your Data</h2>
          <ul>
            <li>To analyze and detect potential threats</li>
            <li>To improve our security models</li>
            <li>To communicate service-related information</li>
          </ul>
        </section>

        <section>
          <h2>3. Data Retention</h2>
          <p>
            Data is retained only as long as necessary for security analysis and
            operational purposes.
          </p>
        </section>

        <section>
          <h2>4. Data Sharing</h2>
          <p>
            We do not sell personal data. Data may be shared only when required
            by law or to protect our users and infrastructure.
          </p>
        </section>

        <section>
          <h2>5. Security</h2>
          <p>
            We implement technical and organizational measures to protect your
            data against unauthorized access.
          </p>
        </section>

        <section>
          <h2>6. Your Rights</h2>
          <p>
            You may request access, correction or deletion of your data by
            contacting us.
          </p>
        </section>

        <section>
          <h2>7. Contact</h2>
          <p>
            For privacy-related inquiries, contact{" "}
            <a href="mailto:privacy@oxo.security">privacy@oxo.security</a>.
          </p>
        </section>
      </div>
    </main>
  );
}
