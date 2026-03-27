import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  RiLineChartLine,
  RiUserAddLine,
  RiArrowUpDoubleLine,
  RiBarChartGroupedLine,
  RiGroupLine,
  RiTimeLine,
} from "react-icons/ri";
import { SiGoogleanalytics } from "react-icons/si";

const growthMilestones = [
  { users: "1", label: "First User", period: "Day 1", color: "bg-blue-500" },
  { users: "100", label: "Gaining Traction", period: "Month 1", color: "bg-purple-500" },
  { users: "500", label: "Steady Growth", period: "Month 3", color: "bg-primary" },
  { users: "1K", label: "Breaking Through", period: "Month 6", color: "bg-amber-500" },
  { users: "2.5K", label: "Accelerating", period: "Month 9", color: "bg-orange-500" },
  { users: "4.7K", label: "Active Users", period: "Today", color: "bg-emerald-500" },
];

const analyticsStats = [
  {
    icon: RiGroupLine,
    value: "4.7K",
    label: "Active Users",
    change: "+340%",
    positive: true,
  },
  {
    icon: RiTimeLine,
    value: "3:42",
    label: "Avg. Session Duration",
    change: "+85%",
    positive: true,
  },
  {
    icon: RiBarChartGroupedLine,
    value: "12.5K",
    label: "Page Views/Month",
    change: "+520%",
    positive: true,
  },
  {
    icon: RiUserAddLine,
    value: "68%",
    label: "New Visitors",
    change: "+45%",
    positive: true,
  },
];

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

        <div className="grid lg:grid-cols gap-10 lg:gap-16 items-start">
          <div className="space-y-6">
            {/* Analytics Screenshot */}
            <Card className="overflow-hidden img-hover-zoom">
              <div className="relative">
                <div className="absolute top-3 left-3 z-10">
                  <Badge className="bg-primary text-white rounded-full text-xs">
                    📊 Google Analytics — Real Data
                  </Badge>
                </div>
                <Image
                  src="/analytics-growth.png"
                  alt="Google Analytics showing growth from 1 to 4.7K active users"
                  width={800}
                  height={500}
                  className="w-full h-auto object-cover"
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
      </div>
    </section>
  );
}