"use client";

import { useState } from "react";
import Link from "next/link";
import "../../styles/pages/blog.scss";

type Post = {
  title: string;
  excerpt: string;
  category: string;
  date: string;
  slug: string;
};

const allPosts: Post[] = [
  {
    title: "Top Cyber Threats to Watch in 2026",
    excerpt:
      "From phishing-as-a-service to AI-powered scams, discover the emerging threats shaping the digital risk landscape.",
    category: "Threat Intelligence",
    date: "Jan 12, 2026",
    slug: "#",
  },
  {
    title: "How to Detect a Malicious Link in Seconds",
    excerpt:
      "A practical guide to quickly identify dangerous links before clicking — even without technical knowledge.",
    category: "Practical Security",
    date: "Jan 5, 2026",
    slug: "#",
  },
  {
    title: "Why Businesses Underestimate Email Attacks",
    excerpt:
      "Email remains the primary attack vector. Here’s why organizations still struggle to defend against it.",
    category: "Business Security",
    date: "Dec 20, 2025",
    slug: "#",
  },
  // Ajouter d'autres articles si nécessaire
];

const POSTS_PER_PAGE = 6;

export default function BlogPage() {
  const categories = Array.from(new Set(allPosts.map((p) => p.category)));
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [currentPage, setCurrentPage] = useState(1);

  // Filtrage par catégorie
  const filteredPosts =
    selectedCategory === "All"
      ? allPosts
      : allPosts.filter((p) => p.category === selectedCategory);

  // Pagination
  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  const paginatedPosts = filteredPosts.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE,
  );

  return (
    <main className="blog-page">
      {/* ================= HERO ================= */}
      <section className="blog-hero">
        <div className="container">
          <h1>Oxo Blog</h1>
          <p>
            Insights, analysis and practical guidance to help you understand
            digital threats and stay protected.
          </p>
        </div>
      </section>

      {/* ================= CATEGORY FILTER ================= */}
      <section className="blog-filters">
        <div className="container">
          <button
            className={selectedCategory === "All" ? "active" : ""}
            onClick={() => {
              setSelectedCategory("All");
              setCurrentPage(1);
            }}
          >
            All
          </button>
          {categories.map((cat, idx) => (
            <button
              key={idx}
              className={selectedCategory === cat ? "active" : ""}
              onClick={() => {
                setSelectedCategory(cat);
                setCurrentPage(1);
              }}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* ================= POSTS GRID ================= */}
      <section className="blog-list">
        <div className="container">
          <div className="posts-grid">
            {paginatedPosts.map((post, idx) => (
              <article key={idx} className="post-card">
                <div className="post-meta">
                  <span className="category">{post.category}</span>
                  <span className="date">{post.date}</span>
                </div>
                <h2 className="post-title">{post.title}</h2>
                <p className="post-excerpt">{post.excerpt}</p>
                <Link href={post.slug} className="post-link">
                  Read article →
                </Link>
              </article>
            ))}
          </div>

          {/* ================= PAGINATION ================= */}
          {totalPages > 1 && (
            <div className="pagination">
              <button
                disabled={currentPage === 1}
                onClick={() => setCurrentPage(currentPage - 1)}
              >
                ← Previous
              </button>
              {[...Array(totalPages)].map((_, i) => (
                <button
                  key={i}
                  className={currentPage === i + 1 ? "active" : ""}
                  onClick={() => setCurrentPage(i + 1)}
                >
                  {i + 1}
                </button>
              ))}
              <button
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage(currentPage + 1)}
              >
                Next →
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="blog-cta">
        <div className="container">
          <h2>Stay one step ahead</h2>
          <p>
            Test a suspicious link or email before it becomes a real threat.
          </p>
          <Link href="/scan" className="button-primary">
            Start a scan
          </Link>
        </div>
      </section>
    </main>
  );
}
