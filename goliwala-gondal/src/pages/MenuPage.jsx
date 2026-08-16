import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Filter, ArrowRight, Check } from 'lucide-react';
import { menuCategories, menuItems, branchConfig } from '../data/config';
import { cn } from '../utils';

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [sortBy, setSortBy] = useState('featured');

  // Filter menu items
  const filteredItems = menuItems.filter(item => {
    if (!item.availability) return false;
    if (activeCategory !== 'all' && item.category !== activeCategory) return false;
    return true;
  });

  // Sort menu items
  const sortedItems = [...filteredItems].sort((a, b) => {
    if (sortBy === 'featured') {
      return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
    }
    if (sortBy === 'name') {
      return a.name.localeCompare(b.name);
    }
    return 0;
  });

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 sm:py-28 bg-gradient-to-br from-deep-forest via-dark-emerald to-near-black overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ y: '100vh', opacity: 0 }}
              animate={{ y: '-100vh', opacity: [0, 0.3, 0] }}
              transition={{ duration: Math.random() * 10 + 10, repeat: Infinity, delay: Math.random() * 5 }}
              className="absolute w-2 h-2 sm:w-3 sm:h-3 bg-lime-green/20 rounded-full"
              style={{ left: `${Math.random() * 100}%` }}
            />
          ))}
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-warm-cream mb-6">Find Your Perfect Fizz</h1>
            <p className="text-fresh-mint/80 text-lg mb-8">
              From classic goli soda to colourful mocktails, there's a flavour for every mood.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filters */}
      <section className="sticky top-16 z-40 bg-deep-forest/95 backdrop-blur-md border-b border-rich-green/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {menuCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={cn(
                  'flex items-center space-x-2 px-4 py-2 rounded-full whitespace-nowrap transition-all duration-200',
                  activeCategory === category.id
                    ? 'bg-lime-green text-deep-forest font-semibold'
                    : 'bg-rich-green/20 text-fresh-mint hover:bg-rich-green/30'
                )}
              >
                <span>{category.icon}</span>
                <span className="text-sm font-medium">{category.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Grid */}
      <section className="py-12 sm:py-16 bg-deep-forest">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Sort Options */}
          <div className="flex items-center justify-between mb-8">
            <p className="text-fresh-mint/60 text-sm">
              Showing {sortedItems.length} {sortedItems.length === 1 ? 'item' : 'items'}
            </p>
            <div className="flex items-center space-x-2">
              <Filter className="w-4 h-4 text-fresh-mint/60" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-rich-green/20 border border-rich-green/30 rounded-lg px-3 py-2 text-fresh-mint text-sm focus:outline-none focus:border-lime-green"
              >
                <option value="featured">Popular</option>
                <option value="name">Name (A-Z)</option>
              </select>
            </div>
          </div>

          {/* Menu Items Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {sortedItems.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="group p-6 bg-rich-green/10 border border-rich-green/20 rounded-2xl hover:border-lime-green/40 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className="w-16 h-16 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform"
                      style={{ backgroundColor: `${item.accentColor}20` }}
                    >
                      <div
                        className="w-8 h-8 rounded-full shadow-lg"
                        style={{ backgroundColor: item.accentColor }}
                      />
                    </div>
                    <div className="flex items-center space-x-2">
                      {item.vegetarian && (
                        <span className="px-2 py-1 bg-lime-green/20 text-lime-green text-xs rounded-full font-medium">
                          Veg
                        </span>
                      )}
                      {item.featured && (
                        <span className="px-2 py-1 bg-amber/20 text-amber text-xs rounded-full font-medium">
                          ★
                        </span>
                      )}
                    </div>
                  </div>

                  <h3 className="text-warm-cream font-semibold mb-2 text-lg">{item.name}</h3>
                  <p className="text-fresh-mint/60 text-sm mb-4 line-clamp-2">{item.description}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-rich-green/20 text-fresh-mint/70 text-xs rounded-full capitalize"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-rich-green/20">
                    <span className="text-lime-green font-bold text-lg">
                      {item.priceDisplay}
                    </span>
                    <a
                      href={branchConfig.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-1 text-fresh-mint/70 hover:text-lime-green text-sm font-medium transition-colors"
                    >
                      <span>Enquire</span>
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {sortedItems.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <div className="text-6xl mb-4">🥤</div>
              <h3 className="text-warm-cream font-semibold mb-2">No items found</h3>
              <p className="text-fresh-mint/60">Try selecting a different category</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Build Your Own Drink */}
      <section className="py-20 sm:py-28 bg-gradient-to-b from-dark-emerald to-near-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <span className="inline-block px-4 py-1 bg-lime-green/20 text-lime-green text-sm font-medium rounded-full mb-4">
              Coming Soon
            </span>
            <h2 className="text-warm-cream mb-4">Build Your Own Drink</h2>
            <p className="text-fresh-mint/70 mb-8 max-w-2xl mx-auto">
              Customize your perfect beverage by choosing your base, flavour, sweetness level, and add-ons.
            </p>
            <a
              href={branchConfig.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-lime-green text-deep-forest font-bold rounded-full hover:bg-warm-cream transition-all duration-300 hover:scale-105"
            >
              <span>Request Custom Drink on WhatsApp</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Menu Disclaimer */}
      <section className="py-12 bg-near-black border-t border-rich-green/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <p className="text-fresh-mint/50 text-sm leading-relaxed">
              <strong className="text-fresh-mint/70">Disclaimer:</strong> Menu items, prices, and 
              availability may change. Please confirm with the Gondal outlet before ordering. 
              Images are for representation purposes only.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
