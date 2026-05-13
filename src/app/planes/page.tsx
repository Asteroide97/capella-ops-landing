import type { Metadata } from "next";

import { CTASection } from "@/components/sections/cta-section";
import { PricingSection } from "@/components/sections/pricing-section";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { pricingPlans } from "@/lib/site";

export const metadata: Metadata = {
  title: "Planes",
  description:
    "Consulta los planes Básico, Pro y Total de Capella Ops, con usuarios incluidos, módulos comerciales y descuento anual derivado del precio mensual."
};

export default function PlansPage() {
  return (
    <>
      <section className="section-space pb-10">
        <Container className="grid gap-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-end">
          <div className="space-y-5">
            <span className="eyebrow">Planes Capella Ops</span>
            <h1 className="text-balance text-5xl font-semibold tracking-[-0.05em] text-ink sm:text-6xl">
              Básico, Pro y Total: una ruta comercial pensada para crecer con control.
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-slate-700">
              La propuesta comercial de Capella Ops organiza el crecimiento por profundidad operativa, usuarios
              incluidos y módulos activables. Mantenemos la misma lógica mensual y anual en toda la landing.
            </p>
          </div>

          <div className="surface-panel p-6 sm:p-8">
            <div className="grid gap-4 sm:grid-cols-3">
              {pricingPlans.map((plan) => (
                <div key={plan.name} className="rounded-[22px] border border-[color:var(--line)] bg-white/85 p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-green-700">Plan {plan.name}</p>
                  <p className="mt-3 text-base font-semibold text-ink">{plan.includedUsers}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{plan.extraUsers}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/demo">Solicitar demo</ButtonLink>
              <ButtonLink href="/distribuidores" variant="secondary">
                Ver programa de distribuidores
              </ButtonLink>
            </div>
          </div>
        </Container>
      </section>

      <PricingSection />
      <CTASection />
    </>
  );
}
