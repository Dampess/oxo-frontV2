import "@/app/styles/pages/contact.scss";

export default function ContactPage() {
  return (
    <main className="contact">
      <h1>Contact Us</h1>

      <div className="contact-wrapper">
        <form className="contact-form">
          <input type="text" placeholder="Name" required />
          <input type="email" placeholder="Email" required />
          <input type="text" placeholder="Subject" />
          <textarea placeholder="Message" rows={5} />
          <button type="submit">Send</button>
        </form>

        <div className="contact-info">
          <p>📍 Europe</p>
          <p>⏱ Response within 24h</p>
          <p>🔒 Secure & private</p>
        </div>
      </div>
    </main>
  );
}
