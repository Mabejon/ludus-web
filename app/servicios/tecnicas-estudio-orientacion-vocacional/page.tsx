import type { Metadata } from "next";

import { faqPageJsonLd } from "@/lib/schema";
import { toWhatsAppHref } from "@/lib/utils";
import { siteConfig } from "@/data/site";
import { PageHeader } from "@/components/sections/page-header";
import { TrustBar } from "@/components/sections/trust-bar";
import { ProseSection } from "@/components/sections/prose-section";
import { FaqSection } from "@/components/sections/faq-section";
import { CtaSection } from "@/components/sections/cta-section";

const socialTitle =
  "Técnicas de Estudio y Orientación Vocacional para Adolescentes | Retiro, Madrid | Ludus";
const description =
  "Técnicas de estudio y orientación vocacional para adolescentes en Retiro, Madrid. Aprende a organizarte mejor y a decidir tu futuro académico con apoyo profesional.";

export const metadata: Metadata = {
  title: { absolute: socialTitle },
  description,
  openGraph: { title: socialTitle, description },
  twitter: { title: socialTitle, description },
};

const faqs = [
  {
    question: "¿A partir de qué edad tiene sentido la orientación vocacional?",
    answer:
      "Suele ser más útil a partir de 3º-4º de la ESO, cuando empiezan a tomarse decisiones académicas reales.",
  },
  {
    question: "¿Las técnicas de estudio sirven para cualquier curso?",
    answer: "Sí, se adaptan tanto a primaria como a secundaria y bachillerato.",
  },
  {
    question: "¿Cuántas sesiones suele necesitar el proceso?",
    answer:
      "Varía según el objetivo: la orientación vocacional suele tener un número de sesiones más cerrado, mientras que las técnicas de estudio se trabajan de forma más continuada durante el curso.",
  },
];

const whatsappHref = siteConfig.contact.whatsapp
  ? toWhatsAppHref(siteConfig.contact.whatsapp)
  : undefined;

export default function TecnicasEstudioOrientacionVocacionalPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageJsonLd(faqs)) }}
      />
      <PageHeader
        eyebrow={`${siteConfig.location.area} — ${siteConfig.location.modality}`}
        title="Técnicas de estudio y orientación vocacional"
        subtitle="Para estudiar con menos esfuerzo y más resultado, y para empezar a ver con claridad qué camino seguir"
      />
      <TrustBar />
      <ProseSection>
        <p>
          Estudiar muchas horas no siempre significa estudiar bien. Muchos adolescentes se
          esfuerzan sin ver resultados, no saben por dónde empezar a organizarse, o llegan a
          los exámenes con la sensación de no haber aprendido nada.
        </p>
        <p>
          Y a esto se suma, según la edad, una pregunta que genera bastante incertidumbre:
          ¿qué estudio después?
        </p>
      </ProseSection>
      <ProseSection heading="Técnicas de estudio">
        <p>
          Trabajamos la planificación, la gestión del tiempo, los métodos de estudio
          adaptados a cada asignatura y la preparación de exámenes — no técnicas genéricas,
          sino las que realmente encajan con su forma de aprender.
        </p>
      </ProseSection>
      <ProseSection heading="Orientación vocacional" muted>
        <p>
          Un proceso de autoconocimiento guiado: intereses, aptitudes, valores y expectativas,
          para llegar a la decisión sobre bachillerato, FP o carrera universitaria con
          información real y no solo por descarte o presión externa.
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
