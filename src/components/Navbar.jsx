import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import logo from "../photos/KSRCE NEO logo.jpg";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Domains", path: "/domain" },
    { name: "Events", path: "/programs" },
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
    exit: { opacity: 0, scale: 0.95, y: -20, transition: { duration: 0.3 } },
  };

  return (
    <motion.header
      initial="hidden"
      animate="visible"
      variants={navVariants}
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled ? "backdrop-blur-md shadow-lg bg-white/80" : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 py-4">
        {/* Logo */}
        <motion.div whileHover={{ scale: 1.08, rotate: -1 }}>
          <Link to="/">
            <img
              src={logo}
              alt="KSRCE NEO Logo"
              className="h-9 sm:h-12 object-contain"
            />
          </Link>
        </motion.div>

        {/* Nav + Apply Now for tablet & desktop */}
        <div className="hidden sm:flex items-center gap-6">
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-sky-800 hover:text-sky-600 transition-colors ${
                location.pathname === link.path
                  ? "text-sky-700 font-semibold"
                  : ""
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link to="/getinvolved">
            <button className="bg-sky-600 hover:bg-sky-700 text-white px-5 py-2 rounded-full shadow transition">
              <b>Apply Now</b>
            </button>
          </Link>
        </div>

        {/* Hamburger for mobile (<640px) */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          className="sm:hidden text-sky-700 text-3xl focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          {menuOpen ? "✕" : "☰"}
        </motion.button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            variants={mobileNavVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="sm:hidden bg-white/95 backdrop-blur text-sky-900 px-6 py-4 space-y-3 shadow-inner"
          >
            {links.map((link) => (
              <motion.div
                key={link.name}
                whileHover={{ scale: 1.03, x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Link
                  to={link.path}
                  className={`block text-base py-1 ${
                    location.pathname === link.path
                      ? "text-sky-700 font-semibold"
                      : ""
                  }`}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}

            <Link to="/getinvolved">
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="bg-sky-600 w-full text-white py-2 rounded-full shadow hover:bg-sky-700"
              >
                <b>Apply Now</b>
              </motion.button>
            </Link>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
