import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import logo from "../photos/KSRCE NEO logo.jpg";
import { FaArrowRight } from "react-icons/fa"; // Added for button consistency

/**
 * A custom animated hamburger menu button.
 * It morphs between a "hamburger" and a "cross" icon.
 */
const MenuButton = ({ isOpen, onClick, className = "" }) => {
  const lineVariants = {
    open: (custom) => ({
      rotate: custom.rotate,
      y: custom.y,
    }),
    closed: {
      rotate: 0,
      y: 0,
    },
  };

  return (
    <motion.button
      whileTap={{ scale: 0.95 }}
      className={`sm:hidden text-blue-950 text-3xl focus:outline-none ${className}`}
      onClick={onClick}
      aria-label="Toggle Menu"
    >
      <div className="w-6 h-6 flex flex-col justify-around relative">
        <motion.div
          className="w-full h-0.5 bg-blue-950 rounded-full"
          variants={lineVariants}
          custom={{ rotate: 45, y: 10.5 }}
          animate={isOpen ? "open" : "closed"}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          style={{ originX: "0.5px", originY: "0.5px" }}
        />
        <motion.div
          className="w-full h-0.5 bg-blue-950 rounded-full"
          variants={{ open: { opacity: 0 }, closed: { opacity: 1 } }}
          animate={isOpen ? "open" : "closed"}
          transition={{ duration: 0.1 }}
        />
        <motion.div
          className="w-full h-0.5 bg-blue-950 rounded-full"
          variants={lineVariants}
          custom={{ rotate: -45, y: -10.5 }}
          animate={isOpen ? "open" : "closed"}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          style={{ originX: "0.5px", originY: "0.5px" }}
        />
      </div>
    </motion.button>
  );
};

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

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

  // --- New variants for staggered mobile menu ---
  const mobileMenuContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05, // Each link animates in 0.05s after the previous
      },
    },
    exit: { opacity: 0 },
  };

  const mobileMenuItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -20 },
  };

  return (
    <motion.header
      initial="hidden"
      animate="visible"
      variants={navVariants}
      // --- Updated with new theme colors ---
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "backdrop-blur-md shadow-lg bg-white/90"
          : "bg-slate-50" // Use the "light white" bg
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 py-4">
        {/* Logo */}
        <motion.div whileHover={{ scale: 1.05 }}>
          <Link to="/">
            <img
              src={logo}
              alt="KSRCE NEO Logo"
              className="h-9 sm:h-12 object-contain" // Kept size, it's good
            />
          </Link>
        </motion.div>

        {/* Nav + Apply Now for desktop */}
        <div className="hidden sm:flex items-center gap-6">
          {links.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <motion.div key={link.name} className="relative">
                <Link
                  to={link.path}
                  className={`relative font-medium text-blue-950 transition-colors ${
                    isActive ? "text-amber-500" : "hover:text-amber-500"
                  }`}
                >
                  {link.name}
                </Link>
                {/* --- This is the "magic" underline --- */}
                {isActive && (
                  <motion.div
                    className="absolute bottom-[-6px] left-0 right-0 h-0.5 bg-amber-500"
                    layoutId="underline" // This animates it between links
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 25,
                    }}
                  />
                )}
              </motion.div>
            );
          })}
          {/* --- Updated "Apply Now" button to match Hero theme --- */}
          <Link to="/getinvolved">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-900 hover:bg-blue-800 text-white px-5 py-2 rounded-full shadow-md 
                         transition-all flex items-center gap-2 font-semibold"
            >
              Apply Now <FaArrowRight size={12} />
            </motion.button>
          </Link>
        </div>

        {/* --- Replaced text with animated MenuButton component --- */}
        <MenuButton isOpen={menuOpen} onClick={() => setMenuOpen(!menuOpen)} />
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            variants={mobileMenuContainerVariants} // Stagger container
            initial="hidden"
            animate="visible"
            exit="exit"
            className="sm:hidden bg-white shadow-lg" // Solid white for clarity
          >
            <div className="px-6 py-4 space-y-3">
              {links.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  // --- Each item now staggers in ---
                  <motion.div
                    key={link.name}
                    variants={mobileMenuItemVariants}
                  >
                    <Link
                      to={link.path}
                      className={`block text-lg font-medium transition-colors ${
                        isActive
                          ? "text-amber-500" // Gold for active
                          : "text-blue-950 hover:text-amber-500" // Dark blue for inactive
                      }`}
                      onClick={() => setMenuOpen(false)} // This is good, kept it
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                );
              })}

              <Link to="/getinvolved">
                <motion.button
                  variants={mobileMenuItemVariants}
                  className="bg-blue-900 w-full text-white py-3 rounded-lg shadow 
                             hover:bg-blue-800 font-semibold flex items-center justify-center gap-2"
                >
                  Apply Now <FaArrowRight size={12} />
                </motion.button>
              </Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;