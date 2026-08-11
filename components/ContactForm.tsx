"use client";

import { useState } from "react";
import { SubmitButton } from "@/components/Button";
import { CheckCircle2, AlertCircle } from "lucide-react";

type Status = "idle" | "submitting" | "success" | "error";

type FieldErrors = Partial<Record<"name" | "email" | "message", string>>;

const agencySizes = ["Under 10", "10–25", "26–50", "50+"];

const inputBase =
  "mt-2 w-full rounded-md border bg-warmwhite px-4 py-3 font-sans text-base text-slate placeholder:text-slate-mid/60 transition-colors focus:border-terracotta focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta focus-visible:ring-offset-1 focus-visible:ring-offset-warmwhite";

const labelBase = "block font-sans text-sm font-medium text-slate";

function validEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<FieldErrors>({});

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    // Client-side validation for the required fields.
    const nextErrors: FieldErrors = {};
    if (!name) nextErrors.name = "Please enter your name.";
    if (!email) nextErrors.email = "Please enter your email.";
    else if (!validEmail(email))
      nextErrors.email = "Please enter a valid email address.";
    if (!message)
      nextErrors.message = "A short note helps us prepare for the conversation.";

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setStatus("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          company: String(data.get("company") ?? "").trim(),
          email,
          agencySize: String(data.get("agencySize") ?? ""),
          message,
        }),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div
        role="status"
        className="rounded-lg border border-stone-border bg-stone p-8"
      >
        <CheckCircle2
          className="h-8 w-8 text-terracotta"
          aria-hidden="true"
        />
        <h3 className="mt-4 font-serif text-2xl text-slate">Thank you.</h3>
        <p className="mt-3 text-base leading-relaxed text-slate-mid">
          Your message has reached Esteme. We&rsquo;ll be in touch shortly to
          arrange a conversation.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6">
      <div>
        <label htmlFor="name" className={labelBase}>
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          required
          aria-required="true"
          aria-invalid={errors.name ? "true" : undefined}
          aria-describedby={errors.name ? "name-error" : undefined}
          className={`${inputBase} ${
            errors.name ? "border-terracotta" : "border-stone-border"
          }`}
        />
        {errors.name && (
          <p
            id="name-error"
            className="mt-2 flex items-center gap-1.5 text-sm text-terracotta"
          >
            <AlertCircle className="h-4 w-4" aria-hidden="true" />
            {errors.name}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="company" className={labelBase}>
          Company{" "}
          <span className="font-normal text-slate-mid">(optional)</span>
        </label>
        <input
          id="company"
          name="company"
          type="text"
          autoComplete="organization"
          className={`${inputBase} border-stone-border`}
        />
      </div>

      <div>
        <label htmlFor="email" className={labelBase}>
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          required
          aria-required="true"
          aria-invalid={errors.email ? "true" : undefined}
          aria-describedby={errors.email ? "email-error" : undefined}
          className={`${inputBase} ${
            errors.email ? "border-terracotta" : "border-stone-border"
          }`}
        />
        {errors.email && (
          <p
            id="email-error"
            className="mt-2 flex items-center gap-1.5 text-sm text-terracotta"
          >
            <AlertCircle className="h-4 w-4" aria-hidden="true" />
            {errors.email}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="agencySize" className={labelBase}>
          Agency size
        </label>
        <select
          id="agencySize"
          name="agencySize"
          defaultValue=""
          className={`${inputBase} border-stone-border`}
        >
          <option value="" disabled>
            Select team size&hellip;
          </option>
          {agencySizes.map((size) => (
            <option key={size} value={size}>
              {size}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className={labelBase}>
          What&rsquo;s prompting you to look at this now?
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          aria-required="true"
          aria-invalid={errors.message ? "true" : undefined}
          aria-describedby={errors.message ? "message-error" : undefined}
          className={`${inputBase} resize-y ${
            errors.message ? "border-terracotta" : "border-stone-border"
          }`}
        />
        {errors.message && (
          <p
            id="message-error"
            className="mt-2 flex items-center gap-1.5 text-sm text-terracotta"
          >
            <AlertCircle className="h-4 w-4" aria-hidden="true" />
            {errors.message}
          </p>
        )}
      </div>

      {status === "error" && (
        <p
          role="alert"
          className="flex items-center gap-2 rounded-md border border-terracotta/40 bg-terracotta/5 px-4 py-3 text-sm text-terracotta"
        >
          <AlertCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
          Something went wrong sending your message. Please try again, or email
          us directly.
        </p>
      )}

      <SubmitButton type="submit" disabled={status === "submitting"}>
        {status === "submitting" ? "Sending…" : "Talk to Esteme"}
      </SubmitButton>
    </form>
  );
}
