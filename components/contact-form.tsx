"use client";

import { useState } from "react";
import { org } from "@/content/site";
import { ui } from "@/content/ui";
import type { ContactField } from "@/lib/contact";
import { tx, type Locale } from "@/lib/locale";

type Status = "idle" | "sending" | "success" | "error";

export function ContactForm({ locale }: { locale: Locale }) {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Partial<Record<ContactField, true>>>({});

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    setStatus("sending");
    setErrors({});
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ ...data, locale }),
      });
      const payload = (await response.json()) as {
        ok: boolean;
        errors?: Partial<Record<ContactField, true>>;
      };
      if (!response.ok || !payload.ok) {
        setErrors(payload.errors ?? {});
        setStatus("error");
        return;
      }
      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="form-success" role="status">
        <h2>{tx(locale, ui.contact.successTitle)}</h2>
        <p>{tx(locale, ui.contact.success)}</p>
        <p>
          <a href={`tel:${org.phoneTel}`}>{org.phoneDisplay}</a>
          {" · "}
          <a href={`mailto:${org.email}`}>{org.email}</a>
        </p>
      </div>
    );
  }

  return (
    <form className="contact-form" action="/api/contact" method="post" onSubmit={onSubmit} noValidate>
      <input type="hidden" name="locale" value={locale} />
      <p className="form-required">{tx(locale, ui.contact.required)}</p>
      <Field
        id="name"
        name="name"
        label={tx(locale, ui.contact.name)}
        autoComplete="name"
        required
        error={errors.name ? tx(locale, ui.contact.errors.name) : undefined}
      />
      <Field
        id="email"
        name="email"
        type="email"
        label={tx(locale, ui.contact.email)}
        autoComplete="email"
        required
        error={errors.email ? tx(locale, ui.contact.errors.email) : undefined}
      />
      <Field
        id="phone"
        name="phone"
        type="tel"
        label={tx(locale, ui.contact.phone)}
        hint={tx(locale, ui.contact.optional)}
        autoComplete="tel"
        error={errors.phone ? tx(locale, ui.contact.errors.phone) : undefined}
      />
      <Field
        id="subject"
        name="subject"
        label={tx(locale, ui.contact.subject)}
        required
        error={errors.subject ? tx(locale, ui.contact.errors.subject) : undefined}
      />
      <div className="field">
        <label htmlFor="message">
          {tx(locale, ui.contact.message)}
          <span aria-hidden="true"> *</span>
        </label>
        <textarea id="message" name="message" required rows={6} aria-invalid={errors.message || undefined} aria-describedby={errors.message ? "message-error" : undefined} />
        {errors.message ? (
          <p id="message-error" className="field-error">
            {tx(locale, ui.contact.errors.message)}
          </p>
        ) : null}
      </div>
      <div className="visually-hidden" aria-hidden="true">
        <label htmlFor="company">Company</label>
        <input id="company" name="company" tabIndex={-1} autoComplete="off" />
      </div>
      {status === "error" && !Object.keys(errors).length ? (
        <p className="field-error" role="alert">
          {tx(locale, ui.contact.errors.generic)}
        </p>
      ) : null}
      <button className="btn" type="submit" disabled={status === "sending"}>
        {status === "sending" ? tx(locale, ui.contact.sending) : tx(locale, ui.contact.send)}
      </button>
    </form>
  );
}

function Field({
  id,
  name,
  label,
  type = "text",
  autoComplete,
  required,
  hint,
  error,
}: {
  id: string;
  name: string;
  label: string;
  type?: string;
  autoComplete?: string;
  required?: boolean;
  hint?: string;
  error?: string;
}) {
  return (
    <div className="field">
      <label htmlFor={id}>
        {label}
        {hint ? <span className="hint"> ({hint})</span> : null}
        {required ? <span aria-hidden="true"> *</span> : null}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        autoComplete={autoComplete}
        required={required}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${id}-error` : undefined}
      />
      {error ? (
        <p id={`${id}-error`} className="field-error">
          {error}
        </p>
      ) : null}
    </div>
  );
}
