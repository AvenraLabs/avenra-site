"use client";

import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  async function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    setStatus("sending");

    try {
      const res = await fetch(form.action, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok && data.success !== false) {
        form.reset();
        setStatus("success");
      } else {
        throw new Error(data.message || "Submission failed");
      }
    } catch (_) {
      setStatus("error");
    }
  }

  return (
    <form
      className="card contact-form reveal"
      style={{ padding: 36 }}
      action="https://api.lazyforms.com/f/2fa9db60-8941-4585-8895-ba660a985eee"
      method="POST"
      onSubmit={handleSubmit}
    >
      <input type="hidden" name="subject" value="New enquiry from avenra.org" />
      <input
        type="checkbox"
        name="botcheck"
        style={{ display: "none" }}
        tabIndex="-1"
        autoComplete="off"
      />
      <div className="form-grid">
        <div className="field">
          <label htmlFor="name">Name</label>
          <input id="name" name="name" type="text" placeholder="Your name" required />
        </div>
        <div className="field">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="you@school.edu"
            required
          />
        </div>
        <div className="field full">
          <label htmlFor="org">School / Company</label>
          <input id="org" name="org" type="text" placeholder="Where you work" />
        </div>
        <div className="field full">
          <label htmlFor="phone">Phone (optional)</label>
          <input id="phone" name="phone" type="tel" placeholder="+91 98765 43210" />
        </div>
        <div className="field full">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            placeholder="One line about the problem. e.g. 'we miss 40% of calls after hours'."
            required
          ></textarea>
        </div>
      </div>
      <button
        type="submit"
        className="btn btn-primary btn-block"
        style={{ marginTop: 22 }}
        disabled={status === "sending"}
      >
        {status === "sending" ? "Sending…" : "Send message"}
      </button>
      <div className={`form-success${status === "success" ? " is-visible" : ""}`}>
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="20 6 9 17 4 12" />
        </svg>
        <span>
          Got it. We&apos;ll reply from founders@avenra.org within 24 hours.
          Check spam if you don&apos;t see us.
        </span>
      </div>
      {status === "error" && (
        <div
          style={{
            display: "block",
            marginTop: 16,
            padding: "14px 18px",
            borderRadius: 10,
            background: "rgba(220, 50, 50, 0.08)",
            color: "#b3261e",
            fontSize: "0.92rem",
          }}
        >
          Something went wrong. Please email{" "}
          <a
            href="mailto:founders@avenra.org"
            style={{ color: "inherit", textDecoration: "underline" }}
          >
            founders@avenra.org
          </a>{" "}
          directly.
        </div>
      )}
    </form>
  );
}
