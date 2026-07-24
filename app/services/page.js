import Link from "next/link";

export const metadata = {
  title: "Custom Software Development Services | Avenra",
  description:
    "Avenra builds web and mobile apps, AI voice agents, ERP and CRM systems, portals, marketplaces, and operations tools.",
  alternates: { canonical: "https://avenra.org/services" },
};

const services = [
  {
    title: "Web & Mobile Apps",
    description:
      "Full-stack products built around your actual workflow, on web, iOS, or Android, using whatever stack fits the job. We work across all languages and frameworks.",
  },
  {
    title: "AI Voice Agents",
    description:
      "An AI receptionist that answers your calls, takes down customer details, and books the appointment straight into your calendar or CRM. No missed calls, no back-and-forth.",
  },
  {
    title: "ERP & CRM Systems",
    description:
      "Custom-built ERPs and CRMs that match how your team already sells, schedules, and delivers, instead of forcing you into someone else's template.",
  },
  {
    title: "Product Engineering",
    description:
      "From first prototype to a system real people depend on daily: design, build, deploy, and support, end to end. SchoolIQ is where we prove it.",
  },
  {
    title: "Booking & Scheduling Platforms",
    description:
      "Appointment systems, resource booking, and calendar-synced scheduling tools for clinics, salons, consultancies, and service businesses of any size.",
  },
  {
    title: "E-Commerce & Marketplaces",
    description:
      "Multi-vendor marketplaces, direct-to-consumer storefronts, and B2B ordering portals, built with the payment flows, inventory logic, and dashboards you actually need.",
  },
  {
    title: "Internal Operations Tools",
    description:
      "Custom dashboards, workflow automation, reporting portals, and staff management systems that replace the pile of spreadsheets your team is currently held together by.",
  },
  {
    title: "Customer & Client Portals",
    description:
      "White-labelled portals where your clients log in to track orders, access documents, raise support tickets, or review project progress. All under your brand.",
  },
  {
    title: "On-Demand & Delivery Apps",
    description:
      "Driver and field-agent tracking, order dispatch, live status updates, and customer-facing apps for on-demand services: logistics, food delivery, home services, and more.",
  },
];

function ServiceIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="14" rx="2" />
      <path d="M8 21h8M12 18v3M8 9h8M8 13h5" />
    </svg>
  );
}

export default function ServicesPage() {
  return (
    <>
      <section className="hero page-hero-pad">
        <div className="container">
          <div className="section-head" style={{ marginBottom: 0 }}>
            <p className="eyebrow">Custom Product Development</p>
            <h1>What clients hire us to build.</h1>
            <p className="lede">
              AI voice agents to full ERP systems. Most projects start with a conversation, not a scope document.
            </p>
          </div>
        </div>
      </section>

      <section style={{ paddingTop: 24 }}>
        <div className="container">
          <div className="grid-3">
            {services.map((service, index) => (
              <article className="card reveal is-visible" key={service.title}>
                <div className={`card-icon${index % 3 === 1 ? " teal" : ""}`}>
                  <ServiceIcon />
                </div>
                <h2 style={{ fontSize: "1.2rem" }}>{service.title}</h2>
                <p>{service.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "80px 0" }}>
        <div className="container">
          <div className="cta-band bg-navy reveal is-visible">
            <p className="eyebrow on-navy">Let&apos;s Talk</p>
            <h2>Tell us what your team needs to run better.</h2>
            <p className="lede">We&apos;ll help you turn the workflow into a product plan.</p>
            <div className="cta-actions">
              <Link href="/contact" className="btn btn-primary">Start a project</Link>
              <Link href="/" className="btn btn-ghost">Explore SchoolIQ</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
