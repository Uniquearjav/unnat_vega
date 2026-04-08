"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { FiClock, FiMail, FiMapPin, FiPhone, FiSend } from "react-icons/fi";

const ACCESS_KEY = "04851ffa-ebe9-4fbe-af64-a2eb07ef24e9";

const contactInfo = [
  {
    icon: FiMail,
    title: "Email Us",
    detail: "unnatvega@gmail.com",
    sub: "We reply within 24 hours",
  },
  {
    icon: FiPhone,
    title: "Call Us",
    detail: "+917597464336",
    sub: "Mon–Fri, 9 AM – 6 PM IST",
  },
  {
    icon: FiMapPin,
    title: "Address",
    detail: "Jodhpur, Rajasthan, India",
    sub: "Available worldwide",
  },
  {
    icon: FiClock,
    title: "Working Hours",
    detail: "Mon – Fri",
    sub: "9:00 AM – 10:00 PM IST",
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    budget: "",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // "idle" | "loading" | "success" | "error"

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          ...formData,
          // Optional: customize the email subject line
          subject: `New Project Inquiry: ${formData.subject}`,
        }),
      });

      const data = await res.json();

      if (data.success) {
        setStatus("success");
        setFormData({ name: "", email: "", subject: "", budget: "", message: "" });
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 4000);
      }
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-20 lg:py-32 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <Badge variant="secondary" className="mb-4 rounded-full px-4 py-1">
            Contact Us
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            Let&apos;s Start Your <span className="text-primary">Project</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Have a project in mind? Fill out the form and we&apos;ll get back to
            you within 24 hours.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Left — Contact Info */}
          <div className="lg:col-span-2 space-y-4">
            {contactInfo.map((item) => {
              const Icon = item.icon;
              return (
                <Card
                  key={item.title}
                  className="bg-card/50 hover:border-primary/30 transition-colors"
                >
                  <CardContent className="flex items-start gap-4 p-5">
                    <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="text-xl text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold text-sm">{item.title}</div>
                      <div className="text-foreground text-sm mt-0.5">{item.detail}</div>
                      <div className="text-xs text-muted-foreground mt-0.5">{item.sub}</div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Right — Form */}
          <Card className="lg:col-span-3" id="contact-form">
            <CardHeader>
              <CardTitle className="text-xl">Send us a message</CardTitle>
            </CardHeader>
            <CardContent>
              {status === "success" ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-4">
                    <FiSend className="text-2xl text-green-500" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Message Sent!</h3>
                  <p className="text-muted-foreground">
                    Thanks for reaching out. We&apos;ll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {status === "error" && (
                    <div className="text-sm text-red-500 bg-red-500/10 border border-red-500/20 rounded-lg px-4 py-3">
                      Something went wrong. Please try again or email us directly.
                    </div>
                  )}

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Full Name</label>
                      <Input
                        name="name"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Email Address</label>
                      <Input
                        name="email"
                        type="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Project Type</label>
                      <Input
                        name="subject"
                        placeholder="e.g. Business Website"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Budget Range</label>
                      <Input
                        name="budget"
                        placeholder="e.g. ₹50,000 or $1000"
                        value={formData.budget}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">Project Details</label>
                    <Textarea
                      name="message"
                      placeholder="Tell us about your project, goals, and timeline..."
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    disabled={status === "loading"}
                    className="w-full sm:w-auto rounded-full px-8 gap-2"
                  >
                    {status === "loading" ? "Sending..." : <>Send Message <FiSend /></>}
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}