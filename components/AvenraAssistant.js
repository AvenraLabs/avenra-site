"use client";

import { useState } from "react";

const responses = {
  schooliq: "SchoolIQ is Avenra's all-in-one school management SaaS. It brings attendance, fees, library, exams, transport, parent communication, and AI teaching tools into one system.",
  demo: "You can book a SchoolIQ walkthrough with our team. We'll show you how it fits your school’s workflow and data.",
  services: "Avenra also builds web and mobile apps, AI voice agents, ERP and CRM systems, client portals, marketplaces, scheduling platforms, and internal operations tools.",
  contact: "You can reach Avenra on WhatsApp, email founders@avenra.org, or call +91 86809 47556.",
};

const prompts = [
  ["What is SchoolIQ?", "schooliq"],
  ["Book a demo", "demo"],
  ["What services do you offer?", "services"],
  ["Contact Avenra", "contact"],
];

export default function AvenraAssistant() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: "bot", text: "Hi! I’m the Avenra assistant. Ask me about SchoolIQ, our services, or how to reach us." },
  ]);

  function answer(key, label) {
    setMessages((current) => [
      ...current,
      { from: "user", text: label },
      { from: "bot", text: responses[key] },
    ]);
  }

  return (
    <div className="assistant-widget">
      {open && (
        <section className="assistant-panel" aria-label="Avenra assistant">
          <header className="assistant-head">
            <div>
              <span className="assistant-status" />
              <strong>Avenra Assistant</strong>
              <small>Usually replies instantly</small>
            </div>
            <button className="assistant-close" onClick={() => setOpen(false)} aria-label="Close assistant">×</button>
          </header>
          <div className="assistant-messages" aria-live="polite">
            {messages.map((message, index) => (
              <p className={`assistant-message ${message.from}`} key={`${message.from}-${index}`}>{message.text}</p>
            ))}
          </div>
          <div className="assistant-prompts">
            {prompts.map(([label, key]) => (
              <button key={key} onClick={() => answer(key, label)}>{label}</button>
            ))}
          </div>
          <div className="assistant-actions">
            <a href="https://wa.me/918680947556?text=Hi%20Avenra%2C%20I%27d%20like%20to%20talk%20about%20SchoolIQ." target="_blank" rel="noopener">Chat on WhatsApp</a>
            <a href="mailto:founders@avenra.org?subject=SchoolIQ%20enquiry">Email us</a>
          </div>
        </section>
      )}
      <button className="assistant-fab" onClick={() => setOpen((value) => !value)} aria-expanded={open} aria-label={open ? "Close Avenra assistant" : "Open Avenra assistant"}>
        {open ? "×" : (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M20 15a4 4 0 0 1-4 4H8l-4 3v-7a4 4 0 0 1-2-3.46V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v8Z" />
            <path d="M8 10h.01M12 10h.01M16 10h.01" strokeWidth="2.5" />
          </svg>
        )}
      </button>
    </div>
  );
}
