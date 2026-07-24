import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer bg-navy">
      <div className="container">
        <div className="footer-top">
          <div>
            <Link href="/" className="brand">
              <img
                src="/assets/mark.svg"
                alt=""
                className="brand-mark"
                width="26"
                height="26"
              />
              <span className="brand-name">Avenra</span>
            </Link>
            <p className="footer-blurb">
              Web &amp; mobile apps, ERP &amp; CRM, AI voice agents, and SaaS
              products, built for teams that need software that fits how they
              already work. Studio behind SchoolIQ.
            </p>
          </div>
          <div className="footer-col">
            <h4>Product</h4>
            <ul>
              <li>
              <Link href="/">SchoolIQ</Link>
              </li>
              <li>
                <Link href="/contact">Book a demo</Link>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Company</h4>
            <ul>
              <li>
                <Link href="/services">Services</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Get in Touch</h4>
            <ul>
              <li>
                <a href="mailto:founders@avenra.org">founders@avenra.org</a>
              </li>
              <li>
                <a href="tel:+918680947556">+91 86809 47556</a>
              </li>
              <li>
                <a href="https://avenra.org">avenra.org</a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/company/avenraa"
                  target="_blank"
                  rel="noopener"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {year} Avenra. All rights reserved.</span>
          <span>
            <Link href="/privacy">Privacy</Link> &nbsp;·&nbsp;
            <Link href="/terms">Terms</Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
