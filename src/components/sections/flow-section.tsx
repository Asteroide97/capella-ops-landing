import { flowSteps } from "@/lib/site";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

export function FlowSection() {
  return (
    <section className="section-space pt-0">
      <Container className="space-y-10">
        <SectionHeading
          eyebrow="Flujo operativo"
          title="Compra → Inventario → Venta → Cliente → Cobranza → Reporte"
          description="La lógica del negocio se entiende mejor cuando los procesos están conectados. Capella Ops permite visualizar esa cadena completa, sin saltar entre herramientas."
          align="center"
        />

        <div className="surface-panel overflow-hidden p-6 sm:p-8">
          <div className="grid gap-4 lg:grid-cols-6">
            {flowSteps.map((step, index) => (
              <div key={step} className="relative">
                <div className="control-card flex h-full min-h-[140px] flex-col justify-between p-5">
                  <span className="text-xs font-semibold uppercase tracking-[0.18em] text-green-700">
                    Etapa {index + 1}
                  </span>
                  <h3 className="text-2xl">{step}</h3>
                  <p className="text-sm leading-6 text-slate-600">
                    {index === 0 && "Arranca el abastecimiento con criterio y aprobación visible."}
                    {index === 1 && "Stock, movimientos y disponibilidad pasan a ser compartidos."}
                    {index === 2 && "La venta ocurre con contexto del inventario y del rendimiento."}
                    {index === 3 && "Cada interacción queda ligada al historial comercial."}
                    {index === 4 && "Los pendientes dejan de esconderse entre mensajes sueltos."}
                    {index === 5 && "La operación se convierte en información accionable."}
                  </p>
                </div>

                {index < flowSteps.length - 1 ? (
                  <div className="pointer-events-none absolute right-[-10px] top-1/2 hidden h-px w-5 -translate-y-1/2 bg-green-700/35 lg:block" />
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
