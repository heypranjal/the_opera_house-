import grandBallroom from "@/assets/grand-ballroom.jpg";
import mystHall from "@/assets/myst-hall.jpg";
import openCanvas from "@/assets/open-canvas.jpg";
import { motion } from "framer-motion";

const GallerySection = () => {
  const galleryImages = [
    { src: "https://xyxkyeoohmpdcuepicnf.supabase.co/storage/v1/object/public/hero//theopera3.JPG", alt: "Luxury Interior Architecture", span: "col-span-2 row-span-2" },
    { src: "https://xyxkyeoohmpdcuepicnf.supabase.co/storage/v1/object/public/hero//theopera1.JPG", alt: "The Opera House Event 1", span: "col-span-1 row-span-1" },
    { src: "https://xyxkyeoohmpdcuepicnf.supabase.co/storage/v1/object/public/hero//theopera2.JPG", alt: "The Opera House Event 2", span: "col-span-1 row-span-1" },
    { src: "https://i.ibb.co/8g1Qnbtt/theopera4.jpg", alt: "The Opera House Event 3", span: "col-span-1 row-span-1" },
    { src: "https://i.ibb.co/mCkbdVRn/theopera5.jpg", alt: "The Opera House Event 3", span: "col-span-1 row-span-1" },
    { src: "https://i.ibb.co/tpwRD28p/theopera6.jpg", alt: "The Opera House Event 3", span: "col-span-1 row-span-1" },
  ];

  return (
    <section id="gallery" className="py-20 bg-luxury-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="w-32 h-0.5 bg-luxury-gold mx-auto mb-8"></div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light text-luxury-gold mb-8 tracking-wide">
              Stupendous Nature-Inspired
              <br />
              <span className="block mt-4">Interiors</span>
            </h2>
            <p className="text-luxury-text-muted text-xl font-light tracking-wide">
              Awe-inspiring images of the luxury The Opera House exudes
            </p>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-3 grid-rows-3 gap-4 h-[600px] md:h-[800px]">
            {galleryImages.map((image, index) => (
              <div 
                key={index} 
                className={`${image.span} group cursor-pointer overflow-hidden rounded-lg bg-luxury-dark-lighter border border-luxury-gold/20 hover:border-luxury-gold/60 transition-all duration-500`}
              >
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
            ))}
          </div>

          {/* Additional Features */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div className="group">
              <div className="w-16 h-16 border-2 border-luxury-gold rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-luxury-gold group-hover:scale-110 transition-all duration-300">
                <span className="text-luxury-gold group-hover:text-luxury-dark font-serif text-xl">🎭</span>
              </div>
              <h3 className="text-luxury-gold font-serif text-lg mb-2">Premium Events</h3>
              <p className="text-luxury-text-muted font-light text-sm">Curated experiences for discerning guests</p>
            </div>
            
            <div className="group">
              <div className="w-16 h-16 border-2 border-luxury-gold rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-luxury-gold group-hover:scale-110 transition-all duration-300">
                <span className="text-luxury-gold group-hover:text-luxury-dark font-serif text-xl">✨</span>
              </div>
              <h3 className="text-luxury-gold font-serif text-lg mb-2">Luxury Amenities</h3>
              <p className="text-luxury-text-muted font-light text-sm">World-class facilities and services</p>
            </div>
            
            <div className="group">
              <div className="w-16 h-16 border-2 border-luxury-gold rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-luxury-gold group-hover:scale-110 transition-all duration-300">
                <span className="text-luxury-gold group-hover:text-luxury-dark font-serif text-xl">🏛️</span>
              </div>
              <h3 className="text-luxury-gold font-serif text-lg mb-2">Architectural Marvel</h3>
              <p className="text-luxury-text-muted font-light text-sm">Nature-inspired design excellence</p>
            </div>
            
            <div className="group">
              <div className="w-16 h-16 border-2 border-luxury-gold rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-luxury-gold group-hover:scale-110 transition-all duration-300">
                <span className="text-luxury-gold group-hover:text-luxury-dark font-serif text-xl">🌟</span>
              </div>
              <h3 className="text-luxury-gold font-serif text-lg mb-2">Bespoke Service</h3>
              <p className="text-luxury-text-muted font-light text-sm">Personalized attention to every detail</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GallerySection;