import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { blogCategories } from "@/data/blog-categories";
import type { BlogPost } from "@/lib/blog";

function formatDate(dateStr: string) {
  return new Intl.DateTimeFormat("es-ES", { dateStyle: "long", timeZone: "UTC" }).format(
    new Date(dateStr)
  );
}

export function BlogCard({ post }: { post: BlogPost }) {
  const category = blogCategories.find((c) => c.slug === post.category);

  return (
    <Link href={`/blog/${post.slug}`} className="group block h-full">
      <Card className="h-full transition-shadow group-hover:shadow-md">
        <CardHeader>
          <div className="flex flex-wrap items-center justify-between gap-2">
            {category && <Badge variant="secondary">{category.title}</Badge>}
            <span className="text-xs text-muted-foreground">{formatDate(post.publishedAt)}</span>
          </div>
          <CardTitle className="mt-3 text-lg font-semibold group-hover:text-primary">
            {post.title}
          </CardTitle>
          <CardDescription className="mt-1 line-clamp-3">{post.description}</CardDescription>
        </CardHeader>
      </Card>
    </Link>
  );
}
