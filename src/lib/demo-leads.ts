const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export type DemoLeadPayload = {
  nombre: string;
  email: string;
  empresa: string;
  telefono: string;
  plan: string;
  mensaje: string;
};

function normalizeString(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

export function parseDemoLeadPayload(payload: unknown): DemoLeadPayload {
  const body = payload && typeof payload === "object" ? payload : {};

  return {
    nombre: normalizeString(Reflect.get(body, "nombre")),
    email: normalizeString(Reflect.get(body, "email")),
    empresa: normalizeString(Reflect.get(body, "empresa")),
    telefono: normalizeString(Reflect.get(body, "telefono")),
    plan: normalizeString(Reflect.get(body, "plan")),
    mensaje: normalizeString(Reflect.get(body, "mensaje"))
  };
}

export function validateDemoLeadPayload(payload: DemoLeadPayload) {
  const errors: string[] = [];

  if (!payload.nombre) {
    errors.push("El nombre es obligatorio.");
  }

  if (!payload.email) {
    errors.push("El email es obligatorio.");
  } else if (!emailRegex.test(payload.email)) {
    errors.push("El email no es válido.");
  }

  if (!payload.empresa) {
    errors.push("La empresa es obligatoria.");
  }

  if (payload.mensaje.length > 1000) {
    errors.push("El mensaje no puede superar 1000 caracteres.");
  }

  return {
    valid: errors.length === 0,
    errors
  };
}

export function buildDemoLeadEmail(payload: DemoLeadPayload) {
  const submittedAt = new Date().toLocaleString("es-MX", {
    dateStyle: "full",
    timeStyle: "long",
    timeZone: "America/Mexico_City"
  });

  const fields = [
    ["Nombre", payload.nombre],
    ["Email", payload.email],
    ["Empresa", payload.empresa],
    ["Teléfono", payload.telefono || "No proporcionado"],
    ["Plan de interés", payload.plan || "No especificado"],
    ["Mensaje", payload.mensaje || "Sin mensaje"],
    ["Fecha/hora", submittedAt],
    ["Fuente", "Landing capellaops.com/demo"]
  ] as const;

  const text = fields.map(([label, value]) => `${label}: ${value}`).join("\n");

  const html = `
    <div style="font-family: Arial, sans-serif; color: #0d1b13; line-height: 1.6;">
      <h1 style="margin-bottom: 16px; font-size: 24px;">Nuevo lead de demo - Capella Ops</h1>
      <table style="width: 100%; border-collapse: collapse;">
        <tbody>
          ${fields
            .map(
              ([label, value]) => `
                <tr>
                  <td style="padding: 10px 12px; border: 1px solid #d8e4db; background: #f3f8f3; font-weight: 700; width: 180px;">
                    ${escapeHtml(label)}
                  </td>
                  <td style="padding: 10px 12px; border: 1px solid #d8e4db;">
                    ${escapeHtml(value)}
                  </td>
                </tr>
              `
            )
            .join("")}
        </tbody>
      </table>
    </div>
  `;

  return {
    text,
    html
  };
}
