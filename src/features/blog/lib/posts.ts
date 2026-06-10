import type { BlogPillar, PostMeta } from "@/types";

type PostEntry = { slug: string; meta: PostMeta };

/**
 * Blog registry — the single source of truth for post metadata, listing, and SEO.
 * The MDX body for each post is loaded by slug in the [slug] route via dynamic import,
 * so adding a post = add an `.mdx` file in `content/blog` + one entry here.
 */
const posts: PostEntry[] = [
  {
    slug: "reduce-cost-of-vacancy",
    meta: {
      title:
        "How to Reduce the Cost of Vacancy for Senior Software Engineers in the U.S.",
      description:
        "Open engineering roles quietly drain revenue. Learn how a success-driven, 24/7 sourcing model cuts time-to-hire and protects your bottom line.",
      pillar: "it",
      keywords: [
        "cost of vacancy for senior software engineers",
        "hire senior software engineers fast",
        "outsourcing tech recruitment in the U.S.",
      ],
      date: "2026-05-20",
      readingTime: "4 min read",
    },
  },
  {
    slug: "active-headhunting-vs-job-boards",
    meta: {
      title:
        "Active Headhunting vs. Job Boards: Sourcing Passive Elite Tech Talent",
      description:
        "Elite engineers rarely browse job boards. Discover how active headhunting reaches the passive top 10% of technical talent.",
      pillar: "it",
      keywords: [
        "active headhunting",
        "how to recruit software engineers who aren't looking",
        "technical staffing solutions",
      ],
      date: "2026-05-06",
      readingTime: "3 min read",
    },
  },
  {
    slug: "lateral-partner-moving-checklist",
    meta: {
      title:
        "Lateral Partner Moving Checklist: A Discretion-First Guide to Attorney Placements",
      description:
        "A structured, confidentiality-first approach to lateral partner acquisitions — from operational firewalls to auditing the transferable book of business.",
      pillar: "legal",
      keywords: [
        "lateral partner legal recruitment",
        "attorney placement services",
        "law firm practice group expansion",
      ],
      date: "2026-04-22",
      readingTime: "4 min read",
    },
  },
  {
    slug: "outsourcing-associate-recruitment",
    meta: {
      title:
        "Why U.S. Law Firms are Outsourcing Associate Recruitment to Specialized Agencies",
      description:
        "Stop losing billable hours to resume sorting. See why top firms outsource associate recruitment to specialized legal search agencies.",
      pillar: "legal",
      keywords: [
        "legal recruitment outsourcing",
        "law firm executive search",
        "attorney talent acquisition",
      ],
      date: "2026-04-10",
      readingTime: "3 min read",
    },
  },
];

export const pillarLabels: Record<BlogPillar, string> = {
  it: "Information Technology",
  legal: "Legal & Executive Search",
};

export function getAllPosts(): PostEntry[] {
  return [...posts].sort((a, b) => b.meta.date.localeCompare(a.meta.date));
}

export function getPostsByPillar(pillar: BlogPillar): PostEntry[] {
  return getAllPosts().filter((p) => p.meta.pillar === pillar);
}

export function getPostBySlug(slug: string): PostEntry | null {
  return posts.find((p) => p.slug === slug) ?? null;
}

export function getPostSlugs(): string[] {
  return posts.map((p) => p.slug);
}
