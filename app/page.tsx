import type { Metadata } from "next";

import { siteConfig } from "@/data/site";
import { Hero } from "@/components/sections/hero";
import { TrustBar } from "@/components/sections/trust-bar";
import { EmotionalConnection } from "@/components/sections/emotional-connection";
import { ServicesOverview } from "@/components/sections/services-overview";
import { TrustSection } from "@/components/sections/trust-section";
import { CtaSection } from "@/components/sections/cta-section";

export const metadata: Metadata = {
  title: {
    absolute: "Psicóloga Educativa en Retiro, Madrid | Ludus — Aprendizaje, TDAH y Desarrollo",
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: siteConfig.professional.name,
  jobTitle: siteConfig.professional.role,
  hasCredential: siteConfig.professional.license,
  url: siteConfig.url,
  worksFor: {
    "@type": "Organization",
    name: siteConfig.name,
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <Hero />
      <TrustBar />
      <EmotionalConnection />
      <ServicesOverview heading="Cómo puedo ayudarte" />
      <TrustSection />
      <CtaSection title="Demos el primer paso juntas" ctaLabel="Reserva tu primera cita" />
    </>
  );
}
