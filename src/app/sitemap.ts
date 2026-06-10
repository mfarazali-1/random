import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/site";
import { getPostSlugs } from "@/features/blog/lib/posts";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/about",
    "/hire-talent",
    "/pricing",
    "/blog",
    "/contact",
  ];

  const staticPages: MetadataRoute.Sitemap = routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.7,
  }));

  const posts: MetadataRoute.Sitemap = getPostSlugs().map((slug) => ({
    url: `${siteConfig.url}/blog/${slug}`,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticPages, ...posts];
}
