import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function PrivacyPolicyPage() {
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
            <h1 className="text-warm-cream mb-8">Privacy Policy</h1>
            
            <div className="prose prose-invert max-w-none">
              <p className="text-fresh-mint/70 mb-6">
                Last updated: {new Date().toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>

              <p className="text-fresh-mint/70 mb-8">
                GoliWala Gondal ("we," "our," or "us") respects your privacy and is committed to protecting your personal information. 
                This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website or contact us.
              </p>

              <h2 className="text-warm-cream font-semibold text-xl mt-8 mb-4">1. Information We Collect</h2>
              <p className="text-fresh-mint/70 mb-4">
                We may collect the following types of information:
              </p>
              <ul className="list-disc list-inside text-fresh-mint/70 space-y-2 mb-6">
                <li>Personal information you provide when contacting us (name, phone number, email)</li>
                <li>Information collected through WhatsApp communications</li>
                <li>Website usage data (through cookies and analytics)</li>
              </ul>

              <h2 className="text-warm-cream font-semibold text-xl mt-8 mb-4">2. How We Use Your Information</h2>
              <p className="text-fresh-mint/70 mb-4">We use your information to:</p>
              <ul className="list-disc list-inside text-fresh-mint/70 space-y-2 mb-6">
                <li>Respond to your enquiries and questions</li>
                <li>Provide customer service and support</li>
                <li>Send important updates about our services</li>
                <li>Improve our website and services</li>
              </ul>

              <h2 className="text-warm-cream font-semibold text-xl mt-8 mb-4">3. Information Sharing</h2>
              <p className="text-fresh-mint/70 mb-6">
                We do not sell, trade, or rent your personal information to third parties. We may share your information only:
              </p>
              <ul className="list-disc list-inside text-fresh-mint/70 space-y-2 mb-6">
                <li>With your consent</li>
                <li>To comply with legal obligations</li>
                <li>To protect our rights and safety</li>
              </ul>

              <h2 className="text-warm-cream font-semibold text-xl mt-8 mb-4">4. Data Security</h2>
              <p className="text-fresh-mint/70 mb-6">
                We implement appropriate security measures to protect your personal information. However, no method of transmission 
                over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
              </p>

              <h2 className="text-warm-cream font-semibold text-xl mt-8 mb-4">5. Your Rights</h2>
              <p className="text-fresh-mint/70 mb-4">You have the right to:</p>
              <ul className="list-disc list-inside text-fresh-mint/70 space-y-2 mb-6">
                <li>Access your personal information</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your information</li>
                <li>Opt-out of marketing communications</li>
              </ul>

              <h2 className="text-warm-cream font-semibold text-xl mt-8 mb-4">6. Contact Us</h2>
              <p className="text-fresh-mint/70 mb-6">
                If you have questions about this Privacy Policy, please contact us at:
              </p>
              <div className="bg-rich-green/10 border border-rich-green/20 rounded-xl p-6 mb-8">
                <p className="text-fresh-mint/80 mb-2"><strong>GoliWala Gondal</strong></p>
                <p className="text-fresh-mint/70 mb-2">Bhuvneshwari Road, Opp. Shri Ram Deri Farm</p>
                <p className="text-fresh-mint/70 mb-2">Gondal, Gujarat – 360311</p>
                <p className="text-fresh-mint/70">Phone: +91 63554 77668</p>
              </div>

              <h2 className="text-warm-cream font-semibold text-xl mt-8 mb-4">7. Changes to This Policy</h2>
              <p className="text-fresh-mint/70 mb-6">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new 
                Privacy Policy on this page and updating the "Last updated" date.
              </p>

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
