import { useState, useEffect } from 'react';
import { BookOpen, GraduationCap, Laptop, Activity, Trophy, Beaker, Users, Star, Medal, ChevronDown, Clock } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { getWallOfFame, WallOfFameYear } from '../lib/wallOfFame';
import { getEvents, SchoolEvent } from '../lib/events';

export default function Academics() {
  const [expandedYear, setExpandedYear] = useState<string | null>(null);
  const [wallOfFameData, setWallOfFameData] = useState<WallOfFameYear[]>([]);
  const [termEvents, setTermEvents] = useState<SchoolEvent[]>([]);

  useEffect(() => {
    const data = getWallOfFame();
    setWallOfFameData(data);
    if (data.length > 0) {
      setExpandedYear(data[0].year);
    }
    setTermEvents(getEvents());
  }, []);

  return (
    <div className="flex flex-col bg-gray-50 pb-20">
      {/* Page Header */}
      <div className="relative bg-primary text-white py-24 lg:py-32 overflow-hidden">
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
          <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 drop-shadow-md">Academics</h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto drop-shadow-sm">
              A rigorous curriculum designed to foster critical thinking, creativity, and lifelong learning.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
        
        {/* Curriculum & Approach Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-24">
          {/* Curriculum */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="lg:col-span-3 bg-white rounded-[2.5rem] shadow-xl border border-gray-100 overflow-hidden relative group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-blue-100 transition-colors duration-700" />
            <div className="p-10 lg:p-12 relative z-10">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-blue-50 text-primary mb-8 shadow-sm border border-blue-100">
                <BookOpen size={32} />
              </div>
              <h2 className="text-4xl font-bold mb-6 text-gray-900">Our Curriculum</h2>
              <p className="text-gray-600 leading-relaxed mb-8 text-xl">
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
            <div className="p-10 lg:p-12 relative z-10">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/10 text-blue-200 mb-8 backdrop-blur-sm border border-white/20">
                <GraduationCap size={32} />
              </div>
              <h2 className="text-4xl font-bold text-white mb-4">Academic Excellence</h2>
              <p className="text-blue-100 leading-relaxed mb-10 text-lg">
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
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-32 max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center gap-3 bg-green-100 text-green-800 px-6 py-2 rounded-full mb-4">
              <Star size={24} className="fill-green-600 text-green-600" />
              <h2 className="text-3xl font-bold">UACE Wall of Fame</h2>
              <Star size={24} className="fill-green-600 text-green-600" />
            </div>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">Celebrating our top performing students in the Uganda Advanced Certificate of Education (UACE) examinations over the years.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
            {wallOfFameData.map((yearData, idx) => {
              const isExpanded = expandedYear === yearData.year;
              return (
                <motion.div 
                  key={yearData.year}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className={`bg-white rounded-2xl shadow-md border border-primary overflow-hidden transition-all duration-300`}
                >
                  <button 
                    onClick={() => setExpandedYear(isExpanded ? null : yearData.year)}
                    className={`w-full flex items-center justify-between p-6 transition-colors bg-primary text-white hover:bg-primary/90`}
                  >
                    <div className="flex items-center gap-4">
                      <Medal size={28} className="text-yellow-400" />
                      <span className="text-2xl font-bold text-white tracking-wider">Class of {yearData.year}</span>
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
                        <div className="p-6 grid grid-cols-1 gap-4 bg-gray-50/50">
                          {yearData.students.map((student, sIdx) => (
                            <div key={sIdx} className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex flex-col">
                              <span className="font-bold text-gray-900 text-lg mb-2">{student.name}</span>
                              <div className="flex justify-between items-center mt-auto pt-3 border-t border-gray-50">
                                <span className="text-gray-600 font-medium bg-gray-100 px-2 py-1 rounded-md text-xs">{student.combo}</span>
                                <span className="text-primary font-black text-sm">{student.pts} pts</span>
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
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-32">
          <div className="text-center mb-16">
            <span className="text-primary font-bold tracking-widest uppercase text-sm mb-2 block">Departments</span>
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-gray-900">Subjects Offered</h2>
            <p className="text-gray-600 text-xl max-w-3xl mx-auto">We offer a comprehensive range of subjects at both Ordinary and Advanced levels, catering to diverse student interests and career aspirations.</p>
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
                  { category: "Languages", icon: Users, subjects: ["English Language", "Literature"] },
                  { category: "Vocational", icon: Laptop, subjects: ["Computer Studies", "Entrepreneurship", "Commerce", "Fine Art", "Principles of Accounts"] }
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
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-20">
          <div className="text-center mb-12">
            <span className="text-primary font-bold tracking-widest uppercase text-sm mb-2 block">Beyond The Classroom</span>
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-gray-900">Co-curricular Activities</h2>
            <p className="text-gray-600 text-xl max-w-3xl mx-auto">Education goes beyond the classroom. We encourage all students to participate in sports and clubs to develop leadership skills, teamwork, and physical well-being.</p>
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
                <div className="w-14 h-14 bg-blue-500 text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                  <Trophy size={28} />
                </div>
                <h3 className="text-3xl font-bold text-white mb-4">Sports & Athletics</h3>
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
                <div className="w-14 h-14 bg-white text-primary rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                  <Users size={28} />
                </div>
                <h3 className="text-3xl font-bold text-white mb-4">Clubs & Societies</h3>
                <div className="flex flex-wrap gap-3">
                  {["Debate Club", "Science Club", "ICT & Innovation", "Writers' Club"].map(club => (
                    <span key={club} className="bg-white/20 backdrop-blur-md text-white px-4 py-2 rounded-full text-sm font-medium border border-white/10">{club}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* School Programs for the Term (Transferred from Home) */}
        <section className="py-24 bg-white rounded-[2.5rem] shadow-xl border border-gray-100 relative overflow-hidden mt-16">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,rgba(59,130,246,0.05),transparent_50%)] pointer-events-none" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <span className="text-primary font-bold tracking-widest uppercase text-sm mb-2 block">Upcoming Events</span>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">School Programs for the Term</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">Stay updated with our key academic and co-curricular activities for this term.</p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="max-h-[400px] overflow-y-auto p-2 sm:p-4">
                  {termEvents.length === 0 ? (
                    <div className="text-center p-12 bg-gray-50 rounded-2xl border border-gray-100">
                      <p className="text-gray-500 text-lg">No programs scheduled for this term yet.</p>
                    </div>
                  ) : (
                    <div className="flex flex-col gap-2">
                      {termEvents.map((event, idx) => (
                        <motion.div 
                          key={event.id}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: idx * 0.05 }}
                          className="flex items-center gap-4 p-4 rounded-2xl hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-100 group"
                        >
                          <div className="w-12 h-12 bg-blue-50 text-primary rounded-xl flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                            <Clock size={20} />
                          </div>
                          <div className="flex-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-4">
                            <h3 className="text-lg font-bold text-gray-900 group-hover:text-primary transition-colors">{event.title}</h3>
                            <div className="text-sm font-bold text-primary whitespace-nowrap bg-blue-50/50 px-3 py-1 rounded-full w-fit">{event.date}</div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
