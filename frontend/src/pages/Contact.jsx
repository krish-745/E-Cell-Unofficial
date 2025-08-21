import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SceneCanvas from "../three/SceneCanvas";


export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [data, setData] = useState({
    name: "",
    email: "",
    message: ""
  })

const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
        const formData = new FormData();
        formData.append("access_key", import.meta.env.VITE_PASS_KEY);
        formData.append("name", data.name);
        formData.append("email", data.email);
        formData.append("message", data.message);

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const result = await response.json();
        if (result.success) {
            setSubmitStatus({ success: true, message: "Thank you! Your message has been sent, and we will get back to you shortly." });
            setData({ name: "", email: "", message: "" });
        } else {
            setSubmitStatus({ success: false, message: "Something went wrong. Please try again." });
        }
    } catch (error) {
        setSubmitStatus({ success: false, message: "An error occurred. Please try again." });
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
          Contact Us
        </span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-xl text-blue-100 max-w-3xl mx-auto text-center mb-12"
      >
        Have questions or want to get involved? Reach out to our team.
      </motion.p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-blue-900/20 p-8 rounded-lg backdrop-blur-sm border border-blue-800/30"
        >
          <h2 className="text-2xl font-semibold mb-6 text-center">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-300 to-blue-300">
              Send us a Message
            </span>
          </h2>

          {submitStatus && (
            <div className={`p-4 mb-6 rounded-lg ${submitStatus.success ? 'bg-green-900/50 border border-green-700' : 'bg-red-900/50 border border-red-700'}`}>
              <p className={`text-sm ${submitStatus.success ? 'text-green-200' : 'text-red-200'}`}>
                {submitStatus.message}
              </p>
            </div>
          )}


          <form
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <input type="hidden" name="access_key" value={import.meta.env.VITE_PASS_KEY} />
            <input type="hidden" name="redirect" value="https://web3forms.com/success" />

            <div>
              <label htmlFor="name" className="block text-blue-200 mb-2">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={data.name}
                className="w-full px-4 py-3 bg-blue-950/50 border border-blue-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                placeholder="Your name"
                onChange={(e) => setData({ ...data, name: e.target.value })}
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-blue-200 mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={data.email}
                onChange={(e) => setData({ ...data, email: e.target.value })}
                className="w-full px-4 py-3 bg-blue-950/50 border border-blue-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                placeholder="your.email@example.com"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-blue-200 mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                className="w-full px-4 py-3 bg-blue-950/50 border border-blue-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                placeholder="Your message..."
                value={data.message}
                onChange={(e) => setData({ ...data, message: e.target.value })}
                required
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`px-6 py-3 bg-gradient-to-r from-orange-500 to-blue-500 hover:from-orange-600 hover:to-blue-600 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105 w-full flex justify-center items-center ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
            >Send Message
            </button>
          </form>



        </motion.div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-blue-900/20 p-8 rounded-lg backdrop-blur-sm border border-blue-800/30 flex flex-col justify-between"
        >
          <div>
            <h2 className="text-2xl font-semibold mb-6 text-center">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-300 to-blue-300">
                Connect With Us
              </span>
            </h2>

            <div className="space-y-6 mb-8">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-800/30 p-3 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-blue-300">Email</h3>
                  <p className="text-blue-200">entrepreneurship@iitp.ac.in</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-blue-800/30 p-3 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-blue-300">Phone</h3>
                  <p className="text-blue-200">+91 70602 43777</p>
                  <p className="text-blue-200">+91 62042 50124</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-blue-800/30 p-3 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-blue-300">Location</h3>
                  <p className="text-blue-200">E-Cell Office , IIT Patna</p>
                  <p className="text-blue-200">Bihta , Patna, India 801103</p>
                </div>
              </div>
            </div>
          </div>

          {/* Social Media Links */}
          <div>
            <h3 className="text-lg font-medium mb-4 text-center text-blue-300">Follow Us</h3>
            <div className="flex justify-center space-x-4">
              <a href="https://www.instagram.com/ecell_iitpatna?igsh=OTJ1MmJlYTlseTN2" className="bg-blue-800/30 p-3 rounded-full text-blue-300 hover:text-orange-300 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a href="https://www.linkedin.com/school/ecell-iit-patna/posts/?feedView=all" className="bg-blue-800/30 p-3 rounded-full text-blue-300 hover:text-orange-300 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </main>
);
} 
