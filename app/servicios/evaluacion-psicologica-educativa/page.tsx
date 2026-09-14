import type { Metadata } from "next";

import { faqPageJsonLd } from "@/lib/schema";
import { toWhatsAppHref } from "@/lib/utils";
import { siteConfig } from "@/data/site";
import { PageHeader } from "@/components/sections/page-header";
import { TrustBar } from "@/components/sections/trust-bar";
import { ProseSection } from "@/components/sections/prose-section";
import { FaqSection } from "@/components/sections/faq-section";
import { CtaSection } from "@/components/sections/cta-section";

const socialTitle = "Evaluación Psicológica Educativa en Retiro, Madrid | Ludus";
const description =
  "Evaluación psicológica educativa para niños y adolescentes en Retiro, Madrid. Proceso personalizado, pruebas validadas y devolución de resultados. Pide tu primera cita.";

export const metadata: Metadata = {
  title: { absolute: socialTitle },
  description,
  openGraph: { title: socialTitle, description },
  twitter: { title: socialTitle, description },
};

const faqs = [
  {
    question: "¿Tiene sentido hacer una evaluación aunque todavía no sepamos qué le está pasando a nuestro hijo o hija?",
    answer:
      "Sí — no hace falta llegar con una sospecha concreta. La evaluación existe precisamente para eso: entender qué está ocurriendo cuando algo no encaja pero no sabéis muy bien el qué.",
  },
  {
    question: "¿Qué pasa si al finalizar la evaluación no hay ningún diagnóstico concreto?",
    answer:
      "Que no haya un diagnóstico no significa que no pase nada, ni que vuestras preocupaciones no sean reales. En algunos casos, la evaluación muestra que el desarrollo es adecuado para la edad y que las dificultades se explican por el momento evolutivo o por factores del contexto. En otros, señala aspectos que conviene observar con el tiempo, sin que todavía cumplan criterios para un diagnóstico específico — a veces con una intervención y una evaluación posterior para valorarlo de nuevo. En cualquier caso, no os vais con un simple \"no tiene nada\": siempre recibís una explicación clara de los resultados, orientaciones personalizadas y recomendaciones sobre los siguientes pasos.",
  },
  {
    question: "¿La evaluación sirve solo para diagnosticar o también para orientar sobre cómo ayudarle?",
    answer:
      "La devolución de resultados no se queda solo en un diagnóstico o su ausencia: siempre incluye una explicación clara de lo que hemos encontrado y, si procede, orientación sobre los siguientes pasos.",
  },
  {
    question: "¿Cuánto dura el proceso de evaluación?",
    answer:
      "Varía según cada caso, pero suele completarse en dos o tres sesiones, además de la entrevista inicial y la reunión de devolución final.",
  },
  {
    question: "¿Necesitamos aportar informes del colegio o de otros profesionales?",
    answer:
      "No es un requisito. Si tenéis informes escolares, psicopedagógicos o de otros profesionales, son muy útiles porque aportan información complementaria. Si no los tenéis, la evaluación se puede hacer igualmente: la información necesaria se recoge durante la entrevista inicial y a lo largo del propio proceso.",
  },
  {
    question: "¿Estamos obligados a hacer la intervención contigo después de la evaluación?",
    answer:
      "No. Si se identifica una dificultad y queréis intervención, puedo diseñarla con vosotros, pero no es obligatorio — también podéis continuar con otro profesional o quedaros solo con las orientaciones de la devolución.",
  },
];

const whatsappHref = siteConfig.contact.whatsapp
  ? toWhatsAppHref(siteConfig.contact.whatsapp)
  : undefined;

export default function EvaluacionPsicologicaEducativaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageJsonLd(faqs)) }}
      />
      <PageHeader
        eyebrow={`${siteConfig.location.area} — ${siteConfig.location.modality}`}
        title="Evaluación psicológica educativa"
        subtitle="El punto de partida cuando algo no termina de encajar y todavía no sabéis muy bien qué es"
      />
      <TrustBar />
      <ProseSection>
        <p>
          No hace falta tener claro qué le está pasando a tu hijo o hija para pedir una
          evaluación. De hecho, ese es precisamente el sentido de este servicio: entender qué
          está ocurriendo, con calma y sin prisas, antes de ponerle nombre a nada.
        </p>
        <p>
          Es un servicio independiente — no necesitáis haber pasado antes por ningún otro
          proceso, ni tener ya una sospecha concreta. Simplemente algo no termina de encajar, y
          buscáis claridad.
        </p>
      </ProseSection>
      <ProseSection heading="Cómo es el proceso">
        <p>
          Empezamos con una entrevista inicial, en la que hablamos de las demandas, las
          dificultades y las sospechas que tenéis como familia — es el punto de partida para
          saber qué necesita evaluarse en cada caso concreto.
        </p>
        <p>
          A partir de ahí, la evaluación se desarrolla en dos o tres sesiones, repartidas para
          evitar que el niño o adolescente llegue fatigado y pueda rendir con su capacidad
          óptima en las pruebas.
        </p>
        <p>
          El proceso termina siempre con una reunión de devolución de resultados, donde os
          explico con claridad qué hemos encontrado y qué significa. Si además queréis un
          informe por escrito, es posible solicitarlo como servicio adicional.
        </p>
      </ProseSection>
      <ProseSection heading="Pruebas adaptadas a cada caso" muted>
        <p>
          Utilizo pruebas estandarizadas y validadas científicamente para evaluar las áreas que
          sean necesarias en cada caso: capacidad cognitiva, atención, funciones ejecutivas,
          lenguaje o lectoescritura, entre otras.
        </p>
        <p>
          No existe una batería fija que se aplique igual a todas las familias: lo que se evalúa
          depende de lo que cada niño o adolescente necesita, no al revés.
        </p>
      </ProseSection>
      <ProseSection heading="Qué pasa después">
        <p>
          Si durante la evaluación se identifica una dificultad específica, podemos diseñar
          juntas una intervención adaptada a sus necesidades.
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
