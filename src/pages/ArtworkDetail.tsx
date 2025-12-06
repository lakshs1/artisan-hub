import { useParams, Link } from "react-router-dom";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { getArtworkById } from "@/data/artworks";
import { ArtworkInquiryDialog } from "@/components/ArtworkInquiryDialog";
import { ArrowLeft, Clock, Calendar, Palette, Ruler, Sparkles } from "lucide-react";
import { useState } from "react";

const ArtworkDetail = () => {
  const { id } = useParams<{ id: string }>();
  const artwork = getArtworkById(Number(id));
  const [dialogType, setDialogType] = useState<"purchase" | "commission">("purchase");
  const [dialogOpen, setDialogOpen] = useState(false);

  if (!artwork) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <main className="pt-32 pb-20 text-center">
          <h1 className="font-display text-4xl text-foreground mb-4">Artwork Not Found</h1>
          <p className="text-muted-foreground mb-8">The artwork you're looking for doesn't exist.</p>
          <Link to="/portfolio">
            <Button variant="outline">Back to Portfolio</Button>
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  const handleInquiry = (type: "purchase" | "commission") => {
    setDialogType(type);
    setDialogOpen(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-20">
        {/* Back Navigation */}
        <div className="container-wide py-6">
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Portfolio
          </Link>
        </div>

        {/* Main Content */}
        <section className="section-padding pt-0">
          <div className="container-wide">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
              {/* Artwork Image */}
              <div className="animate-fade-in">
                <div className="relative aspect-[4/5] overflow-hidden rounded-lg shadow-elegant">
                  <img
                    src={artwork.image}
                    alt={artwork.title}
                    className="w-full h-full object-cover"
                  />
                  {/* Status Badge */}
                  <div
                    className={`absolute top-6 right-6 px-4 py-2 rounded-full text-sm uppercase tracking-wider ${
                      artwork.status === "available"
                        ? "bg-teal text-cream"
                        : "bg-charcoal/80 text-cream"
                    }`}
                  >
                    {artwork.status}
                  </div>
                </div>
              </div>

              {/* Artwork Details */}
              <div className="animate-fade-in-up">
                <p className="text-primary uppercase tracking-widest text-sm mb-4">
                  {artwork.category}
                </p>
                <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
                  {artwork.title}
                </h1>

                {/* Quick Info */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <Palette className="w-5 h-5 text-primary" />
                    <span>{artwork.medium}</span>
                  </div>
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <Ruler className="w-5 h-5 text-primary" />
                    <span>{artwork.dimensions}</span>
                  </div>
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <Calendar className="w-5 h-5 text-primary" />
                    <span>Created in {artwork.year}</span>
                  </div>
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <Clock className="w-5 h-5 text-primary" />
                    <span>{artwork.timeTaken}</span>
                  </div>
                </div>

                {/* Inspiration */}
                <div className="mb-8">
                  <h2 className="font-display text-xl text-foreground mb-3 flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-ochre" />
                    Inspiration
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    {artwork.inspiration}
                  </p>
                </div>

                {/* Materials Used */}
                <div className="mb-10">
                  <h2 className="font-display text-xl text-foreground mb-3">
                    Materials Used
                  </h2>
                  <div className="flex flex-wrap gap-2">
                    {artwork.materialsUsed.map((material, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 bg-secondary text-secondary-foreground rounded-full text-sm"
                      >
                        {material}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  {artwork.status === "available" && (
                    <Button
                      size="lg"
                      onClick={() => handleInquiry("purchase")}
                      className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground"
                    >
                      Inquire to Purchase
                    </Button>
                  )}
                  <Button
                    size="lg"
                    variant="outline"
                    onClick={() => handleInquiry("commission")}
                    className="flex-1 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  >
                    Commission Similar Work
                  </Button>
                </div>

                {artwork.status === "sold" && (
                  <p className="text-muted-foreground text-sm mt-4 text-center sm:text-left">
                    This piece has found its home, but you can commission a similar work.
                  </p>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />

      {/* Inquiry Dialog */}
      <ArtworkInquiryDialog
        artwork={artwork}
        type={dialogType}
        open={dialogOpen}
        onOpenChange={setDialogOpen}
      />
    </div>
  );
};

export default ArtworkDetail;
