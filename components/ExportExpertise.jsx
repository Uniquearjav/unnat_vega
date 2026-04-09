import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  RiGlobalLine,
  RiShipLine,
  RiMapPinLine,
  RiTeamLine,
  RiCheckDoubleLine,
  RiStarLine,
} from "react-icons/ri";
import country_img from "@/public/country.webp";
import { FiGlobe } from "react-icons/fi";

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
    <section className="py-20 lg:py-32 relative overflow-hidden scroll-mt-20">

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
        <Card className="overflow-hidden mb-12 max-w-4xl mx-auto h-fit">
          <div className="relative items-center justify-center flex">
            <Image
              src={country_img}
              alt="Google Analytics showing visitors from 100+ countries for Nirvatatva"
              className=" m-5 rounded-xl"
            />
          </div>
          <CardContent className="p-5 bg-muted/30">
            <div className="flex flex-col sm:flex-row items-center rounded-xl justify-between gap-4">
              <p className="text-sm text-muted-foreground">
                📸 Actual Google Analytics data from{" "}
                <strong className="text-foreground">Nirvatatva</strong> — visitors from{" "}
                <strong className="text-emerald-500">100+ countries</strong>
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
                    <Icon className="text-2xl text-primary group-hover:text-black transition-colors" />
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