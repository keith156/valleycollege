import { Building2, Target, History, Users, BookOpen, Handshake, MapPin, Image as ImageIcon, Compass, Star, ShieldCheck, ArrowRight, Clock, User, GraduationCap, ClipboardList } from 'lucide-react';
import { motion } from 'motion/react';
import { ZoomParallax } from '../components/ui/zoom-parallax';

const parallaxImages = [
  { src: '/images/IMG_20260401_181411_242.jpg', alt: 'School building' },
  { src: '/images/1.jpeg', alt: 'Students in class' },
  { src: '/images/3.jpeg', alt: 'Science lab' },
  { src: '/images/IMG_20260401_183410_033.jpg', alt: 'Sports field' },
  { src: '/images/5.jpeg', alt: 'Library' },
  { src: '/images/IMG_20260401_181902_661.jpg', alt: 'Graduation' },
  { src: '/images/7.jpeg', alt: 'Campus grounds' },
  { src: '/images/IMG_20260401_183339_106.jpg', alt: 'Art class' },
  { src: '/images/IMG_20260401_184335_095.jpg', alt: 'Computer lab' },
  { src: '/images/10.jpeg', alt: 'Cafeteria' },
  { src: '/images/11.jpeg', alt: 'School event' },
];

const governanceData = [
  {
    title: "Mukaira Foundation",
    desc: "Provides overall ownership and strategic direction of the school, ensuring its vision, values, and long-term sustainability are upheld.",
    pillClass: "bg-[#1a2860] border-[#2d3e80]",
    dotColor: "#2d3e80",
    lineColor: "#27a648",
    svg: (
      <svg className="w-9 h-9 mb-1 fill-white" viewBox="0 0 40 40">
        <rect x="4" y="18" width="32" height="18" rx="2"/>
        <rect x="10" y="8" width="20" height="12" rx="2"/>
        <rect x="16" y="2" width="8" height="8" rx="1"/>
        <rect x="8" y="22" width="4" height="8"/>
        <rect x="18" y="22" width="4" height="8"/>
        <rect x="28" y="22" width="4" height="8"/>
      </svg>
    )
  },
  {
    title: "School Director",
    desc: "Oversees the general management of the school, implements policies from the foundation, and ensures smooth coordination between governance and operations.",
    pillClass: "bg-[#1e8a3c] border-[#27a648]",
    dotColor: "#27a648",
    lineColor: "#2580e0",
    svg: (
      <svg className="w-9 h-9 mb-1 fill-white" viewBox="0 0 40 40">
        <circle cx="20" cy="12" r="7"/>
        <path d="M6 34c0-7.7 6.3-14 14-14s14 6.3 14 14H6z"/>
      </svg>
    )
  },
  {
    title: "Board of Governors",
    desc: "Offers policy guidance, oversight, and accountability, ensuring the school maintains high standards in academics, discipline, and administration.",
    pillClass: "bg-[#1a6ac7] border-[#2580e0]",
    dotColor: "#2580e0",
    lineColor: "#7050b8",
    svg: (
      <svg className="w-9 h-9 mb-1 fill-white" viewBox="0 0 40 40">
        <circle cx="12" cy="13" r="5"/>
        <circle cx="28" cy="13" r="5"/>
        <circle cx="20" cy="11" r="6"/>
        <path d="M2 32c0-5.5 4.5-10 10-10h1c1.2 0 2.3.2 3.4.6"/>
        <path d="M38 32c0-5.5-4.5-10-10-10h-1a10 10 0 00-3.4.6"/>
        <path d="M10 32c0-5.5 4.5-10 10-10s10 4.5 10 10H10z"/>
      </svg>
    )
  },
  {
    title: "Head Teacher",
    desc: "Leads the day-to-day academic and administrative functions of the school, supervising staff and ensuring effective teaching, learning, and student welfare.",
    pillClass: "bg-[#5c3d9e] border-[#7050b8]",
    dotColor: "#7050b8",
    lineColor: "#f07020",
    svg: (
      <svg className="w-9 h-9 mb-1 fill-white" viewBox="0 0 40 40">
        <rect x="5" y="8" width="14" height="20" rx="2"/>
        <rect x="21" y="8" width="14" height="20" rx="2"/>
        <path d="M5 28h30v3H5z"/>
        <line x1="8" y1="13" x2="16" y2="13" stroke="#5c3d9e" strokeWidth="1.5"/>
        <line x1="8" y1="17" x2="16" y2="17" stroke="#5c3d9e" strokeWidth="1.5"/>
        <line x1="8" y1="21" x2="16" y2="21" stroke="#5c3d9e" strokeWidth="1.5"/>
        <line x1="23" y1="13" x2="31" y2="13" stroke="#5c3d9e" strokeWidth="1.5"/>
        <line x1="23" y1="17" x2="31" y2="17" stroke="#5c3d9e" strokeWidth="1.5"/>
        <line x1="23" y1="21" x2="31" y2="21" stroke="#5c3d9e" strokeWidth="1.5"/>
      </svg>
    )
  },
  {
    title: "Administrators",
    desc: "Handle daily operational tasks including admissions, finance, records, and support services to ensure the efficient and smooth running of the school.",
    pillClass: "bg-[#e06010] border-[#f07020]",
    dotColor: "#f07020",
    lineColor: "transparent",
    svg: (
      <svg className="w-9 h-9 mb-1 fill-white" viewBox="0 0 40 40">
        <rect x="12" y="2" width="16" height="5" rx="2"/>
        <rect x="8" y="5" width="24" height="33" rx="2"/>
        <rect x="12" y="11" width="16" height="2.5" rx="1" fill="#e06010"/>
        <rect x="12" y="16" width="16" height="2.5" rx="1" fill="#e06010"/>
        <rect x="12" y="21" width="16" height="2.5" rx="1" fill="#e06010"/>
        <rect x="12" y="26" width="10" height="2.5" rx="1" fill="#e06010"/>
        <circle cx="11" cy="12.25" r="1.5" fill="white"/>
        <circle cx="11" cy="17.25" r="1.5" fill="white"/>
        <circle cx="11" cy="22.25" r="1.5" fill="white"/>
        <circle cx="11" cy="27.25" r="1.5" fill="white"/>
      </svg>
    )
  }
];

