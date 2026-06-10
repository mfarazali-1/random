import { describe, it, expect } from "vitest";
import {
  getAllPosts,
  getPostBySlug,
  getPostSlugs,
  getPostsByPillar,
} from "@/features/blog/lib/posts";

describe("blog registry", () => {
  it("returns posts sorted by date descending", () => {
    const dates = getAllPosts().map((p) => p.meta.date);
    const expected = [...dates].sort((a, b) => b.localeCompare(a));
    expect(dates).toEqual(expected);
  });

  it("includes the four seeded posts", () => {
    expect(getAllPosts().length).toBeGreaterThanOrEqual(4);
  });

  it("looks up a post by slug and returns null for unknown slugs", () => {
    expect(getPostBySlug("reduce-cost-of-vacancy")?.meta.pillar).toBe("it");
    expect(getPostBySlug("does-not-exist")).toBeNull();
  });

  it("filters posts by pillar", () => {
    expect(
      getPostsByPillar("legal").every((p) => p.meta.pillar === "legal"),
    ).toBe(true);
  });

  it("exposes slugs that match the content", () => {
    expect(getPostSlugs()).toContain("lateral-partner-moving-checklist");
  });
});
