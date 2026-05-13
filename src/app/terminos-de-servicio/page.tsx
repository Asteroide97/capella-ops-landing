import type { Metadata } from "next";

import { LegalPage } from "@/components/legal/legal-page";

export const metadata: Metadata = {
  title: "Términos de servicio",
  description:
    "Revisa los términos de servicio aplicables al uso del sitio comercial de Capella Ops, sus formularios y su información pública."
};

export default function TermsOfServicePage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Términos de servicio"
      description="Estos términos regulan el uso del sitio comercial de Capella Ops y el alcance de la información, formularios y materiales publicados en la landing."
    >
      <h2>1. Naturaleza del sitio</h2>
      <p>
        La landing de Capella Ops tiene un propósito informativo y comercial. Presenta la propuesta del servicio, sus
        módulos, planes, programa de distribuidores y medios de contacto. El uso de este sitio no implica por sí mismo
        una contratación ni sustituye acuerdos comerciales o contractuales posteriores.
      </p>

      <h2>2. Uso permitido</h2>
      <p>
        El visitante se compromete a utilizar el sitio de manera lícita y compatible con su finalidad comercial. No
        debe intentar afectar la disponibilidad, seguridad o integridad del sitio, ni usar formularios o contenidos con
        fines engañosos, fraudulentos o distintos al contacto legítimo con Capella Ops.
      </p>

      <h2>3. Formularios y solicitudes</h2>
      <p>
        Las solicitudes enviadas desde la landing, incluyendo demos o interés en el programa de distribuidores, se
        consideran expresiones de interés comercial. Capella Ops podrá responder, calificar o dar seguimiento a estas
        solicitudes según su capacidad operativa y criterios comerciales.
      </p>

      <h2>4. Información comercial y disponibilidad</h2>
      <p>
        Capella Ops procura mantener actualizada la información publicada sobre módulos, beneficios, planes y
        condiciones generales. Sin embargo, ciertos elementos pueden cambiar con el tiempo y deberán confirmarse de
        forma directa antes de cualquier contratación.
      </p>

      <h2>5. Propiedad intelectual</h2>
      <p>
        Los textos, marcas, interfaces, composiciones visuales y materiales publicados en esta landing pertenecen a
        Capella Ops o se utilizan con autorización correspondiente. No se permite su reproducción o explotación sin
        autorización previa, salvo usos legítimos de referencia comercial.
      </p>

      <h2>6. Enlaces y servicios relacionados</h2>
      <p>
        El sitio puede incluir accesos hacia el portal operativo u otros recursos de Capella Ops. Esos entornos pueden
        regirse por términos, configuraciones o condiciones distintas a las de esta landing comercial.
      </p>

      <h2>7. Limitación de responsabilidad</h2>
      <p>
        Capella Ops no garantiza que el sitio esté libre de interrupciones en todo momento ni asume responsabilidad
        por decisiones de negocio tomadas exclusivamente con base en la información pública mostrada aquí. El material
        de la landing sirve como guía comercial inicial.
      </p>

      <h2>8. Modificaciones</h2>
      <p>
        Capella Ops podrá actualizar estos términos, así como la estructura, el contenido o los llamados a la acción
        del sitio, cuando la propuesta comercial o la operación lo requieran. La versión publicada en esta página será
        la vigente.
      </p>
    </LegalPage>
  );
}
