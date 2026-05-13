const kpiCards = [
  { label: "STOCK", value: "94%", detail: "7 alertas resueltas" },
  { label: "VENTAS", value: "$48.2k", detail: "18% sobre promedio" },
  { label: "COBRANZA", value: "82%", detail: "Pendientes priorizados" },
  { label: "PROYECTOS", value: "11", detail: "4 entregas activas" }
];

export function ProductMockup() {
  return (
    <div className="relative isolate w-full">
      <div className="absolute left-6 top-10 hidden h-36 w-36 rounded-full border border-green-700/10 lg:block" />
      <div className="absolute right-10 top-20 hidden h-48 w-48 rounded-full border border-green-700/10 lg:block" />

      <div className="surface-panel relative overflow-hidden px-4 py-4 sm:px-5 sm:py-5 lg:px-6 lg:py-6 xl:px-6 xl:py-6">
        <div className="absolute inset-0 grid-shell opacity-60" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(27,138,90,0.16),_transparent_34%)]" />

        <div className="relative grid gap-5 lg:grid-cols-[214px_minmax(0,1fr)] xl:grid-cols-[224px_minmax(0,1fr)]">
          <aside className="rounded-[24px] border border-white/60 bg-pine px-5 py-6 text-white shadow-float">
            <div className="flex items-center justify-between border-b border-white/10 pb-5">
              <div>
                <p className="text-xs uppercase tracking-[0.22em] text-green-100/80">Capella Ops</p>
                <h3 className="mt-2 text-lg font-semibold text-white">Control room</h3>
              </div>
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-white/10">
                <span className="h-3 w-3 rounded-full bg-green-300" />
              </span>
            </div>

            <div className="mt-6 space-y-3">
              {["Inventario", "Ventas", "CRM", "Compras", "Proyectos", "Facturación"].map((item, index) => (
                <div
                  key={item}
                  className={`rounded-2xl border px-4 py-3 text-sm ${
                    index === 1
                      ? "border-green-300/60 bg-green-400/15 text-white"
                      : "border-white/10 bg-white/5 text-green-100/90"
                  }`}
                >
                  {item}
                </div>
              ))}
            </div>

            <div className="mt-7 rounded-2xl border border-white/10 bg-white/5 p-4">
              <p className="text-xs uppercase tracking-[0.2em] text-green-100/70">Estado operativo</p>
              <p className="mt-3 whitespace-nowrap text-[2rem] font-semibold leading-none">98.4%</p>
              <p className="mt-2 text-sm leading-6 text-green-100/70">Procesos dentro de ventana objetivo.</p>
            </div>
          </aside>

          <div className="space-y-5">
            <div className="grid grid-cols-2 gap-4">
              {kpiCards.map((card) => (
                <div key={card.label} className="control-card min-w-0 rounded-[22px] p-5">
                  <div className="flex items-center justify-between gap-3">
                    <p className="whitespace-nowrap text-xs font-semibold text-green-700">{card.label}</p>
                    <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-green-600" />
                  </div>
                  <p className="mt-4 whitespace-nowrap text-[clamp(1.85rem,3.6vw,2.55rem)] font-semibold leading-none tracking-[-0.06em] text-ink">
                    {card.value}
                  </p>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{card.detail}</p>
                </div>
              ))}
            </div>

            <div className="grid gap-4 xl:grid-cols-[minmax(0,1fr)_288px]">
              <div className="control-card overflow-hidden">
                <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.18em] text-green-700">Inventario + ventas</p>
                    <h4 className="mt-1.5 text-lg">Visibilidad de operación</h4>
                  </div>
                  <div className="inline-flex items-center gap-2 rounded-full border border-green-700/15 bg-green-50 px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-green-800">
                    sincronizado
                  </div>
                </div>

                <div className="space-y-5 px-5 py-5">
                  <div className="grid gap-4 lg:grid-cols-[1.15fr_minmax(0,1fr)]">
                    <div className="rounded-[22px] bg-mist p-5">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-semibold text-slate-700">Ventas del día</p>
                        <span className="text-xs font-semibold uppercase tracking-[0.16em] text-green-700">
                          actualizado 08:40
                        </span>
                      </div>
                      <div className="mt-5 flex items-end gap-2.5">
                        {[34, 44, 40, 54, 60, 72, 66].map((height, index) => (
                          <div key={height} className="flex flex-1 flex-col items-center gap-2">
                            <div
                              className={`w-full rounded-t-2xl ${index === 5 ? "bg-green-700" : "bg-green-200"}`}
                              style={{ height: `${height}px` }}
                            />
                            <span className="text-[11px] text-slate-500">
                              {["L", "M", "M", "J", "V", "S", "D"][index]}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="rounded-[22px] border border-slate-200 p-5">
                      <p className="text-sm font-semibold text-slate-700">Alertas prioritarias</p>
                      <div className="mt-4 space-y-3">
                        {[
                          "SKU POS-087 por debajo del mínimo",
                          "2 documentos listos para revisión"
                        ].map((alert, index) => (
                          <div key={alert} className="flex items-start gap-3 rounded-2xl bg-slate-50 px-3 py-3">
                            <span
                              className={`mt-1 h-2.5 w-2.5 rounded-full ${
                                index === 0 ? "bg-amber-500" : "bg-slate-400"
                              }`}
                            />
                            <p className="text-sm leading-6 text-slate-700">{alert}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="grid gap-3 sm:grid-cols-3">
                    {[
                      ["154", "artículos activos"],
                      ["12", "bajo observación"],
                      ["2", "documentos pendientes"]
                    ].map(([value, label]) => (
                      <div
                        key={label}
                        className="rounded-[22px] border border-slate-200 bg-white/85 px-4 py-4"
                      >
                        <p className="text-2xl font-semibold tracking-[-0.05em] text-ink">{value}</p>
                        <p className="mt-2 text-sm leading-6 text-slate-600">{label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="control-card animate-drift p-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs uppercase tracking-[0.18em] text-green-700">CRM / cobranza</p>
                      <h4 className="mt-1.5 text-lg">Seguimiento vivo</h4>
                    </div>
                    <span className="rounded-full bg-green-50 px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-green-800">
                      activo
                    </span>
                  </div>

                  <div className="mt-4 space-y-3">
                    {[
                      ["Restaurante Norte", "Pago pendiente - vence hoy"],
                      ["Clínica Delta", "Negociación cerrada - listo para alta"],
                      ["Distribuidora MX", "Cobranza priorizada esta semana"]
                    ].map(([name, detail]) => (
                      <div key={name} className="rounded-2xl border border-slate-200 px-4 py-3.5">
                        <p className="font-semibold text-ink">{name}</p>
                        <p className="mt-1 text-sm leading-6 text-slate-600">{detail}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="control-card hidden p-4 2xl:block">
                  <p className="text-xs uppercase tracking-[0.18em] text-green-700">Ruta operativa</p>
                  <div className="mt-4 space-y-2.5">
                    {["Compra aprobada", "Inventario actualizado", "Venta procesada", "Reporte listo"].map(
                      (step, index) => (
                        <div key={step} className="flex items-center gap-3">
                          <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-green-700 text-xs font-semibold text-white">
                            {index + 1}
                          </span>
                          <div className="flex-1 rounded-2xl bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700">
                            {step}
                          </div>
                        </div>
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
