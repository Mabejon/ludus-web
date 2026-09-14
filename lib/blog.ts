import { readdir, readFile } from "node:fs/promises";
import path from "node:path";
import type { ReactElement } from "react";
import { evaluate } from "@mdx-js/mdx";
import remarkGfm from "remark-gfm";
import * as jsxRuntime from "react/jsx-runtime";

import type { BlogCategorySlug } from "@/data/blog-categories";

const BLOG_DIR = path.join(process.cwd(), "content/blog");

export type BlogFrontmatter = {
  /** Título del artículo, usado como H1 y como título social/SEO. */
  title: string;
  /** Meta descripción y extracto mostrado en las tarjetas del índice. */
  description: string;
  category: BlogCategorySlug;
  /** Fecha real de publicación en la web, formato "YYYY-MM-DD". */
  publishedAt: string;
};

export type BlogPost = BlogFrontmatter & { slug: string };

type CompiledPost = {
  Content: (props: { components?: Record<string, unknown> }) => ReactElement;
  frontmatter: BlogFrontmatter;
  readingTimeMinutes: number;
};

const WORDS_PER_MINUTE = 200;

function estimateReadingTimeMinutes(mdxSource: string): number {
  const body = mdxSource.replace(/export const frontmatter[\s\S]*?};/, "");
  const wordCount = body.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(wordCount / WORDS_PER_MINUTE));
}

/**
 * Cada .mdx en content/blog/ es un artículo — el nombre de archivo es el
 * slug. Se leen y compilan desde el sistema de archivos en vez de con
 * `import()`, para que el sitio no dependa de que exista al menos un
 * artículo: con content/blog/ vacío (el estado real hasta el primer
 * artículo), todo sigue funcionando.
 */
export async function getAllSlugs(): Promise<string[]> {
  const files = await readdir(BLOG_DIR);
  return files.filter((file) => file.endsWith(".mdx")).map((file) => file.replace(/\.mdx$/, ""));
}

async function compilePost(slug: string): Promise<CompiledPost> {
  const source = await readFile(path.join(BLOG_DIR, `${slug}.mdx`), "utf8");
  const { default: Content, frontmatter } = await evaluate(source, {
    ...jsxRuntime,
    baseUrl: import.meta.url,
    remarkPlugins: [remarkGfm],
  });
  return {
    Content: Content as CompiledPost["Content"],
    frontmatter: frontmatter as BlogFrontmatter,
    readingTimeMinutes: estimateReadingTimeMinutes(source),
  };
}

export async function getPostFrontmatter(slug: string): Promise<BlogFrontmatter> {
  const { frontmatter } = await compilePost(slug);
  return frontmatter;
}

export async function getPostContent(slug: string): Promise<CompiledPost> {
  return compilePost(slug);
}

export async function getAllPosts(): Promise<BlogPost[]> {
  const slugs = await getAllSlugs();
  const posts = await Promise.all(
    slugs.map(async (slug) => ({ slug, ...(await getPostFrontmatter(slug)) }))
  );
  return posts.sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));
}

export async function getPostsByCategory(category: BlogCategorySlug): Promise<BlogPost[]> {
  const posts = await getAllPosts();
  return posts.filter((post) => post.category === category);
}
