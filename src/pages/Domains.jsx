import React from "react";
import { motion } from "framer-motion";
// --- Added react-icons to replace emojis ---
import {
  FaRobot,
  FaBroadcastTower,
  FaCar,
  FaHeartbeat,
  FaGlobeAfrica,
  FaSeedling,
  FaTractor,
} from "react-icons/fa";

// --- Updated data: Removed old color/border properties and added new icons ---
const domainSectors = [
  {
    title: "Deep Tech & Smart Engineering",
    domains: [
      {
        icon: <FaRobot />,
        title: "Artificial Intelligence",
        desc: "Innovative AI-driven solutions and applications.",
      },
      {
        icon: <FaBroadcastTower />,
        title: "IoT & Robotics",
        desc: "Smart connected devices and robotic innovations.",
      },
      {
        icon: <FaCar />,
        title: "Smart Mobility & EVs",
        desc: "Next-gen transportation and electric vehicle solutions.",
      },
      {
        icon: <FaHeartbeat />,
        title: "HealthTech & Biomedical Devices",
        desc: "Technology-driven healthcare and medical devices.",
      },
    ],
  },
  {
    title: "Inclusive & Social Innovation",
    domains: [
      {
        icon: <FaGlobeAfrica />,
        title: "Social Entrepreneurship & Rural Innovation",
        desc: "Innovations that create social impact and empower rural communities.",
      },
    ],
  },
  {
    title: "Green & Sustainable Technologies",
    domains: [
      {
        icon: <FaSeedling />,
        title: "Clean Energy & Sustainable Engineering",
        desc: "Eco-friendly solutions for a sustainable future.",
      },
      {
        icon: <FaTractor />,
        title: "AgriTech & PoultryTech",
        desc: "Smart agriculture and poultry innovations for better productivity.",
      },
    ],
  },
];

// --- Animation variant for the main page titles ---
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

// --- Animation variant for the cards (staggered) ---
const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1, // Staggered delay
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

export default function Domains() {
  return (
    // --- Updated background and top padding ---
    <div className="bg-slate-50 text-center py-20 px-4 mt-16">
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* --- Themed the main title --- */}
        <h1 className="text-4xl font-bold text-blue-950 mb-4">Focus Sectors</h1>
        {/* --- Added gold underline for consistency --- */}
        <div className="w-24 h-1 bg-amber-500 mx-auto rounded-full"></div>
        <p className="max-w-3xl mx-auto text-lg text-slate-600 mb-16 mt-4 px-2">
          Explore the diverse focus sectors at KSRCE NEO, driving innovation in
          Deep Tech, Social Impact, and Green Sustainable Technologies.
        </p>
      </motion.div>

      {domainSectors.map((sector, sectorIndex) => (
        <div key={sectorIndex} className="mb-16">
          {/* --- Themed the sector title --- */}
          <motion.h2
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-3xl font-bold mb-8 text-blue-950"
          >
            {sector.title}
          </motion.h2>

          <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
            {sector.domains.map((domain, index) => {
              return (
                <motion.div
                  key={index}
                  custom={index} // Used for stagger delay
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  whileHover={{ y: -8 }} // --- Clean lift animation ---
                  // --- Removed onClick and 'active' state for a cleaner design ---
                  // --- Applied new card styling with blue/gold border ---
                  className={`w-full sm:w-72 p-8 rounded-xl text-left shadow-lg 
                            bg-white transition-all duration-300 cursor-pointer
                            border-b-8 border-blue-900 hover:border-amber-500`}
                >
                  {/* --- Styled the new icon in gold --- */}
                  <div className="text-5xl mb-5 text-amber-500">
                    {domain.icon}
                  </div>
                  {/* --- Themed the card title --- */}
                  <h3 className="text-xl font-bold mb-2 text-blue-950">
                    {domain.title}
                  </h3>
                  {/* --- Themed the card description --- */}
                  <p className="text-sm text-slate-600">{domain.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
