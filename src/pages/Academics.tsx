import { useState, useEffect } from 'react';
import { BookOpen, GraduationCap, Laptop, Activity, Trophy, Beaker, Users, Star, Medal, ChevronDown, Clock } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { getWallOfFame, WallOfFameYear } from '../lib/wallOfFame';
import { getEvents, SchoolEvent } from '../lib/events';

export default function Academics() {
  const [expandedYear, setExpandedYear] = useState<string | null>(null);
  const [wallOfFameData, setWallOfFameData] = useState<WallOfFameYear[]>([]);
  const [termEvents, setTermEvents] = useState<SchoolEvent[]>([]);
  const [selectedEventId, setSelectedEventId] = useState<string | null>(null);

  useEffect(() => {
    const data = getWallOfFame();
    setWallOfFameData(data);
    if (data.length > 0) {
      setExpandedYear(data[0].year);
    }
    const events = getEvents();
    setTermEvents(events);
    if (events.length > 0) {
      setSelectedEventId(events[0].id);
    }
  }, []);

  const selectedEvent = termEvents.find(e => e.id === selectedEventId);

  const renderMonth = (month: number, year: number) => {
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDay = new Date(year, month, 1).getDay();
    const days = [];
    
    // Add empty slots for first day
    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="h-8 w-8" />);
    }
    
    for (let d = 1; d <= daysInMonth; d++) {
      const dateStr = new Date(year, month, d).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
      // Map "May 8, 2026" format from getEvents()
      const event = termEvents.find(e => {
        const eDate = new Date(e.date);
        return eDate.getDate() === d && eDate.getMonth() === month && eDate.getFullYear() === year;
      });
      
      days.push(
        <button
          key={d}
          onClick={() => event && setSelectedEventId(event.id)}
          className={`h-8 w-8 flex items-center justify-center rounded-full text-xs font-medium transition-all ${
            event 
              ? 'bg-primary text-white shadow-md scale-110 ring-2 ring-primary/20 hover:scale-125' 
              : 'text-gray-500 hover:bg-gray-100'
          } ${selectedEventId === event?.id ? 'ring-4 ring-primary/30' : ''}`}
        >
          {d}
        </button>
      );
    }

    return (
      <div className="flex flex-col gap-3">
        <h4 className="text-sm font-bold text-gray-900 text-center">{monthNames[month]} {year}</h4>
        <div className="grid grid-cols-7 gap-1">
          {["S", "M", "T", "W", "T", "F", "S"].map(d => (
            <div key={d} className="h-8 w-8 flex items-center justify-center text-[10px] font-bold text-gray-400">{d}</div>
          ))}
          {days}
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col bg-gray-50">
      {/* Page Header */}
      <div className="relative bg-primary text-white py-20 lg:py-24 overflow-hidden">
        <div className="absolute inset-0">
          <div className="w-full h-full bg-gray-900" />
          <img
            src="/images/IMG_20260401_182207_763.jpg"
            alt="Academics at Valley College"
            className="absolute inset-0 w-full h-full object-cover opacity-80"
            referrerPolicy="no-referrer"
            decoding="async"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gray-900/30" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary from-10% via-primary/80 via-50% to-transparent" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-5xl">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 drop-shadow-md">Academics</h1>
            <p className="text-lg lg:text-xl text-white drop-shadow-sm">
              Consistently ranked among the <span className="font-bold border-b-2 border-white/30">leading schools in Bushenyi</span> and a top choice for <span className="font-bold border-b-2 border-white/30">secondary education in Uganda</span>.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
        
        {/* Curriculum & Approach Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-16">
          {/* Curriculum */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="lg:col-span-3 bg-white rounded-[2.5rem] shadow-xl border border-gray-100 overflow-hidden relative group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-blue-100 transition-colors duration-700" />
            <div className="p-6 md:p-10 lg:p-12 relative z-10">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-blue-50 text-primary mb-8 shadow-sm border border-blue-100">
                <BookOpen size={28} />
              </div>
              <h2 id="curriculum" className="text-3xl lg:text-4xl font-bold mb-6 text-gray-900">Our Curriculum</h2>
              <p className="text-gray-600 leading-relaxed mb-8 text-lg lg:text-xl">
                We strictly follow the <strong>Uganda National Curriculum</strong> for both O-Level and A-Level, ensuring our students are well-prepared for national examinations and future academic pursuits.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 hover:border-primary transition-colors">
                  <Laptop className="text-primary mb-3" size={24} />
                  <h4 className="font-bold text-gray-900 mb-2">ICT Integration</h4>
                  <p className="text-sm text-gray-600">Seamless technology use in daily lessons.</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 hover:border-primary transition-colors">
                  <Beaker className="text-primary mb-3" size={24} />
                  <h4 className="font-bold text-gray-900 mb-2">Practical Focus</h4>
                  <p className="text-sm text-gray-600">Hands-on learning in modern labs.</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 hover:border-primary transition-colors">
                  <Users className="text-primary mb-3" size={24} />
                  <h4 className="font-bold text-gray-900 mb-2">Student-Centered</h4>
                  <p className="text-sm text-gray-600">Interactive and engaging methodologies.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Academic Performance */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="lg:col-span-2 bg-primary text-white rounded-[2.5rem] shadow-xl relative overflow-hidden flex flex-col justify-center">
            <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-blue-900 to-transparent" />
            <div className="p-6 md:p-10 lg:p-12 relative z-10">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-white/10 text-blue-200 mb-8 backdrop-blur-sm border border-white/20">
                <GraduationCap size={28} />
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Academic Excellence</h2>
              <p className="text-blue-100 leading-relaxed mb-10 text-base lg:text-lg">
                A proud tradition of top-tier performance in national UNEB examinations.
              </p>
              
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between items-end mb-2">
                    <span className="font-medium text-blue-100">O-Level First Grades</span>
                    <span className="text-3xl font-black text-white">85%</span>
                  </div>
                  <div className="w-full h-3 bg-black/20 rounded-full overflow-hidden">
                    <motion.div initial={{ width: 0 }} whileInView={{ width: '85%' }} transition={{ duration: 1.5, delay: 0.5 }} className="h-full bg-blue-400 rounded-full" />
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between items-end mb-2">
                    <span className="font-medium text-blue-100">A-Level University Admissions</span>
                    <span className="text-3xl font-black text-white">92%</span>
                  </div>
                  <div className="w-full h-3 bg-black/20 rounded-full overflow-hidden">
                    <motion.div initial={{ width: 0 }} whileInView={{ width: '92%' }} transition={{ duration: 1.5, delay: 0.7 }} className="h-full bg-blue-400 rounded-full" />
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-white/20 flex items-center justify-between">
                  <span className="font-medium text-blue-100 text-lg">Top District Performers</span>
                  <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-xl backdrop-blur-sm">
                    <Trophy className="text-yellow-400" size={20} />
                    <span className="font-bold text-xl">15 Students</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* UACE Wall of Fame */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-20 max-w-4xl mx-auto w-full">
          <div className="flex flex-col items-center text-center mb-10">
            <div className="inline-flex items-center justify-center gap-3 bg-green-100 text-green-800 px-6 py-2 rounded-full mb-4">
              <Star size={20} className="fill-green-600 text-green-600" />
              <h2 id="fame" className="text-2xl md:text-3xl font-bold">Wall of Fame</h2>
              <Star size={20} className="fill-green-600 text-green-600" />
            </div>
            <p className="text-gray-600 text-base lg:text-lg max-w-4xl">Celebrating our top performing students in national examinations over the years.</p>
          </div>
          
          <div className="flex flex-col gap-4">
            {wallOfFameData.map((yearData, idx) => {
              const isExpanded = expandedYear === yearData.year;
              return (
                <motion.div 
                  key={yearData.year}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className={`bg-white rounded-2xl shadow-sm border border-gray-100 relative transition-all duration-300 ${isExpanded ? 'ring-2 ring-primary border-transparent' : 'hover:border-primary/30'} flex flex-col`}
                >
                  <button 
                    onClick={() => setExpandedYear(isExpanded ? null : yearData.year)}
                    className={`w-full flex items-center justify-between p-6 transition-all hover:bg-blue-900 bg-primary ${isExpanded ? 'rounded-t-2xl' : 'rounded-2xl'}`}
                  >
                    <div className="flex items-center gap-4">
                      <Medal size={28} className="text-yellow-400" />
                      <span className="text-xl font-bold text-white">UACE {yearData.year}</span>
                    </div>
                    <ChevronDown size={24} className={`transition-transform duration-300 ${isExpanded ? 'rotate-180 text-white' : 'text-white/70'}`} />
                  </button>
                  
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="px-6 pb-6 pt-2 flex flex-col border-t border-gray-100/50">
                          {yearData.students.map((student, sIdx) => (
                            <div key={sIdx} className="w-full flex justify-between items-center py-3 border-b border-gray-50 last:border-0 hover:bg-gray-50/50 px-2 rounded-lg transition-colors">
                              <span className="font-semibold text-gray-800 text-base md:text-lg">{student.name}</span>
                              <div className="flex items-center text-sm md:text-base">
                                <span className="text-gray-500 font-medium mr-3">{student.combo}</span>
                                <span className="text-primary font-bold bg-blue-50 px-3 py-1 rounded-full">{student.pts}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Departments & Subjects */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-20">
          <div className="flex flex-col items-center text-center mb-12">
            <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Departments</span>
            <h2 id="subjects" className="text-3xl md:text-4xl lg:text-5xl font-black mb-4 text-gray-900">Subjects Offered</h2>
            <p className="text-gray-600 text-lg lg:text-xl max-w-4xl">We offer a comprehensive range of subjects at both Ordinary and Advanced levels, catering to diverse student interests and career aspirations.</p>
          </div>
          
          <div className="space-y-16">
            {/* O-Level */}
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="h-px bg-gray-200 flex-1" />
                <h3 className="text-3xl font-bold text-gray-900 px-4">O-Level Curriculum</h3>
                <div className="h-px bg-gray-200 flex-1" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { category: "Sciences", icon: Beaker, subjects: ["Physics", "Chemistry", "Biology", "Mathematics", "Agriculture"] },
                  { category: "Humanities", icon: BookOpen, subjects: ["Geography", "History", "CRE"] },
                  { category: "Languages", icon: Users, subjects: ["English Language", "Literature", "Kiswahili", "Runyankore", "Rukiga"] },
                  { category: "Vocational", icon: Laptop, subjects: ["Computer Studies", "Entrepreneurship", "Fine Art"] }
                ].map((group, idx) => (
                  <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-3 mb-4 border-b border-gray-100 pb-3">
                      <div className="w-10 h-10 bg-blue-50 text-primary rounded-xl flex items-center justify-center">
                        <group.icon size={20} />
                      </div>
                      <h4 className="font-bold text-gray-900 text-lg">{group.category}</h4>
                    </div>
                    <ul className="space-y-2">
                      {group.subjects.map((subject, sIdx) => (
                        <li key={sIdx} className="flex items-center gap-2 text-gray-600 font-medium">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full shrink-0" />
                          {subject}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* A-Level */}
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="h-px bg-gray-200 flex-1" />
                <h3 className="text-3xl font-bold text-gray-900 px-4">A-Level Curriculum</h3>
                <div className="h-px bg-gray-200 flex-1" />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Sciences */}
                <div className="bg-primary text-white p-8 rounded-3xl shadow-lg relative overflow-hidden group hover:-translate-y-1 transition-transform">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-bl-full -z-10 group-hover:scale-110 transition-transform duration-500" />
                  <div className="w-14 h-14 bg-white/20 text-white rounded-2xl flex items-center justify-center mb-6 backdrop-blur-sm">
                    <Beaker size={28} />
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-6">Sciences</h4>
                  <div className="space-y-3">
                    {["Physics", "Chemistry", "Biology", "Mathematics", "Agriculture"].map((subject, idx) => (
                      <div key={idx} className="flex items-center gap-3 text-blue-50 font-medium text-lg bg-white/10 px-4 py-2 rounded-xl backdrop-blur-sm border border-white/5">
                        <div className="w-1.5 h-1.5 bg-white rounded-full" /> {subject}
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Arts & Humanities */}
                <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-lg hover:bg-primary hover:border-primary transition-all group hover:-translate-y-1">
                  <div className="w-14 h-14 bg-blue-50 text-primary rounded-2xl flex items-center justify-center mb-6 group-hover:bg-white/20 group-hover:text-white transition-colors">
                    <BookOpen size={28} />
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-6 group-hover:text-white transition-colors">Arts & Humanities</h4>
                  <div className="space-y-3">
                    {["History", "Geography", "Economics", "Literature", "CRE", "Fine Art", "Entrepreneurship"].map((subject, idx) => (
                      <div key={idx} className="flex items-center gap-3 text-gray-600 group-hover:text-blue-50 font-medium text-lg bg-gray-50 group-hover:bg-white/10 px-4 py-2 rounded-xl border border-gray-100 group-hover:border-white/5 transition-colors">
                        <div className="w-1.5 h-1.5 bg-primary group-hover:bg-white rounded-full transition-colors" /> {subject}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Subsidiaries */}
                <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-lg hover:bg-primary hover:border-primary transition-all group hover:-translate-y-1">
                  <div className="w-14 h-14 bg-blue-50 text-primary rounded-2xl flex items-center justify-center mb-6 group-hover:bg-white/20 group-hover:text-white transition-colors">
                    <Laptop size={28} />
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-6 group-hover:text-white transition-colors">Subsidiaries</h4>
                  <div className="space-y-3">
                    {["General Paper", "Sub Math", "ICT"].map((subject, idx) => (
                      <div key={idx} className="flex items-center gap-3 text-gray-600 group-hover:text-blue-50 font-medium text-lg bg-gray-50 group-hover:bg-white/10 px-4 py-2 rounded-xl border border-gray-100 group-hover:border-white/5 transition-colors">
                        <div className="w-1.5 h-1.5 bg-primary group-hover:bg-white rounded-full transition-colors" /> {subject}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Co-curricular Activities */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
          <div className="flex flex-col items-center text-center mb-10">
            <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Beyond The Classroom</span>
            <h2 id="activities" className="text-3xl md:text-4xl lg:text-5xl font-black mb-4 text-gray-900">Co-curricular Activities</h2>
            <p className="text-gray-600 text-lg lg:text-xl max-w-4xl">Education goes beyond the classroom. We encourage all students to participate in sports and clubs to develop leadership skills, teamwork, and physical well-being.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="group relative overflow-hidden rounded-[2.5rem] shadow-lg aspect-[4/3]">
              <img 
                src="/images/IMG_20260401_182741_919.jpg" 
                alt="Sports" 
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                referrerPolicy="no-referrer" 
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent" />
              <div className="absolute bottom-0 left-0 w-full p-10">
                <div className="w-12 h-12 bg-blue-500 text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                  <Trophy size={24} />
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">Sports & Athletics</h3>
                <div className="flex flex-wrap gap-3">
                  {["Football", "Netball", "Volleyball", "Athletics"].map(sport => (
                    <span key={sport} className="bg-white/20 backdrop-blur-md text-white px-4 py-2 rounded-full text-sm font-medium border border-white/10">{sport}</span>
                  ))}
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-[2.5rem] shadow-lg aspect-[4/3]">
              <img 
                src="/images/IMG_20260401_182933_170.jpg" 
                alt="Clubs" 
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                referrerPolicy="no-referrer" 
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/40 to-transparent" />
              <div className="absolute bottom-0 left-0 w-full p-10">
                <div className="w-12 h-12 bg-white text-primary rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                  <Users size={24} />
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">Clubs & Societies</h3>
                <div className="flex flex-wrap gap-3">
                  {["Debate Club", "Science Club", "ICT & Innovation", "Writers' Club", "Leos Club", "Patriotic Club", "Interact Club"].map(club => (
                    <span key={club} className="bg-white/20 backdrop-blur-md text-white px-4 py-2 rounded-full text-sm font-medium border border-white/10">{club}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* School Programs for the Term (Transferred from Home) */}
        <section className="py-20 lg:py-24 bg-white rounded-[3rem] shadow-2xl border border-gray-100 relative overflow-hidden mt-16">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.08),transparent_50%)] pointer-events-none" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center mb-16"
            >
              <div className="inline-flex items-center gap-2 bg-blue-50 text-primary px-4 py-1.5 rounded-full text-sm font-bold mb-4">
                <Clock size={16} />
                <span>Term Schedule</span>
              </div>
              <h2 id="calendar" className="text-4xl lg:text-5xl font-black text-gray-900 mb-6">School Programs for the Term</h2>
              <p className="text-lg lg:text-xl text-gray-600 max-w-3xl">Our multi-month academic calendar ensures you never miss an important date.</p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Event List (Left) */}
              <div className="lg:col-span-4 order-2 lg:order-1 bg-white p-8 rounded-[2.5rem] shadow-sm border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                  <Activity className="text-primary" size={24} />
                  Highlights
                </h3>
                <div className="space-y-6">
                  {termEvents.map((event) => (
                    <div
                      key={event.id}
                      onClick={() => setSelectedEventId(event.id)}
                      className="group cursor-pointer py-3 border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors px-2 rounded-lg"
                    >
                      <div className="flex justify-between items-start gap-4">
                        <div className="flex-1">
                          <div className={`text-[10px] font-bold uppercase tracking-widest mb-0.5 ${selectedEventId === event.id ? 'text-primary' : 'text-gray-400 group-hover:text-primary transition-colors'}`}>
                            {event.date}
                          </div>
                          <div className={`font-bold text-sm ${selectedEventId === event.id ? 'text-primary' : 'text-gray-700'}`}>
                            {event.title}
                          </div>
                        </div>
                        <div className={`w-2 h-2 rounded-full mt-1.5 transition-all ${selectedEventId === event.id ? 'bg-primary scale-125' : 'bg-gray-200 group-hover:bg-primary/40'}`} />
                      </div>
                    </div>
                  ))}
                  {termEvents.length === 0 && (
                    <div className="text-gray-400 italic">No events scheduled.</div>
                  )}
                </div>
              </div>

              {/* Calendar Grid (Right) - Continuous Looking */}
              <div className="lg:col-span-8 order-1 lg:order-2">
                <div className="bg-gray-50/80 p-8 sm:p-12 rounded-[2.5rem] border border-gray-100 shadow-inner">
                  <div className="flex flex-col gap-16">
                    {/* Continuous stack of months */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
                      {renderMonth(4, 2026)} {/* May */}
                      {renderMonth(5, 2026)} {/* June */}
                      {renderMonth(6, 2026)} {/* July */}
                    </div>
                  </div>
                  
                  <div className="mt-12 flex flex-wrap items-center gap-6 justify-center text-sm text-gray-500 bg-white/60 py-5 px-8 rounded-2xl border border-gray-100 shadow-sm">
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 bg-primary rounded-full shadow-sm" />
                      <span className="font-medium text-gray-700">School Event</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 bg-gray-200 rounded-full" />
                      <span className="font-medium text-gray-500">Regular Day</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
