export interface WeddingStory {
  id: string;
  title: string;
  couple: string;
  location: string;
  category: string;
  coverImage: string;
  secondaryImage: string;
  accentImage?: string;
  summary: string;
  quote: string;
  date: string;
  highlights: string[];
}

export const featuredStories: WeddingStory[] = [
  {
    id: "aman-simran-udaipur",
    title: "A Royal Symphony by Lake Pichola",
    couple: "Aman & Simran",
    location: "Udaipur, Rajasthan",
    category: "Destination Wedding",
    coverImage: "/images/pre_wed.jpg",
    secondaryImage: "/images/9E0A5571.jpg",
    accentImage: "/images/1J2A0521.jpg",
    summary:
      "A grand three-day celebration infused with regal heritage, sunset vows overlooking palace waters, and boundless Punjabi energy under the desert starlight.",
    quote: "Ved Diaries captured not just how our wedding looked, but how deeply every second was felt.",
    date: "November 2025",
    highlights: ["Palace Waterfront Vows", "Sunlit Haldi Ceremony", "Sufi Sangeet Night"],
  },
  {
    id: "kabir-meera-chandigarh",
    title: "Poetry in Motion & Heritage Vows",
    couple: "Kabir & Meera",
    location: "The Oberoi Sukhvilas, Chandigarh",
    category: "Heritage Wedding",
    coverImage: "/images/wedding.jpg",
    secondaryImage: "/images/9E0A8414.jpg",
    accentImage: "/images/DSC09951.jpg",
    summary:
      "Timeless architecture framed tender Anand Karaj rituals, followed by an intimate candlelit celebration echoing with acoustic melodies and heartfelt tears.",
    quote: "Every frame feels like a painting that took our breath away. Truly cinematic storytelling.",
    date: "December 2025",
    highlights: ["Anand Karaj in Morning Mist", "Royal Ivory & Crimson Decor", "Cinematic Sunset Portraits"],
  },
  {
    id: "rohan-ananya-jaipur",
    title: "A Celebration of Golden Hues & Joy",
    couple: "Rohan & Ananya",
    location: "Jaipur, Rajasthan",
    category: "Palace Celebration",
    coverImage: "/images/bannerimg.jpeg",
    secondaryImage: "/images/events.jpg",
    accentImage: "/images/DSC09974.jpg",
    summary:
      "Marigold explosions, royal courtyards, and pure unscripted joy. Rohan and Ananya's three-day festivities redefined modern royal elegance.",
    quote: "Looking through our gallery still gives us goosebumps. The emotion in every photo is palpable.",
    date: "January 2026",
    highlights: ["Grand Baarat Procession", "Carnival-themed Mehendi", "Champagne Midnight Afterparty"],
  },
  {
    id: "arjun-tara-shimla",
    title: "Whispers of Pine & Himalayan Romance",
    couple: "Arjun & Tara",
    location: "Mashobra, Shimla Hills",
    category: "Pre-Wedding & Intimate Wedding",
    coverImage: "/images/pre_wed2.jpg",
    secondaryImage: "/images/1J2A0505.jpg",
    accentImage: "/images/DSC09765.jpg",
    summary:
      "Surrounded by deodar forests and crisp mountain breezes, Arjun and Tara shared quiet stolen glances before celebrating with their closest circle.",
    quote: "They made us feel completely ourselves. No rigid poses, just real, raw love captured forever.",
    date: "February 2026",
    highlights: ["Misty Forest Walk Portraits", "Bonfire Sangeet Gathering", "Sunrise Couple Session"],
  },
];
