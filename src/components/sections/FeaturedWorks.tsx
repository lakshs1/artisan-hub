import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import artwork1 from "@/assets/artwork-1.jpg";
import artwork2 from "@/assets/artwork-2.jpg";
import artwork3 from "@/assets/artwork-3.jpg";
import artwork4 from "@/assets/artwork-4.jpg";


const featuredArtworks = [
  {
    id: 1,
    title: "Golden Reverie",
    category: "Painting",
    year: 2024,
    image: artwork1,
    size: "large",
  },
  {
    id: 2,
    title: "Holding the Dawn",
    category: "Abstract",
    year: 2024,
    image: artwork2,
    size: "medium",
  },
  {
    id: 3,
    title: "Still Life with Flowers",
    category: "Classical",
    year: 2023,
    image: artwork3,
    size: "wide",
  },
  {
    id: 4,
    title: "Woven Dreams",
    category: "Textile",
    year: 2024,
    image: artwork4,
    size: "medium",
  },
];

export function FeaturedWorks() {
  return (
    <section id="featured-works" className="section-padding bg-background">
      <div className="container-wide">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <p className="text-primary uppercase tracking-widest text-sm mb-3">Featured Collection</p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground">
              Selected <span className="italic">Works</span>
            </h2>
          </div>
          <Link to="/portfolio">
            <Button variant="outline" className="group">
              View All Works
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>

        {/* Artwork Grid - Masonry Style */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {featuredArtworks.map((artwork, index) => (
            <Link
              key={artwork.id}
              to={`/portfolio`}
              className={`artwork-card group ${
                artwork.size === "large" ? "md:col-span-2 lg:col-span-1 lg:row-span-2" :
                artwork.size === "wide" ? "lg:col-span-2" : ""
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden w-full h-full">
                <img
                  src={artwork.image}
                  alt={artwork.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <p className="text-cream/70 text-sm uppercase tracking-wider mb-2">
                    {artwork.category} • {artwork.year}
                  </p>
                  <h3 className="font-display text-2xl text-cream">{artwork.title}</h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
