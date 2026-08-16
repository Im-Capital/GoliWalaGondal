import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import { cn } from '../utils';

export default function AnnouncementBar({ onDismiss }) {
  const announcements = [
    "Gondal's refreshing new hangout is now open — visit us today.",
    "Open daily from 10 AM to 12 AM.",
    "Classic goli soda. Modern flavours.",
    "Perfect for evening chill scenes.",
    "Bring your friends. Bring your fizz mood."
  ];

  const randomAnnouncement = announcements[Math.floor(Math.random() * announcements.length)];

  return (
    <motion.div
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: 'auto', opacity: 1 }}
      exit={{ height: 0, opacity: 0 }}
      className="bg-lime-green text-deep-forest overflow-hidden"
    >
      <div className="container mx-auto px-4 py-2 flex items-center justify-center relative">
        <p className="text-xs sm:text-sm font-medium text-center pr-8">
          {randomAnnouncement}
        </p>
        <button
          onClick={onDismiss}
          className="absolute right-4 top-1/2 -translate-y-1/2 p-1 hover:bg-deep-forest/10 rounded-full transition-colors"
          aria-label="Dismiss announcement"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </motion.div>
  );
}
