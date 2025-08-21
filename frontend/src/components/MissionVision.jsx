import { motion, useInView } from "framer-motion";
import { Lightbulb, Eye, Sparkles } from "lucide-react";
import { useRef } from "react";

export default function MissionVision() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.3
      }
    }
  };

  const titleVariants = {
    hidden: { 
      opacity: 0, 
      y: -50,
      rotateX: -15
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 100,
      rotateY: -15,
      scale: 0.8
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateY: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut"
      }
    }
  };

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      rotate: [0, 5, -5, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const glowVariants = {
    animate: {
      scale: [1, 1.2, 1],
      opacity: [0.5, 0.8, 0.5],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section id="mission-vision" className="min-h-screen flex items-center justify-center bg-transparent px-6 md:px-20 py-16 relative overflow-hidden">

  <div className="absolute inset-0 z-0 bg-[#0f172a]" />
    <div className="absolute inset-0 z-0 overflow-hidden">
    <motion.div
      className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] bg-blue-600 opacity-20 rounded-full mix-blend-multiply blur-2xl animate-blob"
      animate={{ 
        x: [0, 50, -30, 0], 
        y: [0, -40, 20, 0], 
        scale: [1, 1.2, 0.9, 1] 
      }}
      transition={{
        duration: 20,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    />
  
  <motion.div
    className="absolute bottom-[-120px] right-[-100px] w-[450px] h-[450px] bg-purple-600 opacity-20 rounded-full mix-blend-multiply blur-2xl animate-blob"
    animate={{ 
      x: [0, -50, 30, 0], 
      y: [0, 40, -20, 0], 
      scale: [1, 1.1, 0.95, 1] 
    }}
    transition={{
      duration: 25,
      repeat: Infinity,
      ease: "easeInOut"
    }}
  />
</div>

      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: 4 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 3,
          }}
        >
          <Sparkles className="w-4 h-4 text-white/30" />
        </motion.div>
      ))}

      <motion.div
        ref={ref}
        className="max-w-6xl w-full text-center relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.div variants={titleVariants} className="mb-20 relative">
          <motion.h2 
          className="text-4xl md:text-6xl font-extrabold text-white tracking-tight relative inline-block"
          variants={titleVariants}>
          Our{" "}
          <motion.span 
            className="relative inline-block bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 via-orange-300 to-red-300"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            Mission
          
          </motion.span>
          {" "}&{" "}
          <motion.span 
            className="relative inline-block bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 via-orange-300 to-red-300"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            Vision
          </motion.span>
        </motion.h2>
          
          {/* Animated underline */}
          <motion.div
            className="h-1 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 mx-auto mt-6 rounded-full"
            initial={{ width: 0 }}
            animate={isInView ? { width: "12rem" } : { width: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          />
        </motion.div>

        {/* Mission & Vision Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Mission Card */}
          <motion.div
            variants={cardVariants}
            className="group relative"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-3xl blur-xl"
              animate={{
                scale: [1, 1.05, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            
            <motion.div
              className="relative p-8 rounded-3xl backdrop-blur-md border border-white/20 bg-white/10 shadow-2xl overflow-hidden"
              whileHover={{ 
                scale: 1.05,
                rotateY: 5,
                z: 50
              }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              {/* Animated background gradient */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
              
              <motion.div 
                className="relative z-10"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div 
                  className="flex items-center gap-4 mb-6 text-blue-400 justify-center"
                  whileHover={{ scale: 1.1 }}
                >
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  >
                    <Lightbulb size={40} />
                  </motion.div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white">Our Mission</h3>
                </motion.div>
                
                <motion.p 
                  className="text-gray-300 text-lg leading-relaxed"
                  initial={{ opacity: 0.8 }}
                  whileHover={{ opacity: 1 }}
                >
                  To ignite the entrepreneurial spirit among students by providing mentorship, resources,
                  and an environment that transforms ideas into impactful ventures.
                </motion.p>
              </motion.div>
              
              {/* Animated corner decoration */}
              <motion.div
                className="absolute top-4 right-4 w-16 h-16 bg-blue-400/10 rounded-full"
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.div>
          </motion.div>

          {/* Vision Card */}
          <motion.div
            variants={cardVariants}
            className="group relative"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-3xl blur-xl"
              animate={{
                scale: [1, 1.05, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2
              }}
            />
            
            <motion.div
              className="relative p-8 rounded-3xl backdrop-blur-md border border-white/20 bg-white/10 shadow-2xl overflow-hidden"
              whileHover={{ 
                scale: 1.05,
                rotateY: -5,
                z: 50
              }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              {/* Animated background gradient */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
              
              <motion.div 
                className="relative z-10"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div 
                  className="flex items-center gap-4 mb-6 text-purple-400 justify-center"
                  whileHover={{ scale: 1.1 }}
                >
                  <motion.div
                    animate={{ 
                      scale: [1, 1.1, 1],
                      rotateY: [0, 360, 0]
                    }}
                    transition={{ 
                      duration: 5, 
                      repeat: Infinity, 
                      ease: "easeInOut" 
                    }}
                  >
                    <Eye size={40} />
                  </motion.div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white">Our Vision</h3>
                </motion.div>
                
                <motion.p 
                  className="text-gray-300 text-lg leading-relaxed"
                  initial={{ opacity: 0.8 }}
                  whileHover={{ opacity: 1 }}
                >
                  To build a leading student-driven startup ecosystem that nurtures innovation, drives change,
                  and empowers youth to become future leaders and disruptors.
                </motion.p>
              </motion.div>
              
              {/* Animated corner decoration */}
              <motion.div
                className="absolute top-4 right-4 w-16 h-16 bg-purple-400/10 rounded-full"
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [360, 180, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.div>
          </motion.div>
        </div>

        {/* Animated Bottom Element */}
        <motion.div
          className="mt-16 flex justify-center"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"
            animate={{
              scaleX: [1, 1.5, 1],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}