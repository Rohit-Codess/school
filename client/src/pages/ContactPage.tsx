import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    inquiryType: 'general'
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
      inquiryType: 'general'
    });
  };

  const contactInfo = [
    {
      icon: '📍',
      title: 'Visit Us',
      details: ['Near Ranchi University', 'Ranchi, Jharkhand 834008', 'India'],
      color: 'bg-blue-100 text-blue-600'
    },
    {
      icon: '📞',
      title: 'Call Us',
      details: ['+91 651 234 5678', '+91 651 234 5679', 'Mon-Fri: 8:00 AM - 6:00 PM'],
      color: 'bg-green-100 text-green-600'
    },
    {
      icon: '✉️',
      title: 'Email Us',
      details: ['info@kidsschool.edu.in', 'admission@kidsschool.edu.in', 'support@kidsschool.edu.in'],
      color: 'bg-purple-100 text-purple-600'
    },
    {
      icon: '⏰',
      title: 'Office Hours',
      details: ['Monday - Friday: 8:00 AM - 6:00 PM', 'Saturday: 9:00 AM - 4:00 PM', 'Sunday: Closed'],
      color: 'bg-orange-100 text-orange-600'
    }
  ];

  const departments = [
    { name: 'Admissions', phone: '+91 651 234 5678', email: 'admission@kidsschool.edu.in' },
    { name: 'Academic Affairs', phone: '+91 651 234 5679', email: 'academic@kidsschool.edu.in' },
    { name: 'Student Support', phone: '+91 651 234 5680', email: 'support@kidsschool.edu.in' },
    { name: 'Transport', phone: '+91 651 234 5681', email: 'transport@kidsschool.edu.in' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-700 via-purple-800 to-purple-900">
      {/* Hero Section */}
      <section className="relative py-12 md:py-20 bg-gradient-to-br from-purple-700 via-purple-800 to-purple-900 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-yellow-400 rounded-full opacity-20"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-yellow-300 rounded-full opacity-15"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center px-3 sm:px-4 py-2 bg-yellow-400 text-purple-800 rounded-full text-xs sm:text-sm font-bold mb-4 sm:mb-6">
              📞 Get In Touch
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
              Contact 
              <span className="text-yellow-400 relative block sm:inline">
                Kids School
                <div className="absolute -bottom-1 sm:-bottom-2 left-0 w-full h-2 sm:h-3 bg-yellow-400 opacity-30 rounded-lg"></div>
              </span>
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl text-white/90 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
              We're here to help! Reach out to us for admissions, inquiries, or any questions about our programs. 
              Our dedicated team is ready to assist you.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Link
                to="/admission"
                className="inline-flex items-center justify-center bg-yellow-400 text-purple-800 px-6 sm:px-8 py-3 sm:py-4 rounded-full text-sm sm:text-lg font-bold hover:bg-yellow-300 hover:shadow-xl transition-all duration-300 shadow-lg transform hover:scale-105 active:scale-95 touch-manipulation min-h-[48px]"
              >
                Start Admission
              </Link>
              <a
                href="#contact-form"
                className="inline-flex items-center justify-center border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-sm sm:text-lg font-bold hover:bg-white hover:text-purple-800 hover:shadow-xl transition-all duration-300 transform hover:scale-105 active:scale-95 touch-manipulation min-h-[48px]"
              >
                Send Message
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-purple-800 mb-4">How to Reach Us</h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              Multiple ways to connect with us. Choose what works best for you.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg border-2 border-purple-100 p-6 md:p-8 text-center hover:border-yellow-400 hover:shadow-2xl hover:-translate-y-3 hover:scale-105 transition-all duration-300 group cursor-pointer"
              >
                <div className={`w-16 h-16 ${info.color} rounded-full flex items-center justify-center mx-auto mb-4 text-2xl group-hover:scale-125 group-hover:rotate-12 transition-all duration-300`}>
                  {info.icon}
                </div>
                <h3 className="text-lg md:text-xl font-bold text-purple-800 mb-4 group-hover:text-purple-900 transition-colors duration-200">{info.title}</h3>
                <div className="space-y-2">
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-sm md:text-base text-gray-600 group-hover:text-gray-700 transition-colors duration-200">{detail}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section id="contact-form" className="py-12 md:py-20 bg-gradient-to-r from-purple-100 to-yellow-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 border-2 border-purple-100">
              <h3 className="text-2xl md:text-3xl font-bold text-purple-800 mb-6">Send Us a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-purple-800 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-purple-200 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 transition-colors duration-200"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-purple-800 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-purple-200 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 transition-colors duration-200"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-purple-800 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-purple-200 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 transition-colors duration-200"
                      placeholder="Enter your phone number"
                    />
                  </div>
                  <div>
                    <label htmlFor="inquiryType" className="block text-sm font-semibold text-purple-800 mb-2">
                      Inquiry Type
                    </label>
                    <select
                      id="inquiryType"
                      name="inquiryType"
                      value={formData.inquiryType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-purple-200 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 transition-colors duration-200"
                    >
                      <option value="general">General Inquiry</option>
                      <option value="admission">Admission</option>
                      <option value="academic">Academic Programs</option>
                      <option value="facilities">Facilities</option>
                      <option value="transport">Transportation</option>
                      <option value="fees">Fees & Payment</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-purple-800 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-purple-200 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 transition-colors duration-200"
                    placeholder="Enter message subject"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-purple-800 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-purple-200 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 transition-colors duration-200 resize-vertical"
                    placeholder="Enter your message here..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-700 to-purple-800 text-white py-4 px-6 rounded-lg font-bold hover:from-purple-800 hover:to-purple-900 hover:shadow-xl transition-all duration-300 shadow-lg transform hover:scale-105 active:scale-95 touch-manipulation min-h-[48px]"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Map and Additional Info */}
            <div className="space-y-8">
              {/* Map */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden border-2 border-purple-100">
                <div className="p-6 border-b border-purple-200">
                  <h3 className="text-xl font-bold text-purple-800">Our Location</h3>
                  <p className="text-gray-600 mt-2">Find us near Ranchi University</p>
                </div>
                <div className="relative h-64 md:h-80">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3663.123456789!2d85.2930595!3d23.348484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f4e0b6f9b9b9b9%3A0x1234567890abcdef!2sRanchi%20University!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Kids School Location Map"
                  ></iframe>
                </div>
                <div className="p-4">
                  <a
                    href={`https://www.google.com/maps/dir/?api=1&destination=23.348484,85.2930595`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-purple-800 hover:text-yellow-600 font-semibold"
                  >
                    <span>🗺️</span>
                    Get Directions
                  </a>
                </div>
              </div>

              {/* Department Contacts */}
              <div className="bg-white rounded-2xl shadow-lg p-6 border-2 border-purple-100">
                <h3 className="text-xl font-bold text-purple-800 mb-6">Department Contacts</h3>
                <div className="space-y-4">
                  {departments.map((dept, index) => (
                    <div key={index} className="flex justify-between items-center p-4 bg-purple-50 rounded-lg border border-purple-100">
                      <div>
                        <h4 className="font-semibold text-purple-800">{dept.name}</h4>
                        <p className="text-sm text-gray-600">{dept.phone}</p>
                      </div>
                      <a
                        href={`mailto:${dept.email}`}
                        className="text-purple-800 hover:text-yellow-600 font-medium text-sm"
                      >
                        Email
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-purple-800 mb-4">Frequently Asked Questions</h2>
            <p className="text-base sm:text-lg text-gray-600">Quick answers to common questions</p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                question: "What are the admission requirements?",
                answer: "We welcome children aged 3-12 years. Basic requirements include birth certificate, health records, and previous school transcripts (if applicable)."
              },
              {
                question: "What are the school timings?",
                answer: "Our school operates from 8:00 AM to 3:00 PM, Monday through Friday. Extended care is available until 6:00 PM for working parents."
              },
              {
                question: "Do you provide transportation?",
                answer: "Yes, we offer safe and reliable school bus services covering major areas around Ranchi. Transportation fees are separate from tuition."
              },
              {
                question: "What is your teacher-to-student ratio?",
                answer: "We maintain a low teacher-to-student ratio of 1:15 to ensure personalized attention for every child."
              },
              {
                question: "Are there any extracurricular activities?",
                answer: "Yes! We offer various activities including sports, arts, music, dance, science clubs, and more to support holistic development."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-lg p-6 border-2 border-purple-100 hover:border-yellow-400 shadow-lg transition-all duration-300">
                <h3 className="text-lg font-semibold text-purple-800 mb-3">{faq.question}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
