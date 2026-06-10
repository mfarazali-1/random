import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { CtaBand } from "@/components/common/cta-band";
import { JsonLd } from "@/components/common/json-ld";
import {
  getPostBySlug,
  getPostSlugs,
  pillarLabels,
} from "@/features/blog/lib/posts";
import { buildMetadata } from "@/lib/seo/metadata";
import { articleJsonLd } from "@/lib/seo/structured-data";
import { formatDate } from "@/lib/utils";

type Params = { params: Promise<{ slug: string }> };

// Pre-render every known post; unknown slugs 404 (no on-demand rendering).
export function generateStaticParams() {
  return getPostSlugs().map((slug) => ({ slug }));
}
export const dynamicParams = false;

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return buildMetadata({
    title: post.meta.title,
    description: post.meta.description,
    path: `/blog/${slug}`,
    keywords: post.meta.keywords,
  });
}

export default async function BlogPostPage({ params }: Params) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  // Load the MDX body for this slug (registry holds metadata; MDX holds content).
  const { default: Post } = await import(`@/content/blog/${slug}.mdx`);
  const { meta } = post;

  return (
    <article>
      <header className="border-ink-100 bg-ink-50 border-b py-14 sm:py-16">
        <Container className="max-w-3xl">
          <Link
            href="/blog"
            className="text-ink-500 hover:text-ink-900 inline-flex items-center gap-1.5 text-sm font-medium transition-colors"
          >
            <ArrowLeft size={16} />
            All insights
          </Link>
          <div className="mt-6 flex items-center gap-3">
            <Badge>{pillarLabels[meta.pillar]}</Badge>
            <span className="text-ink-400 text-sm">{meta.readingTime}</span>
          </div>
          <h1 className="text-ink-900 mt-4 text-3xl text-balance sm:text-4xl">
            {meta.title}
          </h1>
          <time
            className="text-ink-400 mt-4 block text-sm"
            dateTime={meta.date}
          >
            {formatDate(meta.date)}
          </time>
        </Container>
      </header>

      <Container className="max-w-3xl py-14 sm:py-16">
        <div className="prose prose-lg prose-headings:font-serif prose-headings:text-ink-900 prose-p:text-ink-600 prose-li:text-ink-600 prose-strong:text-ink-900 prose-a:text-gold-700 prose-a:font-medium hover:prose-a:text-gold-600 max-w-none">
          <Post />
        </div>
      </Container>

      <CtaBand
        title="Ready to secure your next elite hire?"
        description="Let our team build a pre-vetted, exact-match shortlist for your IT or legal search."
      />

      <JsonLd data={articleJsonLd(meta, slug)} />
    </article>
  );
}
