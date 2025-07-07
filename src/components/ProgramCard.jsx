import React from 'react';
import { motion } from 'framer-motion';
import Particles from './Particles';

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

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { delay: i * 0.2, duration: 0.6, ease: 'easeOut' },
  }),
};

const ProgramCard = () => {
  return (
    <section
      id="programs"
      className="relative py-16 px-6 mb-3 min-h-screen overflow-hidden"
    >
      {/* FULL BACKGROUND PARTICLES */}
      <Particles
        particleCount={300}
        particleSpread={10}
        speed={0.2}
        particleColors={["#ffffff", "#00ffff", "#87ceeb"]} 
        alphaParticles={true}
        moveParticlesOnHover={true}
        particleHoverFactor={2}
        className="absolute inset-0 w-full h-full z-0"
      />

      {/* CONTENT */}
      <div className="relative z-20 max-w-6xl mx-auto text-center text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-10">
          Our Programs
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {programs.map((prog, i) => (
            <motion.div
              key={i}
              className="bg-white text-blue-800 p-6 rounded-lg shadow-md hover:shadow-lg hover:scale-[1.03] transition-all"
              variants={cardVariants}
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
    </section>
  );
};

export default ProgramCard;
