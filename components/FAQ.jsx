import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How long does it take to build a website?",
    answer:
      "Typical projects take 2–6 weeks depending on complexity. A simple landing page can be done in 1–2 weeks, while a multi-page site with CMS takes 3–4 weeks. Complex web applications may take 6–8 weeks or more.",
  },
  {
    question: "What technologies do you use?",
    answer:
      "We primarily use React, Next.js, and Tailwind CSS for frontend development. For backend needs, we work with Node.js, PostgreSQL, and MongoDB. For CMS solutions, we integrate Payload CMS, WordPress, Sanity, or Strapi based on your needs.",
  },
  {
    question: "Do you provide hosting and domain setup?",
    answer:
      "Yes! We help you set up hosting on reliable platforms like Vercel, Netlify, or AWS. We can also assist with domain registration and DNS configuration. Hosting costs are separate and paid directly to the provider.",
  },
  {
    question: "Do you create website for foreign clients?",
    answer:
      "Yes, we work with clients worldwide. We have experience building websites for businesses in rest of world. We communicate primarily in English and can accommodate different time zones for meetings and updates.",
  },
  {
    question: "What is your payment structure?",
    answer:
      "We require 30% upfront to begin work and 50% upon project completion before the final handoff. The remaining 20% at the delivery of the final product.",
  },
  {
    question: "Do you offer refunds?",
    answer:
      "If we haven't started development, we offer a full refund. After the design phase begins, refunds are prorated based on work completed. We're committed to your satisfaction and will work with you to resolve any concerns.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="py-20 lg:py-32 scroll-mt-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 rounded-full px-4 py-1">
            FAQ
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            Frequently Asked{" "}
            <span className="text-primary">Questions</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Everything you need to know about working with us. Can&apos;t find
            your answer?{" "}
            <a href="#contact" className="text-primary hover:underline">
              Reach out
            </a>
            .
          </p>
        </div>

        {/* Accordion */}
        <Accordion type="single" collapsible className="w-full space-y-3">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border border-border rounded-xl px-6 data-[state=open]:border-primary/50 transition-colors"
            >
              <AccordionTrigger className="text-left text-base font-medium hover:no-underline py-5">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}