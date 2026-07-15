"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Faq from "./Faq";

const faqItems = [
  {
    q: "Can SchoolIQ be customized for our school's workflow?",
    a: "Yes. SchoolIQ is built to adapt to your class structure, grading system, and existing processes — not the other way around. Custom fields, extra portals, and new integrations are all on the table.",
  },
  {
    q: "How long does setup take?",
    a: "Most schools are live within a few weeks of kickoff, depending on how much historical data needs to move over. We handle the migration with you, not to you.",
  },
  {
    q: "Is our data secure?",
    a: "Student and staff data sits behind role-based access, so a teacher sees their classes and an admin sees the school — never more than each role needs.",
  },
  {
    q: "What does it cost?",
    a: "A one-time onboarding fee covers setup, data migration, and branding your instance with your school's name and logo. After that, it's a single annual license — no hidden per-module charges.",
  },
];

const checklistItems = [
  "Attendance tracking",
  "Exam & grade management",
  "AI question paper generator",
  "AI tutor chat (English & Tamil)",
  "Quiz zone — single & multiplayer",
  "Live bus GPS tracking",
  "WhatsApp notifications",
  "Timetable management",
  "Multi-role dashboards",
  "School registry & records",
  "Teacher scheduling",
  "Transport & driver management",
  "Student performance analysis",
  "WhatsApp periodic progress reports to parents",
];

const schoolLoveFeatures = [
  {
    title: "Live GPS Bus Tracking",
    desc: "Parent peace of mind. Eliminates office phone spam during delays; parents track the bus live on Chennai maps with automatic proximity warnings.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="3" width="22" height="13" rx="2" ry="2"/>
        <path d="M22 9h-4M1 9h4M4 16v4M20 16v4"/>
      </svg>
    ),
    badge: "The Parent Magnet"
  },
  {
    title: "Student Performance Analytics",
    desc: "Our strongest seller. Visual Subject Trend Lines with color-coded progress direction indicators (+/- % change) and gamified class leaderboards.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
    badge: "The Sales Killer"
  },
  {
    title: "Teacher & Admin Insights",
    desc: "Early intervention. Flags at-risk students scoring under 40% marks or below 75% attendance, highlighting weakest subjects school-wide.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
        <line x1="12" y1="9" x2="12" y2="13"/>
        <line x1="12" y1="17" x2="12.01" y2="17"/>
      </svg>
    ),
    badge: "Principal's Favorite"
  },
  {
    title: "AI Personal Tutor (Avenra AI)",
    desc: "24/7 academic helper. Google Gemini safely explains complex topics, study tips, or homework in English and Tamil with admin token tracking.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
        <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
        <line x1="12" y1="22.08" x2="12" y2="12"/>
      </svg>
    ),
    badge: "AI-Powered Classroom"
  },
  {
    title: "WhatsApp Absence Alerts",
    desc: "Instant safety check. When teachers mark daily roll calls in 30 seconds, parents receive automated WhatsApp messages by 9:00 AM.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 9.24Z"/>
      </svg>
    ),
    badge: "100% Safety Guarantee"
  },
  {
    title: "Quiz Games & Class Lobbies",
    desc: "Gamified learning. Classmates join live teacher-hosted lobbies, play timed multiple-choice games, and climb leaderboards together.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
        <line x1="12" y1="17" x2="12.01" y2="17" />
      </svg>
    ),
    badge: "High Engagement"
  },
  {
    title: "Digital Diary & Timetables",
    desc: "No expensive paper diaries. School notices, homework logs, and weekday timetables are transparently organized in a single feed.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
        <line x1="16" y1="2" x2="16" y2="6"/>
        <line x1="8" y1="2" x2="8" y2="6"/>
        <line x1="3" y1="10" x2="21" y2="10"/>
      </svg>
    ),
    badge: "Zero Paper Waste"
  },
  {
    title: "Bulk Account Generation",
    desc: "Students and teachers will enter their data manually, managed by an approval-based onboarding flow.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    badge: "Approval Flow"
  },
  {
    title: "Progressive Web App (PWA)",
    desc: "Zero storage space. Parents add the link to their homescreen instantly on iOS or Android. Includes an active child account switcher.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2"/>
        <line x1="12" y1="18" x2="12.01" y2="18"/>
      </svg>
    ),
    badge: "Works on Any Phone"
  }
];

