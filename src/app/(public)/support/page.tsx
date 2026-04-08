import "../../styles/pages/support.scss";

export default function SupportPage() {
  return (
    <main className="support">
      <section className="hero">
        <h1>How can we help you?</h1>
        <p>Find answers, contact our team, or improve your security.</p>
      </section>

      <section className="support-grid">
        <a href="/support/faq" className="card">
          <h3>📚 FAQ</h3>
          <p>Quick answers to common questions</p>
        </a>

        <a href="/support/client-support" className="card">
          <h3>💬 Client Support</h3>
          <p>Talk with our support team</p>
        </a>

        <a href="/support/cybersecurity-advice" className="card">
          <h3>🛡 Security Advice</h3>
          <p>Learn how to stay safe online</p>
        </a>
      </section>
    </main>
  );
}
