import React, { useState } from 'react';

interface Student {
  id: string;
  studentName: string;
  studentAge: string;
  parentName: string;
  contactNumber: string;
  email: string;
  address: string;
  grade: string;
  status: 'pending' | 'approved' | 'rejected';
  submittedAt: string;
}

const AdminPage: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginData, setLoginData] = useState({ username: '', password: '' });
  
  // Mock student data
  const [students] = useState<Student[]>([
    {
      id: '1',
      studentName: 'Emma Johnson',
      studentAge: '6',
      parentName: 'Sarah Johnson',
      contactNumber: '+1-234-567-8900',
      email: 'sarah.johnson@email.com',
      address: '123 Maple Street, Springfield, IL',
      grade: 'grade1',
      status: 'pending',
      submittedAt: '2025-08-20'
    },
    {
      id: '2',
      studentName: 'Liam Smith',
      studentAge: '5',
      parentName: 'Michael Smith',
      contactNumber: '+1-234-567-8901',
      email: 'michael.smith@email.com',
      address: '456 Oak Avenue, Springfield, IL',
      grade: 'kindergarten',
      status: 'approved',
      submittedAt: '2025-08-18'
    },
    {
      id: '3',
      studentName: 'Ava Davis',
      studentAge: '7',
      parentName: 'Jennifer Davis',
      contactNumber: '+1-234-567-8902',
      email: 'jennifer.davis@email.com',
      address: '789 Pine Road, Springfield, IL',
      grade: 'grade2',
      status: 'pending',
      submittedAt: '2025-08-22'
    }
  ]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple authentication check (in real app, this would be done on backend)
    if (loginData.username === 'admin' && loginData.password === 'admin123') {
      setIsLoggedIn(true);
    } else {
      alert('Invalid credentials! Try: admin / admin123');
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'approved': return 'text-green-700 bg-green-100 border-green-200';
      case 'rejected': return 'text-red-700 bg-red-100 border-red-200';
      default: return 'text-yellow-700 bg-yellow-100 border-yellow-200';
    }
  };

  const getGradeLabel = (grade: string) => {
    const gradeLabels: { [key: string]: string } = {
      'nursery': 'Nursery',
      'kindergarten': 'Kindergarten',
      'grade1': 'Grade 1',
      'grade2': 'Grade 2',
      'grade3': 'Grade 3',
      'grade4': 'Grade 4',
      'grade5': 'Grade 5'
    };
    return gradeLabels[grade] || grade;
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-600 via-purple-700 to-pink-600 flex items-center justify-center py-12 px-4">
        <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-12 shadow-xl border-2 border-white/50 max-w-md w-full">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
              <svg className="w-8 h-8 text-purple-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-purple-800">Admin Login</h2>
            <p className="text-purple-700 mt-2">Access the admin panel</p>
          </div>
          
          <form onSubmit={handleLogin}>
            <div className="mb-6">
              <label className="block text-purple-700 text-sm font-semibold mb-2" htmlFor="username">
                Username
              </label>
              <input
                className="w-full px-4 py-3 border border-purple-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                id="username"
                type="text"
                placeholder="Enter username"
                value={loginData.username}
                onChange={(e) => setLoginData(prev => ({ ...prev, username: e.target.value }))}
                required
              />
            </div>
            
            <div className="mb-8">
              <label className="block text-purple-700 text-sm font-semibold mb-2" htmlFor="password">
                Password
              </label>
              <input
                className="w-full px-4 py-3 border border-purple-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                id="password"
                type="password"
                placeholder="Enter password"
                value={loginData.password}
                onChange={(e) => setLoginData(prev => ({ ...prev, password: e.target.value }))}
                required
              />
            </div>
            
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold py-4 px-6 rounded-full hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg transform hover:scale-105 active:scale-95 touch-manipulation min-h-[48px]"
            >
              Login
            </button>
          </form>
          
          <div className="mt-4 text-sm text-purple-600 text-center">
            Demo credentials: admin / admin123
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-purple-700 to-pink-600">
      <div className="container mx-auto px-6 py-8">
        {/* Header */}
        <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-lg border-2 border-white/50 mb-8">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-4xl font-bold text-purple-800 mb-2">Admin Dashboard</h1>
              <p className="text-purple-700">Manage student applications and admissions</p>
            </div>
            <button
              onClick={() => setIsLoggedIn(false)}
              className="bg-gradient-to-r from-red-500 to-red-600 text-white px-4 sm:px-6 py-3 rounded-full hover:from-red-600 hover:to-red-700 transition-all duration-300 font-bold shadow-lg transform hover:scale-105 active:scale-95 touch-manipulation min-h-[48px]"
            >
              Logout
            </button>
          </div>
        </div>

        {/* Statistics */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-lg border-2 border-white/50">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div className="ml-4">
                <h3 className="text-2xl font-bold text-purple-800">{students.length}</h3>
                <p className="text-purple-700">Total Applications</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-lg border-2 border-white/50">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="ml-4">
                <h3 className="text-2xl font-bold text-purple-800">
                  {students.filter(s => s.status === 'pending').length}
                </h3>
                <p className="text-purple-700">Pending Review</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-lg border-2 border-white/50">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div className="ml-4">
                <h3 className="text-2xl font-bold text-purple-800">
                  {students.filter(s => s.status === 'approved').length}
                </h3>
                <p className="text-purple-700">Approved</p>
              </div>
            </div>
          </div>
        </div>

        {/* Student Applications Table */}
        <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-lg border-2 border-white/50">
          <div className="p-8">
            <h2 className="text-2xl font-bold text-purple-800 mb-6">Student Applications</h2>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-purple-50 border-b border-purple-200">
                    <th className="text-left py-4 px-6 font-semibold text-purple-700">Student</th>
                    <th className="text-left py-4 px-6 font-semibold text-purple-700">Parent</th>
                    <th className="text-left py-4 px-6 font-semibold text-purple-700">Grade</th>
                    <th className="text-left py-4 px-6 font-semibold text-purple-700">Contact</th>
                    <th className="text-left py-4 px-6 font-semibold text-purple-700">Status</th>
                    <th className="text-left py-4 px-6 font-semibold text-purple-700">Date</th>
                    <th className="text-left py-4 px-6 font-semibold text-purple-700">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {students.map((student) => (
                    <tr key={student.id} className="border-b border-purple-100 hover:bg-purple-50/50 transition-colors duration-200">
                      <td className="py-4 px-6">
                        <div>
                          <div className="font-semibold text-purple-800">{student.studentName}</div>
                          <div className="text-sm text-purple-600">Age: {student.studentAge}</div>
                        </div>
                      </td>
                      <td className="py-4 px-6">
                        <div>
                          <div className="font-semibold text-purple-800">{student.parentName}</div>
                          <div className="text-sm text-purple-600">{student.email}</div>
                        </div>
                      </td>
                      <td className="py-4 px-6">
                        <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium border border-purple-200">
                          {getGradeLabel(student.grade)}
                        </span>
                      </td>
                      <td className="py-4 px-6">
                        <div className="text-sm text-purple-700">{student.contactNumber}</div>
                      </td>
                      <td className="py-4 px-6">
                        <span className={`px-3 py-1 rounded-full text-sm font-medium border ${getStatusColor(student.status)}`}>
                          {student.status.charAt(0).toUpperCase() + student.status.slice(1)}
                        </span>
                      </td>
                      <td className="py-4 px-6 text-sm text-purple-700">
                        {student.submittedAt}
                      </td>
                      <td className="py-4 px-6">
                        <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
                          <button className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-green-700 transition-colors duration-200 font-medium transform hover:scale-105 active:scale-95 touch-manipulation min-h-[44px]">
                            Approve
                          </button>
                          <button className="bg-red-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-red-700 transition-colors duration-200 font-medium transform hover:scale-105 active:scale-95 touch-manipulation min-h-[44px]">
                            Reject
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
