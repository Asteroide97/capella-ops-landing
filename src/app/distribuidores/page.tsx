import type { Metadata } from "next";

import { DistributorCalculator } from "@/components/marketing/distributor-calculator";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

const whatsappUrl =
  "https://wa.me/528130822452?text=Hola,%20quiero%20ser%20distribuidor%20de%20Capella%20Ops";

const partnerBullets = [
  "Sin inversión inicial",
  "Ingresos recurrentes por clientes activos",
  "Producto SaaS listo para vender",
  "Soporte comercial y técnico",
  "Ideal para consultores, agencias e implementadores"
];

const partnerSteps = [
  {
    title: "Te registras",
    description: "Solicitas acceso al programa de distribuidores y compartes el tipo de mercado que ya atiendes."
  },
  {
    title: "Presentas Capella Ops",
    description: "Usas materiales comerciales, demo y acompañamiento para prospectar y avanzar oportunidades reales."
  },
  {
    title: "Ganas por clientes activos",
    description: "Recibes comisión sobre clientes que se mantengan pagando su suscripción, según tu convenio comercial."
  }
];

const modulesForPartners = [
  "Inventario",
  "POS",
  "CRM",
  "Compras",
  "Gestión de proyectos",
  "Facturación configurable",
  "Reportes"
];

export const metadata: Metadata = {
  title: "Distribuidores",
  description:
    "Conviértete en distribuidor de Capella Ops y genera ingresos recurrentes ofreciendo una plataforma B2B para inventario, ventas, clientes y proyectos."
};

export default function DistributorsPage() {
  return (
    <>
      <section className="section-space pb-12">
        <Container className="grid gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-center">
          <div className="space-y-6">
            <span className="eyebrow">Programa comercial</span>
            <h1 className="text-balance text-5xl font-semibold tracking-[-0.05em] text-ink sm:text-6xl">
              Conviértete en distribuidor de Capella Ops
            </h1>
            <p className="max-w-2xl text-balance text-lg leading-8 text-slate-700">
              Lleva un sistema operativo empresarial a negocios que necesitan controlar inventario, ventas, clientes y
              proyectos desde un solo lugar.
            </p>

            <div className="grid gap-3 sm:grid-cols-2">
              {partnerBullets.map((bullet) => (
                <div key={bullet} className="flex items-center gap-3 rounded-[20px] border border-[color:var(--line)] bg-white/80 px-4 py-4">
                  <span className="h-2.5 w-2.5 rounded-full bg-green-600" />
                  <p className="text-sm font-medium text-slate-700">{bullet}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <ButtonLink href={whatsappUrl} target="_blank" rel="noreferrer">
                Quiero ser distribuidor
              </ButtonLink>
              <ButtonLink href="/demo" variant="secondary">
                Solicitar información
              </ButtonLink>
            </div>
          </div>

          <div className="surface-panel overflow-hidden p-6 sm:p-8">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-[24px] bg-pine p-5 text-white">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-green-100/80">Comisión sugerida</p>
                <p className="mt-3 text-4xl font-semibold tracking-[-0.05em]">30%</p>
                <p className="mt-3 text-sm leading-7 text-green-100/80">
                  Sobre la mensualidad del cliente durante los primeros 12 meses como referencia comercial editable.
                </p>
              </div>
              <div className="rounded-[24px] border border-[color:var(--line)] bg-white/85 p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-green-700">Sin inversión inicial</p>
                <p className="mt-3 text-3xl font-semibold tracking-[-0.05em] text-ink">Listo para vender</p>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Puedes entrar al programa, usar la demo y apoyarte en materiales comerciales sin desarrollar un
                  producto propio.
                </p>
              </div>
              <div className="rounded-[24px] border border-[color:var(--line)] bg-white/85 p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-green-700">Ideal para partners</p>
                <p className="mt-3 text-3xl font-semibold tracking-[-0.05em] text-ink">B2B recurrente</p>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Vendes una solución que resuelve operación y te deja una relación comercial más durable.
                </p>
              </div>
              <div className="rounded-[24px] border border-[color:var(--line)] bg-white/85 p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-green-700">Servicios extra</p>
                <p className="mt-3 text-3xl font-semibold tracking-[-0.05em] text-ink">Más valor por cuenta</p>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Puedes sumar consultoría, implementación, soporte y capacitación como parte de tu oferta.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="section-space pt-0">
        <Container className="space-y-10">
          <SectionHeading
            eyebrow="Ingresos estimados"
            title="¿Cuánto puedes ganar?"
            description="La referencia comercial es simple: comisión sugerida de 30% y un ingreso recurrente ligado a clientes activos."
            align="center"
          />
          <DistributorCalculator />
        </Container>
      </section>

      <section className="section-space pt-0">
        <Container className="space-y-10">
          <SectionHeading
            eyebrow="Cómo funciona"
            title="Tres pasos para entrar al programa y empezar a vender."
            description="El flujo comercial está pensado para ser corto: registro, presentación y comisión por clientes activos."
            align="center"
          />
          <div className="grid gap-5 xl:grid-cols-3">
            {partnerSteps.map((step, index) => (
              <article key={step.title} className="control-card rounded-[26px] p-7">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-green-700">Paso 0{index + 1}</p>
                <h2 className="mt-4 text-3xl">{step.title}</h2>
                <p className="mt-4 text-sm leading-7 text-slate-600">{step.description}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-space pt-0">
        <Container className="grid gap-10 lg:grid-cols-[minmax(0,0.88fr)_minmax(0,1.12fr)]">
          <SectionHeading
            eyebrow="Qué vendes"
            title="Una plataforma comercializable con módulos claros y casos de uso directos."
            description="Capella Ops se presenta como una solución operativa para negocios que necesitan más control en inventario, ventas, clientes y ejecución."
          />

          <div className="surface-panel p-6 sm:p-8">
            <div className="grid gap-4 sm:grid-cols-2">
              {modulesForPartners.map((module) => (
                <div key={module} className="rounded-[22px] border border-[color:var(--line)] bg-white/85 px-4 py-4">
                  <p className="text-sm font-semibold text-ink">{module}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Módulo comercializable dentro de una propuesta operativa más completa.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="section-space pt-0">
        <Container>
          <div className="surface-panel p-8 sm:p-10 lg:p-12">
            <div className="grid gap-8 lg:grid-cols-[minmax(0,0.95fr)_auto] lg:items-end">
              <div className="space-y-4">
                <span className="eyebrow">Siguiente paso</span>
                <h2 className="text-balance text-4xl font-semibold tracking-[-0.05em] text-ink sm:text-5xl">
                  Si ya hablas con negocios que necesitan más control, puedes sumar Capella Ops a tu oferta comercial.
                </h2>
                <p className="max-w-2xl text-lg leading-8 text-slate-700">
                  Conversemos sobre tu mercado y el tipo de convenio comercial con el que tendría sentido empezar.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                <ButtonLink href={whatsappUrl} target="_blank" rel="noreferrer">
                  Quiero ser distribuidor
                </ButtonLink>
                <ButtonLink href="/demo" variant="secondary">
                  Solicitar información
                </ButtonLink>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
