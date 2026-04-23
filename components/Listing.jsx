"use client";
import Image from "next/image";
import { useState } from "react";

const platforms = [
  {
    name: "Google",
    logo: "/listing/gmb.webp",
    url: "https://g.co/kgs/unnatvega",
  },
  {
    name: "Facebook",
    logo: "/listing/fb.svg",
    url: "#",
  },
  {
    name: "Justdial",
    logo: "/listing/justdial.svg",
    url: "https://justdial.com/unnatvega",
  },
  {
    name: "",
    logo: "/listing/justdial.svg",
    url: "https://justdial.com/unnatvega",
  },
];

export default function LogoCarousel() {
  const looped = [...platforms, ...platforms];
  const [paused, setPaused] = useState(false);

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

      <div className="overflow-hidden">
        <div
          className="flex items-center"
          style={{
            animation: "scroll 30s linear infinite",
            animationPlayState: paused ? "paused" : "running",
          }}
        >
          {looped.map((item, i) => (
            <a
              key={i}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setPaused(true)}
              onMouseLeave={() => setPaused(false)}
              className="flex items-center justify-center w-[160px] shrink-0 px-8 group/item transition-all duration-300"
            >
              <Image
                src={item.logo}
                alt={item.name}
                width={120}
                height={60}
                className="
                  object-contain
                  grayscale opacity-70
                  transition-all duration-300
                  group-hover/item:grayscale-0
                  group-hover/item:opacity-100
                  group-hover/item:scale-110
                "
              />
            </a>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}