import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import mystHall from "@/assets/myst-hall.jpg";
import openCanvas from "@/assets/open-canvas.jpg";
import { motion } from "framer-motion";

const SpacesSection = () => {
  const spaces = [
    {
      title: "The Ballroom",
      description: "A magnificent predesigned space spanning 45,000 sq.ft. with a capacity of 1,000-1,500 guests.",
      image: "https://i.ibb.co/60ZbpKgD/SP-0388.jpg",
      capacity: "1,000-1,500",
      area: "45,000 sq.ft."
    },
    {
      title: "Open Hall",
      description: "A predesigned hall spanning across 14,000 sq.ft. is perfect for intimate gatherings, with 350-500 guests.",
      image: "https://i.ibb.co/1YvPzBbW/SP-2684.jpg",
      capacity: "350-500",
      area: "14,000 sq.ft."
    },
    // {
    //   title: "Open Canvas",
    //   description: "A sprawling fully customizable outdoor area for up to 3,000 guests.",
    //   image: openCanvas,
    //   capacity: "Up to 3,000",
    //   area: "Outdoor"
    // }
  ];

  return (
    <section id="features" className="py-20 bg-luxury-dark">
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
              Majestic Spaces to Reflect your
              <br />
              <span className="block mt-4">Distinctive Taste</span>
            </h2>
            <p className="text-luxury-text-muted text-xl font-light tracking-wide">
              Symphony of spaces tailored to perfection
            </p>
          </div>

          {/* Spaces Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {spaces.map((space, index) => (
              <Card key={index} className="bg-luxury-dark border-luxury-gold/20 overflow-hidden hover:shadow-luxury transition-all duration-500 hover:scale-105 group">
                <div className="relative overflow-hidden">
                  <img 
                    src={space.image} 
                    alt={space.title}
                    className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-luxury-dark/80 to-transparent"></div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-2xl font-serif font-light text-luxury-gold mb-4 tracking-wide">
                    {space.title}
                  </h3>
                  <p className="text-luxury-text font-light leading-relaxed mb-6">
                    {space.description}
                  </p>
                  
                  <div className="flex justify-between items-center text-sm text-luxury-text-muted border-t border-luxury-gold/20 pt-4">
                    <div>
                      <span className="block font-medium text-luxury-gold">Capacity</span>
                      <span>{space.capacity} guests</span>
                    </div>
                    <div className="text-right">
                      <span className="block font-medium text-luxury-gold">Area</span>
                      <span>{space.area}</span>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center">
            <a href="#contact">
              <Button 
                size="lg"
                className="bg-luxury-gold hover:bg-luxury-gold-light text-luxury-dark font-medium px-8 py-4 text-lg tracking-wide shadow-luxury transition-all duration-300 hover:scale-105"
              >
                Book Your Event
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SpacesSection;