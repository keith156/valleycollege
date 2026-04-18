import { Building2, Target, History, Users, BookOpen, Handshake, MapPin, Image as ImageIcon, Compass, Star, ShieldCheck, ArrowRight, Clock } from 'lucide-react';
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

        {/* Governance Structure Section */}
        <motion.section 
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="mb-32"
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Governance Structure</h2>
            <p className="text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto">Our institution is guided by visionary leadership committed to excellence in education.</p>
          </div>

          <div className="flex flex-col gap-8 items-center">
            {/* Mukaira Foundation */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="bg-primary text-white p-8 md:p-10 rounded-[2rem] shadow-xl w-full max-w-3xl text-center relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              <Building2 className="mx-auto mb-4 text-blue-200" size={40} />
              <h3 className="text-xl font-bold text-blue-200 mb-2 tracking-widest uppercase">Founding Body</h3>
              <h2 className="text-3xl md:text-4xl font-black text-white mb-4">Mukaira Foundation Ltd</h2>
              <p className="text-blue-100 text-lg">The foundational pillar providing strategic direction and resources to ensure Valley College remains a beacon of excellence.</p>
            </motion.div>

            {/* Down Arrow */}
            <div className="w-1 h-8 bg-gray-300 rounded-full" />

            {/* Board of Governors */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
              className="bg-white p-8 md:p-10 rounded-[2rem] shadow-xl border border-gray-100 w-full max-w-4xl"
            >
              <div className="text-center mb-8">
                <Users className="mx-auto mb-4 text-primary" size={40} />
                <h2 className="text-2xl md:text-3xl font-bold">Board of Governors</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 text-center">
                  <p className="text-sm font-bold text-primary uppercase tracking-wider mb-2">Chairman</p>
                  <h4 className="text-xl font-bold text-gray-900">Dr. Emmanuel K.</h4>
                </div>
                <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 text-center">
                  <p className="text-sm font-bold text-primary uppercase tracking-wider mb-2">Vice Chairperson</p>
                  <h4 className="text-xl font-bold text-gray-900">Mrs. Sarah N.</h4>
                </div>
                <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 text-center md:col-span-2 max-w-lg mx-auto w-full">
                  <p className="text-sm font-bold text-primary uppercase tracking-wider mb-2">Board Members</p>
                  <p className="text-lg font-medium text-gray-700">Mr. Michael B. &bull; Dr. Grace A. &bull; Mr. David O.</p>
                </div>
              </div>
            </motion.div>

            {/* Down Arrow */}
            <div className="w-1 h-8 bg-gray-300 rounded-full" />

            {/* Headteacher */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
              className="bg-white rounded-[2rem] shadow-xl border border-gray-100 overflow-hidden w-full max-w-4xl flex flex-col md:flex-row"
            >
              <div className="md:w-2/5 relative h-80 md:h-auto bg-gray-100">
                <img 
                  src="/HM valley college.jpg" 
                  alt="Headteacher" 
                  className="absolute inset-0 w-full h-full object-contain"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="md:w-3/5 p-8 md:p-10 flex flex-col justify-center">
                <p className="text-sm font-bold text-primary uppercase tracking-wider mb-2">Headteacher</p>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">Ms. Kabezi Doreen</h3>
                <blockquote className="text-lg text-gray-700 leading-relaxed italic border-l-4 border-primary pl-4 mb-6">
                  "Our philosophy centers on holistic education, student empowerment, and creating an environment where every child feels valued and inspired to achieve their best."
                </blockquote>
                <p className="text-gray-600 leading-relaxed">
                  With extensive experience in educational leadership, Ms. Kabezi Doreen drives Valley College towards academic excellence. Under her guidance, the school consistently ranks among the top institutions in the region.
                </p>
              </div>
            </motion.div>
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
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Campus Life Gallery</h2>
            <p className="text-lg lg:text-xl text-gray-600">A glimpse into the vibrant life at Valley College</p>
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
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Zoom Parallax Gallery (Transferred from Home) */}
        <section className="bg-white text-gray-900 relative mt-24">
          <div className="relative flex h-[30vh] items-center justify-center overflow-hidden">
            <div className="text-center z-10">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Immersive View</h2>
              <p className="text-xl text-gray-500">Experience our campus environment</p>
            </div>
          </div>
          <ZoomParallax images={parallaxImages} />
          <div className="h-[20vh] bg-white" />
        </section>

      </div>
    </div>
  );
}
