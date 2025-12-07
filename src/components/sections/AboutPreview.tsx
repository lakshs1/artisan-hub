import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import artistPortrait from "@/assets/artist-portrait.jpg";

export function AboutPreview() {
  return (
    <section className="section-padding bg-secondary">
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative animate-slide-in-left">
            <div className="relative aspect-[4/5] overflow-hidden rounded-lg shadow-strong">
              <img
                src={artistPortrait}
                alt="Artist in studio"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 border-2 border-primary/30 rounded-lg -z-10" />
          </div>

          {/* Content */}
          <div className="animate-slide-in-right">
            <p className="text-primary uppercase tracking-widest text-sm mb-4">About the Artist</p>
            <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6">
              Mimansha <span className="italic">Shakya</span>
            </h2>
            <div className="space-y-4 text-muted-foreground text-lg leading-relaxed mb-8">
              <p>
                With over a decade of experience spanning oil painting, 
                and contemporary abstract works, I create pieces that explore the 
                intersection of tradition and modernity.
              </p>
              <p>
                My work draws inspiration from nature's organic forms, cultural heritage, 
                and the emotional landscapes of human experience. Each piece is a dialogue 
                between color, texture, and meaning.
              </p>
            </div>
            <Link to="/about">
              <Button variant="artistic" size="lg" className="group">
                Learn More About Me
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
