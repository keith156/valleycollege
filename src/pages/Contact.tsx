import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { motion } from 'motion/react';

export default function Contact() {
  return (
    <div className="flex flex-col bg-gray-50 pb-20">
      {/* Page Header */}
      <div className="relative bg-primary text-white py-20 lg:py-24 overflow-hidden">
        <div className="absolute inset-0">
          <div className="w-full h-full bg-gray-900" />
          <img
            src="/images/IMG_20260401_183107_670.jpg"
            alt="Contact Valley College"
            className="absolute inset-0 w-full h-full object-cover opacity-80"
            referrerPolicy="no-referrer"
            decoding="async"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 drop-shadow-md">Contact Us</h1>
            <p className="text-lg lg:text-xl text-blue-100 max-w-2xl mx-auto drop-shadow-sm">
              We'd love to hear from you. Get in touch with Valley College.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Contact Information */}
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-8">
            <div>
              <h2 className="text-2xl lg:text-3xl font-bold mb-6">Get in Touch</h2>
              <p className="text-gray-600 text-base lg:text-lg leading-relaxed">
                Whether you have a question about admissions, academics, or anything else, our team is ready to answer all your questions.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-10 h-10 bg-blue-50 text-primary rounded-xl flex items-center justify-center mb-6">
                  <MapPin size={20} />
                </div>
                <h3 className="font-bold text-gray-900 mb-2 text-base lg:text-lg">Our Location</h3>
                <p className="text-gray-600">
                  Bushenyi District,<br />
                  Western Uganda
                </p>
              </div>

              <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-10 h-10 bg-blue-50 text-primary rounded-xl flex items-center justify-center mb-6">
                  <Phone size={20} />
                </div>
                <h3 className="font-bold text-gray-900 mb-2 text-base lg:text-lg">Phone Numbers</h3>
                <p className="text-gray-600">
                  +256 (0) 123 456 789<br />
                  +256 (0) 987 654 321
                </p>
              </div>

              <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-10 h-10 bg-blue-50 text-primary rounded-xl flex items-center justify-center mb-6">
                  <Mail size={20} />
                </div>
                <h3 className="font-bold text-gray-900 mb-2 text-base lg:text-lg">Email Address</h3>
                <p className="text-gray-600">
                  info@valleycollege.edu.ug<br />
                  admissions@valleycollege.edu.ug
                </p>
              </div>

              <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-10 h-10 bg-blue-50 text-primary rounded-xl flex items-center justify-center mb-6">
                  <Clock size={20} />
                </div>
                <h3 className="font-bold text-gray-900 mb-2 text-base lg:text-lg">Office Hours</h3>
                <p className="text-gray-600">
                  Mon - Fri: 8:00 AM - 5:00 PM<br />
                  Sat: 9:00 AM - 1:00 PM
                </p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-white p-8 lg:p-10 rounded-3xl shadow-xl border border-gray-100">
            <h2 className="text-2xl lg:text-3xl font-bold mb-8">Send us a Message</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all bg-gray-50 focus:bg-white" placeholder="John" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all bg-gray-50 focus:bg-white" placeholder="Doe" />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                <input type="email" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all bg-gray-50 focus:bg-white" placeholder="john@example.com" />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all bg-gray-50 focus:bg-white text-gray-700">
                  <option>General Inquiry</option>
                  <option>Admissions</option>
                  <option>Academics</option>
                  <option>Alumni</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea rows={5} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all bg-gray-50 focus:bg-white resize-none" placeholder="How can we help you?"></textarea>
              </div>

              <button type="button" className="w-full bg-primary text-white hover:bg-primary/90 py-4 rounded-xl font-bold transition-all hover:-translate-y-1 shadow-md flex items-center justify-center gap-2 text-lg">
                <Send size={20} /> Send Message
              </button>
            </form>
          </motion.div>

        </div>

        {/* Map Placeholder */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-20 rounded-3xl overflow-hidden shadow-sm border border-gray-200 h-[400px] bg-gray-200 relative group">
          <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-500 z-10 bg-gray-100/80 backdrop-blur-sm group-hover:bg-transparent group-hover:backdrop-blur-none transition-all duration-500">
            <MapPin size={48} className="mb-4 text-primary" />
            <p className="font-medium text-lg">Interactive Map Placeholder</p>
            <p className="text-sm">Bushenyi, Uganda</p>
          </div>
          <img 
            src="/images/IMG_20260401_183135_616.jpg" 
            alt="Map location" 
            className="w-full h-full object-cover opacity-50 group-hover:opacity-100 transition-opacity duration-500"
            referrerPolicy="no-referrer"
            loading="lazy"
            decoding="async"
          />
        </motion.div>

      </div>
    </div>
  );
}
