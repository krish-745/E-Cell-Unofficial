import React from 'react';
import { motion } from 'framer-motion';
import SceneCanvas from "../three/SceneCanvas";

export default function About() {
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
          src="/logo.jpg" 
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
            About E-Cell Alumni Relations
          </span>
        </motion.h1>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-3xl mx-auto bg-blue-900/20 p-8 rounded-lg backdrop-blur-sm"
        >
          <p className="text-xl leading-8 mb-6 text-blue-100">
            The E-Cell Alumni Connect initiative is dedicated to bringing together past and present members of the Entrepreneurship Cell.
            We aim to foster lifelong connections, celebrate achievements, and promote opportunities through this platform.
          </p>
          
          <p className="text-lg leading-7 mb-6 text-blue-200">
            Whether you're a recent graduate or a seasoned founder, you'll find a community of like-minded innovators here.
          </p>
          
          <h2 className="text-2xl font-semibold mb-4 text-orange-300">Our Mission</h2>
          <p className="text-lg leading-7 mb-8 text-blue-100">
            To create a vibrant ecosystem where E-Cell alumni can network, collaborate, and continue to grow professionally
            while mentoring the next generation of entrepreneurs.
          </p>
          
          <h2 className="text-2xl font-semibold mb-4 text-orange-300">What We Offer</h2>
          <ul className="list-disc list-inside space-y-3 text-blue-100">
            <li>Exclusive networking events and webinars</li>
            <li>Mentorship opportunities with current E-Cell members</li>
            <li>Access to resources and entrepreneurial insights</li>
            <li>Platform to showcase your achievements and ventures</li>
            <li>Reconnection with fellow alumni and old friends</li>
          </ul>
        </motion.div>
      </div>
    </main>
  );
}  