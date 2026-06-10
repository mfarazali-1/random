import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { formatDate } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { pillarLabels } from "@/features/blog/lib/posts";
import type { PostMeta } from "@/types";

export function PostCard({ slug, meta }: { slug: string; meta: PostMeta }) {
  return (
    <Link
      href={`/blog/${slug}`}
      className="group border-ink-100 flex flex-col rounded-2xl border bg-white p-7 transition-shadow hover:shadow-md"
    >
      <div className="flex items-center gap-3">
        <Badge>{pillarLabels[meta.pillar]}</Badge>
        <span className="text-ink-400 text-xs">{meta.readingTime}</span>
      </div>
      <h3 className="text-ink-900 group-hover:text-ink-700 mt-4 text-xl leading-snug">
        {meta.title}
      </h3>
      <p className="text-ink-500 mt-3 line-clamp-3 leading-relaxed">
        {meta.description}
      </p>
      <div className="border-ink-100 mt-5 flex items-center justify-between border-t pt-4">
        <time className="text-ink-400 text-sm" dateTime={meta.date}>
          {formatDate(meta.date)}
        </time>
        <span className="text-gold-600 inline-flex items-center gap-1 text-sm font-medium">
          Read
          <ArrowUpRight
            size={16}
            className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </span>
      </div>
    </Link>
  );
}
