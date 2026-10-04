export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  image: string;
  deliverables: string[];
  features: string[];
}

export const servicesData: ServiceItem[] = [
  {
    id: "wedding-films",
    number: "01",
    title: "Cinematic Wedding Films",
    tagline: "Films crafted like cinema, scored with emotion.",
    description:
      "A wedding film should evoke goosebumps every time you press play. We direct and craft feature-length wedding cinema and high-energy trailers, combining drone cinematography, intimate speeches, and evocative soundtracks.",
    image: "/images/IMG_4600.JPG.jpeg",
    deliverables: [
      "3-5 minute Cinematic Teaser Trailer",
      "25-45 minute Extended Documentary Feature",
      "Full multicam recording of vows, ceremonies & speeches",
      "4K Ultra HD delivery via bespoke presentation box",
    ],
    features: ["4K Cinema Cameras & Lenses", "Licensed Soundtracks", "Multi-axis Stabilization"],
  },

  {
    id: "pre-wedding",
    number: "02",
    title: "Pre-Wedding Stories",
    tagline: "Stories, scenic destinations, and unforced chemistry.",
    description:
      "Before the whirlwind of celebrations begins, take time to celebrate your love story. Whether amidst heritage havelis, misty pine forests, or quiet lakefronts, we curate intimate concepts that reflect your genuine bond.",
    image: "/images/IMG_4629.JPG.jpeg",
    deliverables: [
      "Curated styling & location conceptualization",
      "50+ Artistically edited signature couple portraits",
      "1-2 minute Teaser Film for wedding invi  tations",
      "High-res print-ready exhibition files",
    ],
    features: ["Location Scouting Support", "Wardrobe Consultation", "Drone Aerial Photography"],
  },
  {
    id: "wedding-photography",
    number: "03",
    title: "Wedding Photography",
    tagline: "Candid moments, raw emotions, and timeless editorial portraits.",
    description:
      "We believe weddings are unscripted poetry. Our unobtrusive photojournalistic approach captures stolen glances, quiet tears, and exuberant laughter, complemented by regal, editorial portraits designed to remain modern decades later.",
    image: "/images/wedding.jpg",
    deliverables: [
      "Masterfully color-graded high-resolution gallery",
      "Handcrafted fine-art heirloom wedding album",
      "Comprehensive candid & traditional coverage",
      "Private password-protected digital archive",
    ],
    features: ["Dual Lead Photographers", "Custom Color Science", "Next-Day Teaser Photos"],
  },

  {
    id: "pre-wedding",
    number: "04",
    title: "Pre-Wedding Stories",
    tagline: "Stories, scenic destinations, and unforced chemistry.",
    description:
      "Before the whirlwind of celebrations begins, take time to celebrate your love story. Whether amidst heritage havelis, misty pine forests, or quiet lakefronts, we curate intimate concepts that reflect your genuine bond.",
    image: "/images/pre_wed.jpg",
    deliverables: [
      "Curated styling & location conceptualization",
      "50+ Artistically edited signature couple portraits",
      "1-2 minute Teaser Film for wedding invitations",
      "High-res print-ready exhibition files",
    ],
    features: ["Location Scouting Support", "Wardrobe Consultation", "Drone Aerial Photography"],
  }
];
