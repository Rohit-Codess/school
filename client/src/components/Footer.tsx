import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-gray-800 text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* School Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-teal-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">K</span>
              </div>
              <h3 className="text-2xl font-bold">Kids School</h3>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Providing quality education in a nurturing environment where every child can grow, learn, and succeed.
            </p>
            <div className="space-y-2 text-gray-300">
              <p>📍 123 Learning Street, Education City</p>
              <p>📞 (555) 123-KIDS</p>
              <p>✉️ info@kidsschool.edu</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-teal-400">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-teal-400 transition-colors duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/admission" className="text-gray-300 hover:text-teal-400 transition-colors duration-300">
                  Admission
                </Link>
              </li>
              <li>
                <Link to="/admin" className="text-gray-300 hover:text-teal-400 transition-colors duration-300">
                  Admin Panel
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-teal-400">Programs</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Nursery</li>
              <li>Kindergarten</li>
              <li>Elementary</li>
              <li>After School Care</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-gray-300">
            &copy; 2025 Kids School. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
