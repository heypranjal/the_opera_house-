import { Lightbulb, Gem, Calendar, ChefHat, Car, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";

const FeaturesSection = () => {
  const features = [
    {
      icon: Lightbulb,
      title: "Unrivaled Location",
      description: "Seamlessly connected to Delhi's most iconic landmarks."
    },
    {
      icon: Gem,
      title: "Visionary Design", 
      description: "Masterfully designed by an internationally acclaimed architectural designer, drawing inspiration from nature's elegance."
    },
    {
      icon: Calendar,
      title: "Event Spaces",
      description: "Meticulously designed exquisite venues perfect for grand to intimate weddings."
    },
    {
      icon: ChefHat,
      title: "Dining Elevated",
      description: "A dedicated, large dining area complements the Grand Ballroom."
    },
    {
      icon: Car,
      title: "Spacious Parking", 
      description: "Unmatched parking space with a capacity of over 2,000 vehicles."
    },
    {
      icon: Sun,
      title: "Mood Lighting",
      description: "State-of-the-art lighting with 700 intelligent mood lights with 20 modes."
    }
  ];

  return (
    <section className="py-20 bg-luxury-dark">
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
              Not Just a Venue,{" "}
              <span className="font-medium">a Canvas of Dreams</span>
              <br />
              <span className="block mt-4">Brought to Life</span>
            </h2>
            <p className="text-luxury-text-muted text-xl font-light tracking-wide">
              Experience excellence in every detail
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="bg-luxury-dark-lighter border-luxury-gold/20 p-6 hover:shadow-luxury transition-all duration-500 hover:scale-105 group">
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-luxury-gold/10 border border-luxury-gold/30 flex items-center justify-center group-hover:bg-luxury-gold/20 transition-all duration-300">
                      <Icon className="h-8 w-8 text-luxury-gold" />
                    </div>
                    <h3 className="text-xl font-serif font-light text-luxury-gold mb-4 tracking-wide">
                      {feature.title}
                    </h3>
                    <p className="text-luxury-text font-light leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </Card>
              );
            })}
          </div>

          {/* CTA Button */}
          <div className="text-center">
            <a href="#contact">
              <Button 
                size="lg"
                className="bg-luxury-gold hover:bg-luxury-gold-light text-luxury-dark font-medium px-8 py-4 text-lg tracking-wide shadow-luxury transition-all duration-300 hover:scale-105"
              >
                Enquire Now
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;