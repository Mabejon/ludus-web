import type { Metadata } from "next";
import Link from "next/link";

import { getAllSlugs, getPostContent, getPostFrontmatter } from "@/lib/blog";
import { blogPostingJsonLd } from "@/lib/schema";
import { toWhatsAppHref } from "@/lib/utils";
import { siteConfig } from "@/data/site";
import { blogCategories } from "@/data/blog-categories";
import { PageHeader } from "@/components/sections/page-header";
import { Container } from "@/components/layout/container";
import { CtaSection } from "@/components/sections/cta-section";
import { getMDXComponents } from "@/mdx-components";

export async function generateStaticParams() {
  const slugs = await getAllSlugs();
  return slugs.map((slug) => ({ slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const frontmatter = await getPostFrontmatter(slug);
  const socialTitle = `${frontmatter.title} | Ludus`;

  return {
    title: { absolute: socialTitle },
    description: frontmatter.description,
    alternates: { canonical: `/blog/${slug}` },
    openGraph: { title: socialTitle, description: frontmatter.description },
    twitter: { title: socialTitle, description: frontmatter.description },
  };
}

function formatDate(dateStr: string) {
  return new Intl.DateTimeFormat("es-ES", { dateStyle: "long", timeZone: "UTC" }).format(
    new Date(dateStr)
  );
}

const whatsappHref = siteConfig.contact.whatsapp
  ? toWhatsAppHref(siteConfig.contact.whatsapp)
  : undefined;

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { Content, frontmatter, readingTimeMinutes } = await getPostContent(slug);
  const category = blogCategories.find((c) => c.slug === frontmatter.category);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            blogPostingJsonLd({
              title: frontmatter.title,
              description: frontmatter.description,
              url: `${siteConfig.url}/blog/${slug}`,
              publishedAt: frontmatter.publishedAt,
              authorName: siteConfig.professional.name,
            })
          ),
        }}
      />
      <PageHeader
        eyebrow={`${category?.title ?? "Blog"} · ${formatDate(frontmatter.publishedAt)} · ${readingTimeMinutes} min de lectura`}
        title={frontmatter.title}
      />
      <article className="pb-16 md:pb-24">
        <Container className="max-w-2xl">
          <Content components={getMDXComponents()} />
          <p className="mt-12 border-t border-border/60 pt-6 text-sm text-muted-foreground">
            Escrito por{" "}
            <Link href="/sobre-mi" className="font-medium text-foreground hover:text-primary">
              {siteConfig.professional.name}
            </Link>
            , {siteConfig.professional.role} ({siteConfig.professional.license}).
          </p>
        </Container>
      </article>
      <CtaSection
        title="¿Hablamos de tu caso?"
        ctaLabel="Pide tu primera cita"
        secondaryCtaLabel={whatsappHref ? "Escríbeme por WhatsApp" : undefined}
        secondaryHref={whatsappHref}
        secondaryExternal
      />
    </>
  );
}
