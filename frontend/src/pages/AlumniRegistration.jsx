import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SceneCanvas from "../three/SceneCanvas";


export default function AlumniRegistration() {
  const [formData, setFormData] = useState({
    name: '',
    contactNo: '',
    email: '',
    department: '',
    graduationYear: '',
    organization: '',
    role: '',
    linkedinUrl: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
  
    try {
      const response = await fetch('https://e-cell-alumniconnect.onrender.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
  
      if (!response.ok) throw new Error('Failed to submit');
  
      setSubmitStatus({ success: true, message: 'Form submitted successfully!' });
      setFormData({
        name: '', contactNo: '', email: '', department: '',
        graduationYear: '', organization: '', role: '', linkedinUrl: ''
      });
    } catch (error) {
      setSubmitStatus({ success: false, message: 'Something went wrong. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <main className="pt-20 min-h-screen bg-gradient-to-br from-gray-900 via-blue-950 to-black text-white relative overflow-hidden">
      {/* Background elements for depth */}
      <div className="absolute inset-0 bg-black opacity-30 z-0"></div>
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-700 opacity-5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-blue-600 opacity-5 rounded-full blur-3xl"></div>

      {/* Three.js canvas - behind content */}
      <div className="absolute inset-0 z-1">
        <SceneCanvas />
      </div>

      {/* Background Logo */}
      <div className="absolute inset-0 flex items-center justify-center z-[1] pointer-events-none opacity-5">
        <img
          src="/favicon.jpg"
          alt="Logo Background"
          className="w-1/2 max-w-[500px]"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-12">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold mb-8 text-center"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 via-purple-400 to-blue-400">
            Alumni Registration
          </span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <p className="text-xl text-blue-100 mb-4">
            Join our thriving alumni network and stay connected with E-Cell IIT Patna
          </p>
          <p className="text-md text-blue-200">
            As part of our alumni network, you'll receive updates on E-Cell events, opportunities to mentor current students,
            invitations to exclusive alumni gatherings, and the chance to collaborate with fellow entrepreneurs.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="max-w-4xl mx-auto bg-blue-900/20 p-8 rounded-lg backdrop-blur-sm border border-blue-800/30"
        >
          {submitStatus && (
            <div className={`p-4 mb-6 rounded-lg ${submitStatus.success ? 'bg-green-900/50 border border-green-700' : 'bg-red-900/50 border border-red-700'}`}>
              <p className={`text-sm ${submitStatus.success ? 'text-green-200' : 'text-red-200'}`}>
                {submitStatus.message}
              </p>
            </div>
          )}

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-blue-200 mb-2">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 bg-blue-950/50 border border-blue-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                  placeholder="Your full name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <label htmlFor="contactNo" className="block text-blue-200 mb-2">Contact Number *</label>
                <input
                  type="tel"
                  id="contactNo"
                  className="w-full px-4 py-3 bg-blue-950/50 border border-blue-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                  placeholder="Your phone number"
                  value={formData.contactNo}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-blue-200 mb-2">Email Address *</label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-3 bg-blue-950/50 border border-blue-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                placeholder="your.email@example.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="department" className="block text-blue-200 mb-2">Department/Branch *</label>
                <input
                  type="text"
                  id="department"
                  className="w-full px-4 py-3 bg-blue-950/50 border border-blue-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                  placeholder="e.g. Computer Science, Electrical Engineering"
                  value={formData.department}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <label htmlFor="graduationYear" className="block text-blue-200 mb-2">Year of Graduation *</label>
                <input
                  type="text"
                  id="graduationYear"
                  className="w-full px-4 py-3 bg-blue-950/50 border border-blue-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                  placeholder="e.g. 2022"
                  value={formData.graduationYear}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="organization" className="block text-blue-200 mb-2">Organization/Startup Name *</label>
                <input
                  type="text"
                  id="organization"
                  className="w-full px-4 py-3 bg-blue-950/50 border border-blue-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                  placeholder="Where you currently work"
                  value={formData.organization}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <label htmlFor="role" className="block text-blue-200 mb-2">Current Role/Designation *</label>
                <input
                  type="text"
                  id="role"
                  className="w-full px-4 py-3 bg-blue-950/50 border border-blue-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                  placeholder="e.g. Software Engineer, Founder"
                  value={formData.role}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="linkedinUrl" className="block text-blue-200 mb-2">LinkedIn Profile URL *</label>
              <input
                type="url"
                id="linkedinUrl"
                className="w-full px-4 py-3 bg-blue-950/50 border border-blue-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                placeholder="https://www.linkedin.com/in/yourprofile"
                value={formData.linkedinUrl}
                onChange={handleChange}
                required
              />
            </div>

            <div className="pt-4">
              <button
                type="submit"
                className={`px-6 py-3 bg-gradient-to-r from-orange-500 to-blue-500 hover:from-orange-600 hover:to-blue-600 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105 w-full flex justify-center items-center ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Processing...
                  </span>
                ) : 'Register as Alumni'}
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </main>
  );
} 
