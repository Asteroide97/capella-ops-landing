export const portalUrl = "https://app.capellaops.com";

export const navigationLinks = [
  { href: "/producto", label: "Producto" },
  { href: "/modulos", label: "Módulos" },
  { href: "/planes", label: "Planes" },
  { href: "/demo", label: "Demo" }
];

export const secondaryNavigationLinks = [{ href: "/distribuidores", label: "Distribuidores" }];

export const legalLinks = [
  { href: "/politica-de-privacidad", label: "Política de privacidad" },
  { href: "/terminos-de-servicio", label: "Términos de servicio" }
];

export const painPoints = [
  "Inventario llevado en hojas separadas, sin historial ni alertas de movimiento.",
  "Ventas registradas en distintos puntos y sin una foto clara del día.",
  "Seguimiento comercial que depende de WhatsApp, notas sueltas o memoria del equipo.",
  "Compras, proyectos y cobranza operando sin un flujo compartido ni trazabilidad."
];

export const modules = [
  {
    title: "Inventario",
    status: "Trazabilidad en tiempo real",
    description:
      "Entradas, salidas, alertas y disponibilidad centralizada para operar con menos quiebres y menos reprocesos.",
    bullets: ["Stock por sucursal", "Alertas de mínimos", "Movimientos auditables"]
  },
  {
    title: "POS / Ventas",
    status: "Operación diaria",
    description:
      "Registra ventas, visibilidad de tickets y desempeño del día con un punto de venta alineado a inventario y clientes.",
    bullets: ["Cierres por turno", "Venta conectada al stock", "Indicadores diarios"]
  },
  {
    title: "CRM",
    status: "Seguimiento comercial",
    description:
      "Centraliza clientes, oportunidades, cobranza y contexto comercial sin dispersión entre canales.",
    bullets: ["Pipeline y seguimiento", "Cobranza visible", "Historial por cliente"]
  },
  {
    title: "Compras",
    status: "Abastecimiento controlado",
    description:
      "Planea reposiciones con información útil, aprobaciones claras y entradas consistentes al inventario.",
    bullets: ["Solicitudes internas", "Recepción vinculada", "Mejor control de proveedores"]
  },
  {
    title: "Proyectos",
    status: "Coordinación operativa",
    description:
      "Asigna tareas, hitos y responsables para que operaciones comerciales y proyectos compartan el mismo tablero.",
    bullets: ["Estados claros", "Responsables visibles", "Avance por entregable"]
  },
  {
    title: "Facturación",
    status: "Configurable / próximamente",
    description:
      "Módulo pensado para integrarse al flujo operativo con una capa configurable según el modelo del negocio.",
    bullets: ["Preparado para crecer", "Control documental", "Evolución por etapas"]
  }
] as const;

export const flowSteps = ["Compra", "Inventario", "Venta", "Cliente", "Cobranza", "Reporte"];

export const productProblems = [
  {
    title: "Inventario disperso",
    description: "Stock, ajustes y movimientos repartidos en hojas separadas que vuelven lento cualquier seguimiento."
  },
  {
    title: "Ventas sin trazabilidad",
    description: "La operación comercial se registra tarde o por partes, sin una lectura clara del día ni del cierre."
  },
  {
    title: "Clientes sin seguimiento",
    description: "Las conversaciones y pendientes comerciales viven en mensajes, notas sueltas o memoria del equipo."
  },
  {
    title: "Compras desconectadas",
    description: "Las reposiciones no tienen el contexto completo del inventario, proveedores ni ritmo de salida."
  },
  {
    title: "Proyectos sin control operativo",
    description: "Tareas, entregas y responsables avanzan sin un tablero común para coordinar ejecución."
  },
  {
    title: "Reportes tardíos o manuales",
    description: "La visibilidad llega tarde porque depende de consolidar información desde varias herramientas."
  }
] as const;

export const productBusinessFit = [
  "Negocios con inventario que necesitan control más confiable de entradas, salidas y disponibilidad.",
  "Empresas con ventas recurrentes que requieren claridad diaria sobre operación y desempeño.",
  "Operaciones con varios usuarios que ya no pueden depender de mensajes o decisiones aisladas.",
  "Equipos que necesitan más visibilidad para coordinar compras, clientes, proyectos y seguimiento.",
  "Empresas que quieren dejar Excel y WhatsApp como centro operativo antes de escalar más."
] as const;

