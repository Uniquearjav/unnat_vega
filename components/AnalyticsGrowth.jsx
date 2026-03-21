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

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Left — Growth Journey + Stats */}
          <div className="space-y-8">
            {/* Growth Journey Timeline */}
            <Card>
              <CardContent className="p-6">
                <h4 className="text-base font-semibold mb-6 flex items-center gap-2">
                  <RiLineChartLine className="text-primary" />
                  Growth Journey
                </h4>

                <div className="relative">
                  {/* Vertical Line */}
                  <div className="absolute left-[15px] top-2 bottom-2 w-0.5 bg-gradient-to-b from-blue-500 via-primary to-emerald-500" />

                  <div className="space-y-5">
                    {growthMilestones.map((milestone, index) => (
                      <div
                        key={milestone.label}
                        className="flex items-center gap-4 relative"
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        {/* Dot */}
                        <div
                          className={`w-[30px] h-[30px] rounded-full ${milestone.color} flex items-center justify-center flex-shrink-0 z-10 shadow-lg`}
                        >
                          <RiArrowUpDoubleLine className="text-white text-xs" />
                        </div>

                        {/* Content */}
                        <div className="flex-1 flex items-center justify-between bg-muted/30 rounded-xl px-4 py-3 hover:bg-muted/50 transition-colors">
                          <div>
                            <span className="text-lg font-bold">
                              {milestone.users}
                            </span>
                            <span className="text-sm text-muted-foreground ml-2">
                              {milestone.label}
                            </span>
                          </div>
                          <Badge
                            variant="outline"
                            className="rounded-full text-xs"
                          >
                            {milestone.period}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {analyticsStats.map((stat) => {
                const Icon = stat.icon;
                return (
                  <Card
                    key={stat.label}
                    className="bg-card/50 hover:border-primary/30 transition-colors"
                  >
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between mb-2">
                        <Icon className="text-xl text-primary" />
                        <span className="text-xs font-semibold text-emerald-500 bg-emerald-500/10 px-2 py-0.5 rounded-full">
                          {stat.change}
                        </span>
                      </div>
                      <div className="text-2xl font-bold">{stat.value}</div>
                      <div className="text-xs text-muted-foreground mt-0.5">
                        {stat.label}
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Right — Analytics Image + Explanation */}
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

            {/* Unnat Explanation */}
            <Card className="bg-gradient-to-br from-primary/5 to-amber-500/5 border-primary/20">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <RiArrowUpDoubleLine className="text-2xl text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">
                      This is{" "}
                      <span className="text-primary">उन्नत (Unnat)</span> —
                      Progress in Action
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      When we say <strong className="text-foreground">Unnat</strong>, we mean
                      measurable growth. Our websites don&apos;t just look good — they
                      drive real traffic, engage users, and grow your business
                      organically. This Google Analytics snapshot proves our
                      philosophy works.
                    </p>
                  </div>
                </div>
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