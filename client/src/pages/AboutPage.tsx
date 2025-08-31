import React from 'react';
import { Link } from 'react-router-dom';

const AboutPage: React.FC = () => {
  const keyFacts = [
    {
      number: '20+',
      label: 'Years of Excellence',
      description: 'Serving the community since 2004'
    },
    {
      number: '500+',
      label: 'Happy Students',
      description: 'Currently enrolled across all grades'
    },
    {
      number: '25+',
      label: 'Qualified Teachers',
      description: 'Experienced and certified educators'
    },
    {
      number: '98%',
      label: 'Parent Satisfaction',
      description: 'Based on annual surveys'
    }
  ];

  const coreValues = [
    {
      title: 'Quality Education',
      description: 'We provide excellent academic foundation with modern teaching methods',
      icon: '📚'
    },
    {
      title: 'Caring Environment',
      description: 'Every child feels safe, valued, and supported in our nurturing atmosphere',
      icon: '💝'
    },
    {
      title: 'Individual Attention',
      description: 'Small class sizes ensure personalized learning for each student',
      icon: '👥'
    },
    {
      title: 'Holistic Development',
      description: 'We focus on academic, social, emotional, and physical growth',
      icon: '🌱'
    }
  ];

  const simpleTimeline = [
    { year: '2004', event: 'Kids School founded with vision for quality education' },
    { year: '2008', event: 'Received state recognition for educational excellence' },
    { year: '2016', event: 'Introduced smart classrooms and digital learning' },
    { year: '2024', event: 'Awarded "Best Primary School" by education authorities' }
  ];

  const testimonials = [
    {
      name: 'Priya Sharma',
      role: 'Parent of Grade 3 student',
      quote: 'My son loves going to school every day. The teachers are caring and the learning environment is wonderful.',
      rating: 5
    },
    {
      name: 'Rajesh Kumar', 
      role: 'Parent of Grade 2 student',
      quote: 'The individual attention each child receives is remarkable. My daughter has grown tremendously.',
      rating: 5
    },
    {
      name: 'Anita Gupta',
      role: 'Parent of Grade 4 student', 
      quote: 'Excellent school with qualified teachers who truly care about student development.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Simple and Clear */}
      <section className="bg-gradient-to-r from-purple-700 to-purple-800 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About Kids School
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Since 2004, we have been dedicated to providing quality education in a nurturing environment 
            where every child can grow, learn, and thrive.
          </p>
        </div>
      </section>

      {/* Key Facts - Quick Overview */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-purple-800 mb-4">At a Glance</h2>
            <p className="text-gray-600">Quick facts about our school</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {keyFacts.map((fact, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-lg shadow-md">
                <div className="text-3xl font-bold text-purple-800 mb-2">{fact.number}</div>
                <div className="text-lg font-semibold text-purple-700 mb-1">{fact.label}</div>
                <div className="text-sm text-gray-600">{fact.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story - Simple and Direct */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-purple-800 mb-4">Our Story</h2>
              <p className="text-gray-600">How Kids School began and where we're going</p>
            </div>
            
            <div className="bg-purple-50 rounded-lg p-8 mb-12">
              <h3 className="text-2xl font-bold text-purple-800 mb-4">Our Mission</h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                To provide every child with a strong foundation for lifelong learning in a safe, 
                caring, and stimulating environment that celebrates diversity and encourages curiosity.
              </p>
              
              <h3 className="text-2xl font-bold text-purple-800 mb-4">Our Vision</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                To be the leading primary school that nurtures confident, creative, and caring individuals 
                who are prepared to succeed in an ever-changing world.
              </p>
            </div>

            {/* Simple Timeline */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-purple-800 mb-8 text-center">Our Journey</h3>
              <div className="space-y-6">
                {simpleTimeline.map((item, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                    <div className="bg-purple-800 text-white px-3 py-1 rounded-full text-sm font-bold">
                      {item.year}
                    </div>
                    <p className="text-gray-700 flex-1">{item.event}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values - What We Stand For */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-purple-800 mb-4">What We Believe In</h2>
            <p className="text-gray-600">The principles that guide everything we do</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {coreValues.map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-start gap-4">
                  <div className="text-3xl">{value.icon}</div>
                  <div>
                    <h3 className="text-xl font-bold text-purple-800 mb-2">{value.title}</h3>
                    <p className="text-gray-700">{value.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Parents Say - Simple Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-purple-800 mb-4">What Parents Say</h2>
            <p className="text-gray-600">Hear from our school community</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-purple-50 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">★</span>
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.quote}"</p>
                <div>
                  <div className="font-semibold text-purple-800">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action - Simple and Clear */}
      <section className="py-16 bg-gradient-to-r from-purple-700 to-purple-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Join Our School Family?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Give your child the best start in life with quality education and caring teachers.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/admission"
              className="bg-yellow-400 text-purple-800 px-8 py-3 rounded-lg text-lg font-bold hover:bg-yellow-300 transition-colors"
            >
              Apply for Admission
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

export default AboutPage;
