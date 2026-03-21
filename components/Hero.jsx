import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { HiArrowRight } from "react-icons/hi2";
import { FiExternalLink } from "react-icons/fi";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background Decorations */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-background" />
      <div className="absolute top-1/4 -left-32 w-72 h-72 bg-primary/15 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-1/4 -right-32 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="animate-slide-up">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] tracking-tight">
              We Build Websites
              <br />
              That{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-400 to-pink-400">
                Convert
              </span>
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-lg leading-relaxed">
              From stunning designs to blazing-fast performance, we create
              digital experiences that turn visitors into loyal customers.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button size="lg" className="rounded-full px-8 gap-2 text-base">
                Start Your Project <HiArrowRight className="text-lg" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full px-8 gap-2 text-base"
              >
                <a href="#portfolio">View Our Work</a>
              </Button>
            </div>

            {/* Stats */}
            <div className="mt-14 flex gap-10 sm:gap-14">
              {[
                { number: "20+", label: "Projects Delivered" },
                { number: "10+", label: "Happy Clients" },
                { number: "100%", label: "Satisfaction Rate" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-3xl sm:text-4xl font-bold text-primary">
                    {stat.number}
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Code Editor Mockup */}
          <div className="hidden lg:block animate-float">
            <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-2xl shadow-primary/5">
              {/* Editor Top Bar */}
              <div className="flex items-center gap-2 px-4 py-3 bg-muted/50 border-b border-border">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
                <span className="ml-3 text-xs text-muted-foreground font-mono">
                  website.config.js
                </span>
              </div>

              {/* Code Content */}
              <div className="p-6 font-mono text-sm leading-7">
                <div>
                  <span className="text-purple-400">const</span>{" "}
                  <span className="text-blue-400">website</span>{" "}
                  <span className="text-muted-foreground">=</span>{" "}
                  <span className="text-foreground">{"{"}</span>
                </div>
                <div className="pl-6">
                  <span className="text-green-400">design</span>
                  <span className="text-muted-foreground">: </span>
                  <span className="text-amber-300">
                    {'"'}stunning{'"'}
                  </span>
                  <span className="text-muted-foreground">,</span>
                </div>
                <div className="pl-6">
                  <span className="text-green-400">performance</span>
                  <span className="text-muted-foreground">: </span>
                  <span className="text-amber-300">
                    {'"'}blazing-fast{'"'}
                  </span>
                  <span className="text-muted-foreground">,</span>
                </div>
                <div className="pl-6">
                  <span className="text-green-400">responsive</span>
                  <span className="text-muted-foreground">: </span>
                  <span className="text-purple-400">true</span>
                  <span className="text-muted-foreground">,</span>
                </div>
                <div className="pl-6">
                  <span className="text-green-400">seo</span>
                  <span className="text-muted-foreground">: </span>
                  <span className="text-amber-300">
                    {'"'}optimized{'"'}
                  </span>
                  <span className="text-muted-foreground">,</span>
                </div>
                <div className="pl-6">
                  <span className="text-green-400">conversion</span>
                  <span className="text-muted-foreground">: </span>
                  <span className="text-amber-300">
                    {'"'}maximized{'"'}
                  </span>
                  <span className="text-muted-foreground">,</span>
                </div>
                <div>
                  <span className="text-foreground">{"}"}</span>
                  <span className="text-muted-foreground">;</span>
                </div>
                <div className="mt-3">
                  <span className="text-purple-400">export default</span>{" "}
                  <span className="text-blue-400">website</span>
                  <span className="text-muted-foreground">;</span>
                </div>
                <div className="mt-3">
                  <span className="text-emerald-400 animate-pulse">▊</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}