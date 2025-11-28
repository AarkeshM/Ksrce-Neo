import React from "react";
import { motion } from "framer-motion";
import {
  Lightbulb,
  Users,
  Compass,
  Star,
  Target,
  Rocket,
  Flag,
} from "lucide-react";

// --- Core Values data ---
const coreValues = [
  {
    title: "Innovation",
    desc: "We champion creativity and encourage the exploration of novel ideas and technologies.",
    icon: <Lightbulb className="w-full h-full" />,
  },
  {
    title: "Collaboration",
    desc: "We believe in the power of shared knowledge, mentorship, and cross-disciplinary teamwork.",
    icon: <Users className="w-full h-full" />,
  },
  {
    title: "Integrity",
    desc: "We uphold the highest ethical standards, promoting transparency and trust in all engagements.",
    icon: <Compass className="w-full h-full" />,
  },
  {
    title: "Impact",
    desc: "We are committed to creating meaningful and lasting contributions to regional and social development.",
    icon: <Star className="w-full h-full" />,
  },
];

// --- Animation configuration ---
// Basic fade up for sections
const fadeInUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }, // Custom ease for smoother entry
  },
});

// Parent container for staggered lists
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

// Child item for staggered lists
const staggerItem = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

// Icon pop animation
const iconPop = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 15,
      delay: 0.2,
    },
  },
};

// Background blob animation
const blobAnimation = {
  animate: {
    translateY: ["-20px", "20px", "-20px"],
    translateX: ["-15px", "15px", "-15px"],
    rotate: [0, 10, -10, 0],
    scale: [1, 1.05, 0.95, 1],
    transition: {
      duration: 15,
      repeat: Infinity,
      repeatType: "mirror",
      ease: "easeInOut",
    },
  },
};

