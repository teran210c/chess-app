import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CarouselSection from "@/components/CarouselSection";
import Footer from "@/components/Footer";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import LoginBtn from "@/components/Login-Btn";
import FeatureSection from "@/components/FeatureSection"

export default function Home() {
  return (
    <>
      <Navbar/>
      <LoginBtn />
      <HeroSection />
      <FeatureSection/>
      <CarouselSection />
      <Footer />


    </>
  );
}
