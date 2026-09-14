/**
 * Datos globales del sitio. Fuente única para footer y metadata SEO.
 * Contenido alineado con docs/ludus-web-documento-completo.md — no inventar copy aquí.
 */

export const siteConfig = {
  name: "Ludus · Psicología Educativa",
  shortName: "Ludus",
  tagline: "Aprendizaje y Desarrollo",
  description:
    "Psicología educativa en Retiro, Madrid. Acompaño a familias, niños y adolescentes con dificultades en el aprendizaje — con calma, cercanía y evidencia científica.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  locale: "es_ES",
  professional: {
    name: "María Abejón",
    role: "Psicóloga Educativa",
    license: "Colegiada M-43597",
  },
  location: {
    area: "Retiro, Madrid",
    modality: "Atención presencial y online",
  },
  contact: {
    email: "luduspsicologiaeducativa@gmail.com" as string | null,
    phone: "669693478" as string | null,
    whatsapp: "669693478" as string | null,
  },
  social: {
    instagram: null as string | null,
  },
} as const;
