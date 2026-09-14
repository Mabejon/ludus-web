import type { Metadata } from "next";

import { PageHeader } from "@/components/sections/page-header";
import { AboutIntro } from "@/components/sections/about-intro";
import { Credentials } from "@/components/sections/credentials";
import { ProseSection } from "@/components/sections/prose-section";
import { CtaSection } from "@/components/sections/cta-section";

const title = "Sobre mí";
const socialTitle = "Sobre mí | Ludus";
const description =
  "María Abejón, psicóloga educativa colegiada (M-43597), profesora universitaria (UNIR) y doctoranda en Psicología (UCM). Conoce mi enfoque de trabajo con niños y adolescentes.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: { title: socialTitle, description },
  twitter: { title: socialTitle, description },
};

export default function SobreMiPage() {
  return (
    <>
      <PageHeader eyebrow="Sobre mí" title="María Abejón" subtitle="Psicóloga educativa" />
      <AboutIntro />
      <Credentials />
      <ProseSection heading="Cómo trabajo">
        <p>
          Cada niño y cada familia son distintos, así que cada proceso empieza escuchando, no
          aplicando un protocolo cerrado. Uso el juego como herramienta principal porque es
          donde los niños se muestran tal y como son, y porque a través de él se aprende con
          más motivación y de forma más duradera.
        </p>
      </ProseSection>
      <CtaSection
        ctaLabel="Pide tu primera cita"
        secondaryCtaLabel="Conoce mis servicios"
        secondaryHref="/servicios"
      />
    </>
  );
}
