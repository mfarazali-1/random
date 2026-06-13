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
      className="group border-ink-800 hover:border-ink-700 bg-ink-900 flex flex-col rounded-2xl border p-7 transition-colors"
    >
      <div className="flex items-center gap-3">
        <Badge>{pillarLabels[meta.pillar]}</Badge>
        <span className="text-ink-500 text-xs">{meta.readingTime}</span>
      </div>
      <h3 className="text-ink-50 mt-4 text-xl leading-snug transition-colors group-hover:text-blue-400">
        {meta.title}
      </h3>
      <p className="text-ink-300 mt-3 line-clamp-3 leading-relaxed">
        {meta.description}
      </p>
      <div className="border-ink-800 mt-5 flex items-center justify-between border-t pt-4">
        <time className="text-ink-500 text-sm" dateTime={meta.date}>
          {formatDate(meta.date)}
        </time>
        <span className="inline-flex items-center gap-1 text-sm font-medium text-blue-400">
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
