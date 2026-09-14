import type { Metadata } from "next";

import { faqPageJsonLd } from "@/lib/schema";
import { toWhatsAppHref } from "@/lib/utils";
import { siteConfig } from "@/data/site";
import { PageHeader } from "@/components/sections/page-header";
import { TrustBar } from "@/components/sections/trust-bar";
import { RecognitionSigns } from "@/components/sections/recognition-signs";
import { EvaluationSection } from "@/components/sections/evaluation-section";
import { ProseSection } from "@/components/sections/prose-section";
import { FaqSection } from "@/components/sections/faq-section";
import { CtaSection } from "@/components/sections/cta-section";

const socialTitle = "Psicóloga Educativa TDAH en Retiro, Madrid | Ludus";
const description =
  "Evaluación y acompañamiento en TDAH y funciones ejecutivas para niños y adolescentes en Retiro, Madrid. Psicóloga educativa colegiada. Pide tu primera cita.";

export const metadata: Metadata = {
  title: { absolute: socialTitle },
  description,
  openGraph: { title: socialTitle, description },
  twitter: { title: socialTitle, description },
};

const signs = [
  "Los deberes se alargan más de la cuenta",
  "Cuesta empezar",
  "Cuesta terminar",
  "Cuesta mantener la atención más de unos minutos",
  "Se pierden cosas",
  "Se olvidan tareas",
];

const tools = [
  {
    name: "WISC-V",
    descriptor: "Perfil cognitivo completo",
    explanation:
      "Una prueba de referencia que ofrece una visión completa de cómo razona, memoriza y procesa la información tu hijo o hija.",
  },
  {
    name: "ENFEN",
    descriptor: "Funciones ejecutivas",
    explanation:
      "Valora cómo organiza sus tareas, planifica los pasos a seguir y controla sus impulsos — las funciones ejecutivas que están detrás de los deberes y del día a día.",
  },
  {
    name: "D2 / Caras",
    descriptor: "Atención selectiva y sostenida",
    explanation:
      "Mide su capacidad para mantener la atención en una tarea concreta sin distraerse, y durante cuánto tiempo puede sostenerla.",
  },
];

const faqs = [
  {
    question: "¿A qué edad se puede evaluar el TDAH?",
    answer:
      "Se recomienda a partir de primaria, cuando las exigencias de atención, organización y autocontrol aumentan y el perfil se puede valorar con mayor claridad.",
  },
  {
    question: "¿La evaluación da un diagnóstico?",
    answer:
      "Sí, la evaluación psicológica educativa puede dar lugar a un diagnóstico. En los casos que lo requieran, trabajo también en coordinación con psiquiatría o neuropediatría.",
  },
  {
    question: "¿Cuánto dura el proceso de evaluación?",
    answer:
      "Varía según cada caso, pero suele completarse en varias sesiones, con informe y reunión de devolución al final.",
  },
];

const whatsappHref = siteConfig.contact.whatsapp
  ? toWhatsAppHref(siteConfig.contact.whatsapp)
  : undefined;

export default function TdahFuncionesEjecutivasPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageJsonLd(faqs)) }}
      />
      <PageHeader
        eyebrow={`${siteConfig.location.area} — ${siteConfig.location.modality}`}
        title="TDAH y funciones ejecutivas"
        subtitle="Para que concentrarse, organizarse y terminar las tareas deje de ser una lucha diaria"
      />
      <TrustBar />
      <RecognitionSigns
        signs={signs}
        consequence="Cada tarde en casa se convierte en una negociación agotadora para todos."
        reframe="Esto no tiene que ver con la voluntad ni con el esfuerzo — tiene que ver con cómo funciona la atención, la organización y el resto de funciones ejecutivas."
      />
      <EvaluationSection
        heading="Evaluación de TDAH y funciones ejecutivas"
        intro="Uso pruebas estandarizadas y validadas para entender el perfil real de cada niño o adolescente."
        tools={tools}
        closing="Al final del proceso recibís un informe claro y una reunión de devolución de información."
      />
      <ProseSection heading="Intervención en TDAH y funciones ejecutivas">
        <p>
          Enseño estrategias concretas para mejorar la atención, la velocidad de procesamiento,
          la memoria de trabajo, la planificación, la inhibición y el control de impulsos — a
          través de actividades dinámicas y prácticas.
        </p>
        <p>
          También trabajo con las familias: pautas concretas para el día a día en casa, para
          que lo aprendido en sesión se traduzca en menos conflicto y más autonomía real.
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
