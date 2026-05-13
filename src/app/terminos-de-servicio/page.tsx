import type { Metadata } from "next";

import { LegalPage } from "@/components/legal/legal-page";

const termsSections = [
  {
    href: "#objeto-del-servicio",
    label: "1. Objeto del servicio"
  },
  {
    href: "#definiciones",
    label: "2. Definiciones"
  },
  {
    href: "#registro-y-responsabilidad-sobre-credenciales",
    label: "3. Registro y responsabilidad sobre credenciales"
  },
  {
    href: "#uso-permitido-y-uso-prohibido",
    label: "4. Uso permitido y uso prohibido"
  },
  {
    href: "#planes-pagos-renovaciones-y-cancelaciones",
    label: "5. Planes, pagos, renovaciones y cancelaciones"
  },
  {
    href: "#disponibilidad-del-servicio-y-limitaciones-tecnicas",
    label: "6. Disponibilidad del servicio y limitaciones técnicas"
  },
  {
    href: "#integraciones-con-terceros",
    label: "7. Integraciones con terceros"
  },
  {
    href: "#propiedad-intelectual",
    label: "8. Propiedad intelectual"
  },
  {
    href: "#datos-del-cliente-y-responsabilidad-sobre-la-informacion-cargada",
    label: "9. Datos del cliente y responsabilidad sobre la información cargada"
  },
  {
    href: "#suspension-y-terminacion-de-cuentas",
    label: "10. Suspensión y terminación de cuentas"
  },
  {
    href: "#exclusion-y-limitacion-de-responsabilidad",
    label: "11. Exclusión y limitación de responsabilidad"
  },
  {
    href: "#indemnizacion",
    label: "12. Indemnización"
  },
  {
    href: "#modificaciones-al-servicio-y-a-los-terminos",
    label: "13. Modificaciones al servicio y a los términos"
  },
  {
    href: "#ley-aplicable-y-jurisdiccion",
    label: "14. Ley aplicable y jurisdicción"
  },
  {
    href: "#contacto-legal",
    label: "15. Contacto legal"
  }
] as const;

export const metadata: Metadata = {
  title: "Términos de servicio",
  description:
    "Consulta los Términos de Servicio completos de Capella Ops sobre uso de la plataforma, planes, pagos, limitaciones, propiedad intelectual y jurisdicción."
};

