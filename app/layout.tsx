import type { Metadata } from "next";
import { Jost } from "next/font/google";
import "./globals.css";

const jost = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-jost",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://veddiaries.com"),
  title: "Ved Diaries | Luxury Indian Wedding Photography & Films",
  description:
    "Ved Diaries preserves the soul, emotions, and regal grandeur of Indian weddings through timeless, cinematic photography and visual storytelling.",
  keywords: [
    "Ved Diaries",
    "Indian Wedding Photography",
    "Cinematic Wedding Films",
    "Luxury Destination Weddings",
    "Pre-Wedding Shoots",
    "Wedding Cinematographer Chandigarh India",
  ],
  authors: [{ name: "Ved Diaries" }],
  openGraph: {
    title: "Ved Diaries | Luxury Indian Wedding Photography & Cinematography",
    description: "Stories that deserve to be remembered. Cinematic wedding photography & films.",
    url: "https://veddiaries.com",
    siteName: "Ved Diaries",
    images: [
      {
        url: "/images/bannerimg.jpeg",
        width: 1600,
        height: 1066,
        alt: "Ved Diaries Wedding Photography",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/images/logo.png",
    apple: "/images/logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${jost.variable} scroll-smooth antialiased`}>
      <body className="min-h-screen flex flex-col font-sans bg-[#FAF8F5] text-[#171717] selection:bg-[#102B24] selection:text-[#FAF8F5] overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
