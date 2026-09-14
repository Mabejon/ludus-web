import { Container } from "@/components/layout/container";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export type EvaluationTool = {
  name: string;
  descriptor: string;
  explanation: string;
};

export function EvaluationSection({
  heading,
  intro,
  tools,
  closing,
}: {
  heading: string;
  intro: string;
  tools: EvaluationTool[];
  closing: string;
}) {
  return (
    <section className="bg-muted/40 py-16 md:py-24">
      <Container className="max-w-4xl">
        <h2 className="text-center font-heading text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
          {heading}
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-center text-base text-muted-foreground sm:text-lg">
          {intro}
        </p>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {tools.map((tool) => (
            <Card key={tool.name}>
              <CardHeader>
                <CardTitle className="text-lg">{tool.name}</CardTitle>
                <CardDescription>{tool.descriptor}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-foreground sm:text-base">{tool.explanation}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <p className="mx-auto mt-8 max-w-2xl text-center text-base text-muted-foreground sm:text-lg">
          {closing}
        </p>
      </Container>
    </section>
  );
}
