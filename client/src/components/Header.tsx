import React from 'react';
import { Link } from 'react-router-dom';

interface HeaderProps {
  onMenuClick?: () => void;
}

const Header: React.FC<HeaderProps> = ({ onMenuClick }) => {
  return (
    <header className="bg-white shadow-lg border-b border-gray-200 sticky top-0 z-30">
      <div className="container mx-auto px-4 md:px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Left side: Menu button and Logo */}
          <div className="flex items-center space-x-3">
            {/* Menu button for sidebar - visible on all screen sizes */}
            <button 
              onClick={onMenuClick}
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
              title="Open Menu"
            >
              <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>

            <Link to="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-teal-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">K</span>
              </div>
              <h1 className="text-xl md:text-2xl font-bold text-teal-600">Kids School</h1>
            </Link>
          </div>
          
          {/* Center: Navigation for large screens */}
          <nav className="hidden lg:flex space-x-8">
            <Link 
              to="/" 
              className="text-gray-700 hover:text-teal-600 font-medium transition-colors duration-300 relative group"
            >
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-teal-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link 
              to="/admission" 
              className="text-gray-700 hover:text-teal-600 font-medium transition-colors duration-300 relative group"
            >
              Admission
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-teal-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link 
              to="/admin" 
              className="text-gray-700 hover:text-teal-600 font-medium transition-colors duration-300 relative group"
            >
              Admin
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-teal-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </nav>

          {/* Right side: Apply Now button */}
          <div className="flex items-center">
            <Link
              to="/admission"
              className="bg-teal-600 text-white px-4 md:px-6 py-2 rounded-lg font-medium hover:bg-teal-700 transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg text-sm md:text-base"
            >
              Apply Now
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
