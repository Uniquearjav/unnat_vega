import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { HiCheck, HiArrowRight } from "react-icons/hi2";

const plans = [
  {
    name: "Starter",
    price: "25,000",
    period: "one-time",
    description: "Perfect for small businesses just getting started online.",
    features: [
      "Basic 3 page website",
      "Landing Page + Contact Us + About Us",
      "Mobile responsive design",
      "Contact form integration",
      "Basic SEO setup",
      "Performance Audit",
      "Google Analytics setup",
      "2-week delivery",
    ],
    popular: false,
  },
  {
    name: "Professional",
    price: "30,000",
    period: "one-time",
    description:
      "For growing businesses that need a full online presence.",
    features: [
      "Up to 5 pages",
      "Mobile responsive design",
      "CMS integration",
      "Advanced SEO optimization",
      "3 rounds of revisions",
      "Google Analytics setup",
      "3-week delivery",
    ],
    popular: true,
  },
  {
    name: "Premium",
    price: "60,000+",
    period: "starting at",
    description:
      "For brands that need advanced features and custom solutions.",
    features: [
      "10+ pages / Custom scope",
      "Custom animations & interactions",
      "E-commerce functionality",
      "Advanced SEO & performance audit",
      "Unlimited revisions",
      "Priority support (6 months)",
      "4-6 week delivery",
    ],
    popular: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 lg:py-32 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <Badge variant="secondary" className="mb-4 rounded-full px-4 py-1">
            Pricing
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            Simple, Transparent{" "}
            <span className="text-primary">Pricing</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            No hidden fees. Choose the plan that fits your needs and budget.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-start">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={`relative transition-all duration-300 ${
                plan.popular
                  ? "border-primary shadow-xl shadow-primary/10 lg:scale-105"
                  : "bg-card/50 hover:border-primary/30"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <Badge className="bg-primary text-primary-foreground rounded-full px-4">
                    Most Popular
                  </Badge>
                </div>
              )}

              <CardHeader className="text-center pb-4 pt-8">
                <CardTitle className="text-xl mb-1">{plan.name}</CardTitle>
                <CardDescription className="text-sm">
                  {plan.description}
                </CardDescription>
                <div className="mt-6">
                  <span className="text-sm text-muted-foreground">
                    {plan.period === "starting at" ? "starting at" : ""}
                  </span>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-5xl font-bold tracking-tight">
                      &#8377;{plan.price}
                    </span>
                  </div>
                  <span className="text-sm text-muted-foreground">
                    per project
                  </span>
                </div>
              </CardHeader>

              <CardContent>
                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-sm"
                    >
                      <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <HiCheck className="text-xs text-primary" />
                      </div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter className="pt-2 pb-8">
                <Button
                  className={`w-full rounded-full gap-2 ${
                    plan.popular ? "" : ""
                  }`}
                  variant={plan.popular ? "default" : "outline"}
                  size="lg"
                >
                  Get Started <HiArrowRight />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Bottom Note */}
        <p className="text-center text-sm text-muted-foreground mt-10">
          Need a custom solution?{" "}
          <a href="#contact" className="text-primary hover:underline">
            Contact us
          </a>{" "}
          for a tailored quote.
        </p>
      </div>
    </section>
  );
}