import { getPostsByPillar, pillarLabels } from "@/features/blog/lib/posts";
import { PostCard } from "./post-card";
import type { BlogPillar } from "@/types";

const pillars: BlogPillar[] = ["it", "legal"];

/** Blog index grouped by content pillar (IT vs Legal). */
export function PostList() {
  return (
    <div className="space-y-16">
      {pillars.map((pillar) => {
        const posts = getPostsByPillar(pillar);
        if (posts.length === 0) return null;
        return (
          <div key={pillar}>
            <h2 className="text-ink-900 text-2xl">{pillarLabels[pillar]}</h2>
            <div className="mt-7 grid gap-6 md:grid-cols-2">
              {posts.map((post) => (
                <PostCard key={post.slug} slug={post.slug} meta={post.meta} />
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
