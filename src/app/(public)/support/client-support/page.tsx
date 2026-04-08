import "../../../styles/pages/client-support.scss";

export default function ClientSupport() {
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
          <a href="/contact">Send a message</a>
        </div>

        <div className="card">
          <h3>Self-help</h3>
          <a href="/support/faq">Browse FAQ</a>
        </div>
      </div>
    </main>
  );
}
