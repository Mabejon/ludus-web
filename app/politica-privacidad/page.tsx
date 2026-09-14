/**
 * PENDIENTE DE REVISIÓN LEGAL — no publicar sin validar antes con un abogado
 * especializado en protección de datos sanitarios (art. 9 RGPD) y de menores.
 *
 * Estructura completa según el RGPD y la LOPDGDD, con los apartados exigidos
 * por el art. 13 RGPD. Contiene datos identificativos incompletos (falta
 * NIF/CIF y domicilio del responsable) y plazos/procedimientos genéricos que
 * deben concretarse con un profesional antes del lanzamiento. Ver comentarios
 * inline en cada apartado pendiente.
 */

import type { Metadata } from "next";

import { siteConfig } from "@/data/site";
import { PageHeader } from "@/components/sections/page-header";
import { LegalArticle } from "@/components/sections/legal-article";

export const metadata: Metadata = {
  title: "Política de privacidad",
  description: `Política de privacidad de ${siteConfig.name}.`,
};

export default function PoliticaPrivacidadPage() {
  return (
    <>
      <PageHeader eyebrow="Legal" title="Política de privacidad" />
      <LegalArticle>
        <h2>1. Responsable del tratamiento</h2>
        <p>
          El responsable del tratamiento de los datos personales recogidos a través de
          este sitio web es <strong>{siteConfig.professional.name}</strong>,{" "}
          {siteConfig.professional.role} ({siteConfig.professional.license}), con
          dirección de contacto en <strong>{siteConfig.contact.email}</strong>.
        </p>
        {/* PENDIENTE: añadir NIF/CIF y domicilio completo del responsable (art. 13 RGPD). */}

        <h2>2. Finalidad del tratamiento</h2>
        <p>
          Los datos personales facilitados a través del formulario de contacto se tratan
          con las siguientes finalidades:
        </p>
        <ul>
          <li>Responder a las consultas planteadas por las familias.</li>
          <li>
            Gestionar la solicitud de primera cita y el proceso de evaluación o
            intervención psicoeducativa.
          </li>
          <li>
            Mantener la comunicación necesaria durante el acompañamiento profesional.
          </li>
        </ul>
        <p>
          No se utilizarán los datos para finalidades distintas de las aquí descritas, ni
          se cederán a terceros salvo obligación legal o los encargados de tratamiento
          indicados en el apartado 6.
        </p>

        <h2>3. Legitimación</h2>
        <p>
          La base legal para el tratamiento de los datos es el{" "}
          <strong>consentimiento explícito</strong> de la persona que rellena el
          formulario (art. 6.1.a del Reglamento (UE) 2016/679, RGPD), otorgado al marcar
          la casilla de aceptación de esta política antes de enviar sus datos.
        </p>
        <p>
          Cuando el tratamiento incluya datos relativos a la salud del niño, niña o
          adolescente (por ejemplo, información compartida durante el proceso de
          evaluación o intervención), la base legal es el consentimiento explícito para
          dicha categoría especial de datos (art. 9.2.a RGPD).
        </p>

        <h2>4. Datos de menores de edad</h2>
        <p>
          Cuando la información facilitada se refiera a un niño, niña o adolescente, es
          responsabilidad de quien cumplimenta el formulario contar con la patria potestad
          o tutela legal sobre el menor, y prestar el consentimiento en su nombre conforme
          al artículo 7 de la Ley Orgánica 3/2018, de Protección de Datos Personales y
          garantía de los derechos digitales (LOPDGDD).
        </p>
        {/*
          PENDIENTE: revisar con un profesional el procedimiento de verificación de la
          identidad y capacidad de quien presta el consentimiento en nombre del menor.
        */}

        <h2>5. Datos de categoría especial (salud)</h2>
        <p>
          En el marco del acompañamiento psicoeducativo pueden tratarse datos relativos a
          la salud del niño, niña o adolescente (por ejemplo, resultados de pruebas
          psicométricas o informes de evaluación). Estos datos se consideran categoría
          especial conforme al artículo 9 RGPD y reciben un nivel de protección reforzado:
          se tratan exclusivamente con la finalidad profesional descrita, con el
          consentimiento explícito de la familia, y no se comparten con terceros salvo
          obligación legal o coordinación expresamente autorizada con otros profesionales
          (por ejemplo, el centro escolar, psiquiatría o neuropediatría).
        </p>

        <h2>6. Destinatarios y encargados de tratamiento</h2>
        <p>
          Para el funcionamiento del sitio web y la gestión de las comunicaciones se
          utilizan los siguientes proveedores, que actúan como encargados de tratamiento
          conforme al artículo 28 RGPD:
        </p>
        <ul>
          <li>
            <strong>Resend</strong> — envío del formulario de contacto por correo
            electrónico.
          </li>
          <li>Proveedor de alojamiento web (hosting) del sitio.</li>
        </ul>
        <p>
          Cuando se activen herramientas de analítica web (Google Analytics 4, Microsoft
          Clarity) esta política se actualizará para reflejar los tratamientos
          correspondientes y, en su caso, se solicitará el consentimiento previo mediante
          el panel de cookies.
        </p>
        {/*
          PENDIENTE: completar esta lista con el proveedor de hosting definitivo y revisar
          si alguno de los encargados transfiere datos fuera del Espacio Económico Europeo.
        */}

        <h2>7. Plazo de conservación</h2>
        <p>
          Los datos se conservarán durante el tiempo necesario para atender la consulta o
          durante la duración de la relación profesional, y posteriormente durante los
          plazos legalmente exigibles para atender eventuales responsabilidades.
        </p>
        {/*
          PENDIENTE: definir con precisión el plazo aplicable a la documentación clínica /
          informes psicoeducativos, conforme a la normativa sanitaria y de protección de
          datos vigente.
        */}

        <h2>8. Derechos de las personas interesadas</h2>
        <p>
          Cualquier persona tiene derecho a obtener confirmación sobre si en{" "}
          {siteConfig.name} se están tratando datos personales que le conciernan, y en
          particular tiene derecho a acceder a sus datos personales, rectificar los datos
          inexactos o solicitar su supresión, así como a solicitar la limitación,
          portabilidad u oposición al tratamiento de sus datos, en los términos previstos
          en el RGPD y la LOPDGDD.
        </p>
        <p>
          Estos derechos pueden ejercerse escribiendo a{" "}
          <strong>{siteConfig.contact.email}</strong>, indicando el derecho que se desea
          ejercer y adjuntando copia de un documento que acredite la identidad.
        </p>
        <p>
          Asimismo, se informa de la posibilidad de presentar una reclamación ante la
          Agencia Española de Protección de Datos (www.aepd.es) si se considera que el
          tratamiento no se ajusta a la normativa vigente.
        </p>

        <h2>9. Medidas de seguridad</h2>
        <p>
          Se aplican las medidas técnicas y organizativas apropiadas para garantizar un
          nivel de seguridad adecuado al riesgo, conforme al artículo 32 RGPD, con especial
          atención a la naturaleza sensible de los datos de salud que puedan tratarse.
        </p>

        <h2>10. Cambios en esta política de privacidad</h2>
        <p>
          Esta política de privacidad puede actualizarse para adaptarse a novedades
          legislativas o a cambios en los servicios ofrecidos. Se recomienda consultarla
          periódicamente.
        </p>
      </LegalArticle>
    </>
  );
}
