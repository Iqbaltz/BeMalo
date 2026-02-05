import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default:
      "BeMalo - Jasa Pembuatan Website Medan | Bikin Website Profesional",
    template: "%s | BeMalo - Jasa Web Design Medan",
  },
  description:
    "BeMalo adalah jasa pembuatan website profesional di Medan. Layanan bikin website, jasa desain web, web development, dan konsultasi web untuk bisnis Anda. Hubungi kami untuk solusi digital terbaik!",
  keywords: [
    "bikin website Medan",
    "jasa pembuatan website",
    "jasa pembuatan website Medan",
    "jasa desain web",
    "jasa bikin web",
    "jasa web design",
    "jasa web development",
    "jasa buat website",
    "web developer Medan",
    "website murah Medan",
    "jasa website profesional",
    "pembuatan website bisnis",
    "jasa landing page",
    "jasa website company profile",
    "jasa website toko online",
    "software house Medan",
    "digital agency Medan",
    "BeMalo",
  ],
  authors: [{ name: "BeMalo" }],
  creator: "BeMalo",
  publisher: "BeMalo",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://bemalo.id"),
  alternates: {
    canonical: "/",
    languages: {
      "id-ID": "/",
    },
  },
  openGraph: {
    title: "BeMalo - Jasa Pembuatan Website Medan | Bikin Website Profesional",
    description:
      "Jasa pembuatan website profesional di Medan. Layanan bikin website, jasa desain web, web development untuk bisnis Anda. Solusi digital terbaik untuk UMKM dan perusahaan.",
    url: "https://bemalo.id",
    siteName: "BeMalo",
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: "/images/bemalo.png",
        width: 1200,
        height: 630,
        alt: "BeMalo - Jasa Pembuatan Website Medan",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BeMalo - Jasa Pembuatan Website Medan",
    description:
      "Jasa pembuatan website profesional di Medan. Bikin website, desain web, dan konsultasi web untuk bisnis Anda.",
    images: ["/images/bemalo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code", // Replace with actual code
  },
};

// JSON-LD Structured Data
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "BeMalo",
  description:
    "Jasa pembuatan website profesional di Medan. Layanan bikin website, jasa desain web, web development, dan konsultasi web untuk bisnis Anda.",
  url: "https://bemalo.id",
  logo: "https://bemalo.id/images/bemalo.png",
  image: "https://bemalo.id/images/bemalo.png",
  telephone: "+62 813-8526-7252",
  email: "bemalo.id@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Medan",
    addressRegion: "Sumatera Utara",
    addressCountry: "ID",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "3.5952",
    longitude: "98.6722",
  },
  areaServed: [
    {
      "@type": "City",
      name: "Medan",
    },
    {
      "@type": "Country",
      name: "Indonesia",
    },
  ],
  priceRange: "$$",
  openingHours: "Mo-Fr 09:00-18:00",
  sameAs: [
    "https://web.facebook.com/profile.php?id=61577782198712",
    "https://www.instagram.com/bemalo.id/",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Layanan Web Development",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Jasa Pembuatan Website",
          description:
            "Pembuatan website profesional untuk bisnis, company profile, dan toko online",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Jasa Desain Web",
          description:
            "Desain website modern, responsif, dan user-friendly untuk semua perangkat",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Konsultasi Web",
          description:
            "Konsultasi strategi digital dan pengembangan website untuk bisnis Anda",
        },
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${plusJakartaSans.variable} antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
