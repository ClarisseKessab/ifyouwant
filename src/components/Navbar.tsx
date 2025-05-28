import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <nav className="fixed w-full top-0 z-50 bg-white/95 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 font-bold text-xl">
            <span className="text-purple-700">IF</span> <span className="text-amber-500">YOU</span> <span className="text-purple-700">WANT</span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <Link to="/" className="text-gray-800 hover:text-purple-700 transition-colors px-3 py-2 rounded-md text-sm font-medium">
                Home
              </Link>
              <Link to="/services" className="text-gray-800 hover:text-purple-700 transition-colors px-3 py-2 rounded-md text-sm font-medium">
                Services
              </Link>
              <Link to="/about" className="text-gray-800 hover:text-purple-700 transition-colors px-3 py-2 rounded-md text-sm font-medium">
                About Us
              </Link>
              <a 
                href="#contact" 
                className="text-white bg-purple-700 hover:bg-purple-800 transition-colors px-4 py-2 rounded-md text-sm font-medium"
              >
                Contact
              </a>
            </div>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-800 hover:text-purple-700 transition-colors"
              aria-label="Toggle menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" 
              className="text-gray-800 hover:text-purple-700 block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link to="/services"
              className="text-gray-800 hover:text-purple-700 block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link to="/about"
              className="text-gray-800 hover:text-purple-700 block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
            <a 
              href="#contact"
              className="text-white bg-purple-700 block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;