import React from 'react';
import { Link } from 'react-router-dom';

interface HeaderProps {
  onMenuClick?: () => void;
}

const Header: React.FC<HeaderProps> = ({ onMenuClick }) => {
  return (
    <header className="bg-white shadow-lg sticky top-0 z-30 border-b border-purple-100">
      <div className="container mx-auto px-3 sm:px-4 md:px-6 py-3 sm:py-4">
        <div className="flex justify-between items-center">
          {/* Left side: Menu button and Logo - Mobile Optimized */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            {/* Mobile-friendly menu button */}
            <button 
              onClick={onMenuClick}
              className="p-2 rounded-full hover:bg-purple-100 transition-all duration-200 hover:shadow-md touch-manipulation"
              title="Open Menu"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-purple-800 hover:text-purple-900 transition-colors duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>

            {/* Mobile-optimized logo */}
            <Link to="/" className="flex items-center space-x-2 sm:space-x-3 hover:scale-105 transition-transform duration-200 touch-manipulation">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:bg-yellow-300 transition-all duration-200">
                <span className="text-purple-800 font-bold text-sm sm:text-lg">KS</span>
              </div>
              <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-purple-800 hover:text-purple-900 transition-colors duration-200">
                <span className="hidden xs:inline">Kids School</span>
                <span className="xs:hidden">Kids</span>
              </h1>
            </Link>
          </div>
          
          {/* Center: Navigation for large screens - Hidden on mobile */}
          <nav className="hidden lg:flex">
            <div className="bg-purple-50 rounded-full px-4 xl:px-6 py-2 xl:py-3 flex space-x-4 xl:space-x-6 border border-purple-200 hover:shadow-lg hover:border-purple-300 transition-all duration-200">
              <Link 
                to="/" 
                className="text-purple-800 hover:text-purple-900 font-medium transition-all duration-200 relative group px-3 py-2 rounded-full hover:bg-yellow-100 hover:shadow-md text-sm xl:text-base"
              >
                Home
                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-yellow-400 group-hover:w-full transition-all duration-200"></span>
              </Link>
              <Link 
                to="/about" 
                className="text-purple-800 hover:text-purple-900 font-medium transition-all duration-200 relative group px-3 py-2 rounded-full hover:bg-yellow-100 hover:shadow-md text-sm xl:text-base"
              >
                About Us
                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-yellow-400 group-hover:w-full transition-all duration-200"></span>
              </Link>
              <Link 
                to="/programs" 
                className="text-purple-800 hover:text-purple-900 font-medium transition-all duration-200 relative group px-3 py-2 rounded-full hover:bg-yellow-100 hover:shadow-md text-sm xl:text-base"
              >
                Programmes
                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-yellow-400 group-hover:w-full transition-all duration-200"></span>
              </Link>
              <Link 
                to="/admission" 
                className="text-purple-800 hover:text-purple-900 font-medium transition-all duration-200 relative group px-3 py-2 rounded-full hover:bg-yellow-100 hover:shadow-md text-sm xl:text-base"
              >
                Admissions
                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-yellow-400 group-hover:w-full transition-all duration-200"></span>
              </Link>
              <Link 
                to="/contact" 
                className="text-purple-800 hover:text-purple-900 font-medium transition-all duration-200 relative group px-3 py-2 rounded-full hover:bg-yellow-100 hover:shadow-md text-sm xl:text-base"
              >
                Locate Us
                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-yellow-400 group-hover:w-full transition-all duration-200"></span>
              </Link>
            </div>
          </nav>

          {/* Right side: Mobile-optimized CTA button */}
          <div className="flex items-center">
            <Link
              to="/admission"
              className="bg-yellow-400 text-purple-800 px-3 sm:px-4 md:px-6 py-2 rounded-full font-bold hover:bg-yellow-300 hover:shadow-xl transition-all duration-200 text-xs sm:text-sm md:text-base touch-manipulation transform hover:scale-105 active:scale-95 min-h-[44px] flex items-center justify-center"
            >
              <span className="hidden sm:inline">Enroll Now</span>
              <span className="sm:hidden">Apply</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
