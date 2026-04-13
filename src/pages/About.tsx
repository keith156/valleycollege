import { Building2, Target, History, Users, BookOpen, Handshake, MapPin, Image as ImageIcon, Compass, Star, ShieldCheck, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

const milestones = [
  { 
    year: "2005", 
    title: "Foundation", 
    desc: "Inauguration of the main academic block and first student enrollment.",
    img: "/images/12.jpeg"
  },
  { 
    year: "2010", 
    title: "Expansion", 
    desc: "Establishment of the state-of-the-art science laboratories and modern dormitories.",
    img: "/images/13.jpeg"
  },
  { 
    year: "2015", 
    title: "Partnership", 
    desc: "Strategic partnership formed with Valley University of Science and Technology.",
    img: "/images/14.jpeg"
  },
  { 
    year: "2020", 
    title: "Excellence", 
    desc: "Consistent top-tier performance in national UNEB examinations year over year.",
    img: "/images/15.jpeg"
  }
];

export default function About() {
  return (
    <div className="flex flex-col bg-gray-50 pb-20 overflow-hidden">
      {/* Hero Section */}
      <div className="relative bg-primary text-white py-24 lg:py-32 overflow-hidden">
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
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/10 to-gray-50" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }}>
            <span className="inline-block py-1 px-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-blue-100 text-sm font-bold tracking-widest uppercase mb-6">
              Our Story
            </span>
            <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight drop-shadow-lg">
              A Legacy of <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-white">Excellence</span>
            </h1>
            <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto drop-shadow-md font-medium leading-relaxed">
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
            className="md:col-span-2 bg-white p-8 lg:p-10 rounded-[2rem] shadow-xl border border-gray-100 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-blue-100 transition-colors duration-700" />
            <Compass className="text-primary mb-6 relative z-10" size={48} />
            <h2 className="text-3xl font-bold mb-4 relative z-10">Our Vision</h2>
            <p className="text-gray-600 leading-relaxed text-xl relative z-10">
              To be a leading center of academic excellence and moral uprightness, producing well-rounded citizens capable of transforming society. We envision a future where every Valley College graduate is a leader in their chosen field, driven by integrity and a passion for continuous improvement.
            </p>
          </motion.div>

          {/* Core Values */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
            className="bg-primary text-white p-8 lg:p-10 rounded-[2rem] shadow-xl relative overflow-hidden"
          >
            <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-blue-900 to-transparent" />
            <h2 className="text-3xl font-bold mb-8 relative z-10">Core Values</h2>
            <ul className="space-y-6 relative z-10">
              <li className="flex items-center gap-4">
                <div className="p-3 bg-white/10 rounded-xl backdrop-blur-sm"><ShieldCheck size={24} className="text-blue-200" /></div>
                <span className="font-bold text-xl tracking-wide text-white">Discipline</span>
              </li>
              <li className="flex items-center gap-4">
                <div className="p-3 bg-white/10 rounded-xl backdrop-blur-sm"><Star size={24} className="text-blue-200" /></div>
                <span className="font-bold text-xl tracking-wide text-white">Excellence</span>
              </li>
              <li className="flex items-center gap-4">
                <div className="p-3 bg-white/10 rounded-xl backdrop-blur-sm"><Handshake size={24} className="text-blue-200" /></div>
                <span className="font-bold text-xl tracking-wide text-white">Integrity</span>
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
              <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
              <p className="text-gray-600 leading-relaxed text-xl">
                To provide quality, affordable, and holistic education that equips students with practical skills, discipline, and a foundation for lifelong learning. We are committed to fostering an environment where students are encouraged to explore, innovate, and excel both academically and personally.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Massive Growth Milestones Timeline */}
        <div className="mb-32">
          <div className="text-center mb-20">
            <span className="text-primary font-bold tracking-widest uppercase text-sm mb-2 block">Our History</span>
            <h2 className="text-4xl md:text-6xl font-black text-gray-900">Growth Milestones</h2>
          </div>

          <div className="relative max-w-5xl mx-auto">
            {/* Center Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-100 via-primary to-blue-100 -translate-x-1/2 rounded-full" />

            <div className="space-y-24">
              {milestones.map((milestone, idx) => (
                <motion.div 
                  key={idx} 
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                  className={`relative flex flex-col md:flex-row items-center gap-8 md:gap-16 ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                >
                  {/* Timeline Node */}
                  <div className="absolute left-4 md:left-1/2 w-8 h-8 bg-white border-4 border-primary rounded-full -translate-x-1/2 shadow-[0_0_0_8px_rgba(255,255,255,1)] z-10 flex items-center justify-center">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                  </div>

                  {/* Content (Text) */}
                  <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${idx % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                    <div className="text-5xl md:text-7xl font-black text-gray-100 mb-2 -mt-6 md:-mt-10 tracking-tighter select-none">
                      {milestone.year}
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">{milestone.title}</h3>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      {milestone.desc}
                    </p>
                  </div>

                  {/* Content (Image) */}
                  <div className="w-full md:w-1/2 pl-12 md:pl-0">
                    <div className="rounded-[2rem] overflow-hidden shadow-xl border-8 border-white group">
                      <img 
                        src={milestone.img} 
                        alt={milestone.title} 
                        className="w-full h-56 md:h-72 object-cover group-hover:scale-110 transition-transform duration-700"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Leadership Section */}
        <motion.section 
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="bg-white rounded-[3rem] shadow-xl border border-gray-100 overflow-hidden mb-32"
        >
          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-2/5 relative h-80 lg:h-auto">
              <img 
                src="/images/IMG_20260401_182109_855.jpg" 
                alt="Headteacher" 
                className="absolute inset-0 w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="lg:w-3/5 p-8 lg:p-12 flex flex-col justify-center">
              <Users className="text-primary mb-6" size={40} />
              <h2 className="text-4xl font-bold mb-2">Mr. John Doe</h2>
              <p className="text-primary font-bold mb-8 text-xl tracking-wide uppercase">Headteacher / Director</p>
              <blockquote className="text-2xl text-gray-700 leading-relaxed italic mb-8 border-l-4 border-primary pl-6">
                "Our philosophy centers on holistic education, student empowerment, and creating an environment where every child feels valued and inspired to achieve their best."
              </blockquote>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                With over two decades of experience in educational leadership, Mr. Doe has been instrumental in driving Valley College towards academic excellence. Under his guidance, the school has expanded its facilities, forged key partnerships, and consistently ranked among the top institutions in the region.
              </p>
              <div className="pt-8 border-t border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Board of Directors</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Our board comprises distinguished professionals, community leaders, and educators dedicated to the strategic growth and governance of the institution. They work tirelessly to ensure we remain true to our founding principles.
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Facilities & Overview Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-32">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-white p-8 rounded-[2rem] shadow-lg border border-gray-100">
            <MapPin className="text-primary mb-6" size={40} />
            <h3 className="text-2xl font-bold mb-4">Location & Ownership</h3>
            <p className="text-lg text-gray-600 mb-4">Located in the serene environment of <strong className="text-gray-900">Bushenyi District, Uganda</strong>.</p>
            <p className="text-lg text-gray-600">Proudly owned and operated by the <strong className="text-gray-900">Mukaira Foundation Ltd</strong>.</p>
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
          </motion.div>
        </div>

        {/* Campus Life Gallery */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Campus Life Gallery</h2>
            <p className="text-xl text-gray-600">A glimpse into the vibrant life at Valley College</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {[
              "1.jpeg", "2.jpeg", "3.jpeg", "4.jpeg", "5.jpeg", 
              "6.jpeg", "7.jpeg", "8.jpeg", "9.jpeg", "10.jpeg", 
              "11.jpeg", "12.jpeg", "13.jpeg", "14.jpeg", "15.jpeg", 
              "16.jpeg", "17.jpeg", "18.jpeg", "19.jpeg", "20.jpeg", 
              "21.jpeg", "23.jpeg", "24.jpeg", "IMG_20260401_181411_242.jpg", 
              "IMG_20260401_183339_106.jpg", "IMG_20260401_184319_761.jpg", 
              "IMG_20260401_184701_943.jpg", "IMG_20260401_181848_193.jpg", 
              "IMG_20260401_181902_661.jpg", "IMG_20260401_184018_232.jpg"
            ].map((img, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="aspect-square rounded-2xl overflow-hidden bg-gray-200 relative group shadow-sm border border-gray-100"
              >
                <img 
                  src={`/images/${img}`} 
                  alt={`Campus Life ${idx + 1}`}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />
              </motion.div>
            ))}
          </div>
        </motion.section>

      </div>
    </div>
  );
}
