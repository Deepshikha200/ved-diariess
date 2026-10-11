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
    id: "g-37",
    src: "/images/IMG_4627.JPG.jpeg",
    title: "Celestial Anand Karaj Morning",
    category: "Wedding",
    aspect: "portrait",
    location: "Chandigarh",
  },
  {
    id: "g-16",
    src: "/images/IMG_4592.JPG.jpeg",
    title: "The Royal Bridal Radiance",
    category: "Portraits",
    aspect: "portrait",
    location: "Mohali",
  },
  {
    id: "g-30",
    src: "/images/IMG_4620.JPG.jpeg",
    title: "Stolen Sunset Glance in the Hills",
    category: "Pre-Wedding",
    aspect: "portrait",
    location: "Shimla",
  },
  {
    id: "g-53",
    src: "/images/IMG_4643.JPG.jpeg",
    title: "A Moment of Quiet Wonder",
    category: "Portraits",
    aspect: "portrait",
    location: "Chandigarh",
  },
  
  
  {
    id: "g-42",
    src: "/images/IMG_4632.JPG.jpeg",
    title: "Solemn Prayers & Sacred Mantras",
    category: "Rituals & Candid",
    aspect: "portrait",
    location: "Chandigarh",
  },
  {
    id: "g-28",
    src: "/images/IMG_4609.JPG.jpeg",
    title: "Tender Embrace Beneath Palace Arches",
    category: "Pre-Wedding",
    aspect: "portrait",
    location: "Chandigarh",
  },
  {
    id: "g-21",
    src: "/images/IMG_4597.JPG.jpeg",
    title: "Joyful Haldi Blooms & Golden Laughter",
    category: "Rituals & Candid",
    aspect: "portrait",
    location: "Shimla",
  },
  {
    id: "g-58",
    src: "/images/IMG_4648.JPG.jpeg",
    title: "Forever Entwined in Devotion",
    category: "Wedding",
    aspect: "portrait",
    location: "Mohali",
  },
  {
    id: "g-26",
    src: "/images/IMG_4604.JPG.jpeg",
    title: "Quiet Reflection in the Heritage Suite",
    category: "Portraits",
    aspect: "portrait",
    location: "Chandigarh",
  },
  {
    id: "g-43",
    src: "/images/IMG_4633.JPG.jpeg",
    title: "Regal Varmala Exchange",
    category: "Wedding",
    aspect: "portrait",
    location: "Chandigarh",
  },
  {
    id: "g-19",
    src: "/images/IMG_4595.JPG.jpeg",
    title: "Palace Courtyard Serenade",
    category: "Wedding",
    aspect: "landscape",
    location: "Chandigarh",
  },
  {
    id: "g-38",
    src: "/images/IMG_4628.JPG.jpeg",
    title: "Ivory Sherwani & Royal Heritage Turban",
    category: "Portraits",
    aspect: "portrait",
    location: "Shimla",
  },
  {
    id: "g-31",
    src: "/images/IMG_4621.JPG.jpeg",
    title: "Misty Woodland Walk",
    category: "Pre-Wedding",
    aspect: "portrait",
    location: "Shimla",
  },

  {
    id: "g-6",
    src: "/images/DSC09536.jpg",
    title: "Royal Courtyard Procession",
    category: "Wedding",
    aspect: "landscape",
    location: "Kasauli Hills",
  },
  {
    id: "g-22",
    src: "/images/IMG_4598.JPG.jpeg",
    title: "The Sacred Sindoor Moment",
    category: "Rituals & Candid",
    aspect: "portrait",
    location: "Oberoi Sukhvilas",
  },
  {
    id: "g-36",
    src: "/images/IMG_4626.JPG.jpeg",
    title: "Rustic Meadow Stroll",
    category: "Pre-Wedding",
    aspect: "portrait",
    location: "Kasauli",
  },
  {
    id: "g-17",
    src: "/images/IMG_4593.JPG.jpeg",
    title: "Crimson Silk & Polki Elegance",
    category: "Portraits",
    aspect: "portrait",
    location: "Chandigarh",
  },
  {
    id: "g-61",
    src: "/images/wedding.jpg",
    title: "Regal Elegance in Crimson & Gold",
    category: "Wedding",
    aspect: "portrait",
    location: "Chandigarh",
  },
  {
    id: "g-27",
    src: "/images/IMG_4605.JPG.jpeg",
    title: "Euphoric Dhol Beats & Baraat Energy",
    category: "Rituals & Candid",
    aspect: "portrait",
    location: "Chandigarh",
  },

  {
    id: "g-24",
    src: "/images/IMG_4600.JPG.jpeg",
    title: "Regal Couple in Velvet & Ivory",
    category: "Wedding",
    aspect: "portrait",
    location: "Chandigarh",
  },
  {
    id: "g-4",
    src: "/images/bannerimg.jpeg",
    title: "Grand Evening Celebrations Under Fairylights",
    category: "Rituals & Candid",
    aspect: "landscape",
    location: "Kasauli Hills",
  },
  {
    id: "g-54",
    src: "/images/IMG_4644.JPG.jpeg",
    title: "The Gilded Heritage Corridor Walk",
    category: "Wedding",
    aspect: "portrait",
    location: "Chandigarh",
  },
 
  {
    id: "g-20",
    src: "/images/IMG_4596.JPG.jpeg",
    title: "Graceful Steps of the Maharani",
    category: "Wedding",
    aspect: "portrait",
    location: "Chandigarh",
  },
   {
    id: "g-40",
    src: "/images/IMG_4630.JPG.jpeg",
    title: "Petals of Blessing Showering the Couple",
    category: "Rituals & Candid",
    aspect: "portrait",
    location: "Chandigarh",
  },
];
