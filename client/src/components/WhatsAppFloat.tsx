import React, { useState } from 'react';

const WhatsAppFloat: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [showTooltip, setShowTooltip] = useState(false);

  // WhatsApp number - replace with actual school number
  const whatsappNumber = "+916512345678"; // Replace with actual number
  const message = "Hello! I'm interested in learning more about Kids School. Could you please provide me with information about admissions and programs?";

  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <>
      {/* WhatsApp Floating Button */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end space-y-3">
        {/* Tooltip */}
        {showTooltip && (
          <div className="bg-white text-gray-800 px-4 py-2 rounded-lg shadow-lg border border-gray-200 text-sm font-medium whitespace-nowrap animate-fade-in">
            Chat with us on WhatsApp!
            <div className="absolute bottom-0 right-4 transform translate-y-1/2 rotate-45 w-2 h-2 bg-white border-r border-b border-gray-200"></div>
          </div>
        )}

        {/* Main WhatsApp Button */}
        <div className="relative group">
          <button
            onClick={handleWhatsAppClick}
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
            className="w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center transform hover:scale-110 group"
            aria-label="Chat on WhatsApp"
          >
            {/* WhatsApp Icon */}
            <svg 
              className="w-8 h-8 text-white" 
              fill="currentColor" 
              viewBox="0 0 24 24"
            >
              <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 2.079.549 4.03 1.506 5.709L0 24l6.428-1.686A11.944 11.944 0 0012.017 24C18.637 24 24 18.633 24 11.987S18.637 0 12.017 0zm5.97 16.923c-.244.682-1.431 1.256-1.97 1.342-.54.086-1.236.162-3.591-.766-2.846-1.127-4.693-4.011-4.836-4.195-.144-.184-1.175-1.55-1.175-2.955s.741-2.09 1.006-2.378c.265-.288.578-.36.771-.36.193 0 .386.001.555.01.178.009.417-.067.653.498.244.582.83 2.001.902 2.147.072.146.12.317.024.51-.096.193-.144.313-.289.481-.144.168-.303.375-.433.505-.144.144-.294.3-.126.588.168.289.748 1.225 1.605 1.982 1.102.974 2.032 1.276 2.32 1.421.289.144.458.12.626-.072.168-.193.722-.842.914-1.131.193-.289.386-.24.65-.144.265.096 1.686.793 1.975.938.289.144.482.217.554.337.072.12.072.698-.172 1.38z"/>
            </svg>

            {/* Pulsing animation ring */}
            <div className="absolute inset-0 rounded-full bg-green-400 opacity-30 animate-ping group-hover:animate-none"></div>
          </button>

          {/* Close button (X) */}
          <button
            onClick={handleClose}
            className="absolute -top-2 -right-2 w-6 h-6 bg-gray-600 hover:bg-gray-700 rounded-full text-white text-xs flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200"
            aria-label="Close WhatsApp widget"
          >
            ✕
          </button>
        </div>

        {/* Small indicator dot */}
        <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
      </div>

      {/* Custom CSS for animations */}
      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
      `}</style>
    </>
  );
};

export default WhatsAppFloat;
