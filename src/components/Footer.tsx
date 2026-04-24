import { Link, useNavigate } from 'react-router-dom';
import { GraduationCap, MapPin, Phone, Mail } from 'lucide-react';

export function Footer() {
  const navigate = useNavigate();

  return (
    <footer className="bg-primary text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-12 text-center">
          <div className="col-span-1 sm:col-span-2 md:col-span-1 flex flex-col items-center">
            <div 
              className="flex items-center justify-center gap-3 mb-4 cursor-pointer select-none"
              onDoubleClick={() => navigate('/admin')}
              title="Double click for Admin Access"
            >
              <img 
                src="/logo.png" 
                alt="Valley College Logo" 
                className="h-12 w-auto object-contain bg-white rounded-lg p-1"
              />
              <span className="font-bold text-xl tracking-tight pointer-events-none">
                Valley College
              </span>
            </div>
            <p className="text-blue-200 text-sm leading-relaxed px-4">
              Excellence, Discipline, and Integrity. We are deeply committed to empowering the next generation of leaders through holistic, quality education.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <h4 className="text-lg font-bold text-white flex items-center justify-center mb-4">Quick Links</h4>
            <ul className="space-y-3 text-sm text-blue-200">
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/academics" className="hover:text-white transition-colors">Academics</Link></li>
              <li><Link to="/admissions" className="hover:text-white transition-colors">Admissions</Link></li>
              <li><Link to="/alumni" className="hover:text-white transition-colors">Alumni Network</Link></li>
            </ul>
          </div>

          <div className="flex flex-col items-center">
            <h4 className="text-lg font-bold text-white flex items-center justify-center mb-4">Contact Us</h4>
            <ul className="space-y-4 text-sm text-blue-200">
              <li className="flex items-start justify-center gap-3">
                <MapPin size={18} className="shrink-0 mt-0.5" />
                <span>Bushenyi District, Uganda</span>
              </li>
              <li className="flex items-center justify-center gap-3">
                <Phone size={18} className="shrink-0" />
                <span className="whitespace-nowrap">+256 782 679 985 | +256 701 679 985</span>
              </li>
              <li className="flex items-center justify-center gap-3">
                <Phone size={18} className="shrink-0" />
                <span>+256 772 646 421</span>
              </li>
              <li className="flex items-center justify-center gap-3">
                <Mail size={18} className="shrink-0" />
                <span>info@valleycollege.edu.ug</span>
              </li>
            </ul>
          </div>

          <div className="flex flex-col items-center">
            <h4 className="text-lg font-bold text-white flex items-center justify-center mb-4">Admissions</h4>
            <p className="text-blue-200 text-sm mb-4">
              We are currently accepting applications for the upcoming academic year.
            </p>
            <a
              href="https://forms.gle/9zy69WUU5eYKBYcn6"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-primary hover:bg-gray-100 px-6 py-2 rounded-md font-semibold transition-colors text-sm w-fit"
            >
              Apply Today
            </a>
          </div>
        </div>

        <div className="border-t border-blue-800 pt-8 flex flex-col items-center justify-center gap-4 text-sm text-blue-300 text-center">
          <p>&copy; {new Date().getFullYear()} Valley College. All rights reserved.</p>
          <div className="flex justify-center gap-6">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
