import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section id="overview" className="py-20 bg-luxury-dark">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <div className="mb-8">
            <div className="w-32 h-0.5 bg-luxury-gold mx-auto mb-8"></div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light text-luxury-gold mb-8 tracking-wide">
              Ushering in a New Era of Celebrations
            </h2>
          </div>
          
          <p className="text-luxury-text text-lg md:text-xl max-w-4xl mx-auto leading-relaxed font-light mb-12">
            Experience a setting crafted for timeless and luxurious celebrations. The Opera House is an icon of luxury,
            sophistication, elegance, and exclusivity. Spanning over 2 lakh sq.ft., The Opera House sets a new
            benchmark for bespoke events, intimate celebrations, and gatherings, offering an unparalleled fusion
            of grandeur, elegance, and opulence.
          </p>

          <Button 
            variant="outline" 
            size="lg"
            className="border-luxury-gold text-luxury-gold hover:bg-luxury-gold hover:text-luxury-dark font-medium px-8 py-4 text-lg tracking-wide transition-all duration-300 hover:scale-105"
          >
            Plan a Visit
          </Button>
        </motion.div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-serif font-light text-luxury-gold mb-4">2+</div>
            <p className="text-luxury-text-muted font-light tracking-wide">Lakh Sq.Ft.</p>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-serif font-light text-luxury-gold mb-4">3000+</div>
            <p className="text-luxury-text-muted font-light tracking-wide">Guest Capacity</p>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-serif font-light text-luxury-gold mb-4">100%</div>
            <p className="text-luxury-text-muted font-light tracking-wide">Luxury Experience</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;