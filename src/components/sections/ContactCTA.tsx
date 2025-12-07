import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail } from "lucide-react";

export function ContactCTA() {
  return (
    <section className="section-padding bg-gradient-to-br from-sienna via-sienna-light to-ochre text-cream">
      <div className="container-narrow text-center">
        <Mail className="w-12 h-12 mx-auto mb-6 opacity-80" />
        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl mb-6">
          Let's <span className="italic">Create</span> Together
        </h2>
        <p className="text-cream/80 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          Whether you're interested in commissioning a piece, purchasing existing work, 
          or exploring a collaboration, I'd love to hear from you.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to="/contact">
            <Button
              variant="outline"
              size="xl"
              className="border-cream text-cream hover:bg-cream hover:text-sienna group"
            >
              Get In Touch
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
          <a href="mailto:mimanshashakya@gmail.com">
            <Button
              variant="ghost"
              size="xl"
              className="text-cream hover:bg-cream/10"
            >
              mimanshashakya@gmail.com
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
