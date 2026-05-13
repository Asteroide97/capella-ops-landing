import type { Metadata } from "next";

import { LegalPage } from "@/components/legal/legal-page";

export const metadata: Metadata = {
  title: "Política de privacidad",
  description:
    "Consulta cómo Capella Ops recopila, usa y protege la información enviada desde su landing comercial y formularios de contacto."
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Política de privacidad"
      description="Esta política explica cómo Capella Ops recopila y utiliza la información compartida en su sitio comercial, especialmente al solicitar una demo o iniciar contacto con el equipo."
    >
      <h2>1. Alcance de esta política</h2>
      <p>
        Esta política aplica al sitio comercial de Capella Ops y a los formularios, páginas informativas y canales de
        contacto disponibles en la landing. Su propósito es describir el tratamiento de la información que una persona
        comparte de manera voluntaria al explorar la propuesta comercial del servicio.
      </p>

      <h2>2. Información que podemos recopilar</h2>
      <p>
        Cuando un visitante completa un formulario o se pone en contacto con Capella Ops, podemos recibir datos como
        nombre, correo electrónico, empresa, teléfono, plan de interés y mensaje. También podemos registrar datos
        técnicos básicos de navegación para fines de funcionamiento, seguridad y mejora del sitio.
      </p>

      <h2>3. Finalidades del tratamiento</h2>
      <ul>
        <li>Responder solicitudes de demo, contacto o información comercial.</li>
        <li>Dar seguimiento a oportunidades comerciales relacionadas con Capella Ops.</li>
        <li>Mejorar la experiencia del sitio, su contenido y su desempeño.</li>
        <li>Proteger la operación del sitio frente a uso indebido o actividades anómalas.</li>
      </ul>

      <h2>4. Base de uso de la información</h2>
      <p>
        Capella Ops utiliza la información enviada por el visitante para atender su propia solicitud, mantener
        comunicación comercial pertinente y operar la landing de forma confiable. No se recopilan más datos de los
        necesarios para ese propósito dentro de esta experiencia comercial.
      </p>

      <h2>5. Conservación y seguridad</h2>
      <p>
        La información se conserva durante el tiempo razonablemente necesario para atender la solicitud, dar
        seguimiento comercial o cumplir obligaciones operativas. Capella Ops procura aplicar medidas de seguridad
        administrativas y técnicas adecuadas para reducir riesgos de acceso no autorizado, pérdida o uso indebido.
      </p>

      <h2>6. Compartición con terceros</h2>
      <p>
        La información puede procesarse mediante proveedores de infraestructura, hosting, correo transaccional o
        herramientas operativas necesarias para el funcionamiento de la landing. Capella Ops no vende la información
        personal capturada desde este sitio.
      </p>

      <h2>7. Derechos y contacto</h2>
      <p>
        Si deseas solicitar corrección, actualización o eliminación de la información compartida a través de la
        landing, puedes escribir a <strong>contacto@capellaops.com</strong>. Capella Ops revisará cada solicitud de
        buena fe y conforme al contexto operativo del servicio.
      </p>

      <h2>8. Cambios futuros</h2>
      <p>
        Capella Ops podrá actualizar esta política cuando evolucione la operación del sitio, el proceso comercial o
        los proveedores involucrados. La versión publicada en esta página será la referencia vigente.
      </p>
    </LegalPage>
  );
}
