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
      <div className="min-h-screen bg-gradient-to-br from-purple-600 via-purple-700 to-pink-600 flex items-center justify-center py-12 px-4">
        <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-12 shadow-xl text-center max-w-md w-full border-2 border-white/50">
          <div className="w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
            <svg className="w-10 h-10 text-purple-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-3xl font-bold text-purple-800 mb-4">Application Submitted!</h2>
          <p className="text-lg text-purple-700 mb-6">
            Thank you for your application. We'll review it and contact you soon.
          </p>
          <p className="text-purple-600">
            You'll receive a confirmation email shortly.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-purple-700 to-pink-600 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-yellow-400 text-purple-800 rounded-full text-sm font-bold mb-6">
            🎓 School Admission
          </div>
          <h1 className="text-4xl font-bold text-white mb-4">School Admission Form</h1>
          <p className="text-xl text-white/90">Please fill out all the required information below</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl border-2 border-white/50">
          <div className="p-8">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Student Name */}
              <div className="md:col-span-2">
                <label className="block text-purple-700 text-sm font-semibold mb-2" htmlFor="studentName">
                  Student Name *
                </label>
                <input
                  className="w-full px-4 py-3 border border-purple-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                  id="studentName"
                  name="studentName"
                  type="text"
                  placeholder="Enter student's full name"
                  value={formData.studentName}
                  onChange={handleInputChange}
                  required
                />
              </div>

              {/* Student Age */}
              <div>
                <label className="block text-purple-700 text-sm font-semibold mb-2" htmlFor="studentAge">
                  Student Age *
                </label>
                <input
                  className="w-full px-4 py-3 border border-purple-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                  id="studentAge"
                  name="studentAge"
                  type="number"
                  placeholder="Age"
                  min="3"
                  max="18"
                  value={formData.studentAge}
                  onChange={handleInputChange}
                  required
                />
              </div>

              {/* Grade */}
              <div>
                <label className="block text-purple-700 text-sm font-semibold mb-2" htmlFor="grade">
                  Grade Level *
                </label>
                <select
                  className="w-full px-4 py-3 border border-purple-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                  id="grade"
                  name="grade"
                  value={formData.grade}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select grade level</option>
                  <option value="nursery">Nursery</option>
                  <option value="kindergarten">Kindergarten</option>
                  <option value="grade1">Grade 1</option>
                  <option value="grade2">Grade 2</option>
                  <option value="grade3">Grade 3</option>
                  <option value="grade4">Grade 4</option>
                  <option value="grade5">Grade 5</option>
                </select>
              </div>

              {/* Parent Name */}
              <div>
                <label className="block text-purple-700 text-sm font-semibold mb-2" htmlFor="parentName">
                  Parent/Guardian Name *
                </label>
                <input
                  className="w-full px-4 py-3 border border-purple-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                  id="parentName"
                  name="parentName"
                  type="text"
                  placeholder="Parent or guardian's name"
                  value={formData.parentName}
                  onChange={handleInputChange}
                  required
                />
              </div>

              {/* Contact Number */}
              <div>
                <label className="block text-purple-700 text-sm font-semibold mb-2" htmlFor="contactNumber">
                  Phone Number *
                </label>
                <input
                  className="w-full px-4 py-3 border border-purple-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                  id="contactNumber"
                  name="contactNumber"
                  type="tel"
                  placeholder="(555) 123-4567"
                  value={formData.contactNumber}
                  onChange={handleInputChange}
                  required
                />
              </div>

              {/* Email */}
              <div className="md:col-span-2">
                <label className="block text-purple-700 text-sm font-semibold mb-2" htmlFor="email">
                  Email Address *
                </label>
                <input
                  className="w-full px-4 py-3 border border-purple-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
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
                <label className="block text-purple-700 text-sm font-semibold mb-2" htmlFor="address">
                  Home Address *
                </label>
                <textarea
                  className="w-full px-4 py-3 border border-purple-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 h-24 resize-none"
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
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  type="submit"
                  className="bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold py-3 px-8 rounded-full hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg transform hover:scale-105"
                >
                  Submit Application
                </button>
                <button
                  type="button"
                  className="bg-purple-100 text-purple-700 font-bold py-3 px-8 rounded-full hover:bg-purple-200 transition-all duration-300 border-2 border-purple-200"
                  onClick={() => setFormData({
                    studentName: '',
                    studentAge: '',
                    parentName: '',
                    contactNumber: '',
                    email: '',
                    address: '',
                    grade: ''
                  })}
                >
                  Reset Form
                </button>
              </div>
            </div>
          </div>
        </form>

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 border-2 border-white/50 shadow-xl">
            <p className="text-purple-700 mb-4 text-lg">
              Questions about the admission process? 
            </p>
            <p className="text-purple-800">
              Contact us at <span className="font-bold text-yellow-500">(555) 123-KIDS</span> or 
              <span className="font-bold text-yellow-500"> info@kidsschool.edu</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdmissionPage;
