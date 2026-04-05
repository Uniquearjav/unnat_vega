import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { GoogleAnalytics } from '@next/third-parties/google'

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Unnat Vega | Web Development Agency — Speed Meets Success",
  description:
    "Unnat Vega delivers blazing-fast, high-performance websites that drive growth. Derived from Sanskrit — Unnat (Progress) + Vega (Speed).",
  keywords: [
    "web development",
    "fast websites",
    "export websites",
    "Unnat Vega",
    "high performance websites",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <GoogleAnalytics gaId="G-4D4EXH14R3" />
      </body>
    </html>
  );
}