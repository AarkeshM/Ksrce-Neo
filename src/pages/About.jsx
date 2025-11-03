import React from "react";
import { motion } from "framer-motion";
import {
  FaLinkedin,
  FaLightbulb,
  FaUsers,
  FaCompass,
  FaStar,
} from "react-icons/fa";

import venkatesan from "../photos/venkatesan 1.jpg";
import lakshmi from "../photos/lakshmi.jpg";
import murugesan from "../photos/murugesan.jpg";
import pavithran from "../photos/pavithran.jpg";
import harshini from "../photos/harshini1.jpg";

const teamMembers = [
  {
    name: "Dr. K. Lakshmi",
    role: "Director – Innovation and Incubation",
    photo: lakshmi,
    linkedin: "https://www.linkedin.com/in/dr-k-lakshmi-a873b476",
  },
  {
    name: "Dr. A. Murugesan",
    role: "Lead – Innovation and Incubation",
    photo: murugesan,
    linkedin: "https://www.linkedin.com/in/murugesan-arumugam",
  },
  {
    name: "J. Harshini",
    role: "Incubation Manager, KSRCE NEO",
    photo: harshini,
    linkedin:
      "https://www.linkedin.com/in/harshini-jayasankaran-74474813b",
  },
  {
    name: "Pavithran G",
    role: "Incubation Associate, KSRCE NEO",
    photo: pavithran,
    linkedin: "https://www.linkedin.com/in/pavithran-g-a3a333231",
  },
];

// --- Replaced emojis with react-icons ---
const coreValues = [
  {
    title: "Innovation",
    desc: "We champion creativity and encourage the exploration of novel ideas.",
    icon: <FaLightbulb />,
  },
  {
    title: "Collaboration",
    desc: "We believe in the power of teamwork and shared knowledge.",
    icon: <FaUsers />,
  },
  {
    title: "Integrity",
    desc: "We uphold the highest ethical standards in all our endeavors.",
    icon: <FaCompass />,
  },
  {
    title: "Impact",
    desc: "We are committed to creating meaningful and lasting contributions to society.",
    icon: <FaStar />,
  },
];


const fadeInUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.7, ease: "easeOut" },
  },
});

