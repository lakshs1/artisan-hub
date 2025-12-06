import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Mitchell",
    city: "New York",
    quote: "Anisha's work transformed our living space into a gallery. Her attention to color and emotion is unparalleled. The piece we commissioned has become the centerpiece of our home, sparking conversations with every guest who visits.",
    type: "Commission",
    year: 2024,
  },
  {
    id: 2,
    name: "James Chen",
    city: "San Francisco",
    quote: "The commissioned piece exceeded all expectations. She truly understood our vision and brought it to life in ways we couldn't have imagined. Working with Anisha was a collaborative and inspiring experience.",
    type: "Commission",
    year: 2024,
  },
  {
    id: 3,
    name: "Elena Rodriguez",
    city: "Miami",
    quote: "Working with Anisha was a joy. Her professionalism and artistic vision made the collaboration seamless. The final piece perfectly captures the essence of what we wanted to convey in our gallery space.",
    type: "Collaboration",
    year: 2023,
  },
  {
    id: 4,
    name: "David Thompson",
    city: "London",
    quote: "I've collected art for over twenty years, and Anisha's work stands out for its emotional depth and technical mastery. The pieces I own continue to reveal new details and meanings over time.",
    type: "Purchase",
    year: 2023,
  },
  {
    id: 5,
    name: "Priya Sharma",
    city: "Mumbai",
    quote: "Anisha's ability to blend traditional techniques with contemporary vision is remarkable. Her textile-inspired paintings bring a unique warmth and cultural richness to any space.",
    type: "Purchase",
    year: 2024,
  },
  {
    id: 6,
    name: "Michael Foster",
    city: "Chicago",
    quote: "The painting we purchased has become a treasured family heirloom. Anisha's work carries a timeless quality that transcends trends. It's art that grows with you.",
    type: "Purchase",
    year: 2022,
  },
];

const Testimonials = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-20">
        {/* Hero */}
        <section className="section-padding bg-charcoal text-cream">
          <div className="container-wide text-center">
            <p className="text-ochre uppercase tracking-widest text-sm mb-4 animate-fade-in">Testimonials</p>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl mb-6 animate-fade-in-up">
              What <span className="italic">Collectors</span> Say
            </h1>
            <p className="text-cream/70 text-lg md:text-xl max-w-2xl mx-auto animate-fade-in-delay-1">
              Words from those who have welcomed my art into their homes and lives.
            </p>
          </div>
        </section>

        {/* Testimonials Grid */}
        <section className="section-padding">
          <div className="container-wide">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <article
                  key={testimonial.id}
                  className="bg-card border border-border rounded-lg p-8 hover-lift animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <Quote className="w-10 h-10 text-primary/30 mb-6" />
                  <p className="text-foreground/80 text-lg leading-relaxed mb-6 italic">
                    "{testimonial.quote}"
                  </p>
                  <div className="border-t border-border pt-4">
                    <p className="font-display text-lg text-foreground">{testimonial.name}</p>
                    <p className="text-muted-foreground text-sm">
                      {testimonial.city} • {testimonial.type} • {testimonial.year}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <ContactCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Testimonials;
