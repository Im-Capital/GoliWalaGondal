import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { faqItems } from '../data/config';
import { cn } from '../utils';

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredFAQs = faqItems.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
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
            <h1 className="text-warm-cream mb-6">Frequently Asked Questions</h1>
            <p className="text-fresh-mint/80 text-lg">
              Find answers to common questions about GoliWala Gondal
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search & FAQ */}
      <section className="py-20 sm:py-28 bg-deep-forest">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            {/* Search Bar */}
            <div className="mb-12">
              <input
                type="text"
                placeholder="Search questions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-6 py-4 bg-rich-green/20 border border-rich-green/30 rounded-2xl text-fresh-mint placeholder-fresh-mint/40 focus:outline-none focus:border-lime-green transition-colors text-lg"
              />
            </div>

            {/* FAQ Accordion */}
            <div className="space-y-4">
              {filteredFAQs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="bg-rich-green/10 border border-rich-green/20 rounded-2xl overflow-hidden"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-rich-green/20 transition-colors"
                    aria-expanded={openIndex === index}
                  >
                    <span className="text-warm-cream font-semibold pr-4">{faq.question}</span>
                    <span className="flex-shrink-0 text-lime-green">
                      {openIndex === index ? (
                        <ChevronUp className="w-5 h-5" />
                      ) : (
                        <ChevronDown className="w-5 h-5" />
                      )}
                    </span>
                  </button>
                  
                  <motion.div
                    initial={false}
                    animate={{
                      height: openIndex === index ? 'auto' : 0,
                      opacity: openIndex === index ? 1 : 0
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5 pt-2">
                      <p className="text-fresh-mint/70 leading-relaxed">{faq.answer}</p>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>

            {filteredFAQs.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-12"
              >
                <div className="text-6xl mb-4">🤔</div>
                <h3 className="text-warm-cream font-semibold mb-2">No results found</h3>
                <p className="text-fresh-mint/60">Try searching with different keywords</p>
              </motion.div>
            )}

            {/* Contact CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mt-16 text-center p-8 bg-rich-green/10 border border-rich-green/20 rounded-2xl"
            >
              <h3 className="text-warm-cream font-semibold mb-4">Still have questions?</h3>
              <p className="text-fresh-mint/70 mb-6">
                We're here to help! Reach out to us directly.
              </p>
              <a
                href="https://wa.me/916355477668"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-8 py-4 bg-lime-green text-deep-forest font-bold rounded-full hover:bg-warm-cream transition-colors"
              >
                <span>WhatsApp Us</span>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
