import type { NavLink } from "@/types";

export const siteConfig = {
  name: "Hirelo",
  legalName: "Hirelo Staffing",
  domain: "gohirelo.com",
  url: "https://gohirelo.com",
  slogan: "Need top talent? Go Hirelo.",
  description:
    "Hirelo is an elite U.S. executive search and staffing agency specializing in technical IT recruitment and high-caliber attorney placements. We combine active headhunting precision with a relationship-driven approach to connect top-tier professionals with leading organizations.",
  email: "contact@gohirelo.com",
  nav: [
    { label: "About", href: "/about" },
    { label: "Hire Talent", href: "/hire-talent" },
    { label: "Pricing", href: "/pricing" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ] satisfies NavLink[],
} as const;

export type SiteConfig = typeof siteConfig;
