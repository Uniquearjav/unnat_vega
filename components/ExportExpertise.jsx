import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  RiGlobalLine,
  RiShipLine,
  RiExternalLinkLine,
  RiMapPinLine,
  RiTeamLine,
  RiCheckDoubleLine,
  RiArrowRightLine,
  RiStarLine,
} from "react-icons/ri";
import { HiArrowRight } from "react-icons/hi2";
import { FiGlobe } from "react-icons/fi";

const exportProjects = [
  {
    name: "Nirvatatva",
    url: "nirvatatva.com",
    description:
      "Premium Indian handicraft exporter reaching global buyers with a stunning, SEO-optimized website that ranks internationally.",
    countries: "100+",
    industry: "Handicraft Exports",
    gradient: "from-amber-500 to-orange-600",
    stats: [
      { label: "Countries", value: "100+" },
      { label: "PageSpeed", value: "94" },
      { label: "Active Users", value: "4.7K" },
    ],
  },
  {
    name: "Revati Craft",
    url: "revaticraft.com",
    description:
      "Artisan craft exporter from India showcasing handmade products to international buyers with an elegant, fast-loading e-commerce experience.",
    countries: "50+",
    industry: "Artisan Craft Exports",
    gradient: "from-emerald-500 to-teal-600",
    stats: [
      { label: "Countries", value: "50+" },
      { label: "PageSpeed", value: "90+" },
      { label: "Conversion", value: "3.2%" },
    ],
  },
];

const capabilities = [
  {
    icon: RiGlobalLine,
    title: "Multi-Language Ready",
    desc: "Built to support multiple languages for global audiences",
  },
  {
    icon: RiMapPinLine,
    title: "International SEO",
    desc: "Optimized for search engines across different countries",
  },
  {
    icon: RiShipLine,
    title: "Export Industry Knowledge",
    desc: "Deep understanding of export business requirements",
  },
  {
    icon: RiTeamLine,
    title: "Foreign Client Friendly",
    desc: "We work seamlessly with international clients and timezones",
  },
];

export default function ExportExpertise() {
  return (
    <section className="py-20 lg:py-32 bg-muted/30 relative overflow-hidden scroll-mt-20">
      {/* Background Decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-3 h-3 rounded-full bg-primary/30 animate-pulse" />
        <div className="absolute top-1/3 right-20 w-2 h-2 rounded-full bg-amber-500/30 animate-pulse" />
        <div className="absolute bottom-20 left-1/4 w-2.5 h-2.5 rounded-full bg-emerald-500/30 animate-pulse" />
        <div className="absolute top-1/2 right-1/3 w-2 h-2 rounded-full bg-pink-500/30 animate-pulse" />
        <div className="absolute bottom-1/3 right-10 w-3 h-3 rounded-full bg-blue-500/30 animate-pulse" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="secondary" className="mb-4 rounded-full px-4 py-1">
            <FiGlobe className="inline mr-1.5" />
            Global Reach
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            Export Website{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-amber-400">
              Specialists
            </span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            We excel at building websites for Indian exporters. Our websites
            have reached visitors from{" "}
            <strong className="text-foreground">100+ countries</strong>. We&apos;re
            ready to serve foreign clients too.
          </p>
        </div>
        {/* Country Visitors Image */}
        <Card className="overflow-hidden mb-12 max-w-4xl mx-auto img-hover-zoom">
          <div className="relative">
            <div className="absolute top-3 left-3 z-10">
              <Badge className="bg-primary text-white rounded-full text-xs">
                🌍 Google Analytics — Country Data
              </Badge>
            </div>
            <Image
              src="/country-visitors.png"
              alt="Google Analytics showing visitors from 100+ countries for Nirvatatva"
              width={1000}
              height={500}
              className="w-full h-auto object-cover"
            />
          </div>
          <CardContent className="p-5 bg-muted/30">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-sm text-muted-foreground">
                📸 Actual Google Analytics data from{" "}
                <strong className="text-foreground">Nirvatatva</strong> — visitors from{" "}
                <strong className="text-emerald-500">100+ countries</strong>{" "}
                across 6 continents
              </p>
              <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <RiCheckDoubleLine className="text-emerald-500" />
                Verified Analytics Data
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Capabilities Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {capabilities.map((cap) => {
            const Icon = cap.icon;
            return (
              <Card
                key={cap.title}
                className="bg-card/50 hover:border-primary/30 transition-all duration-300 group"
              >
                <CardContent className="p-5 text-center">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <Icon className="text-2xl text-primary group-hover:text-white transition-colors" />
                  </div>
                  <h4 className="text-sm font-semibold mb-1">{cap.title}</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {cap.desc}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Trust Row */}
        <div className="flex flex-wrap justify-center gap-6 mt-10">
          {[
            { icon: RiGlobalLine, text: "100+ Countries Reached" },
            { icon: RiShipLine, text: "Export Industry Experts" },
            { icon: RiStarLine, text: "International Client Ready" },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.text}
                className="flex items-center gap-2 text-sm text-muted-foreground"
              >
                <Icon className="text-primary" />
                {item.text}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}