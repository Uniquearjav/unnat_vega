import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { GoogleAnalytics } from '@next/third-parties/google'

const inter = Inter({ subsets: ["latin"] });

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Unnat Vega",
    "description": "Web Development Agency specializing in export websites",
    "url": "https://unnatvega.vercel.app",
    "telephone": "+917597464336",
    "email": "unnatvega@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Jodhpur",
      "addressRegion": "Rajasthan",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "26.2389",
      "longitude": "73.0243"
    },
    "openingHoursSpecification": [{
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday","Saturday","Sunday"],
      "opens": "09:00",
      "closes": "22:00"
    }],
    "priceRange": "$$",
    "areaServed": { "@type": "Place", "name": "Worldwide" }
  };

export const metadata = {
  title: "Unnat Vega | Web Development Agency for Businesses & Exporters Worldwide",
  description:
    "Unnat Vega create modern, high-performance websites for businesses, exporters, and brands worldwide. Whether you're targeting local markets or international clients, we build scalable, SEO-friendly websites that help you grow globally.",
  keywords: [
    "web development",
    "fast websites",
    "export websites",
    "Unnat Vega",
    "high performance websites",
  ],
  metadataBase: new URL("https://unnatvega.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Unnat Vega | Web Development Agency for Businesses & Exporters Worldwide",
    description: "Unnat Vega create modern, high-performance websites for businesses, exporters, and brands worldwide. Whether you're targeting local markets or international clients, we build scalable, SEO-friendly websites that help you grow globally.",
    url: "https://unnatvega.vercel.app",
    siteName: "Unnat Vega",
    images: [{ url: "/og_unnatvega.png" }],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Unnat Vega | Web Development Agency for Businesses & Exporters Worldwide",
    description: "Unnat Vega create modern, high-performance websites for businesses, exporters, and brands worldwide. Whether you're targeting local markets or international clients, we build scalable, SEO-friendly websites that help you grow globally.",
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={inter.className}>
        <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c'),
        }}
      />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <GoogleAnalytics gaId="G-4D4EXH14R3" />
      </body>
    </html>
  );
}