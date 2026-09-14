import { Container } from "@/components/layout/container";

export function PageHeader({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <section className="relative overflow-hidden py-16 md:py-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-secondary/25 blur-3xl"
      />
      <Container className="text-center">
        <p className="text-sm font-medium text-primary sm:text-base">{eyebrow}</p>
        <h1 className="mx-auto mt-2 max-w-3xl font-heading text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mx-auto mt-3 max-w-2xl text-lg text-muted-foreground sm:text-xl">
            {subtitle}
          </p>
        )}
      </Container>
    </section>
  );
}
