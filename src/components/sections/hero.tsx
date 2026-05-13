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
    <section className="overflow-hidden pt-8 pb-10 sm:pt-10 sm:pb-12 lg:pt-12 lg:pb-10 xl:pt-14 xl:pb-12">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[minmax(380px,0.95fr)_minmax(540px,1.05fr)] lg:items-start lg:gap-10 xl:gap-12">
          <div className="space-y-6 lg:max-w-[39rem] lg:space-y-7">
            <div className="space-y-4">
              <span className="eyebrow">Command center para negocios</span>
              <p className="text-sm font-semibold uppercase tracking-[0.32em] text-green-700">Capella Ops</p>
              <h1 className="text-balance max-w-3xl text-5xl font-semibold tracking-[-0.06em] text-ink sm:text-6xl lg:text-[4rem] lg:leading-[0.96] xl:text-[4.35rem]">
                El sistema operativo para controlar inventario, ventas y operaciones
              </h1>
              <p className="max-w-2xl text-balance text-lg leading-8 text-slate-700 sm:text-xl">
                Unifica inventario, POS, clientes, compras, proyectos y reportes en una sola plataforma diseñada para
                negocios que necesitan orden, visibilidad y control.
              </p>
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

            <div className="grid gap-4 sm:grid-cols-3 lg:gap-3">
              {heroHighlights.map(([title, detail]) => (
                <div
                  key={title}
                  className="rounded-[24px] border border-[color:var(--line)] bg-white/70 p-4 backdrop-blur"
                >
                  <p className="text-sm font-semibold text-ink">{title}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{detail}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:justify-self-end lg:max-h-[720px] lg:overflow-hidden lg:pt-1 xl:max-h-[760px]">
            <div className="origin-top lg:scale-[0.97] xl:scale-100">
              <ProductMockup />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
