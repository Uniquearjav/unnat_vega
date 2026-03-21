import { Button } from "@/components/ui/button";
import { HiArrowRight } from "react-icons/hi2";

export default function CTABanner() {
  return (
    <section className="py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-gradient-to-br from-primary via-purple-600 to-indigo-700 p-10 sm:p-14 lg:p-20 text-center overflow-hidden">
          {/* Background Decorations */}
          <div className="absolute top-0 left-0 w-72 h-72 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-2xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full translate-x-1/3 translate-y-1/3 blur-2xl" />
          <div className="absolute top-1/2 left-1/4 w-32 h-32 border border-white/10 rounded-2xl rotate-45" />
          <div className="absolute bottom-10 right-1/4 w-20 h-20 border border-white/10 rounded-full" />

          {/* Content */}
          <div className="relative z-10">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
              Ready to Build Something
              <br className="hidden sm:block" /> Amazing?
            </h2>
            <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto mb-8 leading-relaxed">
              Let&apos;s turn your vision into a stunning digital reality. Start
              with a free consultation — no strings attached.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                size="lg"
                variant="secondary"
                className="rounded-full px-8 gap-2 text-base"
              >
                Start Your Project <HiArrowRight />
              </Button>
              <a
                href="#portfolio"
                className="text-white/80 hover:text-white text-sm underline underline-offset-4 transition-colors"
              >
                or view our portfolio first
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}