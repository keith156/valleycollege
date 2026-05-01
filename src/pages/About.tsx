import { Building2, Target, History, Users, BookOpen, Handshake, MapPin, Image as ImageIcon, Compass, Star, ShieldCheck, ArrowRight, Clock, User, GraduationCap, ClipboardList } from 'lucide-react';
import { motion } from 'motion/react';
import { Carousel } from '../components/Carousel';
import { SEO } from '../components/SEO';

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
    image: "/former head teachers/[1997-2005]-Mary Antoinette Kabesiime Babiiha-HM-Valley College.png"
  },
  {
    name: "Akoramaziima Miriam",
    period: "2006 - 2008",
    title: "Headmistress (HM)",
    image: "/former head teachers/[2006-2008]-Akoramaziima Miriam-HM-Valley College.png"
  },
  {
    name: "Muhanguzi William",
    period: "2009 - 2015",
    title: "Head Teacher (HT)",
    image: "/former head teachers/[2009-2015]-Muhanguzi William-HT-Valley College.png"
  },
  {
    name: "Ninkwakuzire Miriam",
    period: "2016 - 2018",
    title: "Headmistress (HM)",
    image: "/former head teachers/[2016-2018]-Ninkwakuzire Miriam-HM-Valley College.png"
  }
];



const governanceData = [
  {
    title: "Mukaira Foundation",
    desc: "Provides overall ownership and strategic direction of the school, ensuring its vision, values, and long-term sustainability are upheld.",
    pillClass: "bg-[#1a2860] border-[#2d3e80]",
    dotColor: "#2d3e80",
    lineColor: "#27a648",
    svg: (
      <div className="w-16 h-16 mb-2 rounded-xl overflow-hidden border border-white/20">
        <img src="/Mukaira Foundation.jpeg" alt="Mukaira Foundation" className="w-full h-full object-cover" />
      </div>
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
    <div className="flex flex-col bg-gray-50">
      <SEO 
        title="About Valley College Bushenyi - History, Vision & Mission"
        description="Learn about Valley College Secondary School Bushenyi — founded in 1997 by Mzee William Mukaira. Discover our vision, mission, core values, governance structure, and 29-year legacy of academic excellence in Western Uganda."
        keywords="Valley College history, Valley College Bushenyi about, Mzee William Mukaira founder, school mission and vision Uganda, secondary school leadership Bushenyi, Mukaira Foundation, best schools Western Uganda"
        path="/about"
      />
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-20 w-full">
        
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
        <section className="mb-24 py-16 bg-white rounded-[3rem] shadow-xl border border-gray-100 overflow-hidden">
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
                      src="/Founder_img.jpeg" 
                      alt="Mzee William Mukaira" 
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
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
                    className="shrink-0 w-[280px] md:w-[320px] group bg-white rounded-[2rem] shadow-lg border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-500 flex flex-col whitespace-normal"
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
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none" />
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
            <div className="h-2 w-24 bg-primary rounded-full" />
          </div>


          <div className="grid grid-cols-[140px_1fr] sm:grid-cols-[200px_1fr] md:grid-cols-[310px_1fr] gap-x-4 md:gap-x-12 max-w-7xl mx-auto overflow-hidden px-4 md:px-8 py-6">
            {governanceData.map((item, idx) => (
              <div key={idx} className="contents">
                {/* Left Column (Pill and vertical lines) */}
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="flex flex-col items-center w-full h-full relative z-0"
                >
                  {/* Vertical line stretching to the top if not first item */}
                  {idx > 0 && (
                    <div className="w-[2.5px] md:w-[4px] flex-1" style={{ backgroundColor: governanceData[idx - 1].lineColor }} />
                  )}
                  {/* Space for the top dot if this item has no line from above */}
                  {idx === 0 && <div className="flex-1" />}

                  {/* Pill Container with Attached Dots */}
                  <div className="flex flex-col items-center shrink-0 w-full relative z-20">
                    {/* Top Dot */}
                    {idx > 0 && (
                      <div 
                        className="w-3 h-3 md:w-5 md:h-5 rounded-full border-[2.5px] md:border-[4px] border-solid bg-white shrink-0 z-30 -mb-[1.25px] md:-mb-[2px]" 
                        style={{ borderColor: item.dotColor }} 
                      />
                    )}

                    {/* The Pill */}
                    <div className={`w-full rounded-[2rem] md:rounded-[3rem] flex flex-col items-center justify-center p-3 md:p-8 shadow-xl min-h-[70px] md:min-h-[110px] border-2 md:border-4 ${item.pillClass} group hover:scale-105 transition-transform duration-500 z-20 relative`}>
                      <div className="group-hover:scale-110 transition-transform duration-500 scale-75 md:scale-100">
                        {item.svg}
                      </div>
                      <div className="text-white text-[10px] sm:text-xs md:text-lg font-black tracking-widest text-center uppercase leading-tight mt-1">
                        {item.title}
                      </div>
                    </div>

                    {/* Bottom Dot */}
                    {idx < governanceData.length - 1 && (
                      <div 
                        className="w-3 h-3 md:w-5 md:h-5 rounded-full border-[2.5px] md:border-[4px] border-solid bg-white shrink-0 z-30 -mt-[1.25px] md:-mt-[2px]" 
                        style={{ borderColor: item.dotColor }} 
                      />
                    )}
                  </div>

                  {/* Vertical line stretching to the bottom if not last item */}
                  {idx < governanceData.length - 1 && (
                    <div className="w-[2.5px] md:w-[4px] flex-1" style={{ backgroundColor: item.lineColor }} />
                  )}
                  {idx === governanceData.length - 1 && <div className="flex-1" />}
                </motion.div>

                {/* Right Column (Description) */}
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="flex items-center text-[12px] sm:text-sm md:text-lg leading-relaxed text-gray-700 py-4"
                >
                  {item.desc}
                </motion.div>

                {/* Connector Space Between Rows (Just the line, providing vertical gap) */}
                {idx < governanceData.length - 1 && (
                  <div className="contents">
                    <div className="flex justify-center w-full h-8 md:h-12 relative z-0">
                      <div 
                        className="w-[2.5px] md:w-[4px] h-full" 
                        style={{ backgroundColor: item.lineColor }} 
                      />
                    </div>
                    {/* Empty cell for the right column in the connector row */}
                    <div></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Facilities & Overview Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-blue-50 p-8 rounded-[2rem] shadow-lg border border-blue-100">
            <MapPin className="text-primary mb-6" size={40} />
            <h3 className="text-2xl font-bold mb-4">Location & Ownership</h3>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">Located in the serene and academic-friendly environment of <strong className="text-primary">Bushenyi District</strong>, our campus provides the perfect atmosphere for focused learning.</p>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-primary rounded-full" /> Bushenyi Municipality, Western Uganda</li>
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
      </div>

      {/* Campus Life Section (Full Width) */}
      <div className="w-full bg-white pb-12">
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
              "IMG_20260401_181411_242.jpg", 
              "2.jpeg", "4.jpeg", "6.jpeg", "8.jpeg", "9.jpeg", 
              "12.jpeg", "13.jpeg", "14.jpeg", "15.jpeg", 
              "16.jpeg", "18.jpeg", "20.jpeg", 
              "21.jpeg", "23.jpeg", "24.jpeg", 
              "IMG_20260401_184319_761.jpg", "IMG_20260401_184701_943.jpg", 
              "IMG_20260401_181848_193.jpg", "IMG_20260401_184018_232.jpg",
              "subjects offered.jpeg"
            ].map((img, idx) => {
              const matchesFixedSquare = img === "subjects offered.jpeg";
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
