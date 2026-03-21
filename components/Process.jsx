import { Badge } from "@/components/ui/badge";
import {
  RiSearchEyeLine,
  RiPaintBrushLine,
  RiCodeSSlashLine,
  RiRocketLine,
} from "react-icons/ri";

const steps = [
  {
    icon: RiSearchEyeLine,
    step: "01",
    title: "Discovery",
    description:
      "We dive deep into your business, goals, target audience, and competitors to build a winning strategy.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: RiPaintBrushLine,
    step: "02",
    title: "Design",
    description:
      "We craft wireframes and high-fidelity mockups that align with your brand identity and user needs.",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: RiCodeSSlashLine,
    step: "03",
    title: "Develop",
    description:
      "We bring designs to life with clean, performant code using modern frameworks and best practices.",
    color: "from-orange-500 to-red-500",
  },
  {
    icon: RiRocketLine,
    step: "04",
    title: "Launch & Support",
    description:
      "After thorough testing and QA, we launch your site and provide ongoing support and optimization.",
    color: "from-green-500 to-emerald-500",
  },
];

export default function Process() {
  return (
    <section id="process" className="py-20 lg:py-32 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <Badge variant="secondary" className="mb-4 rounded-full px-4 py-1">
            Our Process
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            How We <span className="text-primary">Work</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Our battle-tested process ensures your project is delivered on time,
            on budget, and beyond expectations.
          </p>
        </div>

        {/* Steps */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={step.title} className="relative group">
                {/* Connector Line (Desktop) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-[60%] w-full h-[2px]">
                    <div className="h-full bg-gradient-to-r from-border to-transparent" />
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-border" />
                  </div>
                )}

                <div className="text-center">
                  {/* Icon */}
                  <div className="relative inline-flex mb-6">
                    <div
                      className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                    >
                      <Icon className="text-3xl text-white" />
                    </div>
                    <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-background border-2 border-primary text-primary text-xs flex items-center justify-center font-bold">
                      {step.step}
                    </span>
                  </div>

                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}