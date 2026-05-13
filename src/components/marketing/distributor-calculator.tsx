"use client";

import { useMemo, useState } from "react";

const planOptions = [
  { name: "Básico", monthlyPrice: 299 },
  { name: "Pro", monthlyPrice: 499 },
  { name: "Total", monthlyPrice: 799 }
] as const;

const commissionRate = 0.3;

function formatCurrency(value: number) {
  return new Intl.NumberFormat("es-MX", {
    style: "currency",
    currency: "MXN",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(value);
}

export function DistributorCalculator() {
  const [selectedPlan, setSelectedPlan] = useState<(typeof planOptions)[number]["name"]>("Pro");
  const [customers, setCustomers] = useState(10);

  const activePlan = planOptions.find((plan) => plan.name === selectedPlan) ?? planOptions[1];
  const monthlyCommission = useMemo(() => activePlan.monthlyPrice * commissionRate, [activePlan.monthlyPrice]);
  const estimatedIncome = useMemo(() => monthlyCommission * customers, [customers, monthlyCommission]);

  return (
    <div className="surface-panel overflow-hidden p-6 sm:p-8">
      <div className="grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
        <div className="space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-green-700">Calculadora visual</p>
          <h3 className="text-3xl font-semibold tracking-[-0.04em] text-ink">¿Cuánto puedes ganar?</h3>
          <p className="text-sm leading-7 text-slate-700">
            Comisión sugerida de referencia: 30% sobre la mensualidad del cliente durante los primeros 12 meses.
          </p>
          <p className="text-sm leading-7 text-slate-500">
            La comisión final puede variar según convenio comercial. Los ejemplos son estimados, antes de IVA y sujetos
            a aprobación.
          </p>
        </div>

        <div className="control-card rounded-[26px] p-5 sm:p-6">
          <div className="flex flex-wrap gap-3">
            {planOptions.map((plan) => (
              <button
                key={plan.name}
                type="button"
                onClick={() => setSelectedPlan(plan.name)}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                  selectedPlan === plan.name
                    ? "bg-pine text-white"
                    : "border border-[color:var(--line)] bg-white text-slate-700 hover:border-green-700 hover:text-green-800"
                }`}
              >
                {plan.name}
              </button>
            ))}
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-[22px] bg-slate-50 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-green-700">Comisión por cliente</p>
              <p className="mt-3 text-3xl font-semibold tracking-[-0.05em] text-ink">{formatCurrency(monthlyCommission)}</p>
              <p className="mt-2 text-sm text-slate-600">Plan {activePlan.name} con referencia del 30% mensual.</p>
            </div>
            <div className="rounded-[22px] bg-pine p-4 text-white">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-green-100/80">Ingreso estimado</p>
              <p className="mt-3 text-3xl font-semibold tracking-[-0.05em] text-white">{formatCurrency(estimatedIncome)}</p>
              <p className="mt-2 text-sm text-green-100/80">{customers} clientes activos con plan {activePlan.name}.</p>
            </div>
          </div>

          <div className="mt-6">
            <div className="flex items-center justify-between gap-4">
              <p className="text-sm font-semibold text-ink">Número de clientes</p>
              <p className="text-sm font-semibold text-green-800">{customers}</p>
            </div>
            <input
              type="range"
              min={1}
              max={50}
              value={customers}
              onChange={(event) => setCustomers(Number(event.target.value))}
              className="mt-4 w-full accent-[color:var(--primary)]"
            />
          </div>
        </div>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        <div className="rounded-[22px] border border-[color:var(--line)] bg-white/85 p-4">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-green-700">Básico</p>
          <p className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-ink">{formatCurrency(299 * commissionRate)}</p>
          <p className="mt-2 text-sm leading-6 text-slate-600">30% de $299 MXN al mes por cliente.</p>
        </div>
        <div className="rounded-[22px] border border-[color:var(--line)] bg-white/85 p-4">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-green-700">Pro</p>
          <p className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-ink">{formatCurrency(499 * commissionRate)}</p>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            10 clientes en Pro: {formatCurrency(10 * 499 * commissionRate)} al mes.
          </p>
        </div>
        <div className="rounded-[22px] border border-[color:var(--line)] bg-white/85 p-4">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-green-700">Total</p>
          <p className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-ink">{formatCurrency(799 * commissionRate)}</p>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            25 clientes en Total: {formatCurrency(25 * 799 * commissionRate)} al mes.
          </p>
        </div>
      </div>
    </div>
  );
}
