"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

// Re-implements the original IntersectionObserver reveal-on-scroll behavior.
// Runs once per route change since each page renders its own .reveal elements.
export default function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    const items = document.querySelectorAll(".reveal");
    if (!items.length) return;

    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reduced) {
      items.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" },
    );

    items.forEach((el) => io.observe(el));

    return () => io.disconnect();
  }, [pathname]);

  return null;
}
