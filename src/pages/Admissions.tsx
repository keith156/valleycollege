import { useState } from 'react';
import { FileText, CheckCircle2, Download, AlertCircle, ArrowRight, Monitor, Printer, Send } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';

export default function Admissions() {

  return (
    <div className="flex flex-col bg-gray-50 pb-20">
      {/* Page Header */}
      <div className="relative bg-primary text-white py-20 lg:py-24 overflow-hidden">
        <div className="absolute inset-0">
          <div className="w-full h-full bg-gray-900" />
          <img
            src="/images/IMG_20260401_183022_065.jpg"
            alt="Admissions at Valley College"
            className="absolute inset-0 w-full h-full object-cover opacity-80"
            referrerPolicy="no-referrer"
            decoding="async"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gray-900/30" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary from-10% via-primary/80 via-50% to-transparent" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 drop-shadow-md">Admissions</h1>
            <p className="text-lg lg:text-xl text-white drop-shadow-sm">
              Join the Valley College community. Choose the application method that works best for you.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
        
        {/* Prominent Downloads Section */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-white p-6 md:p-10 lg:p-12 rounded-[2rem] shadow-lg border border-gray-100 mb-16 md:mb-20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
          
          <div className="relative z-10">
            <div className="text-center mb-10">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-blue-50 text-primary mb-4 shadow-sm border border-blue-100">
                <Download size={28} />
              </div>
              <h2 id="documents" className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-gray-900">Application Documents</h2>
              <p className="text-gray-600 text-base lg:text-lg max-w-2xl mx-auto">Download the essential resources you need to complete your application and understand our school policies.</p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <a href="#" className="group flex flex-col items-center p-8 bg-gray-50 rounded-2xl border border-gray-200 hover:border-primary hover:bg-blue-50 hover:shadow-md transition-all duration-300 text-center">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-primary shadow-sm mb-4 group-hover:scale-110 transition-transform">
                  <FileText size={24} />
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">Application Form</h3>
                <p className="text-sm text-gray-500 mb-4">Official form for offline applications.</p>
                <span className="inline-flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-wider group-hover:underline">
                  Download PDF <Download size={16} />
                </span>
              </a>
              
              <a href="#" className="group flex flex-col items-center p-8 bg-gray-50 rounded-2xl border border-gray-200 hover:border-primary hover:bg-blue-50 hover:shadow-md transition-all duration-300 text-center">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-primary shadow-sm mb-4 group-hover:scale-110 transition-transform">
                  <FileText size={24} />
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">Fees Structure</h3>
                <p className="text-sm text-gray-500 mb-4">Current academic year tuition details.</p>
                <span className="inline-flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-wider group-hover:underline">
                  Download PDF <Download size={16} />
                </span>
              </a>
              
              <a href="#" className="group flex flex-col items-center p-8 bg-gray-50 rounded-2xl border border-gray-200 hover:border-primary hover:bg-blue-50 hover:shadow-md transition-all duration-300 text-center">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-primary shadow-sm mb-4 group-hover:scale-110 transition-transform">
                  <FileText size={24} />
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">Rules & Regulations</h3>
                <p className="text-sm text-gray-500 mb-4">School policies and code of conduct.</p>
                <span className="inline-flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-wider group-hover:underline">
                  Download PDF <Download size={16} />
                </span>
              </a>

              <a href="#" className="group flex flex-col items-center p-8 bg-gray-50 rounded-2xl border border-gray-200 hover:border-primary hover:bg-blue-50 hover:shadow-md transition-all duration-300 text-center">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-primary shadow-sm mb-4 group-hover:scale-110 transition-transform">
                  <FileText size={24} />
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">School Circular</h3>
                <p className="text-sm text-gray-500 mb-4">Latest updates and announcements.</p>
                <span className="inline-flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-wider group-hover:underline">
                  Download PDF <Download size={16} />
                </span>
              </a>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            
            {/* Application Process */}
            <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-white p-8 lg:p-10 rounded-3xl shadow-sm border border-gray-100">
              <div className="text-center mb-10">
                <h2 id="process" className="text-2xl lg:text-3xl font-bold mb-4">How to Apply</h2>
                <p className="text-gray-600 text-base lg:text-lg">Follow these steps to secure a place for your child.</p>
              </div>

              <div className="space-y-8">
                <div className="space-y-6">
                  {[
                    { step: 1, title: "Download the Application Form", desc: "Get the form from the Application Documents section above or pick a physical copy from the school reception." },
                    { step: 2, title: "Fill & Gather Documents", desc: "Complete the form and attach previous academic results, a copy of the birth certificate, and passport photos." },
                    { step: 3, title: "Submit at Reception", desc: "Bring the completed package to the Valley College main campus reception during working hours." },
                    { step: 4, title: "Interview / Assessment", desc: "Eligible candidates will be invited for a brief interview and academic assessment." }
                  ].map((item) => (
                    <div key={item.step} className="flex gap-6 items-start group">
                      <div className="w-12 h-12 rounded-full bg-blue-50 text-primary font-bold text-xl flex items-center justify-center shrink-0 border border-blue-100 group-hover:bg-primary group-hover:text-white transition-colors">
                        {item.step}
                      </div>
                      <div className="pt-1">
                        <h4 className="font-bold text-gray-900 text-lg lg:text-xl mb-2">{item.title}</h4>
                        <p className="text-gray-600 text-base lg:text-lg">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.section>

            {/* Admission Requirements */}
            <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-white p-8 lg:p-12 rounded-[2.5rem] shadow-xl border border-gray-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
              
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-10">
                  <div className="w-14 h-14 bg-blue-50 text-primary rounded-2xl flex items-center justify-center shrink-0 border border-blue-100">
                    <CheckCircle2 size={28} />
                  </div>
                  <div>
                    <h2 id="requirements" className="text-2xl lg:text-3xl font-bold text-gray-900">Admission Requirements</h2>
                    <p className="text-gray-600 text-sm lg:text-base mt-1">Ensure you have the following documents ready.</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* S1 Entry */}
                  <div className="relative bg-gray-50 rounded-3xl p-8 border border-gray-200 hover:border-primary/30 hover:shadow-md transition-all group">
                    <div className="absolute top-0 left-8 -translate-y-1/2 bg-primary text-white px-6 py-2 rounded-full font-bold shadow-sm">
                      Entry for S1
                    </div>
                    <ul className="space-y-4 mt-4 text-gray-700">
                      {[
                        "PLE Pass Slip (Original & Copy)",
                        "Recommendation letter",
                        "2 Passport size photographs",
                        "Birth Certificate"
                      ].map((req, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <div className="w-6 h-6 rounded-full bg-blue-100 text-primary flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-primary group-hover:text-white transition-colors">
                            <CheckCircle2 size={14} />
                          </div>
                          <span className="font-medium">{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* S5 Entry */}
                  <div className="relative bg-gray-50 rounded-3xl p-8 border border-gray-200 hover:border-primary/30 hover:shadow-md transition-all group">
                    <div className="absolute top-0 left-8 -translate-y-1/2 bg-primary text-white px-6 py-2 rounded-full font-bold shadow-sm">
                      Entry for S5
                    </div>
                    <ul className="space-y-4 mt-4 text-gray-700">
                      {[
                        "UCE Result Slip (Original & Copy)",
                        "Recommendation from previous school",
                        "2 Passport size photographs",
                        "Identity Card from previous school"
                      ].map((req, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <div className="w-6 h-6 rounded-full bg-blue-100 text-primary flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-primary group-hover:text-white transition-colors">
                            <CheckCircle2 size={14} />
                          </div>
                          <span className="font-medium">{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-10 p-6 bg-blue-50/50 rounded-2xl text-gray-700 flex gap-5 border border-blue-100 items-start">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-primary shrink-0 shadow-sm">
                    <AlertCircle size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg mb-1">Transfer Students</h4>
                    <p className="text-gray-600 leading-relaxed">Students transferring to other classes (S2, S3) must present official report cards from their previous school covering all terms attended.</p>
                  </div>
                </div>
              </div>
            </motion.section>

          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            
            {/* Call to Action */}
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-primary text-white p-8 rounded-3xl shadow-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
              <h3 className="text-2xl font-bold text-white mb-3 relative z-10">Need Assistance?</h3>
              <p className="text-blue-100 mb-8 relative z-10">
                Our admissions team is here to help you through every step of the process.
              </p>
              <div className="space-y-4 relative z-10">
                <Link to="/contact" className="w-full block text-center bg-white text-primary hover:bg-gray-100 py-4 rounded-xl font-bold transition-all hover:-translate-y-1 shadow-md">
                  Contact Admissions
                </Link>
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-blue-50 p-8 rounded-3xl border border-blue-100">
              <h3 className="text-xl font-bold text-primary mb-3">Admissions Office</h3>
              <p className="text-gray-600 mb-6">
                Working Hours: Mon - Fri, 8:00 AM - 5:00 PM
              </p>
              <div className="space-y-3">
                <p className="font-bold text-gray-900 flex items-center gap-2">
                  <span className="text-primary">Phone:</span> +256 (0) 123 456 789
                </p>
                <p className="font-bold text-gray-900 flex items-center gap-2">
                  <span className="text-primary">Email:</span> admissions@valleycollege.edu.ug
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </div>
  );
}
