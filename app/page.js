import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import CTABanner from "@/components/CTABanner";
import Meaning from "@/components/Meaning";
import ExportExpertise from "@/components/ExportExpertise";
import AnalyticsGrowth from "@/components/AnalyticsGrowth";
import Pagespeed from "@/components/Pagespeed";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <Meaning />
      <Services />
      <Pagespeed />
      <AnalyticsGrowth />
      <ExportExpertise/>
      <Portfolio />
      <Process />
      <Testimonials />
      <FAQ />
      <Contact />
      <CTABanner />
      <Footer />
    </>
  );
}