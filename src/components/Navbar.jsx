import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import logo from "../photos/KSRCE NEO logo.jpg";
import { FaArrowRight, FaChevronDown } from "react-icons/fa";

// --- MenuButton Component (Kept as is) ---
const MenuButton = ({ isOpen, onClick, className = "" }) => {
  const lineVariants = {
    open: (custom) => ({ rotate: custom.rotate, y: custom.y }),
    closed: { rotate: 0, y: 0 },
  };

  return (
    <motion.button
      whileTap={{ scale: 0.95 }}
      className={`sm:hidden text-blue-900 text-3xl focus:outline-none ${className}`}
      onClick={onClick}
      aria-label="Toggle Menu"
    >
      <div className="w-6 h-6 flex flex-col justify-around relative">
        <motion.div
          className="w-full h-0.5 bg-blue-900 rounded-full"
          variants={lineVariants}
          custom={{ rotate: 45, y: 10.5 }}
          animate={isOpen ? "open" : "closed"}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
        />
        <motion.div
          className="w-full h-0.5 bg-blue-900 rounded-full"
          variants={{ open: { opacity: 0 }, closed: { opacity: 1 } }}
          animate={isOpen ? "open" : "closed"}
          transition={{ duration: 0.1 }}
        />
        <motion.div
          className="w-full h-0.5 bg-blue-900 rounded-full"
          variants={lineVariants}
          custom={{ rotate: -45, y: -10.5 }}
          animate={isOpen ? "open" : "closed"}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
        />
      </div>
    </motion.button>
  );
};