export default function TermsOfServicePage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Términos de Servicio"
      description="Esta página contiene el texto completo aplicable al acceso, uso y condiciones legales de Capella Ops."
      lastUpdated="12 de mayo de 2026"
      tableOfContents={termsSections}
    >
      <p>
        Los presentes Términos de Servicio (en adelante &quot;los Términos&quot;) regulan el acceso y uso de la plataforma
        Capella Ops, marca comercial operada por Capella Ops Tecnologias SA de CV (en adelante, la &quot;Empresa&quot;). Al
        registrarse o utilizar la plataforma, usted (en adelante &quot;el Usuario&quot;) acepta quedar vinculado por estos
        Términos. Si no está de acuerdo, no debe acceder ni utilizar el servicio.
      </p>

      <h2 id="objeto-del-servicio">1. Objeto del servicio</h2>
      <p>
        Capella Ops es una plataforma de software como servicio (SaaS) diseñada para la gestión de inventarios de
        talleres, carpinterías y empresas del sector manufacturero. El servicio incluye, entre otras funcionalidades:
      </p>
      <ul>
        <li>Registro y control de entradas y salidas de inventario</li>
        <li>Gestión de múltiples almacenes y sucursales</li>
        <li>Trazabilidad de movimientos por usuario y fecha</li>
        <li>Generación de reportes y exportación de datos</li>
        <li>Alertas automáticas de stock mínimo</li>
        <li>Escáner SKU desde dispositivos móviles</li>
      </ul>
      <p>
        Las funcionalidades disponibles varían según el plan contratado. La Empresa se reserva el derecho de
        modificar, agregar o eliminar características con previo aviso.
      </p>

      <h2 id="definiciones">2. Definiciones</h2>
      <ul>
        <li>Plataforma: el software Capella Ops accesible vía web y/o aplicación móvil.</li>
        <li>Usuario: cualquier persona física que accede a la Plataforma mediante una cuenta registrada.</li>
        <li>Cuenta: el perfil de acceso individual asociado a un correo electrónico y contraseña.</li>
        <li>
          Empresa Cliente: la organización o persona moral que contrata el servicio y bajo cuyo nombre se administran
          uno o más Usuarios.
        </li>
        <li>
          Administrador: Usuario con privilegios de gestión sobre otros usuarios, almacenes y configuraciones dentro de
          la Empresa Cliente.
        </li>
        <li>
          Suscripción: el plan de pago contratado que determina las funcionalidades, límites y precio del servicio.
        </li>
        <li>
          Contenido del Cliente: cualquier dato, información o archivo que el Usuario cargue, registre o genere dentro
          de la Plataforma.
        </li>
      </ul>

      <h2 id="registro-y-responsabilidad-sobre-credenciales">3. Registro y responsabilidad sobre credenciales</h2>
      <p>
        Para acceder a Capella Ops es necesario crear una cuenta proporcionando información veraz, completa y
        actualizada. El Usuario es responsable de:
      </p>
      <ul>
        <li>Mantener la confidencialidad de sus credenciales de acceso (usuario y contraseña).</li>
        <li>
          Todas las acciones realizadas desde su cuenta, incluyendo las de terceros que accedan con sus credenciales.
        </li>
        <li>
          Notificar de inmediato a Capella Ops ante cualquier uso no autorizado de su cuenta o brecha de seguridad
          detectada.
        </li>
      </ul>
      <p>
        La Empresa no será responsable de pérdidas derivadas del uso no autorizado de las credenciales del Usuario,
        salvo negligencia directamente imputable a la Empresa.
      </p>
      <p>
        Está expresamente prohibido compartir credenciales entre distintas personas físicas, crear cuentas falsas o
        robots de registro automatizado.
      </p>

      <h2 id="uso-permitido-y-uso-prohibido">4. Uso permitido y uso prohibido</h2>
      <h3>Uso permitido</h3>
      <p>
        El servicio está destinado exclusivamente para uso empresarial legítimo de gestión de inventarios. El Usuario
        se compromete a utilizarlo conforme a estos Términos, la legislación aplicable y las buenas prácticas del
        sector.
      </p>

      <h3>Usos prohibidos</h3>
      <p>Queda expresamente prohibido:</p>
      <ul>
        <li>Usar la Plataforma para actividades ilegales, fraudulentas o que infrinjan derechos de terceros.</li>
        <li>Intentar acceder sin autorización a sistemas, cuentas o datos de otros usuarios.</li>
        <li>Realizar ingeniería inversa, descompilar o modificar el código fuente de la Plataforma.</li>
        <li>Introducir virus, malware, spyware o cualquier código malicioso.</li>
        <li>
          Realizar pruebas de carga, scraping masivo o actividades que comprometan el rendimiento del servicio para
          otros usuarios.
        </li>
        <li>Revender, sublicenciar o transferir el acceso a la Plataforma a terceros sin autorización expresa.</li>
        <li>Usar la Plataforma para almacenar o procesar datos que violen derechos de privacidad de terceros.</li>
      </ul>
      <p>
        El incumplimiento de estas disposiciones podrá resultar en la suspensión inmediata de la cuenta sin derecho a
        reembolso.
      </p>

      <h2 id="planes-pagos-renovaciones-y-cancelaciones">5. Planes, pagos, renovaciones y cancelaciones</h2>
      <h3>5.1 Planes disponibles</h3>
      <p>
        Capella Ops ofrece planes de suscripción mensual o anual con distintos niveles de funcionalidades y límites
        operativos, según se detalla en la página de precios vigente.
      </p>

      <h3>5.2 Facturación</h3>
      <p>
        Los cargos se procesan al inicio de cada período de facturación a través de Stripe. Al contratar, el Usuario
        autoriza cargos recurrentes hasta que cancele la suscripción. Los precios se muestran en pesos mexicanos (MXN)
        e incluyen IVA y demás impuestos o retenciones aplicables, salvo que se indique expresamente lo contrario.
      </p>

      <h3>5.3 Período de prueba</h3>
      <p>
        Los nuevos registros tienen acceso a un período de prueba gratuito de 14 días sin requerir tarjeta de crédito,
        salvo indicación contraria al momento del registro.
      </p>

      <h3>5.4 Renovación automática</h3>
      <p>
        Las suscripciones se renuevan automáticamente al finalizar cada período. El Usuario puede cancelar en cualquier
        momento desde su panel de configuración o contactando a soporte antes del siguiente ciclo de facturación.
      </p>

      <h3>5.5 Cancelación y reembolsos</h3>
      <p>
        La cancelación es efectiva al final del período facturado en curso. No se emiten reembolsos proporcionales por
        uso parcial del período, salvo error de facturación imputable a la Empresa o disposición legal aplicable.
      </p>

      <h3>5.6 Cambios de precio</h3>
      <p>
        La Empresa podrá modificar los precios con un aviso mínimo de 30 días antes del siguiente ciclo de
        facturación. La continuación del uso del servicio tras el aviso implica la aceptación del nuevo precio.
      </p>

      <h2 id="disponibilidad-del-servicio-y-limitaciones-tecnicas">
        6. Disponibilidad del servicio y limitaciones técnicas
      </h2>
      <p>
        La Empresa se esfuerza por mantener la Plataforma disponible de forma continua, pero no garantiza disponibilidad
        ininterrumpida. Se pueden presentar interrupciones por:
      </p>
      <ul>
        <li>Mantenimiento programado (con aviso previo cuando sea posible)</li>
        <li>Fallas técnicas de terceros (proveedores de nube, telecomunicaciones, etc.)</li>
        <li>Causas de fuerza mayor</li>
        <li>Emergencias de seguridad</li>
      </ul>
      <p>
        La Empresa no será responsable por pérdidas derivadas de interrupciones del servicio fuera de su control
        razonable. El objetivo de disponibilidad es de 99.5% mensual, medido de forma agregada, excluyendo ventanas de
        mantenimiento previamente comunicadas.
      </p>

      <h2 id="integraciones-con-terceros">7. Integraciones con terceros</h2>
      <p>
        Capella Ops puede integrarse con servicios de terceros (por ejemplo, Stripe para pagos, herramientas de
        analítica, etc.). El uso de estas integraciones está sujeto a los términos y políticas propias de cada
        proveedor, sobre los cuales la Empresa no tiene control ni responsabilidad.
      </p>
      <p>
        El Usuario reconoce que al activar integraciones con terceros, cierta información podrá ser compartida con
        dichos proveedores conforme a sus propias políticas.
      </p>
      <p>La Empresa no garantiza la disponibilidad o continuidad de servicios de terceros integrados.</p>

      <h2 id="propiedad-intelectual">8. Propiedad intelectual</h2>
      <p>
        Todos los derechos de propiedad intelectual sobre la Plataforma, incluyendo el software, diseño, marca,
        logotipos, código fuente, documentación y contenido generado por la Empresa, son y permanecen propiedad
        exclusiva de Capella Ops Tecnologias SA de CV o sus licenciantes.
      </p>
      <p>
        El presente acuerdo no transfiere al Usuario ningún derecho de propiedad intelectual. Se concede únicamente una
        licencia de uso limitada, no exclusiva, intransferible y revocable para acceder y utilizar la Plataforma
        conforme a estos Términos.
      </p>
      <p>
        El Usuario no podrá copiar, distribuir, modificar, crear obras derivadas, descompilar ni realizar ingeniería
        inversa sobre ningún componente de la Plataforma.
      </p>

      <h2 id="datos-del-cliente-y-responsabilidad-sobre-la-informacion-cargada">
        9. Datos del cliente y responsabilidad sobre la información cargada
      </h2>
      <p>
        El Usuario es el único responsable del Contenido del Cliente que cargue, registre o procese en la Plataforma,
        incluyendo su legalidad, exactitud e integridad.
      </p>
      <p>
        La Empresa actúa como encargado del tratamiento respecto a los datos personales de terceros que el Usuario
        ingrese en la Plataforma (por ejemplo, datos de empleados). El Usuario, como responsable de dichos datos,
        garantiza que cuenta con las bases legales necesarias para su tratamiento.
      </p>
      <p>
        La Empresa no revisará ni auditará el Contenido del Cliente, salvo cuando sea necesario para proporcionar
        soporte técnico, cumplir con obligaciones legales o proteger la seguridad del sistema.
      </p>
      <p>
        En caso de cancelación o terminación, el Usuario podrá exportar su Contenido durante el período de gracia
        establecido (ver sección 10). Transcurrido dicho período, los datos serán eliminados de forma permanente.
      </p>

      <h2 id="suspension-y-terminacion-de-cuentas">10. Suspensión y terminación de cuentas</h2>
      <h3>10.1 Suspensión por incumplimiento</h3>
      <p>La Empresa podrá suspender o cancelar una cuenta de forma inmediata y sin previo aviso en caso de:</p>
      <ul>
        <li>Incumplimiento grave de estos Términos</li>
        <li>Actividad fraudulenta o ilegal detectada</li>
        <li>Falta de pago tras período de gracia</li>
        <li>Actividad que comprometa la seguridad o integridad de la Plataforma</li>
      </ul>

      <h3>10.2 Cancelación voluntaria</h3>
      <p>
        El Usuario puede cancelar su cuenta en cualquier momento desde el panel de configuración. La cuenta
        permanecerá activa hasta el final del período facturado.
      </p>

      <h3>10.3 Exportación de datos tras cancelación</h3>
      <p>
        Tras la cancelación, el Usuario tendrá 90 días para exportar su información. Pasado este período, los datos
        serán eliminados de forma definitiva y no podrán recuperarse.
      </p>

      <h2 id="exclusion-y-limitacion-de-responsabilidad">11. Exclusión y limitación de responsabilidad</h2>
      <p>En la máxima medida permitida por la ley aplicable:</p>
      <ul>
        <li>
          La Plataforma se proporciona &quot;tal cual&quot; y &quot;según disponibilidad&quot;, sin garantías expresas ni implícitas de
          idoneidad para un fin particular.
        </li>
        <li>
          La Empresa no será responsable por pérdida de datos, lucro cesante, daños indirectos, incidentales,
          especiales o consecuentes, aun cuando haya sido advertida de su posibilidad.
        </li>
        <li>
          La responsabilidad total de la Empresa hacia el Usuario no podrá exceder el monto pagado por el Usuario en
          los 3 meses anteriores al evento que originó la reclamación.
        </li>
        <li>
          La Empresa no se responsabiliza por el uso incorrecto de la Plataforma, ni por decisiones de negocio tomadas
          con base en la información generada por el sistema.
        </li>
      </ul>
      <p>
        Algunas jurisdicciones no permiten la exclusión de ciertas garantías o la limitación de responsabilidad, por lo
        que las anteriores limitaciones pueden no aplicarse en su totalidad.
      </p>

      <h2 id="indemnizacion">12. Indemnización</h2>
      <p>
        El Usuario acepta indemnizar, defender y mantener indemne a la Empresa, sus directivos, empleados, socios y
        proveedores frente a cualquier reclamación, daño, pérdida, costo o gasto (incluyendo honorarios legales
        razonables) derivados de:
      </p>
      <ul>
        <li>El incumplimiento de estos Términos por parte del Usuario</li>
        <li>El uso indebido de la Plataforma</li>
        <li>La violación de derechos de terceros en relación con el Contenido del Cliente</li>
        <li>Cualquier declaración falsa o inexacta realizada por el Usuario</li>
      </ul>

      <h2 id="modificaciones-al-servicio-y-a-los-terminos">13. Modificaciones al servicio y a los términos</h2>
      <p>
        La Empresa se reserva el derecho de modificar, suspender o discontinuar cualquier funcionalidad de la
        Plataforma con previo aviso razonable, salvo en casos de emergencia de seguridad o cumplimiento legal.
      </p>
      <p>
        Los presentes Términos podrán ser actualizados periódicamente. Los cambios materiales serán notificados al
        Usuario con al menos 15 días de anticipación por correo electrónico o mediante aviso en la Plataforma.
      </p>
      <p>
        El uso continuado del servicio tras la fecha de vigencia de los nuevos Términos constituye aceptación de los
        mismos. Si el Usuario no está de acuerdo, deberá cancelar su suscripción antes de que los cambios entren en
        vigor.
      </p>

      <h2 id="ley-aplicable-y-jurisdiccion">14. Ley aplicable y jurisdicción</h2>
      <p>
        Los presentes Términos se rigen e interpretan conforme a las leyes vigentes en Mexico / Nuevo Leon, sin dar
        efecto a principios de conflicto de leyes.
      </p>
      <p>
        Cualquier controversia derivada de o relacionada con estos Términos que no pueda resolverse mediante
        negociación directa será sometida a la jurisdicción exclusiva de los tribunales competentes de Monterrey, Nuevo
        Leon, Mexico.
      </p>
      <p>
        Antes de iniciar cualquier acción legal, las partes acuerdan intentar resolver la disputa de buena fe mediante
        comunicación directa por un período mínimo de 30 días.
      </p>

      <h2 id="contacto-legal">15. Contacto legal</h2>
      <p>
        Para notificaciones legales, reclamaciones o cualquier asunto relacionado con estos Términos, puede
        contactarnos a través de:
      </p>
      <ul>
        <li>Razón social: Capella Ops Tecnologias SA de CV</li>
        <li>Domicilio: Rio Conchos, Col. Mexico, C.P. 64740, Monterrey, Nuevo Leon, Mexico</li>
        <li>Correo legal: privacidad@capellaops.com</li>
        <li>Soporte general: soporte@capellaops.com</li>
      </ul>
    </LegalPage>
  );
}
