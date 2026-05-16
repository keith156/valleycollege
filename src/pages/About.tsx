import { Building2, Target, History, Users, BookOpen, Handshake, MapPin, Image as ImageIcon, Compass, Star, ShieldCheck, ArrowRight, Clock, User, GraduationCap, ClipboardList, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState, useCallback, useEffect } from 'react';
import { Carousel } from '../components/Carousel';
import { SEO } from '../components/SEO';
import { parseImageCaption } from '../utils/imageUtils';

const pioneerGroups = [
  ["Twebaze Paul", "Tumwesigye Adonia", "Muhangi James Mukaira", "Natukunda Jeninah", "Noowe Innocent Kariisa", "Forward Moses Luke", "Asiimwe David"],
  ["Arinda Ezra", "Kamukama Abel Abangira", "Nabanzi Siyana", "Katungwensi Anatoli Ignis", "Ntamuuhira Godwin", "Owatuhaire Ham", "Turinawe Julius"],
  ["Tihairwe T. Mugooma", "Akatwijuka Richard", "Twesigye Nicholas", "Bwogi James Barya", "Kaganzi Collins Kaganzi", "Kansiime Rose", "Ayebare John Bosco"],
  ["Byonanebye Ketrah", "Arinda Clare Katagata", "Atwijukire Rona", "Mbabazi Chrispher", "Busingye Susan", "Katagata Patrick", "Kyabagye Justus"],
  ["Twinomujuni Tendeo", "Tusiime Doreen", "Nalanga Winnie", "Rutakirwa Naboth", "Mwesigwa Apollo", "Agaba Gloria", "Arikiriza Alice"],
  ["Kamugasha Apollo", "Mugabi Richard Twijukye", "Mpamizo Andrew", "Mbatekateka Vicent", "Tukundane Rosebell", "Kyarikunda Genisgy Mpora", "Namara Peace"],
  ["Namirembe Winnie", "Musinguzi Wilson Katson", "Natukunda Merian", "Atusimire Shallon", "Akugizibwe David", "Natukunda Betty", "Tutarimwebwa Ovia"]
];

const formerHeadTeachers = [
  {
    name: "Mary Antoinette Kabesiime Babiiha",
    period: "1997 - 2005",
    title: "Headmistress (HM)",
    image: "/former head teachers/[1997-2005]-Mary Antoinette Kabesiime Babiiha-HM-Valley College.webp"
  },
  {
    name: "Akoramaziima Miriam",
    period: "2006 - 2008",
    title: "Headmistress (HM)",
    image: "/former head teachers/[2006-2008]-Akoramaziima Miriam-HM-Valley College.webp"
  },
  {
    name: "Muhanguzi William",
    period: "2009 - 2015",
    title: "Head Teacher (HT)",
    image: "/former head teachers/[2009-2015]-Muhanguzi William-HT-Valley College.webp"
  },
  {
    name: "Ninkwakuzire Miriam",
    period: "2016 - 2018",
    title: "Headmistress (HM)",
    image: "/former head teachers/[2016-2018]-Ninkwakuzire Miriam-HM-Valley College.webp"
  }
];


const ptsExecutiveMembers = [
  { name: "Atamba Charles", title: "MR", position: "CHAIRPERSON" },
  { name: "Ninsiima Christine", title: "MS", position: "VICE CHAIRPERSON" },
  { name: "Kabeizi Doreen", title: "MS", position: "SECRETARY/HEADTEACHER" },
  { name: "Abaho Simon", title: "MR", position: "TREASURER" },
  { name: "Muhwezi Nathan", title: "MR", position: "PARENT'S REPRESENTATIVE (MALES)" },
  { name: "Nyangooma Dorothy", title: "MS", position: "PARENT'S REPRESENTATIVE (FEMALES)" },
  { name: "Baryoho Deziderio", title: "MR", position: "TEACHERS REPRESENTATIVE" },
  { name: "Kabagambe Owen", title: "MR", position: "HEADBOY" },
  { name: "Arinanye Tracy", title: "MS", position: "HEADGIRL" },
];

