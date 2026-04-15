import { Link, useLocation } from 'react-router-dom';
import { GraduationCap, Menu, X, Mail, Phone, MapPin } from 'lucide-react';
import { useState } from 'react';
import { cn } from '../lib/utils';

const NAV_LINKS = [
  { name: 'HOME', path: '/' },
  { name: 'ABOUT', path: '/about' },
  { name: 'ACADEMICS', path: '/academics' },
  { name: 'ADMISSIONS', path: '/admissions' },
  { name: 'ALUMNI', path: '/alumni' },
  { name: 'CONTACT', path: '/contact' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 w-full shadow-sm">
      {/* Top Banner */}
      <div className="bg-[#001a40] text-white py-4 px-4 sm:px-6 lg:px-8 border-b border-white/10 overflow-hidden">
        <div className="max-w-7xl mx-auto flex justify-center items-center">
          <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-2 text-[10px] md:text-xs font-bold tracking-wider">
            <a href="mailto:info@valleycollege.sc.ug" className="flex items-center gap-1.5 hover:text-blue-200 transition-colors whitespace-nowrap">
              <Mail size={13} className="text-blue-300" />
              info@valleycollege.sc.ug
            </a>
            <span className="flex items-center gap-1.5 whitespace-nowrap">
              <MapPin size={13} className="text-blue-300" />
              Plot 131, Block 2, Nyaruzinga Road, Bushenyi
            </span>
            <div className="flex items-center gap-1.5 whitespace-nowrap">
              <Phone size={13} className="text-blue-300" />
              <span className="opacity-80">Headteacher:</span>
              <a href="tel:+256703069869" className="hover:text-blue-200 transition-colors">+256 703069869</a>
              <span className="opacity-50">/</span>
              <a href="tel:+256772006426" className="hover:text-blue-200 transition-colors">+256 772006426</a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="bg-[#b0c4de] w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-24">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-4 group">
              <img 
                src="/logo.png" 
                alt="Valley College Logo" 
                className="h-20 w-auto object-contain group-hover:scale-105 transition-transform"
              />
              <div className="flex flex-col">
                <span className="font-bold text-xl md:text-2xl text-[#001a40] leading-tight tracking-wide">
                  VALLEY COLLEGE
                </span>
                <span className="font-bold text-lg md:text-xl text-[#001a40] leading-tight tracking-wide">
                  SECONDARY SCHOOL
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-4 lg:gap-6">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={cn(
                    "text-xs lg:text-sm font-bold tracking-widest transition-all hover:text-[#001a40] py-2 px-1 border-b-2",
                    location.pathname === link.path 
                      ? "text-[#001a40] border-[#001a40]" 
                      : "text-[#001a40]/70 border-transparent hover:border-[#001a40]/30"
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/admissions"
                className="bg-[#001a40] hover:bg-[#002a60] text-white px-5 py-2.5 rounded font-bold text-xs tracking-widest transition-all shadow-md active:scale-95 ml-2"
              >
                APPLY NOW
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-[#001a40] hover:bg-white/20 rounded-lg transition-colors"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-[#b0c4de] border-t border-[#001a40]/10">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={cn(
                  "block px-3 py-3 rounded-md text-base font-bold transition-colors",
                  location.pathname === link.path
                    ? "bg-[#001a40] text-white"
                    : "text-[#001a40] hover:bg-white/20"
                )}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 px-3">
              <Link
                to="/admissions"
                className="block w-full text-center bg-[#001a40] hover:bg-[#002a60] text-white px-6 py-3 rounded-md font-bold transition-all shadow-md"
                onClick={() => setIsOpen(false)}
              >
                APPLY NOW
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
