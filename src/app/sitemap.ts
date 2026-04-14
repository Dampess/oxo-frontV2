import type { MetadataRoute } from "next";
import { locales, siteUrl } from "@/lib/i18n";

const staticPages = [
  "",
  "/pricing",
  "/plan-advisor",
  "/tools",
  "/product",
  "/support",
  "/blog",
  "/contact",
  "/product/anti-virus",
  "/product/businesses",
  "/product/individuals",
  "/product/passwords-vault",
  "/product/spam-phishing",
  "/tools/email-sec",
  "/tools/link-sec",
  "/tools/passwords-sec",
  "/support/client-support",
  "/support/cybersec-advices",
  "/support/faq",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return staticPages.flatMap((page) =>
    locales.map((locale) => ({
      url: `${siteUrl}/${locale}${page}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: page === "" ? 1 : 0.8,
    })),
  );
}
