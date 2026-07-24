import ProductPageClient from "@/components/ProductPageClient";

export const metadata = {
  metadataBase: new URL("https://avenra.org"),
  title: "SchoolIQ by Avenra | AI School Management SaaS for Coimbatore, Chennai & Tamil Nadu",
  description:
    "SchoolIQ by Avenra is an AI-powered school management SaaS for schools in Coimbatore, Chennai, and Tamil Nadu. Manage attendance, fees, exams, transport, parent communication, and learning tools in one platform.",
  keywords: [
    "SchoolIQ",
    "Avenra",
    "school management software Coimbatore",
    "school management software Chennai",
    "school ERP software Tamil Nadu",
    "AI school management SaaS",
    "school management system India",
    "student performance analytics",
    "attendance and fee management",
    "parent communication app",
    "AI tutor for schools",
    "SEO for ERP CRM ecommerce",
  ],
  alternates: { canonical: "https://avenra.org/" },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      maxSnippet: -1,
      maxImagePreview: "large",
      maxVideoPreview: -1,
    },
  },
  authors: [{ name: "Avenra" }],
  creator: "Avenra",
  publisher: "Avenra",
  openGraph: {
    title: "SchoolIQ by Avenra | AI School Management SaaS for Coimbatore, Chennai & Tamil Nadu",
    description:
      "Bring attendance, fees, exams, transport, parent communication, academic analytics, and AI learning tools into one school platform, designed for schools across Tamil Nadu and India.",
    type: "website",
    url: "https://avenra.org/",
    images: [{ url: "https://avenra.org/assets/avenra.jpeg", alt: "SchoolIQ by Avenra" }],
    siteName: "Avenra",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "SchoolIQ by Avenra | AI School Management SaaS for Coimbatore, Chennai & Tamil Nadu",
    description: "One platform for school operations, parent communication, analytics, and learning support, built for schools in Tamil Nadu and beyond.",
    images: ["https://avenra.org/assets/avenra.jpeg"],
  },
};

const schoolIqJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://avenra.org/#organization",
      name: "Avenra",
      url: "https://avenra.org/",
      description:
        "Avenra builds SchoolIQ, custom software, and digital growth products for schools, SaaS businesses, ERP/CRM teams, and ecommerce brands in Coimbatore, Chennai, and Tamil Nadu.",
      areaServed: ["Coimbatore", "Chennai", "Tamil Nadu", "India"],
      address: {
        "@type": "PostalAddress",
        addressLocality: "Coimbatore",
        addressRegion: "Tamil Nadu",
        addressCountry: "IN",
      },
    },
    {
      "@type": "SoftwareApplication",
      name: "SchoolIQ",
      applicationCategory: "EducationalApplication",
      operatingSystem: "Web",
      url: "https://avenra.org/",
      description:
        "AI-powered school management SaaS for attendance, fees, exams, transport, parent communication, academic analytics, and learning support for schools in Tamil Nadu and India.",
      featureList: [
        "Attendance and absence alerts",
        "Fee and ledger management",
        "Student performance analytics",
        "Exam and grade management",
        "Live school bus GPS tracking",
        "Parent communication",
        "AI lesson preparation and student support",
      ],
      areaServed: ["Coimbatore", "Chennai", "Tamil Nadu", "India"],
      provider: { "@id": "https://avenra.org/#organization" },
    },
  ],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schoolIqJsonLd) }}
      />
      <ProductPageClient />
    </>
  );
}
