import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const MobileFloatingActions: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const actions = [
    {
      icon: '📞',
      label: 'Call Us',
      href: 'tel:+91-98765-43210',
      bg: 'bg-green-500',
      text: 'text-white'
    },
    {
      icon: '💬',
      label: 'WhatsApp',
      href: 'https://wa.me/919876543210?text=Hi, I want to know more about Kids School admission',
      bg: 'bg-green-600',
      text: 'text-white'
    },
    {
      icon: '🎓',
      label: 'Apply',
      href: '/admission',
      bg: 'bg-purple-800',
      text: 'text-white',
      isLink: true
    },
    {
      icon: '📍',
      label: 'Visit',
      href: '/contact',
      bg: 'bg-yellow-400',
      text: 'text-purple-800',
      isLink: true
    }
  ];

  return (
    <>
      {/* Mobile FAB - Only visible on mobile */}
      <div className="fixed bottom-4 right-4 z-50 md:hidden">
        {/* Action buttons */}
        <div className={`flex flex-col items-end space-y-3 mb-3 transition-all duration-300 ${
          isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
        }`}>
          {actions.map((action, index) => (
            <div key={index} className="flex items-center space-x-2">
              <div className="bg-white px-3 py-2 rounded-lg shadow-lg border border-gray-200">
                <span className="text-sm font-medium text-gray-700">{action.label}</span>
              </div>
              {action.isLink ? (
                <Link
                  to={action.href}
                  className={`${action.bg} ${action.text} w-12 h-12 rounded-full flex items-center justify-center text-lg shadow-lg hover:shadow-xl transition-all duration-300 touch-manipulation`}
                  onClick={() => setIsOpen(false)}
                >
                  {action.icon}
                </Link>
              ) : (
                <a
                  href={action.href}
                  className={`${action.bg} ${action.text} w-12 h-12 rounded-full flex items-center justify-center text-lg shadow-lg hover:shadow-xl transition-all duration-300 touch-manipulation`}
                  onClick={() => setIsOpen(false)}
                >
                  {action.icon}
                </a>
              )}
            </div>
          ))}
        </div>

        {/* Main FAB button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`w-14 h-14 rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300 touch-manipulation ${
            isOpen 
              ? 'bg-red-500 rotate-45' 
              : 'bg-gradient-to-r from-purple-700 to-purple-800 hover:from-purple-800 hover:to-purple-900'
          }`}
        >
          {isOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          )}
        </button>
      </div>

      {/* Desktop Quick Actions - Hidden on mobile */}
      <div className="hidden md:flex fixed bottom-6 right-6 z-50 space-x-3">
        <a
          href="https://wa.me/919876543210?text=Hi, I want to know more about Kids School admission"
          className="bg-green-600 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
          title="WhatsApp Us"
        >
          💬
        </a>
        <Link
          to="/admission"
          className="bg-purple-800 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
          title="Apply Now"
        >
          🎓
        </Link>
      </div>

      {/* Mobile-specific sticky bottom bar for key actions */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-3 z-40 md:hidden shadow-lg">
        <div className="flex space-x-2">
          <a
            href="tel:+91-98765-43210"
            className="flex-1 bg-green-500 text-white py-3 px-4 rounded-lg text-center font-bold text-sm touch-manipulation active:bg-green-600 transition-colors duration-200"
          >
            📞 Call Now
          </a>
          <a
            href="https://wa.me/919876543210?text=Hi, I want to know more about Kids School admission"
            className="flex-1 bg-green-600 text-white py-3 px-4 rounded-lg text-center font-bold text-sm touch-manipulation active:bg-green-700 transition-colors duration-200"
          >
            💬 WhatsApp
          </a>
          <Link
            to="/admission"
            className="flex-1 bg-purple-800 text-white py-3 px-4 rounded-lg text-center font-bold text-sm touch-manipulation active:bg-purple-900 transition-colors duration-200"
          >
            🎓 Apply
          </Link>
        </div>
      </div>

      {/* Spacer for mobile bottom bar */}
      <div className="h-20 md:hidden"></div>
    </>
  );
};

export default MobileFloatingActions;