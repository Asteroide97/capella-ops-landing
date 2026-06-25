import type { Metadata } from "next";

import { moduleCatalog, modulePlans } from "@/lib/site";
import { ModuleCard } from "@/components/marketing/module-card";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

const moduleLabels = [
  "Inventario",
  "POS / Ventas",
  "CRM",
  "Compras",
  "Proyectos",
  "Facturación",
  "Reportes"
] as const;

export const metadata: Metadata = {
  title: "Módulos",
  description:
    "Conoce los módulos de Capella Ops para inventario, POS, CRM, compras, proyectos, facturación y reportes."
};

export default function ModulesPage() {
  return (
    <>
      <section className="section-space pb-10">
        <Container className="grid gap-10 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:items-center">
          <div className="space-y-6">
            <span className="eyebrow">Módulos</span>
            <h1 className="text-balance text-5xl font-semibold tracking-[-0.05em] text-ink sm:text-6xl">
              Módulos que conectan inventario, ventas y operación
            </h1>
            <p className="max-w-2xl text-balance text-lg leading-8 text-slate-700">
              Capella Ops se adapta por módulos para que cada negocio use las herramientas que necesita según su etapa
              operativa.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/demo">Solicitar demo</ButtonLink>
              <ButtonLink href="/planes" variant="secondary">
                Ver planes
              </ButtonLink>
            </div>
          </div>

          <div className="surface-panel overflow-hidden p-6 sm:p-8">
            <div className="rounded-[24px] bg-pine p-5 text-white">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-green-100/80">Capas operativas</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em]">Activa lo que necesitas hoy</h2>
              <p className="mt-3 text-sm leading-7 text-green-100/80">
                Cada módulo se conecta con el resto para evitar herramientas sueltas y ampliar control cuando la
                operación crece.
              </p>
            </div>

            <div className="mt-4 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {moduleLabels.map((item) => (
                <div key={item} className="rounded-[22px] border border-[color:var(--line)] bg-white/85 px-4 py-4">
                  <p className="text-sm font-semibold text-ink">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="section-space pt-0">
        <Container className="space-y-10">
          <SectionHeading
            eyebrow="Cobertura funcional"
            title="Cada módulo explica una parte concreta del control operativo."
            description="La idea no es sumar herramientas por separado, sino cubrir inventario, ventas, clientes y ejecución con piezas conectadas."
            align="center"
          />

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {moduleCatalog.map((module) => (
              <ModuleCard key={module.title} {...module} />
            ))}
          </div>
        </Container>
      </section>

      <section className="section-space pt-0">
        <Container className="space-y-10">
          <SectionHeading
            eyebrow="Módulos por plan"
            title="La cobertura cambia por etapa operativa y profundidad del control."
            description="Cada plan amplía la capacidad del sistema manteniendo la lógica comercial actual de Capella Ops."
            align="center"
          />

          <div className="grid gap-5 xl:grid-cols-3">
            {modulePlans.map((plan, index) => (
              <article
                key={plan.name}
                className={`rounded-[26px] border p-6 ${
                  index === 1
                    ? "border-green-700/20 bg-pine text-white"
                    : "border-[color:var(--line)] bg-white/85"
                }`}
              >
                <p
                  className={`text-xs font-semibold uppercase tracking-[0.18em] ${
                    index === 1 ? "text-green-100/80" : "text-green-700"
                  }`}
                >
                  Plan {plan.name}
                </p>
                <ul className="mt-5 space-y-3">
                  {plan.items.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span
                        className={`mt-2 h-2 w-2 shrink-0 rounded-full ${
                          index === 1 ? "bg-green-300" : "bg-green-600"
                        }`}
                      />
                      <span className={`text-sm leading-7 ${index === 1 ? "text-green-50" : "text-slate-700"}`}>
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
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
                <span className="eyebrow">Escalabilidad</span>
                <h2 className="text-balance text-4xl font-semibold tracking-[-0.05em] text-ink sm:text-5xl">
                  Activa solo lo que necesitas hoy y escala cuando tu operación crezca.
                </h2>
                <p className="max-w-2xl text-lg leading-8 text-slate-700">
                  Revisa la cobertura por plan y decide qué combinación de módulos tiene más sentido para tu etapa.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                <ButtonLink href="/planes">Ver planes</ButtonLink>
                <ButtonLink href="/demo" variant="secondary">
                  Solicitar demo
                </ButtonLink>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
