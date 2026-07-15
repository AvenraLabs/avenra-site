import Link from "next/link";
import ConsoleWidget from "@/components/ConsoleWidget";

export const metadata = {
  title:
    "Avenra — Custom Software, AI Voice Agents & SaaS Development | Coimbatore",
  description:
    "Avenra builds custom web & mobile apps, ERP/CRM systems, AI voice agents that answer calls and book appointments, and SaaS products. Based in Coimbatore, Tamil Nadu. See SchoolIQ, our own school-management SaaS, built end to end.",
  alternates: { canonical: "https://avenra.org/" },
  openGraph: {
    title: "Avenra — Custom Software, AI Voice Agents & SaaS | Coimbatore",
    description:
      "Custom web & mobile apps, ERP/CRM, AI voice agents that answer calls and book appointments, and full SaaS products, built in Coimbatore, Tamil Nadu. SchoolIQ is our live proof of how we build.",
    type: "website",
    url: "https://avenra.org/",
    images: [
      {
        url: "https://avenra.org/assets/avenra.jpeg",
        width: 1200,
        height: 630,
        alt: "Avenra — Software & AI Studio, Coimbatore",
      },
    ],
    siteName: "Avenra",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Avenra — Custom Software, AI Voice Agents & SaaS | Coimbatore",
    description:
      "Custom software, ERP/CRM, AI voice agents, and SaaS products, built in Coimbatore, Tamil Nadu. SchoolIQ is our first product.",
    images: ["https://avenra.org/assets/avenra.jpeg"],
  },
};

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Avenra",
  url: "https://avenra.org/",
  logo: "https://avenra.org/assets/avenra.jpeg",
  email: "founders@avenra.org",
  telephone: "+91-8680947556",
  areaServed: ["IN", "Worldwide"],
  description:
    "Software studio in Coimbatore, Tamil Nadu building custom web & mobile apps, ERP/CRM systems, AI voice agents, and SaaS products. Creators of SchoolIQ.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Coimbatore",
    addressRegion: "Tamil Nadu",
    addressCountry: "IN",
  },
  sameAs: ["https://linkedin.com/company/avenraa"],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
      />

      {/* ============ HERO ============ */}
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Avenra — Software &amp; AI Studio</p>
            <h1>
              Custom software, AI voice agents, and the SaaS to prove it
              works.
            </h1>
            <p className="lede">
              Custom web &amp; mobile apps, ERP/CRM, and AI voice agents that
              answer calls and book appointments. SchoolIQ, our own SaaS, is
              live proof of how we build.
            </p>
            <div className="hero-actions">
              <Link href="/product" className="btn btn-primary">
                Explore SchoolIQ
              </Link>
              <Link href="/contact" className="btn btn-ghost">
                Book a call
              </Link>
            </div>
            <div className="hero-meta">
              <div className="hero-meta-item">
                <b>Custom builds</b>Web, mobile &amp; iOS apps, ERP &amp; CRM
              </div>
              <div className="hero-meta-item">
                <b>AI-native</b>Voice agents that answer your calls
              </div>
              <div className="hero-meta-item">
                <b>SchoolIQ</b>Our own school-management SaaS, live today
              </div>
            </div>
          </div>
          <div className="hero-visual">
            <ConsoleWidget />
          </div>
        </div>
      </section>

      {/* ============ TRUST STRIP ============ */}
      <div className="trust-strip">
        <div
          className="container"
          style={{ display: "flex", alignItems: "center", gap: 14 }}
        >
          <span className="pulse"></span>
          <span>
            Onboarding schools on SchoolIQ &middot; Booking new client
            projects for H2 2026.
          </span>
        </div>
      </div>

      {/* ============ WHAT WE BUILD ============ */}
      <section id="services">
        <div className="container">
          <div className="section-head reveal">
            <p className="eyebrow">What We Build</p>
            <h2>What clients hire us to build.</h2>
            <p className="lede">
              AI voice agents to full ERP systems. Most projects start with a
              conversation, not a scope document.
            </p>
          </div>
          <div className="grid-4">
            <div className="card reveal">
              <div className="card-icon">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="8 6 2 12 8 18" />
                  <polyline points="16 6 22 12 16 18" />
                </svg>
              </div>
              <h3>Web &amp; Mobile Apps</h3>
              <p>
                Full-stack products built around your actual workflow, on
                web, iOS, or Android, using whatever stack fits the job. We
                work across all languages and frameworks.
              </p>
            </div>
            <div className="card reveal">
              <div className="card-icon teal">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2l1.8 6.2L20 10l-6.2 1.8L12 18l-1.8-6.2L4 10l6.2-1.8L12 2z" />
                </svg>
              </div>
              <h3>AI Voice Agents</h3>
              <p>
                An AI receptionist that answers your calls, takes down
                customer details, and books the appointment straight into
                your calendar or CRM. No missed calls, no back-and-forth.
              </p>
            </div>
            <div className="card reveal">
              <div className="card-icon">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="3" y="4" width="18" height="16" rx="2" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                  <line x1="9" y1="16" x2="15" y2="16" />
                </svg>
              </div>
              <h3>ERP &amp; CRM Systems</h3>
              <p>
                Custom-built ERPs and CRMs that match how your team already
                sells, schedules, and delivers, instead of forcing you into
                someone else&apos;s template.
              </p>
            </div>
            <div className="card reveal">
              <div className="card-icon">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polygon points="12 2 2 7 12 12 22 7 12 2" />
                  <polyline points="2 17 12 22 22 17" />
                  <polyline points="2 12 12 17 22 12" />
                </svg>
              </div>
              <h3>Product Engineering</h3>
              <p>
                From first prototype to a system real people depend on
                daily: design, build, deploy, and support, end to end.
                SchoolIQ is where we prove it.
              </p>
            </div>
          </div>

          {/* Web app examples row */}
          <div className="grid-4" style={{ marginTop: 20 }}>
            <div className="card reveal">
              <div className="card-icon">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3 3h18v4H3z" />
                  <path d="M3 10h7v11H3z" />
                  <path d="M13 10h8v5h-8z" />
                  <path d="M13 18h8v3h-8z" />
                </svg>
              </div>
              <h3>Booking &amp; Scheduling Platforms</h3>
              <p>
                Appointment systems, resource booking, and calendar-synced
                scheduling tools for clinics, salons, consultancies, and
                service businesses of any size.
              </p>
            </div>
            <div className="card reveal">
              <div className="card-icon teal">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="9" cy="21" r="1" />
                  <circle cx="20" cy="21" r="1" />
                  <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                </svg>
              </div>
              <h3>E-Commerce &amp; Marketplaces</h3>
              <p>
                Multi-vendor marketplaces, direct-to-consumer storefronts,
                and B2B ordering portals, built with the payment flows,
                inventory logic, and dashboards you actually need.
              </p>
            </div>
            <div className="card reveal">
              <div className="card-icon">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <h3>Internal Operations Tools</h3>
              <p>
                Custom dashboards, workflow automation, reporting portals,
                and staff management systems that replace the pile of
                spreadsheets your team is currently held together by.
              </p>
            </div>
            <div className="card reveal">
              <div className="card-icon">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="3" width="20" height="14" rx="2" />
                  <path d="M8 21h8M12 17v4" />
                </svg>
              </div>
              <h3>Customer &amp; Client Portals</h3>
              <p>
                White-labelled portals where your clients log in to track
                orders, access documents, raise support tickets, or review
                project progress. All under your brand.
              </p>
            </div>
            <div className="card card-full-row reveal">
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 22,
                  flexWrap: "wrap",
                }}
              >
                <div className="card-icon" style={{ flex: "none" }}>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 20h9" />
                    <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
                  </svg>
                </div>
                <div>
                  <h3>On-Demand &amp; Delivery Apps</h3>
                  <p style={{ maxWidth: "60ch" }}>
                    Driver and field-agent tracking, order dispatch, live
                    status updates, and customer-facing apps for on-demand
                    services: logistics, food delivery, home services, and
                    more.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ CAMPUS SHOWCASE ============ */}
      <section className="bg-deep">
        <div className="container">
          <div className="section-head reveal" style={{ textAlign: "center", marginBottom: 0, display: "flex", flexDirection: "column", alignItems: "center" }}>
            <p className="eyebrow teal">Our Flagship Product</p>
            <h2>Meet SchoolIQ: school management, run by one system.</h2>
            <p className="lede" style={{ margin: "16px auto 24px" }}>
              Most schools we&apos;ve spoken with juggle five disconnected
              tools: a spreadsheet for marks, a paper register for
              attendance, WhatsApp for parent updates. SchoolIQ replaces all
              of it — and writes the question papers while it&apos;s at it.
            </p>
            <div>
              <Link href="/product" className="btn btn-teal">
                View Product &amp; Demo →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ============ HOW WE WORK ============ */}
      <section>
        <div className="container">
          <div className="section-head reveal">
            <p className="eyebrow">How We Work</p>
            <h2>From first call to production, in four steps.</h2>
          </div>
          <div className="process reveal">
            <div className="process-step">
              <span className="process-num">01</span>
              <h3>Discover</h3>
              <p>
                We start with your actual workflow, not a feature list. One
                short call tells us most of what we need.
              </p>
            </div>
            <div className="process-step">
              <span className="process-num">02</span>
              <h3>Design</h3>
              <p>
                Wireframes and a working prototype, usually within days, so
                you&apos;re reacting to something real, early.
              </p>
            </div>
            <div className="process-step">
              <span className="process-num">03</span>
              <h3>Build</h3>
              <p>
                We build in the open. You see progress weekly, not just at
                the end.
              </p>
            </div>
            <div className="process-step">
              <span className="process-num">04</span>
              <h3>Launch &amp; Support</h3>
              <p>
                We ship it, then we stay. Fixes, updates, and new features as
                your needs change.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============ CTA BAND ============ */}
      <section>
        <div className="container">
          <div className="cta-band bg-navy reveal">
            <p className="eyebrow on-navy">Let&apos;s Talk</p>
            <h2>Tell us what&apos;s slowing your team down.</h2>
            <p className="lede">
              We&apos;ll tell you honestly whether software can fix it — and
              how fast.
            </p>
            <div className="cta-actions">
              <Link href="/contact" className="btn btn-primary">
                Start a project
              </Link>
              <Link href="/product" className="btn btn-ghost">
                See SchoolIQ
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
