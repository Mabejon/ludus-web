export type Service = {
  title: string;
  slug: string;
  summary: string;
};

// Copy tomado literalmente de la sección 5.3 del documento (Servicios · resumen).
export const services: Service[] = [
  {
    title: "Evaluación psicológica educativa",
    slug: "evaluacion-psicologica-educativa",
    summary: "El punto de partida cuando algo no termina de encajar y todavía no sabéis muy bien qué es.",
  },
  {
    title: "TDAH y funciones ejecutivas",
    slug: "tdah-funciones-ejecutivas",
    summary:
      "Para que concentrarse, organizarse y terminar las tareas deje de ser una lucha diaria, en casa y en el estudio.",
  },
  {
    title: "Dificultades de aprendizaje",
    slug: "dificultades-aprendizaje",
    summary:
      "Dislexia, disgrafía, discalculia y trastornos del lenguaje. Trabajamos juntos para potenciar su forma de aprender y encontrar las estrategias que mejor le funcionan.",
  },
  {
    title: "TEA",
    slug: "tea",
    summary:
      "Un acompañamiento adaptado a su forma de ver y entender el mundo, siempre desde el respeto a su ritmo.",
  },
  {
    title: "Técnicas de estudio y orientación vocacional",
    slug: "tecnicas-estudio-orientacion-vocacional",
    summary:
      "Para adolescentes que necesitan organizarse mejor o que empiezan a preguntarse qué camino seguir.",
  },
  {
    title: "Orientación a familias",
    slug: "orientacion-familias",
    summary: "Porque acompañar también se aprende. Pautas y apoyo para el día a día en casa.",
  },
];
