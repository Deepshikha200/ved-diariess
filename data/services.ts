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
    id: "wedding-photography",
    number: "01",
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
    id: "wedding-films",
    number: "02",
    title: "Cinematic Wedding Films",
    tagline: "Films crafted like cinema, scored with emotion.",
    description:
      "A wedding film should evoke goosebumps every time you press play. We direct and craft feature-length wedding cinema and high-energy trailers, combining drone cinematography, intimate speeches, and evocative soundtracks.",
    image: "/images/9E0A8414.jpg",
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
    number: "03",
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
  },
  {
    id: "destination-weddings",
    number: "04",
    title: "Destination Weddings",
    tagline: "Photography & films from celebrations across the globe.",
    description:
      "From royal forts in Rajasthan and cliffside villas in Goa to international landscapes, our full crew travels seamlessly to capture every dawn-to-dusk event of your multi-day destination celebration.",
    image: "/images/events.jpg",
    deliverables: [
      "Complete multi-day event coverage (Mehendi, Sangeet, Haldi, Vows)",
      "Instant social media content drops for friends & family",
      "Drone aerial mapping of grand venues & decor",
      "Dedicated on-site production director",
    ],
    features: ["Global Travel Experience", "Rapid Turnaround Teasers", "Bilingual Crew"],
  },
];
