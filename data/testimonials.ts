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
      "Choosing Ved Diaries was hands down the best decision we made for our wedding. They have this extraordinary ability to be completely invisible while capturing the most poignant, heartfelt moments. When we received our wedding film, both our families were in tears. It felt like watching a luxury feature film about our love.",
    clientName: "Simran & Amanveer",
    weddingDetails: "Destination Wedding",
    location: "Udaipur, Rajasthan",
    rating: 5,
    image: "/images/pre_wed.jpg",
  },
  {
    id: "t-2",
    quote:
      "From our pre-wedding in the hills to our Anand Karaj in Chandigarh, the entire Ved Diaries team made us feel so effortless and comfortable in front of the lens. No artificial poses, no awkward directing — just pure emotional storytelling. The heirloom albums are treasured pieces in our home.",
    clientName: "Meera & Kabir",
    weddingDetails: "Heritage Wedding",
    location: "Oberoi Sukhvilas, Chandigarh",
    rating: 5,
    image: "/images/wedding.jpg",
  },
  {
    id: "t-3",
    quote:
      "The energy, patience, and artistic vision of Ved Diaries is unmatched. Our three-day palace wedding had over 600 guests, yet somehow every significant smile, ritual detail, and wild dance floor moment was documented with such poise and editorial elegance.",
    clientName: "Ananya & Rohan",
    weddingDetails: "Palace Wedding",
    location: "Jaipur, Rajasthan",
    rating: 5,
    image: "/images/bannerimg.jpeg",
  },
  {
    id: "t-4",
    quote:
      "The cinematic color grading and sound design of our wedding teaser blew our minds! Our friends still talk about how breathtaking the visuals looked on YouTube. Ved Diaries truly preserves the feelings, not just the pictures.",
    clientName: "Tara & Arjun",
    weddingDetails: "Intimate Wedding & Pre-Wed",
    location: "Mashobra, Shimla",
    rating: 5,
    image: "/images/pre_wed2.jpg",
  },
];
