import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const nextConfig: NextConfig = {
  // Allow MDX files to be treated as pages/content alongside TS/TSX.
  pageExtensions: ["ts", "tsx", "md", "mdx"],
  images: {
    // Use remotePatterns (images.domains is deprecated in Next 16).
    remotePatterns: [],
  },
};

const withMDX = createMDX({
  // remark/rehype plugins can be added here later (string form for Turbopack).
});

export default withMDX(nextConfig);
