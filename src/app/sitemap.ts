import { locales, siteUrl } from "@/lib/i18n";
import type { MetadataRoute } from "next";

const staticPages = [
  "",
  "/pricing",
  "/plan-advisor",
  "/tools",
  "/product",
  "/support",
  "/blog",
  "/contact",
  "/product/web",
  "/product/businesses",
  "/product/individuals",
  "/product/comm",
  "/product/trackers",
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
