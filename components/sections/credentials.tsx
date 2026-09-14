import { GraduationCap } from "lucide-react";

import { Container } from "@/components/layout/container";

const credentials = [
  "Psicóloga educativa colegiada (M-43597)",
  "Profesora universitaria en el Grado de Psicología y en másteres de psicopedagogía, atención temprana y educación especial (UNIR)",
  "Doctoranda en Psicología en la Universidad Complutense de Madrid (UCM), investigando sobre convivencia escolar",
  "Experiencia en evaluación e intervención en dificultades del aprendizaje y del neurodesarrollo (dislexia, disgrafía, discalculia, TDAH, funciones ejecutivas, TEA)",
];

export function Credentials() {
  return (
    <section className="bg-muted/40 py-16 md:py-24">
      <Container className="max-w-2xl">
        <h2 className="text-center font-heading text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
          Formación y experiencia
        </h2>
        <ul className="mt-8 space-y-4">
          {credentials.map((item) => (
            <li key={item} className="flex items-start gap-3">
              <GraduationCap aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-primary" />
              <span className="text-base text-foreground sm:text-lg">{item}</span>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-center text-base text-muted-foreground sm:text-lg">
          Combinar la práctica clínica con la docencia y la investigación me permite trabajar
          siempre desde la evidencia científica más actual.
        </p>
      </Container>
    </section>
  );
}