const AboutUs = () => {
  return (
    <section
      id="about"
      // --- Updated background and base text color ---
      className="py-20 px-6 mt-16 bg-slate-50 text-blue-950"
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.div
          variants={fadeInUp(0)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-3 text-blue-950">
            About Us
          </h2>
          {/* --- Added gold accent underline --- */}
          <div className="w-24 h-1 bg-amber-500 mx-auto rounded-full"></div>
        </motion.div>

        {/* Vision & Mission */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {[
            {
              title: "Our Vision",
              desc: "To become a leading hub for technological innovation and entrepreneurship that contributes to regional development, and national and international progress.",
            },
            {
              title: "Our Mission",
              desc: "Support early-stage startups with mentoring, technical guidance, and funding. Build industry-academia linkages and foster entrepreneurial thinking. Enable inclusive development by supporting socially relevant innovations.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              variants={fadeInUp(index * 0.2)}
              initial="hidden"
              whileInView="visible"
              whileHover={{ y: -8 }} // --- Added lift animation ---
              viewport={{ once: true, amount: 0.3 }}
              // --- Applied new card styling with blue/gold border ---
              className="bg-white rounded-xl p-8 shadow-lg transition-all 
                         duration-300 border-b-8 border-blue-900 
                         hover:border-amber-500"
            >
              <h3 className="text-3xl font-bold text-blue-950 mb-4">
                {item.title}
              </h3>
              <p className="text-slate-600 text-lg">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* --- Combined "What is" and "Focus Sectors" into one clean card --- */}
        <motion.div
          variants={fadeInUp(0.3)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="bg-white rounded-xl shadow-lg p-8 md:p-12 mb-16"
        >
          <h3 className="text-3xl font-bold text-blue-950 mb-4">
            What is KSRCE NEO?
          </h3>
          <p className="text-slate-600 text-lg mb-8">
            NEO (Nurturing Emerging Opportunities) — We provide a launch pad for
            young entrepreneurs to ideate, prototype, and build viable business
            models across key domains including AI/ML, IoT, robotics, agri-tech,
            sustainability, and social impact.
          </p>
        </motion.div>

        {/* Team Section */}
        <motion.h3
          variants={fadeInUp(0.7)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-4xl font-bold mt-10 text-center text-blue-950"
        >
          Our Team
        </motion.h3>
        <motion.p
          variants={fadeInUp(0.7)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center text-slate-600 text-lg mt-2 mb-12"
        >
          Meet the brilliant minds at KSRCE NEO
        </motion.p>

        {/* Dean - First Row */}
        <div className="flex justify-center mb-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ y: -8 }} // --- Added lift animation ---
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            // --- Cleaned up card design, added 'group' for hover effects ---
            className="bg-white rounded-xl shadow-lg p-6 text-center 
                       transition-all duration-300 w-80 group 
                       border border-slate-200"
          >
            <img
              src={venkatesan}
              alt="Dr. M. Venkatesan"
              // --- Modernized with rounded-full ---
              className="w-40 h-40 mx-auto mb-4 object-cover rounded-full shadow-md 
                         border-4 border-white"
            />
            <h4 className="text-xl font-bold text-blue-950">
              Dr. M. Venkatesan
            </h4>
            <p className="text-slate-600 text-sm mb-3">
              Dean, K.S.R. College of Engineering
            </p>
            <a
              href="https://www.linkedin.com/in/dr-venkatesan-muthusamy-30842325"
              target="_blank"
              rel="noopener noreferrer"
              // --- Themed the link ---
              className="inline-flex items-center gap-2 text-blue-900 font-semibold 
                         text-sm mt-3 hover:text-amber-500 transition-colors"
            >
              <FaLinkedin /> View LinkedIn
            </a>
          </motion.div>
        </div>

        {/* Remaining Members - Second Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 place-items-center mb-16">
          {teamMembers.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -8 }} // --- Added lift animation ---
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              // --- Cleaned up card design, added 'group' ---
              className="bg-white rounded-xl shadow-lg p-6 text-center 
                         transition-all duration-300 w-full group 
                         border border-slate-200"
            >
              <img
                src={m.photo}
                alt={m.name}
                // --- Modernized with rounded-full ---
                className="w-32 h-32 mx-auto mb-4 object-cover rounded-full 
                           shadow-md border-4 border-white"
              />
              <h4 className="text-lg font-bold text-blue-950">
                {m.name}
              </h4>
              <p className="text-slate-600 text-xs mb-3">{m.role}</p>
              <a
                href={m.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                // --- Themed link, uses gold on group-hover ---
                className="inline-flex items-center gap-1 text-slate-400 text-xs 
                           mt-2 group-hover:text-amber-500 transition-colors"
              >
                <FaLinkedin /> View LinkedIn
              </a>
            </motion.div>
          ))}
        </div>

        {/* Core Values */}
        <motion.h3
          variants={fadeInUp(0.8)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-4xl font-bold mt-10 text-center text-blue-950"
        >
          Core Values
        </motion.h3>
        <motion.div
          variants={fadeInUp(0.8)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="w-20 h-1 bg-amber-500 mx-auto rounded-full mt-3 mb-12"
        ></motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
          {coreValues.map((val, i) => (
            <motion.div
              key={i}
              variants={fadeInUp(0.1 * i)}
              initial="hidden"
              whileInView="visible"
              whileHover={{ y: -8 }} // --- Added lift animation ---
              viewport={{ once: true, amount: 0.3 }}
              // --- Applied new card styling with blue/gold border ---
              className="bg-white rounded-xl p-8 text-center shadow-lg 
                         transition-all duration-300 border-b-8 
                         border-blue-900 hover:border-amber-500"
            >
              {/* --- Themed the icon gold --- */}
              <div className="text-5xl mb-4 text-amber-500">{val.icon}</div>
              <h4 className="text-xl font-bold text-blue-950">
                {val.title}
              </h4>
              <p className="text-slate-600 mt-2 text-sm">{val.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
