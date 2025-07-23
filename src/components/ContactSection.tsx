import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { motion } from "framer-motion";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-luxury-dark-lighter">
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
              Plan Your Distinguished
              <br />
              <span className="block mt-4">Celebration</span>
            </h2>
            <p className="text-luxury-text-muted text-xl font-light tracking-wide">
              Connect with our team to craft your perfect event
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-serif text-luxury-gold mb-6">Get in Touch</h3>
                <p className="text-luxury-text font-light leading-relaxed mb-8">
                  Experience the epitome of luxury at The Opera House. Our dedicated team is ready to 
                  assist you in creating unforgettable moments that reflect your distinguished taste.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-luxury-gold/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-5 w-5 text-luxury-gold" />
                  </div>
                  <div>
                    <h4 className="text-luxury-gold font-medium mb-1">Location</h4>
                    <p className="text-luxury-text font-light">
                      Lodhi Road, Next to Jawahar Lal Nehru Stadium
                      <br />
                      New Delhi, India
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-luxury-gold/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="h-5 w-5 text-luxury-gold" />
                  </div>
                  <div>
                    <h4 className="text-luxury-gold font-medium mb-1">Phone</h4>
                    <p className="text-luxury-text font-light">+91 9990528866</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-luxury-gold/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="h-5 w-5 text-luxury-gold" />
                  </div>
                  <div>
                    <h4 className="text-luxury-gold font-medium mb-1">Email</h4>
                    <p className="text-luxury-text font-light">events@theoperahouse.in</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-luxury-gold/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="h-5 w-5 text-luxury-gold" />
                  </div>
                  <div>
                    <h4 className="text-luxury-gold font-medium mb-1">Operating Hours</h4>
                    <p className="text-luxury-text font-light">
                      Monday - Sunday: 9:00 AM - 11:00 PM
                      <br />
                      Event Planning: By Appointment
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <Card className="bg-luxury-dark border-luxury-gold/20 p-8 shadow-elegant">
              <h3 className="text-2xl font-serif text-luxury-gold mb-6">Request Information</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-luxury-text font-light mb-2">Full Name</label>
                    <Input 
                      className="bg-luxury-dark-lighter border-luxury-gold/30 text-luxury-text focus:border-luxury-gold"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-luxury-text font-light mb-2">Phone Number</label>
                    <Input 
                      className="bg-luxury-dark-lighter border-luxury-gold/30 text-luxury-text focus:border-luxury-gold"
                      placeholder="Your phone"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-luxury-text font-light mb-2">Email Address</label>
                  <Input 
                    type="email"
                    className="bg-luxury-dark-lighter border-luxury-gold/30 text-luxury-text focus:border-luxury-gold"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label className="block text-luxury-text font-light mb-2">Event Type</label>
                  <Input 
                    className="bg-luxury-dark-lighter border-luxury-gold/30 text-luxury-text focus:border-luxury-gold"
                    placeholder="Wedding, Corporate, Social, etc."
                  />
                </div>

                <div>
                  <label className="block text-luxury-text font-light mb-2">Event Date</label>
                  <Input 
                    type="date"
                    className="bg-luxury-dark-lighter border-luxury-gold/30 text-luxury-text focus:border-luxury-gold"
                  />
                </div>

                <div>
                  <label className="block text-luxury-text font-light mb-2">Guest Count</label>
                  <Input 
                    className="bg-luxury-dark-lighter border-luxury-gold/30 text-luxury-text focus:border-luxury-gold"
                    placeholder="Approximate number of guests"
                  />
                </div>

                <div>
                  <label className="block text-luxury-text font-light mb-2">Additional Details</label>
                  <Textarea 
                    className="bg-luxury-dark-lighter border-luxury-gold/30 text-luxury-text focus:border-luxury-gold min-h-[100px]"
                    placeholder="Tell us about your vision for this event..."
                  />
                </div>

                <Button 
                  type="submit"
                  size="lg"
                  className="w-full bg-luxury-gold hover:bg-luxury-gold-light text-luxury-dark font-medium py-4 text-lg tracking-wide shadow-luxury transition-all duration-300 hover:scale-105"
                >
                  Send Inquiry
                </Button>
              </form>
            </Card>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;