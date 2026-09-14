import type { LucideIcon } from "lucide-react";

import { Container } from "@/components/layout/container";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export type Resource = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export function ResourceGrid({ resources }: { resources: Resource[] }) {
  return (
    <section className="py-16 md:py-24">
      <Container>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {resources.map((resource) => (
            <Card key={resource.title}>
              <CardHeader>
                <CardTitle className="flex items-start justify-between gap-3">
                  <span className="flex items-center gap-2">
                    <resource.icon aria-hidden="true" className="size-5 shrink-0 text-primary" />
                    {resource.title}
                  </span>
                  <Badge variant="secondary" className="shrink-0">
                    Próximamente
                  </Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm sm:text-base">
                  {resource.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
