"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FiExternalLink } from "react-icons/fi";

const projects = [
  {
    title: "Revati Craft",
    category: "Export Showcase Website",
    description:
      "Export business website with product catalog, request sample form, contact form, and client testimonials.",
    image: "/revati.png",
    tech: ["Next.js", "JavaScript", "Tailwind"],
    live: "https://www.revaticraft.com",
  },
  {
    title: "Nirvatatva",
    category: "Export Business Website",
    description:
      "Dynamic export business e-commerce website with product listings.",
    image: "/nirvatatva.png",
    tech: ["Payload CMS", "MongoDB", "Next.js"],
    live: "https://www.nirvatatva.com",
  },
  {
    title: "Arjav Consultancy",
    category: "Consult Site",
    description:
      "Tax consultancy website with client testimonials, services, and contact information.",
    image: "/a_consult.png",
    tech: ["Tailwind", "Next.js"],
    live: "https://arjavconsultancy.vercel.app",
  },
  {
    title: "Numerologist Simple Bhansali",
    category: "Numerology Consultancy",
    description:
      "Numerology consultancy website with personalized readings, testimonials, and contact form.",
    image: "/numerologist_simple.png",
    tech: ["Next.js"],
    live: "https://numerologistsimplebhansali.vercel.app",
  },
    {
    title: "Anantastra",
    category: "Open Source Saas Project",
    description:
      "Open source SaaS project with simple interest calculator, morse code translator, and responsive design.",
    image: "/anantastra.png",
    tech: ["Next.js"],
    live: "https://anantastra.vercel.app",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20 lg:py-32 scroll-mt-20">
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
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Card
              key={project.title}
              className="group overflow-hidden border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
            >
              {/* Image Section */}
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/50 transition-all duration-300 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100">
                  <a
                    href={project.live}
                    target="_blank"
                    className="w-11 h-11 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-all hover:scale-110"
                  >
                    <FiExternalLink className="text-lg" />
                  </a>
                </div>
              </div>

              {/* Content */}
              <CardContent className="p-6">
                <Badge variant="outline" className="mb-3 text-xs rounded-full">
                  {project.category}
                </Badge>

                <h3 className="text-lg font-semibold mb-1">
                  {project.title}
                </h3>

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