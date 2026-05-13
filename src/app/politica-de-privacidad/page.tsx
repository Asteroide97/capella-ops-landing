import type { Metadata } from "next";

import { LegalPage } from "@/components/legal/legal-page";

const privacySections = [
  {
    href: "#responsable-del-tratamiento-de-datos",
    label: "1. Responsable del tratamiento de datos"
  },
  {
    href: "#datos-que-recopilamos",
    label: "2. Datos que recopilamos"
  },
  {
    href: "#finalidades-del-tratamiento",
    label: "3. Finalidades del tratamiento"
  },
  {
    href: "#base-legal-del-tratamiento",
    label: "4. Base legal del tratamiento"
  },
  {
    href: "#conservacion-de-datos",
    label: "5. Conservación de datos"
  },
  {
    href: "#comparticion-con-terceros-e-integraciones",
    label: "6. Compartición con terceros e integraciones"
  },
  {
    href: "#seguridad-de-la-informacion",
    label: "7. Seguridad de la información"
  },
  {
    href: "#derechos-del-usuario",
    label: "8. Derechos del usuario"
  },
  {
    href: "#uso-de-cookies",
    label: "9. Uso de cookies"
  },
  {
    href: "#transferencias-internacionales-de-datos",
    label: "10. Transferencias internacionales de datos"
  },
  {
    href: "#cambios-a-esta-politica",
    label: "11. Cambios a esta política"
  },
  {
    href: "#contacto",
    label: "12. Contacto"
  }
] as const;

