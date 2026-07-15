"use client";

import { useEffect, useRef, useState } from "react";

const LINES = [
  '<span class="path">$ avenra deploy schooliq</span>',
  '<span class="ok">✓</span> attendance &amp; exams synced',
  '<span class="ok">✓</span> AI question-paper generator online',
  '<span class="ok">✓</span> live bus GPS connected',
  '<span class="ok">✓</span> WhatsApp alerts enabled',
  '<span class="path">SchoolIQ is live.</span><span class="console-cursor"></span>',
];

export default function ConsoleWidget() {
  const containerRef = useRef(null);
  const [shown, setShown] = useState(() => LINES.map(() => false));

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reduced) {
      setShown(LINES.map(() => true));
      return;
    }

    let timers = [];
    const play = () => {
      setShown(LINES.map(() => false));
      LINES.forEach((_, i) => {
        const t = setTimeout(() => {
          setShown((prev) => {
            const next = [...prev];
            next[i] = true;
            return next;
          });
        }, 260 * i + 200);
        timers.push(t);
      });
    };

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            play();
            io.disconnect();
          }
        });
      },
      { threshold: 0.5 },
    );
    io.observe(el);

    return () => {
      io.disconnect();
      timers.forEach(clearTimeout);
    };
  }, []);

  return (
    <div className="console" ref={containerRef}>
      <div className="console-bar">
        <span className="console-dot"></span>
        <span className="console-dot"></span>
        <span className="console-dot"></span>
      </div>
      <div className="console-body">
        {LINES.map((line, i) => (
          <div
            key={i}
            className={`console-line${shown[i] ? " is-shown" : ""}`}
            dangerouslySetInnerHTML={{ __html: line }}
          />
        ))}
      </div>
    </div>
  );
}
