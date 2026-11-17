import { validateContact, type ContactPayload } from "@/lib/contact";

export async function POST(request: Request) {
  let raw: Partial<ContactPayload> = {};
  const type = request.headers.get("content-type") || "";
  try {
    if (type.includes("application/json")) {
      raw = (await request.json()) as Partial<ContactPayload>;
    } else {
      const form = await request.formData();
      raw = Object.fromEntries(form.entries()) as Partial<ContactPayload>;
    }
  } catch {
    return Response.json({ ok: false, errors: { message: true } }, { status: 400 });
  }

  const result = validateContact(raw);
  const wantsHtml = !type.includes("application/json");
  const locale = raw.locale === "en" ? "en" : "fr";

  if (!result.ok) {
    if (wantsHtml) {
      return new Response(htmlPage(locale, false), {
        status: 400,
        headers: { "Content-Type": "text/html; charset=utf-8" },
      });
    }
    return Response.json(result, { status: 400 });
  }

  if (wantsHtml) {
    return new Response(htmlPage(locale, true), {
      status: 200,
      headers: { "Content-Type": "text/html; charset=utf-8" },
    });
  }
  return Response.json({ ok: true });
}

function htmlPage(locale: "fr" | "en", ok: boolean) {
  const title = ok
    ? locale === "fr"
      ? "Message bien reçu"
      : "Message received"
    : locale === "fr"
      ? "Message incomplet"
      : "Message incomplete";
  const body = ok
    ? locale === "fr"
      ? "Merci. Dans cette démonstration, aucun courriel n’est envoyé. Pour nous joindre : info@reperefamilial.com ou 819-441-0282."
      : "Thank you. In this demonstration, no email is sent. To reach us: info@reperefamilial.com or 819-441-0282."
    : locale === "fr"
      ? "Le message n’a pas pu être accepté. Revenez au formulaire et vérifiez les champs."
      : "The message could not be accepted. Go back to the form and check the fields.";
  return `<!doctype html><html lang="${locale === "fr" ? "fr-CA" : "en-CA"}"><meta charset="utf-8"><title>${title}</title><body style="font-family:system-ui,sans-serif;background:#fbf4eb;color:#2a1c16;padding:2rem"><h1>${title}</h1><p>${body}</p><p><a href="/${locale}/nous-joindre">${locale === "fr" ? "Retour" : "Back"}</a></p></body></html>`;
}
