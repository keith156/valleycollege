import { Users, GraduationCap, HeartHandshake, MessageCircle, ExternalLink, Image as ImageIcon, Trophy, X, ChevronLeft, ChevronRight, Briefcase, MapPin, Calendar, Building2, Laptop, BookOpen, Heart } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState, useCallback, useEffect } from 'react';

import { getSpotlight, SpotlightAlumnus } from '../lib/spotlight';
import { getContributors, Contributor } from '../lib/contributors';
import { Carousel } from '../components/Carousel';
import { SEO } from '../components/SEO';
import { parseImageCaption } from '../utils/imageUtils';


const CARDS_PER_PAGE = 3;

const galleryImages = [
  "VACO-15$Valley College Alumni League.webp", "VACO-9$Old students leading Class Discussion.webp", "VACO-10$Valley College Alumni League.webp", "vaco -99$Class of 1999.webp", "VACO-12$Valley College Alumni League.webp", "VACO-13$Valley College Alumni League.webp", 
  "VACO-17$Alumni Diner.webp", "VACO-14.webp", "VACO-20.webp", "VACO-24.webp",
  "VACO-4.webp", "VACO-5.webp", "VACO-6.webp", "VACO-7.webp",
  "FCocDmcWUA4QFd2.webp"
];

const leagueImages = [
  "vaco_league_1.webp", "vaco_league_2.webp", "vaco_league_3.webp", "vaco_league_4.webp", 
  "vaco_league_5.webp", "vaco_league_6.webp", "vaco_league_7.webp", "vaco_league_8.webp", 
  "vaco_league_9.webp", "vaco_league_10.webp", "vaco_league_11.webp"
];

const slider1Images = [
  "1.webp", "2.webp", "3.webp", "4.webp", "5.webp", "6.webp", "8.webp", "9.webp", "10.webp",
  "11.webp", "12.webp", "13.webp", "14.webp", "15.webp", "16.webp", "17.webp", "18.webp", "19.webp",
  "20.webp", "21.webp", "22.webp", "23.webp", "24.webp", "FCocfTQWQAMUN01.webp", "VACO-19.webp", "VACO-23.webp"
];

const slider2Images = [
  "A1.webp", "A2.webp", "A3.webp", "A4.webp", "A5.webp", "A6.webp", "A7.webp", "A8.webp", "A9.webp", "A10.webp",
  "A11.webp", "A12.webp", "A13.webp", "A14.webp", "A15.webp", "A16.webp", "A17.webp", "A18.webp", "A19.webp", "A20.webp",
  "A21.webp", "A22.webp", "A23.webp", "A24.webp", "A25.webp", "A26.webp"
];

const PROJECT_GOAL = 250_000_000; // UGX 250 Million (whole project goal)

function ProjectDescription() {
  const [expanded, setExpanded] = useState(false);
  return (
    <div className="mb-8">
      <p className="text-gray-600 leading-relaxed mb-3">
        The project will be implemented in <strong>three phases</strong>:
      </p>
      {expanded && (
        <div className="text-gray-600 leading-relaxed space-y-4 text-sm">
          <div>
            <p className="font-bold text-gray-800 mb-1">Phase I – Administrative Wing</p>
            <p>This phase will include the Headteacher's office, Deputy Headteachers' offices, Accounts office, Reception and records office, Staff room and boardroom, Storage facilities, Reception/waiting area, and Washrooms and circulation spaces.</p>
          </div>
          <div>
            <p className="font-bold text-gray-800 mb-1">Phase II – ICT & Digital Learning Centre</p>
            <p>This phase will establish a modern computer laboratory, ICT equipment and server room, Internet and networking infrastructure, and digital learning support facilities.</p>
          </div>
          <div>
            <p className="font-bold text-gray-800 mb-1">Phase III – Library & Resource Centre</p>
            <p>This phase will provide a main library hall, reading and discussion spaces, research and reference section, and e-learning and study areas.</p>
          </div>
          <p className="italic text-gray-500 border-l-4 border-primary pl-3">
            We call upon all alumni, friends, and well-wishers to join hands in supporting this transformational legacy project for future generations of Valley College students.
          </p>
        </div>
      )}
      <button
        onClick={() => setExpanded(e => !e)}
        className="mt-3 text-sm font-bold text-primary hover:text-blue-800 underline underline-offset-2 transition-colors"
      >
        {expanded ? 'Show less ↑' : 'Read all ↓'}
      </button>
    </div>
  );
}

