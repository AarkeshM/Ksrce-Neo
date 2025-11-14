import React from "react";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";

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

export default function SucessStories() {
  return (
    <div className="bg-slate-50 mt-16 pt-20 pb-16 min-h-screen text-blue-950">
      {/* Header */}
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl sm:text-5xl font-extrabold text-blue-950 mb-4">
          Our Startups
        </h1>
        <div className="w-24 h-1 bg-amber-500 mx-auto rounded-full"></div>
      </motion.div>

      <section className="px-4 sm:px-6 md:px-12 mb-20">
        <motion.h2
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-3xl font-bold mb-12 text-center text-blue-950 flex 
                     items-center justify-center gap-3"
        >
          <FaStar className="text-amber-500" /> {/* --- Added Icon --- */}
          Success Stories
        </motion.h2>

        <div className="grid gap-6 sm:gap-8 md:grid-cols-2 max-w-5xl mx-auto">
          {successStories.map((s, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{ y: -8 }} 
              className="group bg-white rounded-xl overflow-hidden shadow-lg 
                         border border-slate-200 transition-all duration-300"
            >

              <div className="overflow-hidden bg-black aspect-video">
                <video
                  src={s.video}
                  controls
                  className="w-full h-full object-contain transition-transform 
                             duration-500 group-hover:scale-105"
                />
              </div>

              {/* Text section */}
              <div className="p-6">
                <h3 className="font-bold text-xl text-blue-950 mb-3">
                  {s.title}
                </h3>
                {/* --- Updated text color --- */}
                <p className="text-sm text-slate-600 leading-relaxed">
                  {s.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}

