import { NextResponse } from "next/server";
import { Resend } from "resend";

import {
  buildDemoLeadEmail,
  parseDemoLeadPayload,
  validateDemoLeadPayload
} from "@/lib/demo-leads";

export const runtime = "nodejs";

export async function POST(request: Request) {
  let rawPayload: unknown;

  try {
    rawPayload = await request.json();
  } catch {
    return NextResponse.json(
      {
        error: "El cuerpo de la solicitud no es válido."
      },
      { status: 400 }
    );
  }

  const payload = parseDemoLeadPayload(rawPayload);
  const validation = validateDemoLeadPayload(payload);

  if (!validation.valid) {
    return NextResponse.json(
      {
        error: "Faltan campos requeridos o hay datos inválidos.",
        details: validation.errors
      },
      { status: 400 }
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.DEMO_LEADS_TO_EMAIL;
  const fromEmail = process.env.DEMO_LEADS_FROM_EMAIL;

  if (!apiKey || !toEmail || !fromEmail) {
    return NextResponse.json(
      {
        error: "La configuración de correo no está completa."
      },
      { status: 500 }
    );
  }

  const resend = new Resend(apiKey);
  const emailContent = buildDemoLeadEmail(payload);

  try {
    const { error } = await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      subject: "Nuevo lead de demo - Capella Ops",
      replyTo: payload.email,
      text: emailContent.text,
      html: emailContent.html
    });

    if (error) {
      return NextResponse.json(
        {
          error: "No se pudo enviar el correo del lead."
        },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        message: "Lead enviado correctamente."
      },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      {
        error: "No se pudo enviar el correo del lead."
      },
      { status: 500 }
    );
  }
}
