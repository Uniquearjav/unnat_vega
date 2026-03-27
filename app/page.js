import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import CTABanner from "@/components/CTABanner";
import ExportExpertise from "@/components/ExportExpertise";
import AnalyticsGrowth from "@/components/AnalyticsGrowth";
import Pagespeed from "@/components/Pagespeed";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Pagespeed />
      <Portfolio />
      <AnalyticsGrowth />
      <ExportExpertise />
      <Testimonials />
      <FAQ />
      <CTABanner />
      <Contact />
    </>
  );
}
