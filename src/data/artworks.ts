import artwork1 from "@/assets/artwork-1.jpg";
import artwork2 from "@/assets/artwork-2.jpg";
import artwork3 from "@/assets/artwork-3.jpg";
import artwork4 from "@/assets/artwork-4.jpg";

export interface Artwork {
  id: number;
  title: string;
  category: string;
  medium: string;
  dimensions: string;
  year: number;
  image: string;
  status: "available" | "sold";
  timeTaken: string;
  inspiration: string;
  materialsUsed: string[];
}

export const artworks: Artwork[] = [
  {
    id: 1,
    title: "Golden Reverie",
    category: "Painting",
    medium: "Oil on Canvas",
    dimensions: "36\" x 48\"",
    year: 2024,
    image: artwork1,
    status: "available",
    timeTaken: "3 weeks",
    inspiration: "Inspired by the golden hour light filtering through autumn leaves, capturing the fleeting moments of warmth before winter's arrival.",
    materialsUsed: ["Winsor & Newton Oil Paints", "Belgian Linen Canvas", "Natural Bristle Brushes", "Linseed Oil Medium"],
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
    timeTaken: "2 weeks",
    inspiration: "A meditation on growth and transformation, exploring the moment when something new breaks through the surface.",
    materialsUsed: ["Golden Heavy Body Acrylics", "Cotton Canvas", "Palette Knives", "Glazing Medium"],
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
    timeTaken: "4 weeks",
    inspiration: "Paying homage to the Dutch masters while adding a contemporary twist, celebrating the beauty of impermanence.",
    materialsUsed: ["Old Holland Oil Paints", "Italian Linen Canvas", "Sable Brushes", "Damar Varnish"],
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
    timeTaken: "5 weeks",
    inspiration: "Drawing from childhood memories of my grandmother's handloom, blending traditional techniques with modern abstract expression.",
    materialsUsed: ["Merino Wool", "Silk Threads", "Cotton Warp", "Hand-dyed Fibers", "Wooden Frame Loom"],
  },
];

export const categories = ["All", "Painting", "Abstract", "Classical", "Textile"];

export const getArtworkById = (id: number): Artwork | undefined => {
  return artworks.find(artwork => artwork.id === id);
};
