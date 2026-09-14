export type BlogCategorySlug =
  | "evaluacion-psicologica-educativa"
  | "tdah-funciones-ejecutivas"
  | "dificultades-aprendizaje"
  | "tea"
  | "tecnicas-estudio-orientacion-vocacional"
  | "orientacion-familias"
  | "divulgacion-general";

export type BlogCategory = {
  slug: BlogCategorySlug;
  title: string;
};

// Las 6 primeras categorías comparten slug con data/services.ts, a propósito,
// para que cada tema del blog se corresponda con un servicio de la web.
// "divulgacion-general" cubre el contenido evergreen del Tier 4 del plan
// editorial que no corresponde a un único servicio.
export const blogCategories: BlogCategory[] = [
  { slug: "evaluacion-psicologica-educativa", title: "Evaluación psicológica educativa" },
  { slug: "tdah-funciones-ejecutivas", title: "TDAH y funciones ejecutivas" },
  { slug: "dificultades-aprendizaje", title: "Dificultades de aprendizaje" },
  { slug: "tea", title: "TEA" },
  {
    slug: "tecnicas-estudio-orientacion-vocacional",
    title: "Técnicas de estudio y orientación vocacional",
  },
  { slug: "orientacion-familias", title: "Orientación a familias" },
  { slug: "divulgacion-general", title: "Divulgación general" },
];
