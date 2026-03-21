import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FiExternalLink, FiGithub } from "react-icons/fi";

const projects = [
  {
    title: "Revati Craft",
    category: "Export Showcase Website",
    description:
      "Export business website with product catalog,request sample form, contact form, and client testimonials.",
    gradient: "from-violet-600 to-indigo-600",
    tech: ["Next.js", "JavaScript", "Tailwind"],
  },
  {
    title: "Nirvatatva",
    category: "Export Business Website",
    description:
      "Dynamic export business e-commerce website with product listings.",
    gradient: "from-emerald-500 to-green-600",
    tech: ["Payload CMS", "MongoDB", "Next.js"],
  },
  {
    title: "Arjav Consultancy",
    category: "Consult Site",
    description:
      "Tax consultancy website with client testimonials, services, and contact information.",
    gradient: "from-orange-500 to-red-600",
    tech: ["Tailwind", "Next.js"],
  },
  {
    title: "Numerologist Simple Bhansali",
    category: "Numerology Counsultancy",
    description:
      "Numerology consultancy website with personalized readings, testimonials, and contact form.",
    gradient: "from-cyan-500 to-blue-600",
    tech: ["Next.js"],
  },
  {
    title: "Lens & Light Studio",
    category: "Portfolio",
    description:
      "Stunning photography portfolio with smooth animations, lightbox gallery, and blog.",
    gradient: "from-pink-500 to-rose-600",
    tech: ["Next.js", "Framer Motion", "Sanity"],
  },
  {
    title: "FitPulse Landing",
    category: "Landing Page",
    description:
      "High-converting landing page for a fitness app with animated sections and lead capture.",
    gradient: "from-amber-500 to-orange-600",
    tech: ["React", "GSAP", "Tailwind"],
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20 lg:py-32 bg-muted/30 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <Badge variant="secondary" className="mb-4 rounded-full px-4 py-1">
            Our Portfolio
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            Recent <span className="text-primary">Projects</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Each project is crafted with attention to detail, performance, and
            user experience.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">
          {projects.map((project) => (
            <Card
              key={project.title}
              className="group overflow-hidden border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
            >
              {/* Project Visual */}
              <div
                className={`h-52 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}
              >
                {/* Decorative Shapes */}
                <div className="absolute top-4 right-4 w-20 h-20 border-2 border-white/20 rounded-xl rotate-12 group-hover:rotate-45 transition-transform duration-500" />
                <div className="absolute bottom-4 left-4 w-12 h-12 bg-white/10 rounded-lg -rotate-12 group-hover:rotate-12 transition-transform duration-500" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white/10 text-6xl font-bold">
                  {"</>"}
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100">
                  <a
                    href="#"
                    className="w-11 h-11 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-colors hover:scale-110 transform"
                  >
                    <FiExternalLink className="text-lg" />
                  </a>
                  <a
                    href="#"
                    className="w-11 h-11 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-colors hover:scale-110 transform"
                  >
                    <FiGithub className="text-lg" />
                  </a>
                </div>
              </div>

              {/* Project Info */}
              <CardContent className="p-6">
                <Badge variant="outline" className="mb-3 text-xs rounded-full">
                  {project.category}
                </Badge>
                <h3 className="text-lg font-semibold mb-1">{project.title}</h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2.5 py-1 rounded-full bg-primary/10 text-primary font-medium"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}