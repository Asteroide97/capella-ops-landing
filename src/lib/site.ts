export const portalUrl = "https://app.capellaops.com";

export const navigationLinks = [
  { href: "/#producto", label: "Producto" },
  { href: "/#modulos", label: "Módulos" },
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

export const pricingPlans = [
  {
    name: "Básico",
    monthlyPrice: 299,
    highlighted: false,
    includedUsers: "Hasta 2 usuarios incluidos",
    extraUsers: "Ideal para operaciones pequeñas y control inicial.",
    description: "La base para ordenar inventario y operación diaria sin cargar al equipo con complejidad innecesaria.",
    features: [
      "Inventario",
      "Alertas de stock",
      "Kardex y movimientos",
      "Reportes básicos",
      "Soporte estándar"
    ]
  },
  {
    name: "Pro",
    monthlyPrice: 499,
    highlighted: true,
    includedUsers: "3 usuarios incluidos",
    extraUsers: "Usuarios adicionales disponibles con costo adicional.",
    description: "El plan comercial más balanceado para negocios que ya operan ventas, compras y seguimiento diario.",
    features: [
      "Todo lo del Básico",
      "POS y ventas",
      "Clientes",
      "Compras",
      "Facturación cuando esté habilitada comercialmente",
      "Reportes operativos"
    ]
  },
  {
    name: "Total",
    monthlyPrice: 799,
    highlighted: false,
    includedUsers: "4 usuarios incluidos",
    extraUsers: "Usuarios adicionales disponibles con costo adicional.",
    description: "La capa completa para equipos que necesitan coordinar operación, clientes, proyectos y cobranza.",
    features: [
      "Todo lo del Pro",
      "CRM",
      "Gestión de proyectos",
      "Cobranza",
      "Cuentas por pagar",
      "Automatizaciones operativas",
      "Reportes avanzados"
    ]
  }
] as const;

export const pricingPeriodCopy = {
  monthly: "Facturación mensual",
  yearly: "Facturación anual con 15% de descuento"
};
