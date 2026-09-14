import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Container } from "@/components/layout/container";
import type { FaqItem } from "@/lib/schema";

export function FaqSection({ items }: { items: FaqItem[] }) {
  return (
    <section className="py-16 md:py-24">
      <Container className="max-w-2xl">
        <h2 className="text-center font-heading text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
          Preguntas frecuentes
        </h2>
        <Accordion className="mt-8">
          {items.map((item, index) => (
            <AccordionItem key={item.question} value={index}>
              <AccordionTrigger className="font-heading text-base sm:text-lg">
                {item.question}
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-muted-foreground">{item.answer}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Container>
    </section>
  );
}
