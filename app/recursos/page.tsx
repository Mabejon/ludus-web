import type { Metadata } from "next";
import { Calendar, Dices, Sun, Target } from "lucide-react";

import { siteConfig } from "@/data/site";
import { PageHeader } from "@/components/sections/page-header";
import { ProseSection } from "@/components/sections/prose-section";
import { ResourceGrid } from "@/components/sections/resource-grid";
import { CtaSection } from "@/components/sections/cta-section";

const socialTitle = "Recursos y Actividades para Niños | Ludus Psicología Educativa";
const description =
  "Descarga cuadernos de verano, calendarios de adviento con actividades y juegos para lectoescritura y atención. Recursos creados por una psicóloga educativa.";

export const metadata: Metadata = {
  title: { absolute: socialTitle },
  description,
  openGraph: { title: socialTitle, description },
  twitter: { title: socialTitle, description },
};

const resources = [
  {
    icon: Calendar,
    title: "Calendario de adviento con actividades",
    description: "Una actividad breve cada día de diciembre.",
  },
  {
    icon: Sun,
    title: "Cuaderno de verano",
    description: "Actividades para mantener lo aprendido durante el curso.",
  },
  {
    icon: Dices,
    title: "Juegos de lectoescritura",
    description: "Actividades para reforzar la lectura y la escritura de forma divertida.",
  },
  {
    icon: Target,
    title: "Juegos de atención",
    description: "Actividades para entrenar la atención y la concentración jugando.",
  },
];

export default function RecursosPage() {
  return (
    <>
      <PageHeader
        eyebrow={`${siteConfig.location.area} — ${siteConfig.location.modality}`}
        title="Recursos"
        subtitle="Materiales pensados para practicar en casa, jugando"
      />
      <ProseSection>
        <p>
          Actividades y cuadernillos que he creado para reforzar el aprendizaje, la atención y
          la lectoescritura de forma amena — sin que parezca &ldquo;más deberes&rdquo;.
        </p>
      </ProseSection>
      <ResourceGrid resources={resources} />
      <CtaSection ctaLabel="Pide tu primera cita" />
    </>
  );
}
