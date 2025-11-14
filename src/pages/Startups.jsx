import React from "react";
import { motion } from "framer-motion"; 

import {
  FaArrowRight,
  FaRobot,
  FaUsers,
  FaTractor,
  FaCode,
  FaChalkboardTeacher,
  FaDatabase,
} from "react-icons/fa";

import nexgen from "../photos/nexgen.png";
import neura from "../photos/neura.png";
import praskla from "../photos/praskla.jpg";
import azhien from "../photos/newlogo.jpg";
import aprina from "../photos/arpina.png";
import inzovate from "../photos/inzovate.jpg";
import vdo1 from "../photos/vdo1.mp4";
import vdo2 from "../photos/vdo 2.mp4";

const successStories = [
  {
    title: "Azhizen Solutions (OPC) Private Ltd",
    desc: "At KSRCE NEO, innovation starts with students and ideas. Our StartupSpotlight features Azhizen Solutions, founded by Mr. Bharathkumar Ramachandiran and team, who transformed their vision into reality with NEO’s incubation support. From idea to market, their product ‘Easemilker’ has launched successfully and earned grants — a true example of NEO’s role as a launchpad for entrepreneurs.",
    video: vdo1,
  },
  {
    title: "NexGen Nextopia Pvt Ltd",
    desc: "NexGen Nextopia is an innovation-driven ecosystem connecting education and industry to turn ideas into impactful ventures. With expertise in IoT, AI/ML, web development, AR/VR, and digital marketing, it offers complete support from ideation to execution through workshops, mentoring, and investor pitching—empowering students and entrepreneurs to build future-ready products and careers.",
    video: vdo2,
  },
];

const currentStartups = [
  {
    title: "NeuraAI Solutions Private Ltd",
    desc: "AI & ML club fostering innovation, collaboration, and real-world solutions in the artificial intelligence sector.",
    img: neura,
    icon: <FaRobot className="text-amber-500" />,
  },
  {
    title: "Arpina solutions Private Ltd",
    desc: "Driving innovation through BPO, IT placement, and training solutions for tomorrow’s workforce.",
    img: aprina,
    icon: <FaUsers className="text-amber-500" />,
  },
  {
    title: "Azhizen Solutions (OPC) Private Ltd",
    desc: "Revolutionizing Agri & Dairy Tech with Precision Farming Solutions.",
    img: azhien,
    icon: <FaTractor className="text-amber-500" />,
  },
  {
    title: "Praskla Technology",
    desc: "Driving growth through innovative SaaS solutions.",
    img: praskla,
    icon: <FaCode className="text-amber-500" />,
  },
  {
    title: "NexGen Nextopia Private Ltd",
    desc: "Innovating in the Education & Industry 4.0 sector through technology and execution.",
    img: nexgen,
    icon: <FaChalkboardTeacher className="text-amber-500" />,
  },
  {
    title: "Inzovate Technologies",
    desc: "AI-enabled SaaS solutions from CRM to ERP.",
    img: inzovate,
    icon: <FaDatabase className="text-amber-500" />,
  },
];

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

export default function Startups() {
  return (
    <div className="bg-slate-50 mt-8 pt-20 pb-16 min-h-screen text-blue-950">
      {/* Header */}
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl sm:text-5xl font-extrabold text-blue-950 mb-2">
          Our Startups
        </h1>
        <div className="w-24 h-1 bg-amber-500 mx-auto rounded-full"></div>
      </motion.div>

      <section className="px-4 sm:px-6 md:px-12">
        <motion.h2
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-3xl font-bold mb-2 text-center text-blue-950 flex 
                     items-center justify-center gap-3"
        >
        </motion.h2>

        <div className="grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {currentStartups.map((s, i) => (
            <motion.div
              key={i}
              custom={i + successStories.length} // --- Continue stagger ---
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{ y: -8 }} 
              className="group bg-white rounded-xl shadow-lg transition-all 
                         duration-300 text-left border-b-8 
                         border-blue-900 hover:border-amber-500"
            >

              <div className="h-48 flex items-center justify-center p-6">
                <img
                  src={s.img}
                  alt={s.title}
                  className="max-h-32 w-auto object-contain transition-transform 
                             duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-6">
                {/* --- Added icon next to title --- */}
                <div className="flex items-start gap-3 mb-2">
                  <div className="pt-1 flex-shrink-0">{s.icon}</div>
                  <h3 className="font-bold text-lg text-blue-950">
                    {s.title}
                  </h3>
                </div>
                {/* --- Updated text color --- */}
                <p className="text-sm text-slate-600 pl-7">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Apply Button */}
      <div className="flex justify-center mt-20">
        <a href="/getinvolved">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-900 hover:bg-blue-800 text-white px-8 py-3 
                       rounded-full shadow-lg transition-all flex 
                       items-center gap-3 font-semibold text-lg"
          >
            Apply Now <FaArrowRight size={14} />
          </motion.button>
        </a>
      </div>
    </div>
  );
}

