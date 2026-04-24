"use client";

import { useState } from "react";

type Status = "idle" | "submitting" | "success" | "error";

const topics = [
  "Purchasing a home",
  "Refinancing",
  "First-time home buyer",
  "VA loan",
  "FHA loan",
  "USDA loan",
  "Jumbo loan",
  "Non-conforming / self-employed",
  "General question",
];

export default function ContactForm() {
  const [name,    setName]    = useState("");
  const [email,   setEmail]   = useState("");
  const [phone,   setPhone]   = useState("");
  const [topic,   setTopic]   = useState(topics[0]);
  const [message, setMessage] = useState("");
  const [status,  setStatus]  = useState<Status>("idle");
  const [errMsg,  setErrMsg]  = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("submitting");
    setErrMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone, topic, message }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Something went wrong.");
      setStatus("success");
    } catch (err: unknown) {
      setStatus("error");
      setErrMsg(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    }
  }

  if (status === "success") {
    return (
      <div className="form-success">
        <div className="form-success-icon">✅</div>
        <h3>Message sent!</h3>
        <p>
          Thanks, we&apos;ll be in touch within one business day. If you need to
          reach us sooner, call your nearest office directly.
        </p>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <div className="form-row">
        <div className="form-field">
          <label htmlFor="cf-name">Full name *</label>
          <input
            id="cf-name"
            type="text"
            placeholder="Jane Smith"
            required
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </div>
        <div className="form-field">
          <label htmlFor="cf-email">Email address *</label>
          <input
            id="cf-email"
            type="email"
            placeholder="jane@example.com"
            required
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </div>
      </div>

      <div className="form-row">
        <div className="form-field">
          <label htmlFor="cf-phone">Phone number</label>
          <input
            id="cf-phone"
            type="tel"
            placeholder="(469) 555-0100"
            value={phone}
            onChange={e => setPhone(e.target.value)}
          />
        </div>
        <div className="form-field">
          <label htmlFor="cf-topic">I&apos;m interested in</label>
          <select
            id="cf-topic"
            value={topic}
            onChange={e => setTopic(e.target.value)}
          >
            {topics.map(t => <option key={t}>{t}</option>)}
          </select>
        </div>
      </div>

      <div className="form-field">
        <label htmlFor="cf-message">Message *</label>
        <textarea
          id="cf-message"
          placeholder="Tell us a bit about your situation — home price range, current credit, timeline, any questions you have…"
          required
          value={message}
          onChange={e => setMessage(e.target.value)}
        />
      </div>

      {status === "error" && (
        <div className="form-error-msg">{errMsg}</div>
      )}

      <div className="form-submit">
        <button type="submit" className="btn-primary" disabled={status === "submitting"}>
          {status === "submitting" ? "Sending…" : "Send message →"}
        </button>
      </div>

      <p style={{ fontSize: 12, color: "var(--text-muted)", marginTop: 4 }}>
        We typically respond within one business day. Your information is never shared.
      </p>
    </form>
  );
}
