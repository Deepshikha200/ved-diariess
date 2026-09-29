export interface WeddingFilm {
  id: string;
  title: string;
  couple: string;
  youtubeId: string;
  category: "Wedding Film" | "Cinematic Teaser" | "Pre-Wedding Film" | "Documentary";
  duration: string;
  location: string;
  year: string;
  description: string;
  isFeatured?: boolean;
}

export const weddingFilms: WeddingFilm[] = [
  {
    id: "film-1",
    title: "An Eternal Vow in the City of Lakes",
    couple: "Aman & Simran",
    youtubeId: "LXb3EKWsInQ", // Replaceable with client's YouTube video ID
    category: "Wedding Film",
    duration: "4:18",
    location: "Udaipur, Rajasthan",
    year: "2025",
    description:
      "A cinematic masterpiece capturing regal rituals, heartfelt vows, and tearful farewells by the royal shores of Pichola.",
    isFeatured: true,
  },
  {
    id: "film-2",
    title: "Sufi Nights & Royal Heritage",
    couple: "Kabir & Meera",
    youtubeId: "9bZkp7q19f0", // Replaceable with client's YouTube video ID
    category: "Cinematic Teaser",
    duration: "2:45",
    location: "Oberoi Sukhvilas, Chandigarh",
    year: "2025",
    description:
      "High tempo dhol rhythms, Sufi poetry, and emotional Anand Karaj captured in true cinematic 4K glory.",
    isFeatured: false,
  },
  {
    id: "film-3",
    title: "Colors of Love & Golden Hour Memories",
    couple: "Rohan & Ananya",
    youtubeId: "kJQP7kiw5Fk", // Replaceable with client's YouTube video ID
    category: "Wedding Film",
    duration: "3:52",
    location: "Jaipur, Rajasthan",
    year: "2026",
    description:
      "A vibrant celebration of Rajasthani royalty, joyful dance sequences, and unscripted laughter with loved ones.",
    isFeatured: false,
  },
  {
    id: "film-4",
    title: "Mountain Mist & Autumn Vows",
    couple: "Arjun & Tara",
    youtubeId: "dQw4w9WgXcQ", // Replaceable with client's YouTube video ID
    category: "Pre-Wedding Film",
    duration: "3:10",
    location: "Mashobra, Himachal Pradesh",
    year: "2026",
    description:
      "An intimate narrative film set amidst serene pine woods and morning mountain mist before their big day.",
    isFeatured: false,
  },
];

export const YOUTUBE_CHANNEL_URL = "https://www.youtube.com/@veddiaries9";
export const INSTAGRAM_URL = "https://www.instagram.com/ved.diaries/";
export const FACEBOOK_URL = "#"; // Replace with client's Facebook URL
