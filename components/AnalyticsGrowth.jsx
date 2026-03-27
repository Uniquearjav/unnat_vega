import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import user_img from "@/public/user.png";
import Image from "next/image";
import { SiGoogleanalytics } from "react-icons/si";

export default function AnalyticsGrowth() {
  return (
    <section id="analytics" className="py-20 lg:py-32 relative overflow-hidden scroll-mt-20">
      {/* Background */}
      <div className="absolute top-1/3 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 -left-40 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="secondary" className="mb-4 rounded-full px-4 py-1">
            <SiGoogleanalytics className="inline mr-1.5 text-orange-500" />
            Real Growth, Real Data
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            From <span className="text-primary">1 User</span> to{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-amber-400">
              4.7K Active Users
            </span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            This is <strong className="text-primary">उन्नत (Unnat)</strong> in action —
            real progress, real growth. Our client&apos;s Google Analytics tells
            the story of consistent, measurable growth.
          </p>
        </div>

        <div>
            {/* Analytics Screenshot */}
            {/* i want it in center as well as same as image size */}
            <Card className="mx-auto mb-8 border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 w-fit">
              <div className="relative flex justify-center items-center overflow-hidden">
                <div className="absolute top-3 left-3 z-10">
                  <Badge className="bg-primary text-black rounded-full text-xs">
                    📊 Google Analytics — Real Data
                  </Badge>
                </div>
                <Image
                  src={user_img}
                  alt="Google Analytics showing growth from 1 to 2.6K new user users"
                  className="rounded-xl m-5"
                />
              </div>
              <CardContent className="p-4 bg-muted/30">
                <p className="text-xs text-muted-foreground text-center">
                  📸 Actual Google Analytics data showing user growth — from 1
                  to <strong className="text-foreground">4.7K active users</strong>
                </p>
              </CardContent>
            </Card>

            {/* Trust Pill */}
            <div className="text-center">
              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-muted/50 border border-border text-sm">
                <SiGoogleanalytics className="text-orange-500" />
                <span>Data sourced directly from Google Analytics</span>
              </div>
            </div>
          </div>
        </div>
    </section>
  );
}