import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Mail, Phone, MapPin, ChevronDown } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import React from 'react';
import { cn } from '../lib/utils';
import { motion, AnimatePresence } from 'motion/react';

const NAV_LINKS = [
  { name: 'HOME', path: '/' },
  { name: 'ABOUT', path: '/about' },
  { 
    name: 'ACADEMICS', 
    path: '/academics',
    subLinks: [
      { name: 'Curriculum', path: '/academics#curriculum' },
      { name: 'Wall of Fame', path: '/academics#fame' },
      { name: 'Subjects Offered', path: '/academics#subjects' },
      { name: 'Co-curricular Activities', path: '/academics#activities' },
      { name: 'School Calendar', path: '/academics#calendar' },
    ]
  },
  { 
    name: 'ADMISSIONS', 
    path: '/admissions',
    subLinks: [
      { name: 'Application Documents', path: '/admissions#documents' },
      { name: 'Application Process', path: '/admissions#process' },
      { name: 'Admission Requirements', path: '/admissions#requirements' },
    ]
  },
  { 
    name: 'ALUMNI', 
    path: '/alumni',
    subLinks: [
      { name: 'Alumni Spotlight', path: '/alumni#spotlight' },
      { name: 'Alumni College League', path: '/alumni#league' },
      { name: 'Alumni Giveback Project', path: '/alumni#giveback' },
      { name: 'Alumni Gallery', path: '/alumni#gallery' },
    ]
  },
  { name: 'CONTACT', path: '/contact' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const location = useLocation();

  // Handle hash scrolling
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.substring(1);
      const element = document.getElementById(id);
      if (element) {
        // Wait a bit for page to render fully if navigating from another page
        setTimeout(() => {
          const offset = 160; // Offset for sticky header
          const bodyRect = document.body.getBoundingClientRect().top;
          const elementRect = element.getBoundingClientRect().top;
          const elementPosition = elementRect - bodyRect;
          const offsetPosition = elementPosition - offset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }, 100);
      }
    } else if (location.pathname !== lastPathname.current) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    lastPathname.current = location.pathname;
  }, [location]);

  const lastPathname = useRef(location.pathname);

  return (
    <header className="sticky top-0 z-50 w-full shadow-sm font-sans">
      {/* Top Banner */}
      <div className="bg-[#001a40] text-white h-[48px] flex items-center justify-center px-4 sm:px-6 lg:px-8 border-b border-white/10 overflow-hidden">
        <div className="max-w-[1440px] mx-auto flex justify-center items-center">
          <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-2 text-[10px] md:text-[11px] font-bold tracking-wider uppercase">
            <a href="mailto:info@valleycollege.sc.ug" className="flex items-center gap-1.5 hover:text-blue-200 transition-colors whitespace-nowrap">
              <Mail size={12} className="text-blue-300" />
              info@valleycollege.sc.ug
            </a>
            <span className="flex items-center gap-1.5 whitespace-nowrap">
              <MapPin size={12} className="text-blue-300" />
              Bushenyi, Uganda
            </span>
            <div className="flex items-center gap-1.5 whitespace-nowrap">
              <Phone size={12} className="text-blue-300" />
              <a href="tel:+256782679985" className="hover:text-blue-200 transition-colors">+256 782 679 985</a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="bg-[#b0c4de] w-full">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="flex justify-between items-center h-20 lg:h-24 xl:h-28">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 lg:gap-4 xl:gap-6 group shrink-0">
              <img 
                src="/logo.png" 
                alt="Valley College Logo" 
                className="h-14 lg:h-16 xl:h-20 w-auto object-contain group-hover:scale-105 transition-transform"
              />
              <div className="flex flex-col justify-center">
                <span className="font-extrabold text-lg lg:text-xl xl:text-3xl text-[#001a40] leading-none tracking-tighter pb-1.5">
                  VALLEY COLLEGE
                </span>
                <span className="font-bold text-[10px] lg:text-xs xl:text-sm text-[#001a40]/80 leading-tight tracking-widest uppercase">
                  Secondary School
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-0.5 xl:gap-1.5">
              {NAV_LINKS.map((link) => (
                <div 
                  key={link.name} 
                  className="relative group"
                  onMouseEnter={() => setActiveDropdown(link.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    to={link.path}
                    className={cn(
                      "flex items-center gap-1 text-[11px] lg:text-[12px] xl:text-sm font-black tracking-wider xl:tracking-widest transition-all hover:text-[#001a40] py-3 lg:py-3.5 xl:py-4 px-2.5 lg:px-3 xl:px-4 rounded-xl uppercase whitespace-nowrap",
                      location.pathname === link.path 
                        ? "text-[#001a40] bg-white/40 shadow-sm" 
                        : "text-[#001a40]/70 hover:bg-white/20"
                    )}
                  >
                    {link.name}
                    {link.subLinks && (
                      <ChevronDown 
                        size={13} 
                        className={cn(
                          "transition-transform duration-300 shrink-0",
                          activeDropdown === link.name ? "rotate-180" : ""
                        )}
                      />
                    )}
                  </Link>

                  {/* Dropdown Menu */}
                  <AnimatePresence>
                    {link.subLinks && activeDropdown === link.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="absolute left-0 top-full pt-2 w-64 z-[60]"
                      >
                        <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden py-3">
                          {link.subLinks.map((sub) => (
                            <Link
                              key={sub.name}
                              to={sub.path}
                              className="block px-6 py-3 text-[13px] font-bold text-gray-700 hover:text-white hover:bg-[#001a40] transition-colors"
                            >
                              {sub.name}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
              <Link
                to="/admissions#process"
                className="bg-[#001a40] hover:bg-[#002a60] text-white px-5 xl:px-8 py-3 xl:py-3.5 rounded-xl font-black text-[11px] lg:text-xs xl:text-sm tracking-wider xl:tracking-widest transition-all shadow-lg active:scale-95 ml-3 xl:ml-6 uppercase whitespace-nowrap"
              >
                APPLY NOW
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-3 text-[#001a40] bg-white/20 rounded-xl transition-colors active:scale-90"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[#b0c4de] border-t border-[#001a40]/10 overflow-hidden"
          >
            <div className="px-4 py-6 space-y-2">
              {NAV_LINKS.map((link) => (
                <div key={link.name} className="flex flex-col">
                  <div className="flex items-center justify-between">
                    <Link
                      to={link.path}
                      className={cn(
                        "flex-1 px-4 py-4 rounded-xl text-sm font-black tracking-widest transition-colors uppercase",
                        location.pathname === link.path
                          ? "bg-[#001a40] text-white shadow-md"
                          : "text-[#001a40] hover:bg-white/30"
                      )}
                      onClick={() => !link.subLinks && setIsOpen(false)}
                    >
                      {link.name}
                    </Link>
                    {link.subLinks && (
                      <button 
                        onClick={() => setMobileExpanded(mobileExpanded === link.name ? null : link.name)}
                        className="p-4 text-[#001a40]"
                      >
                        <ChevronDown 
                          size={20} 
                          className={cn("transition-transform", mobileExpanded === link.name ? "rotate-180" : "")} 
                        />
                      </button>
                    )}
                  </div>
                  
                  {/* Mobile Sublinks */}
                  {link.subLinks && (
                    <AnimatePresence>
                      {mobileExpanded === link.name && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="pl-8 flex flex-col gap-1 mt-1 pb-2 border-l-2 border-[#001a40]/20 ml-6"
                        >
                          {link.subLinks.map((sub) => (
                            <Link
                              key={sub.name}
                              to={sub.path}
                              className="px-4 py-3 text-xs font-bold text-[#001a40]/80 hover:text-[#001a40] transition-colors"
                              onClick={() => setIsOpen(false)}
                            >
                              {sub.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              ))}
              <div className="pt-6">
                <Link
                  to="/admissions#process"
                  className="block w-full text-center bg-[#001a40] text-white px-8 py-5 rounded-2xl font-black tracking-widest transition-all shadow-xl active:scale-95 uppercase"
                  onClick={() => setIsOpen(false)}
                >
                  APPLY NOW
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