// --- Header Component ---
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  
  // States for all three dropdowns
  const [aboutOpen, setAboutOpen] = useState(false);
  const [programsOpen, setProgramsOpen] = useState(false);
  const [startupsOpen, setStartupsOpen] = useState(false);
  
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    // Close all dropdowns when navigating
    setAboutOpen(false);
    setProgramsOpen(false);
    setStartupsOpen(false);
  }, [location.pathname]);

  // --- Navigation Data ---
  const links = [
    { name: "Home", path: "/" },
    { name: "About us" }, // Dropdown
    { name: "Programs" }, // New Dropdown
    { name: "StartUps" }, // New Dropdown
    { name: "Innovation club", path: "/innovationclub" }, // Single Link
    { name: "Contact us", path: "/contact" },
  ];

  const aboutSubmenu = [
    { name: "Vision", path: "/about" },
    { name: "Our Team", path: "/ourteam" },
    { name: "Facilities", path: "/facilities" },
    { name: "Sectors", path: "/domain" },
    { name: "Our Partners", path: "/partners" },
  ];
  
  const programsSubmenu = [
    { name: "Pre Incubation", path: "/programs/preincubation" },
    { name: "Incubation", path: "/programs/incubation" },
    { name: "Events", path: "/programs" },
  ];
  
  const startupsSubmenu = [
    { name: "Startups@KsrceNeo", path: "/startups" },
    { name: "Success Stories", path: "/successstories" },
  ];
  // --- End Navigation Data ---

  const navVariants = {
    hidden: { y: -30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const mobileMenuContainerVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: { 
        opacity: 1, 
        height: "auto", 
        transition: { 
            duration: 0.25,
            when: "beforeChildren", 
            staggerChildren: 0.05 
        } 
    },
    exit: { 
        opacity: 0, 
        height: 0, 
        transition: { duration: 0.25 } 
    },
  };

  const mobileMenuItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -20 },
  };

  // Function to check if a link or its submenu is active
  const isActivePath = (path, submenu) => {
    return (submenu && submenu.some(sub => sub.path === location.pathname)) || location.pathname === path;
  };

  // Function to handle opening a specific dropdown and closing others (for mobile)
  const handleDropdownToggle = (setter, isOpen) => {
    // Close all other dropdowns
    if (setter !== setAboutOpen) setAboutOpen(false);
    if (setter !== setProgramsOpen) setProgramsOpen(false);
    if (setter !== setStartupsOpen) setStartupsOpen(false);
    
    // Toggle the target dropdown
    setter(!isOpen);
  };


  return (
    <motion.header
      initial="hidden"
      animate="visible"
      variants={navVariants}
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "backdrop-blur-sm shadow-xl bg-white/95" 
          : "bg-slate-50"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 py-4">
        {/* Logo */}
        <motion.div whileHover={{ scale: 1.05 }}>
          <Link to="/">
            <img src={logo} alt="KSRCE NEO Logo" className="h-10 sm:h-11 object-contain" />
          </Link>
        </motion.div>

        {/* --- Desktop Nav (Tablet and up) --- */}
        {/* FIX: Further reduced gap for tablet (sm:gap-2) to accommodate more links */}
        <div className="hidden sm:flex items-center sm:gap-2 lg:gap-6 relative">
          {links.map((link) => {
            let submenu = null;
            let isOpen = false;
            let setter = null;
            let active = false;

            // Determine link type, submenu, state, and setter
            if (link.name === "About us") {
              submenu = aboutSubmenu;
              isOpen = aboutOpen;
              setter = setAboutOpen;
            } else if (link.name === "Programs") {
              submenu = programsSubmenu;
              isOpen = programsOpen;
              setter = setProgramsOpen;
            } else if (link.name === "StartUps") {
              submenu = startupsSubmenu;
              isOpen = startupsOpen;
              setter = setStartupsOpen;
            }
            
            active = isActivePath(link.path, submenu);

            // Handle dropdown links
            if (submenu) {
              return (
                <div
                  key={link.name}
                  className="relative group h-full flex items-center"
                  onMouseEnter={() => setter(true)}
                  onMouseLeave={() => setter(false)}
                >
                  <span
                    // Key fix: Used text-sm for compactness
                    className={`flex items-center gap-1 font-semibold text-sm text-blue-900 cursor-pointer whitespace-nowrap transition-colors ${
                      active ? "text-amber-500" : "hover:text-amber-500"
                    }`}
                  >
                    {link.name}
                    <FaChevronDown
                      className={`transition-transform duration-300 ${
                        isOpen || active ? "rotate-180 text-amber-500" : "rotate-0"
                      }`}
                      size={12}
                    />
                  </span>

                  {/* Dropdown Menu */}
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scaleY: 0.9 }}
                        animate={{ opacity: 1, y: 0, scaleY: 1 }}
                        exit={{ opacity: 0, y: 10, scaleY: 0.9 }}
                        style={{ originY: 0 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full z-50 left-1/2 -translate-x-1/2 mt-4 bg-white shadow-xl rounded-lg min-w-44 border border-slate-100 py-1 whitespace-nowrap"
                      >
                        {submenu.map((sub) => (
                          <Link
                            key={sub.name}
                            to={sub.path}
                            className="block px-4 py-2 text-sm text-blue-900 hover:bg-amber-50 hover:text-amber-600 font-medium transition-colors"
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            }

            // Handle standard links (including Innovation club now)
            return (
              <motion.div key={link.name} className="relative">
                <Link
                  to={link.path}
                  // Key fix: Used text-sm for compactness
                  className={`relative font-semibold text-sm text-blue-900 whitespace-nowrap transition-colors ${
                    active ? "text-amber-500" : "hover:text-amber-500"
                  }`}
                >
                  {link.name}
                </Link>
                {active && (
                  <motion.div
                    className="absolute bottom-[-6px] left-0 right-0 h-0.5 bg-amber-500"
                    layoutId="underline"
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  />
                )}
              </motion.div>
            );
          })}

          {/* Apply Now Button */}
          <Link to="/getinvolved">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)" }}
              whileTap={{ scale: 0.95 }}
              // FIX: Further reduced padding for tablet (sm:px-2) to ensure it fits
              className="bg-blue-900 text-white sm:px-2 lg:px-5 py-2 rounded-full shadow-lg 
                                  transition-all flex items-center gap-1.5 font-bold text-sm whitespace-nowrap"
            >
              Apply Now <FaArrowRight size={10} />
            </motion.button>
          </Link>
        </div>

        {/* Mobile Menu Button (Visible below tablet view) */}
        <MenuButton isOpen={menuOpen} onClick={() => setMenuOpen(!menuOpen)} />
      </div>

      {/* --- Mobile Menu (Dropdown Panel) --- */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            variants={mobileMenuContainerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="sm:hidden bg-white shadow-inner"
          >
            <div className="px-6 py-4 space-y-4">
              {links.map((link) => {
                let submenu = null;
                let isOpen = false;
                let setter = null;
                let active = false;

                if (link.name === "About us") {
                  submenu = aboutSubmenu;
                  isOpen = aboutOpen;
                  setter = setAboutOpen;
                } else if (link.name === "Programs") {
                  submenu = programsSubmenu;
                  isOpen = programsOpen;
                  setter = setProgramsOpen;
                } else if (link.name === "StartUps") {
                  submenu = startupsSubmenu;
                  isOpen = startupsOpen;
                  setter = setStartupsOpen;
                }
                
                active = isActivePath(link.path, submenu);

                if (submenu) {
                  return (
                    <motion.div key={link.name} variants={mobileMenuItemVariants}>
                      <button
                        // Use the combined handler for mobile accordion
                        onClick={() => handleDropdownToggle(setter, isOpen)}
                        className={`w-full flex justify-between items-center text-lg font-bold py-1 transition-colors ${
                            isOpen || active ? "text-amber-600" : "text-blue-900 hover:text-amber-500"
                        }`}
                      >
                        {link.name}
                        <FaChevronDown
                          className={`transition-transform duration-300 ${
                            isOpen ? "rotate-180" : "rotate-0"
                          }`}
                        />
                      </button>
                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="ml-4 mt-2 space-y-2 border-l-2 border-amber-500 pl-4"
                          >
                            {submenu.map((sub) => (
                              <Link
                                key={sub.name}
                                to={sub.path}
                                onClick={() => setMenuOpen(false)}
                                role="menuitem"
                                className="block text-base font-medium text-blue-800 hover:text-amber-500 transition-colors"
                              >
                                {sub.name}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                }

                // Standard Link (including Innovation club)
                return (
                  <motion.div key={link.name} variants={mobileMenuItemVariants}>
                    <Link
                      to={link.path}
                      role="menuitem"
                      className={`block text-lg font-bold py-1 transition-colors ${
                        active
                          ? "text-amber-500"
                          : "text-blue-900 hover:text-amber-500"
                      }`}
                      onClick={() => setMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                );
              })}

              {/* Mobile Apply Now Button */}
              <motion.div variants={mobileMenuItemVariants}>
                <Link to="/getinvolved">
                  <motion.button
                    whileTap={{ scale: 0.98 }}
                    className="bg-blue-900 w-full text-white py-3 rounded-lg shadow-md hover:bg-blue-800 font-bold flex items-center justify-center gap-2 mt-4"
                  >
                    Apply Now <FaArrowRight size={12} />
                  </motion.button>
                </Link>
              </motion.div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;