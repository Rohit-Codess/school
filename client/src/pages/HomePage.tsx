import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  
  const heroImages = [
    {
      src: "/images/Home/hero/bg1.jpg",
      alt: "Modern Classroom Environment",
      title: "Modern Learning"
    },
    {
      src: "/images/Home/hero/bg2.jpg",
      alt: "Teacher and Students Interaction", 
      title: "Expert Teachers"
    },
    {
      src: "/images/Home/hero/bg3.jpg",
      alt: "Children Playing and Learning",
      title: "Happy Learning"
    },
    {
      src: "/images/Home/hero/bg4.jpg",
      alt: "School Activities and Programs",
      title: "Holistic Development"
    }
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
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Hero Section - Web Company Style */}
      <section className="relative py-8 sm:py-12 md:py-16 lg:py-24 bg-gradient-to-br from-teal-50 via-white to-teal-50 overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-10 sm:top-20 left-5 sm:left-10 w-16 h-16 sm:w-32 sm:h-32 bg-teal-100 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-10 sm:bottom-20 right-5 sm:right-10 w-20 h-20 sm:w-40 sm:h-40 bg-teal-200 rounded-full opacity-15 blur-3xl"></div>
        
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 sm:gap-12 lg:gap-16">
            {/* Content Section - Left Side */}
            <div className={`lg:w-1/2 text-center lg:text-left transition-all duration-1000 transform ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              {/* Badge */}
              <div className="inline-flex items-center px-3 sm:px-4 py-2 bg-teal-100 text-teal-700 rounded-full text-xs sm:text-sm font-semibold mb-4 sm:mb-6">
                🎓 Leading Education Provider
              </div>
              
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
                Best School for <br />
                <span className="text-teal-600 relative">
                  Your Child
                  <div className="absolute -bottom-1 sm:-bottom-2 left-0 w-full h-2 sm:h-3 bg-teal-200 opacity-30 rounded-lg"></div>
                </span>
              </h1>
              
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 mb-6 sm:mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0 px-2 sm:px-0">
                We're a trusted educational institution with proven results. At Kids School, we believe that quality education isn't just taught — it's experienced through excellence.
              </p>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start px-4 sm:px-0">
                <Link
                  to="/admission"
                  className="inline-flex items-center justify-center bg-teal-600 text-white px-4 sm:px-8 py-2.5 sm:py-4 rounded-lg sm:rounded-xl text-sm sm:text-lg font-semibold hover:bg-teal-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Start Admission
                </Link>
                <Link
                  to="/about"
                  className="inline-flex items-center justify-center border-2 border-teal-600 text-teal-600 px-4 sm:px-8 py-2.5 sm:py-4 rounded-lg sm:rounded-xl text-sm sm:text-lg font-semibold hover:bg-teal-50 transition-all duration-300"
                >
                  Learn More
                </Link>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 sm:gap-8 justify-center lg:justify-start mt-8 sm:mt-12 max-w-md mx-auto lg:max-w-none">
                <div className="text-center lg:text-left">
                  <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">500+</div>
                  <div className="text-xs sm:text-sm text-gray-600">Students Enrolled</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">98%</div>
                  <div className="text-xs sm:text-sm text-gray-600">Parent Satisfaction</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">24/7</div>
                  <div className="text-xs sm:text-sm text-gray-600">Support Available</div>
                </div>
              </div>
            </div>
            
            {/* Image Section - Right Side */}
            <div className={`w-full lg:w-1/2 flex justify-center transition-all duration-1000 transform ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg">
                {/* Live Projects Badge */}
                <div className="absolute top-2 sm:top-4 left-2 sm:left-4 z-20 bg-green-500 text-white px-2 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-semibold flex items-center gap-1 sm:gap-2 shadow-lg">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full animate-pulse"></div>
                  Active Learning
                </div>
                
                {/* Main Image Container */}
                <div className="relative bg-white rounded-xl sm:rounded-2xl shadow-2xl overflow-hidden border border-gray-100">
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
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                        
                        {/* Image Title Overlay */}
                        <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 right-2 sm:right-4">
                          <div className="bg-white/90 backdrop-blur-sm rounded-lg p-2 sm:p-3">
                            <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-900">{image.title}</h3>
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
                            ? 'bg-teal-600 scale-125' 
                            : 'bg-white/60 hover:bg-white/80'
                        }`}
                      />
                    ))}
                  </div>
                </div>
                
                {/* Floating Elements */}
                <div className="absolute -top-3 sm:-top-6 -right-3 sm:-right-6 w-12 h-12 sm:w-16 sm:h-16 lg:w-24 lg:h-24 bg-teal-100 rounded-full opacity-40 animate-bounce" style={{ animationDelay: '0s' }}></div>
                <div className="absolute -bottom-2 sm:-bottom-4 -left-2 sm:-left-4 w-8 h-8 sm:w-12 sm:h-12 lg:w-16 lg:h-16 bg-teal-200 rounded-full opacity-30 animate-bounce" style={{ animationDelay: '2s' }}></div>
                
                {/* Rating Badge */}
                <div className="absolute top-4 sm:top-8 -right-4 sm:-right-8 bg-teal-600 text-white p-2 sm:p-4 rounded-lg sm:rounded-xl shadow-lg transform rotate-12">
                  <div className="text-center">
                    <div className="text-lg sm:text-xl lg:text-2xl font-bold">4.9★</div>
                    <div className="text-[10px] sm:text-xs">Rating</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section id="programs" className="py-8 sm:py-12 md:py-20 bg-white overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-2 sm:mb-3 md:mb-4 animate-fade-in">What We Offer</h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4 sm:px-0">Comprehensive programs designed for your child's development</p>
          </div>
          
          {/* Scrolling Animation Container */}
          <div className="relative h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden">
            {/* First Row - Scrolling Up to Down */}
            <div className="absolute left-0 w-1/2 pr-1 sm:pr-2 md:pr-4">
              <div className="animate-scroll-down space-y-3 sm:space-y-4 md:space-y-6">
                {/* Duplicate categories for continuous scroll */}
                {[...categories.slice(0, 3), ...categories.slice(0, 3), ...categories.slice(0, 3)].map((category, index) => (
                  <div
                    key={`row1-${index}`}
                    className="bg-white rounded-lg sm:rounded-xl shadow-lg border border-gray-100 hover:shadow-xl hover:border-teal-200 transition-all duration-500 text-center group transform hover:-translate-y-2 overflow-hidden hover:scale-105"
                  >
                    <div className="aspect-[3/2] sm:aspect-[4/3] overflow-hidden">
                      <img 
                        src={category.image} 
                        alt={category.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-2 sm:p-3 md:p-4">
                      <h3 className="text-xs sm:text-sm md:text-base font-semibold text-gray-800 mb-1 sm:mb-2 group-hover:text-teal-600 transition-colors duration-300 line-clamp-1">{category.title}</h3>
                      <p className="text-xs sm:text-xs md:text-sm text-gray-600 leading-relaxed line-clamp-2">{category.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Second Row - Scrolling Down to Up */}
            <div className="absolute right-0 w-1/2 pl-1 sm:pl-2 md:pl-4">
              <div className="animate-scroll-up space-y-3 sm:space-y-4 md:space-y-6">
                {/* Duplicate categories for continuous scroll */}
                {[...categories.slice(3, 6), ...categories.slice(3, 6), ...categories.slice(3, 6)].map((category, index) => (
                  <div
                    key={`row2-${index}`}
                    className="bg-white rounded-lg sm:rounded-xl shadow-lg border border-gray-100 hover:shadow-xl hover:border-teal-200 transition-all duration-500 text-center group transform hover:-translate-y-2 overflow-hidden hover:scale-105"
                  >
                    <div className="aspect-[3/2] sm:aspect-[4/3] overflow-hidden">
                      <img 
                        src={category.image} 
                        alt={category.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-2 sm:p-3 md:p-4">
                      <h3 className="text-xs sm:text-sm md:text-base font-semibold text-gray-800 mb-1 sm:mb-2 group-hover:text-teal-600 transition-colors duration-300 line-clamp-1">{category.title}</h3>
                      <p className="text-xs sm:text-xs md:text-sm text-gray-600 leading-relaxed line-clamp-2">{category.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Gradient Overlays for smooth fade effect */}
            <div className="absolute top-0 left-0 right-0 h-12 sm:h-16 md:h-20 bg-gradient-to-b from-white to-transparent z-10 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 right-0 h-12 sm:h-16 md:h-20 bg-gradient-to-t from-white to-transparent z-10 pointer-events-none"></div>
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
          
          .animate-scroll-down {
            animation: scroll-down 25s linear infinite;
          }
          
          .animate-scroll-up {
            animation: scroll-up 25s linear infinite;
          }
          
          /* Pause animation on hover for better UX */
          .animate-scroll-down:hover,
          .animate-scroll-up:hover {
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

      {/* Feature Cards Section */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="space-y-12 md:space-y-20">
            {/* Card 1 */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.02]">
              <div className="flex flex-col lg:flex-row">
                <div className="lg:w-1/2 p-6 md:p-12 flex flex-col justify-center">
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 md:mb-6 hover:text-teal-600 transition-colors duration-300">Modern Learning Environment</h3>
                  <p className="text-base md:text-lg text-gray-600 mb-4 md:mb-6 leading-relaxed">
                    Our state-of-the-art facilities provide the perfect environment for learning. With spacious classrooms, 
                    interactive whiteboards, and comfortable seating arrangements, we ensure every child has the best 
                    learning experience possible.
                  </p>
                  <ul className="space-y-2 md:space-y-3 text-gray-600">
                    <li className="flex items-center group">
                      <span className="w-2 h-2 bg-teal-600 rounded-full mr-3 group-hover:scale-150 transition-transform duration-300"></span>
                      <span className="text-sm md:text-base">Air-conditioned classrooms</span>
                    </li>
                    <li className="flex items-center group">
                      <span className="w-2 h-2 bg-teal-600 rounded-full mr-3 group-hover:scale-150 transition-transform duration-300"></span>
                      <span className="text-sm md:text-base">Interactive learning tools</span>
                    </li>
                    <li className="flex items-center group">
                      <span className="w-2 h-2 bg-teal-600 rounded-full mr-3 group-hover:scale-150 transition-transform duration-300"></span>
                      <span className="text-sm md:text-base">Safe and secure environment</span>
                    </li>
                  </ul>
                </div>
                <div className="lg:w-1/2 h-64 md:h-auto">
                  <img
                    src="/images/Home/category/7.jpg"
                    alt="Modern classroom"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                  />
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.02]">
              <div className="flex flex-col lg:flex-row-reverse">
                <div className="lg:w-1/2 p-6 md:p-12 flex flex-col justify-center">
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 md:mb-6 hover:text-teal-600 transition-colors duration-300">Experienced Teachers</h3>
                  <p className="text-base md:text-lg text-gray-600 mb-4 md:mb-6 leading-relaxed">
                    Our dedicated team of qualified teachers brings years of experience in early childhood education. 
                    They are passionate about nurturing young minds and helping each child reach their full potential 
                    through personalized attention and care.
                  </p>
                  <ul className="space-y-2 md:space-y-3 text-gray-600">
                    <li className="flex items-center group">
                      <span className="w-2 h-2 bg-teal-600 rounded-full mr-3 group-hover:scale-150 transition-transform duration-300"></span>
                      <span className="text-sm md:text-base">Qualified and certified educators</span>
                    </li>
                    <li className="flex items-center group">
                      <span className="w-2 h-2 bg-teal-600 rounded-full mr-3 group-hover:scale-150 transition-transform duration-300"></span>
                      <span className="text-sm md:text-base">Small class sizes for individual attention</span>
                    </li>
                    <li className="flex items-center group">
                      <span className="w-2 h-2 bg-teal-600 rounded-full mr-3 group-hover:scale-150 transition-transform duration-300"></span>
                      <span className="text-sm md:text-base">Regular parent-teacher communication</span>
                    </li>
                  </ul>
                </div>
                <div className="lg:w-1/2 h-64 md:h-auto">
                  <img
                    src="/images/Home/category/8.jpg"
                    alt="Teacher with children"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                  />
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.02]">
              <div className="flex flex-col lg:flex-row">
                <div className="lg:w-1/2 p-6 md:p-12 flex flex-col justify-center">
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 md:mb-6 hover:text-teal-600 transition-colors duration-300">Holistic Development</h3>
                  <p className="text-base md:text-lg text-gray-600 mb-4 md:mb-6 leading-relaxed">
                    We believe in developing the whole child - academically, socially, emotionally, and physically. 
                    Our comprehensive curriculum includes arts, sports, music, and various extracurricular activities 
                    to ensure well-rounded development.
                  </p>
                  <ul className="space-y-2 md:space-y-3 text-gray-600">
                    <li className="flex items-center group">
                      <span className="w-2 h-2 bg-teal-600 rounded-full mr-3 group-hover:scale-150 transition-transform duration-300"></span>
                      <span className="text-sm md:text-base">Balanced academic curriculum</span>
                    </li>
                    <li className="flex items-center group">
                      <span className="w-2 h-2 bg-teal-600 rounded-full mr-3 group-hover:scale-150 transition-transform duration-300"></span>
                      <span className="text-sm md:text-base">Creative arts and music programs</span>
                    </li>
                    <li className="flex items-center group">
                      <span className="w-2 h-2 bg-teal-600 rounded-full mr-3 group-hover:scale-150 transition-transform duration-300"></span>
                      <span className="text-sm md:text-base">Physical education and sports</span>
                    </li>
                  </ul>
                </div>
                <div className="lg:w-1/2 h-64 md:h-auto">
                  <img
                    src="/images/Home/category/9.jpg"
                    alt="Children playing"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6">About Kids School</h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              With over 20 years of experience in early childhood education, Kids School has been dedicated to 
              providing exceptional learning experiences that foster growth, creativity, and academic excellence. 
              Our mission is to create a nurturing environment where every child can discover their potential and 
              develop the skills they need for future success.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Our Mission</h3>
                <p className="text-gray-600">To provide quality education that nurtures every child's potential and prepares them for a bright future.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">👁️</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Our Vision</h3>
                <p className="text-gray-600">To be the leading educational institution that shapes confident, creative, and compassionate leaders.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">❤️</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Our Values</h3>
                <p className="text-gray-600">Excellence, innovation, respect, and community are at the heart of everything we do.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">Find Us on Map</h2>
            <p className="text-lg text-gray-600">Located near Ranchi University for easy accessibility</p>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200">
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
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm rounded-lg p-4 shadow-lg max-w-xs">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-teal-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-lg">K</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 text-sm">Kids School</h3>
                      <p className="text-xs text-gray-600 mt-1">Near Ranchi University</p>
                      <p className="text-xs text-gray-500 mt-1">Quality Education Provider</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Location Details */}
              <div className="p-6 md:p-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center">
                      <span className="text-teal-600 text-xl">📍</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Address</h4>
                      <p className="text-sm text-gray-600">Near Ranchi University<br />Ranchi, Jharkhand</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center">
                      <span className="text-teal-600 text-xl">🚌</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Transportation</h4>
                      <p className="text-sm text-gray-600">School bus available<br />Public transport nearby</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center">
                      <span className="text-teal-600 text-xl">🅿️</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Parking</h4>
                      <p className="text-sm text-gray-600">Free parking available<br />Safe & secure area</p>
                    </div>
                  </div>
                </div>
                
                {/* Directions Button */}
                <div className="mt-8 text-center">
                  <a
                    href={`https://www.google.com/maps/dir/?api=1&destination=23.348484,85.2930595`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-teal-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-teal-700 transition-colors duration-300 shadow-lg hover:shadow-xl"
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
    </div>
  );
};

export default HomePage;
