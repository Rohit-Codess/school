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
      <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4">
        <div className="bg-white rounded-2xl p-12 shadow-xl text-center max-w-md w-full border border-gray-200">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Application Submitted!</h2>
          <p className="text-lg text-gray-600 mb-6">
            Thank you for your application. We'll review it and contact you soon.
          </p>
          <p className="text-gray-500">
            You'll receive a confirmation email shortly.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">School Admission Form</h1>
          <p className="text-xl text-gray-600">Please fill out all the required information below</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-xl border border-gray-200">
          <div className="p-8">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Student Name */}
              <div className="md:col-span-2">
                <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="studentName">
                  Student Name *
                </label>
                <input
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300"
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
                <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="studentAge">
                  Student Age *
                </label>
                <input
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300"
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
                <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="grade">
                  Grade Level *
                </label>
                <select
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300"
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
                <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="parentName">
                  Parent/Guardian Name *
                </label>
                <input
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300"
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
                <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="contactNumber">
                  Phone Number *
                </label>
                <input
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300"
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
                <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="email">
                  Email Address *
                </label>
                <input
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300"
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
                <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="address">
                  Home Address *
                </label>
                <textarea
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300 h-24 resize-none"
                  id="address"
                  name="address"
                  placeholder="Enter your complete address"
                  value={formData.address}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-200">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  type="submit"
                  className="bg-teal-600 text-white font-semibold py-3 px-8 rounded-lg hover:bg-teal-700 transition-colors duration-300 shadow-lg"
                >
                  Submit Application
                </button>
                <button
                  type="button"
                  className="bg-gray-200 text-gray-700 font-semibold py-3 px-8 rounded-lg hover:bg-gray-300 transition-colors duration-300"
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
          <p className="text-gray-600 mb-4">
            Questions about the admission process? 
          </p>
          <p className="text-gray-700">
            Contact us at <span className="font-semibold text-teal-600">(555) 123-KIDS</span> or 
            <span className="font-semibold text-teal-600"> info@kidsschool.edu</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdmissionPage;
