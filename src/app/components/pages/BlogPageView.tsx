"use client";

import Link from "next/link";
import { useState } from "react";
import { useTranslation } from "@/hooks/useTranslation";
import "@/app/styles/pages/blog.scss";

type Props = {
  lang: string;
};

type Post = {
  titleKey: string;
  excerptKey: string;
  categoryKey: string;
  date: string;
  slug: string;
};

const allPosts: Post[] = [
  {
    titleKey: "blog.posts.threats2026.title",
    excerptKey: "blog.posts.threats2026.excerpt",
    categoryKey: "blog.categories.threatIntelligence",
    date: "Jan 12, 2026",
    slug: "#",
  },
  {
    titleKey: "blog.posts.maliciousLink.title",
    excerptKey: "blog.posts.maliciousLink.excerpt",
    categoryKey: "blog.categories.practicalSecurity",
    date: "Jan 5, 2026",
    slug: "#",
  },
  {
    titleKey: "blog.posts.emailAttacks.title",
    excerptKey: "blog.posts.emailAttacks.excerpt",
    categoryKey: "blog.categories.businessSecurity",
    date: "Dec 20, 2025",
    slug: "#",
  },
];

const POSTS_PER_PAGE = 6;

export default function BlogPageView({ lang }: Props) {
  const { t } = useTranslation(lang);

  const categories = Array.from(new Set(allPosts.map((p) => p.categoryKey)));
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredPosts =
    selectedCategory === "all"
      ? allPosts
      : allPosts.filter((p) => p.categoryKey === selectedCategory);

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
          <h1>{t("blog.hero.title")}</h1>
          <p>{t("blog.hero.description")}</p>
        </div>
      </section>

      {/* ================= CATEGORY FILTER ================= */}
      <section className="blog-filters">
        <div className="container">
          <button
            className={selectedCategory === "all" ? "active" : ""}
            onClick={() => {
              setSelectedCategory("all");
              setCurrentPage(1);
            }}
          >
            {t("blog.filters.all")}
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
              {t(cat)}
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
                  <span className="category">{t(post.categoryKey)}</span>
                  <span className="date">{post.date}</span>
                </div>
                <h2 className="post-title">{t(post.titleKey)}</h2>
                <p className="post-excerpt">{t(post.excerptKey)}</p>
                <Link href={post.slug} className="post-link">
                  {t("blog.posts.readArticle")}
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
                {t("blog.pagination.previous")}
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
                {t("blog.pagination.next")}
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="blog-cta">
        <div className="container">
          <h2>{t("product.cta.title")}</h2>
          <p>{t("product.cta.description")}</p>
          <Link href={`/${lang}/pricing`} className="btn primary">
            {t("product.cta.button")}
          </Link>
        </div>
      </section>
    </main>
  );
}
