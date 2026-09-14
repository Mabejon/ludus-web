import Link from "next/link";

import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative flex min-h-[calc(100svh-4rem)] flex-col justify-center overflow-hidden py-10 md:min-h-0 md:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[28rem] w-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-secondary/25 blur-3xl"
      />

      <Container className="flex flex-col items-center text-center">
        <h1 className="flex flex-col items-center gap-2 sm:gap-3">
          <span className="text-sm font-medium tracking-wide text-primary uppercase sm:text-base">
            Psicología educativa
          </span>
          <span className="font-heading text-4xl font-semibold italic tracking-tight text-foreground sm:text-6xl md:text-7xl">
            Ludus
          </span>
        </h1>

        <p className="mt-4 max-w-xl text-lg font-medium text-foreground sm:mt-6 sm:text-xl">
          Un espacio seguro donde aprender, crecer y encontrar su sitio
        </p>

        <p className="mt-3 max-w-md text-sm text-muted-foreground sm:text-base">
          Acompaño a las familias, a los niños y a los adolescentes cuando surgen dificultades en
          el aprendizaje.
        </p>

        <div className="mt-7 flex w-full flex-col gap-3 sm:mt-9 sm:w-auto sm:flex-row">
          <Button
            size="lg"
            className="px-6"
            render={<Link href="/contacto" />}
            nativeButton={false}
          >
            Pide tu primera cita
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="px-6"
            render={<Link href="#servicios" />}
            nativeButton={false}
          >
            Descubre cómo puedo ayudarte
          </Button>
        </div>
      </Container>
    </section>
  );
}
