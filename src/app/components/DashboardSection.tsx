import React from "react";
import Image from "next/image";
import Link from "next/link";
import "../styles/components/dashboardsection.scss";

export default function DashboardSection() {
  return (
    <section className="dashboard-section">
      <div className="container">
        <div className="dashboard-content">
          <div className="dashboard-image">
            <Image
              src="/dashboard-mockup.png"
              alt="Dashboard preview"
              width={700}
              height={450}
              className="mockup-img"
            />
          </div>
          <div className="dashboard-text">
            <h2>Visualize Your Security at a Glance</h2>
            <p>
              Our intuitive dashboard gives you instant insights into your
              devices, accounts, and overall security. Track risks and take
              action in real-time.
            </p>
            <Link href="/product" className="btn-primary">
              Explore Products
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