export default function ProductPageClient() {
  const [timeStr, setTimeStr] = useState("09:41");
  const [activeCard, setActiveCard] = useState(1);

  // Keep phone simulator clock updated
  useEffect(() => {
    function updateClock() {
      const d = new Date();
      let hours = d.getHours();
      const minutes = String(d.getMinutes()).padStart(2, "0");
      const ampm = hours >= 12 ? "PM" : "AM";
      hours = hours % 12;
      hours = hours ? hours : 12;
      setTimeStr(`${hours}:${minutes} ${ampm}`);
    }
    updateClock();
    const interval = setInterval(updateClock, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* ============ HERO (WITH INTEGRATED PHONE EMULATOR) ============ */}
      <section className="hero" style={{ paddingBottom: "60px" }}>
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow teal">Our Flagship Product</p>
            <h1>SchoolIQ — one system to run your entire school.</h1>
            <p className="lede">
              Attendance, performance analytics, exams, timetables, transport, parent communication,
              and AI features for every teacher and student: quiz battles,
              RAG textbook chat, and lesson summaries. Replaces the five
              different tools schools currently stitch together.
            </p>

            {/* Quick Demo Access Credentials Box */}
            <div style={{ marginTop: "24px", padding: "20px", background: "var(--paper)", borderRadius: "var(--r-md)", border: "1px solid var(--line)" }}>
              <h3 style={{ marginBottom: "8px", fontSize: "1rem", fontWeight: "700" }}>⚡ Interactive Sandbox Guide</h3>
              <p style={{ color: "var(--ink-soft)", fontSize: "0.88rem", lineHeight: "1.5", marginBottom: "14px" }}>
                Tap any profile button inside the mobile screen on the right to switch accounts instantly:
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "8px" }}>
                <div style={{ textAlign: "center", background: "var(--white)", padding: "8px", borderRadius: "var(--r-sm)", border: "1px solid var(--line)", fontSize: "0.82rem" }}>
                  <b style={{ display: "block" }}>Student</b>Jane Doe
                </div>
                <div style={{ textAlign: "center", background: "var(--white)", padding: "8px", borderRadius: "var(--r-sm)", border: "1px solid var(--line)", fontSize: "0.82rem" }}>
                  <b style={{ display: "block" }}>Teacher</b>Sarah Connor
                </div>
                <div style={{ textAlign: "center", background: "var(--white)", padding: "8px", borderRadius: "var(--r-sm)", border: "1px solid var(--line)", fontSize: "0.82rem" }}>
                  <b style={{ display: "block" }}>Driver</b>John Doe
                </div>
              </div>
            </div>

            <div className="hero-actions" style={{ marginTop: "20px" }}>
              <Link href="/contact" className="btn btn-teal">
                Book a demo
              </Link>
              <a href="#features" className="btn btn-ghost">
                What Schools Love
              </a>
            </div>
          </div>

          {/* Phone Emulator visual in Hero */}
          <div className="hero-visual" style={{ display: "flex", justifyContent: "center" }}>
            <div className="phone-mockup-wrapper">
              <div className="phone-mockup">
                {/* Status Bar */}
                <div className="phone-status-bar">
                  <span className="status-time">{timeStr}</span>
                  <div className="phone-island">
                    <span className="island-lens"></span>
                  </div>
                  <div className="status-icons">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="status-svg">
                      <rect x="2" y="16" width="3" height="4" rx="0.5"/>
                      <rect x="7" y="12" width="3" height="8" rx="0.5"/>
                      <rect x="12" y="8" width="3" height="12" rx="0.5"/>
                      <rect x="17" y="4" width="3" height="16" rx="0.5"/>
                    </svg>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="status-svg">
                      <path d="M5 12.55a11 11 0 0 1 14.08 0"/>
                      <path d="M1.42 9a16 16 0 0 1 21.16 0"/>
                      <path d="M8.58 16.14a7 7 0 0 1 6.84 0"/>
                      <line x1="12" y1="20" x2="12.01" y2="20" strokeWidth="4"/>
                    </svg>
                    <div className="battery-container">
                      <span className="battery-level"></span>
                      <span className="battery-tip"></span>
                    </div>
                  </div>
                </div>

                {/* Main app viewport frame */}
                <div className="phone-viewport">
                  <iframe
                    src="/demos/schooliq/"
                    title="SchoolIQ Interactive Demo"
                    className="phone-iframe"
                    sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
                  />
                </div>

                {/* Home Indicator */}
                <div className="phone-home-indicator-container">
                  <span className="phone-home-indicator"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ INTRO STRIP ============ */}
      <section className="section-tight bg-deep">
        <div className="container" style={{ textAlign: "center" }}>
          <p className="lede lede-wide reveal is-visible" style={{ marginBottom: 32 }}>
            Every school we&apos;ve spoken with runs attendance on paper,
            marks on spreadsheets, and parent updates through personal
            WhatsApp numbers. SchoolIQ puts all of it — and more — behind
            one login.
          </p>
          <div
            className="reveal is-visible"
            style={{ display: "flex", flexWrap: "wrap", gap: 10, justifyContent: "center" }}
          >
            <span className="badge">Attendance</span>
            <span className="badge">Exams &amp; Grading</span>
            <span className="badge">Timetables</span>
            <span className="badge">Transport &amp; GPS</span>
            <span className="badge">AI Quiz — Single &amp; Multiplayer</span>
            <span className="badge">Question Paper Generation</span>
            <span className="badge">Lesson Summary AI</span>
            <span className="badge">RAG Textbook Chat</span>
            <span className="badge">Parent Alerts</span>
            <span className="badge">Performance Analytics</span>
            <span className="badge">WhatsApp Progress Reports</span>
          </div>
        </div>
      </section>

      {/* ============ WHY SCHOOLS LOVE SCHOOLIQ (9 FEATURES GRID) ============ */}
      <section id="features" style={{ padding: "80px 0", background: "var(--white)" }}>
        <div className="container">
          <div className="section-head center reveal is-visible" style={{ marginBottom: "56px" }}>
            <p className="eyebrow">Key Value Propositions</p>
            <h2>What Schools Love Most</h2>
            <p className="lede">
              Practical, day-to-day benefits that save time, reduce management headache, and make your school look incredibly premium.
            </p>
          </div>

          <div className="grid-3">
            {schoolLoveFeatures.map((feat, index) => (
              <div className="card reveal is-visible" key={index} style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                <div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
                    <div className="card-icon teal" style={{ margin: 0 }}>
                      {feat.icon}
                    </div>
                    <span style={{ fontSize: "0.78rem", fontWeight: "700", textTransform: "uppercase", color: "var(--teal-deep)", background: "var(--teal-tint)", padding: "4px 10px", borderRadius: "12px" }}>
                      {feat.badge}
                    </span>
                  </div>
                  <h3 style={{ fontSize: "1.2rem", fontWeight: "700", marginBottom: "10px", color: "var(--ink)" }}>{feat.title}</h3>
                  <p style={{ fontSize: "0.94rem", color: "var(--ink-soft)", lineHeight: "1.6" }}>{feat.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ FEATURE: STUDENT PERFORMANCE ANALYTICS ============ */}
      <section className="bg-deep" style={{ padding: "80px 0" }}>
        <div className="container">
          <div className="feature-row feature-row-product reverse reveal is-visible" style={{ alignItems: "center" }}>
            <div className="feature-copy">
              <p className="eyebrow teal">Academic growth</p>
              <h3 className="h2" style={{ margin: "0 0 16px 0", fontSize: "2rem", fontFamily: "var(--font-display)", fontWeight: "700" }}>
                Student Performance Analytics: The Key Seller.
              </h3>
              <p style={{ color: "var(--ink-soft)", lineHeight: "1.6", fontSize: "1rem", marginBottom: "16px" }}>
                Our deep analytical dashboard is the primary driver of school sign-ups. Rather than waiting for parent-teacher meetings, SchoolIQ gives parents and teachers immediate visual diagnostics of a student&apos;s educational progress.
              </p>
              <p style={{ color: "var(--ink-soft)", lineHeight: "1.6", fontSize: "1rem", marginBottom: "20px" }}>
                The system maps historical exam averages, highlights individual roll rank progression, and outputs an AI-driven radar graph of conceptual strengths and weaknesses. By diagnostic charting in math, science, and languages, lesson plans can adapt to each child&apos;s focus zones.
              </p>
              <ul className="feature-list" style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                <li>
                  <svg className="icon-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  Interactive radar charts of subject-wise capabilities.
                </li>
                <li>
                  <svg className="icon-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  Historical term-over-term percentage improvement curves.
                </li>
                <li>
                  <svg className="icon-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  Automated periodic student performance summaries pushed to parent WhatsApp logs.
                </li>
              </ul>
            </div>
            {/* Displaying performance1.jpeg and performance2.jpeg in an interactive overlapping stack */}
            <div>
              <div className="interactive-shot-stack">
                <div 
                  className={`stacked-shot card1 ${activeCard === 1 ? 'active' : 'inactive'}`}
                  onClick={() => setActiveCard(1)}
                >
                  <img
                    src="/assets/performance1.jpeg"
                    alt="Student Performance Dashboard Overview"
                    loading="lazy"
                  />
                </div>
                <div 
                  className={`stacked-shot card2 ${activeCard === 2 ? 'active' : 'inactive'}`}
                  onClick={() => setActiveCard(2)}
                >
                  <img
                    src="/assets/performance2.jpeg"
                    alt="Student Academic Performance Trend Charts"
                    loading="lazy"
                  />
                </div>
              </div>
              <p style={{ textAlign: "center", fontSize: "0.85rem", color: "var(--ink-soft)", marginTop: "16px" }}>
                💡 Click the background card to bring it to the front.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============ FEATURE: SCHOOL ADMIN PANEL ============ */}
      <section style={{ padding: "80px 0", background: "var(--white)" }}>
        <div className="container" style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
          
          {/* Top text block */}
          <div className="reveal is-visible" style={{ maxWidth: "800px" }}>
            <p className="eyebrow teal">Desktop Dashboard</p>
            <h3 className="h2" style={{ margin: "0 0 16px 0", fontSize: "2rem", fontFamily: "var(--font-display)", fontWeight: "700" }}>
              Dedicated Admin Panel with Class &amp; Section Analytics.
            </h3>
            <p style={{ color: "var(--ink-soft)", lineHeight: "1.6", fontSize: "1rem", marginBottom: "16px", maxWidth: "75ch" }}>
              A centralized school management dashboard designed for desktop screens. Administrators can easily coordinate global configurations, publish school-wide announcements, manage account permissions, and access crucial management controls from one unified hub.
            </p>
            <p style={{ color: "var(--ink-soft)", lineHeight: "1.6", fontSize: "1rem", marginBottom: "24px", maxWidth: "75ch" }}>
              A standout component is the <strong>school-wide classwise performance reports</strong>. Principals and admins can quickly review subject averages across all year groups, track student academic performance in real time, and identify sections that need extra resources or support.
            </p>
            
            <div style={{ display: "flex", flexWrap: "wrap", gap: "24px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "0.95rem" }}>
                <svg className="icon-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: "16px", height: "16px", color: "var(--teal)" }}>
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                Announcements, global configurations, and account security controls.
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "0.95rem" }}>
                <svg className="icon-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: "16px", height: "16px", color: "var(--teal)" }}>
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                Detailed class-wise and section-wise performance reporting.
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "0.95rem" }}>
                <svg className="icon-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: "16px", height: "16px", color: "var(--teal)" }}>
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                Real-time metrics auditing across the entire institution.
              </div>
            </div>
          </div>
          
          {/* Bottom widescreen image block */}
          <div className="reveal is-visible" style={{ width: "100%" }}>
            <figure className="shot-card is-desktop" style={{ width: "100%", boxShadow: "var(--shadow-xl)", borderRadius: "var(--r-md)", overflow: "hidden", border: "1px solid var(--line)", background: "var(--white)" }}>
              <div className="browser-bar-mini" style={{ display: "flex", gap: "5px", padding: "10px 14px", background: "var(--paper-deep)", borderBottom: "1px solid var(--line)" }}>
                <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#ff5f56" }}></span>
                <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#ffbd2e" }}></span>
                <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#27c93f" }}></span>
              </div>
              <img
                src="/assets/adminpanel.png"
                alt="Dedicated School ERP Admin Panel Dashboard"
                loading="lazy"
                style={{ width: "100%", height: "auto", display: "block" }}
              />
            </figure>
          </div>
          
        </div>
      </section>

      {/* ============ TWO FRONTENDS, ONE SYSTEM ============ */}
      <section style={{ padding: "80px 0" }}>
        <div className="container">
          <div className="section-head reveal is-visible" style={{ textAlign: "center", margin: "0 auto 56px auto" }}>
            <p className="eyebrow">Under the Hood</p>
            <h2>Two frontends. One login. Your school&apos;s own app.</h2>
            <p className="lede">
              SchoolIQ isn&apos;t a single screen stretched to fit every
              role — it&apos;s built as two purpose-made frontends that
              share one account system.
            </p>
          </div>
          <div className="grid-3">
            <div className="card reveal is-visible">
              <div className="card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="5" y="2" width="14" height="20" rx="2" />
                  <line x1="5" y1="18" x2="19" y2="18" />
                </svg>
              </div>
              <h3>A PWA for students, teachers &amp; parents</h3>
              <p>
                Installs straight from the browser like a real app — no App
                Store, no Play Store, no update delays. One login, and the
                dashboard adapts to whoever&apos;s signed in.
              </p>
            </div>
            <div className="card reveal is-visible">
              <div className="card-icon teal">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="18" height="14" rx="2" />
                  <line x1="8" y1="21" x2="16" y2="21" />
                  <line x1="12" y1="18" x2="12" y2="21" />
                </svg>
              </div>
              <h3>A dedicated admin panel</h3>
              <p>
                Command Center, registry, timetables, and transport live on
                a separate web dashboard built for the desktop workflows
                admins run every day.
              </p>
            </div>
            <div className="card reveal is-visible">
              <div className="card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2l2.9 6.3 6.9.6-5.2 4.6 1.6 6.8L12 16.9 5.8 20.3l1.6-6.8L2.2 8.9l6.9-.6z" />
                </svg>
              </div>
              <h3>Launched under your school&apos;s name</h3>
              <p>
                We re-skin the app with your school&apos;s name, logo, and
                colors before launch — it opens and feels like your own
                product, not &quot;another vendor app.&quot;
              </p>
            </div>
          </div>
          <div
            className="reveal is-visible"
            style={{
              marginTop: 36,
              display: "flex",
              gap: 14,
              flexWrap: "wrap",
              alignItems: "center",
              background: "var(--paper-deep)",
              borderRadius: "var(--r-lg)",
              padding: "22px 26px",
            }}
          >
            <span className="badge">One-time onboarding fee</span>
            <span className="badge">Simple annual billing</span>
            <span className="badge">No native app store approvals</span>
            <span style={{ color: "var(--ink-soft)", fontSize: "0.92rem" }}>
              We handle setup, data migration, and branding — you get a
              school app with your name on it, live in weeks.
            </span>
          </div>
        </div>
      </section>

      {/* ============ EVERYTHING INCLUDED ============ */}
      <section style={{ padding: "80px 0" }}>
        <div className="container">
          <div className="section-head reveal is-visible">
            <p className="eyebrow">Everything Included</p>
            <h2>One login. Every workflow.</h2>
          </div>
          <div className="check-grid reveal is-visible">
            {checklistItems.map((item) => (
              <div className="check-item" key={item}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ FAQ ============ */}
      <section className="bg-deep" style={{ padding: "80px 0" }}>
        <div className="container">
          <div className="section-head center reveal is-visible">
            <p className="eyebrow">Questions</p>
            <h2>Before you ask —</h2>
          </div>
          <Faq items={faqItems} />
        </div>
      </section>

      {/* ============ CTA BAND ============ */}
      <section style={{ padding: "80px 0" }}>
        <div className="container">
          <div className="cta-band bg-navy reveal is-visible">
            <p className="eyebrow on-navy">Let&apos;s Talk</p>
            <h2>See SchoolIQ running on your own school&apos;s data.</h2>
            <p className="lede">
              Book a 20-minute walkthrough. Bring your timetable — we&apos;ll
              show you how it looks inside SchoolIQ.
            </p>
            <div className="cta-actions">
              <Link href="/contact" className="btn btn-primary">
                Book a demo
              </Link>
              <Link href="/" className="btn btn-ghost">
                Back to Avenra
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
