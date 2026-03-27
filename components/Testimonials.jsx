import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { IoStarSharp } from "react-icons/io5";
import { RiDoubleQuotesL } from "react-icons/ri";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechStart Inc.",
    content:
      "Unnat Vega completely transformed our online presence. Our new website has increased leads by 150% in just three months. The team's expertise and attention to detail blew us away.",
    rating: 5,
    initials: "SJ",
  },
  {
    name: "Michael Chen",
    role: "Founder, GreenLeaf Co.",
    content:
      "From the initial consultation to the final launch, working with Unnat Vega was an incredible experience. They understood our vision perfectly and delivered beyond expectations.",
    rating: 5,
    initials: "MC",
  },
  {
    name: "Emily Rodriguez",
    role: "Marketing Director, BluePeak",
    content:
      "The website Unnat Vega built for us is not only stunning but also incredibly fast and SEO-friendly. Our organic traffic has doubled since the launch. Highly recommended!",
    rating: 5,
    initials: "ER",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-20 lg:py-32 scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <Badge variant="secondary" className="mb-4 rounded-full px-4 py-1">
            Testimonials
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            What Our <span className="text-primary">Clients Say</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Don&apos;t just take our word for it — hear from the businesses
            we&apos;ve helped succeed.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.name}
              className="bg-card/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
            >
              <CardContent className="pt-8 pb-6 px-6">
                {/* Quote Icon */}
                <RiDoubleQuotesL className="text-3xl text-primary/30 mb-4" />

                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <IoStarSharp
                      key={i}
                      className="text-yellow-500 text-sm"
                    />
                  ))}
                </div>

                {/* Content */}
                <p className="text-muted-foreground leading-relaxed mb-6">
                  &ldquo;{testimonial.content}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 pt-4 border-t border-border">
                  <div className="w-11 h-11 rounded-full bg-gradient-to-br from-primary to-purple-400 flex items-center justify-center text-white font-semibold text-sm">
                    {testimonial.initials}
                  </div>
                  <div>
                    <div className="font-semibold text-sm">
                      {testimonial.name}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}