export const productDifferentiators = [
  {
    title: "Una sola fuente de verdad",
    description: "Compras, inventario, ventas, clientes y reportes comparten el mismo criterio operativo."
  },
  {
    title: "Módulos configurables",
    description: "La plataforma crece por capas para activar solo lo que la operación realmente necesita."
  },
  {
    title: "Usuarios y roles",
    description: "Cada equipo trabaja con permisos y responsabilidades visibles dentro del mismo sistema."
  },
  {
    title: "Reportes para decidir",
    description: "La operación deja señal utilizable para detectar pendientes, ritmo comercial y puntos de fricción."
  },
  {
    title: "Escalable por plan",
    description: "La propuesta comercial permite empezar simple y ampliar cobertura conforme crece el negocio."
  }
] as const;

export const moduleCatalog = [
  {
    title: "Inventario",
    status: "Control central",
    description: "Controla el stock con movimientos auditables y visibilidad real por sucursal o frente operativo.",
    bullets: ["Entradas, salidas y ajustes", "Kardex y movimientos", "Alertas de stock"]
  },
  {
    title: "POS / Ventas",
    status: "Operación comercial",
    description: "Registra ventas con relación directa a inventario, productos y contexto de cliente.",
    bullets: ["Registro de ventas", "Productos y ventas ilimitados", "Relación con clientes e inventario"]
  },
  {
    title: "CRM",
    status: "Seguimiento comercial",
    description: "Centraliza clientes, oportunidades y acciones pendientes para no perder continuidad comercial.",
    bullets: ["Seguimiento comercial", "Clientes y oportunidades", "Cobranza y seguimiento"]
  },
  {
    title: "Compras",
    status: "Abastecimiento",
    description: "Ordena reposiciones, recepciones y control de proveedores dentro del mismo flujo operativo.",
    bullets: ["Órdenes de compra", "Recepción de inventario", "Control de proveedores"]
  },
  {
    title: "Proyectos",
    status: "Ejecución",
    description: "Da seguimiento a tareas, avances y entregables con mejor coordinación entre operación y cliente.",
    bullets: ["Seguimiento operativo", "Tareas y avances", "Relación con clientes y entregas"]
  },
  {
    title: "Facturación",
    status: "Configurable",
    description: "Se adapta a la etapa comercial del negocio y a la cobertura activada en cada plan.",
    bullets: ["Facturación configurable", "Básico: 20 facturas al mes", "Pro: 50 facturas al mes / Total: ilimitadas"]
  },
  {
    title: "Reportes",
    status: "Visibilidad",
    description: "Convierte la operación diaria en información útil para revisar desempeño y tomar decisiones.",
    bullets: ["Reportes operativos", "Visibilidad por módulo", "Decisiones con datos"]
  }
] as const;

export const modulePlans = [
  {
    name: "Básico",
    items: [
      "Inventario, alertas y kardex",
      "Reportes básicos",
      "Productos y ventas ilimitados",
      "20 facturas al mes"
    ]
  },
  {
    name: "Pro",
    items: [
      "Todo lo del Básico",
      "POS, clientes y compras",
      "Reportes operativos",
      "50 facturas al mes"
    ]
  },
  {
    name: "Total",
    items: [
      "Todo lo del Pro",
      "CRM, proyectos y cobranza",
      "Cuentas por pagar y automatizaciones",
      "Facturas ilimitadas"
    ]
  }
] as const;

export const pricingPlans = [
  {
    name: "Básico",
    monthlyPrice: 299,
    highlighted: false,
    includedUsers: "Hasta 2 usuarios incluidos",
    extraUsers: "Productos y ventas ilimitados",
    description: "La base para ordenar inventario y operación diaria con cobertura comercial esencial.",
    features: [
      "Hasta 2 usuarios incluidos",
      "Productos y ventas ilimitados",
      "20 facturas al mes"
    ]
  },
  {
    name: "Pro",
    monthlyPrice: 499,
    highlighted: true,
    includedUsers: "3 usuarios incluidos",
    extraUsers: "Usuarios adicionales disponibles con costo adicional",
    description:
      "El plan comercial más balanceado para operaciones que ya necesitan más usuarios y mayor capacidad de facturación.",
    features: [
      "3 usuarios incluidos",
      "Usuarios adicionales disponibles con costo adicional",
      "Productos y ventas ilimitados",
      "50 facturas al mes"
    ]
  },
  {
    name: "Total",
    monthlyPrice: 799,
    highlighted: false,
    includedUsers: "4 usuarios incluidos",
    extraUsers: "Usuarios adicionales disponibles con costo adicional",
    description: "La capa completa para equipos que necesitan crecer sin límite práctico en facturación mensual.",
    features: [
      "4 usuarios incluidos",
      "Usuarios adicionales disponibles con costo adicional",
      "Productos y ventas ilimitados",
      "Facturas ilimitadas"
    ]
  }
] as const;

export const pricingPeriodCopy = {
  monthly: "Facturación mensual",
  yearly: "Facturación anual con 15% de descuento"
};