export const metadata: Metadata = {
  title: "Política de privacidad",
  description:
    "Consulta la Política de Privacidad completa de Capella Ops sobre tratamiento de datos, seguridad, cookies, transferencias y derechos del usuario."
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Política de Privacidad"
      description="Esta página contiene el texto completo aplicable al tratamiento de datos personales relacionado con Capella Ops."
      lastUpdated="12 de mayo de 2026"
      tableOfContents={privacySections}
    >
      <p>
        Esta Política de Privacidad describe cómo Capella Ops, marca comercial operada por Capella Ops Tecnologias SA
        de CV (en adelante, la &quot;Empresa&quot;), recopila, usa y protege la información personal de los usuarios que
        acceden a nuestra plataforma de gestión de inventarios. Al utilizar Capella Ops, usted acepta las prácticas
        descritas en este documento.
      </p>

      <h2 id="responsable-del-tratamiento-de-datos">1. Responsable del tratamiento de datos</h2>
      <p>El responsable del tratamiento de sus datos personales es:</p>
      <ul>
        <li>Razón social: Capella Ops Tecnologias SA de CV</li>
        <li>Domicilio legal: Rio Conchos, Col. Mexico, C.P. 64740, Monterrey, Nuevo León, México</li>
        <li>País / Estado: México / Nuevo León</li>
        <li>Correo de privacidad: privacidad@capellaops.com</li>
      </ul>

      <h2 id="datos-que-recopilamos">2. Datos que recopilamos</h2>
      <p>Capella Ops recopila distintos tipos de información personal según el contexto de uso:</p>

      <h3>2.1 Datos de registro y perfil</h3>
      <ul>
        <li>Nombre completo del usuario</li>
        <li>Dirección de correo electrónico (usada como identificador de cuenta)</li>
        <li>Número de teléfono (opcional, para soporte y verificación)</li>
        <li>Nombre y datos de la empresa u organización</li>
        <li>Rol o cargo dentro de la empresa</li>
      </ul>

      <h3>2.2 Datos de facturación y pagos</h3>
      <ul>
        <li>Datos de pago procesados de forma segura a través de Stripe (no almacenamos datos de tarjetas directamente)</li>
        <li>Historial de transacciones y suscripciones activas</li>
        <li>Información fiscal cuando sea requerida</li>
      </ul>

      <h3>2.3 Datos de uso de la plataforma</h3>
      <ul>
        <li>Registros de actividad (entradas, salidas, movimientos de inventario)</li>
        <li>Registros de acceso, fecha y hora, dispositivo e IP</li>
        <li>Preferencias de configuración del usuario</li>
        <li>Interacciones con funcionalidades de la plataforma</li>
      </ul>

      <h3>2.4 Datos técnicos y de analítica</h3>
      <ul>
        <li>Dirección IP y geolocalización aproximada</li>
        <li>Tipo de dispositivo, navegador y sistema operativo</li>
        <li>Cookies de sesión y análisis de comportamiento en el sitio</li>
      </ul>

      <h2 id="finalidades-del-tratamiento">3. Finalidades del tratamiento</h2>
      <p>Los datos recopilados son utilizados para:</p>
      <ul>
        <li>
          Prestación del servicio: crear y gestionar su cuenta, operar la plataforma y brindar acceso a las
          funcionalidades contratadas.
        </li>
        <li>
          Soporte técnico: atender solicitudes de ayuda, errores reportados o consultas sobre el uso de la plataforma.
        </li>
        <li>Facturación y pagos: procesar suscripciones, emitir recibos y gestionar renovaciones o cancelaciones.</li>
        <li>
          Comunicaciones operativas: enviar notificaciones de sistema, alertas de seguridad y actualizaciones
          relevantes del servicio.
        </li>
        <li>
          Comunicaciones comerciales: enviar información sobre nuevas funciones, promociones o encuestas de
          satisfacción, siempre con la posibilidad de cancelar la suscripción.
        </li>
        <li>
          Mejora del producto: analizar patrones de uso para optimizar la experiencia de usuario y desarrollar nuevas
          funcionalidades.
        </li>
        <li>Cumplimiento legal: atender obligaciones fiscales, legales y regulatorias aplicables.</li>
      </ul>

      <h2 id="base-legal-del-tratamiento">4. Base legal del tratamiento</h2>
      <p>El tratamiento de sus datos personales se fundamenta en las siguientes bases:</p>
      <ul>
        <li>Ejecución de contrato: el tratamiento es necesario para prestar el servicio contratado.</li>
        <li>
          Consentimiento: para comunicaciones comerciales y uso de cookies no esenciales, solicitamos su
          consentimiento explícito.
        </li>
        <li>Interés legítimo: para mejoras del producto y análisis de uso agregado.</li>
        <li>Cumplimiento de obligaciones legales: cuando la normativa aplicable así lo exija.</li>
      </ul>
      <p>
        La legislación de referencia varía según el país del usuario (LFPDPPP en México, GDPR en Europa, LGPD en
        Brasil, entre otras).
      </p>

      <h2 id="conservacion-de-datos">5. Conservación de datos</h2>
      <p>
        Sus datos personales serán conservados durante el tiempo necesario para cumplir con las finalidades descritas y
        en observancia de los plazos legales aplicables:
      </p>
      <ul>
        <li>Datos de cuenta activa: mientras la cuenta permanezca activa.</li>
        <li>
          Datos de cuentas canceladas: hasta 90 días posteriores a la cancelación para permitir reactivación o
          exportación.
        </li>
        <li>
          Datos de facturación: 5 años contados a partir de la fecha en que se presentaron o debieron presentarse las
          declaraciones relacionadas, conforme a la normativa fiscal mexicana vigente.
        </li>
        <li>Registros de acceso y seguridad: hasta 12 meses desde su generación.</li>
      </ul>
      <p>Transcurridos estos plazos, los datos serán eliminados de forma segura o anonimizados.</p>

      <h2 id="comparticion-con-terceros-e-integraciones">6. Compartición con terceros e integraciones</h2>
      <p>
        Capella Ops no vende ni cede datos personales a terceros con fines comerciales. Sin embargo, podemos compartir
        información con los siguientes proveedores de servicios bajo estrictos acuerdos de confidencialidad:
      </p>
      <ul>
        <li>Stripe: procesamiento de pagos y gestión de suscripciones.</li>
        <li>Proveedores de infraestructura en la nube: almacenamiento seguro de datos y hosting de la aplicación.</li>
        <li>
          Herramientas de analítica: para medir el rendimiento del sitio y la plataforma (datos anonimizados o
          pseudonimizados).
        </li>
        <li>Herramientas de soporte: sistemas de ticketing o chat para atención al cliente.</li>
      </ul>
      <p>
        Todos los terceros con acceso a datos personales están obligados contractualmente a tratarlos conforme a esta
        política y la normativa vigente.
      </p>
      <p>
        También podemos divulgar información cuando sea requerido por autoridades competentes o en cumplimiento de una
        obligación legal.
      </p>

      <h2 id="seguridad-de-la-informacion">7. Seguridad de la información</h2>
      <p>
        Implementamos medidas técnicas y organizativas para proteger sus datos contra acceso no autorizado, pérdida,
        alteración o divulgación:
      </p>
      <ul>
        <li>Cifrado TLS/HTTPS en todas las comunicaciones entre cliente y servidor.</li>
        <li>Cifrado de datos sensibles en reposo.</li>
        <li>Autenticación segura con control de sesiones.</li>
        <li>Backups automáticos periódicos con retención controlada.</li>
        <li>Control de acceso basado en roles (RBAC) dentro de la plataforma.</li>
        <li>Monitoreo de accesos y alertas de actividad sospechosa.</li>
      </ul>
      <p>
        A pesar de estas medidas, ningún sistema es completamente infalible. En caso de brecha de seguridad que afecte
        sus datos, le notificaremos conforme a los plazos y mecanismos exigidos por la ley aplicable.
      </p>

      <h2 id="derechos-del-usuario">8. Derechos del usuario</h2>
      <p>Dependiendo de su país de residencia, usted tiene derecho a:</p>
      <ul>
        <li>Acceso: solicitar información sobre los datos que tenemos de usted.</li>
        <li>Rectificación: corregir datos inexactos o incompletos.</li>
        <li>Cancelación: solicitar la eliminación de sus datos cuando ya no sean necesarios o cuando así lo determine.</li>
        <li>Oposición: oponerse al tratamiento de sus datos en determinados supuestos.</li>
        <li>
          Revocación del consentimiento: retirar el consentimiento otorgado en cualquier momento, sin efectos
          retroactivos.
        </li>
        <li>
          Limitación del uso o divulgación: solicitar que restrinjamos el uso o la divulgación de sus datos cuando
          corresponda.
        </li>
      </ul>
      <p>
        Para ejercer cualquiera de estos derechos, escríbanos a privacidad@capellaops.com con el asunto &quot;Ejercicio de
        derechos — Privacidad&quot;, indicando su nombre completo, correo registrado en la plataforma y el derecho que
        desea ejercer. Responderemos en un plazo máximo de 20 días hábiles y, en caso de resultar procedente, lo
        haremos efectivo dentro de los 15 días hábiles siguientes, conforme a la LFPDPPP.
      </p>

      <h2 id="uso-de-cookies">9. Uso de cookies</h2>
      <p>Capella Ops utiliza cookies y tecnologías similares para mejorar la experiencia del usuario:</p>

      <h3>Cookies esenciales</h3>
      <p>
        Necesarias para el funcionamiento básico de la plataforma (sesión de usuario, preferencias de idioma). No
        pueden desactivarse.
      </p>

      <h3>Cookies analíticas</h3>
      <p>
        Nos ayudan a entender cómo se usa el sitio (páginas visitadas, tiempo de sesión, rutas de navegación) para
        mejorar nuestro producto. Recopilan datos de forma agregada o pseudonimizada.
      </p>

      <h3>Cookies de preferencias</h3>
      <p>Almacenan configuraciones personales como el idioma seleccionado o el estado de ciertas funciones.</p>

      <p>
        Al continuar utilizando Capella Ops, usted acepta el uso de cookies esenciales. Para las demás categorías, le
        solicitamos consentimiento explícito cuando aplique.
      </p>

      <h2 id="transferencias-internacionales-de-datos">10. Transferencias internacionales de datos</h2>
      <p>
        Capella Ops puede almacenar o procesar sus datos en servidores ubicados fuera de su país de residencia,
        incluyendo Estados Unidos y otras regiones donde operan nuestros proveedores de infraestructura en la nube.
      </p>
      <p>
        En tales casos, garantizamos que las transferencias se realizan bajo mecanismos legalmente reconocidos, como
        cláusulas contractuales estándar o marcos de adecuación equivalentes, que aseguran un nivel de protección
        comparable al de su jurisdicción.
      </p>

      <h2 id="cambios-a-esta-politica">11. Cambios a esta política</h2>
      <p>
        Nos reservamos el derecho de actualizar esta Política de Privacidad cuando sea necesario, por ejemplo, ante
        cambios normativos, nuevas funcionalidades o ajustes en nuestras prácticas de tratamiento de datos.
      </p>
      <p>
        En caso de cambios materiales, le notificaremos por correo electrónico y/o mediante un aviso destacado dentro
        de la plataforma con al menos 15 días de anticipación. La versión vigente siempre estará disponible en esta
        página con su fecha de actualización.
      </p>
      <p>El uso continuado de Capella Ops tras la publicación de cambios implica la aceptación de la nueva versión.</p>

      <h2 id="contacto">12. Contacto</h2>
      <p>
        Para cualquier consulta, solicitud o reclamación relacionada con el tratamiento de sus datos personales, puede
        contactarnos a través de:
      </p>
      <ul>
        <li>Correo electrónico: privacidad@capellaops.com</li>
        <li>Atención al cliente: soporte@capellaops.com</li>
        <li>Domicilio: Rio Conchos, Col. Mexico, C.P. 64740, Monterrey, Nuevo León, México</li>
      </ul>
      <p>
        Nos comprometemos a atender su solicitud conforme a los plazos y procedimientos establecidos por la LFPDPPP y
        demás normativa aplicable en materia de protección de datos personales.
      </p>
    </LegalPage>
  );
}
