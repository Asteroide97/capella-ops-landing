import { ReactNode } from "react";

import { Container } from "@/components/ui/container";

type LegalSectionLink = {
  href: string;
  label: string;
};

type LegalPageProps = {
  eyebrow: string;
  title: string;
  description: string;
  children: ReactNode;
  lastUpdated?: string;
  tableOfContents?: LegalSectionLink[];
};

export function LegalPage({
  eyebrow,
  title,
  description,
  children,
  lastUpdated,
  tableOfContents
}: LegalPageProps) {
  const hasTableOfContents = Boolean(tableOfContents?.length);

  return (
    <section className="pt-10 pb-14 sm:pt-12 sm:pb-16 lg:pt-14 lg:pb-20">
      <Container className="space-y-10">
        <div className="max-w-4xl space-y-5">
          <span className="eyebrow">{eyebrow}</span>
          <h1 className="text-balance text-5xl font-semibold tracking-[-0.05em] text-ink sm:text-6xl">{title}</h1>
          <p className="max-w-3xl text-balance text-lg leading-8 text-slate-700">{description}</p>
          {lastUpdated ? (
            <div className="inline-flex items-center rounded-full border border-[color:var(--line)] bg-white/80 px-4 py-2 text-sm font-medium text-slate-600">
              Última actualización: {lastUpdated}
            </div>
          ) : null}
        </div>

        <div className="grid gap-6 lg:grid-cols-[260px_minmax(0,1fr)] lg:items-start">
          {hasTableOfContents ? (
            <aside className="surface-panel p-5 lg:sticky lg:top-24">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-green-700">Contenido</p>
              <nav className="mt-4 space-y-2">
                {tableOfContents?.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="block rounded-2xl px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-green-50 hover:text-green-800"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
            </aside>
          ) : null}

          <div className="surface-panel max-w-4xl p-6 sm:p-8 lg:p-10">
            <div className="max-w-none space-y-6 [&_h2]:scroll-mt-24 [&_h2]:pt-2 [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:text-ink [&_h3]:pt-1 [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:text-ink [&_li]:text-slate-700 [&_li]:leading-8 [&_ol]:list-decimal [&_ol]:space-y-2 [&_ol]:pl-6 [&_p]:text-slate-700 [&_p]:leading-8 [&_strong]:font-semibold [&_strong]:text-ink [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-6">
              {children}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
