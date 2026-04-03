import Image from "next/image";
import "../styles/components/hero.scss";

export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero-content">
        {/* LEFT */}
        <div className="hero-text">
          <h1>
            Stay safe online. <br />
            <span>Without complexity.</span>
          </h1>

          <p>
            Oxo protects your emails, passwords and devices in real time. Simple
            tools. Powerful security.
          </p>
          <div className="hero-trust">
            Credit card required • Free tools available • GDPR compliant
          </div>

          <div className="hero-cta">
            <a href="/signup" className="btn-primary">
              Get started for free
            </a>
            <a href="/tools" className="btn-secondary">
              Try free tools
            </a>
          </div>
        </div>

        {/* RIGHT */}
        <div className="hero-visual">
          <Image
            src="/heroBgImage2.jpg"
            alt="Oxo dashboard"
            width={350}
            height={300}
          />
        </div>
      </div>
    </section>
  );
}
