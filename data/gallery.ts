export interface GalleryImage {
  id: string;
  src: string;
  title: string;
  category: "Wedding" | "Pre-Wedding" | "Rituals & Candid" | "Portraits";
  aspect: "portrait" | "landscape" | "square";
  location: string;
  colSpan?: string; // For customized editorial layout
}

export const galleryCategories = [
  "All",
  "Wedding",
  "Pre-Wedding",
  "Rituals & Candid",
  "Portraits",
] as const;

export type GalleryCategory = (typeof galleryCategories)[number];

export const galleryImages: GalleryImage[] = [
  {
    id: "g-1",
    src: "/images/wedding.jpg",
    title: "Regal Elegance in Crimson & Gold",
    category: "Wedding",
    aspect: "portrait",
    location: "Chandigarh",
  },
  {
    id: "g-2",
    src: "/images/bannerimg.jpeg",
    title: "Grand Evening Celebrations Under Fairylights",
    category: "Rituals & Candid",
    aspect: "landscape",
    location: "Jaipur",
  },
  {
    id: "g-3",
    src: "/images/pre_wed.jpg",
    title: "Whispered Promises at Dusk",
    category: "Pre-Wedding",
    aspect: "portrait",
    location: "Udaipur",
  },
  {
    id: "g-4",
    src: "/images/9E0A5571.jpg",
    title: "Golden Hour Couple Portrait",
    category: "Portraits",
    aspect: "landscape",
    location: "Neemrana",
  },
  {
    id: "g-5",
    src: "/images/DSC09536.jpg",
    title: "Royal Courtyard Procession",
    category: "Wedding",
    aspect: "landscape",
    location: "Jodhpur",
  },
  {
    id: "g-6",
    src: "/images/pre_wed2.jpg",
    title: "Embraced in Himalayan Pine",
    category: "Pre-Wedding",
    aspect: "portrait",
    location: "Shimla",
  },
  {
    id: "g-7",
    src: "/images/events.jpg",
    title: "Vibrant Haldi Moments & Joyful Splashes",
    category: "Rituals & Candid",
    aspect: "portrait",
    location: "Amritsar",
  },
  {
    id: "g-8",
    src: "/images/1J2A0521.jpg",
    title: "Lakeside Serenades",
    category: "Pre-Wedding",
    aspect: "landscape",
    location: "Udaipur",
  },
  {
    id: "g-9",
    src: "/images/9E0A8414.jpg",
    title: "The Sacred Vows Around Agni",
    category: "Wedding",
    aspect: "landscape",
    location: "Chandigarh",
  },
  {
    id: "g-10",
    src: "/images/DSC09765.jpg",
    title: "Bride's Solitary Anticipation",
    category: "Portraits",
    aspect: "portrait",
    location: "Ludhiana",
  },
  {
    id: "g-11",
    src: "/images/1J2A0505.jpg",
    title: "Sunlit Architectural Splendor",
    category: "Pre-Wedding",
    aspect: "landscape",
    location: "Jaipur",
  },
  {
    id: "g-12",
    src: "/images/DSC09951.jpg",
    title: "The Emotional Vidaai Farewell",
    category: "Rituals & Candid",
    aspect: "portrait",
    location: "Delhi NCR",
  },
  {
    id: "g-13",
    src: "/images/9E0A5389.jpg",
    title: "Celebratory Dhol & Dance Energy",
    category: "Rituals & Candid",
    aspect: "landscape",
    location: "Punjab",
  },
  {
    id: "g-14",
    src: "/images/DSC09974.jpg",
    title: "Regal Sherwani & Kundan Details",
    category: "Portraits",
    aspect: "portrait",
    location: "Chandigarh",
  },
  {
    id: "g-15",
    src: "/images/9E0A8410.jpg",
    title: "Gleeful Smiles During Pheras",
    category: "Wedding",
    aspect: "landscape",
    location: "Jaipur",
  },
  {
    id: "g-16",
    src: "/images/_ATP8950.jpg",
    title: "Intricate Mehendi & Bridal Jewelry",
    category: "Portraits",
    aspect: "portrait",
    location: "Chandigarh",
  },
  {
    id: "g-17",
    src: "/images/9E0A8428.jpg",
    title: "Sunset By the Lake",
    category: "Pre-Wedding",
    aspect: "landscape",
    location: "Udaipur",
  },
  {
    id: "g-18",
    src: "/images/contact_img.jpg",
    title: "Timeless Moments in Grandeur",
    category: "Wedding",
    aspect: "landscape",
    location: "Oberoi Rajvilas",
  },
];
