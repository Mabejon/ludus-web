import type { Metadata } from "next";

import { faqPageJsonLd } from "@/lib/schema";
import { toWhatsAppHref } from "@/lib/utils";
import { siteConfig } from "@/data/site";
import { PageHeader } from "@/components/sections/page-header";
import { TrustBar } from "@/components/sections/trust-bar";
import { ProseSection } from "@/components/sections/prose-section";
import { EvaluationSection } from "@/components/sections/evaluation-section";
import { FaqSection } from "@/components/sections/faq-section";
import { CtaSection } from "@/components/sections/cta-section";

const socialTitle = "Psicóloga Educativa TEA en Retiro, Madrid | Ludus";
const description =
  "Evaluación e intervención psicoeducativa en TEA para niños y adolescentes en Retiro, Madrid. Un acompañamiento adaptado a su forma de ver el mundo.";

export const metadata: Metadata = {
  title: { absolute: socialTitle },
  description,
  openGraph: { title: socialTitle, description },
  twitter: { title: socialTitle, description },
};

const tools = [
  {
    name: "WISC-V",
    descriptor: "Perfil cognitivo completo",
    explanation:
      "Una prueba de referencia que ofrece una visión completa de cómo razona, memoriza y procesa la información tu hijo o hija.",
  },
  {
    name: "NEPSY-II",
    descriptor: "Evaluación neuropsicológica",
    explanation:
      "Una evaluación más amplia de cómo funciona el cerebro en distintas áreas, que ayuda a entender mejor sus fortalezas y las áreas en las que puede necesitar más apoyo.",
  },
];

const faqs = [
  {
    question: "¿A qué edad se puede evaluar el TEA?",
    answer:
      "Cuanto antes se detecten las señales, mejor, aunque puede evaluarse a cualquier edad, adaptando el proceso al momento evolutivo del niño o adolescente.",
  },
  {
    question: "¿La evaluación da un diagnóstico?",
    answer:
      "El diagnóstico clínico de TEA corresponde a psiquiatría o neuropediatría; mi evaluación aporta un perfil psicoeducativo detallado y trabajo en coordinación con estos profesionales.",
  },
];

const whatsappHref = siteConfig.contact.whatsapp
  ? toWhatsAppHref(siteConfig.contact.whatsapp)
  : undefined;

export default function TeaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageJsonLd(faqs)) }}
      />
      <PageHeader
        eyebrow={`${siteConfig.location.area} — ${siteConfig.location.modality}`}
        title="TEA — Trastorno del Espectro Autista"
        subtitle="Un acompañamiento adaptado a su forma de ver y entender el mundo"
      />
      <TrustBar />
      <ProseSection>
        <p>
          Cada niño o adolescente con TEA tiene su propia forma de comunicarse, de
          relacionarse y de procesar lo que le rodea.
        </p>
        <p>
          El objetivo no es que encaje en un molde, sino entender cómo funciona su mundo y
          acompañarle desde ahí — a él y a su familia.
        </p>
      </ProseSection>
      <EvaluationSection
        heading="Evaluación psicoeducativa"
        intro="Valoro el perfil cognitivo, comunicativo y de funcionamiento ejecutivo para entender las fortalezas y necesidades específicas de cada niño o adolescente."
        tools={tools}
        closing="Al final del proceso recibís un informe claro y una reunión de devolución de información."
      />
      <ProseSection heading="Intervención psicoeducativa">
        <p>
          Trabajo aspectos como la comunicación, las habilidades sociales, la flexibilidad
          cognitiva y la gestión de la rutina y los cambios, siempre partiendo de sus intereses
          y de su forma particular de aprender.
        </p>
        <p>
          También oriento a las familias y coordino con el colegio para que el apoyo sea
          coherente en todos los entornos.
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
