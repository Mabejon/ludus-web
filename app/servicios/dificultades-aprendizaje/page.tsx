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

const socialTitle = "Dislexia, Disgrafía y Discalculia | Psicóloga Educativa Retiro, Madrid | Ludus";
const description =
  "Evaluación e intervención en dislexia, disgrafía, discalculia y trastornos del lenguaje para niños y adolescentes en Retiro, Madrid. Psicóloga educativa colegiada.";

export const metadata: Metadata = {
  title: { absolute: socialTitle },
  description,
  openGraph: { title: socialTitle, description },
  twitter: { title: socialTitle, description },
};

const signs = [
  "Lee más despacio que sus compañeros",
  "Confunde letras",
  "Le cuesta escribir sin errores",
  "Los números no terminan de tener sentido",
];

const tools = [
  {
    name: "PROLEC",
    descriptor: "Procesos lectores",
    explanation:
      "Analiza cómo lee: cómo reconoce las palabras, cómo comprende lo que lee y con qué fluidez lo hace.",
  },
  {
    name: "TEMA-3",
    descriptor: "Competencia matemática",
    explanation:
      "Valora cómo entiende y utiliza los números, desde los conceptos básicos hasta el cálculo.",
  },
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
      "Una evaluación más amplia de cómo funciona el cerebro en distintas áreas, que ayuda a entender mejor el origen de las dificultades.",
  },
];

const faqs = [
  {
    question: "¿A qué edad se puede detectar la dislexia?",
    answer:
      "Aunque hay señales tempranas, el diagnóstico se afina especialmente a partir de 2º-3º de primaria, cuando la lectura ya debería estar consolidada.",
  },
  {
    question: "¿La evaluación da un diagnóstico?",
    answer:
      "Sí, la evaluación psicológica educativa puede dar lugar a un diagnóstico de dificultad específica del aprendizaje.",
  },
  {
    question: "¿Se puede intervenir sin pasar por la evaluación completa?",
    answer: "Sí, la intervención es un servicio independiente.",
  },
];

const whatsappHref = siteConfig.contact.whatsapp
  ? toWhatsAppHref(siteConfig.contact.whatsapp)
  : undefined;

export default function DificultadesAprendizajePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageJsonLd(faqs)) }}
      />
      <PageHeader
        eyebrow={`${siteConfig.location.area} — ${siteConfig.location.modality}`}
        title="Dificultades de aprendizaje"
        subtitle="Para que su forma particular de aprender no sea un obstáculo"
      />
      <TrustBar />
      <RecognitionSigns
        signs={signs}
        consequence="Cada esfuerzo parece no ser suficiente, y eso desgasta — tanto al niño como a la familia."
        reframe="Detrás de estas dificultades no hay falta de esfuerzo ni de inteligencia: hay una forma distinta de procesar la información, que con el apoyo adecuado se puede entender y trabajar."
      />
      <EvaluationSection
        heading="Evaluación de dificultades de aprendizaje"
        intro="Evalúo los procesos implicados en la lectura, la escritura, el cálculo y el lenguaje con pruebas estandarizadas."
        tools={tools}
        closing="Al final del proceso recibís un informe claro y una reunión de devolución de información."
      />
      <ProseSection heading="Intervención en dificultades de aprendizaje">
        <p>
          Trabajamos juntos para potenciar su forma de aprender y encontrar las estrategias que
          mejor le funcionan — en lectura, escritura, cálculo o lenguaje, según cada caso.
        </p>
        <p>
          También oriento a las familias y coordino con el colegio para que las adaptaciones
          lleguen también al aula.
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
