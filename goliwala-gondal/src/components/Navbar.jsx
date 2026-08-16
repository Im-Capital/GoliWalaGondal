import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';
import { branchConfig, navigationLinks, isBranchOpen } from '../data/config';
import { cn } from '../utils';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isOpen = isBranchOpen();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const isActive = (path) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          isScrolled
            ? 'bg-deep-forest/95 backdrop-blur-md border-b border-rich-green/20 shadow-lg'
            : 'bg-transparent'
        )}
      >
        <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2 group">
              {/* Logo Placeholder - Replace with actual logo image */}
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-lime-green rounded-full flex items-center justify-center group-hover:scale-105 transition-transform">
                <span className="text-deep-forest font-bold text-lg sm:text-xl">G</span>
              </div>
              <span className="hidden sm:block text-warm-cream font-display font-bold text-xl tracking-tight">
                GoliWala <span className="text-lime-green">Gondal</span>
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navigationLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={cn(
                    'px-4 py-2 rounded-full text-sm font-medium transition-all duration-200',
                    isActive(link.path)
                      ? 'bg-lime-green text-deep-forest'
                      : 'text-fresh-mint hover:bg-rich-green/30 hover:text-white'
                  )}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center space-x-3">
              {/* WhatsApp Button */}
              <a
                href={branchConfig.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-fresh-mint hover:text-lime-green transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </a>

              {/* Call Button */}
              <a
                href={`tel:${branchConfig.phone.replace(/\s+/g, '')}`}
                className="p-2 text-fresh-mint hover:text-lime-green transition-colors"
                aria-label="Call Now"
              >
                <Phone className="w-5 h-5" />
              </a>

              {/* CTA Button */}
              <Link
                to="/menu"
                className="px-5 py-2.5 bg-lime-green text-deep-forest font-semibold rounded-full hover:bg-warm-cream transition-all duration-200 hover:scale-105 shadow-lg shadow-lime-green/20"
              >
                Order / Enquire
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-fresh-mint hover:text-lime-green transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-near-black/95 backdrop-blur-md"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Menu Content */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="absolute right-0 top-0 bottom-0 w-full max-w-xs bg-deep-forest border-l border-rich-green/20 overflow-y-auto"
            >
              <div className="p-6 pt-20">
                {/* Logo in mobile menu */}
                <div className="mb-8">
                  <Link to="/" className="flex items-center space-x-2">
                    <div className="w-12 h-12 bg-lime-green rounded-full flex items-center justify-center">
                      <span className="text-deep-forest font-bold text-xl">G</span>
                    </div>
                    <span className="text-warm-cream font-display font-bold text-xl">
                      GoliWala <span className="text-lime-green">Gondal</span>
                    </span>
                  </Link>
                </div>

                {/* Navigation Links */}
                <nav className="space-y-2 mb-8">
                  {navigationLinks.map((link) => (
                    <Link
                      key={link.name}
                      to={link.path}
                      className={cn(
                        'block px-4 py-3 rounded-xl text-base font-medium transition-all',
                        isActive(link.path)
                          ? 'bg-lime-green text-deep-forest'
                          : 'text-fresh-mint hover:bg-rich-green/30'
                      )}
                    >
                      {link.name}
                    </Link>
                  ))}
                </nav>

                {/* Action Buttons */}
                <div className="space-y-3">
                  <a
                    href={branchConfig.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center space-x-2 w-full px-4 py-3 bg-rich-green/30 text-fresh-mint rounded-xl font-medium hover:bg-rich-green/50 transition-colors"
                  >
                    <MessageCircle className="w-5 h-5" />
                    <span>WhatsApp Us</span>
                  </a>

                  <a
                    href={`tel:${branchConfig.phone.replace(/\s+/g, '')}`}
                    className="flex items-center justify-center space-x-2 w-full px-4 py-3 bg-rich-green/30 text-fresh-mint rounded-xl font-medium hover:bg-rich-green/50 transition-colors"
                  >
                    <Phone className="w-5 h-5" />
                    <span>Call Now</span>
                  </a>

                  <Link
                    to="/menu"
                    className="flex items-center justify-center w-full px-4 py-3 bg-lime-green text-deep-forest font-semibold rounded-xl hover:bg-warm-cream transition-colors"
                  >
                    View Menu
                  </Link>

                  <Link
                    to="/visit-us"
                    className="flex items-center justify-center w-full px-4 py-3 border border-rich-green/50 text-fresh-mint rounded-xl font-medium hover:bg-rich-green/30 transition-colors"
                  >
                    Get Directions
                  </Link>
                </div>

                {/* Opening Status */}
                <div className="mt-8 pt-6 border-t border-rich-green/20">
                  <div className="flex items-center space-x-2 text-sm">
                    <span
                      className={cn(
                        'w-2 h-2 rounded-full',
                        isOpen ? 'bg-lime-green' : 'bg-coral'
                      )}
                    />
                    <span className={isOpen ? 'text-lime-green' : 'text-coral'}>
                      {isOpen ? 'Open Now' : 'Closed'}
                    </span>
                  </div>
                  <p className="mt-2 text-xs text-fresh-mint/70">
                    {branchConfig.hours.display}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
