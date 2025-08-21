import { useState, useEffect } from "react";
import SceneCanvas from "../three/SceneCanvas";
import Lens from "./magicui/lens";

export default function TeamPhoto() {
  const [isVisible, setIsVisible] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [textVisible, setTextVisible] = useState(false);

  useEffect(() => {
    // Trigger animations on mount
    const timer = setTimeout(() => setIsVisible(true), 200);
    const textTimer = setTimeout(() => setTextVisible(true), 800);
    return () => {
      clearTimeout(timer);
      clearTimeout(textTimer);
    };
  }, []);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 20;
    setMousePosition({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePosition({ x: 0, y: 0 });
  };

  return (
    <section
      id="team"
      className="relative bg-[#0f172a] min-h-screen w-full flex flex-col justify-center items-center md:px-6 py-12 text-white overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating particles */}
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-2 h-2 bg-gradient-to-r from-orange-400 to-blue-400 rounded-full opacity-20 animate-float`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${8 + Math.random() * 4}s`,
            }}
          />
        ))}
        
        {/* Gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-orange-400/10 to-transparent rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-blue-400/10 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      {/* Main Content Container */}
      <div className="flex flex-col md:flex-row w-full  items-center justify-center px-4">
        
        {/* Enhanced Image Container - Left Side */}
        <div 
          className={`px-0  lg:px-0 z-10 w-full  lg:w-[40vw] rounded-3xl overflow-hidden  shadow-2xl shadow-slate-400/20 transform transition-all duration-1000 ease-out hover:shadow-orange-400/30 hover:border-orange-400/50 ${
            isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-20 opacity-0 scale-95'
          }`}
          style={{
            transitionDelay: '300ms',
            transform: `translateY(${isVisible ? 0 : 80}px) scale(${isVisible ? 1 : 0.95}) perspective(1000px) rotateX(${mousePosition.y * 0.1}deg) rotateY(${mousePosition.x * 0.1}deg)`,
          }}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          {/* Loading shimmer */}
          {!imageLoaded && (
            <div className="absolute inset-0 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 animate-shimmer" />
          )}
          
          {/* Lens with enhanced hover effects */}
          <div className="relative group">
            <Lens 
              zoomFactor={1.4} 
              lensSize={180} 
              lensColor="#000000"
            >
              <img
                src="/IMG_0978.JPG"
                alt="Team"
                className={`w-full lg:max-w-[40vw] lg:max-h-[30vw]  object-cover object-center rounded-2xl transition-all duration-500 group-hover:brightness-110 ${
                  imageLoaded ? 'opacity-100' : 'opacity-0'
                }`}
                onLoad={() => setImageLoaded(true)}
              />
            </Lens>
            
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none" />
            
            {/* Corner accent lights */}
            <div className="absolute top-2 left-2 w-4 h-4 bg-orange-400/50 rounded-full blur-sm group-hover:bg-orange-400 transition-colors duration-300" />
            <div className="absolute top-2 right-2 w-4 h-4 bg-blue-400/50 rounded-full blur-sm group-hover:bg-blue-400 transition-colors duration-300" />
            <div className="absolute bottom-2 left-2 w-4 h-4 bg-purple-400/50 rounded-full blur-sm group-hover:bg-purple-400 transition-colors duration-300" />
            <div className="absolute bottom-2 right-2 w-4 h-4 bg-cyan-400/50 rounded-full blur-sm group-hover:bg-cyan-400 transition-colors duration-300" />
          </div>
        </div>

        {/* Big Animated Cursive Text - Right Side */}
        <div className="w-full lg:w-[40vw] flex items-center justify-center">
          <div className={`transform transition-all duration-1000 ease-out ${textVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`}>
            <h1
  className="text-6xl lg:text-7xl lg:max-w-[40vw] xl:text-8xl font-light text-white leading-tight whitespace-pre-wrap flex flex-col justify-center"
  style={{
    fontFamily: '"Dancing Script", "Great Vibes", "Brush Script MT", cursive',
    fontWeight: '400',
    letterSpacing: '-0.01em'
  }}
>
  {['"dream team', 'behind the', 'vision"'].map((line, lineIndex) => (
    <span key={lineIndex} className="">
      {line.split('').map((char, i) => (
        <span
          key={i}
          className={` animate-fade-in`}
          style={{
            animationDelay: `${(lineIndex * 1.5) + i * 0.08}s`,
            animationFillMode: 'forwards',
            opacity: 0,
          }}
        >
          {char}
        </span>
      ))}
      &nbsp;
    </span>
  ))}
</h1>

          </div>
        </div>
      </div>

      {/* Custom CSS animations */}
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;500;600;700&family=Great+Vibes&display=swap');
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          25% { transform: translateY(-10px) rotate(90deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
          75% { transform: translateY(-10px) rotate(270deg); }
        }
        
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        
        @keyframes typewriter-line1 {
          0% { 
            opacity: 0;
            transform: translateY(30px) scale(0.8);
          }
          30% {
            opacity: 0;
            transform: translateY(30px) scale(0.8);
          }
          100% { 
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        
        @keyframes typewriter-line2 {
          0% { 
            opacity: 0;
            transform: translateY(30px) scale(0.8);
          }
          30% {
            opacity: 0;
            transform: translateY(30px) scale(0.8);
          }
          100% { 
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        
        @keyframes typewriter-line3 {
          0% { 
            opacity: 0;
            transform: translateY(30px) scale(0.8);
          }
          30% {
            opacity: 0;
            transform: translateY(30px) scale(0.8);
          }
          100% { 
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes fade-in {
  0% {
    opacity: 0;
    transform: translateY(20px) scale(0.9);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

.animate-fade-in {
  animation: fade-in 0.5s ease forwards;
}

        
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 3s ease infinite;
        }
        
        .animate-shimmer {
          background: linear-gradient(90deg, #1f2937 25%, #374151 50%, #1f2937 75%);
          background-size: 200% 100%;
          animation: shimmer 2s infinite;
        }
        
        .animate-typewriter-line1 {
          animation: typewriter-line1 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
          opacity: 0;
        }
        
        .animate-typewriter-line2 {
          animation: typewriter-line2 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
          opacity: 0;
        }
        
        .animate-typewriter-line3 {
          animation: typewriter-line3 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
          opacity: 0;
        }
      `}</style>
    </section>
  );
}  