import type { Metadata } from "next";

import { PageHeader } from "@/components/sections/page-header";
import { ServicesOverview } from "@/components/sections/services-overview";
import { CtaSection } from "@/components/sections/cta-section";

const title = "Servicios";
const socialTitle = "Servicios | Ludus";
const description =
  "No todos los procesos empiezan igual. Por eso el primer paso siempre es entender qué está pasando antes de decidir cómo avanzar juntos.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: { title: socialTitle, description },
  twitter: { title: socialTitle, description },
};

export default function ServiciosPage() {
  return (
    <>
      <PageHeader
        eyebrow="Servicios"
        title="Un acompañamiento adaptado a lo que cada familia necesita"
        subtitle={description}
      />
      <ServicesOverview />
      <CtaSection
        description="¿No sabes por dónde empezar? Si no tienes claro qué servicio necesitas, escríbeme y lo vemos juntas en la primera toma de contacto."
        ctaLabel="Contacta conmigo"
      />
    </>
  );
}
