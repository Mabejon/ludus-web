import type { MetadataRoute } from "next";

import { siteConfig } from "@/data/site";
import { legalNav } from "@/data/navigation";
import { services } from "@/data/services";
import { getAllPosts } from "@/lib/blog";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = siteConfig.url;

  const staticRoutes = ["", "/sobre-mi", "/servicios", "/recursos", "/blog", "/contacto"];
  const serviceRoutes = services.map((service) => `/servicios/${service.slug}`);
  const legalRoutes = legalNav.map((item) => item.href);

  const routes = [...staticRoutes, ...serviceRoutes, ...legalRoutes];
  const staticEntries: MetadataRoute.Sitemap = routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route.startsWith("/servicios") ? 0.8 : 0.6,
  }));

  const posts = await getAllPosts();
  const postEntries: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.publishedAt),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticEntries, ...postEntries];
}
