import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Sidebar from '../components/Sidebar';
import WhatsAppFloat from '../components/WhatsAppFloat';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header onMenuClick={toggleSidebar} />
      
      <div className="flex flex-1 relative">
        {/* Sidebar - only shows when menu is clicked */}
        <Sidebar isOpen={sidebarOpen} onClose={closeSidebar} />
        
        {/* Main Content */}
        <main className="flex-1 w-full">
          {children}
        </main>
      </div>
      
      <Footer />
      
      {/* WhatsApp Floating Button - visible on all pages */}
      <WhatsAppFloat />
    </div>
  );
};

export default Layout;
