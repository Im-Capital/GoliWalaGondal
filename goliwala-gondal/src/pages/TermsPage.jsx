import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function TermsPage() {
  return (
    <div className="min-h-screen pt-20">
      <section className="py-20 sm:py-28 bg-gradient-to-br from-deep-forest via-dark-emerald to-near-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-warm-cream mb-8">Terms and Conditions</h1>
            
            <div className="prose prose-invert max-w-none">
              <p className="text-fresh-mint/70 mb-6">
                Last updated: {new Date().toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>

              <p className="text-fresh-mint/70 mb-8">
                Please read these Terms and Conditions carefully before using the GoliWala Gondal website or services.
              </p>

              <h2 className="text-warm-cream font-semibold text-xl mt-8 mb-4">1. Acceptance of Terms</h2>
              <p className="text-fresh-mint/70 mb-6">
                By accessing and using this website, you accept and agree to be bound by these Terms and Conditions. 
                If you do not agree to these terms, please do not use this website.
              </p>

              <h2 className="text-warm-cream font-semibold text-xl mt-8 mb-4">2. Website Usage</h2>
              <p className="text-fresh-mint/70 mb-6">
                You agree to use this website only for lawful purposes and in a way that does not infringe the rights of, 
                restrict, or inhibit anyone else's use and enjoyment of the website.
              </p>

              <h2 className="text-warm-cream font-semibold text-xl mt-8 mb-4">3. Menu and Pricing</h2>
              <ul className="list-disc list-inside text-fresh-mint/70 space-y-2 mb-6">
                <li>Menu items, prices, and availability are subject to change without prior notice</li>
                <li>All prices should be confirmed at the outlet before ordering</li>
                <li>We reserve the right to refuse service to anyone</li>
                <li>Images shown on the website are for representation purposes only</li>
              </ul>

              <h2 className="text-warm-cream font-semibold text-xl mt-8 mb-4">4. Event Bookings</h2>
              <ul className="list-disc list-inside text-fresh-mint/70 space-y-2 mb-6">
                <li>Event packages and pricing are confirmed individually by the Gondal branch</li>
                <li>Advance booking is required for all events</li>
                <li>Cancellation policies apply as communicated at the time of booking</li>
                <li>Availability is subject to confirmation by the outlet</li>
              </ul>

              <h2 className="text-warm-cream font-semibold text-xl mt-8 mb-4">5. Contact Information</h2>
              <p className="text-fresh-mint/70 mb-6">
                The contact information provided on this website is for the GoliWala Gondal branch only. 
                For other branches, please contact the respective outlets directly.
              </p>

              <h2 className="text-warm-cream font-semibold text-xl mt-8 mb-4">6. Intellectual Property</h2>
              <p className="text-fresh-mint/70 mb-6">
                All content on this website, including text, graphics, logos, and images, is the property of 
                GoliWala Gondal or its content suppliers and is protected by applicable intellectual property laws.
              </p>

              <h2 className="text-warm-cream font-semibold text-xl mt-8 mb-4">7. Limitation of Liability</h2>
              <p className="text-fresh-mint/70 mb-6">
                GoliWala Gondal shall not be liable for any indirect, incidental, special, consequential, or punitive 
                damages resulting from your use of or inability to use this website or our services.
              </p>

              <h2 className="text-warm-cream font-semibold text-xl mt-8 mb-4">8. Third-Party Links</h2>
              <p className="text-fresh-mint/70 mb-6">
                This website may contain links to third-party websites (such as Google Maps, WhatsApp, Instagram). 
                We are not responsible for the content or practices of any linked websites.
              </p>

              <h2 className="text-warm-cream font-semibold text-xl mt-8 mb-4">9. Modifications to Terms</h2>
              <p className="text-fresh-mint/70 mb-6">
                We reserve the right to modify these Terms and Conditions at any time. Changes will be effective 
                immediately upon posting to this website. Your continued use of the website constitutes acceptance 
                of the modified terms.
              </p>

              <h2 className="text-warm-cream font-semibold text-xl mt-8 mb-4">10. Governing Law</h2>
              <p className="text-fresh-mint/70 mb-6">
                These Terms and Conditions shall be governed by and construed in accordance with the laws of India, 
                and any disputes shall be subject to the exclusive jurisdiction of the courts in Gondal, Gujarat.
              </p>

              <h2 className="text-warm-cream font-semibold text-xl mt-8 mb-4">11. Contact Information</h2>
              <div className="bg-rich-green/10 border border-rich-green/20 rounded-xl p-6 mb-8">
                <p className="text-fresh-mint/80 mb-2"><strong>GoliWala Gondal</strong></p>
                <p className="text-fresh-mint/70 mb-2">Bhuvneshwari Road, Opp. Shri Ram Deri Farm</p>
                <p className="text-fresh-mint/70 mb-2">Gondal, Gujarat – 360311</p>
                <p className="text-fresh-mint/70">Phone: +91 63554 77668</p>
              </div>

              <Link to="/" className="inline-block text-lime-green hover:underline mt-8">
                ← Back to Home
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
