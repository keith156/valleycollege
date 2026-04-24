import { useState } from 'react';
import { FileText, CheckCircle2, Download, AlertCircle, ArrowRight, Monitor, Printer, Send } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';

export default function Admissions() {

  return (
    <div className="flex flex-col bg-gray-50">
      {/* Page Header */}
      <div className="relative bg-primary text-white py-12 lg:py-16 overflow-hidden">

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
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-4xl">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 drop-shadow-md">Admissions</h1>
            <p className="text-lg lg:text-xl text-white drop-shadow-sm md:whitespace-nowrap">
              Join one of the <span className="font-bold border-b-2 border-white/30">best secondary schools in Uganda</span>. Start your journey of excellence today.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full">

        
        {/* Prominent Downloads Section */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-white p-6 md:p-10 lg:p-12 rounded-[2rem] shadow-lg border border-gray-100 mb-12 md:mb-16 relative overflow-hidden">

          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
          
          <div className="relative z-10">
            <div className="text-center mb-10">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-blue-50 text-primary mb-4 shadow-sm border border-blue-100">
                <Download size={28} />
              </div>
              <h2 id="documents" className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-gray-900">Application Documents</h2>
              <p className="text-gray-600 text-base lg:text-lg max-w-4xl mx-auto">Download the essential resources you need to complete your application and understand our school policies.</p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <a href="https://forms.gle/9zy69WUU5eYKBYcn6" target="_blank" rel="noopener noreferrer" className="group flex flex-col items-center p-8 bg-primary rounded-2xl border border-primary hover:bg-blue-900 hover:shadow-xl transition-all duration-300 text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-white shadow-sm mb-4 group-hover:scale-110 transition-transform">
                  <Send size={24} />
                </div>
                <h3 className="font-bold text-white text-lg mb-2">Application Form</h3>
                <p className="text-sm text-blue-200 mb-4">Complete your school application online.</p>
                <span className="inline-flex items-center gap-2 text-white font-bold text-sm uppercase tracking-wider group-hover:underline">
                  Apply Online <ArrowRight size={16} />
                </span>
              </a>
              
              <a href="https://drive.google.com/file/d/1psI03VyAFax7_LViHfOQzw0X0_eCdNpu/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="group flex flex-col items-center p-8 bg-primary rounded-2xl border border-primary hover:bg-blue-900 hover:shadow-xl transition-all duration-300 text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-white shadow-sm mb-4 group-hover:scale-110 transition-transform">
                  <FileText size={24} />
                </div>
                <h3 className="font-bold text-white text-lg mb-2">Fees Structure</h3>
                <p className="text-sm text-blue-200 mb-4">Current academic year tuition details.</p>
                <span className="inline-flex items-center gap-2 text-white font-bold text-sm uppercase tracking-wider group-hover:underline">
                  Download PDF <Download size={16} />
                </span>
              </a>
              
              <a href="https://drive.google.com/file/d/18CJ8Uhd2U1t3QQHoi8Qi4g1yyCgB8h1z/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="group flex flex-col items-center p-8 bg-primary rounded-2xl border border-primary hover:bg-blue-900 hover:shadow-xl transition-all duration-300 text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-white shadow-sm mb-4 group-hover:scale-110 transition-transform">
                  <FileText size={24} />
                </div>
                <h3 className="font-bold text-white text-lg mb-2">Rules & Regulations</h3>
                <p className="text-sm text-blue-200 mb-4">School policies and code of conduct.</p>
                <span className="inline-flex items-center gap-2 text-white font-bold text-sm uppercase tracking-wider group-hover:underline">
                  Download PDF <Download size={16} />
                </span>
              </a>

              <a href="#" className="group flex flex-col items-center p-8 bg-primary rounded-2xl border border-primary hover:bg-blue-900 hover:shadow-xl transition-all duration-300 text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-white shadow-sm mb-4 group-hover:scale-110 transition-transform">
                  <FileText size={24} />
                </div>
                <h3 className="font-bold text-white text-lg mb-2">School Circular</h3>
                <p className="text-sm text-blue-200 mb-4">Latest updates and announcements.</p>
                <span className="inline-flex items-center gap-2 text-white font-bold text-sm uppercase tracking-wider group-hover:underline">
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
                    { step: 1, title: "Fill Online Form", desc: "Complete the online application form via the link in the documents section above to start the process." },
                    { step: 2, title: "Gather Documents", desc: "Prepare previous academic results, a copy of the birth certificate, and passport photos for physical verification." },
                    { step: 3, title: "Document Submission", desc: "Bring the required documents to the Valley College reception for verification and final processing." },
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
                  <span className="text-primary">Phone:</span> +256 782 679 985
                </p>
                <p className="font-bold text-gray-900 flex items-center gap-2">
                  <span className="text-primary">Phone:</span> +256 701 679 985
                </p>
                <p className="font-bold text-gray-900 flex items-center gap-2">
                  <span className="text-primary">Phone:</span> +256 772 646 421
                </p>
                <p className="font-bold text-gray-900 flex items-center gap-2">
                  <span className="text-primary">Email:</span> admissions@valleycollege.edu.ug
                </p>
              </div>
            </motion.div>

          </div>
        </div>

        {/* Admission Requirements (Full Width) */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          className="bg-white rounded-[3rem] shadow-xl border border-gray-100 overflow-hidden mb-12"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 items-stretch">
            {/* Text Side */}
            <div className="p-10 lg:p-20 flex flex-col justify-center relative">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
              
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-14 h-14 bg-blue-50 text-primary rounded-2xl flex items-center justify-center shrink-0 border border-blue-100">
                    <CheckCircle2 size={28} />
                  </div>
                  <div>
                    <h2 id="requirements" className="text-2xl lg:text-3xl font-bold text-gray-900">Admission Requirements</h2>
                    <p className="text-gray-600 text-sm lg:text-base mt-1">Ensure you have the following ready.</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  {/* S1 Entry */}
                  <div className="relative bg-gray-50 rounded-3xl p-8 border border-gray-200 group">
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
                          <CheckCircle2 size={18} className="text-primary shrink-0 mt-0.5" />
                          <span className="font-medium">{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* S5 Entry */}
                  <div className="relative bg-gray-50 rounded-3xl p-8 border border-gray-200 group">
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
                          <CheckCircle2 size={18} className="text-primary shrink-0 mt-0.5" />
                          <span className="font-medium">{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Transfer Tip */}
                <div className="mt-10 p-6 bg-blue-50/50 rounded-2xl text-gray-700 flex gap-5 border border-blue-100 items-start">
                  <AlertCircle size={24} className="text-primary shrink-0" />
                  <p className="text-base leading-relaxed">Students transferring to other classes (S2, S3) must present official report cards from their previous school covering all terms attended.</p>
                </div>
              </div>
            </div>

            {/* Image Side */}
            <div className="relative min-h-[400px] lg:h-auto bg-[#001a40] flex items-center justify-center p-4 md:p-8">
              <img 
                src="/admissions.jpeg" 
                alt="Admission Requirements" 
                className="w-full h-full max-h-[800px] object-contain drop-shadow-2xl rounded-2xl"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
