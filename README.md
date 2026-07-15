# Avenra — Next.js conversion

This is your original static site (`index.html`, `about.html`, `contact.html`,
`privacy.html`, `terms.html`, `product.html`) converted to Next.js (App Router),
with the exact same CSS, layout, and behavior.

## ⚠️ 1 required step before it looks right: add your assets

Your uploaded project files didn't include an `assets/` folder (images, logo,
favicon, video) — only the HTML/CSS/JS. Copy your real `assets/` folder
(the one currently sitting next to your HTML files) into:

```
public/assets/
```

so you end up with e.g. `public/assets/img/student_dashboard.jpeg`,
`public/assets/mark.svg`, `public/assets/favicon.svg`, `public/assets/avenra.jpeg`,
`public/assets/video/campus-demo.mp4`, etc. Anything under `public/` in Next.js
is served from the site root exactly like your old relative paths were, so no
code changes are needed once the folder is in place.

## Running it

```bash
npm install
npm run dev       # http://localhost:3000
```

```bash
npm run build
npm start          # production build
```

## What changed vs. the original (and why it's still pixel-identical)

| Original | Next.js | Why |
|---|---|---|
| `style.css` | `app/globals.css` | Same file, same rules, loaded globally. |
| Repeated `<header>`/`<footer>` in every `.html` | `components/Nav.js`, `components/Footer.js`, rendered once in `app/layout.js` | DRY — same markup, now written once. |
| `main.js` (DOM queries, `classList`) | `components/*` using `useState`/`useEffect` | Same behavior, React-idiomatic. See table below. |
| `about.html`, `contact.html`, etc. | `app/about/page.js`, `app/contact/page.js`, etc. | Next.js App Router: one folder = one route. |
| `product.html` | `app/product/page.js` | Same. |
| `<a href="about.html">` | `<Link href="/about">` | Next's client-side router; same visual link, faster nav (no full page reload). |
| Inline `<script>` blocks (JSON-LD, form init) | Handled inside the relevant component/page | Same output in the rendered HTML. |
| `<title>`, meta tags, OG tags | `export const metadata = {...}` in each page | Next.js's built-in metadata API — same tags end up in `<head>`. |

### Interactive pieces, mapped 1:1

- Mobile nav drawer → `components/Nav.js` (`useState` for open/close)
- Scroll-reveal animations → `components/ScrollReveal.js` (same `IntersectionObserver`, re-runs per route)
- Home hero "console" typing animation → `components/ConsoleWidget.js`
- FAQ accordion (product page) → `components/Faq.js`
- Student/Teacher/Admin tabs (product page) → `components/PortalTabs.js`
- Contact form + submit/success/error states → `components/ContactForm.js`
- Question paper generator demo → `components/GeneratorDemo.js`
- WhatsApp floating button → `components/WhatsAppFab.js`

## Things worth knowing as you learn Next.js from this

- Every file in `app/*/page.js` is a **Server Component** by default (no
  `"use client"` at the top) — it renders on the server, ships less JS.
  Only the files that need interactivity (`useState`, click handlers,
  browser APIs) have `"use client"` at the top — that's why only the files
  in `components/` have it, not the `page.js` files.
- `app/layout.js` wraps every page — that's where Nav/Footer/WhatsApp button
  live so you don't repeat them.
- Old `.html` URLs (`about.html`) became clean routes (`/about`). If you
  need the old `.html` URLs to keep working (e.g. for SEO/backlinks), add
  redirects in `next.config.mjs` — ask me and I'll add them.
- `next/link` replaces `<a>` for internal links (instant navigation, no
  full reload). External links (`mailto:`, `tel:`, WhatsApp, LinkedIn) are
  still plain `<a>` tags, same as before.

## Not yet wired up

- The contact form still points at Web3Forms with a placeholder access key
  (`YOUR_WEB3FORMS_ACCESS_KEY`) — same placeholder as your original file.
  Drop in your real key in `components/ContactForm.js`.
- Vercel Web Analytics script (`/_vercel/insights/script.js`) — add back via
  `@vercel/analytics` package once deployed to Vercel, or leave as-is if
  you deploy elsewhere.
