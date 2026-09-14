import Link from "next/link";

import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";

export function CtaSection({
  title,
  description,
  ctaLabel,
  href = "/contacto",
  secondaryCtaLabel,
  secondaryHref,
  secondaryExternal = false,
}: {
  title?: string;
  description?: string;
  ctaLabel: string;
  href?: string;
  secondaryCtaLabel?: string;
  secondaryHref?: string;
  /** Abre el botón secundario en una pestaña nueva (p. ej. WhatsApp) en vez de navegar con next/link. */
  secondaryExternal?: boolean;
}) {
  return (
    <section className="py-16 md:py-24">
      <Container className="flex flex-col items-center gap-6 text-center">
        {title && (
          <h2 className="font-heading text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            {title}
          </h2>
        )}
        {description && (
          <p className="max-w-md text-base text-muted-foreground sm:text-lg">{description}</p>
        )}
        <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
          <Button size="lg" className="px-8" render={<Link href={href} />} nativeButton={false}>
            {ctaLabel}
          </Button>
          {secondaryCtaLabel && secondaryHref && (
            <Button
              size="lg"
              variant="outline"
              className="px-8"
              render={
                secondaryExternal ? (
                  <a href={secondaryHref} target="_blank" rel="noopener noreferrer" />
                ) : (
                  <Link href={secondaryHref} />
                )
              }
              nativeButton={false}
            >
              {secondaryCtaLabel}
            </Button>
          )}
        </div>
      </Container>
    </section>
  );
}
