import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { Link } from "react-router-dom";
import heroMockup1 from "../assets/hero.jpg";
import heroMockup2 from "../assets/hero1.jpg";
import heroMockup3 from "../assets/hero2.jpg";
import heroMockup4 from "../assets/hero3.jpg";
import heroMockup5 from "../assets/hero4.jpg";
import "../index.css";

// --- I've added react-icons for the new design ---
import {
  FaRocket,
  FaUserGraduate,
  FaLightbulb,
  FaTools,
  FaSeedling,
  FaBuilding,
  FaHandsHelping,
  FaChevronDown,
  FaArrowRight,
} from "react-icons/fa";

const images = [
  heroMockup1,
  heroMockup2,
  heroMockup3,
  heroMockup4,
  heroMockup5,
];

const Hero = () => {
  const [current, setCurrent] = useState(0);
  const [openIndex, setOpenIndex] = useState(null);
  const [direction, setDirection] = useState(1);
  const timer = useRef();

  useEffect(() => {
    timer.current = setInterval(() => {
      setDirection(1);
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer.current);
  }, []);

  // --- Added icons to the data ---
  const highlights = [
    { title: "Startup Onboarded", value: "6+", icon: <FaRocket size={30} /> },
    {
      title: "Student Innovators",
      value: "20+",
      icon: <FaUserGraduate size={30} />,
    },
    { title: "Idea Validated", value: "50+", icon: <FaLightbulb size={30} /> },
    { title: "POCs Developed", value: "10+", icon: <FaTools size={30} /> },
  ];

  const programs = [
    {
      title: "Pre-Incubation Program",
      desc: "Nurturing early-stage ideas through mentoring, validation, and exposure to the startup ecosystem.",
      icon: <FaSeedling className="text-4xl text-blue-900" />,
    },
    {
      title: "Incubation Program",
      desc: "Supporting startups with infrastructure, expert guidance, and market access to accelerate their growth.",
      icon: <FaBuilding className="text-4xl text-blue-900" />,
    },
    {
      title: "Mentorship Program",
      desc: "Connect with experienced mentors who can help you build and scale your startup successfully.",
      icon: <FaHandsHelping className="text-4xl text-blue-900" />,
    },
  ];

  // (No changes to FAQ data, but the component will render it differently)
  const faqs = [
    {
      question: "Who can apply for incubation?",
      answer: [
        "KSRCE NEO Incubation Centre welcomes:",
        "•  Students (from any department with innovative ideas)",
        "•  Faculty members with research-driven or product-based concepts",
        "•  Startups & Entrepreneurs from inside and outside KSRCE",
        "•  Alumni with a strong vision to build impactful ventures",
        "•  Research teams seeking to commercialize innovations",
      ],
    },
    {
      question: "What facilities are available?",
      answer: [
        "We provide a vibrant, innovation-driven ecosystem including",
        "•  Co-working space with high-speed internet",
        "•  Prototype development lab with tools & equipment",
        "•  Mentoring & guidance from industry experts and academicians",
        "•  IPR & patent filing support",
        "•  Workshops & bootcamps on business, tech, and soft skills",
        "•  Networking opportunities with investors, entrepreneurs, and mentors",
        "•  Product testing & validation support",
        "•  Access to funding and grants",
      ],
    },
    {
      question: "How do we access funding support?",
      answer: [
        "KSRCE NEO Incubation Centre helps startups in multiple ways:",
        "• 	Connect with angel investors, venture capitalists, and government funding agencies",
        "• 	Guidance to apply for grants and schemes (MSME, DST, EDII, Start-up India, etc.)",
        "• 	Pitching opportunities at demo days and startup events",
        "• 	Mentorship on preparing business plans, financial projections, and investor pitches",
      ],
    },
    {
      question: "Is the space free for students?",
      answer: [
        "Yes!",
        "At KSRCE NEO, incubation space is offered free of cost for students with eligible and impactful ideas.",
        "We believe in nurturing student innovators by removing financial barriers and empowering them to ideate, build, and launch with full institutional support.",
      ],
    },
  ];

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { delay: i * 0.15, duration: 0.5, ease: "easeOut" },
    }),
  };

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    // --- Changed background to a clean "light white" ---
    <section className="relative w-full min-h-screen bg-slate-50 text-center overflow-hidden">
      <div className="relative z-10 pt-24 pb-16 flex flex-col justify-center items-center min-h-screen px-4">
        {/* Hero Text */}
        <div className="w-full max-w-4xl mx-auto">
          {/* --- Updated typography for contrast and impact --- */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-blue-950 leading-tight drop-shadow-sm">
            'WELCOME TO KSRCE NEO – NURTURING EMERGING OPPORTUNITIES'
          </h2>

          <p className="mt-4 sm:text-lg md:text-xl text-slate-700 max-w-3xl mx-auto">
            KSRCE NEO is the registered incubation centre as section 8 company of
            K.S.R. College of Engineering, Tamil Nadu. We foster innovation,
            entrepreneurship, and startup growth by empowering students,
            faculty, and aspiring entrepreneurs to transform their ideas into
            impactful ventures.
          </p>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-900 leading-tight drop-shadow-sm mt-8 mb-8">
            <Typewriter
              words={[
                "“Where Ideas Hatch and Startups Launch.”",
                "“Innovation Inspires Progress.”",
                "“Vision Turns Startups Into Change.”",
              ]}
              loop
              cursor
              cursorStyle="|"
              typeSpeed={80}
              deleteSpeed={60}
              delaySpeed={2000}
            />
          </h2>

          {/* --- Updated button with "dark blue" bg and new icon --- */}
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 10px 25px rgba(25, 25, 112, 0.3)",
            }}
            whileTap={{ scale: 0.95 }}
            className="mt-6 bg-blue-900 text-white px-8 py-3 rounded-full shadow-lg transition-all duration-300 font-semibold text-lg"
          >
            <Link
              to="/facilities"
              className="flex items-center gap-3"
            >
              <span>Explore Facilities</span>
              <FaArrowRight />
            </Link>
          </motion.button>
        </div>

        {/* --- Image Carousel: Added "gold" border and "dark blue" matte --- */}
        <div
          className="w-full max-w-4xl aspect-video rounded-2xl overflow-hidden shadow-2xl flex items-center justify-center relative mt-12 
                     bg-blue-950 p-2 border-4 border-amber-400"
          style={{ perspective: 1200 }}
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.img
              key={current}
              src={images[current]}
              initial={{
                opacity: 0,
                rotateY: direction === 1 ? 90 : -90,
                rotateX: 20 * direction,
                scale: 0.8,
                z: -100,
              }}
              animate={{
                opacity: 1,
                rotateY: 0,
                rotateX: 0,
                scale: 1,
                z: 0,
              }}
              exit={{
                opacity: 0,
                rotateY: direction === 1 ? -90 : 90,
                rotateX: -20 * direction,
                scale: 0.8,
                z: -100,
              }}
              transition={{
                duration: 0.8,
                ease: [0.77, 0.2, 0.15, 1.01],
              }}
              // --- Rounded the image to fit inside the new border/matte ---
              className="w-full h-full object-cover rounded-lg"
              style={{
                backfaceVisibility: "hidden",
                boxShadow: "0 10px 30px rgba(0,0,0,.25)",
              }}
            />
          </AnimatePresence>
        </div>
      </div>

      {/* --- Section for rest of the content --- */}
      <div className="relative z-10 bg-slate-100/70 py-20 px-4">
        {/* --- Highlights: Redesigned with icons and "gold" hover effect --- */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
          {highlights.map((item, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{ y: -8, scale: 1.03 }}
              className="bg-white text-center rounded-xl shadow-lg overflow-hidden 
                         border border-slate-200 transition-all duration-300 group"
            >
              {/* --- Icon section uses blue bg, transitions to gold on hover --- */}
              <div
                className="flex justify-center items-center p-6 bg-blue-50 
                            text-blue-900 transition-all duration-300 
                            group-hover:bg-amber-400 group-hover:text-white"
              >
                {item.icon}
              </div>
              <div className="p-6">
                <p className="text-4xl font-extrabold text-blue-900">
                  {item.value}
                </p>
                <h3 className="font-semibold text-lg text-slate-700 mt-2">
                  {item.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

        {/* --- Programs: Redesigned with "blue" and "gold" border theme --- */}
        <div className="max-w-6xl mx-auto text-center mt-24">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-blue-950">
            Our Programs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {programs.map((prog, i) => (
              <motion.div
                key={i}
                className="bg-white text-blue-950 p-8 rounded-xl
                           shadow-lg hover:shadow-2xl transition-all duration-300 
                           border-b-8 border-blue-900 hover:border-amber-500" // --- Border theme ---
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                whileHover={{ y: -8 }}
                viewport={{ once: true, amount: 0.2 }}
                custom={i}
              >
                <div className="flex justify-center mb-5">{prog.icon}</div>
                <h3 className="font-bold text-xl mb-3">{prog.title}</h3>
                <p className="text-sm text-slate-600">{prog.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* --- FAQ Section: Cleaner design with new icons --- */}
      <div className="flex flex-col items-center gap-6 py-20 px-4 bg-slate-50">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mb-6 text-center">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4 w-full max-w-3xl mx-auto">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              className="bg-white border border-slate-200 shadow-sm 
                         hover:shadow-lg transition-all duration-300 rounded-xl overflow-hidden"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              custom={i}
            >
              <button
                onClick={() => toggleFAQ(i)}
                className="w-full flex justify-between items-center text-left px-6 py-5 text-blue-950 font-semibold focus:outline-none"
              >
                <span className="text-lg">{faq.question}</span>
                {/* --- Replaced +/- with animated chevron icon --- */}
                <motion.div
                  initial={false}
                  animate={{ rotate: openIndex === i ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-blue-900"
                >
                  <FaChevronDown size={18} />
                </motion.div>
              </button>

              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="px-6 pb-6 text-slate-700 text-left text-sm w-full"
                  >
                    {/* --- Added a border-top for a cleaner reveal --- */}
                    <div className="border-t border-slate-200 pt-4 space-y-2">
                      {Array.isArray(faq.answer)
                        ? faq.answer.map((line, idx) => (
                            <p key={idx} className="flex">
                              {/* --- Replaced • with a "gold" accent icon --- */}
                              {line.trim().startsWith("•") ? (
                                <span className="mr-2 text-amber-500 pt-1">
                                  <FaRocket size={10} />
                                </span>
                              ) : null}
                              <span className="flex-1">
                                {line.replace("•", "").trim()}
                              </span>
                            </p>
                          ))
                        : <p>{faq.answer}</p>}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;