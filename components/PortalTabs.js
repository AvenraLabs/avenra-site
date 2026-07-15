"use client";

import { useState } from "react";

const TABS = [
  { key: "student", label: "Student Portal" },
  { key: "teacher", label: "Teacher Portal" },
  { key: "admin", label: "Admin Portal" },
];

export default function PortalTabs({ panels }) {
  const [active, setActive] = useState("student");

  return (
    <>
      <div className="portal-tabs reveal">
        {TABS.map((tab) => (
          <button
            key={tab.key}
            className={`portal-tab${active === tab.key ? " is-active" : ""}`}
            type="button"
            onClick={() => setActive(tab.key)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {TABS.map((tab) => (
        <div
          key={tab.key}
          className="shot-grid reveal"
          style={{ display: active === tab.key ? "grid" : "none" }}
        >
          {panels[tab.key]}
        </div>
      ))}
    </>
  );
}
