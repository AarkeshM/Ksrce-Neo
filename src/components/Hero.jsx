import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import heroMockup1 from "../assets/hero.jpg";
import heroMockup2 from "../assets/hero2.jpg";
import '../index.css';
import { Link } from "react-router-dom";

const images = [heroMockup1, heroMockup2];

const Hero = () => {
  const [current, setCurrent] = useState(0);
  const [openIndex, setOpenIndex] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const highlights = [
    { title: "Startups Incubated", value: "50+" },
    { title: "Funding Raised", value: "$10M+" },
    { title: "Jobs Created", value: "200+" },
  ];

  const programs = [
    {
      title: "Incubation Program",
      desc: "A comprehensive program for early-stage startups, providing access to resources, mentorship, and funding opportunities.",
    },
    {
      title: "Acceleration Program",
      desc: "An intensive program designed to accelerate the growth of startups through workshops, networking, and investor connections.",
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
        "   KSRCE NEO Incubation Centre welcomes:",
        "•	Students (from any department with innovative ideas)",
        "•	Faculty members with research-driven or product-based concepts",
        "•	Startups & Entrepreneurs from inside and outside KSRCE",
        "•	Alumni with a strong vision to build impactful ventures",
        "•	Research teams seeking to commercialize innovations",
        "•	If you have a solution-oriented idea, we're here to support your journey from concept to company!"
      ]
    },
    {
      question: "What facilities are available?",
      answer: [
        "We provide a vibrant, innovation-driven ecosystem including",
        "•	Co-working space with high-speed internet",
        "•	Prototype development lab with tools & equipment",
        "•	Mentoring & guidance from industry experts and academicians",
        "•	IPR & patent filing support",
        "•	Workshops & bootcamps on business, tech, and soft skills",
        "•	Networking opportunities with investors, entrepreneurs, and mentors",
        "•	Product testing & validation support",
        "•	Access to funding and grants"
      ]
    },
    {
      question: "How do we access funding support?",
      answer: [
        "•	KSRCE NEO Incubation Centre helps startups in multiple ways:",
        "•	Connect with angel investors, venture capitalists, and government funding agencies",
        "•	Guidance to apply for grants and schemes (MSME, DST, EDII, Start-up India, etc.)",
        "•	Pitching opportunities at demo days and startup events",
        "•	Mentorship on preparing business plans, financial projections, and investor pitches",
        "•	We walk with you at every step of your funding journey."
      ]
    },
    {
      question: "Is the space free for students?",
      answer: [
        "Yes!",
        "At KSRCE NEO, incubation space is offered free of cost for students with eligible and impactful ideas.",
        "We believe in nurturing student innovators by removing financial barriers and empowering them to ideate, build, and launch with full institutional support."
      ]
    }
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
    <section className="relative w-full min-h-screen bg-gradient-to-br from-sky-700 via-sky-600 to-sky-700 text-center overflow-hidden">
      <div className="relative z-20 mt-20 flex flex-col justify-center items-center min-h-screen px-4">
        {/* Hero Text */}
        <div className="w-full max-w-4xl mx-auto">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-white leading-tight drop-shadow">
            'WELCOME TO KSRCE NEO – NURTURING EMERGING OPPORTUNITIES'
          </h2>

          <p className="mt-4 text-bold sm:text-lg md:text-xl text-blue-200">
            KSRCE NEO is the registered incubation centre as section 8 company
            of K.S.R. College of Engineering, Tamil Nadu. We foster innovation,
            entrepreneurship, and startup growth by empowering students,
            faculty, and aspiring entrepreneurs to transform their ideas into
            impactful ventures through mentoring, infrastructure, and funding
            support.
          </p>

          <h2 className="text:xl sm:text-2xl md:text-3xl font-bold text-white leading-tight drop-shadow mt-6 mb-5">
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
            className="mt-6 bg-white text-blue-900 px-6 py-2 rounded-full hover:bg-blue-100 shadow-md"
          >
            <Link
              to="/facilities"
              className="flex items-center gap-2 text-blue-900"
            >
              <span>Explore Facilities</span>
              <span>➟</span>
            </Link>
          </motion.button>
        </div>

        {/* Slideshow */}
        <div className="mt-10 flex justify-center">
          <div className="w-full max-w-[650px] sm:max-w-[600px] lg:max-w-[900px] aspect-video rounded-xl overflow-hidden shadow-2xl">
            <AnimatePresence mode="wait">
              <motion.img
                key={current}
                src={images[current]}
                alt={`Hero Mockup ${current + 1}`}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 1 }}
                className="w-full h-full object-cover"
              />
            </AnimatePresence>
          </div>
        </div>

        {/* Highlights */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {highlights.map((item, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="bg-white text-blue-800 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform"
            >
              <h3 className="font-semibold text-xl mb-3">{item.title}</h3>
              <p className="text-2xl font-extrabold text-blue-950">
                {item.value}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Programs */}
        <div className="max-w-6xl mx-auto text-center mt-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-white">
            Our Programs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {programs.map((prog, i) => (
              <motion.div
                key={i}
                className="bg-white text-blue-800 p-6 rounded-lg shadow-md hover:shadow-lg hover:scale-[1.03] transition-all"
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                custom={i}
              >
                <h3 className="font-semibold text-xl mb-3">{prog.title}</h3>
                <p className="text-sm text-blue-700">{prog.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>


        <div className="flex flex-col items-center gap-6 mt-16 mb-8 px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">
            FAQ
          </h2>
          <div className="space-y-4 w-full max-w-[600px] mx-auto">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                className="shadow-md bg-white/90 border border-blue-200
        transition hover:shadow-lg hover:border-blue-400
        w-full sm:min-w-[600px] sm:max-w-[600px] mx-auto rounded-[20px]"

              >
                <button
                  onClick={() => toggleFAQ(i)}
                  className="w-full flex justify-between items-right text-left px-5 py-4 text-blue-800 font-medium focus:outline-none"
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
                      {
                        Array.isArray(faq.answer)
                          ? faq.answer.map((line, idx) => (
                            <p key={idx}>{line}</p>
                          ))
                          : <p>{faq.answer}</p>
                      }
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
