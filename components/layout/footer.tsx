import Link from "next/link";

import { siteConfig } from "@/data/site";
import { legalNav, mainNav } from "@/data/navigation";
import { services } from "@/data/services";
import { Container } from "@/components/layout/container";
import { toMailtoHref, toTelHref, toWhatsAppHref } from "@/lib/utils";

export function Footer() {
  const year = new Date().getFullYear();
  const hasContactInfo =
    siteConfig.contact.email || siteConfig.contact.phone || siteConfig.contact.whatsapp;

  return (
    <footer className="border-t border-border/60 bg-background">
      <Container className="py-14">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Link href="/" className="font-heading text-lg font-semibold text-foreground">
              {siteConfig.shortName}
            </Link>
            <p className="mt-3 max-w-xs text-sm text-muted-foreground">
              Un espacio seguro donde cada niño y adolescente encuentra su forma de aprender,
              crecer y superar sus dificultades.
            </p>
            <p className="mt-4 text-sm text-foreground">
              {siteConfig.professional.name}
              <br />
              <span className="text-muted-foreground">
                {siteConfig.professional.role} · {siteConfig.professional.license}
              </span>
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              {siteConfig.location.area} — {siteConfig.location.modality}
            </p>
          </div>

          <nav aria-label="Navegación">
            <h2 className="font-heading text-sm font-medium text-foreground">Navegación</h2>
            <ul className="mt-4 space-y-2.5">
              {mainNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Servicios">
            <h2 className="font-heading text-sm font-medium text-foreground">Servicios</h2>
            <ul className="mt-4 space-y-2.5">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/servicios/${service.slug}`}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="font-heading text-sm font-medium text-foreground">Legal</h2>
            <ul className="mt-4 space-y-2.5">
              {legalNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>

            {hasContactInfo && (
              <ul className="mt-6 space-y-2.5">
                {siteConfig.contact.whatsapp && (
                  <li>
                    <a
                      href={toWhatsAppHref(siteConfig.contact.whatsapp)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      WhatsApp — {siteConfig.contact.whatsapp}
                    </a>
                  </li>
                )}
                {siteConfig.contact.phone && (
                  <li>
                    <a
                      href={toTelHref(siteConfig.contact.phone)}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      Teléfono — {siteConfig.contact.phone}
                    </a>
                  </li>
                )}
                {siteConfig.contact.email && (
                  <li>
                    <a
                      href={toMailtoHref(siteConfig.contact.email)}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      Email — {siteConfig.contact.email}
                    </a>
                  </li>
                )}
              </ul>
            )}
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-border/60 pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {siteConfig.name}. {siteConfig.professional.name} —{" "}
            {siteConfig.professional.license}.
          </p>
        </div>
      </Container>
    </footer>
  );
}
