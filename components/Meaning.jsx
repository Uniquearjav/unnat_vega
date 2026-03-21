import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  RiFlashlightLine,
  RiRocketLine,
  RiTimerFlashLine,
  RiSpeedLine,
  RiArrowUpDoubleLine,
  RiStarLine,
} from "react-icons/ri";
import { SiPagespeedinsights } from "react-icons/si";

export default function Meaning() {
  return (
    <section id="meaning" className="py-20 lg:py-32 relative overflow-hidden scroll-mt-20">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/30 via-background to-background" />
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/5 rounded-full blur-2xl" />
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-amber-500/5 rounded-full blur-2xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="secondary" className="mb-4 rounded-full px-4 py-1">
            🙏 Rooted in Sanskrit
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            What Does{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-amber-400 sanskrit-glow">
              Unnat Vega
            </span>{" "}
            Mean?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Our name is derived from the ancient Sanskrit language — each word
            embodies the core philosophy of what we deliver.
          </p>
        </div>

        {/* Etymology Cards */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto mb-16">
          {/* Unnat Card */}
          <Card className="relative overflow-hidden group hover:border-primary/50 transition-all duration-500 hover:shadow-xl hover:shadow-primary/5">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/10 to-transparent rounded-bl-full" />
            <CardContent className="p-8 relative">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-purple-400 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-primary/20">
                  <RiArrowUpDoubleLine className="text-3xl text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Unnat</h3>
                  <p className="text-sm text-primary font-medium">उन्नत</p>
                </div>
              </div>

              <Separator className="mb-6" />

              <div className="space-y-4">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Sanskrit Meaning
                  </span>
                  <h4 className="text-xl font-semibold mt-1 text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-400">
                    Progress • Success • Growth
                  </h4>
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  In Sanskrit, <strong className="text-foreground">उन्नत (Unnat)</strong> signifies
                  elevation, advancement, and upward growth. We don&apos;t just build
                  websites — we build digital growth engines that take your
                  business to new heights.
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  <Badge variant="outline" className="rounded-full text-xs">
                    📈 Growth-Focused
                  </Badge>
                  <Badge variant="outline" className="rounded-full text-xs">
                    🎯 Result-Driven
                  </Badge>
                  <Badge variant="outline" className="rounded-full text-xs">
                    🚀 Scalable
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Vega Card */}
          <Card className="relative overflow-hidden group hover:border-amber-500/50 transition-all duration-500 hover:shadow-xl hover:shadow-amber-500/5">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-amber-500/10 to-transparent rounded-bl-full" />
            <CardContent className="p-8 relative">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-amber-500/20">
                  <RiFlashlightLine className="text-3xl text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Vega</h3>
                  <p className="text-sm text-amber-500 font-medium">वेग</p>
                </div>
              </div>

              <Separator className="mb-6" />

              <div className="space-y-4">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Sanskrit Meaning
                  </span>
                  <h4 className="text-xl font-semibold mt-1 text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-400">
                    Speed • Velocity • Momentum
                  </h4>
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  <strong className="text-foreground">वेग (Vega)</strong> means speed and
                  momentum. We deliver your websites at lightning speed, and the
                  sites we build load in the blink of an eye — because every
                  millisecond counts.
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  <Badge variant="outline" className="rounded-full text-xs">
                    ⚡ Fast Delivery
                  </Badge>
                  <Badge variant="outline" className="rounded-full text-xs">
                    🏎️ Blazing Performance
                  </Badge>
                  <Badge variant="outline" className="rounded-full text-xs">
                    💨 Quick Turnaround
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Combined Philosophy Banner */}
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-to-br from-primary/5 via-card to-amber-500/5 border-primary/20">
            <CardContent className="p-8 lg:p-10">
              <div className="grid md:grid-cols-3 gap-8 items-center">
                {/* Left — Philosophy */}
                <div className="md:col-span-2">
                  <h3 className="text-xl lg:text-2xl font-bold mb-3">
                    <span className="text-primary">Unnat</span>{" "}
                    <span className="text-muted-foreground">+</span>{" "}
                    <span className="text-amber-500">Vega</span>{" "}
                    <span className="text-muted-foreground">=</span>{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-amber-400">
                      Rapid Progress
                    </span>
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Together, our name represents what we deliver —{" "}
                    <strong className="text-foreground">
                      rapid progress through speed
                    </strong>
                    . Fast delivery, fast-loading websites, and fast results for
                    your business. We don&apos;t just promise speed — we prove it.
                  </p>
                </div>

                {/* Right — Nirvatatva Proof */}
                <div className="text-center">
                  <div className="inline-flex flex-col items-center">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-emerald-500 to-green-500 flex items-center justify-center mb-3 animate-glow-pulse">
                      <span className="text-3xl font-bold text-white">94</span>
                    </div>
                    <div className="text-sm font-semibold">Nirvatatva</div>
                    <div className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
                      <SiPagespeedinsights className="text-emerald-500" />
                      PageSpeed Score
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Bottom Feature Pills */}
        <div className="flex flex-wrap justify-center gap-4 mt-12">
          {[
            { icon: RiTimerFlashLine, text: "Speedy Delivery", color: "text-amber-500" },
            { icon: RiSpeedLine, text: "Fast Loading Sites", color: "text-emerald-500" },
            { icon: RiRocketLine, text: "Rapid Growth", color: "text-primary" },
            { icon: RiStarLine, text: "Proven Results", color: "text-pink-500" },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.text}
                className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-muted/50 border border-border hover:border-primary/30 transition-colors"
              >
                <Icon className={`text-lg ${item.color}`} />
                <span className="text-sm font-medium">{item.text}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}