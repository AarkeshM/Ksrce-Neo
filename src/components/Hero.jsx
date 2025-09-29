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

  const highlights = [
    { title: "Startup Onboarded", value: "6+" },
    { title: "Student Innovators", value: "20+" },
    { title: "Idea Validated", value: "50+" },
    { title: "POCs Developed", value: "10+" },
  ];

  const programs = [
    {
      title: "Pre-Incubation Program",
      desc: "Nurturing early-stage ideas through mentoring, validation, and exposure to the startup ecosystem.",
    },
    {
      title: "Incubation Program",
      desc: "Supporting startups with infrastructure, expert guidance, and market access to accelerate their growth.",
    },
    {
      title: "Mentorship Program",
      desc: "Connect with experienced mentors who can help you build and scale your startup successfully.",
    },
  ];

  const faqs = [
    {
      question: "Who can apply for incubation?",
      answer: [
        "KSRCE NEO Incubation Centre welcomes:",
        "•  Students (from any department with innovative ideas)",
        "•  Faculty members with research-driven or product-based concepts",
        "•  Startups & Entrepreneurs from inside and outside KSRCE",
        "•  Alumni with a strong vision to build impactful ventures",
        "•  Research teams seeking to commercialize innovations",
      ],
    },
    {
      question: "What facilities are available?",
      answer: [
        "We provide a vibrant, innovation-driven ecosystem including",
        "•  Co-working space with high-speed internet",
        "•  Prototype development lab with tools & equipment",
        "•  Mentoring & guidance from industry experts and academicians",
        "•  IPR & patent filing support",
        "•  Workshops & bootcamps on business, tech, and soft skills",
        "•  Networking opportunities with investors, entrepreneurs, and mentors",
        "•  Product testing & validation support",
        "•  Access to funding and grants",
      ],
    },
    {
      question: "How do we access funding support?",
      answer: [
        "KSRCE NEO Incubation Centre helps startups in multiple ways:",
        "•  Connect with angel investors, venture capitalists, and government funding agencies",
        "•  Guidance to apply for grants and schemes (MSME, DST, EDII, Start-up India, etc.)",
        "•  Pitching opportunities at demo days and startup events",
        "•  Mentorship on preparing business plans, financial projections, and investor pitches",
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
      transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
    }),
  };

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative w-full min-h-screen bg-gradient-to-br from-sky-50 via-white to-sky-100 text-center overflow-hidden">
      <div className="relative z-20 mt-24 flex flex-col justify-center items-center min-h-screen px-4">
        {/* Hero Text */}
        <div className="w-full max-w-4xl mx-auto">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-blue-950 leading-tight drop-shadow">
            'WELCOME TO KSRCE NEO – NURTURING EMERGING OPPORTUNITIES'
          </h2>

          <p className="mt-4 sm:text-lg md:text-xl text-blue-800 font-medium">
            KSRCE NEO is the registered incubation centre as section 8 company
            of K.S.R. College of Engineering, Tamil Nadu. We foster innovation,
            entrepreneurship, and startup growth by empowering students,
            faculty, and aspiring entrepreneurs to transform their ideas into
            impactful ventures through mentoring, infrastructure, and funding
            support.
          </p>

          <h2 className="text:xl sm:text-2xl md:text-3xl font-bold text-[#191970] leading-tight drop-shadow mt-6 mb-5">
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

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="mt-6 bg-white text-blue-900 px-6 py-2 rounded-full hover:bg-blue-100 shadow-md border border-blue-200"
          >
            <Link to="/facilities" className="flex items-center gap-2 text-blue-900">
              <span>Explore Facilities</span>
              <span>➟</span>
            </Link>
          </motion.button>
        </div>

        {/* Image Carousel */}
        <div
          className="w-full max-w-[650px] sm:max-w-[600px] lg:max-w-[900px] aspect-video rounded-xl overflow-hidden shadow-2xl flex items-center justify-center relative mt-8"
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
              className="w-full h-full object-cover rounded-xl"
              style={{
                backfaceVisibility: "hidden",
                boxShadow: "0 10px 30px rgba(0,0,0,.25)",
              }}
            />
          </AnimatePresence>
        </div>

        {/* Highlights */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 mt-12">
          {highlights.map((item, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="bg-gradient-to-br from-sky-50 to-white text-blue-900 
                         p-6 rounded-xl shadow-lg border border-blue-200/60 
                         hover:scale-105 hover:shadow-xl transition-all"
            >
              <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
              <p className="text-2xl font-extrabold text-[#0a2351]">{item.value}</p>
            </motion.div>
          ))}
        </div>

        {/* Programs */}
        <div className="max-w-6xl mx-auto text-center mt-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-[#191970] ">
            Our Programs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {programs.map((prog, i) => (
              <motion.div
                key={i}
                className="bg-gradient-to-br from-white via-sky-50 to-white
                           text-blue-900 p-6 rounded-xl border border-blue-200/60
                           shadow-md hover:shadow-lg hover:scale-[1.03] transition-all"
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                custom={i}
              >
                <h3 className="font-semibold text-lg mb-3">{prog.title}</h3>
                <p className="text-sm text-blue-700">{prog.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="flex flex-col items-center gap-6 mt-16 mb-8 px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-[#191970] mb-6 text-center">
            FAQ
          </h2>
          <div className="space-y-4 w-full max-w-[600px] mx-auto">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                className="bg-gradient-to-br from-white to-sky-50/70
                           border border-blue-200/70 shadow-md 
                           hover:shadow-lg hover:border-blue-400 
                           transition rounded-2xl"
              >
                <button
                  onClick={() => toggleFAQ(i)}
                  className="w-full flex justify-between items-right text-left px-5 py-4 text-blue-900 font-medium focus:outline-none"
                >
                  <span className="text-center md:text-lg">{faq.question}</span>
                  <motion.span
                    initial={{ rotate: 0 }}
                    animate={{ rotate: openIndex === i ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-blue-600 text-xl"
                  >
                    {openIndex === i ? "➖" : "➕"}
                  </motion.span>
                </button>

                <AnimatePresence>
                  {openIndex === i && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-5 pb-4 text-blue-700 text-left text-sm w-full space-y-1"
                    >
                      {Array.isArray(faq.answer)
                        ? faq.answer.map((line, idx) => <p key={idx}>{line}</p>)
                        : <p>{faq.answer}</p>}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
