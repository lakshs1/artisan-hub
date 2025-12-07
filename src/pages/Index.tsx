import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { FeaturedWorks } from "@/components/sections/FeaturedWorks";
import { AboutPreview } from "@/components/sections/AboutPreview";
import { TestimonialsPreview } from "@/components/sections/TestimonialsPreview";
import { ContactCTA } from "@/components/sections/ContactCTA";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation transparent />
      <main>
        <HeroSection />
        <FeaturedWorks />
        <AboutPreview />
        {/* <TestimonialsPreview /> */}
        <ContactCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
