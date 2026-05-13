import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

export function SolutionSection() {
  return (
    <section className="section-space pt-0">
      <Container className="surface-panel overflow-hidden p-6 sm:p-8 lg:p-10">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.88fr)_minmax(0,1.12fr)] lg:gap-12">
          <SectionHeading
            eyebrow="La solución"
            title="Capella Ops centraliza la operación para que el negocio se mueva con un solo criterio."
            description="Más que un tablero bonito, la propuesta es un sistema operativo empresarial: módulos conectados, rutas claras y contexto compartido entre compras, inventario, ventas, clientes y seguimiento."
          />

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              ["Una sola fuente de verdad", "Los equipos trabajan sobre el mismo flujo operativo, sin duplicar información."],
              ["Control con contexto", "Cada movimiento importa: de dónde salió, a quién impacta y qué sigue después."],
              ["Escalable por módulos", "Activa y acomoda capacidades según el nivel de operación del negocio."],
              ["Más visibilidad ejecutiva", "Reportes y alertas ayudan a decidir más rápido, con menos intuición y más señal."]
            ].map(([title, detail], index) => (
              <div
                key={title}
                className={`rounded-[24px] border p-5 ${
                  index === 0
                    ? "border-green-700/20 bg-pine text-white"
                    : "border-[color:var(--line)] bg-white/80 text-slate-700"
                }`}
              >
                <p className={`text-lg font-semibold ${index === 0 ? "text-white" : "text-ink"}`}>{title}</p>
                <p className={`mt-3 text-sm leading-7 ${index === 0 ? "text-green-100/85" : "text-slate-600"}`}>
                  {detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
