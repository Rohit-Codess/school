import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-gradient-to-br from-purple-600 via-purple-700 to-indigo-800 text-white relative overflow-hidden">
      {/* Floating decorative elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-yellow-400/20 rounded-full blur-sm animate-pulse"></div>
      <div className="absolute top-20 right-20 w-16 h-16 bg-pink-400/20 rounded-full blur-sm animate-pulse delay-500"></div>
      <div className="absolute bottom-20 left-1/3 w-12 h-12 bg-orange-400/20 rounded-full blur-sm animate-pulse delay-1000"></div>
      
      <div className="container mx-auto px-6 py-12 relative z-10">
        <div className="grid md:grid-cols-4 gap-8">
          {/* School Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-purple-800 font-bold text-xl">KS</span>
              </div>
              <h3 className="text-2xl font-bold">Kids School</h3>
            </div>
            <p className="text-white/90 mb-6 max-w-md leading-relaxed">
              Providing quality education in a nurturing environment where every child can grow, learn, and succeed 
              with joy and creativity.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-white/90">
                <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                  <span className="text-purple-800 text-sm">📍</span>
                </div>
                <p>Near Ranchi University, Ranchi, Jharkhand</p>
              </div>
              <div className="flex items-center gap-3 text-white/90">
                <div className="w-8 h-8 bg-pink-400 rounded-full flex items-center justify-center">
                  <span className="text-purple-800 text-sm">📞</span>
                </div>
                <p>(555) 123-KIDS</p>
              </div>
              <div className="flex items-center gap-3 text-white/90">
                <div className="w-8 h-8 bg-orange-400 rounded-full flex items-center justify-center">
                  <span className="text-purple-800 text-sm">✉️</span>
                </div>
                <p>info@kidsschool.edu</p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-yellow-400">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-white/90 hover:text-yellow-400 transition-colors duration-300 flex items-center gap-2 group">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  Home
                </Link>
              </li>
              <li>
                <Link to="#" className="text-white/90 hover:text-yellow-400 transition-colors duration-300 flex items-center gap-2 group">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  About Us
                </Link>
              </li>
              <li>
                <Link to="#" className="text-white/90 hover:text-yellow-400 transition-colors duration-300 flex items-center gap-2 group">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  Contact
                </Link>
              </li>
              <li>
                <Link to="#" className="text-white/90 hover:text-yellow-400 transition-colors duration-300 flex items-center gap-2 group">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  Admission
                </Link>
              </li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-yellow-400">Programs</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-white/90">
                <div className="w-6 h-6 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">🌱</span>
                </div>
                Nursery
              </li>
              <li className="flex items-center gap-3 text-white/90">
                <div className="w-6 h-6 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center">
                  <span className="text-purple-800 text-xs">🎨</span>
                </div>
                Kindergarten
              </li>
              <li className="flex items-center gap-3 text-white/90">
                <div className="w-6 h-6 bg-gradient-to-r from-blue-400 to-teal-400 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">📚</span>
                </div>
                Elementary
              </li>
              <li className="flex items-center gap-3 text-white/90">
                <div className="w-6 h-6 bg-gradient-to-r from-green-400 to-blue-400 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">⭐</span>
                </div>
                After School Care
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media & Newsletter */}
        <div className="mt-12 pt-8 border-t border-white/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <h5 className="text-yellow-400 font-bold mb-3">Follow Us</h5>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-lg">
                  <span className="text-white text-lg">📘</span>
                </a>
                <a href="#" className="w-10 h-10 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-lg">
                  <span className="text-white text-lg">📷</span>
                </a>
                <a href="#" className="w-10 h-10 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-lg">
                  <span className="text-white text-lg">🐦</span>
                </a>
                <a href="#" className="w-10 h-10 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-lg">
                  <span className="text-white text-lg">💬</span>
                </a>
              </div>
            </div>
            
            <div className="text-center md:text-right">
              <h5 className="text-yellow-400 font-bold mb-3">Stay Updated</h5>
              <div className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="px-4 py-2 rounded-full text-purple-800 placeholder-purple-400 bg-white/90 focus:bg-white focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all duration-300"
                />
                <button className="px-6 py-2 bg-gradient-to-r from-yellow-400 to-orange-400 text-purple-800 font-bold rounded-full hover:from-yellow-500 hover:to-orange-500 transition-all duration-300 shadow-lg hover:shadow-xl">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-6 text-center">
          <p className="text-white/80">
            &copy; 2025 Kids School. All rights reserved. Made with ❤️ for children's bright future.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
