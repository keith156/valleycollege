import { Users, Briefcase, GraduationCap, HeartHandshake, MessageCircle, ExternalLink, Globe, Award } from 'lucide-react';
import { motion } from 'motion/react';

const successfulAlumni = [
  { name: "Dr. Emmanuel K.", role: "Medical Officer, Mulago Hospital", img: "/images/16.jpeg" },
  { name: "Sarah N.", role: "Software Engineer, Tech Hub Kampala", img: "/images/17.jpeg" },
  { name: "Michael B.", role: "Managing Director, MB Finance", img: "/images/18.jpeg" },
  { name: "Grace A.", role: "Senior Lecturer, Makerere University", img: "/images/19.jpeg" },
  { name: "David O.", role: "Civil Engineer, UNRA", img: "/images/20.jpeg" },
  { name: "Juliet T.", role: "Founder, JT Legal Associates", img: "/images/21.jpeg" },
  { name: "Peter M.", role: "Agricultural Entrepreneur", img: "/images/23.jpeg" },
  { name: "Esther W.", role: "Head of Marketing, Telecom UG", img: "/images/24.jpeg" },
  { name: "Daniel K.", role: "Architect, Design Studio", img: "/images/IMG_20260401_183215_540.jpg" },
  { name: "Ruth N.", role: "Public Health Specialist, WHO", img: "/images/IMG_20260401_183242_518.jpg" },
  { name: "Isaac S.", role: "Data Scientist, Global Tech", img: "/images/IMG_20260401_183305_246.jpg" },
  { name: "Florence M.", role: "Award-winning Journalist", img: "/images/IMG_20260401_183315_730.jpg" },
];

