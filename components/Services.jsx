import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  RiCodeSSlashLine,
  RiSmartphoneLine,
  RiSearchEyeLine,
  RiPaintBrushLine,
  RiSpeedLine,
  RiShieldCheckLine,
} from "react-icons/ri";

const services = [
  {
    icon: RiCodeSSlashLine,
    title: "Custom Web Development",
    description:
      "Hand-crafted websites built with React, Next.js, and modern technologies for unmatched performance and scalability.",
  },
  {
    icon: RiSmartphoneLine,
    title: "Responsive Design",
    description:
      "Mobile-first designs that look pixel-perfect and function flawlessly across every device and screen size.",
  },
  {
    icon: RiSearchEyeLine,
    title: "SEO Optimization",
    description:
      "Built-in SEO best practices, structured data, and performance tuning to boost your search rankings.",
  },
  {
    icon: RiPaintBrushLine,
    title: "UI/UX Design",
    description:
      "Beautiful, intuitive interfaces grounded in user research and designed to maximize engagement and conversions.",
  },
  {
    icon: RiSpeedLine,
    title: "Performance Optimization",
    description:
      "Sub-second load times with code splitting, image optimization, lazy loading, and edge caching strategies.",
  },
  {
    icon: RiShieldCheckLine,
    title: "Maintenance & Support",
    description:
      "Ongoing support, security updates, uptime monitoring, and feature enhancements to keep your site running smoothly.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 lg:py-32 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <Badge variant="secondary" className="mb-4 rounded-full px-4 py-1">
            Our Services
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            Everything You Need to{" "}
            <span className="text-primary">Succeed Online</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            We offer a comprehensive suite of web development services to help
            your business thrive in the digital world.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Card
                key={service.title}
                className="group hover:border-primary/50 transition-all duration-300 bg-card/50 hover:shadow-lg hover:shadow-primary/5"
              >
                <CardHeader>
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <Icon className="text-2xl text-primary group-hover:text-black transition-colors" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}