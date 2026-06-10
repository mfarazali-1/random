import type { Metadata } from "next";
import { siteConfig } from "@/data/site";

const titleTemplate = `%s | ${siteConfig.name}`;

/** Build per-page metadata with sensible Open Graph / Twitter defaults. */
export function buildMetadata({
  title,
  description = siteConfig.description,
  path = "/",
  keywords,
}: {
  title: string;
  description?: string;
  path?: string;
  keywords?: string[];
}): Metadata {
  const url = `${siteConfig.url}${path}`;
  return {
    title,
    description,
    keywords,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      url,
      siteName: siteConfig.name,
      title,
      description,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

/** Root metadata (includes metadataBase + title template). */
export const rootMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — ${siteConfig.slogan}`,
    template: titleTemplate,
  },
  description: siteConfig.description,
};
