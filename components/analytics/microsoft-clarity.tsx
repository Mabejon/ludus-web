import Script from "next/script";

/**
 * Cargado solo si NEXT_PUBLIC_CLARITY_ID está definida (ver layout.tsx y
 * .env.example). Pendiente: banner de consentimiento de cookies antes de
 * activarla en producción (docs/ludus-web-documento-completo.md, sección 8).
 */
export function MicrosoftClarity({ clarityId }: { clarityId: string }) {
  return (
    <Script id="microsoft-clarity" strategy="afterInteractive">
      {`
        (function(c,l,a,r,i,t,y){
          c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
          t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
          y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
        })(window, document, "clarity", "script", "${clarityId}");
      `}
    </Script>
  );
}
