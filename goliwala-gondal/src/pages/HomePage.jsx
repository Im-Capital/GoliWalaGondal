import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, MapPin, MessageCircle, Phone, Clock, Users, 
  Camera, Sparkles, Leaf, PartyPopper 
} from 'lucide-react';
import { motion as m } from 'framer-motion';
import { branchConfig, menuCategories, menuItems, experienceSteps, brandInfo } from '../data/config';
import HeroSection from '../components/HeroSection';
import { cn } from '../utils';

export default function HomePage() {
  const [announcementDismissed, setAnnouncementDismissed] = useState(false);

  const featuredCategories = menuCategories.slice(1, 6);
  const featuredProducts = menuItems.filter(item => item.featured).slice(0, 6);

  const benefits = [
    {
      icon: Bottle,
      title: "Classic Goli Experience",
      description: "The iconic marble-bottle opening experience"
    },
    {
      icon: Sparkles,
      title: "Fresh & Refreshing",
      description: "Made with quality ingredients for maximum refreshment"
    },
    {
      icon: Leaf,
      title: "Colourful Choices",
      description: "Vibrant flavours for every mood and preference"
    },
    {
      icon: Users,
      title: "Friends & Family",
      description: "Perfect for gatherings of all ages"
    },
    {
      icon: Clock,
      title: "Open Till Midnight",
      description: "Late evening hangouts made easy"
    },
    {
      icon: Camera,
      title: "Instagram-Worthy",
      description: "Made for photos, reels, and memories"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Announcement Bar */}
      {!announcementDismissed && (
        <div className="fixed top-0 left-0 right-0 z-50">
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: 'auto' }}
            exit={{ height: 0 }}
            className="bg-lime-green text-deep-forest overflow-hidden"
          >
            <div className="container mx-auto px-4 py-2 flex items-center justify-center relative">
              <p className="text-xs sm:text-sm font-medium text-center pr-8">
                Gondal's refreshing new hangout is now open — visit us today.
              </p>
              <button
                onClick={() => setAnnouncementDismissed(true)}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-1 hover:bg-deep-forest/10 rounded-full transition-colors"
                aria-label="Dismiss announcement"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </motion.div>
        </div>
      )}

      {/* Hero Section */}
      <HeroSection />

      {/* Brand Introduction */}
      <section className="py-20 sm:py-28 bg-gradient-to-b from-near-black to-deep-forest">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-1 bg-rich-green/30 border border-rich-green/50 rounded-full text-lime-green text-sm font-medium mb-6">
                More Than a Soda
              </span>
              <h2 className="text-warm-cream mb-6">It's a Feeling.</h2>
              <p className="text-fresh-mint/80 text-lg leading-relaxed mb-8">
                {brandInfo.description}
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                <div className="p-6 bg-rich-green/10 border border-rich-green/20 rounded-2xl">
                  <div className="text-4xl mb-4">🫧</div>
                  <h3 className="text-warm-cream font-semibold mb-2">Theatre in Every Bottle</h3>
                  <p className="text-fresh-mint/60 text-sm">The marble-opening creates a moment of anticipation and joy</p>
                </div>
                <div className="p-6 bg-rich-green/10 border border-rich-green/20 rounded-2xl">
                  <div className="text-4xl mb-4">🌈</div>
                  <h3 className="text-warm-cream font-semibold mb-2">Modern Flavours</h3>
                  <p className="text-fresh-mint/60 text-sm">Old-school nostalgia meets new-age taste innovation</p>
                </div>
                <div className="p-6 bg-rich-green/10 border border-rich-green/20 rounded-2xl">
                  <div className="text-4xl mb-4">📍</div>
                  <h3 className="text-warm-cream font-semibold mb-2">Local Hangout</h3>
                  <p className="text-fresh-mint/60 text-sm">Designed as Gondal's favourite beverage destination</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-20 sm:py-28 bg-deep-forest">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-warm-cream mb-4">Explore Our Range</h2>
            <p className="text-fresh-mint/70 max-w-2xl mx-auto">
              From classic goli soda to creative mocktails, there's something for everyone
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            {featuredCategories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group p-6 bg-rich-green/10 border border-rich-green/20 rounded-2xl hover:border-lime-green/40 transition-all duration-300 cursor-pointer"
              >
                <Link to="/menu" className="block">
                  <div className="text-3xl mb-4">{category.icon}</div>
                  <h3 className="text-warm-cream font-semibold mb-2">{category.name}</h3>
                  <p className="text-fresh-mint/60 text-sm mb-4">
                    {category.id === 'goli-soda' && "The classic marble-pop experience with refreshing fizz."}
                    {category.id === 'flavoured-soda' && "Bright, bold, and made for every mood."}
                    {category.id === 'bubble-soda' && "Playful bubbles, vibrant colours, and a fun twist."}
                    {category.id === 'mojitos' && "Cool mint, citrusy freshness, and a lively finish."}
                    {category.id === 'mocktails' && "Colourful, creative, alcohol-free refreshments."}
                  </p>
                  <span className="inline-flex items-center text-lime-green text-sm font-medium group-hover:underline">
                    View Menu <ArrowRight className="w-4 h-4 ml-1" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Signature Drinks Preview */}
      <section className="py-20 sm:py-28 bg-gradient-to-b from-deep-forest to-dark-emerald">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-warm-cream mb-4">Pick Your Fizz</h2>
            <p className="text-fresh-mint/70 max-w-2xl mx-auto">
              Discover our most popular drinks
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group p-6 bg-rich-green/10 border border-rich-green/20 rounded-2xl hover:border-lime-green/40 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: `${product.accentColor}20` }}
                  >
                    <div
                      className="w-8 h-8 rounded-full"
                      style={{ backgroundColor: product.accentColor }}
                    />
                  </div>
                  {product.vegetarian && (
                    <span className="px-2 py-1 bg-lime-green/20 text-lime-green text-xs rounded-full">
                      Veg
                    </span>
                  )}
                </div>
                <h3 className="text-warm-cream font-semibold mb-2">{product.name}</h3>
                <p className="text-fresh-mint/60 text-sm mb-4">{product.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-lime-green font-semibold">
                    {product.priceDisplay}
                  </span>
                  <Link
                    to="/menu"
                    className="text-fresh-mint/70 hover:text-lime-green text-sm font-medium transition-colors"
                  >
                    Details →
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/menu"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-lime-green text-deep-forest font-bold rounded-full hover:bg-warm-cream transition-all duration-300 hover:scale-105"
            >
              <span>View Full Menu</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Visit Section */}
      <section className="py-20 sm:py-28 bg-dark-emerald">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-warm-cream mb-4">Why Visit GoliWala Gondal?</h2>
            <p className="text-fresh-mint/70 max-w-2xl mx-auto">
              Your new favourite hangout destination
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start space-x-4 p-6 bg-rich-green/10 border border-rich-green/20 rounded-2xl"
              >
                <div className="p-3 bg-lime-green/20 rounded-xl">
                  <benefit.icon className="w-6 h-6 text-lime-green" />
                </div>
                <div>
                  <h3 className="text-warm-cream font-semibold mb-1">{benefit.title}</h3>
                  <p className="text-fresh-mint/60 text-sm">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 sm:py-28 bg-gradient-to-b from-dark-emerald to-near-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-warm-cream mb-4">Open the Goli. Start the Story.</h2>
            <p className="text-fresh-mint/70 max-w-2xl mx-auto">
              The first crack of the marble, the rush of bubbles, and that first refreshing sip—GoliWala is made to be experienced.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {experienceSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative"
              >
                {index < experienceSteps.length - 1 && (
                  <div className="hidden md:block absolute top-12 left-1/2 w-full h-0.5 bg-gradient-to-r from-lime-green/30 to-transparent" />
                )}
                <div className="relative text-center p-8">
                  <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-lime-green to-rich-green rounded-full flex items-center justify-center text-4xl shadow-lg shadow-lime-green/20">
                    {step.icon}
                  </div>
                  <div className="inline-block px-3 py-1 bg-lime-green/20 text-lime-green text-sm font-bold rounded-full mb-4">
                    Step {step.step}
                  </div>
                  <h3 className="text-warm-cream font-semibold text-xl mb-3">{step.title}</h3>
                  <p className="text-fresh-mint/60">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Branch Spotlight */}
      <section className="py-20 sm:py-28 bg-near-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="p-8 sm:p-12 bg-gradient-to-br from-rich-green/20 to-deep-forest/50 border border-rich-green/30 rounded-3xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <span className="inline-block px-4 py-1 bg-lime-green/20 text-lime-green text-sm font-medium rounded-full mb-4">
                    Your Local GoliWala
                  </span>
                  <h2 className="text-warm-cream mb-4">in Gondal</h2>
                  <p className="text-fresh-mint/70 mb-6">
                    Meet us at GoliWala Gondal on Bhuvneshwari Road, opposite Shri Ram Deri Farm. 
                    Drop in for a refreshing drink, a quick catch-up, or a late-evening hangout.
                  </p>
                  
                  <div className="space-y-3 mb-8">
                    <div className="flex items-center space-x-3">
                      <MapPin className="w-5 h-5 text-lime-green" />
                      <span className="text-fresh-mint/80 text-sm">{branchConfig.address.fullAddress}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Phone className="w-5 h-5 text-lime-green" />
                      <a href={`tel:${branchConfig.phone.replace(/\s+/g, '')}`} className="text-fresh-mint/80 text-sm hover:text-lime-green transition-colors">
                        {branchConfig.phoneFormatted}
                      </a>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Clock className="w-5 h-5 text-lime-green" />
                      <span className="text-fresh-mint/80 text-sm">{branchConfig.hours.display}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <a
                      href={branchConfig.mapsLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 bg-lime-green text-deep-forest font-semibold rounded-full hover:bg-warm-cream transition-colors"
                    >
                      Get Directions
                    </a>
                    <a
                      href={branchConfig.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 border border-rich-green/50 text-fresh-mint font-semibold rounded-full hover:bg-rich-green/30 transition-colors"
                    >
                      WhatsApp Us
                    </a>
                  </div>
                </div>

                <div className="relative">
                  <div className="aspect-square bg-gradient-to-br from-lime-green/20 to-rich-green/20 rounded-2xl flex items-center justify-center border border-rich-green/30">
                    <div className="text-center p-8">
                      <div className="text-6xl mb-4">🏪</div>
                      <p className="text-fresh-mint/60 text-sm">Visit us today</p>
                      <p className="text-lime-green font-semibold mt-2">Owner: {branchConfig.owner}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Social Section Placeholder */}
      <section className="py-20 sm:py-28 bg-deep-forest">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-warm-cream mb-4">Tag Your Fizz Moments</h2>
            <p className="text-fresh-mint/70 mb-8">
              Share your GoliWala experience with us
            </p>
            
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {branchConfig.hashtags.map((hashtag) => (
                <span
                  key={hashtag}
                  className="px-4 py-2 bg-rich-green/20 border border-rich-green/30 rounded-full text-fresh-mint/70 text-sm"
                >
                  {hashtag}
                </span>
              ))}
            </div>

            {branchConfig.social.instagram ? (
              <a
                href={branchConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full hover:opacity-90 transition-opacity"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                <span>Follow on Instagram</span>
              </a>
            ) : (
              <div className="inline-block px-8 py-4 bg-rich-green/20 border border-rich-green/30 rounded-full text-fresh-mint/70">
                Instagram profile coming soon
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 sm:py-28 bg-gradient-to-br from-lime-green to-rich-green">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-deep-forest mb-4">Ready to Make It a GoliWala Moment?</h2>
            <p className="text-deep-forest/80 text-lg mb-8 max-w-2xl mx-auto">
              Bring your people, pick your flavour, and let the fizz do the talking.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/menu"
                className="px-8 py-4 bg-deep-forest text-warm-cream font-bold rounded-full hover:bg-near-black transition-colors"
              >
                View Menu
              </Link>
              <a
                href={`tel:${branchConfig.phone.replace(/\s+/g, '')}`}
                className="px-8 py-4 bg-white/20 backdrop-blur text-deep-forest font-semibold rounded-full hover:bg-white/30 transition-colors"
              >
                Call Now
              </a>
              <a
                href={branchConfig.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-white/20 backdrop-blur text-deep-forest font-semibold rounded-full hover:bg-white/30 transition-colors"
              >
                WhatsApp Us
              </a>
              <a
                href={branchConfig.mapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-white/20 backdrop-blur text-deep-forest font-semibold rounded-full hover:bg-white/30 transition-colors"
              >
                Get Directions
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
