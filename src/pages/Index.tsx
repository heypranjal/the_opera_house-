import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SpacesSection from "@/components/SpacesSection";
import GallerySection from "@/components/GallerySection";
import FeaturesSection from "@/components/FeaturesSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-luxury-dark">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <SpacesSection />
      <GallerySection />
      <FeaturesSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
