"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    dataLayer?: unknown[];
  }
}

/**
 * Empuja un evento a window.dataLayer al montar. Tanto GA4 (vía gtag.js) como,
 * en el futuro, Google Tag Manager leen del mismo array, así que es seguro
 * aunque ninguno de los dos esté cargado todavía — el evento queda en cola.
 */
export function ConversionEvent({ event }: { event: string }) {
  useEffect(() => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event });
  }, [event]);

  return null;
}
