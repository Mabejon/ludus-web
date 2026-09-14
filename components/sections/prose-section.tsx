import { cn } from "@/lib/utils";
import { Container } from "@/components/layout/container";

export function ProseSection({
  heading,
  muted = false,
  className,
  children,
}: {
  heading?: string;
  muted?: boolean;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section className={cn("py-16 md:py-24", muted && "bg-muted/40", className)}>
      <Container className="max-w-2xl text-center">
        {heading && (
          <h2 className="font-heading text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            {heading}
          </h2>
        )}
        <div
          className={cn(
            "space-y-4 text-base text-muted-foreground sm:text-lg",
            heading && "mt-5"
          )}
        >
          {children}
        </div>
      </Container>
    </section>
  );
}
