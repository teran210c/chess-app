import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CarouselSection from "@/components/CarouselSection";
import Footer from "@/components/Footer";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import LoginBtn from "@/components/LoginBtn";
import FeatureSection from "@/components/FeatureSection";
import ChessGame from "@/components/ChessGame";
import LevelSelector from "@/components/LevelSelector";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeatureSection/>
      <CarouselSection />
      <ChessGame />


    </>
  );
}
