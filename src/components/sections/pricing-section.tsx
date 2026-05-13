"use client";

import { useMemo, useState } from "react";

import { pricingPeriodCopy, pricingPlans } from "@/lib/site";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

type PricingSectionProps = {
  embedded?: boolean;
};

type BillingCycle = "monthly" | "yearly";

function formatMoney(value: number, maximumFractionDigits = 0) {
  return new Intl.NumberFormat("es-MX", {
    style: "currency",
    currency: "MXN",
    maximumFractionDigits
  }).format(value);
}

export function PricingSection({ embedded = false }: PricingSectionProps) {
  const [billingCycle, setBillingCycle] = useState<BillingCycle>("monthly");

  const plans = useMemo(
    () =>
      pricingPlans.map((plan) => {
        const yearlyTotal = Math.round(plan.monthlyPrice * 12 * 0.85);
        return {
          ...plan,
          displayPrice: billingCycle === "monthly" ? formatMoney(plan.monthlyPrice) : formatMoney(yearlyTotal),
          cadence: billingCycle === "monthly" ? "/ mes" : "/ año",
          effectiveMonthly: formatMoney(Math.round(yearlyTotal / 12))
        };
      }),
    [billingCycle]
  );

  return (
    <section id="planes" className={`scroll-mt-24 ${embedded ? "section-space" : "section-space pt-12"}`}>
      <Container className="space-y-10">
        <SectionHeading
          eyebrow="Planes"
          title="Básico, Pro y Total: estructura comercial clara para vender con orden."
          description="Todos los planes incluyen prueba gratis de 15 días. Puedes presentar facturación mensual o anual con 15% de descuento derivado del mismo precio mensual."
          align="center"
        />

        <div className="flex justify-center">
          <div className="inline-flex rounded-full border border-[color:var(--line)] bg-white/80 p-1">
            <button
              type="button"
              onClick={() => setBillingCycle("monthly")}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                billingCycle === "monthly" ? "bg-pine text-white" : "text-slate-700"
              }`}
            >
              Mensual
            </button>
            <button
              type="button"
              onClick={() => setBillingCycle("yearly")}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                billingCycle === "yearly" ? "bg-pine text-white" : "text-slate-700"
              }`}
            >
              Anual -15%
            </button>
          </div>
        </div>

        <p className="text-center text-sm font-medium text-slate-600">{pricingPeriodCopy[billingCycle]}</p>

        <div className="grid gap-5 xl:grid-cols-3">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={`control-card flex h-full flex-col rounded-[28px] p-7 ${
                plan.highlighted ? "border-green-700/30 bg-pine text-white" : ""
              }`}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="min-w-0">
                  <p
                    className={`text-xs font-semibold uppercase tracking-[0.16em] ${
                      plan.highlighted ? "text-green-100/80" : "text-green-700"
                    }`}
                  >
                    Plan {plan.name}
                  </p>
                  <h3 className={`mt-3 text-4xl ${plan.highlighted ? "text-white" : "text-ink"}`}>{plan.displayPrice}</h3>
                  <p className={`mt-2 text-sm ${plan.highlighted ? "text-green-100/80" : "text-slate-500"}`}>{plan.cadence}</p>
                </div>
                {plan.highlighted ? (
                  <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-white">
                    Recomendado
                  </span>
                ) : null}
              </div>

              <p className={`mt-5 text-sm leading-7 ${plan.highlighted ? "text-green-100/85" : "text-slate-600"}`}>
                {plan.description}
              </p>

              <div
                className={`mt-6 rounded-[22px] border px-4 py-4 ${
                  plan.highlighted ? "border-white/12 bg-white/8" : "border-[color:var(--line)] bg-slate-50/80"
                }`}
              >
                <p className={`text-sm font-semibold ${plan.highlighted ? "text-white" : "text-ink"}`}>{plan.includedUsers}</p>
                <p className={`mt-2 text-sm leading-6 ${plan.highlighted ? "text-green-100/80" : "text-slate-600"}`}>{plan.extraUsers}</p>
              </div>

              {billingCycle === "yearly" ? (
                <p className={`mt-4 text-sm ${plan.highlighted ? "text-green-100/75" : "text-slate-500"}`}>
                  Equivale a {plan.effectiveMonthly} por mes con pago anual.
                </p>
              ) : null}

              <ul className="mt-8 flex-1 space-y-4">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <span
                      className={`mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full ${
                        plan.highlighted ? "bg-green-300" : "bg-green-600"
                      }`}
                    />
                    <span className={`text-sm leading-6 ${plan.highlighted ? "text-green-50" : "text-slate-700"}`}>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 border-t border-white/10 pt-6">
                <p className={`text-sm ${plan.highlighted ? "text-green-100/80" : "text-slate-500"}`}>Prueba gratis de 15 días incluida.</p>
              </div>

              <div className="mt-6 flex flex-col gap-3">
                <ButtonLink
                  href="/demo"
                  variant={plan.highlighted ? "secondary" : "primary"}
                  className={plan.highlighted ? "!border-white/15 !bg-white !text-ink hover:!border-white/25" : ""}
                >
                  Solicitar demo
                </ButtonLink>
                <ButtonLink
                  href="/planes"
                  variant="ghost"
                  className={plan.highlighted ? "!text-green-100 hover:!text-white" : ""}
                >
                  Ver detalle completo
                </ButtonLink>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
