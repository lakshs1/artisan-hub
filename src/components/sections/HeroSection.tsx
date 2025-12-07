import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import heroBg from "@/assets/artwork-4.jpg";

export function HeroSection() {
  const scrollToContent = () => {
    const nextSection = document.getElementById("featured-works");
    nextSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal/70 via-charcoal/50 to-charcoal/70" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Decorative Element */}
        <div className="inline-block border border-cream/30 px-6 py-2 mb-8 animate-fade-in">
          <span className="text-cream/90 text-sm uppercase tracking-[0.3em]">
            Creative Works
          </span>
        </div>

        {/* Title */}
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-cream mb-4 animate-fade-in-up">
          Mimansha<span className="italic font-normal">Shakya</span>
        </h1>

        {/* Year */}
        <p className="text-cream/80 text-xl md:text-2xl font-display mb-8 animate-fade-in-delay-1">
          2025
        </p>

        {/* Description */}
        <p className="text-cream/70 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-in-delay-2">
          A curated collection of visual explorations, creative expressions, and 
          artistic journeys that define my unique perspective and style.
        </p>

        {/* CTA Button */}
        <div className="animate-fade-in-delay-3">
          <Link to="/portfolio">
            <Button variant="hero" size="xl">
              Explore My Work
            </Button>
          </Link>
        </div>

      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToContent}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 text-cream/60 hover:text-cream transition-colors flex flex-col items-center gap-2 group z-20"
      >
        <span className="text-sm uppercase tracking-wider">Scroll to discover</span>
        <ChevronDown className="w-5 h-5 animate-bounce" />
      </button>

      {/* Side Text - Left */}
      <div className="absolute left-4 top-1/2 -translate-y-1/2 hidden lg:block">
        <p
          className="text-cream/40 text-xs uppercase tracking-[0.3em] origin-center -rotate-90"
          style={{ writingMode: "vertical-rl" }}
        >
          Textile Design
        </p>
      </div>

      {/* Side Text - Right */}
      <div className="absolute right-4 top-1/2 -translate-y-1/2 hidden lg:block">
        <p
          className="text-cream/40 text-xs uppercase tracking-[0.3em] origin-center rotate-90"
          style={{ writingMode: "vertical-rl" }}
        >
          Design Portfolio
        </p>
      </div>
    </section>
  );
}
