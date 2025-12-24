// src/components/GetInvolved.jsx
import React from "react";
import { motion } from "framer-motion";
// --- Added icons for the new design ---
import {
  FaUserGraduate,
  FaRocket,
  FaHandsHelping,
  FaBriefcase,
  FaArrowRight,
} from "react-icons/fa";

// --- Centralized card data for easier management ---
const involvementTypes = [
  {
    title: "For Student Innovators",
    desc: "Students can engage with KSRCE NEO through internships, project collaborations, workshops, and events — gaining hands-on experience, mentorship, and exposure to the startup ecosystem.",
    link: "https://forms.gle/i2BKs1ntzjMjgDGk8",
    buttonText: "Explore Opportunities",
    icon: <FaUserGraduate />,
  },
  {
    title: "For Startups",
    desc: "KSRCE NEO is the perfect launchpad for ambitious startups. Get access to labs, mentorship, networking, and resources to accelerate your business growth.",
    link: "https://forms.gle/jGk9yAakCnLYX1Qc7",
    buttonText: "Apply as a Startup",
    icon: <FaRocket />,
  },
  {
    title: "For Mentors",
    desc: "Industry experts can guide startups and share their expertise, shaping the next generation of entrepreneurs.",
    link: "https://forms.gle/Wc7M6TbAMW5C3JjHA",
    buttonText: "Become a Mentor",
    icon: <FaHandsHelping />,
  },
  {
    title: "For Corporate Partners",
    desc: "Corporations can partner with KSRCE NEO to foster innovation, support cutting-edge technologies, and collaborate on exciting projects.",
    link: "https://forms.gle/VBgGqVhkqPetoWqu8",
    buttonText: "Explore Partnerships",
    icon: <FaBriefcase />,
  },
];

// --- Animation variants ---
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

export default function GetInvolved() {
  return (
    // --- Updated background and padding ---
    <div className="bg-slate-50 mt-16 py-20 px-4 sm:px-6 lg:px-8">
      {/* Title */}
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl sm:text-5xl font-extrabold text-blue-950 mb-4">
          Get Involved
        </h1>
        {/* --- Added gold underline --- */}
        <div className="w-24 h-1 bg-amber-500 mx-auto rounded-full"></div>
      </motion.div>

      {/* Cards wrapper */}
      <div className="grid gap-8 md:grid-cols-2 max-w-6xl mx-auto">
        {involvementTypes.map((item, index) => (
          <motion.div
            key={index}
            custom={index}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            whileHover={{ y: -8 }} // --- Consistent lift animation ---
            // --- Applied new card styling with blue/gold border ---
            className="group bg-white rounded-xl shadow-lg transition-all 
                       duration-300 border-b-8 border-blue-900 
                       hover:border-amber-500 flex flex-col"
          >
            <div className="p-8 flex-grow">
              {/* --- Themed icon --- */}
              <div className="text-5xl mb-5 text-amber-500">{item.icon}</div>
              {/* --- Themed title --- */}
              <h2 className="text-2xl font-bold mb-3 text-blue-950">
                {item.title}
              </h2>
              {/* --- Themed description --- */}
              <p className="text-slate-600 mb-5 leading-relaxed text-sm sm:text-base">
                {item.desc}
              </p>
            </div>

            {/* --- Replaced button with consistent themed button --- */}
            <div className="p-8 pt-0">
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-blue-900 hover:bg-blue-800 text-white px-6 py-3 
                             rounded-full shadow-md transition-all flex 
                             items-center gap-2 font-semibold"
                >
                  {item.buttonText} <FaArrowRight size={12} />
                </motion.button>
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
