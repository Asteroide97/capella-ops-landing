"use client";

import { FormEvent, useState } from "react";

type FormState = {
  nombre: string;
  email: string;
  empresa: string;
  telefono: string;
  plan: string;
  mensaje: string;
};

const initialState: FormState = {
  nombre: "",
  email: "",
  empresa: "",
  telefono: "",
  plan: "",
  mensaje: ""
};

export function DemoForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");
    setSubmitted(false);

    try {
      const response = await fetch("/api/demo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(form)
      });

      if (!response.ok) {
        const data = (await response.json().catch(() => null)) as { error?: string; details?: string[] } | null;
        const details = data?.details?.join(" ") ?? "";
        throw new Error(data?.error ? `${data.error}${details ? ` ${details}` : ""}` : "No se pudo enviar la solicitud.");
      }

      setSubmitted(true);
      setForm(initialState);
    } catch (error) {
      setErrorMessage(error instanceof Error ? error.message : "No se pudo enviar la solicitud.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="surface-panel p-6 sm:p-8">
      <div className="mb-6 space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-green-700">Solicitud de demo</p>
        <h2 className="text-3xl">Cuéntanos cómo opera tu negocio hoy.</h2>
        <p>
          Este formulario envía leads por backend para mantener segura la API key y dejar la landing lista para
          recibir interés comercial real.
        </p>
      </div>

      <div className="space-y-4">
        {submitted ? (
          <div className="rounded-[24px] border border-green-700/20 bg-green-50 p-5">
            <p className="text-lg font-semibold text-green-900">Solicitud recibida</p>
            <p className="mt-2 text-sm leading-7 text-green-900/80">
              Enviamos tu solicitud al equipo comercial de Capella Ops. Te contactaremos con el correo que
              compartiste.
            </p>
            <button
              type="button"
              onClick={() => {
                setSubmitted(false);
                setErrorMessage("");
              }}
              className="mt-5 rounded-full border border-green-700/20 px-4 py-2 text-sm font-semibold text-green-900 transition hover:bg-white"
            >
              Enviar otra solicitud
            </button>
          </div>
        ) : null}

        {errorMessage ? (
          <div className="rounded-[24px] border border-red-200 bg-red-50 p-4">
            <p className="text-sm font-semibold text-red-900">No pudimos enviar la solicitud</p>
            <p className="mt-1 text-sm leading-6 text-red-800/80">{errorMessage}</p>
          </div>
        ) : null}
      </div>

      <form className="mt-6 grid gap-4 sm:grid-cols-2" onSubmit={handleSubmit}>
        <label className="flex flex-col gap-2">
          <span className="text-sm font-semibold text-slate-700">Nombre</span>
          <input
            value={form.nombre}
            onChange={(event) => setForm({ ...form, nombre: event.target.value })}
            required
            disabled={isSubmitting}
            className="rounded-2xl border border-[color:var(--line)] bg-white px-4 py-3 text-sm text-ink outline-none transition focus:border-green-700 disabled:cursor-not-allowed disabled:bg-slate-50"
            placeholder="Tu nombre"
          />
        </label>

        <label className="flex flex-col gap-2">
          <span className="text-sm font-semibold text-slate-700">Correo</span>
          <input
            type="email"
            value={form.email}
            onChange={(event) => setForm({ ...form, email: event.target.value })}
            required
            disabled={isSubmitting}
            className="rounded-2xl border border-[color:var(--line)] bg-white px-4 py-3 text-sm text-ink outline-none transition focus:border-green-700 disabled:cursor-not-allowed disabled:bg-slate-50"
            placeholder="tu@empresa.com"
          />
        </label>

        <label className="flex flex-col gap-2">
          <span className="text-sm font-semibold text-slate-700">Empresa</span>
          <input
            value={form.empresa}
            onChange={(event) => setForm({ ...form, empresa: event.target.value })}
            required
            disabled={isSubmitting}
            className="rounded-2xl border border-[color:var(--line)] bg-white px-4 py-3 text-sm text-ink outline-none transition focus:border-green-700 disabled:cursor-not-allowed disabled:bg-slate-50"
            placeholder="Nombre de la empresa"
          />
        </label>

        <label className="flex flex-col gap-2">
          <span className="text-sm font-semibold text-slate-700">Teléfono</span>
          <input
            value={form.telefono}
            onChange={(event) => setForm({ ...form, telefono: event.target.value })}
            disabled={isSubmitting}
            className="rounded-2xl border border-[color:var(--line)] bg-white px-4 py-3 text-sm text-ink outline-none transition focus:border-green-700 disabled:cursor-not-allowed disabled:bg-slate-50"
            placeholder="+52 55 1234 5678"
          />
        </label>

        <label className="flex flex-col gap-2 sm:col-span-2">
          <span className="text-sm font-semibold text-slate-700">Plan de interés</span>
          <select
            value={form.plan}
            onChange={(event) => setForm({ ...form, plan: event.target.value })}
            disabled={isSubmitting}
            className="rounded-2xl border border-[color:var(--line)] bg-white px-4 py-3 text-sm text-ink outline-none transition focus:border-green-700 disabled:cursor-not-allowed disabled:bg-slate-50"
          >
            <option value="">Aún no lo tengo definido</option>
            <option value="Básico">Básico</option>
            <option value="Pro">Pro</option>
            <option value="Total">Total</option>
          </select>
        </label>

        <label className="flex flex-col gap-2 sm:col-span-2">
          <span className="text-sm font-semibold text-slate-700">¿Qué necesitas ordenar o mejorar?</span>
          <textarea
            value={form.mensaje}
            onChange={(event) => setForm({ ...form, mensaje: event.target.value })}
            rows={5}
            maxLength={1000}
            disabled={isSubmitting}
            className="rounded-3xl border border-[color:var(--line)] bg-white px-4 py-3 text-sm text-ink outline-none transition focus:border-green-700 disabled:cursor-not-allowed disabled:bg-slate-50"
            placeholder="Ejemplo: inventario por sucursal, ventas diarias, cobranza, proyectos en paralelo..."
          />
          <p className="text-xs text-slate-500">{form.mensaje.length}/1000 caracteres</p>
        </label>

        <div className="flex flex-col items-start justify-between gap-4 rounded-[24px] border border-[color:var(--line)] bg-white/80 px-5 py-4 sm:col-span-2 sm:flex-row sm:items-center">
          <p className="text-sm leading-6 text-slate-600">
            Prueba gratis de 15 días disponible al validar la necesidad del equipo.
          </p>
          <button type="submit" className="button-primary shrink-0 disabled:translate-y-0 disabled:opacity-70" disabled={isSubmitting}>
            {isSubmitting ? "Enviando..." : "Solicitar demo"}
          </button>
        </div>
      </form>
    </div>
  );
}
