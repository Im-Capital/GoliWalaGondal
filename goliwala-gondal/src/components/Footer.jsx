import { Link } from 'react-router-dom';
import { Phone, MessageCircle, MapPin, Camera, Clock } from 'lucide-react';
import { branchConfig, navigationLinks } from '../data/config';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-near-black border-t border-rich-green/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-lime-green rounded-full flex items-center justify-center">
                <span className="text-deep-forest font-bold text-lg">G</span>
              </div>
              <span className="text-warm-cream font-display font-bold text-xl">
                GoliWala <span className="text-lime-green">Gondal</span>
              </span>
            </Link>
            <p className="text-fresh-mint/70 text-sm leading-relaxed mb-6">
              Relive the magic of the 90s in every fizz. Classic goli soda, fresh mojitos, 
              colourful mocktails, and unforgettable moments.
            </p>
            <div className="flex space-x-3">
              {branchConfig.social.instagram && (
                <a
                  href={branchConfig.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-rich-green/30 rounded-full text-fresh-mint hover:bg-lime-green hover:text-deep-forest transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              )}
              <a
                href={branchConfig.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-rich-green/30 rounded-full text-fresh-mint hover:bg-lime-green hover:text-deep-forest transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-warm-cream font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {navigationLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-fresh-mint/70 hover:text-lime-green text-sm transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/faq"
                  className="text-fresh-mint/70 hover:text-lime-green text-sm transition-colors"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-warm-cream font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-lime-green flex-shrink-0 mt-0.5" />
                <span className="text-fresh-mint/70 text-sm">
                  {branchConfig.address.fullAddress}
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-lime-green flex-shrink-0" />
                <a
                  href={`tel:${branchConfig.phone.replace(/\s+/g, '')}`}
                  className="text-fresh-mint/70 hover:text-lime-green text-sm transition-colors"
                >
                  {branchConfig.phoneFormatted}
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-lime-green flex-shrink-0" />
                <span className="text-fresh-mint/70 text-sm">
                  {branchConfig.hours.display}
                </span>
              </li>
            </ul>
          </div>

          {/* Owner Info */}
          <div>
            <h3 className="text-warm-cream font-semibold mb-4">Branch Owner</h3>
            <p className="text-fresh-mint/70 text-sm mb-4">
              <span className="text-warm-cream font-medium">{branchConfig.owner}</span>
            </p>
            <a
              href={branchConfig.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-4 py-2 bg-lime-green text-deep-forest font-medium rounded-full text-sm hover:bg-warm-cream transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-rich-green/20">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-fresh-mint/50 text-xs text-center md:text-left">
              © {currentYear} {branchConfig.name}. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-xs">
              <Link
                to="/privacy-policy"
                className="text-fresh-mint/50 hover:text-lime-green transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="text-fresh-mint/50 hover:text-lime-green transition-colors"
              >
                Terms & Conditions
              </Link>
            </div>
          </div>
          <p className="mt-4 text-fresh-mint/40 text-xs text-center">
            Menu availability and pricing may vary. Please confirm at the outlet.
          </p>
          <p className="mt-2 text-fresh-mint/30 text-xs text-center">
            Designed for {branchConfig.name}
          </p>
        </div>
      </div>
    </footer>
  );
}
