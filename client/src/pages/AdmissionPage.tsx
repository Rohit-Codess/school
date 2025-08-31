import React, { useState } from 'react';

interface FormData {
  studentName: string;
  studentAge: string;
  parentName: string;
  contactNumber: string;
  email: string;
  address: string;
  grade: string;
}

const AdmissionPage: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    studentName: '',
    studentAge: '',
    parentName: '',
    contactNumber: '',
    email: '',
    address: '',
    grade: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const benefits = [
    {
      icon: '🏆',
      title: 'Award-Winning Education',
      description: 'Recognized as "Best Primary School" by Regional Education Authority'
    },
    {
      icon: '👨‍🏫',
      title: 'Expert Teachers',
      description: '25+ qualified educators with 15:1 student-teacher ratio'
    },
    {
      icon: '🎯',
      title: 'Individual Attention',
      description: 'Personalized learning plans for each child\'s unique needs'
    },
    {
      icon: '🌟',
      title: '98% Parent Satisfaction',
      description: 'Consistently high ratings from our parent community'
    },
    {
      icon: '🏢',
      title: 'Modern Facilities',
      description: 'Smart classrooms, science labs, library, and playground'
    },
    {
      icon: '🚌',
      title: 'Safe Transportation',
      description: 'Reliable school bus service with trained drivers and supervisors'
    }
  ];

  const successStories = [
    {
      quote: "My daughter's confidence has grown tremendously. She loves coming to school every day!",
      parent: "Mrs. Sharma",
      grade: "Grade 3 Parent"
    },
    {
      quote: "The teachers really care about each child's development. Excellent school!",
      parent: "Mr. Kumar", 
      grade: "Grade 2 Parent"
    },
    {
      quote: "Best decision we made for our son's education. Highly recommended!",
      parent: "Mrs. Patel",
      grade: "Grade 4 Parent"
    }
  ];

  const admissionBenefits = [
    "✓ Free school tour and consultation",
    "✓ No admission fees for early applications",
    "✓ Flexible payment plans available",
    "✓ Complimentary uniform and books for first month",
    "✓ Free trial classes for new students",
    "✓ Priority admission for siblings"
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Send data to backend
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center py-12 px-4">
        <div className="bg-gradient-to-br from-purple-700 to-purple-800 rounded-2xl p-12 shadow-xl text-center max-w-lg w-full text-white">
          <div className="w-24 h-24 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
            <svg className="w-12 h-12 text-purple-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-4xl font-bold mb-4">🎉 Welcome to Kids School Family!</h2>
          <p className="text-xl mb-6">
            Your application has been successfully submitted!
          </p>
          <div className="bg-white/10 rounded-lg p-6 mb-6">
            <h3 className="text-lg font-bold mb-3">What Happens Next?</h3>
            <div className="text-left space-y-2">
              <p>• We'll review your application within 24 hours</p>
              <p>• Our admission team will call you to schedule a school tour</p>
              <p>• You'll receive a confirmation email with next steps</p>
              <p>• We'll arrange a meet & greet with your child's future teacher</p>
            </div>
          </div>
          <p className="text-yellow-200 font-semibold">
            Get ready for an amazing educational journey! 🌟
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Encouraging */}
      <section className="bg-gradient-to-br from-purple-700 via-purple-800 to-purple-900 py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center px-6 py-3 bg-yellow-400 text-purple-800 rounded-full text-lg font-bold mb-6 shadow-lg">
            🎓 Join Our School Family - Limited Seats Available!
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Give Your Child the 
            <span className="text-yellow-400 block">Best Start in Life!</span>
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8 leading-relaxed">
            Join 500+ happy families who trust Kids School for quality education, 
            caring teachers, and a nurturing environment where every child thrives.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <div className="bg-white/10 backdrop-blur rounded-lg px-6 py-3">
              <span className="text-yellow-400 font-bold text-2xl">98%</span>
              <span className="text-white block">Parent Satisfaction</span>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-lg px-6 py-3">
              <span className="text-yellow-400 font-bold text-2xl">20+</span>
              <span className="text-white block">Years Experience</span>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-lg px-6 py-3">
              <span className="text-yellow-400 font-bold text-2xl">15:1</span>
              <span className="text-white block">Student-Teacher Ratio</span>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us - Compelling Reasons */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-purple-800 mb-4">Why Parents Choose Kids School</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Here's what makes us the preferred choice for quality education in our community
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-purple-800 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Parent Testimonials - Social Proof */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-purple-800 mb-4">What Parents Are Saying</h2>
            <p className="text-gray-600">Real feedback from our school community</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <div key={index} className="bg-purple-50 p-6 rounded-lg border-l-4 border-yellow-400">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">★</span>
                  ))}
                </div>
                <p className="text-gray-700 italic mb-4">"{story.quote}"</p>
                <div>
                  <div className="font-semibold text-purple-800">{story.parent}</div>
                  <div className="text-sm text-gray-600">{story.grade}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Admission Offers - Urgency */}
      <section className="py-16 bg-gradient-to-r from-yellow-400 to-yellow-500">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-purple-800 mb-6">🎊 Special Admission Offers 🎊</h2>
          <div className="bg-white rounded-2xl p-8 max-w-4xl mx-auto shadow-xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-bold text-purple-800 mb-4">Admission Benefits</h3>
                <div className="text-left space-y-2">
                  {admissionBenefits.map((benefit, index) => (
                    <div key={index} className="flex items-center text-gray-700">
                      <span className="text-green-500 mr-2">✓</span>
                      {benefit.slice(2)}
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-purple-100 rounded-lg p-6">
                <h3 className="text-xl font-bold text-purple-800 mb-4">⏰ Limited Time Offer</h3>
                <p className="text-purple-700 mb-4">Apply before March 31st and save:</p>
                <div className="text-2xl font-bold text-purple-800 mb-2">₹5,000 OFF</div>
                <p className="text-sm text-purple-600">First year admission fees</p>
                <div className="mt-4 bg-red-100 border border-red-300 rounded p-3">
                  <p className="text-red-600 font-semibold text-sm">⚡ Only 25 seats remaining!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form - Simplified & Encouraging */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-purple-800 mb-4">🚀 Start Your Child's Amazing Journey Today!</h2>
              <p className="text-xl text-gray-600 mb-6">
                Fill out this simple form and we'll contact you within 24 hours to schedule your free school tour.
              </p>
              <div className="bg-green-100 border border-green-300 rounded-lg p-4 max-w-md mx-auto">
                <p className="text-green-700 font-semibold">✨ Application takes only 2 minutes!</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-xl border-2 border-purple-100">
              <div className="p-8">
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Student Name */}
                  <div className="md:col-span-2">
                    <label className="block text-purple-800 text-sm font-semibold mb-2" htmlFor="studentName">
                      Student's Full Name *
                    </label>
                    <input
                      className="w-full px-4 py-3 border border-purple-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 transition-colors duration-200"
                      id="studentName"
                      name="studentName"
                      type="text"
                      placeholder="Enter your child's full name"
                      value={formData.studentName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  {/* Student Age */}
                  <div>
                    <label className="block text-purple-800 text-sm font-semibold mb-2" htmlFor="studentAge">
                      Child's Age *
                    </label>
                    <input
                      className="w-full px-4 py-3 border border-purple-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 transition-colors duration-200"
                      id="studentAge"
                      name="studentAge"
                      type="number"
                      placeholder="Age"
                      min="2"
                      max="12"
                      value={formData.studentAge}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  {/* Grade */}
                  <div>
                    <label className="block text-purple-800 text-sm font-semibold mb-2" htmlFor="grade">
                      Preferred Grade Level *
                    </label>
                    <select
                      className="w-full px-4 py-3 border border-purple-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 transition-colors duration-200"
                      id="grade"
                      name="grade"
                      value={formData.grade}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="">Select preferred grade</option>
                      <option value="nursery">Nursery (2-3 years)</option>
                      <option value="pre-kg">Pre-KG (3-4 years)</option>
                      <option value="lkg">LKG (4-5 years)</option>
                      <option value="ukg">UKG (5-6 years)</option>
                      <option value="grade1">Grade 1 (6-7 years)</option>
                      <option value="grade2">Grade 2 (7-8 years)</option>
                      <option value="grade3">Grade 3 (8-9 years)</option>
                      <option value="grade4">Grade 4 (9-10 years)</option>
                      <option value="grade5">Grade 5 (10-11 years)</option>
                    </select>
                  </div>

                  {/* Parent Name */}
                  <div>
                    <label className="block text-purple-800 text-sm font-semibold mb-2" htmlFor="parentName">
                      Parent/Guardian Name *
                    </label>
                    <input
                      className="w-full px-4 py-3 border border-purple-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 transition-colors duration-200"
                      id="parentName"
                      name="parentName"
                      type="text"
                      placeholder="Your full name"
                      value={formData.parentName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  {/* Contact Number */}
                  <div>
                    <label className="block text-purple-800 text-sm font-semibold mb-2" htmlFor="contactNumber">
                      WhatsApp/Phone Number *
                    </label>
                    <input
                      className="w-full px-4 py-3 border border-purple-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 transition-colors duration-200"
                      id="contactNumber"
                      name="contactNumber"
                      type="tel"
                      placeholder="+91 98765 43210"
                      value={formData.contactNumber}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  {/* Email */}
                  <div className="md:col-span-2">
                    <label className="block text-purple-800 text-sm font-semibold mb-2" htmlFor="email">
                      Email Address *
                    </label>
                    <input
                      className="w-full px-4 py-3 border border-purple-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 transition-colors duration-200"
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  {/* Address */}
                  <div className="md:col-span-2">
                    <label className="block text-purple-800 text-sm font-semibold mb-2" htmlFor="address">
                      Home Address *
                    </label>
                    <textarea
                      className="w-full px-4 py-3 border border-purple-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 transition-colors duration-200 h-24 resize-none"
                      id="address"
                      name="address"
                      placeholder="Enter your complete address"
                      value={formData.address}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-purple-200">
                  <div className="text-center">
                    <button
                      type="submit"
                      className="bg-gradient-to-r from-purple-700 to-purple-800 text-white font-bold py-4 px-8 sm:px-12 rounded-full hover:from-purple-800 hover:to-purple-900 hover:shadow-xl transition-all duration-300 shadow-lg text-base sm:text-lg transform hover:scale-105 active:scale-95 touch-manipulation min-h-[48px] w-full sm:w-auto"
                    >
                      🎯 Apply Now - Secure Your Child's Future!
                    </button>
                    <p className="text-sm text-gray-600 mt-4">
                      By applying, you'll get a <strong>free school tour</strong> and consultation with our education experts.
                    </p>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Final Encouragement */}
      <section className="py-16 bg-gradient-to-r from-purple-700 to-purple-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">🌟 Don't Wait - Your Child's Future Starts Here! 🌟</h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Join hundreds of parents who've already given their children the gift of excellent education. 
            Apply today and watch your child flourish in our caring, nurturing environment.
          </p>
          <div className="bg-white/10 backdrop-blur rounded-lg p-6 max-w-md mx-auto">
            <p className="text-yellow-400 font-bold text-lg mb-2">📞 Questions? Call Now!</p>
            <p className="text-white text-2xl font-bold">(555) 123-KIDS</p>
            <p className="text-white/80">Available 9 AM - 6 PM, Mon-Sat</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AdmissionPage;
