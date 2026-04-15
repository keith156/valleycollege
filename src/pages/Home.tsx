import { Link } from 'react-router-dom';
import { ArrowRight as ArrowRightIcon, BookOpen as BookOpenIcon, CheckCircle as CheckCircleIcon, Trophy as TrophyIcon, Users as UsersIcon, Calendar, Image as ImageIcon, Clock } from 'lucide-react';
import { motion, AnimatePresence, animate, useInView } from 'motion/react';
import { Carousel } from '../components/Carousel';
import { HolographicCard } from '../components/ui/holographic-card';
import { TextOutline } from '../components/ui/text-outline';
import React, { useEffect, useState } from 'react';
import Lenis from '@studio-freight/lenis';
import { ZoomParallax } from '../components/ui/zoom-parallax';
import { getEvents, SchoolEvent } from '../lib/events';
import { getNews, NewsItem } from '../lib/news';

interface CountUpProps {
  end: number;
  duration?: number;
}

const CountUp = ({ end, duration = 2 }: CountUpProps) => {
  const [displayValue, setDisplayValue] = useState(0);
  const nodeRef = React.useRef<HTMLSpanElement>(null);
  const isInView = useInView(nodeRef as React.RefObject<Element>, { once: true });

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, end, {
        duration,
        ease: "easeOut",
        onUpdate: (value) => setDisplayValue(Math.round(value)),
      });
      return () => controls.stop();
    }
  }, [end, duration, isInView]);

  return <span ref={nodeRef}>{displayValue}</span>;
};

