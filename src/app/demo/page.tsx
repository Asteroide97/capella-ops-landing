import type { Metadata } from "next";

import { DemoForm } from "@/components/forms/demo-form";
import { Container } from "@/components/ui/container";

export const metadata: Metadata = {
  title: "Solicitar demo",
  description:
    "Solicita una demo de Capella Ops y comparte qué necesitas ordenar en inventario, ventas, compras, clientes o proyectos."
};

export default function DemoPage() {
  return (
    <section className="section-space">
      <Container className="grid gap-8 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
        <div className="space-y-6">
          <span className="eyebrow">Demo comercial</span>
          <h1 className="text-balance text-5xl font-semibold tracking-[-0.05em] text-ink sm:text-6xl">
            Ve cómo se vería tu operación dentro de Capella Ops.
          </h1>
          <p className="max-w-xl text-lg leading-8 text-slate-700">
            Esta página ya puede enviar solicitudes reales por correo desde un endpoint seguro en servidor, sin
            exponer credenciales en frontend ni depender todavía de CRM o automatizaciones externas.
          </p>

          <div className="surface-panel p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-green-700">Qué puedes esperar</p>
            <div className="mt-5 space-y-4">
              {[
                "Revisión rápida de la operación actual y los puntos de fricción.",
                "Ruta sugerida de módulos según inventario, ventas, CRM y proyectos.",
                "Prueba gratis de 15 días como siguiente paso comercial."
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-[20px] border border-[color:var(--line)] bg-white/85 px-4 py-4">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-green-600" />
                  <p className="text-sm leading-7 text-slate-700">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <DemoForm />
      </Container>
    </section>
  );
}
