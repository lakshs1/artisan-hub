import artwork1 from "@/assets/artwork-1.jpg";
import artwork2 from "@/assets/artwork-2.jpg";
import artwork3 from "@/assets/artwork-3.jpg";
import artwork4 from "@/assets/artwork-4.jpg";
import artwork5 from "@/assets/artwork-5.jpg";

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
    title: "Holding the Dawn",
    category: "Abstract",
    medium: "Acrylic on Canvas",
    dimensions: "24\" x 30\"",
    year: 2024,
    image: artwork2,
    status: "available",
    timeTaken: "2 weeks",
    inspiration: "A young women holding a lotus of light in the dawn. The light from the lotus is making her face, traditional attire and jewellery glow golden giving this painting a serene effect. The cool background and warm focal point creates a peaceful and divine contrast. Her expression is tender, calm and pure making the eyes of the viewer feel as the light is not only being hold in her but within her soul. This painting celebrates the feminine divinity, beauty and grace.",
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
    title: "By the water's edge",
    category: "Water Color art",
    medium: "Water color on cotton Canvas",
    dimensions: "24\" x 24\"",
    year: 2025,
    image: artwork4,
    status: "available",
    timeTaken: "1 week",
    inspiration: "A quiet moment of serenity at the edge of the water with a figure of a woman can be seen sitting with the golden glow giving this painting a touch of warmth. Her posture is gentle and resting. This painting captures a soothing pause to breath, reflect and feel.",
    materialsUsed: ["Water colors", "cotton Canvas"],
  },
  {
    id: 5,
    title: "",
    category: "",
    medium: "",
    dimensions: "24\" x 24\"",
    year: 2024,
    image: artwork5,
    status: "available",
    timeTaken: "5 weeks",
    inspiration: "Drawing from childhood memories of my grandmother's handloom, blending traditional techniques with modern abstract expression.",
    materialsUsed: ["Merino Wool", "Silk Threads", "Cotton Warp", "Hand-dyed Fibers", "Wooden Frame Loom"],
  },
];

export const categories = ["All", "Painting", "Abstract", "Classical", "Oil Paintings"];

export const getArtworkById = (id: number): Artwork | undefined => {
  return artworks.find(artwork => artwork.id === id);
};
