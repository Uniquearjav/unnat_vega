import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import {
  FiDribbble,
  FiGithub,
  FiInstagram,
  FiLinkedin,
  FiTwitter,
  FiPhone,
  FiMail,
  FiMapPin,
} from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa6";

const footerLinks = {
  services: [
    { name: "Web Development", href: "#services" },
    { name: "UI/UX Design", href: "#services" },
    { name: "E-Commerce", href: "#services" },
    { name: "SEO Optimization", href: "#services" },
    { name: "Maintenance", href: "#services" },
  ],
  company: [
    { name: "About Us", href: "#" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Process", href: "#process" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ],
};

const socialLinks = [
  { icon: FiGithub, href: "https://github.com/Uniquearjav", label: "GitHub" },
  {
    icon: FiInstagram,
    href: "https://instagram.com/unnatvega",
    label: "Instagram",
  },
  {
    icon: FaWhatsapp,
    href: "https://wa.me/917597464336",
    label: "WhatsApp",
  },
];

const contactInfo = [
  {
    icon: FiPhone,
    label: "Phone",
    value: "+91 75974 64336",
    href: "tel:+917597464336",
  },
  {
    icon: FiMail,
    label: "Email",
    value: "unnatvega@gmail.com",
    href: "mailto:unnatvega@gmail.com",
  },
  {
    icon: FiMapPin,
    label: "Address",
    value: "Jodhpur, Rajasthan, India",
    href: "https://maps.google.com/?q=Jodhpur,Rajasthan,India",
  },
];

export default function Footer() {
  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Top Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <a href="#" className="flex items-center gap-2 mb-4">
              <Image
                src="/unnatvega_logo.png"
                alt="Unnat Vega Logo"
                className="rounded-full"
                width={80}
                height={80}
              />
              <span className="text-lg font-bold">
                Unnat<span className="text-primary"> Vega</span>
              </span>
            </a>
            <p className="text-sm text-muted-foreground mb-6 max-w-xs leading-relaxed">
              We build beautiful, high-performance websites that help businesses
              grow and succeed in the digital world.
            </p>
            <div className="flex gap-2">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-200"
                    aria-label={social.label}
                  >
                    <Icon className="text-[16px]" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4 text-sm">Services</h4>
            <ul className="space-y-2.5">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4 text-sm">Company</h4>
            <ul className="space-y-2.5">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info — NEW */}
          <div className="col-span-2 md:col-span-1">
            <h4 className="font-semibold mb-4 text-sm">Contact Info</h4>
            <ul className="space-y-4">
              {contactInfo.map((item) => {
                const Icon = item.icon;
                return (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      target={item.label === "Address" ? "_blank" : undefined}
                      rel={
                        item.label === "Address"
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="flex items-start gap-3 group"
                    >
                      <span className="mt-0.5 w-8 h-8 rounded-lg bg-muted flex items-center justify-center text-muted-foreground group-hover:text-primary group-hover:bg-primary/10 transition-all duration-200 shrink-0">
                        <Icon className="text-[14px]" />
                      </span>
                      <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors leading-relaxed">
                        {item.value}
                      </span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Unnat Vega. All rights reserved.
          </p>
          <a
            href="mailto:unnatvega@gmail.com"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            unnatvega@gmail.com
          </a>
        </div>
      </div>
    </footer>
  );
}