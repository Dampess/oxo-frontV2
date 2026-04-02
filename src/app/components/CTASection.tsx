import Link from "next/link";
import React from "react";
import "../styles/components/ctasection.scss";

export default function CTASection() {
  return (
    <section className="cta-section">
      <div className="container">
        <h2>Ready to Secure Your Digital Life?</h2>
        <Link href="/free-trial" className="btn-primary">
          GET SECURE
        </Link>
      </div>
    </section>
  );
}
