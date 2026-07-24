export const metadata = {
  title: "Privacy Policy - Avenra",
  description:
    "How Avenra collects, uses, and protects your data on avenra.org and across our services.",
  robots: "index, follow",
  alternates: { canonical: "https://avenra.org/privacy" },
  openGraph: {
    title: "Privacy Policy - Avenra",
    description: "How Avenra collects, uses, and protects your data.",
    type: "website",
    url: "https://avenra.org/privacy",
    images: [{ url: "https://avenra.org/assets/avenra.jpeg" }],
    siteName: "Avenra",
    locale: "en_IN",
  },
};

export default function PrivacyPage() {
  return (
    <>
      <section className="page-hero-pad">
        <div className="container" style={{ maxWidth: 820 }}>
          <p className="eyebrow">Legal</p>
          <h1 style={{ marginTop: 16 }}>Privacy Policy</h1>
          <p className="lede" style={{ maxWidth: "none", marginTop: 18 }}>
            This policy explains what data we collect on avenra.org, why we
            collect it, and how it&apos;s handled. Short version: we only
            collect what we need to reply to you.
          </p>
          <p style={{ color: "var(--ink-faint)", marginTop: 8, fontSize: "0.9rem" }}>
            Last updated: July 2026
          </p>
        </div>
      </section>

      <section style={{ paddingTop: 0 }}>
        <div className="container" style={{ maxWidth: 820 }}>
          <div className="card" style={{ padding: 36, display: "flex", flexDirection: "column", gap: 28 }}>
            <div>
              <h3 style={{ marginBottom: 10 }}>Who we are</h3>
              <p>
                Avenra is a software studio based in Coimbatore, Tamil Nadu,
                India. This policy covers the website avenra.org and any
                communication you send us through it. If you&apos;d like to
                reach the team responsible for privacy questions, email{" "}
                <a href="mailto:founders@avenra.org">founders@avenra.org</a>.
              </p>
            </div>

            <div>
              <h3 style={{ marginBottom: 10 }}>What we collect</h3>
              <p>Two categories:</p>
              <ul style={{ margin: "10px 0 0 20px", color: "var(--ink-soft)" }}>
                <li>
                  <b>Information you send us.</b> Anything you type into our
                  contact form or email: name, email address, organisation,
                  phone number, and the message itself.
                </li>
                <li>
                  <b>Basic technical data.</b> Standard server logs (IP
                  address, browser type, pages viewed, referring URL)
                  collected by our hosting provider for security and
                  performance.
                </li>
              </ul>
            </div>

            <div>
              <h3 style={{ marginBottom: 10 }}>Why we collect it</h3>
              <p>
                To reply to your enquiry, understand what you&apos;d like us
                to build, and stay in touch about the project. Technical
                data is used only to keep the site running, spot abuse, and
                improve performance.
              </p>
            </div>

            <div>
              <h3 style={{ marginBottom: 10 }}>Third parties</h3>
              <p>
                The site runs on Vercel (hosting), loads fonts from Google
                Fonts, and email reaches us through our standard mail
                provider. These services process the data described above
                under their own privacy terms.
              </p>
              <p style={{ marginTop: 8 }}>
                We do not sell your data, we do not share it with
                advertisers, and we do not run behavioural advertising.
              </p>
            </div>

            <div>
              <h3 style={{ marginBottom: 10 }}>Cookies &amp; analytics</h3>
              <p>
                We use Vercel Web Analytics to understand which pages get
                visited and how the site performs. It does not set cookies,
                does not track you across sites, and does not collect any
                personally identifiable information. It records anonymous,
                aggregated data such as page paths, referrers, country, and
                device type. If we add anything more invasive in future,
                we&apos;ll update this page.
              </p>
            </div>

            <div>
              <h3 style={{ marginBottom: 10 }}>How long we keep it</h3>
              <p>
                Contact form messages are retained while a conversation is
                active and for a reasonable period after, so we can pick up
                follow-ups. Server logs are retained by our hosting provider
                on a rolling basis. If you&apos;d like your data deleted,
                email us and we&apos;ll do it.
              </p>
            </div>

            <div>
              <h3 style={{ marginBottom: 10 }}>Your rights</h3>
              <p>
                You can ask us what personal data we hold about you, ask us
                to correct it, or ask us to delete it. Write to{" "}
                <a href="mailto:founders@avenra.org">founders@avenra.org</a>{" "}
                and we&apos;ll respond within a reasonable time.
              </p>
            </div>

            <div>
              <h3 style={{ marginBottom: 10 }}>Changes to this policy</h3>
              <p>
                If anything material changes, we&apos;ll update this page
                and the &quot;last updated&quot; date at the top.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
