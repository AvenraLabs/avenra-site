import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import WhatsAppFab from "@/components/WhatsAppFab";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata = {
  metadataBase: new URL("https://avenra.org"),
  title: {
    default: "Avenra — Custom Software, AI Voice Agents & SaaS Development",
    template: "%s | Avenra",
  },
  description:
    "Avenra builds custom web & mobile apps, ERP/CRM systems, AI voice agents, and SaaS products. Based in Coimbatore, Tamil Nadu.",
  authors: [{ name: "Avenra" }],
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
        <WhatsAppFab />
        <ScrollReveal />
      </body>
    </html>
  );
}
