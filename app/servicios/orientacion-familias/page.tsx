import type { Metadata } from "next";

import { faqPageJsonLd } from "@/lib/schema";
import { toWhatsAppHref } from "@/lib/utils";
import { siteConfig } from "@/data/site";
import { PageHeader } from "@/components/sections/page-header";
import { TrustBar } from "@/components/sections/trust-bar";
import { ProseSection } from "@/components/sections/prose-section";
import { FaqSection } from "@/components/sections/faq-section";
import { CtaSection } from "@/components/sections/cta-section";

const socialTitle = "Orientación a Familias | Psicóloga Educativa Retiro, Madrid | Ludus";
const description =
  "Sesiones específicas de orientación a familias: gestión de rabietas, límites y pautas educativas, en paralelo al trabajo con el niño o adolescente. Retiro, Madrid.";

export const metadata: Metadata = {
  title: { absolute: socialTitle },
  description,
  openGraph: { title: socialTitle, description },
  twitter: { title: socialTitle, description },
};

const faqs = [
  {
    question: "¿Es necesario que mi hijo también esté en proceso conmigo?",
    answer:
      "Normalmente estas sesiones se dan en paralelo al trabajo con el niño o adolescente, para que ambos procesos avancen en la misma dirección.",
  },
  {
    question: "¿Cuántas sesiones suelen ser necesarias?",
    answer:
      "Depende de cada familia y del objetivo — algunas necesitan pautas puntuales, otras un acompañamiento más continuado.",
  },
];

const whatsappHref = siteConfig.contact.whatsapp
  ? toWhatsAppHref(siteConfig.contact.whatsapp)
  : undefined;

export default function OrientacionFamiliasPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageJsonLd(faqs)) }}
      />
      <PageHeader
        eyebrow={`${siteConfig.location.area} — ${siteConfig.location.modality}`}
        title="Orientación a familias"
        subtitle="Porque acompañar también se aprende"
      />
      <TrustBar />
      <ProseSection>
        <p>
          Las rabietas, los límites que no terminan de sostenerse, las mismas discusiones
          repitiéndose cada día... Muchas veces el trabajo con el niño avanza mejor cuando en
          casa también hay pautas claras y consistentes.
        </p>
      </ProseSection>
      <ProseSection heading="Sesiones específicas para la familia">
        <p>
          En paralelo al trabajo directo con el niño o adolescente, dedicamos sesiones
          concretas a la familia: cómo gestionar las rabietas, cómo poner límites de forma
          firme y a la vez cercana, y cómo mantener la coherencia entre lo que se trabaja en
          sesión y lo que ocurre en casa.
        </p>
        <p>
          No se trata de pautas genéricas, sino de estrategias adaptadas a la situación
          concreta de cada familia y al momento en que se encuentra el niño o adolescente.
        </p>
      </ProseSection>
      <FaqSection items={faqs} />
      <CtaSection
        ctaLabel="Pide tu primera cita"
        secondaryCtaLabel={whatsappHref ? "Escríbeme por WhatsApp" : undefined}
        secondaryHref={whatsappHref}
        secondaryExternal
      />
    </>
  );
}
