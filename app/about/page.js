import Link from "next/link";

export const metadata = {
  title: "About Avenra - Remote-first Software & AI Studio",
  description:
    "Avenra is a remote-first software studio building custom web & mobile apps, ERP/CRM systems, AI voice agents, and SaaS products for clients across India and worldwide. SchoolIQ is our flagship product.",
  alternates: { canonical: "https://avenra.org/about" },
  openGraph: {
    title: "About Avenra - Remote-first Software & AI Studio",
    description:
      "A remote-first software studio building custom apps, ERP/CRM, AI voice agents, and SaaS products for teams worldwide, and the makers of SchoolIQ.",
    type: "website",
    url: "https://avenra.org/about",
    images: [{ url: "https://avenra.org/assets/avenra.jpeg", alt: "Avenra - Software & AI Studio, Coimbatore" }],
    siteName: "Avenra",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Avenra - Remote-first Software & AI Studio",
    description:
      "A remote-first software studio: custom apps, ERP/CRM, AI voice agents, SaaS products, and the makers of SchoolIQ.",
    images: ["https://avenra.org/assets/avenra.jpeg"],
  },
};

export default function AboutPage() {
  return (
    <>
      <section className="page-hero-pad">
        <div className="container" style={{ maxWidth: 820 }}>
          <p className="eyebrow reveal">About Avenra</p>
          <h1 className="reveal" style={{ marginTop: 16 }}>
            Founder-led SaaS and AI software, built remote.
          </h1>
          <p className="lede reveal" style={{ maxWidth: "none", marginTop: 22 }}>
            Avenra is led by founder Aravindh, who built SchoolIQ to solve the real operational
            problems schools face every day. We deliver premium, practical SaaS,
            ERP/CRM, mobile apps, and AI systems with a product mindset, not a checklist.
          </p>
          <div className="stat-row reveal" style={{ marginTop: 44 }}>
            <div className="stat">
              <b>Founder-led</b>
              <span>Talk to who builds it</span>
            </div>
            <div className="stat">
              <b>SchoolIQ</b>
              <span>Live SaaS, shipped end-to-end</span>
            </div>
            <div className="stat">
              <b>Remote-first team</b>
              <span>Distributed across India</span>
            </div>
          </div>
          <div className="founder-card reveal" style={{ marginTop: 40, padding: "28px", borderRadius: "20px", border: "1px solid rgba(255,255,255,0.08)", background: "rgba(255,255,255,0.03)" }}>
            <h2 style={{ marginBottom: "16px" }}>Meet the founder</h2>
            <p>
              Aravindh founded Avenra to build software that solves real school and business problems,
              not just to showcase technology. His focus is on clear outcomes, fast delivery, and
              software that feels premium yet practical for customers in Tamil Nadu, India and beyond.
            </p>
            <p style={{ marginTop: "16px" }}>
              If you want this page to be stronger, tell me:
              <ul style={{ marginTop: "12px", paddingLeft: "18px" }}>
                <li>Your core experience or background</li>
                <li>Why you started Avenra</li>
                <li>The first problem you solved with SchoolIQ</li>
                <li>Any customer results or trust signals you want to highlight</li>
              </ul>
            </p>
          </div>
        </div>
      </section>

      <section className="bg-deep">
        <div className="container">
          <div className="section-head reveal">
            <p className="eyebrow">What We Believe</p>
            <h2>Three commitments we make on every project.</h2>
          </div>
          <div className="grid-3">
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
                  <path d="M12 20v-6M12 14l7-4V6l-7 4-7-4v4l7 4z" />
                  <path d="M5 10v5l7 4 7-4v-5" />
                </svg>
              </div>
              <h3>Built around your workflow</h3>
              <p>
                Software should bend to how your team already works, not the
                other way around. We start every project by watching how
                things actually get done today.
              </p>
            </div>
            <div className="card reveal">
              <div className="card-icon teal">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2l1.8 6.2L20 10l-6.2 1.8L12 18l-1.8-6.2L4 10l6.2-1.8L12 2z" />
                </svg>
              </div>
              <h3>AI as a feature, not a slogan</h3>
              <p>
                We treat AI as a feature that saves real time: a voice agent
                that answers your calls, automated workflows, AI-powered
                SaaS features and faster reporting, not a buzzword bolted onto
                a landing page.
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
                  <circle cx="12" cy="12" r="9" />
                  <path d="M12 7v5l3.5 2" />
                </svg>
              </div>
              <h3>We stick around</h3>
              <p>
                Shipping is the start, not the finish. We maintain what we
                build, and we&apos;re the ones you call when something needs
                to change.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="cta-band bg-navy reveal">
            <p className="eyebrow on-navy">Let&apos;s Talk</p>
            <h2>Want to see how we work?</h2>
            <p className="lede">
              Book a call, or take a look at SchoolIQ, the clearest example
              of what we build.
            </p>
            <div className="cta-actions">
              <Link href="/contact" className="btn btn-primary">
                Book a call
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
