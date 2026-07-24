import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import WhatsAppFab from "@/components/WhatsAppFab";
import AvenraAssistant from "@/components/AvenraAssistant";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata = {
  metadataBase: new URL("https://avenra.org"),
  title: {
    default: "Avenra | SchoolIQ SaaS, Custom Software & Digital Growth for Remote-first Teams",
    template: "%s | Avenra",
  },
  description:
    "Avenra builds SchoolIQ, custom web and mobile apps, ERP/CRM systems, AI voice agents, and SEO-focused digital growth solutions for schools, SaaS, and ecommerce businesses across India and beyond.",
  keywords: [
    "Avenra",
    "SchoolIQ",
    "remote software studio",
    "SaaS development",
    "ERP CRM development",
    "SEO services",
    "ecommerce website development",
  ],
  authors: [{ name: "Avenra" }],
  creator: "Avenra",
  publisher: "Avenra",
  icons: {
    icon: "/assets/avenra.jpeg",
    apple: "/assets/avenra.jpeg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
        <AvenraAssistant />
        <WhatsAppFab />
        <ScrollReveal />
      </body>
    </html>
  );
}
