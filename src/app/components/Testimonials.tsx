"use client";

import React, { useRef } from "react";
import "../styles/components/testimonials.scss";

type Testimonial = {
  name: string;
  role: string;
  company?: string;
  avatarEmoji: string; // remplacement de l'image
  quote: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Alice Dupont",
    role: "IT Manager",
    company: "TechCorp",
    avatarEmoji: "🛡️",
    quote:
      "OXO keeps our systems secure effortlessly. The tools are intuitive and reliable!",
  },
  {
    name: "Marc Lefevre",
    role: "Freelancer",
    avatarEmoji: "💻",
    quote:
      "I love how simple it is to protect my devices. The password vault is a lifesaver.",
  },
  {
    name: "Sophie Bernard",
    role: "Startup Founder",
    company: "InnovateX",
    avatarEmoji: "🚀",
    quote:
      "The SME plan gave my team all the security we needed without any headaches.",
  },
];

export default function Testimonials() {
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
    <section className="testimonials-section">
      <div className="container">
        <h2>What Our Users Say</h2>

        <div className="carousel-wrapper">
          <button className="carousel-btn left" onClick={() => scroll("left")}>
            ◀
          </button>

          <div className="carousel" ref={carouselRef}>
            {testimonials.map((t, idx) => (
              <div key={idx} className="testimonial-card">
                <p className="quote">&quot;{t.quote}&quot;</p>
                <div className="user-info">
                  <span className="avatar-emoji">{t.avatarEmoji}</span>
                  <div>
                    <p className="name">{t.name}</p>
                    <p className="role">
                      {t.role}
                      {t.company ? ` @ ${t.company}` : ""}
                    </p>
                  </div>
                </div>
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
