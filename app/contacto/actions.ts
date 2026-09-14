"use server";

import { redirect } from "next/navigation";
import { Resend } from "resend";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Indica tu nombre."),
  phone: z.string().trim().min(1, "Indica un teléfono de contacto."),
  email: z.string().trim().email("Indica un email válido."),
  childAge: z.string().trim().min(1, "Indica la edad del niño o adolescente."),
  message: z.string().trim().min(1, "Cuéntanos brevemente qué os trae por aquí."),
});

export type ContactFormValues = {
  name: string;
  phone: string;
  email: string;
  childAge: string;
  message: string;
};

export type ContactFormState = {
  status: "idle" | "error";
  message?: string;
  fieldErrors?: Record<string, string>;
  values?: ContactFormValues;
  submissionCount: number;
};

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function buildEmailHtml(values: ContactFormValues) {
  const { name, phone, email, childAge, message } = values;
  return `
    <div style="font-family: sans-serif; font-size: 15px; color: #262420; line-height: 1.6;">
      <h2 style="margin: 0 0 16px;">Nuevo mensaje de contacto</h2>
      <table cellpadding="0" cellspacing="0" style="margin-bottom: 16px;">
        <tr><td style="padding: 2px 12px 2px 0; color: #6b6459;">Nombre</td><td>${escapeHtml(name)}</td></tr>
        <tr><td style="padding: 2px 12px 2px 0; color: #6b6459;">Teléfono</td><td>${escapeHtml(phone)}</td></tr>
        <tr><td style="padding: 2px 12px 2px 0; color: #6b6459;">Email</td><td>${escapeHtml(email)}</td></tr>
        <tr><td style="padding: 2px 12px 2px 0; color: #6b6459;">Edad del niño o adolescente</td><td>${escapeHtml(childAge)}</td></tr>
      </table>
      <p style="margin: 0 0 4px; color: #6b6459;">Mensaje:</p>
      <p style="white-space: pre-wrap; margin: 0;">${escapeHtml(message)}</p>
    </div>
  `;
}

function buildEmailText(values: ContactFormValues) {
  const { name, phone, email, childAge, message } = values;
  return `Nombre: ${name}\nTeléfono: ${phone}\nEmail: ${email}\nEdad del niño o adolescente: ${childAge}\n\nMensaje:\n${message}`;
}

export async function sendContactMessage(
  prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const submissionCount = prevState.submissionCount + 1;
  const values: ContactFormValues = {
    name: String(formData.get("name") ?? ""),
    phone: String(formData.get("phone") ?? ""),
    email: String(formData.get("email") ?? ""),
    childAge: String(formData.get("childAge") ?? ""),
    message: String(formData.get("message") ?? ""),
  };

  // Honeypot: si un bot rellena este campo oculto, lo mandamos por el mismo
  // camino de éxito (redirect a /gracias) sin procesar nada, para no delatar
  // la protección.
  if (formData.get("company")) {
    redirect("/gracias");
  }

  const parsed = contactSchema.safeParse(values);

  const fieldErrors: Record<string, string> = {};

  if (!parsed.success) {
    for (const issue of parsed.error.issues) {
      fieldErrors[String(issue.path[0])] = issue.message;
    }
  }

  if (formData.get("privacyConsent") !== "on") {
    fieldErrors.privacyConsent = "Debes aceptar la política de privacidad.";
  }

  if (!parsed.success || Object.keys(fieldErrors).length > 0) {
    return {
      status: "error",
      message: "Revisa los campos marcados.",
      fieldErrors,
      values,
      submissionCount,
    };
  }

  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.RESEND_TO_EMAIL;
  const fromEmail = process.env.RESEND_FROM_EMAIL;

  if (!apiKey || !toEmail || !fromEmail) {
    return {
      status: "error",
      message:
        "El formulario todavía no está activo. Mientras tanto, escríbenos por WhatsApp, teléfono o email.",
      values,
      submissionCount,
    };
  }

  try {
    const resend = new Resend(apiKey);
    const { data } = parsed;
    await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      replyTo: data.email,
      subject: `Nuevo mensaje de contacto — ${data.name}`,
      text: buildEmailText(data),
      html: buildEmailHtml(data),
    });
  } catch {
    return {
      status: "error",
      message: "No se pudo enviar el mensaje. Inténtalo de nuevo o escríbenos directamente.",
      values,
      submissionCount,
    };
  }

  redirect("/gracias");
}
