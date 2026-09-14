/**
 * PENDIENTE DE REVISIÓN LEGAL — no publicar sin validar antes con un abogado
 * especializado en protección de datos.
 *
 * Estructura completa, pero la tabla de cookies analíticas (Google Analytics 4,
 * Microsoft Clarity) describe herramientas todavía no activadas (sin IDs
 * configurados). En cuanto se activen, hay que: (1) listar aquí el nombre
 * exacto de cada cookie, duración y finalidad, y (2) implementar un banner de
 * consentimiento previo a la carga de cualquier cookie no esencial — hoy no
 * existe ese banner en el sitio. Ver comentario inline en el apartado 2.
 */

import type { Metadata } from "next";

import { siteConfig } from "@/data/site";
import { PageHeader } from "@/components/sections/page-header";
import { LegalArticle } from "@/components/sections/legal-article";

export const metadata: Metadata = {
  title: "Política de cookies",
  description: `Política de cookies de ${siteConfig.name}.`,
};

const browserGuides = [
  { name: "Google Chrome", href: "https://support.google.com/chrome/answer/95647" },
  {
    name: "Mozilla Firefox",
    href: "https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias",
  },
  { name: "Safari", href: "https://support.apple.com/es-es/guide/safari/sfri11471/mac" },
  {
    name: "Microsoft Edge",
    href: "https://support.microsoft.com/es-es/microsoft-edge/eliminar-las-cookies-en-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09",
  },
];

export default function PoliticaCookiesPage() {
  return (
    <>
      <PageHeader eyebrow="Legal" title="Política de cookies" />
      <LegalArticle>
        <h2>1. ¿Qué son las cookies?</h2>
        <p>
          Las cookies son pequeños archivos de texto que un sitio web instala en el
          navegador o dispositivo del usuario al visitarlo. Permiten, entre otras cosas,
          almacenar y recuperar información sobre los hábitos de navegación o el
          dispositivo del usuario.
        </p>

        <h2>2. Cookies utilizadas en este sitio</h2>
        <p>
          Actualmente este sitio web no instala cookies analíticas ni de terceros. Está
          previsto incorporar las siguientes herramientas, cuyas cookies se activarán
          únicamente cuando se configuren:
        </p>
        <ul>
          <li>
            <strong>Google Analytics 4</strong> — cookies analíticas para conocer el uso
            agregado del sitio web.
          </li>
          <li>
            <strong>Microsoft Clarity</strong> — cookies analíticas para entender la
            interacción con el sitio web (mapas de calor, grabaciones de sesión
            anonimizadas).
          </li>
        </ul>
        <p>
          Mientras estas herramientas no estén activas, el sitio solo utiliza las cookies
          técnicas estrictamente necesarias para su funcionamiento, exentas del deber de
          información según la normativa vigente.
        </p>
        {/*
          PENDIENTE: en cuanto se activen GA4 y/o Clarity, actualizar esta lista con el
          nombre exacto de cada cookie, su duración y su finalidad concreta, e implementar
          un panel de consentimiento (banner de cookies) antes de cargar cualquier cookie
          no esencial. Hoy ese banner no existe en el sitio.
        */}

        <h2>3. Cómo gestionar las cookies</h2>
        <p>
          El usuario puede permitir, bloquear o eliminar las cookies instaladas en su
          equipo mediante la configuración de las opciones del navegador. Instrucciones de
          los navegadores más habituales:
        </p>
        <ul>
          {browserGuides.map((browser) => (
            <li key={browser.name}>
              <a
                href={browser.href}
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-2 hover:text-foreground"
              >
                {browser.name}
              </a>
            </li>
          ))}
        </ul>

        <h2>4. Consentimiento</h2>
        <p>
          Al navegar y continuar en este sitio web, el usuario consiente el uso de las
          cookies técnicas necesarias para su funcionamiento. Cuando se activen cookies
          analíticas o de terceros, se solicitará el consentimiento expreso del usuario
          mediante un panel específico antes de instalarlas.
        </p>

        <h2>5. Cambios en esta política</h2>
        <p>
          Esta política de cookies puede actualizarse en función de los cambios
          legislativos o de las herramientas incorporadas al sitio web. Se recomienda
          revisarla periódicamente.
        </p>
      </LegalArticle>
    </>
  );
}
