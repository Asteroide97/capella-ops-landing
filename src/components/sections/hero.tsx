import { ProductMockup } from "@/components/marketing/product-mockup";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";

const heroHighlights = [
  ["Operación unificada", "Inventario, ventas y seguimiento en el mismo flujo."],
  ["Listo para crecer", "Módulos configurables según el ritmo del negocio."],
  ["Control visible", "Decisiones con reportes y alertas sobre la mesa."]
] as const;

export function Hero() {
  return (
    <section className="overflow-hidden pt-10 pb-12 sm:pt-12 sm:pb-16 lg:pt-14 lg:pb-16 xl:pt-16 xl:pb-20">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[minmax(360px,0.95fr)_minmax(560px,1.05fr)] lg:items-start lg:gap-12 xl:gap-14">
          <div className="space-y-7 lg:max-w-[40rem] lg:space-y-8">
            <div className="space-y-5">
              <span className="eyebrow">Command center para negocios</span>
              <div className="space-y-5">
                <p className="text-sm font-semibold uppercase tracking-[0.32em] text-green-700">Capella Ops</p>
                <h1 className="text-balance max-w-3xl text-5xl font-semibold tracking-[-0.06em] text-ink sm:text-6xl lg:text-[4.35rem] lg:leading-[0.95] xl:text-[4.6rem]">
                  El sistema operativo para controlar inventario, ventas y operaciones
                </h1>
                <p className="max-w-2xl text-balance text-lg leading-8 text-slate-700 sm:text-xl">
                  Unifica inventario, POS, clientes, compras, proyectos y reportes en una sola plataforma diseñada
                  para negocios que necesitan orden, visibilidad y control.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
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

            <div className="grid gap-4 sm:grid-cols-3 lg:gap-3 xl:gap-4">
              {heroHighlights.map(([title, detail]) => (
                <div key={title} className="rounded-[24px] border border-[color:var(--line)] bg-white/70 p-4 backdrop-blur">
                  <p className="text-sm font-semibold text-ink">{title}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{detail}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:justify-self-end lg:pt-1 xl:pt-2">
            <div className="origin-top lg:scale-[0.95] xl:scale-[0.98] 2xl:scale-100">
              <ProductMockup />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
