import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  const [currentImage, setCurrentImage] = useState(0);
  
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
    }, 5000);
    return () => clearInterval(interval);
  }, [heroImages.length]);

  const programs = [
    { 
      image: "/images/Home/category/1.jpg", 
      title: "Nursery Program", 
      description: "Age 2-3 years - Foundation learning with play-based activities",
      age: "2-3 Years",
      duration: "Half Day"
    },
    { 
      image: "/images/Home/category/2.jpg", 
      title: "Pre-KG Program", 
      description: "Age 3-4 years - Pre-academic skills development",
      age: "3-4 Years",
      duration: "Full Day"
    },
    { 
      image: "/images/Home/category/3.jpg", 
      title: "KG Program", 
      description: "Age 4-5 years - School readiness preparation",
      age: "4-5 Years",
      duration: "Full Day"
    },
    { 
      image: "/images/Home/category/4.jpg", 
      title: "Primary Program", 
      description: "Age 5-10 years - Core academic foundation",
      age: "5-10 Years",
      duration: "Full Day"
    }
  ];

  const features = [
    { icon: "🎨", title: "Creative Arts", desc: "Music, dance, painting, and crafts to nurture creativity" },
    { icon: "🔬", title: "STEM Learning", desc: "Science, technology, engineering, and math exploration" },
    { icon: "🌱", title: "Nature Study", desc: "Outdoor learning and environmental awareness programs" },
    { icon: "🏃‍♂️", title: "Physical Development", desc: "Sports, yoga, and physical fitness activities" },
    { icon: "📚", title: "Language Skills", desc: "Multi-language learning and communication development" },
    { icon: "🤝", title: "Social Skills", desc: "Teamwork, leadership, and interpersonal skills" }
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Parent of Arjun",
      comment: "The caring environment and excellent teaching have helped my child flourish.",
      rating: 5,
      image: "/images/Home/category/1.jpg"
    },
    {
      name: "Rajesh Kumar", 
      role: "Parent of Shreya",
      comment: "Amazing facilities and dedicated teachers. Highly recommend Kids School!",
      rating: 5,
      image: "/images/Home/category/2.jpg"
    },
    {
      name: "Anita Gupta",
      role: "Parent of Rohan", 
      comment: "My child loves going to school every day. The programs are excellent.",
      rating: 5,
      image: "/images/Home/category/3.jpg"
    }
  ];

  const blogPosts = [
    {
      title: "5 Benefits of Early Childhood Education",
      excerpt: "Discover how quality early education shapes your child's future success and development.",
      image: "/images/Home/category/7.jpg",
      date: "March 15, 2024",
      category: "Education"
    },
    {
      title: "Building Confidence in Young Learners", 
      excerpt: "Learn strategies to help your child develop self-confidence and independence.",
      image: "/images/Home/category/8.jpg",
      date: "March 10, 2024",
      category: "Development"
    },
    {
      title: "The Importance of Play-Based Learning",
      excerpt: "Understanding how play enhances cognitive and social development in children.",
      image: "/images/Home/category/9.jpg", 
      date: "March 5, 2024",
      category: "Learning"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span key={index} className={`text-lg ${index < rating ? 'text-yellow-400' : 'text-gray-300'}`}>
        ★
      </span>
    ));
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Mobile-First Design */}
      <section className="relative py-8 sm:py-12 md:py-16 lg:py-24 bg-gradient-to-br from-purple-700 via-purple-800 to-purple-900 overflow-hidden">
        {/* Mobile-optimized decorative shapes */}
        <div className="absolute top-5 left-5 w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 bg-yellow-400 rounded-full opacity-20"></div>
        <div className="absolute bottom-10 right-10 w-20 h-20 sm:w-28 sm:h-28 md:w-40 md:h-40 bg-yellow-300 rounded-full opacity-15"></div>
        <div className="absolute top-1/3 right-1/4 w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-yellow-500 rounded-full opacity-25"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Content - Mobile-Optimized */}
            <div className="text-center lg:text-left order-2 lg:order-1">
              <div className="inline-flex items-center px-3 py-2 sm:px-4 sm:py-2 bg-yellow-400 text-purple-800 rounded-full text-xs sm:text-sm font-bold mb-4 sm:mb-6 shadow-lg animate-pulse">
                🎓 Build a Foundation for Learning
              </div>
              
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
                Build a foundation for 
                <span className="text-yellow-400 block mt-2">a life time of learning</span>
              </h1>
              
              <p className="text-base sm:text-lg text-white/90 mb-6 sm:mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                We nurture young minds with innovative teaching methods, creating a foundation that lasts a lifetime through play-based learning and holistic development.
              </p>
              
              {/* Mobile-First CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start mb-8 sm:mb-12">
                <Link
                  to="/admission"
                  className="bg-yellow-400 text-purple-800 px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-bold hover:bg-yellow-300 hover:shadow-xl transition-all duration-300 shadow-lg transform hover:scale-105 active:scale-95"
                >
                  Get Started →
                </Link>
                <Link
                  to="/about"
                  className="border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-bold hover:bg-white hover:text-purple-800 transition-all duration-300 transform hover:scale-105 active:scale-95"
                >
                  Learn More
                </Link>
              </div>
              
              {/* Mobile-Optimized Stats */}
              <div className="grid grid-cols-3 gap-3 sm:gap-6 max-w-xs sm:max-w-md mx-auto lg:max-w-none">
                <div className="text-center lg:text-left bg-white/10 backdrop-blur rounded-lg p-3 sm:p-4">
                  <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-yellow-400">500+</div>
                  <div className="text-xs sm:text-sm text-white/80">Happy Students</div>
                </div>
                <div className="text-center lg:text-left bg-white/10 backdrop-blur rounded-lg p-3 sm:p-4">
                  <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-yellow-400">98%</div>
                  <div className="text-xs sm:text-sm text-white/80">Success Rate</div>
                </div>
                <div className="text-center lg:text-left bg-white/10 backdrop-blur rounded-lg p-3 sm:p-4">
                  <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-yellow-400">20+</div>
                  <div className="text-xs sm:text-sm text-white/80">Years Experience</div>
                </div>
              </div>
            </div>
            
            {/* Hero Image - Mobile-Optimized */}
            <div className="flex justify-center order-1 lg:order-2">
              <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg">
                <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden border-2 sm:border-4 border-yellow-400">
                  <div className="aspect-[4/3] relative">
                    {heroImages.map((image, index) => (
                      <div
                        key={index}
                        className={`absolute inset-0 transition-opacity duration-1000 ${
                          index === currentImage ? 'opacity-100' : 'opacity-0'
                        }`}
                      >
                        <img
                          src={image.src}
                          alt={image.alt}
                          className="w-full h-full object-cover"
                          loading={index === 0 ? "eager" : "lazy"}
                        />
                      </div>
                    ))}
                  </div>
                  
                  {/* Mobile-Friendly Image Navigation */}
                  <div className="absolute bottom-2 sm:bottom-4 right-2 sm:right-4 flex gap-1 sm:gap-2">
                    {heroImages.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImage(index)}
                        className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-colors duration-200 ${
                          index === currentImage ? 'bg-yellow-400' : 'bg-white/60'
                        }`}
                      />
                    ))}
                  </div>
                </div>
                
                {/* Mobile-Optimized Rating Badge */}
                <div className="absolute -top-2 sm:-top-4 -right-2 sm:-right-4 bg-yellow-400 text-purple-800 p-2 sm:p-4 rounded-lg sm:rounded-xl shadow-lg border-2 border-white">
                  <div className="text-center">
                    <div className="text-lg sm:text-xl font-bold">4.9★</div>
                    <div className="text-xs font-bold">Rating</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section - Mobile-Optimized */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-r from-purple-50 to-yellow-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            {/* Mobile-First Image */}
            <div className="order-2 lg:order-1">
              <div className="relative">
                <img 
                  src="/images/Home/hero/2.jpeg" 
                  alt="About Kids School"
                  className="w-full rounded-xl sm:rounded-2xl shadow-xl"
                />
                {/* Mobile-friendly overlay badge */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur text-purple-800 px-3 py-2 rounded-lg shadow-lg">
                  <div className="text-sm font-bold">20+ Years</div>
                  <div className="text-xs">Excellence</div>
                </div>
              </div>
            </div>
            
            {/* Mobile-Optimized Content */}
            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center px-3 py-2 sm:px-4 sm:py-2 bg-purple-100 text-purple-800 rounded-full text-xs sm:text-sm font-bold mb-4 sm:mb-6">
                📖 About Us
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-purple-800 mb-4 sm:mb-6">
                Proven Approach to Learning, Growing, and Caring
              </h2>
              <p className="text-gray-600 mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base">
                At Kids School, we believe every child is unique and deserves personalized attention. 
                Our experienced educators create a nurturing environment where children can explore, 
                learn, and grow at their own pace.
              </p>
              
              {/* Mobile-Friendly Feature List */}
              <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-purple-800 text-xs sm:text-sm font-bold">✓</span>
                  </div>
                  <span className="text-gray-700 text-sm sm:text-base">Play-based learning methodology</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-purple-800 text-xs sm:text-sm font-bold">✓</span>
                  </div>
                  <span className="text-gray-700 text-sm sm:text-base">Individual attention and care</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-purple-800 text-xs sm:text-sm font-bold">✓</span>
                  </div>
                  <span className="text-gray-700 text-sm sm:text-base">Safe and secure environment</span>
                </div>
              </div>
              
              <Link
                to="/about"
                className="inline-block bg-purple-800 text-white px-6 sm:px-8 py-3 rounded-full font-bold hover:bg-purple-900 transition-all duration-300 text-sm sm:text-base transform hover:scale-105 active:scale-95"
              >
                Learn More About Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section - Mobile-First Design */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center px-3 py-2 sm:px-4 sm:py-2 bg-purple-100 text-purple-800 rounded-full text-xs sm:text-sm font-bold mb-4 sm:mb-6">
              🎓 Our Programs
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-purple-800 mb-3 sm:mb-4">Age-Appropriate Learning Programs</h2>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-2xl mx-auto">
              Carefully designed programs for every stage of your child's early development
            </p>
          </div>
          
          {/* Mobile-Optimized Program Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {programs.map((program, index) => (
              <div
                key={index}
                className="bg-white rounded-xl sm:rounded-2xl shadow-lg overflow-hidden border-2 border-purple-100 hover:border-yellow-400 hover:shadow-2xl transition-all duration-300 group cursor-pointer transform hover:scale-105 active:scale-95"
              >
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img 
                    src={program.image} 
                    alt={program.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Mobile-friendly overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-4 sm:p-6">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-3 gap-2">
                    <span className="bg-yellow-100 text-purple-800 px-2 sm:px-3 py-1 rounded-full text-xs font-bold">
                      {program.age}
                    </span>
                    <span className="text-gray-500 text-xs">{program.duration}</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-purple-800 mb-2 sm:mb-3 group-hover:text-purple-900 transition-colors duration-200">
                    {program.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-200 text-sm sm:text-base">
                    {program.description}
                  </p>
                  
                  {/* Mobile CTA */}
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <Link 
                      to="/programs"
                      className="text-purple-800 font-semibold text-sm hover:text-purple-900 transition-colors duration-200"
                    >
                      Learn More →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Mobile-Friendly View All Button */}
          <div className="text-center mt-8 sm:mt-12">
            <Link
              to="/programs"
              className="inline-block bg-purple-800 text-white px-6 sm:px-8 py-3 rounded-full font-bold hover:bg-purple-900 transition-all duration-300 text-sm sm:text-base transform hover:scale-105 active:scale-95"
            >
              View All Programs
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section - Mobile-Optimized */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-r from-purple-100 to-yellow-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center px-3 py-2 sm:px-4 sm:py-2 bg-purple-800 text-white rounded-full text-xs sm:text-sm font-bold mb-4 sm:mb-6">
              ⭐ Why Choose Kids School?
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-purple-800 mb-3 sm:mb-4">Comprehensive Development Approach</h2>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600">Holistic education that nurtures every aspect of your child's growth</p>
          </div>
          
          {/* Mobile-First Feature Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 text-center shadow-lg border-2 border-purple-100 hover:border-yellow-400 hover:shadow-2xl transition-all duration-300 group cursor-pointer mobile-card-shadow">
                <div className="text-4xl sm:text-5xl lg:text-6xl mb-4 sm:mb-6 group-hover:scale-110 transition-all duration-300 animate-bounce-gentle">
                  {feature.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-purple-800 mb-3 sm:mb-4 group-hover:text-purple-900 transition-colors duration-200">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-200 text-sm sm:text-base">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
          
          {/* Mobile CTA */}
          <div className="text-center mt-8 sm:mt-12">
            <Link
              to="/about"
              className="inline-block bg-purple-800 text-white px-6 sm:px-8 py-3 rounded-full font-bold hover:bg-purple-900 transition-all duration-300 text-sm sm:text-base transform hover:scale-105 active:scale-95 touch-manipulation"
            >
              Learn More About Our Approach
            </Link>
          </div>
        </div>
      </section>

      {/* Our Pedagogy Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-yellow-100 text-purple-800 rounded-full text-sm font-bold mb-6">
              🧠 Our Pedagogy
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-purple-800 mb-4">The Learning Minds Approach</h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-purple-800 font-bold">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-purple-800 mb-2">Experiential Mind</h3>
                  <p className="text-gray-600">Learning through hands-on experiences and real-world exploration</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-purple-800 font-bold">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-purple-800 mb-2">Inquiring Mind</h3>
                  <p className="text-gray-600">Encouraging curiosity and critical thinking through questioning</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-purple-800 font-bold">3</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-purple-800 mb-2">Collaborative Mind</h3>
                  <p className="text-gray-600">Building social skills through teamwork and peer interaction</p>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <div className="relative inline-block">
                <div className="w-80 h-80 bg-gradient-to-br from-purple-800 to-purple-900 rounded-full flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="text-5xl font-bold mb-2">PenteMind</div>
                    <div className="text-lg">The Learning Minds</div>
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center">
                  <span className="text-purple-800 font-bold">🧠</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section - Mobile-First */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-purple-700 via-purple-800 to-purple-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center px-3 py-2 sm:px-4 sm:py-2 bg-yellow-400 text-purple-800 rounded-full text-xs sm:text-sm font-bold mb-4 sm:mb-6">
              💬 Our Happy Parents
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">What Parents Say About Us</h2>
            <p className="text-sm sm:text-base lg:text-lg text-white/90">Real experiences from our school community</p>
          </div>
          
          {/* Mobile-Optimized Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 mobile-card-shadow">
                <div className="flex items-center gap-1 mb-4">
                  {renderStars(testimonial.rating)}
                </div>
                <p className="text-white/90 mb-6 italic leading-relaxed text-sm sm:text-base">
                  "{testimonial.comment}"
                </p>
                <div className="flex items-center gap-3 sm:gap-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="text-white font-bold text-sm sm:text-base">{testimonial.name}</div>
                    <div className="text-white/70 text-xs sm:text-sm">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Mobile CTA */}
          <div className="text-center mt-8 sm:mt-12">
            <Link
              to="/admission"
              className="inline-block bg-yellow-400 text-purple-800 px-6 sm:px-8 py-3 rounded-full font-bold hover:bg-yellow-500 transition-all duration-300 text-sm sm:text-base transform hover:scale-105 active:scale-95"
            >
              Join Our Happy Community
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Section - Mobile-First */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-r from-yellow-400 to-yellow-300">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-purple-800 mb-3 sm:mb-4">Why Choose Kidzee Preschool?</h2>
            <p className="text-sm sm:text-base lg:text-lg text-purple-700">The smart choice for your child's bright future</p>
          </div>
          
          {/* Mobile-Optimized Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            <div className="text-center group">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 shadow-lg group-hover:scale-110 transition-all duration-300">
                <span className="text-2xl sm:text-3xl">🎯</span>
              </div>
              <h3 className="font-bold text-purple-800 text-sm sm:text-base mb-2">Proven Curriculum</h3>
              <p className="text-purple-700 text-xs sm:text-sm">Research-based learning approach</p>
            </div>
            
            <div className="text-center group">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 shadow-lg group-hover:scale-110 transition-all duration-300">
                <span className="text-2xl sm:text-3xl">👩‍🏫</span>
              </div>
              <h3 className="font-bold text-purple-800 text-sm sm:text-base mb-2">Expert Teachers</h3>
              <p className="text-purple-700 text-xs sm:text-sm">Qualified & caring educators</p>
            </div>
            
            <div className="text-center group">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 shadow-lg group-hover:scale-110 transition-all duration-300">
                <span className="text-2xl sm:text-3xl">🏫</span>
              </div>
              <h3 className="font-bold text-purple-800 text-sm sm:text-base mb-2">Safe Environment</h3>
              <p className="text-purple-700 text-xs sm:text-sm">Child-friendly facilities</p>
            </div>
            
            <div className="text-center group">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 shadow-lg group-hover:scale-110 transition-all duration-300">
                <span className="text-2xl sm:text-3xl">📱</span>
              </div>
              <h3 className="font-bold text-purple-800 text-sm sm:text-base mb-2">Parent Connect</h3>
              <p className="text-purple-700 text-xs sm:text-sm">Regular updates & communication</p>
            </div>
          </div>
          
          {/* Mobile CTA */}
          <div className="text-center mt-8 sm:mt-12">
            <Link
              to="/about"
              className="inline-block bg-purple-800 text-white px-6 sm:px-8 py-3 rounded-full font-bold hover:bg-purple-900 transition-all duration-300 text-sm sm:text-base transform hover:scale-105 active:scale-95"
            >
              Learn More About Us
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-bold mb-6">
              ❓ FAQs
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-purple-800 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600">Get answers to common questions about Kids School</p>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-4">
            {[
              {
                question: "What are the admission requirements?",
                answer: "We welcome children aged 2-10 years. Basic requirements include birth certificate, previous school records, and health documentation."
              },
              {
                question: "What are the school timings?",
                answer: "Our school operates from 8:00 AM to 3:00 PM, Monday through Friday. Extended care is available until 6:00 PM."
              },
              {
                question: "Do you provide transportation?",
                answer: "Yes, we offer safe school bus services covering major areas around the city with GPS tracking and trained drivers."
              },
              {
                question: "What is your teacher-to-student ratio?",
                answer: "We maintain a low teacher-to-student ratio of 1:8 for younger children and 1:12 for older children."
              },
              {
                question: "What makes your curriculum special?",
                answer: "Our curriculum follows the PenteMind approach, focusing on experiential, inquiring, and collaborative learning methods."
              }
            ].map((faq, index) => (
              <details key={index} className="bg-purple-50 rounded-xl p-6 border border-purple-100 hover:bg-purple-100 hover:shadow-lg transition-all duration-300 group">
                <summary className="text-purple-800 font-semibold text-lg cursor-pointer hover:text-purple-900 transition-colors duration-200 group-hover:scale-105 transform-gpu">
                  {faq.question}
                </summary>
                <p className="text-gray-600 mt-4 leading-relaxed">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-purple-100 to-yellow-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-purple-800 text-white rounded-full text-sm font-bold mb-6">
              📝 Blogs
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-purple-800 mb-4">Latest Insights & Tips</h2>
            <p className="text-lg text-gray-600">Expert advice for parents and educators</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <article key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group">
                <div className="aspect-[16/10] overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-xs font-bold">
                      {post.category}
                    </span>
                    <span className="text-gray-500 text-sm">{post.date}</span>
                  </div>
                  <h3 className="text-xl font-bold text-purple-800 mb-3 group-hover:text-purple-900 transition-colors duration-200">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">{post.excerpt}</p>
                  <button className="text-purple-800 font-semibold hover:text-purple-900 transition-colors duration-200">
                    Read More →
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-purple-700 via-purple-800 to-purple-900">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="bg-white/10 rounded-2xl p-12 border border-white/20 max-w-4xl mx-auto hover:bg-white/20 hover:border-white/40 hover:shadow-2xl hover:scale-105 transition-all duration-300 group">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 group-hover:text-yellow-400 transition-colors duration-200">
                Ready to Give Your Child the Best Start?
              </h2>
              <p className="text-xl text-white/90 mb-8 group-hover:text-white transition-colors duration-200 max-w-2xl mx-auto">
                Join hundreds of families who trust us with their children's foundational years. 
                Schedule a visit today and see the difference yourself.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/admission"
                  className="bg-yellow-400 text-purple-800 px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-bold hover:bg-yellow-300 hover:shadow-xl transition-all duration-300 shadow-lg transform hover:scale-105 active:scale-95 touch-manipulation min-h-[48px] w-full sm:w-auto text-center"
                >
                  Start Admission Process
                </Link>
                <Link
                  to="/contact"
                  className="border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-bold hover:bg-white hover:text-purple-800 hover:shadow-xl transition-all duration-300 transform hover:scale-105 active:scale-95 touch-manipulation min-h-[48px] w-full sm:w-auto text-center"
                >
                  Schedule a Visit
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;