const adminStaff = [
  {
    name: "Kiggundu Bonny",
    position: "Deputy Headteacher – Academics",
    image: "/Deputy Headteacher - Academics[Kiggundu Bonny].jpeg",
    description: [
      "Oversees all academic programs and curriculum implementation",
      "Monitors students’ academic performance and examinations",
      "Supervises teachers to ensure quality teaching and learning"
    ]
  },
  {
    name: "Mr. Asiimwe Jonath",
    position: "Deputy Headteacher – Discipline",
    image: "/Deputy Headteacher - Descipline[Mr. Asiimwe Jonath].jpeg",
    description: [
      "Maintains student discipline and proper conduct in school",
      "Handles disciplinary matters and student guidance",
      "Promotes a safe, respectful, and orderly school environment"
    ]
  },
  {
    name: "Ssempebwa Lauben",
    position: "Director of Studies (DOS)",
    image: "/Director of Studies[Ssempebwa Lauben].jpeg",
    description: [
      "Coordinates teaching schedules and classroom instruction",
      "Supervises lesson planning, assessments, and academic records",
      "Monitors teacher performance and supports academic improvement"
    ]
  },
  {
    name: "Ms. Nabasa Annet",
    position: "School Bursar",
    image: "/School Bursur[Ms. Nabasa Annet].jpeg",
    description: [
      "Manages school finances, budgeting, and fee collection",
      "Prepares financial reports and maintains proper accounting records",
      "Oversees expenditure, procurement, and accountability of school funds"
    ]
  }
];

const prefectorialBody = [
  { position: "HEAD PREFECT", name: "KABAGAMBE OWEN" },
  { position: "ASST. H/PREFECT", name: "KIKOMA DAN" },
  { position: "HEAD GIRL", name: "ARINANYE TRACY" },
  { position: "ASST. H/GIRL", name: "ATUHEREZA DOR CAREEN" },
  { position: "FOOD PREFECT", name: "ABAHO DANIEL" },
  { position: "ASST. FOOD PREFECT", name: "LUCKY BRIAN WAKAME" },
  { position: "SPORTS PREFECT", name: "AHABWE DRIGAN" },
  { position: "HEALTH PREFECT (B)", name: "AKANSASIRA EDMAS" },
  { position: "ASST. H/PREFECT (B)", name: "MASEREKA ANDREW" },
  { position: "HEALTH PREFECT (G)", name: "NIMWESIGA JILL" },
  { position: "ASST. H/PREFECT (G)", name: "KOMUHANGI ALLEN" },
  { position: "ENTERTAINMENT PREFECT", name: "GUMISIRIZA KEVIN" },
  { position: "ASST. E/PREFECT", name: "GUMOSHABE TRAVOR" },
  { position: "LIBRARY & INFORMATION", name: "ASHEMEZA SUZAN" },
  { position: "ASST. LIBRARY & INFORMATION", name: "AMUTUHAIRE SHEILAH" },
  { position: "TIMEKEEPER", name: "KWIKYIRIZA FRANK" },
  { position: "PATRON", name: "ASIIMWE JONATH" },
];

const councilBody = [
  { position: "CHAIRPERSON", name: "MBABAZIZE JOSHUA" },
  { position: "VICE CHAIRPERSON", name: "AYESIGAMUKAMA SHELLINE" },
  { position: "SPEAKER", name: "MAZIIMA PRETTY COMFORT" },
  { position: "LEGAL ADVISOR", name: "MBUSA JOSTUS" },
  { position: "O'LEVEL REPRESENTATIVE", name: "OKWANKUNDA SARAH" },
];

const councillors = [
  { classGroup: "S.6 SCIENCE", name: "KUSIIMA ARNOLD" },
  { classGroup: "S.6 ARTS", name: "MUKONYEZI DATHAN" },
  { classGroup: "S.5", name: "KATAHWIRE ELIOT" },
  { classGroup: "S.4 A", name: "KIN JERIN" },
  { classGroup: "S.4 B", name: "OKWANKUNDA SARAH" },
  { classGroup: "S.4 B", name: "MBUNDIYE GERALD" },
  { classGroup: "S.3", name: "ATWIJUKIRE PROSPER" },
  { classGroup: "S.2A", name: "MUGISHA IVAN SAMUEL" },
  { classGroup: "S.2A", name: "ATUKWATSE MAKLINE" },
  { classGroup: "S.2B", name: "ANKUNDA DARIOUS" },
  { classGroup: "S.2B", name: "BIIRA BRITAH" },
  { classGroup: "S.1", name: "AMPUMUZA LINET" },
];

