export type ContactPayload = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  company: string;
  locale: string;
};

export type ContactField = "name" | "email" | "phone" | "subject" | "message";

export type ContactResult =
  | { ok: true; ignored?: boolean }
  | { ok: false; errors: Partial<Record<ContactField, true>> };

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phonePattern = /^[0-9+().\-\s]{7,40}$/;

function text(value: unknown, max: number): string {
  if (typeof value !== "string") return "";
  return value.replace(/\s+/g, " ").trim().slice(0, max);
}

export function validateContact(input: Partial<Record<keyof ContactPayload, unknown>>): ContactResult {
  const company = text(input.company, 200);
  if (company) return { ok: true, ignored: true };

  const name = text(input.name, 80);
  const email = text(input.email, 120);
  const phone = text(input.phone, 40);
  const subject = text(input.subject, 120);
  const message = typeof input.message === "string" ? input.message.trim().slice(0, 4000) : "";

  const errors: Partial<Record<ContactField, true>> = {};
  if (name.length < 2) errors.name = true;
  if (!emailPattern.test(email)) errors.email = true;
  if (phone && !phonePattern.test(phone)) errors.phone = true;
  if (subject.length < 2) errors.subject = true;
  if (message.length < 10) errors.message = true;

  if (Object.keys(errors).length) return { ok: false, errors };
  return { ok: true };
}
