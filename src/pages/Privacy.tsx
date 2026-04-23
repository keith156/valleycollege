import { motion } from 'motion/react';

export default function Privacy() {
  return (
    <div className="flex flex-col bg-gray-50 min-h-screen">
      <div className="bg-primary text-white py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold">Privacy Policy</h1>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-4 py-16 bg-white my-12 rounded-3xl shadow-sm border border-gray-100 prose prose-blue">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h2 className="text-2xl font-bold mb-6">1. Information Collection</h2>
          <p className="mb-6 text-gray-600 leading-relaxed">
            We collect information when you fill out our contact form or apply for admission. This information may include your name, email address, and phone number.
          </p>
          
          <h2 className="text-2xl font-bold mb-6">2. Information Use</h2>
          <p className="mb-6 text-gray-600 leading-relaxed">
            The information we collect from you may be used to personalize your experience, improve our website, or send periodic emails regarding your inquiry or application.
          </p>
          
          <h2 className="text-2xl font-bold mb-6">3. Data Protection</h2>
          <p className="mb-6 text-gray-600 leading-relaxed">
            We implement a variety of security measures to maintain the safety of your personal information when you enter, submit, or access your personal information.
          </p>
          
          <h2 className="text-2xl font-bold mb-6">4. Cookies</h2>
          <p className="mb-6 text-gray-600 leading-relaxed">
            We may use cookies to understand and save your preferences for future visits and compile aggregate data about site traffic and site interaction.
          </p>
          
          <h2 className="text-2xl font-bold mb-6">5. Disclosure to Third Parties</h2>
          <p className="mb-6 text-gray-600 leading-relaxed">
            We do not sell, trade, or otherwise transfer to outside parties your personally identifiable information. This does not include trusted third parties who assist us in operating our website or conducting our business, so long as those parties agree to keep this information confidential.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
