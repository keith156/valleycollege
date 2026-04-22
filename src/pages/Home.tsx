import { Link } from 'react-router-dom';
import { ArrowRight as ArrowRightIcon, BookOpen as BookOpenIcon, CheckCircle as CheckCircleIcon, Trophy as TrophyIcon, Users as UsersIcon, Image as ImageIcon } from 'lucide-react';
import { motion, AnimatePresence, animate, useInView } from 'motion/react';
import { Carousel } from '../components/Carousel';
import { HolographicCard } from '../components/ui/holographic-card';
import { TextOutline } from '../components/ui/text-outline';
import React, { useEffect, useState } from 'react';
import { ZoomParallax } from '../components/ui/zoom-parallax';

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

  const milestones = [
    { 
      year: "1997", 
      title: "Foundation", 
      desc: "This image features the statue of Mzee William Mukaira, the founder of Valley College Secondary School, whose vision and leadership led to the establishment of the school in 1997. The institution began with a pioneering cohort of just 48 A-Level students. His unwavering commitment to excellence, discipline, and quality education laid a strong foundation and continues to shape the values and success of Valley College today.",
      img: "/images/growth milestones img/foundation.jpeg"
    },
    { 
      year: "2000", 
      title: "Expansion", 
      desc: "Following its establishment in 1997, Valley College Secondary School experienced significant expansion between 2000 and 2010, a period that defined its physical and academic growth. During this time, the institution invested in the construction of key infrastructure, including classroom blocks, science laboratories, administrative facilities, and student accommodation, to support its steadily increasing enrollment.",
      img: "/images/growth milestones img/expansion.jpeg"
    },
    { 
      year: "2018", 
      title: "Partnership", 
      desc: "Valley College Secondary School and Valley University share a strong historical and strategic partnership under the leadership of the Mukaira Foundation. United by a common vision for excellence in education and located side by side, the two institutions complement each other by creating a seamless pathway from secondary to university education. This close relationship promotes mentorship, academic growth, innovation, and shared values of discipline, leadership, and service, strengthening opportunities for learners at every stage",
      img: "/images/growth milestones img/partnership.jpeg"
    },
    { 
      year: "2026", 
      title: "Excellence", 
      desc: "Valley College Secondary School has consistently upheld a culture of excellence grounded in strong academic performance, discipline, and holistic student development. The school has distinguished itself through outstanding national examination results and effective teaching. Notably, in 2005, it emerged as the best-performing secondary school in Western Uganda, highlighting its commitment to quality education.",
      img: "/images/growth milestones img/excellence.jpeg"
    }
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
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white pb-8 sm:pb-32">
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

            {/* Main Title */}
            <div className="mb-4 w-full flex items-center justify-center h-[120px] md:h-[180px] lg:h-[240px]">
              <TextOutline text="DELIVERANCE" className="drop-shadow-2xl" />
            </div>

            {/* Subtext */}
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 1 }}
              className="text-base md:text-xl lg:text-2xl text-blue-100 max-w-3xl mb-12 font-medium leading-relaxed drop-shadow-md px-4"
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
                className="relative group bg-white text-[#001a40] px-8 py-4 md:px-10 md:py-5 rounded-xl font-black text-base md:text-lg transition-all shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_40px_rgba(255,255,255,0.5)] hover:-translate-y-1 overflow-hidden"
              >
                <span className="relative z-10">APPLY FOR 2026</span>
                <div className="absolute inset-0 bg-blue-100 -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out" />
              </Link>
              <Link
                to="/contact"
                className="bg-transparent border-2 border-white/50 text-white hover:bg-white/10 hover:border-white px-8 py-4 md:px-10 md:py-5 rounded-xl font-black text-base md:text-lg transition-all backdrop-blur-sm hover:-translate-y-1"
              >
                VISIT CAMPUS
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Shared Values Banner Overlay */}
      <div className="relative z-30 -mt-16 sm:-mt-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto bg-primary shadow-2xl px-8 py-10 sm:px-12 sm:py-16 text-center rounded-3xl">
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
      <section className="pt-12 pb-4 bg-white overflow-hidden relative z-20">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start lg:items-stretch">
            {/* Image Side */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative h-full"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl w-full lg:mr-auto lg:ml-0 h-[400px] md:h-[500px] lg:h-full min-h-[400px]">
                <img
                  src="/HM valley college.jpg"
                  alt="Ms. Kabezi Doreen - Head Teacher"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  decoding="async"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "/images/1.jpeg"; // Fallback image just in case
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-6 left-6 sm:bottom-10 sm:left-10 text-white drop-shadow-lg">
                  <h3 className="text-2xl sm:text-3xl font-bold font-serif mb-1 text-white">Ms. Kabezi Doreen</h3>
                  <p className="text-blue-300 font-bold tracking-wide uppercase text-sm">Head Teacher</p>
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
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-gray-900 leading-tight">
                Message from Our <span className="text-primary block mt-2">Head Teacher</span>
              </h2>
              <div className="space-y-6 text-base md:text-lg text-gray-600 leading-relaxed mb-10 relative">
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
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quick Stats Counter - Premium Redesign */}
      <section className="py-4 bg-white relative z-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 sm:px-0">
            {[
              { end: 29, label: "Years of Excellence", icon: TrophyIcon, img: "/images/growth milestones img/excellence.jpeg" },
              { end: 27, label: "Subjects Offered", icon: BookOpenIcon, img: "/images/subjects offered.jpeg" },
              { end: 650, label: "Number of Students", icon: UsersIcon, img: "/images/10.jpeg" }
            ].map((stat, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="relative group h-[280px] sm:h-[320px] overflow-hidden rounded-[2.5rem] shadow-2xl"
              >
                {/* Background Image */}
                <img 
                  src={stat.img} 
                  alt={stat.label} 
                  className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors" />

                {/* Glassmorphic Overlay */}
                <div className="absolute inset-0 flex items-end justify-center p-6 pb-8">
                  <div className="w-full max-w-[280px] bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6 flex flex-col items-center text-center shadow-2xl">
                    <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center text-white mb-6 border border-white/20">
                      <stat.icon size={28} />
                    </div>
                    <div className="text-4xl lg:text-5xl xl:text-6xl font-black text-white mb-2 tracking-tighter drop-shadow-lg">
                      <CountUp end={stat.end} />
                      <span className="text-blue-300 text-3xl ml-1">+</span>
                    </div>
                    <div className="text-xs font-black text-blue-100 uppercase tracking-[0.3em]">{stat.label}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Growth Milestones Timeline (Transferred from About) */}
      <section className="py-12 bg-white relative overflow-hidden">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center mb-12">
            <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Our History</span>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-gray-900">Growth Milestones</h2>
          </div>


          <div className="relative max-w-7xl mx-auto">
            {/* Center Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-100 via-primary to-blue-100 -translate-x-1/2 rounded-full" />

            <div className="space-y-24">
              {milestones.map((milestone, idx) => (
                <div key={idx} className="relative overflow-hidden md:overflow-visible">
                  <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: false, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className={`relative flex flex-col md:flex-row items-center gap-8 md:gap-16 ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                  >
                    {/* Timeline Node */}
                    <div className="absolute left-4 md:left-1/2 w-8 h-8 bg-white border-4 border-primary rounded-full -translate-x-1/2 shadow-[0_0_0_8px_rgba(255,255,255,1)] z-30 flex items-center justify-center">
                      <div className="w-2 h-2 bg-primary rounded-full" />
                    </div>

                    {/* Content (Text) */}
                    <motion.div 
                      initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: false }}
                      transition={{ delay: 0.5, duration: 0.8 }}
                      className={`w-full md:w-1/2 pl-12 md:pl-0 ${idx % 2 === 0 ? 'md:text-left' : 'md:text-right'} z-10`}
                    >
                      <div className="text-4xl md:text-6xl lg:text-8xl font-black text-primary mb-2 mt-0 md:-mt-14 tracking-tighter select-none drop-shadow-sm opacity-20">
                        {milestone.year}
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">{milestone.title}</h3>
                      <p className="text-lg text-gray-600 leading-relaxed">
                        {milestone.desc}
                      </p>
                    </motion.div>

                    {/* Content (Image) - This slides to reveal */}
                    <motion.div 
                      className="w-full md:w-1/2 pl-12 md:pl-0 z-20"
                      initial={{ 
                        x: idx % 2 === 0 ? 100 : -100,
                        opacity: 0,
                        scale: 0.95
                      }}
                      whileInView={{ 
                        x: 0,
                        opacity: 1,
                        scale: 1
                      }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ 
                        duration: 2.5, 
                        ease: [0.22, 1, 0.36, 1], // Custom cubic-bezier for a premium slide
                        opacity: { duration: 0.8 }
                      }}
                    >
                      <div className="rounded-[2rem] overflow-hidden shadow-2xl border-8 border-white group relative">
                        <img 
                          src={milestone.img} 
                          alt={milestone.title} 
                          className="w-full h-80 md:h-[400px] object-cover group-hover:scale-110 transition-transform duration-700"
                          referrerPolicy="no-referrer"
                          loading="lazy"
                          decoding="async"
                        />
                        <div className="absolute inset-0 bg-primary/5 group-hover:bg-transparent transition-colors" />
                      </div>
                    </motion.div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Key Highlights */}
      <section className="py-12 bg-gray-50 relative">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center text-center mb-12 max-w-6xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-4">Why Choose Valley College?</h2>
            <p className="text-xl text-gray-600 max-w-none">We provide a holistic educational experience designed to nurture every aspect of student development.</p>
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

      {/* Removed School Programs and News Updates from Home */}

      {/* Testimonials */}
      <section className="pt-12 pb-4 bg-gray-50 overflow-hidden">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
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
