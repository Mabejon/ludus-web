import Image from "next/image";

import { Container } from "@/components/layout/container";

export function AboutIntro() {
  return (
    <section className="pb-16 md:pb-24">
      <Container>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-[280px_1fr] md:gap-12">
          <div className="mx-auto w-full max-w-[280px] md:mx-0">
            <Image
              src="/images/maria-abejon.jpg"
              alt="María Abejón, psicóloga educativa"
              width={1200}
              height={1500}
              className="aspect-4/5 w-full rounded-2xl object-cover"
              priority
            />
          </div>

          <div className="space-y-4 text-base text-muted-foreground sm:text-lg">
            <p>
              Elegí la psicología educativa por una razón muy simple: quiero que cada niño y
              cada adolescente encuentre su sitio, sea cual sea su forma de aprender.
            </p>
            <p>
              He trabajado tanto en colegios como en clínica, lo que me ha dado una mirada
              completa de lo que vive un niño con dificultades: cómo se siente en el aula, cómo
              se siente en casa, y qué necesita en cada momento para no sentirse perdido ni
              incapaz.
            </p>
            <p>
              Creo firmemente en la prevención — en llegar antes de que la dificultad se
              convierta en frustración — y en que se aprende mucho mejor a través del juego, con
              motivación real y con alguien que escucha de verdad.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
