"use client";

import { useState } from "react";

export default function Faq({ items }) {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="faq reveal">
      {items.map((item, i) => (
        <div
          key={i}
          className={`faq-item${openIndex === i ? " is-open" : ""}`}
        >
          <button
            className="faq-q"
            type="button"
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
          >
            <span>{item.q}</span>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            >
              <line x1="12" y1="5" x2="12" y2="19" />
              <line x1="5" y1="12" x2="19" y2="12" />
            </svg>
          </button>
          <div className="faq-a">
            <p>{item.a}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