export default function Home() {
  const [termEvents, setTermEvents] = useState<SchoolEvent[]>([]);
  const [newsItems, setNewsItems] = useState<NewsItem[]>([]);
  const [currentHeroImage, setCurrentHeroImage] = useState(0);

  const heroImages = [
    "/heroimages/1.png",
    "/heroimages/2.png",
    "/heroimages/3.jpg",
    "/heroimages/4.png",
    "/heroimages/5.jpeg",
    "/heroimages/6.jpg"
  ];

  const slideVariants = {
    initial: { x: '100%', opacity: 0 },
    animate: { x: 0, opacity: 0.8 },
    exit: { x: '-100%', opacity: 0 }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentHeroImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroImages.length]);

  useEffect(() => {
    setTermEvents(getEvents());
    setNewsItems(getNews());
    
    const lenis = new Lenis();
    
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
    
    return () => {
      lenis.destroy();
    };
  }, []);

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

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[700px] flex items-center justify-center text-white overflow-hidden bg-black">
        {/* Background Layer */}
        <div className="absolute inset-0 z-0">
          <AnimatePresence initial={false}>
            <motion.img
              key={currentHeroImage}
              src={heroImages[currentHeroImage]}
              alt="Valley College Campus"
              variants={slideVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 1.5, ease: [0.4, 0, 0.2, 1] }}
              className="absolute inset-0 w-full h-full object-cover scale-105"
              referrerPolicy="no-referrer"
              decoding="async"
              fetchPriority="high"
            />
          </AnimatePresence>
          {/* Subtle Dark Overlay for Text Readability */}
          <div className="absolute inset-0 bg-black/40" />
        </div>
        
        {/* Content Layer */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white pb-16 sm:pb-32">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex flex-col items-center"
          >
            {/* Animated Badge */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="mb-8 px-6 py-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-md text-xs md:text-sm font-bold tracking-[0.3em] uppercase"
            >
              EXCELLENCE • DISCIPLINE • VALUES
            </motion.div>

            {/* Main Animated Title (SVG Outline) */}
            <div className="mb-8 w-full max-w-[900px] h-[150px] md:h-[250px] flex items-center justify-center">
              <TextOutline text="DELIVERANCE" />
            </div>

            {/* Subtext */}
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 1 }}
              className="text-lg md:text-2xl text-blue-100 max-w-3xl mb-12 font-medium leading-relaxed drop-shadow-md"
            >
              Empowering the next generation of leaders through <span className="text-white border-b-2 border-white/30">academic excellence</span>, <span className="text-white border-b-2 border-white/30">unwavering discipline</span>, and <span className="text-white border-b-2 border-white/30">strong core values</span>.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-6"
            >
              <Link
                to="/admissions"
                className="relative group bg-white text-[#001a40] px-10 py-5 rounded-xl font-black text-lg transition-all shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_40px_rgba(255,255,255,0.5)] hover:-translate-y-1 overflow-hidden"
              >
                <span className="relative z-10">APPLY FOR 2026</span>
                <div className="absolute inset-0 bg-blue-100 -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out" />
              </Link>
              <Link
                to="/contact"
                className="bg-transparent border-2 border-white/50 text-white hover:bg-white/10 hover:border-white px-10 py-5 rounded-xl font-black text-lg transition-all backdrop-blur-sm hover:-translate-y-1"
              >
                VISIT CAMPUS
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Shared Values Banner Overlay */}
      <div className="relative z-30 -mt-16 sm:-mt-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto bg-primary shadow-2xl p-8 sm:p-12 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-lg sm:text-xl md:text-2xl font-black text-white tracking-widest leading-relaxed uppercase"
          >
            VALLEY COLLEGE SS IS BUILT ON STRONG FOUNDATION OF ACADEMIC <span className="text-blue-300">EXCELLENCE</span>, <span className="text-blue-300">DISCIPLINE</span>, AND <span className="text-blue-300">VALUES</span> THAT SHAPE FUTURE LEADERS.
          </motion.h2>
        </div>
      </div>

      {/* Message from Our Head Teacher */}
      <section className="pt-20 pb-24 bg-white overflow-hidden relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Image Side */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/5] w-[85%] mx-auto lg:mr-auto lg:ml-0">
                <img
                  src="/HM valley college.jpg"
                  alt="Ms. Kabezi Doreen - Head Teacher"
                  className="w-full h-full object-cover object-top"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  decoding="async"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "/images/1.jpeg"; // Fallback image just in case
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-6 left-6 sm:bottom-10 sm:left-10 text-white drop-shadow-md">
                  <h3 className="text-2xl sm:text-3xl font-bold font-serif mb-1">Ms. Kabezi Doreen</h3>
                  <p className="text-blue-200 font-bold tracking-wide uppercase text-sm">Head Teacher</p>
                </div>
              </div>
            </motion.div>

            {/* Text Side */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900 leading-tight">
                Message from Our <span className="text-primary block mt-2">Head Teacher</span>
              </h2>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed mb-10 relative">
                <div className="text-primary opacity-10 absolute -top-8 -left-4 text-8xl font-serif leading-none italic pointer-events-none">"</div>
                <p className="relative z-10 italic">
                  Welcome to the Valley College SSS website. We thank God for the years of steady growth, achievement, and impact in the field of education.
                </p>
                <p className="relative z-10 italic">
                  Our sincere appreciation goes to our founder, Mzee William Mukaira, and the entire foundation for establishing a school that continues to shape lives and build a strong academic legacy in Bushenyi Municipality, Bushenyi District, Uganda.
                </p>
                <p className="relative z-10 italic">
                  Valley College SSS has consistently registered excellent academic performance at both O-Level and A-Level, with many of our students attaining outstanding results. Over the years, our alumni have gone on to excel in reputable universities and have taken up influential roles in various professional fields.
                </p>
                <p className="relative z-10 italic">
                  We remain committed to providing a conducive learning environment, guided by discipline, professionalism, and a strong moral foundation, as we nurture the next generation of leaders.
                </p>
              </div>

              <Link 
                to="/about" 
                className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white transition-all bg-primary rounded-xl hover:bg-primary/90 hover:shadow-lg hover:-translate-y-1 group"
              >
                Learn More About Us
                <ArrowRightIcon size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quick Stats Counter */}
      <section className="py-12 bg-gray-50 border-y border-gray-100 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center divide-y sm:divide-y-0 sm:divide-x divide-gray-200">
            <div className="py-4 sm:py-0">
              <div className="text-4xl md:text-5xl font-black text-primary mb-2">
                <CountUp end={20} />
              </div>
              <div className="text-sm font-bold text-gray-500 uppercase tracking-widest">Years of Excellence</div>
            </div>
            <div className="py-4 sm:py-0">
              <div className="text-4xl md:text-5xl font-black text-primary mb-2">
                <CountUp end={27} />
              </div>
              <div className="text-sm font-bold text-gray-500 uppercase tracking-widest">Subjects Offered</div>
            </div>
            <div className="py-4 sm:py-0">
              <div className="text-4xl md:text-5xl font-black text-primary mb-2">
                <CountUp end={670} />
              </div>
              <div className="text-sm font-bold text-gray-500 uppercase tracking-widest">Number of Students</div>
            </div>
          </div>
        </div>
      </section>

      {/* Zoom Parallax Gallery */}
      <section className="bg-white text-gray-900 relative">
        <div className="relative flex h-[50vh] items-center justify-center overflow-hidden">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-1/2 left-1/2 h-[120vmin] w-[120vmin] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.05),transparent_50%)] blur-[30px]"
          />
          <div className="text-center z-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Campus Life</h2>
            <p className="text-xl text-gray-500">Scroll down to explore</p>
          </div>
        </div>
        <ZoomParallax images={parallaxImages} />
        <div className="h-[20vh] bg-white" />
      </section>

      {/* Key Highlights */}
      <section className="py-24 bg-gray-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Why Choose Valley College?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">We provide a holistic educational experience designed to nurture every aspect of student development.</p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: BookOpenIcon, title: "Academic Excellence", desc: "Rigorous curriculum designed to challenge and inspire students to reach their full potential." },
              { icon: CheckCircleIcon, title: "Discipline & Values", desc: "Fostering integrity, respect, and responsibility in a supportive community environment." },
              { icon: TrophyIcon, title: "Modern Facilities", desc: "State-of-the-art classrooms, laboratories, and sports complexes to enhance learning." }
            ].map((feature, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <HolographicCard 
                  title={feature.title} 
                  description={feature.desc} 
                  icon={<feature.icon size={32} />} 
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* School Programs for the Term */}
      <section className="py-24 bg-white relative overflow-hidden">
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

      {/* Latest News & Quick Links */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            
            <div className="lg:col-span-2">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl font-bold mb-8 flex items-center gap-3">
                  Latest News & Updates
                </h2>
                <div className="-mx-4 sm:-mx-8">
                  {newsItems.length > 0 ? (
                    <Carousel autoPlayInterval={6000}>
                      {newsItems.map((news, idx) => (
                        <div key={news.id} className="snap-start shrink-0 w-[85%] sm:w-[350px] bg-gray-50 rounded-2xl border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow group">
                          <div className="h-48 bg-gray-200 relative overflow-hidden">
                            <img 
                              src={news.img} 
                              alt={news.title} 
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                              referrerPolicy="no-referrer" 
                              loading="lazy"
                              decoding="async"
                            />
                          </div>
                          <div className="p-6">
                            <div className="flex items-center gap-2 text-sm font-bold text-primary mb-3">
                              <Calendar size={16} />
                              {news.date}
                            </div>
                            <h4 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2">{news.title}</h4>
                            <p className="text-gray-600 text-sm line-clamp-3">{news.excerpt}</p>
                          </div>
                        </div>
                      ))}
                    </Carousel>
                  ) : (
                    <div className="p-8 text-gray-500">No news available.</div>
                  )}
                </div>
              </motion.div>
            </div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-8">Quick Links</h2>
              <div className="bg-primary text-white rounded-2xl p-8 shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />
                <ul className="space-y-4 relative z-10">
                  <li>
                    <Link to="/admissions" className="flex items-center justify-between p-5 bg-white/10 hover:bg-white/20 rounded-xl transition-all group hover:scale-[1.02]">
                      <span className="font-bold text-lg">Admissions</span>
                      <ArrowRightIcon size={24} className="group-hover:translate-x-2 transition-transform" />
                    </Link>
                  </li>
                  <li>
                    <Link to="/academics" className="flex items-center justify-between p-5 bg-white/10 hover:bg-white/20 rounded-xl transition-all group hover:scale-[1.02]">
                      <span className="font-bold text-lg">Academics</span>
                      <ArrowRightIcon size={24} className="group-hover:translate-x-2 transition-transform" />
                    </Link>
                  </li>
                  <li>
                    <Link to="/contact" className="flex items-center justify-between p-5 bg-white/10 hover:bg-white/20 rounded-xl transition-all group hover:scale-[1.02]">
                      <span className="font-bold text-lg">Contact Us</span>
                      <ArrowRightIcon size={24} className="group-hover:translate-x-2 transition-transform" />
                    </Link>
                  </li>
                </ul>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-12 text-center">What Our Community Says</h2>
            <div className="-mx-4 sm:-mx-8">
              <Carousel autoPlayInterval={5000}>
                {[
                  { quote: "Valley College provided me with the academic rigor and discipline I needed to succeed at university and beyond.", author: "Sarah M.", role: "Alumni, Class of 2022" },
                  { quote: "The shared facilities with the university give our children an incredible advantage and exposure early on.", author: "David K.", role: "Parent" },
                  { quote: "The teachers here truly care about our success. The practical learning approach makes complex subjects easy to grasp.", author: "John B.", role: "Current Student (S5)" },
                  { quote: "I am constantly amazed by the level of dedication the staff shows towards nurturing both talent and intellect.", author: "Grace T.", role: "Parent" },
                  { quote: "Being part of the debate club here built my confidence. I'm now pursuing Law at Makerere University.", author: "Emmanuel R.", role: "Alumni, Class of 2023" },
                  { quote: "The science laboratories are top-notch. It makes learning physics and chemistry so much more engaging.", author: "Mercy A.", role: "Current Student (S4)" }
                ].map((testimonial, idx) => (
                  <div key={idx} className="snap-start shrink-0 w-[85%] sm:w-[400px] bg-white p-10 rounded-2xl shadow-sm border border-gray-100 relative hover:shadow-md transition-shadow">
                    <div className="text-primary opacity-10 absolute top-6 left-6 text-8xl font-serif leading-none">"</div>
                    <p className="text-gray-700 italic mb-8 relative z-10 pt-6 text-lg">"{testimonial.quote}"</p>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-primary font-bold text-xl">
                        {testimonial.author.charAt(0)}
                      </div>
                      <div>
                        <div className="font-bold text-gray-900">{testimonial.author}</div>
                        <div className="text-sm text-primary font-medium">{testimonial.role}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </Carousel>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
