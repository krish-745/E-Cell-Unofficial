import { motion, useInView } from "framer-motion";
import { TrendingUp, Globe, Rocket, Star } from "lucide-react";
import { useRef, useState, useEffect } from "react";

const CountUp = ({ end, suffix, duration = 2, isInView }) => {
  const [count, setCount] = useState(0);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (isInView && !hasAnimated.current) {
      hasAnimated.current = true;
      let startTime = null;

      const animate = (currentTime) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
        setCount(Math.floor(progress * end));
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    }
  }, [isInView, end, duration]);

  return <span>{count}{suffix}</span>;
};

export default function Achievements() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const items = [
    {
      title: "10+ Startups",
      desc: "Founded by our alumni",
      icon: Rocket,
      color: "from-orange-400 to-blue-500",
      bgColor: "from-orange-200/20 to-red-500/20",
      count: 10,
      suffix: "+"
    },
    {
      title: "₹50C=L+ Funding",
      desc: "Raised collectively",
      icon: TrendingUp,
      color: "from-orange-400 to-blue-500",
      bgColor: "from-green-200/20 to-emerald-500/20",
      count: 50,
      suffix: "L+"
    },
    {
      title: "Global Recognition",
      desc: "Alumni in 12+ countries",
      icon: Globe,
      color: "from-orange-400 to-blue-500",
      bgColor: "from-blue-300/20 to-purple-500/20",
      count: 12,
      suffix: "+"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 80,
      scale: 0.8,
      rotateX: -15
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section 
      id="achievements" 
      className="min-h-screen py-20 px-6 md:px-20 text-white bg-[#0f172a] relative overflow-hidden"
    >
      
      {/* Animated Background Elements */}
      <motion.div
        className="absolute top-10 left-10 w-40 h-40 bg-yellow-500/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-32 h-32 bg-purple-500/5 rounded-full blur-2xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />
      <motion.div
        className="absolute top-1/2 left-1/3 w-24 h-24 bg-green-500/5 rounded-full blur-xl"
        animate={{
          y: [-20, 20, -20],
          x: [-10, 10, -10],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />

      <motion.div
        ref={ref}
        className="relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* Enhanced Title */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: -50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center gap-4 mb-6"
            whileHover={{ scale: 1.05 }}
          >
            
            <h2 className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-orange-400 via-white-300 to-blue-500 bg-clip-text text-transparent">
              Achievements
            </h2>
            
          </motion.div>
          
          {/* Animated subtitle */}
          <motion.p
            className="text-xl text-gray-400 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Celebrating milestones that define our entrepreneurial journey
          </motion.p>
          
          {/* Animated underline */}
          <motion.div
            className="h-1 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 mx-auto mt-6 rounded-full"
            initial={{ width: 0 }}
            animate={isInView ? { width: "8rem" } : { width: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          />
        </motion.div>

        {/* Achievement Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {items.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                variants={itemVariants}
                className="group relative"
                onHoverStart={() => setHoveredIndex(i)}
                onHoverEnd={() => setHoveredIndex(null)}
              >
                {/* Glowing background effect */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${item.bgColor} rounded-3xl blur-xl`}
                  animate={{
                    scale: hoveredIndex === i ? 1.1 : 1,
                    opacity: hoveredIndex === i ? 0.8 : 0.4,
                  }}
                  transition={{ duration: 0.3 }}
                />
                
                {/* Main card */}
                <motion.div
                  className="relative bg-white/10 p-8 rounded-3xl backdrop-blur-md border border-white/20 text-center shadow-2xl overflow-hidden"
                  whileHover={{ 
                    scale: 1.05,
                    rotateY: 5,
                    z: 50
                  }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                >
                  {/* Animated background gradient overlay */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${item.bgColor} opacity-0 group-hover:opacity-20`}
                    transition={{ duration: 0.3 }}
                  />
                  
                  {/* Floating icon */}
                  <motion.div
                    className="relative z-10 mb-6 flex justify-center"
                    animate={{
                      y: hoveredIndex === i ? -10 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div
                      className={`p-4 rounded-2xl bg-gradient-to-br ${item.color} shadow-lg`}
                      animate={{
                        rotate: hoveredIndex === i ? 360 : 0,
                        scale: hoveredIndex === i ? 1.1 : 1,
                      }}
                      transition={{ duration: 0.6 }}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </motion.div>
                  </motion.div>
                  
                  {/* Counter - Removed hover animations */}
                  <div className="relative z-10 mb-4">
                    <h3 className={`text-4xl md:text-5xl font-bold bg-gradient-to-r ${item.color} bg-clip-text text-transparent mb-2`}>
                      {item.title.includes('₹') ? '₹' : ''}
                      <CountUp 
                        end={item.count} 
                        suffix={item.suffix} 
                        duration={2 + i * 0.5} 
                        isInView={isInView}
                      />
                      {item.title.includes('Startups') && ' Startups'}
                      {item.title.includes('Global') && ' Countries'}
                    </h3>
                  </div>
                  
                  <motion.p 
                    className="text-gray-300 text-lg relative z-10"
                    animate={{
                      opacity: hoveredIndex === i ? 1 : 0.8,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {item.desc}
                  </motion.p>
                  
                  {/* Animated corner decoration */}
                  <motion.div
                    className={`absolute top-4 right-4 w-12 h-12 bg-gradient-to-br ${item.color} opacity-20 rounded-full`}
                    animate={{
                      scale: [1, 1.2, 1],
                      rotate: [0, 180, 360],
                    }}
                    transition={{
                      duration: 4 + i,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  
                  {/* Success indicator */}
                  <motion.div
                    className="absolute bottom-4 left-4 flex items-center gap-1"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ 
                      opacity: hoveredIndex === i ? 1 : 0,
                      x: hoveredIndex === i ? 0 : -20 
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-xs text-gray-400">Achievement</span>
                  </motion.div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom decorative element */}
        <motion.div
          className="mt-20 flex justify-center items-center gap-4"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <motion.div
            className="w-2 h-2 bg-yellow-400 rounded-full"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="w-20 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full"
            animate={{
              scaleX: [1, 1.2, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="w-2 h-2 bg-orange-500 rounded-full"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5
            }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}