export default function Alumni() {
  const [lightbox, setLightbox] = useState<{ images: string[], index: number, prefix: string } | null>(null);
  const [spotlightLB, setSpotlightLB] = useState<{ index: number } | null>(null);
  const [alumni, setAlumni] = useState<SpotlightAlumnus[]>([]);
  const [contributors, setContributors] = useState<Contributor[]>([]);
  const [showContributors, setShowContributors] = useState(false);

  const totalRaised = contributors.reduce((sum, c) => sum + c.amount, 0);
  const progressPercent = Math.min(Math.round((totalRaised / PROJECT_GOAL) * 100), 100);

  useEffect(() => {
    const fetchAlumni = async () => {
      const data = await getSpotlight();
      const sorted = [...data].sort((a, b) => b.period.localeCompare(a.period));
      setAlumni(sorted);
    };
    const fetchContributors = async () => {
      const data = await getContributors();
      setContributors(data);
    };
    fetchAlumni();
    fetchContributors();
  }, []);

  const gridImages = galleryImages.slice(0, 7);

  const handleNext = useCallback(() => {
    if (!lightbox) return;
    setLightbox(prev => prev ? { ...prev, index: (prev.index + 1) % prev.images.length } : null);
  }, [lightbox]);

  const handlePrev = useCallback(() => {
    if (!lightbox) return;
    setLightbox(prev => prev ? { ...prev, index: (prev.index - 1 + prev.images.length) % prev.images.length } : null);
  }, [lightbox]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (spotlightLB) {
        if (e.key === 'ArrowRight') setSpotlightLB(prev => prev ? { index: (prev.index + 1) % alumni.length } : null);
        if (e.key === 'ArrowLeft') setSpotlightLB(prev => prev ? { index: (prev.index - 1 + alumni.length) % alumni.length } : null);
        if (e.key === 'Escape') setSpotlightLB(null);
        return;
      }
      if (!lightbox) return;
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'Escape') setLightbox(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightbox, spotlightLB, alumni.length, handleNext, handlePrev]);

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
      <SEO 
        title="Alumni Network & Community"
        description="Join the Valley College Alumni Network — connecting graduates, leaders, innovators, and professionals from Valley College Secondary School Bushenyi. Featuring alumni spotlight, the Valley College Alumni League (VACL), and community giveback projects."
        keywords="Valley College Alumni, Valley College alumni network, VACL alumni league, alumni community Uganda, Valley College graduates, school alumni Bushenyi"
        path="/alumni"
      />
      {/* Page Header */}
      <div className="relative bg-primary text-white py-20 lg:py-24 overflow-hidden">
        <div className="absolute inset-0">
          <div className="w-full h-full bg-gray-900" />
          <img
            src="/alumni gallery/VACO-11.webp"
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
              Connecting our global community of former students from one of the <span className="font-bold border-b-2 border-white/30">best secondary schools in Uganda</span>.
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
            <div className="flex items-center gap-4">
              <a href="https://chat.whatsapp.com/E54b48dGuZKLZj1FoShlVz?mode=gi_t" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-6 py-4 rounded-full font-bold transition-all hover:scale-105 shadow-lg hover:shadow-green-500/30 w-fit">
                <MessageCircle size={24} /> Join the Official WhatsApp Group
              </a>
              <img src="/group_icon.webp" alt="Valley College Alumni WhatsApp Group" className="w-20 h-20 md:w-24 md:h-24 rounded-full shadow-lg border-[3px] border-green-500 object-cover hover:scale-105 transition-transform" />
            </div>
          </motion.div>
          
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="rounded-3xl overflow-hidden shadow-lg">
            <img 
              src="/alumni gallery/VACO-15$Valley College Alumni League.webp" 
              alt="Alumni community" 
              className="w-full h-full object-cover object-top" 
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
            <p className="text-gray-600 text-base lg:text-lg max-w-6xl">Meet some of our outstanding alumni making significant contributions across the globe. As leaders, innovators, educators, and changemakers, they embody the spirit of excellence nurtured by our institution and continue to make us proud through their remarkable accomplishments.</p>
          </div>

          {/* Cards Carousel */}
          {alumni.length > 0 && (
            <div className="-mx-4 sm:-mx-8">
              <Carousel autoPlayInterval={0} continuousScroll={true}>
                {alumni.map((person) => (
                  <div
                    key={person.id}
                    onClick={() => setSpotlightLB({ index: alumni.indexOf(person) })}
                    className="snap-start shrink-0 w-[85%] sm:w-[280px] md:w-[320px] group bg-white rounded-[2rem] shadow-lg border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-500 flex flex-col cursor-pointer"
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
                            target.src = "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop"; // Better fallback
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
                      src="/alumni gallery/valleycollegeleaguelogo.webp" 
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
                    <a href="https://wa.me/256702171521" target="_blank" rel="noopener noreferrer" className="bg-primary text-white px-8 py-4 rounded-2xl font-bold hover:bg-blue-900 transition-all shadow-lg hover:shadow-primary/30 flex items-center gap-2 group w-fit">
                      Register Your Team
                      <ExternalLink size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Poster Side */}
              <div className="relative h-[500px] lg:h-auto overflow-hidden bg-gray-100">
                <motion.img 
                  initial={{ scale: 1.1 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 1.5 }}
                  src="/alumni gallery/poster.webp" 
                  alt="Alumni League Poster" 
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-l from-black/20 to-transparent pointer-events-none" />
              </div>
            </div>

            {/* League Gallery Row */}
            <div className="bg-gray-50/50 border-t border-gray-100 p-6">
              <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-none snap-x">
                  {leagueImages.map((img, idx) => (
                  <div 
                    key={idx} 
                    onClick={() => setLightbox({ images: leagueImages, index: idx, prefix: '/league2/' })}
                    className="shrink-0 w-40 h-28 md:w-56 md:h-40 rounded-2xl overflow-hidden shadow-sm border-2 border-white snap-center hover:scale-105 transition-transform duration-300 cursor-pointer relative"
                  >
                    <img 
                      src={`/league2/${img}`} 
                      alt={parseImageCaption(img) || `League event ${idx + 1}`} 
                      className="w-full h-full object-cover"
                    />
                    {parseImageCaption(img) && (
                      <div className="absolute bottom-0 left-0 right-0 bg-[#001a40] text-white py-1 px-2 text-[8px] md:text-[10px] font-bold text-center z-10">
                        {parseImageCaption(img)}
                      </div>
                    )}
                  </div>
                  ))}
              </div>
            </div>
          </motion.div>
        </section>

        {/* Alumni Giveback Project - 3-Level Admin Block */}
        <motion.div id="giveback" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">

          {/* Header */}
          <div className="flex flex-col items-center text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-blue-50 text-primary mb-4 shadow-sm border border-blue-100">
              <HeartHandshake size={30} />
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary font-bold text-sm mb-4">
              Legacy Project
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-gray-900">Alumni Giveback Project</h2>
            <p className="text-lg text-gray-500 max-w-3xl leading-relaxed">
              Valley College Secondary School invites all Old Boys and Old Girls to support the construction of a modern
              <span className="font-bold text-gray-700"> 3-Level Administration Block</span> aimed at improving administration, digital learning, and academic research facilities within the school.
            </p>
          </div>

          {/* Hero: Image + Intro */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
            {/* Architectural Image */}
            <motion.div
              initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              className="relative rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white min-h-[320px] lg:min-h-[420px]"
            >
              <img
                src="/vaco admin block.jpeg"
                alt="Proposed 3-Level Administration Block - Valley College"
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-bold px-4 py-2 rounded-full">
                  <Building2 size={16} /> Proposed 3-Level Administration Block
                </span>
              </div>
            </motion.div>

            {/* Progress & CTA */}
            <motion.div
              initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              className="flex flex-col justify-center bg-white rounded-[2rem] shadow-xl border border-gray-100 p-8 lg:p-10 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50/60 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
              <div className="relative z-10">
                <ProjectDescription />

                {/* Progress Bar */}
                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200 mb-6">
                  <div className="flex justify-between items-end mb-3">
                    <div>
                      <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">Raised so far</p>
                      <p className="text-2xl font-black text-primary">
                        UGX {totalRaised >= 1_000_000
                          ? `${(totalRaised / 1_000_000).toFixed(1)}M`
                          : totalRaised.toLocaleString()}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">Project Goal</p>
                      <p className="text-lg font-bold text-gray-400">UGX 250M</p>
                    </div>
                  </div>
                  <div className="w-full h-5 bg-gray-200 rounded-full overflow-hidden mb-2 shadow-inner">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${progressPercent}%` }}
                      transition={{ duration: 1.5, ease: 'easeOut', delay: 0.2 }}
                      className="h-full bg-gradient-to-r from-blue-400 via-primary to-blue-700 rounded-full relative"
                    >
                      <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(255,255,255,0.15)_25%,transparent_25%,transparent_50%,rgba(255,255,255,0.15)_50%,rgba(255,255,255,0.15)_75%,transparent_75%,transparent)] bg-[length:1.5rem_1.5rem]" />
                    </motion.div>
                  </div>
                  <p className="text-center text-sm font-bold text-primary">{progressPercent}% Funded</p>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="https://wa.me/256702171521"
                    target="_blank" rel="noopener noreferrer"
                    className="flex-1 bg-primary text-white py-3.5 px-6 rounded-2xl font-bold hover:bg-blue-900 transition-all shadow-lg hover:shadow-primary/30 hover:-translate-y-0.5 flex items-center justify-center gap-2"
                  >
                    <Heart size={18} /> Contribute Now
                  </a>
                  <button
                    onClick={() => setShowContributors(true)}
                    className="flex-1 bg-white text-primary border-2 border-gray-200 py-3.5 px-6 rounded-2xl font-bold hover:border-primary hover:bg-blue-50 transition-all flex items-center justify-center gap-2"
                  >
                    <Users size={18} /> View Contributors
                  </button>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Three Phases */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Phase I */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0 }} className="bg-white rounded-[1.5rem] shadow-lg border border-gray-100 overflow-hidden group hover:shadow-xl transition-shadow">
              <div className="bg-gradient-to-br from-primary to-blue-800 p-6 text-white">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-black uppercase tracking-widest bg-white/20 px-3 py-1 rounded-full">Phase I</span>
                  <Building2 size={24} className="opacity-80" />
                </div>
                <h3 className="text-xl font-black text-white">Administrative Wing</h3>
              </div>
              <div className="p-6">
                <ul className="space-y-2">
                  {['Headteacher\'s office', 'Deputy Headteachers\' offices', 'Accounts office', 'Reception & records office', 'Staff room and boardroom', 'Storage facilities', 'Reception/waiting area', 'Washrooms & circulation spaces'].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Phase II */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="bg-white rounded-[1.5rem] shadow-lg border border-gray-100 overflow-hidden group hover:shadow-xl transition-shadow">
              <div className="bg-gradient-to-br from-blue-500 to-cyan-600 p-6 text-white">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-black uppercase tracking-widest bg-white/20 px-3 py-1 rounded-full">Phase II</span>
                  <Laptop size={24} className="opacity-80" />
                </div>
                <h3 className="text-xl font-black text-white">ICT & Digital Learning Centre</h3>
              </div>
              <div className="p-6">
                <ul className="space-y-2">
                  {['Modern computer laboratory', 'ICT equipment and server room', 'Internet and networking infrastructure', 'Digital learning support facilities'].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Phase III */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="bg-white rounded-[1.5rem] shadow-lg border border-gray-100 overflow-hidden group hover:shadow-xl transition-shadow">
              <div className="bg-gradient-to-br from-emerald-600 to-teal-700 p-6 text-white">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-black uppercase tracking-widest bg-white/20 px-3 py-1 rounded-full">Phase III</span>
                  <BookOpen size={24} className="opacity-80" />
                </div>
                <h3 className="text-xl font-black text-white">Library & Resource Centre</h3>
              </div>
              <div className="p-6">
                <ul className="space-y-2">
                  {['Main library hall', 'Reading and discussion spaces', 'Research and reference section', 'E-learning and study areas'].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Contributors Modal */}
        <AnimatePresence>
          {showContributors && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] bg-black/70 backdrop-blur-md flex items-center justify-center p-4"
            >
              <div className="absolute inset-0 cursor-zoom-out" onClick={() => setShowContributors(false)} />
              <motion.div
                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 20 }}
                className="relative bg-white rounded-3xl shadow-2xl max-w-lg w-full max-h-[85vh] flex flex-col z-10 overflow-hidden"
              >
                {/* Modal Header */}
                <div className="bg-gradient-to-r from-primary to-blue-700 p-6 text-white">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-xl font-black text-white">Our Contributors</h3>
                      <p className="text-blue-200 text-sm mt-0.5">{contributors.length} supporter{contributors.length !== 1 ? 's' : ''} · UGX {totalRaised >= 1_000_000 ? `${(totalRaised / 1_000_000).toFixed(1)}M` : totalRaised.toLocaleString()} raised</p>
                    </div>
                    <button onClick={() => setShowContributors(false)} className="p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors">
                      <X size={20} />
                    </button>
                  </div>
                  {/* Mini Progress Bar */}
                  <div className="mt-4 w-full h-2 bg-white/20 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${progressPercent}%` }}
                      transition={{ duration: 1, delay: 0.3 }}
                      className="h-full bg-white rounded-full"
                    />
                  </div>
                  <p className="text-right text-xs text-blue-200 mt-1 font-bold">{progressPercent}% of UGX 250M goal</p>
                </div>

                {/* Contributors List */}
                <div className="overflow-y-auto flex-1">
                  {contributors.length > 0 ? (
                    <div className="divide-y divide-gray-100">
                      {contributors.map((c, idx) => (
                        <div key={c.id} className="flex items-center gap-4 p-4 hover:bg-gray-50 transition-colors">
                          <div className="w-10 h-10 rounded-full bg-blue-50 text-primary flex items-center justify-center font-black text-sm shrink-0">
                            {idx + 1}
                          </div>
                          <div className="flex-1">
                            <p className="font-bold text-gray-900">{c.name}</p>
                            {c.date && <p className="text-xs text-gray-400">{c.date}</p>}
                          </div>
                          <div className="text-right">
                            <p className="font-black text-primary text-sm">UGX {c.amount.toLocaleString()}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="flex flex-col items-center justify-center p-12 text-center">
                      <Heart size={40} className="text-gray-200 mb-3" />
                      <p className="text-gray-500 font-medium">No contributors yet.</p>
                      <p className="text-gray-400 text-sm mt-1">Be the first to support this project!</p>
                    </div>
                  )}
                </div>

                {/* Footer */}
                <div className="p-4 border-t border-gray-100 bg-gray-50">
                  <a
                    href="https://wa.me/256702171521"
                    target="_blank" rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 bg-primary text-white py-3 rounded-2xl font-bold hover:bg-blue-900 transition-colors"
                  >
                    <Heart size={16} /> Join the Cause
                  </a>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

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
                onClick={() => setLightbox({ images: galleryImages, index: idx, prefix: '/alumni gallery/' })}
                className={`group relative rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 bg-gray-50 cursor-pointer ${getBentoClass(idx)}`}
              >
                <img
                  src={`/alumni gallery/${image}`}
                  alt={parseImageCaption(image) || `Alumni memory ${idx + 1}`}
                  className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                
                {parseImageCaption(image) && (
                  <div className="absolute bottom-0 left-0 right-0 bg-[#001a40] text-white py-1.5 px-3 text-[10px] sm:text-xs font-bold text-center z-10 border-t border-white/10">
                    {parseImageCaption(image)}
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Dual Auto-Scroll Section */}
          <div className="space-y-12 mt-12 relative overflow-hidden">
            {/* Slider 1: Right to Left */}
            <div className="relative overflow-hidden py-2 bg-gray-50/50 rounded-[2rem] border border-gray-100">
              <div className="flex whitespace-nowrap overflow-hidden">
                <motion.div 
                  animate={{ x: ["0%", "-50%"] }}
                  transition={{ duration: 150, ease: "linear", repeat: Infinity }}
                  className="flex gap-6 px-3"
                >
                  {[...slider1Images, ...slider1Images].map((image, idx) => (
                    <div 
                      key={idx}
                      onClick={() => setLightbox({ images: slider1Images, index: idx % slider1Images.length, prefix: '/slider1 alumni/' })}
                      className="w-56 h-56 md:w-72 md:h-72 rounded-3xl overflow-hidden shadow-lg border-4 border-white shrink-0 cursor-pointer transition-transform hover:scale-105 relative"
                    >
                      <img 
                        src={`/slider1 alumni/${image}`} 
                        alt={parseImageCaption(image) || `Slider 1 image ${image}`} 
                        className="w-full h-full object-cover object-top"
                        loading="lazy"
                      />
                      {parseImageCaption(image) && (
                        <div className="absolute bottom-0 left-0 right-0 bg-[#001a40] text-white py-2 px-3 text-xs font-bold text-center z-10">
                          {parseImageCaption(image)}
                        </div>
                      )}
                    </div>
                  ))}
                </motion.div>
              </div>
              <div className="absolute inset-y-0 left-0 w-8 md:w-16 bg-gradient-to-r from-gray-50 to-transparent z-10" />
              <div className="absolute inset-y-0 right-0 w-8 md:w-16 bg-gradient-to-l from-gray-50 to-transparent z-10" />
            </div>

            {/* Slider 2: Left to Right */}
            <div className="relative overflow-hidden py-2 bg-gray-100/30 rounded-[2rem] border border-gray-100">
              <div className="flex whitespace-nowrap overflow-hidden">
                <motion.div 
                  animate={{ x: ["-50%", "0%"] }}
                  transition={{ duration: 180, ease: "linear", repeat: Infinity }}
                  className="flex gap-6 px-3"
                >
                  {[...slider2Images, ...slider2Images].map((image, idx) => (
                    <div 
                      key={idx}
                      onClick={() => setLightbox({ images: slider2Images, index: idx % slider2Images.length, prefix: '/slider2 allumni/' })}
                      className="w-56 h-56 md:w-72 md:h-72 rounded-3xl overflow-hidden shadow-lg border-4 border-white shrink-0 cursor-pointer transition-transform hover:scale-105 relative"
                    >
                      <img 
                        src={`/slider2 allumni/${image}`} 
                        alt={parseImageCaption(image) || `Slider 2 image ${image}`} 
                        className="w-full h-full object-cover object-top"
                        loading="lazy"
                      />
                      {parseImageCaption(image) && (
                        <div className="absolute bottom-0 left-0 right-0 bg-[#001a40] text-white py-2 px-3 text-xs font-bold text-center z-10">
                          {parseImageCaption(image)}
                        </div>
                      )}
                    </div>
                  ))}
                </motion.div>
              </div>
              <div className="absolute inset-y-0 left-0 w-8 md:w-16 bg-gradient-to-r from-gray-50 to-transparent z-10" />
              <div className="absolute inset-y-0 right-0 w-8 md:w-16 bg-gradient-to-l from-gray-50 to-transparent z-10" />
            </div>
          </div>
        </motion.section>

        {/* Lightbox Modal */}
        <AnimatePresence mode="wait">
          {lightbox !== null && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-md flex items-center justify-center p-4 md:p-10"
            >
              {/* Backdrop Click */}
              <div 
                className="absolute inset-0 cursor-zoom-out" 
                onClick={() => setLightbox(null)} 
              />

              {/* Close Button */}
              <button 
                onClick={() => setLightbox(null)}
                className="absolute top-6 right-6 p-4 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors z-[110]"
              >
                <X size={32} />
              </button>

              {/* Navigation Arrows — visible on all devices */}
              <button 
                onClick={(e) => { e.stopPropagation(); handlePrev(); }}
                className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 p-2 md:p-4 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors z-[110]"
              >
                <ChevronLeft size={28} className="md:hidden" />
                <ChevronLeft size={48} className="hidden md:block" />
              </button>
              
              <button 
                onClick={(e) => { e.stopPropagation(); handleNext(); }}
                className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 p-2 md:p-4 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors z-[110]"
              >
                <ChevronRight size={28} className="md:hidden" />
                <ChevronRight size={48} className="hidden md:block" />
              </button>
              
              {/* Image Container */}
              <motion.div 
                key={lightbox.index}
                initial={{ scale: 0.9, opacity: 0, x: 20 }}
                animate={{ scale: 1, opacity: 1, x: 0 }}
                exit={{ scale: 1.1, opacity: 0, x: -20 }}
                className="relative max-w-6xl w-full h-[80vh] flex items-center justify-center z-[105] pointer-events-none"
              >
                <img 
                  src={`${lightbox.prefix}${lightbox.images[lightbox.index]}`} 
                  alt={parseImageCaption(lightbox.images[lightbox.index]) || "Full preview"} 
                  className="max-w-full max-h-full object-contain rounded-xl shadow-2xl pointer-events-auto"
                />
                
                {/* Subtitle in Lightbox */}
                {parseImageCaption(lightbox.images[lightbox.index]) && (
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-[#001a40] text-white py-2 px-6 rounded-full text-sm font-bold shadow-xl border border-white/20 pointer-events-auto">
                    {parseImageCaption(lightbox.images[lightbox.index])}
                  </div>
                )}
              </motion.div>

              {/* Image Counter */}
              <div className="absolute top-8 left-1/2 -translate-x-1/2 text-white font-bold bg-white/10 px-4 py-1 rounded-full backdrop-blur-md">
                {lightbox.index + 1} / {lightbox.images.length}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Alumni Spotlight Lightbox */}
        <AnimatePresence mode="wait">
          {spotlightLB !== null && alumni[spotlightLB.index] && (() => {
            const person = alumni[spotlightLB.index];
            return (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-md flex items-center justify-center p-4 md:p-10"
              >
                <div className="absolute inset-0 cursor-zoom-out" onClick={() => setSpotlightLB(null)} />

                <button onClick={() => setSpotlightLB(null)} className="absolute top-4 right-4 md:top-6 md:right-6 p-3 md:p-4 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors z-[110]">
                  <X size={24} />
                </button>

                {/* Navigation Arrows */}
                <button
                  onClick={(e) => { e.stopPropagation(); setSpotlightLB(prev => prev ? { index: (prev.index - 1 + alumni.length) % alumni.length } : null); }}
                  className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 p-2 md:p-4 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors z-[110]"
                >
                  <ChevronLeft size={28} className="md:hidden" />
                  <ChevronLeft size={48} className="hidden md:block" />
                </button>
                <button
                  onClick={(e) => { e.stopPropagation(); setSpotlightLB(prev => prev ? { index: (prev.index + 1) % alumni.length } : null); }}
                  className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 p-2 md:p-4 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors z-[110]"
                >
                  <ChevronRight size={28} className="md:hidden" />
                  <ChevronRight size={48} className="hidden md:block" />
                </button>

                {/* Profile Card */}
                <motion.div
                  key={spotlightLB.index}
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.9, opacity: 0 }}
                  className="relative z-[105] bg-white rounded-3xl overflow-hidden shadow-2xl max-w-lg w-full max-h-[90vh] flex flex-col"
                >
                  {/* Large Photo */}
                  <div className="w-full h-72 sm:h-96 relative overflow-hidden bg-gray-100 shrink-0">
                    {person.imageUrl ? (
                      <img
                        src={person.imageUrl}
                        alt={person.name}
                        className="absolute inset-0 w-full h-full object-cover object-top"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-blue-50">
                        <GraduationCap size={64} className="text-primary/30" />
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                  </div>

                  {/* Info */}
                  <div className="p-6 md:p-8 flex flex-col gap-4">
                    <div>
                      <h3 className="text-2xl font-black text-gray-900 mb-1">{person.name}</h3>
                      <div className="flex items-center gap-1.5 bg-blue-50 text-primary text-xs font-bold px-3 py-1 rounded-full w-fit">
                        <Calendar size={12} /> {person.period}
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3 text-gray-700">
                        <div className="bg-blue-50 p-2.5 rounded-xl text-primary"><Briefcase size={18} /></div>
                        <span className="font-bold">{person.profession}</span>
                      </div>
                      <div className="flex items-center gap-3 text-gray-500">
                        <div className="bg-gray-50 p-2.5 rounded-xl"><MapPin size={18} /></div>
                        <span className="font-medium">{person.workStation}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Counter */}
                <div className="absolute top-6 left-1/2 -translate-x-1/2 text-white font-bold bg-white/10 px-4 py-1 rounded-full backdrop-blur-md z-[110]">
                  {spotlightLB.index + 1} / {alumni.length}
                </div>
              </motion.div>
            );
          })()}
        </AnimatePresence>

      </div>
    </div>
  );
}
