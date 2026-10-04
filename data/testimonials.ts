export interface Testimonial {
  id: string;
  quote: string;
  clientName: string;
  weddingDetails: string;
  location: string;
  rating: number;
  featuredStoryId?: string;
  image?: string;
}

export const testimonialsData: Testimonial[] = [
    {
    id: "t-1",
    quote:
      "From our pre-wedding in the hills to our Anand Karaj in Chandigarh, the entire Ved Diaries team made us feel so effortless and comfortable in front of the lens. No artificial poses, no awkward directing — just pure emotional storytelling. The heirloom albums are treasured pieces in our home.",
    clientName: "Rupy & Happy",
    weddingDetails: "Heritage Wedding",
    location: "Mohali, Punjab",
    rating: 5,
    image: "/images/IMG_4601.JPG.jpeg",
  },
  {
    id: "t-2",
    quote:
      "Choosing Ved Diaries was hands down the best decision we made for our wedding. They have this extraordinary ability to be completely invisible while capturing the most poignant, heartfelt moments. When we received our wedding film, both our families were in tears. It felt like watching a luxury feature film about our love.",
    clientName: "Shikha & Bhavish",
    weddingDetails: "Pre Wedding",
    location: "Himachal Pradesh",
    rating: 5,
    image: "/images/pre_wed.jpg",
  },

  {
    id: "t-3",
    quote:
      "The energy, patience, and artistic vision of Ved Diaries is unmatched. Our three-day palace wedding had over 600 guests, yet somehow every significant smile, ritual detail, and wild dance floor moment was documented with such poise and editorial elegance.",
    clientName: "Manik & Neha",
    weddingDetails: "Pre Wedding",
    location: "Shimla",
    rating: 5,
    image: "/images/IMG_4630.JPG.jpeg",
  },
  {
    id: "t-4",
    quote:
      "The cinematic color grading and sound design of our wedding teaser blew our minds! Our friends still talk about how breathtaking the visuals looked on YouTube. Ved Diaries truly preserves the feelings, not just the pictures.",
    clientName: "",
    weddingDetails: "Intimate Wedding",
    location: "Chandigarh",
    rating: 5,
    image: "/images/IMG_4648.JPG.jpeg",
  },
];
