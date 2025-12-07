import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Quote, ArrowRight } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Mitchell",
    city: "New York",
    quote: "mimansha's work transformed our living space into a gallery. Her attention to color and emotion is unparalleled.",
    type: "Purchase",
    year: 2024,
  },
  {
    id: 2,
    name: "James Chen",
    city: "San Francisco",
    quote: "The commissioned piece exceeded all expectations. She truly understood our vision and brought it to life.",
    type: "Commission",
    year: 2024,
  },
  {
    id: 3,
    name: "Elena Rodriguez",
    city: "Miami",
    quote: "Working with mimansha was a joy. Her professionalism and artistic vision made the collaboration seamless.",
    type: "Collaboration",
    year: 2023,
  },
];

export function TestimonialsPreview() {
  return (
    <section className="section-padding bg-charcoal text-cream">
      <div className="container-wide">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-ochre uppercase tracking-widest text-sm mb-4">Testimonials</p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl">
            What <span className="italic">Collectors</span> Say
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="bg-charcoal-light border border-cream/10 rounded-lg p-8 relative animate-fade-in-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <Quote className="w-10 h-10 text-ochre/30 mb-6" />
              <p className="text-cream/80 text-lg leading-relaxed mb-6 italic">
                "{testimonial.quote}"
              </p>
              <div className="border-t border-cream/10 pt-4">
                <p className="font-display text-lg">{testimonial.name}</p>
                <p className="text-cream/50 text-sm">
                  {testimonial.city} • {testimonial.type} • {testimonial.year}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link to="/testimonials">
            <Button variant="hero" size="lg" className="group">
              Read More Stories
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
