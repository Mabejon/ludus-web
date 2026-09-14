import type { Metadata } from "next";

import { PageHeader } from "@/components/sections/page-header";
import { ProseSection } from "@/components/sections/prose-section";
import { CtaSection } from "@/components/sections/cta-section";
import { ConversionEvent } from "@/components/analytics/conversion-event";

// Plazo de respuesta — edítalo aquí si cambia. Mismo texto ya aprobado en /contacto.
const RESPONSE_TIME = "24-48h";

export const metadata: Metadata = {
  title: "Gracias",
  description: "Tu mensaje se ha enviado correctamente.",
  robots: { index: false, follow: false },
};

export default function GraciasPage() {
  return (
    <>
      <ConversionEvent event="generate_lead" />
      <PageHeader
        eyebrow="Mensaje enviado"
        title="¡Gracias por escribir!"
        subtitle="Tu mensaje ha llegado correctamente."
      />
      <ProseSection>
        <p>
          Te responderé en menos de {RESPONSE_TIME} para concretar la primera cita.
          Mientras tanto, no tienes que hacer nada más — ya tengo tu mensaje.
        </p>
      </ProseSection>
      <CtaSection
        ctaLabel="Volver a Inicio"
        href="/"
        secondaryCtaLabel="Ver servicios"
        secondaryHref="/servicios"
      />
    </>
  );
}
