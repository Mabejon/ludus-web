import Script from "next/script";

/**
 * Cargado solo si NEXT_PUBLIC_GA_ID está definida (ver layout.tsx y .env.example).
 * Pendiente: banner de consentimiento de cookies antes de activarla en producción
 * (docs/ludus-web-documento-completo.md, sección 8).
 */
export function GoogleAnalytics({ gaId }: { gaId: string }) {
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${gaId}');
        `}
      </Script>
    </>
  );
}
