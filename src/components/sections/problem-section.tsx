import { painPoints } from "@/lib/site";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

export function ProblemSection() {
  return (
    <section id="producto" className="section-space scroll-mt-24">
      <Container className="grid gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-14">
        <SectionHeading
          eyebrow="El problema"
          title="Cuando cada área opera por su lado, el negocio se vuelve más lento y menos claro."
          description="Muchas empresas siguen coordinando inventario, ventas y clientes desde herramientas separadas. El resultado no es solo desorden: también es pérdida de tiempo, decisiones tardías y poca trazabilidad."
        />

        <div className="surface-panel p-6 sm:p-8">
          <div className="grid gap-4">
            {painPoints.map((pain) => (
              <div key={pain} className="rounded-[24px] border border-[color:var(--line)] bg-white/80 p-5">
                <div className="flex items-start gap-4">
                  <span className="mt-1 h-3 w-3 rounded-full bg-green-600" />
                  <p className="text-base leading-7 text-slate-700">{pain}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
