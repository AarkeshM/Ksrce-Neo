import React from "react";
import { motion } from "framer-motion";

const coreValues = [
  {
    title: "Innovation",
    desc: "We champion creativity and encourage the exploration of novel ideas.",
    icon: "💡",
  },
  {
    title: "Collaboration",
    desc: "We believe in the power of teamwork and shared knowledge.",
    icon: "🤝",
  },
  {
    title: "Integrity",
    desc: "We uphold the highest ethical standards in all our endeavors.",
    icon: "🧭",
  },
  {
    title: "Impact",
    desc: "We are committed to creating meaningful and lasting contributions to society.",
    icon: "🌟",
  },
];

// fade & tilt
const fadeInUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 30, rotate: -2 },
  visible: {
    opacity: 1,
    y: 0,
    rotate: 0,
    transition: { delay, duration: 0.7, ease: "easeOut" },
  },
});

const AboutUs = () => {
  return (
    <section
      id="about"
      className="py-16 px-6 bg-gradient-to-br from-blue-950 via-blue-900 to-blue-950 text-white"
    >
      <div className="max-w-5xl mx-auto">
        <motion.h2
          variants={fadeInUp(0)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-4xl font-bold mb-8 text-center drop-shadow-lg"
        >
          About Us
        </motion.h2>

        {/* Vision & Mission Side by Side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <motion.div
            variants={fadeInUp(0.2)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-sm rounded-lg p-6 shadow-lg hover:shadow-xl hover:scale-105 hover:-rotate-1 transform transition"
          >
            <h3 className="text-2xl font-semibold text-blue-200 mb-2">
              Our Vision
            </h3>
            <p className="text-blue-100">
              To become a leading hub for technological innovation and
              entrepreneurship that contributes to regional development, and
              national and international progress.
            </p>
          </motion.div>

          <motion.div
            variants={fadeInUp(0.3)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-sm rounded-lg p-6 shadow-lg hover:shadow-xl hover:scale-105 hover:rotate-1 transform transition"
          >
            <h3 className="text-2xl font-semibold text-blue-200 mb-2">
              Our Mission
            </h3>
            <p className="text-blue-100">
              Support early-stage startups with mentoring, technical guidance,
              and funding. Build industry-academia linkages and foster
              entrepreneurial thinking. Enable inclusive development by
              supporting socially relevant innovations.
            </p>
          </motion.div>
        </div>

        <motion.h3
          variants={fadeInUp(0.4)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-2xl font-semibold mt-6 text-blue-200"
        >
          What is KSRCE NEO?
        </motion.h3>

        <motion.p
          variants={fadeInUp(0.5)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-8 text-blue-100"
        >
          NEO = Nurturing Emerging Opportunities — We provide a launch pad for
          young entrepreneurs to ideate, prototype, and build viable business
          models across key domains including AI/ML, IoT, robotics, agri-tech,
          sustainability, and social impact.
        </motion.p>

        <motion.h3
          variants={fadeInUp(0.6)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-2xl font-semibold mt-6 text-blue-200"
        >
          Focus Sectors
        </motion.h3>

        <motion.p
          variants={fadeInUp(0.7)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-8 text-blue-100"
        >
          Artificial Intelligence & Data Science — IoT & Embedded Systems —
          Green Energy & Sustainable Tech — Smart Agriculture & PoultryTech —
          HealthTech & Biomedical Devices — EdTech & Rural Innovation — Social
          Entrepreneurship — Smart Mobility & EVs.
        </motion.p>

        <motion.h3
          variants={fadeInUp(0.8)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-2xl font-semibold mt-6 text-blue-200"
        >
          Core Values
        </motion.h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          {coreValues.map((val, i) => (
            <motion.div
              key={i}
              variants={fadeInUp(0.1 * i)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center shadow-lg hover:shadow-xl hover:scale-110 hover:rotate-1 hover:border hover:border-blue-300 transform transition"
            >
              <div className="text-5xl mb-3">{val.icon}</div>
              <h4 className="text-lg font-semibold text-blue-100">
                {val.title}
              </h4>
              <p className="text-blue-200 mt-2">{val.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
