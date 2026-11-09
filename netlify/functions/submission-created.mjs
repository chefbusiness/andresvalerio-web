/**
 * Aviso por email de cada envío de Netlify Forms.
 *
 * Netlify dispara esta función con el evento `submission-created` (el nombre
 * del fichero es el trigger). El formulario ya quedó guardado en Netlify
 * antes de llegar aquí: si faltan variables o Resend falla, se registra y se
 * responde 200 para no marcar el evento como error.
 *
 * Variables (ver .env.example): RESEND_API_KEY, FORM_NOTIFY_TO,
 * FORM_NOTIFY_FROM y, opcional, FORM_NOTIFY_BCC.
 */

const SITE_NAME = "Andrés Valerio";
const RESEND_URL = "https://api.resend.com/emails";

/** Campos de Netlify o del honeypot: no van en el aviso. */
const CAMPOS_OCULTOS = new Set([
  "bot-field",
  "bot_field",
  "form-name",
  "form_name",
  "ip",
  "user_agent",
  "user-agent",
  "referrer",
]);

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function lista(valor) {
  if (!valor || typeof valor !== "string") return [];
  return valor
    .split(",")
    .map((parte) => parte.trim())
    .filter(Boolean);
}

function escaparHtml(valor) {
  return String(valor)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function textoCampo(valor) {
  if (valor == null) return "";
  if (Array.isArray(valor)) return valor.map((item) => textoCampo(item)).filter(Boolean).join(", ");
  if (typeof valor === "object") return JSON.stringify(valor);
  return String(valor);
}

function camposVisibles(payload) {
  const ordenados = payload?.ordered_human_fields;
  if (Array.isArray(ordenados) && ordenados.length > 0) {
    return ordenados
      .filter((campo) => campo && !CAMPOS_OCULTOS.has(String(campo.name || "").toLowerCase()))
      .map((campo) => ({
        name: String(campo.name || campo.title || ""),
        label: String(campo.title || campo.name || ""),
        value: textoCampo(campo.value),
      }))
      .filter((campo) => campo.name || campo.label);
  }

  const data = payload?.data && typeof payload.data === "object" ? payload.data : {};
  return Object.entries(data)
    .filter(([nombre]) => !CAMPOS_OCULTOS.has(nombre.toLowerCase()))
    .map(([nombre, valor]) => ({
      name: nombre,
      label: nombre,
      value: textoCampo(valor),
    }));
}

function emailDelLead(campos, payload) {
  const nombrado = campos.find((campo) => /^(email|e-mail|correo|mail)$/i.test(campo.name));
  const candidato = String(nombrado?.value || payload?.email || "").trim();
  return EMAIL_RE.test(candidato) ? candidato : null;
}

function cuerpos(formName, campos) {
  const lineas = campos.map((campo) => `${campo.label}: ${campo.value || "—"}`);
  const text = [
    `Nuevo envío del formulario «${formName}» en ${SITE_NAME}.`,
    "",
    ...(lineas.length > 0 ? lineas : ["(sin campos)"]),
  ].join("\n");

  const filas = campos
    .map(
      (campo) =>
        `<tr><th align="left" style="padding:4px 12px 4px 0;vertical-align:top">${escaparHtml(campo.label)}</th><td style="padding:4px 0;white-space:pre-wrap">${escaparHtml(campo.value || "—")}</td></tr>`,
    )
    .join("");
  const html = `<!DOCTYPE html>
<html lang="es">
<body>
<p>Nuevo envío del formulario <strong>${escaparHtml(formName)}</strong> en ${escaparHtml(SITE_NAME)}.</p>
<table>${filas || "<tr><td>(sin campos)</td></tr>"}</table>
</body>
</html>`;

  return { text, html };
}

function respuestaOk() {
  return new Response("ok", { status: 200, headers: { "content-type": "text/plain; charset=utf-8" } });
}

export default async function submissionCreated(req) {
  const apiKey = process.env.RESEND_API_KEY?.trim();
  const to = lista(process.env.FORM_NOTIFY_TO);
  const from = process.env.FORM_NOTIFY_FROM?.trim() ?? "";
  const bcc = lista(process.env.FORM_NOTIFY_BCC);

  if (!apiKey || to.length === 0 || !from) {
    const faltan = [
      !apiKey ? "RESEND_API_KEY" : null,
      to.length === 0 ? "FORM_NOTIFY_TO" : null,
      !from ? "FORM_NOTIFY_FROM" : null,
    ].filter(Boolean);
    console.log(`[form-notify] Aviso omitido: faltan ${faltan.join(", ")}.`);
    return respuestaOk();
  }

  let raw;
  try {
    raw = await req.json();
  } catch (error) {
    console.log(`[form-notify] Payload ilegible, aviso omitido: ${error instanceof Error ? error.message : String(error)}`);
    return respuestaOk();
  }

  const payload = raw?.payload && typeof raw.payload === "object" ? raw.payload : raw;
  const formName = String(payload?.form_name || payload?.data?.["form-name"] || payload?.data?.form_name || "formulario");
  const campos = camposVisibles(payload ?? {});
  const { text, html } = cuerpos(formName, campos);
  const replyTo = emailDelLead(campos, payload ?? {});

  const email = {
    from,
    to,
    subject: `${SITE_NAME} · Nuevo envío del formulario «${formName}»`,
    text,
    html,
  };
  if (bcc.length > 0) email.bcc = bcc;
  if (replyTo) email.reply_to = replyTo;

  try {
    const res = await fetch(RESEND_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(email),
    });
    if (!res.ok) {
      const detalle = await res.text();
      console.log(`[form-notify] Resend respondió ${res.status} para «${formName}»: ${detalle.slice(0, 500)}`);
      return respuestaOk();
    }
  } catch (error) {
    console.log(`[form-notify] No se pudo avisar de «${formName}»: ${error instanceof Error ? error.message : String(error)}`);
    return respuestaOk();
  }

  console.log(`[form-notify] Aviso enviado para «${formName}».`);
  return respuestaOk();
}
