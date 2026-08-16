import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Camera, Share2 } from 'lucide-react';
import { galleryImages, branchConfig } from '../data/config';
import { cn } from '../utils';

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);

  const categories = [
    { id: 'all', name: 'All' },
    { id: 'goli-soda', name: 'Goli Soda' },
    { id: 'mojitos', name: 'Mojitos' },
    { id: 'mocktails', name: 'Mocktails' },
    { id: 'bubble-soda', name: 'Bubble Soda' },
    { id: 'outlet', name: 'Outlet' },
    { id: 'friends', name: 'Friends' },
    { id: 'family', name: 'Family' },
    { id: 'parties', name: 'Parties' }
  ];

  const filteredImages = activeCategory === 'all'
    ? galleryImages
    : galleryImages.filter(img => img.category === activeCategory);

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
            <h1 className="text-warm-cream mb-6">Capture the Fizz</h1>
            <p className="text-fresh-mint/80 text-lg">
              Moments worth sharing from GoliWala Gondal
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filters */}
      <section className="sticky top-16 z-40 bg-deep-forest/95 backdrop-blur-md border-b border-rich-green/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={cn(
                  'px-4 py-2 rounded-full whitespace-nowrap transition-all duration-200 text-sm font-medium',
                  activeCategory === category.id
                    ? 'bg-lime-green text-deep-forest'
                    : 'bg-rich-green/20 text-fresh-mint hover:bg-rich-green/30'
                )}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12 sm:py-16 bg-deep-forest">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            layout
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
          >
            <AnimatePresence mode="popLayout">
              {filteredImages.map((image, index) => (
                <motion.div
                  key={image.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  whileHover={{ scale: 1.02 }}
                  onClick={() => setSelectedImage(image)}
                  className="group relative aspect-square bg-rich-green/10 border border-rich-green/20 rounded-2xl overflow-hidden cursor-pointer"
                >
                  {/* Placeholder for actual image */}
                  <div
                    className="absolute inset-0 flex items-center justify-center text-6xl"
                    style={{
                      background: `linear-gradient(135deg, ${image.accentColor || '#0B6B4F'}20, ${image.accentColor || '#0B6B4F'}10)`
                    }}
                  >
                    📸
                  </div>
                  
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-near-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-center p-4">
                      <p className="text-warm-cream font-medium text-sm mb-2">{image.caption}</p>
                      <span className="text-lime-green text-xs uppercase tracking-wider">{image.category}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredImages.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <div className="text-6xl mb-4">📷</div>
              <h3 className="text-warm-cream font-semibold mb-2">No images found</h3>
              <p className="text-fresh-mint/60">Try selecting a different category</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Social CTA */}
      <section className="py-20 sm:py-28 bg-gradient-to-b from-dark-emerald to-near-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Instagram className="w-12 h-12 text-lime-green mx-auto mb-6" />
            <h2 className="text-warm-cream mb-4">Share Your Moments</h2>
            <p className="text-fresh-mint/70 mb-8 max-w-2xl mx-auto">
              Tag us in your GoliWala photos and be featured on our page
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
                <Instagram className="w-5 h-5" />
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

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 bg-near-black/95 backdrop-blur-md flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 p-2 text-fresh-mint hover:text-lime-green transition-colors"
                aria-label="Close"
              >
                <X className="w-8 h-8" />
              </button>

              {/* Image Placeholder */}
              <div
                className="aspect-video bg-gradient-to-br from-rich-green/20 to-deep-forest/50 border border-rich-green/30 rounded-2xl flex items-center justify-center mb-6"
              >
                <div className="text-center">
                  <div className="text-8xl mb-4">📸</div>
                  <p className="text-fresh-mint/60">Image placeholder</p>
                </div>
              </div>

              {/* Caption */}
              <div className="text-center">
                <h3 className="text-warm-cream font-semibold text-xl mb-2">{selectedImage.caption}</h3>
                <p className="text-fresh-mint/60 capitalize">{selectedImage.category}</p>
              </div>

              {/* Share Button */}
              <div className="mt-6 flex justify-center">
                <button className="inline-flex items-center space-x-2 px-6 py-3 bg-rich-green/30 text-fresh-mint rounded-full hover:bg-rich-green/50 transition-colors">
                  <Share2 className="w-5 h-5" />
                  <span>Share</span>
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Note about images */}
      <section className="py-12 bg-near-black border-t border-rich-green/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-fresh-mint/50 text-sm text-center">
            Images are for representation purposes. Visit our outlet to experience the real GoliWala moments.
          </p>
        </div>
      </section>
    </div>
  );
}
