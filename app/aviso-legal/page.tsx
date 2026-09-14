/**
 * PENDIENTE DE REVISIÓN LEGAL — no publicar sin validar antes con un abogado
 * especializado en protección de datos sanitarios y de menores.
 *
 * Estructura completa según el art. 10 LSSI-CE, pero con datos identificativos
 * incompletos (falta NIF/CIF y domicilio del titular) y textos genéricos que
 * deben adaptarse a la actividad real una vez validados por un profesional.
 * Ver comentarios inline para los puntos concretos a completar.
 */

import type { Metadata } from "next";

import { siteConfig } from "@/data/site";
import { PageHeader } from "@/components/sections/page-header";
import { LegalArticle } from "@/components/sections/legal-article";

export const metadata: Metadata = {
  title: "Aviso legal",
  description: `Aviso legal de ${siteConfig.name}.`,
};

export default function AvisoLegalPage() {
  return (
    <>
      <PageHeader eyebrow="Legal" title="Aviso legal" />
      <LegalArticle>
        <h2>1. Datos identificativos</h2>
        <p>
          En cumplimiento del deber de información recogido en el artículo 10 de la Ley
          34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y de
          Comercio Electrónico (LSSI-CE), se facilitan los siguientes datos: el presente
          sitio web es titularidad de <strong>{siteConfig.professional.name}</strong>,{" "}
          {siteConfig.professional.role} ({siteConfig.professional.license}).
        </p>
        <p>
          Datos de contacto: correo electrónico{" "}
          <strong>{siteConfig.contact.email}</strong>
          {siteConfig.contact.phone && (
            <>
              {" "}
              · teléfono <strong>{siteConfig.contact.phone}</strong>
            </>
          )}
          . Ámbito de actividad: {siteConfig.location.area} (
          {siteConfig.location.modality}).
        </p>
        {/*
          PENDIENTE: el art. 10 LSSI-CE exige también NIF/CIF y domicilio completo
          del titular. Añadir ambos datos en cuanto la clienta los facilite, antes
          de publicar el sitio en producción.
        */}

        <h2>2. Objeto</h2>
        <p>
          El presente aviso legal regula el uso del sitio web {siteConfig.url} (en
          adelante, &ldquo;el sitio web&rdquo;), cuya finalidad es informar sobre los
          servicios de psicología educativa ofrecidos por {siteConfig.professional.name} y
          facilitar el contacto con las familias interesadas.
        </p>
        <p>
          El acceso y uso del sitio web atribuye la condición de usuario e implica la
          aceptación plena de las condiciones incluidas en este aviso legal.
        </p>

        <h2>3. Condiciones de acceso y uso</h2>
        <p>
          El acceso al sitio web es gratuito, salvo en lo relativo al coste de conexión a
          través de la red de telecomunicaciones suministrada por el proveedor de acceso
          contratado por el usuario. El usuario se compromete a hacer un uso adecuado de
          los contenidos y servicios que se ofrecen, y a no emplearlos para incurrir en
          actividades ilícitas o contrarias a la buena fe y al ordenamiento legal.
        </p>

        <h2>4. Propiedad intelectual e industrial</h2>
        <p>
          Todos los contenidos del sitio web (textos, imágenes, marcas, logotipos, diseño y
          código fuente) son titularidad de {siteConfig.professional.name} o de terceros
          que han autorizado su uso, y están protegidos por la normativa de propiedad
          intelectual e industrial. Queda prohibida su reproducción, distribución o
          comunicación pública total o parcial sin autorización expresa del titular.
        </p>

        <h2>5. Exclusión de responsabilidad</h2>
        <p>
          {siteConfig.professional.name} no se hace responsable de los daños y perjuicios
          de cualquier naturaleza que pudieran derivarse de la falta de disponibilidad o
          continuidad del funcionamiento del sitio web, ni de posibles errores u omisiones
          en sus contenidos. La información publicada tiene carácter divulgativo y no
          sustituye una valoración profesional individualizada.
        </p>

        <h2>6. Enlaces a terceros</h2>
        <p>
          El sitio web puede incluir enlaces a páginas de terceros (por ejemplo, WhatsApp).{" "}
          {siteConfig.professional.name} no asume responsabilidad alguna por el contenido,
          funcionamiento o políticas de privacidad de dichos sitios externos.
        </p>

        <h2>7. Legislación aplicable y jurisdicción</h2>
        <p>
          Las presentes condiciones se rigen por la legislación española. Para la
          resolución de cualquier controversia derivada del acceso o uso del sitio web, las
          partes se someten a los juzgados y tribunales que correspondan conforme a
          derecho.
        </p>

        <h2>8. Modificaciones</h2>
        <p>
          {siteConfig.professional.name} se reserva el derecho a modificar el presente
          aviso legal para adaptarlo a novedades legislativas o jurisprudenciales. Se
          recomienda revisar este documento periódicamente.
        </p>
      </LegalArticle>
    </>
  );
}
