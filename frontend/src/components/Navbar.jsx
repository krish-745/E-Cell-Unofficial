import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; 

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Alumni", path: "/alumni" },
    { name: "Team", path: "/team" },
    { name: "Endeavors", path: "/endeavors" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" }
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-sm bg-opacity-10 text-white px-6 py-4 flex justify-between items-center transition-all duration-300">
      <motion.h1
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="text-xl md:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-blue-400"
      >
        <Link to="/">E-Cell</Link>
      </motion.h1>

      {/* Desktop Menu */}
      <motion.ul
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, staggerChildren: 0.1, delayChildren: 0.2 }}
        className="hidden md:flex gap-6 text-lg"
      >
        {navItems.map((item, index) => (
          <motion.li
            key={item.name}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 * index }}
            whileHover={{ scale: 1.1, y: -3 }}
          >
            <Link
              to={item.path}
              className="hover:text-orange-400 transition-colors duration-300 relative group"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
              <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-gradient-to-r from-orange-400 to-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </Link>
          </motion.li>
        ))}
      </motion.ul>

      {/* Mobile Hamburger */}
      <div className="md:hidden">
        <button onClick={toggleMenu} aria-label="Toggle Menu">
          {isOpen ? (
            <X className="w-8 h-8 text-white  hover:text-orange-400 transition-colors duration-300" />
          ) : (
            <Menu className="w-8 h-8 text-white  hover:text-orange-400 transition-colors duration-300" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="w-44 absolute top-full  right-0 bg-black bg-opacity-70 backdrop-blur-md text-white px-6 py-4 flex flex-col gap-4 md:hidden"
          >
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.05 * index }}
                whileHover={{ scale: 1.05 }}
                className="flex justify-center items-center"
              >
                <Link
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className="w-fit flex justify-center text-lg px-2 hover:text-orange-400 transition-colors duration-300 relative group"
                >
                  {item.name}
                  <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-gradient-to-r from-orange-400 to-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
