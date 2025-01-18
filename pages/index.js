import Image from "next/image";
import localFont from "next/font/local";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CarouselSection from "@/components/CarouselSection";
import Footer from "@/components/Footer";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default function Home() {
  return (
    <>
      <Navbar></Navbar>
      <HeroSection></HeroSection>
      <CarouselSection></CarouselSection>
      <Footer></Footer>


    </>
  );
}
