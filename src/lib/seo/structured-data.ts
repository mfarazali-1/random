import { siteConfig } from "@/data/site";
import type { PostMeta } from "@/types";

/** Organization schema for sitewide structured data. */
export function organizationJsonLd(): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.legalName,
    url: siteConfig.url,
    email: siteConfig.email,
    slogan: siteConfig.slogan,
    description: siteConfig.description,
    areaServed: "US",
    knowsAbout: [
      "IT recruitment",
      "Technical staffing",
      "Legal recruitment",
      "Attorney placement",
      "Executive search",
    ],
  };
}

/** Article schema for an individual blog post. */
export function articleJsonLd(
  meta: PostMeta,
  slug: string,
): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: meta.title,
    description: meta.description,
    datePublished: meta.date,
    keywords: meta.keywords.join(", "),
    author: { "@type": "Organization", name: siteConfig.legalName },
    publisher: { "@type": "Organization", name: siteConfig.legalName },
    mainEntityOfPage: `${siteConfig.url}/blog/${slug}`,
  };
}
