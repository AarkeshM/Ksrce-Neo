import React from "react";
import { motion } from "framer-motion";
import {
  FaLightbulb,
  FaUsers,
  FaCompass,
  FaStar,
  FaTrophy,
  FaBullseye, 
} from "react-icons/fa";

// --- History/Achievement Data ---
const historyData = [
  {
    year: "2018",
    title: "Foundation",
    desc: "Established the E-Club focusing on grassroots innovation.",
  },
  {
    year: "30+",
    title: "Startups",
    desc: "Successfully supported over 30 early-stage ventures.",
  },
  {
    year: "500+",
    title: "Engagement",
    desc: "Organized 50+ workshops, involving 500+ participants.",
  },
  {
    year: "₹1.5Cr",
    title: "Funding",
    desc: "Helped our incubated startups secure significant seed funding.",
  },
];

// --- Core Values data ---
const coreValues = [
  {
    title: "Innovation",
    desc: "We champion creativity and encourage the exploration of novel ideas and technologies.",
    icon: <FaLightbulb />,
  },
  {
    title: "Collaboration",
    desc: "We believe in the power of shared knowledge, mentorship, and cross-disciplinary teamwork.",
    icon: <FaUsers />,
  },
  {
    title: "Integrity",
    desc: "We uphold the highest ethical standards, promoting transparency and trust in all engagements.", 
    icon: <FaCompass />,
  },
  {
    title: "Impact",
    desc: "We are committed to creating meaningful and lasting contributions to regional and social development.",
    icon: <FaStar />,
  },
];

// --- Animation configuration ---
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
      // Base background for the whole section
      className="bg-gray-50 text-slate-800 font-sans min-h-screen"
    >
      <script src="https://cdn.tailwindcss.com"></script>
      <div className="max-w-7xl mx-auto">
        
        {/* Main Title */}
        <motion.div
            variants={fadeInUp(0)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center py-12 md:py-16 px-4"
        >
            <h2 className="text-4xl md:text-5xl mt-4 font-extrabold text-teal-800">
                The Story Behind Our Success
            </h2>
            <div className="w-24 h-1 bg-amber-500 mx-auto rounded-full mt-3"></div>
        </motion.div>

        {/* --- 1. Our Vision: Enlarged Banner Section --- */}
        <motion.div
            variants={fadeInUp(0.2)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            // Full width, dark background, rounded corners
            className="bg-teal-900 text-white rounded-3xl mx-4 md:mx-8 shadow-2xl shadow-teal-900/40 overflow-hidden mb-20"
        >
            <div className="flex flex-col lg:flex-row items-stretch min-h-[400px]">
                
                {/* Left Side: Illustration / Icon Area (Emphasis) */}
                <div className="w-full lg:w-1/3 p-8 flex flex-col items-center justify-center bg-teal-800 space-y-4">
                    <FaBullseye className="text-7xl md:text-8xl text-amber-400 opacity-90"/>
                    <h3 className="text-3xl font-bold uppercase tracking-widest text-white">
                        Our Vision
                    </h3>
                    <div className="w-16 h-1 bg-amber-400"></div>
                </div>

                {/* Right Side: Vision Text */}
                <div className="w-full lg:w-2/3 p-8 md:p-12 lg:p-16 flex items-center">
                    <p className="text-xl md:text-2xl font-light leading-relaxed text-teal-100">
                        To become a leading hub for technological innovation and entrepreneurship that contributes to regional development, and national and international progress. The aim of the E-Club is to ignite the entrepreneurial spirit and interests in the students while providing assistance to members in building their startup.
                    </p>
                </div>
            </div>
        </motion.div>


        {/* --- 2. Mission & History Flow Section --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 px-4 md:px-8 pb-20">

            {/* Column 1: Our Mission (The next step in the flow) */}
            <motion.div
                variants={fadeInUp(0.4)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="bg-white p-6 md:p-10 rounded-2xl shadow-lg border-t-8 border-amber-500 hover:shadow-xl transition duration-300"
            >
                <h3 className="text-3xl font-extrabold text-teal-800 mb-4 flex items-center">
                    <FaUsers className="text-4xl mr-3 text-amber-500"/> Our Mission
                </h3>
                <p className="text-lg text-slate-700 leading-relaxed mb-6">
                    This is **how we achieve** our vision—by focusing on key areas that support our entrepreneurial community.
                </p>
                <ul className="space-y-4 text-slate-700">
                    <li className="flex items-start">
                        <span className="text-teal-600 text-xl font-bold mr-3">•</span>
                        <p>Support early-stage startups with **mentoring, technical guidance, and funding**.</p>
                    </li>
                    <li className="flex items-start">
                        <span className="text-teal-600 text-xl font-bold mr-3">•</span>
                        <p>Build **industry-academia linkages** and foster entrepreneurial thinking.</p>
                    </li>
                    <li className="flex items-start">
                        <span className="text-teal-600 text-xl font-bold mr-3">•</span>
                        <p>Enable inclusive development by supporting **socially relevant innovations**.</p>
                    </li>
                </ul>
            </motion.div>

            {/* Column 2: Our History (The validation of the mission) */}
            <motion.div
                variants={fadeInUp(0.6)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="bg-white p-6 md:p-10 rounded-2xl shadow-lg border-t-8 border-teal-600 hover:shadow-xl transition duration-300"
            >
                <h3 className="text-3xl font-extrabold text-teal-800 mb-4 flex items-center">
                    <FaTrophy className="text-4xl mr-3 text-teal-600"/> Our History
                </h3>
                <p className="text-lg text-slate-700 leading-relaxed mb-6">
                    **What we've accomplished**—demonstrating the impact of our mission over the years.
                </p>
                
                {/* Achievement Grid */}
                <div className="grid grid-cols-2 gap-4">
                    {historyData.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ delay: index * 0.1 }}
                            className="text-center p-4 bg-teal-50 rounded-lg shadow-sm border border-teal-200"
                        >
                            <div className="text-4xl font-extrabold text-teal-700 mb-1 leading-none">
                                {item.year}
                            </div>
                            <h5 className="text-base font-semibold text-slate-800 mb-1">
                                {item.title}
                            </h5>
                            <p className="text-xs text-slate-600">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </div>


        {/* --- 3. Core Values Section (Responsive Grid) --- */}
        <div className="bg-white py-16 px-4 md:px-8 rounded-t-3xl shadow-inner border-t border-slate-200">
            <h3 className="text-4xl font-extrabold text-center text-teal-800 mb-4">
                Our Core Values
            </h3>
            <div className="w-20 h-1 bg-amber-500 mx-auto rounded-full mb-12"></div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {coreValues.map((val, i) => (
                <motion.div
                key={i}
                variants={fadeInUp(0.1 * i)}
                initial="hidden"
                whileInView="visible"
                whileHover={{ y: -6, scale: 1.02 }}
                viewport={{ once: true, amount: 0.3 }}
                className="bg-slate-50 rounded-xl p-6 md:p-8 text-center shadow-md hover:shadow-xl transition-all duration-300 border-b-4 border-amber-500"
                >
                {/* Themed icon */}
                <div className="text-5xl mb-4 text-teal-600 mx-auto">
                    {val.icon}
                </div>
                <h4 className="text-xl font-bold text-teal-800">
                    {val.title}
                </h4>
                <p className="text-slate-600 mt-2 text-sm">{val.desc}</p>
                </motion.div>
            ))}
            </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;