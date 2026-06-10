import type { Metadata } from "next";
import { Section } from "@/components/ui/section";
import { PageHeader } from "@/components/common/page-header";
import { PostList } from "@/features/blog/components/post-list";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Insights",
  description:
    "Expert insights on IT and legal recruitment — from reducing the cost of vacancy to discreet lateral partner placements.",
  path: "/blog",
});

export default function BlogIndexPage() {
  return (
    <>
      <PageHeader
        eyebrow="Insights"
        title="Hiring intelligence for IT & legal leaders"
        description="Practical guidance on active headhunting, cost-of-vacancy, and high-stakes executive search."
      />
      <Section>
        <PostList />
      </Section>
    </>
  );
}
