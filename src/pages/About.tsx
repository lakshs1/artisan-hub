import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { ContactCTA } from "@/components/sections/ContactCTA";
import artistPortrait from "@/assets/artist-portrait.jpg";
import artwork1 from "@/assets/artwork-1.jpg";
import artwork3 from "@/assets/artwork-3.jpg";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-20">
        {/* Hero */}
        <section className="section-padding bg-secondary">
          <div className="container-wide">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              {/* Image */}
              <div className="relative animate-slide-in-left order-2 lg:order-1">
                <div className="relative aspect-[4/5] overflow-hidden rounded-lg shadow-strong">
                  <img
                    src={artistPortrait}
                    alt="Anisha Chowdhury in her studio"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-48 h-48 border-2 border-primary/30 rounded-lg -z-10" />
              </div>

              {/* Content */}
              <div className="animate-slide-in-right order-1 lg:order-2">
                <p className="text-primary uppercase tracking-widest text-sm mb-4">About the Artist</p>
                <h1 className="font-display text-5xl md:text-6xl text-foreground mb-6">
                  Anisha <span className="italic">Chowdhury</span>
                </h1>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Contemporary artist specializing in oil painting, textile design, and mixed media works. 
                  Based in New York, creating art that bridges tradition and modernity.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Story */}
        <section className="section-padding">
          <div className="container-narrow">
            <h2 className="font-display text-3xl md:text-4xl text-foreground text-center mb-12">
              The <span className="italic">Journey</span>
            </h2>
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
              <p>
                My journey into art began in the colorful streets of Kolkata, where I was surrounded 
                by the rich textile traditions and vibrant visual culture of Bengal. These early 
                experiences shaped my understanding of color, pattern, and the emotional power of 
                visual expression.
              </p>
              <p>
                After completing my formal education in Fine Arts at the Rhode Island School of Design, 
                I spent years exploring different mediums — from traditional oil painting to experimental 
                textile work. This cross-disciplinary approach has become the hallmark of my practice.
              </p>
              <p>
                Today, my work is held in private collections across North America, Europe, and Asia. 
                I've exhibited in galleries from New York to Mumbai, and my pieces have been featured 
                in publications including Art Forum, Elle Decor, and Architectural Digest.
              </p>
            </div>
          </div>
        </section>

        {/* Philosophy */}
        <section className="section-padding bg-charcoal text-cream">
          <div className="container-wide">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-display text-3xl md:text-4xl mb-8">
                  Artistic <span className="italic">Philosophy</span>
                </h2>
                <div className="space-y-6 text-cream/80">
                  <p>
                    I believe art should evoke emotion and spark dialogue. Each piece I create is 
                    a conversation between the viewer and the canvas — a moment of pause in our 
                    fast-paced world.
                  </p>
                  <p>
                    My process is intuitive yet deliberate. I often begin with loose sketches and 
                    color studies, allowing the work to evolve organically while maintaining a clear 
                    vision of its emotional destination.
                  </p>
                  <p>
                    Sustainability is central to my practice. I source materials ethically, use 
                    natural pigments when possible, and create work designed to be treasured across 
                    generations.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-[3/4] overflow-hidden rounded-lg">
                  <img src={artwork1} alt="Artwork detail" className="w-full h-full object-cover" />
                </div>
                <div className="aspect-[3/4] overflow-hidden rounded-lg mt-8">
                  <img src={artwork3} alt="Artwork detail" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Achievements */}
        <section className="section-padding">
          <div className="container-wide">
            <h2 className="font-display text-3xl md:text-4xl text-foreground text-center mb-16">
              Recognition & <span className="italic">Exhibitions</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  year: "2024",
                  title: "Solo Exhibition",
                  venue: "Chelsea Gallery, New York",
                  description: "A retrospective of textile-inspired paintings",
                },
                {
                  year: "2023",
                  title: "Group Show",
                  venue: "Art Basel Miami",
                  description: "Featured in the Emerging Artists pavilion",
                },
                {
                  year: "2022",
                  title: "Artist Residency",
                  venue: "MacDowell Fellowship",
                  description: "Three-month residency developing new body of work",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="p-8 bg-secondary rounded-lg border border-border hover-lift"
                >
                  <span className="text-primary font-display text-4xl">{item.year}</span>
                  <h3 className="font-display text-xl text-foreground mt-4 mb-2">{item.title}</h3>
                  <p className="text-muted-foreground font-medium mb-2">{item.venue}</p>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </div>
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

export default About;
