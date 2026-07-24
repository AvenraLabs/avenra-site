"use client";

import { useState } from "react";

const CLASSES = ["6", "7", "8", "9", "10"];

const TEMPLATES = [
  {
    rows: [
      ["Section A - 10 MCQs", "20 marks"],
      ["Section B - 5 short answers", "40 marks"],
      ["Section C - 2 long answers", "40 marks"],
    ],
  },
  {
    rows: [
      ["Section A - 8 fill-in-the-blanks", "16 marks"],
      ["Section B - 6 short answers", "42 marks"],
      ["Section C - 3 diagrams & explain", "42 marks"],
    ],
  },
];

export default function GeneratorDemo() {
  const [activeClass, setActiveClass] = useState(CLASSES[0]);
  const [topic, setTopic] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  function handleGenerate() {
    setResult(null);
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      const finalTopic = (topic || "Photosynthesis").trim();
      const tpl = TEMPLATES[Math.floor(Math.random() * TEMPLATES.length)];
      setResult({
        classLabel: `Class ${activeClass} · ${finalTopic}`,
        time: `Generated in ${(Math.random() * 1.5 + 2.8).toFixed(1)}s`,
        rows: tpl.rows,
      });
    }, 900);
  }

  return (
    <div className="gen-card">
      <div className="gen-head">
        <span className="dot"></span>
        <span>Question Paper Generator - try it</span>
      </div>
      <div className="gen-field">
        <span className="gen-label">Class</span>
        <div className="gen-chips">
          {CLASSES.map((c) => (
            <button
              key={c}
              type="button"
              className={`gen-chip${activeClass === c ? " is-active" : ""}`}
              onClick={() => setActiveClass(c)}
            >
              {c}
            </button>
          ))}
        </div>
      </div>
      <div className="gen-field">
        <label className="gen-label" htmlFor="genTopic">
          Topic / Chapter
        </label>
        <input
          className="gen-input"
          id="genTopic"
          type="text"
          placeholder="Photosynthesis"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
        />
      </div>
      <button
        className="btn btn-primary gen-btn"
        type="button"
        onClick={handleGenerate}
        disabled={loading}
      >
        Generate Question Paper
      </button>
      <div className={`gen-loading${loading ? " is-visible" : ""}`}>
        <span className="spinner"></span> Drafting sections…
      </div>
      <div className={`gen-result${result ? " is-visible" : ""}`}>
        {result && (
          <>
            <div className="gen-result-head">
              <b>{result.classLabel}</b>
              <span>{result.time}</span>
            </div>
            <ul className="gen-result-list">
              {result.rows.map((r, i) => (
                <li key={i}>
                  <span>{r[0]}</span>
                  <b>{r[1]}</b>
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </div>
  );
}
