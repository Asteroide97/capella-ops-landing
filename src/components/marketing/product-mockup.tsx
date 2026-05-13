const kpiCards = [
  { label: "STOCK", value: "94%", detail: "7 alertas resueltas" },
  { label: "VENTAS", value: "$48.2k", detail: "18% sobre promedio" },
  { label: "COBRANZA", value: "82%", detail: "Pendientes priorizados" },
  { label: "PROYECTOS", value: "11", detail: "4 entregas activas" }
];

const inventoryRows = [
  { item: "Cableado Cat6", sku: "INV-241", stock: "154", status: "Disponible" },
  { item: "Terminal POS", sku: "POS-087", stock: "12", status: "Bajo stock" },
  { item: "Kit de instalación", sku: "OPS-516", stock: "58", status: "En tránsito" }
];

export function ProductMockup() {
  return (
    <div className="relative isolate">
      <div className="absolute left-6 top-12 hidden h-40 w-40 rounded-full border border-green-700/10 lg:block" />
      <div className="absolute right-10 top-24 hidden h-56 w-56 rounded-full border border-green-700/10 lg:block" />

      <div className="surface-panel relative overflow-hidden px-4 py-4 sm:px-6 sm:py-6">
        <div className="absolute inset-0 grid-shell opacity-60" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(27,138,90,0.16),_transparent_34%)]" />

        <div className="relative grid gap-5 lg:grid-cols-[214px_minmax(0,1fr)] xl:grid-cols-[220px_minmax(0,1fr)]">
          <aside className="rounded-[24px] border border-white/60 bg-pine px-5 py-6 text-white shadow-float">
            <div className="flex items-center justify-between border-b border-white/10 pb-5">
              <div>
                <p className="text-xs uppercase tracking-[0.22em] text-green-100/80">Capella Ops</p>
                <h3 className="mt-2 text-xl font-semibold text-white">Control room</h3>
              </div>
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-white/10">
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

            <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-4">
              <p className="text-xs uppercase tracking-[0.2em] text-green-100/70">Estado operativo</p>
              <p className="mt-3 whitespace-nowrap text-3xl font-semibold">98.4%</p>
              <p className="mt-2 text-sm text-green-100/70">Procesos dentro de ventana objetivo.</p>
            </div>
          </aside>

          <div className="space-y-5">
            <div className="grid grid-cols-2 gap-4">
              {kpiCards.map((card) => (
                <div key={card.label} className="control-card min-w-0 rounded-[22px] p-4 sm:p-5">
                  <div className="flex items-center justify-between gap-3">
                    <p className="whitespace-nowrap text-xs font-semibold text-green-700">{card.label}</p>
                    <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-green-600" />
                  </div>
                  <p className="mt-4 whitespace-nowrap text-[clamp(1.9rem,4vw,2.8rem)] font-semibold leading-none tracking-[-0.06em] text-ink">
                    {card.value}
                  </p>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{card.detail}</p>
                </div>
              ))}
            </div>

            <div className="grid gap-5 xl:grid-cols-[minmax(0,1.08fr)_320px]">
              <div className="control-card overflow-hidden">
                <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.18em] text-green-700">Inventario + ventas</p>
                    <h4 className="mt-2 text-xl">Visibilidad de operación</h4>
                  </div>
                  <div className="inline-flex items-center gap-2 rounded-full border border-green-700/15 bg-green-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-green-800">
                    sincronizado
                  </div>
                </div>

                <div className="space-y-5 px-5 py-5">
                  <div className="grid gap-4 lg:grid-cols-[1.3fr_minmax(0,1fr)]">
                    <div className="rounded-[22px] bg-mist p-4">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-semibold text-slate-700">Ventas del día</p>
                        <span className="text-xs font-semibold uppercase tracking-[0.16em] text-green-700">actualizado 08:40</span>
                      </div>
                      <div className="mt-5 flex items-end gap-3">
                        {[48, 64, 58, 76, 82, 94, 88].map((height, index) => (
                          <div key={height} className="flex flex-1 flex-col items-center gap-2">
                            <div
                              className={`w-full rounded-t-2xl ${index === 5 ? "bg-green-700" : "bg-green-200"}`}
                              style={{ height: `${height}px` }}
                            />
                            <span className="text-xs text-slate-500">{["L", "M", "M", "J", "V", "S", "D"][index]}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="rounded-[22px] border border-slate-200 p-4">
                      <p className="text-sm font-semibold text-slate-700">Alertas prioritarias</p>
                      <div className="mt-4 space-y-3">
                        {[
                          "SKU POS-087 por debajo del mínimo",
                          "2 facturas listas para configuración",
                          "Cobranza pendiente con vencimiento hoy"
                        ].map((alert, index) => (
                          <div key={alert} className="flex items-start gap-3 rounded-2xl bg-slate-50 px-3 py-3">
                            <span
                              className={`mt-1 h-2.5 w-2.5 rounded-full ${
                                index === 0 ? "bg-amber-500" : index === 1 ? "bg-slate-400" : "bg-green-600"
                              }`}
                            />
                            <p className="text-sm leading-6 text-slate-700">{alert}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="overflow-hidden rounded-[22px] border border-slate-200">
                    <div className="grid grid-cols-[1.6fr_0.8fr_0.5fr_0.9fr] gap-3 border-b border-slate-200 bg-slate-50 px-4 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                      <span>Artículo</span>
                      <span>SKU</span>
                      <span>Stock</span>
                      <span>Estado</span>
                    </div>
                    {inventoryRows.map((row) => (
                      <div
                        key={row.sku}
                        className="grid grid-cols-[1.6fr_0.8fr_0.5fr_0.9fr] gap-3 border-b border-slate-100 px-4 py-4 text-sm last:border-b-0"
                      >
                        <span className="font-medium text-ink">{row.item}</span>
                        <span className="text-slate-500">{row.sku}</span>
                        <span className="font-semibold text-ink">{row.stock}</span>
                        <span
                          className={`inline-flex w-fit rounded-full px-2.5 py-1 text-xs font-semibold ${
                            row.status === "Disponible"
                              ? "bg-green-50 text-green-800"
                              : row.status === "Bajo stock"
                                ? "bg-amber-50 text-amber-700"
                                : "bg-slate-100 text-slate-700"
                          }`}
                        >
                          {row.status}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-5">
                <div className="control-card animate-drift p-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs uppercase tracking-[0.18em] text-green-700">CRM / cobranza</p>
                      <h4 className="mt-2 text-xl">Seguimiento vivo</h4>
                    </div>
                    <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-green-800">
                      activo
                    </span>
                  </div>

                  <div className="mt-5 space-y-3">
                    {[
                      ["Restaurante Norte", "Pago pendiente - vence hoy"],
                      ["Clínica Delta", "Negociación cerrada - listo para alta"],
                      ["Distribuidora Mx", "Proyecto en implementación"]
                    ].map(([name, detail]) => (
                      <div key={name} className="rounded-2xl border border-slate-200 px-4 py-3">
                        <p className="font-semibold text-ink">{name}</p>
                        <p className="mt-1 text-sm text-slate-600">{detail}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="control-card p-5">
                  <p className="text-xs uppercase tracking-[0.18em] text-green-700">Ruta operativa</p>
                  <div className="mt-5 space-y-3">
                    {[
                      "Compra aprobada",
                      "Inventario actualizado",
                      "Venta procesada",
                      "Cliente con historial",
                      "Cobranza monitoreada",
                      "Reporte listo"
                    ].map((step, index) => (
                      <div key={step} className="flex items-center gap-3">
                        <div className="flex flex-col items-center">
                          <span className="grid h-8 w-8 place-items-center rounded-full bg-green-700 text-xs font-semibold text-white">
                            {index + 1}
                          </span>
                          {index < 5 ? <span className="mt-2 h-6 w-px bg-green-700/20" /> : null}
                        </div>
                        <div className="flex-1 rounded-2xl bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700">
                          {step}
                        </div>
                      </div>
                    ))}
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
