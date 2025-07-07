import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import heroMockup1 from '../assets/hero.jpg';
import heroMockup2 from '../assets/hero2.jpg';

const images = [heroMockup1, heroMockup2];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const highlights = [
    { title: 'Startups Incubated', value: '50+' },
    { title: 'Funding Raised', value: '$10M+' },
    { title: 'Jobs Created', value: '200+' },
  ];

  const programs = [
    {
      title: 'Incubation Program',
      desc: 'A comprehensive program for early-stage startups, providing access to resources, mentorship, and funding opportunities.',
    },
    {
      title: 'Acceleration Program',
      desc: 'An intensive program designed to accelerate the growth of startups through workshops, networking, and investor connections.',
    },
    {
      title: 'Mentorship Program',
      desc: 'Connect with experienced mentors who can help you build and scale your startup successfully.',
    },
  ];

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { delay: i * 0.2, duration: 0.6, ease: 'easeOut' },
    }),
  };

  return (

   <section className="relative w-full min-h-screen bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 text-center overflow-hidden">

      {/* Optional dark overlay */}
      {/* <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="absolute inset-0 bg-black/30 z-10"
      /> */}

      {/* MAIN CONTENT */}
      <div className="relative z-20 mt-20 flex flex-col justify-center items-center min-h-screen px-4">
        {/* Hero Text */}
        <div className="w-full max-w-4xl mx-auto">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white leading-tight drop-shadow">
            'Welcome to KSRCE NEO – Nurturing Emerging Opportunities'
             
          </h2>

          <p className="mt-4 text-base sm:text-lg md:text-xl text-blue-200">
            KSRCE NEO is the registered incubation centre as section 8 company of K.S.R. College of Engineering, Tamil Nadu.
            We foster innovation, entrepreneurship, and startup growth by empowering students, faculty, and aspiring entrepreneurs to transform their ideas into impactful ventures through mentoring, infrastructure, and funding support.
          </p>

          <h2 className="text:xl sm:text-2xl md:text-3xl font-bold text-white leading-tight drop-shadow mt-6 mb-5">
            <Typewriter
              words={['“Where Ideas Hatch and Startups Launch.”',
              '“Innovation Inspires Progress.”',
              '“Vision Turns Startups Into Change.”']}
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
            Explore Programs
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
              <p className="text-2xl font-extrabold text-blue-950">{item.value}</p>
            </motion.div>
          ))}
        </div>

        {/* Programs */}
        <div className="max-w-6xl mx-auto text-center mt-16 mb-8">
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
      </div>
    </section>

  );
};

export default Hero;
