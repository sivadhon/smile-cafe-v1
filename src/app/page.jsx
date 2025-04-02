"use client";

import AboutUs from "@/components/about-us/page";
import PopularDishes from "@/components/popular-dishes/page";
import HomeGallery from "@/components/home-gallery/page";
import LandingPage from "@/components/landing-page/page";
import BottomContent from "@/components/bottom-content/page";
import NavigationBar from "@/components/common/navbar/page";
import Footer from "@/components/common/footer/page";

export default function HomePage() {
  return (
    <>
      <NavigationBar />
      {/* landing-page */}
      <LandingPage />

      {/* About Us */}
      <AboutUs />

      {/* Popular Dishes */}
      <PopularDishes />

      {/* Gallery Preview */}
      <HomeGallery />

      {/* Location & Hours */}
      {/* Contact Section */}
      <BottomContent />

      <Footer />
    </>
  );
}
