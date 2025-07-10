import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import "../styles/NavStyles.css";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Domains", path: "/domain"},
    { name: "Programs", path: "/programs" },
    { name: "StartUps", path: "/startups" },
    { name: "GetInvolved", path: "/getinvolved" },
  ];

  const navVariants = {
    hidden: { y: -30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const mobileNavVariants = {
    hidden: { opacity: 0, scale: 0.95, y: -20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { type: "spring", stiffness: 120, damping: 15 },
    },
    exit: {
      opacity: 0,
      scale: 0.95,
      y: -20,
      transition: { duration: 0.3 },
    },
  };

  return (
    <motion.header
      initial="hidden"
      animate="visible"
      variants={navVariants}
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? " backdrop-blur-md shadow-lg text-white"
          : "bg-transparent text-white"
      }`}
      
    >
      <div className="px-4 sm:px-6 py-3 flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.08, rotate: -2 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Link to="/">
            <h1 className="text-lg sm:text-2xl font-extrabold text-orange-400 tracking-wider">
              KSRCE <span className="text-indigo-800">NEO</span>
            </h1>
          </Link>
        </motion.div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 text-sm">
          {links.map((link, index) => (
            <motion.div
              key={link.name}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <Link
                to={link.path}
                className={`animated-link relative ${
                  location.pathname === link.path ? "text-blue-400 glow" : ""
                }`}
              >
                {link.name}
              </Link>
            </motion.div>
          ))}
        </nav>

        {/* Apply Now (Desktop) */}
        <motion.div whileHover={{ scale: 1.1 }} className="hidden md:block">
          <button className="bg-indigo-600 px-4 py-2 rounded-full shadow hover:bg-sky-700 transition">
            Apply Now
          </button>
        </motion.div>

        {/* Mobile Menu Button */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          className="md:hidden text-white text-2xl focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          {menuOpen ? "✕" : "☰"}
        </motion.button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            variants={mobileNavVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="md:hidden text-blue-950 font-ultrabold bg-transparent backdrop-blur px-6 py-4 space-y-2 shadow-inner"
          >
            {links.map((link) => (
              <motion.div
                key={link.name}
                whileHover={{ scale: 1.03, x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Link
                  to={link.path}
                  className={`block text-sm py-1 ${
                    location.pathname === link.path ? "text-blue-700 glow" : ""
                  }`}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}

            <motion.button
              whileHover={{ scale: 1.05 }}
              className=" bg-sky-600 w-full text-white py-2 rounded-full hover:bg-sky-700 shadow"
            >
              Apply Now
            </motion.button>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
