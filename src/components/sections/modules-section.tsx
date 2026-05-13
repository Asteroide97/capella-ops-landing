import { modules } from "@/lib/site";
import { ModuleCard } from "@/components/marketing/module-card";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

export function ModulesSection() {
  return (
    <section id="modulos" className="section-space scroll-mt-24">
      <Container className="space-y-10">
        <SectionHeading
          eyebrow="Módulos"
          title="Cada módulo responde a una capa real de la operación."
          description="Capella Ops se diseña para que cada área tenga claridad sin perder el hilo del negocio completo. La experiencia comercial muestra piezas conectadas, no herramientas sueltas."
          align="center"
        />

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {modules.map((module) => (
            <ModuleCard key={module.title} {...module} />
          ))}
        </div>
      </Container>
    </section>
  );
}
