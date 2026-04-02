"use client";

import React, { useRef } from "react";
import Link from "next/link";
import "../styles/components/pricingteasersection.scss";

type Plan = {
  name: string;
  price: string;
  devices?: string;
  features: string[];
  highlight?: boolean;
};

const plans: Plan[] = [
  {
    name: "Free",
    price: "$0",
    features: ["Email Checks", "Link Scanner", "Basic Security"],
  },
  {
    name: "Individual Basic",
    price: "$4.99/mo",
    devices: "1 Device",
    features: ["All Free Features", "Password Vault"],
  },
  {
    name: "Individual Pro",
    price: "$9.99/mo",
    devices: "3 Devices",
    features: ["All Basic Features", "Device Scan", "Priority Support"],
    highlight: true,
  },
  {
    name: "Individual Premium",
    price: "$19.99/mo",
    devices: "8 Devices",
    features: ["All Pro Features", "Advanced Security Settings"],
  },
  {
    name: "SME Starter",
    price: "$49/mo",
    devices: "Up to 10 Devices",
    features: ["Team Management", "Dashboard", "Priority Support"],
  },
  {
    name: "SME Growth",
    price: "$99/mo",
    devices: "Up to 25 Devices",
    features: ["All Starter Features", "Advanced Analytics", "SLA Support"],
  },
];

export default function PricingTeaserSection() {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (carouselRef.current) {
      const scrollAmount = carouselRef.current.offsetWidth * 0.8;
      carouselRef.current.scrollBy({
        left: direction === "right" ? scrollAmount : -scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="pricing-carousel">
      <div className="container">
        <h2>Simple Pricing, Maximum Protection</h2>
        <p>
          Free or premium, for individuals or teams pick what fits your needs.
        </p>

        <div className="carousel-wrapper">
          <button className="carousel-btn left" onClick={() => scroll("left")}>
            ◀
          </button>

          <div className="carousel" ref={carouselRef}>
            {plans.map((plan, idx) => (
              <div
                key={idx}
                className={`plan-card ${plan.highlight ? "highlight" : ""}`}
              >
                {plan.highlight && <span className="badge">Most Popular</span>}
                <h3>{plan.name}</h3>
                <p className="plan-price">{plan.price}</p>
                {plan.devices && <p className="plan-devices">{plan.devices}</p>}
                <ul>
                  {plan.features.map((f, i) => (
                    <li key={i}>{f}</li>
                  ))}
                </ul>
                <Link
                  href={plan.price === "$0" ? "/tools" : "/signup"}
                  className="btn-primary"
                >
                  {plan.price === "$0" ? "Try for Free" : "Get Started"}
                </Link>
              </div>
            ))}
          </div>

          <button
            className="carousel-btn right"
            onClick={() => scroll("right")}
          >
            ▶
          </button>
        </div>
      </div>
    </section>
  );
}
