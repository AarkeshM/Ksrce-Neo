import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaUserTie } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa";

import DEAN_PHOTO from "../photos/venkatesan 1.jpg";
import MURUGESAN_PHOTO from "../photos/murugesan.jpg";
import HARSHINI_PHOTO from "../photos/harshini1.jpg";
import PAVITHRAN_PHOTO from "../photos/pavithran.jpg";  
import lakshmiPhoto from "../photos/lakshmi.jpg";
// --- ANIMATION HELPER (Enhanced Spring Animation) ---
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

// --- Team Data (Now using placeholders) ---
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
    <div id="our-team" className="min-h-screen bg-white px-4 lg:px-24 py-20 font-sans">
      <script src="https://cdn.tailwindcss.com"></script>
      
      {/* --- Header Section --- */}
      <motion.div
        variants={fadeInUp(0.2)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-center mb-16 max-w-4xl mx-auto"
      >
        <h3 className="text-4xl md:text-5xl font-black text-blue-900 tracking-tight flex justify-center items-center gap-3 mb-3">
          <FaUserTie className="text-amber-500 text-5xl" /> 
          Meet Our Leadership
        </h3>
        <div className="w-20 h-1 bg-amber-500 mx-auto rounded-full mb-6"></div>

        <p className="text-slate-600 text-lg">
          Guiding our innovation ecosystem are dedicated leaders committed to fostering entrepreneurial excellence and impact.
        </p>
      </motion.div>
      
      {/* --- 1. Dean Card (Hierarchy Highlight) --- */}
      <div className="flex justify-center mb-20 relative">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          whileHover={{ 
            y: -15, 
            boxShadow: "0 30px 60px rgba(0, 0, 0, 0.25)",
            transition: { type: "spring", stiffness: 200 } 
          }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: "spring", damping: 10 }}
          className="bg-white rounded-2xl shadow-2xl p-8 text-center w-full max-w-sm transition-all duration-300 relative 
                     border-t-4 border-l-4 border-r-4 border-blue-900 overflow-hidden 
                     md:p-12"
          style={{
            // Custom Gradient Border Accent (Bottom)
            borderBottom: "8px solid transparent",
            borderImage: "linear-gradient(to right, #1E3A8A, #F59E0B) 1",
          }}
        >
          {/* Top Tag for clear role definition */}
          <div className="absolute top-0 right-0 bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
            SENIOR LEADERSHIP
          </div>

          <img
            // Dean's photo placeholder
            src={DEAN_PHOTO}
            alt="Dr. M. Venkatesan"
            className="w-40 h-40 mx-auto mb-6 object-cover rounded-full shadow-xl ring-4 ring-blue-100"
          />
          <h4 className="text-3xl font-extrabold text-blue-900">
            Dr. M. Venkatesan
          </h4>
          <p className="text-blue-700 text-lg font-semibold italic mb-6">
            Dean, K.S.R. College of Engineering
          </p>
          
          <motion.a 
            href="https://www.linkedin.com/in/dr-venkatesan-muthusamy-30842325"
            target="_blank"
            rel="noopener noreferrer"
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 text-white bg-blue-900 hover:bg-amber-500 
                       font-bold py-2 px-6 rounded-full transition-colors shadow-lg shadow-blue-900/30"
          >
            <FaLinkedin className="text-xl" /> Connect
          </motion.a>
        </motion.div>
      </div>

      <h4 className="text-3xl font-bold text-center text-blue-900 mb-10 mt-16 flex items-center justify-center">
        <FaGraduationCap className="text-amber-500 mr-3"/> Incubation Team
      </h4>

      {/* --- 2. Remaining Members - Clean Grid --- */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 place-items-stretch pb-10 max-w-6xl mx-auto">
        {teamMembers.map((m, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ 
              y: -8, 
              boxShadow: "0 15px 30px rgba(0, 0, 0, 0.1)",
              backgroundColor: "#F8FAFF" 
            }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5, type: "spring", stiffness: 150 }}
            className="bg-white rounded-xl shadow-lg p-6 text-center w-full transition-all duration-300 border-t-4 border-amber-500 hover:border-blue-900"
          >
            <img
              // Team member photo placeholder
              src={m.photo}
              alt={m.name}
              className="w-32 h-32 mx-auto mb-4 object-cover rounded-full shadow-lg ring-2 ring-amber-100"
            />
            <h4 className="text-xl font-bold text-blue-900">{m.name}</h4>
            <p className="text-slate-500 text-sm mt-1 mb-4">{m.role}</p>
            
            <motion.a 
              href={m.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              whileTap={{ scale: 0.9 }}
              className="inline-flex items-center gap-1 text-blue-900 text-base mt-2 hover:text-amber-500 transition-colors font-semibold"
            >
              <FaLinkedin className="text-lg" /> View Profile
            </motion.a>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default OurTeam;