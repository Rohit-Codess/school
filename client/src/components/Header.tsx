import React from 'react';
import { Link } from 'react-router-dom';

interface HeaderProps {
  onMenuClick?: () => void;
}

const Header: React.FC<HeaderProps> = ({ onMenuClick }) => {
  return (
    <header className="bg-gradient-to-r from-purple-600 via-purple-700 to-pink-600 shadow-lg sticky top-0 z-30">
      <div className="container mx-auto px-4 md:px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Left side: Menu button and Logo */}
          <div className="flex items-center space-x-3">
            {/* Menu button for sidebar - visible on all screen sizes */}
            <button 
              onClick={onMenuClick}
              className="p-2 rounded-full hover:bg-white/10 transition-colors duration-200"
              title="Open Menu"
            >
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>

            <Link to="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-purple-800 font-bold text-lg">KS</span>
              </div>
              <h1 className="text-xl md:text-2xl font-bold text-white">Kids School</h1>
            </Link>
          </div>
          
          {/* Center: Navigation for large screens - Pill shaped */}
          <nav className="hidden lg:flex">
            <div className="bg-purple-800/50 backdrop-blur-sm rounded-full px-6 py-3 flex space-x-6">
              <Link 
                to="/" 
                className="text-white hover:text-yellow-400 font-medium transition-colors duration-300 relative group px-4 py-2 rounded-full hover:bg-yellow-400/20"
              >
                Home
              </Link>
              <Link 
                to="#" 
                className="text-white hover:text-yellow-400 font-medium transition-colors duration-300 relative group px-4 py-2 rounded-full hover:bg-yellow-400/20"
              >
                About Us
              </Link>
              <Link 
                to="#" 
                className="text-white hover:text-yellow-400 font-medium transition-colors duration-300 relative group px-4 py-2 rounded-full hover:bg-yellow-400/20"
              >
                Programmes
              </Link>
              <Link 
                to="#" 
                className="text-white hover:text-yellow-400 font-medium transition-colors duration-300 relative group px-4 py-2 rounded-full hover:bg-yellow-400/20"
              >
                Admissions
              </Link>
              <Link 
                to="#" 
                className="text-white hover:text-yellow-400 font-medium transition-colors duration-300 relative group px-4 py-2 rounded-full hover:bg-yellow-400/20"
              >
                Locate Us
              </Link>
            </div>
          </nav>

          {/* Right side: Apply Now button */}
          <div className="flex items-center">
            <Link
              to="#"
              className="bg-yellow-400 text-purple-800 px-4 md:px-6 py-2 rounded-full font-bold hover:bg-yellow-300 hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-sm md:text-base"
            >
              Enroll Now
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
