import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, MessageCircle } from 'lucide-react';
import { branchConfig, menuCategories, menuItems } from '../data/config';

export default function HeroSection() {
  const featuredItems = menuItems.filter(item => item.featured).slice(0, 3);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-deep-forest via-dark-emerald to-near-black" />
      
      {/* Animated Bubbles Background */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ y: '100vh', x: Math.random() * 100 + 'vw', opacity: 0 }}
            animate={{
              y: '-100vh',
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
            className="absolute w-2 h-2 sm:w-3 sm:h-3 bg-lime-green/20 rounded-full"
          />
        ))}
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Location Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center space-x-2 px-4 py-2 bg-rich-green/30 border border-rich-green/50 rounded-full mb-6"
          >
            <MapPin className="w-4 h-4 text-lime-green" />
            <span className="text-fresh-mint text-sm font-medium">
              {branchConfig.address.city}
            </span>
            <span className="text-fresh-mint/50">•</span>
            <span className="text-lime-green text-sm font-medium">
              {branchConfig.hours.display}
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-warm-cream mb-6 leading-tight"
          >
            Gondal, Get Ready to{' '}
            <span className="text-lime-green relative inline-block">
              Fizz
              <svg className="absolute -bottom-2 left-0 w-full h-3 text-lime-green/30" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q50 10 100 5" stroke="currentColor" strokeWidth="3" fill="none" />
              </svg>
            </span>
          </motion.h1>

          {/* Supporting Copy */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-fresh-mint/80 text-lg sm:text-xl mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Classic goli soda, fresh mojitos, colourful mocktails, and unforgettable 90s-inspired 
            moments—now at {branchConfig.name}.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            <Link
              to="/menu"
              className="group px-8 py-4 bg-lime-green text-deep-forest font-bold rounded-full hover:bg-warm-cream transition-all duration-300 hover:scale-105 shadow-xl shadow-lime-green/30 flex items-center space-x-2"
            >
              <span>Explore the Menu</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <a
              href={branchConfig.mapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border-2 border-rich-green/50 text-fresh-mint font-semibold rounded-full hover:bg-rich-green/20 transition-all duration-300 flex items-center space-x-2"
            >
              <MapPin className="w-5 h-5" />
              <span>Get Directions</span>
            </a>
            
            <a
              href={branchConfig.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-rich-green/30 text-fresh-mint font-semibold rounded-full hover:bg-rich-green/50 transition-all duration-300 flex items-center space-x-2"
            >
              <MessageCircle className="w-5 h-5" />
              <span>WhatsApp Us</span>
            </a>
          </motion.div>

          {/* Microcopy */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-fresh-mint/50 text-sm italic"
          >
            Open the bottle. Unlock the memory.
          </motion.p>
        </div>

        {/* Featured Products Preview */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-20"
        >
          <p className="text-fresh-mint/60 text-sm uppercase tracking-wider mb-6">
            Popular Choices
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {featuredItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                className="group p-6 bg-rich-green/10 border border-rich-green/20 rounded-2xl hover:border-lime-green/40 transition-all duration-300 hover:-translate-y-1"
              >
                <div
                  className="w-12 h-12 rounded-full mb-4 flex items-center justify-center"
                  style={{ backgroundColor: `${item.accentColor}20` }}
                >
                  <div
                    className="w-6 h-6 rounded-full"
                    style={{ backgroundColor: item.accentColor }}
                  />
                </div>
                <h3 className="text-warm-cream font-semibold mb-2">{item.name}</h3>
                <p className="text-fresh-mint/60 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-16 flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 border-2 border-rich-green/50 rounded-full flex justify-center pt-2"
          >
            <div className="w-1 h-2 bg-lime-green/60 rounded-full" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
