type ModuleCardProps = {
  title: string;
  status: string;
  description: string;
  bullets: readonly string[];
};

export function ModuleCard({ title, status, description, bullets }: ModuleCardProps) {
  return (
    <article className="control-card group relative overflow-hidden p-6 transition duration-300 hover:-translate-y-1 hover:border-green-700/30">
      <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-green-700/0 via-green-700/40 to-green-700/0" />
      <div className="space-y-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-green-700">{status}</p>
            <h3 className="mt-2 text-2xl">{title}</h3>
          </div>
          <div className="grid h-11 w-11 place-items-center rounded-2xl border border-green-700/15 bg-green-50">
            <div className="grid h-5 w-5 grid-cols-2 gap-1">
              <span className="rounded-sm bg-green-700/85" />
              <span className="rounded-sm bg-green-200" />
              <span className="rounded-sm bg-green-200" />
              <span className="rounded-sm bg-green-700/55" />
            </div>
          </div>
        </div>
        <p>{description}</p>
        <ul className="space-y-3 text-sm text-slate-700">
          {bullets.map((bullet) => (
            <li key={bullet} className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-green-600" />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