export default function About() {
  return (
    <div className="flex flex-col bg-gray-50 pb-20">
      {/* Hero Section */}
      <div className="relative bg-primary text-white py-20 lg:py-24 overflow-hidden">
        <div className="absolute inset-0">
          <div className="w-full h-full bg-gray-900" />
          <motion.img
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 10, ease: "easeOut" }}
            src="/images/IMG_20260401_181902_661.jpg"
            alt="About Valley College"
            className="absolute inset-0 w-full h-full object-cover opacity-80"
            referrerPolicy="no-referrer"
            decoding="async"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gray-900/30" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary from-10% via-primary/80 via-50% to-transparent" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }} className="max-w-3xl">
            <span className="inline-block py-1 px-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-bold tracking-widest uppercase mb-6">
              Our Story
            </span>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-6 tracking-tight drop-shadow-lg leading-tight">
              A Legacy of <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-white">Excellence</span>
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-white drop-shadow-md font-medium leading-relaxed">
              Discover our history, our values, and what makes our institution a beacon of educational transformation.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-20 w-full">
        
        {/* Bento Grid: Vision, Mission, Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-32">
          {/* Vision */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="md:col-span-2 bg-white p-6 lg:p-8 rounded-[2rem] shadow-xl border border-gray-100 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-blue-100 transition-colors duration-700" />
            <Compass className="text-primary mb-6 relative z-10" size={48} />
            <h2 className="text-2xl lg:text-3xl font-bold mb-4 relative z-10">Our Vision</h2>
            <p className="text-gray-600 leading-relaxed text-lg lg:text-xl relative z-10">
              To be a leading center of academic excellence and moral uprightness, producing well-rounded citizens capable of transforming society. We envision a future where every Valley College graduate is a leader in their chosen field, driven by integrity and a passion for continuous improvement.
            </p>
          </motion.div>

          {/* Core Values */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
            className="bg-primary text-white p-8 lg:p-10 rounded-[2rem] shadow-xl relative overflow-hidden"
          >
            <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-blue-900 to-transparent" />
            <div className="relative z-10 mb-8">
              <h2 className="text-2xl lg:text-3xl font-bold text-white">Core Values</h2>
              <div className="w-12 h-1 bg-blue-400 mt-4 rounded-full"></div>
            </div>
            <ul className="space-y-6 relative z-10 mt-6">
              <li className="flex items-center gap-4">
                <div className="p-3 bg-white/10 rounded-xl backdrop-blur-sm"><ShieldCheck size={20} className="text-blue-200" /></div>
                <span className="font-bold text-lg lg:text-xl tracking-wide text-white">Discipline</span>
              </li>
              <li className="flex items-center gap-4">
                <div className="p-3 bg-white/10 rounded-xl backdrop-blur-sm"><Star size={20} className="text-blue-200" /></div>
                <span className="font-bold text-lg lg:text-xl tracking-wide text-white">Excellence</span>
              </li>
              <li className="flex items-center gap-4">
                <div className="p-3 bg-white/10 rounded-xl backdrop-blur-sm"><Handshake size={20} className="text-blue-200" /></div>
                <span className="font-bold text-lg lg:text-xl tracking-wide text-white">Integrity</span>
              </li>
            </ul>
          </motion.div>

          {/* Mission */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}
            className="md:col-span-3 bg-white p-8 lg:p-10 rounded-[2rem] shadow-xl border border-gray-100 flex flex-col md:flex-row items-center gap-10"
          >
            <div className="shrink-0 p-6 bg-blue-50 rounded-full">
              <Target className="text-primary" size={64} />
            </div>
            <div>
              <h2 className="text-2xl lg:text-3xl font-bold mb-4">Our Mission</h2>
              <p className="text-gray-600 leading-relaxed text-lg lg:text-xl">
                To provide quality, affordable, and holistic education that equips students with practical skills, discipline, and a foundation for lifelong learning. We are committed to fostering an environment where students are encouraged to explore, innovate, and excel both academically and personally.
              </p>
            </div>
          </motion.div>
        </div>

        {/* New Governance Structure Section */}
        <section id="governance" className="mb-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 md:mb-24">
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-6 tracking-tight">Governance Structure</h2>
            <div className="h-2 w-24 bg-primary mx-auto rounded-full" />
          </div>

          <div className="flex flex-col items-center py-10 px-0 md:px-8 max-w-[900px] mx-auto overflow-hidden">
            {governanceData.map((item, idx) => (
              <div key={idx} className="w-full flex flex-col items-center">
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="flex flex-row items-center w-full gap-4 md:gap-12"
                >
                  {/* Left Column: Pill (Side-by-side on all screens) */}
                  <div className="flex-none w-[140px] sm:w-[200px] md:w-[310px] flex flex-col items-center">
                    <div className={`w-full rounded-[2rem] md:rounded-[3rem] flex flex-col items-center justify-center p-3 md:p-8 shadow-xl min-h-[70px] md:min-h-[110px] border-2 md:border-4 ${item.pillClass} group hover:scale-105 transition-transform duration-500`}>
                      <div className="group-hover:scale-110 transition-transform duration-500 scale-75 md:scale-100">
                        {item.svg}
                      </div>
                      <div className="text-white text-[10px] sm:text-xs md:text-lg font-black tracking-widest text-center uppercase leading-tight mt-1">
                        {item.title}
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Description (Horizontal) */}
                  <div className="flex-1 text-[12px] sm:text-sm md:text-lg leading-relaxed text-gray-700 text-left py-2">
                    {item.desc}
                  </div>
                </motion.div>

                {/* Connector Logic */}
                {idx < governanceData.length - 1 && (
                  <div className="w-full h-8 md:h-16 flex items-stretch">
                    <div className="flex-none w-[140px] sm:w-[200px] md:w-[310px] flex justify-center">
                      <div className="flex flex-col items-center w-1 relative">
                        <div 
                          className="w-3 h-3 md:w-5 md:h-5 rounded-full border-[2.5px] md:border-[4px] border-solid bg-white absolute top-0 -translate-y-1/2 z-20" 
                          style={{ borderColor: item.dotColor }} 
                        />
                        <div 
                          className="w-[2.5px] md:w-[4px] h-full" 
                          style={{ backgroundColor: item.lineColor }} 
                        />
                        <div 
                          className="w-3 h-3 md:w-5 md:h-5 rounded-full border-[2.5px] md:border-[4px] border-solid bg-white absolute bottom-0 translate-y-1/2 z-20" 
                          style={{ borderColor: governanceData[idx+1].dotColor }} 
                        />
                      </div>
                    </div>
                    <div className="flex-1" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Facilities & Overview Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-32">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-white p-8 rounded-[2rem] shadow-lg border border-gray-100">
            <MapPin className="text-primary mb-6" size={40} />
            <h3 className="text-2xl font-bold mb-4">Location & Ownership</h3>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">Located in the serene and academic-friendly environment of <strong className="text-gray-900">Bushenyi District</strong>, our campus provides the perfect atmosphere for focused learning.</p>
            <ul className="space-y-3 text-gray-600 mb-6">
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-primary rounded-full" /> Bushenyi Municipality, Western Uganda</li>
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-primary rounded-full" /> Easy access via Mbarara-Kasese Highway</li>
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-primary rounded-full" /> Proudly owned by Mukaira Foundation Ltd</li>
            </ul>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="bg-white p-8 rounded-[2rem] shadow-lg border border-gray-100">
            <Building2 className="text-primary mb-6" size={40} />
            <h3 className="text-2xl font-bold mb-6">World-Class Facilities</h3>
            <ul className="space-y-4 text-gray-600 text-lg font-medium">
              <li className="flex items-center gap-3"><div className="w-2 h-2 bg-primary rounded-full" /> Modern Classrooms</li>
              <li className="flex items-center gap-3"><div className="w-2 h-2 bg-primary rounded-full" /> Science Laboratories</li>
              <li className="flex items-center gap-3"><div className="w-2 h-2 bg-primary rounded-full" /> Comprehensive Library</li>
              <li className="flex items-center gap-3"><div className="w-2 h-2 bg-primary rounded-full" /> Secure Dormitories</li>
              <li className="flex items-center gap-3"><div className="w-2 h-2 bg-primary rounded-full" /> Advanced ICT Labs</li>
            </ul>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="bg-blue-50 p-8 rounded-[2rem] shadow-lg border border-blue-100 md:col-span-2 lg:col-span-1">
            <Handshake className="text-primary mb-6" size={40} />
            <h3 className="text-2xl font-bold mb-4">University Partnership</h3>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Strategic relationship with <strong className="text-primary">Valley University of Science and Technology</strong> providing:
            </p>
            <ul className="space-y-4 text-gray-700 text-lg">
              <li className="flex items-start gap-3">
                <BookOpen className="shrink-0 mt-1 text-primary" size={20} />
                <span>Academic inspiration and mentorship programs</span>
              </li>
              <li className="flex items-start gap-3">
                <Building2 className="shrink-0 mt-1 text-primary" size={20} />
                <span>Access to shared advanced facilities and resources</span>
              </li>
            </ul>
            <a 
              href="https://vust.ac.ug/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all group"
            >
              Visit University Website 
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </div>

      {/* Campus Life Section (Full Width) */}
      <div className="w-full bg-white pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-primary font-bold tracking-widest uppercase text-sm mb-3 block">Perspective</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-4">Campus Life</h2>
            <div className="h-1.5 w-20 bg-primary mx-auto rounded-full" />
          </motion.div>
        </div>

        {/* Zoom Parallax Gallery (Full Width) */}
        <section className="bg-white text-gray-900 relative">
          <ZoomParallax images={parallaxImages} />
        </section>

        {/* Campus Life Gallery (Continuous) */}
        <motion.section 
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          className="pb-32 px-4 md:px-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 auto-rows-[250px] md:auto-rows-[300px] max-w-[1600px] mx-auto">
            {[
              "IMG_20260401_181411_242.jpg", 
              "2.jpeg", "4.jpeg", "6.jpeg", "8.jpeg", "9.jpeg", 
              "12.jpeg", "13.jpeg", "14.jpeg", "15.jpeg", 
              "16.jpeg", "17.jpeg", "18.jpeg", "19.jpeg", "20.jpeg", 
              "21.jpeg", "23.jpeg", "24.jpeg", 
              "IMG_20260401_184319_761.jpg", "IMG_20260401_184701_943.jpg", 
              "IMG_20260401_181848_193.jpg", "IMG_20260401_184018_232.jpg"
            ].map((img, idx) => {
              const isLarge = idx % 7 === 0;
              const isTall = idx % 5 === 0 && !isLarge;
              const isWide = idx % 6 === 0 && !isLarge && !isTall;
              
              return (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: (idx % 8) * 0.05 }}
                className={`group relative rounded-[2rem] overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 bg-gray-200 ${
                  isLarge ? 'md:col-span-2 md:row-span-2' : 
                  isTall ? 'md:row-span-2' : 
                  isWide ? 'md:col-span-2' : 
                  'col-span-1 row-span-1'
                }`}
              >
                <img 
                  src={`/images/${img}`} 
                  alt={`Campus Life ${idx + 1}`}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </motion.div>
            );
          })}
          </div>
        </motion.section>
        </div>
      </div>
    );
}
