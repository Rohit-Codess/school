import React from 'react';
import { Link } from 'react-router-dom';

const ProgramsPage: React.FC = () => {
  const programs = [
    {
      id: 1,
      name: 'Nursery Program',
      age: '2-3 Years',
      duration: 'Full Day / Half Day',
      image: '/images/Home/category/1.jpg',
      description: 'A gentle introduction to school life with play-based learning activities.',
      features: [
        'Play-based learning approach',
        'Toilet training support',
        'Social skill development',
        'Basic motor skills',
        'Language development',
        'Creative arts and crafts'
      ],
      schedule: {
        fullDay: '8:00 AM - 5:00 PM',
        halfDay: '8:00 AM - 12:00 PM'
      },
      price: {
        fullDay: '₹8,000/month',
        halfDay: '₹5,000/month'
      }
    },
    {
      id: 2,
      name: 'Pre-KG Program',
      age: '3-4 Years',
      duration: 'Full Day / Half Day',
      image: '/images/Home/category/2.jpg',
      description: 'Building foundational skills through structured learning and creative play.',
      features: [
        'Pre-reading and writing skills',
        'Number recognition',
        'Shape and color identification',
        'Group activities',
        'Indoor and outdoor play',
        'Music and movement'
      ],
      schedule: {
        fullDay: '8:00 AM - 5:00 PM',
        halfDay: '8:00 AM - 1:00 PM'
      },
      price: {
        fullDay: '₹9,000/month',
        halfDay: '₹6,000/month'
      }
    },
    {
      id: 3,
      name: 'LKG Program',
      age: '4-5 Years',
      duration: 'Full Day',
      image: '/images/Home/category/3.jpg',
      description: 'Comprehensive curriculum focusing on academic readiness and character building.',
      features: [
        'Phonics and reading',
        'Basic mathematics',
        'Environmental science',
        'Computer basics',
        'Physical education',
        'Moral education'
      ],
      schedule: {
        fullDay: '8:00 AM - 3:30 PM'
      },
      price: {
        fullDay: '₹10,000/month'
      }
    },
    {
      id: 4,
      name: 'UKG Program',
      age: '5-6 Years',
      duration: 'Full Day',
      image: '/images/Home/category/4.jpg',
      description: 'Advanced preparation for primary school with comprehensive skill development.',
      features: [
        'Advanced reading and writing',
        'Mathematical concepts',
        'Science experiments',
        'Computer skills',
        'Sports and games',
        'Leadership activities'
      ],
      schedule: {
        fullDay: '8:00 AM - 3:30 PM'
      },
      price: {
        fullDay: '₹11,000/month'
      }
    },
    {
      id: 5,
      name: 'Grade 1-2 Program',
      age: '6-8 Years',
      duration: 'Full Day',
      image: '/images/Home/category/5.jpg',
      description: 'Formal education with CBSE curriculum and holistic development approach.',
      features: [
        'CBSE curriculum',
        'English and Hindi languages',
        'Mathematics and science',
        'Social studies',
        'Arts and crafts',
        'Extra-curricular activities'
      ],
      schedule: {
        fullDay: '8:00 AM - 3:30 PM'
      },
      price: {
        fullDay: '₹12,000/month'
      }
    },
    {
      id: 6,
      name: 'Grade 3-5 Program',
      age: '8-11 Years',
      duration: 'Full Day',
      image: '/images/Home/category/6.jpg',
      description: 'Advanced primary education with focus on critical thinking and creativity.',
      features: [
        'Advanced CBSE curriculum',
        'Subject specialists',
        'Project-based learning',
        'Science laboratory',
        'Computer programming',
        'Leadership development'
      ],
      schedule: {
        fullDay: '8:00 AM - 4:00 PM'
      },
      price: {
        fullDay: '₹13,000/month'
      }
    }
  ];

  const specialPrograms = [
    {
      name: 'Summer Camp',
      description: 'Fun-filled summer activities including arts, sports, and educational trips',
      duration: '4 weeks (May-June)',
      icon: '☀️'
    },
    {
      name: 'After School Care',
      description: 'Extended care with homework help, snacks, and recreational activities',
      duration: '3:30 PM - 6:00 PM',
      icon: '🏠'
    },
    {
      name: 'Weekend Activities',
      description: 'Special workshops, sports, and family events on weekends',
      duration: 'Saturdays 9:00 AM - 12:00 PM',
      icon: '🎨'
    },
    {
      name: 'Holiday Programs',
      description: 'Engaging activities during school holidays to keep learning fun',
      duration: 'During school breaks',
      icon: '🎉'
    }
  ];

  const facilities = [
    {
      name: 'Smart Classrooms',
      description: 'Interactive digital learning environment',
      icon: '💻'
    },
    {
      name: 'Science Laboratory',
      description: 'Hands-on experiments and discovery',
      icon: '🔬'
    },
    {
      name: 'Library',
      description: 'Extensive collection of books and resources',
      icon: '📚'
    },
    {
      name: 'Playground',
      description: 'Safe outdoor play area with modern equipment',
      icon: '🏃'
    },
    {
      name: 'Art Studio',
      description: 'Creative space for artistic expression',
      icon: '🎨'
    },
    {
      name: 'Music Room',
      description: 'Musical instruments and sound system',
      icon: '🎵'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-700 to-purple-800 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our Programs
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Comprehensive educational programs designed to nurture young minds from nursery through primary grades. 
            Each program is carefully crafted to meet the developmental needs of every age group.
          </p>
        </div>
      </section>

      {/* Programs Overview */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-purple-800 mb-4">Choose the Right Program</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From nurturing toddlers to preparing students for higher education, 
              we offer age-appropriate programs that foster growth and learning.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program) => (
              <div key={program.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={program.image}
                    alt={program.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-yellow-400 text-purple-800 px-3 py-1 rounded-full text-sm font-bold">
                    {program.age}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-purple-800 mb-2">{program.name}</h3>
                  <p className="text-gray-600 mb-4">{program.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-purple-700 mb-2">Program Features:</h4>
                    <div className="grid grid-cols-1 gap-1">
                      {program.features.slice(0, 3).map((feature, index) => (
                        <div key={index} className="flex items-center text-sm text-gray-600">
                          <span className="text-yellow-400 mr-2">✓</span>
                          {feature}
                        </div>
                      ))}
                      {program.features.length > 3 && (
                        <div className="text-sm text-purple-600 font-medium">
                          +{program.features.length - 3} more features
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="border-t pt-4">
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-sm text-gray-600">Schedule:</span>
                      <span className="text-sm font-medium text-purple-800">
                        {program.schedule.fullDay || program.schedule.halfDay}
                      </span>
                    </div>
                    
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-sm text-gray-600">Starting from:</span>
                      <span className="text-lg font-bold text-purple-800">
                        {program.price.halfDay || program.price.fullDay}
                      </span>
                    </div>

                    <Link
                      to="/admission"
                      className="w-full bg-yellow-400 text-purple-800 py-2 px-4 rounded-lg font-bold text-center block hover:bg-yellow-300 transition-colors"
                    >
                      Apply Now
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Programs */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-purple-800 mb-4">Special Programs</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Additional programs to enhance your child's learning experience beyond regular school hours.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {specialPrograms.map((program, index) => (
              <div key={index} className="bg-purple-50 p-6 rounded-lg text-center">
                <div className="text-4xl mb-4">{program.icon}</div>
                <h3 className="text-lg font-bold text-purple-800 mb-2">{program.name}</h3>
                <p className="text-gray-600 mb-3 text-sm">{program.description}</p>
                <div className="text-sm font-medium text-purple-700">{program.duration}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-purple-800 mb-4">Our Facilities</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Modern facilities and resources to support comprehensive learning and development.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {facilities.map((facility, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-md text-center">
                <div className="text-3xl mb-3">{facility.icon}</div>
                <h3 className="font-semibold text-purple-800 mb-2 text-sm">{facility.name}</h3>
                <p className="text-xs text-gray-600">{facility.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Admission Process */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-purple-800 mb-4">How to Apply</h2>
              <p className="text-gray-600">Simple steps to enroll your child in our programs</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { step: '1', title: 'School Visit', description: 'Schedule a visit to explore our campus and meet our teachers' },
                { step: '2', title: 'Application', description: 'Fill out the admission application form with required documents' },
                { step: '3', title: 'Assessment', description: 'Child interaction session to understand their needs and readiness' },
                { step: '4', title: 'Enrollment', description: 'Complete the enrollment process and join our school family' }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="bg-purple-800 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-bold text-purple-800 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link
                to="/admission"
                className="bg-yellow-400 text-purple-800 px-8 py-3 rounded-lg text-lg font-bold hover:bg-yellow-300 transition-colors inline-block"
              >
                Start Application Process
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-purple-800 mb-4">Frequently Asked Questions</h2>
              <p className="text-gray-600">Common questions about our programs</p>
            </div>

            <div className="space-y-6">
              {[
                {
                  question: 'What is the student-teacher ratio?',
                  answer: 'We maintain a low student-teacher ratio of 15:1 to ensure personalized attention for each child.'
                },
                {
                  question: 'Do you provide transportation?',
                  answer: 'Yes, we offer safe and reliable school bus service covering major areas of the city.'
                },
                {
                  question: 'What are the school timings?',
                  answer: 'School hours are from 8:00 AM to 3:30 PM, with extended care available until 6:00 PM.'
                },
                {
                  question: 'Do you follow a specific curriculum?',
                  answer: 'We follow the CBSE curriculum enhanced with our own holistic development programs.'
                },
                {
                  question: 'What safety measures do you have?',
                  answer: 'We have CCTV surveillance, trained security staff, first aid facilities, and strict pickup/drop policies.'
                }
              ].map((faq, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-lg font-bold text-purple-800 mb-2">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-purple-700 to-purple-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Give Your Child the Best Start?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join hundreds of families who trust Kids School for their child's education and development.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/admission"
              className="bg-yellow-400 text-purple-800 px-8 py-3 rounded-lg text-lg font-bold hover:bg-yellow-300 transition-colors"
            >
              Apply Now
            </Link>
            <Link
              to="/contact"
              className="border-2 border-white text-white px-8 py-3 rounded-lg text-lg font-bold hover:bg-white hover:text-purple-800 transition-colors"
            >
              Schedule a Visit
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProgramsPage;