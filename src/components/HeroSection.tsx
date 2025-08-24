import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* YouTube Background Video */}
      <div className="absolute inset-0" style={{ right: '1in' }}>
        <iframe
          src="https://www.youtube.com/embed/Jw2yJ_EaqPI?autoplay=1&loop=1&mute=1&controls=0&showinfo=0&rel=0&modestbranding=1&iv_load_policy=3&cc_load_policy=0&playsinline=1&disablekb=1&fs=0&playlist=Jw2yJ_EaqPI&vq=hd1080"
          title="Hero Video"
          className="absolute inset-0 w-full h-full"
          style={{
            minWidth: '100vw',
            minHeight: '100vh',
            objectFit: 'cover',
            pointerEvents: 'none'
          }}
          allow="autoplay; encrypted-media"
          allowFullScreen={false}
        />
      </div>

      {/* Content with fade-in animation */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-serif font-light text-luxury-gold mb-8 tracking-wide">
        An Exclusive Masterpiece for the Refined Few
          <br />
          <span className="block mt-4"></span>
        </h1>
        
        <p className="text-luxury-text text-sm md:text-base max-w-3xl mx-auto mb-12 leading-relaxed font-light">
          ,
          <br className="hidden md:block" />
          The Opera House blends nature-inspired artistry with modern elegance.
        </p>

        <a href="#contact">
          <Button 
            size="lg" 
            className="bg-luxury-gold hover:bg-luxury-gold-light text-luxury-dark font-medium px-8 py-4 text-lg tracking-wide shadow-luxury transition-all duration-300 hover:scale-105"
          >
            Enquire Now
          </Button>
        </a>
      </motion.div>

      {/* Removed scroll indicator with animate-pulse */}
    </section>
  );
};

export default HeroSection;