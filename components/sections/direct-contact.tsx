import { Mail, MessageCircle, Phone } from "lucide-react";

import { siteConfig } from "@/data/site";
import { Container } from "@/components/layout/container";
import { toMailtoHref, toTelHref, toWhatsAppHref } from "@/lib/utils";

export function DirectContact() {
  const { whatsapp, phone, email } = siteConfig.contact;

  if (!whatsapp && !phone && !email) {
    return null;
  }

  return (
    <section className="bg-muted/40 py-16 md:py-24">
      <Container className="max-w-2xl text-center">
        <h2 className="font-heading text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
          O contacta directamente
        </h2>
        <ul className="mt-6 flex flex-col items-center gap-3">
          {whatsapp && (
            <li>
              <a
                href={toWhatsAppHref(whatsapp)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-base text-foreground transition-colors hover:text-primary sm:text-lg"
              >
                <MessageCircle aria-hidden="true" className="size-5 text-primary" />
                WhatsApp — {whatsapp}
              </a>
            </li>
          )}
          {phone && (
            <li>
              <a
                href={toTelHref(phone)}
                className="flex items-center gap-2 text-base text-foreground transition-colors hover:text-primary sm:text-lg"
              >
                <Phone aria-hidden="true" className="size-5 text-primary" />
                Teléfono — {phone}
              </a>
            </li>
          )}
          {email && (
            <li>
              <a
                href={toMailtoHref(email)}
                className="flex items-center gap-2 text-base text-foreground transition-colors hover:text-primary sm:text-lg"
              >
                <Mail aria-hidden="true" className="size-5 text-primary" />
                Email — {email}
              </a>
            </li>
          )}
        </ul>
      </Container>
    </section>
  );
}
