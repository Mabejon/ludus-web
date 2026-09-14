import { Container } from "@/components/layout/container";

export function TrustBar() {
  return (
    <div className="border-y border-border/60">
      <Container className="py-3.5">
        <p className="text-center text-xs tracking-wide text-muted-foreground sm:text-sm">
          Colegiada M-43597 <span aria-hidden="true">·</span> Profesora universitaria (UNIR){" "}
          <span aria-hidden="true">·</span> Doctoranda en Psicología (UCM)
        </p>
      </Container>
    </div>
  );
}
