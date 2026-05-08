import React from 'react';
import { MapPin, Phone, Mail, Clock, Send, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { SEO } from '../components/SEO';

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isSubmitted, setIsSubmitted] = React.useState(false);
  const [formData, setFormData] = React.useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: 'General Inquiry',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const submissionData = {
      access_key: "80d4b6ca-4390-4d82-88dc-66230d20c01f",
      name: `${formData.firstName} ${formData.lastName}`,
      email: formData.email,
      subject: formData.subject,
      message: formData.message,
      from_name: "Valley College Website Contact Form",
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(submissionData),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          subject: 'General Inquiry',
          message: ''
        });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Something went wrong. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col bg-gray-50">
      <SEO 
        title="Contact Us - Location & Phone"
        description="Get in touch with Valley College Secondary School, Bushenyi Municipality, Western Uganda. Call +256 782 679 985, email info@valleycollege.edu.ug, or send us a message. Visit our campus on the Mbarara-Kasese Highway."
        keywords="Contact Valley College, Valley College phone number, Valley College Bushenyi location, school address Bushenyi, Valley College email, directions Valley College, Bushenyi Municipality school"
        path="/contact"
      />
      {/* Page Header */}
      <div className="relative bg-primary text-white py-20 lg:py-24 overflow-hidden">
        <div className="absolute inset-0">
          <div className="w-full h-full bg-gray-900" />
          <img
            src="/images/IMG_20260401_183107_670.webp"
            alt="Contact Valley College"
            className="absolute inset-0 w-full h-full object-cover opacity-80"
            referrerPolicy="no-referrer"
            decoding="async"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gray-900/30" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary from-10% via-primary/80 via-50% to-transparent" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-4xl">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 drop-shadow-md">Contact Us</h1>
            <p className="text-lg lg:text-xl text-white drop-shadow-sm">
              We'd love to hear from you. Get in touch with Valley College Secondary School, Bushenyi.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Contact Information */}
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="flex flex-col space-y-8 h-full">
            <div>
              <h2 className="text-2xl lg:text-3xl font-bold mb-6">Get in Touch</h2>
              <p className="text-gray-600 text-base lg:text-lg leading-relaxed">
                Whether you have a question about admissions, academics, or campus life, our team is ready to assist you.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 flex-grow">
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
                  +256 782 679 985<br />
                  +256 701 679 985
                </p>
              </div>

              <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-10 h-10 bg-blue-50 text-primary rounded-xl flex items-center justify-center mb-6">
                  <Mail size={20} />
                </div>
                <h3 className="font-bold text-gray-900 mb-2 text-base lg:text-lg">Email Address</h3>
                <p className="text-gray-600 break-words">
                  info@valleycollege.edu.ug
                </p>
              </div>

              <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-10 h-10 bg-blue-50 text-primary rounded-xl flex items-center justify-center mb-6">
                  <Clock size={20} />
                </div>
                <h3 className="font-bold text-gray-900 mb-2 text-base lg:text-lg">Office Hours</h3>
                <p className="text-gray-600">
                  Mon - Fri: 8 AM - 5 PM
                </p>
              </div>

              {/* Small & Simple WhatsApp Card */}
              <div className="sm:col-span-2 bg-green-50/50 p-6 rounded-2xl border border-green-100 hover:shadow-md transition-shadow flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-4 text-center sm:text-left">
                  <div className="w-12 h-12 bg-green-600 text-white rounded-xl flex items-center justify-center shrink-0 shadow-lg shadow-green-200">
                    <MessageSquare size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Chat with Admissions</h3>
                    <p className="text-sm text-gray-600">Get instant support on WhatsApp</p>
                  </div>
                </div>
                <a 
                  href="https://wa.me/256782679985" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-6 py-3 bg-green-600 text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-green-700 transition-all shadow-md active:scale-95"
                >
                  <MessageSquare size={18} /> Chat Now
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-white p-8 lg:p-10 rounded-3xl shadow-xl border border-gray-100">
            {isSubmitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                  <Send size={40} />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Message Sent!</h2>
                <p className="text-gray-600 text-lg mb-8 max-w-md">
                  Thank you for reaching out. We have received your message and will get back to you as soon as possible.
                </p>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="text-primary font-bold hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <>
                <h2 className="text-2xl lg:text-3xl font-bold mb-8">Send us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                      <input 
                        type="text" 
                        required
                        value={formData.firstName}
                        onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all bg-gray-50 focus:bg-white" 
                        placeholder="John" 
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                      <input 
                        type="text" 
                        required
                        value={formData.lastName}
                        onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all bg-gray-50 focus:bg-white" 
                        placeholder="Doe" 
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                    <input 
                      type="email" 
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all bg-gray-50 focus:bg-white" 
                      placeholder="john@example.com" 
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                    <select 
                      value={formData.subject}
                      onChange={(e) => setFormData({...formData, subject: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all bg-gray-50 focus:bg-white text-gray-700"
                    >
                      <option>General Inquiry</option>
                      <option>Admissions</option>
                      <option>Academics</option>
                      <option>Alumni</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                    <textarea 
                      rows={5} 
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all bg-gray-50 focus:bg-white resize-none" 
                      placeholder="How can we help you?"
                    ></textarea>
                  </div>

                  <div className="flex items-start gap-3 p-1">
                    <input 
                      type="checkbox" 
                      id="terms" 
                      required 
                      className="mt-1.5 h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary transition-all cursor-pointer" 
                    />
                    <label htmlFor="terms" className="text-sm text-gray-600 leading-relaxed cursor-pointer select-none">
                      I agree to the <Link to="/terms" className="text-primary hover:underline font-semibold">Terms of Service</Link> and <Link to="/privacy" className="text-primary hover:underline font-semibold">Privacy Policy</Link>. I understand that Valley College will process my data according to these terms.
                    </label>
                  </div>

                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-primary text-white hover:bg-primary/90 py-4 rounded-xl font-bold transition-all hover:-translate-y-1 shadow-md flex items-center justify-center gap-2 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                      <>
                        <Send size={20} /> Send Message
                      </>
                    )}
                  </button>
                </form>
              </>
            )}
          </motion.div>

        </div>

        {/* Interactive Google Map */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-12 relative">
          <div className="rounded-3xl overflow-hidden shadow-2xl border-8 border-white h-[450px] relative group bg-gray-100">
            <iframe
              src="https://maps.google.com/maps?q=Valley%20College%20Secondary%20School%20Bushenyi&t=k&z=15&ie=UTF8&iwloc=B&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Valley College SS Location"
              className="grayscale-[20%] contrast-[1.1] hover:grayscale-0 transition-all duration-700"
            ></iframe>

            
            {/* Map Overlay Button (Always Visible or Hover) */}
            <div className="absolute bottom-6 right-6 z-10 transition-transform hover:scale-105">
              <a 
                href="https://maps.app.goo.gl/nH62hk2qtw3qku9a8" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-primary text-white px-6 py-3 rounded-xl font-bold shadow-2xl flex items-center gap-2 hover:bg-blue-900 transition-colors"
              >
                <MapPin size={20} />
                View on Google Maps
              </a>
            </div>
          </div>
          
          {/* Subtle decoration */}
          <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-blue-50/30 rounded-full blur-3xl pointer-events-none" />
        </motion.div>

      </div>
    </div>
  );
}
