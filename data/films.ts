export interface YouTubeVideo {
  id: string; // YouTube Video ID (e.g. "TBigCgH1GNI")
  title: string;
  category?: string;
  duration?: string;
  location?: string;
}

// Simple array of YouTube videos as requested - easily add or remove videos here
export const videos: YouTubeVideo[] = [
  {
    id: "TBigCgH1GNI",
    title: "An Eternal Vow in the City of Lakes",
    category: "Wedding Film",
    duration: "4:18",
    location: "Udaipur, Rajasthan",
  },
  {
    id: "9Aqx9NHQVmQ",
    title: "Sufi Nights & Royal Heritage",
    category: "Cinematic Teaser",
    duration: "2:45",
    location: "Oberoi Sukhvilas, Chandigarh",
  },
  {
    id: "12AtxoeeXxg",
    title: "Colors of Love & Golden Hour Memories",
    category: "Wedding Film",
    duration: "3:52",
    location: "Jaipur, Rajasthan",
  },
];

// For backward compatibility if needed
export type WeddingFilm = YouTubeVideo;
export const weddingFilms = videos;

export const YOUTUBE_CHANNEL_URL = "https://www.youtube.com/@veddiaries9";
export const INSTAGRAM_URL = "https://www.instagram.com/ved.diaries/";
export const FACEBOOK_URL = "https://www.facebook.com/profile.php?id=61592421539214";
