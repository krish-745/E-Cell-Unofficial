import { motion } from "framer-motion";
import SceneCanvas from "../three/SceneCanvas";

export default function Banner() {
  // const eventDate = new Date("2025-08-16T13:30:00+05:30");
  // const today = new Date();
  // const diffTime = eventDate - today;
  // const daysLeft = Math.max(0, Math.ceil(diffTime / (1000 * 60 * 60 * 24)));
  // const hoursLeft = Math.max(0, Math.ceil(diffTime / (1000 * 60 * 60)));

  return (
    <section className="relative w-full overflow-hidden">
      <style>
        {`
          .countdown-banner {
            animation: glowPulse 2s infinite ease-in-out;
          }
          @keyframes glowPulse {
            0% {
              text-shadow: 0 0 5px #000000, 0 0 10px #000000, 0 0 15px #000000;
            }
            50% {
              text-shadow: 0 0 15px #000000, 0 0 25px #000000, 0 0 40px #000000;
            }
            100% {
              text-shadow: 0 0 5px #000000, 0 0 10px #000000, 0 0 15px #000000;
            }
          }
        `}
      </style>

      <div className="absolute inset-0 bg-black opacity-30 z-0"></div>
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-700 opacity-5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-blue-600 opacity-5 rounded-full blur-3xl"></div>

      <div className="absolute inset-0 z-1">
        <SceneCanvas />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="countdown-banner text-white text-center py-4 px-2 font-semibold shadow-lg mt-16 relative z-10 bg-gradient-to-r from-orange-400 via-purple-400 to-blue-400"
      >
        <a href="https://www.instagram.com/ecell_iitpatna">🚀 Check out Xplore - E-Cell Freshers Orientation Here 🎯</a>
      </motion.div>
    </section>
  );
}
