import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { PartyPopper, MessageCircle, Phone, Mail, Calendar, Users, Clock, MapPin, Check, ArrowRight } from 'lucide-react';
import { branchConfig, eventPackages } from '../data/config';

export default function PartiesPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    eventType: '',
    eventDate: '',
    guests: '',
    preferredTime: '',
    location: '',
    message: '',
    consent: false
  });

  const [formStatus, setFormStatus] = useState('idle'); // idle, submitting, success, error

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.consent) {
      alert('Please agree to the terms before submitting.');
      return;
    }

    setFormStatus('submitting');

    // Generate WhatsApp message
    const whatsappMessage = `Hello GoliWala Gondal! I would like to enquire about an event.
    
Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email || 'N/A'}
Event Type: ${formData.eventType || 'N/A'}
Event Date: ${formData.eventDate || 'N/A'}
Expected Guests: ${formData.guests || 'N/A'}
Preferred Time: ${formData.preferredTime || 'N/A'}
Location: ${formData.location || 'N/A'}
Message: ${formData.message || 'N/A'}`;

    // Redirect to WhatsApp
    const whatsappUrl = `https://wa.me/916355477668?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');
    
    setFormStatus('success');
    setFormData({
      name: '',
      phone: '',
      email: '',
      eventType: '',
      eventDate: '',
      guests: '',
      preferredTime: '',
      location: '',
      message: '',
      consent: false
    });
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const eventTypes = [
    'Birthday Party',
    'School/College Gathering',
    'Family Function',
    'Small Celebration',
    'Corporate Event',
    'Store Opening',
    'Community Event',
    'Evening Hangout',
    'Other'
  ];

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
            <PartyPopper className="w-16 h-16 text-lime-green mx-auto mb-6" />
            <h1 className="text-warm-cream mb-6">Bring the Fizz to Your Celebration</h1>
            <p className="text-fresh-mint/80 text-lg leading-relaxed">
              Make your special occasions unforgettable with GoliWala's custom beverage solutions. 
              From intimate gatherings to grand celebrations, we bring the fizz to you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Event Packages */}
      <section className="py-20 sm:py-28 bg-deep-forest">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-warm-cream mb-4">Our Event Packages</h2>
            <p className="text-fresh-mint/70 max-w-2xl mx-auto">
              Choose from our curated packages or create a custom solution for your event
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {eventPackages.map((pkg, index) => (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-8 bg-rich-green/10 border border-rich-green/20 rounded-2xl hover:border-lime-green/40 transition-all duration-300"
              >
                <h3 className="text-warm-cream font-semibold text-2xl mb-3">{pkg.title}</h3>
                <p className="text-fresh-mint/70 mb-6">{pkg.description}</p>
                
                <ul className="space-y-3 mb-6">
                  {pkg.includes.map((item, i) => (
                    <li key={i} className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-lime-green flex-shrink-0 mt-0.5" />
                      <span className="text-fresh-mint/80">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-6 border-t border-rich-green/20">
                  <p className="text-lime-green font-bold text-lg mb-4">{pkg.priceDisplay}</p>
                  <a
                    href="#enquiry-form"
                    className="inline-flex items-center space-x-2 px-6 py-3 bg-lime-green text-deep-forest font-semibold rounded-full hover:bg-warm-cream transition-colors w-full justify-center"
                  >
                    <span>Enquire Now</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-fresh-mint/50 text-sm mt-8"
          >
            Event packages, availability, and pricing are confirmed individually by the Gondal branch.
          </motion.p>
        </div>
      </section>

      {/* Suitable Occasions */}
      <section className="py-20 sm:py-28 bg-gradient-to-b from-dark-emerald to-near-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-warm-cream mb-4">Perfect For Every Occasion</h2>
            <p className="text-fresh-mint/70 max-w-2xl mx-auto">
              Whatever you're celebrating, we've got the fizz to match
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {eventTypes.map((type, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="p-6 bg-rich-green/10 border border-rich-green/20 rounded-2xl text-center hover:border-lime-green/40 transition-colors"
              >
                <div className="text-3xl mb-3">🎉</div>
                <p className="text-fresh-mint/80 text-sm font-medium">{type}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enquiry Form */}
      <section id="enquiry-form" className="py-20 sm:py-28 bg-near-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <div className="text-center mb-12">
              <h2 className="text-warm-cream mb-4">Send Us an Enquiry</h2>
              <p className="text-fresh-mint/70">
                Fill out the form below and we'll get back to you on WhatsApp
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6 p-8 bg-rich-green/10 border border-rich-green/20 rounded-2xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-fresh-mint/80 text-sm font-medium mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-rich-green/20 border border-rich-green/30 rounded-xl text-fresh-mint placeholder-fresh-mint/40 focus:outline-none focus:border-lime-green transition-colors"
                    placeholder="Your full name"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block text-fresh-mint/80 text-sm font-medium mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-rich-green/20 border border-rich-green/30 rounded-xl text-fresh-mint placeholder-fresh-mint/40 focus:outline-none focus:border-lime-green transition-colors"
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-fresh-mint/80 text-sm font-medium mb-2">
                    Email (Optional)
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-rich-green/20 border border-rich-green/30 rounded-xl text-fresh-mint placeholder-fresh-mint/40 focus:outline-none focus:border-lime-green transition-colors"
                    placeholder="your@email.com"
                  />
                </div>

                {/* Event Type */}
                <div>
                  <label htmlFor="eventType" className="block text-fresh-mint/80 text-sm font-medium mb-2">
                    Event Type
                  </label>
                  <select
                    id="eventType"
                    name="eventType"
                    value={formData.eventType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-rich-green/20 border border-rich-green/30 rounded-xl text-fresh-mint focus:outline-none focus:border-lime-green transition-colors"
                  >
                    <option value="">Select event type</option>
                    {eventTypes.map((type) => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>

                {/* Event Date */}
                <div>
                  <label htmlFor="eventDate" className="block text-fresh-mint/80 text-sm font-medium mb-2">
                    Event Date
                  </label>
                  <input
                    type="date"
                    id="eventDate"
                    name="eventDate"
                    value={formData.eventDate}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-rich-green/20 border border-rich-green/30 rounded-xl text-fresh-mint focus:outline-none focus:border-lime-green transition-colors"
                  />
                </div>

                {/* Guests */}
                <div>
                  <label htmlFor="guests" className="block text-fresh-mint/80 text-sm font-medium mb-2">
                    Expected Guests
                  </label>
                  <input
                    type="number"
                    id="guests"
                    name="guests"
                    value={formData.guests}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-rich-green/20 border border-rich-green/30 rounded-xl text-fresh-mint placeholder-fresh-mint/40 focus:outline-none focus:border-lime-green transition-colors"
                    placeholder="Number of guests"
                  />
                </div>

                {/* Preferred Time */}
                <div>
                  <label htmlFor="preferredTime" className="block text-fresh-mint/80 text-sm font-medium mb-2">
                    Preferred Time
                  </label>
                  <input
                    type="text"
                    id="preferredTime"
                    name="preferredTime"
                    value={formData.preferredTime}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-rich-green/20 border border-rich-green/30 rounded-xl text-fresh-mint placeholder-fresh-mint/40 focus:outline-none focus:border-lime-green transition-colors"
                    placeholder="e.g., Evening, 6 PM - 9 PM"
                  />
                </div>

                {/* Location */}
                <div>
                  <label htmlFor="location" className="block text-fresh-mint/80 text-sm font-medium mb-2">
                    Event Location
                  </label>
                  <input
                    type="text"
                    id="location"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-rich-green/20 border border-rich-green/30 rounded-xl text-fresh-mint placeholder-fresh-mint/40 focus:outline-none focus:border-lime-green transition-colors"
                    placeholder="Venue address or area"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-fresh-mint/80 text-sm font-medium mb-2">
                  Additional Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 bg-rich-green/20 border border-rich-green/30 rounded-xl text-fresh-mint placeholder-fresh-mint/40 focus:outline-none focus:border-lime-green transition-colors resize-none"
                  placeholder="Tell us more about your event requirements..."
                />
              </div>

              {/* Consent */}
              <div className="flex items-start space-x-3">
                <input
                  type="checkbox"
                  id="consent"
                  name="consent"
                  checked={formData.consent}
                  onChange={handleChange}
                  className="mt-1 w-4 h-4 rounded border-rich-green/30 bg-rich-green/20 text-lime-green focus:ring-lime-green focus:ring-offset-0"
                />
                <label htmlFor="consent" className="text-fresh-mint/60 text-sm">
                  I agree to be contacted regarding my enquiry. Your information will only be used for this purpose.
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={formStatus === 'submitting'}
                className="w-full px-8 py-4 bg-lime-green text-deep-forest font-bold rounded-full hover:bg-warm-cream transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
              >
                {formStatus === 'submitting' ? (
                  <span>Processing...</span>
                ) : formStatus === 'success' ? (
                  <>
                    <Check className="w-5 h-5" />
                    <span>Redirecting to WhatsApp...</span>
                  </>
                ) : (
                  <>
                    <MessageCircle className="w-5 h-5" />
                    <span>Send Enquiry on WhatsApp</span>
                  </>
                )}
              </button>
            </form>

            {formStatus === 'success' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-6 p-6 bg-lime-green/20 border border-lime-green/30 rounded-2xl text-center"
              >
                <p className="text-lime-green font-medium">
                  Thank you! You'll be redirected to WhatsApp to complete your enquiry.
                </p>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 sm:py-28 bg-gradient-to-br from-lime-green to-rich-green">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-deep-forest mb-4">Prefer to Talk Directly?</h2>
            <p className="text-deep-forest/80 text-lg mb-8">
              Reach out to us directly for immediate assistance
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href={`tel:${branchConfig.phone.replace(/\s+/g, '')}`}
                className="inline-flex items-center space-x-2 px-8 py-4 bg-deep-forest text-warm-cream font-bold rounded-full hover:bg-near-black transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span>Call Now</span>
              </a>
              <a
                href={branchConfig.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-8 py-4 bg-white/20 backdrop-blur text-deep-forest font-semibold rounded-full hover:bg-white/30 transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                <span>WhatsApp Us</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
