import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const AboutPage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('history');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const milestones = [
    {
      year: '2004',
      title: 'Foundation Year',
      description: 'Kids School was established with a vision to provide quality education in a nurturing environment.',
      icon: '🏫'
    },
    {
      year: '2008',
      title: 'First Accreditation',
      description: 'Received recognition from the State Education Board for excellence in early childhood education.',
      icon: '🏆'
    },
    {
      year: '2012',
      title: 'Infrastructure Expansion',
      description: 'Added modern science labs, computer center, and expanded playground facilities.',
      icon: '🔬'
    },
    {
      year: '2016',
      title: 'Digital Learning Initiative',
      description: 'Introduced smart classrooms and digital learning tools to enhance the education experience.',
      icon: '💻'
    },
    {
      year: '2020',
      title: 'Online Learning Platform',
      description: 'Successfully launched comprehensive online learning platform during the pandemic.',
      icon: '🌐'
    },
    {
      year: '2024',
      title: 'Excellence Award',
      description: 'Recognized as "Best Primary School" by the Regional Education Authority.',
      icon: '🥇'
    }
  ];

  const reviews = [
    {
      id: 1,
      name: 'Priya Sharma',
      role: 'Parent of Arjun (Grade 3)',
      rating: 5,
      comment: 'Kids School has been amazing for my son. The teachers are so caring and the curriculum is well-balanced. Arjun loves going to school every day!',
      image: '/images/Home/category/1.jpg',
      date: 'March 2024'
    },
    {
      id: 2,
      name: 'Rajesh Kumar',
      role: 'Parent of Shreya (Grade 2)',
      rating: 5,
      comment: 'The individual attention each child receives here is remarkable. My daughter has grown so much in confidence and academic skills.',
      image: '/images/Home/category/2.jpg',
      date: 'February 2024'
    },
    {
      id: 3,
      name: 'Anita Gupta',
      role: 'Parent of Rohan (Grade 4)',
      rating: 5,
      comment: 'Excellent school with modern facilities. The teachers are highly qualified and truly care about each student\'s development.',
      image: '/images/Home/category/3.jpg',
      date: 'January 2024'
    },
    {
      id: 4,
      name: 'Vikram Singh',
      role: 'Parent of Kavya (Grade 1)',
      rating: 5,
      comment: 'The transition from home to school was so smooth thanks to the caring environment at Kids School. Highly recommended!',
      image: '/images/Home/category/4.jpg',
      date: 'December 2023'
    },
    {
      id: 5,
      name: 'Meera Patel',
      role: 'Parent of Aarav (Grade 5)',
      rating: 5,
      comment: 'My son has been here for 3 years and I\'ve seen tremendous growth in his personality and academics. Great school!',
      image: '/images/Home/category/5.jpg',
      date: 'November 2023'
    },
    {
      id: 6,
      name: 'Suresh Reddy',
      role: 'Parent of Ishita (Grade 2)',
      rating: 5,
      comment: 'The holistic approach to education here is what sets Kids School apart. Arts, sports, and academics - everything is balanced perfectly.',
      image: '/images/Home/category/6.jpg',
      date: 'October 2023'
    }
  ];

  const achievements = [
    {
      title: '500+ Happy Students',
      description: 'Currently educating over 500 students from diverse backgrounds',
      icon: '👥'
    },
    {
      title: '98% Parent Satisfaction',
      description: 'Consistently high satisfaction rates from our parent community',
      icon: '😊'
    },
    {
      title: '25+ Qualified Teachers',
      description: 'Experienced and certified educators passionate about teaching',
      icon: '👩‍🏫'
    },
    {
      title: '15+ Awards',
      description: 'Recognition for excellence in education and student development',
      icon: '🏅'
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span
        key={index}
        className={`text-lg ${index < rating ? 'text-yellow-400' : 'text-gray-300'}`}
      >
        ★
      </span>
    ));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-purple-700 to-pink-600">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-gradient-to-br from-purple-600 via-purple-700 to-pink-600 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-yellow-400 rounded-full opacity-20 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-pink-400 rounded-full opacity-15 blur-3xl animate-bounce"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className={`text-center transition-all duration-1000 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <div className="inline-flex items-center px-4 py-2 bg-yellow-400 text-purple-800 rounded-full text-sm font-semibold mb-6">
              📚 About Kids School
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Our Story of 
              <span className="text-yellow-400 relative block md:inline">
                Educational Excellence
                <div className="absolute -bottom-2 left-0 w-full h-3 bg-yellow-400 opacity-30 rounded-lg"></div>
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
              For over two decades, Kids School has been nurturing young minds and shaping the future 
              leaders of tomorrow through innovative education and holistic development.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Link
                to="/admission"
                className="inline-flex items-center justify-center bg-yellow-400 text-purple-800 px-4 sm:px-8 py-2.5 sm:py-4 rounded-full text-sm sm:text-lg font-bold hover:bg-yellow-300 hover:shadow-xl transform hover:scale-105 transition-all duration-300 shadow-lg"
              >
                Join Our School
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center border-2 border-white text-white px-4 sm:px-8 py-2.5 sm:py-4 rounded-full text-sm sm:text-lg font-bold hover:bg-white hover:text-purple-700 transition-all duration-300"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="py-8 bg-gradient-to-r from-purple-50 to-pink-50 border-b border-purple-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex justify-center">
            <div className="bg-purple-100/50 backdrop-blur-sm rounded-lg p-1 inline-flex border border-purple-200">
              <button
                onClick={() => setActiveTab('history')}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === 'history'
                    ? 'bg-purple-600 text-white shadow-lg'
                    : 'text-purple-600 hover:text-purple-800 hover:bg-purple-50'
                }`}
              >
                Our History
              </button>
              <button
                onClick={() => setActiveTab('reviews')}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === 'reviews'
                    ? 'bg-purple-600 text-white shadow-lg'
                    : 'text-purple-600 hover:text-purple-800 hover:bg-purple-50'
                }`}
              >
                Parent Reviews
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Content based on active tab */}
      {activeTab === 'history' && (
        <>
          {/* History Timeline */}
          <section className="py-16 md:py-20 bg-gradient-to-br from-purple-50 to-pink-50">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-purple-800 mb-4">Our Journey Through Time</h2>
                <p className="text-lg text-purple-700 max-w-2xl mx-auto">
                  From humble beginnings to becoming a leading educational institution, 
                  here's how Kids School has evolved over the years.
                </p>
              </div>

              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-purple-300 h-full hidden md:block"></div>

                <div className="space-y-12 md:space-y-16">
                  {milestones.map((milestone, index) => (
                    <div
                      key={milestone.year}
                      className={`flex flex-col md:flex-row items-center gap-8 ${
                        index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                      }`}
                    >
                      {/* Content */}
                      <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                        <div className="bg-white rounded-2xl shadow-lg p-8 border-2 border-purple-100 hover:shadow-xl hover:border-purple-200 transition-all duration-300">
                          <div className={`flex items-center gap-3 mb-4 ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'} justify-center`}>
                            <span className="text-3xl">{milestone.icon}</span>
                            <h3 className="text-2xl font-bold text-purple-800">{milestone.title}</h3>
                          </div>
                          <p className="text-purple-700 leading-relaxed">{milestone.description}</p>
                        </div>
                      </div>

                      {/* Timeline Node */}
                      <div className="relative">
                        <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                          {milestone.year.slice(-2)}
                        </div>
                        <div className="absolute -top-2 -left-2 w-20 h-20 bg-purple-300 rounded-full opacity-30 animate-ping"></div>
                      </div>

                      {/* Spacer for alternating layout */}
                      <div className="w-full md:w-5/12"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Achievements Section */}
          <section className="py-16 md:py-20 bg-gradient-to-br from-yellow-400 via-orange-400 to-pink-400">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Achievements</h2>
                <p className="text-lg text-white/90">Milestones that showcase our commitment to excellence</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {achievements.map((achievement, index) => (
                  <div
                    key={index}
                    className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-white/50"
                  >
                    <div className="text-4xl mb-4">{achievement.icon}</div>
                    <h3 className="text-xl font-bold text-purple-800 mb-3">{achievement.title}</h3>
                    <p className="text-purple-700">{achievement.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </>
      )}

      {activeTab === 'reviews' && (
        <>
          {/* Reviews Section */}
          <section className="py-16 md:py-20 bg-gradient-to-br from-purple-50 to-pink-50">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-purple-800 mb-4">What Parents Say</h2>
                <p className="text-lg text-purple-700 max-w-2xl mx-auto">
                  Hear from our parent community about their experience with Kids School. 
                  Their trust and satisfaction is our greatest achievement.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {reviews.map((review, index) => (
                  <div
                    key={review.id}
                    className="bg-white rounded-2xl shadow-lg border-2 border-purple-100 p-8 hover:shadow-xl hover:border-purple-200 transition-all duration-300 transform hover:-translate-y-2"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {/* Rating */}
                    <div className="flex items-center gap-2 mb-4">
                      {renderStars(review.rating)}
                      <span className="text-sm text-purple-500 ml-2">{review.date}</span>
                    </div>

                    {/* Review Text */}
                    <p className="text-purple-700 mb-6 leading-relaxed italic">
                      "{review.comment}"
                    </p>

                    {/* Reviewer Info */}
                    <div className="flex items-center gap-4 pt-4 border-t border-purple-100">
                      <div className="w-12 h-12 rounded-full overflow-hidden bg-purple-100">
                        <img
                          src={review.image}
                          alt={review.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-semibold text-purple-800">{review.name}</h4>
                        <p className="text-sm text-purple-600">{review.role}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Overall Rating */}
              <div className="mt-16 text-center">
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 inline-block border-2 border-purple-200 shadow-xl">
                  <div className="flex items-center justify-center gap-4 mb-4">
                    <span className="text-4xl font-bold text-purple-600">4.9</span>
                    <div>
                      <div className="flex items-center gap-1">
                        {renderStars(5)}
                      </div>
                      <p className="text-sm text-purple-600 mt-1">Based on 150+ reviews</p>
                    </div>
                  </div>
                  <p className="text-purple-700 font-semibold">Excellent Rating from Our Parent Community</p>
                </div>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="py-16 md:py-20 bg-gradient-to-br from-purple-600 via-purple-700 to-pink-600">
            <div className="container mx-auto px-4 md:px-6">
              <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-12 text-center shadow-xl border-2 border-white/50">
                <h2 className="text-3xl md:text-4xl font-bold text-purple-800 mb-4">Join Our Growing Family</h2>
                <p className="text-xl text-purple-700 mb-8 opacity-90">
                  Experience the difference that quality education and caring teachers can make in your child's life.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                  <Link
                    to="/admission"
                    className="inline-flex items-center justify-center bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 sm:px-8 py-2.5 sm:py-4 rounded-full text-sm sm:text-lg font-bold hover:from-purple-700 hover:to-pink-700 transform hover:scale-105 transition-all duration-300 shadow-lg"
                  >
                    Start Admission Process
                  </Link>
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center border-2 border-purple-600 text-purple-600 px-4 sm:px-8 py-2.5 sm:py-4 rounded-full text-sm sm:text-lg font-bold hover:bg-purple-50 transition-all duration-300"
                  >
                    Schedule a Visit
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </>
      )}
    </div>
  );
};

export default AboutPage;
