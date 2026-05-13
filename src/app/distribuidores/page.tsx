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

const partnerProfiles = [
  "Consultores empresariales",
  "Agencias digitales",
  "Implementadores de software",
  "Despachos contables y administrativos",
  "Revendedores de tecnología",
  "Especialistas en operaciones"
];

const partnerAssets = [
  "Cuenta demo",
  "Material comercial",
  "Capacitación inicial",
  "Acompañamiento en primeras ventas",
  "Soporte para implementación",
  "Posibilidad de vender servicios adicionales"
];

const sellReasons = [
  "Es un producto B2B con cobro recurrente.",
  "Resuelve problemas reales de inventario, ventas y operación.",
  "Puede venderse a negocios con procesos internos y puntos de fricción claros.",
  "Deja espacio para servicios complementarios de implementación, consultoría, capacitación y soporte.",
  "Permite construir relaciones más largas con clientes que necesitan acompañamiento continuo."
];

const faqItems = [
  {
    question: "¿Necesito invertir dinero?",
    answer: "No para iniciar. El programa puede comenzar sin compra de licencias, sujeto a aprobación comercial."
  },
  {
    question: "¿Cuánto puedo ganar?",
    answer: "Depende del plan, del número de clientes y del convenio. La referencia comercial sugerida es 30%."
  },
  {
    question: "¿Mis clientes reciben soporte?",
    answer: "Sí. Capella Ops puede acompañar la operación y el distribuidor también puede ofrecer servicios adicionales."
  },
  {
    question: "¿Puedo vender implementación o consultoría?",
    answer: "Sí. Puedes agregar servicios propios alrededor del software según tu modelo de negocio."
  },
  {
    question: "¿Dónde puedo vender Capella Ops?",
    answer: "Principalmente en México al inicio, con posibilidad de expansión según el programa y el partner."
  },
  {
    question: "¿Qué tipo de negocios son ideales?",
    answer: "Negocios con inventario, ventas, compras, clientes, cobranza o proyectos que necesiten más control."
  },
  {
    question: "¿La facturación ya está incluida?",
    answer: "Se presenta como módulo configurable o sujeto a habilitación según disponibilidad comercial y contexto fiscal."
  }
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
            title="Una estructura comercial simple para visualizar recurrencia desde el inicio."
            description="No necesitas un configurador complejo para entender el modelo. Puedes usar esta calculadora visual como referencia comercial editable."
            align="center"
          />
          <DistributorCalculator />
        </Container>
      </section>

      <section className="section-space pt-0">
        <Container className="space-y-10">
          <SectionHeading
            eyebrow="Cómo funciona"
            title="Tres pasos para entrar al programa y empezar a mover oportunidades."
            description="La estructura busca que el partner tenga claridad comercial, acompañamiento inicial y una ruta directa para empezar a vender."
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
            title="Una plataforma comercializable por módulos, con problemas concretos que resolver."
            description="Capella Ops se puede presentar como sistema operativo para negocios que ya sienten fricción en inventario, ventas, clientes, compras y coordinación."
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
        <Container className="space-y-10">
          <SectionHeading
            eyebrow="Para quién es"
            title="Partners que ya tienen relación con negocios y quieren sumar una capa SaaS vendible."
            description="La mejor afinidad aparece cuando el partner ya entiende procesos, implementación o dolor operativo en empresas con crecimiento."
            align="center"
          />
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {partnerProfiles.map((profile) => (
              <article key={profile} className="control-card rounded-[24px] p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-green-700">Perfil ideal</p>
                <h2 className="mt-4 text-2xl">{profile}</h2>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Puede integrar Capella Ops a una conversación de mejora operativa y digitalización real.
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-space pt-0">
        <Container className="grid gap-10 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)]">
          <SectionHeading
            eyebrow="Lo que recibirás"
            title="Herramientas para vender mejor y entrar con más seguridad a las primeras cuentas."
            description="El objetivo no es solo dar acceso al programa, sino ayudarte a aterrizar el producto comercialmente y ejecutar mejor tus primeras oportunidades."
          />
          <div className="surface-panel p-6 sm:p-8">
            <div className="grid gap-4 sm:grid-cols-2">
              {partnerAssets.map((asset) => (
                <div key={asset} className="flex items-start gap-3 rounded-[22px] border border-[color:var(--line)] bg-white/85 px-4 py-4">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-green-600" />
                  <p className="text-sm leading-7 text-slate-700">{asset}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="section-space pt-0">
        <Container>
          <div className="surface-panel overflow-hidden bg-pine p-8 text-white sm:p-10 lg:p-12">
            <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
              <div className="space-y-4">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-green-100/80">
                  Por qué vender Capella Ops
                </span>
                <h2 className="text-balance text-4xl font-semibold tracking-[-0.05em] text-white sm:text-5xl">
                  Un producto B2B con recurrencia, casos reales y espacio para servicios de alto valor.
                </h2>
                <p className="max-w-2xl text-lg leading-8 text-green-100/80">
                  La propuesta no depende de modas ni de un solo caso de uso: habla con negocios que ya necesitan más
                  visibilidad y más control sobre su operación.
                </p>
              </div>

              <div className="space-y-4">
                {sellReasons.map((reason) => (
                  <div key={reason} className="rounded-[22px] border border-white/10 bg-white/5 px-4 py-4">
                    <p className="text-sm leading-7 text-green-50">{reason}</p>
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
            eyebrow="FAQ"
            title="Preguntas frecuentes del programa de distribuidores."
            description="La idea es dejar una base clara desde la landing para reducir fricción comercial antes del primer contacto."
            align="center"
          />
          <div className="grid gap-5 lg:grid-cols-2">
            {faqItems.map((item) => (
              <article key={item.question} className="control-card rounded-[24px] p-6">
                <h2 className="text-xl">{item.question}</h2>
                <p className="mt-3 text-sm leading-7 text-slate-600">{item.answer}</p>
              </article>
            ))}
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
                  Si ya atiendes negocios con problemas operativos, puedes sumar una solución SaaS sin construirla desde cero.
                </h2>
                <p className="max-w-2xl text-lg leading-8 text-slate-700">
                  Conversemos sobre tu mercado, tu forma de vender y el tipo de convenio que hace sentido para empezar.
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