export default function Alumni() {
  return (
    <div className="flex flex-col bg-gray-50 pb-20">
      {/* Page Header */}
      <div className="relative bg-primary text-white py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <div className="w-full h-full bg-gray-900" />
          <img
            src="/images/IMG_20260401_183339_106.jpg"
            alt="Alumni at Valley College"
            className="absolute inset-0 w-full h-full object-cover opacity-80"
            referrerPolicy="no-referrer"
            decoding="async"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 drop-shadow-md">Alumni Network</h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto drop-shadow-sm">
              Connecting past students, celebrating success, and building a lifelong community.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
        
        {/* Introduction - Bento Box Style */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-primary font-bold mb-6">
              <Users size={20} /> Our Community
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900 leading-tight">A Legacy of <br/><span className="text-primary">Excellence</span></h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              The Valley College Alumni Network is a vibrant community of former students who have passed through the gates of our great institution. We are leaders, innovators, professionals, and change-makers spread across the globe. Our network exists to foster lifelong connections and provide mentorship to the next generation.
            </p>
            <a href="#" className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-bold transition-all hover:scale-105 shadow-lg hover:shadow-green-500/30">
              <MessageCircle size={24} /> Join the Official WhatsApp Group
            </a>
          </motion.div>
          
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="grid grid-cols-2 gap-4 lg:gap-6">
            <div className="space-y-4 lg:space-y-6">
              <div className="bg-blue-50 rounded-3xl p-8 text-center flex flex-col justify-center aspect-square border border-blue-100">
                <Globe className="mx-auto text-primary mb-4" size={40} />
                <h3 className="text-4xl font-bold text-gray-900 mb-2">10k+</h3>
                <p className="text-gray-600 font-medium">Global Alumni</p>
              </div>
              <img 
                src="/images/IMG_20260401_183410_033.jpg" 
                alt="Alumni gathering" 
                className="rounded-3xl w-full h-48 lg:h-64 object-cover shadow-sm" 
                referrerPolicy="no-referrer" 
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="space-y-4 lg:space-y-6 pt-8 lg:pt-12">
              <img 
                src="/images/IMG_20260401_183426_903.jpg" 
                alt="Graduation" 
                className="rounded-3xl w-full h-48 lg:h-64 object-cover shadow-sm" 
                referrerPolicy="no-referrer" 
                loading="lazy"
                decoding="async"
              />
              <div className="bg-primary rounded-3xl p-8 text-center flex flex-col justify-center aspect-square text-white shadow-lg">
                <Award className="mx-auto text-blue-300 mb-4" size={40} />
                <h3 className="text-4xl font-bold text-white mb-2">50+</h3>
                <p className="text-white font-medium">Industries</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Success Stories - Horizontal Cards */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 flex items-center justify-center gap-3">
              <GraduationCap className="text-primary" size={40} /> Alumni Spotlight
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">Meet some of our outstanding alumni making significant contributions in their respective fields.</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
            {successfulAlumni.map((alumni, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="flex flex-col bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 group"
              >
                {/* Image Top */}
                <div className="w-full h-56 sm:h-64 relative overflow-hidden shrink-0">
                  <img 
                    src={alumni.img} 
                    alt={alumni.name} 
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                
                {/* Content Bottom */}
                <div className="p-6 sm:p-8 flex flex-col justify-center bg-white relative grow">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-1 bg-primary rounded-b-full opacity-0 group-hover:opacity-100 transition-opacity" />
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 line-clamp-1 text-center">{alumni.name}</h3>
                  <p className="text-sm sm:text-base text-gray-500 font-medium line-clamp-2 leading-relaxed text-center">{alumni.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Funding Project - Centered & Prominent */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-5xl mx-auto">
          <div className="bg-white p-10 lg:p-16 rounded-[2.5rem] shadow-xl border border-gray-100 relative overflow-hidden">
            {/* Decorative Background Elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-50/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-primary/5 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3 pointer-events-none" />
            
            <div className="relative z-10">
              <div className="text-center mb-12">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-blue-50 text-primary mb-6 shadow-sm border border-blue-100">
                  <HeartHandshake size={40} />
                </div>
                <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900">Alumni Giveback Project</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                  We are currently raising funds for the construction of a new state-of-the-art ICT laboratory. Join hands with fellow alumni to make this a reality and empower the next generation!
                </p>
              </div>
              
              <div className="bg-gray-50 p-8 lg:p-10 rounded-3xl border border-gray-200 mb-10 shadow-inner">
                <div className="flex flex-col sm:flex-row justify-between items-center sm:items-end mb-6 gap-4">
                  <div className="text-center sm:text-left">
                    <p className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-2">Raised so far</p>
                    <p className="text-4xl lg:text-5xl font-black text-primary tracking-tight">UGX 1.2M</p>
                  </div>
                  <div className="text-center sm:text-right">
                    <p className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-2">Goal</p>
                    <p className="text-2xl lg:text-3xl font-bold text-gray-400">UGX 2.0M</p>
                  </div>
                </div>
                
                {/* Progress Bar */}
                <div className="w-full h-6 bg-gray-200 rounded-full overflow-hidden mb-4 shadow-inner">
                  <motion.div 
                    initial={{ width: 0 }} 
                    whileInView={{ width: '60%' }} 
                    transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
                    className="h-full bg-gradient-to-r from-blue-400 via-primary to-blue-600 rounded-full relative"
                  >
                    <div className="absolute top-0 right-0 bottom-0 left-0 bg-[linear-gradient(45deg,rgba(255,255,255,0.15)_25%,transparent_25%,transparent_50%,rgba(255,255,255,0.15)_50%,rgba(255,255,255,0.15)_75%,transparent_75%,transparent)] bg-[length:1.5rem_1.5rem] animate-[shimmer_1s_linear_infinite]" />
                  </motion.div>
                </div>
                <p className="text-center text-base font-bold text-primary">60% Funded</p>
              </div>
              
              <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-2xl mx-auto">
                <button className="flex-1 bg-primary text-white py-4 px-8 rounded-2xl font-bold text-lg hover:bg-blue-900 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
                  Contribute Now
                </button>
                <button className="flex-1 bg-white text-primary border-2 border-gray-200 py-4 px-8 rounded-2xl font-bold text-lg hover:border-primary hover:bg-blue-50 transition-all flex items-center justify-center gap-2">
                  View Contributors <ExternalLink size={20} />
                </button>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
