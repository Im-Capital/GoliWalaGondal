import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { experienceSteps, branchConfig } from '../data/config';

export default function ExperiencePage() {
  const experiences = [
    {
      icon: "🎯",
      title: "Choose Your Flavour",
      description: "Browse our extensive menu of classic goli sodas, flavoured sodas, bubble sodas, mojitos, and mocktails. Each drink is crafted to deliver a unique taste experience.",
      details: ["15+ flavour options", "Customizable sweetness", "Seasonal specials"]
    },
    {
      icon: "🫧",
      title: "The Marble Pop",
      description: "Watch as your drink is prepared and served in the iconic glass bottle with marble closure. The moment of opening creates anticipation and theatre.",
      details: ["Classic glass bottles", "Marble closure system", "Satisfying pop sound"]
    },
    {
      icon: "✨",
      title: "The First Fizz",
      description: "That first rush of bubbles, the refreshing taste, and the cooling sensation—every sip is designed to transport you back to simpler times.",
      details: ["Perfect carbonation", "Fresh ingredients", "Balanced flavours"]
    },
    {
      icon: "📸",
      title: "Share the Moment",
      description: "Capture your GoliWala experience, share it with friends, and create memories that last. Our vibrant drinks are made for the gram.",
      details: ["Instagram-worthy presentation", "Colourful aesthetics", "Memorable moments"]
    },
    {
      icon: "🌙",
      title: "Evening Hangout",
      description: "Whether it's a quick stop after work or a late-night catch-up with friends, our Gondal outlet is your perfect evening destination.",
      details: ["Open till midnight", "Comfortable seating", "Great atmosphere"]
    },
    {
      icon: "👨‍👩‍👧‍👦",
      title: "Family Refreshment",
      description: "All-age friendly beverages in a welcoming environment. Bring your family for a refreshing experience everyone can enjoy.",
      details: ["Alcohol-free options", "Kid-friendly drinks", "Family seating"]
    },
    {
      icon: "🎉",
      title: "Party Energy",
      description: "Planning a celebration? Our event packages bring the fizz to your special occasions with custom beverage solutions.",
      details: ["Event packages available", "Custom counters", "Professional service"]
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 sm:py-28 bg-gradient-to-br from-deep-forest via-dark-emerald to-near-black overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
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
            <span className="inline-block px-4 py-1 bg-lime-green/20 text-lime-green text-sm font-medium rounded-full mb-6">
              The GoliWala Experience
            </span>
            <h1 className="text-warm-cream mb-6">Open the Goli. Start the Story.</h1>
            <p className="text-fresh-mint/80 text-lg leading-relaxed">
              The first crack of the marble, the rush of bubbles, and that first refreshing sip—GoliWala is made to be experienced.
            </p>
          </motion.div>
        </div>
      </section>

      {/* How It Works - 3 Steps */}
      <section className="py-20 sm:py-28 bg-deep-forest">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-warm-cream mb-4">How It Works</h2>
            <p className="text-fresh-mint/70 max-w-2xl mx-auto">
              Three simple steps to your perfect fizz moment
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
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

      {/* Detailed Experiences */}
      <section className="py-20 sm:py-28 bg-gradient-to-b from-dark-emerald to-near-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-warm-cream mb-4">Every Visit is an Experience</h2>
            <p className="text-fresh-mint/70 max-w-2xl mx-auto">
              Discover what makes GoliWala Gondal special
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group p-8 bg-rich-green/10 border border-rich-green/20 rounded-2xl hover:border-lime-green/40 transition-all duration-300"
              >
                <div className="text-5xl mb-6">{exp.icon}</div>
                <h3 className="text-warm-cream font-semibold text-xl mb-4">{exp.title}</h3>
                <p className="text-fresh-mint/60 mb-6 leading-relaxed">{exp.description}</p>
                <ul className="space-y-2">
                  {exp.details.map((detail, i) => (
                    <li key={i} className="flex items-center space-x-2 text-fresh-mint/70 text-sm">
                      <div className="w-1.5 h-1.5 bg-lime-green rounded-full" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Bottle Animation Placeholder */}
      <section className="py-20 sm:py-28 bg-near-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="aspect-video bg-gradient-to-br from-rich-green/20 to-deep-forest/50 border border-rich-green/30 rounded-3xl flex items-center justify-center mb-8">
              <div className="text-center p-8">
                <div className="text-7xl mb-6">🍾</div>
                <h3 className="text-warm-cream font-semibold text-2xl mb-4">Experience the Pop</h3>
                <p className="text-fresh-mint/60 mb-6">
                  Visit us to experience the iconic marble-opening moment
                </p>
                <Link
                  to="/visit-us"
                  className="inline-flex items-center space-x-2 px-8 py-4 bg-lime-green text-deep-forest font-bold rounded-full hover:bg-warm-cream transition-all duration-300 hover:scale-105"
                >
                  <span>Visit Our Outlet</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 sm:py-28 bg-gradient-to-br from-lime-green to-rich-green">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-deep-forest mb-4">Ready to Create Your Moment?</h2>
            <p className="text-deep-forest/80 text-lg mb-8 max-w-2xl mx-auto">
              Come experience the magic of GoliWala at our Gondal outlet
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/menu"
                className="px-8 py-4 bg-deep-forest text-warm-cream font-bold rounded-full hover:bg-near-black transition-colors"
              >
                View Menu
              </Link>
              <a
                href={branchConfig.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-8 py-4 bg-white/20 backdrop-blur text-deep-forest font-semibold rounded-full hover:bg-white/30 transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                <span>WhatsApp Us</span>
              </a>
              <Link
                to="/visit-us"
                className="px-8 py-4 bg-white/20 backdrop-blur text-deep-forest font-semibold rounded-full hover:bg-white/30 transition-colors"
              >
                Get Directions
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
