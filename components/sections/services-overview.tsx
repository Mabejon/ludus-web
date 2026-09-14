import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";
import { Container } from "@/components/layout/container";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { services } from "@/data/services";

export function ServicesOverview({ heading }: { heading?: string }) {
  return (
    <section id="servicios" className="scroll-mt-24 py-16 md:py-24">
      <Container>
        {heading && (
          <h2 className="text-center font-heading text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            {heading}
          </h2>
        )}

        <div
          className={cn(
            "grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3",
            heading && "mt-10"
          )}
        >
          {services.map((service) => (
            <Link key={service.slug} href={`/servicios/${service.slug}`} className="group">
              <Card className="h-full transition-shadow hover:shadow-md hover:ring-primary/30">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between gap-2">
                    {service.title}
                    <ArrowRight
                      aria-hidden="true"
                      className="size-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5"
                    />
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{service.summary}</CardDescription>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
