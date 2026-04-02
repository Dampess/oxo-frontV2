import Link from "next/link";
import "../styles/pages/legal.scss";

export default function TermsOfSalePage() {
  return (
    <main className="legal-page">
      <Link href={"/"}>← Return Home</Link>
      <div className="container">
        <h1>Terms of Sale</h1>
        <p className="legal-date">Last updated: January 2026</p>

        <section>
          <h2>1. Scope</h2>
          <p>
            These Terms of Sale apply to all purchases of Oxo products and
            services. By placing an order, you agree to be bound by these terms.
          </p>
        </section>

        <section>
          <h2>2. Products and Services</h2>
          <p>
            Oxo offers digital security solutions, including link and email
            scanning, system audits, and subscription plans for individuals and
            businesses.
          </p>
        </section>

        <section>
          <h2>3. Orders and Payment</h2>
          <ul>
            <li>All orders must be placed through our official platform.</li>
            <li>
              Payments are due at the time of purchase and can be made via
              supported methods.
            </li>
            <li>
              Prices are subject to change, but your confirmed order will be
              charged at the stated price.
            </li>
          </ul>
        </section>

        <section>
          <h2>4. Subscription and Renewal</h2>
          <p>
            Subscription plans automatically renew unless cancelled prior to the
            renewal date. Users can manage subscriptions from their account
            dashboard.
          </p>
        </section>

        <section>
          <h2>5. Refunds and Cancellations</h2>
          <p>
            Refunds are provided only as outlined in our Refund Policy.
            Cancellations must be requested before the next billing cycle to
            avoid charges.
          </p>
        </section>

        <section>
          <h2>6. Liability</h2>
          <p>
            Oxo provides services to enhance digital security but cannot
            guarantee complete protection from cyber threats. Liability is
            limited to the purchase amount.
          </p>
        </section>

        <section>
          <h2>7. Governing Law</h2>
          <p>
            These Terms of Sale are governed by the laws applicable in the
            jurisdiction where Oxo operates.
          </p>
        </section>

        <section>
          <h2>8. Contact</h2>
          <p>
            For any questions regarding sales or subscriptions, please contact{" "}
            <a href="mailto:sales@oxo.security">sales@oxo.security</a>.
          </p>
        </section>
      </div>
    </main>
  );
}
