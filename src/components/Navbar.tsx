import { Link, useLocation } from 'react-router-dom';
import { GraduationCap, Menu, X } from 'lucide-react';
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
    <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="bg-primary text-white p-2 rounded-lg">
              <GraduationCap size={28} />
            </div>
            <span className="font-bold text-2xl text-primary tracking-tight">
              Valley College
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={cn(
                  "text-sm font-semibold tracking-wide transition-colors hover:text-primary",
                  location.pathname === link.path ? "text-primary" : "text-gray-600"
                )}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/admissions"
              className="bg-primary hover:bg-primary-hover text-white px-6 py-2.5 rounded-md font-semibold transition-colors shadow-md"
            >
              APPLY NOW
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-600 hover:text-primary"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={cn(
                  "block px-3 py-3 rounded-md text-base font-semibold",
                  location.pathname === link.path
                    ? "bg-blue-50 text-primary"
                    : "text-gray-600 hover:bg-gray-50 hover:text-primary"
                )}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 px-3">
              <Link
                to="/admissions"
                className="block w-full text-center bg-primary hover:bg-primary-hover text-white px-6 py-3 rounded-md font-semibold transition-colors shadow-sm"
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
