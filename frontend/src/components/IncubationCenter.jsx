"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import {
  ArrowRight,
  Building2,
  Users,
  Target,
  TrendingUp,
  CheckCircle,
} from "lucide-react";

export default function IncubationCenter() {
  const [hoveredCard, setHoveredCard] = useState(null);

  const features = [
    {
      icon: <Building2 className="w-6 h-6" />,
      title: "World-Class Infrastructure",
      description:
        "Modern facilities equipped with cutting-edge technology and collaborative workspaces",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Expert Mentorship",
      description:
        "Access to industry leaders, seasoned entrepreneurs, and domain experts",
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Strategic Programs",
      description:
        "Customized acceleration programs tailored to your business model and market",
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Growth Support",
      description:
        "Comprehensive support from ideation to scaling with proven methodologies",
    },
  ];

  return (
    <section
      id="incubation"
      className="relative min-h-screen w-full py-20 px-6 md:px-20 text-white overflow-hidden bg-gradient-to-tr from-[#0e0f1c] via-[#1f2343] to-[#0e0f1c]"
    >
      {/* Blurred Animated Background */}
      <div className="absolute -z-10 inset-0 overflow-hidden">
        <div className="absolute w-[800px] h-[800px] bg-indigo-600 opacity-20 rounded-full blur-[160px] top-[-200px] left-[-200px] animate-pulse" />
        <div className="absolute w-[600px] h-[600px] bg-purple-500 opacity-20 rounded-full blur-[160px] bottom-[-200px] right-[-200px] animate-pulse" />
      </div>

      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-20"
      >
        <h2 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-orange-600 via-white-600 to-blue-600 bg-clip-text text-transparent">
          Incubation Center
        </h2>
        <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
          Empowering entrepreneurs with elite mentorship, growth, and world-class innovation.
        </p>
      </motion.div>

      {/* Image + Text */}
      <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="relative group"
        >
          <div className="absolute inset-0 rounded-2xl animate-pulse blur-xl bg-gradient-to-br from-blue-500/30 to-fuchsia-500/30 z-0" />
          <img
            src="/IC.png"
            alt="Incubation Center"
            className="relative rounded-2xl shadow-2xl border border-white/10 w-full h-auto object-cover z-10"
          />
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl md:text-3xl font-medium text-white leading-tight">
            Empowering the Next Generation of
            <span className="text-blue-400"> Industry Leaders</span>
          </h3>
          <p className="text-gray-300 leading-relaxed mt-4">
            Our incubation center provides entrepreneurs with the essential resources, mentorship, and strategic guidance needed to build sustainable businesses. We focus on creating long-term value through structured programs and professional development.
          </p>
          <div className="space-y-3 mt-6">
            {[
              "Structured 12-month acceleration program",
              "Direct access to investor networks",
              "Professional workspace and facilities",
              "Ongoing strategic business support",
            ].map((point, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300 text-sm">{point}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Features Grid */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {features.map((feature, index) => (
          <div
            key={index}
            className={`relative p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-fuchsia-400/40 transition duration-300 group ${
              hoveredCard === index ? "scale-105" : ""
            }`}
            onMouseEnter={() => setHoveredCard(index)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="flex items-start gap-4 mb-4">
              <div className="p-2 bg-gradient-to-r from-orange-500 to-fuchsia-600 rounded-lg text-white">
                {feature.icon}
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-1">{feature.title}</h4>
                <p className="text-gray-400 text-sm">{feature.description}</p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        viewport={{ once: true }}
        className="mt-24  grid-cols-2 md:grid-cols-4 gap-10 hidden"
      >
        {[
          { number: 20, label: "Startups Incubated" },
          { number: 85, suffix: "%", label: "Success Rate" },
          { number: 50, prefix: "₹", suffix: "L+", label: "Total Funding Raised" },
          { number: 50, suffix: "+", label: "Jobs Created" },
        ].map((stat, index) => (
          <div key={index} className="text-center">
            <div className="text-3xl font-bold text-white">
              <CountUp
                end={stat.number}
                duration={2}
                prefix={stat.prefix || ""}
                suffix={stat.suffix || "+"}
              />
            </div>
            <div className="text-sm text-gray-400 mt-1">{stat.label}</div>
          </div>
        ))}
      </motion.div>
    </section>
  );
} 
