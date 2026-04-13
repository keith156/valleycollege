import { Link, useNavigate } from 'react-router-dom';
import { GraduationCap, MapPin, Phone, Mail } from 'lucide-react';

export function Footer() {
  const navigate = useNavigate();

  return (
    <footer className="bg-primary text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <div 
              className="flex items-center gap-2 mb-6 cursor-pointer select-none"
              onDoubleClick={() => navigate('/admin')}
              title="Double click for Admin Access"
            >
              <div className="bg-white text-primary p-2 rounded-lg pointer-events-none">
                <GraduationCap size={24} />
              </div>
              <span className="font-bold text-xl tracking-tight pointer-events-none">
                Valley College
              </span>
            </div>
            <p className="text-blue-200 text-sm leading-relaxed">
              Excellence, Discipline, and Integrity. Empowering the next generation of leaders through quality education.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3 text-sm text-blue-200">
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/academics" className="hover:text-white transition-colors">Academics</Link></li>
              <li><Link to="/admissions" className="hover:text-white transition-colors">Admissions</Link></li>
              <li><Link to="/alumni" className="hover:text-white transition-colors">Alumni Network</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Contact Us</h4>
            <ul className="space-y-4 text-sm text-blue-200">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="shrink-0 mt-0.5" />
                <span>Bushenyi District, Uganda</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="shrink-0" />
                <span>+256 (0) 123 456 789</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="shrink-0" />
                <span>info@valleycollege.edu.ug</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Admissions</h4>
            <p className="text-blue-200 text-sm mb-4">
              We are currently accepting applications for the upcoming academic year.
            </p>
            <Link
              to="/admissions"
              className="inline-block bg-white text-primary hover:bg-gray-100 px-6 py-2 rounded-md font-semibold transition-colors text-sm"
            >
              Apply Today
            </Link>
          </div>
        </div>

        <div className="border-t border-blue-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-blue-300">
          <p>&copy; {new Date().getFullYear()} Valley College. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
