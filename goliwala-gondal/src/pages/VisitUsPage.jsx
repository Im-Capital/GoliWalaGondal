import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Clock, MessageCircle, Navigation, Copy, Check } from 'lucide-react';
import { useState } from 'react';
import { branchConfig, isBranchOpen, getTodaysHours } from '../data/config';

export default function VisitUsPage() {
  const [copied, setCopied] = useState(false);
  const isOpen = isBranchOpen();

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(branchConfig.address.fullAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 sm:py-28 bg-gradient-to-br from-deep-forest via-dark-emerald to-near-black overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-warm-cream mb-6">Visit Us</h1>
            <p className="text-fresh-mint/80 text-lg">
              Find us at GoliWala Gondal on Bhuvneshwari Road
            </p>
          </motion.div>
        </div>
      </section>

      {/* Location & Contact */}
      <section className="py-20 sm:py-28 bg-deep-forest">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="space-y-8">
                {/* Branch Info Card */}
                <div className="p-8 bg-rich-green/10 border border-rich-green/20 rounded-2xl">
                  <h2 className="text-warm-cream font-semibold text-2xl mb-6">GoliWala Gondal</h2>
                  
                  <div className="space-y-6">
                    {/* Address */}
                    <div className="flex items-start space-x-4">
                      <MapPin className="w-6 h-6 text-lime-green flex-shrink-0 mt-1" />
                      <div>
                        <p className="text-fresh-mint/80 mb-2">{branchConfig.address.fullAddress}</p>
                        <button
                          onClick={handleCopyAddress}
                          className="inline-flex items-center space-x-2 text-lime-green text-sm font-medium hover:underline"
                        >
                          {copied ? (
                            <>
                              <Check className="w-4 h-4" />
                              <span>Copied!</span>
                            </>
                          ) : (
                            <>
                              <Copy className="w-4 h-4" />
                              <span>Copy Address</span>
                            </>
                          )}
                        </button>
                      </div>
                    </div>

                    {/* Phone */}
                    <div className="flex items-center space-x-4">
                      <Phone className="w-6 h-6 text-lime-green flex-shrink-0" />
                      <a
                        href={`tel:${branchConfig.phone.replace(/\s+/g, '')}`}
                        className="text-fresh-mint/80 hover:text-lime-green transition-colors"
                      >
                        {branchConfig.phoneFormatted}
                      </a>
                    </div>

                    {/* Owner */}
                    <div className="flex items-center space-x-4">
                      <div className="w-6 h-6 text-lime-green flex-shrink-0 flex items-center justify-center">👤</div>
                      <div>
                        <p className="text-fresh-mint/60 text-sm">Branch Owner</p>
                        <p className="text-warm-cream font-medium">{branchConfig.owner}</p>
                      </div>
                    </div>

                    {/* Hours */}
                    <div className="flex items-start space-x-4">
                      <Clock className="w-6 h-6 text-lime-green flex-shrink-0 mt-1" />
                      <div>
                        <p className="text-fresh-mint/80 mb-1">{branchConfig.hours.display}</p>
                        <p className="text-fresh-mint/60 text-sm">{branchConfig.hours.days}</p>
                        <p className="text-fresh-mint/70 text-sm mt-2">{getTodaysHours()}</p>
                        <div className="flex items-center space-x-2 mt-2">
                          <span
                            className={`w-2 h-2 rounded-full ${isOpen ? 'bg-lime-green' : 'bg-coral'}`}
                          />
                          <span className={`text-sm ${isOpen ? 'text-lime-green' : 'text-coral'}`}>
                            {isOpen ? 'Open Now' : 'Closed'}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-8">
                    <a
                      href={branchConfig.mapsLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center space-x-2 px-6 py-3 bg-lime-green text-deep-forest font-semibold rounded-full hover:bg-warm-cream transition-colors"
                    >
                      <Navigation className="w-5 h-5" />
                      <span>Get Directions</span>
                    </a>
                    <a
                      href={branchConfig.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center space-x-2 px-6 py-3 border border-rich-green/50 text-fresh-mint font-semibold rounded-full hover:bg-rich-green/30 transition-colors"
                    >
                      <MessageCircle className="w-5 h-5" />
                      <span>WhatsApp Us</span>
                    </a>
                  </div>
                </div>

                {/* Quick Links */}
                <div className="p-6 bg-rich-green/10 border border-rich-green/20 rounded-2xl">
                  <h3 className="text-warm-cream font-semibold mb-4">Quick Links</h3>
                  <div className="space-y-2">
                    <Link to="/menu" className="block text-fresh-mint/70 hover:text-lime-green transition-colors">
                      → View Our Menu
                    </Link>
                    <Link to="/parties" className="block text-fresh-mint/70 hover:text-lime-green transition-colors">
                      → Plan a Party
                    </Link>
                    <Link to="/" className="block text-fresh-mint/70 hover:text-lime-green transition-colors">
                      → Back to Home
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="aspect-square bg-rich-green/10 border border-rich-green/20 rounded-2xl overflow-hidden">
                {/* Google Maps Embed Placeholder */}
                <iframe
                  src={`https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3697.5!2d70.8!3d22.05!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1s${encodeURIComponent(branchConfig.address.fullAddress)}!5e0!3m2!1sen!2sin!4v1234567890`}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="grayscale opacity-70"
                  title="GoliWala Gondal Location"
                />
                
                {/* Overlay with CTA */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="text-center p-8 pointer-events-auto">
                    <div className="text-6xl mb-4">📍</div>
                    <p className="text-fresh-mint/80 font-medium mb-4">Tap to open in Google Maps</p>
                    <a
                      href={branchConfig.mapsLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-6 py-3 bg-lime-green text-deep-forest font-semibold rounded-full hover:bg-warm-cream transition-colors pointer-events-auto"
                    >
                      Open Maps
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-20 sm:py-28 bg-gradient-to-b from-dark-emerald to-near-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-warm-cream text-center mb-12">Getting Here</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 bg-rich-green/10 border border-rich-green/20 rounded-2xl text-center">
                <div className="text-4xl mb-4">🚗</div>
                <h3 className="text-warm-cream font-semibold mb-2">By Car/Bike</h3>
                <p className="text-fresh-mint/60 text-sm">Located on Bhuvneshwari Road with easy access from main Gondal areas</p>
              </div>
              
              <div className="p-6 bg-rich-green/10 border border-rich-green/20 rounded-2xl text-center">
                <div className="text-4xl mb-4">🚕</div>
                <h3 className="text-warm-cream font-semibold mb-2">By Auto/Taxi</h3>
                <p className="text-fresh-mint/60 text-sm">Local autos and taxis can easily reach our location</p>
              </div>
              
              <div className="p-6 bg-rich-green/10 border border-rich-green/20 rounded-2xl text-center">
                <div className="text-4xl mb-4">🚶</div>
                <h3 className="text-warm-cream font-semibold mb-2">Walking Distance</h3>
                <p className="text-fresh-mint/60 text-sm">Conveniently located near Shri Ram Deri Farm landmark</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 sm:py-28 bg-near-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="text-warm-cream mb-4">Have Questions?</h2>
            <p className="text-fresh-mint/70 mb-8">
              Reach out to us directly or visit our outlet
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href={`tel:${branchConfig.phone.replace(/\s+/g, '')}`}
                className="inline-flex items-center space-x-2 px-8 py-4 bg-lime-green text-deep-forest font-bold rounded-full hover:bg-warm-cream transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span>Call Now</span>
              </a>
              <a
                href={branchConfig.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-8 py-4 border border-rich-green/50 text-fresh-mint font-semibold rounded-full hover:bg-rich-green/30 transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                <span>WhatsApp</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
