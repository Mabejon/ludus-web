import { Container } from "@/components/layout/container";

/**
 * Contenedor tipográfico para las páginas legales (Aviso legal, Política de
 * privacidad, Política de cookies). Da estilo consistente a h2/h3/p/ul/strong
 * escritos como HTML semántico plano dentro de cada página, sin depender de
 * un plugin de tipografía externo.
 */
export function LegalArticle({ children }: { children: React.ReactNode }) {
  return (
    <section className="pb-16 md:pb-24">
      <Container className="max-w-3xl">
        <div
          className={[
            "space-y-5 text-base text-muted-foreground [&_strong]:font-medium [&_strong]:text-foreground",
            "[&>h2]:mt-10 [&>h2]:font-heading [&>h2]:text-xl [&>h2]:font-semibold [&>h2]:text-foreground [&>h2:first-child]:mt-0 sm:[&>h2]:text-2xl",
            "[&>h3]:mt-6 [&>h3]:font-heading [&>h3]:text-lg [&>h3]:font-medium [&>h3]:text-foreground",
            "[&_ul]:list-disc [&_ul]:space-y-1.5 [&_ul]:pl-6",
            "[&_p]:leading-relaxed",
          ].join(" ")}
        >
          {children}
        </div>
      </Container>
    </section>
  );
}
