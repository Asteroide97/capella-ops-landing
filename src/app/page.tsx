import type { Metadata } from "next";

import { CTASection } from "@/components/sections/cta-section";
import { Hero } from "@/components/sections/hero";
import { ProblemSection } from "@/components/sections/problem-section";
import { SolutionSection } from "@/components/sections/solution-section";

export const metadata: Metadata = {
  title: "Sistema operativo para inventario, ventas y operaciones",
  description:
    "Capella Ops unifica inventario, POS, clientes, compras, proyectos y reportes para negocios que necesitan orden, visibilidad y control."
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProblemSection />
      <SolutionSection />
      <CTASection />
    </>
  );
}