export default function About() {
  const [lightbox, setLightbox] = useState<{ index: number } | null>(null);

  const handleNext = useCallback(() => {
    if (!lightbox) return;
    setLightbox(prev => prev ? { index: (prev.index + 1) % formerHeadTeachers.length } : null);
  }, [lightbox]);

  const handlePrev = useCallback(() => {
    if (!lightbox) return;
    setLightbox(prev => prev ? { index: (prev.index - 1 + formerHeadTeachers.length) % formerHeadTeachers.length } : null);
  }, [lightbox]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightbox) return;
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'Escape') setLightbox(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightbox, handleNext, handlePrev]);

  return (
    <div className="flex flex-col bg-gray-50">
      <SEO 
        title="About Valley College Bushenyi - History, Vision & Mission"
        description="Learn about Valley College Secondary School Bushenyi — founded in 1997 by Mzee William Mukaira. Discover our vision, mission, core values, governance structure, and 29-year legacy of academic excellence in Western Uganda."
        keywords="Valley College history, Valley College Bushenyi about, Mzee William Mukaira founder, school mission and vision Uganda, secondary school leadership Bushenyi, Mukaira Foundation, best schools Western Uganda"
        path="/about"
      />
      {/* Hero Section */}
      <div id="top" className="relative bg-primary text-white py-20 lg:py-24 overflow-hidden scroll-mt-20">
        <div className="absolute inset-0">
          <div className="w-full h-full bg-gray-900" />
          <motion.img
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 10, ease: "easeOut" }}
            src="/images/IMG_20260401_181902_661.webp"
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
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }} className="w-full">
            <span className="inline-block py-1 px-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-bold tracking-widest uppercase mb-6">
              Our Story
            </span>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-6 tracking-tight drop-shadow-lg leading-tight whitespace-nowrap">
              A Legacy of Excellence
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-white drop-shadow-md font-medium leading-relaxed max-w-5xl">
              Established with a vision for transformation, Valley College is recognized as one of the <span className="font-bold border-b-2 border-white/30">best secondary schools in Uganda</span>, shaping the future of education in the <span className="font-bold border-b-2 border-white/30">Bushenyi</span> region.
            </p>
          </motion.div>
        </div>
      </div>

      <div id="vision" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-20 w-full scroll-mt-32">
        
        {/* Bento Grid: Vision, Mission, Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">

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

        {/* Founder Section */}
        <section id="history" className="mb-24 py-16 bg-white rounded-[3rem] shadow-xl border border-gray-100 overflow-hidden scroll-mt-32">
          <div className="max-w-6xl mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="lg:col-span-4"
              >
                <div className="relative group h-full">
                  <div className="absolute -inset-4 bg-primary/5 rounded-[2.5rem] blur-2xl group-hover:bg-primary/10 transition-colors" />
                  <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white h-full min-h-[300px]">
                    <img 
                      src="/Founder_img$Mzee William Mukaira.webp" 
                      alt={parseImageCaption("Founder_img$Mzee William Mukaira.webp") || "Mzee William Mukaira"} 
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    {parseImageCaption("Founder_img$Mzee William Mukaira.webp") && (
                      <div className="absolute bottom-0 left-0 right-0 bg-[#001a40] text-white py-1.5 px-3 text-[10px] md:text-xs font-bold text-center z-10 border-t border-white/10">
                        {parseImageCaption("Founder_img$Mzee William Mukaira.webp")}
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="lg:col-span-8"
              >
                <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">The Visionary</span>
                <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-4 leading-tight">
                  Our Founder — <br/>
                  Mzee William Mukaira
                </h2>
                <div className="space-y-3 text-gray-600 text-sm md:text-base leading-relaxed">
                  <p>
                    Mzee William Mukaira is the visionary founder of Valley College Secondary School, established in 1997 with an inaugural class of just 48 A-Level students.
                  </p>
                  <p>
                    Driven by a commitment to raise education standards in Bushenyi and beyond, he laid the foundation for what has grown into one of Western Uganda’s most respected institutions.
                  </p>
                  <p>
                    Under his leadership, Valley College expanded to include O-Level, earning a reputation for academic excellence, discipline, and holistic education. His passion for learning and development extended further with the founding of Valley University of Science and Technology (VUST), broadening access to higher education in the region.
                  </p>
                  <p className="font-bold text-gray-900 italic pt-2">
                    An accomplished entrepreneur and educationist, Mzee Mukaira’s vision transformed Bushenyi into a stronger academic hub. His legacy of excellence continues to inspire generations of learners, educators, and leaders at Valley College and beyond.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Former Head Teachers Section */}
        <section className="mb-24">
          <div className="flex flex-col items-center text-center mb-12">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-blue-100 text-primary mb-4 shadow-sm">
              <History size={28} />
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-4 tracking-tight">Former Head Teachers</h2>
            <div className="h-2 w-24 bg-primary mx-auto rounded-full mb-6" />
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">Honoring the visionary leaders who have guided Valley College through its 29-year journey of academic excellence and transformation.</p>
          </div>

          <div className="relative overflow-hidden py-4">
            <div className="flex whitespace-nowrap overflow-hidden">
              <motion.div 
                animate={{ x: ["0%", "-50%"] }}
                transition={{ duration: 40, ease: "linear", repeat: Infinity }}
                className="flex gap-6 px-3"
              >
                {[...formerHeadTeachers, ...formerHeadTeachers].map((teacher, idx) => (
                  <div
                    key={idx}
                    onClick={() => setLightbox({ index: idx % formerHeadTeachers.length })}
                    className="shrink-0 w-[280px] md:w-[320px] group bg-white rounded-[2rem] shadow-lg border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-500 flex flex-col whitespace-normal cursor-pointer"
                  >
                    {/* Photo */}
                    <div className="w-full h-72 md:h-80 relative overflow-hidden bg-gray-100 shrink-0">
                      <img
                        src={teacher.image}
                        alt={teacher.name}
                        className="absolute inset-0 w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-700"
                        loading="lazy"
                        decoding="async"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                    </div>

                    {/* Info */}
                    <div className="p-5 md:p-6 flex flex-col gap-4 grow">
                      <div className="flex flex-col gap-2">
                        <h3 className="text-lg font-black text-gray-900 leading-tight group-hover:text-primary transition-colors">
                          {teacher.name}
                        </h3>
                        <div className="flex items-center gap-1.5 bg-blue-50 text-primary text-[10px] font-bold px-3 py-1 rounded-full shrink-0 w-fit">
                          <Clock size={12} /> {teacher.period}
                        </div>
                      </div>
                      
                      <div className="space-y-3">
                        <div className="flex items-start gap-3 text-gray-700">
                          <div className="bg-blue-50 p-2 rounded-lg text-primary">
                            <User size={16} className="shrink-0" />
                          </div>
                          <span className="text-sm font-bold leading-tight">{teacher.title}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
            
            {/* Gradient Fades for seamless edges */}
            <div className="absolute inset-y-0 left-0 w-8 md:w-16 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-8 md:w-16 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none" />
          </div>
        </section>

        {/* Pioneer Students Section (U.A.C.E 1998) */}
        <section className="mb-20">

          <div className="flex flex-col items-center text-center mb-12">
            <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">U.A.C.E 1998</span>
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-4 tracking-tight">Our Pioneer Students</h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-6">Honoring our very first A-Level cohort of 1998, who set the standard for excellence at Valley College.</p>
            <div className="h-2 w-24 bg-primary mx-auto rounded-full" />
          </div>


          <div className="-mx-4 sm:-mx-8">
            <Carousel autoPlayInterval={4000}>
              {pioneerGroups.map((group, idx) => (
                <div key={idx} className="snap-start shrink-0 w-[85%] sm:w-[350px] bg-primary p-8 rounded-[2rem] shadow-lg border border-blue-900 flex flex-col relative overflow-hidden group hover:border-blue-400 transition-colors">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-900/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                  <div className="flex items-center gap-4 mb-4 relative z-10">
                    <div className="w-12 h-12 bg-white/10 text-blue-200 rounded-xl flex items-center justify-center shrink-0 border border-white/20">
                      <GraduationCap size={24} />
                    </div>
                  </div>
                  <ul className="space-y-4 relative z-10">
                    {group.map((name, i) => (
                      <li key={i} className="flex items-start gap-3 text-blue-100 font-medium group-hover:text-white transition-colors">
                        <div className="w-2 h-2 rounded-full bg-blue-300 shrink-0 mt-2" />
                        {name}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </Carousel>
          </div>
        </section>

        {/* New Governance Structure Section */}
        <section id="governance" className="mb-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="flex flex-col items-center text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-6 tracking-tight">Governance Structure</h2>
            <div className="h-2 w-24 bg-primary rounded-full mb-6" />
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">A strong governance framework that ensures accountability, transparency, and the effective management of our school.</p>
          </div>


          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-6xl mx-auto bg-white rounded-2xl md:rounded-[3rem] shadow-xl border-2 md:border-8 border-white relative group overflow-hidden"
          >
            <div className="overflow-x-auto pb-4 md:pb-0 hide-scrollbar">
              <div className="min-w-[600px] md:min-w-0">
                <img 
                  src="/governance structure.webp" 
                  alt="Valley College Governance Structure" 
                  className="w-full h-auto object-contain group-hover:scale-[1.01] transition-transform duration-700"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
              </div>
            </div>
            
            {/* Mobile Hint */}
            <div className="md:hidden text-center py-2 bg-gray-50 text-[10px] font-bold text-gray-400 uppercase tracking-widest border-t border-gray-100">
              ← Scroll to view full structure →
            </div>
            
            <div className="absolute inset-0 bg-primary/5 group-hover:bg-transparent transition-colors pointer-events-none" />
          </motion.div>
        </section>

        {/* PTS EXECUTIVE MEMBERS 2026 */}
        <section id="pts" className="mb-16 mt-12 scroll-mt-32">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-2">PTS Executive Members 2026</h2>
            <div className="h-1 w-16 bg-primary mx-auto rounded-full" />
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden"
          >
            <div className="bg-primary px-6 py-4">
              <h3 className="font-bold text-lg text-white">Executive Committee</h3>
            </div>
            <div className="divide-y divide-gray-100">
              {ptsExecutiveMembers.map((member, idx) => (
                <motion.div 
                  key={idx} 
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.03 }}
                  className="flex items-center justify-between px-4 sm:px-6 py-4 hover:bg-blue-50 transition-all duration-300 group cursor-default"
                >
                  <div className="flex items-center gap-3 group-hover:translate-x-1 transition-transform">
                    <span className="text-xs font-bold text-gray-400 w-6 shrink-0">{idx + 1}.</span>
                    <span className="font-bold text-gray-900 group-hover:text-primary transition-colors text-xs sm:text-base">{member.title}. {member.name}</span>
                  </div>
                  <span className="text-[10px] sm:text-xs font-bold text-primary bg-blue-50 px-2 sm:px-3 py-1 rounded-full group-hover:bg-primary group-hover:text-white transition-all shrink-0 ml-2">{member.position}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* VALLEY COLLEGE TEACHING STAFF 2026 */}
        <section id="staff" className="mb-16 scroll-mt-32">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-4">Key Administrative Staff</h2>
            <div className="h-2 w-24 bg-primary mx-auto rounded-full" />
          </motion.div>
          <div className="max-w-7xl mx-auto">
            <div className="relative overflow-hidden py-4">
              <div className="flex whitespace-nowrap overflow-hidden">
                <motion.div 
                  animate={{ x: ["0%", "-50%"] }}
                  transition={{ duration: 30, ease: "linear", repeat: Infinity }}
                  className="flex gap-8 px-4"
                >
                  {[...adminStaff, ...adminStaff].map((admin, idx) => (
                    <div
                      key={idx}
                      className="shrink-0 w-[300px] md:w-[350px] bg-white rounded-[2rem] shadow-xl border border-gray-100 overflow-hidden flex flex-col group whitespace-normal"
                    >
                      {/* Image Container */}
                      <div className="aspect-[4/5] relative overflow-hidden bg-gray-100 shrink-0">
                        <img
                          src={admin.image}
                          alt={admin.name}
                          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                        <div className="absolute bottom-4 left-4 right-4">
                          <h3 className="text-xl font-bold text-white mb-0.5">{admin.name}</h3>
                          <p className="text-blue-300 text-xs font-bold uppercase tracking-wider">{admin.position}</p>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6 flex-1 flex flex-col bg-white">
                        <ul className="space-y-3">
                          {admin.description.map((item, i) => (
                            <li key={i} className="flex gap-3 text-sm text-gray-600 leading-relaxed">
                              <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </motion.div>
              </div>
              
              {/* Gradient Fades */}
              <div className="absolute inset-y-0 left-0 w-8 md:w-16 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none" />
              <div className="absolute inset-y-0 right-0 w-8 md:w-16 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none" />
            </div>
          </div>
        </section>

        {/* PREFECTORIAL BODY 2026 */}
        <section id="prefects" className="mb-24 scroll-mt-32">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            
            {/* Left Side: Image Gallery */}
            <div className="flex flex-col gap-6">
              <div className="grid grid-cols-2 gap-6">
                {/* Head Boy */}
                <div className="flex flex-col shadow-lg">
                  <div className="aspect-square overflow-hidden bg-gray-100">
                    <img src="/about/Head Boy[2025-26].jpeg" alt="Head Boy" className="w-full h-full object-cover" />
                  </div>
                  <div className="bg-primary py-2 text-center">
                    <span className="text-white text-xs font-bold uppercase tracking-wider">Head Boy [2025-26]</span>
                  </div>
                </div>
                {/* Head Girl */}
                <div className="flex flex-col shadow-lg">
                  <div className="aspect-square overflow-hidden bg-gray-100">
                    <img src="/about/Head Girl[2025-26] .jpeg" alt="Head Girl" className="w-full h-full object-cover" />
                  </div>
                  <div className="bg-primary py-2 text-center">
                    <span className="text-white text-xs font-bold uppercase tracking-wider">Head Girl [2025-26]</span>
                  </div>
                </div>
              </div>

              {/* Prefects Body */}
              <div className="flex flex-col shadow-xl">
                <div className="aspect-video overflow-hidden bg-gray-100">
                  <img src="/about/Prefects Body[2025-26].jpeg" alt="Prefects Body" className="w-full h-full object-cover" />
                </div>
                <div className="bg-primary py-2 text-center">
                  <span className="text-white text-xs font-bold uppercase tracking-wider">Prefects Body [2025-26]</span>
                </div>
              </div>

              {/* Added descriptive text for balance */}
              <div className="bg-blue-50/50 p-8 rounded-2xl border border-blue-100 flex-1 flex flex-col justify-center">
                <h4 className="text-primary font-bold mb-3 flex items-center gap-2">
                  <ShieldCheck size={20} /> Student Leadership & Discipline
                </h4>
                <p className="text-sm text-gray-600 leading-relaxed italic">
                  The Prefectorial Body is a cornerstone of student leadership and discipline at Valley College. Composed of dedicated individuals selected for their integrity and commitment, this body serves as a vital bridge between the administration and the student community, fostering a culture of excellence and mutual respect across the campus.
                </p>
              </div>
            </div>

            {/* Right Side: List */}
            <div className="bg-white border border-gray-200 shadow-xl overflow-hidden rounded-xl flex flex-col">
              <div className="bg-primary px-6 py-4">
                <h3 className="text-white font-bold text-lg">Prefects List</h3>
              </div>
              <div className="divide-y divide-gray-100">
                {prefectorialBody.map((prefect, idx) => (
                  <div key={idx} className="flex items-center justify-between px-6 py-3 hover:bg-blue-50/50 transition-colors">
                    <span className="font-bold text-gray-800 text-xs sm:text-sm uppercase tracking-tight">{prefect.name}</span>
                    <span className="text-[10px] font-bold text-primary bg-blue-50 px-3 py-1 rounded-full border border-blue-100">{prefect.position}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* COUNCIL BODY 2026 */}
        <section id="council" className="mb-24 scroll-mt-32">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            
            {/* Left Side: Image Gallery */}
            <div className="flex flex-col gap-6">
              <div className="grid grid-cols-2 gap-6">
                {/* CP SCH Council */}
                <div className="flex flex-col shadow-lg">
                  <div className="aspect-square overflow-hidden bg-gray-100">
                    <img src="/about/CP SCH. Council[2024-25] .jpeg" alt="CP Council" className="w-full h-full object-cover" />
                  </div>
                  <div className="bg-primary py-2 text-center">
                    <span className="text-white text-xs font-bold uppercase tracking-wider">CP SCH. Council [2024-25]</span>
                  </div>
                </div>
                {/* Council Body 2025 */}
                <div className="flex flex-col shadow-lg">
                  <div className="aspect-square overflow-hidden bg-gray-100">
                    <img src="/about/CouncilBody[2025].jpeg" alt="Council Body 2025" className="w-full h-full object-cover" />
                  </div>
                  <div className="bg-primary py-2 text-center">
                    <span className="text-white text-xs font-bold uppercase tracking-wider">Council Body [2025]</span>
                  </div>
                </div>
              </div>

              {/* Council Body 25-26 */}
              <div className="flex flex-col shadow-xl">
                <div className="aspect-video overflow-hidden bg-gray-100">
                  <img src="/about/Council Body[2025-2026].jpeg" alt="Council Body 25-26" className="w-full h-full object-cover" />
                </div>
                <div className="bg-primary py-2 text-center">
                  <span className="text-white text-xs font-bold uppercase tracking-wider">Council Body [2025-26]</span>
                </div>
              </div>

              {/* Added descriptive text for balance */}
              <div className="bg-blue-50/50 p-8 rounded-2xl border border-blue-100 flex-1 flex flex-col justify-center">
                <h4 className="text-primary font-bold mb-3 flex items-center gap-2">
                  <Users size={20} /> Representation & Advocacy
                </h4>
                <p className="text-sm text-gray-600 leading-relaxed italic">
                  The Student Council serves as the primary voice for student representation. Through a structured system of executive members and class councillors, the council ensures that every student's perspective is heard. They collaborate with school leadership to enhance student welfare and organize impactful campus initiatives.
                </p>
              </div>
            </div>

            {/* Right Side: List */}
            <div className="bg-white border border-gray-200 shadow-xl overflow-hidden rounded-xl flex flex-col">
              <div className="bg-primary px-6 py-4">
                <h3 className="text-white font-bold text-lg">Council Members</h3>
              </div>
              
              {/* Executive */}
              <div className="bg-gray-50 px-6 py-2 border-b border-gray-100">
                <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Executive Members</span>
              </div>
              <div className="divide-y divide-gray-100">
                {councilBody.map((member, idx) => (
                  <div key={idx} className="flex items-center justify-between px-6 py-3 hover:bg-blue-50/50 transition-colors">
                    <span className="font-bold text-gray-800 text-xs sm:text-sm uppercase tracking-tight">{member.name}</span>
                    <span className="text-[10px] font-bold text-primary bg-blue-50 px-3 py-1 rounded-full border border-blue-100">{member.position}</span>
                  </div>
                ))}
              </div>

              {/* Councillors */}
              <div className="bg-gray-50 px-6 py-2 border-y border-gray-100">
                <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Class Councillors</span>
              </div>
              <div className="divide-y divide-gray-100">
                {councillors.map((councillor, idx) => (
                  <div key={idx} className="flex items-center justify-between px-6 py-3 hover:bg-blue-50/50 transition-colors">
                    <span className="font-bold text-gray-800 text-xs sm:text-sm uppercase tracking-tight">{councillor.name}</span>
                    <span className="text-[10px] font-bold text-gray-600 bg-gray-100 px-3 py-1 rounded-full border border-gray-200">{councillor.classGroup}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>




        {/* Facilities & Overview Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-blue-50 p-8 rounded-[2rem] shadow-lg border border-blue-100">
            <MapPin className="text-primary mb-6" size={40} />
            <h3 className="text-2xl font-bold mb-4">Location & Ownership</h3>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">Located in the serene and academic-friendly environment of <strong className="text-primary">Block 2, Plot 131, Nyaruzinga Road, Bushenyi District</strong>, our campus provides the perfect atmosphere for focused learning.</p>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-primary rounded-full" /> Block 2, Plot 131, Nyaruzinga Road, Bushenyi Municipality, Western Uganda</li>
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-primary rounded-full" /> Easy access via Mbarara-Kasese Highway</li>
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-primary rounded-full" /> Proudly owned by Mukaira Foundation Ltd</li>
            </ul>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="bg-blue-50 p-8 rounded-[2rem] shadow-lg border border-blue-100">
            <Building2 className="text-primary mb-6" size={40} />
            <h3 className="text-2xl font-bold mb-6">World-Class Facilities</h3>
            <ul className="space-y-4 text-gray-700 text-lg font-medium">
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

      {/* Campus Life Section (Full Width) */}
      <div id="campus" className="w-full bg-white pb-12 scroll-mt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Perspective</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6">Campus Life</h2>
            <div className="h-1.5 w-20 bg-primary mx-auto rounded-full" />
          </motion.div>
        </div>

        {/* Campus Life Gallery (Continuous) */}
        <motion.section 
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          className="pb-8 px-4 md:px-8"
        >

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 grid-flow-dense gap-4 sm:gap-6 auto-rows-[250px] md:auto-rows-[300px] max-w-[1600px] mx-auto">
            {[
              "IMG_20260401_181411_242$School entrance gate (As you enter).webp", 
              "2$S.6 2025 Class.webp", "4$S.4 2026 Class.webp", "6$Writer`s Club.webp", "8$S.2 & S.3 Class, Leisure time.webp", "9$Counselling Session.webp", 
              "12$Deputy and some prefects.webp", "13$S.4 CLASS (Girls) 2025.webp", "14$S.4 CLASS (Girls) 2025.webp", "temp_15$20$S.4 Class (boys) 2025.webp", 
              "temp_16$20$S.4 Class (boys) 2025.webp", "temp_18$S.4 class 2024, after briefing.webp", "temp_20$S.4 Class (boys) 2025.webp", 
              "21$Boys Domitory.webp", "23$Prefects receiving parents on visitation day.webp", "24$S.4 class 2016.webp", 
              "IMG_20260401_184319_761$University hostel.webp", "IMG_20260401_184701_943$Girls Dormitory.webp", 
              "IMG_20260401_181848_193$School entrance gate (As you exist).webp", "IMG_20260401_184018_232$Classroom.webp",
              "3$ICT Lab.webp"
            ].map((img, idx) => {
              const matchesFixedSquare = img === "3$ICT Lab.webp";
              const isLarge = idx % 7 === 0 && !matchesFixedSquare;
              const isTall = idx % 5 === 0 && !isLarge && !matchesFixedSquare;
              const isWide = idx % 6 === 0 && !isLarge && !isTall && !matchesFixedSquare;
              
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
                  alt={parseImageCaption(img) || `Campus Life ${idx + 1}`}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                
                {/* Always Visible Subtitle */}
                {parseImageCaption(img) && (
                  <div className="absolute bottom-0 left-0 right-0 bg-[#001a40] text-white py-1.5 px-3 text-[10px] sm:text-xs font-bold text-center z-10 border-t border-white/10">
                    {parseImageCaption(img)}
                  </div>
                )}
              </motion.div>
            );
          })}
          </div>
        </motion.section>
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence mode="wait">
        {lightbox !== null && formerHeadTeachers[lightbox.index] && (() => {
          const teacher = formerHeadTeachers[lightbox.index];
          return (
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

              {/* Navigation Arrows */}
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
              
              {/* Profile Card */}
              <motion.div
                key={lightbox.index}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="relative z-[105] bg-white rounded-3xl overflow-hidden shadow-2xl max-w-lg w-full max-h-[90vh] flex flex-col"
              >
                {/* Large Photo */}
                <div className="w-full h-72 sm:h-96 relative overflow-hidden bg-gray-100 shrink-0">
                  <img
                    src={teacher.image}
                    alt={teacher.name}
                    className="absolute inset-0 w-full h-full object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                  
                  {/* Subtitle overlay for images that have it (though head teachers use data objects) */}
                  {/* However, the lightbox in About is for head teachers, who already have names. */}
                  {/* Wait, is there a lightbox for the gallery too? Let me check. */}
                </div>

                {/* Info */}
                <div className="p-6 md:p-8 flex flex-col gap-4">
                  <div>
                    <h3 className="text-2xl font-black text-gray-900 mb-1">{teacher.name}</h3>
                    <div className="flex items-center gap-1.5 bg-blue-50 text-primary text-xs font-bold px-3 py-1 rounded-full w-fit">
                      <Clock size={12} /> {teacher.period}
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-gray-700">
                      <div className="bg-blue-50 p-2.5 rounded-xl text-primary">
                        <User size={18} />
                      </div>
                      <span className="font-bold">{teacher.title}</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Counter */}
              <div className="absolute top-6 left-1/2 -translate-x-1/2 text-white font-bold bg-white/10 px-4 py-1 rounded-full backdrop-blur-md z-[110]">
                {lightbox.index + 1} / {formerHeadTeachers.length}
              </div>
            </motion.div>
          );
        })()}
      </AnimatePresence>
    </div>
  );
}
