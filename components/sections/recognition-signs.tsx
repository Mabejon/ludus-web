import { Check } from "lucide-react";

import { Container } from "@/components/layout/container";

export function RecognitionSigns({
  signs,
  consequence,
  reframe,
}: {
  signs: string[];
  consequence: string;
  reframe: string;
}) {
  return (
    <section className="py-16 md:py-24">
      <Container className="max-w-2xl">
        <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {signs.map((sign) => (
            <li
              key={sign}
              className="flex items-start gap-3 rounded-xl bg-muted/40 p-4 text-left"
            >
              <Check aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-primary" />
              <span className="text-base text-foreground sm:text-lg">{sign}</span>
            </li>
          ))}
        </ul>
        <p className="mt-8 text-center text-base text-muted-foreground sm:text-lg">
          {consequence}
        </p>
        <p className="mt-4 text-center font-heading text-lg text-foreground sm:text-xl">
          {reframe}
        </p>
      </Container>
    </section>
  );
}
