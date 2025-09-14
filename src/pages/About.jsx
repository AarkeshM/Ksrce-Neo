import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin } from "react-icons/fa";

import venkatesan from "../photos/venkatesan 1.jpg";
import lakshmi from "../photos/lakshmi.jpg";
import murugesan from "../photos/murugesan.jpg";
import pavithran from "../photos/pavithran.jpg";
import harshini from "../photos/harshini.jpg";

const teamMembers = [
  {
    name: "Dr. K. Lakshmi",
    role: "Director – Innovation and Incubation",
    photo: lakshmi,
    linkedin:
      "https://www.linkedin.com/in/dr-k-lakshmi-a873b476?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
  {
    name: "Dr. A. Murugesan",
    role: "Lead – Innovation and Incubation",
    photo: murugesan,
    linkedin:
      "https://www.linkedin.com/in/murugesan-arumugam?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
  {
    name: "J. Harshini",
    role: "Incubation Manager, KSRCE NEO",
    photo: harshini,
    linkedin:
      "https://www.linkedin.com/in/harshini-jayasankaran-74474813b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
  {
    name: "Pavithran G",
    role: "Incubation Associate, KSRCE NEO",
    photo: pavithran,
    linkedin:
      "https://www.linkedin.com/in/pavithran-g-a3a333231?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
];

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
    <section id="about" className="py-16 px-6 mt-2 bg-white text-sky-900">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.h2
          variants={fadeInUp(0)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-4xl font-bold mb-12 text-center text-sky-900"
        >
          About Us
        </motion.h2>

        {/* Vision & Mission */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
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
              viewport={{ once: true }}
              className="bg-white rounded-lg p-6 shadow hover:shadow-lg hover:scale-105 transition"
            >
              <h3 className="text-2xl font-semibold text-sky-800 mb-2">
                {item.title}
              </h3>
              <p className="text-sky-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* What is KSRCE NEO */}
        <motion.h3
          variants={fadeInUp(0.3)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-2xl font-semibold mt-6 text-sky-900"
        >
          What is KSRCE NEO?
        </motion.h3>
        <motion.p
          variants={fadeInUp(0.4)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-8 text-sky-700"
        >
          NEO (Nurturing Emerging Opportunities) — We provide a launch pad for
          young entrepreneurs to ideate, prototype, and build viable business
          models across key domains including AI/ML, IoT, robotics, agri-tech,
          sustainability, and social impact.
        </motion.p>

        {/* Focus Sectors */}
        <motion.h3
          variants={fadeInUp(0.5)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-2xl font-semibold mt-6 text-sky-900"
        >
          Focus Sectors
        </motion.h3>
        <motion.p
          variants={fadeInUp(0.6)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-12 text-sky-700"
        >
          Artificial Intelligence & Data Science — IoT & Embedded Systems — Green
          Energy & Sustainable Tech — Smart Agriculture & PoultryTech — HealthTech
          & Biomedical Devices — EdTech & Rural Innovation — Social
          Entrepreneurship — Smart Mobility & EVs.
        </motion.p>

        {/* Team Section */}
        <motion.h3
          variants={fadeInUp(0.7)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-3xl font-bold mt-10 text-center text-sky-900"
        >
          Our Team
        </motion.h3>
        <p className="text-center text-sky-600 mt-2 mb-8">
          Meet the brilliant minds at KSRCE NEO
        </p>

        {/* Dean */}
        <div className="flex justify-center mb-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-xl transition w-52 border border-sky-100"
          >
            <img
              src={venkatesan}
              alt="Dr. M. Venkatesan"
              className="w-36 h-36 mx-auto mb-3 object-cover rounded-lg shadow"
            />
            <h4 className="text-lg font-semibold text-sky-800">
              Dr. M. Venkatesan
            </h4>
            <p className="text-sky-600 text-sm">
              Dean, K.S.R. College of Engineering
            </p>
            <a
              href="https://www.linkedin.com/in/dr-venkatesan-muthusamy-30842325"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sky-600 text-xs mt-2 hover:text-sky-800 transition"
            >
              <FaLinkedin /> View LinkedIn
            </a>
          </motion.div>
        </div>

        {/* Team Members Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 place-items-center mb-12">
          {teamMembers.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.5 }}
              className="bg-white rounded-xl shadow-md p-4 text-center hover:shadow-lg transition w-44 border border-sky-100"
            >
              <img
                src={m.photo}
                alt={m.name}
                className="w-40 h-40 mx-auto mb-2 object-cover shadow rounded-lg"
              />
              <h4 className="text-sm font-semibold text-sky-800">{m.name}</h4>
              <p className="text-sky-600 text-xs">{m.role}</p>
              <a
                href={m.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sky-600 text-xs mt-2 hover:text-sky-800 transition"
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
          className="text-2xl font-semibold mt-6 text-sky-900"
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
              className="bg-white rounded-lg p-6 text-center shadow-md hover:shadow-lg hover:scale-105 transition border border-sky-100"
            >
              <div className="text-5xl mb-3">{val.icon}</div>
              <h4 className="text-lg font-semibold text-sky-800">
                {val.title}
              </h4>
              <p className="text-sky-600 mt-2">{val.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
