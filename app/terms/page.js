export const metadata = {
  title: "Terms of Use — Avenra",
  description:
    "Terms of use for the Avenra website. Client engagements and product subscriptions are governed by separate signed agreements.",
  robots: "index, follow",
  alternates: { canonical: "https://avenra.org/terms" },
  openGraph: {
    title: "Terms of Use — Avenra",
    description: "Terms of use for the Avenra website.",
    type: "website",
    url: "https://avenra.org/terms",
    images: [{ url: "https://avenra.org/assets/avenra.jpeg" }],
    siteName: "Avenra",
    locale: "en_IN",
  },
};

export default function TermsPage() {
  return (
    <>
      <section className="page-hero-pad">
        <div className="container" style={{ maxWidth: 820 }}>
          <p className="eyebrow">Legal</p>
          <h1 style={{ marginTop: 16 }}>Terms of Use</h1>
          <p className="lede" style={{ maxWidth: "none", marginTop: 18 }}>
            These terms cover use of avenra.org. If you sign a project
            agreement or subscribe to SchoolIQ, that signed contract governs
            the engagement and takes precedence over anything on this page.
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
              <h3 style={{ marginBottom: 10 }}>Who these terms are with</h3>
              <p>
                The site avenra.org is operated by Avenra, a software studio
                based in Tamil Nadu, India. By using this site, you agree to
                these terms. If you don&apos;t agree, don&apos;t use the
                site.
              </p>
            </div>

            <div>
              <h3 style={{ marginBottom: 10 }}>What this site is</h3>
              <p>
                avenra.org is an informational website describing our
                services and our product SchoolIQ. Nothing here is a
                binding offer, quote, or contract. Prices, timelines, and
                specifications become binding only when they appear in a
                signed engagement agreement.
              </p>
            </div>

            <div>
              <h3 style={{ marginBottom: 10 }}>Using the site</h3>
              <p>
                You agree not to misuse the site: no scraping at a rate that
                impacts performance, no attempts to bypass security, no
                reverse-engineering of our source code, and no use of the
                site to distribute malware or unlawful content. We may block
                or restrict access if the site is misused.
              </p>
            </div>

            <div>
              <h3 style={{ marginBottom: 10 }}>Intellectual property</h3>
              <p>
                The name Avenra, the SchoolIQ name, our logos, screenshots,
                copy, and design are ours. You&apos;re welcome to link to
                the site and quote small excerpts with attribution. Anything
                more (reproduction, republication, or commercial reuse)
                needs written permission.
              </p>
            </div>

            <div>
              <h3 style={{ marginBottom: 10 }}>
                Third-party links and services
              </h3>
              <p>
                Where the site links to external services (for example
                LinkedIn, Google Fonts, or Vercel), those services are
                governed by their own terms and privacy policies. We&apos;re
                not responsible for their content or availability.
              </p>
            </div>

            <div>
              <h3 style={{ marginBottom: 10 }}>Disclaimers</h3>
              <p>
                The site is provided as-is. We try to keep information
                accurate and the site running, but we don&apos;t warrant
                that it will be error-free or continuously available. To the
                extent permitted by law, we exclude implied warranties
                around merchantability, fitness for a particular purpose,
                and non-infringement in relation to the site content.
              </p>
            </div>

            <div>
              <h3 style={{ marginBottom: 10 }}>Limitation of liability</h3>
              <p>
                To the extent permitted by law, Avenra is not liable for
                indirect, incidental, or consequential losses arising from
                your use of the site. Nothing in these terms limits
                liability that cannot be limited under Indian law.
              </p>
            </div>

            <div>
              <h3 style={{ marginBottom: 10 }}>Governing law</h3>
              <p>
                These terms are governed by the laws of India. Any disputes
                will be handled by the courts of Tamil Nadu, India.
              </p>
            </div>

            <div>
              <h3 style={{ marginBottom: 10 }}>Changes</h3>
              <p>
                We may update these terms as the site evolves. Material
                changes will be reflected here with a new &quot;last
                updated&quot; date.
              </p>
            </div>

            <div>
              <h3 style={{ marginBottom: 10 }}>Contact</h3>
              <p>
                Questions about these terms? Email{" "}
                <a href="mailto:founders@avenra.org">founders@avenra.org</a>.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
