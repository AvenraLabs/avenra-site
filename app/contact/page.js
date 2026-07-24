import Link from "next/link";
import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Contact Avenra - Software & AI Studio | Coimbatore, Tamil Nadu",
  description:
    "Get in touch with Avenra, a software studio in Coimbatore, Tamil Nadu. We build custom web apps, ERP/CRM, AI voice agents, and SaaS products. Tell us about your project and we reply within a day or two.",
  alternates: { canonical: "https://avenra.org/contact" },
  openGraph: {
    title: "Contact Avenra - Software & AI Studio, Coimbatore",
    description:
      "Tell us about your school, your business, or your project. Based in Coimbatore, Tamil Nadu, working with clients across India and worldwide. We reply within a day or two.",
    type: "website",
    url: "https://avenra.org/contact",
    images: [{ url: "https://avenra.org/assets/avenra.jpeg", alt: "Avenra - Software & AI Studio, Coimbatore" }],
    siteName: "Avenra",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Avenra - Software & AI Studio, Coimbatore",
    description:
      "Tell us about your project. Based in Coimbatore, Tamil Nadu. We reply within a day or two, no sales queue.",
    images: ["https://avenra.org/assets/avenra.jpeg"],
  },
};

export default function ContactPage() {
  return (
    <>
      <section className="page-hero-pad">
        <div className="container">
          <p className="eyebrow reveal">Contact</p>
          <h1 className="reveal" style={{ marginTop: 16, maxWidth: "16ch" }}>
            Let&apos;s talk.
          </h1>
          <p className="lede reveal" style={{ marginTop: 18 }}>
            Tell us about your school, your business, or your project. We
            reply within a day or two, with no sales queue.
          </p>
        </div>
      </section>

      <section style={{ paddingTop: 0 }}>
        <div className="container contact-grid">
          <ContactForm />

          <div className="reveal">
            <div className="card" style={{ padding: 32, marginBottom: 20 }}>
              <h3 style={{ marginBottom: 18 }}>Reach us directly</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                <div>
                  <p className="small-caption" style={{ marginBottom: 4 }}>
                    EMAIL
                  </p>
                  <a href="mailto:founders@avenra.org" style={{ fontWeight: 600 }}>
                    founders@avenra.org
                  </a>
                </div>
                <div>
                  <p className="small-caption" style={{ marginBottom: 4 }}>
                    PHONE
                  </p>
                  <a href="tel:+918680947556" style={{ fontWeight: 600 }}>
                    +91 86809 47556
                  </a>
                </div>
                <div>
                  <p className="small-caption" style={{ marginBottom: 4 }}>
                    WEBSITE
                  </p>
                  <a href="https://avenra.org" style={{ fontWeight: 600 }}>
                    avenra.org
                  </a>
                </div>
                <div>
                  <p className="small-caption" style={{ marginBottom: 4 }}>
                    LOCATION
                  </p>
                  <span style={{ fontWeight: 600 }}>Tamil Nadu, India</span>
                  <span
                    style={{
                      display: "block",
                      color: "var(--ink-faint)",
                      fontWeight: 500,
                      fontSize: "0.86rem",
                      marginTop: 2,
                    }}
                  >
                    Remote-first. We work with schools &amp; teams globally.
                  </span>
                </div>
              </div>
            </div>
            <div className="card" style={{ padding: 32 }}>
              <h3 style={{ marginBottom: 10 }}>
                Already curious about SchoolIQ?
              </h3>
              <p style={{ color: "var(--ink-soft)", fontSize: "0.94rem", marginBottom: 18 }}>
                Skip the form and book a 20-minute walkthrough directly.
              </p>
              <Link href="/product" className="btn btn-ghost btn-block">
                Explore SchoolIQ first
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
