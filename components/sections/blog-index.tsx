"use client";

import { useState } from "react";

import { cn } from "@/lib/utils";
import type { BlogCategory } from "@/data/blog-categories";
import type { BlogPost } from "@/lib/blog";
import { BlogCard } from "@/components/sections/blog-card";

export function BlogIndex({
  posts,
  categories,
}: {
  posts: BlogPost[];
  categories: BlogCategory[];
}) {
  const [selected, setSelected] = useState<string | null>(null);

  if (posts.length === 0) {
    return (
      <p className="text-center text-muted-foreground">
        Todavía no hay artículos publicados — vuelve pronto.
      </p>
    );
  }

  const usedCategories = categories.filter((category) =>
    posts.some((post) => post.category === category.slug)
  );
  const filteredPosts = selected ? posts.filter((post) => post.category === selected) : posts;

  return (
    <div>
      {usedCategories.length > 1 && (
        <div className="flex flex-wrap justify-center gap-2">
          <button
            type="button"
            onClick={() => setSelected(null)}
            className={cn(
              "rounded-full border px-3 py-1 text-sm transition-colors",
              selected === null
                ? "border-primary bg-primary text-primary-foreground"
                : "border-border text-muted-foreground hover:bg-muted"
            )}
          >
            Todos
          </button>
          {usedCategories.map((category) => (
            <button
              key={category.slug}
              type="button"
              onClick={() => setSelected(category.slug)}
              className={cn(
                "rounded-full border px-3 py-1 text-sm transition-colors",
                selected === category.slug
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border text-muted-foreground hover:bg-muted"
              )}
            >
              {category.title}
            </button>
          ))}
        </div>
      )}
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredPosts.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
}
