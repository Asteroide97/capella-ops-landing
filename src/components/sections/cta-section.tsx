import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";

export function CTASection() {
  return (
    <section className="section-space pt-10">
      <Container>
        <div className="surface-panel overflow-hidden p-8 sm:p-10 lg:p-12">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_auto] lg:items-end">
            <div className="space-y-4">
              <span className="eyebrow">Siguiente paso</span>
              <h2 className="text-balance text-4xl font-semibold tracking-[-0.05em] text-ink sm:text-5xl">
                Si tu operación ya creció, también debe crecer la forma de controlarla.
              </h2>
              <p className="max-w-2xl text-lg leading-8 text-slate-700">
                Agenda una demo, revisa planes y empieza una prueba gratis de 15 días para evaluar cómo se vería
                tu operación dentro de Capella Ops.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <ButtonLink href="/demo">Cotizar expansión</ButtonLink>
              <ButtonLink href="/planes" variant="secondary">
                Ver planes
              </ButtonLink>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
