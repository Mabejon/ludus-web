import type { Metadata } from "next";

import { siteConfig } from "@/data/site";
import { blogCategories } from "@/data/blog-categories";
import { getAllPosts } from "@/lib/blog";
import { PageHeader } from "@/components/sections/page-header";
import { BlogIndex } from "@/components/sections/blog-index";
import { Container } from "@/components/layout/container";

const socialTitle = "Blog | Ludus Psicología Educativa";
const description =
  "Artículos sobre TDAH, dificultades de aprendizaje, TEA, técnicas de estudio y orientación a familias, escritos por una psicóloga educativa colegiada en Retiro, Madrid.";

export const metadata: Metadata = {
  title: { absolute: socialTitle },
  description,
  openGraph: { title: socialTitle, description },
  twitter: { title: socialTitle, description },
};

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <>
      <PageHeader
        eyebrow={`${siteConfig.location.area} — ${siteConfig.location.modality}`}
        title="Blog"
        subtitle="Artículos sobre aprendizaje, TDAH, dificultades y desarrollo, escritos por una psicóloga educativa"
      />
      <section className="pb-16 md:pb-24">
        <Container>
          <BlogIndex posts={posts} categories={blogCategories} />
        </Container>
      </section>
    </>
  );
}
