import { NextResponse } from "next/server";

// Runs on the server. The contact form POSTs JSON here; we validate it and
// forward it to the configured endpoint (Formspree / Resend handler / CRM
// webhook). Keeping the endpoint server-side means the real URL and any keys
// never reach the browser.

type ContactPayload = {
  name?: unknown;
  company?: unknown;
  email?: unknown;
  agencySize?: unknown;
  message?: unknown;
};

function isNonEmptyString(value: unknown): value is string {
  return typeof value === "string" && value.trim().length > 0;
}

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(request: Request) {
  let body: ContactPayload;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: "Invalid request body." },
      { status: 400 },
    );
  }

  const { name, company, email, agencySize, message } = body;

  // Server-side validation mirrors the client rules — never trust the client.
  if (
    !isNonEmptyString(name) ||
    !isNonEmptyString(email) ||
    !isValidEmail(email) ||
    !isNonEmptyString(message)
  ) {
    return NextResponse.json(
      { error: "Please complete the required fields." },
      { status: 400 },
    );
  }

  const submission = {
    name: name.trim(),
    company: isNonEmptyString(company) ? company.trim() : "",
    email: email.trim(),
    agencySize: isNonEmptyString(agencySize) ? agencySize.trim() : "",
    message: message.trim(),
    submittedAt: new Date().toISOString(),
    source: "estemeconsulting.com/contact",
  };

  const endpoint = process.env.CONTACT_FORM_ENDPOINT;

  // No endpoint configured (e.g. local dev): log and succeed so the form is
  // still testable end-to-end.
  if (!endpoint) {
    console.info("[contact] No CONTACT_FORM_ENDPOINT set. Submission:", submission);
    return NextResponse.json({ ok: true }, { status: 200 });
  }

  try {
    const forwarded = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(submission),
    });

    if (!forwarded.ok) {
      console.error(
        "[contact] Forwarding failed:",
        forwarded.status,
        await forwarded.text().catch(() => ""),
      );
      return NextResponse.json(
        { error: "Unable to send your message right now." },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (error) {
    console.error("[contact] Forwarding error:", error);
    return NextResponse.json(
      { error: "Unable to send your message right now." },
      { status: 502 },
    );
  }
}
