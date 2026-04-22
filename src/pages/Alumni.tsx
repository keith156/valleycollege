import { Users, GraduationCap, HeartHandshake, MessageCircle, ExternalLink, Image as ImageIcon, Trophy, X, ChevronLeft, ChevronRight, Briefcase, MapPin, Calendar } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState, useCallback, useEffect } from 'react';
import { getSpotlight, SpotlightAlumnus } from '../lib/spotlight';
import { Carousel } from '../components/Carousel';


const CARDS_PER_PAGE = 3;

const galleryImages = [
  "VACO-15.jpg", "VACO-9.jpg", "VACO-10.jpg", "VACO-11.jpg", "VACO-12.jpg", "VACO-13.jpg", 
  "VACO-17.jpg", "VACO-18.jpg", "VACO-19.jpg", "VACO-20.jpg",
  "VACO-21.jpg", "VACO-22.jpg", "VACO-23.jpg", "VACO-24.jpg",
  "FCocfTQWQAMUN01.jpg"
];

export default function Alumni() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  // Carousel handles navigation and auto-play
  const alumni: SpotlightAlumnus[] = getSpotlight();



  const gridImages = galleryImages.slice(0, 7);
  const scrollImages = galleryImages;

  const handleNext = useCallback(() => {
    if (selectedIndex === null) return;
    setSelectedIndex((prev) => (prev! + 1) % galleryImages.length);
  }, [selectedIndex]);

  const handlePrev = useCallback(() => {
    if (selectedIndex === null) return;
    setSelectedIndex((prev) => (prev! - 1 + galleryImages.length) % galleryImages.length);
  }, [selectedIndex]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'Escape') setSelectedIndex(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex, handleNext, handlePrev]);

  // Layout helper for the featured bento cluster (7 images)
  const getBentoClass = (idx: number) => {
    switch (idx) {
      case 0: return 'md:col-span-2 md:row-span-2';
      case 1: return 'md:col-span-1 md:row-span-1';
      case 2: return 'md:col-span-1 md:row-span-1';
      case 3: return 'md:col-span-2 md:row-span-1';
      case 4: return 'md:col-span-1 md:row-span-1';
      case 5: return 'md:col-span-1 md:row-span-1';
      case 6: return 'md:col-span-2 md:row-span-1';
      default: return 'col-span-1 row-span-1';
    }
  };


  return (
    <div className="flex flex-col bg-gray-50">
      {/* Page Header */}
      <div className="relative bg-primary text-white py-20 lg:py-24 overflow-hidden">
        <div className="absolute inset-0">
          <div className="w-full h-full bg-gray-900" />
          <img
            src="/alumni gallery/VACO-11.jpg"
            alt="Alumni at Valley College"
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
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 drop-shadow-md">Alumni</h1>
            <p className="text-lg lg:text-xl text-white drop-shadow-sm">
              Connecting past students, celebrating success, and building a lifelong community.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
        
        {/* Introduction - Side by Side */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch mb-16">

          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-primary font-bold mb-6 w-fit">
              <Users size={20} /> Our Community
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-gray-900 leading-tight">A Legacy of <br/><span className="text-primary">Excellence</span></h2>
            <p className="text-base lg:text-lg text-gray-600 mb-8 leading-relaxed">
              The Valley College Alumni Network is a vibrant community of former students who have passed through the gates of our great institution. We are leaders, innovators, professionals, and change-makers spread across the globe. Our network exists to foster lifelong connections and provide mentorship to the next generation.
            </p>
            <a href="#" className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-bold transition-all hover:scale-105 shadow-lg hover:shadow-green-500/30 w-fit">
              <MessageCircle size={24} /> Join the Official WhatsApp Group
            </a>
          </motion.div>
          
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="rounded-3xl overflow-hidden shadow-lg">
            <img 
              src="/alumni gallery/VACO-15.jpg" 
              alt="Alumni community" 
              className="w-full h-full object-cover" 
              referrerPolicy="no-referrer" 
              loading="lazy"
              decoding="async"
            />
          </motion.div>
        </div>

        {/* Alumni Spotlight — Paginated Cards with Arrows */}
        <motion.div id="spotlight" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">

          <div className="flex flex-col items-center text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center justify-center gap-3">
              <GraduationCap className="text-primary" size={32} /> Alumni Spotlight
            </h2>
            <p className="text-gray-600 text-base lg:text-lg max-w-4xl">Meet our outstanding alumni making significant contributions across the globe.</p>
          </div>

          {/* Cards Carousel */}
          {alumni.length > 0 && (
            <div className="-mx-4 sm:-mx-8">
              <Carousel autoPlayInterval={6000}>
                {alumni.map((person) => (
                  <div
                    key={person.id}
                    className="snap-start shrink-0 w-[85%] sm:w-[280px] md:w-[320px] group bg-white rounded-[2rem] shadow-lg border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-500 flex flex-col"
                  >
                    {/* Photo */}
                    <div className="w-full h-72 md:h-80 relative overflow-hidden bg-gray-100 shrink-0">
                      {person.imageUrl ? (
                        <img
                          src={person.imageUrl}
                          alt={person.name}
                          className="absolute inset-0 w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-700"
                          loading="lazy"
                          decoding="async"
                          onError={(e) => {
                            const target = e.currentTarget;
                            target.style.display = 'none';
                            const parent = target.parentElement;
                            if (parent) {
                              parent.innerHTML = `<div class="w-full h-full flex flex-col items-center justify-center bg-blue-50 gap-2"><svg xmlns='http://www.w3.org/2000/svg' width='48' height='48' viewBox='0 0 24 24' fill='none' stroke='#001a40' stroke-width='1.5'><circle cx='12' cy='8' r='4'/><path d='M4 20c0-4 3.6-7 8-7s8 3 8 7'/></svg></div>`;
                            }
                          }}
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-blue-50">
                          <GraduationCap size={48} className="text-primary/30" />
                        </div>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                    </div>

                    {/* Info */}
                    <div className="p-5 md:p-6 flex flex-col gap-4 grow">
                      <div className="flex flex-col gap-2">
                        <h3 className="text-lg font-black text-gray-900 leading-tight group-hover:text-primary transition-colors">
                          {person.name}
                        </h3>
                        <div className="flex items-center gap-1.5 bg-blue-50 text-primary text-[10px] font-bold px-3 py-1 rounded-full shrink-0 w-fit">
                          <Calendar size={12} /> {person.period}
                        </div>
                      </div>
                      
                      <div className="space-y-3">
                        <div className="flex items-start gap-3 text-gray-700">
                          <div className="bg-blue-50 p-2 rounded-lg text-primary">
                            <Briefcase size={16} className="shrink-0" />
                          </div>
                          <span className="text-sm font-bold leading-tight">{person.profession}</span>
                        </div>
                        <div className="flex items-start gap-3 text-gray-500">
                          <div className="bg-gray-50 p-2 rounded-lg">
                            <MapPin size={16} className="shrink-0" />
                          </div>
                          <span className="text-sm font-medium leading-tight">{person.workStation}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </Carousel>
            </div>
          )}
        </motion.div>


        {/* Alumni College League Section */}
        <section id="league" className="mb-16">

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-[3rem] shadow-xl border border-gray-100 overflow-hidden"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Text & Logo Side */}
              <div className="p-10 lg:p-20 flex flex-col justify-center relative">
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
                
                <div className="relative z-10">
                  <div className="flex items-center gap-6 mb-10">
                    <img 
                      src="/alumni gallery/valleycollegeleaguelogo.png" 
                      alt="VACL Logo" 
                      className="w-24 h-24 object-contain"
                    />
                    <div className="w-px h-16 bg-gray-200" />
                    <div className="bg-blue-50 text-primary p-4 rounded-2xl">
                      <Trophy size={32} />
                    </div>
                  </div>

                  <h2 className="text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                    Valley College <br/>
                    <span className="text-primary">Alumni League</span>
                  </h2>
                  
                  <div className="space-y-6 text-base lg:text-lg text-gray-600 leading-relaxed mb-10">
                    <p className="font-bold text-gray-900 italic">"Competition • Camaraderie • Community"</p>
                    <p>
                      The Valley College Alumni League (VACL) is our premier platform for former students to stay connected through competitive spirit and teamwork. 
                    </p>
                    <p>
                      Whether it's the high-stakes football tournaments or the regular networking mixers, the league ensures that the Valley College legacy continues to thrive across generations. Join a team today and keep the blue and white flag flying high!
                    </p>
                  </div>
                  <div className="flex flex-col gap-6">
                    <button className="bg-primary text-white px-8 py-4 rounded-2xl font-bold hover:bg-blue-900 transition-all shadow-lg hover:shadow-primary/30 flex items-center gap-2 group w-fit">
                      Register Your Team
                      <ExternalLink size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Poster Side */}
              <div className="relative h-[500px] lg:h-auto overflow-hidden bg-gray-100">
                <motion.img 
                  initial={{ scale: 1.1 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 1.5 }}
                  src="/alumni gallery/poster.jpg" 
                  alt="Alumni League Poster" 
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-l from-black/20 to-transparent pointer-events-none" />
              </div>
            </div>
          </motion.div>
        </section>

        {/* Funding Project - Centered & Prominent */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-7xl mx-auto mb-16">

          <div className="bg-white p-10 lg:p-16 rounded-[2.5rem] shadow-xl border border-gray-100 relative overflow-hidden">
            {/* Decorative Background Elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-50/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-primary/5 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3 pointer-events-none" />
            
            <div className="relative z-10">
              <div className="flex flex-col items-center text-center mb-10">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-50 text-primary mb-6 shadow-sm border border-blue-100">
                  <HeartHandshake size={32} />
                </div>
                <h2 id="giveback" className="text-3xl lg:text-4xl font-bold mb-4 text-gray-900">Alumni Giveback Project</h2>
                <p className="text-lg lg:text-xl text-gray-600 max-w-4xl leading-relaxed">
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

        {/* Alumni Gallery Section */}
        <motion.section 
          id="gallery"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative pt-8 pb-8"

        >
          <div className="flex flex-col items-center text-center mb-10">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-blue-100 text-primary mb-4 shadow-sm">
              <ImageIcon size={28} />
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-4 tracking-tight">Alumni Gallery</h2>
            <div className="h-1.5 w-24 bg-primary rounded-full mb-4" />
            <p className="text-lg lg:text-xl text-gray-600 max-w-4xl">Capturing memories and milestones of our alumni community through the years.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 auto-rows-[150px] md:auto-rows-[250px] mb-12">

            {gridImages.map((image, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: (idx % 4) * 0.1 }}
                onClick={() => setSelectedIndex(idx)}
                className={`group relative rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 bg-gray-50 cursor-pointer ${getBentoClass(idx)}`}
              >
                <img
                  src={`/alumni gallery/${image}`}
                  alt={`Alumni memory ${idx + 1}`}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </motion.div>
            ))}
          </div>

          {/* Continuous Auto-Scroll Section */}
          <div className="relative mt-4 overflow-hidden py-2 bg-gray-50/50 rounded-[3rem] border border-gray-100">
            <div className="flex whitespace-nowrap overflow-hidden">
              <motion.div 
                animate={{ x: ["0%", "-50%"] }}
                transition={{ duration: 30, ease: "linear", repeat: Infinity }}
                className="flex gap-6 px-3"
              >
                {[...scrollImages, ...scrollImages].map((image, idx) => {
                  const originalIdx = idx % scrollImages.length;
                  return (
                    <div 
                      key={idx}
                      onClick={() => setSelectedIndex(originalIdx)}
                      className="w-56 h-56 md:w-80 md:h-80 rounded-3xl overflow-hidden shadow-lg border-4 border-white shrink-0 cursor-pointer transition-transform hover:scale-105"
                    >
                      <img 
                        src={`/alumni gallery/${image}`} 
                        alt={`Scroll image ${idx}`} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  );
                })}
              </motion.div>
            </div>
            
            {/* Fade effect edges */}
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-gray-50 to-transparent z-10" />
            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-gray-50 to-transparent z-10" />
          </div>
        </motion.section>

        {/* Lightbox Modal */}
        <AnimatePresence mode="wait">
          {selectedIndex !== null && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-md flex items-center justify-center p-4 md:p-10"
            >
              {/* Backdrop Click */}
              <div 
                className="absolute inset-0 cursor-zoom-out" 
                onClick={() => setSelectedIndex(null)} 
              />

              {/* Close Button */}
              <button 
                onClick={() => setSelectedIndex(null)}
                className="absolute top-6 right-6 p-4 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors z-[110]"
              >
                <X size={32} />
              </button>

              {/* Navigation Arrows */}
              <button 
                onClick={(e) => { e.stopPropagation(); handlePrev(); }}
                className="absolute left-6 top-1/2 -translate-y-1/2 p-4 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors z-[110] hidden md:block"
              >
                <ChevronLeft size={48} />
              </button>
              
              <button 
                onClick={(e) => { e.stopPropagation(); handleNext(); }}
                className="absolute right-6 top-1/2 -translate-y-1/2 p-4 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors z-[110] hidden md:block"
              >
                <ChevronRight size={48} />
              </button>
              
              {/* Image Container */}
              <motion.div 
                key={selectedIndex}
                initial={{ scale: 0.9, opacity: 0, x: 20 }}
                animate={{ scale: 1, opacity: 1, x: 0 }}
                exit={{ scale: 1.1, opacity: 0, x: -20 }}
                className="relative max-w-6xl w-full h-[80vh] flex items-center justify-center z-[105] pointer-events-none"
              >
                <img 
                  src={`/alumni gallery/${galleryImages[selectedIndex]}`} 
                  alt="Full preview" 
                  className="max-w-full max-h-full object-contain rounded-xl shadow-2xl pointer-events-auto"
                />
              </motion.div>

              {/* Mobile Swipe / Tap Hint */}
              <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 text-sm md:hidden">
                Tap edges to navigate
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
}
