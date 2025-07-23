import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import operaLogo from "@/assets/opera-logo.png";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Overview", href: "#overview" },
    { name: "Gallery", href: "#gallery" },
    { name: "Features", href: "#features" },
    { name: "Contact Us", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-luxury-dark/90 backdrop-blur-md border-b border-luxury-gold/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <a href="/" className="focus:outline-none">
              <img src={operaLogo} alt="The Opera House Logo" className="h-12 w-auto" />
            </a>
            <div className="hidden md:block text-luxury-text-muted text-xs ml-4 border-l border-luxury-gold/30 pl-4">
              <div>The</div>
              <div>Opera</div>
              <div>House</div>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-luxury-text hover:text-luxury-gold transition-colors duration-300 font-light tracking-wide"
              >
                {item.name}
              </a>
            ))}
            <div className="flex items-center space-x-2 text-luxury-gold">
              <Phone className="h-4 w-4" />
              <span className="text-sm font-light">+91 9911620620</span>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-luxury-gold hover:bg-luxury-gold/20"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-luxury-dark/95 backdrop-blur-md border-t border-luxury-gold/20">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-luxury-text hover:text-luxury-gold transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="px-3 py-2 flex items-center space-x-2 text-luxury-gold border-t border-luxury-gold/20 mt-4 pt-4">
                <Phone className="h-4 w-4" />
                <span className="text-sm">+91 9990528866</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;