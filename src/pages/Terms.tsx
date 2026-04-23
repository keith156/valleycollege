import { motion } from 'motion/react';

export default function Terms() {
  return (
    <div className="flex flex-col bg-gray-50 min-h-screen">
      <div className="bg-primary text-white py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold">Terms of Service</h1>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-4 py-16 bg-white my-12 rounded-3xl shadow-sm border border-gray-100 prose prose-blue">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h2 className="text-2xl font-bold mb-6">1. Acceptance of Terms</h2>
          <p className="mb-6 text-gray-600 leading-relaxed">
            By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.
          </p>
          
          <h2 className="text-2xl font-bold mb-6">2. Use License</h2>
          <p className="mb-6 text-gray-600 leading-relaxed">
            Permission is granted to temporarily download one copy of the materials (information or software) on Valley College's website for personal, non-commercial transitory viewing only.
          </p>
          
          <h2 className="text-2xl font-bold mb-6">3. Disclaimer</h2>
          <p className="mb-6 text-gray-600 leading-relaxed">
            The materials on Valley College's website are provided on an 'as is' basis. Valley College makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
          </p>
          
          <h2 className="text-2xl font-bold mb-6">4. Limitations</h2>
          <p className="mb-6 text-gray-600 leading-relaxed">
            In no event shall Valley College or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Valley College's website.
          </p>
          
          <h2 className="text-2xl font-bold mb-6">5. Revisions and Errata</h2>
          <p className="mb-6 text-gray-600 leading-relaxed">
            The materials appearing on Valley College's website could include technical, typographical, or photographic errors. Valley College does not warrant that any of the materials on its website are accurate, complete or current.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
