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
    "id": "g-4",
    "src": "/images/bannerimg.jpeg",
    "title": "Grand Evening Celebrations Under Fairylights",
    "category": "Rituals & Candid",
    "aspect": "landscape",
    "location": "Kasauli Hills"
  },
  {
    "id": "g-5",
    "src": "/images/contact_img.jpg",
    "title": "Timeless Moments in Grandeur",
    "category": "Wedding",
    "aspect": "landscape",
    "location": "Kasauli Hills"
  },
  {
    "id": "g-6",
    "src": "/images/DSC09536.jpg",
    "title": "Royal Courtyard Procession",
    "category": "Wedding",
    "aspect": "landscape",
    "location": "Kasauli Hills"
  },
  {
    "id": "g-7",
    "src": "/images/DSC09571.jpg",
    "title": "Golden Hour Silhouette & Palace Architecture",
    "category": "Pre-Wedding",
    "aspect": "portrait",
    "location": "Kasauli Hills"
  },
  {
    "id": "g-8",
    "src": "/images/DSC09613.jpg",
    "title": "Royal Baraat & Festive Procession",
    "category": "Wedding",
    "aspect": "portrait",
    "location": "Kasauli Hills"
  },
  {
    "id": "g-9",
    "src": "/images/DSC09765.jpg",
    "title": "Bride's Solitary Anticipation",
    "category": "Portraits",
    "aspect": "portrait",
    "location": "Kasauli Hills"
  },
  {
    "id": "g-10",
    "src": "/images/DSC09795.jpg",
    "title": "Bridal Gaze & Heritage Jharokha",
    "category": "Portraits",
    "aspect": "portrait",
    "location": "Kasauli Hills"
  },
  {
    "id": "g-11",
    "src": "/images/DSC09927.jpg",
    "title": "Sacred Pheras & Golden Agni Vows",
    "category": "Rituals & Candid",
    "aspect": "portrait",
    "location": "Kasauli Hills"
  },
  {
    "id": "g-12",
    "src": "/images/DSC09948.jpg",
    "title": "The Unveiling of the Bride",
    "category": "Wedding",
    "aspect": "portrait",
    "location": "Kasauli Hills"
  },
  {
    "id": "g-13",
    "src": "/images/DSC09951.jpg",
    "title": "The Emotional Vidaai Farewell",
    "category": "Rituals & Candid",
    "aspect": "portrait",
    "location": "Kasauli Hills"
  },
  {
    "id": "g-14",
    "src": "/images/DSC09974.jpg",
    "title": "Regal Sherwani & Kundan Details",
    "category": "Portraits",
    "aspect": "portrait",
    "location": "Kasauli Hills"
  },

  {
    "id": "g-16",
    "src": "/images/IMG_4592.JPG.jpeg",
    "title": "The Royal Bridal Radiance",
    "category": "Portraits",
    "aspect": "portrait",
    "location": "Mohali"
  },
  {
    "id": "g-17",
    "src": "/images/IMG_4593.JPG.jpeg",
    "title": "Crimson Silk & Polki Elegance",
    "category": "Portraits",
    "aspect": "portrait",
    "location": "Chandigarh"
  },
  {
    "id": "g-19",
    "src": "/images/IMG_4595.JPG.jpeg",
    "title": "Palace Courtyard Serenade",
    "category": "Pre-Wedding",
    "aspect": "landscape",
    "location": "Chandigarh"
  },
  {
    "id": "g-20",
    "src": "/images/IMG_4596.JPG.jpeg",
    "title": "Graceful Steps of the Maharani",
    "category": "Wedding",
    "aspect": "portrait",
    "location": "Chandigarh"
  },
  {
    "id": "g-21",
    "src": "/images/IMG_4597.JPG.jpeg",
    "title": "Joyful Haldi Blooms & Golden Laughter",
    "category": "Rituals & Candid",
    "aspect": "portrait",
    "location": "Shimla"
  },
  {
    "id": "g-22",
    "src": "/images/IMG_4598.JPG.jpeg",
    "title": "The Sacred Sindoor Moment",
    "category": "Rituals & Candid",
    "aspect": "portrait",
    "location": "Oberoi Sukhvilas"
  },
  {
    "id": "g-23",
    "src": "/images/IMG_4599.JPG.jpeg",
    "title": "Gilded Mehendi Tales",
    "category": "Portraits",
    "aspect": "portrait",
    "location": "Chandigarh"
  },
  {
    "id": "g-24",
    "src": "/images/IMG_4600.JPG.jpeg",
    "title": "Regal Couple in Velvet & Ivory",
    "category": "Wedding",
    "aspect": "portrait",
    "location": "Chandigarh"
  },
  {
    "id": "g-25",
    "src": "/images/IMG_4601.JPG.jpeg",
    "title": "Grand Entry Under the Chhatri",
    "category": "Wedding",
    "aspect": "portrait",
    "location": "Mohali"
  },
  {
    "id": "g-26",
    "src": "/images/IMG_4604.JPG.jpeg",
    "title": "Quiet Reflection in the Heritage Suite",
    "category": "Portraits",
    "aspect": "portrait",
    "location": "Chandigarh"
  },
  {
    "id": "g-27",
    "src": "/images/IMG_4605.JPG.jpeg",
    "title": "Euphoric Dhol Beats & Baraat Energy",
    "category": "Rituals & Candid",
    "aspect": "portrait",
    "location": "Chandigarh"
  },
  {
    "id": "g-28",
    "src": "/images/IMG_4609.JPG.jpeg",
    "title": "Tender Embrace Beneath Palace Arches",
    "category": "Pre-Wedding",
    "aspect": "portrait",
    "location": "Chandigarh"
  },
  {
    "id": "g-29",
    "src": "/images/IMG_4619.JPG.jpeg",
    "title": "Pine Forest Whispers at Dawn",
    "category": "Pre-Wedding",
    "aspect": "portrait",
    "location": "Shimla"
  },
  {
    "id": "g-30",
    "src": "/images/IMG_4620.JPG.jpeg",
    "title": "Stolen Sunset Glance in the Hills",
    "category": "Pre-Wedding",
    "aspect": "portrait",
    "location": "Shimla"
  },
  {
    "id": "g-31",
    "src": "/images/IMG_4621.JPG.jpeg",
    "title": "Misty Woodland Walk",
    "category": "Pre-Wedding",
    "aspect": "portrait",
    "location": "Shimla"
  },
  {
    "id": "g-32",
    "src": "/images/IMG_4622.JPG.jpeg",
    "title": "Intimate Vows in Nature's Cathedral",
    "category": "Pre-Wedding",
    "aspect": "portrait",
    "location": "Kasauli"
  },
  {
    "id": "g-33",
    "src": "/images/IMG_4623.JPG.jpeg",
    "title": "Hands Intertwined Along Mountain Trails",
    "category": "Pre-Wedding",
    "aspect": "portrait",
    "location": "Shimla"
  },
  {
    "id": "g-34",
    "src": "/images/IMG_4624.JPG.jpeg",
    "title": "Himalayan Breeze & Timeless Romance",
    "category": "Pre-Wedding",
    "aspect": "portrait",
    "location": "Shimla"
  },
  {
    "id": "g-35",
    "src": "/images/IMG_4625.JPG.jpeg",
    "title": "Sunbeams Through Emerald Canopy",
    "category": "Pre-Wedding",
    "aspect": "portrait",
    "location": "Shimla Hills"
  },
  {
    "id": "g-36",
    "src": "/images/IMG_4626.JPG.jpeg",
    "title": "Rustic Meadow Stroll",
    "category": "Pre-Wedding",
    "aspect": "portrait",
    "location": "Kasauli"
  },
  {
    "id": "g-37",
    "src": "/images/IMG_4627.JPG.jpeg",
    "title": "Celestial Anand Karaj Morning",
    "category": "Wedding",
    "aspect": "portrait",
    "location": "Chandigarh"
  },
  {
    "id": "g-38",
    "src": "/images/IMG_4628.JPG.jpeg",
    "title": "Ivory Sherwani & Royal Heritage Turban",
    "category": "Portraits",
    "aspect": "portrait",
    "location": "Shimla"
  },
  {
    "id": "g-39",
    "src": "/images/IMG_4629.JPG.jpeg",
    "title": "The Pheras Around Holy Agni",
    "category": "Wedding",
    "aspect": "portrait",
    "location": "Oberoi Sukhvilas"
  },
  {
    "id": "g-40",
    "src": "/images/IMG_4630.JPG.jpeg",
    "title": "Petals of Blessing Showering the Couple",
    "category": "Rituals & Candid",
    "aspect": "portrait",
    "location": "Chandigarh"
  },
  {
    "id": "g-41",
    "src": "/images/IMG_4631.JPG.jpeg",
    "title": "Tearful Vidaai Hug of Gratitude",
    "category": "Rituals & Candid",
    "aspect": "portrait",
    "location": "Chandigarh"
  },
  {
    "id": "g-42",
    "src": "/images/IMG_4632.JPG.jpeg",
    "title": "Solemn Prayers & Sacred Mantras",
    "category": "Rituals & Candid",
    "aspect": "portrait",
    "location": "Chandigarh"
  },
  {
    "id": "g-43",
    "src": "/images/IMG_4633.JPG.jpeg",
    "title": "Regal Varmala Exchange",
    "category": "Wedding",
    "aspect": "portrait",
    "location": "Chandigarh"
  },
  {
    "id": "g-44",
    "src": "/images/IMG_4634.JPG.jpeg",
    "title": "Sisterly Love & Unscripted Smiles",
    "category": "Rituals & Candid",
    "aspect": "portrait",
    "location": "Chandigarh"
  },
  {
    "id": "g-45",
    "src": "/images/IMG_4635.JPG.jpeg",
    "title": "Splashing Vibrant Turmeric Hues",
    "category": "Rituals & Candid",
    "aspect": "portrait",
    "location": "Shimla"
  },
  {
    "id": "g-46",
    "src": "/images/IMG_4636.JPG.jpeg",
    "title": "Grand Sangeet Stage Glamour",
    "category": "Wedding",
    "aspect": "portrait",
    "location": "Oberoi Rajvilas"
  },
  {
    "id": "g-47",
    "src": "/images/IMG_4637.JPG.jpeg",
    "title": "Champagne Cheers & Golden Sparklers",
    "category": "Rituals & Candid",
    "aspect": "portrait",
    "location": "Chandigarh"
  },
  {
    "id": "g-48",
    "src": "/images/IMG_4638.JPG.jpeg",
    "title": "The Regal Groom's Monologue",
    "category": "Portraits",
    "aspect": "portrait",
    "location": "Chandigarh"
  },
  {
    "id": "g-49",
    "src": "/images/IMG_4639.JPG.jpeg",
    "title": "Bridal Dupatta Draped in Royalty",
    "category": "Portraits",
    "aspect": "portrait",
    "location": "Chandigarh"
  },
  {
    "id": "g-50",
    "src": "/images/IMG_4640.JPG.jpeg",
    "title": "Kundan Choker & Intricate Nath Details",
    "category": "Portraits",
    "aspect": "portrait",
    "location": "Mohali"
  },
  {
    "id": "g-51",
    "src": "/images/IMG_4641.JPG.jpeg",
    "title": "Eyes Speaking Ancient Vows",
    "category": "Portraits",
    "aspect": "portrait",
    "location": "Chandigarh"
  },
  {
    "id": "g-52",
    "src": "/images/IMG_4642.JPG.jpeg",
    "title": "Bespoke Velvet Mojari & Zari Border",
    "category": "Portraits",
    "aspect": "portrait",
    "location": "Chandigarh"
  },
  {
    "id": "g-53",
    "src": "/images/IMG_4643.JPG.jpeg",
    "title": "A Moment of Quiet Wonder",
    "category": "Portraits",
    "aspect": "portrait",
    "location": "Chandigarh"
  },
  {
    "id": "g-54",
    "src": "/images/IMG_4644.JPG.jpeg",
    "title": "The Gilded Heritage Corridor Walk",
    "category": "Wedding",
    "aspect": "portrait",
    "location": "Chandigarh"
  },
  {
    "id": "g-55",
    "src": "/images/IMG_4645.JPG.jpeg",
    "title": "Bride's Graceful Silhouette",
    "category": "Portraits",
    "aspect": "portrait",
    "location": "Chandigarh"
  },
  {
    "id": "g-56",
    "src": "/images/IMG_4646.JPG.jpeg",
    "title": "Elegance Etched in Amber Light",
    "category": "Portraits",
    "aspect": "portrait",
    "location": "Chandigarh"
  },
  {
    "id": "g-57",
    "src": "/images/IMG_4647.JPG.jpeg",
    "title": "Golden Hour Bridal Solitude",
    "category": "Portraits",
    "aspect": "portrait",
    "location": "Oberoi Sukhvilas"
  },
  {
    "id": "g-58",
    "src": "/images/IMG_4648.JPG.jpeg",
    "title": "Forever Entwined in Devotion",
    "category": "Wedding",
    "aspect": "portrait",
    "location": "Mohali"
  },
  {
    "id": "g-59",
    "src": "/images/pre_wed.jpg",
    "title": "Whispered Promises at Dusk",
    "category": "Pre-Wedding",
    "aspect": "portrait",
    "location": "Mohali"
  },
  {
    "id": "g-60",
    "src": "/images/pre_wed2.jpg",
    "title": "Embraced in Himalayan Pine",
    "category": "Pre-Wedding",
    "aspect": "portrait",
    "location": "Shimla"
  },
  {
    "id": "g-61",
    "src": "/images/wedding.jpg",
    "title": "Regal Elegance in Crimson & Gold",
    "category": "Wedding",
    "aspect": "portrait",
    "location": "Chandigarh"
  },
  {
    "id": "g-62",
    "src": "/images/_ATP8950.jpg",
    "title": "Intricate Mehendi & Bridal Jewelry",
    "category": "Portraits",
    "aspect": "portrait",
    "location": "Chandigarh"
  }
];
