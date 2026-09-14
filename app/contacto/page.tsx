import type { Metadata } from "next";

import { siteConfig } from "@/data/site";
import { PageHeader } from "@/components/sections/page-header";
import { ProseSection } from "@/components/sections/prose-section";
import { DirectContact } from "@/components/sections/direct-contact";
import { ContactForm } from "@/components/forms/contact-form";
import { Container } from "@/components/layout/container";

const socialTitle = "Contacto | Psicóloga Educativa en Retiro, Madrid | Ludus";
const description =
  "Contacta con Ludus, psicología educativa en Retiro, Madrid. Formulario, WhatsApp o teléfono. Primera cita disponible en pocos días.";

export const metadata: Metadata = {
  title: { absolute: socialTitle },
  description,
  openGraph: { title: socialTitle, description },
  twitter: { title: socialTitle, description },
};

export default function ContactoPage() {
  return (
    <>
      <PageHeader
        eyebrow={`${siteConfig.location.area} — ${siteConfig.location.modality}`}
        title="Contacto"
        subtitle="Demos el primer paso juntas"
      />
      <ProseSection>
        <p>
          Cuéntame un poco qué está pasando y te responderé en menos de 24-48h para concretar
          la primera cita.
        </p>
      </ProseSection>

      <section className="py-16 md:py-24">
        <Container className="max-w-2xl">
          <h2 className="text-center font-heading text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            Escríbeme
          </h2>
          <div className="mt-8">
            <ContactForm />
          </div>
        </Container>
      </section>

      <DirectContact />

      <ProseSection heading="Dónde estoy">
        <p>Consulta en {siteConfig.location.area}. También ofrezco sesiones online.</p>
      </ProseSection>

      <ProseSection heading="Antes de escribirme" muted>
        <p>
          No hace falta que tengas claro qué necesita tu hijo o hija — para eso está la primera
          toma de contacto. Cuéntame simplemente qué es lo que os preocupa, y juntas vemos los
          siguientes pasos.
        </p>
      </ProseSection>
    </>
  );
}
