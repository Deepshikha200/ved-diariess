import Header from "@/components/Header";
import Hero from "@/components/Hero";
import BrandIntro from "@/components/BrandIntro";
import Services from "@/components/Services";
import FeaturedStories from "@/components/FeaturedStories";
import Films from "@/components/Films";
import Gallery from "@/components/Gallery";
import About from "@/components/About";
import WhyVedDiaries from "@/components/WhyVedDiaries";
import Testimonials from "@/components/Testimonials";
import CtaBanner from "@/components/CtaBanner";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#171717] selection:bg-[#102B24] selection:text-[#FAF8F5] overflow-x-hidden">
      {/* Premium Minimal Header */}
      <Header />

      <main className="flex-1">
        {/* 1. Cinematic Hero Section */}
        <Hero />

        {/* 2. Introduction & Brand Statement */}
        <BrandIntro />

        {/* 3. Bespoke Offerings & Services */}
        <Services />

        {/* 4. Editorial Featured Stories */}
        <FeaturedStories />

        {/* 5. Stories in Motion - YouTube Films */}
        <Films />

        {/* 6. Curated Photography Gallery & Lightbox */}
        <Gallery />

        {/* 7. The People Behind Ved Diaries */}
        <About />

        {/* 8. Why Discerning Couples Choose Ved Diaries */}
        <WhyVedDiaries />

        {/* 9. Editorial Testimonials & Reviews */}
        <Testimonials />

        {/* 10. Powerful Full-Width Cinematic CTA */}
        <CtaBanner />

        {/* 11. Contact & Date Reservation */}
        <Contact />
      </main>

      {/* Luxury Footer */}
      <Footer />
    </div>
  );
}
