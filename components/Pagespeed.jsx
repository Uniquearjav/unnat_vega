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