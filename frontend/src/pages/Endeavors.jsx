import React, { useState, useEffect, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import SceneCanvas from "../three/SceneCanvas";

const endeavorsData = [
  {
    id: "e-summit",
    title: "E-Summit",
    description: "E-Summit 2025, the flagship entrepreneurial event of IIT Patna, is a vibrant platform that brings together innovators, investors, startups, and industry leaders to foster entrepreneurship and business growth.",
    icon: "🚀",
    color: "from-emerald-500 to-teal-500",
    accentColor: "emerald",
    date: "Annual",
    participants: "500+",
    success: "15 Partnerships",
    category: "Flagship Event",
    image: "bg-gradient-to-br from-emerald-500/20 to-teal-500/20",
    highlights: ["Global Speakers", "Startup Competitions", "Investment Opportunities", "Networking Sessions"],
    // nextEvent: "January 2026"
  },
  {
    id: "startin",
    title: "Startin",
    description: "A campus startup expo where students pitch, validate, and market their ideas through live stalls and demos.",
    icon: "🎯",
    color: "from-purple-500 to-violet-500",
    accentColor: "purple",
    date: "Annual",
    participants: "200+",
    success: "8 Prototypes Built",
    category: "Campus Expo",
    image: "bg-gradient-to-br from-purple-500/20 to-violet-500/20",
    highlights: ["Live Demos", "Pitch Competitions", "Mentor Feedback", "Market Validation"],
    // nextEvent: "March 2026"
  },
  {
    id: "xplore",
    title: "Xplore",
    description: "Xplore is the freshers introduction to E-cell IIT Patna. Here the seed to innovate and create jobs is planted. This is the new beginning for the newcomers to discover, engage, and grow with the entrepreneurial ecosystem of the institute.",
    icon: "💡",
    color: "from-orange-500 to-amber-500",
    accentColor: "orange",
    date: "Annual",
    participants: "100+",
    success: "15 Mentorships",
    category: "Initiation",
    image: "bg-gradient-to-br from-orange-500/20 to-amber-500/20",
    highlights: ["Freshers Program", "Innovation Workshops", "Mentorship Matching", "Skill Development"],
    // nextEvent: "August 2025"
  }
];

// Animation variants for consistent motion design
const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const fadeInRight = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

const FeaturedEndeavor = ({ endeavor, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.3 });
  const isEven = index % 2 === 0;

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={fadeInUp}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Enhanced Background Layers */}
      <div className={`absolute inset-0 ${endeavor.image} opacity-30`} />
      <div className="absolute inset-0 backdrop-blur-sm bg-gradient-to-br from-slate-900/80 via-slate-800/60 to-slate-900/80" />
      
      {/* Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${isEven ? '' : 'lg:grid-flow-col-dense'}`}>
          
          {/* Text Content */}
          <motion.div 
            variants={fadeInLeft}
            className={`space-y-8 ${isEven ? '' : 'lg:col-start-2'}`}
          >
            {/* Category Badge */}
            <motion.div
              variants={fadeInUp}
              className="inline-flex items-center gap-2"
            >
              <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${endeavor.color}`} />
              <span className="text-sm font-medium text-gray-300 tracking-wider uppercase">
                {endeavor.category}
              </span>
            </motion.div>

            {/* Title */}
            <motion.h2
              variants={fadeInUp}
              className="text-4xl lg:text-6xl font-bold leading-tight"
            >
              <span className={`bg-gradient-to-r ${endeavor.color} bg-clip-text text-transparent`}>
                {endeavor.title}
              </span>
            </motion.h2>

            {/* Description */}
            <motion.p
              variants={fadeInUp}
              className="text-lg lg:text-xl text-gray-300 leading-relaxed max-w-2xl"
            >
              {endeavor.description}
            </motion.p>

            {/* Highlights */}
            <motion.div variants={staggerContainer} className="space-y-4">
              <h3 className="text-lg font-semibold text-white">Key Highlights</h3>
              <div className="grid grid-cols-2 gap-3">
                {endeavor.highlights.map((highlight, idx) => (
                  <motion.div
                    key={highlight}
                    variants={fadeInUp}
                    className="flex items-center gap-3 p-3 rounded-lg bg-slate-800/50 backdrop-blur-sm border border-slate-700/50"
                  >
                    <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${endeavor.color}`} />
                    <span className="text-sm text-gray-300">{highlight}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div variants={staggerContainer} className="flex flex-wrap gap-8">
              {[
                { label: "Participants", value: endeavor.participants },
                { label: "Frequency", value: endeavor.date },
                { label: "Success", value: endeavor.success }
              ].map((stat, idx) => (
                <motion.div key={stat.label} variants={fadeInUp} className="text-center">
                  <div className="text-2xl lg:text-3xl font-bold text-white mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-400 uppercase tracking-wider">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Action Buttons */}
            <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
              {/* <button className={`px-8 py-4 rounded-full font-semibold text-white bg-gradient-to-r ${endeavor.color} hover:shadow-lg hover:shadow-${endeavor.accentColor}-500/25 transition-all duration-300 transform hover:scale-105`}>
                Learn More
              </button> */}
              {/* <button className="px-8 py-4 rounded-full font-semibold text-white bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300">
                Register Now
              </button> */}
            </motion.div>

            {/* Next Event */}
            {/* <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 text-sm text-gray-400">
              <span>Next Event:</span>
              <span className="font-semibold text-white">{endeavor.nextEvent}</span>
            </motion.div> */}
          </motion.div>

          {/* Visual Content */}
          <motion.div
            variants={fadeInRight}
            className={`relative ${isEven ? '' : 'lg:col-start-1'}`}
          >
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Icon Container */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  className="text-[12rem] lg:text-[16rem] opacity-90"
                  animate={{
                    rotateY: [0, 5, -5, 0],
                    scale: [1, 1.02, 1]
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  {endeavor.icon}
                </motion.div>
              </div>

              {/* Floating Elements */}
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className={`absolute w-4 h-4 rounded-full bg-gradient-to-r ${endeavor.color} opacity-60`}
                  style={{
                    top: `${20 + i * 25}%`,
                    right: `${10 + i * 15}%`
                  }}
                  animate={{
                    y: [-20, 20, -20],
                    opacity: [0.3, 0.8, 0.3],
                    scale: [0.8, 1.2, 0.8]
                  }}
                  transition={{
                    duration: 3 + i,
                    repeat: Infinity,
                    delay: i * 0.5
                  }}
                />
              ))}

              {/* Background Glow */}
              <div className={`absolute inset-0 bg-gradient-to-r ${endeavor.color} opacity-10 rounded-full blur-3xl scale-150`} />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

const EndeavorCard = ({ endeavor, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={fadeInUp}
      transition={{ delay: index * 0.2 }}
      className="group cursor-pointer h-full"
    >
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-md border border-slate-700/50 shadow-xl hover:shadow-2xl transition-all duration-500 h-full">
        {/* Hover Overlay */}
        <div className={`absolute inset-0 ${endeavor.image} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
        
        {/* Content */}
        <div className="relative z-10 p-8 h-full flex flex-col">
          {/* Header */}
          <div className="flex items-start justify-between mb-6">
            <div className="text-5xl group-hover:scale-110 transition-transform duration-300">
              {endeavor.icon}
            </div>
            <span className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${endeavor.color} text-white`}>
              {endeavor.category}
            </span>
          </div>

          {/* Title */}
          <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-white/90 transition-colors">
            {endeavor.title}
          </h3>

          {/* Description */}
          <p className="text-gray-300 mb-6 leading-relaxed group-hover:text-white/80 transition-colors flex-grow">
            {endeavor.description}
          </p>

          {/* Stats */}
          <div className="flex justify-between items-center text-sm">
            <div className="flex gap-4">
              <div className={`text-${endeavor.accentColor}-400 font-semibold`}>
                {endeavor.participants}
              </div>
              <div className="text-amber-400 font-semibold">
                {endeavor.success}
              </div>
            </div>
            
            <motion.div
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors"
              whileHover={{ scale: 1.1, rotate: 45 }}
            >
              <span className="text-white text-lg">→</span>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const StatsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.3 });

  const stats = [
    { number: "1000+", label: "Students Engaged", icon: "👥", color: "text-blue-400" },
    { number: "25+", label: "Events Hosted", icon: "🎯", color: "text-emerald-400" },
    { number: "10+", label: "Startups Launched", icon: "🚀", color: "text-purple-400" },
    { number: "50+", label: "Mentors Connected", icon: "🤝", color: "text-orange-400" }
  ];

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={staggerContainer}
      className="py-32 relative"
    >
      <div className="absolute inset-0" />

      <div className="absolute inset-0 bg-black opacity-30 z-0"></div>
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-700 opacity-5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-blue-600 opacity-5 rounded-full blur-3xl"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div variants={fadeInUp} className="text-center mb-20">
          <h2 className="text-4xl lg:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-orange-400 to-blue-400 bg-clip-text text-transparent">
              Our Impact
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Transforming ideas into reality through collaborative innovation
          </p>
        </motion.div>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              variants={fadeInUp}
              className="text-center group cursor-pointer"
            >
              <div className="text-6xl lg:text-7xl mb-6 group-hover:scale-110 transition-transform duration-300">
                {stat.icon}
              </div>
              <div className={`text-4xl lg:text-5xl font-bold ${stat.color} mb-4 group-hover:scale-105 transition-all duration-300`}>
                {stat.number}
              </div>
              <div className="text-gray-300 text-lg font-medium uppercase tracking-wider">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

const Endeavors = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % endeavorsData.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const handleIndicatorClick = (index) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000); // Resume auto-play after 10 seconds
  };

  return (
    <div className="min-h-screen text-white relative bg-gradient-to-br from-slate-950 via-slate-800 to-slate-950  overflow-hidden">
      {/* Scene Canvas Background */}
      <div className="fixed inset-0 z-20">
        <SceneCanvas />
      </div>

      <div className="absolute inset-0 bg-black opacity-30 z-0"></div>
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-700 opacity-5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-blue-600 opacity-5 rounded-full blur-3xl"></div>

      

      {/* Content */}
      <div className="relative z-20">
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative min-h-screen flex items-center justify-center overflow-hidden"
        >
          <div className="absolute inset-0" />
          
          <div className="relative z-10 text-center max-w-6xl mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              <h1 className="text-5xl lg:text-8xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-orange-400 to-blue-400 bg-clip-text text-transparent">
                  Our Endeavors
                </span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Pioneering innovation and entrepreneurship at IIT Patna through transformative initiatives
              </p>
              
              {/* Navigation Indicators */}
              <div className="flex justify-center gap-3">
                {endeavorsData.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => handleIndicatorClick(index)}
                    className={`w-4 h-4 rounded-full transition-all duration-300 ${
                      index === currentIndex ? 'bg-white scale-125' : 'bg-white/30 hover:bg-white/50'
                    }`}
                  />
                ))}
              </div>
              
              {/* Current Endeavor Preview */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5 }}
                  className="text-[8rem] lg:text-[12rem] opacity-90"
                >
                  {endeavorsData[currentIndex].icon}
                </motion.div>
              </AnimatePresence>
            </motion.div>
          </div>
        </motion.section>

        {/* Featured Endeavors */}
        {endeavorsData.map((endeavor, index) => (
          <FeaturedEndeavor key={endeavor.id} endeavor={endeavor} index={index} />
        ))}

        {/* Stats Section */}
        <StatsSection />

        {/* Grid Overview */}
        <section className="py-32 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/60 via-slate-800/40 to-slate-900/60 backdrop-blur-sm" />
          
          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <h2 className="text-4xl lg:text-6xl font-bold mb-4">
                <span className="bg-gradient-to-r from-orange-400 to-blue-400 bg-clip-text text-transparent">
                  A Quick Glance
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover the full spectrum of our entrepreneurial programs
              </p>
            </motion.div>
            
            <div className="grid lg:grid-cols-3 gap-8">
              {endeavorsData.map((endeavor, index) => (
                <EndeavorCard key={endeavor.id} endeavor={endeavor} index={index} />
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Endeavors;
