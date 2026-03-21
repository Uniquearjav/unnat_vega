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

        {/* Export Projects */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-12">
          {exportProjects.map((project) => (
            <Card
              key={project.name}
              className="overflow-hidden group hover:border-primary/50 transition-all duration-500 hover:shadow-xl hover:shadow-primary/5"
            >
              {/* Header Gradient */}
              <div
                className={`h-3 bg-gradient-to-r ${project.gradient}`}
              />

              <CardContent className="p-6 lg:p-8">
                {/* Top */}
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <div
                        className={`w-12 h-12 rounded-xl bg-gradient-to-br ${project.gradient} flex items-center justify-center shadow-lg`}
                      >
                        <RiShipLine className="text-2xl text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">{project.name}</h3>
                        <p className="text-xs text-muted-foreground">
                          {project.industry}
                        </p>
                      </div>
                    </div>
                  </div>
                  <a
                    href={`https://${project.url}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                  >
                    <RiExternalLinkLine className="text-lg" />
                  </a>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Stats Row */}
                <div className="grid grid-cols-3 gap-3 mb-6">
                  {project.stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="text-center p-3 rounded-xl bg-muted/50"
                    >
                      <div className="text-lg font-bold text-primary">
                        {stat.value}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Countries Badge */}
                <div className="flex items-center gap-2 p-3 rounded-xl bg-gradient-to-r from-primary/5 to-amber-500/5 border border-primary/10">
                  <RiGlobalLine className="text-primary text-lg" />
                  <span className="text-sm">
                    Reached visitors from{" "}
                    <strong className="text-foreground">
                      {project.countries} countries
                    </strong>{" "}
                    worldwide
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
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

        {/* CTA for Foreign Clients */}
        <Card className="bg-gradient-to-br from-primary/10 via-card to-amber-500/10 border-primary/20 max-w-3xl mx-auto">
          <CardContent className="p-8 lg:p-10 text-center">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-amber-500 flex items-center justify-center mx-auto mb-6 shadow-lg shadow-primary/20">
              <RiGlobalLine className="text-3xl text-white" />
            </div>
            <h3 className="text-2xl lg:text-3xl font-bold mb-3">
              Looking for a Website Partner from{" "}
              <span className="text-primary">India</span>?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto leading-relaxed">
              Whether you&apos;re an exporter from India or a foreign client looking
              for quality web development, we&apos;ve got you covered. Our proven
              track record with international projects speaks for itself.
            </p>
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {[
                "🇺🇸 USA",
                "🇬🇧 UK",
                "🇩🇪 Germany",
                "🇦🇺 Australia",
                "🇨🇦 Canada",
                "🇦🇪 UAE",
                "🇫🇷 France",
                "🇯🇵 Japan",
              ].map((country) => (
                <span
                  key={country}
                  className="text-xs px-3 py-1.5 rounded-full bg-muted/50 border border-border"
                >
                  {country}
                </span>
              ))}
              <span className="text-xs px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary font-medium">
                +92 more countries
              </span>
            </div>
            <Button
              size="lg"
              className="rounded-full px-8 gap-2 bg-gradient-to-r from-primary to-amber-500 hover:opacity-90"
            >
              Work With Us <HiArrowRight />
            </Button>
          </CardContent>
        </Card>

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