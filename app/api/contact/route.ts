import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { name, email, phone, topic, message } = body;

  // ── Basic validation ────────────────────────────────────────────────────────
  if (!name || !email || !message) {
    return Response.json({ error: "Name, email, and message are required." }, { status: 400 });
  }

  // ── Send email ──────────────────────────────────────────────────────────────
  // To actually send emails, pick ONE of these options and uncomment it:
  //
  // OPTION A — Resend (recommended, free tier: 100 emails/day)
  //   1. npm install resend
  //   2. Sign up at resend.com, get an API key
  //   3. Add RESEND_API_KEY=your_key to a .env.local file
  //
  //   const { Resend } = await import("resend");
  //   const resend = new Resend(process.env.RESEND_API_KEY);
  //   await resend.emails.send({
  //     from: "website@yourdomain.com",
  //     to: "tim_herlevic@hotmail.com",
  //     subject: `New contact: ${topic} — ${name}`,
  //     text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nTopic: ${topic}\n\n${message}`,
  //   });
  //
  // OPTION B — Nodemailer via Gmail app password
  //   1. npm install nodemailer @types/nodemailer
  //   2. Enable 2FA on your Gmail, generate an App Password
  //   3. Add GMAIL_USER and GMAIL_PASS to .env.local
  //
  //   const nodemailer = await import("nodemailer");
  //   const transporter = nodemailer.createTransport({
  //     service: "gmail",
  //     auth: { user: process.env.GMAIL_USER, pass: process.env.GMAIL_PASS },
  //   });
  //   await transporter.sendMail({
  //     from: process.env.GMAIL_USER,
  //     to: "tim_herlevic@hotmail.com",
  //     subject: `New contact: ${topic} — ${name}`,
  //     text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nTopic: ${topic}\n\n${message}`,
  //   });
  // ───────────────────────────────────────────────────────────────────────────

  // Until you add one of the above, submissions are logged to the terminal.
  console.log("Contact form submission:", { name, email, phone, topic, message });

  return Response.json({ ok: true });
}