const AboutUs = () => {
  return (
    <section
      id="about"
      className="relative bg-gray-50 text-slate-800 font-sans min-h-screen overflow-hidden"
    >
      {/* --- Ambient Background Effects --- */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <motion.div
          variants={blobAnimation}
          animate="animate"
          className="absolute top-[-10%] left-[-5%] w-72 h-72 md:w-96 md:h-96 bg-teal-200/30 rounded-full blur-3xl filter mix-blend-multiply"
        ></motion.div>
        <motion.div
          variants={blobAnimation}
          animate="animate"
          transition={{ delay: 2 }} // Offset animation
          className="absolute bottom-[10%] right-[-10%] w-[20rem] h-[20rem] md:w-[30rem] md:h-[30rem] bg-amber-200/30 rounded-full blur-3xl filter mix-blend-multiply"
        ></motion.div>
      </div>

      <div className="relative max-w-7xl mx-auto pb-12 md:pb-20 z-10">
        {/* Main Title */}
        <motion.div
          variants={fadeInUp(0)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center py-12 md:py-12 lg:py-20 px-4"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl mt-6 font-extrabold text-teal-800 tracking-tight">
            The Story Behind Our Success
          </h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 96 }} // 24 * 4 = 96px
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="h-1 bg-amber-500 mx-auto rounded-full mt-4"
          ></motion.div>
        </motion.div>

        {/* --- 1. Our Vision --- */}
        <motion.div
          variants={fadeInUp(0.2)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="bg-teal-900 text-white rounded-3xl mx-4 md:mx-8 shadow-2xl shadow-teal-900/40 overflow-hidden mb-12 group"
        >
          <div className="flex flex-col lg:flex-row items-stretch min-h-[auto] lg:min-h-[350px]">
            {/* Left Side */}
            <div className="w-full lg:w-1/3 p-8 md:p-10 flex flex-col items-center justify-center bg-teal-800 relative overflow-hidden">
              {/* Subtle background pattern for visual interest */}
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white to-transparent scale-150 pointer-events-none"></div>

              <motion.div variants={iconPop}>
                <Target className="w-20 h-20 md:w-24 md:h-24 text-amber-400 opacity-90 relative z-10" />
              </motion.div>
              <h3 className="text-2xl md:text-3xl font-bold uppercase tracking-widest text-white mt-4 relative z-10">
                Our Vision
              </h3>
              <div className="w-16 h-1 bg-amber-400 mt-2 relative z-10"></div>
            </div>

            {/* Right Side */}
            <div className="w-full lg:w-2/3 p-8 md:p-12 flex items-center">
              <p className="text-base md:text-lg lg:text-xl font-light leading-relaxed text-teal-100 text-center lg:text-left">
                To become a leading hub for technological innovation and
                entrepreneurship that contributes to regional development, and
                national and international progress. The aim of the E-Club is to
                ignite the entrepreneurial spirit and interests in the students
                while providing assistance to members in building their startup.
              </p>
            </div>
          </div>
        </motion.div>

        {/* --- 2. Our Mission --- */}
        <motion.div
          variants={fadeInUp(0.3)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="bg-white text-teal-900 rounded-3xl mx-4 md:mx-8 shadow-xl border-t-8 border-amber-500 overflow-hidden mb-12"
        >
          <div className="flex flex-col lg:flex-row-reverse items-stretch min-h-[auto] lg:min-h-[350px]">
            {/* Right Side (Icon) */}
            <div className="w-full lg:w-1/3 p-8 md:p-10 flex flex-col items-center justify-center bg-slate-100 relative overflow-hidden">
              <motion.div variants={iconPop}>
                <Flag className="w-20 h-20 md:w-24 md:h-24 text-teal-600 opacity-90" />
              </motion.div>
              <h3 className="text-2xl md:text-3xl font-bold uppercase tracking-widest text-teal-900 mt-4">
                Our Mission
              </h3>
              <div className="w-16 h-1 bg-teal-600 mt-2"></div>
            </div>

            {/* Left Side (Text & Staggered List) */}
            <div className="w-full lg:w-2/3 p-8 md:p-12 flex items-center bg-white">
              <div className="text-base md:text-lg lg:text-xl font-light leading-relaxed text-slate-700 space-y-6 w-full">
                <p className="text-center lg:text-left">
                  To achieve our vision by focusing on key areas that support
                  our entrepreneurial community:
                </p>
                {/* Staggered List */}
                <motion.ul
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="list-none pl-0 lg:pl-2 space-y-4 font-medium"
                >
                  <motion.li variants={staggerItem} className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-amber-500 rounded-full mt-2.5 mr-3 flex-shrink-0"></span>
                    <span>Support early-stage startups with mentoring, technical guidance, and funding.</span>
                  </motion.li>
                  <motion.li variants={staggerItem} className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-amber-500 rounded-full mt-2.5 mr-3 flex-shrink-0"></span>
                    <span>Build industry-academia linkages and foster entrepreneurial thinking.</span>
                  </motion.li>
                  <motion.li variants={staggerItem} className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-amber-500 rounded-full mt-2.5 mr-3 flex-shrink-0"></span>
                    <span>Enable inclusive development by supporting socially relevant innovations.</span>
                  </motion.li>
                </motion.ul>
              </div>
            </div>
          </div>
        </motion.div>

        {/* --- 3. NEO Section --- */}
        <motion.div
          variants={fadeInUp(0.4)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mx-4 md:mx-8 mb-20"
        >
          <motion.div
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.3 }}
            className="bg-gradient-to-r from-amber-500 to-orange-600 rounded-3xl p-1 shadow-2xl shadow-orange-500/20"
          >
            <div className="bg-white rounded-[20px] p-6 md:p-12 backdrop-blur-sm bg-white/95">
              <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8 text-center md:text-left">
                <motion.div
                  variants={iconPop}
                  className="flex-shrink-0 bg-orange-50 p-6 rounded-full shadow-inner"
                >
                  <Rocket className="w-12 h-12 md:w-16 md:h-16 text-orange-600" />
                </motion.div>
                <div>
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-slate-800 mb-2 tracking-tight">
                    NEO
                  </h3>
                  <p className="text-sm font-bold text-orange-600 uppercase tracking-wide mb-4">
                    Nurturing Emerging Opportunities
                  </p>
                  <p className="text-base md:text-lg text-slate-600 leading-relaxed">
                    We provide a launch pad for young entrepreneurs to ideate,
                    prototype, and build viable business models across key
                    domains including{" "}
                    <span className="font-bold text-slate-800 bg-orange-50 px-1 rounded inline-block">
                      AI/ML, IoT, robotics, agri-tech, sustainability, and
                      social impact.
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* --- 4. Core Values Section --- */}
        <div className="bg-white/80 backdrop-blur-md py-16 px-4 md:px-8 rounded-t-[3rem] shadow-[0_-10px_30px_-15px_rgba(0,0,0,0.1)] border-t border-white/50">
          <motion.div
            variants={fadeInUp(0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center"
          >
            <h3 className="text-3xl md:text-4xl font-extrabold text-teal-800 mb-4 tracking-tight">
              Our Core Values
            </h3>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="h-1 bg-amber-500 mx-auto rounded-full mb-12"
            ></motion.div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {coreValues.map((val, i) => (
              <motion.div
                key={i}
                variants={fadeInUp(0.15 * i)}
                initial="hidden"
                whileInView="visible"
                whileHover={{ y: -12, scale: 1.03, backgroundColor: "#fff" }}
                viewport={{ once: true, amount: 0.2 }}
                className="bg-slate-50/80 rounded-2xl p-6 md:p-8 text-center shadow-sm hover:shadow-2xl transition-all duration-300 border-b-4 border-amber-500 group"
              >
                <div className="w-14 h-14 md:w-16 md:h-16 mb-6 text-teal-600 mx-auto flex justify-center p-3 bg-teal-50 rounded-xl group-hover:text-amber-500 group-hover:bg-amber-50 transition-colors duration-300">
                  {val.icon}
                </div>
                <h4 className="text-lg md:text-xl font-bold text-teal-800 mb-3">
                  {val.title}
                </h4>
                <p className="text-slate-600 text-sm md:text-[15px] leading-relaxed font-medium">
                  {val.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;