import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import artwork1 from "@/assets/artwork-1.jpg";
import artwork2 from "@/assets/artwork-2.jpg";
import artwork3 from "@/assets/artwork-3.jpg";
import artwork4 from "@/assets/artwork-4.jpg";

const artworks = [
  {
    id: 1,
    title: "Golden Reverie",
    category: "Painting",
    medium: "Oil on Canvas",
    dimensions: "36\" x 48\"",
    year: 2024,
    image: artwork1,
    status: "available",
    price: 2800,
  },
  {
    id: 2,
    title: "Emergence",
    category: "Abstract",
    medium: "Acrylic on Canvas",
    dimensions: "24\" x 30\"",
    year: 2024,
    image: artwork2,
    status: "available",
    price: 1800,
  },
  {
    id: 3,
    title: "Still Life with Flowers",
    category: "Classical",
    medium: "Oil on Canvas",
    dimensions: "48\" x 32\"",
    year: 2023,
    image: artwork3,
    status: "sold",
    price: 3500,
  },
  {
    id: 4,
    title: "Woven Dreams",
    category: "Textile",
    medium: "Mixed Fiber Art",
    dimensions: "24\" x 24\"",
    year: 2024,
    image: artwork4,
    status: "available",
    price: 1200,
  },
];

const categories = ["All", "Painting", "Abstract", "Classical", "Textile"];

import { useState } from "react";

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredArtworks = activeCategory === "All" 
    ? artworks 
    : artworks.filter(art => art.category === activeCategory);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-20">
        {/* Hero */}
        <section className="section-padding bg-secondary">
          <div className="container-wide">
            <p className="text-primary uppercase tracking-widest text-sm mb-4 animate-fade-in">Collection</p>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-foreground mb-6 animate-fade-in-up">
              Art <span className="italic">Portfolio</span>
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl animate-fade-in-delay-1">
              Explore my collection of paintings, textile art, and creative expressions across various mediums and styles.
            </p>
          </div>
        </section>

        {/* Filter */}
        <section className="py-8 border-b border-border sticky top-20 bg-background/95 backdrop-blur-md z-40">
          <div className="container-wide">
            <div className="flex flex-wrap items-center gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-5 py-2 rounded-full text-sm transition-all duration-300 ${
                    activeCategory === category
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-secondary-foreground hover:bg-muted"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="section-padding">
          <div className="container-wide">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredArtworks.map((artwork, index) => (
                <article
                  key={artwork.id}
                  className="artwork-card group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <img
                      src={artwork.image}
                      alt={artwork.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    {/* Status Badge */}
                    <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs uppercase tracking-wider ${
                      artwork.status === "available" 
                        ? "bg-teal text-cream" 
                        : "bg-charcoal/80 text-cream"
                    }`}>
                      {artwork.status}
                    </div>
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    {/* Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                      <p className="text-cream/70 text-sm mb-1">{artwork.medium}</p>
                      <p className="text-cream/70 text-sm mb-2">{artwork.dimensions}</p>
                      {artwork.status === "available" && (
                        <p className="text-ochre font-display text-xl">${artwork.price.toLocaleString()}</p>
                      )}
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-muted-foreground text-sm uppercase tracking-wider mb-2">
                      {artwork.category} • {artwork.year}
                    </p>
                    <h3 className="font-display text-2xl text-foreground">{artwork.title}</h3>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Portfolio;
