"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

/**
 * Dispara un evento de GA4 al montar, vía la función gtag() global (definida por
 * GoogleAnalytics en layout.tsx, que se monta antes que el contenido de la página).
 * Si NEXT_PUBLIC_GA_ID no está configurada, gtag no existe y esto no hace nada.
 */
export function ConversionEvent({ event }: { event: string }) {
  useEffect(() => {
    if (typeof window.gtag === "function") {
      window.gtag("event", event);
    }
  }, [event]);

  return null;
}
