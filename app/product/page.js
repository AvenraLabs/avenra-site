import ProductPageClient from "@/components/ProductPageClient";

export const metadata = {
  title: "Avenra Products — Interactive Demos & SaaS Portfolio | Coimbatore",
  description:
    "Explore our flagship SaaS products and client deliverables. Interact with the live mobile sandbox of SchoolIQ, our AI-powered school ERP.",
  alternates: { canonical: "https://avenra.org/product" },
  openGraph: {
    title: "Avenra Products — Interactive Demos & SaaS Portfolio",
    description:
      "Explore our flagship SaaS products and client deliverables. Interact with the live mobile sandbox of SchoolIQ, our AI-powered school ERP.",
    type: "website",
    url: "https://avenra.org/product",
    images: [{ url: "https://avenra.org/assets/avenra.jpeg", alt: "Avenra Products Portfolio" }],
    siteName: "Avenra",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Avenra Products — Interactive Demos & SaaS Portfolio",
    description:
      "Explore our flagship SaaS products and client deliverables. Interact with the live mobile sandbox of SchoolIQ, our AI-powered school ERP.",
    images: ["https://avenra.org/assets/avenra.jpeg"],
  },
};

const productsJsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Avenra Products",
  description: "Collection of SaaS products and deliverables built by Avenra, including SchoolIQ.",
  publisher: {
    "@type": "Organization",
    name: "Avenra",
    url: "https://avenra.org/"
  }
};

export default function ProductPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productsJsonLd) }}
      />
      <ProductPageClient />
    </>
  );
}
