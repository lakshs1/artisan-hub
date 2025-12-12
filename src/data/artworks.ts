import artwork1 from "@/assets/artwork-1.jpg";
import artwork2 from "@/assets/artwork-2.jpg";
import artwork3 from "@/assets/artwork-3.jpg";
import artwork4 from "@/assets/artwork-4.jpg";
import artwork5 from "@/assets/artwork-5.jpg";
import artwork6 from "@/assets/artwork6.jpg";

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
    title: "In the dust of creation ",
    category: "Painting",
    medium: "Acrylic paint on sheet",
    dimensions: "16×23",
    year: 2024,
    image: artwork1,
    status: "available",
    timeTaken: "3 weeks",
    inspiration: "This painting is of a fibre sculpture I've found randomly laying on heap of dust and stones. This sculpture made the artist inside me fill with inspiration to paint it. Filled with the stones and another material in the background making it perfect fit to paint. The light of the sun hitting this sculpture in the way that brings out beauty of this sculpture.This painting shows how everything emerges from the dust and from that art breath its first light. ",
    materialsUsed: ["Winsor & Newton Oil Paints", "Belgian Linen Canvas", "Natural Bristle Brushes", "Linseed Oil Medium"],
  },
  {
    id: 2,
    title: "Holding the dawn",
    category: "Classic",
    medium: "Acrylic on Paper",
    dimensions: "8.3×11.7 (inches)",
    year: 2025,
    image: artwork2,
    status: "available",
    timeTaken: "1 weeks",
    inspiration:"A young women holding a lotus of light in the dawn. The light from the lotus is making her face, traditional attire and jewellery glow golden giving this painting a serene effect. The cool background and warm focal point creates a peaceful and divine contrast. Her expression is tender, calm and pure making the eyes of the viewer feel as the light is not only being hold in her but within her soul. This painting celebrates the feminine divinity, beauty and grace.",
    materialsUsed: ["Golden Heavy Body Acrylics", "Cotton Canvas", "Palette Knives", "Glazing Medium"],
  },
  {
    id: 3,
    title: "Furry Fun",
    category: "Classical",
    medium: "Water color on paper",
    dimensions: "8.3×11.7 (inches)",
    year: 2025,
    image: artwork3,
    status: "available",
    timeTaken: "1 weeks",
    inspiration: "Furry Fun captures a moment of pure childhood joy — a little one clinging tightly to their fluffy friend, laughter shining in their eyes. The bright splashes of color around them echo the playful chaos of young hearts, where love is simple, soft, and wonderfully unfiltered. In this frame, friendship purrs quietly, warm as sunlight and gentle as a hug.", 
    materialsUsed: ["Old Holland Oil Paints", "Italian Linen Canvas", "Sable Brushes", "Damar Varnish"],
  },
  {
    id: 4,
    title: "By the water's edge",
    category: "Oil on Canvas",
    medium: "Oil paint on Canvas",
    dimensions: "24\" x 24\"",
    year: 2025,
    image: artwork4,
    status: "available",
    timeTaken: "1 week",
    inspiration: "A quiet moment of serenity at the edge of the water with a figure of a woman can be seen sitting with the golden glow giving this painting a touch of warmth. Her posture is gentle and resting. This painting captures a soothing pause to breath, reflect and feel.",
    materialsUsed: ["Oil paints", "cotton Canvas"],
  },
  {
    id: 5,
    title: "Noor-e-nazar ",
    category: "Acrylic on Canvas",
    medium: "acrylic paint on sheet ",
    dimensions: "24\" x 24\"",
    year: 2024,
    image: artwork5,
    status: "available",
    timeTaken: "5 weeks",
    inspiration:"This painting captures a woman reclining softly draped in gold cloth, she showcases grace and elegance in her as if time has paused. Before her is placed a dhanuchi with some white flowers. The background of red curtains filled with lights can be seen making the background pop but not over to shadow the woman's body ", 
    materialsUsed: ["Merino Wool", "Silk Threads", "Cotton Warp", "Hand-dyed Fibers", "Wooden Frame Loom"],
  },
  {
    id: 5,
    title: "Midnight self ",
    category: "Acrylic on Canvas",
    medium: "acrylic paint on sheet ",
    dimensions: "11×16",
    year: 2024,
    image: artwork6,
    status: "available",
    timeTaken: "5 weeks",
    inspiration:"This self portrait captures a intimate moment of self-discovery. Holding the lantern close with the warmth of the light touching her face as if her lover is trying to touch her. She is lost in her own world. The shadow embrace the scene like a memories, and the light in the lantern shows a symbol of hope.",
    materialsUsed: ["Merino Wool", "Silk Threads", "Cotton Warp", "Hand-dyed Fibers", "Wooden Frame Loom"],
  },
];

export const categories = ["All", "Painting", "Abstract", "Classical", "Oil Paintings"];

export const getArtworkById = (id: number): Artwork | undefined => {
  return artworks.find(artwork => artwork.id === id);
};
