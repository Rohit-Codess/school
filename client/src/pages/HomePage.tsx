import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  
  const heroImages = [
    {
      src: "/images/Home/hero/1.jpeg",
      alt: "Modern Classroom Environment",
      title: "Modern Learning"
    },
    {
      src: "/images/Home/hero/2.jpeg",
      alt: "Teacher and Students Interaction", 
      title: "Expert Teachers"
    },
    {
      src: "/images/Home/hero/3.jpeg",
      alt: "Children Playing and Learning",
      title: "Happy Learning"
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 4000); // Change image every 4 seconds
    return () => clearInterval(interval);
  }, [heroImages.length]);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const categories = [
    { 
      image: "/images/Home/category/1.jpg", 
      title: "Academic Excellence", 
      description: "Quality education with modern curriculum and experienced teachers" 
    },
    { 
      image: "/images/Home/category/2.jpg", 
      title: "Creative Arts", 
      description: "Nurturing creativity through arts, crafts, music and dance" 
    },
    { 
      image: "/images/Home/category/3.jpg", 
      title: "Sports & Activities", 
      description: "Physical development through sports and outdoor activities" 
    },
    { 
      image: "/images/Home/category/4.jpg", 
      title: "Science Labs", 
      description: "Hands-on learning with modern equipment and interactive experiments" 
    },
    { 
      image: "/images/Home/category/5.jpg", 
      title: "Technology", 
      description: "Digital literacy and computer skills for the future generation" 
    },
    { 
      image: "/images/Home/category/6.jpg", 
      title: "Environmental Care", 
      description: "Teaching sustainability, nature care and environmental awareness" 
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-purple-700 to-pink-600 overflow-x-hidden">
      {/* Hero Section - Colorful Design */}
      <section className="relative py-8 sm:py-12 md:py-16 lg:py-24 bg-gradient-to-br from-purple-600 via-purple-700 to-pink-600 overflow-hidden">
        {/* Floating decorative elements */}
        <div className="absolute top-10 sm:top-20 left-5 sm:left-10 w-16 h-16 sm:w-32 sm:h-32 bg-yellow-400 rounded-full opacity-20 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 sm:bottom-20 right-5 sm:right-10 w-20 h-20 sm:w-40 sm:h-40 bg-pink-400 rounded-full opacity-15 blur-3xl animate-bounce"></div>
        
        {/* Geometric shapes */}
        <div className="absolute top-1/4 left-1/4 w-8 h-8 bg-yellow-400 rotate-45 opacity-30 animate-spin"></div>
        <div className="absolute bottom-1/3 left-1/6 w-6 h-6 bg-white rounded-full opacity-40 animate-ping"></div>
        <div className="absolute top-1/3 right-1/4 w-10 h-10 border-4 border-yellow-400 rounded-full opacity-30 animate-pulse"></div>
        
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 sm:gap-12 lg:gap-16">
            {/* Content Section - Left Side */}
            <div className={`lg:w-1/2 text-center lg:text-left transition-all duration-1000 transform ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              {/* Badge */}
              <div className="inline-flex items-center px-3 sm:px-4 py-2 bg-yellow-400 text-purple-800 rounded-full text-xs sm:text-sm font-bold mb-4 sm:mb-6 shadow-lg">
                🎓 Admission Open
              </div>
              
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
                Build a foundation for <br />
                <span className="text-yellow-400 relative">
                  a life time of learning
                  <div className="absolute -bottom-1 sm:-bottom-2 left-0 w-full h-2 sm:h-3 bg-yellow-400 opacity-30 rounded-lg"></div>
                </span>
              </h1>
              
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 mb-6 sm:mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0 px-2 sm:px-0">
                We nurture young minds with innovative teaching methods and create a foundation that lasts a lifetime. 
                Join us in building your child's bright future.
              </p>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start px-4 sm:px-0">
                <Link
                  to="/admission"
                  className="inline-flex items-center justify-center bg-yellow-400 text-purple-800 px-4 sm:px-8 py-2.5 sm:py-4 rounded-full text-sm sm:text-lg font-bold hover:bg-yellow-300 hover:shadow-xl transform hover:scale-105 transition-all duration-300 shadow-lg"
                >
                  Enroll Now →
                </Link>
                <Link
                  to="/about"
                  className="inline-flex items-center justify-center border-2 border-white text-white px-4 sm:px-8 py-2.5 sm:py-4 rounded-full text-sm sm:text-lg font-bold hover:bg-white hover:text-purple-700 transition-all duration-300"
                >
                  Learn More
                </Link>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 sm:gap-8 justify-center lg:justify-start mt-8 sm:mt-12 max-w-md mx-auto lg:max-w-none">
                <div className="text-center lg:text-left">
                  <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-yellow-400">500+</div>
                  <div className="text-xs sm:text-sm text-white/80">Happy Students</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-yellow-400">98%</div>
                  <div className="text-xs sm:text-sm text-white/80">Success Rate</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-yellow-400">20+</div>
                  <div className="text-xs sm:text-sm text-white/80">Years Experience</div>
                </div>
              </div>
            </div>
            
            {/* Image Section - Right Side */}
            <div className={`w-full lg:w-1/2 flex justify-center transition-all duration-1000 transform ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg">
                {/* Live Projects Badge */}
                <div className="absolute top-2 sm:top-4 left-2 sm:left-4 z-20 bg-yellow-400 text-purple-800 px-2 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-bold flex items-center gap-1 sm:gap-2 shadow-lg">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-500 rounded-full animate-pulse"></div>
                  Active Learning
                </div>
                
                {/* Colorful frame container */}
                <div className="relative bg-gradient-to-br from-yellow-400 via-orange-400 to-pink-400 rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden border-4 border-white/20 p-3 sm:p-4">
                  <div className="bg-gradient-to-br from-blue-400 to-teal-400 rounded-xl sm:rounded-2xl overflow-hidden">
                    <div className="aspect-[4/3] relative">
                      {heroImages.map((image, index) => (
                        <div
                          key={index}
                          className={`absolute inset-0 transition-all duration-1000 ${
                            index === currentImage 
                              ? 'opacity-100 scale-100' 
                              : 'opacity-0 scale-105'
                          }`}
                        >
                          <img
                            src={image.src}
                            alt={image.alt}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-purple-600/30 to-transparent"></div>
                          
                          {/* Image Title Overlay */}
                          <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 right-2 sm:right-4">
                            <div className="bg-white/95 backdrop-blur-sm rounded-lg p-2 sm:p-3 shadow-lg">
                              <h3 className="text-sm sm:text-base lg:text-lg font-bold text-purple-800">{image.title}</h3>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    {/* Image Navigation Dots */}
                    <div className="absolute bottom-2 sm:bottom-4 right-2 sm:right-4 flex gap-1.5 sm:gap-2">
                      {heroImages.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentImage(index)}
                          className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                            index === currentImage 
                              ? 'bg-yellow-400 scale-125' 
                              : 'bg-white/60 hover:bg-white/80'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Floating geometric elements */}
                <div className="absolute -top-3 sm:-top-6 -right-3 sm:-right-6 w-12 h-12 sm:w-16 sm:h-16 lg:w-24 lg:h-24 bg-yellow-400 rounded-full opacity-40 animate-bounce"></div>
                <div className="absolute -bottom-2 sm:-bottom-4 -left-2 sm:-left-4 w-8 h-8 sm:w-12 sm:h-12 lg:w-16 lg:h-16 bg-pink-400 rounded-full opacity-30 animate-pulse"></div>
                
                {/* Star decoration */}
                <div className="absolute top-1/4 -left-4 text-yellow-400 text-2xl sm:text-3xl animate-spin">⭐</div>
                
                {/* Rating Badge */}
                <div className="absolute top-4 sm:top-8 -right-4 sm:-right-8 bg-yellow-400 text-purple-800 p-2 sm:p-4 rounded-xl sm:rounded-2xl shadow-lg transform rotate-12">
                  <div className="text-center">
                    <div className="text-lg sm:text-xl lg:text-2xl font-bold">4.9★</div>
                    <div className="text-[10px] sm:text-xs font-bold">Rating</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section id="programs" className="py-8 sm:py-12 md:py-20 bg-gradient-to-br from-purple-600 via-purple-700 to-pink-600 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 sm:mb-3 md:mb-4 animate-fade-in">What We Offer</h2>
            <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-2xl mx-auto px-4 sm:px-0">Comprehensive programs designed for your child's development</p>
          </div>
          
          {/* 3 Column Premium Scrolling Animation Container */}
          <div className="relative h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden">
            {/* First Column - Scrolling Up */}
            <div className="absolute left-0 w-1/3 pr-1 sm:pr-2 md:pr-3">
              <div className="animate-scroll-up space-y-3 sm:space-y-4 md:space-y-6">
                {[...categories.slice(0, 2), ...categories.slice(0, 2), ...categories.slice(0, 2), ...categories.slice(0, 2)].map((category, index) => (
                  <div
                    key={`col1-${index}`}
                    className="bg-gradient-to-br from-yellow-400 via-orange-400 to-pink-400 rounded-xl sm:rounded-2xl shadow-xl border-3 border-white/30 hover:shadow-2xl hover:border-white/50 transition-all duration-700 text-center group transform hover:-translate-y-3 overflow-hidden hover:scale-105 p-1.5 backdrop-blur-sm"
                  >
                    <div className="bg-white/95 rounded-lg overflow-hidden backdrop-blur-sm">
                      <div className="relative overflow-hidden">
                        <div className="aspect-[3/2] sm:aspect-[4/3] overflow-hidden">
                          <img 
                            src={category.image} 
                            alt={category.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                          />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-purple-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                      </div>
                      <div className="p-3 sm:p-4 md:p-5">
                        <h3 className="text-xs sm:text-sm md:text-base font-bold text-purple-800 mb-1 sm:mb-2 line-clamp-1 group-hover:text-pink-600 transition-colors duration-300">{category.title}</h3>
                        <p className="text-xs text-gray-600 line-clamp-2 leading-relaxed">{category.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Second Column - Scrolling Down */}
            <div className="absolute left-1/3 w-1/3 px-1 sm:px-2 md:px-3">
              <div className="animate-scroll-down space-y-3 sm:space-y-4 md:space-y-6">
                {[...categories.slice(2, 4), ...categories.slice(2, 4), ...categories.slice(2, 4), ...categories.slice(2, 4)].map((category, index) => (
                  <div
                    key={`col2-${index}`}
                    className="bg-gradient-to-br from-blue-400 via-teal-400 to-green-400 rounded-xl sm:rounded-2xl shadow-xl border-3 border-white/30 hover:shadow-2xl hover:border-white/50 transition-all duration-700 text-center group transform hover:-translate-y-3 overflow-hidden hover:scale-105 p-1.5 backdrop-blur-sm"
                  >
                    <div className="bg-white/95 rounded-lg overflow-hidden backdrop-blur-sm">
                      <div className="relative overflow-hidden">
                        <div className="aspect-[3/2] sm:aspect-[4/3] overflow-hidden">
                          <img 
                            src={category.image} 
                            alt={category.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                          />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                      </div>
                      <div className="p-3 sm:p-4 md:p-5">
                        <h3 className="text-xs sm:text-sm md:text-base font-bold text-purple-800 mb-1 sm:mb-2 line-clamp-1 group-hover:text-teal-600 transition-colors duration-300">{category.title}</h3>
                        <p className="text-xs text-gray-600 line-clamp-2 leading-relaxed">{category.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Third Column - Scrolling Up */}
            <div className="absolute right-0 w-1/3 pl-1 sm:pl-2 md:pl-3">
              <div className="animate-scroll-up space-y-3 sm:space-y-4 md:space-y-6">
                {[...categories.slice(4, 6), ...categories.slice(4, 6), ...categories.slice(4, 6), ...categories.slice(4, 6)].map((category, index) => (
                  <div
                    key={`col3-${index}`}
                    className="bg-gradient-to-br from-pink-400 via-purple-400 to-indigo-400 rounded-xl sm:rounded-2xl shadow-xl border-3 border-white/30 hover:shadow-2xl hover:border-white/50 transition-all duration-700 text-center group transform hover:-translate-y-3 overflow-hidden hover:scale-105 p-1.5 backdrop-blur-sm"
                  >
                    <div className="bg-white/95 rounded-lg overflow-hidden backdrop-blur-sm">
                      <div className="relative overflow-hidden">
                        <div className="aspect-[3/2] sm:aspect-[4/3] overflow-hidden">
                          <img 
                            src={category.image} 
                            alt={category.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                          />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-pink-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                      </div>
                      <div className="p-3 sm:p-4 md:p-5">
                        <h3 className="text-xs sm:text-sm md:text-base font-bold text-purple-800 mb-1 sm:mb-2 line-clamp-1 group-hover:text-purple-600 transition-colors duration-300">{category.title}</h3>
                        <p className="text-xs text-gray-600 line-clamp-2 leading-relaxed">{category.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Premium Gradient Overlays for smooth fade effect */}
            <div className="absolute top-0 left-0 right-0 h-16 sm:h-20 md:h-24 bg-gradient-to-b from-purple-600 via-purple-600/70 to-transparent z-10 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 right-0 h-16 sm:h-20 md:h-24 bg-gradient-to-t from-purple-600 via-purple-600/70 to-transparent z-10 pointer-events-none"></div>
            
            {/* Side fade effects */}
            <div className="absolute top-0 bottom-0 left-0 w-8 sm:w-12 bg-gradient-to-r from-purple-600 to-transparent z-10 pointer-events-none"></div>
            <div className="absolute top-0 bottom-0 right-0 w-8 sm:w-12 bg-gradient-to-l from-purple-600 to-transparent z-10 pointer-events-none"></div>
          </div>
        </div>

        {/* Custom CSS for animations */}
        <style>{`
          @keyframes scroll-down {
            0% {
              transform: translateY(-100%);
            }
            100% {
              transform: translateY(0%);
            }
          }
          
          @keyframes scroll-up {
            0% {
              transform: translateY(0%);
            }
            100% {
              transform: translateY(-100%);
            }
          }
          
          @keyframes scroll-horizontal {
            0% {
              transform: translateX(0%);
            }
            100% {
              transform: translateX(-350%);
            }
          }
          
          .animate-scroll-down {
            animation: scroll-down 25s linear infinite;
          }
          
          .animate-scroll-up {
            animation: scroll-up 25s linear infinite;
          }
          
          .animate-scroll-horizontal {
            animation: scroll-horizontal 10s linear infinite;
          }
          
          /* Pause animation on hover for better UX */
          .animate-scroll-down:hover,
          .animate-scroll-up:hover,
          .animate-scroll-horizontal:hover {
            animation-play-state: paused;
          }

          /* Line clamp utilities for text truncation */
          .line-clamp-1 {
            display: -webkit-box;
            -webkit-line-clamp: 1;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }
          
          .line-clamp-2 {
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }
        `}</style>
      </section>

      {/* Premium Feature Cards Section - Horizontal Scrolling */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-yellow-400 via-orange-400 to-pink-400 overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Why Choose Kids School?</h2>
            <p className="text-lg text-white/90 max-w-2xl mx-auto">Experience excellence in education with our premium facilities and dedicated care</p>
          </div>
          
          {/* Horizontal Scrolling Container */}
          <div className="relative overflow-hidden">
            <div className="flex animate-scroll-horizontal space-x-3 md:space-x-4">
              {/* Feature Card 1 */}
              <div className="flex-shrink-0 w-64 md:w-72 bg-white rounded-2xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-700 transform hover:scale-105 border-3 border-white/50 backdrop-blur-sm">
                <div className="relative overflow-hidden">
                  <div className="h-32 md:h-36 bg-gradient-to-br from-blue-400 to-teal-400 p-3">
                    <img
                      src="/images/Home/category/7.jpg"
                      alt="Modern classroom"
                      className="w-full h-full object-cover rounded-xl hover:scale-110 transition-transform duration-700 shadow-lg"
                    />
                  </div>
                  <div className="absolute top-2 right-2 bg-yellow-400 text-purple-800 px-2 py-1 rounded-full text-xs font-bold shadow-lg">
                    Premium ✨
                  </div>
                </div>
                <div className="p-4 md:p-5">
                  <h3 className="text-lg md:text-xl font-bold text-purple-800 mb-2 hover:text-pink-600 transition-colors duration-300">Modern Learning</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    State-of-the-art facilities with interactive technology and safe environments.
                  </p>
                </div>
              </div>

              {/* Feature Card 2 */}
              <div className="flex-shrink-0 w-64 md:w-72 bg-white rounded-2xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-700 transform hover:scale-105 border-3 border-white/50 backdrop-blur-sm">
                <div className="relative overflow-hidden">
                  <div className="h-32 md:h-36 bg-gradient-to-br from-pink-400 to-purple-400 p-3">
                    <img
                      src="/images/Home/category/8.jpg"
                      alt="Teacher with children"
                      className="w-full h-full object-cover rounded-xl hover:scale-110 transition-transform duration-700 shadow-lg"
                    />
                  </div>
                  <div className="absolute top-2 right-2 bg-pink-400 text-white px-2 py-1 rounded-full text-xs font-bold shadow-lg">
                    Expert Care 👩‍🏫
                  </div>
                </div>
                <div className="p-4 md:p-5">
                  <h3 className="text-lg md:text-xl font-bold text-purple-800 mb-2 hover:text-pink-600 transition-colors duration-300">Expert Teachers</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Qualified educators dedicated to nurturing each child's unique potential.
                  </p>
                </div>
              </div>

              {/* Feature Card 3 */}
              <div className="flex-shrink-0 w-64 md:w-72 bg-white rounded-2xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-700 transform hover:scale-105 border-3 border-white/50 backdrop-blur-sm">
                <div className="relative overflow-hidden">
                  <div className="h-32 md:h-36 bg-gradient-to-br from-green-400 to-blue-400 p-3">
                    <img
                      src="/images/Home/category/9.jpg"
                      alt="Children playing"
                      className="w-full h-full object-cover rounded-xl hover:scale-110 transition-transform duration-700 shadow-lg"
                    />
                  </div>
                  <div className="absolute top-2 right-2 bg-green-400 text-white px-2 py-1 rounded-full text-xs font-bold shadow-lg">
                    Creative �
                  </div>
                </div>
                <div className="p-4 md:p-5">
                  <h3 className="text-lg md:text-xl font-bold text-purple-800 mb-2 hover:text-pink-600 transition-colors duration-300">Creative Arts</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Nurturing creativity through arts, crafts, music and interactive learning.
                  </p>
                </div>
              </div>

              {/* Feature Card 4 */}
              <div className="flex-shrink-0 w-64 md:w-72 bg-white rounded-2xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-700 transform hover:scale-105 border-3 border-white/50 backdrop-blur-sm">
                <div className="relative overflow-hidden">
                  <div className="h-32 md:h-36 bg-gradient-to-br from-orange-400 to-red-400 p-3">
                    <img
                      src="/images/Home/category/1.jpg"
                      alt="Safe environment"
                      className="w-full h-full object-cover rounded-xl hover:scale-110 transition-transform duration-700 shadow-lg"
                    />
                  </div>
                  <div className="absolute top-2 right-2 bg-orange-400 text-white px-2 py-1 rounded-full text-xs font-bold shadow-lg">
                    Safe Zone 🛡️
                  </div>
                </div>
                <div className="p-4 md:p-5">
                  <h3 className="text-lg md:text-xl font-bold text-purple-800 mb-2 hover:text-pink-600 transition-colors duration-300">Safe Environment</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Secure and monitored premises ensuring your child's safety at all times.
                  </p>
                </div>
              </div>

              {/* Duplicate cards for continuous scroll */}
              <div className="flex-shrink-0 w-64 md:w-72 bg-white rounded-2xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-700 transform hover:scale-105 border-3 border-white/50 backdrop-blur-sm">
                <div className="relative overflow-hidden">
                  <div className="h-32 md:h-36 bg-gradient-to-br from-blue-400 to-teal-400 p-3">
                    <img
                      src="/images/Home/category/7.jpg"
                      alt="Modern classroom"
                      className="w-full h-full object-cover rounded-xl hover:scale-110 transition-transform duration-700 shadow-lg"
                    />
                  </div>
                  <div className="absolute top-2 right-2 bg-yellow-400 text-purple-800 px-2 py-1 rounded-full text-xs font-bold shadow-lg">
                    Premium ✨
                  </div>
                </div>
                <div className="p-4 md:p-5">
                  <h3 className="text-lg md:text-xl font-bold text-purple-800 mb-2 hover:text-pink-600 transition-colors duration-300">Modern Learning</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    State-of-the-art facilities with interactive technology and safe environments.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Left and right fade overlays */}
            <div className="absolute top-0 bottom-0 left-0 w-8 bg-gradient-to-r from-yellow-400 to-transparent z-10 pointer-events-none"></div>
            <div className="absolute top-0 bottom-0 right-0 w-8 bg-gradient-to-l from-pink-400 to-transparent z-10 pointer-events-none"></div>
          </div>
        </div>
      </section>


      {/* Map Section */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-pink-400 via-purple-500 to-indigo-600">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Find Us on Map</h2>
            <p className="text-lg text-white/90">Located near Ranchi University for easy accessibility</p>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border-4 border-white/30">
              {/* Map Container */}
              <div className="relative h-96 md:h-[500px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3663.123456789!2d85.2930595!3d23.348484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f4e0b6f9b9b9b9%3A0x1234567890abcdef!2sRanchi%20University!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Kids School Location - Near Ranchi University"
                  className="w-full h-full"
                ></iframe>
                
                {/* Overlay with school info */}
                <div className="absolute top-4 left-4 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-xl p-4 shadow-xl max-w-xs border-2 border-white">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                      <span className="text-white font-bold text-lg">KS</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-purple-800 text-sm">Kids School</h3>
                      <p className="text-xs text-purple-700 mt-1">Near Ranchi University</p>
                      <p className="text-xs text-purple-600 mt-1">Quality Education Provider</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Location Details */}
              <div className="p-6 md:p-8 bg-gradient-to-r from-yellow-400 via-orange-400 to-pink-400">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="flex items-center gap-4 bg-white/20 backdrop-blur-sm rounded-xl p-4">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-purple-600 text-xl">📍</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-white">Address</h4>
                      <p className="text-sm text-white/90">Near Ranchi University<br />Ranchi, Jharkhand</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 bg-white/20 backdrop-blur-sm rounded-xl p-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                      <span className="text-purple-600 text-xl">🚌</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-white">Transportation</h4>
                      <p className="text-sm text-white/90">School bus available<br />Public transport nearby</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 bg-white/20 backdrop-blur-sm rounded-xl p-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                      <span className="text-purple-600 text-xl">🅿️</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-white">Parking</h4>
                      <p className="text-sm text-white/90">Free parking available<br />Safe & secure area</p>
                    </div>
                  </div>
                </div>
                
                {/* Directions Button */}
                <div className="mt-8 text-center">
                  <a
                    href={`https://www.google.com/maps/dir/?api=1&destination=23.348484,85.2930595`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-white text-purple-600 px-6 py-3 rounded-full font-bold hover:bg-yellow-400 hover:text-purple-800 transition-colors duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105"
                  >
                    <span className="text-lg">🗺️</span>
                    Get Directions
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Premium FAQ Section */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-purple-300 via-lavender-200 to-pink-200 relative overflow-hidden">
        {/* Floating decorative elements */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-yellow-400/10 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-pink-400/15 rounded-full blur-2xl animate-bounce"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-purple-400/20 rounded-full blur-xl animate-ping"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-purple-800 mb-4 px-2">
              Frequently Asked Questions
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-purple-700 max-w-3xl mx-auto leading-relaxed px-2">
              Get answers to the most common questions about Kids School and our educational programs
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-3 sm:space-y-4 md:space-y-6">
            {/* FAQ Item 1 */}
            <div className="group bg-white/90 backdrop-blur-sm rounded-xl sm:rounded-2xl shadow-xl border-2 border-purple-200 hover:border-purple-400 transition-all duration-500 overflow-hidden hover:shadow-2xl">
              <details className="w-full">
                <summary className="flex items-center justify-between p-4 sm:p-6 md:p-8 cursor-pointer hover:bg-purple-50 transition-colors duration-300">
                  <div className="flex items-center gap-3 sm:gap-4 flex-1 min-w-0">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                      <span className="text-white text-sm sm:text-lg md:text-xl font-bold">1</span>
                    </div>
                    <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-purple-800 group-hover:text-pink-600 transition-colors duration-300 line-clamp-2">
                      Are the educators at Kids School qualified and experienced?
                    </h3>
                  </div>
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-purple-100 rounded-full flex items-center justify-center group-hover:bg-purple-200 transition-colors duration-300 flex-shrink-0 ml-2">
                    <span className="text-purple-600 text-lg sm:text-xl transform transition-transform duration-300 group-hover:rotate-180">+</span>
                  </div>
                </summary>
                <div className="px-4 sm:px-6 md:px-8 pb-4 sm:pb-6 md:pb-8">
                  <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-4 sm:p-6 border-l-4 border-purple-400">
                    <p className="text-gray-700 leading-relaxed mb-4 text-sm sm:text-base">
                      Absolutely! Our educators are highly qualified with relevant degrees in early childhood education and years of practical experience. 
                      Each teacher undergoes continuous professional development and training to stay updated with the latest educational methodologies.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-purple-100 text-purple-800 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium">Certified Teachers</span>
                      <span className="bg-pink-100 text-pink-800 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium">20+ Years Experience</span>
                      <span className="bg-yellow-100 text-yellow-800 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium">Regular Training</span>
                    </div>
                  </div>
                </div>
              </details>
            </div>

            {/* FAQ Item 2 */}
            <div className="group bg-white/90 backdrop-blur-sm rounded-xl sm:rounded-2xl shadow-xl border-2 border-purple-200 hover:border-purple-400 transition-all duration-500 overflow-hidden hover:shadow-2xl">
              <details className="w-full">
                <summary className="flex items-center justify-between p-4 sm:p-6 md:p-8 cursor-pointer hover:bg-purple-50 transition-colors duration-300">
                  <div className="flex items-center gap-3 sm:gap-4 flex-1 min-w-0">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-gradient-to-r from-blue-400 to-teal-400 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                      <span className="text-white text-sm sm:text-lg md:text-xl font-bold">2</span>
                    </div>
                    <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-purple-800 group-hover:text-pink-600 transition-colors duration-300 line-clamp-2">
                      What sets Kids School's curriculum apart from other preschools?
                    </h3>
                  </div>
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-purple-100 rounded-full flex items-center justify-center group-hover:bg-purple-200 transition-colors duration-300 flex-shrink-0 ml-2">
                    <span className="text-purple-600 text-lg sm:text-xl transform transition-transform duration-300 group-hover:rotate-180">+</span>
                  </div>
                </summary>
                <div className="px-6 md:px-8 pb-6 md:pb-8">
                  <div className="bg-gradient-to-r from-blue-50 to-teal-50 rounded-xl p-6 border-l-4 border-blue-400">
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Our curriculum combines traditional learning with innovative teaching methods, focusing on holistic development. 
                      We integrate STEM, arts, emotional intelligence, and life skills into our daily activities, ensuring well-rounded growth.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">STEM Integration</span>
                      <span className="bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-sm font-medium">Creative Arts</span>
                      <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">Life Skills</span>
                    </div>
                  </div>
                </div>
              </details>
            </div>

            {/* FAQ Item 3 */}
            <div className="group bg-white/90 backdrop-blur-sm rounded-xl sm:rounded-2xl shadow-xl border-2 border-purple-200 hover:border-purple-400 transition-all duration-500 overflow-hidden hover:shadow-2xl">
              <details className="w-full">
                <summary className="flex items-center justify-between p-4 sm:p-6 md:p-8 cursor-pointer hover:bg-purple-50 transition-colors duration-300">
                  <div className="flex items-center gap-3 sm:gap-4 flex-1 min-w-0">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                      <span className="text-white text-sm sm:text-lg md:text-xl font-bold">3</span>
                    </div>
                    <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-purple-800 group-hover:text-pink-600 transition-colors duration-300 line-clamp-2">
                      Can I tour the Kids School facility before enrolling my child?
                    </h3>
                  </div>
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-purple-100 rounded-full flex items-center justify-center group-hover:bg-purple-200 transition-colors duration-300 flex-shrink-0 ml-2">
                    <span className="text-purple-600 text-lg sm:text-xl transform transition-transform duration-300 group-hover:rotate-180">+</span>
                  </div>
                </summary>
                <div className="px-6 md:px-8 pb-6 md:pb-8">
                  <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-xl p-6 border-l-4 border-pink-400">
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Yes! We encourage parents to visit our facility and meet our staff before making a decision. 
                      Schedule a personalized tour to see our classrooms, play areas, and learning resources. 
                      We're proud to showcase our safe, nurturing environment.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-pink-100 text-pink-800 px-3 py-1 rounded-full text-sm font-medium">Free Tours</span>
                      <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">Meet Teachers</span>
                      <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium">See Facilities</span>
                    </div>
                  </div>
                </div>
              </details>
            </div>

            {/* FAQ Item 4 */}
            <div className="group bg-white/90 backdrop-blur-sm rounded-xl sm:rounded-2xl shadow-xl border-2 border-purple-200 hover:border-purple-400 transition-all duration-500 overflow-hidden hover:shadow-2xl">
              <details className="w-full">
                <summary className="flex items-center justify-between p-4 sm:p-6 md:p-8 cursor-pointer hover:bg-purple-50 transition-colors duration-300">
                  <div className="flex items-center gap-3 sm:gap-4 flex-1 min-w-0">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-gradient-to-r from-green-400 to-blue-400 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                      <span className="text-white text-sm sm:text-lg md:text-xl font-bold">4</span>
                    </div>
                    <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-purple-800 group-hover:text-pink-600 transition-colors duration-300 line-clamp-2">
                      How can parents stay involved in their child's education at Kids School?
                    </h3>
                  </div>
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-purple-100 rounded-full flex items-center justify-center group-hover:bg-purple-200 transition-colors duration-300 flex-shrink-0 ml-2">
                    <span className="text-purple-600 text-lg sm:text-xl transform transition-transform duration-300 group-hover:rotate-180">+</span>
                  </div>
                </summary>
                <div className="px-6 md:px-8 pb-6 md:pb-8">
                  <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-6 border-l-4 border-green-400">
                    <p className="text-gray-700 leading-relaxed mb-4">
                      We believe in strong parent-school partnerships. We offer regular parent-teacher conferences, 
                      monthly progress reports, family events, and volunteer opportunities. Our open communication policy 
                      ensures you're always informed about your child's development.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">Regular Updates</span>
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">Family Events</span>
                      <span className="bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-sm font-medium">Open Communication</span>
                    </div>
                  </div>
                </div>
              </details>
            </div>

            {/* FAQ Item 5 */}
            <div className="group bg-white/90 backdrop-blur-sm rounded-xl sm:rounded-2xl shadow-xl border-2 border-purple-200 hover:border-purple-400 transition-all duration-500 overflow-hidden hover:shadow-2xl">
              <details className="w-full">
                <summary className="flex items-center justify-between p-4 sm:p-6 md:p-8 cursor-pointer hover:bg-purple-50 transition-colors duration-300">
                  <div className="flex items-center gap-3 sm:gap-4 flex-1 min-w-0">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-gradient-to-r from-orange-400 to-red-400 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                      <span className="text-white text-sm sm:text-lg md:text-xl font-bold">5</span>
                    </div>
                    <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-purple-800 group-hover:text-pink-600 transition-colors duration-300 line-clamp-2">
                      What is the admission process for Kids School?
                    </h3>
                  </div>
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-purple-100 rounded-full flex items-center justify-center group-hover:bg-purple-200 transition-colors duration-300 flex-shrink-0 ml-2">
                    <span className="text-purple-600 text-lg sm:text-xl transform transition-transform duration-300 group-hover:rotate-180">+</span>
                  </div>
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center group-hover:bg-purple-200 transition-colors duration-300">
                    <span className="text-purple-600 text-xl transform transition-transform duration-300 group-hover:rotate-180">+</span>
                  </div>
                </summary>
                <div className="px-6 md:px-8 pb-6 md:pb-8">
                  <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-xl p-6 border-l-4 border-orange-400">
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Our admission process is simple and welcoming. Submit an online application, schedule a facility tour, 
                      meet with our admissions team, and complete the enrollment paperwork. We'll guide you through each step 
                      to ensure a smooth transition for your child.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium">Online Application</span>
                      <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium">Facility Tour</span>
                      <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">Easy Process</span>
                    </div>
                  </div>
                </div>
              </details>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12 md:mt-16">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-xl border-2 border-purple-200 max-w-2xl mx-auto">
              <h3 className="text-2xl md:text-3xl font-bold text-purple-800 mb-4">
                Still have questions?
              </h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Our friendly staff is here to help! Contact us for personalized answers to any questions about your child's education.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-full font-bold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  <span className="text-lg">📞</span>
                  Contact Us
                </a>
                <a
                  href="tel:555-123-KIDS"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-orange-400 text-purple-800 px-6 py-3 rounded-full font-bold hover:from-yellow-500 hover:to-orange-500 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  <span className="text-lg">📱</span>
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
