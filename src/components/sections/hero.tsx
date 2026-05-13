import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { ProductMockup } from "@/components/marketing/product-mockup";

export function Hero() {
  return (
    <section className="section-space overflow-hidden pb-12 sm:pb-20">
      <Container className="space-y-14">
        <div className="grid items-end gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-14">
          <div className="space-y-8">
            <span className="eyebrow">Command center para negocios</span>
            <div className="space-y-6">
              <p className="text-sm font-semibold uppercase tracking-[0.32em] text-green-700">Capella Ops</p>
              <h1 className="text-balance max-w-3xl text-5xl font-semibold tracking-[-0.06em] text-ink sm:text-6xl lg:text-[4.7rem] lg:leading-[0.95]">
                El sistema operativo para controlar inventario, ventas y operaciones
              </h1>
              <p className="max-w-2xl text-balance text-lg leading-8 text-slate-700 sm:text-xl">
                Unifica inventario, POS, clientes, compras, proyectos y reportes en una sola plataforma diseñada
                para negocios que necesitan orden, visibilidad y control.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/demo">Solicitar demo</ButtonLink>
              <ButtonLink href="/planes" variant="secondary">
                Ver planes
              </ButtonLink>
              <ButtonLink
                href="https://app.capellaops.com"
                variant="ghost"
                target="_blank"
                rel="noreferrer"
                className="justify-start px-0 sm:px-4"
              >
                Entrar al portal
              </ButtonLink>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {[
                ["Operación unificada", "Inventario, ventas y seguimiento en el mismo flujo."],
                ["Listo para crecer", "Módulos configurables según el ritmo del negocio."],
                ["Control visible", "Decisiones con reportes y alertas sobre la mesa."]
              ].map(([title, detail]) => (
                <div key={title} className="rounded-[24px] border border-[color:var(--line)] bg-white/70 p-4 backdrop-blur">
                  <p className="text-sm font-semibold text-ink">{title}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{detail}</p>
                </div>
              ))}
            </div>
          </div>

          <ProductMockup />
        </div>
      </Container>
    </section>
  );
}
