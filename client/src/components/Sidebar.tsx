import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const location = useLocation();
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const mainNavItems = [
    { 
      path: '/', 
      label: 'Home', 
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m3 12 2-2m0 0 7-7 7 7M5 10v10a1 1 0 0 0 1 1h3m0 0v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4m0 0h3a1 1 0 0 0 1-1V10" />
        </svg>
      )
    },
    { 
      path: '#', 
      label: 'About', 
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    { 
      path: '#', 
      label: 'Contact', 
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      )
    },
    { 
      path: '#', 
      label: 'Admission', 
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    },
    { 
      path: '#', 
      label: 'Admin', 
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
        </svg>
      )
    },
  ];

  const quickLinks = [
    { 
      path: '#about', 
      label: 'About School', 
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ), 
      scroll: true 
    },
    { 
      path: '#facilities', 
      label: 'Facilities', 
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ), 
      scroll: true 
    },
    { 
      path: '#programs', 
      label: 'Programs', 
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ), 
      scroll: true 
    },
    { 
      path: '#testimonials', 
      label: 'Testimonials', 
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ), 
      scroll: true 
    },
    { 
      path: '#contact', 
      label: 'Contact', 
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ), 
      scroll: true 
    },
  ];

  const schoolInfo = [
    { label: 'Grades', value: 'Pre-K to Grade 5' },
    { label: 'Students', value: '500+' },
    { label: 'Teachers', value: '50+' },
    { label: 'Established', value: '2009' },
  ];

  const handleLinkClick = (path: string, scroll?: boolean) => {
    if (scroll) {
      const element = document.querySelector(path);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    onClose();
  };

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-80 bg-white shadow-xl z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="p-6 border-b border-gray-200 bg-gradient-to-r from-teal-50 to-blue-50">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-teal-600 rounded-lg flex items-center justify-center text-white font-bold mr-3">
                  K
                </div>
                <div>
                  <h2 className="text-lg font-bold text-gray-800">Kids School</h2>
                  <p className="text-sm text-gray-600">Excellence in Education</p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
              >
                <span className="text-xl">✕</span>
              </button>
            </div>
          </div>

          {/* Sidebar Content */}
          <div className="flex-1 overflow-y-auto p-6">
            {/* Main Navigation */}
            <div className="mb-8">
              <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
                Navigation
              </h3>
              <nav className="space-y-2">
                {mainNavItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => handleLinkClick(item.path)}
                    className={`flex items-center p-3 rounded-lg transition-all duration-200 hover:bg-teal-50 hover:text-teal-700 group ${
                      location.pathname === item.path
                        ? 'bg-teal-100 text-teal-700 border-l-4 border-teal-600'
                        : 'text-gray-700 hover:translate-x-1'
                    }`}
                  >
                    <span className="text-lg mr-3 group-hover:scale-110 transition-transform duration-200">
                      {item.icon}
                    </span>
                    <span className="font-medium">{item.label}</span>
                  </Link>
                ))}
              </nav>
            </div>

            {/* Quick Links */}
            <div className="mb-8">
              <button
                onClick={() => toggleSection('quickLinks')}
                className="flex items-center justify-between w-full text-left"
              >
                <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
                  Quick Links
                </h3>
                <span className={`transform transition-transform duration-200 ${
                  expandedSection === 'quickLinks' ? 'rotate-180' : ''
                }`}>
                  ▼
                </span>
              </button>
              <div className={`space-y-2 transition-all duration-300 overflow-hidden ${
                expandedSection === 'quickLinks' ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}>
                {quickLinks.map((item) => (
                  <button
                    key={item.path}
                    onClick={() => handleLinkClick(item.path, item.scroll)}
                    className="flex items-center p-3 rounded-lg w-full text-left transition-all duration-200 hover:bg-gray-50 hover:text-teal-700 text-gray-600 hover:translate-x-1 group"
                  >
                    <span className="text-base mr-3 group-hover:scale-110 transition-transform duration-200">
                      {item.icon}
                    </span>
                    <span className="font-medium">{item.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* School Information */}
            <div className="mb-8">
              <button
                onClick={() => toggleSection('schoolInfo')}
                className="flex items-center justify-between w-full text-left"
              >
                <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
                  School Info
                </h3>
                <span className={`transform transition-transform duration-200 ${
                  expandedSection === 'schoolInfo' ? 'rotate-180' : ''
                }`}>
                  ▼
                </span>
              </button>
              <div className={`transition-all duration-300 overflow-hidden ${
                expandedSection === 'schoolInfo' ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <div className="bg-gradient-to-br from-teal-50 to-blue-50 rounded-lg p-4 space-y-3">
                  {schoolInfo.map((info, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <span className="text-gray-600 font-medium">{info.label}:</span>
                      <span className="text-teal-700 font-semibold">{info.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="text-sm font-semibold text-gray-700 mb-3">Contact Us</h3>
              <div className="space-y-2 text-sm">
                <div className="flex items-center text-gray-600">
                  <span className="mr-2">📍</span>
                  <span>123 Education Street, Learning City</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <span className="mr-2">📞</span>
                  <span>(555) 123-4567</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <span className="mr-2">✉️</span>
                  <span>info@kidsschool.edu</span>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="p-6 border-t border-gray-200 bg-gray-50">
            <div className="text-center">
              <Link
                to="/admission"
                onClick={() => handleLinkClick('/admission')}
                className="w-full bg-teal-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-teal-700 transition-colors duration-300 inline-block transform hover:scale-105"
              >
                Apply Now
              </Link>
              <p className="text-xs text-gray-500 mt-3">
                © 2024 Kids School. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
