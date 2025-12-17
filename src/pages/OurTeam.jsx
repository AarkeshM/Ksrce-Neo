import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaUserTie } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa";

// Ensure you have these paths correct in your project
import DEAN_PHOTO from "../photos/venkatesan 1.jpg";
import MURUGESAN_PHOTO from "../photos/murugesan.jpg";
import HARSHINI_PHOTO from "../photos/harshini1.jpg";
import PAVITHRAN_PHOTO from "../photos/pavithran.jpg";   
import lakshmiPhoto from "../photos/lakshmi.jpg";

// --- ANIMATION HELPER ---
const fadeInUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.8, 
      delay, 
      type: "spring", 
      damping: 12, 
      stiffness: 100 
    } 
  },
});

// --- Team Data ---
const teamMembers = [
  {
    name: "Dr. K. Lakshmi",
    role: "Director – Innovation and Incubation",
    photo: lakshmiPhoto,
    linkedin: "https://www.linkedin.com/in/dr-k-lakshmi-a873b476",
  },
  {
    name: "Dr. A. Murugesan",
    role: "Lead – Innovation and Incubation",
    photo: MURUGESAN_PHOTO,
    linkedin: "https://www.linkedin.com/in/murugesan-arumugam",
  },
  {
    name: "J. Harshini",
    role: "Incubation Manager, KSRCE NEO",
    photo: HARSHINI_PHOTO,
    linkedin: "https://www.linkedin.com/in/harshini-jayasankaran-74474813b",
  },
  {
    name: "Pavithran G",
    role: "Incubation Associate, KSRCE NEO",
    photo: PAVITHRAN_PHOTO,
    linkedin: "https://www.linkedin.com/in/pavithran-g-a3a333231",
  },
];

const OurTeam = () => {
  return (
    // UPDATED: Added bg-slate-50 for better contrast against white cards
    // UPDATED: Adjusted padding px-4 (mobile) -> px-8 (tablet) -> px-24 (desktop)
    <div id="our-team" className="min-h-screen bg-slate-50 px-4 md:px-8 lg:px-24 py-12 md:py-20 font-sans">
      
      {/* --- Header Section --- */}
      <motion.div
        variants={fadeInUp(0.2)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-center mb-12 md:mb-16 max-w-4xl mx-auto"
      >
        {/* UPDATED: text-3xl (mobile) -> text-5xl (desktop) */}
        <h3 className="text-3xl md:text-5xl font-black text-blue-900 tracking-tight flex flex-col md:flex-row justify-center items-center gap-3 mb-3 mt-8">
          <FaUserTie className="text-amber-500 text-4xl md:text-5xl" /> 
          <span>Meet Our Leadership</span>
        </h3>
        <div className="w-20 h-1 bg-amber-500 mx-auto rounded-full mb-6"></div>

        <p className="text-slate-600 text-base md:text-lg max-w-2xl mx-auto">
          Guiding our innovation ecosystem are dedicated leaders committed to fostering entrepreneurial excellence and impact.
        </p>
      </motion.div>
      
      {/* --- 1. Dean Card (Hierarchy Highlight) --- */}
      <div className="flex justify-center mb-16 relative px-2">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          whileHover={{ 
            y: -10, 
            boxShadow: "0 25px 50px rgba(0, 0, 0, 0.20)",
          }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          // UPDATED: max-w-xs (mobile) -> max-w-lg (desktop). p-6 (mobile) -> p-12 (desktop)
          className="bg-white rounded-3xl shadow-xl p-6 md:p-12 text-center w-full max-w-xs md:max-w-lg relative 
                     border-t-4 border-l-0 border-r-0 md:border-l-4 md:border-r-4 border-blue-900 overflow-hidden"
          style={{
            borderBottom: "8px solid transparent",
            borderImage: "linear-gradient(to right, #1E3A8A, #F59E0B) 1",
          }}
        >
          {/* Badge */}
          <div className="absolute top-0 right-0 bg-amber-500 text-white text-[10px] md:text-xs font-bold px-3 py-1 rounded-bl-lg">
            SENIOR LEADERSHIP
          </div>

          <img
            src={DEAN_PHOTO}
            alt="Dr. M. Venkatesan"
            // UPDATED: Slightly smaller image on mobile (w-32) vs desktop (w-40)
            className="w-32 h-32 md:w-40 md:h-40 mx-auto mb-4 md:mb-6 object-cover rounded-full shadow-xl ring-4 ring-blue-50"
          />
          
          <h4 className="text-2xl md:text-3xl font-extrabold text-blue-900 mb-1">
            Dr. M. Venkatesan
          </h4>
          <p className="text-blue-600 text-base md:text-lg font-semibold italic mb-6">
            Dean, K.S.R. College of Engineering
          </p>
          
          <motion.a 
            href="https://www.linkedin.com/in/dr-venkatesan-muthusamy-30842325"
            target="_blank"
            rel="noopener noreferrer"
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 text-white bg-blue-900 hover:bg-amber-500 
                       font-bold py-2.5 px-6 rounded-full transition-colors shadow-lg shadow-blue-900/20 text-sm md:text-base"
          >
            <FaLinkedin className="text-lg" /> Connect on LinkedIn
          </motion.a>
        </motion.div>
      </div>

      {/* --- Section Title --- */}
      <h4 className="text-2xl md:text-3xl font-bold text-center text-blue-900 mb-8 md:mb-12 flex items-center justify-center gap-2">
        <FaGraduationCap className="text-amber-500 text-3xl"/> Incubation Team
      </h4>

      {/* --- 2. Remaining Members Grid --- */}
      {/* UPDATED: grid-cols-1 (Mobile) -> grid-cols-2 (Tablet) -> grid-cols-4 (Desktop) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 place-items-center max-w-7xl mx-auto pb-10">
        {teamMembers.map((m, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ 
              y: -8, 
              boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" 
            }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            // UPDATED: Added w-full max-w-xs to ensure cards don't get too wide on mobile
            className="bg-white rounded-2xl shadow-md p-6 text-center w-full max-w-xs h-full flex flex-col items-center justify-between
                       border-t-4 border-amber-500 hover:border-blue-900 transition-all duration-300"
          >
            <div>
                <img
                src={m.photo}
                alt={m.name}
                className="w-28 h-28 md:w-32 md:h-32 mx-auto mb-4 object-cover rounded-full shadow-lg ring-2 ring-slate-100"
                />
                <h4 className="text-lg md:text-xl font-bold text-blue-900 mb-1 leading-tight">
                    {m.name}
                </h4>
                <p className="text-slate-500 text-xs md:text-sm font-medium mb-4 h-10 flex items-center justify-center">
                    {m.role}
                </p>
            </div>
            
            <motion.a 
              href={m.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              whileTap={{ scale: 0.9 }}
              className="inline-flex items-center gap-2 text-blue-600 hover:text-amber-600 transition-colors text-sm font-semibold bg-blue-50 px-4 py-2 rounded-lg w-full justify-center"
            >
              <FaLinkedin className="text-lg" /> Profile
            </motion.a>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default OurTeam;