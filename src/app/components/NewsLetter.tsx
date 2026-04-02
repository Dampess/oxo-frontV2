"use client";

import React, { useState } from "react";
import "../styles/components/newsletter.scss";

export default function Newsletter() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Subscribed with ${email}`); // MVP : plus tard API
    setEmail("");
  };

  return (
    <section className="newsletter">
      <div className="container">
        <h2>Stay Updated</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit">Subscribe</button>
        </form>
      </div>
    </section>
  );
}
