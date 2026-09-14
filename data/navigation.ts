export type NavItem = {
  title: string;
  href: string;
};

export const mainNav: NavItem[] = [
  { title: "Inicio", href: "/" },
  { title: "Sobre mí", href: "/sobre-mi" },
  { title: "Servicios", href: "/servicios" },
  { title: "Recursos", href: "/recursos" },
  { title: "Blog", href: "/blog" },
  { title: "Contacto", href: "/contacto" },
];

export const legalNav: NavItem[] = [
  { title: "Aviso legal", href: "/aviso-legal" },
  { title: "Política de privacidad", href: "/politica-privacidad" },
  { title: "Política de cookies", href: "/politica-cookies" },
];
