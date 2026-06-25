import type { Metadata } from "next";

import {
  flowSteps,
  productBusinessFit,
  productDifferentiators,
  productProblems
} from "@/lib/site";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

const productSignals = [
  {
    label: "Una sola operación",
    title: "Inventario, ventas y seguimiento con el mismo criterio",
    description:
      "Capella Ops ordena la operación para que compras, stock, clientes y reportes dejen de vivir en sistemas separados."
  },
  {
    label: "Visibilidad compartida",
    title: "Menos fricción entre equipos",
    description:
      "Cada área trabaja con contexto operativo más claro, sin reconstruir información en cada paso."
  }
] as const;

const productLayers = [
  "Inventario y stock auditables",
  "Ventas ligadas a clientes y productos",
  "Compras, proyectos y reportes conectados"
] as const;

export const metadata: Metadata = {
  title: "Producto",
  description:
    "Sistema operativo para controlar inventario, ventas, clientes, compras, proyectos y reportes desde una sola plataforma."
};

export default function ProductPage() {
  return (
    <>
      <section className="section-space pb-10">
        <Container className="grid gap-10 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:items-center">
          <div className="space-y-6">
            <span className="eyebrow">Producto</span>
            <h1 className="text-balance text-5xl font-semibold tracking-[-0.05em] text-ink sm:text-6xl">
              Un sistema operativo para controlar tu negocio desde un solo lugar
            </h1>
            <p className="max-w-2xl text-balance text-lg leading-8 text-slate-700">
              Capella Ops centraliza inventario, ventas, clientes, compras, proyectos y reportes para que tu
              operación deje de depender de hojas separadas, mensajes sueltos y procesos manuales.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/demo">Solicitar demo</ButtonLink>
              <ButtonLink href="/planes" variant="secondary">
                Ver planes
              </ButtonLink>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              {[
                "Inventario conectado",
                "Ventas con contexto",
                "Reportes más claros"
              ].map((item) => (
                <div key={item} className="rounded-[20px] border border-[color:var(--line)] bg-white/85 px-4 py-4">
                  <p className="text-sm font-semibold text-ink">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="surface-panel overflow-hidden p-6 sm:p-8">
            <div className="grid gap-4">
              {productSignals.map((signal, index) => (
                <div
                  key={signal.title}
                  className={`rounded-[24px] p-5 ${
                    index === 0
                      ? "bg-pine text-white"
                      : "border border-[color:var(--line)] bg-white/85 text-slate-700"
                  }`}
                >
                  <p
                    className={`text-xs font-semibold uppercase tracking-[0.16em] ${
                      index === 0 ? "text-green-100/80" : "text-green-700"
                    }`}
                  >
                    {signal.label}
                  </p>
                  <h2 className={`mt-3 text-3xl font-semibold tracking-[-0.04em] ${index === 0 ? "text-white" : "text-ink"}`}>
                    {signal.title}
                  </h2>
                  <p className={`mt-3 text-sm leading-7 ${index === 0 ? "text-green-100/80" : "text-slate-600"}`}>
                    {signal.description}
                  </p>
                </div>
              ))}

              <div className="grid gap-4 md:grid-cols-3">
                {productLayers.map((layer) => (
                  <div key={layer} className="rounded-[22px] border border-[color:var(--line)] bg-white/85 px-4 py-4">
                    <p className="text-sm font-semibold text-ink">{layer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="section-space pt-0">
        <Container className="space-y-10">
          <SectionHeading
            eyebrow="Qué resuelve"
            title="Capella Ops ataca los puntos donde la operación empieza a perder control."
            description="La plataforma resuelve fricción operativa antes de que el crecimiento la convierta en retrasos, errores y baja visibilidad."
            align="center"
          />

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {productProblems.map((problem) => (
              <article key={problem.title} className="control-card rounded-[24px] p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-green-700">Punto crítico</p>
                <h2 className="mt-4 text-2xl">{problem.title}</h2>
                <p className="mt-3 text-sm leading-7 text-slate-600">{problem.description}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-space pt-0">
        <Container className="space-y-10">
          <SectionHeading
            eyebrow="Cómo funciona"
            title="Compra → Inventario → Venta → Cliente → Cobranza → Reporte"
            description="Capella Ops conecta la cadena operativa para que cada etapa alimente a la siguiente con mejor contexto."
            align="center"
          />

          <div className="surface-panel overflow-hidden p-6 sm:p-8">
            <div className="grid gap-4 lg:grid-cols-6">
              {flowSteps.map((step, index) => (
                <div key={step} className="rounded-[22px] border border-[color:var(--line)] bg-white/85 p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-green-700">Etapa {index + 1}</p>
                  <h2 className="mt-4 text-2xl">{step}</h2>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="section-space pt-0">
        <Container className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
          <SectionHeading
            eyebrow="Encaje operativo"
            title="Sirve para negocios que ya necesitan más orden, trazabilidad y visibilidad."
            description="No está pensado para operar como una herramienta aislada, sino como una base de control para equipos con más movimiento."
          />

          <div className="grid gap-4 sm:grid-cols-2">
            {productBusinessFit.map((item) => (
              <div key={item} className="rounded-[24px] border border-[color:var(--line)] bg-white/85 p-5">
                <p className="text-sm leading-7 text-slate-700">{item}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-space pt-0">
        <Container className="space-y-10">
          <SectionHeading
            eyebrow="Diferenciadores"
            title="Una plataforma pensada para operar mejor, no solo para capturar datos."
            description="La propuesta combina control operativo, configuración por capas y visibilidad suficiente para decidir más rápido."
            align="center"
          />

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-5">
            {productDifferentiators.map((item, index) => (
              <article
                key={item.title}
                className={`rounded-[24px] border p-5 ${
                  index === 0
                    ? "border-green-700/20 bg-pine text-white"
                    : "border-[color:var(--line)] bg-white/85"
                }`}
              >
                <h2 className={`text-xl font-semibold ${index === 0 ? "text-white" : "text-ink"}`}>{item.title}</h2>
                <p className={`mt-3 text-sm leading-7 ${index === 0 ? "text-green-100/80" : "text-slate-600"}`}>
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-space pt-0">
        <Container>
          <div className="surface-panel p-8 sm:p-10 lg:p-12">
            <div className="grid gap-8 lg:grid-cols-[minmax(0,0.92fr)_auto] lg:items-end">
              <div className="space-y-4">
                <span className="eyebrow">Siguiente paso</span>
                <h2 className="text-balance text-4xl font-semibold tracking-[-0.05em] text-ink sm:text-5xl">
                  Ordena tu operación antes de que el crecimiento la vuelva más difícil de controlar.
                </h2>
                <p className="max-w-2xl text-lg leading-8 text-slate-700">
                  Revisa cómo se vería tu proceso dentro de Capella Ops y qué plan hace sentido para empezar.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                <ButtonLink href="/demo">Solicitar demo</ButtonLink>
                <ButtonLink href="/planes" variant="secondary">
                  Ver planes
                </ButtonLink>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
