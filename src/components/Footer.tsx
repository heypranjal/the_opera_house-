import { MapPin, Phone, Mail } from "lucide-react";
// import operaLogo from "/lovable-uploads/5d969e45-9297-4f91-9ab3-eea2f6654535.png";

const Footer = () => {
  return (
    <footer className="bg-luxury-dark border-t border-luxury-gold/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              {/* <img src={operaLogo} alt="The Opera House" className="h-12 w-auto" /> */}
              <div className="text-luxury-gold font-serif">
                <div className="text-xl font-light tracking-wider">
                  THE OPERA
                </div>
                <div className="text-sm tracking-[0.3em] -mt-1">HOUSE</div>
              </div>
            </div>
            <p className="text-luxury-text-muted font-light leading-relaxed max-w-sm">
              A masterpiece reserved for the distinguished. Experience luxury
              events at Delhi's premier convention center.
            </p>
            <div className="text-luxury-text-muted text-xs">
              <div>DELHI CONVENTION CENTER</div>
              <div className="text-luxury-gold">
                LUXURY • ELEGANCE • EXCLUSIVITY
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-luxury-gold font-serif text-lg tracking-wide">
              Quick Links
            </h3>
            <div className="space-y-3">
              <a
                href="#overview"
                className="block text-luxury-text hover:text-luxury-gold transition-colors duration-300 font-light"
              >
                Overview
              </a>
              <a
                href="#features"
                className="block text-luxury-text hover:text-luxury-gold transition-colors duration-300 font-light"
              >
                Our Spaces
              </a>
              <a
                href="#gallery"
                className="block text-luxury-text hover:text-luxury-gold transition-colors duration-300 font-light"
              >
                Gallery
              </a>
              <a
                href="#contact"
                className="block text-luxury-text hover:text-luxury-gold transition-colors duration-300 font-light"
              >
                Contact Us
              </a>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <h3 className="text-luxury-gold font-serif text-lg tracking-wide">
              Get in Touch
            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-luxury-gold flex-shrink-0 mt-0.5" />
                <div className="text-luxury-text font-light text-sm">
                  Bhule ram Palace, near Prateek Laurel, Sarfabad Village,
                  Sarfabad, Sector 73, Noida, Uttar Pradesh 201307 Noida, India
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-luxury-gold flex-shrink-0" />
                <div className="text-luxury-text font-light">
                  +91 9911620620
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-luxury-gold flex-shrink-0" />
                <div className="text-luxury-text font-light">
                  theoperahousenoida@gmail.com
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-luxury-gold/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-luxury-text-muted text-sm font-light">
            © {new Date(Date.now()).getFullYear()} The Opera House Convention
            Center. All rights reserved.
          </div>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a
              href="#"
              className="text-luxury-text-muted hover:text-luxury-gold transition-colors duration-300 text-sm font-light"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-luxury-text-muted hover:text-luxury-gold transition-colors duration-300 text-sm font-light"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
