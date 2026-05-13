import { ReactNode } from "react";

import { Container } from "@/components/ui/container";

type LegalPageProps = {
  eyebrow: string;
  title: string;
  description: string;
  children: ReactNode;
};

export function LegalPage({ eyebrow, title, description, children }: LegalPageProps) {
  return (
    <section className="section-space">
      <Container className="space-y-10">
        <div className="max-w-3xl space-y-4">
          <span className="eyebrow">{eyebrow}</span>
          <h1 className="text-balance text-5xl font-semibold tracking-[-0.05em] text-ink sm:text-6xl">{title}</h1>
          <p className="max-w-2xl text-balance text-lg leading-8 text-slate-700">{description}</p>
        </div>

        <div className="surface-panel max-w-4xl p-6 sm:p-8 lg:p-10">
          <div className="max-w-none space-y-6 [&_h2]:pt-2 [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:text-ink [&_li]:text-slate-700 [&_li]:leading-8 [&_p]:text-slate-700 [&_p]:leading-8 [&_strong]:font-semibold [&_strong]:text-ink [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-6">
            {children}
          </div>
        </div>
      </Container>
    </section>
  );
}
